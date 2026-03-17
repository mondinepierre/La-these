export type Categorie = 'pedagogie' | 'macro' | 'methode' | 'parcours'
export type NiveauBlog = 'debutant' | 'intermediaire' | 'avance'

export interface ArticleMeta {
  slug: string
  title: string
  date: string                 // ISO : "2026-03-17"
  category: Categorie
  level: NiveauBlog
  readingTime: number          // minutes
  summary: string
  tags: string[]
  related: string[]            // slugs /blog
  analyses: string[]           // slugs /analyses
  portefeuilles: string[]      // slugs /portefeuilles
}