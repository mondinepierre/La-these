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
export type Positionnement = 'achat fort' | 'accumulation' | 'surveillance' | 'allégement' | 'maintien'
export type Tendance       = 'hausse' | 'stable' | 'baisse'
export type MarginOfSafety = 'forte' | 'correcte' | 'faible' | 'indéterminée' | 'négative'

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

export type MargePoint   = { year: number;  gross?: number; operating?: number; net?: number; }
export type RoicPoint    = { year: number; value: number }
export type RevenuePoint = { year: number; value: number }
export type FcfPoint     = { year: number; value: number }
export type GeoPoint = {
  region: string  // ex : 'Europe' | 'Chine' | 'États-Unis' | 'Reste du monde'
  pct:    number  // % du CA — la somme doit faire 100
}
// ── Graphiques flexibles ──────────────────────────────────────

export type MetricPoint = {
  year:   number | string
  value:  number
  wacc?:  number   // optionnel — uniquement pour ROIC vs WACC
}

export type CompetitorSerie = {
  name:   string
  color:  string
  dashed?: boolean  // ← false/absent = continu, true = pointillé
  data:   { year: number | string; value: number }[]
}

export type MetricSerie = {
  label:        string           // titre du graphique — ex : 'PER'
  name?:        string           // légende ligne principale — ex : 'TotalEnergies'
  unit?:        string
  color?:       string           // ← couleur personnalisée pour la ligne principale
  dashed?:      boolean          // ← true = pointillé, false/absent = continu
  data:         MetricPoint[]
  competitors?: CompetitorSerie[]
}

export type SegmentPoint = {
  year:     number
  segments: { name: string; value: number }[]
}

export type ValuationPoint = {
  label:        string
  valeur:       number
  secteur?:     number   // valeur du secteur
  concurrent1?: number   // valeur du premier concurrent
  concurrent2?: number   // valeur du second concurrent
}

export type ChartData = {
  marges?:        MargePoint[]
  roic?:          RoicPoint[]
  revenue?:       RevenuePoint[]
  fcf?:           FcfPoint[]
  geoRevenue?:    GeoPoint[]
  valuationCompare?: ValuationPoint[]
  valuationConcurrents?: {           // ← noms des concurrents pour la légende
    concurrent1?: string
    concurrent2?: string
  }
  metricHistory?: MetricSerie[]    // graphiques libres — PER, EV/EBITDA, etc.
  roicVsWacc?:    MetricPoint[]    // ROIC + WACC sur 5 ans
  segmentRevenue?: SegmentPoint[]  // CA par segment sur 5 ans
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
  glossaire?:     string[]        // slugs des termes — ex: ['per', 'free-cash-flow', 'moat']
  readingTime?: number            // ← en minutes — affiché si renseigné, absent sinon
  logo?: string                   // chemin relatif — ex: '/images/analyses/asml/logo.png'
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