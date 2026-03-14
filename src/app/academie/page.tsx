// src/app/academie/page.tsx
import Link from 'next/link'

export default function academiePage() {
  return (
    <main className="max-w-content mx-auto px-6 py-12">
      <p className="section-label mb-4">Académie</p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', marginBottom: '0.5rem' }}>
        academie
      </h1>
      <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-muted)', marginBottom: '3rem' }}>
        Trois parcours progressifs, du premier investissement aux stratégies avancées.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>

        <Link href="/academie/bases" style={{ display: 'block', padding: '1.5rem 0', borderBottom: '1px solid var(--color-stone-border)', textDecoration: 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="level-badge level-badge--debutant" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Débutant</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--color-ink)', margin: '0.25rem 0' }}>Les bases</h2>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-ink-muted)', margin: 0 }}>5 modules · Aucun prérequis</p>
            </div>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-accent)' }}>Commencer →</span>
          </div>
        </Link>

        <div style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--color-stone-border)', opacity: 0.4 }}>
          <span className="level-badge level-badge--intermediaire" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Intermédiaire</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--color-ink)', margin: '0.25rem 0' }}>Intermédiaire</h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-ink-muted)', margin: 0 }}>5 modules · Prérequis : Bases — bientôt disponible</p>
        </div>

        <div style={{ padding: '1.5rem 0', opacity: 0.4 }}>
          <span className="level-badge level-badge--avance" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Avancé</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--color-ink)', margin: '0.25rem 0' }}>Avancé</h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-ink-muted)', margin: 0 }}>9 modules · Prérequis : Intermédiaire — bientôt disponible</p>
        </div>

      </div>
    </main>
  )
}