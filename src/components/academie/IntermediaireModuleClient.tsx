'use client'
import dynamic from 'next/dynamic'
import { ModuleNavigation } from '@/components/ui/ModuleNavigation'
import Link from 'next/link'

const MDX: Record<string, React.ComponentType> = {
  'analyser-un-etf':         dynamic(() => import('@/content/academie/intermediaire/analyser-un-etf.mdx')),
  'analyse-fondamentale':     dynamic(() => import('@/content/academie/intermediaire/analyse-fondamentale.mdx')),
  'analyse-technique':        dynamic(() => import('@/content/academie/intermediaire/analyse-technique.mdx')),
  'gerer-le-risque':          dynamic(() => import('@/content/academie/intermediaire/gerer-le-risque.mdx')),
  'psychologie-investisseur': dynamic(() => import('@/content/academie/intermediaire/psychologie-investisseur.mdx')),
}

interface Props {
  slug: string
  title: string
  duration: string
  prev?: { label: string; slug: string }
  next?: { label: string; slug: string }
}

export function IntermediaireModuleClient({ slug, title, duration, prev, next }: Props) {
  const Content = MDX[slug]

  return (
    <main className="max-w-content mx-auto px-6 py-12">

      <nav style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '2rem' }}>
        <Link href="/academie" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-faint)', textDecoration: 'none' }}>Académie</Link>
        <span style={{ color: 'var(--color-ink-faint)', fontSize: '13px' }}>·</span>
        <Link href="/academie/intermediaire" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-faint)', textDecoration: 'none' }}>Intermédiaire</Link>
        <span style={{ color: 'var(--color-ink-faint)', fontSize: '13px' }}>·</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-muted)' }}>{title}</span>
      </nav>

      <div style={{ marginBottom: '2.5rem' }}>
        <span className="level-badge level-badge--intermediaire" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Intermédiaire</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', marginBottom: '0.5rem', lineHeight: 1.2 }}>{title}</h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-ink-faint)' }}>{duration} de lecture</p>
      </div>

      <article className="prose-editorial">
        {Content && <Content />}
      </article>

      <ModuleNavigation
        prev={prev ? { label: prev.label, href: `/academie/intermediaire/${prev.slug}` } : undefined}
        next={next ? { label: next.label, href: `/academie/intermediaire/${next.slug}` } : undefined}
        backTo={{ label: 'Retour au parcours Intermédiaire', href: '/academie/intermediaire' }}
      />

    </main>
  )
}
