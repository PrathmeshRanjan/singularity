import { NextResponse } from "next/server";
import { Client } from "pg";
import { SmartContractRecurringPaymentsService } from "@/lib/recurring-payments/smart-contract-service";
import { CrossChainPaymentService } from "@/lib/recurring-payments/cross-chain-payment-service";

const DATABASE_URL = process.env.DATABASE_URL;
const CRON_SECRET = process.env.CRON_SECRET;

if (!DATABASE_URL || !CRON_SECRET) {
  throw new Error(
    "Missing required environment variables: DATABASE_URL or CRON_SECRET"
  );
}

function formatError(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "An unknown error occurred";
}

// Enhanced logging for payment processing
function logProcessingStep(step: string, data?: any) {
  const timestamp = new Date().toISOString();
  console.log(`\n🔄 [${timestamp}] PAYMENT PROCESSING - ${step}`);
  if (data) {
    console.log(`📊 Data:`, JSON.stringify(data, null, 2));
  }
  console.log("─".repeat(80));
}

function logProcessingSuccess(message: string, data?: any) {
  const timestamp = new Date().toISOString();
  console.log(`✅ [${timestamp}] PROCESSING SUCCESS: ${message}`);
  if (data) {
    console.log(`�� Result:`, JSON.stringify(data, null, 2));
  }
}

function logProcessingError(message: string, error: any) {
  const timestamp = new Date().toISOString();
  console.log(`❌ [${timestamp}] PROCESSING ERROR: ${message}`);
  console.log(`🔍 Error Details:`, error);
}

// POST /api/recurring-payments-smart/process
// This endpoint processes both same-chain and cross-chain payments
export async function POST(request: Request) {
  // Check Authorization header
  const authHeader = request.headers.get("Authorization");
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    logProcessingError("Unauthorized access attempt", { authHeader });
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const smartContractService = new SmartContractRecurringPaymentsService();
  const crossChainService = new CrossChainPaymentService();
  
  try {
    await smartContractService.connect();
    await crossChainService.connect();
    
    logProcessingStep("STARTING PAYMENT PROCESSING", {
      timestamp: new Date().toISOString(),
      services: ["smart-contract", "cross-chain"]
    });

    // Process same-chain payments (existing logic)
    logProcessingStep("PROCESSING SAME-CHAIN PAYMENTS");
    const sameChainResults = await processSameChainPayments(smartContractService);
    
    // Process cross-chain payments (new logic)
    logProcessingStep("PROCESSING CROSS-CHAIN PAYMENTS");
    const crossChainResults = await crossChainService.processDueCrossChainPayments();
    
    const totalProcessed = sameChainResults.processed + crossChainResults.processed;
    const totalSuccessful = sameChainResults.successful + crossChainResults.successful;
    const totalFailed = sameChainResults.failed + crossChainResults.failed;

    logProcessingSuccess("PAYMENT PROCESSING COMPLETED", {
      sameChain: sameChainResults,
      crossChain: crossChainResults,
      total: {
        processed: totalProcessed,
        successful: totalSuccessful,
        failed: totalFailed
      }
    });

    return NextResponse.json({
      success: true,
      message: `Processed ${totalProcessed} payments`,
      sameChain: sameChainResults,
      crossChain: crossChainResults,
      total: {
        processed: totalProcessed,
        successful: totalSuccessful,
        failed: totalFailed
      }
    });

  } catch (error: unknown) {
    const errorMessage = formatError(error);
    logProcessingError("Error in payment processing", error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  } finally {
    await smartContractService.disconnect();
    await crossChainService.disconnect();
  }
}

// Process same-chain payments (existing logic)
async function processSameChainPayments(service: SmartContractRecurringPaymentsService) {
  try {
    // Get all subscriptions that are due for payment (same-chain only)
    const dueSubscriptions = await service.getDueSubscriptions();
    
    if (dueSubscriptions.length === 0) {
      logProcessingSuccess("No same-chain subscriptions due for payment");
      return { processed: 0, successful: 0, failed: 0 };
    }

    const results = [];
    let successCount = 0;
    let errorCount = 0;

    // Process each due subscription
    for (const subscription of dueSubscriptions) {
      try {
        logProcessingStep(`Processing same-chain payment for subscription ${subscription.subscriptionId}`);
        
        const txHash = await service.executeScheduledPayment(subscription.subscriptionId);
        
        results.push({
          subscriptionId: subscription.subscriptionId,
          type: 'same-chain',
          status: 'success',
          txHash,
          message: 'Payment executed successfully'
        });
        
        successCount++;
        logProcessingSuccess(`Same-chain payment executed for subscription ${subscription.subscriptionId}`, { txHash });
        
      } catch (error) {
        logProcessingError(`Failed to execute same-chain payment for subscription ${subscription.subscriptionId}`, error);
        
        results.push({
          subscriptionId: subscription.subscriptionId,
          type: 'same-chain',
          status: 'error',
          error: formatError(error),
          message: 'Payment execution failed'
        });
        
        errorCount++;
      }
    }

    return {
      processed: dueSubscriptions.length,
      successful: successCount,
      failed: errorCount,
      results
    };

  } catch (error) {
    logProcessingError("Error processing same-chain payments", error);
    throw error;
  }
}
