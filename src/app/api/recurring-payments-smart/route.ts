import { NextResponse } from "next/server";
import { SmartContractRecurringPaymentsService } from "@/lib/recurring-payments/smart-contract-service";

function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
}

// GET /api/recurring-payments-smart
export async function GET(request: Request) {
  const service = new SmartContractRecurringPaymentsService();
  
  try {
    await service.connect();
    
    const { searchParams } = new URL(request.url);
    const action = searchParams.get("action");
    const subscriptionId = searchParams.get("subscriptionId");
    const subscriberAddress = searchParams.get("subscriberAddress");

    if (action === "subscription" && subscriptionId) {
      // Get specific subscription
      const subscription = await service.getSubscriptionDetails(subscriptionId);
      if (!subscription) {
        return NextResponse.json({ error: "Subscription not found" }, { status: 404 });
      }
      return NextResponse.json({ subscription });
    }

    if (action === "due") {
      // Get all subscriptions due for payment
      const subscriptions = await service.getDueSubscriptions();
      return NextResponse.json({ subscriptions, count: subscriptions.length });
    }

    if (action === "user-subscriptions" && subscriberAddress) {
      // Get subscriptions for a specific user
      const subscriptions = await service.getSubscriptionsBySubscriber(subscriberAddress);
      return NextResponse.json({ subscriptions, count: subscriptions.length });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Error in GET /api/recurring-payments-smart:", error);
    return NextResponse.json(
      { error: formatError(error) },
      { status: 500 }
    );
  } finally {
    await service.disconnect();
  }
}

// POST /api/recurring-payments-smart
export async function POST(request: Request) {
  const service = new SmartContractRecurringPaymentsService();
  
  try {
    await service.connect();
    
    const body = await request.json();
    const { action } = body;

    if (action === "create-subscription") {
      // Store subscription data in database (smart contract interaction happens on frontend)
      const { 
        subscriptionId,
        subscriberAddress,
        payeeAddress, 
        srcChainId,
        srcTokenAddress, 
        amount, 
        intervalSeconds, 
        maxPayments,
        txHash
      } = body;

      if (!subscriptionId || !subscriberAddress || !payeeAddress || !srcChainId || !srcTokenAddress || !amount || !intervalSeconds || !maxPayments || !txHash) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }

      // Store the subscription in the database
      const storedSubscriptionId = await service.storeSubscription(
        subscriptionId,
        subscriberAddress,
        payeeAddress,
        parseInt(srcChainId),
        srcTokenAddress,
        amount,
        parseInt(intervalSeconds),
        parseInt(maxPayments),
        txHash
      );

      // Get the stored subscription
      const subscription = await service.getSubscriptionDetails(storedSubscriptionId);

      return NextResponse.json({ 
        success: true, 
        subscriptionId: storedSubscriptionId, 
        subscription,
        message: "Subscription stored successfully" 
      });
    }

    if (action === "pause-subscription") {
      // Pause a subscription
      const { subscriptionId } = body;
      
      if (!subscriptionId) {
        return NextResponse.json(
          { error: "Subscription ID is required" },
          { status: 400 }
        );
      }

      await service.pauseSubscription(subscriptionId);

      return NextResponse.json({ 
        success: true, 
        message: "Subscription paused successfully" 
      });
    }

    if (action === "resume-subscription") {
      // Resume a subscription
      const { subscriptionId } = body;
      
      if (!subscriptionId) {
        return NextResponse.json(
          { error: "Subscription ID is required" },
          { status: 400 }
        );
      }

      await service.resumeSubscription(subscriptionId);

      return NextResponse.json({ 
        success: true, 
        message: "Subscription resumed successfully" 
      });
    }

    if (action === "cancel-subscription") {
      // Cancel a subscription (database only - smart contract cancellation happens on frontend)
      const { subscriptionId } = body;
      
      if (!subscriptionId) {
        return NextResponse.json(
          { error: "Subscription ID is required" },
          { status: 400 }
        );
      }

      await service.cancelSubscriptionInDatabase(subscriptionId);

      return NextResponse.json({ 
        success: true, 
        message: "Subscription cancelled successfully" 
      });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Error in POST /api/recurring-payments-smart:", error);
    return NextResponse.json(
      { error: formatError(error) },
      { status: 500 }
    );
  } finally {
    await service.disconnect();
  }
}
