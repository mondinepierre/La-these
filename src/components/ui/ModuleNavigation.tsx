import Link from 'next/link'

interface ModuleNavigationProps {
  prev?: { label: string; href: string }
  next?: { label: string; href: string }
  backTo: { label: string; href: string }
}

export function ModuleNavigation({ prev, next, backTo }: ModuleNavigationProps) {
  return (
    <nav
      style={{
        marginTop: '4rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--color-stone-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      {/* Retour au parcours */}
      <div style={{ textAlign: 'center' }}>
        <Link
          href={backTo.href}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: 'var(--color-ink-faint)',
            textDecoration: 'none',
          }}
        >
          ↑ {backTo.label}
        </Link>
      </div>

      {/* Précédent / Suivant — masqués si absent */}
      {(prev || next) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {prev ? (
            <Link
              href={prev.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'var(--color-accent)',
                textDecoration: 'none',
              }}
            >
              ← {prev.label}
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={next.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'var(--color-accent)',
                textDecoration: 'none',
              }}
            >
              {next.label} →
            </Link>
          ) : (
            <span />
          )}

        </div>
      )}
    </nav>
  )
}
