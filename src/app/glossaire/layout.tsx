import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glossaire',
  description:
    "Plus de 170 termes essentiels de l'investissement long terme expliqués clairement : fondamentaux, analyse fondamentale, mécanismes financiers, stratégie & moat, ETF, gestion du risque, et notions sectorielles.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}