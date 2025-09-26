"use client";

import { useEffect, useMemo, useState } from "react";
import {
    useAccount,
    useWalletClient,
    useSwitchChain,
    usePublicClient,
} from "wagmi";
import { Address, TypedDataDefinition, parseUnits } from "viem";
import { NetworkEnum } from "@1inch/cross-chain-sdk";
import {
    NETWORK_CONFIG,
    COMMON_TOKENS,
    SUPPORTED_NETWORKS,
} from "@/config/networks";

// Minimal backend response types used locally
type BackendQuoteResponse = {
    quoterRequestParams: {
        srcChainId: number;
        dstChainId: number;
        srcTokenAddress: string;
        dstTokenAddress: string;
        amount: string;
        walletAddress: string;
    };
    quote: unknown;
};

type TypedDataPayload = {
    domain: Record<string, unknown> & { verifyingContract?: string };
    types: Record<string, unknown>;
    message: Record<string, unknown>;
    primaryType: string;
};

type PrepareOrderResponse = {
    preparationId: string;
    typedDataPayload: TypedDataPayload;
};

function formatError(error: unknown): string {
    if (error instanceof Error) return error.message;
    try {
        return JSON.stringify(error);
    } catch {
        return "Unknown error";
    }
}

const TOKEN_DECIMALS: Record<string, number> = {
    // ERC20s
    USDC: 6,
    USDT: 6,
    DAI: 18,
    // Native
    NATIVE: 18,
};

