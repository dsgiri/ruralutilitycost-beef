import React, { useState } from 'react';
import { CalculatorDisclaimer } from '../disclaimer/CalculatorDisclaimer';

interface FeedIngredient {
  id: string;
  name: string;
  costPerTon: number;
  lbsPerDay: number;
  dryMatterPercent: number;
}

export function CattleFeedView() {
  const [numCattle, setNumCattle] = useState(100);
  const [feedingPeriod, setFeedingPeriod] = useState(120); // days
  
  const [ingredients, setIngredients] = useState<FeedIngredient[]>([
    { id: '1', name: 'Alfalfa Hay', costPerTon: 180, lbsPerDay: 8, dryMatterPercent: 88 },
    { id: '2', name: 'Corn (Rolled)', costPerTon: 210, lbsPerDay: 12, dryMatterPercent: 86 },
    { id: '3', name: 'Distillers Grains', costPerTon: 240, lbsPerDay: 4, dryMatterPercent: 90 },
  ]);

  const addIngredient = () => {
    setIngredients([...ingredients, { id: Date.now().toString(), name: 'New Ingredient', costPerTon: 0, lbsPerDay: 0, dryMatterPercent: 85 }]);
  };

  const removeIngredient = (id: string) => {
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  const updateIngredient = (id: string, field: keyof FeedIngredient, value: string | number) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, [field]: typeof value === 'string' && field !== 'name' ? Number(value) : value } : ing
    ));
  };

  let totalLbsPerDayAsFed = 0;
  let totalLbsPerDayDM = 0;
  let dailyCostPerHead = 0;

  ingredients.forEach(ing => {
    totalLbsPerDayAsFed += ing.lbsPerDay;
    totalLbsPerDayDM += ing.lbsPerDay * (ing.dryMatterPercent / 100);
    dailyCostPerHead += (ing.lbsPerDay / 2000) * ing.costPerTon;
  });

  const totalCostPerHead = dailyCostPerHead * feedingPeriod;
  const totalCostHerd = totalCostPerHead * numCattle;
  const totalFeedTonsAsFed = (totalLbsPerDayAsFed * feedingPeriod * numCattle) / 2000;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-800 rounded">FEED PLANNING</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Cattle Feed Calculator</h1>
        <p className="text-gray-500 mt-2">Formulates basic rations and estimates total feed requirements and costs for a cattle operation.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Number of Cattle</label>
            <input type="number" value={numCattle} onChange={(e) => setNumCattle(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Feeding Period Length (Days)</label>
            <input type="number" value={feedingPeriod} onChange={(e) => setFeedingPeriod(Number(e.target.value))} className="w-full border border-gray-300 rounded p-2 text-gray-900" />
          </div>

        </div>

        <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-sm font-bold text-gray-900 uppercase">Ration Ingredients</h3>
            <button onClick={addIngredient} className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">Add Ingredient</button>
          </div>
          
          <div className="p-4 space-y-4">
            {ingredients.map(ing => (
              <div key={ing.id} className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-end border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="sm:col-span-3">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                  <input type="text" value={ing.name} onChange={(e) => updateIngredient(ing.id, 'name', e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1 text-sm" />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Cost ($/Ton)</label>
                  <input type="number" value={ing.costPerTon} onChange={(e) => updateIngredient(ing.id, 'costPerTon', e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1 text-sm" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">DM %</label>
                  <input type="number" value={ing.dryMatterPercent} onChange={(e) => updateIngredient(ing.id, 'dryMatterPercent', e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1 text-sm" />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Lbs/Head/Day (As Fed)</label>
                  <input type="number" value={ing.lbsPerDay} onChange={(e) => updateIngredient(ing.id, 'lbsPerDay', e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1 text-sm" />
                </div>
                <div className="sm:col-span-1 flex justify-end">
                  <button onClick={() => removeIngredient(ing.id)} className="text-red-500 hover:text-red-700 p-1 mb-1" title="Remove">✕</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mb-6">
            <div className="p-4 bg-white rounded shadow-sm border border-amber-100">
               <span className="block text-xs font-bold text-amber-800 uppercase mb-1">Total Feed Cost</span>
               <span className="text-2xl font-black text-amber-900">${totalCostHerd.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm border border-amber-100">
               <span className="block text-xs font-bold text-amber-800 uppercase mb-1">Total Tons Required</span>
               <span className="text-2xl font-black text-amber-900">{totalFeedTonsAsFed.toLocaleString(undefined, {maximumFractionDigits: 1})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm border border-amber-100">
               <span className="block text-xs font-bold text-amber-800 uppercase mb-1">Daily Cost / Head</span>
               <span className="text-2xl font-black text-amber-900">${dailyCostPerHead.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
            <div className="p-4 bg-white rounded shadow-sm border border-amber-100">
               <span className="block text-xs font-bold text-amber-800 uppercase mb-1">Cost / Head (Period)</span>
               <span className="text-2xl font-black text-amber-900">${totalCostPerHead.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-between text-sm text-amber-800 px-2 font-medium">
             <span>Daily Ration (As Fed): {totalLbsPerDayAsFed.toFixed(1)} lbs/hd</span>
             <span>Daily Ration (Dry Matter): {totalLbsPerDayDM.toFixed(1)} lbs/hd</span>
          </div>
        </div>

        <CalculatorDisclaimer toolSpecificNotice="Always consult a qualified nutritionist for exact rationing." />
      </div>
    </div>
  );
}
