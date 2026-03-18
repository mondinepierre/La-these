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
export type Conviction     = 'exceptionnelle' | 'forte' | 'moyenne' | 'spéculative'
export type Positionnement = 'achat fort' | 'accumulation' | 'surveillance' | 'allégement'
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
  per:               number  // Price / Earnings
  evEbitda:          number  // EV / EBITDA
  fcfYield:          number  // FCF Yield en %
  roic:              number  // Return on Invested Capital en %
  wacc:              number  // Weighted Average Cost of Capital en %
  detteEbitda:       number  // Dette nette / EBITDA — négatif = trésorerie nette
  croissanceCA3ans:  number  // TCAC CA sur 3 ans en %
  croissanceBPA3ans: number  // TCAC BPA sur 3 ans en %
  margeEbit:         number  // Marge opérationnelle en %
  margeBrute:        number  // Marge brute en %
  payoutRatio:       number  // Dividendes / Résultat net en %
  currentRatio:      number  // Actif court terme / Passif court terme
  dso:               number  // Days Sales Outstanding en jours
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
  devise: string  // 'EUR' | 'USD' | etc.
}

export type UpdateEntry = {
  date: string  // format YYYY-MM-DD
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
  fcf?:     FcfPoint[]     // Free Cash Flow en milliards
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
  positionnement: Positionnement
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