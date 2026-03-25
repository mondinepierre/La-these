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
  conviction:     'exceptionnelle',      // exceptionnelle | forte | moyenne | spéculative
  positionnement: 'surveillance', // achat fort | accumulation | surveillance | maintien | allégement
  lastUpdated:    '2026-03-26',
  statut:         'actif', // en-construction | actif | archivé
  portefeuille:   'CTO',          // PEA | CTO | PEA + CTO | Aucun
  horizon:        '36 mois',
  excerpt:        'L\'entreprise qui veut contrôler l\'IA de A à Z.',
  glossaire:      ['per', 'free-cash-flow', 'moat', 'roic'], // slugs glossaire liés

  prixCible:      { bas: 326.8, haut: 384.5, devise: 'USD' },
  marginOfSafety: 'négative', // forte | correcte | faible | négative | indéterminée

  metrics: {
    per:               29.04,  // Price / Earnings
    evEbitda:          25.02,  // EV / EBITDA
    fcfYield:          1.95,  // FCF Yield en %
    roic:              25.85,  // Return on Invested Capital en %
    wacc:              9.22,  // Weighted Average Cost of Capital en %
    detteEbitda:       -0.53,  // Dette nette / EBITDA — négatif = trésorerie nette
    croissanceCA3ans:  12.5,  // TCAC CA sur 3 ans en %
    croissanceBPA3ans: 33.3,  // TCAC BPA sur 3 ans en %
    margeEbit:         32,  // Marge opérationnelle en %
    margeBrute:        59.6,  // Marge brute en %
    payoutRatio:       7.6,  // Dividendes / Résultat net en %
    currentRatio:      2,  // Actif courant / Passif courant
    dso:               57,  // Days Sales Outstanding en jours
  },

  tendances: {
    per:       'hausse', // hausse | stable | baisse
    fcfYield:  'baisse',
    roic:      'stable',
    margeEbit: 'stable',
  },

  updates: [
    {
      date: '2026-03-26',
      note: 'Création de la fiche.',
    },
  ],

  chartData: {
    // ── CA sur 5 ans ──────────────────────────────────────────
    revenue: [
      { year: 2021, value: 257.6 },
      { year: 2022, value: 282.8 },
      { year: 2023, value: 307.3 },
      { year: 2024, value: 350 },
      { year: 2025, value: 402.8 },
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
      { year: 2021, gross: 56.6, operating: 27.4, net: 24 },
      { year: 2022, gross: 56.6, operating: 26.4, net: 21.2 },
      { year: 2023, gross: 56.6, operating: 27.4, net: 24 },
      { year: 2024, gross: 58.2, operating: 32.1, net: 28.6 },
      { year: 2025, gross: 59.6, operating: 32, net: 32.8 },
    ],

    // ── ROIC simple sur 5 ans ─────────────────────────────────
    roic: [
      { year: 2021, value: 26.21, },
      { year: 2022, value: 24.57, },
      { year: 2023, value: 25.61, },
      { year: 2024, value: 28.9, },
      { year: 2025, value: 25.85, },
    ],

    // ── ROIC vs WACC ──────────────────────────────────────────
    // Composant MDX : <RoicWacc />
    roicVsWacc: [
      { year: 2021, value: 26.21, wacc: 9.76 },
      { year: 2022, value: 24.57, wacc: 10.03 },
      { year: 2023, value: 25.61, wacc: 9.64 },
      { year: 2024, value: 28.9, wacc: 9.41 },
      { year: 2025, value: 25.85, wacc: 9.22 },
    ],

    // ── Free Cash Flow sur 5 ans ──────────────────────────────
    fcf: [
      { year: 2021, value: 67.012 },
      { year: 2022, value: 60.010 },
      { year: 2023, value: 69.495 },
      { year: 2024, value: 72.764 },
      { year: 2025, value: 73.266 },
    ],

    //── CA par segment (optionnel) ────────────────────────────
    // Composant MDX : <SegmentGraph unit="Md$" />
    segmentRevenue: [
      { year: 2021, segments: [
        { name: 'Google Search & other',                        value: 148.951  },
        { name: 'Google Cloud',                                 value: 19.206   },
        { name: 'Google Network',                               value: 31.701   },
        { name: 'Google subscriptions, platforms, and devices', value: 28.032   },
        { name: 'YouTube ads',                                  value: 28.845   },
        { name: 'Autres',                                       value: 0.753    },
      ]},
      { year: 2022, segments: [
        { name: 'Google Search & other',                        value: 162.450  },
        { name: 'Google Cloud',                                 value: 26.280   },
        { name: 'Google Network',                               value: 32.780   },
        { name: 'Google subscriptions, platforms, and devices', value: 29.055   },
        { name: 'YouTube ads',                                  value: 29.243   },
        { name: 'Autres',                                       value: 1.537    },
      ]},
      { year: 2023, segments: [
        { name: 'Google Search & other',                        value: 175.033   },
        { name: 'Google Cloud',                                 value: 33.088   },
        { name: 'Google Network',                               value: 31.312   },
        { name: 'Google subscriptions, platforms, and devices', value: 34.688   },
        { name: 'YouTube ads',                                  value: 31.510   },
        { name: 'Autres',                                       value: 1.068   },
      ]},        
      { year: 2024, segments: [
        { name: 'Google Search & other',                        value: 198.084  },
        { name: 'Google Cloud',                                 value: 43.229   },
        { name: 'Google Network',                               value: 30.359   },
        { name: 'Google subscriptions, platforms, and devices', value: 40.340   },
        { name: 'YouTube ads',                                  value: 36.147   },
        { name: 'Autres',                                       value: 1.648    },
      ]},
      { year: 2025, segments: [
        { name: 'Google Search & other',                        value: 224.532  },
        { name: 'Google Cloud',                                 value: 58.705   },
        { name: 'Google Network',                               value: 29.792   },
        { name: 'Google subscriptions, platforms, and devices', value: 48.030   },
        { name: 'YouTube ads',                                  value: 40.367   },
        { name: 'Autres',                                       value: 1.537    },
      ]},
    ],
    //     ── Métriques libres (PER historique, dividende, etc.) ────
    // Composant MDX : <MetricGraph_LABEL /> — LABEL = label sans tirets ni /
    metricHistory: [
      {
        label: 'Croissance_par_secteur',
        name:  'Google Services',
        unit:  '%',
        data: [
          { year: 2022, value: 6.74 },
          { year: 2023, value: 7.5 },
          { year: 2024, value: 11.88 },
          { year: 2025, value: 12.39 },
        ],
        competitors: [
          {
            name:  'Google Cloud',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 36.83 },
              { year: 2023, value: 25.91 },
              { year: 2024, value: 30.65 },
              { year: 2025, value: 35.8 },
            ],
          },
        ],
      },
      {
        label: 'Levier_Cloud',
        name:  'Revenues Google Cloud',
        unit:  'MDs $',
        data: [
          { year: 2023, value: 33.088 },
          { year: 2024, value: 43.229 },
          { year: 2025, value: 58.705 },
        ],
        competitors: [
          {
            name:  'Dépenses Google Cloud',
            color: '#C9A84C',
            data: [
          { year: 2023, value: 31.372 },
          { year: 2024, value: 37.117 },
          { year: 2025, value: 44.795 },
            ],
          },
        ],
      },
      {
        label: 'MO_par_secteur',
        name:  'Google Services',
        unit:  '%',
        data: [
          { year: 2021, value: 38.67 },
          { year: 2022, value: 32.62 },
          { year: 2023, value: 35.17 },
          { year: 2024, value: 39.77 },
          { year: 2025, value: 40.68 },
        ],
        competitors: [
          {
            name:  'Google Cloud',
            color: '#C9A84C',
            data: [
          { year: 2021, value: -16.14 },
          { year: 2022, value: -7.31 },
          { year: 2023, value: 5.19 },
          { year: 2024, value: 14.14 },
          { year: 2025, value: 23.69 },
            ],
          },
        ],
      },
      {
        label: 'MO_par_secteur_8Q',
        name:  'Google Services',
        unit:  '%',
        data: [
          { year: '2024 Q1', value: 39.63 },
          { year: '2024 Q2', value: 40.14 },
          { year: '2024 Q3', value: 40.33 },
          { year: '2024 Q4', value: 39.05 },
          { year: '2025 Q1', value: 42.30 },
          { year: '2025 Q2', value: 40.06 },
          { year: '2025 Q3', value: 38.51 },
          { year: '2025 Q4', value: 41.86 },
        ],
        competitors: [
          {
            name:  'Google Cloud',
            color: '#C9A84C',
            data: [
          { year: '2024 Q1', value: 9.40 },
          { year: '2024 Q2', value: 11.33 },
          { year: '2024 Q3', value: 17.15 },
          { year: '2024 Q4', value: 17.51 },
          { year: '2025 Q1', value: 17.76 },
          { year: '2025 Q2', value: 20.74 },
          { year: '2025 Q3', value: 23.71 },
          { year: '2025 Q4', value: 30.08 },
        ],
          },
                    {
            name:  'Google Cloud tendances',
            color: '#A8A29E',
            dashed : true,
            data: [
          { year: '2024 Q1', value: 9.49 },
          { year: '2024 Q2', value: 12.06 },
          { year: '2024 Q3', value: 14.62 },
          { year: '2024 Q4', value: 17.18 },
          { year: '2025 Q1', value: 19.74 },
          { year: '2025 Q2', value: 22.30 },
          { year: '2025 Q3', value: 24.86 },
          { year: '2025 Q4', value: 27.43 },
                  ],
          },
        ],
      },
      {
        label: 'Pourcentage_CA',
        name:  'Google Cloud',
        unit:  '%',
        color: '#C9A84C',
          data: [
            { year: 2021, value: 7.45 },
            { year: 2022, value: 9.29 },
            { year: 2023, value: 10.76 },
            { year: 2024, value: 12.35 },
            { year: 2025, value: 14.57 },
        ],
        competitors: [
          {
            name:  'Google Services',
            color: '#1B4332',
            dashed: false,
            data: [
              { year: 2021, value: 92.20 },
              { year: 2022, value: 89.64 },
              { year: 2023, value: 88.66 },
              { year: 2024, value: 87.12 },
              { year: 2025, value: 85.08 },
            ],
          },
        ],
      },
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 25.79 },
          { year: 2022, value: 19.47 },
          { year: 2023, value: 24.3 },
          { year: 2024, value: 23.43 },
          { year: 2025, value: 29.04  },
        ],
      },
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 2.93 },
          { year: 2022, value: 2.38 },
          { year: 2023, value: 2.1 },
          { year: 2024, value: 1.84 },
          { year: 2025, value: 2.01  },
        ],
      },
      {
        label: 'Dilution',
        name:  'Dilution/Concentration',
        unit:  '%',
        data: [
          { year: 2022, value: 2.91 },
          { year: 2023, value: 3.32 },
          { year: 2024, value: 3.17 },
          { year: 2025, value: 0.72  },
        ],
      },
      {
        label: 'Payout',
        name:  'Payout ratio',
        unit:  '%',
        data: [
          { year: 2024, value: 7.35 },
          { year: 2025, value: 7.6  },
        ],
      },
      {
        label: 'DSO',
        name:  'Days Sales Oustanding',
        unit:  ' jours',
        data: [
          { year: 2021, value: 56 },
          { year: 2022, value: 52 },
          { year: 2023, value: 57 },
          { year: 2024, value: 55 },
          { year: 2025, value: 57  },
        ],
      },
      {
        label: 'Dette_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: -1.4 },
          { year: 2022, value: -1.12 },
          { year: 2023, value: -1.01 },
          { year: 2024, value: -0.66 },
          { year: 2025, value: -0.53  },
        ],
      },
      {
        label: 'CAPEX',
        name:  'Investissement CAPEX',
        unit:  'Mds $',
        data: [
          { year: 2021, value: 24.640 },
          { year: 2022, value: 31.485 },
          { year: 2023, value: 32.251 },
          { year: 2024, value: 52.535 },
          { year: 2025, value: 91.447  },
        ],
      },
      {
        label: 'FCF_OCF',
        name:  'Opérating Cash Flow',
        unit:  'Mds $',
        data: [
          { year: 2021, value: 91.652 },
          { year: 2022, value: 91.495 },
          { year: 2023, value: 101.746},
          { year: 2024, value: 125.299},
          { year: 2025, value: 164.713},
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 67.012 },
              { year: 2022, value: 60.010 },
              { year: 2023, value: 69.495 },
              { year: 2024, value: 72.764 },
              { year: 2025, value: 73.266 },
            ],
          },
        ]        
      },
      {
        label: 'FCFy',
        name:  'Free Cash Flow Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 3.65 },
          { year: 2022, value: 5.62 },
          { year: 2023, value: 4.10 },
          { year: 2024, value: 3.22 },
          { year: 2025, value: 1.95 },
        ],
        competitors: [
          {
            name:  'US 10 ans',
            color: '#52B788',
            data: [
              { year: 2021, value: 0.916 },
              { year: 2022, value: 3.879 },
              { year: 2023, value: 3.866 },
              { year: 2024, value: 4.572 },
              { year: 2025, value: 4.153 },
            ],
          },
        ]        
      },
      {
        label: 'EPS',
        name:  'Evolution EPS',
        unit:  '$',
        data: [
          { year: 2021, value: 5.61   },
          { year: 2022, value: 4.56   },
          { year: 2023, value: 5.8    },
          { year: 2024, value: 8.04   },
          { year: 2025, value: 10.81  },
        ],
      },
    ],
  valuationCompare: [
      { label: 'PER',                  valeur: 26.76, concurrent1 : 23.32, concurrent2 : 25.24},
      { label: 'P/FCF',                valeur: 48.02, concurrent1 : 35.75, concurrent2 : 32.53},
      { label: 'EV/EBITDA',            valeur: 22.47, concurrent1 : 15.16, concurrent2 : 14.75},
      { label: 'Marge opérationnelle', valeur: 32.94, concurrent1 : 46.67, concurrent2 : 41.44},
      { label: 'ROIC',                 valeur: 27.73, concurrent1 : 23.85, concurrent2 : 20.17},
    ],
  },
}

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
    // Composant MDX : <MetricGraph_LABEL title="Titre"/> — LABEL = label sans tirets ni / 
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
