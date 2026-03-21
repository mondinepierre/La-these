'use client'

import { useState, useMemo } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import type { GeoPoint } from '@/types/analyses'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

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

const COULEUR_SANS_DONNEE: PaletteCle = 'stone-soft'
const OPACITE_SANS_DONNEE = 0.6

const VERTS_PAR_RANG = [
  '#1B4332',
  '#2D6A4F',
  '#52B788',
  '#95D5B2',
  '#D6EDDF',
]

// ── Codes ISO numériques — tous sur 3 chiffres (format world-atlas) ──
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
  'Australie':        ['036'],
  'Russie':           ['643'],
  'Brésil':           ['076'],
  'US':               ['840'],
  'USA':              ['840'],

  'Europe': [
    '008', '020', '040', '056', '070', '100', '112', '191', '196', '203', '208', '233',
    '246', '250', '276', '300', '348', '352', '372', '380', '428', '438', '440', '442',
    '470', '492', '498', '499', '528', '578', '616', '620', '642', '674', '688', '703',
    '705', '724', '752', '756', '804', '807', '826',
  ],

  'Afrique': [
    '012', '024', '072', '108', '120', '132', '140', '148', '174', '178', '180', '204',
    '226', '231', '232', '262', '266', '270', '288', '324', '384', '404', '426', '430',
    '434', '450', '454', '466', '478', '480', '504', '508', '516', '562', '566', '624',
    '646', '678', '686', '694', '706', '710', '716', '728', '729', '748', '768', '788',
    '800', '818', '834', '854', '894',
  ],

  'Moyen-Orient': [
    '048', '275', '364', '368', '376', '400', '414', '422', '512', '634', '682', '760',
    '784', '792', '887',
  ],

  'Asie': [
    '004', '031', '050', '051', '064', '096', '104', '116', '144', '156', '158', '268',
    '356', '360', '392', '398', '408', '410', '417', '418', '458', '462', '496', '524',
    '586', '608', '626', '702', '704', '762', '764', '792', '795', '860', 
  ],

  'Amériques': [
    '028', '032', '044', '052', '068', '076', '084', '124', '136', '152', '170', '188',
    '192', '212', '214', '218', '222', '308', '320', '328', '332', '340', '388', '474',
    '484', '558', '591', '600', '604', '659', '662', '670', '740', '780', '840', '858',
    '862',
  ],

  'Océanie': [
    '036', '090', '242', '296', '520', '540', '548', '554', '583', '584', '585', '598',
    '776', '798', '882',
  ],

  'Amérique du Nord':  ['124', '484', '840'],

  'Amérique Latine': [
    '028', '032', '044', '052', '068', '076', '084', '136', '152', '170', '188', '192',
    '212', '214', '218', '222', '308', '320', '328', '332', '340', '388', '474', '558',
    '591', '600', '604', '659', '662', '670', '740', '780', '858', '862',
  ],

  'Europe et Canada': [
    '008', '020', '040', '056', '070', '100', '112', '124', '191', '196', '203', '208',
    '233', '246', '250', '276', '300', '348', '352', '372', '380', '428', '438', '440',
    '442', '470', '492', '498', '499', '528', '578', '616', '620', '642', '674', '688',
    '703', '705', '724', '752', '756', '804', '807', '826',
  ],

  'Asie et Pacifique': [
    '004', '031', '036', '050', '051', '064', '096', '104', '116', '144', '156', '158',
    '242', '268', '356', '360', '392', '398', '408', '410', '417', '418', '458', '462',
    '496', '524', '554', '583', '584', '585', '586', '598', '608', '626', '702', '704',
    '762', '764', '776', '795', '860', '882',
  ],

  'Asie-Pacifique': [
    '004', '031', '036', '050', '051', '064', '096', '104', '116', '144', '156', '158',
    '242', '268', '356', '360', '392', '398', '408', '410', '417', '418', '458', '462',
    '496', '524', '554', '583', '584', '585', '586', '598', '608', '626', '702', '704',
    '762', '764', '776', '795', '860', '882',
  ],

  'Marchés émergents': [
    '024', '032', '050', '068', '076', '100', '116', '144', '152', '156', '170', '178',
    '180', '203', '204', '214', '218', '231', '262', '266', '288', '324', '356', '360',
    '368', '384', '404', '410', '418', '430', '450', '454', '458', '466', '478', '484',
    '504', '508', '516', '524', '558', '562', '566', '586', '600', '604', '608', '624',
    '646', '682', '686', '694', '704', '706', '710', '716', '724', '728', '729', '740',
    '748', '764', '768', '788', '792', '800', '804', '818', '834', '854', '858', '862', 
    '894',
  ],

  "Reste de l'Asie": [
    '004', '050', '064', '096', '104', '116', '144', '360', '418', '458', '462', '496',
    '524', '586', '608', '626', '702', '704', '764',
  ],

  'Reste du monde': [],
}

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

type Props = {
  data:    GeoPoint[]
  source?: string
  title?:  string
}

export default function GeoRevenueMap({ data, source, title }: Props) {
  const [tooltip, setTooltip] = useState<{ region: string; pct: number } | null>(null)
  const displayTitle = title ?? 'Répartition géographique du CA'

  const { codeMap, resteData, rankMap } = useMemo(() => {
    const codeMap   = new Map<string, { region: string; pct: number; rank: number }>()
    const resteData = data.find(d => d.region === 'Reste du monde') ?? null
    const filtered  = data.filter(d => d.region !== 'Reste du monde')

    const sortedByPct = [...filtered].sort((a, b) => b.pct - a.pct)
    const rankMap = new Map<string, number>()
    sortedByPct.forEach(({ region }, i) => rankMap.set(region, i + 1))

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
        {displayTitle}
      </h3>

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
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--color-ink-muted)' }}>
                {region} <strong style={{ color: 'var(--color-ink)' }}>{pct.toFixed(0)} %</strong>
              </span>
            </div>
          )
        })}
      </div>

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