// src/components/analyses/OnePager.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Composant JSX pur compatible @vercel/og (Satori).
//
// Contraintes Satori strictes :
//   - ZÉRO nœud <text> dans le SVG → crash 500
//   - Labels en <div> positionnés en absolu par-dessus le SVG
//   - Pas de CSS variables, pas de calc(), pas de display:grid
//   - Couleurs en hex dur
//   - Logo : URL absolue PNG valide, ou prop omise (fallback texte)
//
// v4 — portrait 1080 × 1350 :
//   - SVG_H   570 → 700   (radar plus grand, plus de respiration)
//   - R       140 → 165   (octogone agrandi)
//   - D_AXIS  234 → 268   (labels d'axes plus loin du centre)
//   - D_PILLAR individuel : QUALITÉ/CROISSANCE/SOLIDITÉ 295, VALORISATION 320
//   - Valeurs axes  28px → 38px
//   - Labels axes   15px → 16px
//   - Labels piliers 21px → 24px
//   - Barre 52 sem. : intégrée dans le bandeau vert, composants en ivoire
//   - Footer 250px (respire)
//
// Hauteurs (total = 1350 px) :
//   Header        58
//   Identity     150
//   Thesis        66
//   Sep            1
//   Radar        700
//   Sep            1
//   Prices & 52w 124
//   Footer       250
//   ────────────────
//   Total       1350
// ─────────────────────────────────────────────────────────────────────────────

import type { Conviction, Positionnement } from '@/types/analyses'
import type { RadarScores, MetricsForOg }  from '@/lib/radar'
import { octagonPoints, dataPolygonPoints, polarXY } from '@/lib/radar'

// ── Palette ───────────────────────────────────────────────────────────────────

const C = {
  vert:     '#1B4332',
  ivoire:   '#F7F4EF',
  or:       '#C9A84C',
  stone:    '#78716C',
  vertPale: '#D6EDDF',
}

// ── Formatage ─────────────────────────────────────────────────────────────────

function fr(n: number, d = 1): string {
  return n.toFixed(d).replace('.', ',')
}
function fmtSpread(roic: number, wacc: number): string {
  const v = roic - wacc
  return `${v >= 0 ? '+' : '−'}${fr(Math.abs(v))} pts`
}
function fmtPct(v: number, plus = false): string {
  return `${plus && v > 0 ? '+' : ''}${fr(v)} %`
}
function fmtMult(v: number): string { return `${fr(v)}x` }
function fmtDette(v: number): string {
  return v <= 0 ? `−${fr(Math.abs(v))}x` : `${fr(v)}x`
}

// ── Badges ────────────────────────────────────────────────────────────────────

function Pill({ label, bg, color }: { label: string; bg: string; color: string }) {
  return (
    <div style={{
      background: bg, color, borderRadius: 20, height: 44,
      paddingLeft: 26, paddingRight: 26,
      display: 'flex', alignItems: 'center',
      fontSize: 14, fontWeight: 600, fontFamily: 'DMSans',
    }}>
      {label}
    </div>
  )
}

function ConvictionPill({ v }: { v: Conviction }) {
  const cfg: Record<Conviction, { label: string; bg: string; color: string }> = {
    exceptionnelle: { label: 'Conviction Exceptionnelle', bg: C.vert,    color: C.ivoire  },
    forte:          { label: 'Conviction forte',          bg: C.vertPale, color: C.vert   },
    moyenne:        { label: 'Conviction moyenne',        bg: '#F5EECF',  color: '#A07C35' },
    spéculative:    { label: 'Pari spéculatif',           bg: '#F0EDEA',  color: '#1C1917' },
  }
  return <Pill {...cfg[v]} />
}

function PositionnementPill({ v }: { v: Positionnement }) {
  const cfg: Record<Positionnement, { label: string; bg: string; color: string }> = {
    'achat fort':  { label: 'Achat Fort',       bg: C.vert,    color: C.ivoire  },
    accumulation:  { label: 'Accumulation',     bg: C.vertPale, color: C.vert   },
    surveillance:  { label: 'En surveillance',  bg: '#F5EECF',  color: '#A07C35' },
    maintien:      { label: 'Maintien',         bg: '#F5F4F1',  color: C.stone   },
    allégement:    { label: 'Prise de Profits', bg: '#F0EDEA',  color: '#1C1917' },
  }
  return <Pill {...cfg[v]} />
}

// ── Radar — constantes v4 ─────────────────────────────────────────────────────

const R        = 200    // rayon octogone de référence
const D_AXIS   = 290    // distance centre → label d'axe
const SVG_H    = 800    // hauteur zone radar
const CX       = 540    // centre X
const CY       = 410    // centre Y (légèrement vers le bas pour équilibrer les labels nord)

