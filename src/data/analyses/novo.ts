import type { AnalyseCard } from '@/types/analyses'

export const novo: AnalyseCard = {
  slug:           'novo',
  type:           'valeur',
  title:          'Novo Nordisk A/S',
  ticker:         'NOVO-B.CO',
  secteur:        'Santé',
  geo:            'Europe',
  conviction:     'moyenne',
  positionnement: 'maintien',
  lastUpdated:    '2026-03-19',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '2030',
  excerpt:        "Le géant danois de l'obésité et du diabète, qui veut passer de l'aiguille à la pillule.",
  glossaire: [
    'glp-1',
    'pbm',
    'pipeline-pharma',
    'multiple-de-valorisation',
    'moat',
    'marge-de-securite',
  ],
  readingTime:    10,
  logo:          '/analyse/Novo_Nordisk.png',
  prixCible:      { bas: 550, haut: 720, devise: 'DKK' },
  marginOfSafety: 'faible',

  metrics: {
    per:               9.22,
    evEbitda:          7.20,
    fcfYield:          2.62,
    roic:              26.82,
    wacc:              7.89,
    detteEbitda:       0.69,
    croissanceCA3ans:  20.42,
    croissanceBPA3ans: 27.52,
    margeEbit:         41.30,
    margeBrute:        81.00,
    payoutRatio:       50.7,
    currentRatio:      0.8,
    dso:               83,
  },

  tendances: {
    per:       'baisse',
    fcfYield:  'baisse',
    roic:      'baisse',
    margeEbit: 'stable',
  },

  updates: [
    {
      date: '2026-03-18',
      note: 'Création de la fiche. Conviction initiale : moyenne. Données FY2025.',
    },
  ],

  chartData: {
    revenue: [
      { year: 2021, value: 140.8 },
      { year: 2022, value: 176.9 },
      { year: 2023, value: 232.2 },
      { year: 2024, value: 290.4 },
      { year: 2025, value: 309   },
    ],
    geoRevenue: [
      { region: 'États-Unis',       pct: 56 },
      { region: 'Europe et Canada', pct: 21 },
      { region: 'Marché émergents', pct: 10 },
      { region: 'Asie et Pacifique', pct: 7 },
      { region: 'Chine',            pct: 6  },
    ],
    marges: [
      { year: 2021, net: 33.9, operating: 41.7 },
      { year: 2022, net: 31.4, operating: 42.3 },
      { year: 2023, net: 36,   operating: 44.2 },
      { year: 2024, net: 34.8, operating: 44.2 },
      { year: 2025, net: 33.1, operating: 41.3 },
    ],
    roic: [
      { year: 2021, value: 27.3 },
      { year: 2022, value: 27.3 },
      { year: 2023, value: 30.5 },
      { year: 2024, value: 29.7 },
      { year: 2025, value: 26.8 },
    ],
    fcf: [
      { year: 2021, value:  29.3 },
      { year: 2022, value:  57.3 },
      { year: 2023, value:  68.3 },
      { year: 2024, value: -14.7 },
      { year: 2025, value:  28.2 },
    ],
  },
}
