import { notFound } from 'next/navigation'
import { AvanceModuleClient } from '@/components/academie/AvanceModuleClient'

const MODULES = [
  { slug: 'long-et-short',  title: 'Long et Short',       duration: '6 min' },
  { slug: 'le-levier',      title: 'Le Levier',           duration: '7 min' },
  { slug: 'les-options',    title: 'Les Options',         duration: '9 min' },
  { slug: 'le-hedge',       title: 'Le Hedge',            duration: '8 min' },
  { slug: 'ordres-avances', title: 'Les Ordres avancés',  duration: '8 min' },
]

export function generateStaticParams() {
  return MODULES.map((m) => ({ module: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ module: string }> }) {
  const { module: slug } = await params
  const mod = MODULES.find((m) => m.slug === slug)
  if (!mod) return {}
  return {
    title: `${mod.title} — Avancé`,
    description: `Module Avancé : ${mod.title}. Parcours Avancé de La Thèse.`,
  }
}

export default async function AvanceModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module: slug } = await params
  const index = MODULES.findIndex((m) => m.slug === slug)
  if (index === -1) notFound()

  const mod = MODULES[index]
  const prev = index > 0 ? MODULES[index - 1] : undefined
  const next = index < MODULES.length - 1 ? MODULES[index + 1] : undefined

  return (
    <AvanceModuleClient
      slug={mod.slug}
      title={mod.title}
      duration={mod.duration}
      prev={prev ? { label: prev.title, slug: prev.slug } : undefined}
      next={next ? { label: next.title, slug: next.slug } : undefined}
    />
  )
}
