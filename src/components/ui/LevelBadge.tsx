import { cn } from '@/lib/utils'

export type Level = 'debutant' | 'intermediaire' | 'avance'

interface LevelBadgeProps {
  level: Level
  className?: string
}

const LEVEL_CONFIG: Record<Level, { label: string; styles: string }> = {
  debutant: {
    label: 'Débutant',
    styles: 'bg-[#F2EFE9] text-[#6B6458] border-[#D8D2C8]',
  },
  intermediaire: {
    label: 'Intermédiaire',
    styles: 'bg-[#D6EDDF] text-[#1B4332] border-[#A7D4B8]',
  },
  avance: {
    label: 'Avancé',
    styles: 'bg-[#1C1917] text-[#E8E4DF] border-[#1C1917]',
  },
}

export function LevelBadge({ level, className }: LevelBadgeProps) {
  const { label, styles } = LEVEL_CONFIG[level]
  return (
    <span
      className={cn(
        'inline-flex items-center',
        'font-sans text-[11px] font-medium tracking-[0.06em] uppercase',
        'px-2.5 py-0.5 rounded-sm border',
        styles,
        className
      )}
    >
      {label}
    </span>
  )
}
