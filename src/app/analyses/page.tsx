import { ANALYSES } from '@/data/analyses'
import { AnalysesIndex } from '@/components/analyses/AnalysesIndex'

export const metadata = {
  title: 'Analyses — La Thèse',
  description:
    'Analyses de valeurs suivies et analyses ponctuelles. Investissement fondamental long terme.',
}

export default function AnalysesPage() {
  return <AnalysesIndex analyses={ANALYSES} />
}