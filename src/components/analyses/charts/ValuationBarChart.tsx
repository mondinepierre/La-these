'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import type { ValuationPoint } from '@/types/analyses'

type Props = {
  data:   ValuationPoint[]
  title?: string
  name?:  string   // nom de l'entreprise — ex : 'TotalEnergies'
}

export default function ValuationBarChart({ data, title, name = 'Valeur' }: Props) {
  const displayTitle = title ?? 'Valorisation vs secteur'

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
        Données à date — source Yahoo Finance
      </p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          barCategoryGap="30%"
          barGap={4}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-stone-border)" />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 12, fontFamily: 'DM Sans' }}
          />
          <YAxis
            tick={{ fontSize: 12, fontFamily: 'DM Sans' }}
            domain={[0, 'auto']}
          />
          <Tooltip
            formatter={(value) => [`${Number(value).toFixed(1)}`]}
            contentStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />
          <Legend wrapperStyle={{ fontFamily: 'DM Sans', fontSize: 12 }} />
          <Bar
            dataKey="valeur"
            name={name}
            fill="#1B4332"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="secteur"
            name="Secteur (moy.)"
            fill="#C9A84C"
            radius={[3, 3, 0, 0]}
            opacity={0.7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}