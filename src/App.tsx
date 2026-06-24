import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { ContactView } from './components/views/ContactView';
import { LegalView } from './components/views/LegalView';
import { LicenseView } from './components/views/LicenseView';
import { TOOLS } from './data';
import { ViewState } from './types';

import { DisclaimerView } from './components/views/DisclaimerView';
import { ExampleCalculatorView } from './components/views/ExampleCalculatorView';

import { BeefCostOfProductionView } from './components/views/BeefCostOfProductionView';
import { FeedlotCloseoutView } from './components/views/FeedlotCloseoutView';
import { BreakEvenSalePriceView } from './components/views/BreakEvenSalePriceView';
import { ProfitPerHeadView } from './components/views/ProfitPerHeadView';
import { CattleFeedView } from './components/views/CattleFeedView';
import { PasturedBeefView } from './components/views/PasturedBeefView';
import { CarcassYieldView } from './components/views/CarcassYieldView';
import { ValueOfAdditionalGainView } from './components/views/ValueOfAdditionalGainView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('beef_ruralutilitycost_favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse favorites');
      }
    }
    setIsLoaded(true);
  }, []);

  // Save favorites to local storage when changed
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('beef_ruralutilitycost_favorites', JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fId => fId !== id)
        : [...prev, id]
    );
  };

  const renderView = () => {
    switch (currentView) {
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      case 'legal':
        return <LegalView />;
      case 'license':
        return <LicenseView />;
      case 'disclaimer':
        return <DisclaimerView />;
      case 'calculator-example':
        return <ExampleCalculatorView />;
      case 'cost-of-production':
        return <BeefCostOfProductionView />;
      case 'feedlot-closeout':
        return <FeedlotCloseoutView />;
      case 'break-even-price':
        return <BreakEvenSalePriceView />;
      case 'profit-estimator':
        return <ProfitPerHeadView />;
      case 'feed-calculator':
        return <CattleFeedView />;
      case 'pastured-beef':
        return <PasturedBeefView />;
      case 'carcass-yield':
        return <CarcassYieldView />;
      case 'value-additional-gain':
        return <ValueOfAdditionalGainView />;
      case 'home':
      default:
        return (
          <HomeView 
            tools={TOOLS} 
            favorites={favorites} 
            toggleFavorite={toggleFavorite} 
            setView={setCurrentView}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans utility-grid">
      <Header currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow flex flex-col">
        {renderView()}
      </main>
      
      <Footer setView={setCurrentView} />
    </div>
  );
}
