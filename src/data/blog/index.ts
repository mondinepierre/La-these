// ─────────────────────────────────────────────────────────────────────────────
// src/data/blog/index.ts
//
// Point d'entrée unique — tous les imports utilisent @/data/blog
//
// AJOUTER UN ARTICLE :
//   1. Créer src/data/blog/[slug].ts (copier _template.ts)
//   2. Remplir les métadonnées
//   3. Importer ici et ajouter dans ARTICLES
//   4. Créer le fichier MDX dans src/content/blog/
// ─────────────────────────────────────────────────────────────────────────────

import type { ArticleMeta } from '@/types/blog'

import { evEbitdaEtRoic } from './ev-ebitda-et-roic'
import { roicEtWacc     } from './ROIC-et-WACC'
import { leRoiic       } from './le-roiic'
import { mvMsftEtRachat      } from './mv-msft-et-rachat'

export const articles: ArticleMeta[] = [
  evEbitdaEtRoic,
  roicEtWacc,
  mvMsftEtRachat,
  leRoiic,
]

export function getArticle(slug: string): ArticleMeta | undefined {
  return articles.find(a => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return getPublishedArticles().map(a => a.slug)
}

export function getPublishedArticles(): ArticleMeta[] {
  const now = new Date()
  return articles.filter(a => {
    if (!a.publishedAt) return true
    return new Date(a.publishedAt) <= now
  })
}