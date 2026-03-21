import { ANALYSES } from '@/data/analyses'
import { AnalysesIndex } from '@/components/analyses/AnalysesIndex'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analyses',
  description:
    'Valeurs suivies et analyses ponctuelles : thèse d\'investissement, métriques financières, conviction et positionnement.',
}

export default function AnalysesPage() {
  return <AnalysesIndex analyses={ANALYSES} />
}