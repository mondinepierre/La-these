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

export const loreal: AnalyseCard = {
  slug:           'loreal',           // URL : /analyses/[slug]
  type:           'valeur',
  title:          'L\'Oreal',
  ticker:         'OR.PA',
  secteur:        'Consommation',  // voir union Secteur dans types/analyses.ts
  geo:            'France',   // voir union ZoneGeo
  conviction:     'moyenne',      // exceptionnelle | forte | moyenne | spéculative
  positionnement: 'allégement', // achat fort | accumulation | surveillance | maintien | allégement
  lastUpdated:    '2026-04-14',
  statut:         'en-construction', // en-construction | actif | archivé
  portefeuille:   'PEA',          // PEA | CTO | PEA + CTO | Aucun
  horizon:        '5 ans',
  excerpt:        'Est ce que le titre le vaux bien?',
  glossaire:      ['moat', 'free-cash-flow', 'roic', 'dcf', 'asset-light', 'interchange'], // slugs glossaire liés
  logo:          '/analyse/loreal.png',
  prixCible:      { bas: 0, haut: 0, devise: 'EUR' },
  marginOfSafety: 'indéterminée', // forte | correcte | faible | négative | indéterminée
  readingTime:    25,

  metrics: {
    per:               32,  // Price / Earnings
    evEbitda:          18.5,  // EV / EBITDA
    fcfYield:          3.65,  // FCF Yield en %
    roic:              17.3,  // Return on Invested Capital en %
    wacc:              6.6,  // Weighted Average Cost of Capital en %
    detteEbitda:       0.19,  // Dette nette / EBITDA — négatif = trésorerie nette
    croissanceCA3ans:  4.8,  // TCAC CA sur 3 ans en %
    croissanceBPA3ans: 2.5,  // TCAC BPA sur 3 ans en %
    margeEbit:         20.2,  // Marge opérationnelle en %
    margeBrute:        74.3,  // Marge brute en %
    payoutRatio:       63.9,  // Dividendes / Résultat net en %
    currentRatio:      1.44,  // Actif courant / Passif courant
    dso:               38,  // Days Sales Outstanding en jours
  },

  tendances: {
    per:       'baisse', // hausse | stable | baisse
    fcfYield:  'hausse',
    roic:      'baisse',
    margeEbit: 'hausse',
  },

  updates: [
    {
      date: '2026-04-14',
      note: 'Création de la fiche.',
    },
  ],

  chartData: {
    // ── CA sur 5 ans ──────────────────────────────────────────
    revenue: [
      { year: 2021, value: 44.05 },
      { year: 2022, value: 43.48 },
      { year: 2023, value: 41.18 },
      { year: 2024, value: 38.26 },
      { year: 2025, value: 32.28 },
    ],

    // ── Répartition géographique du CA ────────────────────────
    // Régions disponibles : voir REGION_TO_CODES dans GeoRevenueMap.tsx
    geoRevenue: [
      { region: 'Europe',               pct: 33.74 },
      { region: 'Amérique du Nord',     pct: 26.60 },
      { region: 'Asie du Nord',         pct: 22.87 },
      { region: 'SAPMENA - SSA',        pct: 9.34  },
      { region: 'Amérique Latine',      pct: 7.45  },
    ],

    // ── Marges sur 5 ans ──────────────────────────────────────
    marges: [
      { year: 2021, gross: 73.9, net: 14.3, operating: 19.1 },      
      { year: 2022, gross: 72.4, net: 14.9, operating: 19.5 },
      { year: 2023, gross: 73.9, net: 15.0, operating: 19.8 },
      { year: 2024, gross: 74.2, net: 14.8, operating: 20.0 },
      { year: 2025, gross: 74.3, net: 13.9, operating: 20.2 },
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
        label: 'FCF_OCF_Capex',
        name:  'Opérating Cash Flow',
        unit:  'Mds $',
        yMin:  0,
        data: [
          { year: 2021, value: 15.9 },
          { year: 2022, value: 18.7 },
          { year: 2023, value: 20.1 },
          { year: 2024, value: 21.7 },
          { year: 2025, value: 24.4 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 15.2 },
              { year: 2022, value: 17.7 },
              { year: 2023, value: 19.1 },
              { year: 2024, value: 20.3 },
              { year: 2025, value: 22.9 },
            ],
          },
          {
            name:  'Capex',
            color: '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 0.718 },
              { year: 2022, value: 1.046 },
              { year: 2023, value: 1.077 },
              { year: 2024, value: 1.335 },
              { year: 2025, value: 1.515 },
            ],
          },
        ]        
        },
        {
          label: 'DETTE_EBITDA',
          name:  'Dette nette / EBITDA',
          unit:  'x',
          yMin: 0.15,
          data: [
            { year: 2021, value: 0.35 },
            { year: 2022, value: 0.36 },
            { year: 2023, value: 0.18 },
            { year: 2024, value: 0.33 },
            { year: 2025, value: 0.25 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 0.29 },
                { year: 2022, value: 0.29 },
                { year: 2023, value: 0.29 },
                { year: 2024, value: 0.29 },
                { year: 2025, value: 0.29 },
              ],
            }   
          ]
        },
        {
          label: 'CR',
          name:  'Current Ratio',
          unit:  'x',
          data: [
            { year: 2021, value: 1.4 },
            { year: 2022, value: 1.44 },
            { year: 2023, value: 1.45 },
            { year: 2024, value: 1.12 },
            { year: 2025, value: 1.11 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 1.30 },
                { year: 2022, value: 1.30 },
                { year: 2023, value: 1.30 },
                { year: 2024, value: 1.30 },
                { year: 2025, value: 1.30 },
              ],
            }   
          ]
        },
        {
          label: 'DSO',
          name:  'Days Sales Oustanding',
          unit:  'x',
          data: [
            { year: 2021, value: 16 },
            { year: 2022, value: 21 },
            { year: 2023, value: 19 },
            { year: 2024, value: 31 },
            { year: 2025, value: 29 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 23 },
                { year: 2022, value: 23 },
                { year: 2023, value: 23 },
                { year: 2024, value: 23 },
                { year: 2025, value: 23 },
              ],
            }   
          ]
        },
        {
          label: 'AT',
          name:  'Asset turnover',
          unit:  'x',
          yMin: 0.25,
          data: [
            { year: 2021, value: 0.31 },
            { year: 2022, value: 0.35 },
            { year: 2023, value: 0.37 },
            { year: 2024, value: 0.40 },
            { year: 2025, value: 0.43 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 0.37 },
                { year: 2022, value: 0.37 },
                { year: 2023, value: 0.37 },
                { year: 2024, value: 0.37 },
                { year: 2025, value: 0.37 },
              ],
            }   
          ]
        },
        {
          label: 'Dilution',
          name:  'Dilution / Concentration (année civile)',
          unit:  '%',
          yMin: 2.0,
          data: [
            { year: 2022, value: 2.5 },
            { year: 2023, value: 2.4 },
            { year: 2024, value: 2.7 },
            { year: 2025, value: 3 },
          ],
          competitors: [
            {
              name:  'Dilution / Concentration (année fiscale)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2022, value: 2.4 },
                { year: 2023, value: 2.4  },
                { year: 2024, value: 2.7 },
                { year: 2025, value: 3.1 },
              ],
            }   
          ]
        },
        {
          label: 'Payout',
          name:  'Payout Ratio',
          unit:  '%',
          data: [
            { year: 2021, value: 22.1 },
            { year: 2022, value: 22.2 },
            { year: 2023, value: 21.3 },
            { year: 2024, value: 21.7 },
            { year: 2025, value: 22.9 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 22 },
                { year: 2022, value: 22 },
                { year: 2023, value: 22 },
                { year: 2024, value: 22 },
                { year: 2025, value: 22 },
              ], 
            },
          ]
        },  
        {
        label: 'Capex_Action',
        name:  'Dividendes',
        unit:  'Mds $',
        yMin:  0,
        data: [
            { year: 2021, value: 2.904 },
            { year: 2022, value: 3.339 },
            { year: 2023, value: 3.866 },
            { year: 2024, value: 4.327 },
            { year: 2025, value: 4.757 },
        ],
        competitors: [
          {
            name:  'Rachat d\'action',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 10.984 },
              { year: 2022, value: 10.600 },
              { year: 2023, value: 12.566 },
              { year: 2024, value: 17.144 },
              { year: 2025, value: 18.030 },
            ],
          },
          {
            name:  'Capex',
            color: '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 0.718 },
              { year: 2022, value: 1.046 },
              { year: 2023, value: 1.077 },
              { year: 2024, value: 1.335 },
              { year: 2025, value: 1.515 },
            ],
          },
        ]        
        },
        {
          label: 'EPS',
          name:  'EPS',
          unit:  '$',
          data: [
            { year: 2021, value: 6.04 },
            { year: 2022, value: 7.15 },
            { year: 2023, value: 8.69 },
            { year: 2024, value: 9.92 },
            { year: 2025, value: 10.66 },
          ],
        },
        {
          label: 'Dividendes',
          name:  'Dividendes annuelle',
          unit:  '$',
          data: [
            { year: 2021, value: 1.28 },
            { year: 2022, value: 1.5 },
            { year: 2023, value: 1.8 },
            { year: 2024, value: 2.08 },
            { year: 2025, value: 2.36 },
          ],
        },
        {
          label: 'ROCE',
          name:  'ROCE',
          unit:  '%',
          yMin:  0,
          data: [
            { year: 2021, value: 31.1 },
            { year: 2022, value: 33.3 },
            { year: 2023, value: 36.9 },
            { year: 2024, value: 43.4 },
            { year: 2025, value: 42},
          ],
          competitors: [
            {
              name:  'WACC',
              color: '#C9A84C',
              data: [
                { year: 2021, value: 5.9 },
                { year: 2022, value: 9.4 },
                { year: 2023, value: 7.2 },
                { year: 2024, value: 7 },
                { year: 2025, value: 7.3 },
              ],
            },
            {
              name:  'ROIC',
              color: '#2D6A4F',
              dashed: true,
              data: [
                { year: 2021, value: 30.1 },
                { year: 2022, value: 35.9 },
                { year: 2023, value: 41.9 },
                { year: 2024, value: 42.6 },
                { year: 2025, value: 45.6 },
              ],
            },
          ],
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