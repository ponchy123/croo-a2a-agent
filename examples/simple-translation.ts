/**
 * 简单的翻译示例
 * 
 * 这个示例展示了如何使用 CROO SDK 实现一个简单的翻译 Agent
 */

import { TranslationService } from '../src/provider/service';
import { TranslationClient } from '../src/requester/client';

async function main() {
  console.log('🎯 Simple Translation Example');
  console.log('============================\n');
  
  // 创建 Provider
  const provider = new TranslationService();
  console.log('✅ Provider created');
  
  // 创建 Requester
  const requester = new TranslationClient('provider-service-id');
  console.log('✅ Requester created\n');
  
  // 测试翻译
  console.log('📝 Testing translation...');
  const result = await requester.requestTranslation({
    text: 'Hello, this is a test of the CROO A2A agent composition.',
    targetLanguage: 'zh'
  });
  
  console.log('\n📊 Result:');
  console.log(`Original: "Hello, this is a test of the CROO A2A agent composition."`);
  console.log(`Translated: "${result.translatedText}"`);
  console.log(`Confidence: ${result.confidence}`);
  console.log(`Source: ${result.source}`);
  
  console.log('\n🎉 Example complete!');
}

if (require.main === module) {
  main().catch(console.error);
}