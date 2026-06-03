// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE v2 — Valeur suivie
// Copier ce fichier, renommer en [ticker].ts, compléter les champs.
// NE PAS importer dans index.ts tant que la fiche n'est pas prête.
// ─────────────────────────────────────────────────────────────────────────────
//
// SOURCES PAR INDICATEUR
//   per, evEbitda, fcfYield, margeEbit, margeBrute → Yahoo Finance / Finviz
//   roic          → Calcul manuel : NOPAT / (CP + max(dette nette, 0) + goodwill)
//   wacc          → GuruFocus
//   detteEbitda   → Yahoo Finance Statistics — négatif = trésorerie nette
//   croissanceCA3ans / croissanceBPA3ans → calcul manuel TCAC sur 3 ans
//   currentRatio  → Bilan : actif courant / passif courant
//   dso           → (Créances clients / CA) × 365
//   payoutRatio   → Dividende total / Résultat net
//
// GRAPHIQUES DISPONIBLES DANS LE MDX
//   <RevenueGraph />             → chartData.revenue
//   <MargesGraph />              → chartData.marges
//   <RoicGraph />                → chartData.roic
//   <RoicWacc />                 → chartData.roicVsWacc
//   <FcfGraph />                 → chartData.fcf
//   <GeoMap />                   → chartData.geoRevenue
//   <SegmentGraph unit="..." />  → chartData.segmentRevenue   (décommenter si pertinent)
//   <ValuationBar name="..." />  → chartData.valuationCompare  (pairs directs)
//   <ValuationBar2 name="..." /> → chartData.valuationCompare2 (vs moyenne secteur)
//   <MetricGraph_LABEL />        → chartData.metricHistory — LABEL = label sans tirets ni /
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const novo: AnalyseCard = {
  slug:           'novo',                  // URL : /analyses/[slug]
  type:           'valeur',
  title:          'Novo Nordisk A/S',
  ticker:         'NOVO-B.CO',
  secteur:        'Santé',
  geo:            'Danemark',
  conviction:     'moyenne',
  positionnement: 'accumulation',
  lastUpdated:    '2026-04-20',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '2031',
  excerpt:        'Le géant danois du GLP-1, entre transition obésité et compression des multiples, dans un marché mondial à 2 % de pénétration.',
  glossaire:      ['glp-1', 'pbm', 'pipeline-pharma', 'marge-de-securite', 'moat', 'multiple-de-valorisation'],
  logo:           '/analyse/Novo_Nordisk.png',
  prixCible:      { bas: 653, haut: 738, devise: 'DKK' },
  marginOfSafety: 'correcte',
  readingTime:    60,
   onePager: {
    thesis:    "Pharma GLP-1, ROIC 34 %, pricee pour 2026 a PER 10. Oral ouvert US + Europe, CagriSema FDA : la these se joue sur 2027.",
    cours:     293,
    coursDate: '2026-05-28',
    devise:    'DKK',
    range52w:  { low: 224, high: 533 },
  },

  metrics: {
    per:               14.1,
    evEbitda:          10.4,
    fcfYield:          3.8,
    roic:              33.6,
    wacc:              7.2,
    detteEbitda:       0.7,  // négatif = trésorerie nette
    croissanceCA3ans:  20.4,
    croissanceBPA3ans: 23.53,
    margeEbit:         41.3,
    margeBrute:        81,
    payoutRatio:       50.5,
    currentRatio:      0.8,
    dso:               84,
  },

  tendances: {
    per:       'baisse',  // hausse | stable | baisse
    fcfYield:  'hausse',
    roic:      'baisse',
    margeEbit: 'baisse',
  },

  updates: [
    {
      date: '2026-04-20',
      note: 'Mise à jour.',
    },
  ],

  chartData: {
    // ── CA sur 5 ans ──────────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 140.8 },
      { year: 2022, value: 176.954 },
      { year: 2023, value: 232.261 },
      { year: 2024, value: 290.403 },
      { year: 2025, value: 309.064 },
    ],

    // ── Répartition géographique du CA ────────────────────────────────────
    // Régions disponibles : voir REGION_TO_CODES dans GeoRevenueMap.tsx
    geoRevenue: [
      { region: 'États-Unis',             pct: 56.03 },
      { region: 'Europe et Canada',       pct: 21.38 },
      { region: 'Marchés émergents',       pct: 9.85 },
      { region: 'Asie et Pacifique',      pct: 6.70 },
      { region: 'Chine',                  pct: 6.04 },
    ],

    // ── Marges sur 5 ans ──────────────────────────────────────────────────
    marges: [
      { year: 2021, gross: 83.2, operating: 41.7, net: 33.9 },
      { year: 2022, gross: 83.9, operating: 42.3, net: 31.4 },
      { year: 2023, gross: 84.6, operating: 44.2, net: 36.0 },
      { year: 2024, gross: 84.7, operating: 44.2, net: 34.8 },
      { year: 2025, gross: 81.0, operating: 41.3, net: 33.1 },
    ],

    // ── ROIC simple sur 5 ans ─────────────────────────────────────────────
    roic: [
      { year: 2021, value: 54.7 },
      { year: 2022, value: 62.3 },
      { year: 2023, value: 68.8 },
      { year: 2024, value: 44.2 },
      { year: 2025, value: 33.6 },
    ],

    // ── ROIC vs WACC ──────────────────────────────────────────────────────
    roicVsWacc: [
      { year: 2021, value: 54.7, wacc: 3.2 },
      { year: 2022, value: 62.3, wacc: 5.7 },
      { year: 2023, value: 68.8, wacc: 4.5 },
      { year: 2024, value: 44.2, wacc: 7.1 },
      { year: 2025, value: 33.6, wacc: 7.2 },
    ],

    // ── Free Cash Flow sur 5 ans ──────────────────────────────────────────
    fcf: [
      { year: 2021, value: 48.665 },
      { year: 2022, value: 66.741 },
      { year: 2023, value: 83.102 },
      { year: 2024, value: 73.804 },
      { year: 2025, value: 58.962 },
    ],

    // ── CA par segment (optionnel) ────────────────────────────────────────
    // Décommenter si l'entreprise publie une ventilation par division
    segmentRevenue: {
      unit: 'Md DKK',
      total: { show: false, label: 'CA' },
      data: [
        { year: 2021, segments: [
          { name: 'Diabetes care', value: 113.197 },
          { name: 'Obesity care', value: 8.400 },
          { name: 'Rare disease', value: 19.203 },
        ]},
        { year: 2022, segments: [
          { name: 'Diabetes care', value: 139.548 },
          { name: 'Obesity care', value: 16.864 },
          { name: 'Rare disease', value: 20.541 },
        ]},
        { year: 2023, segments: [
          { name: 'Diabetes care', value: 173.466 },
          { name: 'Obesity care', value: 41.632 },
          { name: 'Rare disease', value: 17.163 },
        ]},
        { year: 2024, segments: [
          { name: 'Diabetes care', value: 206.618 },
          { name: 'Obesity care', value: 65.146 },
          { name: 'Rare disease', value: 18.639 },
        ]},
        { year: 2025, segments: [
          { name: 'Diabetes care', value: 207.109 },
          { name: 'Obesity care', value: 82.347 },
          { name: 'Rare disease', value: 19.608 },
        ]},
      ],
    },

    // ── Comparaison valorisation ──────────────────────────────────────────
    // Composants : <ValuationChart_vs_secteur /> <ValuationChart_vs_pairs />
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Novo Nordisk vs secteur fabricants de médicaments',
        data: [
          { label: 'PER',                  valeur: 11.68, secteur: 20.22 },
          { label: 'P/FCF',                valeur: 15.25, secteur: 15.79 },
          { label: 'EV/EBITDA',            valeur: 6.76,  secteur: 9.81  },
          { label: 'Marge opérationnelle', valeur: 41.17, secteur: 27.96 },
          { label: 'ROIC',                 valeur: 31.38, secteur: 13.33 },
        ],
      },
      {
        id: 'vs_pairs', type: 'radar',
        title: 'Valorisation comparée - Novo Nordisk vs pairs directs',
        concurrent1: 'Eli Lilly', concurrent2: 'Pfizer', concurrent3: 'AstraZeneca',
        data: [
          { label: 'PER',                  valeur: 11.68, concurrent1: 41.04, concurrent2: 20.34, concurrent3: 31.27 },
          { label: 'P/FCF',                valeur: 15.25, concurrent1: 97.62, concurrent2: 17.27, concurrent3: 26.12 },
          { label: 'EV/EBITDA',            valeur: 6.76,  concurrent1: 28.79, concurrent2: 8.75,  concurrent3: 17.66 },
          { label: 'Marge opérationnelle', valeur: 41.17, concurrent1: 45.56, concurrent2: 27.99, concurrent3: 23.16 },
          { label: 'ROIC',                 valeur: 31.38, concurrent1: 30.11, concurrent2: 5.15,  concurrent3: 13.66 },
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
          { year: 2021, value: 13.3 },
          { year: 2022, value: 13.1 },
          { year: 2023, value: 28.1 },
          { year: 2024, value: 19.5 },
          { year: 2025, value: 10.4 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 16.9 },
              { year: 2022, value: 16.9 },
              { year: 2023, value: 16.9 },
              { year: 2024, value: 16.9 },
              { year: 2025, value: 16.9 },
            ],
          },
        ],
      },
      {
        label: 'FCF_OCF_Capex',
        name:  'Operating Cash Flow',
        unit:  'Md DKK',
        yMin:  0,
        data: [
          { year: 2021, value: 55.000 },
          { year: 2022, value: 78.887 },
          { year: 2023, value: 108.908 },
          { year: 2024, value: 120.968 },
          { year: 2025, value: 119.102 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 48.665 },
              { year: 2022, value: 66.741 },
              { year: 2023, value: 83.102 },
              { year: 2024, value: 73.804 },
              { year: 2025, value: 58.962 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 6.335 },
              { year: 2022, value: 12.146 },
              { year: 2023, value: 25.806 },
              { year: 2024, value: 47.164 },
              { year: 2025, value: 60.140 },
            ],
          },
        ],
      },
      {
        label: 'EPS',
        name:  'EPS ajusté',
        unit:  ' DKK',
        data: [
          { year: 2021, value: 20.74 },
          { year: 2022, value: 24.44 },
          { year: 2023, value: 18.62 },
          { year: 2024, value: 22.63 },
          { year: 2025, value: 23.03 },
        ],
       competitors: [
          {
            name:  'EPS avec nombres d\'actions converties',
            color: '#2D6A4F',
            dashed : true,
            data: [
          { year: 2021, value: 10.37 },
          { year: 2022, value: 12.22 },
          { year: 2023, value: 18.62 },
          { year: 2024, value: 22.63 },
          { year: 2025, value: 23.03 },
            ],
          },
       ]
      },
              {
          label: 'CCC_resume',
          name:  'Days Sales Oustanding',
          unit:  'J',
          heightMultiplier : 1.5,
          yMin: 0,
          data: [
            { year: 2021, value: 105 },
            { year: 2022, value: 104 },
            { year: 2023, value: 102 },
            { year: 2024, value: 90 },
            { year: 2025, value: 84 },
          ],
          competitors: [
            {
              name:  'Days Inventory Oustanding',
              color: '#2D6A4F',
              data: [
                { year: 2021, value: 303 },
                { year: 2022, value: 313 },
                { year: 2023, value: 325 },
                { year: 2024, value: 335 },
                { year: 2025, value: 308 },
              ],
            },
            {
              name:  'Days Payable Oustanding',
              color: '#77bd92',
              data: [
                { year: 2021, value: 137 },
                { year: 2022, value: 200 },
                { year: 2023, value: 261 },
                { year: 2024, value: 141 },
                { year: 2025, value: 123 },
              ],
            },
            { name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 271 },
              { year: 2022, value: 217 },
              { year: 2023, value: 165 },
              { year: 2024, value: 285 },
              { year: 2025, value: 269 },
            ],
          },
          {
              name:  'Moyenne historique CCC (5ans)',
              color: '#917939',
              dashed: true,
              data: [
                { year: 2021, value: 241 },
                { year: 2022, value: 241 },
                { year: 2023, value: 241 },
                { year: 2024, value: 241 },
                { year: 2025, value: 241 },
              ],
            }   
          ]
        },
        {
          label: 'CR',
          name:  'Current Ratio',
          unit:  'x',
          data: [
            { year: 2021, value: 0.86 },
            { year: 2022, value: 0.89 },
            { year: 2023, value: 0.82 },
            { year: 2024, value: 0.74 },
            { year: 2025, value: 0.80 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 0.82 },
                { year: 2022, value: 0.82 },
                { year: 2023, value: 0.82 },
                { year: 2024, value: 0.82 },
                { year: 2025, value: 0.82 },
              ],
            }   
          ]
        },
         {
          label: 'DETTE_EBITDA',
          name:  'Dette nette / EBITDA',
          unit:  'x',
          yMin: 0.15,
          data: [
            { year: 2021, value: 0.25 },
            { year: 2022, value: 0.16 },
            { year: 2023, value: 0.11 },
            { year: 2024, value: 0.59 },
            { year: 2025, value: 0.70 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 0.36 },
                { year: 2022, value: 0.36 },
                { year: 2023, value: 0.36 },
                { year: 2024, value: 0.36 },
                { year: 2025, value: 0.36 },
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
            { year: 2022, value: 1.34 },
            { year: 2023, value: 1.1  },
            { year: 2024, value: 0.71 },
            { year: 2025, value: 0.34 },
          ],
        },
        {
          label: 'Payout',
          name:  'Payout Ratio',
          unit:  '%',
          data: [
            { year: 2021, value: 45.1 },
            { year: 2022, value: 45.6 },
            { year: 2023, value: 38.0 },
            { year: 2024, value: 43.7 },
            { year: 2025, value: 50.5 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 44.6 },
                { year: 2022, value: 44.6 },
                { year: 2023, value: 44.6 },
                { year: 2024, value: 44.6 },
                { year: 2025, value: 44.6 },
              ], 
            },
          ]
        }, 
      {
          label: 'AT',
          name:  'Asset turnover',
          unit:  'x',
          yMin: 0.25,
          data: [
            { year: 2021, value: 0.72 },
            { year: 2022, value: 0.73 },
            { year: 2023, value: 0.74 },
            { year: 2024, value: 0.62 },
            { year: 2025, value: 0.57 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 0.68 },
                { year: 2022, value: 0.68 },
                { year: 2023, value: 0.68 },
                { year: 2024, value: 0.68 },
                { year: 2025, value: 0.68 },
              ],
            }   
          ]
      },
      {
        label: 'Dividendes',
        name:  'Dividende annuel',
        unit:  ' DKK',
        data: [
          { year: 2021, value: 5.2 },
          { year: 2022, value: 6.2 },
          { year: 2023, value: 9.4 },
          { year: 2024, value: 11.4 },
          { year: 2025, value: 11.7 },
        ],
      },
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 61.7 },
          { year: 2022, value: 62.2 },
          { year: 2023, value: 70.8 },
          { year: 2024, value: 51.7 },
          { year: 2025, value: 39.0 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 3.2 },
              { year: 2022, value: 5.7 },
              { year: 2023, value: 4.5 },
              { year: 2024, value: 7.1 },
              { year: 2025, value: 7.2 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 54.7 },
              { year: 2022, value: 62.3 },
              { year: 2023, value: 68.8 },
              { year: 2024, value: 44.2 },
              { year: 2025, value: 33.6 },
            ],
          },
        ],
      },
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 17.7 },
          { year: 2022, value: 19.2 },
          { year: 2023, value: 37.5 },
          { year: 2024, value: 27.6 },
          { year: 2025, value: 14.1 },
        ],
        competitors: [
          {
            name:   'PER historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 23.2 },
              { year: 2022, value: 23.2 },
              { year: 2023, value: 23.2 },
              { year: 2024, value: 23.2 },
              { year: 2025, value: 23.2 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 23.2 },
              { year: 2022, value: 17.8 },
              { year: 2023, value: 37.4 },
              { year: 2024, value: 26.7 },
              { year: 2025, value: 12.0 },
            ],
          },
        ],
      },
      {
          label: 'ROIIC_YoY',
          name:  'ROIIC',
          unit:  '%',
          data: [
              { year: 2022, value: 54.57     },
              { year: 2023, value: 219.77  },
              { year: 2024, value: 88.20   },
              { year: 2025, value: -1.5       },
          ],
      },
      {
          label: 'ROIIC',
          name:  'ROIIC',
          unit:  '%',
          data: [
            { year: 1, value: -1.5 },
            { year: 2, value: 13.6 },
            { year: 3, value: 27.8 },
            { year: 4, value: 31.5 },
          ],
      },
      {
        label: 'Capex_Action',
        name:  'Dividendes',
        unit:  'Mds €',
        yMin:  0,
        data: [
            { year: 2021, value: 21.517 },
            { year: 2022, value: 25.303 },
            { year: 2023, value: 31.767 },
            { year: 2024, value: 44.140 },
            { year: 2025, value: 51.763 },
        ],
        competitors: [
          {
            name:  'Rachat d\'action',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 19.447 },
              { year: 2022, value: 24.086 },
              { year: 2023, value: 29.924 },
              { year: 2024, value: 20.181 },
              { year: 2025, value: 1.388 },
            ],
          },
          {
            name:  'Capex',
            color: '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 6.335 },
              { year: 2022, value: 12.146 },
              { year: 2023, value: 25.806 },
              { year: 2024, value: 47.164 },
              { year: 2025, value: 60.140 },
            ],
          },
        ]        
        },
      {
        label: 'FCFy',
        name:  'Free-Cash-Flow Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 5.64 },
          { year: 2022, value: 6.19 },
          { year: 2023, value: 2.64 },
          { year: 2024, value: 2.57 },
          { year: 2025, value: 3.80 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 4.17 },
              { year: 2022, value: 4.17 },
              { year: 2023, value: 4.17 },
              { year: 2024, value: 4.17 },
              { year: 2025, value: 4.17 },
            ],
          },
          {
            name:  'Bunds 10 ans',  // OAT 10 ans (€) ou US 10 ans ( DKK) selon l'entreprise
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