// Distances individuelles par pilier — évite tout chevauchement.
// VALORISATION plus loin car les labels EV/EBITDA et FCF YIELD sont au sud.
const PILLARS: Array<{ label: string; angle: number; dist: number }> = [
  { label: 'QUALITÉ',      angle:   0, dist: 350 },
  { label: 'CROISSANCE',   angle:  90, dist: 350 },
  { label: 'VALORISATION', angle: 180, dist: 350 },
  { label: 'SOLIDITÉ',     angle: 270, dist: 350 },
]

// Ordre des scores = ordre des ANGLES dans radar.ts
const SCORE_KEYS: (keyof RadarScores)[] = [
  'spreadRoicWacc', 'margeEbit',
  'tcacCa',         'tcacBpa',
  'fcfYield',       'evEbitda',
  'currentRatio',   'detteEbitda',
]

type AxisDef = { angle: number; name: string; value: string }

function buildAxes(m: MetricsForOg): AxisDef[] {
  return [
    { angle: -22.5, name: 'SPREAD ROIC − WACC', value: fmtSpread(m.roic, m.wacc)         },
    { angle:  22.5, name: 'MARGE EBIT',          value: fmtPct(m.margeEbit)               },
    { angle:  67.5, name: 'TCAC CA 3 ANS',       value: fmtPct(m.croissanceCA3ans, true)  },
    { angle: 112.5, name: 'TCAC BPA 3 ANS',      value: fmtPct(m.croissanceBPA3ans, true) },
    { angle: 157.5, name: 'FCF YIELD',            value: fmtPct(m.fcfYield)               },
    { angle: 202.5, name: 'EV / EBITDA',          value: fmtMult(m.evEbitda)              },
    { angle: 247.5, name: 'CURRENT RATIO',        value: fr(m.currentRatio)               },
    { angle: 292.5, name: 'DETTE / EBITDA',       value: fmtDette(m.detteEbitda)          },
  ]
}

const AXIS_W   = 240
const PILLAR_W = 230

