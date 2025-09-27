'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, DollarSign, User, Wallet, CheckCircle, AlertCircle } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface AutoPayData {
  id: string;
  amount: string;
  durationUnit: string;
  durationValue: string;
  frequency: string;
  totalDuration: string;
  startDate: string;
  recipientAddress: string;
  ethAddress: string;
  totalAmount: number;
  totalPayments: number;
  paymentAmount: number;
  createdAt?: string;
}

export default function ViewAutoPayPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  const [autoPayData, setAutoPayData] = useState<AutoPayData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('No auto-pay ID provided');
      setLoading(false);
      return;
    }

    fetchAutoPayData();
  }, [id]);

  const fetchAutoPayData = async () => {
    try {
      const response = await fetch(`/api/autopay?id=${id}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch auto-pay data');
      }

      setAutoPayData(result.data);
    } catch (error) {
      console.error('Error fetching auto-pay data:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatFrequency = (frequency: string) => {
    return frequency.charAt(0).toUpperCase() + frequency.slice(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-yellow-400 to-orange-400 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error || !autoPayData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-yellow-400 to-orange-400 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl p-6 max-w-md w-full text-center"
        >
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error || 'Auto-pay not found'}</p>
          <Link
            href="/auto-send"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Go Back
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-yellow-400 to-orange-400 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between mb-6 pt-4"
        >
          <Link href="/auto-send">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </motion.button>
          </Link>
          <h1 className="text-xl font-bold text-white">Auto-Pay Details</h1>
          <div className="w-10" />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-xl"
        >
          {/* Success Icon */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Auto-Pay Active
            </h2>
            <p className="text-gray-600">
              ID: {autoPayData.id}
            </p>
          </div>

          {/* Payment Details */}
          <div className="space-y-4">
            {/* Amount */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Payment Amount</p>
                  <p className="text-sm text-gray-600">Per {autoPayData.frequency}</p>
                </div>
              </div>
              <p className="text-xl font-bold text-gray-900">
                ${autoPayData.paymentAmount.toFixed(2)}
              </p>
            </div>

            {/* Total Amount */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Wallet className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Total Amount</p>
                  <p className="text-sm text-gray-600">{autoPayData.totalPayments} payments</p>
                </div>
              </div>
              <p className="text-xl font-bold text-gray-900">
                ${autoPayData.totalAmount.toFixed(2)}
              </p>
            </div>

            {/* Frequency */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">Frequency</p>
                  <p className="text-sm text-gray-600">Payment schedule</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-900">
                {formatFrequency(autoPayData.frequency)}
              </p>
            </div>

            {/* Start Date */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900">Start Date</p>
                  <p className="text-sm text-gray-600">First payment</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-900">
                {formatDate(autoPayData.startDate)}
              </p>
            </div>

            {/* Recipient */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="font-medium text-gray-900">Recipient</p>
                  <p className="text-sm text-gray-600">Payment destination</p>
                </div>
              </div>
              <p className="text-sm font-mono text-gray-900 max-w-32 truncate">
                {autoPayData.recipientAddress}
              </p>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-600" />
                <div>
                  <p className="font-medium text-gray-900">Duration</p>
                  <p className="text-sm text-gray-600">Payment period</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-900">
                {autoPayData.durationValue} {autoPayData.durationUnit}
              </p>
            </div>
          </div>

          {/* Created Date */}
          {autoPayData.createdAt && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Created on {formatDate(autoPayData.createdAt)}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">
            <Link href="/auto-send" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Back to Scanner
              </motion.button>
            </Link>
            
            <Link href="/auto-send/create" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Create New
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}