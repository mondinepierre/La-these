// src/app/analyses/[slug]/og.png/route.tsx
// Extension .tsx obligatoire — le JSX de <OnePager /> ne compile pas en .ts
// ─────────────────────────────────────────────────────────────────────────────

import { ImageResponse }                        from 'next/og'
import { ANALYSES }                             from '@/data/analyses'
import { OnePager }                             from '@/components/analyses/OnePager'
import { computeRadarScores }                   from '@/lib/radar'
import type { OnePagerProps }                   from '@/components/analyses/OnePager'
import type { AnalyseCard, FrontmatterValeur }  from '@/types/analyses'

export const runtime = 'edge'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

async function loadFont(filename: string): Promise<ArrayBuffer> {
  const res = await fetch(`${BASE}/fonts/${filename}`)
  if (!res.ok) throw new Error(`Police manquante : /fonts/${filename} (${res.status})`)
  return res.arrayBuffer()
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params

  // ── Récupération ──────────────────────────────────────────────────────────
  const analyse = ANALYSES.find((a: AnalyseCard) => a.slug === slug)

  // Valeurs suivies ET analyses ponctuelles ont la meme structure (metrics,
  // onePager, prixCible...) : le onePager est genere pour les deux.
  if (!analyse) {
    return new Response(`"${slug}" introuvable`, { status: 404 })
  }

  const v = analyse as FrontmatterValeur & { slug: string }

  if (!v.onePager) {
    return new Response(
      `Champ "onePager" manquant dans analyses.ts pour "${slug}".\n` +
      `Ajouter : onePager: { thesis, cours, coursDate, devise, range52w }`,
      { status: 404 },
    )
  }

  // ── Scores radar ──────────────────────────────────────────────────────────
  const scores = computeRadarScores({
    roic:              v.metrics.roic,
    wacc:              v.metrics.wacc,
    margeEbit:         v.metrics.margeEbit,
    croissanceCA3ans:  v.metrics.croissanceCA3ans,
    croissanceBPA3ans: v.metrics.croissanceBPA3ans,
    fcfYield:          v.metrics.fcfYield,
    evEbitda:          v.metrics.evEbitda,
    currentRatio:      v.metrics.currentRatio,
    detteEbitda:       v.metrics.detteEbitda,
  })

  // ── Date lisible ──────────────────────────────────────────────────────────
  const coursDateLabel = new Date(v.onePager.coursDate)
    .toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })
    .toUpperCase()

  // ── Logo (probe HEAD — fallback texte si absent) ──────────────────────────
  const logoPath = `${BASE}/images/analyses/${v.ticker.toLowerCase()}.png`
  let logoUrl: string | undefined
  try {
    const probe = await fetch(logoPath, { method: 'HEAD' })
    if (probe.ok && probe.headers.get('content-type')?.startsWith('image/')) {
      logoUrl = logoPath
    }
  } catch { /* logo absent → OnePager affiche le nom en texte */ }

  // ── Props ─────────────────────────────────────────────────────────────────
  const props: OnePagerProps = {
    nom:            v.title,
    ticker:         v.ticker,
    secteur:        v.secteur,
    geo:            v.geo,
    logoUrl,
    conviction:     v.conviction,
    positionnement: v.positionnement,
    thesis:         v.onePager.thesis,
    cours:          v.onePager.cours,
    devise:         v.onePager.devise,
    coursDateLabel,
    range52w:       v.onePager.range52w,
    prixCible:      { bas: v.prixCible.bas, haut: v.prixCible.haut },
    horizon:        v.horizon ?? '5 ans',
    metrics: {
      roic:              v.metrics.roic,
      wacc:              v.metrics.wacc,
      margeEbit:         v.metrics.margeEbit,
      croissanceCA3ans:  v.metrics.croissanceCA3ans,
      croissanceBPA3ans: v.metrics.croissanceBPA3ans,
      fcfYield:          v.metrics.fcfYield,
      evEbitda:          v.metrics.evEbitda,
      currentRatio:      v.metrics.currentRatio,
      detteEbitda:       v.metrics.detteEbitda,
    },
    scores,
  }

  // ── Polices ───────────────────────────────────────────────────────────────
  const [pfRegular, pfItalic, pfMedium, dmRegular, dmSemiBold] = await Promise.all([
    loadFont('PlayfairDisplay-Regular.ttf'),
    loadFont('PlayfairDisplay-Italic.ttf'),
    loadFont('PlayfairDisplay-Medium.ttf'),
    loadFont('DMSans-Regular.ttf'),
    loadFont('DMSans-SemiBold.ttf'),
  ])

  // ── Génération ────────────────────────────────────────────────────────────
  return new ImageResponse(
    <OnePager {...props} />,
    {
      width:  1080,
      height: 1350,
      fonts: [
        { name: 'Playfair', data: pfRegular,  weight: 400, style: 'normal' },
        { name: 'Playfair', data: pfItalic,   weight: 400, style: 'italic' },
        { name: 'Playfair', data: pfMedium,   weight: 500, style: 'normal' },
        { name: 'DMSans',   data: dmRegular,  weight: 400, style: 'normal' },
        { name: 'DMSans',   data: dmSemiBold, weight: 600, style: 'normal' },
      ],
    },
  )
}