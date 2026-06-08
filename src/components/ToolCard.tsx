import React from 'react';
import { Heart } from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  key?: React.Key;
  tool: Tool;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
  onLaunch?: (id: string) => void;
}

export function ToolCard({ tool, isFavorite, toggleFavorite, onLaunch }: ToolCardProps) {
  // Determine color based on category
  let categoryColor = "text-blue-600";
  if (tool.category.includes('Cost') || tool.category.includes('Plan')) categoryColor = "text-green-700";
  else if (tool.category.includes('Break-even') || tool.category.includes('Forecast')) categoryColor = "text-orange-700";

  return (
    <article aria-label={`Tool: ${tool.title}`} className="bg-white border border-gray-200 p-5 rounded-lg card-hover relative flex flex-col h-full">
      <button
        onClick={() => toggleFavorite(tool.id)}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        className={`absolute top-4 right-4 ${
          isFavorite ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
        }`}
      >
        <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
      </button>
      
      <div className={`text-[10px] font-bold uppercase mb-1 ${categoryColor}`}>
        {tool.category}
      </div>
      
      <h3 className="font-bold text-lg mb-1 text-gray-900 leading-tight pr-6">
        {tool.title}
      </h3>
      
      <p className="text-xs text-gray-500 mb-4 flex-grow">
        {tool.description}
      </p>
      
      <div className="flex justify-between items-center mt-auto pt-2">
        <span className="text-[11px] font-mono bg-gray-50 px-2 py-1 border border-gray-100 rounded text-gray-700">
          Outcome: {tool.primaryOutcome}
        </span>
        <button 
          onClick={() => onLaunch && onLaunch(tool.id)}
          className="bg-blue-900 text-white text-xs px-3 py-1.5 rounded font-bold hover:bg-blue-800 transition-colors"
        >
          Launch
        </button>
      </div>
    </article>
  );
}
