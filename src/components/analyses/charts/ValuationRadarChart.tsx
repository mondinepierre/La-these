'use client'

import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import type { ValuationPoint } from '@/types/analyses'

type Props = {
  data:   ValuationPoint[]
  title?: string
  name?:  string
}

export default function ValuationRadarChart({ data, title, name = 'Valeur' }: Props) {
  const displayTitle = title ?? 'Profil de valorisation vs secteur'

  // Normaliser les données pour le radar — chaque valeur divisée par la moyenne
  // des deux pour que les axes soient comparables entre métriques hétérogènes
  const normalized = data.map(d => {
    const base = (d.valeur + d.secteur) / 2 || 1
    return {
      label:   d.label,
      valeur:  parseFloat((d.valeur / base).toFixed(2)),
      secteur: parseFloat((d.secteur / base).toFixed(2)),
      // Valeurs brutes pour le tooltip
      valeurBrute:  d.valeur,
      secteurBrut:  d.secteur,
    }
  })

  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload?.length) return null
    const item = payload[0]?.payload
    if (!item) return null
    return (
      <div style={{
        backgroundColor: 'var(--color-ink)',
        color:           'var(--color-stone-warm)',
        fontFamily:      'var(--font-sans)',
        fontSize:        '12px',
        padding:         '8px 12px',
        borderRadius:    'var(--radius-sm)',
        lineHeight:      1.6,
      }}>
        <strong>{item.label}</strong><br />
        {name} : {item.valeurBrute?.toFixed(1)}<br />
        Secteur : {item.secteurBrut?.toFixed(1)}
      </div>
    )
  }

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
        Valeurs normalisées — chaque axe est relatif à la moyenne valeur/secteur.
        En dessous de 1 = moins cher que le secteur sur ce critère.
      </p>
      <ResponsiveContainer width="100%" height={520}>
        <RadarChart
          data={normalized}
          margin={{ top: 20, right: 60, bottom: 20, left: 60 }}
          outerRadius="65%"
        >
          <PolarGrid stroke="var(--color-stone-border)" />
          <PolarAngleAxis
            dataKey="label"
            tick={{ fontSize: 12, fontFamily: 'DM Sans', fill: 'var(--color-ink-muted)' }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 2]}
            tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: 'var(--color-ink-faint)' }}
            tickCount={3}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontFamily: 'DM Sans', fontSize: 12 }} />
          <Radar
            name={name}
            dataKey="valeur"
            stroke="#1B4332"
            fill="#1B4332"
            fillOpacity={0.25}
            strokeWidth={2}
          />
          <Radar
            name="Secteur (moy.)"
            dataKey="secteur"
            stroke="#C9A84C"
            fill="#C9A84C"
            fillOpacity={0.15}
            strokeWidth={2}
            strokeDasharray="5 3"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}