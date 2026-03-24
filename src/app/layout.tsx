import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

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

  // ── Open Graph ──────────────────────────────────────────────
  openGraph: {
    title:       'La Thèse — Penser long, investir juste',
    description: 'Des ressources claires pour comprendre les marchés et construire un patrimoine durable.',
    type:        'website',
    locale:      'fr_FR',
    url:         'https://www.lathese.fr',
    siteName:    'La Thèse',
    images: [
      {
        url:    '/og-image.png',
        width:  1200,
        height: 630,
        alt:    'La Thèse — Penser long, investir juste',
      },
    ],
  },

  // ── Twitter / X ─────────────────────────────────────────────
  twitter: {
    card:        'summary_large_image',
    title:       'La Thèse — Penser long, investir juste',
    description: 'Des ressources claires pour comprendre les marchés et construire un patrimoine durable.',
    images:      ['/og-image.png'],
  },

  // ── Favicons ────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico',        sizes: 'any' },
      { url: '/favicon-16x16.png',  sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png',  sizes: '32x32', type: 'image/png' },
    ],
    apple:   [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other:   [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },

  // ── Web Manifest ────────────────────────────────────────────
  manifest: '/site.webmanifest',

  // ── Search Console ──────────────────────────────────────────
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
        <Analytics />
      </body>
    </html>
  )
}