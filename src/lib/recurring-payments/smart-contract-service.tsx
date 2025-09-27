import { ethers } from "ethers";
import { Client } from "pg";
import crypto from "crypto";

const ONEINCH_API_KEY = process.env.ONEINCH_API_KEY;
const DATABASE_URL = process.env.DATABASE_URL;

if (!ONEINCH_API_KEY || !DATABASE_URL) {
    throw new Error(
        "Missing required environment variables: ONEINCH_API_KEY or DATABASE_URL"
    );
}

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
    isPaused: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface PaymentExecution {
    executionId: string;
    subscriptionId: string;
    amount: string;
    txHash: string;
    fusionOrderHash?: string;
    status: "pending" | "completed" | "failed";
    executedAt: Date;
    errorMessage?: string;
    gasUsed?: string;
    blockNumber?: number;
}

// Contract addresses - Updated with deployed contract
const CONTRACT_ADDRESSES: Record<number, string> = {
    8453: "0xacfDc1080a1D3839767b3714F581994958830754", // Base - DEPLOYED
    1: "0x0000000000000000000000000000000000000000", // Ethereum
    42161: "0x0000000000000000000000000000000000000000", // Arbitrum
    137: "0x0000000000000000000000000000000000000000", // Polygon
};

// RPC URLs for different chains
const RPC_URLS: Record<number, string> = {
    8453: "https://mainnet.base.org",
    1: "https://ethereum-rpc.publicnode.com",
    42161: "https://arb1.arbitrum.io/rpc",
    137: "https://polygon-rpc.com",
};

// App wallet for executing payments
const APP_PRIVATE_KEY = process.env.APP_PRIVATE_KEY;
if (!APP_PRIVATE_KEY) {
    throw new Error("APP_PRIVATE_KEY environment variable is required");
}

const appWallet = new ethers.Wallet(APP_PRIVATE_KEY);

// Contract ABI - Properly formatted for TypeScript
const RECURRING_PAYMENTS_ABI = [
    {
        inputs: [
            { internalType: "address", name: "payee", type: "address" },
            { internalType: "address", name: "token", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "interval", type: "uint256" },
            { internalType: "uint256", name: "maxPayments", type: "uint256" },
        ],
        name: "createSubscription",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "subscriptionId",
                type: "bytes32",
            },
        ],
        name: "executePayment",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "subscriptionId",
                type: "bytes32",
            },
        ],
        name: "cancelSubscription",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "subscriptionId",
                type: "bytes32",
            },
        ],
        name: "getSubscription",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "subscriber",
                        type: "address",
                    },
                    { internalType: "address", name: "payee", type: "address" },
                    { internalType: "address", name: "token", type: "address" },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "interval",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPayments",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "paymentsMade",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "lastPayment",
                        type: "uint256",
                    },
                    { internalType: "bool", name: "isActive", type: "bool" },
                ],
                internalType: "struct RecurringPayments.Subscription",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "executor", type: "address" },
        ],
        name: "isAuthorizedExecutor",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "subscriptionId",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "subscriber",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "payee",
                type: "address",
            },
        ],
        name: "SubscriptionCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "subscriptionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "PaymentExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "subscriptionId",
                type: "bytes32",
            },
        ],
        name: "SubscriptionCancelled",
        type: "event",
    },
] as const;

export class SmartContractRecurringPaymentsService {
    private dbClient: Client;

    constructor() {
        this.dbClient = new Client({ connectionString: DATABASE_URL });
    }

    async connect(): Promise<void> {
        await this.dbClient.connect();
    }

    async disconnect(): Promise<void> {
        await this.dbClient.end();
    }

