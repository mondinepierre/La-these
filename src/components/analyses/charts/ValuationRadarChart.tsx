'use client'

import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import type { ValuationPoint } from '@/types/analyses'

type Props = {
  data:         ValuationPoint[]
  title?:       string
  name?:        string   // nom de la valeur analysée
  concurrent1?: string   // nom du 1er concurrent
  concurrent2?: string   // nom du 2e concurrent
}

// ── Palette ───────────────────────────────────────────────────
const COULEURS = {
  valeur:      { stroke: '#1B4332', fill: '#1B4332', opacity: 0.25 },
  concurrent1: { stroke: '#C9A84C', fill: '#C9A84C', opacity: 0.15 },
  concurrent2: { stroke: '#78716C', fill: '#78716C', opacity: 0.12 },
}

export default function ValuationRadarChart({
  data,
  title,
  name        = 'Valeur',
  concurrent1,
  concurrent2,
}: Props) {
  const displayTitle   = title ?? 'Profil de valorisation vs secteur'
  const hasConcurrent1 = data.some(d => d.concurrent1 !== undefined) && !!concurrent1
  const hasConcurrent2 = data.some(d => d.concurrent2 !== undefined) && !!concurrent2

  // ── Normalisation ─────────────────────────────────────────
  // Base = moyenne de toutes les valeurs présentes sur chaque axe
  // Normalisation — base sur les valeurs présentes uniquement
  const normalized = data.map(d => {
    const values = [d.valeur, d.secteur, d.concurrent1, d.concurrent2]
      .filter((v): v is number => v !== undefined)
    const base = values.reduce((a, b) => a + b, 0) / values.length || 1

    return {
      label:        d.label,
      valeur:       parseFloat((d.valeur / base).toFixed(2)),
      secteur:      d.secteur !== undefined ? parseFloat((d.secteur / base).toFixed(2)) : undefined,
      concurrent1:  d.concurrent1 !== undefined ? parseFloat((d.concurrent1 / base).toFixed(2)) : undefined,
      concurrent2:  d.concurrent2 !== undefined ? parseFloat((d.concurrent2 / base).toFixed(2)) : undefined,
      valeurBrute:     d.valeur,
      secteurBrut:     d.secteur,
      concurrent1Brut: d.concurrent1,
      concurrent2Brut: d.concurrent2,
    }
  })

  // Secteur conditionnel
  const hasSecteur = data.some(d => d.secteur !== undefined)

  // ── Tooltip custom ────────────────────────────────────────
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
        lineHeight:      1.8,
      }}>
        <strong>{item.label}</strong><br />
        {name} : {item.valeurBrute?.toFixed(1)}<br />
        Secteur (moy.) : {item.secteurBrut?.toFixed(1)}
        {hasConcurrent1 && item.concurrent1Brut !== undefined && (
          <><br />{concurrent1} : {item.concurrent1Brut.toFixed(1)}</>
        )}
        {hasConcurrent2 && item.concurrent2Brut !== undefined && (
          <><br />{concurrent2} : {item.concurrent2Brut.toFixed(1)}</>
        )}
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
        Valeurs normalisées — chaque axe est relatif à la moyenne des valeurs comparées.
        En dessous de 1 = moins cher / moins performant que la moyenne sur ce critère.
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

          {/* Valeur analysée */}
          <Radar
            name={name}
            dataKey="valeur"
            stroke={COULEURS.valeur.stroke}
            fill={COULEURS.valeur.fill}
            fillOpacity={COULEURS.valeur.opacity}
            strokeWidth={2.5}
          />

          {/* Secteur affiché si données présentes */}
          {hasSecteur && (
            <Radar
              name="Secteur (moy.)"
              dataKey="secteur"
              stroke="#A8A29E"
              fill="#A8A29E"
              fillOpacity={0.08}
              strokeWidth={1.5}
              strokeDasharray="5 3"
            />
          )}

          {/* Concurrent 1 — affiché si données présentes */}
          {hasConcurrent1 && (
            <Radar
              name={concurrent1}
              dataKey="concurrent1"
              stroke={COULEURS.concurrent1.stroke}
              fill={COULEURS.concurrent1.fill}
              fillOpacity={COULEURS.concurrent1.opacity}
              strokeWidth={1.5}
              strokeDasharray="4 2"
            />
          )}

          {/* Concurrent 2 — affiché si données présentes */}
          {hasConcurrent2 && (
            <Radar
              name={concurrent2}
              dataKey="concurrent2"
              stroke={COULEURS.concurrent2.stroke}
              fill={COULEURS.concurrent2.fill}
              fillOpacity={COULEURS.concurrent2.opacity}
              strokeWidth={1.5}
              strokeDasharray="2 2"
            />
          )}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}