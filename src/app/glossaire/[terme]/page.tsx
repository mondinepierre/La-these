import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getTermBySlug,
  getRelatedTerms,
  getAllSlugs,
  CATEGORIES,
  type GlossaireCategory,
} from '@/data/glossaire';

// ─── Static generation ─────────────────────────────────────────────────────

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ terme: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ terme: string }>;
}): Promise<Metadata> {
  const { terme } = await params;
  const term = getTermBySlug(terme);
  if (!term) return {};

  return {
    title: `${term.label} — Glossaire · La Thèse`,
    description: term.shortDef,
  };
}

// ─── Category color map ────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<GlossaireCategory, string> = {
  'Fondamentaux': '#1B4332',
  'Marchés': '#2D6A4F',
  'Stratégies': '#40916C',
  'Enveloppes fiscales': '#C9A84C',
  'ETF & indices': '#1B4332',
  'Analyse fondamentale': '#8B5E3C',
  'Analyse technique': '#4A4A6A',
  'Gestion du risque': '#7B2D2D',
  'Produits avancés': '#2D4A6A',
  'Ordres de bourse': '#5A5A3A',
};

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function TermePage({ params }: { params: Promise<{ terme: string }> }) {
  const { terme } = await params;
  const term = getTermBySlug(terme);

  if (!term) return notFound();

  const related = getRelatedTerms(term);
  const paragraphs = term.definition.split('\n\n').filter(Boolean);
  const categoryColor = CATEGORY_COLORS[term.category];

  return (
    <main style={{ background: '#F7F4EF', minHeight: '100vh' }}>
      <style>{`
        .glossaire-related-card:hover { border-color: #C9A84C !important; }
      `}</style>
      {/* Breadcrumb + header */}
      <section
        style={{
          background: '#1B4332',
          padding: '2.5rem 1.5rem 3rem',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.75rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              color: '#A8C5B5',
            }}
          >
            <Link
              href="/glossaire"
              style={{ color: '#A8C5B5', textDecoration: 'none' }}
            >
              Glossaire
            </Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <span style={{ color: '#F7F4EF' }}>{term.label}</span>
          </nav>

          {/* Category badge */}
          <span
            style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              borderRadius: '2rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: categoryColor === '#C9A84C' ? '#1B4332' : '#F7F4EF',
              background: categoryColor,
              marginBottom: '1rem',
            }}
          >
            {term.category}
          </span>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: '#F7F4EF',
              lineHeight: 1.2,
              margin: '0 0 1rem',
            }}
          >
            {term.label}
          </h1>

          {/* Lead */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              color: '#A8C5B5',
              lineHeight: 1.7,
              margin: 0,
              borderLeft: '3px solid #C9A84C',
              paddingLeft: '1rem',
            }}
          >
            {term.shortDef}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '3rem 1.5rem',
        }}
      >
        {/* Definition */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E0DBCF',
            borderRadius: '0.75rem',
            padding: '2rem 2.25rem',
            marginBottom: '2.5rem',
          }}
        >
          {paragraphs.map((para, i) => {
            // Detect list items starting with "— " or "- "
            if (para.includes('\n—') || para.match(/^(Phase|—|–|\d+\.)/)) {
              // Render as structured paragraphs preserving line breaks
              return (
                <div
                  key={i}
                  style={{
                    marginBottom: i < paragraphs.length - 1 ? '1.25rem' : 0,
                  }}
                >
                  {para.split('\n').map((line, j) => {
                    const isListItem = line.startsWith('—') || line.startsWith('–') || line.match(/^Phase \d/);
                    return (
                      <p
                        key={j}
                        style={{
                          fontFamily: isListItem ? 'var(--font-sans)' : 'var(--font-body)',
                          fontSize: isListItem ? '0.9375rem' : '1rem',
                          color: isListItem ? '#3A3530' : '#2C2520',
                          lineHeight: 1.75,
                          margin: j === 0 ? '0 0 0.25rem' : '0.25rem 0 0',
                          paddingLeft: isListItem ? '0.5rem' : 0,
                        }}
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
              );
            }

            return (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: '#2C2520',
                  lineHeight: 1.8,
                  margin: i < paragraphs.length - 1 ? '0 0 1.25rem' : 0,
                }}
              >
                {para}
              </p>
            );
          })}
        </div>

        {/* Modules where this term appears */}
        {term.modules.length > 0 && (
          <div style={{ marginBottom: '2.5rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#1B4332',
                marginBottom: '1rem',
              }}
            >
              Vu dans ces modules
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.625rem',
              }}
            >
              {term.modules.map((mod) => (
                <Link
                  key={mod.href}
                  href={mod.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: '#1B4332',
                    color: '#F7F4EF',
                    borderRadius: '0.375rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'background 0.15s ease',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  {mod.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related terms */}
        {related.length > 0 && (
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#1B4332',
                marginBottom: '1rem',
              }}
            >
              Termes liés
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/glossaire/${rel.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="glossaire-related-card"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E0DBCF',
                      borderRadius: '0.5rem',
                      padding: '1rem',
                      transition: 'border-color 0.15s ease',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: CATEGORY_COLORS[rel.category],
                        margin: '0 0 0.375rem',
                      }}
                    >
                      {rel.category}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: '#1B4332',
                        margin: '0 0 0.375rem',
                      }}
                    >
                      {rel.label}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        color: '#78716C',
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {rel.shortDef}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to glossaire */}
        <div
          style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid #E0DBCF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <Link
            href="/glossaire"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#1B4332',
              textDecoration: 'none',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Retour au glossaire
          </Link>
          <Link
            href="/academie"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.125rem',
              background: '#1B4332',
              color: '#F7F4EF',
              borderRadius: '0.375rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Explorer l'Académie
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}