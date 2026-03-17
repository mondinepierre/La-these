export type TypePortefeuille = 'personnel' | 'modele' | 'thematique'
export type StatutPortefeuille = 'actif' | 'archive' | 'en-construction'
export type ProfilNiveau = 'debutant' | 'intermediaire' | 'experimente'
export type Enveloppe = 'PEA' | 'CTO'

export type LigneAllocation = {
  label: string
  pct: number
  theme: string      // thème macro — sert au regroupement du donut
  enveloppe: Enveloppe
  gics: string       // secteur GICS
  geo: string        // zone géographique
  isin?: string
  analyseSlug?: string
}

export type UpdateEntry = {
  date: string
  note: string
}

export type ProfilPortefeuille = {
  niveau: ProfilNiveau
  horizon: string
  risque: string
  enveloppe: string
  capitalDepart?: string
}

export type PortefeuilleEntry = {
  slug: string
  title: string
  description: string
  type: TypePortefeuille
  statut: StatutPortefeuille
  profil: ProfilPortefeuille
  updatedAt: string
  allocation: LigneAllocation[]           // portefeuille réel actuel
  allocationCible?: LigneAllocation[]     // cible post-arbitrage (optionnel)
  updates?: UpdateEntry[]
}