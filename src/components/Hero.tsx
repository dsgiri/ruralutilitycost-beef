import React from 'react';

export function Hero() {
  return (
    <section className="bg-white border-b border-gray-200 px-4 sm:px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Ecosystem Tools</div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Beef Economics & Production Hub</h1>
          <p className="text-gray-500 mt-2 text-lg">
            Precision tools for cattle producers, feedlot managers, and enterprise planners.
          </p>
        </div>
        <div className="flex gap-4 items-center mt-6 md:mt-0 text-sm font-semibold">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase text-gray-400">Current Market Trend</span>
            <span className="text-green-600">+$12.40 / cwt</span>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center bg-gray-50 text-gray-600">
            JD
          </div>
        </div>
      </div>
    </section>
  );
}
