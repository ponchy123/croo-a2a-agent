// 工具函数

import { AgentConfig } from './types';

export function loadConfig(): AgentConfig {
  const apiKey = process.env.CROO_SDK_KEY;
  const apiUrl = process.env.CROO_API_URL || 'https://api.croo.network';
  const wsUrl = process.env.CROO_WS_URL || 'wss://api.croo.network/ws';

  if (!apiKey) {
    throw new Error('CROO_SDK_KEY environment variable is required');
  }

  return { apiKey, apiUrl, wsUrl };
}

export function validateEnvironment(): void {
  const required = ['CROO_SDK_KEY'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

export function formatUSDC(amount: number): string {
  return `$${amount.toFixed(2)} USDC`;
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}