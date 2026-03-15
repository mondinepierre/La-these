import { notFound } from 'next/navigation'
import { IntermediaireModuleClient } from '@/components/academie/IntermediaireModuleClient'

const MODULES = [
  { slug: 'analyser-un-etf',         title: 'Analyser un ETF',                duration: '6 min' },
  { slug: 'analyse-fondamentale',     title: 'Analyse fondamentale',           duration: '8 min' },
  { slug: 'analyse-technique',        title: 'Analyse technique',              duration: '10 min' },
  { slug: 'gerer-le-risque',          title: 'Gérer le risque',                duration: '7 min' },
  { slug: 'psychologie-investisseur', title: "Psychologie de l'investisseur",  duration: '6 min' },
]

export function generateStaticParams() {
  return MODULES.map((m) => ({ module: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ module: string }> }) {
  const { module: slug } = await params
  const mod = MODULES.find((m) => m.slug === slug)
  if (!mod) return {}
  return {
    title: `${mod.title} — Intermédiaire`,
    description: `Module Intermédiaire : ${mod.title}. Parcours Intermédiaire de La Thèse.`,
  }
}

export default async function IntermediaireModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module: slug } = await params
  const index = MODULES.findIndex((m) => m.slug === slug)
  if (index === -1) notFound()

  const mod = MODULES[index]
  const prev = index > 0 ? MODULES[index - 1] : undefined
  const next = index < MODULES.length - 1 ? MODULES[index + 1] : undefined

  return (
    <IntermediaireModuleClient
      slug={mod.slug}
      title={mod.title}
      duration={mod.duration}
      prev={prev ? { label: prev.title, slug: prev.slug } : undefined}
      next={next ? { label: next.title, slug: next.slug } : undefined}
    />
  )
}
