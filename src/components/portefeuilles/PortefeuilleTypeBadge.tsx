import { TypePortefeuille } from '@/types/portefeuilles'

const CONFIG: Record<TypePortefeuille, { label: string; color: string; bg: string }> = {
  personnel: {
    label: 'Personnel',
    color: '#1B4332',
    bg: '#D1FAE5',
  },
  modele: {
    label: 'Modèle pédagogique',
    color: '#1e40af',
    bg: '#DBEAFE',
  },
  thematique: {
    label: 'Thématique',
    color: '#92400e',
    bg: '#FEF3C7',
  },
}

export default function PortefeuilleTypeBadge({ type }: { type: TypePortefeuille }) {
  const { label, color, bg } = CONFIG[type]
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 10px',
        borderRadius: 99,
        fontSize: 12,
        fontWeight: 600,
        fontFamily: 'DM Sans, sans-serif',
        letterSpacing: '0.02em',
        color,
        background: bg,
      }}
    >
      {label}
    </span>
  )
}
