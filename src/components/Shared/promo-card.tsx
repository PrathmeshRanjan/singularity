"use client";

import Image from "next/image";
import React from "react";

interface CardDashboardProps {
  name: string;
  subtitle: string;
  currency: string;
  balance: string;
  transaction: string;
  profileImage?: string;
}

export default function CardDashboard({
  name,
  subtitle,
  currency,
  balance,
  transaction,
  profileImage,
}: CardDashboardProps) {
  return (
    <div className="bg-gradient-to-br from-lime-300 via-green-400 to-emerald-500 rounded-3xl p-6 m-4 relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

      {/* Header */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <h1 className="text-gray-800 text-lg font-medium">Hello, {name}!</h1>
          <p className="text-gray-700 text-sm opacity-80">{subtitle}</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden">
          {profileImage ? (
            <Image
              src={profileImage}
              alt="Profile"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white text-lg font-bold">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </div>

      {/* Currency Tag */}
      <div className="inline-flex items-center bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 relative z-10">
        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
        {currency}
      </div>

      {/* Balance + Last Transaction */}
      <div className="mb-6 relative z-10">
        <div className="text-gray-800 text-4xl font-bold mb-1">{balance}</div>
        <div className="text-gray-700 text-sm opacity-80">{transaction}</div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 relative z-10">
        <a 
          href="/auto-receive" 
          className={`flex-1 ${
            window.location.pathname === '/auto-receive' 
              ? 'opacity-100' 
              : 'opacity-80 hover:opacity-100'
          }`}
        >
          <button className={`w-full backdrop-blur-sm text-white py-3 px-4 rounded-2xl font-medium transition-colors ${
            window.location.pathname === '/auto-receive'
              ? 'bg-gray-900/90'
              : 'bg-gray-800/80 hover:bg-gray-700/80'
          }`}>
            Request
          </button>
        </a>
        <a 
          href="/auto-send" 
          className={`flex-1 ${
            window.location.pathname === '/auto-send' 
              ? 'opacity-100' 
              : 'opacity-80 hover:opacity-100'
          }`}
        >
          <button className={`w-full backdrop-blur-sm text-white py-3 px-4 rounded-2xl font-medium transition-colors ${
            window.location.pathname === '/auto-send'
              ? 'bg-gray-900/90'
              : 'bg-gray-800/80 hover:bg-gray-700/80'
          }`}>
            Send
          </button>
        </a>
      </div>
    </div>
  );
}
