'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceArea,
} from 'recharts'
import type { SegmentPoint, DataBreak } from '@/types/analyses'

type Props = {
  data:        SegmentPoint[]
  unit?:       string
  title?:      string
  dataBreaks?: DataBreak[]
}

// Palette segments — vert → or → intermédiaires
const COULEURS_SEGMENTS = [
  '#1B4332',
  '#C9A84C',
  '#2D6A4F',
  '#E0A030',
  '#52B788',
  '#A8A29E',
]

export default function SegmentRevenueChart({ data, unit = 'Md$', title, dataBreaks }: Props) {
  const segments     = data.length > 0 ? data[0].segments.map(s => s.name) : []
  const displayTitle = title ?? `CA par segment sur ${data.length} ans (${unit})`
  const dataYears = data.map(d => d.year).sort((a, b) => a - b)

  const flat = data.map(({ year, segments: segs }) => {
    const row: Record<string, number | string> = { year }
    segs.forEach(s => { row[s.name] = s.value })
    return row
  })

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
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={flat} margin={{ top: 30, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-stone-border)" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />
          <YAxis tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />
          <Tooltip
            formatter={(value) => [`${Number(value)} ${unit}`]}
            contentStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />
          <Legend wrapperStyle={{ fontFamily: 'DM Sans', fontSize: 12 }} />

          {/* Zones de rupture — entre deux barres sur axe catégoriel */}
            {dataBreaks?.map(b => {
              const idx     = dataYears.indexOf(b.year)
              const nextYear = idx >= 0 && idx < dataYears.length - 1
                ? dataYears[idx + 1]
                : b.year   // dernier year — x1 === x2, simple ligne verticale
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
                    value:      b.label,
                    position:   'top',
                    fontSize:   12,
                    fontFamily: 'DM Sans',
                    fill:       '#78716C',
                    offset:     4,
                  }}
                />
              )
            })}

          {segments.map((seg, i) => (
            <Bar
              key={seg}
              dataKey={seg}
              stackId="a"
              fill={COULEURS_SEGMENTS[i % COULEURS_SEGMENTS.length]}
              radius={i === segments.length - 1 ? [3, 3, 0, 0] : [0, 0, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}