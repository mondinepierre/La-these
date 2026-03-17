import Link from 'next/link'
import { glossaire } from '@/data/glossaire'

interface TermeProps {
  id: string
  label?: string  // override optionnel si le label affiché doit différer
}

export function Terme({ id, label }: TermeProps) {
  const entry = glossaire.find(t => t.slug === id)
  const display = label ?? entry?.label ?? id

  return (
    <Link
      href={`/glossaire/${id}`}
      className="border-b border-[#C9A84C] text-inherit hover:text-[#C9A84C] transition-colors duration-150"
    >
      {display}
    </Link>
  )
}