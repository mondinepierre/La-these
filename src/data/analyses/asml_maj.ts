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

export const asml_maj: AnalyseCard = {
  slug:           'asml_maj',                  // URL : /analyses/[slug]
  type:           'valeur',
  title:          'ASML',
  ticker:         'ASML',
  secteur:        'Technologie',       // voir union Secteur dans types/analyses.ts
  geo:            'Pays-Bas',        // voir union ZoneGeo
  conviction:     'exceptionnelle',           // exceptionnelle | forte | moyenne | spéculative
  positionnement: 'surveillance',      // achat fort | accumulation | surveillance | maintien | allégement
  lastUpdated:    '2026-04-15',
  statut:         'en-construction',   // en-construction | actif | archivé
  portefeuille:   'PEA',              // PEA | CTO | PEA + CTO | Aucun
  horizon:        '5 ans',
  excerpt:        '',
  glossaire:      ['per', 'free-cash-flow', 'moat', 'roic'],
  logo:           '/analyse/asml.png',
  prixCible:      { bas: 0, haut: 0, devise: 'USD' },
  marginOfSafety: 'négative',     // forte | correcte | faible | négative | indéterminée
  readingTime:    0,

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
      date: '2026-04-15',
      note: 'mise à jour de la fiche.',
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
      unit: 'Md$',
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

    // ── Comparaison pairs directs ─────────────────────────────────────────
    // Composant : <ValuationBar name="Entreprise" concurrent1="X" concurrent2="Y" />
    valuationCompare: [
      { label: 'PER',                  valeur: 53.05, concurrent1: 40.10, concurrent2: 50.55 },
      { label: 'P/FCF',                valeur: 45.50, concurrent1: 50.16, concurrent2: 52.10 },
      { label: 'EV/EBITDA',            valeur: 40.26, concurrent1: 34.96, concurrent2: 39.42 },
      { label: 'Marge opérationnelle', valeur: 34.58, concurrent1: 29.74, concurrent2: 42.54 },
      { label: 'ROIC',                 valeur: 41.08, concurrent1: 27.31, concurrent2: 39.55 },
    ],

    // ── Comparaison moyenne secteur ───────────────────────────────────────
    // Composant : <ValuationBar2 name="Entreprise" />
    valuationCompare2: [
      { label: 'PER',                  valeur: 53.05, secteur: 50.55 },
      { label: 'P/FCF',                valeur: 45.50, secteur: 50.16 },
      { label: 'EV/EBITDA',            valeur: 40.26, secteur: 39.42 },
      { label: 'Marge opérationnelle', valeur: 34.58, secteur: 21.25 },
      { label: 'ROIC',                 valeur: 41.08, secteur: 6.48 },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────
    // Composant : <MetricGraph_LABEL /> — LABEL = champ label ci-dessous
    metricHistory: [
      {
        label: 'EV_EBIDTA',
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
        unit:  'Md$',
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
        unit:  '$',
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
        unit:  '$',
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