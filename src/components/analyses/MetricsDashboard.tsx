'use client'

import { useState } from 'react'
import type { Metrics, Tendances } from '@/types/analyses'

function Fleche({ tendance }: { tendance: 'hausse' | 'stable' | 'baisse' }) {
  const config = {
    hausse: { symbol: '↑', color: '#16a34a', label: 'En hausse' },
    baisse: { symbol: '↓', color: '#dc2626', label: 'En baisse' },
    stable: { symbol: '→', color: 'var(--color-ink-faint)', label: 'Stable' },
  }
  const { symbol, color, label } = config[tendance]
  return (
    <span title={label} style={{ color, fontSize: '13px', marginLeft: '4px', fontFamily: 'var(--font-sans)' }}>
      {symbol}
    </span>
  )
}

function fmt(value: number, suffix = '', decimals = 1): string {
  if (value === 0) return '—'
  return `${value.toFixed(decimals)}${suffix}`
}

function fmtDette(value: number): { label: string; color: string } {
  if (value === 0) return { label: '—', color: 'var(--color-ink-muted)' }
  if (value < 0)   return { label: 'Tréso. nette', color: '#16a34a' }
  return { label: `${value.toFixed(1)}×`, color: 'var(--color-ink-muted)' }
}

function fmtSpread(roic: number, wacc: number): { label: string; color: string } {
  if (roic === 0 || wacc === 0) return { label: '—', color: 'var(--color-ink-faint)' }
  const spread = roic - wacc
  const sign = spread > 0 ? '+' : ''
  return { label: `${sign}${spread.toFixed(1)} %`, color: spread > 0 ? '#16a34a' : '#dc2626' }
}

type Props = {
  metrics:   Metrics
  tendances: Tendances
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div style={{
      padding:         '5px 14px',
      backgroundColor: 'var(--color-stone-warm)',
      borderBottom:    '1px solid var(--color-stone-border)',
    }}>
      <span style={{
        fontFamily:    'var(--font-sans)',
        fontSize:      '10px',
        fontWeight:    600,
        letterSpacing: '0.09em',
        textTransform: 'uppercase' as const,
        color:         'var(--color-ink-faint)',
      }}>
        {label}
      </span>
    </div>
  )
}

type LigneProps = {
  label:      string
  valeur:     string
  couleur?:   string
  tendance?:  'hausse' | 'stable' | 'baisse'
  info?:      string
  highlight?: boolean
}

