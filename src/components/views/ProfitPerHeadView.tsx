import React, { useState } from 'react';
import { CalculatorDisclaimer } from '../disclaimer/CalculatorDisclaimer';

export function ProfitPerHeadView() {
  const [marketPrice, setMarketPrice] = useState(170); // $/cwt
  const [saleWeight, setSaleWeight] = useState(1400); // lbs
  const [totalCost, setTotalCost] = useState(2100); // $/head
  const [marketingFees, setMarketingFees] = useState(45); // $/head (trucking, commission, etc)

  const grossRevenue = (saleWeight / 100) * marketPrice;
  const netRevenue = grossRevenue - marketingFees;
  const expectedMargin = netRevenue - totalCost;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-800 rounded">PROFITABILITY</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Profit per Head Estimator</h1>
        <p className="text-gray-500 mt-2">Quickly estimates potential profit margins by comparing current market price against estimated production costs.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Revenue Assumptions</h3>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Expected Sale Weight (lbs)</label>
              <input type="number" value={saleWeight} onChange={(e) => setSaleWeight(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Current Market Price ($/cwt)</label>
              <input type="number" value={marketPrice} onChange={(e) => setMarketPrice(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Cost Assumptions</h3>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Estimated Total Cost ($/head)</label>
              <input type="number" value={totalCost} onChange={(e) => setTotalCost(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Trucking & Marketing Fees ($/head)</label>
              <input type="number" value={marketingFees} onChange={(e) => setMarketingFees(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
          </div>

        </div>

        {/* Results Panel */}
        <div className={`border rounded-lg p-6 flex flex-col items-center justify-center mb-6 ${expectedMargin >= 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Gross Revenue</span>
               <span className="text-2xl font-black text-slate-900">${grossRevenue.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Total Deductions</span>
               <span className="text-2xl font-black text-slate-900">${(totalCost + marketingFees).toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm border-2 border-slate-900">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Expected Margin</span>
               <span className={`text-2xl font-black ${expectedMargin >= 0 ? 'text-green-600' : 'text-red-600'}`}>${expectedMargin.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
          </div>
          <div className="mt-4 text-center w-full">
            {expectedMargin >= 0 ? (
               <span className="inline-block px-4 py-1 bg-green-200 text-green-800 rounded-full text-sm font-bold tracking-wide uppercase">Profitable</span>
            ) : (
               <span className="inline-block px-4 py-1 bg-red-200 text-red-800 rounded-full text-sm font-bold tracking-wide uppercase">Operating at a Loss</span>
            )}
          </div>
        </div>

        <CalculatorDisclaimer toolSpecificNotice="Estimates are for planning purposes and do not guarantee future profitability." />
      </div>
    </div>
  );
}
