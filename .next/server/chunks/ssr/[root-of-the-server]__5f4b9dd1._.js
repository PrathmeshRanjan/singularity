module.exports = {

"[project]/src/components/ConnectButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConnectButton": (()=>ConnectButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const ConnectButton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("appkit-button", {}, void 0, false, {
            fileName: "[project]/src/components/ConnectButton.tsx",
            lineNumber: 6,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ConnectButton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[project]/src/config/networks.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "COMMON_TOKENS": (()=>COMMON_TOKENS),
    "NETWORK_CONFIG": (()=>NETWORK_CONFIG),
    "SUPPORTED_NETWORKS": (()=>SUPPORTED_NETWORKS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$cross$2d$chain$2d$sdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/cross-chain-sdk/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/dist/esm/constants.js [app-ssr] (ecmascript)");
;
const NETWORK_CONFIG = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].ETHEREUM]: {
        name: "Ethereum",
        chainId: 1,
        nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        rpcKey: "ethereum"
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].GNOSIS]: {
        name: "Gnosis",
        chainId: 100,
        nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        rpcKey: "gnosis"
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].POLYGON]: {
        name: "Polygon",
        chainId: 137,
        nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        rpcKey: "polygon"
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].ARBITRUM]: {
        name: "Arbitrum",
        chainId: 42161,
        nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        rpcKey: "arbitrum"
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].OPTIMISM]: {
        name: "OPTIMISM",
        chainId: 10,
        nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        rpcKey: "optimism"
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].COINBASE]: {
        name: "COINBASE",
        chainId: 8453,
        nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        rpcKey: "coinbase"
    }
};
const COMMON_TOKENS = {
    USDC: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].ETHEREUM]: "0xA0b86a33E6441b0C9a76e0aFd5f6A8f8d6A8f8d6",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].GNOSIS]: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].POLYGON]: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].ARBITRUM]: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].OPTIMISM]: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].COINBASE]: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
    },
    USDT: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].ETHEREUM]: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].POLYGON]: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].ARBITRUM]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].OPTIMISM]: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].COINBASE]: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2"
    },
    DAI: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].ETHEREUM]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].GNOSIS]: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].ARBITRUM]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].OPTIMISM]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].COINBASE]: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"
    }
};
const SUPPORTED_NETWORKS = Object.keys(NETWORK_CONFIG).map((k)=>Number(k));
}}),
"[project]/src/components/SwapBox.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SwapBox": (()=>SwapBox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useWalletClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/utils/unit/parseUnits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$cross$2d$chain$2d$sdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/cross-chain-sdk/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/dist/esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/networks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function formatError(error) {
    if (error instanceof Error) return error.message;
    try {
        return JSON.stringify(error);
    } catch  {
        return "Unknown error";
    }
}
const TOKEN_DECIMALS = {
    // ERC20s
    USDC: 6,
    USDT: 6,
    DAI: 18,
    // Native
    NATIVE: 18
};
function SwapBox() {
    const { address, isConnected, chain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const { data: walletClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWalletClient"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const { chains, switchChainAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSwitchChain"])();
    const [srcNetwork, setSrcNetwork] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].ARBITRUM);
    const [dstNetwork, setDstNetwork] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkEnum"].COINBASE);
    const [fromToken, setFromToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("USDC");
    const [toToken, setToToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("USDC");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0.1");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orderHash, setOrderHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Default source network to connected chain if supported
        if (chain?.id && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_NETWORKS"].includes(chain.id)) {
            setSrcNetwork(chain.id);
        }
    }, [
        chain?.id
    ]);
    const srcTokenAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (fromToken === "NATIVE") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NETWORK_CONFIG"][srcNetwork].nativeToken;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_TOKENS"][fromToken]?.[srcNetwork];
    }, [
        fromToken,
        srcNetwork
    ]);
    const dstTokenAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (toToken === "NATIVE") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NETWORK_CONFIG"][dstNetwork].nativeToken;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_TOKENS"][toToken]?.[dstNetwork];
    }, [
        toToken,
        dstNetwork
    ]);
    const decimals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (fromToken === "NATIVE") return TOKEN_DECIMALS.NATIVE;
        return TOKEN_DECIMALS[fromToken] ?? 18;
    }, [
        fromToken
    ]);
    const handleSwitchToSrc = async ()=>{
        if (!chains?.length) return;
        const target = chains.find((c)=>c.id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NETWORK_CONFIG"][srcNetwork].chainId);
        if (!target) return;
        await switchChainAsync({
            chainId: target.id
        });
    };
    const handleSwap = async ()=>{
        try {
            setLoading(true);
            setError(null);
            setStatus("Preparing swap...");
            setOrderHash(null);
            if (!isConnected || !address || !walletClient || !walletClient.account) {
                throw new Error("Wallet not connected");
            }
            if (!srcTokenAddress || !dstTokenAddress) {
                throw new Error("Token not supported on selected networks");
            }
            // Ensure wallet is on source network for signing
            if (chain?.id !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NETWORK_CONFIG"][srcNetwork].chainId) {
                await handleSwitchToSrc();
            }
            const amountInUnits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])(amount, decimals).toString();
            setStatus("Fetching quote...");
            const quoteUrl = `/api/fusion-order?action=quote&walletAddress=${address}&srcTokenAddress=${srcTokenAddress}&dstTokenAddress=${dstTokenAddress}&amount=${amountInUnits}&srcChainId=${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NETWORK_CONFIG"][srcNetwork].chainId}&dstChainId=${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NETWORK_CONFIG"][dstNetwork].chainId}`;
            const quoteRes = await fetch(quoteUrl);
            if (!quoteRes.ok) {
                const err = await quoteRes.json();
                throw new Error(err.error || "Failed to get quote");
            }
            const backendQuoteData = await quoteRes.json();
            await new Promise((r)=>setTimeout(r, 800));
            setStatus("Creating typed data...");
            const prepareRes = await fetch(`/api/fusion-order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "prepare-order",
                    quoterRequestParams: backendQuoteData.quoterRequestParams,
                    walletAddress: address
                })
            });
            if (!prepareRes.ok) {
                const err = await prepareRes.json();
                throw new Error(err.error || "Failed to prepare order");
            }
            const prepared = await prepareRes.json();
            // ERC-20 allowance check and approve
            const spender = prepared.typedDataPayload.domain?.verifyingContract;
            if (fromToken !== "NATIVE" && spender && srcTokenAddress) {
                setStatus("Checking allowance...");
                const erc20Abi = [
                    {
                        name: "allowance",
                        type: "function",
                        stateMutability: "view",
                        inputs: [
                            {
                                name: "owner",
                                type: "address"
                            },
                            {
                                name: "spender",
                                type: "address"
                            }
                        ],
                        outputs: [
                            {
                                name: "",
                                type: "uint256"
                            }
                        ]
                    },
                    {
                        name: "approve",
                        type: "function",
                        stateMutability: "nonpayable",
                        inputs: [
                            {
                                name: "spender",
                                type: "address"
                            },
                            {
                                name: "value",
                                type: "uint256"
                            }
                        ],
                        outputs: [
                            {
                                name: "",
                                type: "bool"
                            }
                        ]
                    }
                ];
                const allowance = await publicClient.readContract({
                    address: srcTokenAddress,
                    abi: erc20Abi,
                    functionName: "allowance",
                    args: [
                        address,
                        spender
                    ]
                });
                const needed = BigInt(amountInUnits);
                if (allowance < needed) {
                    setStatus("Approving token...");
                    await walletClient.writeContract({
                        address: srcTokenAddress,
                        abi: erc20Abi,
                        functionName: "approve",
                        args: [
                            spender,
                            needed
                        ],
                        account: walletClient.account
                    });
                    await new Promise((r)=>setTimeout(r, 2000));
                }
            }
            setStatus("Awaiting signature...");
            const { domain, types, message, primaryType } = prepared.typedDataPayload;
            const account = walletClient.account.address;
            const signature = await walletClient.signTypedData({
                account,
                domain,
                types,
                message,
                primaryType
            });
            setStatus("Submitting order...");
            const placeRes = await fetch(`/api/fusion-order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "place-signed-order",
                    preparationId: prepared.preparationId,
                    signature
                })
            });
            if (!placeRes.ok) {
                const err = await placeRes.json();
                throw new Error(err.error || "Failed to place order");
            }
            const placed = await placeRes.json();
            setOrderHash(placed.orderHash);
            setStatus("Order submitted. Processing in background...");
            setLoading(false);
        } catch (e) {
            setError(formatError(e));
            setLoading(false);
            setStatus(null);
        }
    };
    const networkOptions = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NETWORK_CONFIG"]).map(([id, cfg])=>({
            id: Number(id),
            name: cfg.name
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: "20px",
            border: "1px solid #e5e7eb",
            padding: "16px",
            borderRadius: 12,
            background: "#fff",
            maxWidth: 700
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 600
                },
                children: "Cross-chain Swap"
            }, void 0, false, {
                fileName: "[project]/src/components/SwapBox.tsx",
                lineNumber: 274,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 12,
                    marginTop: 12,
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 260
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "block",
                                    fontSize: 12,
                                    color: "#6b7280"
                                },
                                children: "From Network"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SwapBox.tsx",
                                lineNumber: 286,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: srcNetwork,
                                onChange: (e)=>setSrcNetwork(Number(e.target.value)),
                                style: {
                                    width: "100%",
                                    padding: 8,
                                    borderRadius: 8
                                },
                                children: networkOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: opt.id,
                                        children: opt.name
                                    }, opt.id, false, {
                                        fileName: "[project]/src/components/SwapBox.tsx",
                                        lineNumber: 301,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SwapBox.tsx",
                                lineNumber: 295,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SwapBox.tsx",
                        lineNumber: 285,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 260
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "block",
                                    fontSize: 12,
                                    color: "#6b7280"
                                },
                                children: "To Network"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SwapBox.tsx",
                                lineNumber: 308,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: dstNetwork,
                                onChange: (e)=>setDstNetwork(Number(e.target.value)),
                                style: {
                                    width: "100%",
                                    padding: 8,
                                    borderRadius: 8
                                },
                                children: networkOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: opt.id,
                                        children: opt.name
                                    }, opt.id, false, {
                                        fileName: "[project]/src/components/SwapBox.tsx",
                                        lineNumber: 323,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SwapBox.tsx",
                                lineNumber: 317,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SwapBox.tsx",
                        lineNumber: 307,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SwapBox.tsx",
                lineNumber: 277,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 12,
                    marginTop: 12,
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 260
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "block",
                                    fontSize: 12,
                                    color: "#6b7280"
                                },
                                children: "From Token"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SwapBox.tsx",
                                lineNumber: 340,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: fromToken,
                                onChange: (e)=>setFromToken(e.target.value),
                                style: {
                                    width: "100%",
                                    padding: 8,
                                    borderRadius: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "NATIVE",
                                        children: "Native"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SwapBox.tsx",
                                        lineNumber: 354,
                                        columnNumber: 25
                                    }, this),
                                    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_TOKENS"]).map((sym)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: sym,
                                            children: sym
                                        }, sym, false, {
                                            fileName: "[project]/src/components/SwapBox.tsx",
                                            lineNumber: 356,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SwapBox.tsx",
                                lineNumber: 349,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SwapBox.tsx",
                        lineNumber: 339,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 260
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "block",
                                    fontSize: 12,
                                    color: "#6b7280"
                                },
                                children: "To Token"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SwapBox.tsx",
                                lineNumber: 363,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: toToken,
                                onChange: (e)=>setToToken(e.target.value),
                                style: {
                                    width: "100%",
                                    padding: 8,
                                    borderRadius: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "NATIVE",
                                        children: "Native"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SwapBox.tsx",
                                        lineNumber: 377,
                                        columnNumber: 25
                                    }, this),
                                    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$networks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_TOKENS"]).map((sym)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: sym,
                                            children: sym
                                        }, sym, false, {
                                            fileName: "[project]/src/components/SwapBox.tsx",
                                            lineNumber: 379,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SwapBox.tsx",
                                lineNumber: 372,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SwapBox.tsx",
                        lineNumber: 362,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SwapBox.tsx",
                lineNumber: 331,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "block",
                            fontSize: 12,
                            color: "#6b7280"
                        },
                        children: "Amount"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SwapBox.tsx",
                        lineNumber: 388,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: amount,
                        onChange: (e)=>setAmount(e.target.value),
                        placeholder: "0.0",
                        style: {
                            width: "100%",
                            padding: 10,
                            borderRadius: 8
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/SwapBox.tsx",
                        lineNumber: 393,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SwapBox.tsx",
                lineNumber: 387,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: !isConnected || loading,
                        onClick: handleSwap,
                        style: {
                            padding: "10px 16px",
                            borderRadius: 10,
                            background: "#111827",
                            color: "white"
                        },
                        children: loading ? "Processing..." : "Swap"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SwapBox.tsx",
                        lineNumber: 409,
                        columnNumber: 17
                    }, this),
                    status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#374151"
                        },
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/src/components/SwapBox.tsx",
                        lineNumber: 421,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SwapBox.tsx",
                lineNumber: 401,
                columnNumber: 13
            }, this),
            orderHash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 12,
                    fontSize: 13
                },
                children: [
                    "Order Hash: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: orderHash
                    }, void 0, false, {
                        fileName: "[project]/src/components/SwapBox.tsx",
                        lineNumber: 426,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SwapBox.tsx",
                lineNumber: 425,
                columnNumber: 17
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 12,
                    color: "#b91c1c"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/SwapBox.tsx",
                lineNumber: 430,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SwapBox.tsx",
        lineNumber: 264,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/SmartContractRecurringPayments.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SmartContractRecurringPayments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/utils/unit/parseUnits.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CHAIN_NAMES = {
    8453: "Base",
    1: "Ethereum"
};
const TOKEN_DECIMALS = {
    "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": 6,
    "0xA0b86a33E6441c8C06Cdd7C1a3F4f8C2b15D0A42": 18
};
const TOKEN_SYMBOLS = {
    "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": "USDC",
    "0xA0b86a33E6441c8C06Cdd7C1a3F4f8C2b15D0A42": "USDC"
};
const CONTRACT_ADDRESSES = {
    8453: "0xacfDc1080a1D3839767b3714F581994958830754",
    1: "0x0000000000000000000000000000000000000000",
    42161: "0x0000000000000000000000000000000000000000",
    137: "0x0000000000000000000000000000000000000000"
};
const RECURRING_PAYMENTS_ABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "payee",
                type: "address"
            },
            {
                internalType: "address",
                name: "token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "interval",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "maxPayments",
                type: "uint256"
            }
        ],
        name: "createSubscription",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "subscriptionId",
                type: "bytes32"
            }
        ],
        name: "executePayment",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "subscriptionId",
                type: "bytes32"
            }
        ],
        name: "cancelSubscription",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "subscriptionId",
                type: "bytes32"
            }
        ],
        name: "getSubscription",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "subscriber",
                        type: "address"
                    },
                    {
                        internalType: "address",
                        name: "payee",
                        type: "address"
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "interval",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPayments",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "paymentsMade",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "lastPayment",
                        type: "uint256"
                    },
                    {
                        internalType: "bool",
                        name: "isActive",
                        type: "bool"
                    }
                ],
                internalType: "struct RecurringPayments.Subscription",
                name: "",
                type: "tuple"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
