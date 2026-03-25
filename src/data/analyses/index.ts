// ─────────────────────────────────────────────────────────────────────────────
// src/data/analyses/index.ts
//
// Point d'entrée unique — tous les imports du projet utilisent @/data/analyses
// et Next.js résout automatiquement ce fichier.
//
// AJOUTER UNE FICHE :
//   1. Créer src/data/analyses/[ticker].ts (copier _template.ts)
//   2. Remplir les données
//   3. Importer ici et ajouter dans le tableau ANALYSES
//   4. Créer le fichier MDX correspondant dans src/content/analyses/
//
// NE PAS importer _template.ts — il n'est pas destiné à l'affichage.
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

// ── Valeurs suivies ───────────────────────────────────────────────────────────
import { asml          } from './asml'
import { novo          } from './novo'
import { totalenergies } from './totalenergies'
import { alphabet      } from './alphabet'
import { microsoft     } from './microsoft'


// ── Analyses ponctuelles ──────────────────────────────────────────────────────
import { nvidiaQ42025  } from './nvidia-q4-2025'

// ─────────────────────────────────────────────────────────────────────────────
// Ordre d'affichage dans l'index /analyses
// Les valeurs suivies actives en premier, ponctuelles ensuite
// ─────────────────────────────────────────────────────────────────────────────
export const ANALYSES: AnalyseCard[] = [
  // Valeurs suivies
  alphabet,
  asml,
  novo,
  totalenergies,
  microsoft,

  // Analyses ponctuelles
  nvidiaQ42025,
]
