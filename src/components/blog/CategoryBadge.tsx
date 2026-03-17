import { Categorie } from '@/types/blog'

const config: Record<Categorie, { label: string; className: string }> = {
  pedagogie: {
    label: 'Pédagogie',
    className: 'bg-[#1B4332]/10 text-[#1B4332] border border-[#1B4332]/20',
  },
  macro: {
    label: 'Macro',
    className: 'bg-[#78716C]/10 text-[#78716C] border border-[#78716C]/20',
  },
  methode: {
    label: 'Méthode',
    className: 'bg-[#C9A84C]/15 text-[#8B6914] border border-[#C9A84C]/30',
  },
  parcours: {
    label: 'Parcours',
    className: 'bg-[#1B4332]/5 text-[#1B4332] border border-[#1B4332]/15',
  },
}

export function CategoryBadge({ category }: { category: Categorie }) {
  const { label, className } = config[category]
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-medium tracking-wide ${className}`}>
      {label}
    </span>
  )
}