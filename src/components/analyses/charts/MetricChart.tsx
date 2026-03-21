'use client'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import type { MetricSerie } from '@/types/analyses'

type Props = {
  serie:  MetricSerie
  title?: string
}

const COULEUR_PRINCIPALE = '#1B4332'

export default function MetricChart({ serie, title }: Props) {
  const unit = serie.unit ?? ''
  const displayTitle = title ?? `${serie.label} sur ${serie.data.length} ans${unit ? ` (${unit.trim()})` : ''}`

  // Fusionner données principales + concurrents dans un seul tableau Recharts
  const allYears = [...new Set([
    ...serie.data.map(d => d.year),
    ...(serie.competitors ?? []).flatMap(c => c.data.map(d => d.year)),
  ])].sort()

  const merged = allYears.map(year => {
    const main = serie.data.find(d => d.year === year)
    const row: Record<string, number | string> = { year }
    if (main) row[serie.label] = main.value
    serie.competitors?.forEach(c => {
      const point = c.data.find(d => d.year === year)
      if (point) row[c.name] = point.value
    })
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
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={merged} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-stone-border)" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />
          <YAxis
            unit={unit}
            tick={{ fontSize: 12, fontFamily: 'DM Sans' }}
            domain={['auto', 'auto']}
          />
          <Tooltip
            formatter={(value) => [`${Number(value)}${unit}`]}
            contentStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />
          <Legend wrapperStyle={{ fontFamily: 'DM Sans', fontSize: 12 }} />

          {/* Ligne principale — toujours en vert plein */}
          <Line
            type="monotone"
            dataKey={serie.label}
            name={serie.name ?? serie.label}   // ← utilise name si fourni, sinon label
            stroke={COULEUR_PRINCIPALE}
            strokeWidth={2.5}
            dot={false}
            connectNulls
          />

          {/* Lignes concurrentes — pointillées avec leur couleur */}
          {serie.competitors?.map(c => (
            <Line
              key={c.name}
              type="monotone"
              dataKey={c.name}
              stroke={c.color}
              strokeWidth={1.5}
              strokeDasharray="5 3"
              dot={false}
              connectNulls
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}