function RadarZone({ scores, metrics }: { scores: RadarScores; metrics: MetricsForOg }) {
  const axes    = buildAxes(metrics)
  const dataPts = dataPolygonPoints(scores, R)

  return (
    <div style={{ position: 'relative', width: 1080, height: SVG_H, display: 'flex' }}>

      {/* ── SVG géométrique — AUCUN <text> (Satori non supporté) ────── */}
      <svg
        width="1080" height={SVG_H}
        viewBox={`0 0 1080 ${SVG_H}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <g transform={`translate(${CX}, ${CY})`}>
          {/* Octogones de référence × 4 */}
          {([R, R * 0.75, R * 0.50, R * 0.25] as const).map((r, i) => (
            <polygon key={i} points={octagonPoints(r)}
              fill="none" stroke={C.vert}
              strokeWidth={i === 0 ? 1.2 : 0.6}
              strokeOpacity={i === 0 ? 0.3 : 0.12}
            />
          ))}
          {/* 8 rayons */}
          {axes.map(({ angle }) => {
            const ep = polarXY(angle, R)
            return (
              <line key={angle} x1={0} y1={0} x2={ep.x} y2={ep.y}
                stroke={C.vert} strokeWidth={0.6} strokeOpacity={0.18}
              />
            )
          })}
          {/* Polygone de données */}
          <polygon points={dataPts}
            fill={C.vert} fillOpacity={0.2}
            stroke={C.vert} strokeWidth={3}
          />
          {/* Marqueurs or */}
          {axes.map(({ angle }, i) => {
            const pct = scores[SCORE_KEYS[i]] / 100
            const pt  = polarXY(angle, R * pct)
            return <circle key={angle} cx={pt.x} cy={pt.y} r={6} fill={C.or} />
          })}
        </g>
      </svg>

      {/* ── Labels piliers (cardinaux, distances individuelles) ──────── */}
      {PILLARS.map(({ label, angle, dist }) => {
        const { x, y } = polarXY(angle, dist)
        return (
          <div key={label} style={{
            position: 'absolute',
            left:  CX + x - PILLAR_W / 2,
            top:   CY + y - 15,
            width: PILLAR_W,
            display: 'flex', justifyContent: 'center',
          }}>
            <span style={{
              fontSize: 24, fontWeight: 600,
              color: C.or, fontFamily: 'DMSans', letterSpacing: 3,
            }}>
              {label}
            </span>
          </div>
        )
      })}

      {/* ── Labels des 8 axes ─────────────────────────────────────────── */}
      {axes.map(({ angle, name, value }) => {
        const { x, y } = polarXY(angle, D_AXIS)
        // centrage vertical : 16px (nom) + 4px (gap) + 38px (valeur) = 58px → -29px
        return (
          <div key={angle} style={{
            position: 'absolute',
            left:  CX + x - AXIS_W / 2,
            top:   CY + y - 29,
            width: AXIS_W,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 4,
          }}>
            <span style={{
              fontSize: 16, color: C.stone,
              fontFamily: 'DMSans', textAlign: 'center', letterSpacing: 0.5,
            }}>
              {name}
            </span>
            <span style={{
              fontSize: 38, fontWeight: 500,
              color: C.vert, fontFamily: 'Playfair', textAlign: 'center',
            }}>
              {value}
            </span>
          </div>
        )
      })}

    </div>
  )
}

// ── Barre 52 semaines ─────────────────────────────────────────────────────────
// Intégrée sur fond vert au sein du composant Bande des prix
// Piste (track) et tirets adaptées en Ivoire

const BAR_W    = 300
const BAR_H    = 3
const MARKER_R = 6

function Range52w({ cours, low, high, devise }: {
  cours: number; low: number; high: number; devise: string
}) {
  const pct     = Math.max(0, Math.min(1, (cours - low) / (high - low)))
  const markerL = pct * BAR_W - MARKER_R

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <span style={{
        fontSize: 14, color: C.ivoire, opacity: 0.9,
        letterSpacing: 1.5, fontFamily: 'DMSans',
        whiteSpace: 'nowrap', flexShrink: 0,
      }}>
        52 SEM.
      </span>
      <span style={{
        fontSize: 14, color: C.ivoire, opacity: 0.8,
        fontFamily: 'DMSans', whiteSpace: 'nowrap', flexShrink: 0,
      }}>
        {low} {devise}
      </span>
      {/* Piste + marqueur */}
      <div style={{ position: 'relative', width: BAR_W, height: MARKER_R * 2 + 2, display: 'flex', flexShrink: 0 }}>
        {/* Track */}
        <div style={{
          position: 'absolute', top: MARKER_R - BAR_H / 2, left: 0,
          width: BAR_W, height: BAR_H,
          background: C.ivoire, opacity: 0.6, borderRadius: 2,
        }} />
        {/* Tick gauche */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 1, height: MARKER_R * 2, background: C.ivoire, opacity: 0.8 }} />
        {/* Tick droit */}
        <div style={{ position: 'absolute', top: 0, left: BAR_W - 1, width: 1, height: MARKER_R * 2, background: C.ivoire, opacity: 0.8 }} />
        {/* Marqueur or */}
        <div style={{
          position: 'absolute', top: 0, left: markerL,
          width: MARKER_R * 2, height: MARKER_R * 2,
          borderRadius: MARKER_R, background: C.or,
        }} />
      </div>
      <span style={{
        fontSize: 14, color: C.ivoire, opacity: 0.8,
        fontFamily: 'DMSans', whiteSpace: 'nowrap', flexShrink: 0,
      }}>
        {high} {devise}
      </span>
    </div>
  )
}

// ── Props ─────────────────────────────────────────────────────────────────────

export interface OnePagerProps {
  nom:            string
  ticker:         string
  secteur:        string
  geo:            string
  logoUrl?:       string
  conviction:     Conviction
  positionnement: Positionnement
  thesis:         string
  cours:          number
  devise:         'USD' | 'EUR' | 'DKK'
  coursDateLabel: string
  range52w:       { low: number; high: number }
  prixCible:      { bas: number; haut: number }
  horizon:        string
  metrics:        MetricsForOg
  scores:         RadarScores
}

export function OnePager({
  nom, ticker, secteur, geo, logoUrl,
  conviction, positionnement,
  thesis,
  cours, devise, coursDateLabel, range52w, prixCible, horizon,
  metrics, scores,
}: OnePagerProps) {

  const coursStr = cours.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const cibleStr = `${prixCible.bas.toLocaleString('fr-FR')} – ${prixCible.haut.toLocaleString('fr-FR')} ${devise}`

  return (
    <div style={{
      width: 1080, height: 1350,
      display: 'flex', flexDirection: 'column',
      background: C.ivoire, fontFamily: 'DMSans',
    }}>

      {/* 1 — Header (58 px) */}
      <div style={{
        flexShrink: 0, height: 58, background: C.vert,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingLeft: 60, paddingRight: 60,
      }}>
        <span style={{ color: C.ivoire, fontSize: 18, fontFamily: 'Playfair', letterSpacing: 4 }}>
          LA THÈSE
        </span>
        <span style={{
          color: C.ivoire, fontSize: 13, opacity: 0.8,
          letterSpacing: 1, whiteSpace: 'nowrap',
        }}>
          {coursDateLabel}{'  ·  '}ANALYSE FONDAMENTALE
        </span>
      </div>

      {/* 2 — Identité (150 px) */}
      <div style={{
        flexShrink: 0, height: 150,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingLeft: 60, paddingRight: 60,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoUrl} alt={nom}
              style={{ height: 88, maxWidth: 480, objectFit: 'contain', objectPosition: 'left center' }}
            />
          ) : (
            <span style={{ fontSize: 48, color: C.vert, fontFamily: 'Playfair', fontWeight: 500 }}>
              {nom}
            </span>
          )}
          <span style={{ fontSize: 15, color: C.stone, letterSpacing: 2 }}>
            {ticker}{'  ·  '}{secteur.toUpperCase()}{'  ·  '}{geo.toUpperCase()}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ConvictionPill    v={conviction}     />
          <PositionnementPill v={positionnement} />
        </div>
      </div>

      {/* 3 — Thèse (66 px) */}
      <div style={{
        flexShrink: 0, height: 66,
        display: 'flex', alignItems: 'center', gap: 22,
        paddingLeft: 60, paddingRight: 60,
      }}>
        <div style={{ width: 4, height: 44, background: C.or, flexShrink: 0 }} />
        <span style={{
          fontSize: 28, fontFamily: 'Playfair', fontStyle: 'italic',
          color: C.vert, lineHeight: 1.3,
        }}>
          {thesis}
        </span>
      </div>

      {/* Séparateur or */}
      <div style={{ flexShrink: 0, height: 1, marginLeft: 60, marginRight: 60, background: C.or, opacity: 0.35 }} />

      {/* 4 — Zone radar (700 px) */}
      <RadarZone scores={scores} metrics={metrics} />

      {/* Séparateur or */}
      <div style={{ flexShrink: 0, height: 1, marginLeft: 60, marginRight: 60, background: C.or, opacity: 0.35 }} />

      {/* 5 — Bande des prix & 52 semaines (124 px) */}
      <div style={{
        flexShrink: 0, height: 145, background: C.vert,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30,
        paddingTop: 4, paddingBottom: 4,
      }}>
        {/* Ligne 1 : Cours → Cible */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Gauche : cours */}
          <div style={{
            flex: 1,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            paddingLeft: 60, paddingRight: 20, gap: 4,
          }}>
            <span style={{
              fontSize: 14, color: C.ivoire, opacity: 0.8,
              letterSpacing: 1.2, fontFamily: 'DMSans', whiteSpace: 'nowrap',
            }}>
              COURS AU {coursDateLabel}
            </span>
            <span style={{ fontSize: 34, color: C.ivoire, fontFamily: 'Playfair', fontWeight: 500 }}>
              {coursStr} {devise}
            </span>
          </div>
          {/* Flèche */}
          <svg
            width="180" height="36"
            viewBox="0 0 180 36"
            style={{ flexShrink: 0, alignSelf: 'flex-end' }} 
          >
            <line
              x1="0" y1="18" x2="144" y2="18"
              stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"
            />
            <path
              d="M144,5 L176,18 L144,31 C154,26 154,10 144,5 Z"
              fill="#C9A84C"
            />
          </svg>
          {/* Droite : cible */}
          <div style={{
            flex: 1,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 60, paddingLeft: 20, gap: 4,
          }}>
            <span style={{
              fontSize: 14, color: C.ivoire, opacity: 0.8,
              letterSpacing: 1.2, fontFamily: 'DMSans', whiteSpace: 'nowrap',
            }}>
              CIBLE PERSONNELLE {horizon.toUpperCase()}
            </span>
            <span style={{ fontSize: 34, color: C.or, fontFamily: 'Playfair', fontWeight: 500 }}>
              {cibleStr}
            </span>
          </div>
        </div>

        {/* Ligne 2 : Range 52w */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Range52w cours={cours} low={range52w.low} high={range52w.high} devise={devise} />
        </div>
      </div>

      {/* 6 — Footer (flex:1 ≈ 250 px) */}
      <div style={{
        flex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        paddingLeft: 60, paddingRight: 60, gap: 14,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{
            fontSize: 22, fontFamily: 'Playfair', fontStyle: 'italic', color: C.vert,
          }}>
            Penser long, investir juste.
          </span>
          <span style={{ fontSize: 14, letterSpacing: 3, color: C.stone, fontFamily: 'DMSans' }}>
            LATHESE.FR
          </span>
        </div>
        <div style={{ height: 1, background: C.or, opacity: 0.45 }} />
        <span style={{
          fontSize: 14, color: C.stone, opacity: 0.9,
          textAlign: 'center', fontFamily: 'DMSans',
        }}>
          Visuel partagé à titre informatif · Non constitutif d&apos;un conseil en investissement
        </span>
      </div>

    </div>
  )
}