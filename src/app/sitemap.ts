// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { glossaire } from '@/data/glossaire'
import { ANALYSES } from '@/data/analyses'
import { portefeuilles } from '@/data/portefeuilles'

const BASE_URL = 'https://www.lathese.fr'

const ACADEMIE_MODULES: Record<string, string[]> = {
  bases: [
    'pourquoi-investir',
    'choisir-sa-strategie',
    'choisir-son-enveloppe',
    'choisir-son-broker',
    'routine-investisseur',
  ],
  intermediaire: [
    'analyser-un-etf',
    'analyse-fondamentale',
    'analyse-technique',
    'gerer-le-risque',
    'psychologie-investisseur',
  ],
  avance: [
    'long-et-short',
    'le-levier',
    'les-options',
    'le-hedge',
    'ordres-avances',
  ],
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                              priority: 1.0, changeFrequency: 'weekly',  lastModified: now },
    { url: `${BASE_URL}/academie`,                priority: 0.9, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/academie/bases`,          priority: 0.8, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/academie/intermediaire`,  priority: 0.8, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/academie/avance`,         priority: 0.8, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/analyses`,                priority: 0.8, changeFrequency: 'weekly',  lastModified: now },
    { url: `${BASE_URL}/portefeuilles`,           priority: 0.7, changeFrequency: 'weekly',  lastModified: now },
    { url: `${BASE_URL}/glossaire`,               priority: 0.7, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/a-propos`,                priority: 0.5, changeFrequency: 'yearly',  lastModified: now },
    { url: `${BASE_URL}/discord`,                 priority: 0.5, changeFrequency: 'yearly',  lastModified: now },
    { url: `${BASE_URL}/legal`,                   priority: 0.2, changeFrequency: 'yearly',  lastModified: now },
  ]

  const academieRoutes: MetadataRoute.Sitemap = Object.entries(ACADEMIE_MODULES).flatMap(
    ([niveau, modules]) =>
      modules.map((slug) => ({
        url: `${BASE_URL}/academie/${niveau}/${slug}`,
        priority: 0.7,
        changeFrequency: 'monthly' as const,
        lastModified: now,
      }))
  )

  const glossaireRoutes: MetadataRoute.Sitemap = glossaire.map((terme) => ({
    url: `${BASE_URL}/glossaire/${terme.slug}`,
    priority: 0.5,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  const analysesRoutes: MetadataRoute.Sitemap = ANALYSES.map((analyse) => ({
    url: `${BASE_URL}/analyses/${analyse.slug}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
    lastModified: now,
  }))

  const portefeuillesRoutes: MetadataRoute.Sitemap = portefeuilles.map((p) => ({
    url: `${BASE_URL}/portefeuilles/${p.slug}`,
    priority: 0.7,
    changeFrequency: 'weekly' as const,
    lastModified: now,
  }))

  return [
    ...staticRoutes,
    ...academieRoutes,
    ...glossaireRoutes,
    ...analysesRoutes,
    ...portefeuillesRoutes,
  ]
}