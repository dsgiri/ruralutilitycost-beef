import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  setView: (view: ViewState) => void;
}

export function Footer({ setView }: FooterProps) {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-4 px-4 sm:px-8 text-[10px] text-gray-500 font-medium mt-auto flex-shrink-0 min-h-[3rem]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 uppercase tracking-wider">
            <button onClick={() => setView('home')} className="hover:text-blue-900 transition-colors">Home</button>
            <a href="https://ruralutilitycost.com/about" className="hover:text-blue-900 transition-colors">About</a>
            <a href="https://www.ruralutilitycost.com/contact" className="hover:text-blue-900 transition-colors">Contact</a>
            <a href="https://www.ruralutilitycost.com/privacy-policy" className="hover:text-blue-900 transition-colors">Privacy</a>
            <a href="https://www.ruralutilitycost.com/terms-of-use" className="hover:text-blue-900 transition-colors">Terms</a>
            <a href="https://www.ruralutilitycost.com/disclaimer" className="hover:text-blue-900 transition-colors">Disclaimer</a>
            <button onClick={() => setView('license')} className="hover:text-blue-900 transition-colors">License</button>
            <a href="https://ruralutilitycost.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">RuralUtilityCost.com</a>
          </nav>
          <div className="text-center sm:text-right">System Status: All Calculators Validated v2.4.0</div>
        </div>
        <div className="pt-3 border-t border-gray-200 text-center sm:text-left text-gray-400 max-w-4xl">
          <strong>Disclaimer:</strong> Tool results are estimates for informational purposes only. Do not rely on them as professional advice. <a href="https://www.ruralutilitycost.com/disclaimer" className="underline hover:text-blue-900">Read our full disclaimer.</a>
        </div>
      </div>
    </footer>
  );
}
