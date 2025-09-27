import {
  SDK,
  HashLock,
  PresetEnum,
  Quote,
  QuoteParams,
  OrderParams,
} from "@1inch/cross-chain-sdk";
import { solidityPackedKeccak256 } from "ethers";
import { randomBytes } from "crypto";
import { BlockchainProvider } from "./blockchain-provider";

// Enhanced logging utility
function logStep(step: string, data?: any) {
  const timestamp = new Date().toISOString();
  console.log(`\n🚀 [${timestamp}] 1INCH FUSION+ - ${step}`);
  if (data) {
    console.log(`📊 Data:`, JSON.stringify(data, null, 2));
  }
  console.log("─".repeat(80));
}

function logSuccess(message: string, data?: any) {
  const timestamp = new Date().toISOString();
  console.log(`✅ [${timestamp}] SUCCESS: ${message}`);
  if (data) {
    console.log(`📊 Result:`, JSON.stringify(data, null, 2));
  }
}

function logError(message: string, error: any) {
  const timestamp = new Date().toISOString();
  console.log(`❌ [${timestamp}] ERROR: ${message}`);
  console.log(`🔍 Error Details:`, error);
}

export class FusionSDKService {
  private blockchainProvider: BlockchainProvider;
  private sdk: SDK;

  constructor(privateKey: string) {
    logStep("INITIALIZING FUSION SDK SERVICE");
    this.blockchainProvider = new BlockchainProvider(privateKey);
    this.sdk = new SDK({
      url: "https://api.1inch.dev/fusion-plus",
      authKey: process.env.DEV_PORTAL_KEY!,
      blockchainProvider: this.blockchainProvider.getConnector("ethereum"),
    });
    logSuccess("Fusion SDK Service initialized", {
      apiUrl: "https://api.1inch.dev/fusion-plus",
      hasAuthKey: !!process.env.DEV_PORTAL_KEY,
      blockchainProvider: "ethereum"
    });
  }

  async getQuote(params: QuoteParams): Promise<Quote> {
    try {
      logStep("STEP 1: GETTING QUOTE", {
        srcChainId: params.srcChainId,
        dstChainId: params.dstChainId,
        srcTokenAddress: params.srcTokenAddress,
        dstTokenAddress: params.dstTokenAddress,
        amount: params.amount,
        walletAddress: params.walletAddress
      });

      const quote = await this.sdk.getQuote({
        srcChainId: params.srcChainId,
        dstChainId: params.dstChainId,
        srcTokenAddress: params.srcTokenAddress,
        dstTokenAddress: params.dstTokenAddress,
        amount: params.amount,
        walletAddress: params.walletAddress,
        enableEstimate: true,
      });

      logSuccess("Quote received successfully", {
        srcAmount: quote.srcAmount?.toString(),
        dstAmount: quote.dstAmount?.toString(),
        recommendedPreset: quote.recommendedPreset,
        hasPresets: !!quote.presets,
        presetsCount: Object.keys(quote.presets || {}).length
      });

      return quote;
    } catch (error) {
      logError("Failed to get quote", error);
      throw error;
    }
  }

