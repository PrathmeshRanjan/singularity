#!/usr/bin/env node

// Simple test script for smart contract API endpoints

const API_URL = process.env.API_URL || 'http://localhost:3000';
const CRON_SECRET = process.env.CRON_SECRET;

async function testAPI() {
  console.log('🧪 Testing Smart Contract Recurring Payments API');
  console.log('===============================================\n');

  try {
    // Test due subscriptions endpoint
    console.log('1. Testing due subscriptions endpoint...');
    const dueResponse = await fetch(`${API_URL}/api/recurring-payments-smart?action=due`);
    const dueData = await dueResponse.json();
    
    if (dueResponse.ok) {
      console.log('✅ Due subscriptions endpoint working');
      console.log(`   Found ${dueData.count || 0} due subscriptions`);
    } else {
      console.log('❌ Due subscriptions endpoint failed:', dueResponse.status);
      console.log('   Error:', dueData.error);
    }

    // Test cron job endpoint
    if (CRON_SECRET) {
      console.log('\n2. Testing cron job endpoint...');
      const cronResponse = await fetch(`${API_URL}/api/recurring-payments-smart/process`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CRON_SECRET}`,
          'Content-Type': 'application/json'
        }
      });

      const cronData = await cronResponse.json();

      if (cronResponse.ok) {
        console.log('✅ Cron job endpoint working');
        console.log(`   Processed: ${cronData.processed || 0} payments`);
        console.log(`   Successful: ${cronData.successful || 0}`);
        console.log(`   Failed: ${cronData.failed || 0}`);
      } else {
        console.log('❌ Cron job endpoint failed:', cronResponse.status);
        console.log('   Error:', cronData.error);
      }
    } else {
      console.log('\n2. Skipping cron job test (CRON_SECRET not set)');
    }

    console.log('\n✅ API testing completed!');
    console.log('\n📋 Next steps:');
    console.log('1. Deploy smart contract on Base');
    console.log('2. Update contract address in smart-contract-service.ts');
    console.log('3. Test subscription creation via frontend');

  } catch (error) {
    console.error('❌ API testing failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Make sure your development server is running: npm run dev');
    console.log('2. Check if the API endpoints are accessible');
    console.log('3. Verify your environment variables are set correctly');
  }
}

testAPI();
