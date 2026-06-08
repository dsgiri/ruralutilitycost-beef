import React, { useState } from 'react';
import { CalculatorDisclaimer } from '../disclaimer/CalculatorDisclaimer';

export function ExampleCalculatorView() {
  const [headCount, setHeadCount] = useState(100);
  const [costPerHead, setCostPerHead] = useState(850);
  
  const totalCost = headCount * costPerHead;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-xs font-bold px-2 py-1 bg-orange-100 text-orange-800 rounded">EXAMPLE TOOL</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Cost of Production Calculator</h1>
        <p className="text-gray-500 mt-2">Estimate total baseline costs for your cow-calf operation.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Cattle (Head)</label>
            <input 
              type="number" 
              value={headCount}
              onChange={(e) => setHeadCount(Number(e.target.value))}
              className="w-full border border-gray-300 rounded p-2 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Cost Per Head ($)</label>
            <input 
              type="number" 
              value={costPerHead}
              onChange={(e) => setCostPerHead(Number(e.target.value))}
              className="w-full border border-gray-300 rounded p-2 text-gray-900"
            />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex flex-col items-center justify-center">
          <span className="text-sm font-bold text-blue-900 uppercase tracking-widest mb-2">Estimated Total Cost</span>
          <span className="text-4xl font-black text-blue-900">${totalCost.toLocaleString()}</span>
        </div>

        {/* Disclaimer placed directly under the calculator result */}
        <CalculatorDisclaimer 
          toolSpecificNotice="Beef market conditions change rapidly."
        />
      </div>
    </div>
  );
}
