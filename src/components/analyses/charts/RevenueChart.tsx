'use client'

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts'
import type { RevenuePoint } from '@/types/analyses'

type Props = {
  data:   RevenuePoint[]
  unit?:  string
  title?: string
}

export default function RevenueChart({ data, unit = 'Md$', title }: Props) {
  const displayTitle = title ?? `Chiffre d'affaires sur ${data.length} ans (${unit})`

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
        <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#1B4332" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#1B4332" stopOpacity={0}    />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-stone-border)" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />
          <YAxis tick={{ fontSize: 12, fontFamily: 'DM Sans' }} domain={['auto', 'auto']} />
          <Tooltip
            formatter={(value) => [`${Number(value)} ${unit}`, 'CA']}
            contentStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            name="CA"
            stroke="#1B4332"
            strokeWidth={2}
            fill="url(#revenueGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}