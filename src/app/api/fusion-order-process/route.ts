import { NextResponse } from "next/server";
import { Client } from "pg";
import { FusionSDKService } from "@/lib/fusion-sdk-service";

const DATABASE_URL = process.env.DATABASE_URL;
const CRON_SECRET = process.env.CRON_SECRET;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!DATABASE_URL || !CRON_SECRET || !PRIVATE_KEY) {
  throw new Error(
    "Missing required environment variables: DATABASE_URL, CRON_SECRET, or PRIVATE_KEY"
  );
}

// Initialize the Fusion SDK service
const fusionSDK = new FusionSDKService(PRIVATE_KEY);

// Enhanced logging utility for order processing
function logOrderStep(step: string, orderHash: string, data?: any) {
  const timestamp = new Date().toISOString();
  console.log(`\n🔄 [${timestamp}] ORDER PROCESSING - ${step}`);
  console.log(`📋 Order Hash: ${orderHash}`);
  if (data) {
    console.log(`📊 Data:`, JSON.stringify(data, null, 2));
  }
  console.log("─".repeat(80));
}

function logOrderSuccess(message: string, orderHash: string, data?: any) {
  const timestamp = new Date().toISOString();
  console.log(`✅ [${timestamp}] ORDER SUCCESS: ${message}`);
  console.log(`📋 Order Hash: ${orderHash}`);
  if (data) {
    console.log(`📊 Result:`, JSON.stringify(data, null, 2));
  }
}

function logOrderError(message: string, orderHash: string, error: any) {
  const timestamp = new Date().toISOString();
  console.log(`❌ [${timestamp}] ORDER ERROR: ${message}`);
  console.log(`📋 Order Hash: ${orderHash}`);
  console.log(`🔍 Error Details:`, error);
}

// Structured logging function
function logMessage(
  level: "info" | "warn" | "error",
  message: string,
  context: Record<string, any> = {}
) {
  console[level](
    JSON.stringify({
      timestamp: new Date().toISOString(),
      level,
      message,
      ...context,
    })
  );
}

function formatError(error: unknown): string {
  return error instanceof Error ? error.message : "An unknown error occurred";
}

async function getOrderStatusWithRetry(
  orderHash: string,
  retries = 3
): Promise<any> {
  try {
    logOrderStep("CHECKING ORDER STATUS", orderHash, { retries });
    const status = await fusionSDK.getOrderStatus(orderHash);
    logOrderSuccess("Order status retrieved", orderHash, { status });
    return status;
  } catch (err: any) {
    if (err?.response?.status === 429 && retries > 0) {
      const delay = (4 - retries) * 1000;
      logMessage(
        "warn",
        `Rate limited getting order status. Retrying in ${delay}ms`,
        { orderHash, retries }
      );
      await new Promise((res) => setTimeout(res, delay));
      return getOrderStatusWithRetry(orderHash, retries - 1);
    }
    logOrderError("Failed to get order status", orderHash, err);
    throw err;
  }
}

async function getReadyToAcceptSecretFillsWithRetry(
  orderHash: string,
  retries = 3
): Promise<any> {
  try {
    logOrderStep("CHECKING READY TO ACCEPT SECRET FILLS", orderHash, { retries });
    const result = await fusionSDK.getReadyToAcceptSecretFills(orderHash);
    logOrderSuccess("Ready to accept secret fills check completed", orderHash, { 
      ready: result.ready,
      fillsCount: result.fills?.length || 0
    });
    return result;
  } catch (err: any) {
    if (err?.response?.status === 429 && retries > 0) {
      const delay = (4 - retries) * 1000;
      logMessage(
        "warn",
        `Rate limited getting ready to accept fills. Retrying in ${delay}ms`,
        { orderHash, retries }
      );
      await new Promise((res) => setTimeout(res, delay));
      return getReadyToAcceptSecretFillsWithRetry(orderHash, retries - 1);
    }
    logOrderError("Failed to check ready to accept secret fills", orderHash, err);
    throw err;
  }
}

async function submitSecretWithRetry(
  orderHash: string,
  secret: string,
  retries = 3
): Promise<any> {
  try {
    logOrderStep("SUBMITTING SECRET", orderHash, { 
      secret: secret.substring(0, 10) + "...",
      retries 
    });
    const result = await fusionSDK.submitSecret(orderHash, secret);
    logOrderSuccess("Secret submitted successfully", orderHash, { 
      secret: secret.substring(0, 10) + "...",
      result 
    });
    return result;
  } catch (err: any) {
    if (err?.response?.status === 429 && retries > 0) {
      const delay = (4 - retries) * 1000;
      logMessage(
        "warn",
        `Rate limited submitting secret. Retrying in ${delay}ms`,
        { orderHash, retries }
      );
      await new Promise((res) => setTimeout(res, delay));
      return submitSecretWithRetry(orderHash, secret, retries - 1);
    }
    logOrderError("Failed to submit secret", orderHash, err);
    throw err;
  }
}

async function cleanupExpiredPreparations(client: Client) {
  try {
    await client.query(
      "DELETE FROM fusion_order_preparations WHERE expires_at < NOW()"
    );
    logMessage("info", "Cleaned up expired order preparations.");
  } catch (error) {
    logMessage("error", "Error cleaning up expired order preparations:", {
      error: formatError(error),
    });
  }
}

async function cleanupOldOrders(client: Client) {
  try {
    await client.query(
      "DELETE FROM fusion_orders WHERE status IN ('executed', 'timeout') AND updated_at < NOW() - INTERVAL '7 days'"
    );
    logMessage("info", "Cleaned up old orders");
  } catch (error) {
    logMessage("error", "Error cleaning up old orders:", {
      error: formatError(error),
    });
  }
}

