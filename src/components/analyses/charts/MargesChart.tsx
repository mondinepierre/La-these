'use client'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceLine,
} from 'recharts'
import type { MargePoint, DataBreak } from '@/types/analyses'

type Props = {
  data:        MargePoint[]
  title?:      string
  dataBreaks?: DataBreak[]
}

export default function MargesChart({ data, title, dataBreaks }: Props) {
  const displayTitle = title ?? `Marges sur ${data.length} ans (%)`

  const allValues = data.flatMap(d => [d.net, d.operating, d.gross]).filter((v): v is number => v !== undefined)
  const minValue  = Math.min(...allValues)
  const maxValue  = Math.max(...allValues)
  const padding   = (maxValue - minValue) * 0.15
  const floor     = Math.floor(minValue - padding)

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
        <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-stone-border)" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />
          <YAxis
            tick={{ fontSize: 12, fontFamily: 'DM Sans' }}
            domain={[floor, 'auto']}
          />
          <Tooltip
            formatter={(value) => [`${Number(value)}%`]}
            contentStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />
          <Legend wrapperStyle={{ fontFamily: 'DM Sans', fontSize: 12 }} />
          {dataBreaks?.map(b => (
            <ReferenceLine
              key={b.year}
              x={b.year}
              stroke="#78716C"
              strokeDasharray="4 4"
              strokeWidth={1.5}
              label={{ value: b.label, position: 'top', fontSize: 12, fontFamily: 'DM Sans', fill: '#78716C' }}
            />
          ))}
          <Line type="monotone" dataKey="operating" name="Marge opérationnelle" stroke="#1B4332" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="net"       name="Marge nette"          stroke="#C9A84C" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="gross"     name="Marge brute"          stroke="#1C1917" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}