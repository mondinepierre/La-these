'use client'
import dynamic from 'next/dynamic'
import { ModuleNavigation } from '@/components/ui/ModuleNavigation'
import Link from 'next/link'

const MDX: Record<string, React.ComponentType> = {
  'pourquoi-investir':     dynamic(() => import('@/content/academie/bases/pourquoi-investir.mdx')),
  'choisir-sa-strategie':  dynamic(() => import('@/content/academie/bases/choisir-sa-strategie.mdx')),
  'choisir-son-enveloppe': dynamic(() => import('@/content/academie/bases/choisir-son-enveloppe.mdx')),
  'choisir-son-broker':    dynamic(() => import('@/content/academie/bases/choisir-son-broker.mdx')),
  'routine-investisseur':  dynamic(() => import('@/content/academie/bases/routine-investisseur.mdx')),
}

interface Props {
  slug: string
  title: string
  duration: string
  prev?: { label: string; slug: string }
  next?: { label: string; slug: string }
}

export function BasesModuleClient({ slug, title, duration, prev, next }: Props) {
  const Content = MDX[slug]

  return (
    <main className="max-w-content mx-auto px-6 py-12">

      <nav style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '2rem' }}>
        <Link href="/academie" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-faint)', textDecoration: 'none' }}>Académie</Link>
        <span style={{ color: 'var(--color-ink-faint)', fontSize: '13px' }}>·</span>
        <Link href="/academie/bases" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-faint)', textDecoration: 'none' }}>Bases</Link>
        <span style={{ color: 'var(--color-ink-faint)', fontSize: '13px' }}>·</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-muted)' }}>{title}</span>
      </nav>

      <div style={{ marginBottom: '2.5rem' }}>
        <span className="level-badge level-badge--debutant" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Débutant</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', marginBottom: '0.5rem', lineHeight: 1.2 }}>{title}</h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-faint)' }}>{duration} de lecture</p>
      </div>

      <article className="prose-editorial">
        {Content && <Content />}
      </article>

      <ModuleNavigation
        prev={prev ? { label: prev.label, href: `/academie/bases/${prev.slug}` } : undefined}
        next={next ? { label: next.label, href: `/academie/bases/${next.slug}` } : undefined}
        backTo={{ label: 'Retour au parcours Bases', href: '/academie/bases' }}
      />

    </main>
  )
}
