# 💳 Cross-Chain Recurring Payments: Ethereum PYUSD Enforcement

### **Key Components Added:**

#### **1. Cross-Chain Payment Service** (`src/lib/recurring-payments/cross-chain-payment-service.ts`)

-   **Enforces Ethereum PYUSD**: All payments automatically route to Ethereum PYUSD
-   **Uses 1inch Fusion+**: Leverages the existing cross-chain swap infrastructure
-   **Comprehensive Logging**: Detailed tracking of every payment step
-   **Database Integration**: Stores cross-chain payment data

#### **2. Enhanced Processing Route** (`src/app/api/recurring-payments-smart/process/route.ts`)

-   **Dual Processing**: Handles both same-chain and cross-chain payments
-   **Automatic Detection**: Identifies which subscriptions need cross-chain processing
-   **Unified Logging**: Consistent logging across all payment types

#### **3. Database Schema Updates** (`database-schema-update.sql`)

-   **Cross-Chain Fields**: Added support for source/destination chain tracking
-   **PYUSD Enforcement**: Default destination is always Ethereum PYUSD
-   **Order Tracking**: Links subscriptions to 1inch Fusion+ orders

## 🔄 **How It Works Now**

### **Step 1: Subscription Creation**

```typescript
// User creates subscription on Base with USDC
const subscription = {
    srcChainId: 8453, // Base
    srcTokenAddress: "0x...", // USDC on Base
    dstChainId: 1, // ALWAYS Ethereum
    dstTokenAddress: "0x6c3ea9036406852006290770BEdFcAbA0e23a0e8", // ALWAYS PYUSD
    isCrossChain: true, // Marked as cross-chain
};
```

### **Step 2: Payment Processing (Cron Job)**

```typescript
// Every minute, the cron job:
1. Fetches due subscriptions
2. Identifies cross-chain vs same-chain
3. For cross-chain subscriptions:
   - Creates 1inch Fusion+ swap parameters
   - Always routes to Ethereum PYUSD
   - Submits cross-chain order
   - Monitors order completion
```

### **Step 3: Cross-Chain Execution**

```typescript
// The system automatically:
1. Gets quote from 1inch Fusion+
2. Creates order (Base USDC → Ethereum PYUSD)
3. Submits to 1inch relayer network
4. Monitors order status
5. Submits secrets when ready
6. Completes cross-chain swap
```

## 🎯 **PYUSD Enforcement Mechanisms**

### **1. Hardcoded Constants**

```typescript
// In constants.ts
export const PYUSD_ETHEREUM = "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8";

// In cross-chain-payment-service.ts
const swapParams = createSingularitySwapParams(
    srcChainId, // Source chain (any supported chain)
    srcTokenAddress, // Source token (any token)
    amount, // Amount
    subscriber // User's wallet
);
// Always routes to Ethereum PYUSD automatically
```

### **2. Database Defaults**

```sql
-- All subscriptions default to Ethereum PYUSD
dst_chain_id INTEGER DEFAULT 1, -- Always Ethereum
dst_token_address TEXT DEFAULT '0x6c3ea9036406852006290770BEdFcAbA0e23a0e8', -- PYUSD
```

### **3. Service-Level Enforcement**

```typescript
// CrossChainPaymentService always uses createSingularitySwapParams
// which automatically sets destination to Ethereum PYUSD
const swapParams = createSingularitySwapParams(
    srcChainId, // Any source chain
    srcTokenAddress, // Any source token
    amount, // Any amount
    walletAddress // User's wallet
);
// Destination is ALWAYS Ethereum PYUSD
```

## 📊 **Payment Flow Diagram**

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   User Wallet   │    │  1inch Fusion+   │    │   Payee Wallet  │
│ (Any Chain)     │───▶│  (Cross-Chain)   │───▶│  (Ethereum)     │
│ (Any Token)     │    │                  │    │  (PYUSD)        │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  Subscription   │    │  Order Tracking  │    │  Payment Logs   │
│  (Database)     │    │  (Database)      │    │  (Terminal)     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## �� **Implementation Steps**

### **1. Update Database Schema**

```bash
# Run the database update
psql -d your_database -f database-schema-update.sql
```

### **2. Deploy Updated Code**

The new files are already created and ready to use:

-   `src/lib/recurring-payments/cross-chain-payment-service.ts`
-   `src/app/api/recurring-payments-smart/process/route.ts`

### **3. Test Cross-Chain Payments**

```bash
# Test the enhanced logging
npm run test-logging

# Monitor payment processing
tail -f logs/recurring-payments.log
```

## 🎯 **Benefits of This Solution**

### **1. Guaranteed PYUSD Destination**

-   **100% Enforcement**: All payments automatically route to Ethereum PYUSD
-   **No User Override**: Users cannot change the destination
-   **Consistent Results**: Every subscription payment ends up as PYUSD on Ethereum

### **2. Seamless Cross-Chain Experience**

-   **Any Source Chain**: Users can create subscriptions from any supported chain
-   **Any Source Token**: Users can pay with any supported token
-   **Automatic Conversion**: System handles all cross-chain complexity

### **3. Comprehensive Monitoring**

-   **Detailed Logging**: Every step is logged with timestamps
-   **Order Tracking**: Full visibility into 1inch Fusion+ orders
-   **Error Handling**: Robust error handling and retry logic

### **4. Database Integration**

-   **Complete Audit Trail**: All payments are tracked in the database
-   **Order Linking**: Subscriptions are linked to their cross-chain orders
-   **Status Tracking**: Real-time status updates for all payments

## 🚀 **What Happens Now**

1. **User creates subscription** on any supported chain with any token
2. **System automatically marks** it as cross-chain payment
3. **Cron job processes** the subscription every minute
4. **1inch Fusion+ swap** is created (Source Token → Ethereum PYUSD)
5. **Order is submitted** to 1inch relayer network
6. **Background monitoring** tracks order completion
7. **Secrets are submitted** when order is ready
8. **Payment completes** with PYUSD delivered to payee on Ethereum

## ✅ **Verification**

To verify that all payments are routed to Ethereum PYUSD:

1. **Check the logs** - Every payment will show:

    ```
    💳 CROSS-CHAIN PAYMENT - CREATING SWAP PARAMETERS
    📊 Data: {
      "dstChainId": 1,           // Always Ethereum
      "dstTokenAddress": "0x6c3ea9036406852006290770BEdFcAbA0e23a0e8" // Always PYUSD
    }
    ```

2. **Check the database** - All subscriptions will have:

    ```sql
    SELECT dst_chain_id, dst_token_address FROM subscription_plans;
    -- Results: dst_chain_id = 1, dst_token_address = '0x6c3ea9036406852006290770BEdFcAbA0e23a0e8'
    ```

3. **Check the 1inch orders** - All orders will show Ethereum PYUSD as destination

The system now **guarantees** that every subscription payment is converted to PYUSD on Ethereum, regardless of the source chain or token!
