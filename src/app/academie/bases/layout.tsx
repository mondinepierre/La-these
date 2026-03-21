import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parcours Bases',
  description:
    'Comprendre pourquoi investir, choisir sa stratégie et son enveloppe, sélectionner un broker, installer une routine.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}