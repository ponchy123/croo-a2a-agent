// CROO A2A Agent 类型定义

export interface AgentConfig {
  apiKey: string;
  apiUrl: string;
  wsUrl: string;
}

export interface ServiceConfig {
  name: string;
  description: string;
  price: number; // USDC
  sla: string; // 格式: "0h 30m"
  deliverable: 'Text' | 'Schema';
  requirements: 'Text' | 'Schema' | 'None';
}

export interface Order {
  orderId: string;
  providerId: string;
  requesterId: string;
  serviceId: string;
  price: number;
  status: 'pending' | 'paid' | 'delivering' | 'completed' | 'failed';
  createdAt: Date;
  completedAt?: Date;
}

export interface TranslationRequest {
  text: string;
  sourceLanguage?: string;
  targetLanguage: string;
}

export interface TranslationResponse {
  translatedText: string;
  confidence: number;
  source: string;
}

export interface ProofreadingRequest {
  text: string;
  language: string;
}

export interface ProofreadingResponse {
  correctedText: string;
  suggestions: string[];
  score: number;
}

export interface FormattingRequest {
  text: string;
  format: 'markdown' | 'pdf' | 'html';
}

export interface FormattingResponse {
  formattedContent: string;
  downloadUrl?: string;
}