function Ligne({ label, valeur, couleur, tendance, info, highlight }: LigneProps) {
  const [open, setOpen] = useState(false)
  const estVide = valeur === '—'

  return (
    <div style={{
      display:             'grid',
      gridTemplateColumns: '1fr auto',
      alignItems:          'center',
      padding:             '9px 14px',
      borderBottom:        '1px solid var(--color-stone-border)',
      backgroundColor:     highlight ? 'var(--color-accent-muted)' : 'var(--color-surface)',
      gap:                 '12px',
      position:            'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize:   '13px',
          color:      highlight ? 'var(--color-accent)' : 'var(--color-ink-muted)',
          fontWeight: highlight ? 500 : 400,
        }}>
          {label}
        </span>

        {info && (
          <div style={{ position: 'relative', display: 'inline-flex' }}>
            <button
              onClick={() => setOpen(v => !v)}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              aria-label={`Définition : ${label}`}
              style={{
                fontFamily:     'var(--font-sans)',
                fontSize:       '10px',
                color:          'var(--color-ink-faint)',
                cursor:         'help',
                border:         '1px solid var(--color-stone-border)',
                borderRadius:   '50%',
                width:          '14px',
                height:         '14px',
                display:        'inline-flex',
                alignItems:     'center',
                justifyContent: 'center',
                flexShrink:     0,
                background:     'transparent',
                padding:        0,
              }}
            >
              ?
            </button>

            {open && (
              <div style={{
                position:        'absolute',
                bottom:          'calc(100% + 6px)',
                left: '0',
                backgroundColor: 'var(--color-ink)',
                color:           'var(--color-stone-warm)',
                fontFamily:      'var(--font-sans)',
                fontSize:        '11px',
                lineHeight:      1.5,
                padding:         '7px 10px',
                borderRadius:    'var(--radius-sm)',
                width:           '210px',
                zIndex:          20,
                pointerEvents:   'none',
                boxShadow:       '0 2px 8px rgba(0,0,0,0.15)',
              }}>
                {info}
              </div>
            )}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{
          fontFamily:    'var(--font-sans)',
          fontSize:      '13px',
          fontWeight:    estVide ? 400 : 600,
          color:         estVide ? 'var(--color-ink-faint)' : (couleur ?? 'var(--color-ink)'),
          letterSpacing: '0.01em',
        }}>
          {valeur}
        </span>
        {tendance && !estVide && <Fleche tendance={tendance} />}
      </div>
    </div>
  )
}

export default function MetricsDashboard({ metrics: m, tendances: t }: Props) {
  const dette  = fmtDette(m.detteEbitda)
  const spread = fmtSpread(m.roic, m.wacc)

  return (
    <div style={{
      border:          '1px solid var(--color-stone-border)',
      borderRadius:    'var(--radius-md)',
      overflow:        'hidden',
      marginBottom:    '2.5rem',
      backgroundColor: 'var(--color-surface)',
    }}>
      <div style={{ padding: '10px 14px', backgroundColor: 'var(--color-accent)' }}>
        <span style={{
          fontFamily:    'var(--font-sans)',
          fontSize:      '11px',
          fontWeight:    600,
          letterSpacing: '0.09em',
          textTransform: 'uppercase' as const,
          color:         'var(--color-stone-warm)',
        }}>
          Tableau de bord — métriques actuelles
        </span>
      </div>

      <SectionHeader label="Valorisation" />
      <Ligne label="PER"        valeur={fmt(m.per, '×')}        tendance={t.per}       info="Price / Earnings — ratio cours sur bénéfice par action" />
      <Ligne label="EV / EBITDA" valeur={fmt(m.evEbitda, '×')}                         info="Valeur d'entreprise rapportée à l'EBITDA" />
      <Ligne label="FCF Yield"  valeur={fmt(m.fcfYield, ' %')}  tendance={t.fcfYield}  info="Free Cash Flow Yield — FCF / capitalisation boursière" />

      <SectionHeader label="Rentabilité" />
      <Ligne label="ROIC"       valeur={fmt(m.roic, ' %')}      tendance={t.roic}      info="Return on Invested Capital — mesure la qualité de l'allocation du capital" />
      <Ligne label="WACC"       valeur={fmt(m.wacc, ' %')}                             info="Weighted Average Cost of Capital — coût du capital, à comparer au ROIC" />
      <Ligne label="ROIC − WACC" valeur={spread.label} couleur={spread.color} highlight info="Spread de création de valeur — positif = l'entreprise crée de la valeur, négatif = destruction" />
      <Ligne label="Marge EBIT" valeur={fmt(m.margeEbit, ' %')} tendance={t.margeEbit} info="Marge opérationnelle — EBIT / chiffre d'affaires" />
      <Ligne label="Marge brute" valeur={fmt(m.margeBrute, ' %')}                      info="(CA − coût des ventes) / CA" />

      <SectionHeader label="Croissance (TCAC 3 ans)" />
      <Ligne label="Chiffre d'affaires" valeur={fmt(m.croissanceCA3ans, ' %')}  info="Taux de croissance annuel composé du CA sur 3 ans" />
      <Ligne label="BPA"               valeur={fmt(m.croissanceBPA3ans, ' %')} info="Taux de croissance annuel composé du bénéfice par action sur 3 ans" />

      <SectionHeader label="Solidité financière" />
      <Ligne label="Dette nette / EBITDA" valeur={dette.label} couleur={dette.color} info="Levier financier — négatif signifie que l'entreprise est en trésorerie nette" />
      <Ligne label="Current Ratio"  valeur={fmt(m.currentRatio, '×')}       info="Actif court terme / passif court terme — mesure la liquidité à court terme" />
      <Ligne label="DSO"            valeur={fmt(m.dso, ' j', 0)}             info="Days Sales Outstanding — nombre de jours de CA en créances clients" />

      <SectionHeader label="Actionnaires" />
      <Ligne label="Payout Ratio"   valeur={fmt(m.payoutRatio, ' %')}        info="Part du résultat net redistribuée en dividendes" />
    </div>
  )
}