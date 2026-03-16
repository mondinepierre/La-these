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

// ─────────────────────────────────────────────
// Analyse ponctuelle
// ─────────────────────────────────────────────

export type FrontmatterPonctuelle = {
  type: 'ponctuelle'
  title: string
  date: string          // format ISO : "2025-02-26"
  ticker?: string       // optionnel — une analyse macro n'a pas de ticker
  secteur: Secteur
  geo: ZoneGeo
  excerpt: string       // résumé 1-2 phrases pour l'index
}

// ─────────────────────────────────────────────
// Valeur suivie
// ─────────────────────────────────────────────

export type Conviction = 'forte' | 'moyenne' | 'surveillance'

// Points de données pour les graphiques Recharts

export type MargePoint = {
  year: number          // ex : 2020
  net: number           // marge nette en %
  operating: number     // marge opérationnelle en %
}

export type RoicPoint = {
  year: number
  value: number         // ROIC en %
}

export type RevenuePoint = {
  year: number
  value: number         // chiffre d'affaires en milliards
}

export type ChartData = {
  marges?: MargePoint[]
  roic?: RoicPoint[]
  revenue?: RevenuePoint[]
}

export type FrontmatterValeur = {
  type: 'valeur'
  title: string         // nom complet : "Microsoft Corporation"
  ticker: string        // "MSFT"
  secteur: Secteur
  geo: ZoneGeo
  conviction: Conviction
  lastUpdated: string   // format ISO : "2025-03-10"
  excerpt: string       // résumé 1-2 phrases pour l'index
  chartData?: ChartData // absent = aucun graphique affiché
}

// ─────────────────────────────────────────────
// Type union — utilisé dans l'index et les utils
// ─────────────────────────────────────────────

export type FrontmatterAnalyse = FrontmatterPonctuelle | FrontmatterValeur

// Type guard
export function isValeurSuivie(
  fm: FrontmatterAnalyse
): fm is FrontmatterValeur {
  return fm.type === 'valeur'
}

export function isPonctuelle(
  fm: FrontmatterAnalyse
): fm is FrontmatterPonctuelle {
  return fm.type === 'ponctuelle'
}

// ─────────────────────────────────────────────
// Type enrichi pour l'index (frontmatter + slug)
// ─────────────────────────────────────────────

export type AnalyseCard = FrontmatterAnalyse & { slug: string }