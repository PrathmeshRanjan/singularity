"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
    useAccount,
    useWriteContract,
    useReadContract,
    useWaitForTransactionReceipt,
} from "wagmi";
import { parseUnits } from "viem";

interface SubscriptionPlan {
    subscriptionId: string;
    subscriber: string;
    payee: string;
    tokenAddress: string;
    chainId: number;
    amount: string;
    intervalSeconds: number;
    maxPayments: number;
    paymentsMade: number;
    lastPayment: number;
    isActive: boolean;
    isPaused: boolean;
    createdAt: string;
    updatedAt: string;
}

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
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "subscriptionId",
                type: "bytes32",
            },
        ],
        name: "executePayment",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "subscriptionId",
                type: "bytes32",
            },
        ],
        name: "cancelSubscription",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "subscriptionId",
                type: "bytes32",
            },
        ],
        name: "getSubscription",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "subscriber",
                        type: "address",
                    },
                    { internalType: "address", name: "payee", type: "address" },
                    { internalType: "address", name: "token", type: "address" },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "interval",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPayments",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "paymentsMade",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "lastPayment",
                        type: "uint256",
                    },
                    { internalType: "bool", name: "isActive", type: "bool" },
                ],
                internalType: "struct RecurringPayments.Subscription",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
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

export default function SmartContractRecurringPayments() {
    const { address, isConnected } = useAccount();

    const [subscriptions, setSubscriptions] = useState<SubscriptionPlan[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [step, setStep] = useState<
        "form" | "approve" | "create" | "complete"
    >("form");

    // Track which subscription is being cancelled
    const [cancellingSubscriptionId, setCancellingSubscriptionId] = useState<
        string | null
    >(null);

    // Ref to store subscription data at creation time
    const subscriptionDataRef = useRef<{
        payeeAddress: string;
        chainId: number;
        tokenAddress: string;
        amount: string;
        intervalSeconds: number;
        maxPayments: string;
    } | null>(null);

    // Form state for creating new subscriptions
    const [newSubscription, setNewSubscription] = useState({
        payeeAddress: "",
        tokenAddress:
            "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" as `0x${string}`, // Base USDC
        chainId: 8453, // Base
        amount: "", // User input in human-readable format
        intervalSeconds: 60, // 1 minute for testing
        maxPayments: "",
    });

    // Contract write hooks
    const {
        writeContract: writeApprove,
        isPending: isApproving,
        data: approveTxHash,
    } = useWriteContract();
    const {
        writeContract: writeCreateSubscription,
        isPending: isCreating,
        data: createTxHash,
    } = useWriteContract();

    // Contract write hooks for cancellation
    const {
        writeContract: writeCancelSubscription,
        isPending: isCancelling,
        data: cancelTxHash,
    } = useWriteContract();

    // Wait for transaction confirmations
    const { isLoading: isApprovingConfirming, isSuccess: isApproveConfirmed } =
        useWaitForTransactionReceipt({
            hash: approveTxHash,
        });

    const {
        isLoading: isCreateConfirming,
        isSuccess: isCreateConfirmed,
        data: createReceipt,
    } = useWaitForTransactionReceipt({
        hash: createTxHash,
    });

    // Wait for cancellation transaction confirmation
    const { isLoading: isCancelConfirming, isSuccess: isCancelConfirmed } =
        useWaitForTransactionReceipt({
            hash: cancelTxHash,
        });

    // Contract read hooks
    const { data: allowance, refetch: refetchAllowance } = useReadContract({
        address: newSubscription.tokenAddress,
        abi: ERC20_ABI,
        functionName: "allowance",
        args: address
            ? [address, CONTRACT_ADDRESSES[newSubscription.chainId]]
            : undefined,
        chainId: newSubscription.chainId,
    });

    const { data: tokenDecimals } = useReadContract({
        address: newSubscription.tokenAddress,
        abi: ERC20_ABI,
        functionName: "decimals",
        chainId: newSubscription.chainId,
    });

    // Helper functions
    const formatAmount = (amount: string, tokenAddress: string) => {
        const decimals = TOKEN_DECIMALS[tokenAddress] || 6;
        const formatted = (parseFloat(amount) / Math.pow(10, decimals)).toFixed(
            6
        );
        const symbol = TOKEN_SYMBOLS[tokenAddress] || "TOKEN";
        return `${formatted} ${symbol}`;
    };

    const formatInterval = (intervalSeconds: number) => {
        if (intervalSeconds < 60) {
            return `${intervalSeconds} seconds`;
        } else if (intervalSeconds < 3600) {
            return `${Math.floor(intervalSeconds / 60)} minutes`;
        } else if (intervalSeconds < 86400) {
            return `${Math.floor(intervalSeconds / 3600)} hours`;
        } else {
            return `${Math.floor(intervalSeconds / 86400)} days`;
        }
    };

    // Load subscriptions
    const loadSubscriptions = useCallback(async () => {
        if (!address) return;

        try {
            setLoading(true);
            const response = await fetch(
                `/api/recurring-payments-smart?action=user-subscriptions&subscriberAddress=${address}`
            );
            const data = await response.json();

            if (data.subscriptions !== undefined) {
                setSubscriptions(data.subscriptions || []);
            } else {
                setError(data.error || "Failed to load subscriptions");
            }
        } catch (err: unknown) {
            const errorMessage =
                err instanceof Error ? err.message : "Unknown error occurred";
            setError(`Failed to load subscriptions: ${errorMessage}`);
        } finally {
            setLoading(false);
        }
    }, [address]);

    // Load subscriptions on mount and when address changes
    useEffect(() => {
        loadSubscriptions();
    }, [loadSubscriptions]);

    const handleSubscriptionConfirmed = useCallback(
        async (subscriptionData: {
            payeeAddress: string;
            chainId: number;
            tokenAddress: string;
            amount: string;
            intervalSeconds: number;
            maxPayments: string;
        }) => {
            try {
                setSuccess(
                    "Subscription created successfully! Extracting subscription ID and storing in database..."
                );

                // Extract subscription ID from the transaction receipt
                let subscriptionIdFromEvent: string | undefined;

                if (createReceipt && createReceipt.logs) {
                    console.log(
                        "Transaction receipt logs:",
                        createReceipt.logs
                    );
                    console.log(
                        "Contract address:",
                        CONTRACT_ADDRESSES[subscriptionData.chainId]
                    );

                    // Find the SubscriptionCreated event in the logs using viem
                    const eventLog = createReceipt.logs.find((log: any) => {
                        try {
                            // Check if this log is from our contract
                            const isFromOurContract =
                                log.address.toLowerCase() ===
                                CONTRACT_ADDRESSES[
                                    subscriptionData.chainId
                                ].toLowerCase();

                            if (isFromOurContract) {
                                return (
                                    isFromOurContract &&
                                    log.topics &&
                                    log.topics.length >= 4
                                ); // 1 event signature + 3 indexed parameters
                            }
                            return false;
                        } catch (err) {
                            console.error("Error checking log:", err);
                            return false;
                        }
                    });

                    if (eventLog) {
                        try {
                            // Extract subscription ID from the first topic (indexed parameter)
                            subscriptionIdFromEvent = eventLog.topics[1];
                            console.log(
                                "Event log found, subscription ID:",
                                subscriptionIdFromEvent
                            );
                        } catch (err) {
                            console.error(
                                "Error extracting subscription ID:",
                                err
                            );
                        }
                    } else {
                        console.error(
                            "No SubscriptionCreated event found in logs"
                        );
                    }
                }

                if (!subscriptionIdFromEvent) {
                    setError(
                        "Failed to extract subscription ID from transaction receipt. Please try again."
                    );
                    setStep("form");
                    return;
                }

                // Prepare the API payload using the captured data
                const apiPayload = {
                    action: "create-subscription",
                    subscriptionId: subscriptionIdFromEvent,
                    subscriberAddress: address,
                    payeeAddress: subscriptionData.payeeAddress,
                    srcChainId: subscriptionData.chainId,
                    srcTokenAddress: subscriptionData.tokenAddress,
                    amount: parseUnits(
                        subscriptionData.amount,
                        tokenDecimals || 6
                    ).toString(),
                    intervalSeconds: subscriptionData.intervalSeconds,
                    maxPayments: subscriptionData.maxPayments,
                    txHash: createTxHash,
                };

                console.log("Debug - Complete API payload:", apiPayload);

                // Call your API to store the subscription in the database
                const response = await fetch("/api/recurring-payments-smart", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(apiPayload),
                });

                const data = await response.json();

                if (data.success) {
                    setSuccess(
                        "Subscription created and stored successfully! Future payments will be executed automatically."
                    );
                    setStep("complete");
                    setNewSubscription({
                        payeeAddress: "",
                        tokenAddress:
                            "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
                        chainId: 8453,
                        amount: "",
                        intervalSeconds: 60,
                        maxPayments: "",
                    });
                    loadSubscriptions();
                } else {
                    setError(`Failed to store subscription: ${data.error}`);
                    setStep("form");
                }
            } catch (err: unknown) {
                const errorMessage =
                    err instanceof Error ? err.message : "Unknown error";
                setError(`Error storing subscription: ${errorMessage}`);
                console.error(err);
                setStep("form");
            }
        },
        [address, tokenDecimals, loadSubscriptions, createTxHash, createReceipt]
    );

    // Handle approval confirmation
    useEffect(() => {
        if (isApproveConfirmed) {
            setStep("create");
            setSuccess(
                "Token approval confirmed! Now creating subscription..."
            );
        }
    }, [isApproveConfirmed]);

    // Handle subscription creation confirmation
    useEffect(() => {
        if (isCreateConfirmed && createReceipt && subscriptionDataRef.current) {
            handleSubscriptionConfirmed(subscriptionDataRef.current);
            // Clear the ref after use
            subscriptionDataRef.current = null;
        }
    }, [isCreateConfirmed, createReceipt, handleSubscriptionConfirmed]);

    // Handle cancellation confirmation
    useEffect(() => {
        if (isCancelConfirmed && cancelTxHash && cancellingSubscriptionId) {
            handleCancelConfirmed();
        }
    }, [isCancelConfirmed, cancelTxHash, cancellingSubscriptionId]);

    const handleCancelConfirmed = useCallback(async () => {
        try {
            if (!cancellingSubscriptionId) return;

            // Update database to mark subscription as cancelled
            const response = await fetch("/api/recurring-payments-smart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "cancel-subscription",
                    subscriptionId: cancellingSubscriptionId,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSuccess("Subscription cancelled successfully!");
                setCancellingSubscriptionId(null);
                loadSubscriptions(); // Reload the subscriptions list
            } else {
                setError(`Failed to update database: ${data.error}`);
            }
        } catch (err: unknown) {
            const errorMessage =
                err instanceof Error ? err.message : "Unknown error occurred";
            setError(`Failed to update database: ${errorMessage}`);
        }
    }, [cancellingSubscriptionId, loadSubscriptions]);

    // Approve tokens
    const approveTokens = useCallback(async () => {
        if (!address) {
            setError("Please connect your wallet first");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const totalAmount = parseUnits(
                (
                    parseFloat(newSubscription.amount) *
                    parseInt(newSubscription.maxPayments)
                ).toString(),
                tokenDecimals || 6
            );

            writeApprove({
                address: newSubscription.tokenAddress,
                abi: ERC20_ABI,
                functionName: "approve",
                args: [
                    CONTRACT_ADDRESSES[newSubscription.chainId],
                    totalAmount,
                ],
                chainId: newSubscription.chainId,
            });
        } catch (err: unknown) {
            const errorMessage =
                err instanceof Error ? err.message : "Unknown error occurred";
            setError(`Failed to approve tokens: ${errorMessage}`);
        } finally {
            setLoading(false);
        }
    }, [address, newSubscription, tokenDecimals, writeApprove]);

    // Create subscription
    const createSubscription = useCallback(async () => {
        if (!address) {
            setError("Please connect your wallet first");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            // Store subscription data in ref before creating
            subscriptionDataRef.current = {
                payeeAddress: newSubscription.payeeAddress,
                chainId: newSubscription.chainId,
                tokenAddress: newSubscription.tokenAddress,
                amount: newSubscription.amount,
                intervalSeconds: newSubscription.intervalSeconds,
                maxPayments: newSubscription.maxPayments,
            };

            const amount = parseUnits(
                newSubscription.amount,
                tokenDecimals || 6
            );

            writeCreateSubscription({
                address: CONTRACT_ADDRESSES[newSubscription.chainId],
                abi: RECURRING_PAYMENTS_ABI,
                functionName: "createSubscription",
                args: [
                    newSubscription.payeeAddress as `0x${string}`,
                    newSubscription.tokenAddress,
                    amount,
                    BigInt(newSubscription.intervalSeconds),
                    BigInt(newSubscription.maxPayments),
                ],
                chainId: newSubscription.chainId,
            });
        } catch (err: unknown) {
            const errorMessage =
                err instanceof Error ? err.message : "Unknown error occurred";
            setError(`Failed to create subscription: ${errorMessage}`);
        } finally {
            setLoading(false);
        }
    }, [address, newSubscription, tokenDecimals, writeCreateSubscription]);

    // Cancel subscription function
    const cancelSubscription = useCallback(
        async (subscriptionId: string) => {
            if (!address) {
                setError("Please connect your wallet first");
                return;
            }

            try {
                setError(null);
                setCancellingSubscriptionId(subscriptionId);

                // Find the subscription to get its chain ID
                const subscription = subscriptions.find(
                    (s) => s.subscriptionId === subscriptionId
                );
                if (!subscription) {
                    setError("Subscription not found");
                    setCancellingSubscriptionId(null);
                    return;
                }

                const contractAddress =
                    CONTRACT_ADDRESSES[subscription.chainId];

                writeCancelSubscription({
                    address: contractAddress,
                    abi: RECURRING_PAYMENTS_ABI,
                    functionName: "cancelSubscription",
                    args: [subscriptionId as `0x${string}`],
                    chainId: subscription.chainId,
                });
            } catch (err: unknown) {
                const errorMessage =
                    err instanceof Error
                        ? err.message
                        : "Unknown error occurred";
                setError(`Failed to cancel subscription: ${errorMessage}`);
                setCancellingSubscriptionId(null);
            }
        },
        [address, subscriptions, writeCancelSubscription]
    );

    // Pause subscription
    const pauseSubscription = useCallback(
        async (subscriptionId: string) => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch("/api/recurring-payments-smart", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        action: "pause-subscription",
                        subscriptionId,
                    }),
                });

                const data = await response.json();

                if (data.success) {
                    setSuccess("Subscription paused successfully!");
                    loadSubscriptions();
                } else {
                    setError(data.error || "Failed to pause subscription");
                }
            } catch (err: unknown) {
                const errorMessage =
                    err instanceof Error
                        ? err.message
                        : "Unknown error occurred";
                setError(`Failed to pause subscription: ${errorMessage}`);
            } finally {
                setLoading(false);
            }
        },
        [loadSubscriptions]
    );

    // Resume subscription
    const resumeSubscription = useCallback(
        async (subscriptionId: string) => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch("/api/recurring-payments-smart", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        action: "resume-subscription",
                        subscriptionId,
                    }),
                });

                const data = await response.json();

                if (data.success) {
                    setSuccess("Subscription resumed successfully!");
                    loadSubscriptions();
                } else {
                    setError(data.error || "Failed to resume subscription");
                }
            } catch (err: unknown) {
                const errorMessage =
                    err instanceof Error
                        ? err.message
                        : "Unknown error occurred";
                setError(`Failed to resume subscription: ${errorMessage}`);
            } finally {
                setLoading(false);
            }
        },
        [loadSubscriptions]
    );

    // Handle form submission
    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();

            if (!address) {
                setError("Please connect your wallet first");
                return;
            }

            if (!newSubscription.payeeAddress) {
                setError("Please enter a payee address");
                return;
            }

            if (!newSubscription.amount) {
                setError("Please enter an amount");
                return;
            }

            if (!newSubscription.maxPayments) {
                setError("Please enter max payments");
                return;
            }

            // Check if payee is the same as subscriber
            if (
                newSubscription.payeeAddress.toLowerCase() ===
                address.toLowerCase()
            ) {
                setError(
                    "Payee address cannot be the same as your wallet address"
                );
                return;
            }

            setStep("approve");
            setError(null);
        },
        [address, newSubscription]
    );

    if (!isConnected) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800">
                        Please connect your wallet to manage recurring payments.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">
                Smart Contract Recurring Payments
            </h1>

            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800">{error}</p>
                </div>
            )}

            {success && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800">{success}</p>
                </div>
            )}

            {/* Create New Subscription Form */}
            <div className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">
                    Create New Subscription
                </h2>

                {step === "form" && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Payee Address
                            </label>
                            <input
                                type="text"
                                value={newSubscription.payeeAddress}
                                onChange={(e) =>
                                    setNewSubscription({
                                        ...newSubscription,
                                        payeeAddress: e.target.value,
                                    })
                                }
                                placeholder="0x..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Token Address
                            </label>
                            <input
                                type="text"
                                value={newSubscription.tokenAddress}
                                onChange={(e) =>
                                    setNewSubscription({
                                        ...newSubscription,
                                        tokenAddress: e.target
                                            .value as `0x${string}`,
                                    })
                                }
                                placeholder="0x..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Chain
                            </label>
                            <select
                                value={newSubscription.chainId}
                                onChange={(e) =>
                                    setNewSubscription({
                                        ...newSubscription,
                                        chainId: parseInt(e.target.value),
                                    })
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value={8453}>Base</option>
                                <option value={1}>Ethereum</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Amount
                            </label>
                            <input
                                type="number"
                                step="0.000001"
                                value={newSubscription.amount}
                                onChange={(e) =>
                                    setNewSubscription({
                                        ...newSubscription,
                                        amount: e.target.value,
                                    })
                                }
                                placeholder="0.5"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Interval (seconds)
                            </label>
                            <input
                                type="number"
                                value={newSubscription.intervalSeconds}
                                onChange={(e) =>
                                    setNewSubscription({
                                        ...newSubscription,
                                        intervalSeconds: parseInt(
                                            e.target.value
                                        ),
                                    })
                                }
                                placeholder="60"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Max Payments
                            </label>
                            <input
                                type="number"
                                value={newSubscription.maxPayments}
                                onChange={(e) =>
                                    setNewSubscription({
                                        ...newSubscription,
                                        maxPayments: e.target.value,
                                    })
                                }
                                placeholder="10"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
                        >
                            {loading ? "Processing..." : "Create Subscription"}
                        </button>
                    </form>
                )}

                {step === "approve" && (
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Please approve the contract to spend your tokens.
                        </p>
                        <button
                            onClick={approveTokens}
                            disabled={isApproving || isApprovingConfirming}
                            className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 disabled:opacity-50"
                        >
                            {isApproving || isApprovingConfirming
                                ? "Approving..."
                                : "Approve Tokens"}
                        </button>
                    </div>
                )}

                {step === "create" && (
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Now creating your subscription on the blockchain...
                        </p>
                        <button
                            onClick={createSubscription}
                            disabled={isCreating || isCreateConfirming}
                            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50"
                        >
                            {isCreating || isCreateConfirming
                                ? "Creating..."
                                : "Create Subscription"}
                        </button>
                    </div>
                )}

                {step === "complete" && (
                    <div className="space-y-4">
                        <p className="text-green-600 font-medium">
                            Subscription created successfully!
                        </p>
                        <button
                            onClick={() => setStep("form")}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                        >
                            Create Another Subscription
                        </button>
                    </div>
                )}
            </div>

            {/* Existing Subscriptions */}
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">
                    Your Subscriptions
                </h2>

                {subscriptions.length === 0 ? (
                    <p className="text-gray-500">No subscriptions found.</p>
                ) : (
                    <div className="space-y-4">
                        {subscriptions.map((subscription) => (
                            <div
                                key={subscription.subscriptionId}
                                className="border border-gray-200 rounded-lg p-4"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold">
                                        Subscription{" "}
                                        {subscription.subscriptionId.slice(
                                            0,
                                            8
                                        )}
                                        ...
                                    </h3>
                                    <div className="flex space-x-2">
                                        <span
                                            className={`px-2 py-1 rounded text-sm ${
                                                subscription.isActive
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-red-100 text-red-800"
                                            }`}
                                        >
                                            {subscription.isActive
                                                ? "Active"
                                                : "Inactive"}
                                        </span>
                                        {subscription.isPaused && (
                                            <span className="px-2 py-1 rounded text-sm bg-yellow-100 text-yellow-800">
                                                Paused
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                                    <div>
                                        Amount:{" "}
                                        {formatAmount(
                                            subscription.amount,
                                            subscription.tokenAddress
                                        )}
                                    </div>
                                    <div>
                                        Interval:{" "}
                                        {formatInterval(
                                            subscription.intervalSeconds
                                        )}
                                    </div>
                                    <div>
                                        Chain:{" "}
                                        {CHAIN_NAMES[subscription.chainId] ||
                                            subscription.chainId}
                                    </div>
                                    <div>
                                        Payee: {subscription.payee.slice(0, 6)}
                                        ...{subscription.payee.slice(-4)}
                                    </div>
                                    <div>
                                        Payments: {subscription.paymentsMade}/
                                        {subscription.maxPayments}
                                    </div>
                                    <div>
                                        Last Payment:{" "}
                                        {subscription.lastPayment
                                            ? new Date(
                                                  subscription.lastPayment *
                                                      1000
                                              ).toLocaleDateString()
                                            : "Never"}
                                    </div>
                                </div>

                                <div className="mt-4 flex space-x-2">
                                    {subscription.isActive && (
                                        <>
                                            {subscription.isPaused ? (
                                                <button
                                                    onClick={() =>
                                                        resumeSubscription(
                                                            subscription.subscriptionId
                                                        )
                                                    }
                                                    disabled={loading}
                                                    className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 disabled:opacity-50"
                                                >
                                                    Resume
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        pauseSubscription(
                                                            subscription.subscriptionId
                                                        )
                                                    }
                                                    disabled={loading}
                                                    className="bg-yellow-600 text-white px-4 py-2 rounded text-sm hover:bg-yellow-700 disabled:opacity-50"
                                                >
                                                    Pause
                                                </button>
                                            )}
                                            <button
                                                onClick={() => {
                                                    if (
                                                        confirm(
                                                            "Are you sure you want to cancel this subscription? This action cannot be undone."
                                                        )
                                                    ) {
                                                        cancelSubscription(
                                                            subscription.subscriptionId
                                                        );
                                                    }
                                                }}
                                                disabled={
                                                    isCancelling ||
                                                    cancellingSubscriptionId ===
                                                        subscription.subscriptionId
                                                }
                                                className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 disabled:opacity-50"
                                            >
                                                {isCancelling &&
                                                cancellingSubscriptionId ===
                                                    subscription.subscriptionId
                                                    ? "Cancelling..."
                                                    : "Cancel"}
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
