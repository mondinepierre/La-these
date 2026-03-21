'use client'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import type { MetricPoint } from '@/types/analyses'

type Props = {
  data:   MetricPoint[]
  title?: string
}

export default function RoicWaccChart({ data, title }: Props) {
  const displayTitle = title ?? `ROIC vs WACC sur ${data.length} ans (%)`

  return (
    <div className="my-8">
      <h3 style={{
        fontFamily:   'var(--font-display)',
        fontSize:     '18px',
        fontWeight:   600,
        color:        'var(--color-accent)',
        marginBottom: '0.5rem',
      }}>
        {displayTitle}
      </h3>
      <p style={{
        fontFamily:   'var(--font-sans)',
        fontSize:     '12px',
        color:        'var(--color-ink-faint)',
        marginBottom: '1rem',
        fontStyle:    'italic',
      }}>
        L'écart entre ROIC et WACC mesure la création de valeur. Un écart qui se compresse signale un moat sous pression.
      </p>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-stone-border)" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />
          <YAxis
            unit=" %"
            tick={{ fontSize: 12, fontFamily: 'DM Sans' }}
            domain={['auto', 'auto']}
          />
          <Tooltip
            formatter={(value) => [`${Number(value)} %`]}
            contentStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />
          <Legend wrapperStyle={{ fontFamily: 'DM Sans', fontSize: 12 }} />

          {/* ROIC — vert plein */}
          <Line
            type="monotone"
            dataKey="value"
            name="ROIC"
            stroke="#1B4332"
            strokeWidth={2.5}
            dot={false}
          />

          {/* WACC — pointillé or */}
          <Line
            type="monotone"
            dataKey="wacc"
            name="WACC"
            stroke="#C9A84C"
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}