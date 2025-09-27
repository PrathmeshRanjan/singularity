"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import WalletOption from "@/components/WalletOption";
import {
  useAccount,
  useWriteContract,
  useReadContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseUnits } from "viem";

type PaymentData = {
  network: string;
  token: string;
  orgName: string;
  amount: string;
  walletAddress: string;
  frequency: string;
  duration: string;
  description: string;
};

type SelectedToken = {
  symbol: string;
  name: string;
  chainName: string;
  chainSymbol?: string;
  tokenLogoUrl?: string;
  chainIconUrl?: string;
};

// Smart contract constants
const CHAIN_NAMES: Record<number, string> = {
  8453: "Base",
  1: "Ethereum",
};

const TOKEN_DECIMALS: Record<string, number> = {
  "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": 6, // USDC on Base
  "0xA0b86a33E6441c8C06Cdd7C1a3F4f8C2b15D0A42": 18, // USDC on Ethereum
};

const TOKEN_SYMBOLS: Record<string, string> = {
  "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": "USDC",
  "0xA0b86a33E6441c8C06Cdd7C1a3F4f8C2b15D0A42": "USDC",
};

const CONTRACT_ADDRESSES: Record<number, `0x${string}`> = {
  8453: "0xacfDc1080a1D3839767b3714F581994958830754", // Base - DEPLOYED
  1: "0x0000000000000000000000000000000000000000", // Ethereum
  42161: "0x0000000000000000000000000000000000000000", // Arbitrum
  137: "0x0000000000000000000000000000000000000000", // Polygon
};

