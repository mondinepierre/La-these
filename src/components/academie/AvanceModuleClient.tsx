'use client'
import dynamic from 'next/dynamic'
import { ModuleNavigation } from '@/components/ui/ModuleNavigation'
import Link from 'next/link'

const MDX: Record<string, React.ComponentType> = {
  'long-et-short':  dynamic(() => import('@/content/academie/avance/long-et-short.mdx')),
  'le-levier':      dynamic(() => import('@/content/academie/avance/le-levier.mdx')),
  'les-options':    dynamic(() => import('@/content/academie/avance/les-options.mdx')),
  'le-hedge':       dynamic(() => import('@/content/academie/avance/le-hedge.mdx')),
  'ordres-avances': dynamic(() => import('@/content/academie/avance/ordres-avances.mdx')),
}

interface Props {
  slug: string
  title: string
  duration: string
  prev?: { label: string; slug: string }
  next?: { label: string; slug: string }
}

export function AvanceModuleClient({ slug, title, duration, prev, next }: Props) {
  const Content = MDX[slug]

  return (
    <main className="max-w-content mx-auto px-6 py-12">

      <nav style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '2rem' }}>
        <Link href="/academie" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-faint)', textDecoration: 'none' }}>Académie</Link>
        <span style={{ color: 'var(--color-ink-faint)', fontSize: '13px' }}>·</span>
        <Link href="/academie/avance" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-faint)', textDecoration: 'none' }}>Avancé</Link>
        <span style={{ color: 'var(--color-ink-faint)', fontSize: '13px' }}>·</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-muted)' }}>{title}</span>
      </nav>

      <div style={{ marginBottom: '2.5rem' }}>
        <span className="level-badge level-badge--avance" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Avancé</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', marginBottom: '0.5rem', lineHeight: 1.2 }}>{title}</h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-faint)' }}>{duration} de lecture</p>
      </div>

      <article className="prose-editorial">
        {Content && <Content />}
      </article>

      <ModuleNavigation
        prev={prev ? { label: prev.label, href: `/academie/avance/${prev.slug}` } : undefined}
        next={next ? { label: next.label, href: `/academie/avance/${next.slug}` } : undefined}
        backTo={{ label: 'Retour au parcours Avancé', href: '/academie/avance' }}
      />

    </main>
  )
}
