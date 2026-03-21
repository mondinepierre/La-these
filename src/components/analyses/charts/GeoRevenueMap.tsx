'use client'

import { useState, useMemo } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import type { GeoPoint } from '@/types/analyses'

// ── Topojson public ───────────────────────────────────────────
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// ── Palette design system ─────────────────────────────────────
const PALETTE = {
  'ink':          '#1C1917',
  'ink-muted':    '#78716C',
  'ink-faint':    '#A8A29E',
  'stone-warm':   '#F7F4EF',
  'stone-border': '#E0DBCF',
  'stone-soft':   '#C4BEB4',
  'accent':       '#1B4332',
  'accent-light': '#2D6A4F',
  'accent-muted': '#D6EDDF',
  'gold':         '#C9A84C',
  'gold-muted':   '#F0E4C0',
} as const

type PaletteCle = keyof typeof PALETTE

// ── Paramètres à ajuster ──────────────────────────────────────
const COULEUR_SANS_DONNEE: PaletteCle = 'stone-soft'
const OPACITE_SANS_DONNEE = 0.6

// ── Couleurs par rang ─────────────────────────────────────────
const VERTS_PAR_RANG = [
  '#1B4332',  // rang 2 — vert plein
  '#2D6A4F',  // rang 3
  '#52B788',  // rang 4
  '#95D5B2',  // rang 5
  '#D6EDDF',  // rang 6+
]

// ── Correspondance région → codes ISO numériques ──────────────
const REGION_TO_CODES: Record<string, string[]> = {
  'États-Unis':       ['840'],
  'Canada':           ['124'],
  'Mexique':          ['484'],
  'France':           ['250'],
  'Allemagne':        ['276'],
  'Royaume-Uni':      ['826'],
  'Chine':            ['156'],
  'Japon':            ['392'],
  'Corée du Sud':     ['410'],
  'Taïwan':           ['158'],
  'Inde':             ['356'],
  'Australie':        ['36'],
  'Russie':           ['643'],
  'Brésil':           ['76'],
  'Amérique du Nord': ['840', '124', '484'],
  'Europe': [
    '8','20','40','56','70','100','112','191','196','203',
    '208','233','246','250','276','300','348','352','372',
    '380','428','438','440','442','470','492','498','499',
    '528','578','616','620','642','674','688','703','705',
    '724','752','756','804','807','826',
  ],
  'Asie': [
    '156','392','410','356','360','764','704','458','702',
    '50','144','524','64','496','417','762','795','860',
    '4','586','158','344','446','96','116','418','268',
  ],
  'Moyen-Orient': [
    '682','784','414','512','368','376','400','48','634','887','760','364',
  ],
  'Afrique': [
    '12','24','204','72','854','108','120','140','148','174',
    '178','180','262','818','231','266','288','324','624','384',
    '404','426','430','434','516','562','566','646','686','694',
    '706','710','728','729','800','834','894','716',
  ],
  'Amérique Latine': [
    '32','68','76','152','170','188','192','214','218','222',
    '320','332','340','388','558','591','600','604','630',
    '740','858','862',
  ],
  'Océanie': ['36','554','598','242','776','882'],
  'US':  ['840'],
  'USA': ['840'],
  'Europe et Canada': [
    '124',
    '8','20','40','56','70','100','112','191','196','203',
    '208','233','246','250','276','300','348','352','372',
    '380','428','438','440','442','470','492','498','499',
    '528','578','616','620','642','674','688','703','705',
    '724','752','756','804','807','826',
  ],
  'Asie et Pacifique': [
    '36','554','598','242','776','882',
    '156','392','410','356','360','764','704','458','702',
    '50','144','524','64','496','158','344','446','96','116',
  ],
  'Asie-Pacifique': [
    '36','554','598','242','776','882',
    '156','392','410','356','360','764','704','458','702',
    '50','144','524','64','496','158','344','446','96','116',
  ],
  'Marchés émergents': [
    '156','356','76','643','484','818','710','566','288',
    '360','764','704','458','702','50','524','600','604',
    '858','170','152','320','340','222','388','558','32',
    '68','214','218','630','740','862',
  ],
  "Reste de l'Asie": [
    '392','410','356','360','764','704','458','702',
    '50','144','524','64','496','158','344','446','96','116',
  ],
  'Reste du monde': [],
}

