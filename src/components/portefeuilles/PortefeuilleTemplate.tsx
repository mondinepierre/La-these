'use client'

import { PortefeuilleEntry } from '@/types/portefeuilles'
import PortefeuilleTypeBadge from './PortefeuilleTypeBadge'
import PortefeuilleStatutBadge from './PortefeuilleStatutBadge'
import AllocationChart from './AllocationChart'
import AllocationTable from './AllocationTable'
import PeaCtoBlock from './PeaCtoBlock'
import MentionLegalePortefeuille from './MentionLegalePortefeuille'

type Props = {
  portefeuille: PortefeuilleEntry
  children: React.ReactNode
}

const PROFIL_LABELS: Record<string, string> = {
  debutant: 'Débutant',
  intermediaire: 'Intermédiaire',
  experimente: 'Expérimenté',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

// Vérifie si au moins une ligne a une enveloppe PEA ou CTO
function hasPeaCto(portefeuille: PortefeuilleEntry): boolean {
  return portefeuille.allocation.some(
    (l) => l.enveloppe === 'PEA' || l.enveloppe === 'CTO'
  )
}

export default function PortefeuilleTemplate({ portefeuille: p, children }: Props) {
  const isPersonnel = p.type === 'personnel'
  const isEnConstruction = p.statut === 'en-construction'
  const showPeaCto = hasPeaCto(p)

  return (
    <article style={{ maxWidth: 860, margin: '0 auto', padding: '40px 24px 80px' }}>

      {/* Bandeau en construction */}
      {isEnConstruction && (
        <div style={{
          background: '#FEFCE8', border: '1px solid #FDE68A',
          borderLeft: '4px solid #C9A84C', borderRadius: 6,
          padding: '14px 18px', marginBottom: 32,
          fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#92400e',
        }}>
          Ce portefeuille est en cours de construction. Le contenu est incomplet et susceptible d&apos;évoluer.
        </div>
      )}

      {/* Bandeau personnel */}
      {isPersonnel && (
        <div style={{
          background: '#F0FDF4', border: '1px solid #BBF7D0',
          borderLeft: '4px solid #1B4332', borderRadius: 6,
          padding: '14px 18px', marginBottom: 32,
          fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#14532d', lineHeight: 1.6,
        }}>
          Ce portefeuille est le mien. Il correspond à ma situation, mon horizon, ma tolérance au risque.
          Il ne vaut pas pour tous.
        </div>
      )}

      {/* En-tête */}
      <header style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
          <PortefeuilleTypeBadge type={p.type} />
          <PortefeuilleStatutBadge statut={p.statut} />
        </div>

        <h1 style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: 36, fontWeight: 700, color: '#1B4332',
          margin: '0 0 12px', lineHeight: 1.2,
        }}>
          {p.title}
        </h1>

        <p style={{
          fontFamily: 'Lora, Georgia, serif', fontSize: 17,
          color: '#44403C', margin: '0 0 24px', lineHeight: 1.7,
        }}>
          {p.description}
        </p>

        {/* Profil investisseur */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: 12, background: '#F7F4EF', borderRadius: 10, padding: '20px 24px',
        }}>
          {[
            { label: 'Profil', value: PROFIL_LABELS[p.profil.niveau] ?? p.profil.niveau },
            { label: 'Horizon', value: p.profil.horizon },
            { label: 'Risque', value: p.profil.risque },
            { label: 'Enveloppe', value: p.profil.enveloppe },
            ...(p.profil.capitalDepart ? [{ label: 'Capital de départ', value: p.profil.capitalDepart }] : []),
            { label: 'Dernière mise à jour', value: formatDate(p.updatedAt) },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.08em', color: '#78716C', margin: '0 0 3px',
              }}>{label}</p>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 14,
                fontWeight: 600, color: '#1B4332', margin: 0,
              }}>{value}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Allocation — donut */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{
          fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22,
          fontWeight: 700, color: '#1B4332', marginBottom: 24,
        }}>
          Allocation
        </h2>
        <AllocationChart allocation={p.allocation} allocationCible={p.allocationCible} />
      </section>

      {/* Répartition PEA / CTO — uniquement si pertinent */}
      {showPeaCto && <PeaCtoBlock allocation={p.allocation} />}

      {/* Tableau détail */}
      <section style={{ marginBottom: 48 }}>
        <AllocationTable allocation={p.allocation} />
      </section>

      {/* Contenu MDX */}
      <div
        className="prose prose-lg max-w-none
          prose-headings:font-playfair prose-headings:text-[#1B4332]
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-[#44403C] prose-p:leading-relaxed prose-p:font-lora
          prose-strong:text-[#1B4332] prose-strong:font-semibold
          prose-ul:text-[#44403C] prose-li:marker:text-[#C9A84C]
          prose-table:text-sm prose-th:bg-[#F7F4EF] prose-th:text-[#1B4332]
          prose-td:border-[#E0DBCF] prose-th:border-[#E0DBCF]
          prose-a:text-[#1B4332] prose-a:underline"
        style={{ marginBottom: 48 }}
      >
        {children}
      </div>

      {/* Historique des modifications */}
      {p.updates && p.updates.length > 0 && (
        <section style={{ marginBottom: 48 }}>
          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif', fontSize: 20,
            fontWeight: 700, color: '#1B4332', marginBottom: 16,
          }}>
            Historique des modifications
          </h2>
          <div style={{ borderLeft: '2px solid #C9A84C', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[...p.updates].reverse().map((update, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600, color: '#78716C', whiteSpace: 'nowrap', paddingTop: 2 }}>
                  {formatDate(update.date)}
                </span>
                <p style={{ fontFamily: 'Lora, Georgia, serif', fontSize: 14, color: '#44403C', margin: 0, lineHeight: 1.6 }}>
                  {update.note}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <MentionLegalePortefeuille />
    </article>
  )
}