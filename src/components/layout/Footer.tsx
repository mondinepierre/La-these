import Link from 'next/link'

const FOOTER_LINKS = [
  { href: '/academie',  label: 'Académie' },
  { href: '/analyses',  label: 'Analyses' },
  { href: '/portefeuilles', label: 'Portefeuilles' },
  { href: '/blog',  label: 'Blog' },
  { href: '/bibliotheque-etf',    label: 'ETF' }, 
  { href: '/fiscalite',           label: 'Fiscalité' },
  { href: '/declaration-fiscale', label: 'Déclaration fiscale' },
  { href: '/glossaire', label: 'Glossaire' },
  { href: '/discord',   label: 'Discord' },
  { href: '/a-propos',  label: 'À propos' },
  { href: '/legal',     label: 'Mentions légales' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#E0DBCF] bg-[#F7F4EF]">
      <div className="max-w-full-layout mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Marque */}
          <div>
            <p className="font-display text-base font-medium text-[#1C1917]">
              La Thèse
            </p>
            <p className="font-serif text-xs italic text-[#A8A29E] mt-0.5">
              Penser long, investir juste
            </p>
          </div>

          {/* Liens */}
          <nav aria-label="Liens du pied de page">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-xs text-[#78716C] hover:text-[#1C1917] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Avertissement */}
          <p className="font-sans text-[11px] text-[#A8A29E] max-w-xs">
            Contenu informatif uniquement — pas de conseil financier.{' '}
            <Link href="/legal" className="underline hover:text-[#78716C] transition-colors">
              Avertissement légal
            </Link>
          </p>

        </div>

        <div className="mt-6 pt-5 border-t border-[#E0DBCF]">
          <p className="font-sans text-[11px] text-[#A8A29E]">
            © {currentYear} La Thèse. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
