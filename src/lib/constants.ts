import { NetworkEnum } from "@1inch/cross-chain-sdk";

// PYUSD token address on Ethereum
export const PYUSD_ETHEREUM = "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8";

// Common token addresses for different networks
export const COMMON_TOKENS = {
    USDC: {
        [NetworkEnum.ETHEREUM]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        [NetworkEnum.ARBITRUM]: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        [NetworkEnum.POLYGON]: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        [NetworkEnum.OPTIMISM]: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
        [NetworkEnum.COINBASE]: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    },
    USDT: {
        [NetworkEnum.ETHEREUM]: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        [NetworkEnum.ARBITRUM]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        [NetworkEnum.POLYGON]: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        [NetworkEnum.OPTIMISM]: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
        [NetworkEnum.COINBASE]: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
    },
    DAI: {
        [NetworkEnum.ETHEREUM]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        [NetworkEnum.ARBITRUM]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        [NetworkEnum.OPTIMISM]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        [NetworkEnum.COINBASE]: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    },
    PYUSD: {
        [NetworkEnum.ETHEREUM]: PYUSD_ETHEREUM,
    },
};

// Native token address (same across all chains)
export const NATIVE_TOKEN = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

// Network configuration
export const NETWORK_CONFIG = {
    [NetworkEnum.ETHEREUM]: {
        name: "Ethereum",
        chainId: 1,
        nativeToken: NATIVE_TOKEN,
    },
    [NetworkEnum.ARBITRUM]: {
        name: "Arbitrum",
        chainId: 42161,
        nativeToken: NATIVE_TOKEN,
    },
    [NetworkEnum.POLYGON]: {
        name: "Polygon",
        chainId: 137,
        nativeToken: NATIVE_TOKEN,
    },
    [NetworkEnum.OPTIMISM]: {
        name: "Optimism",
        chainId: 10,
        nativeToken: NATIVE_TOKEN,
    },
    [NetworkEnum.COINBASE]: {
        name: "Base",
        chainId: 8453,
        nativeToken: NATIVE_TOKEN,
    },
};

// Helper function to get token address
export function getTokenAddress(chainId: number, tokenSymbol: string): string {
    if (
        tokenSymbol.toUpperCase() === "NATIVE" ||
        tokenSymbol.toUpperCase() === "ETH"
    ) {
        return NATIVE_TOKEN;
    }

    const token =
        COMMON_TOKENS[tokenSymbol.toUpperCase() as keyof typeof COMMON_TOKENS];
    if (!token || !token[chainId as keyof typeof token]) {
        throw new Error(
            `Token ${tokenSymbol} not supported on chain ${chainId}`
        );
    }

    return token[chainId as keyof typeof token] as string;
}

// Helper function to create swap parameters for Singularity (always to Ethereum PYUSD)
export function createSingularitySwapParams(
    fromChain: number,
    fromToken: string,
    amount: string,
    walletAddress: string
) {
    return {
        srcChainId: fromChain,
        dstChainId: NetworkEnum.ETHEREUM, // Always Ethereum
        srcTokenAddress: fromToken,
        dstTokenAddress: PYUSD_ETHEREUM, // Always PYUSD
        amount: amount,
        walletAddress: walletAddress,
    };
}
