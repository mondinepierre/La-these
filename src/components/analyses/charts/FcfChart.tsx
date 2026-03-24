'use client'

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts'
import type { FcfPoint } from '@/types/analyses'

type Props = {
  data:   FcfPoint[]
  unit?:  string
  title?: string
}

export default function FcfChart({ data, unit = 'Md€', title }: Props) {
  const displayTitle = title ?? `Free Cash Flow sur ${data.length} ans (${unit})`

const minValue = Math.min(...data.map(d => d.value))
const maxValue = Math.max(...data.map(d => d.value))
const padding  = (maxValue - minValue) * 0.15
const floor    = Math.floor(minValue - padding)

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
            <linearGradient id="fcfGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#C9A84C" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#C9A84C" stopOpacity={0}   />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-stone-border)" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />
          <YAxis
            tick={{ fontSize: 12, fontFamily: 'DM Sans' }}
            domain={[floor, 'auto']}
          />
          <Tooltip
            formatter={(value) => [`${Number(value)} ${unit}`, 'FCF']}
            contentStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            name="FCF"
            stroke="var(--color-gold)"
            strokeWidth={2}
            fill="url(#fcfGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}