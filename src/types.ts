export type ViewState = 'home' | 'about' | 'contact' | 'legal' | 'license';

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
