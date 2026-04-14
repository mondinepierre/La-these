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
  | 'Pays-Bas'
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

export type OrigineAnalyse = {
  type:  'sondage' | 'actualite' | 'suivi' | 'autre'
  label: string
}

export type FrontmatterPonctuelle = {
  type:           'ponctuelle'
  title:          string
  ticker:         string
  date:           string
  secteur:        Secteur
  geo:            ZoneGeo
  conviction:     Conviction
  positionnement: Positionnement
  statut:         'actif' | 'archive' | 'en-construction'
  portefeuille:   Enveloppe
  horizon:        string
  excerpt:        string
  prixCible:      PrixCible
  marginOfSafety: MarginOfSafety
  metrics:        Metrics
  tendances:      Tendances
  glossaire?:     string[]
  readingTime?:   number
  logo?:          string
  chartData?:     ChartData
  origine?:       OrigineAnalyse
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
// Rupture de données
// ─────────────────────────────────────────────

export type DataBreak = {
  year:  number
  label: string
}

// ─────────────────────────────────────────────
// Graphiques Recharts
// ─────────────────────────────────────────────

export type MargePoint   = { year: number; gross?: number; operating?: number; net?: number }
export type RoicPoint    = { year: number; value: number }
export type RevenuePoint = { year: number; value: number }
export type FcfPoint     = { year: number; value: number }

export type GeoPoint = {
  region: string
  pct:    number
}

export type MetricPoint = {
  year:   number | string
  value:  number
  wacc?:  number
}

export type CompetitorSerie = {
  name:    string
  color:   string
  dashed?: boolean
  data:    { year: number | string; value: number }[]
}

export type MetricSerie = {
  label:        string
  name?:        string
  unit?:        string
  color?:       string
  dashed?:      boolean
  data:         MetricPoint[]
  competitors?: CompetitorSerie[]
  dataBreaks?:  DataBreak[]
  yMin? :       number
}

export type SegmentPoint = {
  year:     number
  segments: { name: string; value: number }[]
}

// ─────────────────────────────────────────────
// Configuration graphique segments
// Rétrocompatible : accepte SegmentPoint[] (ancien format) ou SegmentConfig (nouveau)
// ─────────────────────────────────────────────

export type SegmentConfig = {
  unit?:    string    // unité (défaut: 'Md$')
  barSize?: number    // largeur des barres en px (défaut: 26 avec total, 40 sans)
  total?: {
    show:   boolean   // affiche colonne CA net à droite
    label?: string    // libellé légende (défaut: 'CA net')
  }
  data: SegmentPoint[]
}

export type ValuationPoint = {
  label:        string
  valeur:       number
  secteur?:     number
  concurrent1?: number
  concurrent2?: number
  concurrent3?: number
}

export type ChartData = {
  marges?:           MargePoint[]
  roic?:             RoicPoint[]
  revenue?:          RevenuePoint[]
  fcf?:              FcfPoint[]
  geoRevenue?:       GeoPoint[]
  valuationCompare?:  ValuationPoint[]
  valuationCompare2?: ValuationPoint[]
  valuationConcurrents?: {
    concurrent1?: string
    concurrent2?: string
    concurrent3?: string
  }
  metricHistory?:  MetricSerie[]
  roicVsWacc?:     MetricPoint[]

  // Accepte l'ancien format tableau OU le nouveau format objet avec config
  segmentRevenue?: SegmentPoint[] | SegmentConfig

  // ── Ruptures par graphique ─────────────────────────────────
  revenueBreaks?:  DataBreak[]
  margesBreaks?:   DataBreak[]
  fcfBreaks?:      DataBreak[]
  roicBreaks?:     DataBreak[]
  roicWaccBreaks?: DataBreak[]
  segmentBreaks?:  DataBreak[]
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
  glossaire?:     string[]
  readingTime?:   number
  logo?:          string
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