    // This method is now only for storing subscription data in the database
    // The actual smart contract interaction happens on the frontend
    async storeSubscription(
        subscriptionId: string,
        subscriberAddress: string,
        payeeAddress: string,
        srcChainId: number,
        srcTokenAddress: string,
        amount: string,
        intervalSeconds: number,
        maxPayments: number,
        txHash: string
    ): Promise<string> {
        const client = new Client({ connectionString: DATABASE_URL });
        await client.connect();

        try {
            // Get contract address for the source chain
            const contractAddress = CONTRACT_ADDRESSES[srcChainId];
            if (
                !contractAddress ||
                contractAddress === "0x0000000000000000000000000000000000000000"
            ) {
                throw new Error(`Contract not deployed on chain ${srcChainId}`);
            }

            // Store subscription in database
            const nextPaymentDue = new Date(
                Date.now() + intervalSeconds * 1000
            );

            const { rows } = await client.query(
                `
        INSERT INTO subscription_plans (
          subscription_id, subscriber_address, payee_address, src_chain_id, 
          src_token_address, payment_amount, interval_seconds, max_payments, 
          payments_made, last_payment_at, next_payment_due, is_active, is_paused, 
          created_at, contract_address, tx_hash
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
        RETURNING subscription_id
      `,
                [
                    subscriptionId,
                    subscriberAddress,
                    payeeAddress,
                    srcChainId,
                    srcTokenAddress,
                    amount,
                    intervalSeconds,
                    maxPayments,
                    0, // payments_made
                    null, // last_payment_at
                    nextPaymentDue,
                    true, // is_active
                    false, // is_paused
                    new Date(),
                    contractAddress,
                    txHash,
                ]
            );

            return rows[0].subscription_id;
        } finally {
            await client.end();
        }
    }

    async executeScheduledPayment(subscriptionId: string): Promise<string> {
        const client = new Client({ connectionString: DATABASE_URL });
        await client.connect();

        try {
            // Get subscription details
            const { rows: subscriptionRows } = await client.query(
                `
        SELECT * FROM subscription_plans WHERE subscription_id = $1 AND is_active = true AND is_paused = false
      `,
                [subscriptionId]
            );

            if (subscriptionRows.length === 0) {
                throw new Error("Subscription not found or inactive");
            }

            const subscription = subscriptionRows[0];

            // Check if payment is due
            const now = new Date();
            if (now < subscription.next_payment_due) {
                throw new Error("Payment not yet due");
            }

            // Get contract and execute payment
            const contractAddress =
                CONTRACT_ADDRESSES[subscription.src_chain_id];
            const rpcUrl = RPC_URLS[subscription.src_chain_id];

            const provider = new ethers.JsonRpcProvider(rpcUrl);
            const contract = new ethers.Contract(
                contractAddress,
                RECURRING_PAYMENTS_ABI,
                provider
            );

            const connectedWallet = appWallet.connect(provider);
            const contractWithSigner = contract.connect(connectedWallet);

            const tx = await (contractWithSigner as any).executePayment(
                subscriptionId
            );
            const receipt = await tx.wait();

            // Update subscription in database
            const nextPaymentDue = new Date(
                Date.now() + subscription.interval_seconds * 1000
            );
            const newPaymentsMade = subscription.payments_made + 1;
            const isActive = newPaymentsMade < subscription.max_payments;

            await client.query(
                `
        UPDATE subscription_plans 
        SET payments_made = $1, last_payment_at = $2, next_payment_due = $3, is_active = $4, updated_at = $5
        WHERE subscription_id = $6
      `,
                [
                    newPaymentsMade,
                    new Date(),
                    nextPaymentDue,
                    isActive,
                    new Date(),
                    subscriptionId,
                ]
            );

            // Record payment execution
            await client.query(
                `
        INSERT INTO payment_executions (
          execution_id, subscription_id, amount, tx_hash, status, executed_at, gas_used, block_number
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `,
                [
                    crypto.randomUUID(),
                    subscriptionId,
                    subscription.payment_amount,
                    tx.hash,
                    "completed",
                    new Date(),
                    receipt.gasUsed?.toString(),
                    receipt.blockNumber,
                ]
            );

            return tx.hash;
        } catch (error) {
            // Record failed execution
            await client.query(
                `
        INSERT INTO payment_executions (
          execution_id, subscription_id, amount, status, executed_at, error_message
        ) VALUES ($1, $2, $3, $4, $5, $6)
      `,
                [
                    crypto.randomUUID(),
                    subscriptionId,
                    "0",
                    "failed",
                    new Date(),
                    error instanceof Error ? error.message : "Unknown error",
                ]
            );

            throw error;
        } finally {
            await client.end();
        }
    }

    async pauseSubscription(subscriptionId: string): Promise<void> {
        const client = new Client({ connectionString: DATABASE_URL });
        await client.connect();

        try {
            await client.query(
                `
        UPDATE subscription_plans 
        SET is_paused = true, updated_at = $1
        WHERE subscription_id = $2
      `,
                [new Date(), subscriptionId]
            );
        } finally {
            await client.end();
        }
    }

