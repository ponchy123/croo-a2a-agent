import { AgentClient } from '@croo-network/sdk';
import dotenv from 'dotenv';

dotenv.config();

const REQUESTER_KEY = process.env.REQUESTER_API_KEY || '';
const API_URL = process.env.CROO_API_URL || 'https://api.croo.network';
const SERVICE_ID = process.env.PROVIDER_SERVICE_ID || '';

async function testA2A() {
  console.log('🧪 Testing A2A Agent Communication\n');
  
  if (!REQUESTER_KEY || !SERVICE_ID) {
    console.error('❌ Missing configuration');
    process.exit(1);
  }
  
  console.log('✅ Configuration loaded');
  console.log(`🔑 Requester Key: ${REQUESTER_KEY.substring(0, 10)}...`);
  console.log(`📡 Target Service: ${SERVICE_ID}\n`);
  
  const client = new AgentClient({
    baseURL: API_URL
  }, REQUESTER_KEY);
  
  console.log('✅ Requester client initialized');
  
  // Step 1: Negotiate order
  console.log('\n📤 Step 1: Negotiating order...');
  const negotiation = await client.negotiateOrder({
    serviceId: SERVICE_ID,
    requirements: JSON.stringify({ text: 'Hello, World!', targetLanguage: 'zh' })
  });
  
  console.log('✅ Negotiation created');
  console.log(`   Negotiation ID: ${negotiation.negotiationId}`);
  console.log(`   Status: ${negotiation.status}`);
  
  // Step 2: Wait for provider to accept
  console.log('\n⏳ Step 2: Waiting for provider to accept (10 seconds)...');
  
  let orderFound = false;
  for (let i = 0; i < 5; i++) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`   Checking... (${(i + 1) * 2}s)`);
    
    try {
      const orders = await client.listOrders({ role: 'buyer' });
      if (orders && orders.length > 0) {
        const latestOrder = orders[0];
        console.log(`\n✅ Order found: ${latestOrder.orderId}`);
        console.log(`   Status: ${latestOrder.status}`);
        console.log(`   Price: ${latestOrder.price} USDC`);
        
        // Step 3: Pay order
        if (latestOrder.status === 'created') {
          console.log('\n💰 Step 3: Paying order...');
          await client.payOrder(latestOrder.orderId);
          console.log('✅ Order paid');
          
          // Step 4: Wait for delivery
          console.log('\n⏳ Step 4: Waiting for delivery (5 seconds)...');
          await new Promise(resolve => setTimeout(resolve, 5000));
          
          // Step 5: Get delivery
          console.log('\n📥 Step 5: Getting delivery...');
          const delivery = await client.getDelivery(latestOrder.orderId);
          console.log('✅ Delivery received:');
          console.log(JSON.stringify(delivery, null, 2));
        }
        
        orderFound = true;
        break;
      }
    } catch (e) {
      // Continue waiting
    }
  }
  
  if (!orderFound) {
    console.log('\n⚠️ No orders found after waiting');
  }
  
  console.log('\n🎉 A2A test complete!');
}

testA2A().catch(console.error);