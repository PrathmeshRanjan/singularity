import { ethers } from "ethers";
import { Client } from "pg";

export interface SubscriptionPlan {
    subscriptionId: string;
    subscriber: string;
    payee: string;
    tokenAddress: string;
    chainId: number;
    amount: string;
    intervalSeconds: number;
    maxPayments: number;
    paymentsMade: number;
    lastPayment: number;
    isActive: boolean;
    createdAt: Date;
}

export interface PaymentExecution {
    executionId: string;
    subscriptionId: string;
    amount: string;
    txHash: string;
    status: "pending" | "completed" | "failed";
    executedAt: Date;
    errorMessage?: string;
}

export class SmartContractRecurringPayments {
    private contract: ethers.Contract;
    private appWallet: ethers.Wallet;
    private providers: Map<number, ethers.JsonRpcProvider>;
    private dbClient: Client;

    constructor(
        contractAddress: string,
        appPrivateKey: string,
        rpcUrls: Record<number, string>,
        databaseUrl: string
    ) {
        this.appWallet = new ethers.Wallet(appPrivateKey);
        this.providers = new Map();

        // Initialize providers for each chain
        Object.entries(rpcUrls).forEach(([chainId, url]) => {
            this.providers.set(
                parseInt(chainId),
                new ethers.JsonRpcProvider(url)
            );
        });

        // Initialize contract (will be set when we know the chain)
        this.contract = new ethers.Contract(
            contractAddress,
            this.getContractABI(),
            this.appWallet
        );
        this.dbClient = new Client({ connectionString: databaseUrl });
    }

    private getContractABI() {
        return [
            "function createSubscription(address payee, address token, uint256 amount, uint256 interval, uint256 maxPayments) external returns (bytes32)",
            "function executePayment(bytes32 subscriptionId) external returns (bool)",
            "function cancelSubscription(bytes32 subscriptionId) external",
            "function getSubscription(bytes32 subscriptionId) view returns (tuple(address subscriber, address payee, address token, uint256 amount, uint256 interval, uint256 maxPayments, uint256 paymentsMade, uint256 lastPayment, bool isActive))",
            "function isAuthorizedExecutor(address executor) view returns (bool)",
            "event SubscriptionCreated(bytes32 indexed subscriptionId, address indexed subscriber, address indexed payee)",
            "event PaymentExecuted(bytes32 indexed subscriptionId, uint256 amount)",
            "event SubscriptionCancelled(bytes32 indexed subscriptionId)",
        ];
    }

    /**
     * Create a new subscription plan
     */
    async createSubscription(
        subscriberSigner: ethers.Signer,
        payeeAddress: string,
        tokenAddress: string,
        chainId: number,
        amount: string,
        intervalSeconds: number,
        maxPayments: number
    ): Promise<string> {
        const provider = this.providers.get(chainId);
        if (!provider) throw new Error(`No provider for chain ${chainId}`);

        // Connect contract to the specific chain
        const contract = new ethers.Contract(
            this.contract.address,
            this.getContractABI(),
            subscriberSigner.connect(provider)
        );

        // Create subscription
        const tx = await contract.createSubscription(
            payeeAddress,
            tokenAddress,
            amount,
            intervalSeconds,
            maxPayments
        );

        const receipt = await tx.wait();

        // Extract subscription ID from event
        const event = receipt.logs.find(
            (log: any) => log.fragment?.name === "SubscriptionCreated"
        );

        if (!event) {
            throw new Error("Subscription creation failed - no event emitted");
        }

        const subscriptionId = event.args.subscriptionId;

        // Store in database
        await this.storeSubscription({
            subscriptionId,
            subscriber: await subscriberSigner.getAddress(),
            payee: payeeAddress,
            tokenAddress,
            chainId,
            amount,
            intervalSeconds,
            maxPayments,
            paymentsMade: 0,
            lastPayment: 0,
            isActive: true,
            createdAt: new Date(),
        });

        return subscriptionId;
    }

    /**
     * Execute a scheduled payment
     */
    async executeScheduledPayment(
        subscriptionId: string,
        chainId: number
    ): Promise<string> {
        const provider = this.providers.get(chainId);
        if (!provider) throw new Error(`No provider for chain ${chainId}`);

        const appWalletConnected = this.appWallet.connect(provider);
        const contract = new ethers.Contract(
            this.contract.address,
            this.getContractABI(),
            appWalletConnected
        );

        try {
            // Execute payment
            const tx = await contract.executePayment(subscriptionId);
            const receipt = await tx.wait();

            // Update database
            await this.recordPaymentExecution(subscriptionId, receipt);

            return tx.hash;
        } catch (error) {
            // Record failed execution
            await this.recordFailedExecution(subscriptionId, error);
            throw error;
        }
    }

