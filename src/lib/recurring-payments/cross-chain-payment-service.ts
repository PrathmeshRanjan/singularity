import { ethers } from "ethers";
import { Client } from "pg";
import { FusionSDKService } from "../fusion-sdk-service";
import { createSingularitySwapParams, PYUSD_ETHEREUM } from "../constants";
import { NetworkEnum } from "@1inch/cross-chain-sdk";

const DATABASE_URL = process.env.DATABASE_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!DATABASE_URL || !PRIVATE_KEY) {
    throw new Error("Missing required environment variables: DATABASE_URL or PRIVATE_KEY");
}

// Enhanced logging for cross-chain payments
function logPaymentStep(step: string, subscriptionId: string, data?: any) {
    const timestamp = new Date().toISOString();
    console.log(`\n💳 [${timestamp}] CROSS-CHAIN PAYMENT - ${step}`);
    console.log(`📋 Subscription ID: ${subscriptionId}`);
    if (data) {
        console.log(`📊 Data:`, JSON.stringify(data, null, 2));
    }
    console.log("─".repeat(80));
}

function logPaymentSuccess(message: string, subscriptionId: string, data?: any) {
    const timestamp = new Date().toISOString();
    console.log(`✅ [${timestamp}] PAYMENT SUCCESS: ${message}`);
    console.log(`📋 Subscription ID: ${subscriptionId}`);
    if (data) {
        console.log(`📊 Result:`, JSON.stringify(data, null, 2));
    }
}

function logPaymentError(message: string, subscriptionId: string, error: any) {
    const timestamp = new Date().toISOString();
    console.log(`❌ [${timestamp}] PAYMENT ERROR: ${message}`);
    console.log(`📋 Subscription ID: ${subscriptionId}`);
    console.log(`🔍 Error Details:`, error);
}

export interface CrossChainSubscription {
    subscriptionId: string;
    subscriber: string;
    payee: string;
    srcTokenAddress: string;
    srcChainId: number;
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

export class CrossChainPaymentService {
    private fusionSDK: FusionSDKService;
    private dbClient: Client;

    constructor() {
        this.fusionSDK = new FusionSDKService(PRIVATE_KEY);
        this.dbClient = new Client({ connectionString: DATABASE_URL });
    }

    async connect() {
        await this.dbClient.connect();
    }

    async disconnect() {
        await this.dbClient.end();
    }

    // Get all active subscriptions that need cross-chain payment processing
    async getDueCrossChainSubscriptions(): Promise<CrossChainSubscription[]> {
        logPaymentStep("FETCHING DUE CROSS-CHAIN SUBSCRIPTIONS", "system");

        const { rows } = await this.dbClient.query(`
            SELECT * FROM subscription_plans 
            WHERE is_active = true 
            AND is_paused = false 
            AND next_payment_due <= NOW()
            AND src_chain_id != 1  -- Not already on Ethereum
            ORDER BY next_payment_due ASC
        `);

        logPaymentSuccess("Due cross-chain subscriptions fetched", "system", {
            count: rows.length,
            subscriptions: rows.map(r => ({
                subscriptionId: r.subscription_id,
                srcChainId: r.src_chain_id,
                amount: r.amount
            }))
        });

        return rows.map(row => ({
            subscriptionId: row.subscription_id,
            subscriber: row.subscriber_address,
            payee: row.payee_address,
            srcTokenAddress: row.src_token_address,
            srcChainId: row.src_chain_id,
            amount: row.amount,
            intervalSeconds: row.interval_seconds,
            maxPayments: row.max_payments,
            paymentsMade: row.payments_made,
            lastPayment: row.last_payment,
            isActive: row.is_active,
            isPaused: row.is_paused,
            createdAt: row.created_at,
            updatedAt: row.updated_at
        }));
    }

