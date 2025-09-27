import { NextResponse } from "next/server";
import { SmartContractRecurringPaymentsService } from "@/lib/recurring-payments/smart-contract-service";

// Helper function to format errors
function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
}

// POST /api/recurring-payments-smart/process
// This endpoint is called by the cron job to process due payments
export async function POST(request: Request) {
  const service = new SmartContractRecurringPaymentsService();
  
  try {
    await service.connect();
    
    // Get all subscriptions that are due for payment
    const dueSubscriptions = await service.getDueSubscriptions();
    
    if (dueSubscriptions.length === 0) {
      return NextResponse.json({ 
        success: true, 
        message: "No subscriptions due for payment",
        processed: 0
      });
    }

    const results = [];
    let successCount = 0;
    let errorCount = 0;

    // Process each due subscription
    for (const subscription of dueSubscriptions) {
      try {
        console.log(`Processing payment for subscription ${subscription.subscriptionId}`);
        
        const txHash = await service.executeScheduledPayment(subscription.subscriptionId);
        
        results.push({
          subscriptionId: subscription.subscriptionId,
          status: 'success',
          txHash,
          message: 'Payment executed successfully'
        });
        
        successCount++;
        console.log(`Payment executed successfully for subscription ${subscription.subscriptionId}: ${txHash}`);
        
      } catch (error) {
        console.error(`Failed to execute payment for subscription ${subscription.subscriptionId}:`, error);
        
        results.push({
          subscriptionId: subscription.subscriptionId,
          status: 'error',
          error: formatError(error),
          message: 'Payment execution failed'
        });
        
        errorCount++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Processed ${dueSubscriptions.length} subscriptions`,
      processed: dueSubscriptions.length,
      successful: successCount,
      failed: errorCount,
      results
    });

  } catch (error) {
    console.error("Error in process payments cron job:", error);
    return NextResponse.json(
      { 
        success: false,
        error: formatError(error),
        message: "Failed to process payments"
      },
      { status: 500 }
    );
  } finally {
    await service.disconnect();
  }
}
