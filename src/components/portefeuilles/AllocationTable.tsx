import React from 'react'
import Link from 'next/link'
import { LigneAllocation } from '@/types/portefeuilles'

type Props = {
  allocation: LigneAllocation[]
}

function groupByTheme(allocation: LigneAllocation[]): Record<string, LigneAllocation[]> {
  return allocation.reduce<Record<string, LigneAllocation[]>>((acc, ligne) => {
    if (!acc[ligne.theme]) acc[ligne.theme] = []
    acc[ligne.theme].push(ligne)
    return acc
  }, {})
}

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '8px 12px',
  color: '#1B4332',
  fontWeight: 700,
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 13,
  borderBottom: '2px solid #1B4332',
  whiteSpace: 'nowrap',
}

const tdStyle: React.CSSProperties = {
  padding: '10px 12px',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 13,
  color: '#44403C',
  borderBottom: '1px solid #E0DBCF',
  verticalAlign: 'middle',
}

export default function AllocationTable({ allocation }: Props) {
  const grouped = groupByTheme(allocation)

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyle}>Valeur</th>
            <th style={thStyle}>Enveloppe</th>
            <th style={thStyle}>Secteur (GICS)</th>
            <th style={thStyle}>Géographie</th>
            <th style={{ ...thStyle, textAlign: 'right' }}>Poids</th>
            <th style={{ ...thStyle, textAlign: 'center' }}>Analyse</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(grouped).map(([theme, lignes]) => {
            const themePct = lignes.reduce((s, l) => s + l.pct, 0)
            return (
              <React.Fragment key={theme}>
                {/* Ligne thème */}
                <tr>
                  <td
                    colSpan={6}
                    style={{
                      padding: '10px 12px 4px',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#78716C',
                      background: '#F7F4EF',
                      borderBottom: '1px solid #E0DBCF',
                    }}
                  >
                    {theme}
                    <span style={{ float: 'right', color: '#1B4332', fontSize: 12 }}>
                      {themePct} %
                    </span>
                  </td>
                </tr>

                {/* Lignes valeurs */}
                {lignes.map((ligne, i) => (
                  <tr key={`${ligne.label}-${i}`}>
                    <td style={{ ...tdStyle, fontWeight: 600, color: '#1B4332' }}>
                      {ligne.label}
                      {ligne.isin && (
                        <span style={{ display: 'block', fontSize: 11, color: '#78716C', fontWeight: 400, fontFamily: 'monospace', marginTop: 1 }}>
                          {ligne.isin}
                        </span>
                      )}
                    </td>
                    <td style={tdStyle}>
                      <span style={{
                        display: 'inline-block',
                        padding: '1px 8px',
                        borderRadius: 4,
                        fontSize: 11,
                        fontWeight: 700,
                        fontFamily: 'DM Sans, sans-serif',
                        background: ligne.enveloppe === 'PEA' ? '#D1FAE5' : '#DBEAFE',
                        color: ligne.enveloppe === 'PEA' ? '#166534' : '#1e40af',
                      }}>
                        {ligne.enveloppe}
                      </span>
                    </td>
                    <td style={{ ...tdStyle, color: '#78716C', fontSize: 12 }}>
                      {ligne.gics}
                    </td>
                    <td style={{ ...tdStyle, color: '#78716C', fontSize: 12 }}>
                      {ligne.geo}
                    </td>
                    <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 700, color: '#1B4332', fontSize: 14 }}>
                      {ligne.pct} %
                    </td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      {ligne.analyseSlug ? (
                        <Link
                          href={`/analyses/${ligne.analyseSlug}`}
                          style={{
                            display: 'inline-block',
                            padding: '2px 10px',
                            borderRadius: 4,
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#1B4332',
                            border: '1px solid #1B4332',
                            textDecoration: 'none',
                          }}
                        >
                          Lire
                        </Link>
                      ) : (
                        <span style={{ color: '#D4C5A9', fontSize: 12 }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            )
          })}

          {/* Total */}
          <tr style={{ borderTop: '2px solid #1B4332' }}>
            <td colSpan={4} style={{ ...tdStyle, fontWeight: 700, color: '#1B4332', borderBottom: 'none' }}>
              Total
            </td>
            <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 700, color: '#1B4332', fontSize: 14, borderBottom: 'none' }}>
              {allocation.reduce((s, l) => s + l.pct, 0)} %
            </td>
            <td style={{ ...tdStyle, borderBottom: 'none' }} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}