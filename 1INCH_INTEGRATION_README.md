# 1inch Fusion+ SDK Integration for Singularity

This document explains the correct implementation of the 1inch Fusion+ SDK based on the reference implementation in the `/1inch` folder.

## Key Changes Made

### 1. Correct SDK Initialization
The original implementation was missing the `blockchainProvider` parameter. The correct implementation requires:

```typescript
const sdk = new SDK({
  url: "https://api.1inch.dev/fusion-plus",
  authKey: DEV_PORTAL_KEY,
  blockchainProvider: blockchainProvider.getConnector("ethereum"), // This was missing!
});
```

### 2. Blockchain Provider Connector
Created a custom `ProviderConnector` that implements the interface expected by the 1inch SDK:

- `src/lib/blockchain-provider.ts` - Implements the required interface
- Handles wallet operations, signing, and RPC calls
- Supports multiple networks (Ethereum, Arbitrum, Polygon, etc.)

### 3. Correct Order Creation and Submission
The reference implementation shows that orders should be created and submitted in one step:

```typescript
// Create order
const { hash, quoteId, order } = await signingSDK.createOrder(quote, orderParams);

// Submit order immediately
await signingSDK.submitOrder(quote.srcChainId, order, quoteId, secretHashes);
```

### 4. Network-Specific SDK Instances
Each network requires its own SDK instance with the correct blockchain provider:

```typescript
const sourceChainConnector = blockchainProvider.getConnectorForChainId(chainId);
const sourceChainSDK = new SDK({
  url: "https://api.1inch.dev/fusion-plus",
  authKey: DEV_PORTAL_KEY,
  blockchainProvider: sourceChainConnector,
});
```

## Files Created/Updated

### New Files:
1. `src/lib/blockchain-provider.ts` - Blockchain provider connector
2. `src/lib/fusion-sdk-service.ts` - Wrapper service for the SDK
3. `src/lib/constants.ts` - Network and token constants
4. `src/app/api/fusion-order/route-new.ts` - Updated route with correct implementation
5. `src/app/api/fusion-order-process/route-new.ts` - Updated processing route

### Key Features:
- **Always routes to Ethereum PYUSD** - As per your requirement
- **Proper error handling** - Comprehensive error formatting and retry logic
- **Network support** - Supports Arbitrum, Polygon, Optimism, Base, etc. as source chains
- **Secret management** - Proper handling of secrets and secret hashes
- **Database integration** - Maintains order tracking in PostgreSQL

## Environment Variables Required

Add these to your `.env` file:

```env
# 1inch API
DEV_PORTAL_KEY=your_1inch_api_key

# Database
DATABASE_URL=your_postgresql_connection_string

# Blockchain RPC URLs
ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/your_project_id
ARBITRUM_RPC_URL=https://arb1.arbitrum.io/rpc
POLYGON_RPC_URL=https://polygon-rpc.com
OPTIMISM_RPC_URL=https://mainnet.optimism.io
BASE_RPC_URL=https://mainnet.base.org
GNOSIS_RPC_URL=https://rpc.gnosischain.com

# Private key for signing transactions
PRIVATE_KEY=0x_your_private_key

# Cron secret for order processing
CRON_SECRET=your_cron_secret
```

## Usage Examples

### 1. Get a Quote
```bash
GET /api/fusion-order?action=quote&srcChainId=42161&srcTokenAddress=0x...&amount=1000000&walletAddress=0x...
```

### 2. Create a Swap
```bash
POST /api/fusion-order
{
  "action": "create-swap",
  "srcChainId": 42161,
  "srcTokenAddress": "0x...",
  "amount": "1000000",
  "walletAddress": "0x..."
}
```

### 3. Check Order Status
```bash
GET /api/fusion-order?action=status&orderHash=0x...
```

## Database Schema

The implementation expects these tables:

```sql
-- Order preparations (temporary storage)
CREATE TABLE fusion_order_preparations (
  preparation_id UUID PRIMARY KEY,
  live_quote_json JSONB,
  secrets_json JSONB,
  order_params_json JSONB,
  order_struct_json JSONB,
  quote_id TEXT,
  expires_at TIMESTAMP,
  extension_data TEXT,
  order_hash TEXT
);

-- Active orders
CREATE TABLE fusion_orders (
  order_hash TEXT PRIMARY KEY,
  secrets JSONB,
  status TEXT DEFAULT 'pending',
  attempts INTEGER DEFAULT 0,
  error_message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Migration Steps

1. **Install dependencies** (if not already installed):
   ```bash
   npm install @1inch/cross-chain-sdk ethers
   ```

2. **Add environment variables** to your `.env` file

3. **Replace the route files**:
   ```bash
   # Backup original files
   mv src/app/api/fusion-order/route.ts src/app/api/fusion-order/route-old.ts
   mv src/app/api/fusion-order-process/route.ts src/app/api/fusion-order-process/route-old.ts
   
   # Use new implementations
   mv src/app/api/fusion-order/route-new.ts src/app/api/fusion-order/route.ts
   mv src/app/api/fusion-order-process/route-new.ts src/app/api/fusion-order-process/route.ts
   ```

4. **Test the implementation** with a small amount first

## Key Differences from Original

1. **SDK Initialization**: Now includes `blockchainProvider`
2. **Order Flow**: Simplified to create and submit in one step
3. **Network Handling**: Proper network-specific SDK instances
4. **Error Handling**: More comprehensive error formatting
5. **Constants**: Centralized token addresses and network configs
6. **Service Layer**: Clean separation of concerns with `FusionSDKService`

## Testing

The implementation includes comprehensive error handling and logging. Check the console logs for detailed information about:

- Quote generation
- Order creation
- Order submission
- Secret submission
- Error details

## Support

If you encounter issues:

1. Check the console logs for detailed error messages
2. Verify all environment variables are set correctly
3. Ensure your RPC URLs are working and have sufficient rate limits
4. Test with small amounts first
5. Verify your 1inch API key has the correct permissions

The implementation follows the exact pattern from the reference `/1inch` folder, ensuring compatibility with the 1inch Fusion+ API.
