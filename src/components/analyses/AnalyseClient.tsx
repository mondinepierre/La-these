'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import type { AnalyseCard } from '@/types/analyses'
import { isValeurSuivie } from '@/types/analyses'
import AnalysePonctuelleTemplate from './AnalysePonctuelleTemplate'
import ValeurSuivieTemplate from './ValeurSuivieTemplate'

const MDX: Record<string, React.ComponentType<any>> = {
  'alphabet':      dynamic(() => import('@/content/analyses/valeurs/alphabet.mdx')),
  'asml':          dynamic(() => import('@/content/analyses/valeurs/asml.mdx')),
  'novo':          dynamic(() => import('@/content/analyses/valeurs/novo.mdx')),
  'totalenergies': dynamic(() => import('@/content/analyses/valeurs/totalenergies.mdx')),
  'microsoft':     dynamic(() => import('@/content/analyses/valeurs/microsoft.mdx')),
  'visa':          dynamic(() => import('@/content/analyses/valeurs/visa.mdx')),
  'sondage': dynamic(() => import('@/content/analyses/ponctuelles/sondage.mdx')),
}

type Props = {
  frontmatter: AnalyseCard
}

export function AnalyseClient({ frontmatter }: Props) {
  const Content = MDX[frontmatter.slug]
  if (!Content) return null

  if (isValeurSuivie(frontmatter)) {
    return <ValeurSuivieTemplate frontmatter={frontmatter} Content={Content} />
  }

  return <AnalysePonctuelleTemplate frontmatter={frontmatter} Content={Content} />
}