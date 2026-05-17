// src/data/glossaire/types.ts
// ─────────────────────────────────────────────────────────────────────────────
// Types et constantes du glossaire.
// ─────────────────────────────────────────────────────────────────────────────

export type GlossaireCategory =
  | 'Fondamentaux'
  | 'Marchés'
  | 'Stratégies'
  | 'Enveloppes fiscales'
  | 'ETF & indices'
  | 'Analyse fondamentale'
  | 'Mécanismes financiers'
  | 'Stratégie & moat'
  | 'Analyse technique'
  | 'Gestion du risque'
  | 'Produits avancés'
  | 'Ordres de bourse';

export type GlossaireTheme =
  | 'defense-aerospatiale'
  | 'energie'
  | 'semi-conducteurs'
  | 'pharma-sante'
  | 'luxe-consommation'
  | 'finance-paiements'
  | 'esg-climat';

export interface ModuleLink {
  label: string;
  href: string;
}

export interface GlossaireTerm {
  slug: string;
  label: string;
  category: GlossaireCategory;
  theme?: GlossaireTheme;
  shortDef: string;        // 1-2 phrases pour la carte index
  definition: string;      // Définition complète — paragraphes séparés par \n\n
  related: string[];       // slugs de termes liés
  modules: ModuleLink[];   // liens retour vers les modules de l'Académie
}

// ─── Labels UI pour les thèmes sectoriels ──────────────────────────────────
export const THEME_LABELS: Record<GlossaireTheme, string> = {
  'defense-aerospatiale': 'Défense & aérospatiale',
  'energie':              'Énergie',
  'semi-conducteurs':     'Semi-conducteurs',
  'pharma-sante':         'Pharma & santé',
  'luxe-consommation':    'Luxe & consommation',
  'finance-paiements':    'Finance & paiements',
  'esg-climat':           'ESG & climat',
};

export const THEMES: GlossaireTheme[] = [
  'defense-aerospatiale',
  'energie',
  'semi-conducteurs',
  'pharma-sante',
  'luxe-consommation',
  'finance-paiements',
  'esg-climat',
];

export const CATEGORIES: GlossaireCategory[] = [
  'Fondamentaux',
  'Marchés',
  'Stratégies',
  'Enveloppes fiscales',
  'ETF & indices',
  'Analyse fondamentale',
  'Mécanismes financiers',
  'Stratégie & moat',
  'Analyse technique',
  'Gestion du risque',
  'Produits avancés',
  'Ordres de bourse',
];
