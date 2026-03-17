'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PortefeuilleEntry, TypePortefeuille, StatutPortefeuille, ProfilNiveau } from '@/types/portefeuilles'
import PortefeuilleTypeBadge from './PortefeuilleTypeBadge'
import PortefeuilleStatutBadge from './PortefeuilleStatutBadge'

type Props = {
  portefeuilles: PortefeuilleEntry[]
}

const TYPE_OPTIONS: { value: TypePortefeuille | 'all'; label: string }[] = [
  { value: 'all', label: 'Tous les types' },
  { value: 'personnel', label: 'Personnel' },
  { value: 'modele', label: 'Modèle pédagogique' },
  { value: 'thematique', label: 'Thématique' },
]

const STATUT_OPTIONS: { value: StatutPortefeuille | 'all'; label: string }[] = [
  { value: 'all', label: 'Tous les statuts' },
  { value: 'actif', label: 'Actif' },
  { value: 'archive', label: 'Archivé' },
  { value: 'en-construction', label: 'En construction' },
]

const PROFIL_OPTIONS: { value: ProfilNiveau | 'all'; label: string }[] = [
  { value: 'all', label: 'Tous les profils' },
  { value: 'debutant', label: 'Débutant' },
  { value: 'intermediaire', label: 'Intermédiaire' },
  { value: 'experimente', label: 'Expérimenté' },
]

const PROFIL_LABELS: Record<ProfilNiveau, string> = {
  debutant: 'Débutant',
  intermediaire: 'Intermédiaire',
  experimente: 'Expérimenté',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const filterStyle = {
  padding: '7px 14px',
  borderRadius: 6,
  border: '1px solid #E0DBCF',
  background: '#F7F4EF',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 14,
  color: '#1B4332',
  cursor: 'pointer',
}

export default function PortefeuillesIndex({ portefeuilles }: Props) {
  const [typeFilter, setTypeFilter] = useState<TypePortefeuille | 'all'>('all')
  const [statutFilter, setStatutFilter] = useState<StatutPortefeuille | 'all'>('all')
  const [profilFilter, setProfilFilter] = useState<ProfilNiveau | 'all'>('all')

  const filtered = portefeuilles.filter((p) => {
    if (typeFilter !== 'all' && p.type !== typeFilter) return false
    if (statutFilter !== 'all' && p.statut !== statutFilter) return false
    if (profilFilter !== 'all' && p.profil.niveau !== profilFilter) return false
    return true
  })

  return (
    <div>
      {/* Filtres */}
      <div
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          marginBottom: 40,
        }}
      >
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value as TypePortefeuille | 'all')}
          style={filterStyle}
        >
          {TYPE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        <select
          value={statutFilter}
          onChange={(e) => setStatutFilter(e.target.value as StatutPortefeuille | 'all')}
          style={filterStyle}
        >
          {STATUT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        <select
          value={profilFilter}
          onChange={(e) => setProfilFilter(e.target.value as ProfilNiveau | 'all')}
          style={filterStyle}
        >
          {PROFIL_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Encart Communautaire — statique */}
      <div
        style={{
          border: '1px dashed #C9A84C',
          borderRadius: 10,
          padding: '24px 28px',
          marginBottom: 32,
          background: '#FDFAF4',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span
            style={{
              display: 'inline-block',
              padding: '2px 10px',
              borderRadius: 99,
              fontSize: 12,
              fontWeight: 600,
              fontFamily: 'DM Sans, sans-serif',
              color: '#92400e',
              background: '#FEF3C7',
            }}
          >
            Communautaire
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '2px 10px',
              borderRadius: 99,
              fontSize: 12,
              fontWeight: 600,
              fontFamily: 'DM Sans, sans-serif',
              color: '#92400e',
              background: '#FEF3C7',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#D97706',
              }}
            />
            En construction
          </span>
        </div>
        <p
          style={{
            fontFamily: 'Lora, Georgia, serif',
            fontSize: 15,
            color: '#44403C',
            margin: 0,
            lineHeight: 1.7,
          }}
        >
          Les portefeuilles communautaires sont construits collectivement avec les membres du Discord.
          Cette section ouvrira quand le processus de contribution sera stabilisé.
          En attendant, rejoignez la communauté pour participer aux discussions.
        </p>
      </div>

      {/* Grille portefeuilles */}
      {filtered.length === 0 ? (
        <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#78716C', textAlign: 'center', padding: 40 }}>
          Aucun portefeuille ne correspond à ces filtres.
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 24,
          }}
        >
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/portefeuilles/${p.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                style={{
                  background: 'white',
                  border: '1px solid #E0DBCF',
                  borderRadius: 10,
                  padding: '24px 28px',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  cursor: 'pointer',
                  height: '100%',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.boxShadow = '0 4px 20px rgba(27,67,50,0.10)'
                  el.style.borderColor = '#C9A84C'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.boxShadow = 'none'
                  el.style.borderColor = '#E0DBCF'
                }}
              >
                {/* Badges */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
                  <PortefeuilleTypeBadge type={p.type} />
                  <PortefeuilleStatutBadge statut={p.statut} />
                </div>

                {/* Titre */}
                <h2
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#1B4332',
                    margin: '0 0 8px',
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 14,
                    color: '#78716C',
                    margin: '0 0 16px',
                    lineHeight: 1.6,
                  }}
                >
                  {p.description}
                </p>

                {/* Méta */}
                <div
                  style={{
                    display: 'flex',
                    gap: 16,
                    flexWrap: 'wrap',
                    borderTop: '1px solid #E0DBCF',
                    paddingTop: 14,
                    marginTop: 'auto',
                  }}
                >
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#78716C' }}>
                    <strong style={{ color: '#1B4332' }}>Profil</strong> {PROFIL_LABELS[p.profil.niveau]}
                  </span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#78716C' }}>
                    <strong style={{ color: '#1B4332' }}>Horizon</strong> {p.profil.horizon}
                  </span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#78716C' }}>
                    MAJ {formatDate(p.updatedAt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
