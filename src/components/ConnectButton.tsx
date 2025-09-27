'use client'

import { useAppKit } from '@reown/appkit/react'
import { useAccount } from 'wagmi'

export const ConnectButton = () => {
  const { open } = useAppKit()
  const { address, isConnected } = useAccount()

  return (
    <div className="w-full">
      {!isConnected ? (
        <button
          onClick={() => open()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="space-y-3">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Connected Wallet</p>
            <p className="font-mono text-sm bg-gray-100 p-2 rounded-lg">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => open()}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Account
            </button>
            <button
              onClick={() => open({ view: 'Networks' })}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Networks
            </button>
          </div>
        </div>
      )}
    </div>
  )
}