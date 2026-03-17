import { StatutPortefeuille } from '@/types/portefeuilles'

const CONFIG: Record<StatutPortefeuille, { label: string; color: string; bg: string; dot: string }> = {
  actif: {
    label: 'Actif',
    color: '#166534',
    bg: '#DCFCE7',
    dot: '#16a34a',
  },
  archive: {
    label: 'Archivé',
    color: '#374151',
    bg: '#F3F4F6',
    dot: '#9CA3AF',
  },
  'en-construction': {
    label: 'En construction',
    color: '#92400e',
    bg: '#FEF3C7',
    dot: '#D97706',
  },
}

export default function PortefeuilleStatutBadge({ statut }: { statut: StatutPortefeuille }) {
  const { label, color, bg, dot } = CONFIG[statut]
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
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
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: dot,
          flexShrink: 0,
        }}
      />
      {label}
    </span>
  )
}
