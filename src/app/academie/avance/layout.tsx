import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parcours Avancé',
  description:
    'Long/short, levier, options, hedge et ordres avancés — pour les investisseurs qui veulent aller plus loin sur le long terme.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}