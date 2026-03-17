import type { FrontmatterPonctuelle } from '@/types/analyses'
import AnalyseTypeBadge from './AnalyseTypeBadge'
import MentionLegale from './MentionLegale'

type Props = {
  frontmatter: FrontmatterPonctuelle
  children: React.ReactNode
}

export default function AnalysePonctuelleTemplate({ frontmatter, children }: Props) {
  const date = new Date(frontmatter.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

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
        <div className="flex items-center gap-3 mb-4">
          <AnalyseTypeBadge type="ponctuelle" />
          {frontmatter.ticker && (
            <span className="text-xs font-sans font-medium text-stone-400 uppercase tracking-widest">
              {frontmatter.ticker}
            </span>
          )}
        </div>

        <h1 className="font-serif text-3xl font-bold text-[#1B4332] leading-snug mb-3">
          {frontmatter.title}
        </h1>

        <p className="text-stone-500 font-sans text-sm">
          {frontmatter.secteur} · {frontmatter.geo} · {date}
        </p>
      </header>

      {/* Corps MDX */}
      <div className="prose prose-stone max-w-none
        prose-headings:font-serif prose-headings:text-[#1B4332]
        prose-p:font-serif prose-p:text-stone-700 prose-p:leading-relaxed
        prose-strong:text-[#1B4332]
        prose-a:text-[#C9A84C] prose-a:no-underline hover:prose-a:underline
        prose-ul:font-serif prose-li:text-stone-700
        prose-table:font-sans prose-th:text-[#1B4332] prose-td:text-stone-600">
        {children}
      </div>

      <MentionLegale />
    </article>
  )
}