    // Execute cross-chain payment for a subscription
    async executeCrossChainPayment(subscription: CrossChainSubscription): Promise<string> {
        const { subscriptionId, subscriber, payee, srcTokenAddress, srcChainId, amount } = subscription;

        logPaymentStep("STARTING CROSS-CHAIN PAYMENT EXECUTION", subscriptionId, {
            subscriber: subscriber.substring(0, 10) + "...",
            payee: payee.substring(0, 10) + "...",
            srcChainId,
            srcTokenAddress,
            amount
        });

        try {
            // Step 1: Create swap parameters (always to Ethereum PYUSD)
            const swapParams = createSingularitySwapParams(
                srcChainId,
                srcTokenAddress,
                amount,
                subscriber // User's wallet address
            );

            logPaymentStep("CREATING SWAP PARAMETERS", subscriptionId, {
                srcChainId: swapParams.srcChainId,
                dstChainId: swapParams.dstChainId,
                srcTokenAddress: swapParams.srcTokenAddress,
                dstTokenAddress: swapParams.dstTokenAddress,
                amount: swapParams.amount
            });

            // Step 2: Get quote for the cross-chain swap
            const quote = await this.fusionSDK.getQuote(swapParams);

            logPaymentStep("QUOTE RECEIVED", subscriptionId, {
                srcAmount: quote.srcAmount?.toString(),
                dstAmount: quote.dstAmount?.toString(),
                recommendedPreset: quote.recommendedPreset
            });

            // Step 3: Create and submit the cross-chain order
            const orderResult = await this.fusionSDK.createOrder(quote, {
                walletAddress: subscriber,
                receiver: payee, // Payee receives the PYUSD on Ethereum
                source: "singularity-recurring",
            });

            logPaymentStep("CROSS-CHAIN ORDER CREATED", subscriptionId, {
                orderHash: orderResult.hash,
                quoteId: orderResult.quoteId,
                secretsCount: orderResult.secrets.length
            });

            // Step 4: Store the order in database for monitoring
            await this.dbClient.query(`
                INSERT INTO fusion_orders (order_hash, secrets, status, attempts, subscription_id)
                VALUES ($1, $2, 'pending', 0, $3)
                ON CONFLICT (order_hash) DO NOTHING
            `, [orderResult.hash, JSON.stringify(orderResult.secrets), subscriptionId]);

            logPaymentStep("ORDER STORED IN DATABASE", subscriptionId, {
                orderHash: orderResult.hash,
                status: "pending"
            });

            // Step 5: Update subscription with next payment due date
            const nextPaymentDue = new Date(Date.now() + subscription.intervalSeconds * 1000);
            const newPaymentsMade = subscription.paymentsMade + 1;
            const isActive = newPaymentsMade < subscription.maxPayments;

            await this.dbClient.query(`
                UPDATE subscription_plans 
                SET 
                    payments_made = $1,
                    next_payment_due = $2,
                    is_active = $3,
                    updated_at = NOW()
                WHERE subscription_id = $4
            `, [newPaymentsMade, nextPaymentDue, isActive, subscriptionId]);

            logPaymentSuccess("CROSS-CHAIN PAYMENT INITIATED", subscriptionId, {
                orderHash: orderResult.hash,
                nextPaymentDue: nextPaymentDue.toISOString(),
                paymentsMade: newPaymentsMade,
                isActive
            });

            return orderResult.hash;

        } catch (error) {
            logPaymentError("CROSS-CHAIN PAYMENT FAILED", subscriptionId, error);
            throw error;
        }
    }

    // Process all due cross-chain subscriptions
    async processDueCrossChainPayments(): Promise<{ processed: number; successful: number; failed: number }> {
        logPaymentStep("STARTING CROSS-CHAIN PAYMENT PROCESSING", "system");

        const dueSubscriptions = await this.getDueCrossChainSubscriptions();
        
        if (dueSubscriptions.length === 0) {
            logPaymentSuccess("No cross-chain subscriptions due for payment", "system");
            return { processed: 0, successful: 0, failed: 0 };
        }

        let successful = 0;
        let failed = 0;

        for (const subscription of dueSubscriptions) {
            try {
                await this.executeCrossChainPayment(subscription);
                successful++;
            } catch (error) {
                logPaymentError("Failed to process cross-chain payment", subscription.subscriptionId, error);
                failed++;
            }
        }

        logPaymentSuccess("CROSS-CHAIN PAYMENT PROCESSING COMPLETED", "system", {
            processed: dueSubscriptions.length,
            successful,
            failed
        });

        return {
            processed: dueSubscriptions.length,
            successful,
            failed
        };
    }
}
