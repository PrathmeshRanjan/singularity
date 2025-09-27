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
    console.log("🚀 API Route: POST /api/recurring-payments-smart called");
    await service.connect();
    console.log("✅ API Route: Database service connected");
    
    const body = await request.json();
    console.log("📋 API Route: Request body received:", JSON.stringify(body, null, 2));
    const { action } = body;

    if (action === "create-subscription") {
      console.log("🎯 API Route: Processing create-subscription action");
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

      console.log("🔍 API Route: Extracted fields:", {
        subscriptionId,
        subscriberAddress,
        payeeAddress,
        srcChainId,
        srcTokenAddress,
        amount,
        intervalSeconds,
        maxPayments,
        txHash
      });

      if (!subscriptionId || !subscriberAddress || !payeeAddress || !srcChainId || !srcTokenAddress || !amount || !intervalSeconds || !maxPayments || !txHash) {
        console.error("❌ API Route: Missing required fields");
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }

      console.log("💾 API Route: Calling service.storeSubscription...");
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

      console.log("✅ API Route: Subscription stored with ID:", storedSubscriptionId);

      // Get the stored subscription
      console.log("📖 API Route: Retrieving stored subscription details...");
      const subscription = await service.getSubscriptionDetails(storedSubscriptionId);
      console.log("📋 API Route: Retrieved subscription:", subscription);

      const response = { 
        success: true, 
        subscriptionId: storedSubscriptionId, 
        subscription,
        message: "Subscription stored successfully" 
      };
      console.log("🎉 API Route: Sending success response:", response);

      return NextResponse.json(response);
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
