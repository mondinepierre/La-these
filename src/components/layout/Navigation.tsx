'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/academie',  label: 'Académie' },
  { href: '/analyses',  label: 'Analyses' },
  { href: '/glossaire', label: 'Glossaire' },
  { href: '/a-propos',  label: 'À propos' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-accent border-b border-white/10">
      <nav className="max-w-full-layout mx-auto px-6 h-nav flex items-center justify-between gap-8">

        {/* Marque */}
        <Link href="/" className="flex flex-col leading-none shrink-0">
          <span className="font-display text-[19px] font-semibold text-stone-warm tracking-tight">
            La Thèse
          </span>
          <span className="font-serif text-[10px] italic text-white/45 mt-0.5">
            Penser long, investir juste
          </span>
        </Link>

        {/* Liens */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname.startsWith(href)
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'font-sans text-sm transition-colors duration-150',
                    isActive
                      ? 'text-stone-warm font-medium'
                      : 'text-white/60 hover:text-white/90'
                  )}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA Discord */}
        <Link
          href="/discord"
          className="hidden sm:inline-flex items-center gap-1.5 shrink-0 font-sans text-sm font-medium text-accent bg-gold px-4 py-2 rounded hover:bg-gold/90 transition-colors duration-150"
        >
          Rejoindre
        </Link>

      </nav>
    </header>
  )
}
