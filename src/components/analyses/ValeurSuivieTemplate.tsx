import React from 'react'
import type { FrontmatterValeur } from '@/types/analyses'
import AnalyseTypeBadge from './AnalyseTypeBadge'
import ConvictionBadge from './ConvictionBadge'
import PositionnementBadge from './PositionnementBadge'
import MentionLegale from './MentionLegale'
import MargesChart from './charts/MargesChart'
import RoicChart from './charts/RoicChart'
import RevenueChart from './charts/RevenueChart'
import FcfChart from './charts/FcfChart'
import GeoRevenueMap from './charts/GeoRevenueMap'
import MetricsDashboard from './MetricsDashboard'

type MDXContent = React.ComponentType<{ components?: Record<string, React.ComponentType> }>

type Props = {
  frontmatter: FrontmatterValeur
  Content:     MDXContent
}

export default function ValeurSuivieTemplate({ frontmatter, Content }: Props) {
  const lastUpdated = new Date(frontmatter.lastUpdated).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  const cd = frontmatter.chartData
  const { prixCible: pc } = frontmatter
  const aPrixCible = pc.bas > 0 || pc.haut > 0

  // ── Composants injectables dans le MDX ───────────────────
  const RevenueGraph = cd?.revenue
    ? () => <RevenueChart data={cd.revenue!} />
    : () => null

  const MargesGraph = cd?.marges
    ? () => <MargesChart data={cd.marges!} />
    : () => null

  const RoicGraph = cd?.roic
    ? () => <RoicChart data={cd.roic!} />
    : () => null

  const FcfGraph = cd?.fcf
    ? () => <FcfChart data={cd.fcf!} />
    : () => null

  const GeoMap = cd?.geoRevenue
    ? () => <GeoRevenueMap data={cd.geoRevenue!} source="rapport annuel" />
    : () => null

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">

      {/* Bandeau en construction */}
      {frontmatter.statut === 'en-construction' && (
        <div style={{
          backgroundColor: 'var(--color-gold-muted)',
          border:          '1px solid var(--color-gold)',
          borderLeft:      '4px solid var(--color-gold)',
          padding:         '12px 16px',
          display:         'flex',
          alignItems:      'center',
          gap:             '10px',
          marginBottom:    '2rem',
          borderRadius:    'var(--radius-md)',
        }}>
          <span style={{ fontSize: '16px', flexShrink: 0 }}>🚧</span>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500, color: 'var(--color-ink)', margin: 0 }}>
            Cette fiche est en cours de rédaction. Les données affichées sont partielles.
          </p>
        </div>
      )}

      {/* En-tête */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <AnalyseTypeBadge type="valeur" />
          <ConvictionBadge conviction={frontmatter.conviction} />
          <PositionnementBadge positionnement={frontmatter.positionnement} />
        </div>

        <div className="flex items-baseline gap-3 mb-2">
          <h1 className="font-serif text-3xl font-bold text-[#1B4332] leading-snug">
            {frontmatter.title}
          </h1>
          <span className="text-lg font-sans text-stone-400 font-medium">
            {frontmatter.ticker}
          </span>
        </div>

        <p className="text-stone-500 font-sans text-sm">
          {frontmatter.secteur} · {frontmatter.geo} · {frontmatter.portefeuille}
        </p>

        {aPrixCible && (
          <div style={{
            display:         'inline-flex',
            alignItems:      'center',
            gap:             '6px',
            marginTop:       '10px',
            padding:         '4px 12px',
            backgroundColor: 'var(--color-gold-muted)',
            border:          '1px solid var(--color-gold)',
            borderRadius:    'var(--radius-sm)',
          }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--color-ink-muted)' }}>
              Prix cible
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 700, color: 'var(--color-ink)' }}>
              {pc.bas} – {pc.haut} {pc.devise}
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--color-ink-muted)' }}>
              · MoS : {frontmatter.marginOfSafety}
            </span>
          </div>
        )}

        <p className="text-stone-400 font-sans text-xs mt-3">
          Horizon : {frontmatter.horizon} · Mise à jour : {lastUpdated}
        </p>
      </header>

      {/* Tableau de bord — toujours en haut */}
      <MetricsDashboard metrics={frontmatter.metrics} tendances={frontmatter.tendances} />

      {/* Corps MDX — tous les graphiques injectés, positionnés librement */}
      <div className="prose prose-stone max-w-none mt-10
        prose-headings:font-serif prose-headings:text-[#1B4332]
        prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:border-b prose-h2:border-stone-200 prose-h2:pb-2
        prose-p:font-serif prose-p:text-stone-700 prose-p:leading-relaxed
        prose-strong:text-[#1B4332]
        prose-a:text-[#C9A84C] prose-a:no-underline hover:prose-a:underline
        prose-ul:font-serif prose-li:text-stone-700
        prose-table:font-sans prose-th:text-[#1B4332] prose-td:text-stone-600">
        <Content components={{ RevenueGraph, MargesGraph, RoicGraph, FcfGraph, GeoMap }} />
      </div>

      <MentionLegale />
    </article>
  )
}