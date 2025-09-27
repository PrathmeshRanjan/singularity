"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, DollarSign, User, Wallet } from "lucide-react";
import Link from "next/link";

export default function CreateAutoPayPage() {
  const [formData, setFormData] = useState({
    amount: "",
    durationUnit: "days", // min, hr, days
    durationValue: "",
    frequency: "daily", // daily, weekly, monthly
    totalDuration: "30", // total duration in days
    startDate: "",
    recipientAddress: "",
    ethAddress: ""
  });

  const [calculatedData, setCalculatedData] = useState({
    totalPayments: 0,
    totalAmount: 0,
    endDate: "",
    nextPayment: ""
  });

  // Calculate payment schedule
  useEffect(() => {
    if (formData.amount && formData.durationValue && formData.totalDuration && formData.startDate) {
      const amount = parseFloat(formData.amount);
      const durationValue = parseInt(formData.durationValue);
      const totalDuration = parseInt(formData.totalDuration);
      const startDate = new Date(formData.startDate);

      let intervalDays = 0;
      
      // Convert duration to days
      switch (formData.durationUnit) {
        case "min":
          intervalDays = durationValue / (24 * 60); // minutes to days
          break;
        case "hr":
          intervalDays = durationValue / 24; // hours to days
          break;
        case "days":
          intervalDays = durationValue;
          break;
      }

      // Calculate based on frequency
      let frequencyMultiplier = 1;
      switch (formData.frequency) {
        case "daily":
          frequencyMultiplier = 1;
          break;
        case "weekly":
          frequencyMultiplier = 7;
          break;
        case "monthly":
          frequencyMultiplier = 30;
          break;
      }

      const actualInterval = intervalDays * frequencyMultiplier;
      const totalPayments = Math.ceil(totalDuration / actualInterval);
      const totalAmount = amount * totalPayments;
      
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + totalDuration);
      
      const nextPayment = new Date(startDate);
      nextPayment.setDate(startDate.getDate() + actualInterval);

      const calculated = {
        totalPayments,
        totalAmount,
        endDate: endDate.toLocaleDateString(),
        nextPayment: nextPayment.toLocaleDateString()
      };

      setCalculatedData(calculated);

      // Console log the calculation
      console.log("Auto-Pay Calculation:", {
        formData,
        calculated,
        intervalDays,
        frequencyMultiplier,
        actualInterval
      });
    }
  }, [formData]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating Auto-Pay with data:", {
      formData,
      calculatedData
    });
    // Here you would typically send the data to your backend
    alert("Auto-Pay created successfully! Check console for details.");
  };

  return (
    <div className="max-w-2xl max-h-120 overflow-y-auto scrollbar-hide mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/auto-send">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Create Auto-Pay</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Amount */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <DollarSign className="w-4 h-4" />
            Amount per Payment
          </label>
          <input
            type="number"
            step="0.01"
            value={formData.amount}
            onChange={(e) => handleInputChange("amount", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0.00"
            required
          />
        </div>

        {/* Duration */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Clock className="w-4 h-4" />
              Duration Value
            </label>
            <input
              type="number"
              value={formData.durationValue}
              onChange={(e) => handleInputChange("durationValue", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="1"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Duration Unit</label>
            <select
              value={formData.durationUnit}
              onChange={(e) => handleInputChange("durationUnit", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="min">Minutes</option>
              <option value="hr">Hours</option>
              <option value="days">Days</option>
            </select>
          </div>
        </div>

        {/* Frequency */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Payment Frequency</label>
          <select
            value={formData.frequency}
            onChange={(e) => handleInputChange("frequency", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Total Duration */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Total Duration (Days)</label>
          <input
            type="number"
            value={formData.totalDuration}
            onChange={(e) => handleInputChange("totalDuration", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="30"
            required
          />
        </div>

        {/* Start Date */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4" />
            Start Date
          </label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => handleInputChange("startDate", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Recipient Address */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <User className="w-4 h-4" />
            Recipient Address
          </label>
          <input
            type="text"
            value={formData.recipientAddress}
            onChange={(e) => handleInputChange("recipientAddress", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter recipient address"
            required
          />
        </div>

        {/* ETH Address */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Wallet className="w-4 h-4" />
            ETH Address
          </label>
          <input
            type="text"
            value={formData.ethAddress}
            onChange={(e) => handleInputChange("ethAddress", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0x..."
            required
          />
        </div>

        {/* Calculation Summary */}
        {calculatedData.totalPayments > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
            <h3 className="font-semibold text-blue-900">Payment Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-blue-700">Total Payments:</span>
                <span className="font-medium ml-2">{calculatedData.totalPayments}</span>
              </div>
              <div>
                <span className="text-blue-700">Total Amount:</span>
                <span className="font-medium ml-2">${calculatedData.totalAmount.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-blue-700">End Date:</span>
                <span className="font-medium ml-2">{calculatedData.endDate}</span>
              </div>
              <div>
                <span className="text-blue-700">Next Payment:</span>
                <span className="font-medium ml-2">{calculatedData.nextPayment}</span>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-black text-white py-4 rounded-lg mx-auto font-medium hover:bg-gray-800 transition-colors"
        >
          Create Auto-Pay
        </motion.button>
      </form>
    </div>
  );
}