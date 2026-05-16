// src/lib/radar.ts
// ─────────────────────────────────────────────────────────────────────────────
// Utilitaires de scoring et de géométrie pour le radar du one-pager.
//
// Échelles fixes (à remplacer par benchmarks sectoriels quand la table
// de référence sera constituée) :
//   Spread ROIC-WACC  0 pt → 0 %   20 pts → 100 %
//   Marge EBIT        0 %  → 0 %   50 %   → 100 %
//   TCAC CA / BPA     0 %  → 0 %   25 %   → 100 %
//   FCF Yield         0 %  → 0 %   8 %    → 100 %
//   EV/EBITDA         30x  → 0 %   12x    → 100 %  (inversé)
//   Current Ratio     0,5x → 0 %   2,5x   → 100 %
//   Dette/EBITDA      3x   → 0 %   ≤ 0    → 100 %  (inversé, tréso nette = max)
// ─────────────────────────────────────────────────────────────────────────────

export type RadarScores = {
  spreadRoicWacc: number
  margeEbit:      number
  tcacCa:         number
  tcacBpa:        number
  fcfYield:       number
  evEbitda:       number
  currentRatio:   number
  detteEbitda:    number
}

export type MetricsForOg = {
  roic:              number
  wacc:              number
  margeEbit:         number
  croissanceCA3ans:  number
  croissanceBPA3ans: number
  fcfYield:          number
  evEbitda:          number
  currentRatio:      number
  detteEbitda:       number
}

function clamp(v: number): number {
  return Math.max(0, Math.min(100, v))
}

export function computeRadarScores(m: MetricsForOg): RadarScores {
  return {
    spreadRoicWacc: clamp((m.roic - m.wacc) / 20 * 100),
    margeEbit:      clamp(m.margeEbit / 50 * 100),
    tcacCa:         clamp(m.croissanceCA3ans / 25 * 100),
    tcacBpa:        clamp(m.croissanceBPA3ans / 25 * 100),
    fcfYield:       clamp(m.fcfYield / 8 * 100),
    evEbitda:       clamp((30 - m.evEbitda) / 18 * 100),
    currentRatio:   clamp((m.currentRatio - 0.5) / 2 * 100),
    detteEbitda:    m.detteEbitda <= 0
      ? 100
      : clamp((3 - m.detteEbitda) / 3 * 100),
  }
}

// Octogone orienté « stop-sign » : faces plates aux points cardinaux.
// Angles des 8 sommets (dans le sens horaire depuis le nord) :
const ANGLES = [-22.5, 22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5] as const

export type AxisAngle = typeof ANGLES[number]

/** Points SVG d'un octogone de rayon r centré à l'origine. */
export function octagonPoints(r: number): string {
  return ANGLES.map(a => {
    const θ = (a * Math.PI) / 180
    return `${(r * Math.sin(θ)).toFixed(2)},${(-r * Math.cos(θ)).toFixed(2)}`
  }).join(' ')
}

/** Points SVG du polygone de données, chaque score en 0-100 sur R pixels. */
export function dataPolygonPoints(scores: RadarScores, R: number): string {
  const vals: number[] = [
    scores.spreadRoicWacc, scores.margeEbit,
    scores.tcacCa,         scores.tcacBpa,
    scores.fcfYield,       scores.evEbitda,
    scores.currentRatio,   scores.detteEbitda,
  ]
  return ANGLES.map((a, i) => {
    const θ = (a * Math.PI) / 180
    const r = (vals[i] / 100) * R
    return `${(r * Math.sin(θ)).toFixed(2)},${(-r * Math.cos(θ)).toFixed(2)}`
  }).join(' ')
}

/** Coordonnée cartésienne d'un point sur un axe donné à la distance r. */
export function polarXY(angleDeg: number, r: number): { x: number; y: number } {
  const θ = (angleDeg * Math.PI) / 180
  return {
    x: parseFloat((r * Math.sin(θ)).toFixed(2)),
    y: parseFloat((-r * Math.cos(θ)).toFixed(2)),
  }
}
