import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import fs from 'fs'
import path from 'path'
import { portefeuilles, getPortefeuille } from '@/data/portefeuilles'
import PortefeuilleTemplate from '@/components/portefeuilles/PortefeuilleTemplate'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return portefeuilles.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const portefeuille = getPortefeuille(slug)
  if (!portefeuille) return {}

  return {
    title: `${portefeuille.title} — La Thèse`,
    description: portefeuille.description,
  }
}

export default async function PortefeuilleSlugPage({ params }: Props) {
  const { slug } = await params
  const portefeuille = getPortefeuille(slug)

  if (!portefeuille) return notFound()

  // Lecture du fichier MDX
  const mdxPath = path.join(process.cwd(), 'src/content/portefeuilles', `${slug}.mdx`)

  let content: React.ReactNode = null

  if (fs.existsSync(mdxPath)) {
    const source = fs.readFileSync(mdxPath, 'utf-8')
    const { content: mdxContent } = await compileMDX({
      source,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    })
    content = mdxContent
  }

  return <PortefeuilleTemplate portefeuille={portefeuille}>{content}</PortefeuilleTemplate>
}
