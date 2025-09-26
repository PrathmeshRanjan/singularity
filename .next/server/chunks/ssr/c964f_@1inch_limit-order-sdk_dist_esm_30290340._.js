module.exports = {

"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/abi/AggregationRouterV6.abi.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"inputs\":[{\"internalType\":\"contract IWETH\",\"name\":\"_weth\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AdvanceEpochFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ArbitraryStaticCallFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BadSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BitInvalidatedOrder\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ETHTransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EpochManagerAndBitInvalidatorsAreIncompatible\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EthDepositRejected\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMsgValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPermit2Transfer\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShortString\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidatedOrder\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MakingAmountTooLow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchArraysLengths\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OrderExpired\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OrderIsNotSuitableForMassInvalidation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PartialFillNotAllowed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Permit2TransferAmountTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PredicateIsNotTrue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PrivateOrder\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyDetected\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RemainingInvalidatedOrder\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SafeTransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SafeTransferFromFailed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"res\",\"type\":\"bytes\"}],\"name\":\"SimulationResults\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"str\",\"type\":\"string\"}],\"name\":\"StringTooLong\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SwapWithZeroAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TakingAmountExceeded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TakingAmountTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFromMakerToTakerFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFromTakerToMakerFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"WrongSeriesNonce\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"maker\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slotIndex\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"slotValue\",\"type\":\"uint256\"}],\"name\":\"BitInvalidatorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"EIP712DomainChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"maker\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"series\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newEpoch\",\"type\":\"uint256\"}],\"name\":\"EpochIncreased\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"orderHash\",\"type\":\"bytes32\"}],\"name\":\"OrderCancelled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"orderHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"remainingAmount\",\"type\":\"uint256\"}],\"name\":\"OrderFilled\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint96\",\"name\":\"series\",\"type\":\"uint96\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"advanceEpoch\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"offsets\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"and\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"arbitraryStaticCall\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"maker\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"slot\",\"type\":\"uint256\"}],\"name\":\"bitInvalidatorForOrder\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"MakerTraits\",\"name\":\"makerTraits\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"additionalMask\",\"type\":\"uint256\"}],\"name\":\"bitsInvalidateForOrder\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"MakerTraits\",\"name\":\"makerTraits\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"orderHash\",\"type\":\"bytes32\"}],\"name\":\"cancelOrder\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"MakerTraits[]\",\"name\":\"makerTraits\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes32[]\",\"name\":\"orderHashes\",\"type\":\"bytes32[]\"}],\"name\":\"cancelOrders\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"predicate\",\"type\":\"bytes\"}],\"name\":\"checkPredicate\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"eip712Domain\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"fields\",\"type\":\"bytes1\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"version\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"verifyingContract\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"},{\"internalType\":\"uint256[]\",\"name\":\"extensions\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"maker\",\"type\":\"address\"},{\"internalType\":\"uint96\",\"name\":\"series\",\"type\":\"uint96\"}],\"name\":\"epoch\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"maker\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"series\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"makerEpoch\",\"type\":\"uint256\"}],\"name\":\"epochEquals\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"eq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"salt\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"maker\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"receiver\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"makerAsset\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"takerAsset\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"makingAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"takingAmount\",\"type\":\"uint256\"},{\"internalType\":\"MakerTraits\",\"name\":\"makerTraits\",\"type\":\"uint256\"}],\"internalType\":\"struct IOrderMixin.Order\",\"name\":\"order\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"signature\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"TakerTraits\",\"name\":\"takerTraits\",\"type\":\"uint256\"}],\"name\":\"fillContractOrder\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"salt\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"maker\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"receiver\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"makerAsset\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"takerAsset\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"makingAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"takingAmount\",\"type\":\"uint256\"},{\"internalType\":\"MakerTraits\",\"name\":\"makerTraits\",\"type\":\"uint256\"}],\"internalType\":\"struct IOrderMixin.Order\",\"name\":\"order\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"signature\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"TakerTraits\",\"name\":\"takerTraits\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"args\",\"type\":\"bytes\"}],\"name\":\"fillContractOrderArgs\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"salt\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"maker\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"receiver\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"makerAsset\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"takerAsset\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"makingAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"takingAmount\",\"type\":\"uint256\"},{\"internalType\":\"MakerTraits\",\"name\":\"makerTraits\",\"type\":\"uint256\"}],\"internalType\":\"struct IOrderMixin.Order\",\"name\":\"order\",\"type\":\"tuple\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"vs\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"TakerTraits\",\"name\":\"takerTraits\",\"type\":\"uint256\"}],\"name\":\"fillOrder\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"salt\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"maker\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"receiver\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"makerAsset\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"takerAsset\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"makingAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"takingAmount\",\"type\":\"uint256\"},{\"internalType\":\"MakerTraits\",\"name\":\"makerTraits\",\"type\":\"uint256\"}],\"internalType\":\"struct IOrderMixin.Order\",\"name\":\"order\",\"type\":\"tuple\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"vs\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"TakerTraits\",\"name\":\"takerTraits\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"args\",\"type\":\"bytes\"}],\"name\":\"fillOrderArgs\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"gt\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"salt\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"maker\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"receiver\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"makerAsset\",\"type\":\"uint256\"},{\"internalType\":\"Address\",\"name\":\"takerAsset\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"makingAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"takingAmount\",\"type\":\"uint256\"},{\"internalType\":\"MakerTraits\",\"name\":\"makerTraits\",\"type\":\"uint256\"}],\"internalType\":\"struct IOrderMixin.Order\",\"name\":\"order\",\"type\":\"tuple\"}],\"name\":\"hashOrder\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint96\",\"name\":\"series\",\"type\":\"uint96\"}],\"name\":\"increaseEpoch\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"lt\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"not\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"offsets\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"or\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"permit\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"action\",\"type\":\"bytes\"}],\"name\":\"permitAndCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"maker\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"orderHash\",\"type\":\"bytes32\"}],\"name\":\"rawRemainingInvalidatorForOrder\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"maker\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"orderHash\",\"type\":\"bytes32\"}],\"name\":\"remainingInvalidatorForOrder\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"simulate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]"));}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/constants.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ZX": (()=>ZX),
    "getLimitOrderContract": (()=>getLimitOrderContract)
});
const ZX = '0x';
const ONE_INCH_LIMIT_ORDER_V4 = '0x111111125421ca6dc452d289314280a0f8842a65';
const ONE_INCH_LIMIT_ORDER_V4_ZK_SYNC = '0x6fd4383cb451173d5f9304f041c7bcbf27d561ff';
const getLimitOrderContract = (chainId)=>{
    if (chainId === 324) {
        return ONE_INCH_LIMIT_ORDER_V4_ZK_SYNC;
    }
    return ONE_INCH_LIMIT_ORDER_V4;
}; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order-contract/limit-order-contract.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LimitOrderContract": (()=>LimitOrderContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/ethers/lib.esm/abi/interface.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/ethers/lib.esm/crypto/signature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$abi$2f$AggregationRouterV6$2e$abi$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/abi/AggregationRouterV6.abi.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/constants.js [app-ssr] (ecmascript)");
;
;
;
;
const lopContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Interface"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$abi$2f$AggregationRouterV6$2e$abi$2e$json__$28$json$29$__["default"]);
class LimitOrderContract {
    static getFillOrderCalldata(order, signature, takerTraits, amount) {
        const { r, yParityAndS: vs } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Signature"].from(signature);
        const { args, trait } = takerTraits.encode();
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(args === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"], 'takerTraits contains args data, use LimitOrderContract.getFillOrderArgsCalldata method');
        return lopContract.encodeFunctionData('fillOrder', [
            order,
            r,
            vs,
            amount,
            trait
        ]);
    }
    static getFillContractOrderCalldata(order, signature, takerTraits, amount) {
        const { args, trait } = takerTraits.encode();
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(args === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"], 'takerTraits contains args data, use LimitOrderContract.getFillContractOrderArgsCalldata method');
        return lopContract.encodeFunctionData('fillContractOrder', [
            order,
            signature,
            amount,
            trait,
            args
        ]);
    }
    static getFillOrderArgsCalldata(order, signature, takerTraits, amount) {
        const { r, yParityAndS: vs } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Signature"].from(signature);
        const { args, trait } = takerTraits.encode();
        return lopContract.encodeFunctionData('fillOrderArgs', [
            order,
            r,
            vs,
            amount,
            trait,
            args
        ]);
    }
    static getFillContractOrderArgsCalldata(order, signature, takerTraits, amount) {
        const { args, trait } = takerTraits.encode();
        return lopContract.encodeFunctionData('fillContractOrderArgs', [
            order,
            signature,
            amount,
            trait,
            args
        ]);
    }
} //# sourceMappingURL=limit-order-contract.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order-contract/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2d$contract$2f$limit$2d$order$2d$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order-contract/limit-order-contract.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order-contract/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2d$contract$2f$limit$2d$order$2d$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order-contract/limit-order-contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2d$contract$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order-contract/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/domain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EIP712Domain": (()=>EIP712Domain),
    "LimitOrderV4TypeDataName": (()=>LimitOrderV4TypeDataName),
    "LimitOrderV4TypeDataVersion": (()=>LimitOrderV4TypeDataVersion),
    "Order": (()=>Order)
});
const EIP712Domain = [
    {
        name: 'name',
        type: 'string'
    },
    {
        name: 'version',
        type: 'string'
    },
    {
        name: 'chainId',
        type: 'uint256'
    },
    {
        name: 'verifyingContract',
        type: 'address'
    }
];
const Order = [
    {
        name: 'salt',
        type: 'uint256'
    },
    {
        name: 'maker',
        type: 'address'
    },
    {
        name: 'receiver',
        type: 'address'
    },
    {
        name: 'makerAsset',
        type: 'address'
    },
    {
        name: 'takerAsset',
        type: 'address'
    },
    {
        name: 'makingAmount',
        type: 'uint256'
    },
    {
        name: 'takingAmount',
        type: 'uint256'
    },
    {
        name: 'makerTraits',
        type: 'uint256'
    }
];
const LimitOrderV4TypeDataName = '1inch Aggregation Router';
const LimitOrderV4TypeDataVersion = '6'; //# sourceMappingURL=domain.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/eip712.types.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
 //# sourceMappingURL=eip712.types.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/order-typed-data-builder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildOrderTypedData": (()=>buildOrderTypedData),
    "getDomainSeparator": (()=>getDomainSeparator),
    "getLimitOrderV4Domain": (()=>getLimitOrderV4Domain),
    "getOrderHash": (()=>getOrderHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/domain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/constants.js [app-ssr] (ecmascript)");
;
;
;
function getOrderHash(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].TypedDataEncoder.hash(data.domain, {
        Order: data.types.Order
    }, data.message);
}
function buildOrderTypedData(chainId, verifyingContract, name, version, order) {
    return {
        primaryType: 'Order',
        types: {
            EIP712Domain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EIP712Domain"],
            Order: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Order"]
        },
        domain: {
            name,
            version,
            chainId,
            verifyingContract
        },
        message: order
    };
}
function getDomainSeparator(name, version, chainId, verifyingContract) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].TypedDataEncoder.hashStruct('EIP712Domain', {
        EIP712Domain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EIP712Domain"]
    }, {
        name,
        version,
        chainId,
        verifyingContract
    });
}
function getLimitOrderV4Domain(chainId) {
    return {
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LimitOrderV4TypeDataName"],
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LimitOrderV4TypeDataVersion"],
        chainId,
        verifyingContract: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLimitOrderContract"])(chainId)
    };
} //# sourceMappingURL=order-typed-data-builder.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/domain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$eip712$2e$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/eip712.types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$order$2d$typed$2d$data$2d$builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/order-typed-data-builder.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/domain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$eip712$2e$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/eip712.types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$order$2d$typed$2d$data$2d$builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/order-typed-data-builder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/maker-traits.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MakerTraits": (()=>MakerTraits)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/node_modules/@1inch/byte-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
;
;
class MakerTraits {
    constructor(val){
        this.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BN"](val);
    }
    static default() {
        return new MakerTraits(0n);
    }
    allowedSender() {
        return this.value.getMask(MakerTraits.ALLOWED_SENDER_MASK).value.toString(16).padStart(20, '0');
    }
    isPrivate() {
        return this.value.getMask(MakerTraits.ALLOWED_SENDER_MASK).value !== 0n;
    }
    withAllowedSender(sender) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(!sender.isZero(), 'Use withAnySender() to remove sender check');
        const lastHalf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add0x"])(sender.toString().slice(-20));
        this.value = this.value.setMask(MakerTraits.ALLOWED_SENDER_MASK, BigInt(lastHalf));
        return this;
    }
    withAnySender() {
        this.value = this.value.setMask(MakerTraits.ALLOWED_SENDER_MASK, BigInt(0));
        return this;
    }
    expiration() {
        const timestampSec = this.value.getMask(MakerTraits.EXPIRATION_MASK);
        if (timestampSec.isZero()) {
            return null;
        }
        return timestampSec.value;
    }
    withExpiration(expiration) {
        const expirationSec = expiration === null ? 0n : expiration;
        this.value = this.value.setMask(MakerTraits.EXPIRATION_MASK, expirationSec);
        return this;
    }
    nonceOrEpoch() {
        return this.value.getMask(MakerTraits.NONCE_OR_EPOCH_MASK).value;
    }
    withNonce(nonce) {
        this.value = this.value.setMask(MakerTraits.NONCE_OR_EPOCH_MASK, nonce);
        return this;
    }
    withEpoch(series, epoch) {
        this.setSeries(series);
        this.enableEpochManagerCheck();
        return this.withNonce(epoch);
    }
    series() {
        return this.value.getMask(MakerTraits.SERIES_MASK).value;
    }
    hasExtension() {
        return this.value.getBit(MakerTraits.HAS_EXTENSION_FLAG) === 1;
    }
    withExtension() {
        this.value = this.value.setBit(MakerTraits.HAS_EXTENSION_FLAG, 1);
        return this;
    }
    isPartialFillAllowed() {
        return this.value.getBit(MakerTraits.NO_PARTIAL_FILLS_FLAG) === 0;
    }
    disablePartialFills() {
        this.value = this.value.setBit(MakerTraits.NO_PARTIAL_FILLS_FLAG, 1);
        return this;
    }
    allowPartialFills() {
        this.value = this.value.setBit(MakerTraits.NO_PARTIAL_FILLS_FLAG, 0);
        return this;
    }
    setPartialFills(val) {
        return val ? this.allowPartialFills() : this.disablePartialFills();
    }
    isMultipleFillsAllowed() {
        return this.value.getBit(MakerTraits.ALLOW_MULTIPLE_FILLS_FLAG) === 1;
    }
    allowMultipleFills() {
        this.value = this.value.setBit(MakerTraits.ALLOW_MULTIPLE_FILLS_FLAG, 1);
        return this;
    }
    disableMultipleFills() {
        this.value = this.value.setBit(MakerTraits.ALLOW_MULTIPLE_FILLS_FLAG, 0);
        return this;
    }
    setMultipleFills(val) {
        return val ? this.allowMultipleFills() : this.disableMultipleFills();
    }
    hasPreInteraction() {
        return this.value.getBit(MakerTraits.PRE_INTERACTION_CALL_FLAG) === 1;
    }
    enablePreInteraction() {
        this.value = this.value.setBit(MakerTraits.PRE_INTERACTION_CALL_FLAG, 1);
        return this;
    }
    disablePreInteraction() {
        this.value = this.value.setBit(MakerTraits.PRE_INTERACTION_CALL_FLAG, 0);
        return this;
    }
    hasPostInteraction() {
        return this.value.getBit(MakerTraits.POST_INTERACTION_CALL_FLAG) === 1;
    }
    enablePostInteraction() {
        this.value = this.value.setBit(MakerTraits.POST_INTERACTION_CALL_FLAG, 1);
        return this;
    }
    disablePostInteraction() {
        this.value = this.value.setBit(MakerTraits.POST_INTERACTION_CALL_FLAG, 0);
        return this;
    }
    isEpochManagerEnabled() {
        return this.value.getBit(MakerTraits.NEED_CHECK_EPOCH_MANAGER_FLAG) === 1;
    }
    isPermit2() {
        return this.value.getBit(MakerTraits.USE_PERMIT2_FLAG) === 1;
    }
    enablePermit2() {
        this.value = this.value.setBit(MakerTraits.USE_PERMIT2_FLAG, 1);
        return this;
    }
    disablePermit2() {
        this.value = this.value.setBit(MakerTraits.USE_PERMIT2_FLAG, 0);
        return this;
    }
    isNativeUnwrapEnabled() {
        return this.value.getBit(MakerTraits.UNWRAP_WETH_FLAG) === 1;
    }
    enableNativeUnwrap() {
        this.value = this.value.setBit(MakerTraits.UNWRAP_WETH_FLAG, 1);
        return this;
    }
    disableNativeUnwrap() {
        this.value = this.value.setBit(MakerTraits.UNWRAP_WETH_FLAG, 0);
        return this;
    }
    asBigInt() {
        return this.value.value;
    }
    isBitInvalidatorMode() {
        return !this.isPartialFillAllowed() || !this.isMultipleFillsAllowed();
    }
    enableEpochManagerCheck() {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(!this.isBitInvalidatorMode(), 'Epoch manager allowed only when partialFills and multipleFills enabled');
        this.value = this.value.setBit(MakerTraits.NEED_CHECK_EPOCH_MANAGER_FLAG, 1);
    }
    setSeries(series) {
        this.value = this.value.setMask(MakerTraits.SERIES_MASK, series);
    }
}
MakerTraits.ALLOWED_SENDER_MASK = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BitMask"](0n, 80n);
MakerTraits.EXPIRATION_MASK = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BitMask"](80n, 120n);
MakerTraits.NONCE_OR_EPOCH_MASK = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BitMask"](120n, 160n);
MakerTraits.SERIES_MASK = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BitMask"](160n, 200n);
MakerTraits.NO_PARTIAL_FILLS_FLAG = 255n;
MakerTraits.ALLOW_MULTIPLE_FILLS_FLAG = 254n;
MakerTraits.PRE_INTERACTION_CALL_FLAG = 252n;
MakerTraits.POST_INTERACTION_CALL_FLAG = 251n;
MakerTraits.NEED_CHECK_EPOCH_MANAGER_FLAG = 250n;
MakerTraits.HAS_EXTENSION_FLAG = 249n;
MakerTraits.USE_PERMIT2_FLAG = 248n;
MakerTraits.UNWRAP_WETH_FLAG = 247n; //# sourceMappingURL=maker-traits.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/extension.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Extension": (()=>Extension)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/ethers/lib.esm/crypto/keccak.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/node_modules/@1inch/byte-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/constants.js [app-ssr] (ecmascript)");
;
;
;
;
class Extension {
    constructor(data = Extension.EMPTY){
        this.makerAssetSuffix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.takerAssetSuffix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.makingAmountData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.takingAmountData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.predicate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.makerPermit = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.preInteraction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.postInteraction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.customData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        Object.entries(data).forEach(([key, val])=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexString"])(val) || val === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"], `${key} must be valid hex string`));
        this.makerAssetSuffix = data.makerAssetSuffix;
        this.takerAssetSuffix = data.takerAssetSuffix;
        this.makingAmountData = data.makingAmountData;
        this.takingAmountData = data.takingAmountData;
        this.predicate = data.predicate;
        this.makerPermit = data.makerPermit;
        this.preInteraction = data.preInteraction;
        this.postInteraction = data.postInteraction;
        this.customData = data.customData;
    }
    get hasPredicate() {
        return this.predicate !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
    }
    get hasMakerPermit() {
        return this.makerPermit !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
    }
    static decode(bytes) {
        if (bytes === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"]) {
            return Extension.default();
        }
        const iter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytesIter"].HexString(bytes);
        let offsets = BigInt(iter.nextUint256());
        let consumed = 0;
        const data = {};
        for (const field of Extension.fields){
            const offset = Number(offsets & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UINT_32_MAX"]);
            const bytesCount = offset - consumed;
            data[field] = iter.nextBytes(bytesCount);
            consumed += bytesCount;
            offsets = offsets >> 32n;
        }
        data.customData = iter.rest();
        return new Extension(data);
    }
    static default() {
        return new Extension();
    }
    keccak256() {
        return BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(this.encode()));
    }
    isEmpty() {
        const allInteractions = this.getAll();
        const allInteractionsConcat = allInteractions.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim0x"]).join('') + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim0x"])(this.customData);
        return allInteractionsConcat.length === 0;
    }
    encode() {
        const allInteractions = this.getAll();
        const allInteractionsConcat = allInteractions.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim0x"]).join('') + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim0x"])(this.customData);
        const cumulativeSum = ((sum)=>(value)=>{
                sum += value;
                return sum;
            })(0);
        const offsets = allInteractions.map((a)=>a.length / 2 - 1).map(cumulativeSum).reduce((acc, a, i)=>acc + (BigInt(a) << BigInt(32 * i)), 0n);
        let extension = '0x';
        if (allInteractionsConcat.length > 0) {
            extension += offsets.toString(16).padStart(64, '0') + allInteractionsConcat;
        }
        return extension;
    }
    getAll() {
        return Extension.fields.map((f)=>this[f]);
    }
}
Extension.EMPTY = {
    makerAssetSuffix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"],
    takerAssetSuffix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"],
    makingAmountData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"],
    takingAmountData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"],
    predicate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"],
    makerPermit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"],
    preInteraction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"],
    postInteraction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"],
    customData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"]
};
Extension.fields = [
    'makerAssetSuffix',
    'takerAssetSuffix',
    'makingAmountData',
    'takingAmountData',
    'predicate',
    'makerPermit',
    'preInteraction',
    'postInteraction'
]; //# sourceMappingURL=extension.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/source-track.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "injectTrackCode": (()=>injectTrackCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/node_modules/@1inch/byte-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$id$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/ethers/lib.esm/hash/id.js [app-ssr] (ecmascript)");
;
;
const TRACK_CODE_MASK = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BitMask"](224n, 256n);
function getTrackCodeForSource(source) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexString"])(source)) {
        return createId(source);
    }
    if (source.length === 10) {
        return BigInt(source);
    }
    if (source.length === 66) {
        return BigInt(source.substring(0, 10));
    }
    return createId(source);
}
function createId(source) {
    return BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add0x"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$id$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["id"])(source).slice(0, 10)));
}
function injectTrackCode(salt, source) {
    const track = source ? getTrackCodeForSource(source) : 0n;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BN"](salt).setMask(TRACK_CODE_MASK, track).value;
} //# sourceMappingURL=source-track.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/address.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Address": (()=>Address)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/ethers/lib.esm/address/checks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/node_modules/@1inch/byte-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
;
;
;
class Address {
    constructor(val){
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(val), `Invalid address ${val}`);
        this.val = val.toLowerCase();
    }
    static fromBigInt(val) {
        return new Address((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add0x"])(val.toString(16).padStart(40, '0')));
    }
    static fromFirstBytes(bytes) {
        return new Address(bytes.slice(0, 42));
    }
    toString() {
        return this.val;
    }
    equal(other) {
        return this.val === other.val;
    }
    isNative() {
        return this.equal(Address.NATIVE_CURRENCY);
    }
    isZero() {
        return this.equal(Address.ZERO_ADDRESS);
    }
    lastHalf() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add0x"])(this.val.slice(-20));
    }
}
Address.NATIVE_CURRENCY = new Address('0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
Address.ZERO_ADDRESS = new Address('0x0000000000000000000000000000000000000000'); //# sourceMappingURL=address.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/utils/rand-bigint.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "randBigInt": (()=>randBigInt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/ethers/lib.esm/crypto/random.js [app-ssr] (ecmascript)");
;
function randBigInt(max) {
    let bytesCount = 0;
    max = BigInt(max) + 1n;
    let rest = max;
    while(rest){
        rest = rest >> 8n;
        bytesCount += 1;
    }
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomBytes"])(bytesCount);
    const val = bytes.reduce((acc, val, i)=>acc + (BigInt(val) << BigInt(i * 8)), 0n);
    return val % max;
} //# sourceMappingURL=rand-bigint.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/limit-order.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LimitOrder": (()=>LimitOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$abi$2d$coder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/ethers/lib.esm/abi/abi-coder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/node_modules/@1inch/byte-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$order$2d$typed$2d$data$2d$builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/order-typed-data-builder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$maker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/maker-traits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$source$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/source-track.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$rand$2d$bigint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/utils/rand-bigint.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
class LimitOrder {
    constructor(orderInfo, makerTraits = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$maker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MakerTraits"](0n), extension = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Extension"].default()){
        this.extension = extension;
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(!orderInfo.takerAsset.isNative(), `${orderInfo.takerAsset} can not be 'takerAsset'. Use wrapper address as 'takerAsset' and 'makerTraits.enableNativeUnwrap' to swap to NATIVE currency`);
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(!orderInfo.makerAsset.isNative(), 'Maker asset can not be NATIVE, use wrapper');
        this.makerAsset = orderInfo.makerAsset;
        this.takerAsset = orderInfo.takerAsset;
        this.makingAmount = orderInfo.makingAmount;
        this.takingAmount = orderInfo.takingAmount;
        this._salt = LimitOrder.verifySalt(orderInfo.salt || LimitOrder.buildSalt(extension), extension);
        this.maker = orderInfo.maker;
        this.receiver = orderInfo.receiver?.equal(orderInfo.maker) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"].ZERO_ADDRESS : orderInfo.receiver || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"].ZERO_ADDRESS;
        this.makerTraits = makerTraits;
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(this.makingAmount <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UINT_256_MAX"], 'makingAmount too big');
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(this.takingAmount <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UINT_256_MAX"], 'takingAmount too big');
        if (!extension.isEmpty()) {
            this.makerTraits.withExtension();
        }
    }
    get salt() {
        return this._salt;
    }
    static buildSalt(extension, baseSalt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$rand$2d$bigint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randBigInt"])((1n << 96n) - 1n)) {
        if (extension.isEmpty()) {
            return baseSalt;
        }
        return baseSalt << 160n | extension.keccak256() & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UINT_160_MAX"];
    }
    static verifySalt(salt, extension) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(salt <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UINT_256_MAX"], 'salt too big');
        if (extension.isEmpty()) {
            return salt;
        }
        const hash = salt & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UINT_160_MAX"];
        const expectedHash = extension.keccak256() & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UINT_160_MAX"];
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(hash === expectedHash, 'invalid salt: lowest 160 bits should be extension hash');
        return salt;
    }
    static fromCalldata(bytes) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexString"])(bytes), 'Bytes should be valid hex string with 0x prefix');
        const info = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$abi$2d$coder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiCoder"].defaultAbiCoder().decode([
            LimitOrder.Web3Type
        ], bytes);
        const order = info[0];
        return new LimitOrder({
            salt: order.salt ? BigInt(order.salt) : undefined,
            maker: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](order.maker),
            receiver: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](order.receiver),
            takingAmount: BigInt(order.takingAmount),
            makingAmount: BigInt(order.makingAmount),
            takerAsset: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](order.takerAsset),
            makerAsset: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](order.makerAsset)
        }, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$maker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MakerTraits"](BigInt(order.makerTraits)));
    }
    static fromDataAndExtension(data, extension) {
        return new LimitOrder({
            salt: BigInt(data.salt),
            maker: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](data.maker),
            receiver: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](data.receiver),
            takingAmount: BigInt(data.takingAmount),
            makingAmount: BigInt(data.makingAmount),
            takerAsset: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](data.takerAsset),
            makerAsset: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](data.makerAsset)
        }, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$maker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MakerTraits"](BigInt(data.makerTraits)), extension);
    }
    setSource(source) {
        this._salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$source$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectTrackCode"])(this.salt, source);
        return this;
    }
    toCalldata() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$abi$2d$coder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiCoder"].defaultAbiCoder().encode([
            LimitOrder.Web3Type
        ], [
            this.build()
        ]);
    }
    build() {
        return {
            maker: this.maker.toString(),
            makerAsset: this.makerAsset.toString(),
            takerAsset: this.takerAsset.toString(),
            makerTraits: (this.makerTraits?.asBigInt() || 0n).toString(),
            salt: this.salt.toString(),
            makingAmount: this.makingAmount.toString(),
            takingAmount: this.takingAmount.toString(),
            receiver: this.receiver.toString()
        };
    }
    getTypedData(chainId) {
        const domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$order$2d$typed$2d$data$2d$builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLimitOrderV4Domain"])(chainId);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$order$2d$typed$2d$data$2d$builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildOrderTypedData"])(domain.chainId, domain.verifyingContract, domain.name, domain.version, this.build());
    }
    getOrderHash(chainId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$order$2d$typed$2d$data$2d$builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrderHash"])(this.getTypedData(chainId));
    }
    isPrivate() {
        return this.makerTraits.isPrivate();
    }
}
LimitOrder.Web3Type = `tuple(${[
    'uint256 salt',
    'address maker',
    'address receiver',
    'address makerAsset',
    'address takerAsset',
    'uint256 makingAmount',
    'uint256 takingAmount',
    'uint256 makerTraits'
]})`; //# sourceMappingURL=limit-order.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/bps.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Bps": (()=>Bps)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
;
class Bps {
    constructor(value){
        this.value = value;
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(value >= 0 && value <= 10000, `invalid bps ${value}`);
    }
    static fromPercent(val, base = 1n) {
        return new Bps(BigInt(100 * val) / base);
    }
    static fromFraction(val, base = 1n) {
        return new Bps(BigInt(10000 * val) / base);
    }
    equal(other) {
        return this.value === other.value;
    }
    isZero() {
        return this.value === 0n;
    }
    toPercent(base = 1n) {
        return Number(this.value * base) / 100;
    }
    toFraction(base = 1n) {
        return Number(this.value * base) / 10000;
    }
    toString() {
        return this.value.toString();
    }
}
Bps.ZERO = new Bps(0n); //# sourceMappingURL=bps.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/resolver-fee.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ResolverFee": (()=>ResolverFee)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/bps.js [app-ssr] (ecmascript)");
;
;
;
class ResolverFee {
    constructor(receiver, fee, whitelistDiscount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bps"].ZERO){
        this.receiver = receiver;
        this.fee = fee;
        this.whitelistDiscount = whitelistDiscount;
        if (receiver.isZero() && !fee.isZero()) {
            throw new Error('fee must be zero if receiver is zero address');
        }
        if (!receiver.isZero() && fee.isZero()) {
            throw new Error('receiver must be zero address if fee is zero');
        }
        if (fee.isZero() && !whitelistDiscount.isZero()) {
            throw new Error('whitelist discount must be zero if fee is zero');
        }
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(this.whitelistDiscount.value % 100n === 0n, `whitelist discount must have percent precision: 1%, 2% and so on`);
    }
}
ResolverFee.ZERO = new ResolverFee(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"].ZERO_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bps"].ZERO); //# sourceMappingURL=resolver-fee.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/integrator-fee.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IntegratorFee": (()=>IntegratorFee)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/bps.js [app-ssr] (ecmascript)");
;
;
class IntegratorFee {
    constructor(integrator, protocol, fee, share){
        this.integrator = integrator;
        this.protocol = protocol;
        this.fee = fee;
        this.share = share;
        if (fee.isZero()) {
            if (!share.isZero()) {
                throw new Error('integrator share must be zero if fee is zero');
            }
            if (!integrator.isZero()) {
                throw new Error('integrator address must be zero if fee is zero');
            }
            if (!protocol.isZero()) {
                throw new Error('protocol address must be zero if fee is zero');
            }
        }
        if ((integrator.isZero() || protocol.isZero()) && !fee.isZero()) {
            throw new Error('fee must be zero if integrator or protocol is zero address');
        }
    }
}
IntegratorFee.ZERO = new IntegratorFee(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"].ZERO_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"].ZERO_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bps"].ZERO, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bps"].ZERO); //# sourceMappingURL=integrator-fee.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fees.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Fees": (()=>Fees)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$resolver$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/resolver-fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$integrator$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/integrator-fee.js [app-ssr] (ecmascript)");
;
;
;
class Fees {
    constructor(resolver, integrator){
        this.resolver = resolver;
        this.integrator = integrator;
        if (!resolver.fee.isZero() && !integrator.fee.isZero()) {
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(resolver.receiver.equal(integrator.protocol), 'resolver fee receiver address and integrator fee protocol address must be same');
        }
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(!(resolver.fee.isZero() && integrator.fee.isZero()), 'at least one fee must be set');
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(this.integrator.fee.toFraction() < 0.6553, 'max fee is 65.53%');
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(this.resolver.fee.toFraction() < 0.6553, 'max fee is 65.53%');
    }
    get protocol() {
        return this.integrator.fee.isZero() ? this.resolver.receiver : this.integrator.protocol;
    }
    static resolverFee(fee) {
        return new Fees(fee, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$integrator$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntegratorFee"].ZERO);
    }
    static integratorFee(fee) {
        return new Fees(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$resolver$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResolverFee"].ZERO, fee);
    }
}
Fees.BASE_1E5 = 100000n;
Fees.BASE_1E2 = 100n; //# sourceMappingURL=fees.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/whitelist-half-address.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WhitelistHalfAddress": (()=>WhitelistHalfAddress)
});
class WhitelistHalfAddress {
    constructor(addresses){
        this.addresses = addresses;
    }
    get length() {
        return this.addresses.length;
    }
    static new(addresses) {
        return new WhitelistHalfAddress(addresses?.map((w)=>w.lastHalf()) || []);
    }
    isWhitelisted(address) {
        const half = address.lastHalf();
        return this.addresses.some((w)=>w === half);
    }
    encodeTo(builder) {
        builder.addUint8(BigInt(this.addresses.length));
        for (const halfAddress of this.addresses){
            builder.addBytes(halfAddress);
        }
        return builder;
    }
} //# sourceMappingURL=whitelist-half-address.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/utils/mul-div.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Rounding": (()=>Rounding),
    "mulDiv": (()=>mulDiv)
});
var Rounding;
(function(Rounding) {
    Rounding[Rounding["Ceil"] = 0] = "Ceil";
    Rounding[Rounding["Floor"] = 1] = "Floor";
})(Rounding || (Rounding = {}));
function mulDiv(a, b, x, rounding = Rounding.Floor) {
    const res = a * b / x;
    if (rounding === Rounding.Ceil && a * b % x > 0) {
        return res + 1n;
    }
    return res;
} //# sourceMappingURL=mul-div.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fee-calculator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FeeCalculator": (()=>FeeCalculator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fees.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$mul$2d$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/utils/mul-div.js [app-ssr] (ecmascript)");
;
;
class FeeCalculator {
    constructor(fees, whitelist){
        this.fees = fees;
        this.whitelist = whitelist;
    }
    getTakingAmount(taker, orderTakingAmount) {
        const fees = this.getFeesForTaker(taker);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$mul$2d$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulDiv"])(orderTakingAmount, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5 + fees.resolverFee + fees.integratorFee, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$mul$2d$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Rounding"].Ceil);
    }
    getMakingAmount(taker, makingAmount) {
        const fees = this.getFeesForTaker(taker);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$mul$2d$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulDiv"])(makingAmount, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5 + fees.resolverFee + fees.integratorFee);
    }
    getResolverFee(taker, orderTakingAmount) {
        const takingAmount = this.getTakingAmount(taker, orderTakingAmount);
        const fees = this.getFeesForTaker(taker);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$mul$2d$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulDiv"])(takingAmount, fees.resolverFee, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5 + fees.resolverFee + fees.integratorFee);
    }
    getIntegratorFee(taker, orderTakingAmount) {
        const takingAmount = this.getTakingAmount(taker, orderTakingAmount);
        const fees = this.getFeesForTaker(taker);
        const total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$mul$2d$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulDiv"])(takingAmount, fees.integratorFee, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5 + fees.resolverFee + fees.integratorFee);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$mul$2d$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulDiv"])(total, BigInt(this.fees.integrator.share.toFraction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E2)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E2);
    }
    getProtocolShareOfIntegratorFee(taker, orderTakingAmount) {
        const takingAmount = this.getTakingAmount(taker, orderTakingAmount);
        const fees = this.getFeesForTaker(taker);
        const total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$mul$2d$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulDiv"])(takingAmount, fees.integratorFee, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5 + fees.resolverFee + fees.integratorFee);
        return total - this.getIntegratorFee(taker, orderTakingAmount);
    }
    getProtocolFee(taker, orderTakingAmount) {
        const resolverFee = this.getResolverFee(taker, orderTakingAmount);
        const integratorPart = this.getProtocolShareOfIntegratorFee(taker, orderTakingAmount);
        return integratorPart + resolverFee;
    }
    getFeesForTaker(taker) {
        const discountNumerator = this.whitelist.isWhitelisted(taker) ? Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E2) - this.fees.resolver.whitelistDiscount.toFraction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E2) : 100;
        const resolverFee = BigInt(discountNumerator * this.fees.resolver.fee.toFraction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5)) / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E2;
        const resolverFeeBN = BigInt(resolverFee);
        const integratorFeeBN = BigInt(this.fees.integrator.fee.toFraction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5));
        return {
            resolverFee: resolverFeeBN,
            integratorFee: integratorFeeBN
        };
    }
} //# sourceMappingURL=fee-calculator.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/extension-builder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ExtensionBuilder": (()=>ExtensionBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/node_modules/@1inch/byte-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/constants.js [app-ssr] (ecmascript)");
;
;
;
;
class ExtensionBuilder {
    constructor(){
        this.makerAssetSuffix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.takerAssetSuffix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.makingAmountData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.takingAmountData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.predicate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.makerPermit = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.preInteraction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.postInteraction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
        this.customData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"];
    }
    withMakerAssetSuffix(suffix) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexString"])(suffix), 'MakerAssetSuffix must be valid hex string');
        this.makerAssetSuffix = suffix;
        return this;
    }
    withTakerAssetSuffix(suffix) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexString"])(suffix), 'TakerAssetSuffix must be valid hex string');
        this.takerAssetSuffix = suffix;
        return this;
    }
    withMakingAmountData(address, data) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexString"])(data), 'MakingAmountData must be valid hex string');
        this.makingAmountData = address.toString() + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim0x"])(data);
        return this;
    }
    withTakingAmountData(address, data) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexString"])(data), 'TakingAmountData must be valid hex string');
        this.takingAmountData = address.toString() + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim0x"])(data);
        return this;
    }
    withPredicate(predicate) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexString"])(predicate), 'Predicate must be valid hex string');
        this.predicate = predicate;
        return this;
    }
    withMakerPermit(tokenFrom, permitData) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexString"])(permitData), 'Permit data must be valid hex string');
        this.makerPermit = tokenFrom.toString() + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim0x"])(permitData);
        return this;
    }
    withPreInteraction(interaction) {
        this.preInteraction = interaction.encode();
        return this;
    }
    withPostInteraction(interaction) {
        this.postInteraction = interaction.encode();
        return this;
    }
    withCustomData(data) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexString"])(data), 'Custom data must be valid hex string');
        this.customData = data;
        return this;
    }
    build() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Extension"]({
            makerAssetSuffix: this.makerAssetSuffix,
            takerAssetSuffix: this.takerAssetSuffix,
            makingAmountData: this.makingAmountData,
            takingAmountData: this.takingAmountData,
            predicate: this.predicate,
            makerPermit: this.makerPermit,
            preInteraction: this.preInteraction,
            postInteraction: this.postInteraction,
            customData: this.customData
        });
    }
} //# sourceMappingURL=extension-builder.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/interaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Interaction": (()=>Interaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/node_modules/@1inch/byte-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/address.js [app-ssr] (ecmascript)");
;
;
;
class Interaction {
    constructor(target, data){
        this.target = target;
        this.data = data;
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexBytes"])(data), 'Interaction data must be valid hex bytes');
    }
    static decode(bytes) {
        const iter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytesIter"].HexString(bytes);
        return new Interaction(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](iter.nextUint160()), iter.rest());
    }
    encode() {
        return this.target.toString() + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim0x"])(this.data);
    }
} //# sourceMappingURL=interaction.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fee-taker.extension.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FeeTakerExtension": (()=>FeeTakerExtension)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/node_modules/@1inch/byte-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fees.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$resolver$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/resolver-fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$integrator$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/integrator-fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$whitelist$2d$half$2d$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/whitelist-half-address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fee$2d$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fee-calculator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$extension$2d$builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/extension-builder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$interaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/interaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/bps.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
class FeeTakerExtension {
    constructor(address, fees, whitelist, makerPermit, extraInteraction, customReceiver){
        this.address = address;
        this.fees = fees;
        this.whitelist = whitelist;
        this.makerPermit = makerPermit;
        this.extraInteraction = extraInteraction;
        this.customReceiver = customReceiver;
    }
    static new(address, fees, whitelist, extra) {
        return new FeeTakerExtension(address, fees, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$whitelist$2d$half$2d$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitelistHalfAddress"].new(whitelist || []), extra?.makerPermit, extra?.extraInteraction, extra?.customReceiver);
    }
    static decode(bytes) {
        const extension = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Extension"].decode(bytes);
        return FeeTakerExtension.fromExtension(extension);
    }
    static fromExtension(extension) {
        const extensionAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"].fromFirstBytes(extension.makingAmountData);
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"].fromFirstBytes(extension.takingAmountData).equal(extensionAddress) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"].fromFirstBytes(extension.postInteraction).equal(extensionAddress), 'Invalid extension, all calls should be to the same address');
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(extension.takingAmountData == extension.makingAmountData, 'Invalid extension, taking amount data must be equal to making amount data');
        const interactionBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytesIter"].HexString(extension.postInteraction);
        interactionBytes.nextUint160();
        const flags = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BN"].fromHex(interactionBytes.nextUint8());
        const integratorFeeRecipient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](interactionBytes.nextUint160());
        const protocolFeeRecipient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](interactionBytes.nextUint160());
        const customTokensRecipient = flags.getBit(FeeTakerExtension.CUSTOM_RECEIVER_FLAG_BIT) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](interactionBytes.nextUint160()) : undefined;
        const interactionData = parseAmountData(interactionBytes);
        const extraInteraction = interactionBytes.isEmpty() ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$interaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Interaction"].decode(interactionBytes.rest());
        const amountBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytesIter"].HexString(extension.makingAmountData);
        amountBytes.nextUint160();
        const amountData = parseAmountData(amountBytes);
        const permit = extension.hasMakerPermit ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$interaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Interaction"].decode(extension.makerPermit) : undefined;
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(amountData.fees.integratorFee.value === interactionData.fees.integratorFee.value, `invalid extension: integrator fee must be same in interaction data and in amount data`);
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(amountData.fees.resolverFee.value === interactionData.fees.resolverFee.value, `invalid extension: resolver fee must be same in interaction data and in amount data`);
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(amountData.whitelist.discount.value === interactionData.whitelist.discount.value, `invalid extension: whitelist discount fee must be same in interaction data and in amount data`);
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(amountData.fees.integratorShare.value === interactionData.fees.integratorShare.value, `invalid extension: integrator share must be same in interaction data and in amount data`);
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(interactionData.whitelist.addresses.length === amountData.whitelist.addresses.length, 'whitelist must be same in interaction data and in amount data');
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(interactionData.whitelist.addresses.every((val, i)=>amountData.whitelist.addresses[i] === val), 'whitelist must be same in interaction data and in amount data');
        return new FeeTakerExtension(extensionAddress, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"](amountData.fees.resolverFee.isZero() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$resolver$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResolverFee"].ZERO : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$resolver$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResolverFee"](protocolFeeRecipient, amountData.fees.resolverFee, amountData.whitelist.discount), amountData.fees.integratorFee.isZero() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$integrator$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntegratorFee"].ZERO : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$integrator$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntegratorFee"](integratorFeeRecipient, protocolFeeRecipient, amountData.fees.integratorFee, amountData.fees.integratorShare)), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$whitelist$2d$half$2d$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitelistHalfAddress"](amountData.whitelist.addresses), permit, extraInteraction, customTokensRecipient);
    }
    getFeeCalculator() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fee$2d$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCalculator"](this.fees, this.whitelist);
    }
    build() {
        const amountGetterData = this.buildAmountGetterData();
        const builder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$extension$2d$builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtensionBuilder"]().withMakingAmountData(this.address, amountGetterData).withTakingAmountData(this.address, amountGetterData).withPostInteraction(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$interaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Interaction"](this.address, this.buildInteractionData()));
        if (this.makerPermit) {
            builder.withMakerPermit(this.makerPermit.target, this.makerPermit.data);
        }
        return builder.build();
    }
    getTakingAmount(taker, takingAmount) {
        return this.getFeeCalculator().getTakingAmount(taker, takingAmount);
    }
    getMakingAmount(taker, makingAmount) {
        return this.getFeeCalculator().getMakingAmount(taker, makingAmount);
    }
    getResolverFee(taker, takingAmount) {
        return this.getFeeCalculator().getResolverFee(taker, takingAmount);
    }
    getIntegratorFee(taker, takingAmount) {
        return this.getFeeCalculator().getIntegratorFee(taker, takingAmount);
    }
    getProtocolShareOfIntegratorFee(taker, takingAmount) {
        return this.getFeeCalculator().getProtocolShareOfIntegratorFee(taker, takingAmount);
    }
    getProtocolFee(taker, takingAmount) {
        return this.getFeeCalculator().getProtocolFee(taker, takingAmount);
    }
    buildAmountGetterData() {
        const integrator = {
            fee: this.fees.integrator.fee.toFraction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5),
            share: this.fees.integrator.share.toFraction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E2)
        };
        const resolverFee = this.fees.resolver.fee.toFraction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5);
        const builder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytesBuilder"]().addUint16(BigInt(integrator.fee)).addUint8(BigInt(integrator.share)).addUint16(BigInt(resolverFee)).addUint8(BigInt(Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E2) - this.fees.resolver.whitelistDiscount.toFraction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E2)));
        this.whitelist.encodeTo(builder);
        return builder.asHex();
    }
    buildInteractionData() {
        const flags = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BN"](0n).setBit(FeeTakerExtension.CUSTOM_RECEIVER_FLAG_BIT, Boolean(this.customReceiver));
        const builder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytesBuilder"]().addUint8(flags).addAddress(this.fees.integrator.integrator.toString()).addAddress(this.fees.protocol.toString());
        if (this.customReceiver) {
            builder.addAddress(this.customReceiver.toString());
        }
        builder.addBytes(this.buildAmountGetterData());
        if (this.extraInteraction) {
            builder.addAddress(this.extraInteraction.target.toString()).addBytes(this.extraInteraction.data);
        }
        return builder.asHex();
    }
}
FeeTakerExtension.CUSTOM_RECEIVER_FLAG_BIT = 0n;
function parseAmountData(iter) {
    const fees = {
        integratorFee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bps"].fromFraction(Number(iter.nextUint16()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5),
        integratorShare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bps"].fromFraction(Number(iter.nextUint8()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E2),
        resolverFee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bps"].fromFraction(Number(iter.nextUint16()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E5)
    };
    const whitelistDiscount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bps"].fromFraction(Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E2) - Number(iter.nextUint8()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fees"].BASE_1E2);
    const whitelistAddresses = [];
    const whitelistFromAmountSize = Number(iter.nextUint8());
    for(let i = 0; i < whitelistFromAmountSize; i++){
        whitelistAddresses.push(iter.nextBytes(10));
    }
    return {
        fees,
        whitelist: {
            discount: whitelistDiscount,
            addresses: whitelistAddresses
        }
    };
} //# sourceMappingURL=fee-taker.extension.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/amounts.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "calcMakingAmount": (()=>calcMakingAmount),
    "calcTakingAmount": (()=>calcTakingAmount)
});
function calcTakingAmount(swapMakerAmount, orderMakerAmount, orderTakerAmount) {
    return (swapMakerAmount * orderTakerAmount + orderMakerAmount - 1n) / orderMakerAmount;
}
function calcMakingAmount(swapTakerAmount, orderMakerAmount, orderTakerAmount) {
    return swapTakerAmount * orderMakerAmount / orderTakerAmount;
} //# sourceMappingURL=amounts.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/limit-order-with-fee.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LimitOrderWithFee": (()=>LimitOrderWithFee)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/node_modules/@1inch/byte-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fee$2d$taker$2e$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fee-taker.extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$limit$2d$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/limit-order.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$maker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/maker-traits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$amounts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/amounts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$rand$2d$bigint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/utils/rand-bigint.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
class LimitOrderWithFee extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$limit$2d$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LimitOrder"] {
    constructor(orderInfo, makerTraits = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$maker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MakerTraits"](0n), feeExtension){
        makerTraits.enablePostInteraction();
        super({
            ...orderInfo,
            receiver: feeExtension.address
        }, makerTraits, feeExtension.build());
        this.feeExtension = feeExtension;
    }
    static withRandomNonce(orderInfo, feeExtension, makerTraits = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$maker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MakerTraits"](0n)) {
        makerTraits.withNonce((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$rand$2d$bigint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randBigInt"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UINT_40_MAX"]));
        return new LimitOrderWithFee(orderInfo, makerTraits, feeExtension);
    }
    static fromDataAndExtension(data, extension) {
        const makerTraits = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$maker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MakerTraits"](BigInt(data.makerTraits));
        const feeExt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fee$2d$taker$2e$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeTakerExtension"].fromExtension(extension);
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])(feeExt.address.equal(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](data.receiver)), `invalid order: receiver must be FeeTaker extension address`);
        return new LimitOrderWithFee({
            salt: BigInt(data.salt),
            maker: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](data.maker),
            makerAsset: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](data.makerAsset),
            takerAsset: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"](data.takerAsset),
            makingAmount: BigInt(data.makingAmount),
            takingAmount: BigInt(data.takingAmount)
        }, makerTraits, feeExt);
    }
    getTakingAmount(taker, makingAmount = this.makingAmount) {
        const takingAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$amounts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcTakingAmount"])(makingAmount, this.makingAmount, this.takingAmount);
        return this.feeExtension.getTakingAmount(taker, takingAmount);
    }
    getMakingAmount(taker, takingAmount = this.takingAmount) {
        const makingAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$amounts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcMakingAmount"])(takingAmount, this.makingAmount, this.takingAmount);
        return this.feeExtension.getMakingAmount(taker, makingAmount);
    }
    getResolverFee(taker, makingAmount = this.makingAmount) {
        const takingAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$amounts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcTakingAmount"])(makingAmount, this.makingAmount, this.takingAmount);
        return this.feeExtension.getResolverFee(taker, takingAmount);
    }
    getIntegratorFee(taker, makingAmount = this.makingAmount) {
        const takingAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$amounts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcTakingAmount"])(makingAmount, this.makingAmount, this.takingAmount);
        return this.feeExtension.getIntegratorFee(taker, takingAmount);
    }
    getProtocolFee(taker, makingAmount = this.makingAmount) {
        const takingAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$amounts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcTakingAmount"])(makingAmount, this.makingAmount, this.takingAmount);
        return this.feeExtension.getProtocolFee(taker, takingAmount);
    }
} //# sourceMappingURL=limit-order-with-fee.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/taker-traits.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AmountMode": (()=>AmountMode),
    "TakerTraits": (()=>TakerTraits)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/node_modules/@1inch/byte-utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/constants.js [app-ssr] (ecmascript)");
