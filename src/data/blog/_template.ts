import type { ArticleMeta } from '@/types/blog'

export const _template: ArticleMeta = {
  slug: '',
  title: '',
  date: '',               // ISO : '2026-03-27'
  category: 'pedagogie', // pedagogie | macro | methode | parcours
  level: 'debutant',     // debutant | intermediaire | avance
  readingTime: 0,
  summary: '',
  tags: [],
  related: [],            // slugs /blog
  analyses: [],           // slugs /analyses
  portefeuilles: [],      // slugs /portefeuilles
}