import type { FrontmatterValeur } from '@/types/analyses'
import AnalyseTypeBadge from './AnalyseTypeBadge'
import ConvictionBadge from './ConvictionBadge'
import MentionLegale from './MentionLegale'
import MargesChart from './charts/MargesChart'
import RoicChart from './charts/RoicChart'
import RevenueChart from './charts/RevenueChart'
import MetricsDashboard from './MetricsDashboard'

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

      {/* En-tête */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <AnalyseTypeBadge type="valeur" />
          <ConvictionBadge conviction={frontmatter.conviction} />
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

      <MetricsDashboard metrics={frontmatter.metrics} tendances={frontmatter.tendances} />

      {cd?.revenue && <RevenueChart data={cd.revenue} />}
      {cd?.marges  && <MargesChart  data={cd.marges}  />}
      {cd?.roic    && <RoicChart    data={cd.roic}    />}

      {/* Graphiques — affichés seulement si les données sont présentes */}
      {cd?.revenue && <RevenueChart data={cd.revenue} />}
      {cd?.marges && <MargesChart data={cd.marges} />}
      {cd?.roic && <RoicChart data={cd.roic} />}

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