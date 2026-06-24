import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export function Header({ currentView, setView }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', view: 'home' },
    { label: 'Plan', url: 'https://plan.ruralutilitycost.com/' },
    { label: 'Forecast', url: 'https://forecast.ruralutilitycost.com/' }, 
    { label: 'What If', url: 'https://whatif.ruralutilitycost.com/' },
    { label: 'Predictor', url: 'https://predictor.ruralutilitycost.com/' },
    { label: 'My favorites', view: 'home', hash: '#favorites' },
    { label: 'About', url: 'https://ruralutilitycost.com/about' },
    { label: 'Contact', url: 'https://www.ruralutilitycost.com/contact' },
  ];

  const handleNavClick = (view: ViewState, hash?: string) => {
    setView(view);
    setMobileMenuOpen(false);
    
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 text-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 border-r border-gray-100 pr-4 sm:pr-6 mr-2">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-700 rounded-sm flex items-center justify-center text-[10px] text-white">B</div>
              <span>BEEF</span>
              <div className="flex flex-col text-left ml-1 sm:ml-2 hidden sm:flex">
                <span className="text-[10px] uppercase text-gray-400 font-bold leading-tight">Ecosystem</span>
                <span className="text-xs font-semibold text-blue-900 leading-tight">ruralutilitycost.com</span>
              </div>
            </button>
          </div>
          
          <nav aria-label="Main Navigation" className="hidden md:flex space-x-1 lg:space-x-2 flex-1 ml-2 lg:ml-4 text-sm font-medium">
            {navItems.map((item) => (
              item.url ? (
                <a
                  key={item.label}
                  href={item.url}
                  className="transition-colors sidebar-link px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view as ViewState, item.hash)}
                  className={`transition-colors sidebar-link px-3 py-2 rounded-md ${
                    currentView === item.view && !item.hash ? 'bg-blue-50 text-blue-900' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              item.url ? (
                <a
                  key={item.label}
                  href={item.url}
                  className="block w-full text-left px-3 py-2 rounded-md font-medium text-sm text-gray-600 hover:bg-gray-50 text-gray-900"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view as ViewState, item.hash)}
                  className={`block w-full text-left px-3 py-2 rounded-md font-medium text-sm ${
                    currentView === item.view && !item.hash
                      ? 'bg-blue-50 text-blue-900'
                      : 'text-gray-600 hover:bg-gray-50 text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