const ERC20_ABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "spender",
                type: "address"
            }
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
function SmartContractRecurringPayments() {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const [subscriptions, setSubscriptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("form");
    // Track which subscription is being cancelled
    const [cancellingSubscriptionId, setCancellingSubscriptionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Form state for creating new subscriptions
    const [newSubscription, setNewSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        payeeAddress: "",
        tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        chainId: 8453,
        amount: "",
        intervalSeconds: 60,
        maxPayments: ""
    });
    // Contract write hooks
    const { writeContract: writeApprove, isPending: isApproving, data: approveTxHash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { writeContract: writeCreateSubscription, isPending: isCreating, data: createTxHash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    // Contract write hooks for cancellation
    const { writeContract: writeCancelSubscription, isPending: isCancelling, data: cancelTxHash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    // Wait for transaction confirmations
    const { isLoading: isApprovingConfirming, isSuccess: isApproveConfirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: approveTxHash
    });
    const { isLoading: isCreateConfirming, isSuccess: isCreateConfirmed, data: createReceipt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: createTxHash
    });
    // Wait for cancellation transaction confirmation
    const { isLoading: isCancelConfirming, isSuccess: isCancelConfirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: cancelTxHash
    });
    // Contract read hooks
    const { data: allowance, refetch: refetchAllowance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: newSubscription.tokenAddress,
        abi: ERC20_ABI,
        functionName: "allowance",
        args: address ? [
            address,
            CONTRACT_ADDRESSES[newSubscription.chainId]
        ] : undefined,
        chainId: newSubscription.chainId
    });
    const { data: tokenDecimals } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: newSubscription.tokenAddress,
        abi: ERC20_ABI,
        functionName: "decimals",
        chainId: newSubscription.chainId
    });
    // Helper functions
    const formatAmount = (amount, tokenAddress)=>{
        const decimals = TOKEN_DECIMALS[tokenAddress] || 6;
        const formatted = (parseFloat(amount) / Math.pow(10, decimals)).toFixed(6);
        const symbol = TOKEN_SYMBOLS[tokenAddress] || "TOKEN";
        return `${formatted} ${symbol}`;
    };
    const formatInterval = (intervalSeconds)=>{
        if (intervalSeconds < 60) {
            return `${intervalSeconds} seconds`;
        } else if (intervalSeconds < 3600) {
            return `${Math.floor(intervalSeconds / 60)} minutes`;
        } else if (intervalSeconds < 86400) {
            return `${Math.floor(intervalSeconds / 3600)} hours`;
        } else {
            return `${Math.floor(intervalSeconds / 86400)} days`;
        }
    };
    // Load subscriptions
    const loadSubscriptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!address) return;
        try {
            setLoading(true);
            const response = await fetch(`/api/recurring-payments-smart?action=user-subscriptions&subscriberAddress=${address}`);
            const data = await response.json();
            if (data.subscriptions !== undefined) {
                setSubscriptions(data.subscriptions || []);
            } else {
                setError(data.error || "Failed to load subscriptions");
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
            setError(`Failed to load subscriptions: ${errorMessage}`);
        } finally{
            setLoading(false);
        }
    }, [
        address
    ]);
    // Load subscriptions on mount and when address changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadSubscriptions();
    }, [
        loadSubscriptions
    ]);
    const handleSubscriptionConfirmed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setSuccess("Subscription created successfully!");
            setStep("complete");
            setNewSubscription({
                payeeAddress: "",
                tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
                chainId: 8453,
                amount: "",
                intervalSeconds: 60,
                maxPayments: ""
            });
            loadSubscriptions();
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
            setError(`Failed to confirm subscription: ${errorMessage}`);
        }
    }, [
        loadSubscriptions
    ]);
    // Handle approval confirmation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isApproveConfirmed) {
            setStep("create");
            setSuccess("Token approval confirmed! Now creating subscription...");
        }
    }, [
        isApproveConfirmed
    ]);
    // Handle subscription creation confirmation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isCreateConfirmed && createReceipt) {
            handleSubscriptionConfirmed();
        }
    }, [
        isCreateConfirmed,
        createReceipt,
        handleSubscriptionConfirmed
    ]);
    // Handle cancellation confirmation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isCancelConfirmed && cancelTxHash && cancellingSubscriptionId) {
            handleCancelConfirmed();
        }
    }, [
        isCancelConfirmed,
        cancelTxHash,
        cancellingSubscriptionId
    ]);
    const handleCancelConfirmed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            if (!cancellingSubscriptionId) return;
            // Update database to mark subscription as cancelled
            const response = await fetch("/api/recurring-payments-smart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "cancel-subscription",
                    subscriptionId: cancellingSubscriptionId
                })
            });
            const data = await response.json();
            if (data.success) {
                setSuccess("Subscription cancelled successfully!");
                setCancellingSubscriptionId(null);
                loadSubscriptions(); // Reload the subscriptions list
            } else {
                setError(`Failed to update database: ${data.error}`);
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
            setError(`Failed to update database: ${errorMessage}`);
        }
    }, [
        cancellingSubscriptionId,
        loadSubscriptions
    ]);
    // Approve tokens
    const approveTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!address) {
            setError("Please connect your wallet first");
            return;
        }
        try {
            setLoading(true);
            setError(null);
            const totalAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])((parseFloat(newSubscription.amount) * parseInt(newSubscription.maxPayments)).toString(), tokenDecimals || 6);
            writeApprove({
                address: newSubscription.tokenAddress,
                abi: ERC20_ABI,
                functionName: "approve",
                args: [
                    CONTRACT_ADDRESSES[newSubscription.chainId],
                    totalAmount
                ],
                chainId: newSubscription.chainId
            });
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
            setError(`Failed to approve tokens: ${errorMessage}`);
        } finally{
            setLoading(false);
        }
    }, [
        address,
        newSubscription,
        tokenDecimals,
        writeApprove
    ]);
    // Create subscription
    const createSubscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!address) {
            setError("Please connect your wallet first");
            return;
        }
        try {
            setLoading(true);
            setError(null);
            const amount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])(newSubscription.amount, tokenDecimals || 6);
            writeCreateSubscription({
                address: CONTRACT_ADDRESSES[newSubscription.chainId],
                abi: RECURRING_PAYMENTS_ABI,
                functionName: "createSubscription",
                args: [
                    newSubscription.payeeAddress,
                    newSubscription.tokenAddress,
                    amount,
                    BigInt(newSubscription.intervalSeconds),
                    BigInt(newSubscription.maxPayments)
                ],
                chainId: newSubscription.chainId
            });
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
            setError(`Failed to create subscription: ${errorMessage}`);
        } finally{
            setLoading(false);
        }
    }, [
        address,
        newSubscription,
        tokenDecimals,
        writeCreateSubscription
    ]);
    // Cancel subscription function
    const cancelSubscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (subscriptionId)=>{
        if (!address) {
            setError("Please connect your wallet first");
            return;
        }
        try {
            setError(null);
            setCancellingSubscriptionId(subscriptionId);
            // Find the subscription to get its chain ID
            const subscription = subscriptions.find((s)=>s.subscriptionId === subscriptionId);
            if (!subscription) {
                setError("Subscription not found");
                setCancellingSubscriptionId(null);
                return;
            }
            const contractAddress = CONTRACT_ADDRESSES[subscription.chainId];
            writeCancelSubscription({
                address: contractAddress,
                abi: RECURRING_PAYMENTS_ABI,
                functionName: "cancelSubscription",
                args: [
                    subscriptionId
                ],
                chainId: subscription.chainId
            });
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
            setError(`Failed to cancel subscription: ${errorMessage}`);
            setCancellingSubscriptionId(null);
        }
    }, [
        address,
        subscriptions,
        writeCancelSubscription
    ]);
    // Pause subscription
    const pauseSubscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (subscriptionId)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("/api/recurring-payments-smart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "pause-subscription",
                    subscriptionId
                })
            });
            const data = await response.json();
            if (data.success) {
                setSuccess("Subscription paused successfully!");
                loadSubscriptions();
            } else {
                setError(data.error || "Failed to pause subscription");
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
            setError(`Failed to pause subscription: ${errorMessage}`);
        } finally{
            setLoading(false);
        }
    }, [
        loadSubscriptions
    ]);
    // Resume subscription
    const resumeSubscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (subscriptionId)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("/api/recurring-payments-smart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "resume-subscription",
                    subscriptionId
                })
            });
            const data = await response.json();
            if (data.success) {
                setSuccess("Subscription resumed successfully!");
                loadSubscriptions();
            } else {
                setError(data.error || "Failed to resume subscription");
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
            setError(`Failed to resume subscription: ${errorMessage}`);
        } finally{
            setLoading(false);
        }
    }, [
        loadSubscriptions
    ]);
    // Handle form submission
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (e)=>{
        e.preventDefault();
        if (!address) {
            setError("Please connect your wallet first");
            return;
        }
        if (!newSubscription.payeeAddress) {
            setError("Please enter a payee address");
            return;
        }
        if (!newSubscription.amount) {
            setError("Please enter an amount");
            return;
        }
        if (!newSubscription.maxPayments) {
            setError("Please enter max payments");
            return;
        }
        // Check if payee is the same as subscriber
        if (newSubscription.payeeAddress.toLowerCase() === address.toLowerCase()) {
            setError("Payee address cannot be the same as your wallet address");
            return;
        }
        setStep("approve");
        setError(null);
    }, [
        address,
        newSubscription
    ]);
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-yellow-800",
                    children: "Please connect your wallet to manage recurring payments."
                }, void 0, false, {
                    fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                    lineNumber: 627,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                lineNumber: 626,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
            lineNumber: 625,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-8",
                children: "Smart Contract Recurring Payments"
            }, void 0, false, {
                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                lineNumber: 637,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-50 border border-red-200 rounded-lg p-4 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-800",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                    lineNumber: 643,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                lineNumber: 642,
                columnNumber: 17
            }, this),
            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-green-50 border border-green-200 rounded-lg p-4 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-green-800",
                    children: success
                }, void 0, false, {
                    fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                    lineNumber: 649,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                lineNumber: 648,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white shadow rounded-lg p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: "Create New Subscription"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                        lineNumber: 655,
                        columnNumber: 17
                    }, this),
                    step === "form" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Payee Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 662,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newSubscription.payeeAddress,
                                        onChange: (e)=>setNewSubscription({
                                                ...newSubscription,
                                                payeeAddress: e.target.value
                                            }),
                                        placeholder: "0x...",
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 665,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 661,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Token Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 680,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newSubscription.tokenAddress,
                                        onChange: (e)=>setNewSubscription({
                                                ...newSubscription,
                                                tokenAddress: e.target.value
                                            }),
                                        placeholder: "0x...",
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 683,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 679,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Chain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 699,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: newSubscription.chainId,
                                        onChange: (e)=>setNewSubscription({
                                                ...newSubscription,
                                                chainId: parseInt(e.target.value)
                                            }),
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 8453,
                                                children: "Base"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                lineNumber: 712,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 1,
                                                children: "Ethereum"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                lineNumber: 713,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 702,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 698,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 718,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        step: "0.000001",
                                        value: newSubscription.amount,
                                        onChange: (e)=>setNewSubscription({
                                                ...newSubscription,
                                                amount: e.target.value
                                            }),
                                        placeholder: "0.5",
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 721,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 717,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Interval (seconds)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 737,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: newSubscription.intervalSeconds,
                                        onChange: (e)=>setNewSubscription({
                                                ...newSubscription,
                                                intervalSeconds: parseInt(e.target.value)
                                            }),
                                        placeholder: "60",
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 740,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 736,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Max Payments"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 757,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: newSubscription.maxPayments,
                                        onChange: (e)=>setNewSubscription({
                                                ...newSubscription,
                                                maxPayments: e.target.value
                                            }),
                                        placeholder: "10",
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 760,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 756,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50",
                                children: loading ? "Processing..." : "Create Subscription"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 774,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                        lineNumber: 660,
                        columnNumber: 21
                    }, this),
                    step === "approve" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Please approve the contract to spend your tokens."
                            }, void 0, false, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 786,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: approveTokens,
                                disabled: isApproving || isApprovingConfirming,
                                className: "w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 disabled:opacity-50",
                                children: isApproving || isApprovingConfirming ? "Approving..." : "Approve Tokens"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 789,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                        lineNumber: 785,
                        columnNumber: 21
                    }, this),
                    step === "create" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Now creating your subscription on the blockchain..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 803,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: createSubscription,
                                disabled: isCreating || isCreateConfirming,
                                className: "w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50",
                                children: isCreating || isCreateConfirming ? "Creating..." : "Create Subscription"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 806,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                        lineNumber: 802,
                        columnNumber: 21
                    }, this),
                    step === "complete" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-green-600 font-medium",
                                children: "Subscription created successfully!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 820,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep("form"),
                                className: "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700",
                                children: "Create Another Subscription"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 823,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                        lineNumber: 819,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                lineNumber: 654,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white shadow rounded-lg p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: "Your Subscriptions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                        lineNumber: 835,
                        columnNumber: 17
                    }, this),
                    subscriptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "No subscriptions found."
                    }, void 0, false, {
                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                        lineNumber: 840,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: subscriptions.map((subscription)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-gray-200 rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold",
                                                children: [
                                                    "Subscription",
                                                    " ",
                                                    subscription.subscriptionId.slice(0, 8),
                                                    "..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                lineNumber: 849,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-1 rounded text-sm ${subscription.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                                                        children: subscription.isActive ? "Active" : "Inactive"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                        lineNumber: 858,
                                                        columnNumber: 41
                                                    }, this),
                                                    subscription.isPaused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-1 rounded text-sm bg-yellow-100 text-yellow-800",
                                                        children: "Paused"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                        lineNumber: 870,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                lineNumber: 857,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 848,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Amount:",
                                                    " ",
                                                    formatAmount(subscription.amount, subscription.tokenAddress)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                lineNumber: 878,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Interval:",
                                                    " ",
                                                    formatInterval(subscription.intervalSeconds)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                lineNumber: 885,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Chain:",
                                                    " ",
                                                    CHAIN_NAMES[subscription.chainId] || subscription.chainId
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                lineNumber: 891,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Payee: ",
                                                    subscription.payee.slice(0, 6),
                                                    "...",
                                                    subscription.payee.slice(-4)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                lineNumber: 896,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Payments: ",
                                                    subscription.paymentsMade,
                                                    "/",
                                                    subscription.maxPayments
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                lineNumber: 900,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Last Payment:",
                                                    " ",
                                                    subscription.lastPayment ? new Date(subscription.lastPayment * 1000).toLocaleDateString() : "Never"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                lineNumber: 904,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 877,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex space-x-2",
                                        children: subscription.isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                subscription.isPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>resumeSubscription(subscription.subscriptionId),
                                                    disabled: loading,
                                                    className: "bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 disabled:opacity-50",
                                                    children: "Resume"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                    lineNumber: 919,
                                                    columnNumber: 49
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>pauseSubscription(subscription.subscriptionId),
                                                    disabled: loading,
                                                    className: "bg-yellow-600 text-white px-4 py-2 rounded text-sm hover:bg-yellow-700 disabled:opacity-50",
                                                    children: "Pause"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                    lineNumber: 931,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (confirm("Are you sure you want to cancel this subscription? This action cannot be undone.")) {
                                                            cancelSubscription(subscription.subscriptionId);
                                                        }
                                                    },
                                                    disabled: isCancelling || cancellingSubscriptionId === subscription.subscriptionId,
                                                    className: "bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 disabled:opacity-50",
                                                    children: isCancelling && cancellingSubscriptionId === subscription.subscriptionId ? "Cancelling..." : "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                        lineNumber: 915,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, subscription.subscriptionId, true, {
                                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                                lineNumber: 844,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                        lineNumber: 842,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
                lineNumber: 834,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SmartContractRecurringPayments.tsx",
        lineNumber: 636,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConnectButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConnectButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SwapBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SwapBox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SmartContractRecurringPayments$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SmartContractRecurringPayments.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("swap");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pages",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConnectButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectButton"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-100 rounded-lg p-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("swap"),
                            className: `px-6 py-2 rounded-md transition-colors ${activeTab === "swap" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-800"}`,
                            children: "Cross-Chain Swap"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("recurring"),
                            className: `px-6 py-2 rounded-md transition-colors ${activeTab === "recurring" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-800"}`,
                            children: "Recurring Payments"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            activeTab === "swap" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SwapBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwapBox"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 38
            }, this),
            activeTab === "recurring" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SmartContractRecurringPayments$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 45,
                columnNumber: 43
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5f4b9dd1._.js.map