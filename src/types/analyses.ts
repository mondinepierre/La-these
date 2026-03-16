// ─────────────────────────────────────────────
// Types partagés
// ─────────────────────────────────────────────

export type Secteur =
  | 'Technologie'
  | 'Santé'
  | 'Finance'
  | 'Énergie'
  | 'Consommation'
  | 'Industrie'
  | 'Défense'
  | 'Matériaux'
  | 'Immobilier'
  | 'Télécommunications'
  | 'Services publics'
  | 'Autre'

export type ZoneGeo =
  | 'États-Unis'
  | 'Europe'
  | 'Asie'
  | 'France'
  | 'Monde'
  | 'Autre'

export type Enveloppe      = 'PEA' | 'CTO' | 'PEA + CTO' | 'Aucun'
export type Conviction     = 'forte' | 'moyenne' | 'surveillance'
export type Tendance       = 'hausse' | 'stable' | 'baisse'
export type MarginOfSafety = 'forte' | 'correcte' | 'faible' | 'indéterminée'

// ─────────────────────────────────────────────
// Analyse ponctuelle
// ─────────────────────────────────────────────

export type FrontmatterPonctuelle = {
  type:    'ponctuelle'
  title:   string
  date:    string
  ticker?: string
  secteur: Secteur
  geo:     ZoneGeo
  excerpt: string
  statut:  'actif' | 'archive' | 'en-construction'
}

// ─────────────────────────────────────────────
// Valeur suivie — sous-types
// ─────────────────────────────────────────────

export type Metrics = {
  per:               number
  evEbitda:          number
  fcfYield:          number
  roic:              number
  wacc:              number
  detteEbitda:       number
  croissanceCA3ans:  number
  croissanceBPA3ans: number
  margeEbit:         number
  margeBrute:        number
  payoutRatio:       number
  currentRatio:      number
  dso:               number
}

export type Tendances = {
  per:       Tendance
  fcfYield:  Tendance
  roic:      Tendance
  margeEbit: Tendance
}

export type PrixCible = {
  bas:    number
  haut:   number
  devise: string
}

export type UpdateEntry = {
  date: string
  note: string
}

// ─────────────────────────────────────────────
// Graphiques Recharts
// ─────────────────────────────────────────────

export type MargePoint   = { year: number; net: number; operating: number }
export type RoicPoint    = { year: number; value: number }
export type RevenuePoint = { year: number; value: number }
export type FcfPoint     = { year: number; value: number }

export type ChartData = {
  marges?:  MargePoint[]
  roic?:    RoicPoint[]
  revenue?: RevenuePoint[]
  fcf?:     FcfPoint[]
}

// ─────────────────────────────────────────────
// Valeur suivie — type principal
// ─────────────────────────────────────────────

export type FrontmatterValeur = {
  type:           'valeur'
  title:          string
  ticker:         string
  secteur:        Secteur
  geo:            ZoneGeo
  conviction:     Conviction
  lastUpdated:    string
  excerpt:        string
  statut:         'actif' | 'archive' | 'en-construction'
  portefeuille:   Enveloppe
  horizon:        string
  prixCible:      PrixCible
  marginOfSafety: MarginOfSafety
  metrics:        Metrics
  tendances:      Tendances
  updates:        UpdateEntry[]
  chartData?:     ChartData
}

// ─────────────────────────────────────────────
// Type union + type guards
// ─────────────────────────────────────────────

export type FrontmatterAnalyse = FrontmatterPonctuelle | FrontmatterValeur

export function isValeurSuivie(fm: FrontmatterAnalyse): fm is FrontmatterValeur {
  return fm.type === 'valeur'
}

export function isPonctuelle(fm: FrontmatterAnalyse): fm is FrontmatterPonctuelle {
  return fm.type === 'ponctuelle'
}

// ─────────────────────────────────────────────
// Type enrichi pour l'index
// ─────────────────────────────────────────────

export type AnalyseCard = FrontmatterAnalyse & { slug: string }