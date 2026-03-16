'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { RevenuePoint } from '@/types/analyses'

type Props = {
  data: RevenuePoint[]
  unit?: string   // "Md$" par défaut
}

export default function RevenueChart({ data, unit = 'Md$' }: Props) {
  return (
    <div className="my-8">
      <h3 className="font-serif text-lg font-semibold text-[#1B4332] mb-4">
        Chiffre d'affaires sur 5 ans ({unit})
      </h3>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1B4332" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#1B4332" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E0DBCF" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'DM Sans' }} />
          <YAxis
            tick={{ fontSize: 12, fontFamily: 'DM Sans' }}
            domain={['auto', 'auto']}
          />
          <Tooltip
            formatter={(value: number) => [`${value} ${unit}`, 'CA']}
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