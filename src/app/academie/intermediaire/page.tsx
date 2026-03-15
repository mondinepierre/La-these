'use client'
import Link from 'next/link'
import { useState } from 'react'

const modules = [
  { slug: 'analyser-un-etf',         title: 'Analyser un ETF',                duration: '6 min' },
  { slug: 'analyse-fondamentale',     title: 'Analyse fondamentale',           duration: '8 min' },
  { slug: 'analyse-technique',        title: 'Analyse technique',              duration: '10 min' },
  { slug: 'gerer-le-risque',          title: 'Gérer le risque',                duration: '7 min' },
  { slug: 'psychologie-investisseur', title: "Psychologie de l'investisseur",  duration: '6 min' },
]

function ModuleRow({ mod, index }: { mod: typeof modules[0], index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <li>
      <Link
        href={`/academie/intermediaire/${mod.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 0',
          borderBottom: '1px solid var(--color-stone-border)',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--color-ink-faint)', minWidth: '20px' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '18px',
            color: hovered ? '#2D6A4F' : '#1C1917',
            transition: 'color 0.15s ease',
          }}>
            {mod.title}
          </span>
        </div>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--color-ink-faint)' }}>
          {mod.duration}
        </span>
      </Link>
    </li>
  )
}

export default function IntermediairePage() {
  return (
    <main className="max-w-content mx-auto px-6 py-12">

      {/* Retour académie */}
      <Link
        href="/academie"
        style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-faint)', textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}
      >
        ← Académie
      </Link>

      <p className="section-label mb-4">Parcours</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', margin: 0 }}>Intermédiaire</h1>
        <span className="level-badge level-badge--intermediaire">Intermédiaire</span>
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-muted)', marginBottom: '3rem' }}>
        5 modules · Prérequis : Bases
      </p>

      <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {modules.map((mod, i) => (
          <ModuleRow key={mod.slug} mod={mod} index={i} />
        ))}
      </ol>

      {/* Navigation inter-niveaux */}
      <nav style={{
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--color-stone-border)',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Link
          href="/academie/bases"
          style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-accent)', textDecoration: 'none' }}
        >
          ← Parcours Bases
        </Link>
        <Link
          href="/academie/avance"
          style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-accent)', textDecoration: 'none' }}
        >
          Parcours Avancé →
        </Link>
      </nav>

    </main>
  )
}
