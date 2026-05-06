import type { AnalyseCard } from '@/types/analyses'

export const constellationenergy: AnalyseCard = {
  slug:           'constellationenergy',
  type:           'valeur',
  title:          'Constellation Energy',
  ticker:         'CEG',
  secteur:        'Énergie',
  geo:            'États-Unis',
  conviction:     'forte',
  positionnement: 'surveillance',
  lastUpdated:    '2026-03-01',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:
    "Premier producteur d'électricité nucléaire des États-Unis. Le mécanisme de crédit de production IRA (PTC) crée un plancher structurel sur les revenus, transformant la volatilité des prix de l'électricité en levier plutôt qu'en risque pur. La transformation Calpine (janvier 2026) change la nature de l'entreprise.",
  glossaire:      ['per', 'free-cash-flow', 'moat', 'roic', 'wacc', 'ev-ebitda'],
  logo:           '/analyse/constellation.png',
  prixCible:      { bas: 350, haut: 475, devise: 'USD' },
  marginOfSafety: 'négative',
  readingTime:    20,

  metrics: {
    per:               37.6,
    evEbitda:          20.1,
    fcfYield:          1.2,
    roic:              11.1,
    wacc:              9.0,
    detteEbitda:       0.63,
    croissanceCA3ans:  1.5,
    croissanceBPA3ans: 147.2,
    margeEbit:         12.1,
    margeBrute:        42.5,
    payoutRatio:       16.5,
    currentRatio:      1.53,
    dso:               61.0,
  },

  tendances: {
    per:       'hausse',
    fcfYield:  'hausse',
    roic:      'baisse',
    margeEbit: 'baisse',
  },

  updates: [
    {
      date: '2026-03-01',
      note:
        "Création de la fiche. Données FY2025 (10-K déposé le 24/02/2026). EPS ajusté $9,39. Calpine fermé le 16 janvier 2026, hors périmètre comptable FY2025. Crane Clean Energy Center (TMI) : redémarrage en attente des autorisations réglementaires au 31/12/2025.",
    },
  ],

  chartData: {
    revenue: [
      { year: 2021, value: 19649 },
      { year: 2022, value: 24440 },
      { year: 2023, value: 24918 },
      { year: 2024, value: 23568 },
      { year: 2025, value: 25533 },
    ],

    geoRevenue: [
      { region: 'États-Unis',     pct: 96 },
      { region: 'Europe',         pct: 3  },
      { region: 'Reste du monde', pct: 1  },
    ],

    marges: [
      { year: 2021, gross: 38.1, operating: -1.8, net: -0.4 },
      { year: 2022, gross: 28.6, operating:  2.0, net: -0.7 },
      { year: 2023, gross: 35.8, operating:  6.5, net:  6.3 },
      { year: 2024, gross: 51.5, operating: 18.5, net: 15.9 },
      { year: 2025, gross: 42.5, operating: 12.1, net:  9.1 },
    ],

    roic: [
      { year: 2021, value:  0.97 },
      { year: 2022, value:  5.50 },
      { year: 2023, value:  5.66 },
      { year: 2024, value: 19.16 },
      { year: 2025, value: 11.07 },
    ],

    roicVsWacc: [
      { year: 2021, value:  0.97, wacc:  6.47 },
      { year: 2022, value:  5.50, wacc: 10.72 },
      { year: 2023, value:  5.66, wacc:  9.06 },
      { year: 2024, value: 19.16, wacc:  9.36 },
      { year: 2025, value: 11.07, wacc:  8.99 },
    ],

    fcf: [
      { year: 2021, value: -2667 },
      { year: 2022, value: -4042 },
      { year: 2023, value: -7723 },
      { year: 2024, value: -5029 },
      { year: 2025, value:  1288 },
    ],

    valuationCharts: [
      {
        id:    'vs_secteur',
        type:  'radar',
        title: "Valorisation comparée - Constellation Energy vs secteur utilities/merchant",
        data: [
          { label: 'PER',             valeur: 37.6, secteur: 18.0 },
          { label: 'EV/EBITDA',       valeur: 20.1, secteur: 12.0 },
          { label: 'P/FCF',           valeur: 20.1, secteur: 18.0 },
          { label: 'Marge EBIT %',    valeur: 12.1, secteur: 15.0 },
          { label: 'ROIC %',          valeur: 11.1, secteur:  7.0 },
          { label: 'FCF Yield %',     valeur:  1.2, secteur:  5.0 },
          { label: 'Dette/EBITDA',    valeur:  0.6, secteur:  4.0 },
          { label: 'TCAC CA 3 ans %', valeur:  1.5, secteur:  5.0 },
        ],
      },
      {
        id:          'vs_vistra',
        type:        'radar',
        title:       "Valorisation comparée - Constellation Energy vs Vistra Corp (VST)",
        concurrent1: 'Vistra Corp',
        data: [
          { label: 'PER',             valeur: 37.6, concurrent1: 28.0 },
          { label: 'EV/EBITDA',       valeur: 20.1, concurrent1: 15.0 },
          { label: 'P/FCF',           valeur: 20.1, concurrent1: 20.0 },
          { label: 'Marge EBIT %',    valeur: 12.1, concurrent1: 20.0 },
          { label: 'ROIC %',          valeur: 11.1, concurrent1: 15.0 },
          { label: 'FCF Yield %',     valeur:  1.2, concurrent1:  4.5 },
          { label: 'Dette/EBITDA',    valeur:  0.6, concurrent1:  4.5 },
          { label: 'TCAC CA 3 ans %', valeur:  1.5, concurrent1: 18.0 },
        ],
      },
    ],

    metricHistory: [

      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2022, value: 11.1 },
          { year: 2023, value: 10.9 },
          { year: 2024, value: 10.7 },
          { year: 2025, value: 20.1 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (4 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 13.2 },
              { year: 2023, value: 13.2 },
              { year: 2024, value: 13.2 },
              { year: 2025, value: 13.2 },
            ],
          },
        ],
      },

      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'M$',
        data: [
          { year: 2021, value: -1338 },
          { year: 2022, value: -2353 },
          { year: 2023, value: -5301 },
          { year: 2024, value: -2464 },
          { year: 2025, value:  4237 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: -2667 },
              { year: 2022, value: -4042 },
              { year: 2023, value: -7723 },
              { year: 2024, value: -5029 },
              { year: 2025, value:  1288 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: -1329 },
              { year: 2022, value: -1689 },
              { year: 2023, value: -2422 },
              { year: 2024, value: -2565 },
              { year: 2025, value: -2949 },
            ],
          },
        ],
      },

      {
        label: 'EPS',
        name:  'BPA ajusté (non-GAAP, $US)',
        unit:  '$',
        data: [
          { year: 2022, value:  0.49 },
          { year: 2023, value:  6.28 },
          { year: 2024, value:  8.67 },
          { year: 2025, value:  9.39 },
        ],
      },

      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '$',
        data: [
          { year: 2022, value: 0.564  },
          { year: 2023, value: 1.128  },
          { year: 2024, value: 1.41   },
          { year: 2025, value: 1.5512 },
        ],
      },

      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  -5,
        data: [
          { year: 2021, value:  -2.10 },
          { year: 2022, value:   3.13 },
          { year: 2023, value:   8.57 },
          { year: 2024, value:  20.80 },
          { year: 2025, value:  13.96 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value:  6.47 },
              { year: 2022, value: 10.72 },
              { year: 2023, value:  9.06 },
              { year: 2024, value:  9.36 },
              { year: 2025, value:  8.99 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value:  0.97 },
              { year: 2022, value:  5.50 },
              { year: 2023, value:  5.66 },
              { year: 2024, value: 19.16 },
              { year: 2025, value: 11.07 },
            ],
          },
        ],
      },

      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel (1 an glissant)',
        unit:  '%',
        data: [
          { year: 2022, value:   3.98  },
          { year: 2023, value: -11.50  },
          { year: 2024, value:  85.49  },
          { year: 2025, value: -419.15 },
        ],
      },

      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 a 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: -419.15 },
          { year: 2, value:   29.62 },
          { year: 3, value:   71.46 },
          { year: 4, value:    9.97 },
        ],
      },

      {
        label: 'PER',
        name:  'PER (sur BPA ajuste)',
        unit:  'x',
        data: [
          { year: 2023, value: 18.6 },
          { year: 2024, value: 25.8 },
          { year: 2025, value: 37.6 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (3 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2023, value: 27.3 },
              { year: 2024, value: 27.3 },
              { year: 2025, value: 27.3 },
            ],
          },
          {
            name:   'PER ajuste taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2023, value: 16.4 },
              { year: 2024, value: 26.2 },
              { year: 2025, value: 36.8 },
            ],
          },
        ],
      },

      {
        label: 'FCFy',
        name:  'FCF Yield (sur capitalisation boursiere)',
        unit:  '%',
        data: [
          { year: 2022, value: -14.3 },
          { year: 2023, value: -20.4 },
          { year: 2024, value:  -7.1 },
          { year: 2025, value:   1.2 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (4 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: -10.2 },
              { year: 2023, value: -10.2 },
              { year: 2024, value: -10.2 },
              { year: 2025, value: -10.2 },
            ],
          },
          {
            name:  'UST 10 ans',
            color: '#52B788',
            data: [
              { year: 2022, value: 3.90 },
              { year: 2023, value: 3.97 },
              { year: 2024, value: 4.57 },
              { year: 2025, value: 4.40 },
            ],
          },
        ],
      },

      // Données corrigées : DPO calculé sur Accounts payable and accrued expenses (bilan passif CT)
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value:  42.0 },
          { year: 2022, value:  49.5 },
          { year: 2023, value:  41.8 },
          { year: 2024, value:  57.6 },
          { year: 2025, value:  61.0 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 38.7 },
              { year: 2022, value: 31.5 },
              { year: 2023, value: 34.2 },
              { year: 2024, value: 51.1 },
              { year: 2025, value: 43.2 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value:  74.8 },
              { year: 2022, value:  78.1 },
              { year: 2023, value:  59.6 },
              { year: 2024, value: 126.0 },
              { year: 2025, value: 106.8 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value:   5.8 },
              { year: 2022, value:   2.9 },
              { year: 2023, value:  16.4 },
              { year: 2024, value: -17.3 },
              { year: 2025, value:  -2.6 },
            ],
          },
        ],
      },

      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.00 },
          { year: 2022, value: 1.19 },
          { year: 2023, value: 1.31 },
          { year: 2024, value: 1.57 },
          { year: 2025, value: 1.53 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.32 },
              { year: 2022, value: 1.32 },
              { year: 2023, value: 1.32 },
              { year: 2024, value: 1.32 },
              { year: 2025, value: 1.32 },
            ],
          },
        ],
      },

      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 1.32 },
          { year: 2022, value: 1.40 },
          { year: 2023, value: 1.74 },
          { year: 2024, value: 0.75 },
          { year: 2025, value: 0.63 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.17 },
              { year: 2022, value: 1.17 },
              { year: 2023, value: 1.17 },
              { year: 2024, value: 1.17 },
              { year: 2025, value: 1.17 },
            ],
          },
        ],
      },

      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.41 },
          { year: 2022, value: 0.52 },
          { year: 2023, value: 0.49 },
          { year: 2024, value: 0.45 },
          { year: 2025, value: 0.45 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.46 },
              { year: 2022, value: 0.46 },
              { year: 2023, value: 0.46 },
              { year: 2024, value: 0.46 },
              { year: 2025, value: 0.46 },
            ],
          },
        ],
      },

      {
        label: 'Dilution',
        name:  "Variation du nombre d'actions (%)",
        unit:  '%',
        data: [
          { year: 2023, value: -1.52 },
          { year: 2024, value: -2.78 },
          { year: 2025, value: -0.32 },
        ],
      },

      {
        label: 'Payout',
        name:  'Payout Ratio (sur BPA ajuste)',
        unit:  '%',
        data: [
          { year: 2023, value: 18.0 },
          { year: 2024, value: 16.3 },
          { year: 2025, value: 16.5 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (3 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2023, value: 16.9 },
              { year: 2024, value: 16.9 },
              { year: 2025, value: 16.9 },
            ],
          },
        ],
      },

      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2022, value:  185 },
          { year: 2023, value: 1358 },
          { year: 2024, value: 1443 },
          { year: 2025, value:  886 },
        ],
        competitors: [
          {
            name:  "Rachats d'actions",
            color: '#2D6A4F',
            data: [
              { year: 2022, value:    0 },
              { year: 2023, value:  992 },
              { year: 2024, value:  999 },
              { year: 2025, value:  400 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2022, value: 1689 },
              { year: 2023, value: 2422 },
              { year: 2024, value: 2565 },
              { year: 2025, value: 2949 },
            ],
          },
        ],
      },

    ],
  },
}