import { NetworkEnum } from "@1inch/cross-chain-sdk";

export const NETWORK_CONFIG: Record<
    number,
    {
        name: string;
        chainId: number;
        nativeToken: string;
        rpcKey: string;
    }
> = {
    [NetworkEnum.ETHEREUM]: {
        name: "Ethereum",
        chainId: 1,
        nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        rpcKey: "ethereum",
    },
    [NetworkEnum.GNOSIS]: {
        name: "Gnosis",
        chainId: 100,
        nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        rpcKey: "gnosis",
    },
    [NetworkEnum.POLYGON]: {
        name: "Polygon",
        chainId: 137,
        nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        rpcKey: "polygon",
    },
    [NetworkEnum.ARBITRUM]: {
        name: "Arbitrum",
        chainId: 42161,
        nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        rpcKey: "arbitrum",
    },
    [NetworkEnum.OPTIMISM]: {
        name: "OPTIMISM",
        chainId: 10,
        nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        rpcKey: "optimism",
    },
    [NetworkEnum.COINBASE]: {
        name: "COINBASE",
        chainId: 8453,
        nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        rpcKey: "coinbase",
    },
};

export const COMMON_TOKENS: Record<string, Record<number, string>> = {
    USDC: {
        [NetworkEnum.ETHEREUM]: "0xA0b86a33E6441b0C9a76e0aFd5f6A8f8d6A8f8d6",
        [NetworkEnum.GNOSIS]: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
        [NetworkEnum.POLYGON]: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        [NetworkEnum.ARBITRUM]: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        [NetworkEnum.OPTIMISM]: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
        [NetworkEnum.COINBASE]: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    },
    USDT: {
        [NetworkEnum.ETHEREUM]: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        [NetworkEnum.POLYGON]: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        [NetworkEnum.ARBITRUM]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        [NetworkEnum.OPTIMISM]: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
        [NetworkEnum.COINBASE]: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
    },
    DAI: {
        [NetworkEnum.ETHEREUM]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        [NetworkEnum.GNOSIS]: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
        [NetworkEnum.ARBITRUM]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        [NetworkEnum.OPTIMISM]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        [NetworkEnum.COINBASE]: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    },
};

export const SUPPORTED_NETWORKS = Object.keys(NETWORK_CONFIG).map((k) =>
    Number(k)
);
