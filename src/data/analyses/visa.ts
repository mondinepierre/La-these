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

export const visa: AnalyseCard = {
  slug:           'visa',           // URL : /analyses/[slug]
  type:           'valeur',
  title:          'Visa',
  ticker:         'V',
  secteur:        'Finance',  // voir union Secteur dans types/analyses.ts
  geo:            'États-Unis',   // voir union ZoneGeo
  conviction:     'forte',      // exceptionnelle | forte | moyenne | spéculative
  positionnement: 'surveillance', // achat fort | accumulation | surveillance | maintien | allégement
  lastUpdated:    '2026-01-01',
  statut:         'en-construction', // en-construction | actif | archivé
  portefeuille:   'CTO',          // PEA | CTO | PEA + CTO | Aucun
  horizon:        '',
  excerpt:        '',
  glossaire:      ['per', 'free-cash-flow', 'moat', 'roic'], // slugs glossaire liés
  logo:          '/analyse/visa.png',
  prixCible:      { bas: 0, haut: 0, devise: 'USD' },
  marginOfSafety: 'indéterminée', // forte | correcte | faible | négative | indéterminée
  readingTime:    25,

  metrics: {
    per:               32.9,  // Price / Earnings
    evEbitda:          26.8,  // EV / EBITDA
    fcfYield:          3.35,  // FCF Yield en %
    roic:              45.6,  // Return on Invested Capital en %
    wacc:              7.3,  // Weighted Average Cost of Capital en %
    detteEbitda:       0.25,  // Dette nette / EBITDA — négatif = trésorerie nette
    croissanceCA3ans:  11.1,  // TCAC CA sur 3 ans en %
    croissanceBPA3ans: 14.2,  // TCAC BPA sur 3 ans en %
    margeEbit:         59.2,  // Marge opérationnelle en %
    margeBrute:        97.8,  // Marge brute en %
    payoutRatio:       22.9,  // Dividendes / Résultat net en %
    currentRatio:      1.11,  // Actif courant / Passif courant
    dso:               29,  // Days Sales Outstanding en jours
  },

  tendances: {
    per:       'hausse', // hausse | stable | baisse
    fcfYield:  'baisse',
    roic:      'hausse',
    margeEbit: 'baisse',
  },

  updates: [
    {
      date: '2026-04-05',
      note: 'Création de la fiche.',
    },
  ],

  chartData: {
    // ── CA sur 5 ans ──────────────────────────────────────────
    revenue: [
      { year: 2021, value: 24.1 },
      { year: 2022, value: 29.3 },
      { year: 2023, value: 32.6 },
      { year: 2024, value: 35.9 },
      { year: 2025, value: 40 },
    ],

    // ── Répartition géographique du CA ────────────────────────
    // Régions disponibles : voir REGION_TO_CODES dans GeoRevenueMap.tsx
    geoRevenue: [
      { region: 'États-Unis', pct: 39.08 },
      { region: 'Reste du monde',     pct: 60.92 },
    ],

    // ── Marges sur 5 ans ──────────────────────────────────────
    marges: [
      { year: 2021, net: 51.6, operating: 65.7 },
      { year: 2022, net: 49.9, operating: 63.4 },
      { year: 2023, net: 54.4, operating: 65.6 },
      { year: 2024, net: 54.3, operating: 64.9 },
      { year: 2025, net: 50.2, operating: 59.2 },
    ],

    // ── ROIC simple sur 5 ans ─────────────────────────────────
    roic: [
      { year: 2021, value: 30.1 },
      { year: 2022, value: 35.9 },
      { year: 2023, value: 41.9 },
      { year: 2024, value: 42.6 },
      { year: 2025, value: 45.6 },
    ],

    // ── ROIC vs WACC ──────────────────────────────────────────
    // Composant MDX : <RoicWacc />
    roicVsWacc: [
      { year: 2021, value: 30.1, wacc: 5.9 },
      { year: 2022, value: 35.9, wacc: 9.4 },
      { year: 2023, value: 41.9, wacc: 7.2 },
      { year: 2024, value: 42.6, wacc: 7 },
      { year: 2025, value: 45.6, wacc: 7.3 },
    ],

    // ── Free Cash Flow sur 5 ans ──────────────────────────────
    fcf: [
      { year: 2021, value: 15.2 },
      { year: 2022, value: 17.7 },
      { year: 2023, value: 19.1 },
      { year: 2024, value: 20.3 },
      { year: 2025, value: 22.9 },
    ],

    segmentRevenue: {
      unit:  'Md$',
      total: { show: true, label: 'CA' },
      data: [
      { year: 2021, segments: [
          { name: 'Service',                            value: 11.4 },
          { name: 'Data processing',                    value: 12.7 },
          { name: 'International transaction',          value: 6.5   },
          { name: 'Other',                              value: 1.6 },
          { name: 'Client incentives',                  value: -8.3   },
        ]
      },
      { year: 2022, segments: [
          { name: 'Service',                            value: 13.3 },
          { name: 'Data processing',                    value: 14.4 },
          { name: 'International transaction',          value: 9.8   },
          { name: 'Other',                              value: 1.9 },
          { name: 'Client incentives',                  value: -10.2   },
        ]
      },
      { year: 2023, segments: [
          { name: 'Service',                            value: 14.8 },
          { name: 'Data processing',                    value: 16 },
          { name: 'International transaction',          value: 11.6   },
          { name: 'Other',                              value: 2.4 },
          { name: 'Client incentives',                  value: -12.2   },
        ]
      },
      { year: 2024, segments: [
          { name: 'Service',                            value: 16.1 },
          { name: 'Data processing',                    value: 17.7 },
          { name: 'International transaction',          value: 12.6   },
          { name: 'Other',                              value: 3.1 },
          { name: 'Client incentives',                  value: -13.7   },
        ]
      },
      { year: 2025, segments: [
          { name: 'Service',                            value: 17.5 },
          { name: 'Data processing',                    value: 19.9 },
          { name: 'International transaction',          value: 14.1   },
          { name: 'Other',                              value: 4 },
          { name: 'Client incentives',                  value: -15.5   },
        ]
      },
    ],
  },
     metricHistory: [
            {
          label: 'EV_EBIDTA',
          name:  'EV/EBITDA',
          unit:  'x',
          data: [
            { year: 2021, value: 25.8 },
            { year: 2022, value: 21.5 },
            { year: 2023, value: 23.2 },
            { year: 2024, value: 25.8 },
            { year: 2025, value: 26.8 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 24.6 },
                { year: 2022, value: 24.6 },
                { year: 2023, value: 24.6 },
                { year: 2024, value: 24.6 },
                { year: 2025, value: 24.6 },
              ],
            }   
          ]
        },
        {
          label: 'PER',
          name:  'PER',
          unit:  'x',
          data: [
            { year: 2021, value: 33.9 },
            { year: 2022, value: 28.2 },
            { year: 2023, value: 28.9 },
            { year: 2024, value: 31.9 },
            { year: 2025, value: 32.9 },
          ],
          competitors: [
            {
              name:  'PER historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 31.2 },
                { year: 2022, value: 31.2 },
                { year: 2023, value: 31.2 },
                { year: 2024, value: 31.2 },
                { year: 2025, value: 31.2 },
              ],
            },
            {
              name:  'PER historique ajusté',
              color: '#52B788',
              dashed: true,
              data: [
                { year: 2021, value: 31.2 },
                { year: 2022, value: 25.4 },
                { year: 2023, value: 23.5 },
                { year: 2024, value: 25.5 },
                { year: 2025, value: 24.5 },
              ],
            }      
          ]
        },
        {
          label: 'FCFy',
          name:  'Free-Cash-Flow Yield',
          unit:  '%',
          data: [
            { year: 2021, value: 3.42 },
            { year: 2022, value: 4.18 },
            { year: 2023, value: 3.64 },
            { year: 2024, value: 3.20 },
            { year: 2025, value: 3.35 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 3.6 },
                { year: 2022, value: 3.6 },
                { year: 2023, value: 3.6 },
                { year: 2024, value: 3.6 },
                { year: 2025, value: 3.6 },
              ],
            },
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
    ],
        valuationCompare: [
      { label: 'PER',                  valeur: 28.5,  concurrent1 : 29.87, concurrent2 : 19.51  },
      { label: 'P/FCF',                valeur: 25.01, concurrent1 : 26.02, concurrent2 : 12.82  },
      { label: 'EV/EBITDA',            valeur: 19.75, concurrent1 : 21.46, concurrent2 : 9.14   },
      { label: 'Marge opérationnelle', valeur: 67.16, concurrent1 : 60.13, concurrent2 : 20.63  },
      { label: 'ROIC',                 valeur: 35.28, concurrent1 : 56.14, concurrent2 : 12.78  },
    ],
        valuationCompare2: [
      { label: 'PER',                  valeur: 28.5,  secteur: 15.53, },
      { label: 'P/FCF',                valeur: 25.01, secteur: 12.38, },
      { label: 'EV/EBITDA',            valeur: 19.75, secteur: 14.18, },
      { label: 'Marge opérationnelle', valeur: 67.16, secteur: 19.24, },
      { label: 'ROIC',                 valeur: 35.28, secteur: 7.45,  },
    ],
  

    // ── CA par segment (optionnel) ────────────────────────────
    // Composant MDX : <SegmentGraph unit="Md$" />
    // segmentRevenue: [
    //   { year: 2025, segments: [
    //     { name: 'Segment A', value: 0 },
    //     { name: 'Segment B', value: 0 },
    //   ]},
    // ],

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
