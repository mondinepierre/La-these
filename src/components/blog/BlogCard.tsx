import Link from 'next/link'
import { ArticleMeta } from '@/types/blog'
import { CategoryBadge } from './CategoryBadge'
import { LevelBadge } from '@/components/ui/LevelBadge'

export function BlogCard({ article }: { article: ArticleMeta }) {
  const dateFormatted = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block bg-white border border-[#E0DBCF] rounded-lg p-6 hover:border-[#C9A84C] hover:shadow-sm transition-all duration-200"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        <CategoryBadge category={article.category} />
        <LevelBadge level={article.level} />
      </div>

      <h2 className="font-playfair text-lg text-[#1B4332] mb-2 group-hover:text-[#C9A84C] transition-colors duration-200 leading-snug">
        {article.title}
      </h2>

      <p className="text-sm text-[#78716C] mb-4 leading-relaxed line-clamp-2">
        {article.summary}
      </p>

      <div className="flex items-center gap-3 text-xs text-[#78716C]">
        <span>{dateFormatted}</span>
        <span>·</span>
        <span>{article.readingTime} min de lecture</span>
      </div>

      {article.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-[#F7F4EF] border border-[#E0DBCF] rounded text-[#78716C]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}