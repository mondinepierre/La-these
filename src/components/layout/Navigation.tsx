'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/academie',      label: 'Académie' },
  { href: '/analyses',      label: 'Analyses' },
  { href: '/portefeuilles', label: 'Portefeuilles' },
  { href: '/blog',          label: 'Blog' },
  { href: '/bibliotheque-etf', label: 'ETF' }, 
  { href: '/glossaire',     label: 'Glossaire' },
  { href: '/fiscalite',     label: 'Fiscalité' },
  { href: '/a-propos',      label: 'À propos' },
]

const BREAKPOINT = 768

export function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false) // Mobile par défaut pour éviter le flash
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const check = () => setIsDesktop(window.innerWidth >= BREAKPOINT)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname, isDesktop])

  useEffect(() => {
    if (!isDesktop && menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen, isDesktop])

  if (!mounted) return <header style={{ height: '52px', backgroundColor: 'var(--color-accent)' }} />

  return (
    <header style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 50, 
      backgroundColor: 'var(--color-accent)', 
      borderBottom: '1px solid rgba(255,255,255,0.1)' 
    }}>
      <nav style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1.25rem', 
        height: '52px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, textDecoration: 'none' }}>
          <span style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: '19px', 
            fontWeight: 600, 
            color: 'var(--color-stone-warm)' 
          }}>
            La Thèse
          </span>
          <span style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '10px', 
            fontStyle: 'italic', 
            color: 'rgba(255,255,255,0.45)', 
            marginTop: '2px' 
          }}>
            Penser long, investir juste
          </span>
        </Link>

        {/* Desktop Links */}
        {isDesktop && (
          <ul style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      fontWeight: isActive ? 500 : 400,
                      color: isActive ? 'var(--color-stone-warm)' : 'rgba(255,255,255,0.6)',
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

        {/* Right Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {isDesktop && (
            <Link
              href="/discord"
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '13px', 
                fontWeight: 500, 
                color: 'var(--color-accent)', 
                backgroundColor: 'var(--color-gold)', 
                padding: '7px 16px', 
                borderRadius: '5px', 
                textDecoration: 'none' 
              }}
            >
              Rejoindre
            </Link>
          )}

          {!isDesktop && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '36px', 
                height: '36px', 
                gap: '5px', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer' 
              }}
            >
              {/* Animation corrigée : Translate d'abord, Rotate ensuite */}
              <span style={{ 
                display: 'block', width: '20px', height: '1px', backgroundColor: 'white', 
                transition: 'all 0.3s',
                transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' 
              }} />
              <span style={{ 
                display: 'block', width: '20px', height: '1px', backgroundColor: 'white', 
                transition: 'all 0.3s',
                opacity: menuOpen ? 0 : 1 
              }} />
              <span style={{ 
                display: 'block', width: '20px', height: '1px', backgroundColor: 'white', 
                transition: 'all 0.3s',
                transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' 
              }} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {!isDesktop && (
        <div style={{ 
          overflow: 'hidden', 
          maxHeight: menuOpen ? '600px' : '0', // Augmenté pour éviter de couper le bouton Discord
          transition: 'max-height 0.3s ease-in-out', 
          backgroundColor: 'var(--color-accent)',
          borderTop: menuOpen ? '1px solid rgba(255,255,255,0.1)' : 'none' 
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', margin: 0, padding: '0.75rem 1.25rem 1.5rem' }}>
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    style={{ 
                      display: 'block', 
                      fontFamily: 'var(--font-sans)', 
                      fontSize: '16px', 
                      fontWeight: isActive ? 500 : 400, 
                      color: isActive ? 'var(--color-stone-warm)' : 'rgba(255,255,255,0.65)', 
                      padding: '12px 0', 
                      borderBottom: '1px solid rgba(255,255,255,0.08)', 
                      textDecoration: 'none' 
                    }}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
            <li style={{ paddingTop: '1.5rem' }}>
              <Link
                href="/discord"
                style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '14px', 
                  fontWeight: 600, 
                  color: 'var(--color-accent)', 
                  backgroundColor: 'var(--color-gold)', 
                  padding: '14px', 
                  borderRadius: '5px', 
                  textDecoration: 'none' 
                }}
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