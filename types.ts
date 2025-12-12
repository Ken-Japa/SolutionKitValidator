export interface Feature {
  title: string;
  description: string;
  icon: 'check' | 'zap' | 'shield' | 'clock';
}

export interface Idea {
  id: string; // Unique ID to link translations (e.g., 'pix-confirmer')
  slug: string; // Localized slug (e.g., 'confirmador-pix' or 'instant-pix')
  seoTitle: string;
  hero: {
    title: string;
    subtitle: string;
  };
  pain: {
    heading: string;
    description: string[];
  };
  solution: {
    heading: string;
    description: string[];
  };
  features: Feature[];
  pricing: {
    value: string; // e.g., "39,90"
    period: string; // e.g., "mês"
    comparison: string; // e.g., "Preço de um café por dia"
  };
  cta: string;
}

// Augment window for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}