'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'
import type { RoicPoint } from '@/types/analyses'

type Props = {
  data: RoicPoint[]
  wacc?: number   // optionnel — trace une ligne de référence WACC si fourni
}

export default function RoicChart({ data, wacc }: Props) {
  return (
    <div className="my-8">
      <h3 className="font-serif text-lg font-semibold text-[#1B4332] mb-4">
        ROIC sur 5 ans (%)
      </h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E0DBCF" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />
          <YAxis
            unit="%"
            tick={{ fontSize: 12, fontFamily: 'DM Sans' }}
            domain={[0, 'auto']}
          />
          <Tooltip
            formatter={(value: number) => [`${value}%`, 'ROIC']}
            contentStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />
          {wacc && (
            <ReferenceLine
              y={wacc}
              stroke="#78716C"
              strokeDasharray="4 4"
              label={{
                value: `WACC ${wacc}%`,
                position: 'right',
                fontSize: 11,
                fontFamily: 'DM Sans',
                fill: '#78716C',
              }}
            />
          )}
          <Bar dataKey="value" name="ROIC" fill="#1B4332" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}