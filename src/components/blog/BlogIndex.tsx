'use client'

import { useState, useMemo } from 'react'
import { ArticleMeta, Categorie, NiveauBlog } from '@/types/blog'
import { BlogCard } from './BlogCard'

const CATEGORIES: { value: Categorie | 'all'; label: string }[] = [
  { value: 'all', label: 'Toutes' },
  { value: 'pedagogie', label: 'Pédagogie' },
  { value: 'macro', label: 'Macro' },
  { value: 'methode', label: 'Méthode' },
  { value: 'parcours', label: 'Parcours' },
]

const NIVEAUX: { value: NiveauBlog | 'all'; label: string }[] = [
  { value: 'all', label: 'Tous niveaux' },
  { value: 'debutant', label: 'Débutant' },
  { value: 'intermediaire', label: 'Intermédiaire' },
  { value: 'avance', label: 'Avancé' },
]

export function BlogIndex({ articles }: { articles: ArticleMeta[] }) {
  const [category, setCategory] = useState<Categorie | 'all'>('all')
  const [level, setLevel] = useState<NiveauBlog | 'all'>('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return articles.filter(a => {
      if (category !== 'all' && a.category !== category) return false
      if (level !== 'all' && a.level !== level) return false
      if (search) {
        const q = search.toLowerCase()
        const match =
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.tags.some(t => t.toLowerCase().includes(q))
        if (!match) return false
      }
      return true
    })
  }, [articles, category, level, search])

  const filterBtn = (active: boolean) =>
    `px-3 py-1.5 rounded text-sm transition-colors duration-150 ${
      active
        ? 'bg-[#1B4332] text-[#F7F4EF]'
        : 'bg-white border border-[#E0DBCF] text-[#78716C] hover:border-[#1B4332]'
    }`

  return (
    <div>
      {/* Filtres */}
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(c => (
            <button
              key={c.value}
              onClick={() => setCategory(c.value as Categorie | 'all')}
              className={filterBtn(category === c.value)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {NIVEAUX.map(n => (
            <button
              key={n.value}
              onClick={() => setLevel(n.value as NiveauBlog | 'all')}
              className={filterBtn(level === n.value)}
            >
              {n.label}
            </button>
          ))}
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="ml-auto border border-[#E0DBCF] rounded px-3 py-1.5 text-sm text-[#1B4332] placeholder:text-[#78716C] focus:outline-none focus:border-[#C9A84C] bg-white"
          />
        </div>
      </div>

      {/* Résultats */}
      {filtered.length === 0 ? (
        <p className="text-[#78716C] text-sm">Aucun article ne correspond à ces critères.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(a => (
            <BlogCard key={a.slug} article={a} />
          ))}
        </div>
      )}
    </div>
  )
}