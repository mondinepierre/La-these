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
import { IDEXX               } from './idexx'
import { exailTechnologies   } from './exail-technologies'
import { rockwellAutomation  } from './rockwell-automation'
import { MSCI             } from './msci-inc'
import { NOW             } from './now'
import { APR_CORPORATION             } from './apr-corporation'
import { OTC_MARKETS_GROUP             } from './otc-markets-group'
import { autodesk            } from './autodesk'
import { veeva               } from './veeva'
import { DEXCOM             } from './dexcom'

// ── Valeurs suivies — en construction ────────────────────────────────────────




// ── Analyses ponctuelles ──────────────────────────────────────────────────────
import { mama     } from './mama'
import { lly      } from './lly'
import { uber     } from './uber'
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
  MSCI,
  novo,
  NOW,
  OTC_MARKETS_GROUP,
  rockwellAutomation,
  thales,
  totalenergies,
  visa,


  // En construction





  // Analyses ponctuelles
  mama,
  uber,
  lly,
  veeva,
  IDEXX,
  DEXCOM,
  autodesk,
  APR_CORPORATION,
  sondage,
]
