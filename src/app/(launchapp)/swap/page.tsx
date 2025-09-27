export default function SwapPage() {
  return (
    <div className="space-y-6">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-purple-900 mb-4">Currency & Token Swap</h2>
        <p className="text-purple-700 mb-4">
          Exchange currencies and tokens with competitive rates and low fees.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-gray-900 mb-2">Currency Exchange</h3>
            <p className="text-gray-600 text-sm">Swap between different currencies</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-gray-900 mb-2">Token Trading</h3>
            <p className="text-gray-600 text-sm">Exchange cryptocurrency tokens</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-gray-900 mb-2">Rate Monitor</h3>
            <p className="text-gray-600 text-sm">Track real-time exchange rates</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-gray-900 mb-2">Swap History</h3>
            <p className="text-gray-600 text-sm">View your exchange history</p>
          </div>
        </div>
      </div>
    </div>
  );
}