import ValeurSuivieTemplate from './ValeurSuivieTemplate'
import type { FrontmatterPonctuelle } from '@/types/analyses'
import type { ComponentType } from 'react'

type MDXContent = ComponentType<{ components?: Record<string, ComponentType> }>

type Props = {
  frontmatter: FrontmatterPonctuelle
  Content:     MDXContent
}

export default function AnalysePonctuelleTemplate({ frontmatter, Content }: Props) {
  return (
    <ValeurSuivieTemplate
      frontmatter={frontmatter}
      Content={Content}
      origine={frontmatter.origine}
    />
  )
}