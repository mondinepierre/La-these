'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine, ReferenceArea,
} from 'recharts'
import type { RoicPoint, DataBreak } from '@/types/analyses'

type Props = {
  data:        RoicPoint[]
  wacc?:       number
  title?:      string
  dataBreaks?: DataBreak[]
}

export default function RoicChart({ data, wacc, title, dataBreaks }: Props) {
  const displayTitle = title ?? `ROIC sur ${data.length} ans (%)`
  const dataYears = data.map(d => d.year).sort((a, b) => a - b)

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
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 30, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-stone-border)" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />
          <YAxis
            unit="%"
            tick={{ fontSize: 12, fontFamily: 'DM Sans' }}
            domain={[0, 'auto']}
          />
          <Tooltip
            formatter={(value) => [`${Number(value)}%`, 'ROIC']}
            contentStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />

          {/* Ligne WACC horizontale */}
          {wacc && (
            <ReferenceLine
              y={wacc}
              stroke="#78716C"
              strokeDasharray="4 4"
              label={{
                value:      `WACC ${wacc}%`,
                position:   'right',
                fontSize:   12,
                fontFamily: 'DM Sans',
                fill:       '#78716C',
              }}
            />
          )}

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
                  fontSize:   10,
                  fontFamily: 'DM Sans',
                  fill:       '#78716C',
                  offset:     4,
                }}
              />
            )
          })}


          <Bar dataKey="value" name="ROIC" fill="#1B4332" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}