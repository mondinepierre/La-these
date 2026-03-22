'use client'

import { useState, useMemo } from 'react'
import { ETFEntry, CategorieETF, CATEGORIES, ETF_LIBRARY } from '@/data/etf-library'

const C = {
  primary:       '#1B4332',
  ivory:         '#F7F4EF',
  gold:          '#C9A84C',
  border:        '#E0DBCF',
  borderInactive:'#D4CFC7',
  textPrimary:   '#1a1a1a',
  textSecondary: '#57534E',
  textFaint:     '#A8A29E',
  success:       '#16a34a',
  amber:         '#b45309',
}

type FilterCat = CategorieETF | 'all'
type FilterPea = 'all' | 'pea'

const CATEGORIE_ORDER: CategorieETF[] = [
  'coeur',
  'indices',
  'sectoriel',
  'geo',
  'matieres-premieres',
]

// ── FilterPill — même style que AnalysesIndex ─────────────────
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
        borderColor:     active ? C.primary : C.borderInactive,
        backgroundColor: active ? C.primary : 'transparent',
        color:           active ? C.ivory   : C.textSecondary,
        cursor:          'pointer',
        transition:      'all 0.15s',
        whiteSpace:      'nowrap',
      }}
    >
      {label}
    </button>
  )
}

// ── TER ───────────────────────────────────────────────────────
function TerBadge({ ter }: { ter: number }) {
  const color = ter <= 0.15 ? C.success : ter <= 0.35 ? C.textPrimary : C.amber
  return (
    <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', fontWeight: ter <= 0.15 ? 600 : 400, color }}>
      {ter.toFixed(2)}%
    </span>
  )
}

// ── Réplication + dividendes ──────────────────────────────────
function ReplicationCell({ replication, dividendes }: { replication: 'physique' | 'synthetique'; dividendes: 'capitalisant' | 'distribuant' }) {
  const col = replication === 'physique'
    ? { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' }
    : { bg: '#fffbeb', text: '#92400e', border: '#fde68a' }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{ fontSize: '0.7rem', padding: '1px 7px', borderRadius: 9999, border: `1px solid ${col.border}`, background: col.bg, color: col.text, display: 'inline-block', width: 'fit-content' }}>
        {replication === 'physique' ? 'Physique' : 'Synthétique'}
      </span>
      <span style={{ fontSize: '0.75rem', color: C.textSecondary }}>
        {dividendes === 'capitalisant' ? 'Acc' : 'Dist'}
      </span>
    </div>
  )
}

