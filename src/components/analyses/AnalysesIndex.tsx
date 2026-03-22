'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { AnalyseCard } from '@/types/analyses'
import type { Secteur, ZoneGeo } from '@/types/analyses'
import { isValeurSuivie } from '@/types/analyses'
import AnalyseTypeBadge from './AnalyseTypeBadge'
import ConvictionBadge from './ConvictionBadge'
import StatutBadge from './StatutBadge'

// ── Helpers ───────────────────────────────────────────────────

function getUniques<T>(items: AnalyseCard[], key: (a: AnalyseCard) => T): T[] {
  return [...new Set(items.map(key))]
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// ── Composant carte ───────────────────────────────────────────

function AnalyseCard({ analyse }: { analyse: AnalyseCard }) {
  const estValeur      = isValeurSuivie(analyse)
  const enConstruction = analyse.statut === 'en-construction'
  const date           = estValeur ? analyse.lastUpdated : analyse.date

  return (
    <Link
      href={`/analyses/${analyse.slug}`}
      style={{ textDecoration: 'none' }}
    >
      <article
        style={{
          backgroundColor: enConstruction ? '#FDFCFA' : '#FFFFFF',
          border:          `1px solid ${enConstruction ? '#E8E2D9' : '#E0DBCF'}`,
          borderRadius:    '8px',
          padding:         '1.5rem',
          cursor:          'pointer',
          transition:      'border-color 0.15s',
          position:        'relative',
          opacity:         enConstruction ? 0.85 : 1,
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor = '#1B4332')
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor = enConstruction ? '#E8E2D9' : '#E0DBCF')
        }
      >
        {/* Badges */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '0.75rem', alignItems: 'center' }}>
          <AnalyseTypeBadge type={analyse.type} />
          {estValeur && <ConvictionBadge conviction={analyse.conviction} />}
          {estValeur && <StatutBadge positionnement={analyse.positionnement} />}

          {/* Badge en construction */}
          {enConstruction && (
            <span style={{
              display:         'inline-flex',
              alignItems:      'center',
              gap:             '4px',
              fontFamily:      'var(--font-sans)',
              fontSize:        '11px',
              fontWeight:      500,
              color:           '#92714A',
              backgroundColor: 'var(--color-gold-muted)',
              border:          '1px solid var(--color-gold)',
              borderRadius:    '4px',
              padding:         '2px 8px',
            }}>
              🚧 En cours de rédaction
            </span>
          )}
        </div>

        {/* Titre + ticker */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize:   '18px',
            color:      '#1B4332',
            margin:     0,
          }}>
            {analyse.title}
          </h2>
          {analyse.ticker && (
            <span style={{
              fontFamily:    'var(--font-sans)',
              fontSize:      '12px',
              color:         '#78716C',
              fontWeight:    500,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              {analyse.ticker}
            </span>
          )}
        </div>

        {/* Excerpt */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize:   '14px',
          color:      '#57534E',
          lineHeight: 1.6,
          margin:     '0.5rem 0 0.75rem',
        }}>
          {analyse.excerpt}
        </p>

        {/* Meta */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize:   '12px',
          color:      '#A8A29E',
          margin:     0,
        }}>
          {analyse.secteur} · {analyse.geo}
          {date && ` · ${estValeur ? 'Mis à jour' : ''} ${formatDate(date)}`}
        </p>
      </article>
    </Link>
  )
}

// ── Composant filtre ──────────────────────────────────────────

function FilterPill({
  label,
  active,
  onClick,
}: {
  label:   string
  active:  boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily:      'var(--font-sans)',
        fontSize:        '13px',
        padding:         '4px 14px',
        borderRadius:    '999px',
        border:          '1px solid',
        borderColor:     active ? '#1B4332' : '#D4CFC7',
        backgroundColor: active ? '#1B4332' : 'transparent',
        color:           active ? '#F7F4EF' : '#57534E',
        cursor:          'pointer',
        transition:      'all 0.15s',
        whiteSpace:      'nowrap',
      }}
    >
      {label}
    </button>
  )
}

// ── Index principal ───────────────────────────────────────────

type Props = { analyses: AnalyseCard[] }
type TypeFilter = 'tous' | 'valeur' | 'ponctuelle'

