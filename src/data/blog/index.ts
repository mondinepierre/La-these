// ─────────────────────────────────────────────────────────────────────────────
// src/data/blog/index.ts
//
// AJOUTER UN ARTICLE :
//   1. Créer src/data/blog/[slug].ts (copier _template.ts)
//   2. Importer ici et ajouter dans articles
//   3. Créer le fichier MDX dans src/content/blog/
// ─────────────────────────────────────────────────────────────────────────────

import type { ArticleMeta } from '@/types/blog'

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

export const articles: ArticleMeta[] = [
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