;
;
var AmountMode;
(function(AmountMode) {
    AmountMode[AmountMode["taker"] = 0] = "taker";
    AmountMode[AmountMode["maker"] = 1] = "maker";
})(AmountMode || (AmountMode = {}));
class TakerTraits {
    constructor(flag, data){
        this.flags = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BN"](flag);
        this.receiver = data.receiver;
        this.extension = data.extension;
        this.interaction = data.interaction;
    }
    static default() {
        return new TakerTraits(0n, {});
    }
    getAmountMode() {
        return this.flags.getBit(TakerTraits.MAKER_AMOUNT_FLAG);
    }
    setAmountMode(mode) {
        this.flags = this.flags.setBit(TakerTraits.MAKER_AMOUNT_FLAG, mode);
        return this;
    }
    isNativeUnwrapEnabled() {
        return this.flags.getBit(TakerTraits.UNWRAP_WETH_FLAG) === 1;
    }
    enableNativeUnwrap() {
        this.flags = this.flags.setBit(TakerTraits.UNWRAP_WETH_FLAG, 1);
        return this;
    }
    disableNativeUnwrap() {
        this.flags = this.flags.setBit(TakerTraits.UNWRAP_WETH_FLAG, 0);
        return this;
    }
    isOrderPermitSkipped() {
        return Boolean(this.flags.getBit(TakerTraits.SKIP_ORDER_PERMIT_FLAG));
    }
    skipOrderPermit() {
        this.flags = this.flags.setBit(TakerTraits.SKIP_ORDER_PERMIT_FLAG, 1);
        return this;
    }
    isPermit2Enabled() {
        return this.flags.getBit(TakerTraits.USE_PERMIT2_FLAG) === 1;
    }
    enablePermit2() {
        this.flags = this.flags.setBit(TakerTraits.USE_PERMIT2_FLAG, 1);
        return this;
    }
    disablePermit2() {
        this.flags = this.flags.setBit(TakerTraits.USE_PERMIT2_FLAG, 0);
        return this;
    }
    setReceiver(receiver) {
        this.receiver = receiver;
        return this;
    }
    removeReceiver() {
        this.receiver = undefined;
        return this;
    }
    setExtension(ext) {
        this.extension = ext;
        return this;
    }
    removeExtension() {
        this.extension = undefined;
        return this;
    }
    setAmountThreshold(threshold) {
        this.flags = this.flags.setMask(TakerTraits.THRESHOLD_MASK, threshold);
        return this;
    }
    getAmountThreshold() {
        return this.flags.getMask(TakerTraits.THRESHOLD_MASK).value;
    }
    removeAmountThreshold() {
        this.flags = this.flags.setMask(TakerTraits.THRESHOLD_MASK, 0n);
        return this;
    }
    setInteraction(interaction) {
        this.interaction = interaction;
        return this;
    }
    removeInteraction() {
        this.interaction = undefined;
        return this;
    }
    encode() {
        const extensionLen = this.extension ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesCount"])(this.extension.encode()) : 0n;
        const interactionLen = this.interaction ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesCount"])(this.interaction.encode()) : 0n;
        const flags = this.flags.setBit(TakerTraits.ARGS_HAS_RECEIVER, this.receiver ? 1 : 0).setMask(TakerTraits.ARGS_EXTENSION_LENGTH_MASK, extensionLen).setMask(TakerTraits.ARGS_INTERACTION_LENGTH_MASK, interactionLen);
        const args = (this.receiver?.toString() || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZX"]) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim0x"])(this.extension?.encode() || '') + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim0x"])(this.interaction?.encode() || '');
        return {
            trait: flags.value,
            args
        };
    }
}
TakerTraits.MAKER_AMOUNT_FLAG = 255n;
TakerTraits.UNWRAP_WETH_FLAG = 254n;
TakerTraits.SKIP_ORDER_PERMIT_FLAG = 253n;
TakerTraits.USE_PERMIT2_FLAG = 252n;
TakerTraits.ARGS_HAS_RECEIVER = 251n;
TakerTraits.THRESHOLD_MASK = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BitMask"](0n, 185n);
TakerTraits.ARGS_INTERACTION_LENGTH_MASK = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BitMask"](200n, 224n);
TakerTraits.ARGS_EXTENSION_LENGTH_MASK = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$node_modules$2f40$1inch$2f$byte$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BitMask"](224n, 248n); //# sourceMappingURL=taker-traits.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/types.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
 //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fee$2d$taker$2e$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fee-taker.extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fees.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$integrator$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/integrator-fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$resolver$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/resolver-fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fee$2d$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fee-calculator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$whitelist$2d$half$2d$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/whitelist-half-address.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fee$2d$taker$2e$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fee-taker.extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fees.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$integrator$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/integrator-fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$resolver$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/resolver-fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$fee$2d$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/fee-calculator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$whitelist$2d$half$2d$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/whitelist-half-address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$extension$2d$builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/extension-builder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/index.js [app-ssr] (ecmascript) <module evaluation>"); //# sourceMappingURL=index.js.map
