'use client'

import dynamic from 'next/dynamic'
import type { AnalyseCard } from '@/types/analyses'
import { isValeurSuivie } from '@/types/analyses'
import AnalysePonctuelleTemplate from './AnalysePonctuelleTemplate'
import ValeurSuivieTemplate from './ValeurSuivieTemplate'

// ── Registre des MDX ──────────────────────────────────────────
// Une entrée par fichier MDX. Même pattern que BasesModuleClient.
const MDX: Record<string, React.ComponentType> = {
  // Valeurs suivies
  'asml': dynamic(() => import('@/content/analyses/valeurs/asml.mdx')),

  // Analyses ponctuelles
  'nvidia-resultats-q4-2025': dynamic(
    () => import('@/content/analyses/ponctuelles/nvidia-resultats-q4-2025.mdx')
  ),
}

type Props = {
  frontmatter: AnalyseCard
}

export function AnalyseClient({ frontmatter }: Props) {
  const Content = MDX[frontmatter.slug]

  if (!Content) return null

  if (isValeurSuivie(frontmatter)) {
    return (
      <ValeurSuivieTemplate frontmatter={frontmatter}>
        <Content />
      </ValeurSuivieTemplate>
    )
  }

  return (
    <AnalysePonctuelleTemplate frontmatter={frontmatter}>
      <Content />
    </AnalysePonctuelleTemplate>
  )
}