import type { FrontmatterValeur } from '@/types/analyses'
import AnalyseTypeBadge from './AnalyseTypeBadge'
import ConvictionBadge from './ConvictionBadge'
import MentionLegale from './MentionLegale'
import MargesChart from './charts/MargesChart'
import RoicChart from './charts/RoicChart'
import RevenueChart from './charts/RevenueChart'
import FcfChart from './charts/FcfChart'
import MetricsDashboard from './MetricsDashboard'
import PositionnementBadge from './PositionnementBadge'

type Props = {
  frontmatter: FrontmatterValeur
  children: React.ReactNode
}

export default function ValeurSuivieTemplate({ frontmatter, children }: Props) {
  const lastUpdated = new Date(frontmatter.lastUpdated).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const cd = frontmatter.chartData

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">

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
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize:   '13px',
            fontWeight: 500,
            color:      'var(--color-ink)',
            margin:     0,
          }}>
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
          {frontmatter.secteur} · {frontmatter.geo}
        </p>

        <p className="text-stone-400 font-sans text-xs mt-2">
          Mise à jour : {lastUpdated}
        </p>
      </header>

      {/* Tableau de bord */}
      <MetricsDashboard metrics={frontmatter.metrics} tendances={frontmatter.tendances} />

      {/* Graphiques — un seul bloc, chacun conditionnel */}
      {cd?.revenue && <RevenueChart data={cd.revenue} />}
      {cd?.marges  && <MargesChart  data={cd.marges}  />}
      {cd?.roic    && <RoicChart    data={cd.roic}    />}
      {cd?.fcf     && <FcfChart     data={cd.fcf}     />}

      {/* Corps MDX */}
      <div className="prose prose-stone max-w-none mt-10
        prose-headings:font-serif prose-headings:text-[#1B4332]
        prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:border-b prose-h2:border-stone-200 prose-h2:pb-2
        prose-p:font-serif prose-p:text-stone-700 prose-p:leading-relaxed
        prose-strong:text-[#1B4332]
        prose-a:text-[#C9A84C] prose-a:no-underline hover:prose-a:underline
        prose-ul:font-serif prose-li:text-stone-700">
        {children}
      </div>

      <MentionLegale />
    </article>
  )
}