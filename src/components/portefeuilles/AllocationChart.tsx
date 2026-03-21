'use client'

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { LigneAllocation } from '@/types/portefeuilles'

type Props = {
  allocation: LigneAllocation[] // allocation déjà sélectionnée (réelle ou cible)
}

const COLORS = [
  '#1B4332',
  '#C9A84C',
  '#2D6A4F',
  '#E9C46A',
  '#40916C',
  '#A07C35',
  '#74C69D',
  '#78716C',
]

function aggregateByTheme(allocation: LigneAllocation[]): { name: string; value: number }[] {
  const map: Record<string, number> = {}
  for (const ligne of allocation) {
    map[ligne.theme] = (map[ligne.theme] ?? 0) + ligne.pct
  }
  return Object.entries(map).map(([name, value]) => ({ name, value }))
}

const RADIAN = Math.PI / 180

type LabelProps = {
  cx?: number
  cy?: number
  midAngle?: number
  innerRadius?: number
  outerRadius?: number
  percent?: number
}

function renderCustomLabel({
  cx = 0, cy = 0, midAngle = 0,
  innerRadius = 0, outerRadius = 0, percent = 0,
}: LabelProps): React.ReactElement | null {
  if (percent < 0.07) return null
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central"
      fontSize={12} fontWeight={600} fontFamily="DM Sans, sans-serif">
      {`${(percent * 100).toFixed(0)} %`}
    </text>
  )
}

type TooltipProps = {
  active?: boolean
  payload?: Array<{ name: string; value: number }>
}

function CustomTooltip({ active, payload }: TooltipProps) {
  if (!active || !payload?.length) return null
  const item = payload[0]
  return (
    <div style={{
      background: '#F7F4EF', border: '1px solid #E0DBCF', borderRadius: 6,
      padding: '8px 12px', fontFamily: 'DM Sans, sans-serif', fontSize: 13,
    }}>
      <p style={{ fontWeight: 600, margin: '0 0 2px' }}>{item.name}</p>
      <p style={{ color: '#1B4332', fontWeight: 700, margin: 0 }}>{item.value} %</p>
    </div>
  )
}

export default function AllocationChart({ allocation }: Props) {
  const data = aggregateByTheme(allocation)

  return (
    // Hauteur augmentée pour absorber la légende en bas
    <div style={{ width: '100%', height: 420 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="40%"  // remonté légèrement pour laisser place à la légende en bas
            innerRadius={65}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
            labelLine={false}
            label={renderCustomLabel}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          {/* Légende en bas — plus de chevauchement mobile */}
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: 16, lineHeight: '24px' }}
            formatter={(value) => (
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                color: '#1B4332',
              }}>
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}