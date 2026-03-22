'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/academie',  label: 'Académie' },
  { href: '/analyses',  label: 'Analyses' },
  { href: '/portefeuilles', label: 'Portefeuilles' },
  { href: '/blog',  label: 'Blog' },
  { href: '/bibliotheque-etf',    label: 'ETF' }, 
  { href: '/glossaire', label: 'Glossaire' },
  { href: '/a-propos',  label: 'À propos' },
]

const BREAKPOINT = 768 // px — équivalent md Tailwind

export function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen]       = useState(false)
  const [isDesktop, setIsDesktop]     = useState(true) // SSR-safe default

  // Détecte la largeur d'écran, côté client uniquement
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= BREAKPOINT)
    check() // valeur initiale
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Ferme le menu au changement de page ou passage desktop
  useEffect(() => { setMenuOpen(false) }, [pathname, isDesktop])

  // Bloque le scroll body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = (!isDesktop && menuOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, isDesktop])

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#1B4332', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>

      {/* Barre principale */}
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>

        {/* Marque */}
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '19px', fontWeight: 600, color: '#F7F4EF', letterSpacing: '-0.01em' }}>
            La Thèse
          </span>
          <span style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '10px', fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>
            Penser long, investir juste
          </span>
        </Link>

        {/* Liens desktop */}
        {isDesktop && (
          <ul style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: '"DM Sans", system-ui, sans-serif',
                      fontSize: '14px',
                      fontWeight: isActive ? 500 : 400,
                      color: isActive ? '#F7F4EF' : 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}

        {/* Droite */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          {/* CTA desktop */}
          {isDesktop && (
            <Link
              href="/rejoindre"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1B4332', backgroundColor: '#C9A84C', padding: '7px 16px', borderRadius: '5px', textDecoration: 'none' }}
            >
              Rejoindre
            </Link>
          )}

          {/* Hamburger mobile */}
          {!isDesktop && (
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '36px', height: '36px', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <span style={{ display: 'block', width: '20px', height: '1px', backgroundColor: 'rgba(255,255,255,0.85)', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
              <span style={{ display: 'block', width: '20px', height: '1px', backgroundColor: 'rgba(255,255,255,0.85)', transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '20px', height: '1px', backgroundColor: 'rgba(255,255,255,0.85)', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
            </button>
          )}
        </div>
      </nav>

      {/* Menu mobile déroulant */}
      {!isDesktop && (
        <div style={{ overflow: 'hidden', maxHeight: menuOpen ? '400px' : '0', transition: 'max-height 0.3s ease', borderTop: menuOpen ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', margin: 0, padding: '0.75rem 1.25rem 1rem' }}>
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    style={{ display: 'block', fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '16px', fontWeight: isActive ? 500 : 400, color: isActive ? '#F7F4EF' : 'rgba(255,255,255,0.65)', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
            <li style={{ paddingTop: '12px' }}>
              <Link
                href="/rejoindre"
                style={{ display: 'flex', justifyContent: 'center', fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1B4332', backgroundColor: '#C9A84C', padding: '12px', borderRadius: '5px', textDecoration: 'none' }}
              >
                Rejoindre la communauté
              </Link>
            </li>
          </ul>
        </div>
      )}

    </header>
  )
}