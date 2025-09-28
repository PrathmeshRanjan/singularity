import { NextResponse } from "next/server";
import { Client } from "pg";
import { v4 as uuidv4 } from "uuid";
import { FusionSDKService } from "@/lib/fusion-sdk-service";
import { createSingularitySwapParams, PYUSD_ETHEREUM } from "@/lib/constants";
import { NetworkEnum } from "@1inch/cross-chain-sdk";

const DATABASE_URL = process.env.DATABASE_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!DATABASE_URL || !PRIVATE_KEY) {
    throw new Error(
        "Missing required environment variables: DATABASE_URL or PRIVATE_KEY"
    );
}

// Initialize the Fusion SDK service
const fusionSDK = new FusionSDKService(PRIVATE_KEY);

// Enhanced logging utility for API endpoints
function logApiStep(step: string, data?: any) {
  const timestamp = new Date().toISOString();
  console.log(`\n🌐 [${timestamp}] API ENDPOINT - ${step}`);
  if (data) {
    console.log(`📊 Data:`, JSON.stringify(data, null, 2));
  }
  console.log("─".repeat(80));
}

function logApiSuccess(message: string, data?: any) {
  const timestamp = new Date().toISOString();
  console.log(`✅ [${timestamp}] API SUCCESS: ${message}`);
  if (data) {
    console.log(`📊 Result:`, JSON.stringify(data, null, 2));
  }
}

function logApiError(message: string, error: any) {
  const timestamp = new Date().toISOString();
  console.log(`❌ [${timestamp}] API ERROR: ${message}`);
  console.log(`🔍 Error Details:`, error);
}

function formatError(error: unknown): string {
    try {
        if (
            typeof error === "object" &&
            error !== null &&
            "response" in error &&
            typeof (error as { response?: unknown }).response === "object" &&
            (
                error as {
                    response?: {
                        data?: unknown;
                        status?: number;
                        statusText?: string;
                    };
                }
            ).response !== null
        ) {
            const resp = (
                error as {
                    response: {
                        data?: unknown;
                        status?: number;
                        statusText?: string;
                    };
                }
            ).response;
            const msgParts: string[] = [];
            if (typeof resp.status === "number")
                msgParts.push(`status=${resp.status}`);
            if (resp.statusText) msgParts.push(resp.statusText);

            const dataUnknown: unknown = resp.data;
            if (dataUnknown) {
                if (typeof dataUnknown === "string") msgParts.push(dataUnknown);
                else if (typeof dataUnknown === "object") {
                    const obj = dataUnknown as Record<string, unknown>;
                    if (typeof obj.message === "string")
                        msgParts.push(obj.message);
                    if (typeof obj.error === "string") msgParts.push(obj.error);
                    if (obj.errors) msgParts.push(JSON.stringify(obj.errors));
                }
            }
            return msgParts.length ? msgParts.join(" | ") : "Bad Request";
        }
    } catch {
        // fallthrough
    }
    return error instanceof Error ? error.message : "An unknown error occurred";
}

// Helper to get a new DB client and connect
async function getDbClient() {
    const client = new Client({
        connectionString: DATABASE_URL,
    });
    await client.connect();
    return client;
}

