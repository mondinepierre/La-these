'use client'

import { useState, useMemo } from 'react'
import { ArticleMeta, Categorie, NiveauBlog } from '@/types/blog'
import { BlogCard } from './BlogCard'
import { CategoryBadge } from './CategoryBadge'
import { LevelBadge } from '@/components/ui/LevelBadge'

const CATEGORIES: { value: Categorie | 'all'; label: string }[] = [
  { value: 'all',       label: 'Toutes'    },
  { value: 'pedagogie', label: 'Pédagogie' },
  { value: 'macro',     label: 'Macro'     },
  { value: 'methode',   label: 'Méthode'   },
  { value: 'parcours',  label: 'Parcours'  },
]

const NIVEAUX: { value: NiveauBlog | 'all'; label: string }[] = [
  { value: 'all',           label: 'Tous niveaux'  },
  { value: 'debutant',      label: 'Débutant'      },
  { value: 'intermediaire', label: 'Intermédiaire' },
  { value: 'avance',        label: 'Avancé'        },
]

function FilterPill({
  label,
  active,
  onClick,
}: {
  label:   string
  active:  boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily:      'var(--font-sans)',
        fontSize:        '13px',
        padding:         '4px 14px',
        borderRadius:    '999px',
        border:          '1px solid',
        borderColor:     active ? '#1B4332' : '#D4CFC7',
        backgroundColor: active ? '#1B4332' : 'transparent',
        color:           active ? '#F7F4EF' : '#57534E',
        cursor:          'pointer',
        transition:      'all 0.15s',
        whiteSpace:      'nowrap',
      }}
    >
      {label}
    </button>
  )
}

export function BlogIndex({
  articles,
  nextArticle,
}: {
  articles:     ArticleMeta[]
  nextArticle?: ArticleMeta
}) {
  const [category, setCategory] = useState<Categorie | 'all'>('all')
  const [level,    setLevel]    = useState<NiveauBlog | 'all'>('all')
  const [search,   setSearch]   = useState('')

  const filtered = useMemo(() => {
    return articles.filter(a => {
      if (category !== 'all' && a.category !== category) return false
      if (level    !== 'all' && a.level    !== level)    return false
      if (search) {
        const q = search.toLowerCase()
        const match =
          a.title.toLowerCase().includes(q)   ||
          a.summary.toLowerCase().includes(q) ||
          a.tags.some(t => t.toLowerCase().includes(q))
        if (!match) return false
      }
      return true
    })
  }, [articles, category, level, search])

  return (
    <div>

      {/* Prochain article */}
      {nextArticle && (
        <div className="mb-10 p-5 border border-dashed border-[#E0DBCF] rounded-lg bg-[#F7F4EF]">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              À venir
            </span>
            <span className="text-xs text-[#78716C]">
              {new Date(nextArticle.publishedAt!).toLocaleDateString('fr-FR', {
                weekday: 'long',
                day:     'numeric',
                month:   'long',
              })}{' '}
              à 18h30
            </span>
          </div>
          <p className="font-playfair text-base text-[#1B4332]">
            {nextArticle.title}
          </p>
          <div className="flex gap-2 mt-2">
            <CategoryBadge category={nextArticle.category} />
            <LevelBadge level={nextArticle.level} />
          </div>
        </div>
      )}

      {/* Filtres */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#A8A29E', minWidth: '60px' }}>
            Catégorie
          </span>
          {CATEGORIES.map(c => (
            <FilterPill
              key={c.value}
              label={c.label}
              active={category === c.value}
              onClick={() => setCategory(c.value as Categorie | 'all')}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#A8A29E', minWidth: '60px' }}>
            Niveau
          </span>
          {NIVEAUX.map(n => (
            <FilterPill
              key={n.value}
              label={n.label}
              active={level === n.value}
              onClick={() => setLevel(n.value as NiveauBlog | 'all')}
            />
          ))}
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              marginLeft:  'auto',
              border:      '1px solid #E0DBCF',
              borderRadius:'999px',
              padding:     '4px 14px',
              fontSize:    '13px',
              fontFamily:  'var(--font-sans)',
              color:       '#1B4332',
              background:  'transparent',
              outline:     'none',
            }}
            onFocus={e => (e.target.style.borderColor = '#C9A84C')}
            onBlur={e  => (e.target.style.borderColor = '#E0DBCF')}
          />
        </div>

      </div>

      {/* Résultats */}
      {filtered.length === 0 ? (
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#A8A29E' }}>
          Aucun article ne correspond à ces critères.
        </p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {filtered.map(a => (
            <BlogCard key={a.slug} article={a} />
          ))}
        </div>
      )}

    </div>
  )
}