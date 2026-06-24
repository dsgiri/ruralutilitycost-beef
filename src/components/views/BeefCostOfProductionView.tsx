import React, { useState } from 'react';
import { CalculatorDisclaimer } from '../disclaimer/CalculatorDisclaimer';

export function BeefCostOfProductionView() {
  const [herdSize, setHerdSize] = useState(100);
  const [calfCropPercent, setCalfCropPercent] = useState(85);
  const [calfWeaningWeight, setCalfWeaningWeight] = useState(550);
  
  // Variable Costs (per head typically, but let's do total for simplicity or per head)
  const [feedCosts, setFeedCosts] = useState(15000); // Total
  const [pastureCosts, setPastureCosts] = useState(8000); // Total
  const [vetCosts, setVetCosts] = useState(2500); // Total
  const [breedingCosts, setBreedingCosts] = useState(3000); // Total
  const [operatingInterest, setOperatingInterest] = useState(1200); // Total
  
  // Fixed Costs
  const [laborCosts, setLaborCosts] = useState(10000); // Total
  const [equipmentDepreciation, setEquipmentDepreciation] = useState(6000); // Total
  
  const [deathLossPercent, setDeathLossPercent] = useState(2);

  const totalVariableCosts = feedCosts + pastureCosts + vetCosts + breedingCosts + operatingInterest;
  const totalFixedCosts = laborCosts + equipmentDepreciation;
  const totalCost = totalVariableCosts + totalFixedCosts;

  const costPerCow = herdSize > 0 ? totalCost / herdSize : 0;
  
  const calvesWeaned = herdSize * (calfCropPercent / 100) * (1 - (deathLossPercent / 100));
  const costPerCalf = calvesWeaned > 0 ? totalCost / calvesWeaned : 0;
  
  const totalCalfWeight = calvesWeaned * calfWeaningWeight;
  const costPerPound = totalCalfWeight > 0 ? totalCost / totalCalfWeight : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-800 rounded">COST OF PRODUCTION</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Beef Cost of Production Calculator</h1>
        <p className="text-gray-500 mt-2">Estimates total and per-head costs for cow-calf or backgrounding operations.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Production Metrics */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Production Metrics</h3>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Herd Size (Number of Cows)</label>
              <input type="number" value={herdSize} onChange={(e) => setHerdSize(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Calf Crop Percentage (%)</label>
              <input type="number" value={calfCropPercent} onChange={(e) => setCalfCropPercent(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Expected Weaning Weight (lbs)</label>
              <input type="number" value={calfWeaningWeight} onChange={(e) => setCalfWeaningWeight(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Death Loss (%)</label>
              <input type="number" value={deathLossPercent} onChange={(e) => setDeathLossPercent(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
          </div>

          {/* Variable Costs */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Variable Costs (Total $)</h3>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Feed Costs</label>
              <input type="number" value={feedCosts} onChange={(e) => setFeedCosts(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Pasture/Land Lease</label>
              <input type="number" value={pastureCosts} onChange={(e) => setPastureCosts(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Veterinary & Health</label>
              <input type="number" value={vetCosts} onChange={(e) => setVetCosts(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Breeding Costs (AI/Bull)</label>
              <input type="number" value={breedingCosts} onChange={(e) => setBreedingCosts(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Interest on Operating Capital</label>
              <input type="number" value={operatingInterest} onChange={(e) => setOperatingInterest(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
          </div>

          {/* Fixed Costs */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Fixed Costs (Total $)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Labor Costs (Owned & Hired)</label>
                <input type="number" value={laborCosts} onChange={(e) => setLaborCosts(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Equipment & Depreciation</label>
                <input type="number" value={equipmentDepreciation} onChange={(e) => setEquipmentDepreciation(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center mb-6">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Total Cost</span>
               <span className="text-2xl font-black text-slate-900">${totalCost.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Cost Per Cow</span>
               <span className="text-2xl font-black text-slate-900">${costPerCow.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Cost Per Calf</span>
               <span className="text-2xl font-black text-slate-900">${costPerCalf.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Cost Per Lb of Calf</span>
               <span className="text-2xl font-black text-slate-900">${costPerPound.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
          </div>
          <div className="w-full mt-4 flex justify-between text-sm text-slate-600 px-2">
             <span>Variable Costs: ${(totalVariableCosts).toLocaleString()}</span>
             <span>Fixed Costs: ${(totalFixedCosts).toLocaleString()}</span>
             <span>Calves Weaned: {calvesWeaned.toFixed(1)}</span>
          </div>
        </div>

        <CalculatorDisclaimer toolSpecificNotice="Beef market conditions and feed prices change rapidly." />
      </div>
    </div>
  );
}
