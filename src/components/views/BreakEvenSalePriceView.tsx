import React, { useState } from 'react';
import { CalculatorDisclaimer } from '../disclaimer/CalculatorDisclaimer';

export function BreakEvenSalePriceView() {
  const [purchaseCost, setPurchaseCost] = useState(1350); // Total cost to buy the feeder
  const [feedingCosts, setFeedingCosts] = useState(500); // All-in feed and yardage
  const [vetCosts, setVetCosts] = useState(25);
  const [interestCosts, setInterestCosts] = useState(35);
  const [projectedSaleWeight, setProjectedSaleWeight] = useState(1400); // lbs
  const [deathLossPercent, setDeathLossPercent] = useState(1.5);
  
  const totalCost = purchaseCost + feedingCosts + vetCosts + interestCosts;
  const effectiveSaleWeight = projectedSaleWeight * (1 - (deathLossPercent / 100));
  
  const breakevenCwt = effectiveSaleWeight > 0 ? (totalCost / effectiveSaleWeight) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-800 rounded">BREAK-EVEN PRICE</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Break-Even Sale Price Calculator</h1>
        <p className="text-gray-500 mt-2">Determines the minimum sale price (per hundredweight) needed to cover all rearing and feeding expenses.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Costs Per Head ($)</h3>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Purchase Cost</label>
              <input type="number" value={purchaseCost} onChange={(e) => setPurchaseCost(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">All-in Feeding & Yardage</label>
              <input type="number" value={feedingCosts} onChange={(e) => setFeedingCosts(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Health & Veterinary</label>
              <input type="number" value={vetCosts} onChange={(e) => setVetCosts(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Interest / Financing</label>
              <input type="number" value={interestCosts} onChange={(e) => setInterestCosts(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Sale Assumptions</h3>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Projected Sale Weight (lbs)</label>
              <input type="number" value={projectedSaleWeight} onChange={(e) => setProjectedSaleWeight(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Death Loss (%)</label>
              <input type="number" value={deathLossPercent} onChange={(e) => setDeathLossPercent(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            
            <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded">
               <div className="text-sm text-slate-600 mb-1">Total All-In Cost Per Head</div>
               <div className="text-xl font-bold text-slate-900">${totalCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
            </div>
          </div>

        </div>

        {/* Results Panel */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 flex flex-col items-center justify-center mb-6">
          <div className="w-full text-center">
             <span className="block text-sm font-bold text-slate-400 uppercase mb-2 tracking-wider">Break-Even Sale Price</span>
             <span className="text-5xl font-black text-white">${breakevenCwt.toLocaleString(undefined, {maximumFractionDigits: 2})} <span className="text-2xl text-slate-400">/ cwt</span></span>
             <p className="text-slate-400 mt-4 text-sm max-w-lg mx-auto">This is the minimum market price you must receive to exactly cover your total investment of ${totalCost.toLocaleString()} per head (accounting for a {deathLossPercent}% death loss).</p>
          </div>
        </div>

        <CalculatorDisclaimer toolSpecificNotice="Future market prices are not guaranteed." />
      </div>
    </div>
  );
}
