// ─────────────────────────────────────────────────────────────────────────────
// Alphabet — Valeur suivie — Mise à niveau standard template v3
// Données source : 10-K FY2025 (04/02/2026) + Excel La Thèse v2 corrigé
// ─────────────────────────────────────────────────────────────────────────────
//
// CORRECTIONS vs version initiale
//   metrics.evEbitda  : 25.02 → 25.56 | metrics.wacc : 9.22 → 8.78
//   metrics.fcfYield  : 1.95  → 1.91  | marginOfSafety : 'négative' → 'faible'
//   roicVsWacc.wacc   : série CAPM recalculée année par année
//   geoRevenue        : 'APAC' → 'Asie et Pacifique' | 'Other Americas' → 'Amériques'
//   Dilution          : signes inversés (tous négatifs = concentration nette)
//   FCF_OCF           : → FCF_OCF_Capex + Capex en concurrent2
//   CAPEX standalone  : supprimé | DSO standalone : supprimé
//   Dette_EBITDA      : → DETTE_EBITDA | PER : +concurrent PER ajusté taux
//   FCFy              : valeurs recalculées (Indicateurs Excel v2)
//   Payout            : +3 années 0 (2021-2023)
//   Ajouts            : EV_EBITDA, AT, ROCE, ROIIC_YoY, ROIIC, CCC_resume,
//                       Dividendes, Capex_Action
//   valuationCharts   : vs_secteur + vs_microsoft + vs_meta (3 radars)
//   Conservés         : Croissance_par_secteur, Levier_Cloud, MO_par_secteur,
//                       MO_par_secteur_8Q, Pourcentage_CA
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const alphabet: AnalyseCard = {
  slug:           'alphabet',
  type:           'valeur',
  title:          'Alphabet',
  ticker:         'GOOG',
  secteur:        'Technologie',
  geo:            'États-Unis',
  conviction:     'exceptionnelle',
  positionnement: 'surveillance',
  lastUpdated:    '2026-03-26',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '36 mois',
  excerpt:        "L'empire publicitaire qui restructure son identité autour de l'IA, entre défense d'un monopole de 25 ans sur la recherche et intégration verticale de Gemini à chaque couche du groupe.",
  glossaire:      ['roic', 'moat', 'per-valorisation', 'capex', 'fcf-yield', 'levier-operationnel'],
  readingTime:    25,
  logo:           '/analyse/alphabet.png',
  prixCible:      { bas: 361, haut: 401, devise: 'USD' },
  marginOfSafety: 'faible',
    onePager: {
    thesis:    "25 ans de monopole Search — et un Cloud qui change la thèse.",
    cours:     397.17,
    coursDate: '2026-05-15',
    devise:    'USD',
    range52w:  { low: 163, high: 399 },   // À vérifier / mettre à jour
  },

  metrics: {
    per:               29.04,
    evEbitda:          25.56,
    fcfYield:          1.91,
    roic:              25.86,
    wacc:              8.78,
    detteEbitda:       -0.53,
    croissanceCA3ans:  12.51,
    croissanceBPA3ans: 33.34,
    margeEbit:         32.03,
    margeBrute:        59.65,
    payoutRatio:       7.60,
    currentRatio:      2.01,
    dso:               57,
  },

  tendances: {
    per:       'hausse',
    fcfYield:  'baisse',
    roic:      'stable',
    margeEbit: 'stable',
  },

  updates: [
    {
      date: '2026-03-26',
      note: 'Création de la fiche. Données FY2025. Conviction Exceptionnelle. Positionnement Surveillance.',
    },
  ],

  chartData: {

    revenue: [
      { year: 2021, value: 257.6 },
      { year: 2022, value: 282.8 },
      { year: 2023, value: 307.4 },
      { year: 2024, value: 350.0 },
      { year: 2025, value: 402.8 },
    ],

    geoRevenue: [
      { region: 'États-Unis',        pct: 48 },
      { region: 'EMEA',              pct: 29 },
      { region: 'Asie et Pacifique', pct: 17 },
      { region: 'Amériques',         pct: 6  },
    ],

    marges: [
      { year: 2021, gross: 56.9, operating: 30.6, net: 29.5 },
      { year: 2022, gross: 55.4, operating: 26.5, net: 21.2 },
      { year: 2023, gross: 56.6, operating: 27.4, net: 24.0 },
      { year: 2024, gross: 58.2, operating: 32.1, net: 28.6 },
      { year: 2025, gross: 59.7, operating: 32.0, net: 32.8 },
    ],

    roic: [
      { year: 2021, value: 26.21 },
      { year: 2022, value: 24.57 },
      { year: 2023, value: 25.61 },
      { year: 2024, value: 28.90 },
      { year: 2025, value: 25.86 },
    ],

    roicVsWacc: [
      { year: 2021, value: 26.21, wacc: 6.19  },
      { year: 2022, value: 24.57, wacc: 10.26 },
      { year: 2023, value: 25.61, wacc: 8.83  },
      { year: 2024, value: 28.90, wacc: 9.26  },
      { year: 2025, value: 25.86, wacc: 8.78  },
    ],

    fcf: [
      { year: 2021, value: 67.0 },
      { year: 2022, value: 60.0 },
      { year: 2023, value: 69.5 },
      { year: 2024, value: 72.8 },
      { year: 2025, value: 73.3 },
    ],

    segmentRevenue: {
      unit: 'Mds $',
      total: { show: false, label: 'CA consolidé' },
      data: [
        { year: 2021, segments: [
          { name: 'Google Search & other',                        value: 149.0 },
          { name: 'YouTube ads',                                   value: 28.8  },
          { name: 'Google Network',                               value: 31.7  },
          { name: 'Google subscriptions, platforms, and devices', value: 28.0  },
          { name: 'Google Cloud',                                 value: 19.2  },
          { name: 'Other Bets & Hedging',                        value: 0.9   },
        ]},
        { year: 2022, segments: [
          { name: 'Google Search & other',                        value: 162.5 },
          { name: 'YouTube ads',                                   value: 29.2  },
          { name: 'Google Network',                               value: 32.8  },
          { name: 'Google subscriptions, platforms, and devices', value: 29.1  },
          { name: 'Google Cloud',                                 value: 26.3  },
          { name: 'Other Bets & Hedging',                        value: 2.9   },
        ]},
        { year: 2023, segments: [
          { name: 'Google Search & other',                        value: 175.0 },
          { name: 'YouTube ads',                                   value: 31.5  },
          { name: 'Google Network',                               value: 31.3  },
          { name: 'Google subscriptions, platforms, and devices', value: 34.7  },
          { name: 'Google Cloud',                                 value: 33.1  },
          { name: 'Other Bets & Hedging',                        value: 1.8   },
        ]},
        { year: 2024, segments: [
          { name: 'Google Search & other',                        value: 198.1 },
          { name: 'YouTube ads',                                   value: 36.1  },
          { name: 'Google Network',                               value: 30.4  },
          { name: 'Google subscriptions, platforms, and devices', value: 40.3  },
          { name: 'Google Cloud',                                 value: 43.2  },
          { name: 'Other Bets & Hedging',                        value: 1.9   },
        ]},
        { year: 2025, segments: [
          { name: 'Google Search & other',                        value: 224.5 },
          { name: 'YouTube ads',                                   value: 40.4  },
          { name: 'Google Network',                               value: 29.8  },
          { name: 'Google subscriptions, platforms, and devices', value: 48.0  },
          { name: 'Google Cloud',                                 value: 58.7  },
          { name: 'Other Bets & Hedging',                        value: 1.4   },
        ]},
      ],
    },

    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée — Alphabet vs méga-cap tech',
        data: [
          { label: 'PER',             valeur: 29.0, secteur: 30.0 },
          { label: 'EV/EBITDA',       valeur: 25.6, secteur: 22.0 },
          { label: 'P/FCF',           valeur: 52.4, secteur: 38.0 },
          { label: 'Marge EBIT %',    valeur: 32.0, secteur: 34.0 },
          { label: 'ROIC %',          valeur: 25.9, secteur: 26.0 },
          { label: 'FCF Yield %',     valeur: 1.91, secteur: 2.8  },
          { label: 'Dette/EBITDA',    valeur: -0.5, secteur: 0.3  },
          { label: 'TCAC CA 3 ans %', valeur: 12.5, secteur: 13.0 },
        ],
      },
      {
        id: 'vs_microsoft', type: 'radar',
        title: 'Valorisation comparée — Alphabet vs Microsoft',
        concurrent1: 'Microsoft',
        data: [
          { label: 'PER',             valeur: 29.0, concurrent1: 34.0 },
          { label: 'EV/EBITDA',       valeur: 25.6, concurrent1: 26.0 },
          { label: 'P/FCF',           valeur: 52.4, concurrent1: 50.0 },
          { label: 'Marge EBIT %',    valeur: 32.0, concurrent1: 45.0 },
          { label: 'ROIC %',          valeur: 25.9, concurrent1: 30.0 },
          { label: 'FCF Yield %',     valeur: 1.91, concurrent1: 2.0  },
          { label: 'Dette/EBITDA',    valeur: -0.5, concurrent1: 0.8  },
          { label: 'TCAC CA 3 ans %', valeur: 12.5, concurrent1: 16.0 },
        ],
      },
      {
        id: 'vs_meta', type: 'radar',
        title: 'Valorisation comparée — Alphabet vs Meta',
        concurrent1: 'Meta',
        data: [
          { label: 'PER',             valeur: 29.0, concurrent1: 26.0 },
          { label: 'EV/EBITDA',       valeur: 25.6, concurrent1: 17.0 },
          { label: 'P/FCF',           valeur: 52.4, concurrent1: 26.0 },
          { label: 'Marge EBIT %',    valeur: 32.0, concurrent1: 43.0 },
          { label: 'ROIC %',          valeur: 25.9, concurrent1: 37.0 },
          { label: 'FCF Yield %',     valeur: 1.91, concurrent1: 3.8  },
          { label: 'Dette/EBITDA',    valeur: -0.5, concurrent1: -1.5 },
          { label: 'TCAC CA 3 ans %', valeur: 12.5, concurrent1: 18.0 },
        ],
      },
    ],

    metricHistory: [

      // ── Graphiques personnalisés Alphabet ─────────────────────────────────

      {
        label: 'Croissance_par_secteur',
        name:  'Google Services',
        unit:  '%',
        data: [
          { year: 2022, value: 6.74  },
          { year: 2023, value: 7.50  },
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
              { year: 2025, value: 35.80 },
            ],
          },
        ],
      },

      {
        label: 'Levier_Cloud',
        name:  'Revenues Google Cloud',
        unit:  'Mds $',
        yMin:  0,
        data: [
          { year: 2023, value: 33.1 },
          { year: 2024, value: 43.2 },
          { year: 2025, value: 58.7 },
        ],
        competitors: [
          {
            name:  'Dépenses Google Cloud',
            color: '#C9A84C',
            data: [
              { year: 2023, value: 31.4 },
              { year: 2024, value: 37.1 },
              { year: 2025, value: 44.8 },
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
              { year: 2022, value: -7.31  },
              { year: 2023, value:  5.19  },
              { year: 2024, value: 14.14  },
              { year: 2025, value: 23.69  },
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
              { year: '2024 Q1', value: 9.40  },
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
            name:   'Cloud — tendance linéaire',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: '2024 Q1', value: 9.49  },
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
        name:  'Google Cloud (% CA)',
        unit:  '%',
        color: '#C9A84C',
        data: [
          { year: 2021, value: 7.45  },
          { year: 2022, value: 9.29  },
          { year: 2023, value: 10.76 },
          { year: 2024, value: 12.35 },
          { year: 2025, value: 14.57 },
        ],
        competitors: [
          {
            name:   'Google Services (% CA)',
            color:  '#1B4332',
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

      // ── Métriques standard template ───────────────────────────────────────

      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 22.04 },
          { year: 2022, value: 13.22 },
          { year: 2023, value: 18.63 },
          { year: 2024, value: 18.37 },
          { year: 2025, value: 25.56 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 19.56 },
              { year: 2022, value: 19.56 },
              { year: 2023, value: 19.56 },
              { year: 2024, value: 19.56 },
              { year: 2025, value: 19.56 },
            ],
          },
        ],
      },

      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'Mds $',
        yMin:  0,
        data: [
          { year: 2021, value: 91.7  },
          { year: 2022, value: 91.5  },
          { year: 2023, value: 101.7 },
          { year: 2024, value: 125.3 },
          { year: 2025, value: 164.7 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 67.0 },
              { year: 2022, value: 60.0 },
              { year: 2023, value: 69.5 },
              { year: 2024, value: 72.8 },
              { year: 2025, value: 73.3 },
            ],
          },
          {
            name:   'Capex industriel',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 24.6 },
              { year: 2022, value: 31.5 },
              { year: 2023, value: 32.3 },
              { year: 2024, value: 52.5 },
              { year: 2025, value: 91.4 },
            ],
          },
        ],
      },

      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '$',
        data: [
          { year: 2021, value: 5.61  },
          { year: 2022, value: 4.56  },
          { year: 2023, value: 5.80  },
          { year: 2024, value: 8.04  },
          { year: 2025, value: 10.81 },
        ],
      },

      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '$',
        data: [
          { year: 2021, value: 0.00 },
          { year: 2022, value: 0.00 },
          { year: 2023, value: 0.00 },
          { year: 2024, value: 0.60 },
          { year: 2025, value: 0.83 },
        ],
      },

      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 29.54 },
          { year: 2022, value: 27.63 },
          { year: 2023, value: 28.42 },
          { year: 2024, value: 33.45 },
          { year: 2025, value: 27.94 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 6.19  },
              { year: 2022, value: 10.26 },
              { year: 2023, value: 8.83  },
              { year: 2024, value: 9.26  },
              { year: 2025, value: 8.78  },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 26.21 },
              { year: 2022, value: 24.57 },
              { year: 2023, value: 25.61 },
              { year: 2024, value: 28.90 },
              { year: 2025, value: 25.86 },
            ],
          },
        ],
      },

      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel (formule décalée)',
        unit:  '%',
        data: [
          { year: 2022, value: -10.43  },
          { year: 2023, value: 213.85  },
          { year: 2024, value:  78.37  },
          { year: 2025, value:  32.29  },
        ],
      },

      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 32.29 },
          { year: 2, value: 50.50 },
          { year: 3, value: 60.53 },
          { year: 4, value: 40.40 },
        ],
      },

      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 25.79 },
          { year: 2022, value: 19.47 },
          { year: 2023, value: 24.30 },
          { year: 2024, value: 23.43 },
          { year: 2025, value: 29.04 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 24.41 },
              { year: 2022, value: 24.41 },
              { year: 2023, value: 24.41 },
              { year: 2024, value: 24.41 },
              { year: 2025, value: 24.41 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 27.01 },
              { year: 2022, value: 14.77 },
              { year: 2023, value: 19.63 },
              { year: 2024, value: 17.00 },
              { year: 2025, value: 23.65 },
            ],
          },
        ],
      },

      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 3.42 },
          { year: 2022, value: 5.14 },
          { year: 2023, value: 3.88 },
          { year: 2024, value: 3.10 },
          { year: 2025, value: 1.91 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 3.49 },
              { year: 2022, value: 3.49 },
              { year: 2023, value: 3.49 },
              { year: 2024, value: 3.49 },
              { year: 2025, value: 3.49 },
            ],
          },
          {
            name:  'UST 10 ans',
            color: '#52B788',
            data: [
              { year: 2021, value: 0.916 },
              { year: 2022, value: 3.879 },
              { year: 2023, value: 3.866 },
              { year: 2024, value: 4.572 },
              { year: 2025, value: 4.153 },
            ],
          },
        ],
      },

      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 55.68 },
          { year: 2022, value: 51.95 },
          { year: 2023, value: 56.95 },
          { year: 2024, value: 54.58 },
          { year: 2025, value: 56.98 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 3.85 },
              { year: 2022, value: 7.72 },
              { year: 2023, value: 0.00 },
              { year: 2024, value: 0.00 },
              { year: 2025, value: 0.00 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 19.86 },
              { year: 2022, value: 14.83 },
              { year: 2023, value: 20.51 },
              { year: 2024, value: 19.93 },
              { year: 2025, value: 27.40 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 39.67 },
              { year: 2022, value: 44.84 },
              { year: 2023, value: 36.44 },
              { year: 2024, value: 34.65 },
              { year: 2025, value: 29.58 },
            ],
          },
        ],
      },

      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 2.93 },
          { year: 2022, value: 2.38 },
          { year: 2023, value: 2.10 },
          { year: 2024, value: 1.84 },
          { year: 2025, value: 2.01 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.25 },
              { year: 2022, value: 2.25 },
              { year: 2023, value: 2.25 },
              { year: 2024, value: 2.25 },
              { year: 2025, value: 2.25 },
            ],
          },
        ],
      },

      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: -1.40 },
          { year: 2022, value: -1.12 },
          { year: 2023, value: -1.01 },
          { year: 2024, value: -0.66 },
          { year: 2025, value: -0.53 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: -0.94 },
              { year: 2022, value: -0.94 },
              { year: 2023, value: -0.94 },
              { year: 2024, value: -0.94 },
              { year: 2025, value: -0.94 },
            ],
          },
        ],
      },

      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.717 },
          { year: 2022, value: 0.774 },
          { year: 2023, value: 0.764 },
          { year: 2024, value: 0.777 },
          { year: 2025, value: 0.677 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.742 },
              { year: 2022, value: 0.742 },
              { year: 2023, value: 0.742 },
              { year: 2024, value: 0.742 },
              { year: 2025, value: 0.742 },
            ],
          },
        ],
      },

      {
        label: 'Dilution',
        name:  "Variation du nombre d'actions dilué (%)",
        unit:  '%',
        data: [
          { year: 2022, value: -2.91 },
          { year: 2023, value: -3.32 },
          { year: 2024, value: -3.17 },
          { year: 2025, value: -0.72 },
        ],
      },

      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 0.00 },
          { year: 2022, value: 0.00 },
          { year: 2023, value: 0.00 },
          { year: 2024, value: 7.35 },
          { year: 2025, value: 7.60 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.99 },
              { year: 2022, value: 2.99 },
              { year: 2023, value: 2.99 },
              { year: 2024, value: 2.99 },
              { year: 2025, value: 2.99 },
            ],
          },
        ],
      },

      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires (dividendes + rachats)',
        unit:  'Mds $',
        yMin:  0,
        data: [
          { year: 2021, value: 50.3 },
          { year: 2022, value: 59.3 },
          { year: 2023, value: 61.5 },
          { year: 2024, value: 69.6 },
          { year: 2025, value: 55.8 },
        ],
        competitors: [
          {
            name:  "Rachats d'actions bruts",
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 50.3 },
              { year: 2022, value: 59.3 },
              { year: 2023, value: 61.5 },
              { year: 2024, value: 62.2 },
              { year: 2025, value: 45.7 },
            ],
          },
          {
            name:   'Capex industriel',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 24.6 },
              { year: 2022, value: 31.5 },
              { year: 2023, value: 32.3 },
              { year: 2024, value: 52.5 },
              { year: 2025, value: 91.4 },
            ],
          },
        ],
      },

    ],
  },
}