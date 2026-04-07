export type Categorie = 'pedagogie' | 'macro' | 'methode' | 'parcours' 
export type NiveauReflexions = 'debutant' | 'intermediaire' | 'avance'

export interface ArticleMeta {
  slug: string
  title: string
  date: string                 // ISO : "2026-03-17"
  category: Categorie
  level: NiveauReflexions
  readingTime: number          // minutes
  summary: string
  tags: string[]
  related: string[]            // slugs /reflexions
  analyses: string[]           // slugs /analyses
  portefeuilles: string[]      // slugs /portefeuilles
  publishedAt?: string  // ISO date — si absent, publié immédiatement
}