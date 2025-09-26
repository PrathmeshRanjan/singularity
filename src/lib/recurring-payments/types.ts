import { NetworkEnum } from "@1inch/cross-chain-sdk";

export type IntervalType = 'daily' | 'weekly' | 'monthly';

export interface RecurringPaymentPlan {
  planId: string;
  payerAddress: string;           // Source chain payer
  payeeAddress: string;           // Destination chain receiver (PYUSD on Ethereum)
  srcChainId: NetworkEnum;        // Source chain
  srcTokenAddress: string;        // Source token
  paymentAmount: string;          // Amount in source token
  intervalType: IntervalType;
  intervalCount: number;          // Every X days/weeks/months
  totalPayments?: number;         // Optional: limit total payments
  isActive: boolean;
  createdAt: Date;
  nextPaymentDue: Date;
  paymentsCompleted: number;
  lastPaymentAt?: Date;
  // Additional fields
  planName?: string;
  description?: string;
  maxFailureCount: number;
  currentFailureCount: number;
  metadata: Record<string, any>;
  updatedAt: Date;
}

export interface RecurringPaymentExecution {
  executionId: string;
  planId: string;
  executionSequence: number;
  orderHash?: string;
  status: 'pending' | 'executed' | 'failed' | 'cancelled';
  amount: string;
  srcChainId: number;
  srcTokenAddress: string;
  dstChainId: number;
  dstTokenAddress: string;
  executionAttemptedAt: Date;
  executionCompletedAt?: Date;
  errorMessage?: string;
  gasUsed?: string;
  transactionHash?: string;
  executionMetadata: Record<string, any>;
  createdAt: Date;
}

export interface RecurringPaymentApproval {
  approvalId: string;
  planId: string;
  payerAddress: string;
  signature: string;
  signedMessage: string;
  approvalType: 'recurring_payment' | 'token_allowance';
  expiresAt?: Date;
  isActive: boolean;
  createdAt: Date;
}

export interface TokenAllowance {
  allowanceId: string;
  planId: string;
  payerAddress: string;
  tokenAddress: string;
  chainId: number;
  allowanceAmount: string;
  spenderAddress: string;
  allowanceTxHash?: string;
  isActive: boolean;
  expiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentPlanTemplate {
  templateId: string;
  templateName: string;
  description?: string;
  srcChainId: number;
  srcTokenAddress: string;
  intervalType: IntervalType;
  intervalCount: number;
  isActive: boolean;
  createdAt: Date;
}

export interface CreateRecurringPaymentPlanRequest {
  payerAddress: string;
  payeeAddress: string;
  srcChainId: NetworkEnum;
  srcTokenAddress: string;
  paymentAmount: string;
  intervalType: IntervalType;
  intervalCount: number;
  totalPayments?: number;
  planName?: string;
  description?: string;
  maxFailureCount?: number;
  metadata?: Record<string, any>;
}

export interface ApproveRecurringPaymentRequest {
  planId: string;
  signature: string;
  signedMessage: string;
  approvalType: 'recurring_payment' | 'token_allowance';
  expiresAt?: Date;
}

export interface ProcessRecurringPaymentRequest {
  planId: string;
  executionSequence: number;
  amount: string;
  srcChainId: number;
  srcTokenAddress: string;
  dstChainId: number;
  dstTokenAddress: string;
  executionMetadata?: Record<string, any>;
}

// Constants
export const PYUSD_ADDRESS = '0x6c3ea9036406852006290770bedfcaba0e23a0e8'; // PYUSD on Ethereum mainnet
export const ETHEREUM_CHAIN_ID = 1;

// Chain-specific 1Inch router addresses (these would need to be updated with actual addresses)
export const ROUTER_ADDRESSES: Record<number, string> = {
  1: '0x1111111254EEB25477B68fb85Ed929f73A960582', // Ethereum
  42161: '0x1111111254EEB25477B68fb85Ed929f73A960582', // Arbitrum
  137: '0x1111111254EEB25477B68fb85Ed929f73A960582', // Polygon
  8453: '0x1111111254EEB25477B68fb85Ed929f73A960582', // Base
};

// Interval multipliers in milliseconds
export const INTERVAL_MULTIPLIERS: Record<IntervalType, number> = {
  daily: 24 * 60 * 60 * 1000,
  weekly: 7 * 24 * 60 * 60 * 1000,
  monthly: 30 * 24 * 60 * 60 * 1000, // Approximate
};
