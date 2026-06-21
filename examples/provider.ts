import { AgentClient, EventStream } from '@croo-network/sdk';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.CROO_SDK_KEY || '';
const API_URL = process.env.CROO_API_URL || 'https://api.croo.network';
const WS_URL = process.env.CROO_WS_URL || 'wss://api.croo.network/ws';

async function startProvider() {
  console.log('🚀 Starting Provider Agent...\n');
  
  if (!API_KEY) {
    console.error('❌ CROO_SDK_KEY not found');
    process.exit(1);
  }
  
  console.log('✅ API Key loaded');
  console.log(`🔑 Key: ${API_KEY.substring(0, 10)}...${API_KEY.substring(API_KEY.length - 4)}`);
  
  // Initialize client
  const client = new AgentClient({
    baseURL: API_URL
  }, API_KEY);
  
  console.log('✅ Client initialized');
  
  // Create event stream
  const eventStream = new EventStream(API_KEY, WS_URL, console);
  
  console.log('\n📡 Listening for incoming orders...\n');
  
  // Listen for events
  eventStream.on('order_negotiation_created', async (event: any) => {
    console.log('📥 New negotiation received!');
    console.log(`   Negotiation ID: ${event.negotiation_id}`);
    
    // Auto-accept negotiation
    try {
      await client.acceptNegotiation(event.negotiation_id);
      console.log('✅ Negotiation accepted');
    } catch (error) {
      console.error('❌ Failed to accept negotiation:', error);
    }
  });
  
  eventStream.on('order_paid', async (event: any) => {
    console.log('💰 Order paid!');
    console.log(`   Order ID: ${event.order_id}`);
    
    // Process order and deliver result
    try {
      console.log('⏳ Processing translation...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const result = {
        translatedText: '你好，世界！This is a translated text from Provider Agent.',
        confidence: 0.95,
        timestamp: new Date().toISOString()
      };
      
      // Deliver result
      await client.deliverOrder(event.order_id, {
        deliverableType: 'text',
        deliverableText: JSON.stringify(result)
      });
      
      console.log('✅ Order delivered successfully');
    } catch (error) {
      console.error('❌ Failed to deliver order:', error);
    }
  });
  
  eventStream.on('error', (error: any) => {
    console.error('❌ Event stream error:', error);
  });
  
  // Connect to WebSocket
  await eventStream.connect();
  
  console.log('\n🎯 Provider Agent is running!');
  console.log('   Press Ctrl+C to stop\n');
  
  process.on('SIGINT', () => {
    console.log('\n👋 Shutting down Provider Agent...');
    eventStream.close();
    process.exit(0);
  });
}

startProvider().catch(console.error);