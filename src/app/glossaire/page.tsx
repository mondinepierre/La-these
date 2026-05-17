'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import {
  glossaire,
  CATEGORIES,
  THEMES,
  THEME_LABELS,
  type GlossaireCategory,
  type GlossaireTheme,
} from '@/data/glossaire';

const CATEGORY_COLORS: Record<GlossaireCategory, string> = {
  'Fondamentaux': '#1B4332',
  'Marchés': '#2D6A4F',
  'Stratégies': '#52766B',
  'Enveloppes fiscales': '#C9A84C',
  'ETF & indices': '#3D5A80',
  'Analyse fondamentale': '#8B5E3C',
  'Mécanismes financiers': '#6B4423',
  'Stratégie & moat': '#3A5A40',
  'Analyse technique': '#4A4A6A',
  'Gestion du risque': '#7B2D2D',
  'Produits avancés': '#2D4A6A',
  'Ordres de bourse': '#5A5A3A',
};

export default function GlossairePage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<GlossaireCategory | 'Tous'>('Tous');
  const [activeTheme, setActiveTheme] = useState<GlossaireTheme | 'Tous'>('Tous');

  const filtered = useMemo(() => {
    let results = glossaire;

    if (activeCategory !== 'Tous') {
      results = results.filter((t) => t.category === activeCategory);
    }

    if (activeTheme !== 'Tous') {
      results = results.filter((t) => t.theme === activeTheme);
    }

    if (query.trim()) {
      const q = query.toLowerCase().trim();
      results = results.filter(
        (t) =>
          t.label.toLowerCase().includes(q) ||
          t.shortDef.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      );
    }

    return results.sort((a, b) => a.label.localeCompare(b.label, 'fr'));
  }, [query, activeCategory, activeTheme]);

  // Group by first letter for the A-Z display
  const grouped = useMemo(() => {
    const map: Record<string, typeof filtered> = {};
    for (const term of filtered) {
      const letter = term.label[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(term);
    }
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b, 'fr'));
  }, [filtered]);

  const allCategories: ('Tous' | GlossaireCategory)[] = ['Tous', ...CATEGORIES];
  const allThemes: ('Tous' | GlossaireTheme)[] = ['Tous', ...THEMES];

  const hasActiveFilter = activeCategory !== 'Tous' || activeTheme !== 'Tous' || query !== '';

  return (
    <main style={{ background: '#F7F4EF', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          background: '#1B4332',
          padding: '4rem 1.5rem 3rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '1rem',
            }}
          >
            Référence
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              color: '#F7F4EF',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            Glossaire
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.0625rem',
              color: '#A8C5B5',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            {glossaire.length} termes essentiels pour comprendre l'investissement long terme — des fondamentaux aux produits avancés, avec un filtre par secteur pour les notions spécialisées.
          </p>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: '480px', margin: '0 auto' }}>
            <svg
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: 0.5,
              }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F7F4EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher un terme…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.75rem',
                background: 'rgba(247, 244, 239, 0.1)',
                border: '1px solid rgba(247, 244, 239, 0.2)',
                borderRadius: '0.5rem',
                color: '#F7F4EF',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section
        style={{
          background: '#163829',
          padding: '0 1.5rem',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            gap: '0.25rem',
            padding: '0.5rem 0',
            whiteSpace: 'nowrap',
          }}
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: activeCategory === cat ? 600 : 400,
                background: activeCategory === cat ? '#C9A84C' : 'transparent',
                color: activeCategory === cat ? '#1B4332' : '#A8C5B5',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Theme filters (secteur) */}
      <section
        style={{
          background: '#0F2A1F',
          padding: '0 1.5rem',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderTop: '1px solid rgba(168, 197, 181, 0.1)',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 0',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#78A492',
              marginRight: '0.5rem',
              flexShrink: 0,
            }}
          >
            Secteur :
          </span>
          {allThemes.map((theme) => {
            const isActive = activeTheme === theme;
            const label = theme === 'Tous' ? 'Tous' : THEME_LABELS[theme];
            return (
              <button
                key={theme}
                onClick={() => setActiveTheme(theme)}
                style={{
                  padding: '0.375rem 0.875rem',
                  borderRadius: '2rem',
                  border: isActive ? 'none' : '1px solid rgba(201, 168, 76, 0.3)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: isActive ? 600 : 400,
                  background: isActive ? '#C9A84C' : 'transparent',
                  color: isActive ? '#1B4332' : '#A8C5B5',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '3rem 1.5rem 5rem',
        }}
      >
        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 0',
              fontFamily: 'var(--font-body)',
              color: '#78716C',
            }}
          >
            <p style={{ fontSize: '1.0625rem' }}>Aucun terme ne correspond à ta recherche.</p>
            <button
              onClick={() => {
                setQuery('');
                setActiveCategory('Tous');
                setActiveTheme('Tous');
              }}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1.25rem',
                background: 'transparent',
                border: '1px solid #C9A84C',
                borderRadius: '0.375rem',
                color: '#1B4332',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                cursor: 'pointer',
              }}
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <>
            {/* Result count */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2.5rem',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  color: '#78716C',
                  margin: 0,
                }}
              >
                {filtered.length} terme{filtered.length > 1 ? 's' : ''}
                {activeCategory !== 'Tous' ? ` dans "${activeCategory}"` : ''}
                {activeTheme !== 'Tous' ? ` · secteur ${THEME_LABELS[activeTheme as GlossaireTheme]}` : ''}
                {query ? ` pour "${query}"` : ''}
              </p>
              {hasActiveFilter && (
                <button
                  onClick={() => {
                    setQuery('');
                    setActiveCategory('Tous');
                    setActiveTheme('Tous');
                  }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    color: '#C9A84C',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: 0,
                  }}
                >
                  Réinitialiser
                </button>
              )}
            </div>

            {/* A-Z groups */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {grouped.map(([letter, terms]) => (
                <div key={letter}>
                  {/* Letter heading */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#1B4332',
                        minWidth: '1.75rem',
                      }}
                    >
                      {letter}
                    </span>
                    <div
                      style={{
                        flex: 1,
                        height: '1px',
                        background: '#E0DBCF',
                      }}
                    />
                  </div>

                  {/* Terms grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                      gap: '1rem',
                    }}
                  >
                    {terms.map((term) => (
                      <Link
                        key={term.slug}
                        href={`/glossaire/${term.slug}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <article
                          style={{
                            background: '#FFFFFF',
                            border: '1px solid #E0DBCF',
                            borderRadius: '0.5rem',
                            padding: '1.25rem',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            height: '100%',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(201, 168, 76, 0.12)';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = '#E0DBCF';
                            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                          }}
                        >
                          {/* Badges */}
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '0.375rem',
                              marginBottom: '0.625rem',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                padding: '0.2rem 0.625rem',
                                borderRadius: '2rem',
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                fontFamily: 'var(--font-sans)',
                                letterSpacing: '0.04em',
                                textTransform: 'uppercase',
                                color: CATEGORY_COLORS[term.category],
                                background: `${CATEGORY_COLORS[term.category]}14`,
                              }}
                            >
                              {term.category}
                            </span>
                            {term.theme && (
                              <span
                                style={{
                                  display: 'inline-block',
                                  padding: '0.2rem 0.625rem',
                                  borderRadius: '2rem',
                                  fontSize: '0.6875rem',
                                  fontWeight: 600,
                                  fontFamily: 'var(--font-sans)',
                                  letterSpacing: '0.04em',
                                  textTransform: 'uppercase',
                                  color: '#9C7F2E',
                                  background: 'rgba(201, 168, 76, 0.12)',
                                  border: '1px solid rgba(201, 168, 76, 0.25)',
                                }}
                              >
                                {THEME_LABELS[term.theme]}
                              </span>
                            )}
                          </div>

                          {/* Label */}
                          <h2
                            style={{
                              fontFamily: 'var(--font-serif)',
                              fontSize: '1.0625rem',
                              fontWeight: 700,
                              color: '#1B4332',
                              margin: '0 0 0.5rem',
                              lineHeight: 1.3,
                            }}
                          >
                            {term.label}
                          </h2>

                          {/* Short def */}
                          <p
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.875rem',
                              color: '#5C524A',
                              lineHeight: 1.6,
                              margin: 0,
                            }}
                          >
                            {term.shortDef}
                          </p>

                          {/* Arrow */}
                          <div
                            style={{
                              marginTop: '0.875rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.375rem',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.8125rem',
                              color: '#C9A84C',
                              fontWeight: 500,
                            }}
                          >
                            Lire la définition
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}