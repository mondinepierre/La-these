import Link from 'next/link'
import { LevelBadge, type Level } from './LevelBadge'
import { cn } from '@/lib/utils'

interface ArticleCardProps {
  title: string
  excerpt: string
  href: string
  level: Level
  category: string        // ex. "Académie · Module 3" ou "Analyse · ETF"
  readingTime?: number    // en minutes
  className?: string
}

export function ArticleCard({
  title,
  excerpt,
  href,
  level,
  category,
  readingTime,
  className,
}: ArticleCardProps) {
  return (
    <Link href={href} className={cn('group block', className)}>
      <article
        className={cn(
          'bg-surface border border-stone-border rounded-lg',
          'px-6 py-5',
          'transition-shadow duration-200',
          'hover:shadow-[0_2px_12px_rgba(28,25,23,0.08)]',
          'hover:border-stone-soft'
        )}
      >
        {/* En-tête : badge niveau + catégorie */}
        <header className="flex items-center gap-2 mb-3">
          <LevelBadge level={level} />
          <span className="font-sans text-xs text-ink-faint">{category}</span>
        </header>

        {/* Titre */}
        <h3 className="font-display text-[18px] font-medium leading-snug text-ink mb-2 group-hover:text-accent transition-colors duration-150">
          {title}
        </h3>

        {/* Extrait */}
        <p className="font-serif text-sm italic text-ink-muted leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Pied de carte */}
        <footer className="flex items-center justify-between pt-3 border-t border-stone-border">
          <span className="font-sans text-sm font-medium text-accent">
            Lire →
          </span>
          {readingTime && (
            <span className="font-sans text-xs text-ink-faint">
              {readingTime} min
            </span>
          )}
        </footer>
      </article>
    </Link>
  )
}
