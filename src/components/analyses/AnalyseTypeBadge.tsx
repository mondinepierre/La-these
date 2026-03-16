type Props = {
  type: 'ponctuelle' | 'valeur'
}

export default function AnalyseTypeBadge({ type }: Props) {
  const config = {
    ponctuelle: {
      label: 'Analyse ponctuelle',
      className: 'bg-stone-100 text-stone-600',
    },
    valeur: {
      label: 'Valeur suivie',
      className: 'bg-[#1B4332]/10 text-[#1B4332]',
    },
  }

  const { label, className } = config[type]

  return (
    <span
      className={`inline-block text-xs font-sans font-medium px-2.5 py-1 rounded-full ${className}`}
    >
      {label}
    </span>
  )
}