export async function POST(request: Request) {
  // Check Authorization header
  const authHeader = request.headers.get("Authorization");
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    logMessage("error", "Unauthorized access attempt", { authHeader });
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const client = new Client({
    connectionString: DATABASE_URL,
  });

  try {
    await client.connect();

    // Run cleanup functions with a 10% chance
    if (Math.random() < 0.1) {
      await cleanupExpiredPreparations(client);
      await cleanupOldOrders(client);
    }

    // Fetch up to 50 pending orders to avoid timeout
    const { rows } = await client.query(
      "SELECT order_hash, secrets, attempts FROM fusion_orders WHERE status = 'pending' LIMIT 50"
    );

    if (rows.length === 0) {
      logMessage("info", "No pending orders to process");
      return NextResponse.json({ message: "No pending orders to process" });
    }

    logMessage("info", `Found ${rows.length} pending orders to process`);

    const maxAttempts = 10; // ~10 minutes with 1m intervals

    for (const order of rows) {
      const orderHash = order.order_hash;
      let secrets: string[];
      
      logOrderStep("STARTING ORDER PROCESSING", orderHash, {
        attempts: order.attempts,
        maxAttempts
      });

      try {
        if (typeof order.secrets === "string") {
          secrets = JSON.parse(order.secrets);
        } else if (Array.isArray(order.secrets)) {
          secrets = order.secrets;
        } else {
          throw new Error(
            "Invalid secrets format: expected JSON string or array"
          );
        }

        if (
          !Array.isArray(secrets) ||
          !secrets.every((s) => typeof s === "string" && s.startsWith("0x"))
        ) {
          throw new Error(
            "Invalid secrets format: must be an array of hex strings"
          );
        }

        logOrderSuccess("Secrets validated", orderHash, {
          secretsCount: secrets.length,
          firstSecret: secrets[0]?.substring(0, 10) + "..."
        });

      } catch (err: unknown) {
        const errorMessage = formatError(err);
        await client.query(
          "UPDATE fusion_orders SET status = 'error', error_message = $1, updated_at = NOW() WHERE order_hash = $2",
          [errorMessage, orderHash]
        );
        logOrderError("Invalid secrets format", orderHash, {
          error: errorMessage,
          secrets: order.secrets,
        });
        continue;
      }

      const attempts = order.attempts;

      if (attempts >= maxAttempts) {
        await client.query(
          "UPDATE fusion_orders SET status = 'timeout', updated_at = NOW() WHERE order_hash = $1",
          [orderHash]
        );
        logOrderError("Order timed out", orderHash, {
          attempts,
          maxAttempts
        });
        continue;
      }

      try {
        logOrderStep("CHECKING ORDER STATUS", orderHash, { attempts: attempts + 1 });
        const orderStatus = await getOrderStatusWithRetry(orderHash);
        
        if (orderStatus.status === "executed") {
          await client.query(
            "UPDATE fusion_orders SET status = 'executed', updated_at = NOW() WHERE order_hash = $1",
            [orderHash]
          );
          logOrderSuccess("Order executed successfully", orderHash, { status: orderStatus.status });
          continue;
        }

        logOrderStep("CHECKING FOR READY FILLS", orderHash);
        const fillsObject = await getReadyToAcceptSecretFillsWithRetry(orderHash);
        
        if (fillsObject?.fills?.length > 0) {
          logOrderSuccess("Fills ready for secret submission", orderHash, {
            fillsCount: fillsObject.fills.length,
            fills: fillsObject.fills
          });

          for (const fill of fillsObject.fills as { idx: number }[]) {
            if (fill.idx >= 0 && fill.idx < secrets.length) {
              logOrderStep("SUBMITTING SECRET FOR FILL", orderHash, {
                fillIdx: fill.idx,
                secret: secrets[fill.idx].substring(0, 10) + "..."
              });
              
              await submitSecretWithRetry(orderHash, secrets[fill.idx]);
              
              logOrderSuccess("Secret submitted for fill", orderHash, {
                fillIdx: fill.idx,
                secret: secrets[fill.idx].substring(0, 10) + "..."
              });
            } else {
              logOrderError("Invalid fill index", orderHash, {
                fillIdx: fill.idx,
                secretsLength: secrets.length
              });
            }
          }
        } else {
          logOrderStep("NO FILLS READY", orderHash, {
            ready: fillsObject.ready,
            fillsCount: fillsObject.fills?.length || 0
          });
        }

        await client.query(
          "UPDATE fusion_orders SET attempts = attempts + 1, updated_at = NOW() WHERE order_hash = $1",
          [orderHash]
        );
        
        logOrderSuccess("Order processing attempt completed", orderHash, {
          attempts: attempts + 1,
          maxAttempts
        });

      } catch (err: unknown) {
        const errorMessage = formatError(err);
        await client.query(
          "UPDATE fusion_orders SET status = 'error', error_message = $1, updated_at = NOW() WHERE order_hash = $2",
          [errorMessage, orderHash]
        );
        logOrderError("Error processing order", orderHash, {
          error: errorMessage,
          attempts: attempts + 1
        });
      }
    }

    logMessage("info", `Completed processing ${rows.length} orders`);
    return NextResponse.json({ message: `Processed ${rows.length} orders` });
  } catch (error: unknown) {
    const errorMessage = formatError(error);
    logMessage("error", `Error in order processing: ${errorMessage}`, {
      error: errorMessage,
    });
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  } finally {
    await client.end();
  }
}
