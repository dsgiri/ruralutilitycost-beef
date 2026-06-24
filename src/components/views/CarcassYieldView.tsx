import React, { useState } from 'react';
import { CalculatorDisclaimer } from '../disclaimer/CalculatorDisclaimer';

export function CarcassYieldView() {
  const [liveWeight, setLiveWeight] = useState(1350);
  const [dressingPercent, setDressingPercent] = useState(62);
  const [retailYieldPercent, setRetailYieldPercent] = useState(65); // Of the hot carcass weight

  const hotCarcassWeight = liveWeight * (dressingPercent / 100);
  const totalRetailBeef = hotCarcassWeight * (retailYieldPercent / 100);
  const fatAndBoneLoss = hotCarcassWeight - totalRetailBeef;

  // Approximate primal breakdown of the retail beef (standard industry averages)
  const chuck = totalRetailBeef * 0.29;
  const round = totalRetailBeef * 0.22;
  const loin = totalRetailBeef * 0.16;
  const rib = totalRetailBeef * 0.11;
  const brisketFlankPlate = totalRetailBeef * 0.22; // The rest

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-800 rounded">YIELD & CARCASS</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Carcass Yield Estimator</h1>
        <p className="text-gray-500 mt-2">Forecasts hanging weight and retail cut yields based on live animal weight.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Animal Specs</h3>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Live Animal Weight (lbs)</label>
              <input type="number" value={liveWeight} onChange={(e) => setLiveWeight(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Dressing Percentage (%) <span className="font-normal text-xs text-gray-500">(Typical 58-63%)</span></label>
              <input type="number" value={dressingPercent} onChange={(e) => setDressingPercent(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Retail Cutting Yield (%) <span className="font-normal text-xs text-gray-500">(Of hanging weight, typically 60-65%)</span></label>
              <input type="number" value={retailYieldPercent} onChange={(e) => setRetailYieldPercent(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Weight Progression</h3>
            <div className="space-y-3">
               <div className="flex justify-between items-center bg-slate-50 p-3 rounded border border-slate-200">
                  <span className="font-medium text-slate-700">Live Weight</span>
                  <span className="font-bold text-slate-900">{liveWeight.toFixed(0)} lbs</span>
               </div>
               <div className="flex justify-center text-slate-400">↓ Drop: {(liveWeight - hotCarcassWeight).toFixed(0)} lbs (Hide, head, internal organs)</div>
               <div className="flex justify-between items-center bg-slate-100 p-3 rounded border border-slate-300">
                  <span className="font-medium text-slate-800">Hot Carcass (Hanging)</span>
                  <span className="font-bold text-slate-900">{hotCarcassWeight.toFixed(0)} lbs</span>
               </div>
               <div className="flex justify-center text-slate-400">↓ Trim: {fatAndBoneLoss.toFixed(0)} lbs (Fat, bone, moisture loss)</div>
               <div className="flex justify-between items-center bg-blue-50 p-3 rounded border border-blue-200">
                  <span className="font-bold text-blue-900">Total Retail Beef</span>
                  <span className="font-black text-blue-900">{totalRetailBeef.toFixed(0)} lbs</span>
               </div>
            </div>
          </div>

        </div>

        {/* Primal Breakdown */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 text-center">Estimated Primal Yield (lbs)</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="p-3 bg-slate-50 rounded">
               <span className="block text-xs font-semibold text-slate-500 uppercase mb-1">Chuck (29%)</span>
               <span className="text-xl font-bold text-slate-900">{chuck.toFixed(0)}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded">
               <span className="block text-xs font-semibold text-slate-500 uppercase mb-1">Round (22%)</span>
               <span className="text-xl font-bold text-slate-900">{round.toFixed(0)}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded">
               <span className="block text-xs font-semibold text-slate-500 uppercase mb-1">Loin (16%)</span>
               <span className="text-xl font-bold text-slate-900">{loin.toFixed(0)}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded">
               <span className="block text-xs font-semibold text-slate-500 uppercase mb-1">Rib (11%)</span>
               <span className="text-xl font-bold text-slate-900">{rib.toFixed(0)}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded">
               <span className="block text-xs font-semibold text-slate-500 uppercase mb-1">Other (22%)</span>
               <span className="text-xl font-bold text-slate-900">{brisketFlankPlate.toFixed(0)}</span>
            </div>
          </div>
        </div>

        <CalculatorDisclaimer toolSpecificNotice="Actual yields depend heavily on individual animal genetics and processor methods." />
      </div>
    </div>
  );
}
