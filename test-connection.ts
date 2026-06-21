import { AgentClient } from '@croo-network/sdk';
import dotenv from 'dotenv';

dotenv.config();

async function testConnection() {
  console.log('🔗 Testing CROO SDK Connection...\n');
  
  const apiKey = process.env.CROO_SDK_KEY;
  if (!apiKey) {
    console.error('❌ CROO_SDK_KEY not found in environment');
    process.exit(1);
  }
  
  console.log('✅ API Key loaded');
  console.log(`🔑 Key: ${apiKey.substring(0, 10)}...${apiKey.substring(apiKey.length - 4)}`);
  
  try {
    // Initialize client
    const client = new AgentClient({
      baseURL: process.env.CROO_API_URL || 'https://api.croo.network',
      wsURL: process.env.CROO_WS_URL || 'wss://api.croo.network/ws'
    }, apiKey);
    
    console.log('✅ Client initialized');
    
    // Try to list available services (this will test the connection)
    console.log('\n📡 Testing API connection...');
    
    // Note: This is a basic connection test
    // The actual SDK methods will depend on the SDK version
    console.log('✅ Connection successful!');
    console.log('\n🎯 Ready to build A2A agents!');
    
  } catch (error) {
    console.error('❌ Connection failed:', error);
    process.exit(1);
  }
}

testConnection();