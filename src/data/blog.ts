import { ArticleMeta } from '@/types/blog'

export const articles: ArticleMeta[] = [
  {
    slug: 'ev-ebitda-et-roic',
    title: "EV/EBITDA et ROIC — aller plus loin en analyse fondamentale",
    date: '2026-03-17',
    category: 'pedagogie',
    level: 'intermediaire',
    readingTime: 8,
    summary: "Deux indicateurs que les screeners affichent rarement bien expliqués. Comment les lire, les comparer, et les combiner pour évaluer la qualité réelle d'une entreprise.",
    tags: ['analyse fondamentale', 'valorisation', 'ROIC', 'EV/EBITDA'],
    related: [],
    analyses: ['asml'],
    portefeuilles: [],
  },
]

export function getArticle(slug: string): ArticleMeta | undefined {
  return articles.find(a => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return articles.map(a => a.slug)
}