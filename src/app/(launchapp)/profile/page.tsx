"use client";

import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { ArrowLeft, RefreshCw, Pause, Play, X, Calendar, Clock, DollarSign, Users, Activity } from "lucide-react";
import Link from "next/link";

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
    42161: "Arbitrum",
    137: "Polygon",
};

const TOKEN_DECIMALS: Record<string, number> = {
    "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": 6, // USDC on Base
    "0xA0b86a33E6441c8C06Cdd7C1a3F4f8C2b15D0A42": 18, // USDC on Ethereum
};

const TOKEN_SYMBOLS: Record<string, string> = {
    "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": "USDC",
    "0xA0b86a33E6441c8C06Cdd7C1a3F4f8C2b15D0A42": "USDC",
};

export default function ProfilePage() {
    const { address, isConnected } = useAccount();
    const [subscriptions, setSubscriptions] = useState<SubscriptionPlan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    // Fetch user subscriptions
    const fetchSubscriptions = async () => {
        if (!address) return;
        
        try {
            setLoading(true);
            setError(null);
            
            const response = await fetch(`/api/recurring-payments-smart?action=user-subscriptions&subscriberAddress=${address}`);
            
            if (response.ok) {
                const data = await response.json();
                setSubscriptions(data.subscriptions || []);
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Failed to fetch subscriptions');
            }
        } catch (err) {
            console.error('Error fetching subscriptions:', err);
            setError('Failed to fetch subscriptions');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isConnected && address) {
            fetchSubscriptions();
        }
    }, [isConnected, address]);

    // Handle subscription actions
    const handleSubscriptionAction = async (action: string, subscriptionId: string) => {
        try {
            setActionLoading(subscriptionId);
            
            const response = await fetch('/api/recurring-payments-smart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: action,
                    subscriptionId: subscriptionId,
                }),
            });

            if (response.ok) {
                // Refresh subscriptions after successful action
                await fetchSubscriptions();
            } else {
                const errorData = await response.json();
                setError(errorData.error || `Failed to ${action} subscription`);
            }
        } catch (err) {
            console.error(`Error ${action} subscription:`, err);
            setError(`Failed to ${action} subscription`);
        } finally {
            setActionLoading(null);
        }
    };

    // Format amount with proper decimals
    const formatAmount = (amount: string, tokenAddress: string): string => {
        const decimals = TOKEN_DECIMALS[tokenAddress] || 6;
        const symbol = TOKEN_SYMBOLS[tokenAddress] || 'TOKEN';
        const formattedAmount = (parseFloat(amount) / Math.pow(10, decimals)).toFixed(2);
        return `${formattedAmount} ${symbol}`;
    };

    // Format interval to human readable
    const formatInterval = (intervalSeconds: number): string => {
        if (intervalSeconds < 60) return `${intervalSeconds}s`;
        if (intervalSeconds < 3600) return `${Math.floor(intervalSeconds / 60)}m`;
        if (intervalSeconds < 86400) return `${Math.floor(intervalSeconds / 3600)}h`;
        if (intervalSeconds < 2592000) return `${Math.floor(intervalSeconds / 86400)}d`;
        return `${Math.floor(intervalSeconds / 2592000)}mo`;
    };

    // Format date
    const formatDate = (timestamp: number): string => {
        return new Date(timestamp * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (!isConnected) {
        return (
            <div className="max-h-120 overflow-y-auto scrollbar-hide mx-auto p-6">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                        <div className="text-red-500 text-6xl mb-4">🔒</div>
                        <h1 className="text-2xl font-bold mb-4 text-gray-800">Wallet Not Connected</h1>
                        <p className="text-gray-600 mb-6">
                            Please connect your wallet to view your subscriptions.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            <ArrowLeft size={16} />
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-h-120 overflow-y-auto scrollbar-hide mx-auto p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ArrowLeft size={20} className="text-gray-600" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">My Subscriptions</h1>
                            <p className="text-gray-600">Manage your recurring payments</p>
                        </div>
                    </div>
                    <button
                        onClick={fetchSubscriptions}
                        disabled={loading}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50"
                    >
                        <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                        Refresh
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm">{error}</p>
                    </div>
                )}

                {/* Loading State */}
                {loading ? (
                    <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading your subscriptions...</p>
                    </div>
                ) : subscriptions.length === 0 ? (
                    /* Empty State */
                    <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                        <div className="text-gray-400 text-6xl mb-4">📋</div>
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">No Subscriptions Found</h2>
                        <p className="text-gray-600 mb-6">
                            You don't have any active subscriptions yet. Create your first recurring payment to get started.
                        </p>
                        <Link
                            href="/auto-send"
                            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Create Subscription
                        </Link>
                    </div>
                ) : (
                    /* Subscriptions List */
                    <div className="space-y-4">
                        {subscriptions.map((subscription) => (
                            <div
                                key={subscription.subscriptionId}
                                className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                {/* Subscription Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                            <Activity size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">
                                                Subscription {subscription.subscriptionId.slice(0, 8)}...
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Created {new Date(subscription.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                subscription.isActive
                                                    ? subscription.isPaused
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-green-100 text-green-800"
                                                    : "bg-red-100 text-red-800"
                                            }`}
                                        >
                                            {subscription.isActive
                                                ? subscription.isPaused
                                                    ? "Paused"
                                                    : "Active"
                                                : "Inactive"}
                                        </span>
                                    </div>
                                </div>

                                {/* Subscription Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <DollarSign size={16} className="text-gray-500" />
                                        <div>
                                            <p className="text-sm text-gray-500">Amount</p>
                                            <p className="font-semibold text-gray-800">
                                                {formatAmount(subscription.amount, subscription.tokenAddress)}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <Clock size={16} className="text-gray-500" />
                                        <div>
                                            <p className="text-sm text-gray-500">Interval</p>
                                            <p className="font-semibold text-gray-800">
                                                {formatInterval(subscription.intervalSeconds)}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <Calendar size={16} className="text-gray-500" />
                                        <div>
                                            <p className="text-sm text-gray-500">Progress</p>
                                            <p className="font-semibold text-gray-800">
                                                {subscription.paymentsMade}/{subscription.maxPayments}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <Users size={16} className="text-gray-500" />
                                        <div>
                                            <p className="text-sm text-gray-500">Payee</p>
                                            <p className="font-semibold text-gray-800 font-mono text-sm">
                                                {subscription.payee.slice(0, 6)}...{subscription.payee.slice(-4)}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                        <div>
                                            <p className="text-sm text-gray-500">Network</p>
                                            <p className="font-semibold text-gray-800">
                                                {CHAIN_NAMES[subscription.chainId] || subscription.chainId}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <Clock size={16} className="text-gray-500" />
                                        <div>
                                            <p className="text-sm text-gray-500">Last Payment</p>
                                            <p className="font-semibold text-gray-800">
                                                {subscription.lastPayment
                                                    ? formatDate(subscription.lastPayment)
                                                    : "Never"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                {subscription.isActive && (
                                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                                        {subscription.isPaused ? (
                                            <button
                                                onClick={() => handleSubscriptionAction('resume-subscription', subscription.subscriptionId)}
                                                disabled={actionLoading === subscription.subscriptionId}
                                                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
                                            >
                                                <Play size={16} />
                                                {actionLoading === subscription.subscriptionId ? 'Resuming...' : 'Resume'}
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleSubscriptionAction('pause-subscription', subscription.subscriptionId)}
                                                disabled={actionLoading === subscription.subscriptionId}
                                                className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 disabled:opacity-50 transition-colors"
                                            >
                                                <Pause size={16} />
                                                {actionLoading === subscription.subscriptionId ? 'Pausing...' : 'Pause'}
                                            </button>
                                        )}
                                        
                                        <button
                                            onClick={() => {
                                                if (confirm("Are you sure you want to cancel this subscription? This action cannot be undone.")) {
                                                    handleSubscriptionAction('cancel-subscription', subscription.subscriptionId);
                                                }
                                            }}
                                            disabled={actionLoading === subscription.subscriptionId}
                                            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
                                        >
                                            <X size={16} />
                                            {actionLoading === subscription.subscriptionId ? 'Cancelling...' : 'Cancel'}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Stats Summary */}
                {subscriptions.length > 0 && (
                    <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Summary</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-blue-600">{subscriptions.length}</p>
                                <p className="text-sm text-gray-600">Total Subscriptions</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-green-600">
                                    {subscriptions.filter(s => s.isActive && !s.isPaused).length}
                                </p>
                                <p className="text-sm text-gray-600">Active</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-yellow-600">
                                    {subscriptions.filter(s => s.isPaused).length}
                                </p>
                                <p className="text-sm text-gray-600">Paused</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