export function AnalysesIndex({ analyses }: Props) {
  const [typeFilter,    setTypeFilter]    = useState<TypeFilter>('tous')
  const [secteurFilter, setSecteurFilter] = useState<Secteur | 'tous'>('tous')
  const [geoFilter,     setGeoFilter]     = useState<ZoneGeo | 'tous'>('tous')

  const secteurs = useMemo(() => getUniques(analyses, (a) => a.secteur) as Secteur[], [analyses])
  const zones    = useMemo(() => getUniques(analyses, (a) => a.geo)     as ZoneGeo[], [analyses])

  const filtered = useMemo(() => {
    return analyses.filter((a) => {
      if (typeFilter    !== 'tous' && a.type    !== typeFilter)    return false
      if (secteurFilter !== 'tous' && a.secteur !== secteurFilter) return false
      if (geoFilter     !== 'tous' && a.geo     !== geoFilter)     return false
      return true
    })
  }, [analyses, typeFilter, secteurFilter, geoFilter])

  // Séparer actifs et en-construction dans chaque type
  const valeursActives       = filtered.filter((a) => a.type === 'valeur'     && a.statut !== 'en-construction')
  const valeursEnConstruct   = filtered.filter((a) => a.type === 'valeur'     && a.statut === 'en-construction')
  const ponctuellesActives   = filtered.filter((a) => a.type === 'ponctuelle' && a.statut !== 'en-construction')
  const ponctuellesEnConst   = filtered.filter((a) => a.type === 'ponctuelle' && a.statut === 'en-construction')

  const hasValeurs     = valeursActives.length > 0     || valeursEnConstruct.length > 0
  const hasPonctuelles = ponctuellesActives.length > 0 || ponctuellesEnConst.length > 0

  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem' }}>

      {/* En-tête */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{
          fontFamily:   'var(--font-display)',
          fontSize:     '36px',
          color:        '#1B4332',
          marginBottom: '0.5rem',
        }}>
          Analyses
        </h1>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize:   '16px',
          color:      '#78716C',
          maxWidth:   '520px',
          lineHeight: 1.6,
        }}>
          Valeurs suivies et analyses ponctuelles. Chaque publication est produite
          à des fins éducatives et ne constitue pas un conseil en investissement.
        </p>
      </div>

      {/* Filtres */}
      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#A8A29E', minWidth: '60px' }}>
            Type
          </span>
          {(['tous', 'valeur', 'ponctuelle'] as TypeFilter[]).map((t) => (
            <FilterPill
              key={t}
              label={t === 'tous' ? 'Tous' : t === 'valeur' ? 'Valeurs suivies' : 'Ponctuelles'}
              active={typeFilter === t}
              onClick={() => setTypeFilter(t)}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#A8A29E', minWidth: '60px' }}>
            Secteur
          </span>
          <FilterPill label="Tous" active={secteurFilter === 'tous'} onClick={() => setSecteurFilter('tous')} />
          {secteurs.map((s) => (
            <FilterPill key={s} label={s} active={secteurFilter === s} onClick={() => setSecteurFilter(s)} />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#A8A29E', minWidth: '60px' }}>
            Zone
          </span>
          <FilterPill label="Tous" active={geoFilter === 'tous'} onClick={() => setGeoFilter('tous')} />
          {zones.map((z) => (
            <FilterPill key={z} label={z} active={geoFilter === z} onClick={() => setGeoFilter(z)} />
          ))}
        </div>
      </div>

      {/* Résultats */}
      {filtered.length === 0 ? (
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#A8A29E', marginTop: '2rem' }}>
          Aucune analyse pour ces filtres.
        </p>
      ) : (
        <>
          {/* ── Valeurs suivies ───────────────────────────────── */}
          {hasValeurs && (typeFilter === 'tous' || typeFilter === 'valeur') && (
            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontFamily:    'var(--font-sans)',
                fontSize:      '11px',
                fontWeight:    600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         '#A8A29E',
                marginBottom:  '1rem',
              }}>
                Valeurs suivies ({valeursActives.length + valeursEnConstruct.length})
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {valeursActives.map((a) => (
                  <AnalyseCard key={a.slug} analyse={a} />
                ))}
              </div>

              {/* En construction — séparées par un séparateur */}
              {valeursEnConstruct.length > 0 && (
                <>
                  <div style={{
                    display:    'flex',
                    alignItems: 'center',
                    gap:        '0.75rem',
                    margin:     '1.5rem 0 1rem',
                  }}>
                    <div style={{ flex: 1, height: '1px', backgroundColor: '#E8E2D9' }} />
                    <span style={{
                      fontFamily:    'var(--font-sans)',
                      fontSize:      '11px',
                      color:         '#A8A29E',
                      whiteSpace:    'nowrap',
                      letterSpacing: '0.06em',
                    }}>
                      🚧 Prochainement
                    </span>
                    <div style={{ flex: 1, height: '1px', backgroundColor: '#E8E2D9' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {valeursEnConstruct.map((a) => (
                      <AnalyseCard key={a.slug} analyse={a} />
                    ))}
                  </div>
                </>
              )}
            </section>
          )}

          {/* ── Analyses ponctuelles ─────────────────────────── */}
          {hasPonctuelles && (typeFilter === 'tous' || typeFilter === 'ponctuelle') && (
            <section>
              <h2 style={{
                fontFamily:    'var(--font-sans)',
                fontSize:      '11px',
                fontWeight:    600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         '#A8A29E',
                marginBottom:  '1rem',
              }}>
                Analyses ponctuelles ({ponctuellesActives.length + ponctuellesEnConst.length})
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {ponctuellesActives.map((a) => (
                  <AnalyseCard key={a.slug} analyse={a} />
                ))}
              </div>

              {ponctuellesEnConst.length > 0 && (
                <>
                  <div style={{
                    display:    'flex',
                    alignItems: 'center',
                    gap:        '0.75rem',
                    margin:     '1.5rem 0 1rem',
                  }}>
                    <div style={{ flex: 1, height: '1px', backgroundColor: '#E8E2D9' }} />
                    <span style={{
                      fontFamily:    'var(--font-sans)',
                      fontSize:      '11px',
                      color:         '#A8A29E',
                      whiteSpace:    'nowrap',
                      letterSpacing: '0.06em',
                    }}>
                      🚧 Prochainement
                    </span>
                    <div style={{ flex: 1, height: '1px', backgroundColor: '#E8E2D9' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {ponctuellesEnConst.map((a) => (
                      <AnalyseCard key={a.slug} analyse={a} />
                    ))}
                  </div>
                </>
              )}
            </section>
          )}
        </>
      )}
    </main>
  )
}