import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { createAppKit } from "@reown/appkit/react";
import type { AppKitNetwork } from "@reown/appkit/networks";
import {
  arbitrum,
  avalanche,
  base,
  bsc,
  gnosis,
  linea,
  mainnet,
  optimism,
  polygon,
  sonic,
  unichain,
  zksync,
} from "@reown/appkit/networks";
import { cookieStorage, createStorage } from "wagmi";

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || ""; // this is a public projectId only to use on localhost

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks = [
  mainnet,
  polygon,
  bsc,
  optimism,
  arbitrum,
  avalanche,
  gnosis,
  base,
  zksync,
  linea,
  sonic,
  unichain,
] as [AppKitNetwork, ...AppKitNetwork[]];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;

// Create the AppKit instance
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  defaultNetwork: base, // Changed to Base since that's where the smart contract is deployed
  metadata: {
    name: "singularity",
    description: "singularity - Seamless Payment Solutions",
    url: "https://singularity.app", // origin must match your domain & subdomain
    icons: ["https://avatars.githubusercontent.com/u/37784886"]
  },
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  }
});