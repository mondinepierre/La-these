import type { AnalyseCard } from '@/types/analyses'

export const asml: AnalyseCard = {
  slug:           'asml',
  type:           'valeur',
  title:          'ASML Holding',
  ticker:         'ASML',
  secteur:        'Technologie',
  geo:            'Europe',
  conviction:     'exceptionnelle',
  positionnement: 'surveillance',
  lastUpdated:    '2026-04-17',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '5 ans',
  excerpt:        "Le monopole absolu de la lithographie EUV, en position de fournisseur irremplaçable de toute la chaîne des semi-conducteurs, entre normalisation du cycle de commandes et montée en puissance des machines High-NA.",
  glossaire: [
    'lithographie-euv',
    'semi-conducteurs',
    'high-na',
    'moat',
    'pricing-power',
    'marge-de-securite',
  ],
  readingTime:    35,
    onePager: {
    thesis:    "Le monopole physique de la lithographie — sans ASML, pas de puce avancée.",
    cours:     1311.2,
    coursDate: '2026-05-15',
    devise:    'EUR',
    range52w:  { low: 587, high: 1371 },   // À vérifier / mettre à jour
  },
  logo:          '/analyse/ASML.png',
  prixCible: {
    bas:    1532,
    haut:   2228,
    devise: 'EUR',
  },

  marginOfSafety: 'négative',

metrics: {
    per:               37.3,
    evEbitda:          29.1,
    fcfYield:          3.09,
    roic:              47.5,
    wacc:              8,
    detteEbitda:       -0.69,  // négatif = trésorerie nette
    croissanceCA3ans:  15.6,
    croissanceBPA3ans: 20.5,
    margeEbit:         34.6,
    margeBrute:        52.8,
    payoutRatio:       26.5,
    currentRatio:      1.26,
    dso:               34,
  },

  tendances: {
    per:       'hausse',  // hausse | stable | baisse
    fcfYield:  'baisse',
    roic:      'hausse',
    margeEbit: 'hausse',
  },

updates: [
  {
    date: '2026-04-17',
    note: 'Mise à jour Q1 2026. Résultats dans la guidance. 2 EXE livrés, High-NA à 500k wafers et disponibilité >80%. Guidance FY2026 relevée : 36-40 Md€. Thèse confirmée, métriques FY2025 maintenues en attente de recalcul TTM complet.',
  },
  {
    date: '2026-04-15',
    note: 'Refonte complète de la fiche. Publication initiale insuffisante.',
  },
],

  chartData: {
    // ── CA sur 5 ans ──────────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 18.611 },
      { year: 2022, value: 21.173 },
      { year: 2023, value: 27.558 },
      { year: 2024, value: 28.262 },
      { year: 2025, value: 32.667 },
    ],

    // ── Répartition géographique du CA ────────────────────────────────────
    // Régions disponibles : voir REGION_TO_CODES dans GeoRevenueMap.tsx
    geoRevenue: [
      { region: 'Japon',            pct: 4.35 },
      { region: 'Corée du Sud',     pct: 24.98 },
      { region: 'Singapour',        pct: 1.86 },
      { region: 'Taïwan',           pct: 25.52 },
      { region: 'Chine',            pct: 29.14 },
      { region: "Reste de l'Asie",  pct: 0.01 },
      { region: 'Pays-Bas',         pct: 0.01 },
      { region: 'EMEA',             pct: 1.60 },
      { region: 'États-Unis',       pct: 12.52 },
    ],

    // ── Marges sur 5 ans ──────────────────────────────────────────────────
    marges: [
      { year: 2021, gross: 52.7, operating: 36.3, net: 31.6 },
      { year: 2022, gross: 50.5, operating: 30.7, net: 26.6 },
      { year: 2023, gross: 51.3, operating: 32.8, net: 28.4 },
      { year: 2024, gross: 51.3, operating: 31.9, net: 26.8 },
      { year: 2025, gross: 52.8, operating: 34.6, net: 29.4 },
    ],

    // ── ROIC simple sur 5 ans ─────────────────────────────────────────────
    roic: [
      { year: 2021, value: 56.4 },
      { year: 2022, value: 62.7 },
      { year: 2023, value: 56.6 },
      { year: 2024, value: 39.8 },
      { year: 2025, value: 47.5 },
    ],

    // ── ROIC vs WACC ──────────────────────────────────────────────────────
    roicVsWacc: [
      { year: 2021, value: 56.4, wacc: 5.8 },
      { year: 2022, value: 62.7, wacc: 11 },
      { year: 2023, value: 56.6, wacc: 7 },
      { year: 2024, value: 39.8, wacc: 8.4 },
      { year: 2025, value: 47.5, wacc: 8 },
    ],

    // ── Free Cash Flow sur 5 ans ──────────────────────────────────────────
    fcf: [
      { year: 2021, value: 9.945 },
      { year: 2022, value: 7.205 },
      { year: 2023, value: 3.288 },
      { year: 2024, value: 9.099 },
      { year: 2025, value: 11.085 },
    ],

    // ── CA par segment (optionnel) ────────────────────────────────────────
    // Décommenter si l'entreprise publie une ventilation par division
    segmentRevenue: {
      unit: 'Md€',
      total: { show: false, label: 'CA' },
      data: [
        { year: 2021, segments: [
          { name: 'EUV',                              value: 6.284 },
          { name: 'DUV',                              value: 6.855 },
          { name: 'Metrology & Inspection',           value: 0.513 },
          { name: 'Service and field option sales',   value: 4.958 },
        ]},
        { year: 2022, segments: [
          { name: 'EUV',                              value: 7.045 },
          { name: 'DUV',                              value: 7.724 },
          { name: 'Metrology & Inspection',           value: 0.659 },
          { name: 'Service and field option sales',   value: 5.743 },
        ]},
        { year: 2023, segments: [
          { name: 'EUV',                              value: 9.124 },
          { name: 'DUV',                              value: 12.278 },
          { name: 'Metrology & Inspection',           value: 0.536 },
          { name: 'Service and field option sales',   value: 5.619 },
        ]},
        { year: 2024, segments: [
          { name: 'EUV',                              value: 8.321 },
          { name: 'DUV',                              value: 12.801 },
          { name: 'Metrology & Inspection',           value: 0.645 },
          { name: 'Service and field option sales',   value: 6.494 },
        ]},
        { year: 2025, segments: [
          { name: 'EUV',                              value: 11.602 },
          { name: 'DUV',                              value: 12.047 },
          { name: 'Metrology & Inspection',           value: 0.824 },
          { name: 'Service and field option sales',   value: 8.193 },
        ]},
      ],
    },

    // ── Comparaison valorisation ──────────────────────────────────────────
    // Composants : <ValuationChart_vs_secteur /> <ValuationChart_vs_pairs />
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - ASML vs secteur semi-conducteurs',
        data: [
          { label: 'PER',                  valeur: 53.05, secteur: 50.55 },
          { label: 'P/FCF',                valeur: 45.50, secteur: 50.16 },
          { label: 'EV/EBITDA',            valeur: 40.26, secteur: 39.42 },
          { label: 'Marge opérationnelle', valeur: 34.58, secteur: 21.25 },
          { label: 'ROIC',                 valeur: 41.08, secteur: 6.48  },
        ],
      },
      {
        id: 'vs_pairs', type: 'radar',
        title: 'Valorisation comparée - ASML vs pairs directs',
        concurrent1: 'Applied Materials', concurrent2: 'KLA Corp',
        data: [
          { label: 'PER',                  valeur: 53.05, concurrent1: 40.10, concurrent2: 50.55 },
          { label: 'P/FCF',                valeur: 45.50, concurrent1: 50.16, concurrent2: 52.10 },
          { label: 'EV/EBITDA',            valeur: 40.26, concurrent1: 34.96, concurrent2: 39.42 },
          { label: 'Marge opérationnelle', valeur: 34.58, concurrent1: 29.74, concurrent2: 42.54 },
          { label: 'ROIC',                 valeur: 41.08, concurrent1: 27.31, concurrent2: 39.55 },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────
    // Composant : <MetricGraph_LABEL /> — LABEL = champ label ci-dessous
    metricHistory: [
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 40.2 },
          { year: 2022, value: 28.3 },
          { year: 2023, value: 27.5 },
          { year: 2024, value: 26.9 },
          { year: 2025, value: 29.1 },
        ],
        competitors: [
          {
            name:  'Moyenne historique (5ans)',
            color: '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 30.4 },
              { year: 2022, value: 30.4 },
              { year: 2023, value: 30.4 },
              { year: 2024, value: 30.4 },
              { year: 2025, value: 30.4 },
            ],
          }   
        ]
      },
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 37.6 },
          { year: 2022, value: 35.5 },
          { year: 2023, value: 38.2 },
          { year: 2024, value: 31.6 },
          { year: 2025, value: 43.0 },
        ],
        competitors: [
          {
            name:  'ROIC',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 56.4 },
              { year: 2022, value: 62.7 },
              { year: 2023, value: 56.6 },
              { year: 2024, value: 39.8 },
              { year: 2025, value: 47.5 },
            ],
          },
          {
            name:  'WACC',
            color: '#C9A84C',
            dashed : true,
            data: [
              { year: 2021, value: 5.8  },
              { year: 2022, value: 11   },
              { year: 2023, value: 7    },
              { year: 2024, value: 8.4  },
              { year: 2025, value: 8    },
            ],
          },
        ],
      },
      {
          label: 'ROIIC_YoY',
          name:  'ROIIC',
          unit:  '%',
          data: [
              { year: 2022, value: 5.31     },
              { year: 2023, value: -157.08  },
              { year: 2024, value: -5.76    },
              { year: 2025, value: 39       },
          ],
      },
      {
          label: 'ROIIC',
          name:  'ROIIC',
          unit:  '%',
          data: [
            { year: 1, value: 39 },
            { year: 2, value: 17.5 },
            { year: 3, value: 45.4 },
            { year: 4, value: 77.7 },
          ],
      },
      {
        label: 'FCF_OCF_Capex',
        name:  'Operating Cash Flow',
        unit:  'Md€',
        yMin:  0,
        data: [
          { year: 2021, value: 10.845 },
          { year: 2022, value: 8.486 },
          { year: 2023, value: 5.443 },
          { year: 2024, value: 11.166 },
          { year: 2025, value: 12.658 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 9.945 },
              { year: 2022, value: 7.205 },
              { year: 2023, value: 3.288 },
              { year: 2024, value: 9.099 },
              { year: 2025, value: 11.085 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 0.9 },
              { year: 2022, value: 1.281 },
              { year: 2023, value: 2.155 },
              { year: 2024, value: 2.067 },
              { year: 2025, value: 1.573 },
            ],
          },
        ],
      },
      {
        label: 'Capex_Action',
        name:  'Dividendes',
        unit:  'Mds €',
        yMin:  0,
        data: [
            { year: 2021, value: 1.368 },
            { year: 2022, value: 2.559 },
            { year: 2023, value: 2.348 },
            { year: 2024, value: 2.452 },
            { year: 2025, value: 2.550 },
        ],
        competitors: [
          {
            name:  'Rachat d\'action',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 8.560 },
              { year: 2022, value: 4.639 },
              { year: 2023, value: 1.000 },
              { year: 2024, value: 0.500 },
              { year: 2025, value: 5.950 },
            ],
          },
          {
            name:  'Capex',
            color: '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 0.9 },
              { year: 2022, value: 1.281 },
              { year: 2023, value: 2.155 },
              { year: 2024, value: 2.067 },
              { year: 2025, value: 1.573 },
            ],
          },
        ]        
        },
      {
        label: 'EPS',
        name:  'Diluted EPS',
        unit:  '€',
        data: [
          { year: 2021, value: 14.34 },
          { year: 2022, value: 14.13 },
          { year: 2023, value: 19.89 },
          { year: 2024, value: 19.24 },
          { year: 2025, value: 24.71 },
        ],
      },
      {
        label: 'Dividendes',
        name:  'Dividende annuel',
        unit:  '€',
        data: [
          { year: 2021, value: 5.5 },
          { year: 2022, value: 5.8 },
          { year: 2023, value: 6.1 },
          { year: 2024, value: 6.4 },
          { year: 2025, value: 7.5 },
        ],
      },
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 49.3 },
          { year: 2022, value: 35.7 },
          { year: 2023, value: 34.3 },
          { year: 2024, value: 35.3 },
          { year: 2025, value: 37.3 },
        ],
        competitors: [
          {
            name:   'PER historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 38.4 },
              { year: 2022, value: 38.4 },
              { year: 2023, value: 38.4 },
              { year: 2024, value: 38.4 },
              { year: 2025, value: 38.4 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 54.7 },
              { year: 2022, value: 34.2 },
              { year: 2023, value: 34.2 },
              { year: 2024, value: 34.4 },
              { year: 2025, value: 35.1 },
            ],
          },
        ],
      },
      {
        label: 'FCFy',
        name:  'Free-Cash-Flow Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 3.43 },
          { year: 2022, value: 3.59 },
          { year: 2023, value: 1.22 },
          { year: 2024, value: 3.41 },
          { year: 2025, value: 3.09 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.95 },
              { year: 2022, value: 2.95 },
              { year: 2023, value: 2.95 },
              { year: 2024, value: 2.95 },
              { year: 2025, value: 2.95 },
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
        ],
      },
      {
          label: 'DETTE_EBITDA',
          name:  'Dette nette / EBITDA',
          unit:  'x',
          yMin: 0.15,
          data: [
            { year: 2021, value: -0.33 },
            { year: 2022, value: -0.42 },
            { year: 2023, value: -0.24 },
            { year: 2024, value: -0.81 },
            { year: 2025, value: -0.69 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: -0.50 },
                { year: 2022, value: -0.50 },
                { year: 2023, value: -0.50 },
                { year: 2024, value: -0.50 },
                { year: 2025, value: -0.50 },
              ],
            }   
          ]
        },
        {
          label: 'CR',
          name:  'Current Ratio',
          unit:  'x',
          data: [
            { year: 2021, value: 1.48 },
            { year: 2022, value: 1.28 },
            { year: 2023, value: 1.50 },
            { year: 2024, value: 1.53 },
            { year: 2025, value: 1.26 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 1.41 },
                { year: 2022, value: 1.41 },
                { year: 2023, value: 1.41 },
                { year: 2024, value: 1.41 },
                { year: 2025, value: 1.41 },
              ],
            }   
          ]
        },
         {
          label: 'DSO',
          name:  'Days Sales Oustanding',
          unit:  'J',
          data: [
            { year: 2021, value: 59 },
            { year: 2022, value: 92 },
            { year: 2023, value: 57 },
            { year: 2024, value: 58 },
            { year: 2025, value: 34 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 60 },
                { year: 2022, value: 60 },
                { year: 2023, value: 60 },
                { year: 2024, value: 60 },
                { year: 2025, value: 60 },
              ],
            }   
          ]
        },
        {
          label: 'DIO',
          name:  'Days Inventory Oustanding',
          unit:  'J',
          data: [
            { year: 2021, value: 215 },
            { year: 2022, value: 251 },
            { year: 2023, value: 241 },
            { year: 2024, value: 289 },
            { year: 2025, value: 271 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 253 },
                { year: 2022, value: 253 },
                { year: 2023, value: 253 },
                { year: 2024, value: 253 },
                { year: 2025, value: 253 },
              ],
            }   
          ]
        },
        {
          label: 'DPO',
          name:  'Days Payable Oustanding',
          unit:  'J',
          data: [
            { year: 2021, value: 88 },
            { year: 2022, value: 89 },
            { year: 2023, value: 64 },
            { year: 2024, value: 93 },
            { year: 2025, value: 83 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 83 },
                { year: 2022, value: 83 },
                { year: 2023, value: 83 },
                { year: 2024, value: 83 },
                { year: 2025, value: 83 },
              ],
            }   
          ]
        },
        {
          label: 'CCC',
          name:  'Cash Conversion Cycle',
          unit:  'J',
          data: [
            { year: 2021, value: 186 },
            { year: 2022, value: 253 },
            { year: 2023, value: 234 },
            { year: 2024, value: 254 },
            { year: 2025, value: 221 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 230 },
                { year: 2022, value: 230 },
                { year: 2023, value: 230 },
                { year: 2024, value: 230 },
                { year: 2025, value: 230 },
              ],
            }   
          ]
        },
        {
          label: 'CCC_resume',
          name:  'Days Sales Oustanding',
          unit:  'J',
          heightMultiplier : 1.5,
          yMin: 0,
          data: [
            { year: 2021, value: 59 },
            { year: 2022, value: 92 },
            { year: 2023, value: 57 },
            { year: 2024, value: 58 },
            { year: 2025, value: 34 },
          ],
          competitors: [
            {
              name:  'Days Inventory Oustanding',
              color: '#2D6A4F',
              data: [
                { year: 2021, value: 215 },
                { year: 2022, value: 251 },
                { year: 2023, value: 241 },
                { year: 2024, value: 289 },
                { year: 2025, value: 271 },
              ],
            },
            {
              name:  'Days Payable Oustanding',
              color: '#77bd92',
              data: [
                { year: 2021, value: 88 },
                { year: 2022, value: 89 },
                { year: 2023, value: 64 },
                { year: 2024, value: 93 },
                { year: 2025, value: 83 },
              ],
            },
            { name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 186 },
              { year: 2022, value: 253 },
              { year: 2023, value: 234 },
              { year: 2024, value: 254 },
              { year: 2025, value: 221 },
            ],
          },
          {
              name:  'Moyenne historique CCC (5ans)',
              color: '#917939',
              dashed: true,
              data: [
                { year: 2021, value: 230 },
                { year: 2022, value: 230 },
                { year: 2023, value: 230 },
                { year: 2024, value: 230 },
                { year: 2025, value: 230 },
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
            { year: 2021, value: 0.62 },
            { year: 2022, value: 0.58 },
            { year: 2023, value: 0.69 },
            { year: 2024, value: 0.58 },
            { year: 2025, value: 0.65 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 0.62 },
                { year: 2022, value: 0.62 },
                { year: 2023, value: 0.62 },
                { year: 2024, value: 0.62 },
                { year: 2025, value: 0.62 },
              ],
            }   
          ]
        },
        {
          label: 'Dilution',
          name:  'Dilution / Concentration',
          unit:  '%',
          yMin: 0,
          data: [
            { year: 2022, value: 3   },
            { year: 2023, value: 1 },
            { year: 2024, value: 0.1 },
            { year: 2025, value: 1.2 },
          ],
        },
        {
          label: 'Payout',
          name:  'Payout Ratio',
          unit:  '%',
          data: [
            { year: 2021, value: 23.3 },
            { year: 2022, value: 45.5 },
            { year: 2023, value: 30.0 },
            { year: 2024, value: 32.4 },
            { year: 2025, value: 26.5 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 31.5 },
                { year: 2022, value: 31.5 },
                { year: 2023, value: 31.5 },
                { year: 2024, value: 31.5 },
                { year: 2025, value: 31.5 },
              ], 
            },
          ]
        },  
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE — Analyse ponctuelle (rappel)
// ─────────────────────────────────────────────────────────────────────────────

// export const SLUG_PONCTUELLE: AnalyseCard = {
//   slug:    '',
//   type:    'ponctuelle',
//   title:   '',
//   date:    '2026-01-01',
//   ticker:  '',
//   secteur: 'Technologie',
//   geo:     'États-Unis',
//   statut:  'en-construction',
//   excerpt: '',
// }