const RECURRING_PAYMENTS_ABI = [
  {
    inputs: [
      { internalType: "address", name: "payee", type: "address" },
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "interval", type: "uint256" },
      { internalType: "uint256", name: "maxPayments", type: "uint256" },
    ],
    name: "createSubscription",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const ERC20_ABI = [
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

// Import the db from the auto-receive page
const db: Record<string, PaymentData> = {};

export default function InfoPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [selectedToken, setSelectedToken] = useState<SelectedToken | null>(null);
  const [loading, setLoading] = useState(true);

  // Auto pay state
  const { address, isConnected } = useAccount();
  const [autoPayLoading, setAutoPayLoading] = useState(false);
  const [autoPayError, setAutoPayError] = useState<string | null>(null);
  const [autoPaySuccess, setAutoPaySuccess] = useState<string | null>(null);

  // Contract write hooks
  const {
    writeContract: writeApprove,
    isPending: isApproving,
    data: approveTxHash,
    error: approveError,
  } = useWriteContract();
  const {
    writeContract: writeCreateSubscription,
    isPending: isCreatingSubscription,
    data: createSubscriptionTxHash,
    error: createSubscriptionError,
  } = useWriteContract();

  // Transaction receipt hooks
  const { isLoading: isApproveConfirming, isSuccess: isApproveSuccess, error: approveReceiptError } =
    useWaitForTransactionReceipt({
      hash: approveTxHash,
    });

  const { isLoading: isCreateConfirming, isSuccess: isCreateSuccess, error: createReceiptError } =
    useWaitForTransactionReceipt({
      hash: createSubscriptionTxHash,
    });

  // Parse selected token from URL parameters
  useEffect(() => {
    const tokenSymbol = searchParams.get('tokenSymbol');
    const tokenName = searchParams.get('tokenName');
    const chainName = searchParams.get('chainName');
    const chainSymbol = searchParams.get('chainSymbol');
    const tokenLogoUrl = searchParams.get('tokenLogoUrl');
    const chainIconUrl = searchParams.get('chainIconUrl');

    if (tokenSymbol && tokenName && chainName) {
      setSelectedToken({
        symbol: tokenSymbol,
        name: tokenName,
        chainName: chainName,
        chainSymbol: chainSymbol || undefined,
        tokenLogoUrl: tokenLogoUrl || undefined,
        chainIconUrl: chainIconUrl || undefined,
      });
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await fetch(`/api/payment?id=${id}`);
        
        if (response.ok) {
          const result = await response.json();
          setPaymentData(result.data);
        } else {
          setPaymentData(null);
        }
      } catch (error) {
        console.error('Error fetching payment data:', error);
        setPaymentData(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPaymentData();
    } else {
      setLoading(false);
    }
  }, [id]);

  // Helper functions for auto pay
  const getChainIdFromNetwork = (network: string): number => {
    switch (network.toLowerCase()) {
      case 'base':
        return 8453;
      case 'ethereum':
        return 1;
      default:
        return 8453; // Default to Base
    }
  };

  const getTokenAddress = (token: string, chainId: number): `0x${string}` => {
    // Default to USDC addresses for now
    if (chainId === 8453) {
      return "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"; // USDC on Base
    } else if (chainId === 1) {
      return "0xA0b86a33E6441c8C06Cdd7C1a3F4f8C2b15D0A42"; // USDC on Ethereum
    }
    return "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"; // Default to Base USDC
  };

  const parseFrequencyToSeconds = (frequency: string): number => {
    switch (frequency.toLowerCase()) {
      case 'daily':
        return 86400; // 24 hours
      case 'weekly':
        return 604800; // 7 days
      case 'monthly':
        return 2592000; // 30 days
      case 'yearly':
        return 31536000; // 365 days
      default:
        return 86400; // Default to daily
    }
  };

  const parseDurationToMaxPayments = (duration: string): number => {
    const match = duration.match(/(\d+)\s*(month|year|day|week)s?/i);
    if (!match) return 12; // Default to 12 payments
    
    const value = parseInt(match[1]);
    const unit = match[2].toLowerCase();
    
    // Convert to number of payments based on frequency
    // This is a simplified calculation
    switch (unit) {
      case 'month':
        return value;
      case 'year':
        return value * 12;
      case 'day':
        return value;
      case 'week':
        return value;
      default:
        return value;
    }
  };

  // Auto pay functionality
  const createAutoPay = useCallback(async () => {
    if (!address || !paymentData) {
      setAutoPayError("Please connect your wallet and ensure payment data is loaded");
      return;
    }

    try {
      setAutoPayLoading(true);
      setAutoPayError(null);
      setAutoPaySuccess(null);

      // Extract data from existing UI
      const chainId = getChainIdFromNetwork(paymentData.network);
      const tokenAddress = getTokenAddress(paymentData.token, chainId);
      const intervalSeconds = parseFrequencyToSeconds(paymentData.frequency);
      const maxPayments = parseDurationToMaxPayments(paymentData.duration);
      const tokenDecimals = TOKEN_DECIMALS[tokenAddress] || 6;

      // Parse amount
      const amount = parseUnits(paymentData.amount, tokenDecimals);

      // First approve the token
      writeApprove({
        address: tokenAddress,
        abi: ERC20_ABI,
        functionName: "approve",
        args: [CONTRACT_ADDRESSES[chainId], amount],
        chainId: chainId,
      });

    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      setAutoPayError(`Failed to create auto pay: ${errorMessage}`);
      setAutoPayLoading(false);
    }
  }, [address, paymentData, writeApprove]);

  // Handle approve success
  useEffect(() => {
    if (isApproveSuccess && paymentData) {
      // After approval, create the subscription
      const chainId = getChainIdFromNetwork(paymentData.network);
      const tokenAddress = getTokenAddress(paymentData.token, chainId);
      const intervalSeconds = parseFrequencyToSeconds(paymentData.frequency);
      const maxPayments = parseDurationToMaxPayments(paymentData.duration);
      const tokenDecimals = TOKEN_DECIMALS[tokenAddress] || 6;
      const amount = parseUnits(paymentData.amount, tokenDecimals);

      writeCreateSubscription({
        address: CONTRACT_ADDRESSES[chainId],
        abi: RECURRING_PAYMENTS_ABI,
        functionName: "createSubscription",
        args: [
          paymentData.walletAddress as `0x${string}`,
          tokenAddress,
          amount,
          BigInt(intervalSeconds),
          BigInt(maxPayments),
        ],
        chainId: chainId,
      });
    }
  }, [isApproveSuccess, paymentData, writeCreateSubscription]);

  // Handle create subscription success
  useEffect(() => {
    if (isCreateSuccess) {
      setAutoPaySuccess("Auto pay subscription created successfully!");
      setAutoPayLoading(false);
    }
  }, [isCreateSuccess]);

  // Handle approve errors
  useEffect(() => {
    if (approveError || approveReceiptError) {
      const errorMessage = approveError?.message || approveReceiptError?.message || "Approval failed";
      setAutoPayError(`Token approval failed: ${errorMessage}`);
      setAutoPayLoading(false);
    }
  }, [approveError, approveReceiptError]);

  // Handle create subscription errors
  useEffect(() => {
    if (createSubscriptionError || createReceiptError) {
      const errorMessage = createSubscriptionError?.message || createReceiptError?.message || "Subscription creation failed";
      setAutoPayError(`Subscription creation failed: ${errorMessage}`);
      setAutoPayLoading(false);
    }
  }, [createSubscriptionError, createReceiptError]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment details...</p>
        </div>
      </div>
    );
  }

  if (!paymentData) {
    return (
      <div className=" flex items-center justify-center min-h-120 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Payment Not Found</h1>
          <p className="text-gray-600 mb-6">
            The payment information you're looking for doesn't exist or has expired.
          </p>
          <Link
            href="/auto-receive"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <ArrowLeft size={16} />
            Create New Payment
          </Link>
        </div>
      </div>
    );
  }

  const formatFrequency = (freq: string) => {
    const freqMap: Record<string, string> = {
      "1hr": "Every Hour",
      "3hrs": "Every 3 Hours",
      "6hrs": "Every 6 Hours",
      "12hrs": "Every 12 Hours",
      "1day": "Daily",
      "2days": "Every 2 Days",
      "1week": "Weekly",
      "2weeks": "Every 2 Weeks",
      "1month": "Monthly",
    };
    return freqMap[freq] || freq;
  };

  const formatDuration = (dur: string) => {
    const durMap: Record<string, string> = {
      "1day": "1 Day",
      "1week": "1 Week",
      "2weeks": "2 Weeks",
      "1month": "1 Month",
      "3months": "3 Months",
      "6months": "6 Months",
      "1year": "1 Year",
      "indefinite": "Indefinite",
    };
    return durMap[dur] || dur;
  };

  return (
    <div className="max-h-120 overflow-y-auto scrollbar-hide mx-auto p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}

        {/* Payment Details Card */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
                <div className="border-b pb-3">
              <h3 className="font-semibold text-gray-800 mb-1">Organization/Person</h3>
              <p className="text-gray-600">{paymentData.orgName || "Not specified"}</p>
            </div>

            {/* Amount */}
            <div className="flex justify-end">
              <div className="border-b pb-3">
              <h3 className="font-semibold text-gray-800 mb-1">Amount</h3>
              <p className="text-2xl font-bold text-gray-800">{paymentData.amount}</p>
            </div>
            </div>
            {/* Organization/Person */}

            {/* Token */}
            <div className="border-b pb-3">
              <h3 className="font-semibold text-gray-800 mb-1">Token</h3>
              <p className="text-gray-600">{paymentData.token}</p>
            </div>

            {/* Network */}
            <div className="border-b pb-3">
              <h3 className="font-semibold text-gray-800 mb-1">Network</h3>
              <p className="text-gray-600">{paymentData.network}</p>
            </div>
            </div>

            {/* Wallet Address */}
            <div className="border-b pb-3">
              <h3 className="font-semibold text-gray-800 mb-1">Wallet Address</h3>
              <p className="text-gray-600 break-all font-mono text-sm bg-gray-50 p-2 rounded">
                {paymentData.walletAddress || "Not specified"}
              </p>
            </div>

            {/* Frequency */}
            <div className="flex justify-between">
              <div className="border-b pb-3">
              <h3 className="font-semibold text-gray-800 mb-1">Frequency</h3>
              <p className="text-gray-600">{formatFrequency(paymentData.frequency)}</p>
            </div>

            {/* Duration */}
            <div className="border-b pb-3">
              <h3 className="font-semibold text-gray-800 mb-1">Duration</h3>
              <p className="text-gray-600">{formatDuration(paymentData.duration)}</p>
            </div>

            {/* Description */}
            {paymentData.description && (
              <div className="border-b pb-3">
                <h3 className="font-semibold text-gray-800 mb-1">Description</h3>
                <p className="text-gray-600 bg-gray-50 p-3 rounded">
                  {paymentData.description}
                </p>
              </div>
            )}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-6 border-t">
            <div className="flex flex-col gap-4">
              {/* Selected Token Display or Selection Dropdown */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selected Token & Chain
                </label>
                {selectedToken ? (
                  <div className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {selectedToken.tokenLogoUrl && (
                          <img 
                            src={selectedToken.tokenLogoUrl} 
                            alt={selectedToken.symbol}
                            className="w-6 h-6 rounded-full"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
                        <span className="font-medium text-gray-900">{selectedToken.symbol}</span>
                        <span className="text-gray-600">({selectedToken.name})</span>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        {selectedToken.chainIconUrl && (
                          <img 
                            src={selectedToken.chainIconUrl} 
                            alt={selectedToken.chainName}
                            className="w-5 h-5 rounded-full"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
                        <span className="text-gray-700">{selectedToken.chainName}</span>
                      </div>
                    </div>
                    <Link 
                      href={`/select-token?type=sell&returnTo=/info/${id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Change
                    </Link>
                  </div>
                ) : (
                  <select 
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    onChange={(e) => {
                      if (e.target.value) {
                        window.location.href = e.target.value;
                      }
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>Choose token and chain for payment</option>
                    <option value={`/select-token?type=sell&returnTo=/info/${id}`}>Go to Token & Chain Selection</option>
                  </select>
                )}
              </div>

              {/* Wallet Connection Options */}
              <div className="mt-6">
                <WalletOption 
                  onEvmConnect={() => {
                    console.log("EVM wallet connection requested");
                    // Add your EVM wallet connection logic here
                  }}
                  onBtcPrivateKey={(privateKey) => {
                    console.log("BTC private key provided:", privateKey.substring(0, 10) + "...");
                    // Add your BTC private key handling logic here
                  }}
                />
              </div>

              {/* Auto Pay Button */}
              <div className="mt-6">
                {autoPayError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{autoPayError}</p>
                  </div>
                )}
                
                {autoPaySuccess && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-600 text-sm">{autoPaySuccess}</p>
                  </div>
                )}

                <button
                  onClick={createAutoPay}
                  disabled={!isConnected || autoPayLoading || isApproving || isCreatingSubscription}
                  className="w-full bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {autoPayLoading || isApproving || isCreatingSubscription
                    ? "Processing..."
                    : !isConnected
                    ? "Connect Wallet to Enable Auto Pay"
                    : "Create Auto Pay"}
                </button>
                
                {!isConnected && (
                  <p className="text-gray-500 text-sm mt-2 text-center">
                    Connect your wallet above to enable automatic recurring payments
                  </p>
                )}
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}