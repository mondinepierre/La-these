'use client'

import {
  ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceLine, ReferenceArea,
} from 'recharts'
import type { MetricPoint, DataBreak } from '@/types/analyses'

type Props = {
  data:        MetricPoint[]
  title?:      string
  dataBreaks?: DataBreak[]
}

const COLOR_ROIC  = '#1B4332'
const COLOR_WACC  = '#C9A84C'
const COLOR_BG    = '#F7F4EF'  // fond ivoire du site

function transformData(data: MetricPoint[]) {
  return data.map(d => {
    const roic = d.value
    const wacc = d.wacc ?? 0
    return {
      year:      d.year,
      wacc,
      roic,
      spreadPos: Math.max(0, roic - wacc),
      baseNeg:   roic < wacc ? roic  : null,
      spreadNeg: roic < wacc ? wacc - roic : null,
    }
  })
}

export default function RoicWaccChart({ data, title, dataBreaks }: Props) {
  const displayTitle      = title ?? 'ROIC vs WACC (%)'
  const chartData         = transformData(data)
  const dataYears         = data.map(d => Number(d.year)).sort((a, b) => a - b)
  const hasNegativeSpread = data.some(d => d.value < (d.wacc ?? 0))

  const allValues = data.flatMap(d => [d.value, d.wacc ?? 0])
  const minVal    = Math.min(0, ...allValues)
  const maxVal    = Math.max(...allValues)
  const pad       = (maxVal - minVal) * 0.15
  const domain: [number, number] = [
    Math.floor(minVal - pad),
    Math.ceil(maxVal + pad),
  ]

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
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="gradPos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor={COLOR_ROIC} stopOpacity={0.28} />
              <stop offset="100%" stopColor={COLOR_ROIC} stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="gradNeg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#DC2626" stopOpacity={0.05} />
              <stop offset="100%" stopColor="#DC2626" stopOpacity={0.25} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-stone-border)" />
          <XAxis
            dataKey="year"
            tick={{ fontSize: 12, fontFamily: 'DM Sans' }}
          />
          <YAxis
            domain={domain}
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 12, fontFamily: 'DM Sans' }}
          />
          <Tooltip
            formatter={(value, name) => {
              if (name === 'roic') return [`${Number(value).toFixed(1)}%`, 'ROIC']
              if (name === 'wacc') return [`${Number(value).toFixed(1)}%`, 'WACC']
              return null
            }}
            contentStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />
          <Legend
            payload={[
              { value: 'ROIC', type: 'line', color: COLOR_ROIC },
              { value: 'WACC', type: 'line', color: COLOR_WACC },
            ]}
            wrapperStyle={{ fontFamily: 'DM Sans', fontSize: 12 }}
          />

          {dataBreaks?.map(b => {
            const idx      = dataYears.indexOf(Number(b.year))
            const nextYear = idx >= 0 && idx < dataYears.length - 1
              ? dataYears[idx + 1]
              : b.year
            return (
              <ReferenceArea
                key={String(b.year)}
                x1={b.year}
                x2={nextYear}
                fill="transparent"
                stroke="#78716C"
                strokeDasharray="4 4"
                strokeWidth={1}
                label={{
                  value:      b.label,
                  position:   'top',
                  fontSize:   10,
                  fontFamily: 'DM Sans',
                  fill:       '#78716C',
                  offset:     4,
                }}
              />
            )
          })}

          {minVal < 0 && (
            <ReferenceLine y={0} stroke="#78716C" strokeWidth={1} />
          )}

          {/* ── Spread positif (ROIC > WACC) ─────────────────── */}
          {/* Base ivoire de 0 à WACC */}
          <Area
            type="monotone"
            dataKey="wacc"
            stackId="pos"
            stroke="none"
            fill={COLOR_BG}
            legendType="none"
            tooltipType="none"
            isAnimationActive={false}
          />
          {/* Zone verte dégradée de WACC à ROIC */}
          <Area
            type="monotone"
            dataKey="spreadPos"
            stackId="pos"
            stroke="none"
            fill="url(#gradPos)"
            legendType="none"
            tooltipType="none"
            isAnimationActive={false}
          />

          {/* ── Spread négatif (ROIC < WACC) ─────────────────── */}
          {hasNegativeSpread && (
            <>
              <Area
                type="monotone"
                dataKey="baseNeg"
                stackId="neg"
                stroke="none"
                fill={COLOR_BG}
                legendType="none"
                tooltipType="none"
                isAnimationActive={false}
              />
              <Area
                type="monotone"
                dataKey="spreadNeg"
                stackId="neg"
                stroke="none"
                fill="url(#gradNeg)"
                legendType="none"
                tooltipType="none"
                isAnimationActive={false}
              />
            </>
          )}

          {/* ── Courbes par-dessus les zones ─────────────────── */}
          <Line
            type="monotone"
            dataKey="wacc"
            stroke={COLOR_WACC}
            strokeWidth={2}
            strokeDasharray="5 3"
            dot={false}
            activeDot={false}
            legendType="none"
          />
          <Line
            type="monotone"
            dataKey="roic"
            stroke={COLOR_ROIC}
            strokeWidth={2.5}
            dot={false}
            activeDot={false}
            legendType="none"
          />
        </ComposedChart>
      </ResponsiveContainer>

      <div style={{
        display:    'flex',
        gap:        '16px',
        marginTop:  '0.5rem',
        fontFamily: 'var(--font-sans)',
        fontSize:   '11px',
        color:      'var(--color-ink-faint)',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ display: 'inline-block', width: '12px', height: '10px', backgroundColor: 'rgba(27,67,50,0.20)', borderRadius: '2px' }} />
          Spread positif (ROIC &gt; WACC)
        </span>
        {hasNegativeSpread && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ display: 'inline-block', width: '12px', height: '10px', backgroundColor: 'rgba(220,38,38,0.20)', borderRadius: '2px' }} />
            Spread négatif (ROIC &lt; WACC)
          </span>
        )}
      </div>
    </div>
  )
}