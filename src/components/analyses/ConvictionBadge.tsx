import type { Conviction } from '@/types/analyses'

type Props = {
  conviction: Conviction
}

export default function ConvictionBadge({ conviction }: Props) {
  const config: Record<Conviction, { label: string; className: string }> = {
    forte: {
      label: 'Conviction forte',
      className: 'bg-[#1B4332] text-[#F7F4EF]',
    },
    moyenne: {
      label: 'Conviction moyenne',
      className: 'bg-[#C9A84C]/20 text-[#7a6330]',
    },
    surveillance: {
      label: 'En surveillance',
      className: 'bg-stone-200 text-stone-600',
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