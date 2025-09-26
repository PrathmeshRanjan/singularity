"use client";

import { ConnectButton } from "@/components/ConnectButton";
import { SwapBox } from "@/components/SwapBox";
import SmartContractRecurringPayments from "@/components/SmartContractRecurringPayments";
import { useState } from "react";

export default function Home() {
    const [activeTab, setActiveTab] = useState<"swap" | "recurring">("swap");

    return (
        <div className={"pages"}>
            <header className="header">
                <ConnectButton />
            </header>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-6">
                <div className="bg-gray-100 rounded-lg p-1">
                    <button
                        onClick={() => setActiveTab("swap")}
                        className={`px-6 py-2 rounded-md transition-colors ${
                            activeTab === "swap"
                                ? "bg-white text-blue-600 shadow-sm"
                                : "text-gray-600 hover:text-gray-800"
                        }`}
                    >
                        Cross-Chain Swap
                    </button>
                    <button
                        onClick={() => setActiveTab("recurring")}
                        className={`px-6 py-2 rounded-md transition-colors ${
                            activeTab === "recurring"
                                ? "bg-white text-blue-600 shadow-sm"
                                : "text-gray-600 hover:text-gray-800"
                        }`}
                    >
                        Recurring Payments
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            {activeTab === "swap" && <SwapBox />}
            {activeTab === "recurring" && <SmartContractRecurringPayments />}

            {/* <InfoList /> */}
        </div>
    );
}