  async createOrder(quote: Quote, options: OrderParams & { [k: string]: unknown } = {}) {
    try {
      logStep("STEP 2: CREATING CROSS-CHAIN ORDER", {
        srcChainId: quote.srcChainId,
        dstChainId: quote.dstChainId,
        walletAddress: options.walletAddress,
        receiver: options.receiver,
        source: options.source || "singularity"
      });

      // Get the connector for the source chain where signing will happen
      const sourceChainConnector = this.blockchainProvider.getConnectorForChainId(
        quote.srcChainId
      );

      logStep("STEP 2.1: SETTING UP SOURCE CHAIN CONNECTOR", {
        chainId: quote.srcChainId,
        connectorType: sourceChainConnector.constructor.name
      });

      // Create SDK with the correct connector for the source chain
      const signingSDK = new SDK({
        url: "https://api.1inch.dev/fusion-plus",
        authKey: process.env.DEV_PORTAL_KEY!,
        blockchainProvider: sourceChainConnector,
      });

      logSuccess("Source chain SDK created", {
        chainId: quote.srcChainId,
        apiUrl: "https://api.1inch.dev/fusion-plus"
      });

      const preset = options.preset || PresetEnum.fast;
      const source = options.source || "singularity";

      logStep("STEP 2.2: DETERMINING ORDER PRESET", {
        preset,
        source,
        availablePresets: Object.keys(quote.presets || {})
      });

      const secretsCount =
        quote.presets?.[preset]?.secretsCount ??
        quote.getPreset().secretsCount;
      
      logStep("STEP 2.3: GENERATING SECRETS", {
        secretsCount,
        preset
      });

      // Generate secrets exactly as shown in 1inch docs
      const secrets = Array.from({ length: secretsCount }).map(
        () => "0x" + randomBytes(32).toString("hex")
      );

      logSuccess("Secrets generated", {
        count: secrets.length,
        firstSecret: secrets[0]?.substring(0, 10) + "...",
        lastSecret: secrets[secrets.length - 1]?.substring(0, 10) + "..."
      });

      const secretHashes = secrets.map((secret) =>
        HashLock.hashSecret(secret)
      );

      logStep("STEP 2.4: CREATING SECRET HASHES", {
        secretHashesCount: secretHashes.length,
        firstHash: secretHashes[0]?.substring(0, 10) + "...",
        lastHash: secretHashes[secretHashes.length - 1]?.substring(0, 10) + "..."
      });

      const hashLock =
        secretsCount === 1
          ? HashLock.forSingleFill(secrets[0])
          : HashLock.forMultipleFills(
              HashLock.getMerkleLeaves
                ? HashLock.getMerkleLeaves(secrets)
                : secretHashes.map((secretHash, i) =>
                    solidityPackedKeccak256(
                      ["uint64", "bytes32"],
                      [i, secretHash.toString()]
                    )
                  )
            );

      logStep("STEP 2.5: CREATING HASH LOCK", {
        hashLockType: secretsCount === 1 ? "Single Fill" : "Multiple Fills",
        secretsCount,
        hasMerkleLeaves: !!HashLock.getMerkleLeaves
      });

      const orderParams = {
        walletAddress: options.walletAddress,
        hashLock,
        secretHashes,
        preset,
        source,
        ...options,
      };

      if (options.fee) {
        orderParams.fee = {
          takingFeeBps: options.fee.takingFeeBps || 0,
          takingFeeReceiver:
            options.fee.takingFeeReceiver ||
            "0x0000000000000000000000000000000000000000",
        };
        logStep("STEP 2.6: APPLYING FEE CONFIGURATION", {
          takingFeeBps: orderParams.fee.takingFeeBps,
          takingFeeReceiver: orderParams.fee.takingFeeReceiver
        });
      }

      logStep("STEP 2.7: CALLING CREATE ORDER", {
        orderParams: {
          walletAddress: orderParams.walletAddress,
          receiver: orderParams.receiver,
          preset: orderParams.preset,
          source: orderParams.source,
          secretHashesCount: orderParams.secretHashes.length,
          hasFee: !!orderParams.fee
        }
      });

      // Create the order
      const { hash, quoteId, order } = await signingSDK.createOrder(
        quote,
        orderParams
      );

      logSuccess("Order created successfully", {
        orderHash: hash,
        quoteId,
        orderType: order.constructor.name,
        hasOrder: !!order
      });

      logStep("STEP 3: SUBMITTING ORDER TO RELAYER", {
        orderHash: hash,
        quoteId,
        srcChainId: quote.srcChainId
      });

      // Submit order using the correct SDK method
      try {
        const submitResult = await signingSDK.submitOrder(
          quote.srcChainId,
          order,
          quoteId,
          secretHashes
        );

        logSuccess("Order submitted to relayer successfully", {
          orderHash: hash,
          quoteId,
          submitResult: submitResult
        });

        logStep("STEP 4: ORDER SUBMISSION COMPLETE", {
          orderHash: hash,
          status: "submitted",
          nextStep: "monitoring_for_execution"
        });

      } catch (submitErr) {
        logError("Order submission failed", submitErr);
        throw new Error(`Order submission failed: ${submitErr}`);
      }

      return {
        hash,
        quoteId,
        order,
        secrets,
        secretHashes,
        hashLock,
        preset,
        source,
      };
    } catch (error) {
      logError("Failed to create order", error);
      throw error;
    }
  }

  async getOrderStatus(orderHash: string) {
    try {
      logStep("CHECKING ORDER STATUS", { orderHash });
      const status = await this.sdk.getOrderStatus(orderHash);
      logSuccess("Order status retrieved", { orderHash, status });
      return status;
    } catch (error) {
      logError("Failed to get order status", error);
      throw error;
    }
  }

  async getReadyToAcceptSecretFills(orderHash: string) {
    try {
      logStep("CHECKING READY TO ACCEPT SECRET FILLS", { orderHash });
      const result = await this.sdk.getReadyToAcceptSecretFills(orderHash);
      logSuccess("Ready to accept secret fills check completed", { 
        orderHash, 
        ready: result.ready,
        fillsCount: result.fills?.length || 0
      });
      return result;
    } catch (error) {
      logError("Failed to check ready to accept secret fills", error);
      throw error;
    }
  }

  async submitSecret(orderHash: string, secret: string) {
    try {
      logStep("SUBMITTING SECRET", { 
        orderHash, 
        secret: secret.substring(0, 10) + "..." 
      });
      const result = await this.sdk.submitSecret(orderHash, secret);
      logSuccess("Secret submitted successfully", { 
        orderHash, 
        secret: secret.substring(0, 10) + "...",
        result 
      });
      return result;
    } catch (error) {
      logError("Failed to submit secret", error);
      throw error;
    }
  }

  async getPublishedSecrets(orderHash: string) {
    try {
      logStep("GETTING PUBLISHED SECRETS", { orderHash });
      const result = await this.sdk.getPublishedSecrets(orderHash);
      logSuccess("Published secrets retrieved", { 
        orderHash, 
        secretsCount: result?.length || 0 
      });
      return result;
    } catch (error) {
      logError("Failed to get published secrets", error);
      throw error;
    }
  }
}
