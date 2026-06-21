import { TranslationService } from '../src/provider/service';
import { TranslationClient } from '../src/requester/client';

describe('Translation Service', () => {
  let service: TranslationService;

  beforeEach(() => {
    service = new TranslationService();
  });

  test('should return service configuration', () => {
    const config = service.getServiceConfig();
    expect(config.name).toBe('Translation Agent');
    expect(config.price).toBe(0.1);
    expect(config.sla).toBe('0h 5m');
  });

  test('should translate text', async () => {
    const result = await service.translate({
      text: 'Hello World',
      targetLanguage: 'zh'
    });

    expect(result.translatedText).toContain('Hello World');
    expect(result.confidence).toBeGreaterThan(0);
    expect(result.source).toBe('Translation Agent');
  });
});

describe('Translation Client', () => {
  let client: TranslationClient;

  beforeEach(() => {
    client = new TranslationClient('test-service-id');
  });

  test('should request translation', async () => {
    const result = await client.requestTranslation({
      text: 'Test text',
      targetLanguage: 'en'
    });

    expect(result.translatedText).toBeDefined();
    expect(result.confidence).toBeGreaterThan(0);
  });

  test('should demonstrate A2A composition', async () => {
    // This test just ensures the method runs without errors
    await expect(client.demonstrateA2AComposition()).resolves.not.toThrow();
  });
});