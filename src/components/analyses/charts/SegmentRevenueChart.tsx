'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceLine, ReferenceArea,
} from 'recharts'
import type { SegmentPoint, DataBreak } from '@/types/analyses'

type Props = {
  data:        SegmentPoint[]
  unit?:       string
  title?:      string
  dataBreaks?: DataBreak[]
  note?:       string
  showTotal?:  boolean
  totalLabel?: string
  barSize?:    number
}

const COULEURS_SEGMENTS = [
  '#1B4332',
  '#C9A84C',
  '#2D6A4F',
  '#E0A030',
  '#52B788',
  '#A8A29E',
]

const COULEUR_NET = '#78716C'

// Taille des barres de décomposition
const DEFAULT_BAR_SIZE = 45
// Gap entre la colonne décomposition et la colonne total
const TOTAL_GAP = 50

export default function SegmentRevenueChart({
  data,
  unit       = 'Md$',
  title,
  dataBreaks,
  note,
  showTotal  = false,
  totalLabel = 'CA net',
  barSize,
}: Props) {
  const allSegmentNames = data.length > 0 ? data[0].segments.map(s => s.name) : []
  const displayTitle    = title ?? `CA par segment sur ${data.length} ans (${unit})`

  const isNegName = (name: string) =>
    data.some(d => {
      const seg = d.segments.find(s => s.name === name)
      return seg !== undefined && seg.value < 0
    })

  const negativeNames = allSegmentNames.filter(n => isNegName(n))
  const positiveNames = allSegmentNames.filter(n => !isNegName(n))
  const hasNegatives  = negativeNames.length > 0

  const BAR_SIZE       = barSize ?? DEFAULT_BAR_SIZE
  const TOTAL_BAR_SIZE = Math.round(BAR_SIZE * 0.85)

  // Le spacer doit avoir barSize = BAR_SIZE + TOTAL_GAP pour :
  // — absorber le barGap négatif (BAR_SIZE) qui colle les stacks neg/pos
  // — ajouter le gap souhaité (TOTAL_GAP) entre décomposition et total
  const SPACER_SIZE = BAR_SIZE + TOTAL_GAP

  // Aplatir les données
  const flat = data.map(({ year, segments: segs }) => {
    const row: Record<string, number | string | null> = { year }
    segs.forEach(s => { row[s.name] = s.value })
    if (showTotal) {
      const net = segs.reduce((acc, s) => acc + s.value, 0)
      row['__net__']    = Math.round(net * 10) / 10
      row['__spacer__'] = 0
    }
    return row
  })

  const lastPositive = positiveNames[positiveNames.length - 1]
  const lastNegative = negativeNames[negativeNames.length - 1]
  const dataYears    = data.map(d => d.year).sort((a, b) => a - b)

  return (
    <div className="my-8">
      <h3 style={{
        fontFamily:   'var(--font-display)',
        fontSize:     '18px',
        fontWeight:   600,
        color:        'var(--color-accent)',
        marginBottom: '1rem',
      }}>
        {displayTitle}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={flat}
          margin={{ top: 40, right: 20, left: 0, bottom: 5 }}
          barCategoryGap="28%"
          barGap={hasNegatives ? -BAR_SIZE : 4}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-stone-border)" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />
          <YAxis tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />

          {hasNegatives && (
            <ReferenceLine y={0} stroke="#78716C" strokeWidth={1} />
          )}

          <Tooltip
            formatter={(value, name) => {
              const nameStr = String(name ?? '')
              if (nameStr === '__net__'    ) return [`${Number(value)} ${unit}`, totalLabel]
              if (nameStr === '__spacer__' ) return null
              return [`${Number(value)} ${unit}`, nameStr]
            }}
            contentStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />
          <Legend
            formatter={(value) => {
              const v = String(value ?? '')
              if (v === '__net__'    ) return totalLabel
              if (v === '__spacer__' ) return null
              return v
            }}
            wrapperStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />

          {dataBreaks?.map((b, idx) => {
            const yearIdx  = dataYears.indexOf(b.year)
            const nextYear = yearIdx >= 0 && yearIdx < dataYears.length - 1
              ? dataYears[yearIdx + 1]
              : b.year
            return (
              <ReferenceArea
                key={b.year}
                x1={b.year}
                x2={nextYear}
                fill="transparent"
                stroke="#78716C"
                strokeDasharray="4 4"
                strokeWidth={1}
                label={{
                  value:      `${idx + 1}`,
                  position:   'top',
                  fontSize:   11,
                  fontFamily: 'DM Sans',
                  fontWeight: 600,
                  fill:       '#78716C',
                  offset:     6,
                }}
              />
            )
          })}

          {/* Stack "neg" — partent de 0 vers le bas */}
          {negativeNames.map((seg) => (
            <Bar
              key={seg}
              dataKey={seg}
              stackId="neg"
              fill={COULEURS_SEGMENTS[allSegmentNames.indexOf(seg) % COULEURS_SEGMENTS.length]}
              barSize={BAR_SIZE}
              radius={seg === lastNegative ? [0, 0, 3, 3] : [0, 0, 0, 0]}
            />
          ))}

          {/* Stack "pos" — partent de 0 vers le haut */}
          {positiveNames.map((seg) => (
            <Bar
              key={seg}
              dataKey={seg}
              stackId="pos"
              fill={COULEURS_SEGMENTS[allSegmentNames.indexOf(seg) % COULEURS_SEGMENTS.length]}
              barSize={BAR_SIZE}
              radius={seg === lastPositive ? [3, 3, 0, 0] : [0, 0, 0, 0]}
            />
          ))}

          {/* Spacer transparent */}
          {showTotal && (
            <Bar
              dataKey="__spacer__"
              fill="transparent"
              barSize={SPACER_SIZE}
              opacity={0}
              legendType="none"
            />
          )}

          {/* Colonne CA net */}
          {showTotal && (
            <Bar
              dataKey="__net__"
              fill={COULEUR_NET}
              barSize={TOTAL_BAR_SIZE}
              radius={[3, 3, 0, 0]}
              opacity={0.85}
            />
          )}
        </BarChart>
      </ResponsiveContainer>

      {dataBreaks && dataBreaks.length > 0 && (
        <div style={{ marginTop: '0.5rem' }}>
          {dataBreaks.map((b, idx) => (
            <p
              key={b.year}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize:   '11px',
                color:      'var(--color-ink-faint)',
                fontStyle:  'italic',
                margin:     '0 0 2px 0',
              }}
            >
              <span style={{ fontWeight: 600 }}>{idx + 1}.</span> {b.year} {'—'} {b.label}
            </p>
          ))}
        </div>
      )}

      {note && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize:   '11px',
          color:      'var(--color-ink-faint)',
          marginTop:  '0.5rem',
          fontStyle:  'italic',
        }}>
          {note}
        </p>
      )}
    </div>
  )
}