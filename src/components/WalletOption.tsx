"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wallet, Bitcoin } from "lucide-react";
import { ConnectButton } from "./ConnectButton";

type WalletOptionProps = {
  onEvmConnect?: () => void;
  onBtcPrivateKey?: (privateKey: string) => void;
};

export default function WalletOption({ onEvmConnect, onBtcPrivateKey }: WalletOptionProps) {
  const [selectedOption, setSelectedOption] = useState<"evm" | "non-evm" | null>(null);
  const [btcPrivateKey, setBtcPrivateKey] = useState("");

  const handleEvmOption = () => {
    setSelectedOption("evm");
    setBtcPrivateKey("");
  };

  const handleNonEvmOption = () => {
    setSelectedOption("non-evm");
  };

  const handleConnectWallet = () => {
    if (onEvmConnect) {
      onEvmConnect();
    }
  };

  const handleBtcKeySubmit = () => {
    if (btcPrivateKey.trim() && onBtcPrivateKey) {
      onBtcPrivateKey(btcPrivateKey.trim());
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Choose Wallet Type</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Select how you want to connect your wallet
        </p>
      </div>

      {/* Option Selection */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant={selectedOption === "evm" ? "default" : "outline"}
          onClick={handleEvmOption}
          className="h-20 flex flex-col items-center justify-center gap-2 hover:scale-[1.02] transition-all"
        >
          <Wallet className="w-6 h-6" />
          <span className="text-sm font-medium">EVM Wallet</span>
          <span className="text-xs text-muted-foreground">MetaMask, WalletConnect</span>
        </Button>

        <Button
          variant={selectedOption === "non-evm" ? "default" : "outline"}
          onClick={handleNonEvmOption}
          className="h-20 flex flex-col items-center justify-center gap-2 hover:scale-[1.02] transition-all"
        >
          <Bitcoin className="w-6 h-6" />
          <span className="text-sm font-medium">Non-EVM</span>
          <span className="text-xs text-muted-foreground">Bitcoin, Private Key</span>
        </Button>
      </div>

      {/* EVM Option - Connect Wallet Button */}
      {selectedOption === "evm" && (
        <div className="mt-6 p-4 border border-border rounded-xl bg-card/50">
          <div className="text-center space-y-3">
            <Wallet className="w-8 h-8 mx-auto text-primary" />
            <h4 className="font-semibold">Connect EVM Wallet</h4>
            <p className="text-sm text-muted-foreground">
              Connect your MetaMask or other EVM-compatible wallet
            </p>
            <ConnectButton/>
          </div>
        </div>
      )}

      {/* Non-EVM Option - BTC Private Key Input */}
      {selectedOption === "non-evm" && (
        <div className="mt-6 p-4 border border-border rounded-xl bg-card/50">
          <div className="space-y-4">
            <div className="text-center">
              <Bitcoin className="w-8 h-8 mx-auto text-orange-500 mb-2" />
              <h4 className="font-semibold">Enter BTC Private Key</h4>
              <p className="text-sm text-muted-foreground">
                Enter your Bitcoin private key to access your wallet
              </p>
            </div>
            
            <div className="space-y-3">
              <Input
                type="password"
                placeholder="Enter your BTC private key..."
                value={btcPrivateKey}
                onChange={(e) => setBtcPrivateKey(e.target.value)}
                className="h-12 rounded-xl border-border bg-muted/30 focus:bg-background transition-colors"
              />
              
              <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 dark:bg-amber-950/20 p-2 rounded-lg">
                <span>⚠️</span>
                <span>Never share your private key. Keep it secure and private.</span>
              </div>
              
              <Button 
                onClick={() => window.location.href = "http://localhost:3002"}
                disabled={!btcPrivateKey.trim()}
                className="w-full gradient-purple hover:opacity-90 transition-all duration-300 font-semibold rounded-xl hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:hover:scale-100"
              >
                Import BTC Wallet
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}