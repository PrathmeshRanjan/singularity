-- Fixed migration script to add cross-chain support to existing database
-- This safely updates your existing tables without losing data

-- First, let's check what columns exist in fusion_orders table
-- and add the missing subscription_id column if it doesn't exist
DO $$
BEGIN
    -- Add subscription_id column to fusion_orders if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'fusion_orders' 
        AND column_name = 'subscription_id'
    ) THEN
        ALTER TABLE fusion_orders ADD COLUMN subscription_id VARCHAR(66);
        RAISE NOTICE 'Added subscription_id column to fusion_orders table';
    ELSE
        RAISE NOTICE 'subscription_id column already exists in fusion_orders table';
    END IF;
END $$;

-- Now add cross-chain columns to existing subscription_plans table
ALTER TABLE subscription_plans 
ADD COLUMN IF NOT EXISTS dst_chain_id INTEGER DEFAULT 1, -- Always Ethereum
ADD COLUMN IF NOT EXISTS dst_token_address VARCHAR(42) DEFAULT '0x6c3ea9036406852006290770BEdFcAbA0e23a0e8', -- PYUSD
ADD COLUMN IF NOT EXISTS is_cross_chain BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS fusion_order_hash VARCHAR(66);

-- Update existing subscriptions to have cross-chain fields
-- This sets all existing subscriptions to route to Ethereum PYUSD
UPDATE subscription_plans 
SET 
    dst_chain_id = 1, -- Ethereum
    dst_token_address = '0x6c3ea9036406852006290770BEdFcAbA0e23a0e8', -- PYUSD
    is_cross_chain = CASE 
        WHEN src_chain_id != 1 THEN true  -- Cross-chain if not already on Ethereum
        ELSE false  -- Same-chain if already on Ethereum
    END
WHERE dst_chain_id IS NULL;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_fusion_orders_status 
    ON fusion_orders(status);

CREATE INDEX IF NOT EXISTS idx_fusion_orders_created_at 
    ON fusion_orders(created_at);

CREATE INDEX IF NOT EXISTS idx_fusion_orders_subscription_id 
    ON fusion_orders(subscription_id);

CREATE INDEX IF NOT EXISTS idx_fusion_order_preparations_expires_at 
    ON fusion_order_preparations(expires_at);

CREATE INDEX IF NOT EXISTS idx_fusion_order_preparations_order_hash 
    ON fusion_order_preparations(order_hash);

CREATE INDEX IF NOT EXISTS idx_subscription_plans_cross_chain 
    ON subscription_plans(is_cross_chain, is_active);

CREATE INDEX IF NOT EXISTS idx_subscription_plans_src_chain 
    ON subscription_plans(src_chain_id, is_active);

-- Create trigger for fusion_orders updated_at
CREATE OR REPLACE FUNCTION update_fusion_orders_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing trigger if it exists and create new one
DROP TRIGGER IF EXISTS update_fusion_orders_updated_at ON fusion_orders;
CREATE TRIGGER update_fusion_orders_updated_at 
    BEFORE UPDATE ON fusion_orders 
    FOR EACH ROW 
    EXECUTE FUNCTION update_fusion_orders_updated_at();

-- Add foreign key constraint for fusion_orders (only if it doesn't exist)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'fk_fusion_orders_subscription_id'
    ) THEN
        ALTER TABLE fusion_orders 
        ADD CONSTRAINT fk_fusion_orders_subscription_id 
        FOREIGN KEY (subscription_id) 
        REFERENCES subscription_plans(subscription_id) 
        ON DELETE CASCADE;
        RAISE NOTICE 'Added foreign key constraint for fusion_orders.subscription_id';
    ELSE
        RAISE NOTICE 'Foreign key constraint already exists for fusion_orders.subscription_id';
    END IF;
END $$;

-- Add comments for documentation
COMMENT ON COLUMN subscription_plans.dst_chain_id IS 'Destination chain ID (always Ethereum for PYUSD)';
COMMENT ON COLUMN subscription_plans.dst_token_address IS 'Destination token address (always PYUSD)';
COMMENT ON COLUMN subscription_plans.is_cross_chain IS 'Whether this is a cross-chain payment';
COMMENT ON COLUMN subscription_plans.fusion_order_hash IS '1inch Fusion+ order hash for cross-chain swaps';
COMMENT ON COLUMN fusion_orders.subscription_id IS 'Associated subscription ID for cross-chain payments';

-- Verify the migration
SELECT 
    'Migration completed successfully' as status,
    COUNT(*) as existing_subscriptions,
    COUNT(CASE WHEN is_cross_chain = true THEN 1 END) as cross_chain_subscriptions,
    COUNT(CASE WHEN dst_chain_id = 1 THEN 1 END) as ethereum_destinations
FROM subscription_plans;

COMMIT;