    /**
     * Get subscription details
     */
    async getSubscription(
        subscriptionId: string,
        chainId: number
    ): Promise<SubscriptionPlan | null> {
        const provider = this.providers.get(chainId);
        if (!provider) throw new Error(`No provider for chain ${chainId}`);

        const contract = new ethers.Contract(
            this.contract.address,
            this.getContractABI(),
            provider
        );

        try {
            const subscription = await contract.getSubscription(subscriptionId);

            return {
                subscriptionId,
                subscriber: subscription.subscriber,
                payee: subscription.payee,
                tokenAddress: subscription.token,
                chainId,
                amount: subscription.amount.toString(),
                intervalSeconds: Number(subscription.interval),
                maxPayments: Number(subscription.maxPayments),
                paymentsMade: Number(subscription.paymentsMade),
                lastPayment: Number(subscription.lastPayment),
                isActive: subscription.isActive,
                createdAt: new Date(), // This would need to be stored separately
            };
        } catch (error) {
            console.error("Error fetching subscription:", error);
            return null;
        }
    }

    /**
     * Get all active subscriptions that are due for payment
     */
    async getDueSubscriptions(): Promise<SubscriptionPlan[]> {
        const { rows } = await this.dbClient.query(`
      SELECT * FROM subscription_plans 
      WHERE is_active = true 
      AND payments_made < max_payments
      AND (last_payment = 0 OR EXTRACT(EPOCH FROM NOW()) - last_payment >= interval_seconds)
      ORDER BY last_payment ASC
    `);

        return rows.map((row) => ({
            subscriptionId: row.subscription_id,
            subscriber: row.subscriber,
            payee: row.payee,
            tokenAddress: row.token_address,
            chainId: row.chain_id,
            amount: row.amount,
            intervalSeconds: row.interval_seconds,
            maxPayments: row.max_payments,
            paymentsMade: row.payments_made,
            lastPayment: row.last_payment,
            isActive: row.is_active,
            createdAt: row.created_at,
        }));
    }

    /**
     * Process all due payments
     */
    async processDuePayments(): Promise<{
        processed: number;
        successful: number;
        failed: number;
        results: Array<{
            subscriptionId: string;
            success: boolean;
            error?: string;
        }>;
    }> {
        const dueSubscriptions = await this.getDueSubscriptions();
        const results = [];
        let successful = 0;
        let failed = 0;

        for (const subscription of dueSubscriptions) {
            try {
                const txHash = await this.executeScheduledPayment(
                    subscription.subscriptionId,
                    subscription.chainId
                );

                results.push({
                    subscriptionId: subscription.subscriptionId,
                    success: true,
                    txHash,
                });
                successful++;
            } catch (error) {
                results.push({
                    subscriptionId: subscription.subscriptionId,
                    success: false,
                    error:
                        error instanceof Error
                            ? error.message
                            : "Unknown error",
                });
                failed++;
            }
        }

        return {
            processed: dueSubscriptions.length,
            successful,
            failed,
            results,
        };
    }

    private async storeSubscription(
        subscription: SubscriptionPlan
    ): Promise<void> {
        await this.dbClient.query(
            `
      INSERT INTO subscription_plans (
        subscription_id, subscriber, payee, token_address, chain_id,
        amount, interval_seconds, max_payments, payments_made, last_payment,
        is_active, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      ON CONFLICT (subscription_id) DO UPDATE SET
        payments_made = EXCLUDED.payments_made,
        last_payment = EXCLUDED.last_payment,
        is_active = EXCLUDED.is_active
    `,
            [
                subscription.subscriptionId,
                subscription.subscriber,
                subscription.payee,
                subscription.tokenAddress,
                subscription.chainId,
                subscription.amount,
                subscription.intervalSeconds,
                subscription.maxPayments,
                subscription.paymentsMade,
                subscription.lastPayment,
                subscription.isActive,
                subscription.createdAt,
            ]
        );
    }

    private async recordPaymentExecution(
        subscriptionId: string,
        receipt: any
    ): Promise<void> {
        // Update subscription with new payment info
        await this.dbClient.query(
            `
      UPDATE subscription_plans 
      SET payments_made = payments_made + 1,
          last_payment = EXTRACT(EPOCH FROM NOW()),
          is_active = CASE 
            WHEN payments_made + 1 >= max_payments THEN false 
            ELSE true 
          END
      WHERE subscription_id = $1
    `,
            [subscriptionId]
        );

        // Record execution
        await this.dbClient.query(
            `
      INSERT INTO payment_executions (
        subscription_id, amount, tx_hash, status, executed_at
      ) VALUES ($1, $2, $3, 'completed', NOW())
    `,
            [subscriptionId, "0", receipt.transactionHash]
        );
    }

    private async recordFailedExecution(
        subscriptionId: string,
        error: any
    ): Promise<void> {
        await this.dbClient.query(
            `
      INSERT INTO payment_executions (
        subscription_id, amount, tx_hash, status, executed_at, error_message
      ) VALUES ($1, $2, $3, 'failed', NOW(), $4)
    `,
            [subscriptionId, "0", "", error.message || "Unknown error"]
        );
    }
}

