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

// ── Disclaimer verdict ────────────────────────────────────────
// Composant injecté dans le MDX via <DisclaimerVerdict />
// À placer juste avant les niveaux de prix personnels dans le Verdict
function DisclaimerVerdictBlock() {
  return (
    <div style={{
      backgroundColor: '#F7F4EF',
      border:          '1px solid #E0DBCF',
      borderLeft:      '3px solid #78716C',
      borderRadius:    '4px',
      padding:         '12px 16px',
      margin:          '1.5rem 0',
    }}>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize:   '12px',
        color:      '#78716C',
        lineHeight: 1.65,
        margin:     0,
      }}>
        <strong style={{ color: '#57534E' }}>Note personnelle.</strong>{' '}
        Les niveaux de prix qui suivent sont les miens — ils reflètent ma propre analyse,
        ma situation patrimoniale, mon horizon de détention et ma tolérance au risque personnels.
        Ils ne constituent pas une recommandation d'achat ou de vente.
        Chaque investisseur doit conduire sa propre analyse avant toute décision.
      </p>
    </div>
  )
}

// ── Note d'analyse ────────────────────────────────────────────
function NoteAnalyseBlock({ children }: { children?: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'var(--font-sans)',
      fontSize:   '12px',
      color:      'var(--color-ink-faint)',
      fontStyle:  'italic',
      marginTop:  '-2.5rem',   // ← remonte pour coller au graphique
      marginBottom: '1.5rem',
    }}>
      {children}
    </p>
  )
}

export default function ValeurSuivieTemplate({ frontmatter, Content }: Props) {

  const lastUpdated = new Date(frontmatter.lastUpdated).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  const cd = frontmatter.chartData
  const { prixCible: pc } = frontmatter
  const aPrixCible = pc.bas > 0 || pc.haut > 0

  const isDev    = process.env.NODE_ENV === 'development'
  const isLocked = frontmatter.statut === 'en-construction' && !isDev

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
    ? (props: { title?: string; name?: string; concurrent1?: string; concurrent2?: string }) => (
        <ValuationRadarChart
          data={cd.valuationCompare!}
          title={props.title}
          name={props.name}
          concurrent1={props.concurrent1}
          concurrent2={props.concurrent2}
        />
      )
    : () => null

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

      {/* ── Overlay en-construction (production uniquement) ─── */}
      {isLocked && (
        <div style={{
          position:             'fixed',
          inset:                0,
          zIndex:               50,
          backdropFilter:       'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          backgroundColor:      'rgba(247, 244, 239, 0.85)',
          display:              'flex',
          flexDirection:        'column',
          alignItems:           'center',
          justifyContent:       'center',
          padding:              '1.5rem',
        }}>
          <div style={{
            backgroundColor: 'var(--color-gold-muted)',
            border:          '1px solid var(--color-gold)',
            borderRadius:    'var(--radius-md)',
            padding:         '2.5rem 3rem',
            textAlign:       'center',
            maxWidth:        '480px',
            boxShadow:       '0 8px 32px rgba(0,0,0,0.08)',
          }}>
            <p style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚧</p>
            <h2 style={{
              fontFamily:   'var(--font-display)',
              fontSize:     '22px',
              fontWeight:   700,
              color:        'var(--color-ink)',
              marginBottom: '0.75rem',
            }}>
              Analyse en cours de rédaction
            </h2>
            <p style={{
              fontFamily:   'var(--font-sans)',
              fontSize:     '14px',
              color:        'var(--color-ink-muted)',
              lineHeight:   1.7,
              marginBottom: '1.5rem',
            }}>
              Cette fiche est en cours de préparation.<br />
              Elle sera publiée prochainement.
            </p>
            <a
              href="/analyses"
              style={{
                display:         'inline-block',
                fontFamily:      'var(--font-sans)',
                fontSize:        '13px',
                fontWeight:      600,
                color:           'var(--color-accent)',
                textDecoration:  'none',
                padding:         '8px 20px',
                border:          '1px solid var(--color-accent)',
                borderRadius:    'var(--radius-sm)',
                backgroundColor: 'transparent',
              }}
            >
              ← Voir toutes les analyses
            </a>
          </div>
        </div>
      )}

      {/* ── Bandeau dev ──────────────────────────────────────── */}
      {frontmatter.statut === 'en-construction' && isDev && (
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
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize:   '13px',
            fontWeight: 500,
            color:      'var(--color-ink)',
            margin:     0,
          }}>
            <strong>[DEV]</strong> Fiche en construction — overlay masqué en développement.
            En production, cette page sera verrouillée.
          </p>
        </div>
      )}

      {/* ── En-tête ───────────────────────────────────────────── */}
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
              Mon prix cible personnel
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

      {/* ── Tableau de bord ───────────────────────────────────── */}
      <MetricsDashboard metrics={frontmatter.metrics} tendances={frontmatter.tendances} />

      {/* ── Corps MDX ─────────────────────────────────────────── */}
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
          DisclaimerVerdict: DisclaimerVerdictBlock,
          NoteAnalyse: NoteAnalyseBlock,
          ...MetricGraphs,
        }} />
      </div>

      {/* ── Termes liés — glossaire ───────────────────────────── */}
      {frontmatter.glossaire && frontmatter.glossaire.length > 0 && (
        <div style={{
          marginTop:  '3rem',
          paddingTop: '1.25rem',
          borderTop:  '1px solid var(--color-stone-border)',
        }}>
          <p style={{
            fontFamily:    'var(--font-sans)',
            fontSize:      '11px',
            fontWeight:    500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color:         'var(--color-ink-faint)',
            marginBottom:  '0.6rem',
          }}>
            Termes liés
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {frontmatter.glossaire.map(slug => (
              <a
                key={slug}
                href={`/glossaire/${slug}`}
                style={{
                  fontFamily:      'var(--font-sans)',
                  fontSize:        '13px',
                  color:           'var(--color-accent)',
                  textDecoration:  'none',
                  padding:         '3px 10px',
                  border:          '1px solid var(--color-accent-muted)',
                  borderRadius:    '4px',
                  backgroundColor: 'var(--color-accent-muted)',
                }}
              >
                {slug.replace(/-/g, ' ')}
              </a>
            ))}
          </div>
        </div>
      )}

      <MentionLegale />
    </article>
  )
}