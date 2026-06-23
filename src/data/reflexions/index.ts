// ─────────────────────────────────────────────────────────────────────────────
// src/data/reflexions/index.ts
//
// AJOUTER UN ARTICLE :
//   1. Créer src/data/reflexions/[slug].ts (copier _template.ts)
//   2. Importer ici et ajouter dans articles
//   3. Créer le fichier MDX dans src/content/reflexions/
// ─────────────────────────────────────────────────────────────────────────────

import type { ArticleMeta } from '@/types/reflexions'

import { evEbitdaEtRoic              } from './ev-ebitda-et-roic'
import { roicEtWacc                  } from './ROIC-et-WACC'
import { leRoiic                     } from './le-roiic'
import { declarerSesInvestissements  } from './declarer-ses-investissements'
import { mvMsftEtRachat              } from './mv-msft-et-rachat'
import { perAjusteAuxTaux            } from './per-ajuste-aux-taux'
import { declarationRetourExperience } from './declaration-retour-experience'
import { dcfIntuition                } from './dcf-intuition'
import { fcfYield                    } from './fcf-yield'
import { portefeuilleParThemes       } from './portefeuille-par-themes'
import { lireUnRapportAnnuel         } from './lire-un-rapport-annuel'
import { novoOrionEtude              } from './novo-orion-etude'
import { airLiquideTapisRoulant      } from './air-liquide-tapis-roulant'
import { visaQ2Fy2026                } from './visa-q2-fy2026'
import { novoWegovyOralEuropeMexique } from './novo-wegovy-oral-europe-mexique'

// Série méthodologie : mes filtres d'analyse fondamentale (9 articles)
import { roicLeJugeDePaix           } from './roic-le-juge-de-paix'
import { waccLeCoutDuCapital        } from './wacc-le-cout-du-capital'
import { spreadRoicWacc             } from './spread-roic-wacc'
import { qualityPrice               } from './quality-price'
import { pegCroissance              } from './peg-croissance'
import { scoreAcceleration          } from './score-acceleration'
import { scoreLevierOperationnel    } from './score-levier-operationnel'
import { momentum52Semaines         } from './momentum-52-semaines'
import { scoreMoat                  } from './score-moat'



export const articles: ArticleMeta[] = [
  roicLeJugeDePaix,
  waccLeCoutDuCapital,
  spreadRoicWacc,
  qualityPrice,
  pegCroissance,
  scoreAcceleration,
  scoreLevierOperationnel,
  momentum52Semaines,
  scoreMoat,
  evEbitdaEtRoic,
  roicEtWacc,
  leRoiic,
  declarerSesInvestissements,
  mvMsftEtRachat,
  perAjusteAuxTaux,
  declarationRetourExperience,
  dcfIntuition,
  fcfYield,
  portefeuilleParThemes,
  lireUnRapportAnnuel,
  novoOrionEtude,
  airLiquideTapisRoulant,
  visaQ2Fy2026,
  novoWegovyOralEuropeMexique
]

export function getPublishedArticles(): ArticleMeta[] {
  if (process.env.NODE_ENV === 'development') {
    return articles // tout visible en dev
  }
  const now = new Date()
  return articles.filter(a => {
    if (!a.publishedAt) return true
    return new Date(a.publishedAt) <= now
  })
}

export function getNextArticle(): ArticleMeta | undefined {
  const now = new Date()
  return articles
    .filter(a => a.publishedAt && new Date(a.publishedAt) > now)
    .sort((a, b) =>
      new Date(a.publishedAt!).getTime() - new Date(b.publishedAt!).getTime()
    )[0]
}

export function getArticle(slug: string): ArticleMeta | undefined {
  return articles.find(a => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return getPublishedArticles().map(a => a.slug)
}
