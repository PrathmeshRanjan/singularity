"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

interface SidebarProps {
  // Remove activeTab and onTabChange props as we'll use routing instead
}

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  const tabs = [
    {
      id: "auto-send",
      label: "Auto Send",
      route: "/auto-send",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      id: "auto-receive",
      label: "Auto Receive",
      route: "/auto-receive",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      )
    },
    {
      id: "swap",
      label: "Swap",
      route: "/swap",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <div className="w-64 bg-[#a66bff] rounded-2xl text-white h-full flex flex-col">
      {/* Logo Section */}
      <div className="p-6">
          <span className="text-xl font-bold">Pay&Connect</span>
      </div>

      {/* Menu Label */}

      {/* Navigation Tabs - Centered */}
      <div className="flex-1 flex flex-col justify-center px-4 space-y-2">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => handleNavigation(tab.route)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              pathname === tab.route
                ? "bg-white text-[#a66bff] shadow-lg"
                : "text-white"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`${pathname === tab.route ? "text-[#a66bff]" : "text-white"}`}>
              {tab.icon}
            </div>
            <span className="font-medium">{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Footer Section */}
      <div className="p-6 border-t border-blue-500/30 space-y-4">
        {/* About Us */}
        <button className="w-full flex items-center space-x-3 px-4 py-2 text-blue-200 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">About us</span>
        </button>

        {/* Support */}
        <button className="w-full flex items-center space-x-3 px-4 py-2 text-blue-200 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
          </svg>
          <span className="text-sm">Support</span>
        </button>

        {/* Copyright */}
        <div className="text-xs text-blue-300 text-center pt-4">
          © Copyright 2024 Mr.Farahzad, Inc.
        </div>
      </div>
    </div>
  );
};

export default Sidebar;