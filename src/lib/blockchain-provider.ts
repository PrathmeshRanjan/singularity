import { ethers } from "ethers";

interface ProviderConnector {
    getAddress(): Promise<string>;
    getChainId(): Promise<number>;
    isConnected(): Promise<boolean>;
    request(args: { method: string; params?: any[] }): Promise<any>;
    signTypedData(domain: any, types: any, value: any): Promise<string>;
}

export class CustomProviderConnector implements ProviderConnector {
    private wallet: ethers.Wallet;
    private provider: ethers.JsonRpcProvider;

    constructor(privateKey: string, rpcUrl: string) {
        this.provider = new ethers.JsonRpcProvider(rpcUrl);
        this.wallet = new ethers.Wallet(privateKey, this.provider);
    }

    async getAddress(): Promise<string> {
        return this.wallet.address;
    }

    async getChainId(): Promise<number> {
        const network = await this.provider.getNetwork();
        return Number(network.chainId);
    }

    async isConnected(): Promise<boolean> {
        try {
            await this.provider.getBlockNumber();
            return true;
        } catch {
            return false;
        }
    }

    async request(args: { method: string; params?: any[] }): Promise<any> {
        switch (args.method) {
            case "eth_requestAccounts":
                return [await this.getAddress()];
            case "eth_accounts":
                return [await this.getAddress()];
            case "eth_chainId":
                return `0x${(await this.getChainId()).toString(16)}`;
            case "eth_getBalance":
                const balance = await this.provider.getBalance(args.params![0]);
                return `0x${balance.toString(16)}`;
            case "eth_getTransactionCount":
                const nonce = await this.provider.getTransactionCount(args.params![0]);
                return `0x${nonce.toString(16)}`;
            case "eth_sendRawTransaction":
                return await this.provider.broadcastTransaction(args.params![0]);
            case "eth_call":
                return await this.provider.call({
                    to: args.params![0].to,
                    data: args.params![0].data,
                });
            case "eth_estimateGas":
                const gasEstimate = await this.provider.estimateGas({
                    to: args.params![0].to,
                    data: args.params![0].data,
                });
                return `0x${gasEstimate.toString(16)}`;
            case "eth_gasPrice":
                const gasPrice = await this.provider.getFeeData();
                return `0x${gasPrice.gasPrice!.toString(16)}`;
            default:
                throw new Error(`Unsupported method: ${args.method}`);
        }
    }

    async signTypedData(domain: any, types: any, value: any): Promise<string> {
        return await this.wallet.signTypedData(domain, types, value);
    }
}

export class BlockchainProvider {
    private connectors: Map<string, CustomProviderConnector> = new Map();

    constructor(privateKey: string) {
        this.initializeConnectors(privateKey);
    }

    private initializeConnectors(privateKey: string) {
        // Initialize connectors for different networks
        const rpcUrls = {
            ethereum: process.env.ETHEREUM_RPC_URL,
            arbitrum: process.env.ARBITRUM_RPC_URL,
            polygon: process.env.POLYGON_RPC_URL,
            optimism: process.env.OPTIMISM_RPC_URL,
            base: process.env.BASE_RPC_URL,
            gnosis: process.env.GNOSIS_RPC_URL,
        };

        Object.entries(rpcUrls).forEach(([network, rpcUrl]) => {
            if (rpcUrl) {
                this.connectors.set(network, new CustomProviderConnector(privateKey, rpcUrl));
            }
        });
    }

    getConnector(network: string = "ethereum"): CustomProviderConnector {
        const connector = this.connectors.get(network);
        if (!connector) {
            throw new Error(`No connector configured for network: ${network}`);
        }
        return connector;
    }

    getConnectorForChainId(chainId: number): CustomProviderConnector {
        const networkMap: Record<number, string> = {
            1: "ethereum",
            100: "gnosis",
            137: "polygon",
            42161: "arbitrum",
            10: "optimism",
            8453: "base",
        };

        const network = networkMap[chainId];
        if (!network) {
            throw new Error(`Unsupported chain ID: ${chainId}`);
        }

        return this.getConnector(network);
    }
}
