"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import profileimage from "../../../public/d73a78831e8a5491bfa80d0afd6c68fe.jpg"

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
  const pathname = usePathname();
  
  return (
    <div className="bg-gradient-to-br from-lime-300 via-green-400 to-emerald-500 rounded-3xl p-5 m-3 relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

      {/* Header */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <h1 className="text-gray-800 text-lg font-medium"></h1>
        </div>
        <Link href="/profile" className="w-16 h-16 rounded-2xl bg-gray-800 overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
          {profileimage ? (
            <Image
              src={profileimage}
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
        </Link>
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
      <div className="flex gap-3 cursor-pointer relative z-10">
        <Link 
          href="/auto-receive" 
          className={`flex-1 ${
            pathname === '/auto-receive' 
              ? 'opacity-100' 
              : 'opacity-80 hover:opacity-100 text-green-800'
          }`}
        >
          <button className={`w-full hover:cursor-pointer backdrop-blur-sm py-3 px-4 rounded-2xl font-medium transition-colors ${
            pathname === '/auto-receive'
              ? 'bg-gray-900/90 text-white '
              : 'hover:bg-white/40 text-green-800'
          }`}>
            Request
          </button>
        </Link>
        <Link 
          href="/auto-send" 
          className={`flex-1 ${
            pathname === '/auto-send' 
              ? 'opacity-100' 
              : 'opacity-80 hover:opacity-100 text-green-800'
          }`}
        >
          <button className={`w-full backdrop-blur-sm cursor-pointer py-3 px-4 rounded-2xl font-medium transition-colors ${
            pathname === '/auto-send'
              ? 'bg-gray-900/90 text-white'
              : 'hover:bg-white/40 text-black font-bold'
          }`}>
            Send
          </button>
        </Link>
        <Link 
          href="/profile" 
          className={`flex-1 ${
            pathname === '/profile' 
              ? 'opacity-100' 
              : 'opacity-80 hover:opacity-100 text-green-800'
          }`}
        >
          <button className={`w-full backdrop-blur-sm cursor-pointer py-3 px-4 rounded-2xl font-medium transition-colors ${
            pathname === '/profile'
              ? 'bg-gray-900/90 text-white'
              : 'hover:bg-white/40 text-green-800'
          }`}>
            Profile
          </button>
        </Link>
      </div>
    </div>
  );
}
