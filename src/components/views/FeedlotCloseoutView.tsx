import React, { useState } from 'react';
import { CalculatorDisclaimer } from '../disclaimer/CalculatorDisclaimer';

export function FeedlotCloseoutView() {
  const [purchaseWeight, setPurchaseWeight] = useState(750);
  const [purchasePricePerCwt, setPurchasePricePerCwt] = useState(180);
  
  const [daysOnFeed, setDaysOnFeed] = useState(150);
  const [adg, setAdg] = useState(3.2); // Average Daily Gain
  const [feedConversion, setFeedConversion] = useState(6.5); // lbs of feed per lb of gain
  const [feedCostPerTon, setFeedCostPerTon] = useState(250); // Dry matter basis
  
  const [yardagePerDay, setYardagePerDay] = useState(0.45);
  const [interestPerHead, setInterestPerHead] = useState(25);
  const [vetCosts, setVetCosts] = useState(15);
  const [deathLossPercent, setDeathLossPercent] = useState(1.5);
  
  const [salePricePerCwt, setSalePricePerCwt] = useState(165);
  const [saleWeight, setSaleWeight] = useState(1350); // Though ADG * daysOnFeed + purchaseWeight could determine this, we allow override

  // Calculations
  const purchaseCost = (purchaseWeight / 100) * purchasePricePerCwt;
  
  // Total gain based on days and ADG
  const totalGain = daysOnFeed * adg;
  const estimatedFinalWeight = purchaseWeight + totalGain;
  
  // Actually, we'll use the user's sale weight for revenue, but let's show the estimated final weight.
  
  const totalFeedRequiredLbs = totalGain * feedConversion;
  const feedCostPerLb = feedCostPerTon / 2000;
  const totalFeedCost = totalFeedRequiredLbs * feedCostPerLb;
  
  const totalYardage = daysOnFeed * yardagePerDay;
  const totalOperatingCosts = totalFeedCost + totalYardage + vetCosts + interestPerHead;
  
  const totalCost = purchaseCost + totalOperatingCosts;
  
  // Adjust revenue for death loss
  const effectiveSaleWeight = saleWeight * (1 - (deathLossPercent / 100));
  const revenuePerHead = (effectiveSaleWeight / 100) * salePricePerCwt;
  
  const netReturn = revenuePerHead - totalCost;
  const costOfGain = totalGain > 0 ? totalOperatingCosts / totalGain : 0;
  
  const breakevenSalePrice = effectiveSaleWeight > 0 ? (totalCost / effectiveSaleWeight) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-800 rounded">FEEDLOT CLOSEOUT</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Feedlot Closeout Calculator</h1>
        <p className="text-gray-500 mt-2">Analyzes the final financial performance of a finished pen of cattle at the end of the feeding period.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Purchase Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Purchase & Setup</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Purchase Wt (lbs)</label>
                <input type="number" value={purchaseWeight} onChange={(e) => setPurchaseWeight(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Purchase Price ($/cwt)</label>
                <input type="number" value={purchasePricePerCwt} onChange={(e) => setPurchasePricePerCwt(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Days on Feed</label>
                <input type="number" value={daysOnFeed} onChange={(e) => setDaysOnFeed(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">ADG (lbs/day)</label>
                <input type="number" value={adg} onChange={(e) => setAdg(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Death Loss (%)</label>
              <input type="number" value={deathLossPercent} onChange={(e) => setDeathLossPercent(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
          </div>

          {/* Operating & Feed */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Feed & Operating</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Feed Conversion</label>
                <input type="number" value={feedConversion} onChange={(e) => setFeedConversion(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Feed Cost ($/Ton)</label>
                <input type="number" value={feedCostPerTon} onChange={(e) => setFeedCostPerTon(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Yardage ($/day)</label>
                <input type="number" value={yardagePerDay} onChange={(e) => setYardagePerDay(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Interest ($/hd)</label>
                <input type="number" value={interestPerHead} onChange={(e) => setInterestPerHead(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Veterinary ($/hd)</label>
              <input type="number" value={vetCosts} onChange={(e) => setVetCosts(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
          </div>

          {/* Revenue */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Sale Assumptions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Sale Weight (lbs) <span className="text-xs text-gray-500">(Est final: {estimatedFinalWeight.toFixed(0)})</span></label>
                <input type="number" value={saleWeight} onChange={(e) => setSaleWeight(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Sale Price ($/cwt)</label>
                <input type="number" value={salePricePerCwt} onChange={(e) => setSalePricePerCwt(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className={`border rounded-lg p-6 flex flex-col items-center justify-center mb-6 ${netReturn >= 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Net Return (Per Head)</span>
               <span className={`text-3xl font-black ${netReturn >= 0 ? 'text-green-700' : 'text-red-700'}`}>${netReturn.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Cost of Gain (COG)</span>
               <span className="text-2xl font-black text-slate-900">${costOfGain.toLocaleString(undefined, {maximumFractionDigits: 2})} /lb</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Breakeven Sale Price</span>
               <span className="text-2xl font-black text-slate-900">${breakevenSalePrice.toLocaleString(undefined, {maximumFractionDigits: 2})} /cwt</span>
            </div>
          </div>
          <div className="w-full mt-4 flex justify-between text-sm text-slate-600 px-2">
             <span>Initial Cost: ${(purchaseCost).toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
             <span>Operating Cost: ${(totalOperatingCosts).toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
             <span>Total Cost: ${(totalCost).toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
          </div>
        </div>

        <CalculatorDisclaimer toolSpecificNotice="Actual closeout figures may vary based on exact animal performance and local basis." />
      </div>
    </div>
  );
}
