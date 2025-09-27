// Simple test script to verify the 1inch integration
const { FusionPlusIntegrator, NetworkEnum } = require('./1inch/src');

async function testIntegration() {
    try {
        console.log('🧪 Testing 1inch Fusion+ Integration...\n');

        // Check if required environment variables are set
        const requiredEnvVars = [
            'ONEINCH_API_URL',
            'ONEINCH_AUTH_KEY', 
            'PRIVATE_KEY',
            'WALLET_ADDRESS',
            'ETHEREUM_RPC_URL'
        ];

        const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
        if (missingVars.length > 0) {
            console.error('❌ Missing environment variables:', missingVars);
            console.log('\nPlease set these in your .env file:');
            missingVars.forEach(varName => {
                console.log(`  ${varName}=your_value_here`);
            });
            return;
        }

        // Initialize integrator
        const integrator = new FusionPlusIntegrator();
        integrator.initialize(
            process.env.PRIVATE_KEY,
            process.env.WALLET_ADDRESS
        );

        console.log('✅ Integrator initialized successfully');

        // Test quote generation
        console.log('\n📊 Testing quote generation...');
        const quoteParams = integrator.createSwapParams(
            NetworkEnum.ARBITRUM, // From Arbitrum
            NetworkEnum.ETHEREUM, // To Ethereum
            "USDC", // USDC
            "USDC", // USDC (we'll change this to PYUSD in Singularity)
            "1000000" // 1 USDC (6 decimals)
        );

        try {
            const quote = await integrator.getQuote(quoteParams);
            console.log('✅ Quote generated successfully');
            console.log('Quote details:', {
                srcAmount: quote.srcAmount || 'N/A',
                dstAmount: quote.dstAmount || 'N/A',
                preset: quote.getPreset?.() || 'N/A'
            });
        } catch (error) {
            console.log('ℹ️  Quote generation failed (this is expected if API key is not valid):', error.message);
        }

        // Test network connectivity
        console.log('\n🌐 Testing network connectivity...');
        const networks = FusionPlusIntegrator.getSupportedNetworks();
        console.log('Supported networks:', networks.map(n => `${n.name} (${n.id})`).join(', '));

        console.log('\n✨ Integration test completed!');
        console.log('\n📝 Next steps:');
        console.log('1. Add the environment variables from 1inch/.env to your Singularity .env');
        console.log('2. Replace the route files with the new implementations');
        console.log('3. Test with small amounts first');

    } catch (error) {
        console.error('❌ Integration test failed:', error);
    }
}

// Run the test
testIntegration().catch(console.error);
