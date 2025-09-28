// Enhanced logging configuration for 1inch Fusion+ integration

export interface LogConfig {
  enableDetailedLogs: boolean;
  enableApiLogs: boolean;
  enableOrderProcessingLogs: boolean;
  enableSecretSubmissionLogs: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export const LOG_CONFIG: LogConfig = {
  enableDetailedLogs: true,
  enableApiLogs: true,
  enableOrderProcessingLogs: true,
  enableSecretSubmissionLogs: true,
  logLevel: 'debug'
};

// Enhanced logging utilities
export function createLogger(prefix: string) {
  return {
    step: (step: string, data?: any) => {
      if (!LOG_CONFIG.enableDetailedLogs) return;
      const timestamp = new Date().toISOString();
      console.log(`\n🚀 [${timestamp}] ${prefix} - ${step}`);
      if (data) {
        console.log(`📊 Data:`, JSON.stringify(data, null, 2));
      }
      console.log("─".repeat(80));
    },
    
    success: (message: string, data?: any) => {
      const timestamp = new Date().toISOString();
      console.log(`✅ [${timestamp}] ${prefix} SUCCESS: ${message}`);
      if (data) {
        console.log(`📊 Result:`, JSON.stringify(data, null, 2));
      }
    },
    
    error: (message: string, error: any) => {
      const timestamp = new Date().toISOString();
      console.log(`❌ [${timestamp}] ${prefix} ERROR: ${message}`);
      console.log(`🔍 Error Details:`, error);
    },
    
    info: (message: string, data?: any) => {
      if (LOG_CONFIG.logLevel === 'error') return;
      const timestamp = new Date().toISOString();
      console.log(`ℹ️ [${timestamp}] ${prefix} INFO: ${message}`);
      if (data) {
        console.log(`📊 Data:`, JSON.stringify(data, null, 2));
      }
    },
    
    warn: (message: string, data?: any) => {
      if (LOG_CONFIG.logLevel === 'error') return;
      const timestamp = new Date().toISOString();
      console.log(`⚠️ [${timestamp}] ${prefix} WARN: ${message}`);
      if (data) {
        console.log(`📊 Data:`, JSON.stringify(data, null, 2));
      }
    }
  };
}

// Specific loggers for different components
export const fusionLogger = createLogger('1INCH FUSION+');
export const apiLogger = createLogger('API ENDPOINT');
export const orderLogger = createLogger('ORDER PROCESSING');
export const secretLogger = createLogger('SECRET SUBMISSION');

// Log banner for major operations
export function logBanner(title: string) {
  console.log('\n' + '='.repeat(100));
  console.log(`🎯 ${title.toUpperCase()}`);
  console.log('='.repeat(100));
}

// Log completion banner
export function logCompletion(title: string, success: boolean) {
  const emoji = success ? '🎉' : '💥';
  console.log('\n' + '='.repeat(100));
  console.log(`${emoji} ${title.toUpperCase()} - ${success ? 'COMPLETED' : 'FAILED'}`);
  console.log('='.repeat(100) + '\n');
}
