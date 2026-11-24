// Webhook delivery retry logic with exponential backoff
import { sleep } from '../utils/sleep';

interface RetryConfig {
  maxRetries: number;
  baseDelayMs: number;
  maxDelayMs: number;
}

const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 5,
  baseDelayMs: 1000, // 1s
  maxDelayMs: 300000, // 5min
};

export async function deliverWebhookWithRetry(
  webhookUrl: string,
  payload: any,
  config: RetryConfig = DEFAULT_RETRY_CONFIG
): Promise<boolean> {
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      // Attempt to deliver the webhook
      const success = await deliverWebhook(webhookUrl, payload);
      if (success) {
        return true;
      }
      
      // If we've exhausted retries, break
      if (attempt === config.maxRetries) {
        break;
      }
      
      // Calculate exponential backoff delay: baseDelay * 2^attempt
      // But cap at maxDelayMs
      const delayMs = Math.min(
        config.baseDelayMs * Math.pow(2, attempt),
        config.maxDelayMs
      );
      
      // Apply the calculated delay before retrying
      await sleep(delayMs);
    } catch (error) {
      lastError = error as Error;
      
      // If we've exhausted retries, break
      if (attempt === config.maxRetries) {
        break;
      }
      
      // Calculate exponential backoff delay for next attempt
      const delayMs = Math.min(
        config.baseDelayMs * Math.pow(2, attempt),
        config.maxDelayMs
      );
      
      await sleep(delayMs);
    }
  }
  
  // All retries exhausted
  console.error(`Webhook delivery failed after ${config.maxRetries + 1} attempts`, lastError);
  return false;
}

// Mock deliverWebhook function - replace with actual implementation
async function deliverWebhook(webhookUrl: string, payload: any): Promise<boolean> {
  // Actual implementation would make HTTP POST request here
  // For now, we'll simulate with a placeholder
  throw new Error('Webhook delivery failed');
}