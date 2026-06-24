import React, { useState } from 'react';
import { CalculatorDisclaimer } from '../disclaimer/CalculatorDisclaimer';

export function PasturedBeefView() {
  const [pastureAcres, setPastureAcres] = useState(100);
  const [pastureCostPerAcre, setPastureCostPerAcre] = useState(45);
  
  const [numAnimals, setNumAnimals] = useState(50);
  const [forageCostPerHead, setForageCostPerHead] = useState(150); // Supplemental forage/winter
  
  const [directMarketingPrice, setDirectMarketingPrice] = useState(7.50); // $/lb retail
  const [retailYieldPerHead, setRetailYieldPerHead] = useState(400); // lbs of retail cuts per animal
  
  const [processingFeePerHead, setProcessingFeePerHead] = useState(850);
  const [laborOverhead, setLaborOverhead] = useState(5000); // Total fixed overhead

  const totalPastureCost = pastureAcres * pastureCostPerAcre;
  const totalForageCost = numAnimals * forageCostPerHead;
  const totalProcessingCost = numAnimals * processingFeePerHead;
  
  const totalExpenses = totalPastureCost + totalForageCost + totalProcessingCost + laborOverhead;
  
  const grossRevenue = numAnimals * retailYieldPerHead * directMarketingPrice;
  const netProfit = grossRevenue - totalExpenses;
  
  const profitPerAcre = pastureAcres > 0 ? netProfit / pastureAcres : 0;
  const profitPerHead = numAnimals > 0 ? netProfit / numAnimals : 0;
  const roi = totalExpenses > 0 ? (netProfit / totalExpenses) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-800 rounded">PASTURE-RAISED BEEF</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Pastured Beef Enterprise Planner</h1>
        <p className="text-gray-500 mt-2">Plans grass-finished beef operations from pasture costs to direct consumer sales.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Production & Costs</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Pasture Acres</label>
                <input type="number" value={pastureAcres} onChange={(e) => setPastureAcres(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Cost / Acre ($)</label>
                <input type="number" value={pastureCostPerAcre} onChange={(e) => setPastureCostPerAcre(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Number of Animals</label>
                <input type="number" value={numAnimals} onChange={(e) => setNumAnimals(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Supp. Forage ($/hd)</label>
                <input type="number" value={forageCostPerHead} onChange={(e) => setForageCostPerHead(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Labor & Overhead ($ Total)</label>
              <input type="number" value={laborOverhead} onChange={(e) => setLaborOverhead(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Marketing & Processing</h3>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Processing/Butcher Fee ($/hd)</label>
              <input type="number" value={processingFeePerHead} onChange={(e) => setProcessingFeePerHead(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Retail Yield (lbs/hd)</label>
                <input type="number" value={retailYieldPerHead} onChange={(e) => setRetailYieldPerHead(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Retail Price ($/lb)</label>
                <input type="number" value={directMarketingPrice} onChange={(e) => setDirectMarketingPrice(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
              </div>
            </div>
          </div>

        </div>

        {/* Results Panel */}
        <div className={`border rounded-lg p-6 mb-6 ${netProfit >= 0 ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mb-4">
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Gross Revenue</span>
               <span className="text-2xl font-black text-slate-900">${grossRevenue.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm border-2 border-slate-900">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Net Profit</span>
               <span className={`text-2xl font-black ${netProfit >= 0 ? 'text-emerald-700' : 'text-red-700'}`}>${netProfit.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Profit / Head</span>
               <span className={`text-2xl font-black ${netProfit >= 0 ? 'text-emerald-700' : 'text-red-700'}`}>${profitPerHead.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
               <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Enterprise ROI</span>
               <span className={`text-2xl font-black ${netProfit >= 0 ? 'text-emerald-700' : 'text-red-700'}`}>{roi.toLocaleString(undefined, {maximumFractionDigits: 1})}%</span>
            </div>
          </div>
          <div className="w-full text-center text-sm font-medium">
             <span className={netProfit >= 0 ? 'text-emerald-800' : 'text-red-800'}>Profit Per Acre: ${profitPerAcre.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
          </div>
        </div>

        <CalculatorDisclaimer toolSpecificNotice="Consumer demand and pasture yields can fluctuate wildly." />
      </div>
    </div>
  );
}
