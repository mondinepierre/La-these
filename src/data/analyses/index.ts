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

// ── Valeurs suivies — actives ─────────────────────────────────────────────────
import { airliquide         } from './airliquide'
import { asml               } from './asml'
import { alphabet           } from './alphabet'
import { microsoft          } from './microsoft'
import { novo               } from './novo'
import { totalenergies      } from './totalenergies'
import { visa               } from './visa'
import { loreal             } from './loreal'
import { thales              } from './thales'
import { constellationenergy } from './constellationenergy'
import { cameco              } from './cameco'
import { gtt                 } from './gtt'
import { exailTechnologies   } from './exail-technologies'

// ── Valeurs suivies — en construction ────────────────────────────────────────
import { rockwellAutomation  } from './rockwell-automation'

import { msciInc             } from './msci-inc'

// ── Analyses ponctuelles ──────────────────────────────────────────────────────
import { sondage  } from './sondage'

// ─────────────────────────────────────────────────────────────────────────────
// Ordre d'affichage dans l'index /analyses
// Valeurs actives en premier, en construction ensuite, ponctuelles à la fin
// ─────────────────────────────────────────────────────────────────────────────
export const ANALYSES: AnalyseCard[] = [
  // Actives
  airliquide,
  alphabet,
  asml,
  cameco,
  constellationenergy,
  exailTechnologies,
  gtt,
  loreal,
  microsoft,
  novo,
  thales,
  totalenergies,
  visa,


  // En construction
  rockwellAutomation,



  msciInc,

  // Analyses ponctuelles
  sondage,
]
