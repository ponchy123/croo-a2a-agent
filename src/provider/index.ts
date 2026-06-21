// Provider Agent 主入口

import { loadConfig, validateEnvironment } from '../shared/utils';
import { TranslationService } from './service';

async function main() {
  console.log('🚀 Starting Translation Provider Agent...');
  
  // 验证环境
  validateEnvironment();
  
  // 加载配置
  const config = loadConfig();
  console.log('✅ Configuration loaded');
  
  // 初始化翻译服务
  const translationService = new TranslationService();
  console.log('✅ Translation service initialized');
  
  // 这里应该集成 CROO SDK 来监听订单
  // 实际实现需要：
  // 1. 连接到 CROO WebSocket
  // 2. 监听 negotiation 事件
  // 3. 接受订单
  // 4. 处理支付
  // 5. 交付结果
  
  console.log('📋 Service Configuration:');
  console.log(JSON.stringify(translationService.getServiceConfig(), null, 2));
  
  console.log('\n🎯 Provider Agent is ready!');
  console.log('Waiting for orders...');
  
  // 模拟等待订单
  while (true) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // 在实际实现中，这里会处理来自 WebSocket 的消息
  }
}

if (require.main === module) {
  main().catch(console.error);
}

export { TranslationService };