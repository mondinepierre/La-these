'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import type { MargePoint } from '@/types/analyses'

type Props = {
  data: MargePoint[]
}

export default function MargesChart({ data }: Props) {
  return (
    <div className="my-8">
      <h3 className="font-serif text-lg font-semibold text-[#1B4332] mb-4">
        Marges sur 5 ans (%)
      </h3>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E0DBCF" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />
          <YAxis
            unit="%"
            tick={{ fontSize: 12, fontFamily: 'DM Sans' }}
            domain={['auto', 'auto']}
          />
          <Tooltip
            formatter={(value) => [`${Number(value)}%`]}
            contentStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />
          <Legend wrapperStyle={{ fontFamily: 'DM Sans', fontSize: 12 }} />
          <Line
            type="monotone"
            dataKey="operating"
            name="Marge opérationnelle"
            stroke="#1B4332"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="net"
            name="Marge nette"
            stroke="#C9A84C"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}