// Smart Contract ABI for deployment
export const RECURRING_PAYMENTS_CONTRACT_ABI = [
    "constructor(address[] memory authorizedExecutors)",
    "function createSubscription(address payee, address token, uint256 amount, uint256 interval, uint256 maxPayments) external returns (bytes32)",
    "function executePayment(bytes32 subscriptionId) external returns (bool)",
    "function cancelSubscription(bytes32 subscriptionId) external",
    "function getSubscription(bytes32 subscriptionId) view returns (tuple(address subscriber, address payee, address token, uint256 amount, uint256 interval, uint256 maxPayments, uint256 paymentsMade, uint256 lastPayment, bool isActive))",
    "function isAuthorizedExecutor(address executor) view returns (bool)",
    "function addAuthorizedExecutor(address executor) external",
    "event SubscriptionCreated(bytes32 indexed subscriptionId, address indexed subscriber, address indexed payee)",
    "event PaymentExecuted(bytes32 indexed subscriptionId, uint256 amount)",
    "event SubscriptionCancelled(bytes32 indexed subscriptionId)",
];

// Smart Contract Solidity Code
export const RECURRING_PAYMENTS_CONTRACT_SOLIDITY = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RecurringPayments is ReentrancyGuard, Ownable {
    struct Subscription {
        address subscriber;
        address payee;
        address token;
        uint256 amount;
        uint256 interval;
        uint256 maxPayments;
        uint256 paymentsMade;
        uint256 lastPayment;
        bool isActive;
    }

    mapping(bytes32 => Subscription) public subscriptions;
    mapping(address => bool) public authorizedExecutors;
    
    event SubscriptionCreated(bytes32 indexed subscriptionId, address indexed subscriber, address indexed payee);
    event PaymentExecuted(bytes32 indexed subscriptionId, uint256 amount);
    event SubscriptionCancelled(bytes32 indexed subscriptionId);

    modifier onlyAuthorizedExecutor() {
        require(authorizedExecutors[msg.sender], "Not authorized");
        _;
    }

    constructor(address[] memory _authorizedExecutors) {
        for (uint i = 0; i < _authorizedExecutors.length; i++) {
            authorizedExecutors[_authorizedExecutors[i]] = true;
        }
    }

    function createSubscription(
        address _payee,
        address _token,
        uint256 _amount,
        uint256 _interval,
        uint256 _maxPayments
    ) external returns (bytes32) {
        require(_payee != address(0), "Invalid payee");
        require(_token != address(0), "Invalid token");
        require(_amount > 0, "Amount must be positive");
        require(_interval > 0, "Interval must be positive");
        require(_maxPayments > 0, "Max payments must be positive");

        bytes32 subscriptionId = keccak256(abi.encodePacked(
            msg.sender, _payee, _token, _amount, _interval, block.timestamp, block.number
        ));

        subscriptions[subscriptionId] = Subscription({
            subscriber: msg.sender,
            payee: _payee,
            token: _token,
            amount: _amount,
            interval: _interval,
            maxPayments: _maxPayments,
            paymentsMade: 0,
            lastPayment: 0,
            isActive: true
        });

        // User must approve this contract to spend tokens
        require(
            IERC20(_token).allowance(msg.sender, address(this)) >= _amount * _maxPayments,
            "Insufficient allowance"
        );

        emit SubscriptionCreated(subscriptionId, msg.sender, _payee);
        return subscriptionId;
    }

    function executePayment(bytes32 _subscriptionId) external onlyAuthorizedExecutor nonReentrant returns (bool) {
        Subscription storage sub = subscriptions[_subscriptionId];
        
        require(sub.isActive, "Subscription not active");
        require(sub.paymentsMade < sub.maxPayments, "Max payments reached");
        require(block.timestamp >= sub.lastPayment + sub.interval, "Too early");

        // Transfer tokens from subscriber to payee
        require(
            IERC20(sub.token).transferFrom(sub.subscriber, sub.payee, sub.amount),
            "Transfer failed"
        );

        sub.paymentsMade++;
        sub.lastPayment = block.timestamp;

        if (sub.paymentsMade >= sub.maxPayments) {
            sub.isActive = false;
        }

        emit PaymentExecuted(_subscriptionId, sub.amount);
        return true;
    }

    function cancelSubscription(bytes32 _subscriptionId) external {
        Subscription storage sub = subscriptions[_subscriptionId];
        require(msg.sender == sub.subscriber, "Only subscriber can cancel");
        
        sub.isActive = false;
        emit SubscriptionCancelled(_subscriptionId);
    }

    function addAuthorizedExecutor(address _executor) external onlyOwner {
        authorizedExecutors[_executor] = true;
    }

    function removeAuthorizedExecutor(address _executor) external onlyOwner {
        authorizedExecutors[_executor] = false;
    }
}
`;
