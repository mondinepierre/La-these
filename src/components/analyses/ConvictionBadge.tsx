import type { Conviction } from '@/types/analyses'

type Props = {
  conviction: Conviction
}

export default function ConvictionBadge({ conviction }: Props) {
  const config: Record<Conviction, { label: string; className: string }> = {
    exceptionnelle: {
      label: 'Conviction Haute',
      className: 'bg-[#1B4332] text-[#F7F4EF]',
    },
    forte: {
      label: 'Conviction forte',
      className: 'bg-[#D6EDDF] text-[#1B4332]',
    },
    moyenne: {
      label: 'Conviction moyenne',
      className: 'bg-[#F0E4C0]/20 text-[#A07C35]',
    },
    spéculative: {
      label: 'Pari spéculatif',
      className: 'bg-[#E0DBCF]/20 text-[#1C1917]',
    },
  }

  const { label, className } = config[conviction]

  return (
    <span
      className={`inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full ${className}`}
    >
      {label}
    </span>
  )
}