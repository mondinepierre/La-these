import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parcours Intermédiaire',
  description:
    'Analyser un ETF, maîtriser l\'analyse fondamentale et technique, gérer le risque, travailler sa psychologie d\'investisseur.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}