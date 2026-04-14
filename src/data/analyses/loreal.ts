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
  conviction:     'forte',      // exceptionnelle | forte | moyenne | spéculative
  positionnement: 'maintien', // achat fort | accumulation | surveillance | maintien | allégement
  lastUpdated:    '2026-04-13',
  statut:         'actif', // en-construction | actif | archivé
  portefeuille:   'PEA',          // PEA | CTO | PEA + CTO | Aucun
  horizon:        '5 ans',
  excerpt:        'Est ce que le titre le vaux bien?',
  glossaire:      ['moat', 'free-cash-flow', 'roic', 'pricing-power', 'cagr', 'payout-ratio'],
  logo:          '/analyse/loreal.png',
  prixCible:      { bas: 435, haut: 564, devise: 'EUR' },
  marginOfSafety: 'négative', // forte | correcte | faible | négative | indéterminée
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
    dso:               46,  // Days Sales Outstanding en jours
  },

  tendances: {
    per:       'baisse', // hausse | stable | baisse
    fcfYield:  'hausse',
    roic:      'baisse',
    margeEbit: 'hausse',
  },

  updates: [
    {
      date: '2026-04-13',
      note: 'Création de la fiche.',
    },
  ],

  chartData: {
    // ── CA sur 5 ans ──────────────────────────────────────────
    revenue: [
      { year: 2021, value: 32.28 },
      { year: 2022, value: 38.26 },
      { year: 2023, value: 41.18 },
      { year: 2024, value: 43.48 },
      { year: 2025, value: 44.05 },
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
      { year: 2021, value: 17.2 },
      { year: 2022, value: 18.5 },
      { year: 2023, value: 18.8 },
      { year: 2024, value: 17.6 },
      { year: 2025, value: 17.3 },
    ],

    // ── ROIC vs WACC ──────────────────────────────────────────
    // Composant MDX : <RoicWacc />
    roicVsWacc: [
      { year: 2021, value: 17.2, wacc: -1 },
      { year: 2022, value: 18.5, wacc: 5.2 },
      { year: 2023, value: 18.8, wacc: 6.8 },
      { year: 2024, value: 17.6, wacc: 7.4 },
      { year: 2025, value: 17.3, wacc: 6.6 },
    ],

    // ── Free Cash Flow sur 5 ans ──────────────────────────────
    fcf: [
      { year: 2021, value: 5.653 },
      { year: 2022, value: 4.935 },
      { year: 2023, value: 6.116 },
      { year: 2024, value: 6.644 },
      { year: 2025, value: 7.162 },
    ],

    segmentRevenue: {
      unit:  'Md€',
      data: [
      { year: 2021, segments: [
          { name: 'Produits Professionnels',    value: 3.784  },
          { name: 'Produits Grand Public',      value: 12.234 },
          { name: 'Luxe',                       value: 12.346 },
          { name: 'Beauté Dermatologique',      value: 3.924  },
        ]
      },
      { year: 2022, segments: [
          { name: 'Produits Professionnels',    value: 4.477  },
          { name: 'Produits Grand Public',      value: 14.021 },
          { name: 'Luxe',                       value: 14.638 },
          { name: 'Beauté Dermatologique',      value: 5.125  },
        ]
      },
      { year: 2023, segments: [
          { name: 'Produits Professionnels',    value: 4.654  },
          { name: 'Produits Grand Public',      value: 15.173 },
          { name: 'Luxe',                       value: 14.924 },
          { name: 'Beauté Dermatologique',      value: 6.432  },
        ]
      },
      { year: 2024, segments: [
          { name: 'Produits Professionnels',    value: 4.886  },
          { name: 'Produits Grand Public',      value: 15.982 },
          { name: 'Luxe',                       value: 15.591 },
          { name: 'Beauté Dermatologique',      value: 7.027  },
        ]
      },
      { year: 2025, segments: [
          { name: 'Produits Professionnels',    value: 5.163  },
          { name: 'Produits Grand Public',      value: 16.090 },
          { name: 'Luxe',                       value: 15.595 },
          { name: 'Beauté Dermatologique',      value: 7.204  },
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
            { year: 2021, value: 29.8 },
            { year: 2022, value: 20.3 },
            { year: 2023, value: 25.0 },
            { year: 2024, value: 17.8 },
            { year: 2025, value: 18.5 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 22.3},
                { year: 2022, value: 22.3},
                { year: 2023, value: 22.3},
                { year: 2024, value: 22.3},
                { year: 2025, value: 22.3},
              ],
            }   
          ]
        },
        {
        label: 'FCF_OCF_Capex',
        name:  'Opérating Cash Flow',
        unit:  'Mds €',
        yMin:  0,
        data: [
          { year: 2021, value: 6.728 },
          { year: 2022, value: 6.278 },
          { year: 2023, value: 7.605 },
          { year: 2024, value: 8.286 },
          { year: 2025, value: 8.657 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 5.653 },
              { year: 2022, value: 4.935 },
              { year: 2023, value: 6.116 },
              { year: 2024, value: 6.644 },
              { year: 2025, value: 7.162 },
            ],
          },
          {
            name:  'Capex',
            color: '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 1.075 },
              { year: 2022, value: 1.343 },
              { year: 2023, value: 1.489 },
              { year: 2024, value: 1.642 },
              { year: 2025, value: 1.495 },
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
            { year: 2021, value: 0.45 },
            { year: 2022, value: 0.34 },
            { year: 2023, value: 0.45 },
            { year: 2024, value: 0.42 },
            { year: 2025, value: 0.19 },
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
          label: 'CR',
          name:  'Current Ratio',
          unit:  'x',
          data: [
            { year: 2021, value: 0.73 },
            { year: 2022, value: 1.02 },
            { year: 2023, value: 1.10 },
            { year: 2024, value: 1.13 },
            { year: 2025, value: 1.44 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 1.08 },
                { year: 2022, value: 1.08 },
                { year: 2023, value: 1.08 },
                { year: 2024, value: 1.08 },
                { year: 2025, value: 1.08 },
              ],
            }   
          ]
        },
        {
          label: 'DSO',
          name:  'Days Sales Oustanding',
          unit:  'J',
          data: [
            { year: 2021, value: 45 },
            { year: 2022, value: 45 },
            { year: 2023, value: 45 },
            { year: 2024, value: 47 },
            { year: 2025, value: 46 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 46 },
                { year: 2022, value: 46 },
                { year: 2023, value: 46 },
                { year: 2024, value: 46 },
                { year: 2025, value: 46 },
              ],
            }   
          ]
        },
        {
          label: 'DIO',
          name:  'Days Inventory Oustanding',
          unit:  'J',
          data: [
            { year: 2021, value: 137 },
            { year: 2022, value: 141 },
            { year: 2023, value: 152 },
            { year: 2024, value: 151 },
            { year: 2025, value: 147 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 145 },
                { year: 2022, value: 145 },
                { year: 2023, value: 145 },
                { year: 2024, value: 145 },
                { year: 2025, value: 145 },
              ],
            }   
          ]
        },
        {
          label: 'DPO',
          name:  'Days Payable Oustanding',
          unit:  'J',
          data: [
            { year: 2021, value: 263 },
            { year: 2022, value: 219 },
            { year: 2023, value: 215 },
            { year: 2024, value: 210 },
            { year: 2025, value: 217 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 225 },
                { year: 2022, value: 225 },
                { year: 2023, value: 225 },
                { year: 2024, value: 225 },
                { year: 2025, value: 225 },
              ],
            }   
          ]
        },
        {
          label: 'CCC',
          name:  'Cash Conversion Cycle',
          unit:  'J',
          data: [
            { year: 2021, value: -80 },
            { year: 2022, value: -33 },
            { year: 2023, value: -18 },
            { year: 2024, value: -13 },
            { year: 2025, value: -25 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: -34 },
                { year: 2022, value: -34 },
                { year: 2023, value: -34 },
                { year: 2024, value: -34 },
                { year: 2025, value: -34 },
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
            { year: 2021, value: 0.75 },
            { year: 2022, value: 0.82 },
            { year: 2023, value: 0.79 },
            { year: 2024, value: 0.77 },
            { year: 2025, value: 0.71 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 0.77 },
                { year: 2022, value: 0.77 },
                { year: 2023, value: 0.77 },
                { year: 2024, value: 0.77 },
                { year: 2025, value: 0.77 },
              ],
            }   
          ]
        },
        {
          label: 'Dilution',
          name:  'Dilution / Concentration',
          unit:  '%',
          yMin: 2.0,
          data: [
            { year: 2022, value: 4   },
            { year: 2023, value: 0.1 },
            { year: 2024, value: 0.2 },
            { year: 2025, value: 0.1 },
          ],
        },
        {
          label: 'Payout',
          name:  'Payout Ratio',
          unit:  '%',
          data: [
            { year: 2021, value: 51.1 },
            { year: 2022, value: 47.1 },
            { year: 2023, value: 55.3 },
            { year: 2024, value: 56.3 },
            { year: 2025, value: 63.9 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 54.7 },
                { year: 2022, value: 54.7 },
                { year: 2023, value: 54.7 },
                { year: 2024, value: 54.7 },
                { year: 2025, value: 54.7 },
              ], 
            },
          ]
        },  
        {
        label: 'Capex_Action',
        name:  'Dividendes',
        unit:  'Mds €',
        yMin:  0,
        data: [
            { year: 2021, value: 2.352 },
            { year: 2022, value: 2.690 },
            { year: 2023, value: 3.426 },
            { year: 2024, value: 3.615 },
            { year: 2025, value: 3.917 },
        ],
        competitors: [
          {
            name:  'Rachat d\'action',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 10.061 },
              { year: 2022, value: 0.502 },
              { year: 2023, value: 0.503 },
              { year: 2024, value: 0.498 },
              { year: 2025, value: 0.502 },
            ],
          },
          {
            name:  'Capex',
            color: '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 1.075 },
              { year: 2022, value: 1.343 },
              { year: 2023, value: 1.489 },
              { year: 2024, value: 1.642 },
              { year: 2025, value: 1.495 },
            ],
          },
        ]        
        },
        {
          label: 'EPS',
          name:  'EPS',
          unit:  '€',
          data: [
            { year: 2021, value: 8.21 },
            { year: 2022, value: 10.61 },
            { year: 2023, value: 11.52 },
            { year: 2024, value: 11.95 },
            { year: 2025, value: 11.44 },
          ],
        },
        {
          label: 'Dividendes',
          name:  'Dividendes annuelle',
          unit:  '€',
          data: [
            { year: 2021, value: 4.80 },
            { year: 2022, value: 6.00 },
            { year: 2023, value: 6.60 },
            { year: 2024, value: 7.00 },
            { year: 2025, value: 7.20 },
          ],
        },
        {
          label: 'ROCE',
          name:  'ROCE',
          unit:  '%',
          yMin:  0,
          data: [
            { year: 2021, value: 24.8 },
            { year: 2022, value: 23.7 },
            { year: 2023, value: 23.1 },
            { year: 2024, value: 21.8 },
            { year: 2025, value: 20.0 },
          ],
          competitors: [
            {
              name:  'ROIC',
              color: '#2D6A4F',
              data: [
                { year: 2021, value: 17.2 },
                { year: 2022, value: 18.5 },
                { year: 2023, value: 18.8 },
                { year: 2024, value: 17.6 },
                { year: 2025, value: 17.3 },
              ],
            },
            {
              name:  'ROIIC',
              color: '#78716C',
              dashed: true,
              data: [
                { year: 2022, value: -49.9 },
                { year: 2023, value: 23.18 },
                { year: 2024, value: 9.52 },
                { year: 2025, value: -4.7 },
              ],
            },
          ],
        },
        {
          label: 'ROIIC',
          name:  'ROIIC',
          unit:  '%',
          data: [
            { year: 1, value: -4.7 },
            { year: 2, value: 1.6 },
            { year: 3, value: 7.9 },
            { year: 4, value: 20.2 },
          ],
        },
        {
          label: 'PER',
          name:  'PER',
          unit:  'x',
          data: [
                { year: 2021, value: 50.7 },
                { year: 2022, value: 31.4 },
                { year: 2023, value: 39.1 },
                { year: 2024, value: 28.6 },
                { year: 2025, value: 32.0 },
          ],
          competitors: [
            {
              name:  'PER historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 36.4 },
                { year: 2022, value: 36.4 },
                { year: 2023, value: 36.4 },
                { year: 2024, value: 36.4 },
                { year: 2025, value: 36.4 },
              ],
            },
            {
              name:  'PER historique ajusté',
              color: '#52B788',
              dashed: true,
              data: [
                { year: 2021, value: 56.2 },
                { year: 2022, value: 30.0 },
                { year: 2023, value: 39.0 },
                { year: 2024, value: 27.7 },
                { year: 2025, value: 29.8 },
              ],
            }      
          ]
        },
        {
          label: 'FCFy',
          name:  'Free-Cash-Flow Yield',
          unit:  '%',
          data: [
            { year: 2021, value: 2.39 },
            { year: 2022, value: 2.71 },
            { year: 2023, value: 2.48 },
            { year: 2024, value: 3.54 },
            { year: 2025, value: 3.61 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 2.94 },
                { year: 2022, value: 2.94 },
                { year: 2023, value: 2.94 },
                { year: 2024, value: 2.94 },
                { year: 2025, value: 2.94 },
              ],
            },
           {
              name:  'Bunds 10 ans',
              color: '#52B788',
              data: [
                { year: 2021, value: -0.179 },
                { year: 2022, value: 2.565 },
                { year: 2023, value: 2.028 },
                { year: 2024, value: 2.362 },
                { year: 2025, value: 2.862 },
              ],
            },  
          ]
        },
    ],
        valuationCompare: [
      { label: 'PER',                  valeur: 31.34,  concurrent1 : 19.32, concurrent3 : 22.12  },
      { label: 'P/FCF',                valeur: 26.8, concurrent1 : 18.9, concurrent2 : 39.2, concurrent3 : 16.9  },
      { label: 'EV/EBITDA',            valeur: 19.57, concurrent1 : 14.05, concurrent2 : 14.78,  concurrent3 : 12.86  },
      { label: 'Marge opérationnelle', valeur: 19.2, concurrent1 : 20.1, concurrent2 : 14.3, concurrent3 : 21.2  },
      { label: 'ROIC',                 valeur: 12.5, concurrent1 : 12.7, concurrent2 : 8.3, concurrent3 : 10.4  },
    ],
        valuationCompare2: [
      { label: 'PER',                  valeur: 31.34,   secteur: 21.5  },
      { label: 'P/FCF',                valeur: 26.8,    secteur: 18.6  },
      { label: 'EV/EBITDA',            valeur: 19.57,   secteur: 12.6  },
      { label: 'Marge opérationnelle', valeur: 19.2,    secteur: 17.8  },
      { label: 'ROIC',                 valeur: 12.5,    secteur: 10.4  },
    ],
  

    // ── CA par segment (optionnel) ────────────────────────────
    // Composant MDX : <SegmentGraph unit="Md€" />
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