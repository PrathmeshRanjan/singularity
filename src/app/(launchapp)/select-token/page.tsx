"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Check, Loader2 } from "lucide-react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { fetchTokens } from "../../actions/selectoken"

// Define types
interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
  balance?: string;
  price?: string;
}

interface Chain {
  chainId: number;
  name: string;
  symbol: string;
  icon: string;
}

const chains: Chain[] = [
  {
    "chainId": 1,
    "name": "Ethereum",
    "symbol": "ETH",
    "icon": "https://www.citypng.com/public/uploads/preview/hd-ethereum-eth-purple-logo-sign-png-701751694771769kxirapfr36.png?v=2025082610"
  },
  {
    "chainId": 42161,
    "name": "Arbitrum",
    "symbol": "ETH",
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mQ1pwxVT3lqCTZWhuUZzKTOqT0ZmYh2oeg&s"
  },
  {
    "chainId": 8453,
    "name": "BASE",
    "symbol": "BS",
    "icon": "data:image/png;base64,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"
  },
  {
    "chainId": 56,
    "name": "BNB Chain",
    "symbol": "BNB",
    "icon": "data:image/png;base64,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"
  },
  {
    "chainId": 137,
    "name": "Polygon",
    "symbol": "MATIC",
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYz6pvmAKSxKvoOdrO9XcKR3bOtKxtqpTcKg&s"
  },
  {
    "chainId": 324,
    "name": "zkSync Era",
    "symbol": "ETH",
    "icon": "data:image/png;base64,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"
  },
  {
    "chainId": 59144,
    "name": "Linea",
    "symbol": "ETH",
    "icon": "https://icons.llamao.fi/icons/chains/rsz_linea.jpg"
  },
  {
    "chainId": 130,
    "name": "Unichain",
    "symbol": "UNI",
    "icon": "https://icons.llamao.fi/icons/chains/rsz_unichain.jpg"
  }
]


