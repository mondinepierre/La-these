import type { FrontmatterPonctuelle } from '@/types/analyses'
import AnalyseTypeBadge from './AnalyseTypeBadge'
import MentionLegale from './MentionLegale'

type Props = {
  frontmatter: FrontmatterPonctuelle
  children:    React.ReactNode
}

export default function AnalysePonctuelleTemplate({ frontmatter, children }: Props) {
  const date = new Date(frontmatter.date).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  const isDev    = process.env.NODE_ENV === 'development'
  const isLocked = frontmatter.statut === 'en-construction' && !isDev

  return (
    <article className="max-w-content mx-auto px-6 py-12">

      {/* ── Overlay production ───────────────────────────────── */}
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
              Cette analyse est en cours de préparation.<br />
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
            <strong>[DEV]</strong> Analyse en construction — overlay masqué en développement.
            En production, cette page sera verrouillée.
          </p>
        </div>
      )}

      {/* ── En-tête ───────────────────────────────────────────── */}
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

      {/* ── Corps MDX ─────────────────────────────────────────── */}
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