// src/data/glossaire/_template.ts
// ─────────────────────────────────────────────────────────────────────────────
// MODÈLE — copier ce bloc dans le fichier de catégorie cible.
// NE PAS importer ce fichier — il sert uniquement de référence.
// ─────────────────────────────────────────────────────────────────────────────
//
// CHOIX DE LA CATÉGORIE
//   Fondamentaux           → vocabulaire d'entrée, transverse ou sectoriel
//   Marchés                → phénomènes de marché (bull, bear, FOMO, spot...)
//   Stratégies             → approches d'investissement (DCA, B&H, ISR...)
//   Enveloppes fiscales    → PEA, CTO, AV, PFU
//   ETF & indices          → mécanique ETF (TER, encours, réplication...)
//   Analyse fondamentale   → ratios publiés ou calculés directement (PER, ROIC, marges, FCF Yield...)
//   Mécanismes financiers  → constructions analytiques / comptables (NOPAT, BFR, goodwill, DCF, WACC...)
//   Stratégie & moat       → positionnement concurrentiel, modèles d'affaires
//   Analyse technique      → support/résistance, moyennes mobiles, figures...
//   Gestion du risque      → stop-loss, drawdown, beta, ratio risque/rendement...
//   Produits avancés       → options, levier, hedge, vente à découvert...
//   Ordres de bourse       → ordre au marché, limite, stop, OCO, spread
//
// CHOIX DU THÈME (optionnel)
//   defense-aerospatiale | energie | semi-conducteurs | pharma-sante
//   luxe-consommation | finance-paiements | esg-climat
//   Ne pas mettre `theme` si le terme est transverse.
//
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm } from './types';

export const NOUVEAU_TERME: GlossaireTerm = {
  slug: 'mon-slug',                          // URL : /glossaire/mon-slug
  label: 'Mon Terme',                        // Libellé affiché
  category: 'Analyse fondamentale',          // Voir liste ci-dessus
  theme: 'energie',                          // Optionnel — supprimer la ligne si transverse
  shortDef: 'Une phrase courte de 1-2 lignes pour la carte index.',
  definition: `Premier paragraphe — la définition principale, claire, accessible.

Deuxième paragraphe — précisions méthodologiques, formule, nuances. Les paragraphes sont séparés par une double ligne.

Troisième paragraphe — exemple concret ou contre-exemple si pertinent.`,
  related: ['slug-lie-1', 'slug-lie-2'],     // Maximum 6 termes liés
  modules: [
    { label: 'Analyse fondamentale', href: '/academie/intermediaire/analyse-fondamentale' },
  ],
};