export default function SelectTokenPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const [selectedChain, setSelectedChain] = useState<Chain>(chains[0])
  const [tokens, setTokens] = useState<Token[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const searchParams = useSearchParams()
  const router = useRouter()
  const swapType = searchParams.get("type") || "sell"
  const returnTo = searchParams.get("returnTo")

  // Load tokens when chain changes
  useEffect(() => {
    loadTokensForChain(selectedChain.chainId)
  }, [selectedChain])

 const loadTokensForChain = async (chainId: number) => {
  setLoading(true)
  setError(null)
  try {
    const tokenData = await fetchTokens(chainId.toString())
    console.log(tokenData)

    // Convert object → array
    const tokenArray = Object.values(tokenData) as Token[]
    setTokens(tokenArray)
    
    // Search in array (not object)
    const nativeToken = tokenArray.find(
      token => token.symbol.toLowerCase() === selectedChain.symbol.toLowerCase()
    )

    setSelectedToken(nativeToken || tokenArray[0] || null)
  } catch (err) {
    console.error("Error loading tokens:", err)
    setError("Failed to load tokens for this chain")
    setTokens([])
    setSelectedToken(null)
  } finally {
    setLoading(false)
  }
}


  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleTokenSelect = (token: Token) => {
    setSelectedToken(token)
  }

  const handleChainSelect = (chain: Chain) => {
    setSelectedChain(chain)
    setSelectedToken(null) // Reset selected token when chain changes
  }

  const handleConfirm = () => {
    if (selectedToken && selectedChain) {
      const payload = {
        symbol: selectedToken.symbol,
        address: selectedToken.address,
        decimals: selectedToken.decimals,
        chainName: selectedChain.name,
        chainId: selectedChain.chainId.toString(),
        chainSymbol: selectedChain.symbol,
        tokenLogoUrl: selectedToken.logoURI,
        chainIconUrl: selectedChain.icon,
      }

      // Check if we need to redirect back to a specific page
      if (returnTo) {
        // Create URL with token selection parameters
        const params = new URLSearchParams({
          tokenSymbol: selectedToken.symbol,
          tokenName: selectedToken.name,
          chainName: selectedChain.name,
          chainSymbol: selectedChain.symbol,
          tokenLogoUrl: selectedToken.logoURI || '',
          chainIconUrl: selectedChain.icon
        });
        
        router.push(`${returnTo}?${params.toString()}`);
      } else {
        router.push(`/auto-send`);
      }
    }
  }

  return (
        <div className="max-h-120 overflow-y-auto scrollbar-hide mx-auto ">
          {/* Header */}
        <div className="flex items-center  justify-between p-6 pb-4 border-b border-border">
          <div className="absolute top-4 left-6 right-6">
          </div>

          <div className="flex items-center justify-between w-full mt-8">
            <Link href="/swap">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-muted/50 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-semibold">Select Token & Chain</h1>
            <div className="w-9"></div>
          </div>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search tokens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/30 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Tokens List */}
          <div className="w-1/2 border-r border-border flex flex-col">
            <div className="p-4 pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">TOKENS</h3>
            </div>
            <div className="flex-1 overflow-y-auto pb-20">
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                  <span className="ml-2 text-sm text-muted-foreground">Loading tokens...</span>
                </div>
              ) : error ? (
                <div className="p-4 text-center">
                  <p className="text-sm text-destructive">{error}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => loadTokensForChain(selectedChain.chainId)}
                  >
                    Retry
                  </Button>
                </div>
              ) : filteredTokens.length === 0 ? (
                <div className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    {searchQuery ? "No tokens found matching your search" : "No tokens available"}
                  </p>
                </div>
              ) : (
                filteredTokens.map((token) => (
                  <button
                    key={token.address}
                    onClick={() => handleTokenSelect(token)}
                    className={`w-full flex items-center gap-3 p-3 mx-2 rounded-xl transition-all duration-200 ${
                      selectedToken?.address === token.address
                        ? "bg-primary/10 border border-primary/20 scale-[1.02]"
                        : "hover:bg-muted/30 hover:scale-[1.01]"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-muted overflow-hidden">
                      {token.logoURI ? (
                        <img
                          src={token.logoURI}
                          alt={token.symbol}
                          className="w-6 h-6"
                          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            // Fallback to symbol text if image fails
                            (e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                      ) : (
                        <span className="text-xs font-bold text-muted-foreground">
                          {token.symbol.slice(0, 2)}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{token.symbol}</span>
                        {selectedToken?.address === token.address && (
                          <Check className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      

                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium">{token.price || "$0.00"}</p>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Chains List */}
          <div className="w-1/2 flex flex-col">
            <div className="p-4 pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">CHAINS</h3>
            </div>
            <div className="flex-1 overflow-y-auto pb-20">
              {chains.map((chain) => (
                <button
                  key={chain.chainId}
                  onClick={() => handleChainSelect(chain)}
                  className={`w-full flex items-center gap-3 p-3 mx-2 rounded-xl transition-all duration-200 ${
                    selectedChain.chainId === chain.chainId
                      ? "bg-primary/10 border border-primary/20 scale-[1.02]"
                      : "hover:bg-muted/30 hover:scale-[1.01]"
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                    <img
                      src={chain.icon}
                      alt={chain.name}
                      className="w-6 h-6"
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        // Fallback to symbol text if image fails
                        (e.target as HTMLImageElement).style.display = 'none'
                      }}
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">{chain.name}</span>
                      {selectedChain.chainId === chain.chainId && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Confirm Button */}

        {/* Selected Summary */}
        {selectedToken && selectedChain && (
          <div className="absolute bottom-16 left-4 right-4 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-3 shadow-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Selected:</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{selectedToken.symbol}</span>
                <span className="text-muted-foreground">on</span>
                <span className="font-semibold">{selectedChain.name}</span>
              </div>
            </div>
            <div className="p-4 border-t border-border">
          <Button
            onClick={handleConfirm}
            disabled={!selectedToken || !selectedChain}
            className="w-full h-12 gradient-purple hover:opacity-90 transition-all duration-300 font-semibold rounded-xl hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:hover:scale-100"
          >
            Confirm Selection
          </Button>
        </div>
          </div>
          
        )}

        
        </div>
        
  )
}