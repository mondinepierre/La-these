'use client'

import type { GeoPoint } from '@/types/analyses'

type Props = {
  data:    GeoPoint[]
  source?: string
  title?:  string
}

// Couleurs attribuées selon le classement (index de 0 à 4)
const RANK_COLORS = [
  '#C9A84C', // 1er : Doré
  '#1B4332', // 2ème : Vert très foncé
  '#2D6A4F', // 3ème : Vert foncé
  '#40916C', // 4ème : Vert moyen
  '#52B788', // 5ème : Vert clair
  '#93b493', // 6ème : Vert clair+
  '#c1d4ca', // 7ème : Vert clair++
]

const DEFAULT_COLOR = '#A8A29E' // Au-delà (6ème et +) : Gris

export default function GeoRevenueChart({ data, source, title }: Props) {
  // Les données sont triées ici (du plus grand % au plus petit)
  const sorted       = [...data].sort((a, b) => b.pct - a.pct)
  const total        = sorted.reduce((sum, d) => sum + d.pct, 0)
  const displayTitle = title ?? 'Répartition géographique du CA'

  return (
    <div className="my-8">
      <h3 style={{
        fontFamily:   'var(--font-display)',
        fontSize:     '18px',
        fontWeight:   600,
        color:        'var(--color-accent)',
        marginBottom: '1.25rem',
      }}>
        {displayTitle}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* On récupère 'index' pour déterminer le rang de chaque région */}
        {sorted.map(({ region, pct }, index) => {
          // Si l'index dépasse la taille du tableau RANK_COLORS, on utilise le gris
          const couleur = RANK_COLORS[index] ?? DEFAULT_COLOR
          const largeur = `${(pct / total) * 100}%`

          return (
            <div key={region}>
              <div style={{
                display:        'flex',
                justifyContent: 'space-between',
                alignItems:     'baseline',
                marginBottom:   '4px',
              }}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize:   '13px',
                  color:      'var(--color-ink-muted)',
                }}>
                  {region}
                </span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize:   '13px',
                  fontWeight: 600,
                  color:      couleur,
                }}>
                  {pct.toFixed(2)} %
                </span>
              </div>

              <div style={{
                height:          '8px',
                backgroundColor: 'var(--color-stone-border)',
                borderRadius:    '999px',
                overflow:        'hidden',
              }}>
                <div style={{
                  width:           largeur,
                  height:          '100%',
                  backgroundColor: couleur,
                  borderRadius:    '999px',
                }} />
              </div>
            </div>
          )
        })}
      </div>

      {source && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize:   '11px',
          color:      'var(--color-ink-faint)',
          marginTop:  '0.75rem',
          fontStyle:  'italic',
        }}>
          Source : {source}
        </p>
      )}
    </div>
  )
}