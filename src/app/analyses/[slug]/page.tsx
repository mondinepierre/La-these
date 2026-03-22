import { notFound } from 'next/navigation'
import { ANALYSES } from '@/data/analyses'
import { AnalyseClient } from '@/components/analyses/AnalyseClient'

export function generateStaticParams() {
  return ANALYSES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const analyse = ANALYSES.find((a) => a.slug === slug)
  if (!analyse) return {}

  const suffix = analyse.type === 'valeur' ? 'Valeur suivie' : 'Analyse ponctuelle'
  const enConstruction = analyse.statut === 'en-construction'

  return {
    title:       `${analyse.title} — ${suffix} · La Thèse`,
    description: analyse.excerpt,
    robots:      enConstruction
      ? { index: false, follow: false }
      : undefined,
  }
}

export default async function AnalysePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const analyse = ANALYSES.find((a) => a.slug === slug)
  if (!analyse) notFound()

  return <AnalyseClient frontmatter={analyse} />
}