export function SwapBox() {
    const { address, isConnected, chain } = useAccount();
    const { data: walletClient } = useWalletClient();
    const publicClient = usePublicClient();
    const { chains, switchChainAsync } = useSwitchChain();

    const [srcNetwork, setSrcNetwork] = useState<number>(NetworkEnum.ARBITRUM);
    const [dstNetwork, setDstNetwork] = useState<number>(NetworkEnum.COINBASE);
    const [fromToken, setFromToken] = useState<string>("USDC");
    const [toToken, setToToken] = useState<string>("USDC");
    const [amount, setAmount] = useState<string>("0.1");

    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [orderHash, setOrderHash] = useState<string | null>(null);

    useEffect(() => {
        // Default source network to connected chain if supported
        if (chain?.id && SUPPORTED_NETWORKS.includes(chain.id as NetworkEnum)) {
            setSrcNetwork(chain.id);
        }
    }, [chain?.id]);

    const srcTokenAddress = useMemo(() => {
        if (fromToken === "NATIVE")
            return NETWORK_CONFIG[srcNetwork].nativeToken;
        return COMMON_TOKENS[fromToken as keyof typeof COMMON_TOKENS]?.[
            srcNetwork
        ];
    }, [fromToken, srcNetwork]);

    const dstTokenAddress = useMemo(() => {
        if (toToken === "NATIVE") return NETWORK_CONFIG[dstNetwork].nativeToken;
        return COMMON_TOKENS[toToken as keyof typeof COMMON_TOKENS]?.[
            dstNetwork
        ];
    }, [toToken, dstNetwork]);

    const decimals = useMemo(() => {
        if (fromToken === "NATIVE") return TOKEN_DECIMALS.NATIVE;
        return TOKEN_DECIMALS[fromToken] ?? 18;
    }, [fromToken]);

    const handleSwitchToSrc = async () => {
        if (!chains?.length) return;
        const target = chains.find(
            (c) => c.id === NETWORK_CONFIG[srcNetwork].chainId
        );
        if (!target) return;
        await switchChainAsync({ chainId: target.id });
    };

    const handleSwap = async () => {
        try {
            setLoading(true);
            setError(null);
            setStatus("Preparing swap...");
            setOrderHash(null);

            if (
                !isConnected ||
                !address ||
                !walletClient ||
                !walletClient.account
            ) {
                throw new Error("Wallet not connected");
            }

            if (!srcTokenAddress || !dstTokenAddress) {
                throw new Error("Token not supported on selected networks");
            }

            // Ensure wallet is on source network for signing
            if (chain?.id !== NETWORK_CONFIG[srcNetwork].chainId) {
                await handleSwitchToSrc();
            }

            const amountInUnits = parseUnits(
                amount as `${number}` as string,
                decimals
            ).toString();

            setStatus("Fetching quote...");
            const quoteUrl = `/api/fusion-order?action=quote&walletAddress=${address}&srcTokenAddress=${srcTokenAddress}&dstTokenAddress=${dstTokenAddress}&amount=${amountInUnits}&srcChainId=${NETWORK_CONFIG[srcNetwork].chainId}&dstChainId=${NETWORK_CONFIG[dstNetwork].chainId}`;
            const quoteRes = await fetch(quoteUrl);
            if (!quoteRes.ok) {
                const err = await quoteRes.json();
                throw new Error(err.error || "Failed to get quote");
            }
            const backendQuoteData: BackendQuoteResponse =
                await quoteRes.json();

            await new Promise((r) => setTimeout(r, 800));

            setStatus("Creating typed data...");
            const prepareRes = await fetch(`/api/fusion-order`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "prepare-order",
                    quoterRequestParams: backendQuoteData.quoterRequestParams,
                    walletAddress: address,
                }),
            });
            if (!prepareRes.ok) {
                const err = await prepareRes.json();
                throw new Error(err.error || "Failed to prepare order");
            }
            const prepared: PrepareOrderResponse = await prepareRes.json();

            // ERC-20 allowance check and approve
            const spender = prepared.typedDataPayload.domain
                ?.verifyingContract as Address | undefined;
            if (fromToken !== "NATIVE" && spender && srcTokenAddress) {
                setStatus("Checking allowance...");
                const erc20Abi = [
                    {
                        name: "allowance",
                        type: "function",
                        stateMutability: "view",
                        inputs: [
                            { name: "owner", type: "address" },
                            { name: "spender", type: "address" },
                        ],
                        outputs: [{ name: "", type: "uint256" }],
                    },
                    {
                        name: "approve",
                        type: "function",
                        stateMutability: "nonpayable",
                        inputs: [
                            { name: "spender", type: "address" },
                            { name: "value", type: "uint256" },
                        ],
                        outputs: [{ name: "", type: "bool" }],
                    },
                ] as const;

                const allowance = (await publicClient!.readContract({
                    address: srcTokenAddress as Address,
                    abi: erc20Abi,
                    functionName: "allowance",
                    args: [address as Address, spender],
                })) as bigint;

                const needed = BigInt(amountInUnits);
                if (allowance < needed) {
                    setStatus("Approving token...");
                    await walletClient.writeContract({
                        address: srcTokenAddress as Address,
                        abi: erc20Abi,
                        functionName: "approve",
                        args: [spender, needed],
                        account: walletClient.account,
                    });
                    await new Promise((r) => setTimeout(r, 2000));
                }
            }

            setStatus("Awaiting signature...");
            const { domain, types, message, primaryType } =
                prepared.typedDataPayload;
            const account = walletClient.account.address as Address;
            const signature = await walletClient.signTypedData({
                account,
                domain,
                types,
                message,
                primaryType,
            } as TypedDataDefinition);

            setStatus("Submitting order...");
            const placeRes = await fetch(`/api/fusion-order`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "place-signed-order",
                    preparationId: prepared.preparationId,
                    signature,
                }),
            });
            if (!placeRes.ok) {
                const err = await placeRes.json();
                throw new Error(err.error || "Failed to place order");
            }
            const placed: { orderHash: string } = await placeRes.json();
            setOrderHash(placed.orderHash);
            setStatus("Order submitted. Processing in background...");
            setLoading(false);
        } catch (e) {
            setError(formatError(e));
            setLoading(false);
            setStatus(null);
        }
    };

    const networkOptions = Object.entries(NETWORK_CONFIG).map(([id, cfg]) => ({
        id: Number(id),
        name: (cfg as { name: string }).name,
    }));

    return (
        <div
            style={{
                marginTop: "20px",
                border: "1px solid #e5e7eb",
                padding: "16px",
                borderRadius: 12,
                background: "#fff",
                maxWidth: 700,
            }}
        >
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>
                Cross-chain Swap
            </h2>
            <div
                style={{
                    display: "flex",
                    gap: 12,
                    marginTop: 12,
                    flexWrap: "wrap",
                }}
            >
                <div style={{ flex: 1, minWidth: 260 }}>
                    <label
                        style={{
                            display: "block",
                            fontSize: 12,
                            color: "#6b7280",
                        }}
                    >
                        From Network
                    </label>
                    <select
                        value={srcNetwork}
                        onChange={(e) => setSrcNetwork(Number(e.target.value))}
                        style={{ width: "100%", padding: 8, borderRadius: 8 }}
                    >
                        {networkOptions.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                                {opt.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{ flex: 1, minWidth: 260 }}>
                    <label
                        style={{
                            display: "block",
                            fontSize: 12,
                            color: "#6b7280",
                        }}
                    >
                        To Network
                    </label>
                    <select
                        value={dstNetwork}
                        onChange={(e) => setDstNetwork(Number(e.target.value))}
                        style={{ width: "100%", padding: 8, borderRadius: 8 }}
                    >
                        {networkOptions.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                                {opt.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: 12,
                    marginTop: 12,
                    flexWrap: "wrap",
                }}
            >
                <div style={{ flex: 1, minWidth: 260 }}>
                    <label
                        style={{
                            display: "block",
                            fontSize: 12,
                            color: "#6b7280",
                        }}
                    >
                        From Token
                    </label>
                    <select
                        value={fromToken}
                        onChange={(e) => setFromToken(e.target.value)}
                        style={{ width: "100%", padding: 8, borderRadius: 8 }}
                    >
                        <option value="NATIVE">Native</option>
                        {Object.keys(COMMON_TOKENS).map((sym) => (
                            <option key={sym} value={sym}>
                                {sym}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{ flex: 1, minWidth: 260 }}>
                    <label
                        style={{
                            display: "block",
                            fontSize: 12,
                            color: "#6b7280",
                        }}
                    >
                        To Token
                    </label>
                    <select
                        value={toToken}
                        onChange={(e) => setToToken(e.target.value)}
                        style={{ width: "100%", padding: 8, borderRadius: 8 }}
                    >
                        <option value="NATIVE">Native</option>
                        {Object.keys(COMMON_TOKENS).map((sym) => (
                            <option key={sym} value={sym}>
                                {sym}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div style={{ marginTop: 12 }}>
                <label
                    style={{ display: "block", fontSize: 12, color: "#6b7280" }}
                >
                    Amount
                </label>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.0"
                    style={{ width: "100%", padding: 10, borderRadius: 8 }}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: 16,
                }}
            >
                <button
                    disabled={!isConnected || loading}
                    onClick={handleSwap}
                    style={{
                        padding: "10px 16px",
                        borderRadius: 10,
                        background: "#111827",
                        color: "white",
                    }}
                >
                    {loading ? "Processing..." : "Swap"}
                </button>
                {status && <span style={{ color: "#374151" }}>{status}</span>}
            </div>

            {orderHash && (
                <div style={{ marginTop: 12, fontSize: 13 }}>
                    Order Hash: <code>{orderHash}</code>
                </div>
            )}
            {error && (
                <div style={{ marginTop: 12, color: "#b91c1c" }}>{error}</div>
            )}
        </div>
    );
}
