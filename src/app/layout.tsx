import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lathese.fr'),
  title: {
    default: 'La Thèse — Penser long, investir juste',
    template: '%s — La Thèse',
  },
  description:
    'Des ressources claires pour comprendre les marchés et construire un patrimoine durable. Investissement fondamental long terme, sans jargon ni promesse de rendement.',
  keywords: [
    'investissement', 'bourse', 'ETF', 'analyse fondamentale',
    'long terme', 'patrimoine', 'débutant', 'pédagogie',
  ],
  authors: [{ name: 'La Thèse' }],
  openGraph: {
    title: 'La Thèse — Penser long, investir juste',
    description:
      'Des ressources claires pour comprendre les marchés et construire un patrimoine durable.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.lathese.fr',
    siteName: 'La Thèse',
  },
  verification: {
    google: 'pTjovH43XcIvgKn9yB7sd-SIFYh5IJTpT7FbnfpJDfY',
  },
}

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
