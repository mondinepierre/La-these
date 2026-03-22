// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE — Valeur suivie
// Copier ce fichier, renommer en [ticker].ts, compléter les champs.
// NE PAS importer dans index.ts tant que la fiche n'est pas prête.
// ─────────────────────────────────────────────────────────────────────────────
//
// SOURCES PAR INDICATEUR
//   per, evEbitda, fcfYield, margeEbit, margeBrute → Yahoo Finance / Finviz
//   roic          → Calcul manuel : NOPAT / (equity + dette nette) — ou GuruFocus
//   wacc          → GuruFocus (ou formule : voir commentaire dans totalenergies.ts)
//   detteEbitda   → Yahoo Finance Statistics — négatif = trésorerie nette
//   croissanceCA3ans / croissanceBPA3ans → Macrotrends ou calcul manuel 3 ans
//   currentRatio  → Bilan : actif courant / passif courant
//   dso           → (Créances clients / CA) × 365
//   payoutRatio   → Dividende total / Résultat net
//
// RÈGLE LABELS metricHistory
//   Utiliser uniquement lettres, chiffres et _ (pas de tirets ni /
//   Exemple : 'EV_EBITDA' → composant MDX <MetricGraph_EV_EBITDA />
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const alphabet: AnalyseCard = {
  slug:           'alphabet',           // URL : /analyses/[slug]
  type:           'valeur',
  title:          'Alphabet',
  ticker:         'GOOG',
  secteur:        'Technologie',  // voir union Secteur dans types/analyses.ts
  geo:            'États-Unis',   // voir union ZoneGeo
  conviction:     'moyenne',      // exceptionnelle | forte | moyenne | spéculative
  positionnement: 'surveillance', // achat fort | accumulation | surveillance | maintien | allégement
  lastUpdated:    '2026-03-22',
  statut:         'en-construction', // en-construction | actif | archivé
  portefeuille:   'CTO',          // PEA | CTO | PEA + CTO | Aucun
  horizon:        '18 mois',
  excerpt:        '',
  glossaire:      ['per', 'free-cash-flow', 'moat', 'roic'], // slugs glossaire liés

  prixCible:      { bas: 0, haut: 0, devise: 'USD' },
  marginOfSafety: 'indéterminée', // forte | correcte | faible | négative | indéterminée

  metrics: {
    per:               0,  // Price / Earnings
    evEbitda:          0,  // EV / EBITDA
    fcfYield:          0,  // FCF Yield en %
    roic:              0,  // Return on Invested Capital en %
    wacc:              0,  // Weighted Average Cost of Capital en %
    detteEbitda:       0,  // Dette nette / EBITDA — négatif = trésorerie nette
    croissanceCA3ans:  0,  // TCAC CA sur 3 ans en %
    croissanceBPA3ans: 0,  // TCAC BPA sur 3 ans en %
    margeEbit:         32,  // Marge opérationnelle en %
    margeBrute:        0,  // Marge brute en %
    payoutRatio:       0,  // Dividendes / Résultat net en %
    currentRatio:      2,  // Actif courant / Passif courant
    dso:               57,  // Days Sales Outstanding en jours
  },

  tendances: {
    per:       'stable', // hausse | stable | baisse
    fcfYield:  'stable',
    roic:      'stable',
    margeEbit: 'stable',
  },

  updates: [
    {
      date: '2026-01-01',
      note: 'Création de la fiche.',
    },
  ],

  chartData: {
    // ── CA sur 5 ans ──────────────────────────────────────────
    revenue: [
      { year: 2021, value: 0 },
      { year: 2022, value: 0 },
      { year: 2023, value: 307 },
      { year: 2024, value: 350 },
      { year: 2025, value: 402 },
    ],

    // ── Répartition géographique du CA ────────────────────────
    // Régions disponibles : voir REGION_TO_CODES dans GeoRevenueMap.tsx
    geoRevenue: [
      { region: 'États-Unis',     pct: 48 },
      { region: 'EMEA',           pct: 29 },
      { region: 'APAC',           pct: 17 },
      { region: 'Other Americas', pct: 6  },
    ],

    // ── Marges sur 5 ans ──────────────────────────────────────
    marges: [
      { year: 2021, },
      { year: 2022, },
      { year: 2023, gross: 56.6, operating: 27.4, net: 24 },
      { year: 2024, gross: 58.2, operating: 32.1, net: 28.6 },
      { year: 2025, gross: 59.6, operating: 32, net: 32.8 },
    ],

    // ── ROIC simple sur 5 ans ─────────────────────────────────
    roic: [
      { year: 2021, value: 0 },
      { year: 2022, value: 0 },
      { year: 2023, value: 0 },
      { year: 2024, value: 0 },
      { year: 2025, value: 0 },
    ],

    // ── ROIC vs WACC ──────────────────────────────────────────
    // Composant MDX : <RoicWacc />
    roicVsWacc: [
      { year: 2021, value: 0, wacc: 0 },
      { year: 2022, value: 0, wacc: 0 },
      { year: 2023, value: 0, wacc: 0 },
      { year: 2024, value: 0, wacc: 0 },
      { year: 2025, value: 0, wacc: 0 },
    ],

    // ── Free Cash Flow sur 5 ans ──────────────────────────────
    fcf: [
      { year: 2021, value: 0 },
      { year: 2022, value: 0 },
      { year: 2023, value: 0 },
      { year: 2024, value: 0 },
      { year: 2025, value: 0 },
    ],

    //── CA par segment (optionnel) ────────────────────────────
    // Composant MDX : <SegmentGraph unit="Md$" />
    segmentRevenue: [     
      { year: 2024, segments: [
        { name: 'Google Search & other',                        value: 198.084  },
        { name: 'YouTube ads',                                  value: 36.147   },
        { name: 'Google Network',                               value: 30.359   },
        { name: 'Google subscriptions, platforms, and devices', value: 40.340   },
        { name: 'Google Cloud',                                 value: 43.229   },
        { name: 'Autres',                                       value: 1.648    },
      ]},
      { year: 2025, segments: [
        { name: 'Google Search & other',                        value: 224.532  },
        { name: 'YouTube ads',                                  value: 40.367   },
        { name: 'Google Network',                               value: 29.792   },
        { name: 'Google subscriptions, platforms, and devices', value: 48.030   },
        { name: 'Google Cloud',                                 value: 58.705   },
        { name: 'Autres',                                       value: 1.537    },
      ]},
    ],

    // ── Comparaison sectorielle ───────────────────────────────
    // Composant MDX : <ValuationRadar name="Nom" /> ou <ValuationBar name="Nom" />
    // Pairs : moyenne tronquée sur 6 pairs — source Finviz
    // valuationCompare: [
    //   { label: 'PER',                  valeur: 0, secteur: 0 },
    //   { label: 'P/FCF',                valeur: 0, secteur: 0 },
    //   { label: 'EV/EBITDA',            valeur: 0, secteur: 0 },
    //   { label: 'Marge opérationnelle', valeur: 0, secteur: 0 },
    //   { label: 'ROIC',                 valeur: 0, secteur: 0 },
    // ],

    // ── Métriques libres (PER historique, dividende, etc.) ────
    // Composant MDX : <MetricGraph_LABEL /> — LABEL = label sans tirets ni /
    // metricHistory: [
    //   {
    //     label: 'PER',
    //     name:  'Nom entreprise',
    //     unit:  '×',
    //     data: [
    //       { year: 2021, value: 0 },
    //       { year: 2022, value: 0 },
    //       { year: 2023, value: 0 },
    //       { year: 2024, value: 0 },
    //       { year: 2025, value: 0 },
    //     ],
    //     competitors: [
    //       {
    //         name:  'Concurrent A',
    //         color: '#2D6A4F',
    //         data: [
    //           { year: 2021, value: 0 },
    //           { year: 2025, value: 0 },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE — Analyse ponctuelle
// Copier ce bloc, renommer la variable, compléter.
// ─────────────────────────────────────────────────────────────────────────────

// export const SLUG_PONCTUELLE: AnalyseCard = {
//   slug:    '',           // ex: 'nvidia-resultats-q1-2026'
//   type:    'ponctuelle',
//   title:   '',
//   date:    '2026-01-01',
//   ticker:  '',
//   secteur: 'Technologie',
//   geo:     'États-Unis',
//   statut:  'en-construction',
//   excerpt: '',
// }
