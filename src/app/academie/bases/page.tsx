'use client'
import Link from 'next/link'
import { useState } from 'react'

const modules = [
  { slug: 'pourquoi-investir', title: 'Pourquoi investir ?', duration: '7 min' },
  { slug: 'choisir-sa-strategie', title: 'Choisir sa stratégie', duration: '12 min' },
  { slug: 'choisir-son-enveloppe', title: 'Choisir son enveloppe', duration: '10 min' },
  { slug: 'choisir-son-broker', title: 'Choisir son broker', duration: '8 min' },
  { slug: 'routine-investisseur', title: "La routine de l'investisseur", duration: '6 min' },
]

function ModuleRow({ mod, index }: { mod: typeof modules[0], index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <li>
      <Link
        href={`/academie/bases/${mod.slug}`}
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
            color: hovered ? '#1B4332' : '#1C1917',
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

export default function BasesPage() {
  return (
    <main className="max-w-content mx-auto px-6 py-12">
      <p className="section-label mb-4">Parcours</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', margin: 0 }}>
          Les bases
        </h1>
        <span className="level-badge level-badge--debutant">Débutant</span>
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-muted)', marginBottom: '3rem' }}>
        5 modules · Aucun prérequis
      </p>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {modules.map((mod, i) => (
          <ModuleRow key={mod.slug} mod={mod} index={i} />
        ))}
      </ol>
    </main>
  )
}