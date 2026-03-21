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
import MetricChart from './charts/MetricChart'
import RoicWaccChart from './charts/RoicWaccChart'
import SegmentRevenueChart from './charts/SegmentRevenueChart'
import MetricsDashboard from './MetricsDashboard'
import ValuationBarChart from './charts/ValuationBarChart'
import ValuationRadarChart from './charts/ValuationRadarChart'

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

  // ── Composants graphiques simples ────────────────────────────
  const RevenueGraph = cd?.revenue
    ? (props: { title?: string; unit?: string }) => (
        <RevenueChart data={cd.revenue!} title={props.title} unit={props.unit} />
      )
    : () => null

  const MargesGraph = cd?.marges
    ? (props: { title?: string }) => (
        <MargesChart data={cd.marges!} title={props.title} />
      )
    : () => null

  const RoicGraph = cd?.roic
    ? (props: { title?: string; wacc?: number }) => (
        <RoicChart data={cd.roic!} title={props.title} wacc={props.wacc} />
      )
    : () => null

  const FcfGraph = cd?.fcf
    ? (props: { title?: string; unit?: string }) => (
        <FcfChart data={cd.fcf!} title={props.title} unit={props.unit} />
      )
    : () => null

  const GeoMap = cd?.geoRevenue
    ? (props: { source?: string; title?: string }) => (
        <GeoRevenueMap
          data={cd.geoRevenue!}
          source={props.source ?? 'rapport annuel'}
          title={props.title}
        />
      )
    : () => null

  // ── Composants graphiques comparaison des valeurs ─────────────────────────────   
  const ValuationBar = cd?.valuationCompare
  ? (props: { title?: string; name?: string }) => (
      <ValuationBarChart
        data={cd.valuationCompare!}
        title={props.title}
        name={props.name}
      />
    )
  : () => null

const ValuationRadar = cd?.valuationCompare
  ? (props: { title?: string; name?: string }) => (
      <ValuationRadarChart
        data={cd.valuationCompare!}
        title={props.title}
        name={props.name}
      />
    )
  : () => null

  // ── Composants graphiques avancés ─────────────────────────────
  const RoicWacc = cd?.roicVsWacc
    ? (props: { title?: string }) => (
        <RoicWaccChart data={cd.roicVsWacc!} title={props.title} />
      )
    : () => null

  const SegmentGraph = cd?.segmentRevenue
    ? (props: { title?: string; unit?: string }) => (
        <SegmentRevenueChart
          data={cd.segmentRevenue!}
          title={props.title}
          unit={props.unit}
        />
      )
    : () => null

  // ── Graphiques métriques libres (un composant par série) ──────
  const MetricGraphs = cd?.metricHistory
    ? Object.fromEntries(
        cd.metricHistory.map(serie => [
          `MetricGraph_${serie.label.replace(/[^a-zA-Z0-9]/g, '_')}`,
          (props: { title?: string }) => (
            <MetricChart serie={serie} title={props.title} />
          ),
        ])
      )
    : {}

  return (
    <article className="max-w-content mx-auto px-6 py-12">

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

      {/* Tableau de bord */}
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
        <Content components={{
          RevenueGraph, 
          MargesGraph, 
          RoicGraph, 
          FcfGraph,
          GeoMap, 
          RoicWacc, 
          SegmentGraph,
          ValuationBar,
          ValuationRadar,
          ...MetricGraphs,
        }} />
      </div>

      <MentionLegale />
    </article>
  )
}