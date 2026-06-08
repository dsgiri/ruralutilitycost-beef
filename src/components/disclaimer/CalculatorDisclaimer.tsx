import React from 'react';
import { DISCLAIMER_TEXT } from './DisclaimerContent';

interface CalculatorDisclaimerProps {
  toolSpecificNotice?: string;
  className?: string;
}

export function CalculatorDisclaimer({ toolSpecificNotice, className = '' }: CalculatorDisclaimerProps) {
  return (
    <div className={`mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm text-xs text-gray-600 leading-relaxed ${className}`}>
      <p>
        <strong className="font-semibold text-gray-800">Disclaimer:</strong>{' '}
        {toolSpecificNotice && <span className="font-semibold mr-1">{toolSpecificNotice}</span>}
        {DISCLAIMER_TEXT}
      </p>
    </div>
  );
}
