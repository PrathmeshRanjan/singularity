"use client";

import React, { ReactNode } from "react";
import { wagmiAdapter } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider } from "wagmi";

// Setup queryClient
const queryClient = new QueryClient();

export default function Web3ModalProvider({ 
  children, 
  initialState 
}: { 
  children: ReactNode; 
  initialState?: State 
}) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}