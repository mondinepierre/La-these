'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import type { AnalyseCard } from '@/types/analyses'
import { isValeurSuivie } from '@/types/analyses'
import AnalysePonctuelleTemplate from './AnalysePonctuelleTemplate'
import ValeurSuivieTemplate from './ValeurSuivieTemplate'

const MDX: Record<string, React.ComponentType<any>> = {
  'airliquide':         dynamic(() => import('@/content/analyses/valeurs/airliquide.mdx')),
  'alphabet':           dynamic(() => import('@/content/analyses/valeurs/alphabet.mdx')),
  'asml':               dynamic(() => import('@/content/analyses/valeurs/asml.mdx')),
  'novo':               dynamic(() => import('@/content/analyses/valeurs/novo.mdx')),
  'totalenergies':      dynamic(() => import('@/content/analyses/valeurs/totalenergies.mdx')),
  'microsoft':          dynamic(() => import('@/content/analyses/valeurs/microsoft.mdx')),
  'visa':               dynamic(() => import('@/content/analyses/valeurs/visa.mdx')),
  'loreal':             dynamic(() => import('@/content/analyses/valeurs/loreal.mdx')),
  'cameco':               dynamic(() => import('@/content/analyses/valeurs/cameco.mdx')),
  'constellationenergy':  dynamic(() => import('@/content/analyses/valeurs/constellationenergy.mdx')),
  'thales':               dynamic(() => import('@/content/analyses/valeurs/thales.mdx')),
  'exail-technologies':   dynamic(() => import('@/content/analyses/valeurs/exail-technologies.mdx')),
  'gtt':                  dynamic(() => import('@/content/analyses/valeurs/gtt.mdx')),
  'rockwell-automation':  dynamic(() => import('@/content/analyses/valeurs/rockwell-automation.mdx')),
  'msci':             dynamic(() => import('@/content/analyses/valeurs/msci-inc.mdx')),
  'now':             dynamic(() => import('@/content/analyses/valeurs/now.mdx')),
  'idexx':           dynamic(() => import('@/content/analyses/ponctuelles/idexx.mdx')),
  'veeva':           dynamic(() => import('@/content/analyses/ponctuelles/veeva.mdx')),
  'lly':             dynamic(() => import('@/content/analyses/ponctuelles/lly.mdx')),
  'dexcom':          dynamic(() => import('@/content/analyses/ponctuelles/dexcom.mdx')),
  'autodesk':             dynamic(() => import('@/content/analyses/ponctuelles/autodesk.mdx')),
  'apr-corporation':             dynamic(() => import('@/content/analyses/ponctuelles/apr-corporation.mdx')),
  'uber':                        dynamic(() => import('@/content/analyses/ponctuelles/uber.mdx')),
  'otc-markets-group':             dynamic(() => import('@/content/analyses/valeurs/otc-markets-group.mdx')),

  // en construction






  // Ponctuelles
  'monster':              dynamic(() => import('@/content/analyses/ponctuelles/monster.mdx')),
  'krikri':               dynamic(() => import('@/content/analyses/ponctuelles/krikri.mdx')),
  'mama':                 dynamic(() => import('@/content/analyses/ponctuelles/mama.mdx')),
  'sondage':              dynamic(() => import('@/content/analyses/ponctuelles/sondage.mdx')),
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