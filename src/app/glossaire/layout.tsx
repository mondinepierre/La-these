import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glossaire',
  description:
    '60 termes essentiels de l\'investissement expliqués clairement : marchés, analyse fondamentale, ETF, gestion du risque.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}