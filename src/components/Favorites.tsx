import React from 'react';
import { ToolCard } from './ToolCard';
import { Tool } from '../types';

interface FavoritesProps {
  tools: Tool[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export function Favorites({ tools, favorites, toggleFavorite }: FavoritesProps) {
  const favoriteTools = tools.filter(tool => favorites.includes(tool.id));

  if (favoriteTools.length === 0) {
    return null;
  }

  return (
    <div id="favorites" className="py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            My Favorites
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteTools.map(tool => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              isFavorite={true} 
              toggleFavorite={toggleFavorite} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
