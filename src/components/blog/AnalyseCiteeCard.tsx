import Link from 'next/link'
import { ANALYSES } from '@/data/analyses'
import ConvictionBadge from '@/components/analyses/ConvictionBadge'

export function AnalyseCiteeCard({ slug }: { slug: string }) {
  const analyse = ANALYSES.find(a => a.slug === slug)

  if (!analyse) return (
    <Link
      href={`/analyses/${slug}`}
      className="block p-4 bg-[#F7F4EF] border border-[#E0DBCF] rounded-lg hover:border-[#C9A84C] transition-colors"
    >
      <span className="text-sm text-[#1B4332]">→ {slug.toUpperCase()}</span>
    </Link>
  )

const nom = 'nom' in analyse ? analyse.nom : analyse.title
const secteur = 'secteur' in analyse ? analyse.secteur : null
const zone = 'zone' in analyse ? analyse.zone : null
const conviction = 'conviction' in analyse ? analyse.conviction : null

  return (
    <Link
      href={`/analyses/${slug}`}
      className="group block p-4 bg-[#F7F4EF] border border-[#E0DBCF] rounded-lg hover:border-[#C9A84C] transition-colors duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          {secteur && (
            <p className="text-xs font-medium tracking-widest uppercase text-[#78716C] mb-1">
              {secteur}{zone ? ` · ${zone}` : ''}
            </p>
          )}
          <p className="font-playfair text-base text-[#1B4332] group-hover:text-[#C9A84C] transition-colors">
            {nom}
            <span className="ml-2 text-xs font-sans text-[#78716C] uppercase tracking-wide">
              {slug.toUpperCase()}
            </span>
          </p>
        </div>
        {conviction && <ConvictionBadge conviction={conviction} />}
      </div>
      <p className="text-xs text-[#78716C] mt-2">→ Voir la fiche analyse</p>
    </Link>
  )
}