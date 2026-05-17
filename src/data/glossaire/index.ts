// src/data/glossaire/index.ts
// ─────────────────────────────────────────────────────────────────────────────
// Point d'entrée du glossaire — agrégation des 12 fichiers de catégorie.
// API publique : compatible avec l'ancien glossaire.ts (mêmes exports).
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm, GlossaireCategory, GlossaireTheme } from './types';
import { fondamentaux } from './fondamentaux';
import { marches } from './marches';
import { strategies } from './strategies';
import { enveloppesFiscales } from './enveloppes-fiscales';
import { etfIndices } from './etf-indices';
import { analyseFondamentale } from './analyse-fondamentale';
import { mecanismesFinanciers } from './mecanismes-financiers';
import { strategieMoat } from './strategie-moat';
import { analyseTechnique } from './analyse-technique';
import { gestionRisque } from './gestion-risque';
import { produitsAvances } from './produits-avances';
import { ordresBourse } from './ordres-bourse';

// Re-export des types et constantes
export type { GlossaireTerm, GlossaireCategory, GlossaireTheme, ModuleLink } from './types';
export { THEME_LABELS, THEMES, CATEGORIES } from './types';

// ─── Agrégation ────────────────────────────────────────────────────────────
export const glossaire: GlossaireTerm[] = [
  ...fondamentaux,
  ...marches,
  ...strategies,
  ...enveloppesFiscales,
  ...etfIndices,
  ...analyseFondamentale,
  ...mecanismesFinanciers,
  ...strategieMoat,
  ...analyseTechnique,
  ...gestionRisque,
  ...produitsAvances,
  ...ordresBourse,
];

// ─── Utilitaires ───────────────────────────────────────────────────────────
export function getTermBySlug(slug: string): GlossaireTerm | undefined {
  return glossaire.find((t) => t.slug === slug);
}

export function getRelatedTerms(term: GlossaireTerm): GlossaireTerm[] {
  return term.related
    .map((slug) => getTermBySlug(slug))
    .filter((t): t is GlossaireTerm => t !== undefined)
    .slice(0, 6);
}

export function getTermsByCategory(category: GlossaireCategory): GlossaireTerm[] {
  return glossaire.filter((t) => t.category === category);
}

export function getTermsByTheme(theme: GlossaireTheme): GlossaireTerm[] {
  return glossaire.filter((t) => t.theme === theme);
}

export function getAllSlugs(): string[] {
  return glossaire.map((t) => t.slug);
}
