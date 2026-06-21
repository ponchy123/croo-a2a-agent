// CROO A2A Agent 主入口

import dotenv from 'dotenv';
import { AgentClient } from '@croo-network/sdk';

dotenv.config();

const API_KEY = process.env.CROO_SDK_KEY || '';
const API_URL = process.env.CROO_API_URL || 'https://api.croo.network';
const SERVICE_ID = process.env.PROVIDER_SERVICE_ID || '';

async function main() {
  console.log('🎯 CROO A2A Agent Chain Demo');
  console.log('============================\n');
  
  // 验证环境
  if (!API_KEY || !SERVICE_ID) {
    console.error('❌ Missing CROO_SDK_KEY or PROVIDER_SERVICE_ID');
    process.exit(1);
  }
  
  console.log('✅ Environment validated');
  console.log(`🔑 API Key: ${API_KEY.substring(0, 10)}...`);
  console.log(`📡 Service ID: ${SERVICE_ID}\n`);
  
  // 初始化客户端
  const client = new AgentClient({
    baseURL: API_URL
  }, API_KEY);
  
  console.log('✅ Client initialized\n');
  
  // 演示 A2A 流程
  console.log('🎬 A2A Agent Chain Demo');
  console.log('========================\n');
  
  console.log('📋 流程说明:');
  console.log('1. Requester 发起翻译请求');
  console.log('2. Provider 接受并处理订单');
  console.log('3. USDC 链上支付结算');
  console.log('4. 交付翻译结果\n');
  
  console.log('🚀 运行命令:');
  console.log('   npm run provider  # 启动 Provider Agent');
  console.log('   npm run requester # 运行 Requester 测试\n');
  
  console.log('📖 更多信息请查看 README.md');
}

if (require.main === module) {
  main().catch(console.error);
}