export type ViewState = 
  | 'home' 
  | 'about' 
  | 'contact' 
  | 'legal' 
  | 'license' 
  | 'disclaimer' 
  | 'calculator-example'
  | 'cost-of-production'
  | 'feedlot-closeout'
  | 'break-even-price'
  | 'profit-estimator'
  | 'feed-calculator'
  | 'pastured-beef'
  | 'carcass-yield'
  | 'value-additional-gain';

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  primaryOutcome: string;
  slug: string;
}

export type Category = 
  | 'Cost of production'
  | 'Feed planning'
  | 'Feedlot closeout'
  | 'Break-even price'
  | 'Profitability'
  | 'Yield and carcass planning'
  | 'Pasture-raised beef'
  | 'Enterprise analysis';