    async resumeSubscription(subscriptionId: string): Promise<void> {
        const client = new Client({ connectionString: DATABASE_URL });
        await client.connect();

        try {
            await client.query(
                `
        UPDATE subscription_plans 
        SET is_paused = false, updated_at = $1
        WHERE subscription_id = $2
      `,
                [new Date(), subscriptionId]
            );
        } finally {
            await client.end();
        }
    }

    async getDueSubscriptions(): Promise<SubscriptionPlan[]> {
        const client = new Client({ connectionString: DATABASE_URL });
        await client.connect();

        try {
            const { rows } = await client.query(`
        SELECT * FROM subscription_plans 
        WHERE is_active = true AND is_paused = false AND next_payment_due <= NOW()
        ORDER BY next_payment_due ASC
      `);

            return rows.map((row) => ({
                subscriptionId: row.subscription_id,
                subscriber: row.subscriber_address,
                payee: row.payee_address,
                tokenAddress: row.src_token_address,
                chainId: row.src_chain_id,
                amount: row.payment_amount,
                intervalSeconds: row.interval_seconds,
                maxPayments: row.max_payments,
                paymentsMade: row.payments_made,
                lastPayment: row.last_payment_at
                    ? Math.floor(new Date(row.last_payment_at).getTime() / 1000)
                    : 0,
                isActive: row.is_active,
                isPaused: row.is_paused,
                createdAt: row.created_at,
                updatedAt: row.updated_at,
            }));
        } finally {
            await client.end();
        }
    }

    async getSubscriptionsBySubscriber(
        subscriberAddress: string
    ): Promise<SubscriptionPlan[]> {
        const client = new Client({ connectionString: DATABASE_URL });
        await client.connect();

        try {
            const { rows } = await client.query(
                `
        SELECT * FROM subscription_plans 
        WHERE subscriber_address = $1
        ORDER BY created_at DESC
      `,
                [subscriberAddress]
            );

            return rows.map((row) => ({
                subscriptionId: row.subscription_id,
                subscriber: row.subscriber_address,
                payee: row.payee_address,
                tokenAddress: row.src_token_address,
                chainId: row.src_chain_id,
                amount: row.payment_amount,
                intervalSeconds: row.interval_seconds,
                maxPayments: row.max_payments,
                paymentsMade: row.payments_made,
                lastPayment: row.last_payment_at
                    ? Math.floor(new Date(row.last_payment_at).getTime() / 1000)
                    : 0,
                isActive: row.is_active,
                isPaused: row.is_paused,
                createdAt: row.created_at,
                updatedAt: row.updated_at,
            }));
        } finally {
            await client.end();
        }
    }

    async getSubscriptionDetails(
        subscriptionId: string
    ): Promise<SubscriptionPlan | null> {
        const client = new Client({ connectionString: DATABASE_URL });
        await client.connect();

        try {
            const { rows } = await client.query(
                `
        SELECT * FROM subscription_plans WHERE subscription_id = $1
      `,
                [subscriptionId]
            );

            if (rows.length === 0) {
                return null;
            }

            const row = rows[0];
            return {
                subscriptionId: row.subscription_id,
                subscriber: row.subscriber_address,
                payee: row.payee_address,
                tokenAddress: row.src_token_address,
                chainId: row.src_chain_id,
                amount: row.payment_amount,
                intervalSeconds: row.interval_seconds,
                maxPayments: row.max_payments,
                paymentsMade: row.payments_made,
                lastPayment: row.last_payment_at
                    ? Math.floor(new Date(row.last_payment_at).getTime() / 1000)
                    : 0,
                isActive: row.is_active,
                isPaused: row.is_paused,
                createdAt: row.created_at,
                updatedAt: row.updated_at,
            };
        } finally {
            await client.end();
        }
    }
    async cancelSubscriptionInDatabase(subscriptionId: string): Promise<void> {
        const client = new Client({ connectionString: DATABASE_URL });
        await client.connect();

        try {
            await client.query(
                `
        UPDATE subscription_plans 
        SET is_active = false, updated_at = $1
        WHERE subscription_id = $2
      `,
                [new Date(), subscriptionId]
            );
        } finally {
            await client.end();
        }
    }
}
