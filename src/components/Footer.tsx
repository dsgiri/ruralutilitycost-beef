import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  setView: (view: ViewState) => void;
}

export function Footer({ setView }: FooterProps) {
  return (
    <footer className="h-12 border-t border-gray-200 bg-gray-50 flex items-center justify-between px-4 sm:px-8 text-[10px] text-gray-500 font-medium mt-auto flex-shrink-0">
      <div className="flex gap-4 sm:gap-6 uppercase tracking-wider overflow-x-auto">
        <button onClick={() => setView('home')} className="hover:text-blue-900 transition-colors min-w-max">Home</button>
        <button onClick={() => setView('about')} className="hover:text-blue-900 transition-colors min-w-max">About</button>
        <button onClick={() => setView('contact')} className="hover:text-blue-900 transition-colors min-w-max">Contact</button>
        <button onClick={() => setView('legal')} className="hover:text-blue-900 transition-colors min-w-max">Privacy</button>
        <button onClick={() => setView('legal')} className="hover:text-blue-900 transition-colors min-w-max">Disclaimer</button>
        <button onClick={() => setView('license')} className="hover:text-blue-900 transition-colors min-w-max">License</button>
        <a href="https://ruralutilitycost.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors min-w-max">RuralUtilityCost.com</a>
      </div>
      <div className="hidden sm:block">System Status: All Calculators Validated v2.4.0</div>
    </footer>
  );
}
