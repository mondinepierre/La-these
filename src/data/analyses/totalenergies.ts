import type { AnalyseCard } from '@/types/analyses'

export const totalenergies: AnalyseCard = {
  slug:           'totalenergies',
  type:           'valeur',
  title:          'TotalEnergies',
  ticker:         'TTE.PA',
  secteur:        'Énergie',
  geo:            'France',
  conviction:     'forte',
  positionnement: 'allégement',
  lastUpdated:    '2026-03-21',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '15 ans',
  excerpt:        'Le roi du pétrole mais pas que',
  glossaire: [
    'gnl',
    'integrated-power',
    'stranded-assets',
    'scope-3',
    'marge-brute-d-autofinancement',
    'multiple-de-valorisation',
    'moat',
  ],
  readingTime:    10,
  logo:          '/analyse/totalenergies.png',
  prixCible:      { bas: 46.6, haut: 68.9, devise: 'EUR' },
  marginOfSafety: 'négative',

  metrics: {
    per:               12.6,   // Price / Earnings
    evEbitda:          4.99,   // EV / EBITDA
    fcfYield:          6.51,   // FCF Yield en % → FCF / EV ou Cap
    roic:              12.07,  // NOPAT / (equity + dette nette) — source : calcul manuel DEU
    wacc:              7.97,   // Source : GuruFocus
    detteEbitda:       0.50,   // Dette nette / EBITDA — négatif = trésorerie nette
    croissanceCA3ans: -10.54,  // TCAC CA sur 3 ans en %
    croissanceBPA3ans: -9.7,   // TCAC BPA sur 3 ans en %
    margeEbit:         15.1,   // Marge opérationnelle en %
    margeBrute:        35.97,  // Marge brute en %
    payoutRatio:       55,     // Dividendes / Résultat net en %
    currentRatio:      0.96,   // Actif court terme / Passif court terme
    dso:               37,     // Days Sales Outstanding en jours
  },

  tendances: {
    per:       'hausse',
    fcfYield:  'baisse',
    roic:      'baisse',
    margeEbit: 'stable',
  },

  updates: [
    {
      date: '2026-03-21',
      note: 'Publication initiale. Conviction : Forte. Positionnement : Allégement. Données FY2025. DEU 2025 à intégrer dès publication.',
    },
  ],

  chartData: {
    revenue: [
      { year: 2021, value: 205.9 },
      { year: 2022, value: 281   },
      { year: 2023, value: 237.1 },
      { year: 2024, value: 214.5 },
      { year: 2025, value: 201.2 },
    ],

    geoRevenue: [
      { region: 'Moyen-Orient', pct: 33 },
      { region: 'Europe',       pct: 24 },
      { region: 'Afrique',      pct: 18 },
      { region: 'Amériques',    pct: 15 },
      { region: 'Asie',         pct: 10 },
    ],

    segmentRevenue: [
      { year: 2022, segments: [
        { name: 'Exploration - Production', value: 17479 },
        { name: 'LNG',                      value: 11169 },
        { name: 'Puissance intégrée',       value: 975   },
        { name: 'Raffinage - Chimie',       value: 7302  },
        { name: 'Marketing & services',     value: 1550  },
      ]},
      { year: 2023, segments: [
        { name: 'Exploration - Production', value: 10942 },
        { name: 'LNG',                      value: 6200  },
        { name: 'Puissance intégrée',       value: 1853  },
        { name: 'Raffinage - Chimie',       value: 4654  },
        { name: 'Marketing & services',     value: 1458  },
      ]},
      { year: 2024, segments: [
        { name: 'Exploration - Production', value: 10004 },
        { name: 'LNG',                      value: 4869  },
        { name: 'Puissance intégrée',       value: 2173  },
        { name: 'Raffinage - Chimie',       value: 2160  },
        { name: 'Marketing & services',     value: 1360  },
      ]},
      { year: 2025, segments: [
        { name: 'Exploration - Production', value: 8399  },
        { name: 'LNG',                      value: 4109  },
        { name: 'Puissance intégrée',       value: 2215  },
        { name: 'Raffinage - Chimie',       value: 2378  },
        { name: 'Marketing & services',     value: 1373  },
      ]},
    ],

    valuationCompare: [
      { label: 'PER',                  valeur: 15.14, secteur: 25.2  },
      { label: 'P/FCF',                valeur: 17.6,  secteur: 19.2  },
      { label: 'EV/EBITDA',            valeur: 6.5,   secteur: 8.38  },
      { label: 'Marge opérationnelle', valeur: 11.49, secteur: 12.97 },
      { label: 'ROIC',                 valeur: 8.01,  secteur: 6.69  },
    ],

    metricHistory: [
      {
        label: 'PER',
        name:  'TotalEnergies',
        unit:  '×',
        data: [
          { year: 2021, value: 8.57 },
          { year: 2022, value: 7.98 },
          { year: 2023, value: 7.85 },
          { year: 2024, value: 8.26 },
          { year: 2025, value: 12.6 },
        ],
        competitors: [
          {
            name:  'Shell',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 8.54  },
              { year: 2022, value: 4.91  },
              { year: 2023, value: 11.5  },
              { year: 2024, value: 12.3  },
              { year: 2025, value: 12.3  },
            ],
          },
          {
            name:  'Equinor',
            color: '#9dc9ae',
            data: [
              { year: 2021, value: 10.2  },
              { year: 2022, value: 3.95  },
              { year: 2023, value: 8.08  },
              { year: 2024, value: 7.5   },
              { year: 2025, value: 12.2  },
            ],
          },
        ],
      },
      {
        label: 'Dividendes',
        name:  'Dividendes par action',
        unit:  '€',
        data: [
          { year: 2021, value: 2.64 },
          { year: 2022, value: 2.81 },
          { year: 2023, value: 3.01 },
          { year: 2024, value: 3.22 },
          { year: 2025, value: 3.4  },
        ],
      },
      {
        label: 'Brent',
        name:  'Prix du baril de Brent',
        unit:  '$',
        data: [
          { year: 2021, value: 77.94 },
          { year: 2022, value: 85.99 },
          { year: 2023, value: 77.08 },
          { year: 2024, value: 74.83 },
          { year: 2025, value: 60.91 },
          { year: 2026, value: 107   },
        ],
      },
      {
        label: 'CR_D_EBITDA',
        name:  'Current Ratio',
        unit:  '×',
        data: [
          { year: 2021, value: 1.16 },
          { year: 2022, value: 1.14 },
          { year: 2023, value: 1.12 },
          { year: 2024, value: 1.09 },
          { year: 2025, value: 0.97 },
        ],
        competitors: [
          {
            name:  'Dette nette / EBITDA',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 0.49 },
              { year: 2022, value: 0.12 },
              { year: 2023, value: 0.13 },
              { year: 2024, value: 0.25 },
              { year: 2025, value: 0.50 },
            ],
          },
        ],
      },
    ],

    marges: [
      { year: 2021, net: 8.7, operating: 15.8 },
      { year: 2022, net: 7.8, operating: 22.4 },
      { year: 2023, net: 9.7, operating: 17.1 },
      { year: 2024, net: 8,   operating: 15.9 },
      { year: 2025, net: 7.2, operating: 15.1 },
    ],

    roicVsWacc: [
      { year: 2021, value: 13.34, wacc: 8.17 },
      { year: 2022, value: 28.22, wacc: 8.65 },
      { year: 2023, value: 18.7,  wacc: 8.81 },
      { year: 2024, value: 14.36, wacc: 8.59 },
      { year: 2025, value: 12.07, wacc: 8.43 },
    ],

    fcf: [
      { year: 2021, value: 15.8 },
      { year: 2022, value: 29.4 },
      { year: 2023, value: 19.1 },
      { year: 2024, value: 12.1 },
      { year: 2025, value: 10.7 },
    ],
  },
}
