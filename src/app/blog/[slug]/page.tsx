import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { getArticle, articles } from '@/data/blog'
import { CategoryBadge } from '@/components/blog/CategoryBadge'
import { LevelBadge } from '@/components/ui/LevelBadge'
import { BlogCard } from '@/components/blog/BlogCard'
import { Terme } from '@/components/ui/Terme'
import { AnalyseCiteeCard } from '@/components/blog/AnalyseCiteeCard'
import { Tableau } from '@/components/ui/Tableau'

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: `${article.title} — La Thèse`,
    description: article.summary,
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
const article = getArticle(slug)
if (!article) notFound()

const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`)
if (!fs.existsSync(filePath)) notFound()

// Ajouter ici :
const isUpcoming = article.publishedAt && new Date(article.publishedAt) > new Date()
if (isUpcoming && process.env.NODE_ENV !== 'development') notFound()

  const source = fs.readFileSync(filePath, 'utf-8')
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
    components: { Terme, Tableau },
  })

  const dateFormatted = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const relatedArticles = articles.filter(a => article.related.includes(a.slug))

  return (
    <main className="max-w-content mx-auto px-6 py-12">
      {/* En-tête */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <CategoryBadge category={article.category} />
          <LevelBadge level={article.level} />
        </div>

        <h1 className="font-playfair text-3xl md:text-4xl text-[#1B4332] mb-4 leading-tight">
          {article.title}
        </h1>

        <p className="text-[#78716C] text-lg leading-relaxed mb-6 border-l-4 border-[#C9A84C] pl-4">
          {article.summary}
        </p>

        <div className="flex items-center gap-3 text-sm text-[#78716C]">
          <span>{dateFormatted}</span>
          <span>·</span>
          <span>{article.readingTime} min de lecture</span>
        </div>

        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 bg-[#F7F4EF] border border-[#E0DBCF] rounded text-[#78716C]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {isUpcoming && (
        <div className="mb-8 px-5 py-4 bg-[#F0E4C0] border-l-4 border-[#C9A84C] rounded-r-lg">
          <p className="font-sans text-sm font-semibold text-[#8B6914] mb-1">
            Article non publié — aperçu développement
          </p>
          <p className="font-sans text-xs text-[#A07C35]">
            Publication prévue le{' '}
            {new Date(article.publishedAt!).toLocaleDateString('fr-FR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}{' '}
            à 18h30
          </p>
        </div>
      )}

      <hr className="border-[#E0DBCF] mb-10" />

      {/* Corps MDX */}
      <div className="prose prose-lg max-w-none
        prose-headings:font-playfair prose-headings:text-[#1B4332]
        prose-p:text-[#44403C] prose-p:leading-relaxed
        prose-a:text-[#1B4332] prose-a:border-b prose-a:border-[#C9A84C] prose-a:no-underline hover:prose-a:text-[#C9A84C]
        prose-strong:text-[#1B4332]
        prose-blockquote:border-l-[#C9A84C] prose-blockquote:text-[#78716C]
        prose-ul:text-[#44403C] prose-li:text-[#44403C]
        prose-table:text-sm prose-th:text-[#1B4332] prose-td:text-[#44403C]">
        {content}
      </div>

      {/* Analyses citées */}
      {article.analyses.length > 0 && (
        <div className="mt-12 p-6 bg-[#F7F4EF] border border-[#E0DBCF] rounded-lg">
          <h3 className="font-playfair text-lg text-[#1B4332] mb-4">
            Valeurs citées dans cet article
          </h3>
          <div className="flex flex-col gap-3">
            {article.analyses.map(slug => (
              <AnalyseCiteeCard key={slug} slug={slug} />
            ))}
          </div>
        </div>
      )}

      {/* Portefeuilles cités */}
      {article.portefeuilles.length > 0 && (
        <div className="mt-6 p-6 bg-[#F7F4EF] border border-[#E0DBCF] rounded-lg">
          <h3 className="font-playfair text-lg text-[#1B4332] mb-3">Portefeuilles cités</h3>
          <ul className="flex flex-col gap-2">
            {article.portefeuilles.map(slug => (
              <li key={slug}>
                <Link
                  href={`/portefeuilles/${slug}`}
                  className="text-sm text-[#1B4332] border-b border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                >
                  → {slug}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Articles liés */}
      {relatedArticles.length > 0 && (
        <div className="mt-12">
          <h3 className="font-playfair text-xl text-[#1B4332] mb-6">À lire aussi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedArticles.map(a => (
              <BlogCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      )}

      <hr className="border-[#E0DBCF] mt-12 mb-6" />

      <Link
        href="/blog"
        className="text-sm text-[#78716C] hover:text-[#1B4332] transition-colors"
      >
        ← Retour au blog
      </Link>
    </main>
  )
}