;
;
;
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$extension$2d$builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/extension-builder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$fee$2d$taker$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/fee-taker/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/types.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
 //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$limit$2d$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/limit-order.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$limit$2d$order$2d$with$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/limit-order-with-fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$maker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/maker-traits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$taker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/taker-traits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$interaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/interaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$amounts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/amounts.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$eip712$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/eip712/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$limit$2d$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/limit-order.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$limit$2d$order$2d$with$2d$fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/limit-order-with-fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$maker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/maker-traits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$taker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/taker-traits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$extensions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/extensions/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$interaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/interaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$amounts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/amounts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/rfq-order/rfq-order.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RfqOrder": (()=>RfqOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$limit$2d$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/limit-order.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$maker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/maker-traits.js [app-ssr] (ecmascript)");
;
class RfqOrder extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$limit$2d$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LimitOrder"] {
    constructor(orderInfo, options){
        const { allowedSender, nonce, expiration, usePermit2 } = options;
        const makerTraits = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$maker$2d$traits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MakerTraits"](0n).disableMultipleFills().allowPartialFills().withExpiration(expiration).withNonce(nonce);
        if (allowedSender) {
            makerTraits.withAllowedSender(allowedSender);
        }
        if (usePermit2) {
            makerTraits.enablePermit2();
        }
        super(orderInfo, makerTraits);
    }
} //# sourceMappingURL=rfq-order.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/rfq-order/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$rfq$2d$order$2f$rfq$2d$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/rfq-order/rfq-order.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/rfq-order/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$rfq$2d$order$2f$rfq$2d$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/rfq-order/rfq-order.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$rfq$2d$order$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/rfq-order/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/constants.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEV_PORTAL_LIMIT_ORDER_BASE_URL": (()=>DEV_PORTAL_LIMIT_ORDER_BASE_URL)
});
const DEV_PORTAL_LIMIT_ORDER_BASE_URL = 'https://api.1inch.dev/orderbook/v4.0'; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/api.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Api": (()=>Api)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/constants.js [app-ssr] (ecmascript)");
;
class Api {
    constructor(config){
        this.baseUrl = config.baseUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEV_PORTAL_LIMIT_ORDER_BASE_URL"];
        this.networkId = config.networkId;
        this.httpClient = config.httpConnector;
        this.authHeader = `Bearer ${config.authKey}`;
    }
    async submitOrder(order, signature) {
        await this.httpClient.post(this.url('/'), {
            orderHash: order.getOrderHash(this.networkId),
            signature,
            data: {
                ...order.build(),
                extension: order.extension.encode()
            }
        }, this.headers());
    }
    async getOrdersByMaker(maker, filters, sort) {
        const params = {
            limit: filters?.pager?.limit.toString(),
            page: filters?.pager?.page.toString(),
            statuses: filters?.statuses?.join(','),
            makerAsset: filters?.makerAsset?.toString(),
            takerAsset: filters?.takerAsset?.toString(),
            sortBy: sort
        };
        return this.httpClient.get(this.url(`/address/${maker}`, params), this.headers());
    }
    async getOrderByHash(hash) {
        return this.httpClient.get(this.url(`/order/${hash}`), this.headers());
    }
    url(path, params) {
        const query = params ? `?${new URLSearchParams(Object.entries(params).filter(([_, val])=>val !== undefined))}` : '';
        return `${this.baseUrl}/${this.networkId}${path}${query}`;
    }
    headers(additional) {
        return {
            Authorization: this.authHeader,
            ...additional
        };
    }
} //# sourceMappingURL=api.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthError": (()=>AuthError)
});
class AuthError extends Error {
    constructor(){
        super('Auth error, please use token from https://portal.1inch.dev/');
    }
} //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/validations.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isInt": (()=>isInt)
});
function isInt(val) {
    return Math.floor(val) === val;
} //# sourceMappingURL=validations.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/pager.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Pager": (()=>Pager)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/assert [external] (assert, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$validations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/validations.js [app-ssr] (ecmascript)");
;
;
class Pager {
    constructor({ limit, page } = {
        page: 1,
        limit: 100
    }){
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$validations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInt"])(limit) && limit > 0, 'Invalid limit');
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$assert__$5b$external$5d$__$28$assert$2c$__cjs$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$validations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInt"])(page) && page > 0, 'Invalid page');
        this.limit = limit;
        this.page = page;
    }
} //# sourceMappingURL=pager.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/types.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
 //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/connector/http/http-provider.connector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
 //# sourceMappingURL=http-provider.connector.js.map
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$pager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/pager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$connector$2f$http$2f$http$2d$provider$2e$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/connector/http/http-provider.connector.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$pager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/pager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$connector$2f$http$2f$http$2d$provider$2e$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/connector/http/http-provider.connector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2d$contract$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order-contract/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$rfq$2d$order$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/rfq-order/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/bps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$rand$2d$bigint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/utils/rand-bigint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$mul$2d$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/utils/mul-div.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/index.js [app-ssr] (ecmascript) <module evaluation>"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2d$contract$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order-contract/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$limit$2d$order$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/limit-order/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$rfq$2d$order$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/rfq-order/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$bps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/bps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$rand$2d$bigint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/utils/rand-bigint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$utils$2f$mul$2d$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/utils/mul-div.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$api$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/api/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$1inch$2f$fusion$2d$sdk$2f$node_modules$2f40$1inch$2f$limit$2d$order$2d$sdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@1inch/fusion-sdk/node_modules/@1inch/limit-order-sdk/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=c964f_%401inch_limit-order-sdk_dist_esm_30290340._.js.map