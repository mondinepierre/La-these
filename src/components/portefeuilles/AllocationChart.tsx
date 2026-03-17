'use client'

import { useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { LigneAllocation } from '@/types/portefeuilles'

type Props = {
  allocation: LigneAllocation[]
  allocationCible?: LigneAllocation[]
}

// Palette design system — vert, or, nuances
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

// Agrège les lignes par thème macro
function aggregateByTheme(allocation: LigneAllocation[]): { name: string; value: number }[] {
  const map: Record<string, number> = {}
  for (const ligne of allocation) {
    map[ligne.theme] = (map[ligne.theme] ?? 0) + ligne.pct
  }
  return Object.entries(map).map(([name, value]) => ({ name, value }))
}

const RADIAN = Math.PI / 180

type LabelProps = {
  cx: number; cy: number; midAngle: number
  innerRadius: number; outerRadius: number; percent: number
}

function renderCustomLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }: LabelProps) {
  if (percent < 0.06) return null
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

type TooltipPayload = { name: string; value: number }
type TooltipProps = { active?: boolean; payload?: Array<{ name: string; value: number; payload: TooltipPayload }> }

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

export default function AllocationChart({ allocation, allocationCible }: Props) {
  const [vue, setVue] = useState<'reel' | 'cible'>('reel')

  const hasVues = !!allocationCible
  const source = vue === 'cible' && allocationCible ? allocationCible : allocation
  const data = aggregateByTheme(source)

  return (
    <div>
      {/* Sélecteur de vue — uniquement si une cible existe */}
      {hasVues && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {(['reel', 'cible'] as const).map((v) => (
            <button
              key={v}
              onClick={() => setVue(v)}
              style={{
                padding: '6px 16px',
                borderRadius: 6,
                border: '1px solid',
                borderColor: vue === v ? '#1B4332' : '#E0DBCF',
                background: vue === v ? '#1B4332' : 'transparent',
                color: vue === v ? 'white' : '#78716C',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {v === 'reel' ? 'Actuel' : 'Cible'}
            </button>
          ))}
        </div>
      )}

      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
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
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              formatter={(value) => (
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#1B4332' }}>
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}