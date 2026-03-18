import type { Positionnement } from '@/types/analyses'

type Props = {
  positionnement: Positionnement
}

export default function StatutBadge({ positionnement }: Props) {
  const config: Record<Positionnement, { label: string; className: string }> = {
    "achat fort": {
      label: 'Achat Fort',
      className: 'bg-[#1B4332] text-[#F7F4EF]',
    },
    accumulation: {
      label: 'Accumulation',
      className: 'bg-[#D6EDDF] text-[#1B4332]',
    },
    surveillance: {
      label: 'En surveillance',
      className: 'bg-[#F0E4C0]/20 text-[#A07C35]',
    },
    allégement: {
      label: 'Prise de Profits',
      className: 'bg-[#E0DBCF]/20 text-[#1C1917]',
    },
  }

  const { label, className } = config[positionnement]

  return (
    <span
      className={`inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full ${className}`}
    >
      {label}
    </span>
  )
}