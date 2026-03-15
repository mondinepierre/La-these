import { notFound } from 'next/navigation'
import { BasesModuleClient } from '@/components/academie/BasesModuleClient'

const MODULES = [
  { slug: 'pourquoi-investir',     title: 'Pourquoi investir ?',          duration: '4 min' },
  { slug: 'choisir-sa-strategie',  title: 'Choisir sa stratégie',         duration: '6 min' },
  { slug: 'choisir-son-enveloppe', title: 'Choisir son enveloppe',        duration: '5 min' },
  { slug: 'choisir-son-broker',    title: 'Choisir son broker',           duration: '5 min' },
  { slug: 'routine-investisseur',  title: "La routine de l'investisseur", duration: '4 min' },
]

export function generateStaticParams() {
  return MODULES.map((m) => ({ module: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ module: string }> }) {
  const { module: slug } = await params
  const mod = MODULES.find((m) => m.slug === slug)
  if (!mod) return {}
  return {
    title: `${mod.title} — Bases`,
    description: `Module Bases : ${mod.title}. Parcours Bases de La Thèse.`,
  }
}

export default async function BasesModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module: slug } = await params
  const index = MODULES.findIndex((m) => m.slug === slug)
  if (index === -1) notFound()

  const mod = MODULES[index]
  const prev = index > 0 ? MODULES[index - 1] : undefined
  const next = index < MODULES.length - 1 ? MODULES[index + 1] : undefined

  return (
    <BasesModuleClient
      slug={mod.slug}
      title={mod.title}
      duration={mod.duration}
      prev={prev ? { label: prev.title, slug: prev.slug } : undefined}
      next={next ? { label: next.title, slug: next.slug } : undefined}
    />
  )
}