// ── Utilitaires ───────────────────────────────────────────────
function hexAvecOpacite(hex: string, opacite: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacite})`
}

function getColorByRank(rank: number, isTop: boolean): string {
  if (isTop) return '#C9A84C'
  return VERTS_PAR_RANG[Math.min(rank - 1, VERTS_PAR_RANG.length - 1)]
}

// ── Props ─────────────────────────────────────────────────────
type Props = {
  data:    GeoPoint[]
  source?: string
}

export default function GeoRevenueMap({ data, source }: Props) {
  const [tooltip, setTooltip] = useState<{ region: string; pct: number } | null>(null)

const { codeMap, resteData, rankMap } = useMemo(() => {
  const codeMap   = new Map<string, { region: string; pct: number; rank: number }>()
  const resteData = data.find(d => d.region === 'Reste du monde') ?? null
  const filtered  = data.filter(d => d.region !== 'Reste du monde')

  // Rang basé sur % de ventes — détermine la couleur
  const sortedByPct = [...filtered].sort((a, b) => b.pct - a.pct)
  const rankMap = new Map<string, number>()
  sortedByPct.forEach(({ region }, i) => rankMap.set(region, i + 1))

  // Priorité carte basée sur la spécificité — détermine quel région gagne un pays
  const sortedBySpecificity = [...filtered].sort((a, b) => {
    const codesA = (REGION_TO_CODES[a.region] ?? []).length
    const codesB = (REGION_TO_CODES[b.region] ?? []).length
    if (codesA !== codesB) return codesA - codesB
    return b.pct - a.pct
  })

  sortedBySpecificity.forEach(({ region, pct }) => {
    const codes = REGION_TO_CODES[region] ?? []
    const rank  = rankMap.get(region) ?? 99
    codes.forEach(code => {
      if (!codeMap.has(code)) {
        codeMap.set(code, { region, pct, rank })
      }
    })
  })

  return { codeMap, resteData, rankMap }
}, [data])

  const sorted = [...data].sort((a, b) => {
    if (a.region === 'Reste du monde') return 1
    if (b.region === 'Reste du monde') return -1
    return (rankMap.get(a.region) ?? 99) - (rankMap.get(b.region) ?? 99)
  })

  return (
    <div className="my-8">
      <h3 style={{
        fontFamily:   'var(--font-display)',
        fontSize:     '18px',
        fontWeight:   600,
        color:        'var(--color-accent)',
        marginBottom: '0.75rem',
      }}>
        Répartition géographique du CA
      </h3>

      {/* Carte */}
      <div style={{
        position:        'relative',
        width:           '100%',
        backgroundColor: 'var(--color-stone-warm)',
        border:          '1px solid var(--color-stone-border)',
        borderRadius:    'var(--radius-md)',
        overflow:        'hidden',
      }}>
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{ scale: 145, center: [10, 10] }}
          style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: 'var(--color-stone-warm)' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map(geo => {
                const isoCode = String(geo.id)
                const entry   = codeMap.get(isoCode)

                let fill   = hexAvecOpacite(PALETTE[COULEUR_SANS_DONNEE], OPACITE_SANS_DONNEE)
                let region = ''
                let pct    = 0

                if (entry) {
                  fill   = getColorByRank(entry.rank, entry.rank === 1)
                  region = entry.region
                  pct    = entry.pct
                } else if (resteData) {
                  fill   = '#C4BEB4'
                  region = 'Reste du monde'
                  pct    = resteData.pct
                }

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fill}
                    stroke="#F7F4EF"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: 'none' },
                      hover:   { outline: 'none', opacity: 0.8, cursor: region ? 'pointer' : 'default' },
                      pressed: { outline: 'none' },
                    }}
                    onMouseEnter={() => { if (region) setTooltip({ region, pct }) }}
                    onMouseLeave={() => setTooltip(null)}
                    onClick={() => {
                      if (!region) return
                      setTooltip(t => t?.region === region ? null : { region, pct })
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ComposableMap>

        {/* Tooltip */}
        {tooltip && (
          <div style={{
            position:        'absolute',
            top:             '10px',
            right:           '10px',
            backgroundColor: 'var(--color-ink)',
            color:           'var(--color-stone-warm)',
            fontFamily:      'var(--font-sans)',
            fontSize:        '12px',
            fontWeight:      500,
            padding:         '6px 12px',
            borderRadius:    'var(--radius-sm)',
            whiteSpace:      'nowrap',
            boxShadow:       '0 2px 8px rgba(0,0,0,0.2)',
            pointerEvents:   'none',
          }}>
            {tooltip.region} — {tooltip.pct.toFixed(0)} %
          </div>
        )}
      </div>

      {/* Légende */}
      <div style={{
        display:    'flex',
        flexWrap:   'wrap',
        gap:        '10px',
        marginTop:  '0.75rem',
        alignItems: 'center',
      }}>
        {sorted.map(({ region, pct }) => {
          const isReste = region === 'Reste du monde'
          const rank    = rankMap.get(region) ?? 99
          const color   = isReste ? '#C4BEB4' : getColorByRank(rank, rank === 1)
          return (
            <div key={region} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{
                width:           '10px',
                height:          '10px',
                borderRadius:    '2px',
                backgroundColor: color,
                flexShrink:      0,
              }} />
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize:   '11px',
                color:      'var(--color-ink-muted)',
              }}>
                {region} <strong style={{ color: 'var(--color-ink)' }}>{pct.toFixed(0)} %</strong>
              </span>
            </div>
          )
        })}
      </div>

      {/* Note */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize:   '11px',
        color:      'var(--color-ink-faint)',
        marginTop:  '0.5rem',
        fontStyle:  'italic',
      }}>
        {source ? `Source : ${source} · ` : ''}Appuyez sur un pays pour afficher le détail.
      </p>
    </div>
  )
}