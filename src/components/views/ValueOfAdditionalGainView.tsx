import React, { useState } from 'react';
import { CalculatorDisclaimer } from '../disclaimer/CalculatorDisclaimer';

export function ValueOfAdditionalGainView() {
  const [currentWeight, setCurrentWeight] = useState(700);
  const [currentPriceCwt, setCurrentPriceCwt] = useState(240);
  
  const [targetWeight, setTargetWeight] = useState(850);
  const [projectedPriceCwt, setProjectedPriceCwt] = useState(215); // Note price slide on heavier weights
  
  const [costOfGain, setCostOfGain] = useState(1.10); // $/lb of gain
  const [daysRequired, setDaysRequired] = useState(60);
  const [carryingCostPerDay, setCarryingCostPerDay] = useState(0.45); // yardage/interest

  const currentRevenue = (currentWeight / 100) * currentPriceCwt;
  const projectedRevenue = (targetWeight / 100) * projectedPriceCwt;
  
  const revenueGained = projectedRevenue - currentRevenue;
  
  const poundsGained = targetWeight - currentWeight;
  const feedCost = poundsGained * costOfGain;
  const carryingCost = daysRequired * carryingCostPerDay;
  const totalCostOfAdditionalGain = feedCost + carryingCost;
  
  const netValueOfGain = revenueGained - totalCostOfAdditionalGain;
  const breakevenCostOfGain = poundsGained > 0 ? revenueGained / poundsGained : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-800 rounded">ENTERPRISE ANALYSIS</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Value of Additional Gain</h1>
        <p className="text-gray-500 mt-2">Helps producers decide whether feeding cattle to a heavier final weight is economically justified.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Current State (Sell Now)</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Current Wt (lbs)</label>
                <input type="number" value={currentWeight} onChange={(e) => setCurrentWeight(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Price ($/cwt)</label>
                <input type="number" value={currentPriceCwt} onChange={(e) => setCurrentPriceCwt(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded mt-2">
              <span className="block text-xs font-bold text-slate-500 uppercase">Current Value</span>
              <span className="text-xl font-bold text-slate-900">${currentRevenue.toLocaleString(undefined, {maximumFractionDigits: 2})} /hd</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Future State (Keep Feeding)</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Target Wt (lbs)</label>
                <input type="number" value={targetWeight} onChange={(e) => setTargetWeight(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Proj. Price ($/cwt)</label>
                <input type="number" value={projectedPriceCwt} onChange={(e) => setProjectedPriceCwt(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded mt-2">
              <span className="block text-xs font-bold text-slate-500 uppercase">Projected Value</span>
              <span className="text-xl font-bold text-slate-900">${projectedRevenue.toLocaleString(undefined, {maximumFractionDigits: 2})} /hd</span>
            </div>
          </div>

          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Cost to Add Gain</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Cost of Gain ($/lb)</label>
                <input type="number" value={costOfGain} onChange={(e) => setCostOfGain(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Days Required</label>
                <input type="number" value={daysRequired} onChange={(e) => setDaysRequired(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Carrying Cost ($/day)</label>
                <input type="number" value={carryingCostPerDay} onChange={(e) => setCarryingCostPerDay(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
            </div>
          </div>

        </div>

        {/* Results Panel */}
        <div className={`border rounded-lg p-6 flex flex-col items-center justify-center mb-6 ${netValueOfGain >= 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Value of Added Weight</span>
               <span className="text-2xl font-black text-slate-900">${revenueGained.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Cost to Add Weight</span>
               <span className="text-2xl font-black text-slate-900">${totalCostOfAdditionalGain.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm border-2 border-slate-900">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Net Value of Gain</span>
               <span className={`text-2xl font-black ${netValueOfGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>${netValueOfGain.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center">
             <span className="text-sm text-slate-600 mb-2">Maximum you can spend per lb of gain to breakeven:</span>
             <span className="text-xl font-bold text-slate-800">${breakevenCostOfGain.toLocaleString(undefined, {maximumFractionDigits: 2})} / lb</span>
          </div>
        </div>

        <CalculatorDisclaimer toolSpecificNotice="Additional feeding days carry increased health and market risks." />
      </div>
    </div>
  );
}