function replacer(key: string, value: unknown) {
    return typeof value === "bigint" ? value.toString() : value;
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const action = searchParams.get("action");
        const orderHash = searchParams.get("orderHash");

        logApiStep("GET REQUEST RECEIVED", {
            action,
            orderHash: orderHash ? orderHash.substring(0, 10) + "..." : null,
            url: request.url
        });

        if (action === "quote") {
            const srcChainIdStr =
                searchParams.get("srcChainId") ||
                NetworkEnum.ARBITRUM.toString();
            const srcTokenAddress = searchParams.get("srcTokenAddress");
            const amount = searchParams.get("amount");
            const walletAddress = searchParams.get("walletAddress");

            logApiStep("PROCESSING QUOTE REQUEST", {
                srcChainId: srcChainIdStr,
                srcTokenAddress,
                amount,
                walletAddress: walletAddress ? walletAddress.substring(0, 10) + "..." : null
            });

            if (!walletAddress || !srcTokenAddress || !amount) {
                logApiError("Missing required parameters for quote", {
                    hasWalletAddress: !!walletAddress,
                    hasSrcTokenAddress: !!srcTokenAddress,
                    hasAmount: !!amount
                });
                return NextResponse.json(
                    { error: "Missing required parameters" },
                    { status: 400 }
                );
            }

            try {
                // Create swap parameters for Singularity (always to Ethereum PYUSD)
                const swapParams = createSingularitySwapParams(
                    parseInt(srcChainIdStr),
                    srcTokenAddress,
                    amount,
                    walletAddress
                );

                logApiStep("CREATING SWAP PARAMETERS", {
                    srcChainId: swapParams.srcChainId,
                    dstChainId: swapParams.dstChainId,
                    srcTokenAddress: swapParams.srcTokenAddress,
                    dstTokenAddress: swapParams.dstTokenAddress,
                    amount: swapParams.amount,
                    walletAddress: swapParams.walletAddress.substring(0, 10) + "..."
                });

                const quote = await fusionSDK.getQuote(swapParams);
                const jsonSafeBody = JSON.parse(
                    JSON.stringify(
                        { swapParams, quote },
                        replacer
                    )
                );
                
                logApiSuccess("Quote request completed successfully", {
                    srcAmount: quote.srcAmount?.toString(),
                    dstAmount: quote.dstAmount?.toString(),
                    recommendedPreset: quote.recommendedPreset
                });

                return NextResponse.json(jsonSafeBody);
            } catch (error: unknown) {
                logApiError("Error getting quote", error);
                return NextResponse.json(
                    { error: formatError(error) },
                    { status: 400 }
                );
            }
        } else if (action === "status" && orderHash) {
            logApiStep("CHECKING ORDER STATUS", { orderHash });
            
            const client = new Client(DATABASE_URL);
            try {
                await client.connect();
                const { rows } = await client.query(
                    "SELECT status, attempts FROM fusion_orders WHERE order_hash = $1",
                    [orderHash]
                );
                const status = rows[0] ? rows[0].status : "not_found";
                
                logApiSuccess("Order status retrieved", { 
                    orderHash, 
                    status,
                    attempts: rows[0]?.attempts || 0
                });
                
                return NextResponse.json({ status });
            } catch (error: unknown) {
                logApiError("Error getting order status", error);
                return NextResponse.json(
                    { error: formatError(error) },
                    { status: 500 }
                );
            } finally {
                await client.end();
            }
        }

        logApiError("Invalid action or missing parameters", { action, orderHash });
        return NextResponse.json(
            { message: "Invalid action or missing parameters" },
            { status: 400 }
        );
    } catch (error: unknown) {
        logApiError("Unhandled error in GET handler", error);
        return NextResponse.json(
            { error: formatError(error) },
            { status: 400 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { action } = body;

        logApiStep("POST REQUEST RECEIVED", {
            action,
            hasBody: !!body
        });

        if (action === "create-swap") {
            const { srcChainId, srcTokenAddress, amount, walletAddress } = body as {
                srcChainId: number;
                srcTokenAddress: string;
                amount: string;
                walletAddress: string;
            };

            logApiStep("PROCESSING CREATE SWAP REQUEST", {
                srcChainId,
                srcTokenAddress,
                amount,
                walletAddress: walletAddress ? walletAddress.substring(0, 10) + "..." : null
            });

            if (!srcChainId || !srcTokenAddress || !amount || !walletAddress) {
                logApiError("Missing required parameters for create swap", {
                    hasSrcChainId: !!srcChainId,
                    hasSrcTokenAddress: !!srcTokenAddress,
                    hasAmount: !!amount,
                    hasWalletAddress: !!walletAddress
                });
                return NextResponse.json(
                    { error: "Missing required parameters" },
                    { status: 400 }
                );
            }

            try {
                // Create swap parameters for Singularity (always to Ethereum PYUSD)
                const swapParams = createSingularitySwapParams(
                    srcChainId,
                    srcTokenAddress,
                    amount,
                    walletAddress
                );

                logApiStep("CREATING SWAP PARAMETERS", {
                    srcChainId: swapParams.srcChainId,
                    dstChainId: swapParams.dstChainId,
                    srcTokenAddress: swapParams.srcTokenAddress,
                    dstTokenAddress: swapParams.dstTokenAddress,
                    amount: swapParams.amount,
                    walletAddress: swapParams.walletAddress.substring(0, 10) + "..."
                });

                // Get quote
                logApiStep("GETTING QUOTE", { swapParams });
                const quote = await fusionSDK.getQuote(swapParams);

                // Create and submit order
                logApiStep("CREATING AND SUBMITTING ORDER", {
                    walletAddress: walletAddress.substring(0, 10) + "...",
                    receiver: walletAddress.substring(0, 10) + "...",
                    source: "singularity"
                });

                const orderResult = await fusionSDK.createOrder(quote, {
                    walletAddress,
                    receiver: walletAddress,
                    source: "singularity",
                });

                logApiSuccess("Order created and submitted successfully", {
                    orderHash: orderResult.hash,
                    quoteId: orderResult.quoteId,
                    secretsCount: orderResult.secrets.length,
                    preset: orderResult.preset,
                    source: orderResult.source
                });

                // Store order in database
                logApiStep("STORING ORDER IN DATABASE", {
                    orderHash: orderResult.hash,
                    secretsCount: orderResult.secrets.length
                });

                const client = await getDbClient();
                try {
                    await client.query(
                        `INSERT INTO fusion_orders (order_hash, secrets, status, attempts)
                         VALUES ($1, $2, 'pending', 0)
                         ON CONFLICT (order_hash) DO NOTHING`,
                        [orderResult.hash, JSON.stringify(orderResult.secrets)]
                    );

                    logApiSuccess("Order stored in database successfully", {
                        orderHash: orderResult.hash,
                        status: "pending"
                    });
                } finally {
                    await client.end();
                }

                logApiSuccess("CREATE SWAP REQUEST COMPLETED", {
                    orderHash: orderResult.hash,
                    status: "pending",
                    message: "Order created and submitted successfully"
                });

                return NextResponse.json({
                    orderHash: orderResult.hash,
                    status: "pending",
                    message: "Order created and submitted successfully",
                });
            } catch (error: unknown) {
                logApiError("Error creating swap", error);
                return NextResponse.json(
                    { error: formatError(error) },
                    { status: 500 }
                );
            }
        }

        logApiError("Invalid action", { action });
        return NextResponse.json(
            { message: "Invalid action" },
            { status: 400 }
        );
    } catch (error: unknown) {
        logApiError("Unhandled error in POST handler", error);
        return NextResponse.json(
            { error: formatError(error) },
            { status: 400 }
        );
    }
}
