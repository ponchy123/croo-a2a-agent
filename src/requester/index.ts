// Requester Agent 主入口

import { loadConfig, validateEnvironment } from '../shared/utils';
import { TranslationClient } from './client';

async function main() {
  console.log('🚀 Starting Translation Requester Agent...');
  
  // 验证环境
  validateEnvironment();
  
  // 加载配置
  const config = loadConfig();
  console.log('✅ Configuration loaded');
  
  // 这里应该从配置或参数获取 provider 的 service ID
  const providerServiceId = process.env.CROO_TARGET_SERVICE_ID || 'example-service-id';
  
  // 初始化客户端
  const client = new TranslationClient(providerServiceId);
  console.log('✅ Translation client initialized');
  
  // 演示 A2A 组合
  await client.demonstrateA2AComposition();
  
  // 测试翻译请求
  console.log('\n📝 Testing translation request...');
  const result = await client.requestTranslation({
    text: 'Hello, this is a test of the CROO A2A agent composition.',
    targetLanguage: 'zh'
  });
  
  console.log('\n🎯 Final Result:');
  console.log(JSON.stringify(result, null, 2));
  
  console.log('\n✅ Requester Agent demonstration complete!');
}

if (require.main === module) {
  main().catch(console.error);
}

export { TranslationClient };