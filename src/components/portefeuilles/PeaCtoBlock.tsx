import { LigneAllocation } from '@/types/portefeuilles'

type Props = {
  allocation: LigneAllocation[]
}

export default function PeaCtoBlock({ allocation }: Props) {
  const pea = allocation.filter((l) => l.enveloppe === 'PEA').reduce((s, l) => s + l.pct, 0)
  const cto = allocation.filter((l) => l.enveloppe === 'CTO').reduce((s, l) => s + l.pct, 0)

  const lignesPea = allocation.filter((l) => l.enveloppe === 'PEA')
  const lignesCto = allocation.filter((l) => l.enveloppe === 'CTO')

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      margin: '32px 0',
    }}>
      {/* PEA */}
      <div style={{
        background: '#F0FDF4',
        border: '1px solid #BBF7D0',
        borderTop: '3px solid #1B4332',
        borderRadius: 8,
        padding: '18px 20px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            PEA
          </span>
          <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, fontWeight: 700, color: '#1B4332' }}>
            {pea} %
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {lignesPea.map((l) => (
            <div key={l.label} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#44403C' }}>
              <span>{l.label}</span>
              <span style={{ fontWeight: 600 }}>{l.pct} %</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTO */}
      <div style={{
        background: '#EFF6FF',
        border: '1px solid #BFDBFE',
        borderTop: '3px solid #1e40af',
        borderRadius: 8,
        padding: '18px 20px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            CTO
          </span>
          <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, fontWeight: 700, color: '#1e3a8a' }}>
            {cto} %
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {lignesCto.map((l) => (
            <div key={l.label} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#44403C' }}>
              <span>{l.label}</span>
              <span style={{ fontWeight: 600 }}>{l.pct} %</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
