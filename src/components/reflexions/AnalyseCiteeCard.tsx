import Link from 'next/link'
import { ANALYSES } from '@/data/analyses'
import ConvictionBadge from '@/components/analyses/ConvictionBadge'
import PositionnementBadge from '../analyses/StatutBadge'

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

// Force le type string pour ce qui doit être affiché
const nom = (('nom' in analyse ? analyse.nom : analyse.title) as string);
const secteur = ('secteur' in analyse ? analyse.secteur : null) as string | null;
const zone = ('zone' in analyse ? analyse.zone : null) as string | null;
const conviction = ('conviction' in analyse ? analyse.conviction : null) as any;
const positionnement = ('positionnement' in analyse ? analyse.positionnement : null) as any;

  return (
    <Link
      href={`/analyses/${slug}`}
      className="group block p-4 bg-[#F7F4EF] border border-[#E0DBCF] rounded-lg hover:border-[#C9A84C] transition-colors duration-200"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
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
        <div className="flex flex-row flex-wrap gap-1.5 sm:flex-col sm:items-end sm:shrink-0">
          {conviction && <ConvictionBadge conviction={conviction} />}
          {positionnement && <PositionnementBadge positionnement={positionnement} />}
        </div>
      </div>
      <p className="text-xs text-[#78716C] mt-2">→ Voir la fiche analyse</p>
    </Link>
  )
}