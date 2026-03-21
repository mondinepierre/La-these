'use client'

import type { GeoPoint } from '@/types/analyses'

type Props = {
  data:    GeoPoint[]
  source?: string
  title?:  string
}

const COULEURS: Record<string, string> = {
  'Europe':           '#1B4332',
  'France':           '#4A7C5F',
  'États-Unis':       '#2D6A4F',
  'Amérique du Nord': '#2D6A4F',
  'Chine':            '#C9A84C',
  'Asie':             '#E0A030',
  'Corée du Sud':     '#B8892A',
  'Taïwan':           '#D4A040',
  'Japon':            '#78716C',
  'Reste du monde':   '#A8A29E',
}

function getCouleur(region: string): string {
  return COULEURS[region] ?? '#C4BEB4'
}

export default function GeoRevenueChart({ data, source, title }: Props) {
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
        {sorted.map(({ region, pct }) => {
          const couleur = getCouleur(region)
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
                  {pct.toFixed(0)} %
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