// ── Ligne ETF ────────────────────────────────────────────────
function EtfRow({ etf }: { etf: ETFEntry }) {
  return (
    <tr style={{ borderBottom: `1px solid ${C.border}` }}>
      <td style={{ padding: '10px 12px 10px 0', verticalAlign: 'middle', minWidth: 160, maxWidth: 220 }}>
        <div title={etf.note} style={{ cursor: etf.note ? 'help' : 'default' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 500, color: C.textPrimary, lineHeight: 1.3 }}>
            {etf.recommande && (
              <span style={{ color: C.gold, marginRight: 4, fontSize: '0.8rem' }} title="Sélection éditoriale">★</span>
            )}
            {etf.nom}
            {etf.note && (
              <span style={{ color: C.border, fontSize: '0.7rem', marginLeft: 4 }}>ⓘ</span>
            )}
          </span>
        </div>
      </td>
      <td style={{ padding: '10px 12px 10px 0', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <code style={{ fontSize: '0.875rem', fontWeight: 700, color: C.primary }}>{etf.ticker}</code>
          <code style={{ fontSize: '0.68rem', color: C.textSecondary }}>{etf.isin}</code>
        </div>
      </td>
      <td style={{ padding: '10px 12px 10px 0', verticalAlign: 'middle' }}>
        <span style={{ fontSize: '0.8rem', color: C.textSecondary, lineHeight: 1.3 }}>{etf.indice}</span>
      </td>
      <td style={{ padding: '10px 12px 10px 0', verticalAlign: 'middle' }}>
        <ReplicationCell replication={etf.replication} dividendes={etf.dividendes} />
      </td>
      <td style={{ padding: '10px 12px 10px 0', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
        <TerBadge ter={etf.ter} />
      </td>
      <td style={{ padding: '10px 0', verticalAlign: 'middle', textAlign: 'center' }}>
        {etf.peaEligible ? (
          <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 4, background: C.primary, color: C.ivory, fontSize: '0.7rem', fontWeight: 600 }}>
            PEA
          </span>
        ) : (
          <span style={{ fontSize: '0.75rem', color: C.textSecondary }}>CTO</span>
        )}
      </td>
    </tr>
  )
}

const TABLE_HEADERS = ['Nom', 'Ticker / ISIN', 'Indice suivi', 'Réplication / Div.', 'TER', 'Enveloppe']

// ── Composant principal ───────────────────────────────────────
export default function EtfLibraryClient() {
  const [filterCat, setFilterCat] = useState<FilterCat>('all')
  const [filterPea, setFilterPea] = useState<FilterPea>('all')

  const filtered = useMemo(() => {
    return ETF_LIBRARY.filter((etf) => {
      if (filterCat !== 'all' && etf.categorie !== filterCat) return false
      if (filterPea === 'pea' && !etf.peaEligible) return false
      return true
    })
  }, [filterCat, filterPea])

  const grouped = useMemo(() => {
    const groups: Record<CategorieETF, ETFEntry[]> = {
      coeur: [], indices: [], sectoriel: [], geo: [], 'matieres-premieres': [],
    }
    filtered.forEach((etf) => { groups[etf.categorie].push(etf) })
    return groups
  }, [filtered])

  return (
    <div>
      {/* ── Filtres ── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: C.ivory, borderBottom: `1px solid ${C.border}`, paddingBottom: 16, marginBottom: 32, paddingTop: 8 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: C.textFaint, minWidth: '60px' }}>
              Catégorie
            </span>
            <FilterPill label="Tous" active={filterCat === 'all'} onClick={() => setFilterCat('all')} />
            {CATEGORIE_ORDER.map((cat) => (
              <FilterPill key={cat} label={CATEGORIES[cat].label} active={filterCat === cat} onClick={() => setFilterCat(cat)} />
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: C.textFaint, minWidth: '60px' }}>
              Enveloppe
            </span>
            <FilterPill label="Tous" active={filterPea === 'all'} onClick={() => setFilterPea('all')} />
            <FilterPill label="🇫🇷 PEA uniquement" active={filterPea === 'pea'} onClick={() => setFilterPea(p => p === 'pea' ? 'all' : 'pea')} />
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-sans)', fontSize: '12px', color: C.textFaint }}>
              {filtered.length === ETF_LIBRARY.length
                ? `${ETF_LIBRARY.length} ETF`
                : `${filtered.length} / ${ETF_LIBRARY.length} ETF`}
            </span>
          </div>

        </div>
      </div>

      {/* ── Résultats ── */}
      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '64px 0', color: C.textSecondary }}>
          Aucun ETF ne correspond à ces critères.
        </p>
      ) : (
        CATEGORIE_ORDER.map((cat) => {
          const etfs = grouped[cat]
          if (etfs.length === 0) return null
          return (
            <section key={cat} style={{ marginBottom: 56 }}>
              <div style={{ marginBottom: 16 }}>
                <h2 style={{ fontSize: '1.5rem', color: C.primary, marginBottom: 4, fontFamily: 'var(--font-serif, Georgia, serif)' }}>
                  {CATEGORIES[cat].label}
                </h2>
                <p style={{ fontSize: '0.875rem', color: C.textSecondary }}>
                  {CATEGORIES[cat].description}
                </p>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                    {TABLE_HEADERS.map((col) => (
                      <th key={col} style={{ paddingBottom: 8, paddingRight: 12, textAlign: 'left', fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: C.textSecondary, whiteSpace: 'nowrap' }}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {etfs.map((etf) => <EtfRow key={etf.id} etf={etf} />)}
                </tbody>
              </table>
            </section>
          )
        })
      )}

      {/* ── Légende ── */}
      <div style={{ marginTop: 16, paddingTop: 24, borderTop: `1px solid ${C.border}`, display: 'flex', flexWrap: 'wrap', gap: '8px 24px', fontSize: '0.75rem', color: C.textSecondary }}>
        <span><span style={{ color: C.success, fontWeight: 600 }}>vert</span> TER ≤ 0,15 % — excellent</span>
        <span><span style={{ color: C.amber, fontWeight: 600 }}>ambre</span> TER &gt; 0,35 % — sectoriel, normal</span>
        <span><span style={{ color: C.gold }}>★</span> sélection éditoriale</span>
        <span>Survol du nom ⓘ → note détaillée</span>
      </div>
    </div>
  )
}