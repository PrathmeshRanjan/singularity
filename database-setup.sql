-- Smart Contract Recurring Payments Database Setup
-- Run this script in your PostgreSQL database

-- Drop existing tables if they exist (for clean setup)
DROP TABLE IF EXISTS payment_executions CASCADE;
DROP TABLE IF EXISTS cross_chain_payments CASCADE;
DROP TABLE IF EXISTS subscription_plans CASCADE;
DROP TABLE IF EXISTS contract_deployments CASCADE;
DROP TABLE IF EXISTS authorized_executors CASCADE;

-- Create subscription_plans table
CREATE TABLE subscription_plans (
    subscription_id VARCHAR(66) PRIMARY KEY,
    subscriber_address VARCHAR(42) NOT NULL,
    payee_address VARCHAR(42) NOT NULL,
    src_chain_id INTEGER NOT NULL,
    src_token_address VARCHAR(42) NOT NULL,
    payment_amount VARCHAR(78) NOT NULL,
    interval_seconds INTEGER NOT NULL,
    max_payments INTEGER NOT NULL,
    payments_made INTEGER DEFAULT 0,
    last_payment_at TIMESTAMP,
    next_payment_due TIMESTAMP NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    is_paused BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    contract_address VARCHAR(42) NOT NULL,
    tx_hash VARCHAR(66) NOT NULL
);

p0[-==]-[p0o9ik8fredcs` `1232QWASXEZXCVA ,.L;/"

'==765p09`` "]

-- Create payment_executions table
CREATE TABLE payment_executions (
    execution_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subscription_id VARCHAR(66) NOT NULL,
    amount VARCHAR(78) NOT NULL,
    tx_hash VARCHAR(66),
    fusion_order_hash VARCHAR(66),
    status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'completed', 'failed')),
    executed_at TIMESTAMP DEFAULT NOW(),
    error_message TEXT,
    gas_used VARCHAR(20),
    block_number BIGINT,
    FOREIGN KEY (subscription_id) REFERENCES subscription_plans(subscription_id) ON DELETE CASCADE
);

-- Create cross_chain_payments table
CREATE TABLE cross_chain_payments (
    payment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subscription_id VARCHAR(66) NOT NULL,
    src_chain_id INTEGER NOT NULL,
    dst_chain_id INTEGER NOT NULL,
    src_token_address VARCHAR(42) NOT NULL,
    dst_token_address VARCHAR(42) NOT NULL,
    amount VARCHAR(78) NOT NULL,
    fusion_order_hash VARCHAR(66),
    status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'completed', 'failed')),
    created_at TIMESTAMP DEFAULT NOW(),
    executed_at TIMESTAMP,
    error_message TEXT,
    FOREIGN KEY (subscription_id) REFERENCES subscription_plans(subscription_id) ON DELETE CASCADE
);

-- Create contract_deployments table
CREATE TABLE contract_deployments (
    id SERIAL PRIMARY KEY,
    chain_id INTEGER NOT NULL,
    contract_address VARCHAR(42) NOT NULL,
    deployed_at TIMESTAMP DEFAULT NOW(),
    deployer_address VARCHAR(42) NOT NULL,
    UNIQUE(chain_id, contract_address)
);

-- Create authorized_executors table
CREATE TABLE authorized_executors (
    id SERIAL PRIMARY KEY,
    address VARCHAR(42) NOT NULL,
    chain_id INTEGER NOT NULL,
    authorized_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(address, chain_id)
);

-- Create indexes for better performance
CREATE INDEX idx_subscription_plans_subscriber ON subscription_plans(subscriber_address);
CREATE INDEX idx_subscription_plans_payee ON subscription_plans(payee_address);
CREATE INDEX idx_subscription_plans_next_payment ON subscription_plans(next_payment_due);
CREATE INDEX idx_subscription_plans_active ON subscription_plans(is_active, is_paused);
CREATE INDEX idx_payment_executions_subscription ON payment_executions(subscription_id);
CREATE INDEX idx_payment_executions_status ON payment_executions(status);
CREATE INDEX idx_cross_chain_payments_subscription ON cross_chain_payments(subscription_id);

-- Insert sample data for testing
INSERT INTO contract_deployments (chain_id, contract_address, deployer_address) VALUES
(8453, '0xacfDc1080a1D3839767b3714F581994958830754', '0x76015b059ecae4875F592085a5b495B4ADf37C96');

INSERT INTO authorized_executors (address, chain_id) VALUES
('0x76015b059ecae4875F592085a5b495B4ADf37C96', 8453);

-- Insert sample subscription for testing (optional)
-- INSERT INTO subscription_plans (
--     subscription_id, subscriber_address, payee_address, src_chain_id, 
--     src_token_address, payment_amount, interval_seconds, max_payments, 
--     payments_made, last_payment_at, next_payment_due, is_active, is_paused, 
--     contract_address, tx_hash
-- ) VALUES (
--     '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef12',
--     '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
--     '0x6c3ea9036406852006290770bedfcaba0e23a0e8',
--     8453,
--     '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
--     '1000000',
--     60,
--     10,
--     0,
--     NULL,
--     NOW() + INTERVAL '1 minute',
--     TRUE,
--     FALSE,
--     '0xacfDc1080a1D3839767b3714F581994958830754',
--     '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890'
-- );

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_subscription_plans_updated_at 
    BEFORE UPDATE ON subscription_plans 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions (adjust as needed for your setup)
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO your_app_user;
-- GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO your_app_user;

COMMIT;
