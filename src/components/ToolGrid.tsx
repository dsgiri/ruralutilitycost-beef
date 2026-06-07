import React, { useMemo } from 'react';
import { ToolCard } from './ToolCard';
import { Tool } from '../types';

interface ToolGridProps {
  tools: Tool[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export function ToolGrid({ tools, favorites, toggleFavorite }: ToolGridProps) {
  const categories = useMemo(() => {
    const cats = new Set(tools.map(t => t.category));
    return Array.from(cats);
  }, [tools]);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Beef Estimators & Planning Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map(tool => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              isFavorite={favorites.includes(tool.id)} 
              toggleFavorite={toggleFavorite} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
