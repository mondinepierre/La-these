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
  lastUpdated:    '2026-03-16',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '5 ans minimum',
  excerpt:        "L'unique fournisseur de la lithographie EUV pour les puces IA",
  glossaire: [
    'lithographie-euv',
    'semi-conducteurs',
    'high-na',
    'moat',
    'pricing-power',
    'marge-de-securite',
  ],

  prixCible: {
    bas:    1070,
    haut:   1450,
    devise: 'EUR',
  },

  marginOfSafety: 'faible',

  metrics: {
    per:               48.46,
    evEbitda:          36.06,
    fcfYield:          2.39,
    roic:              38.77,
    wacc:              7.9,
    detteEbitda:       -0.7,  // trésorerie nette
    croissanceCA3ans:  18.3,
    croissanceBPA3ans: 17.5,
    margeEbit:         34.6,
    margeBrute:        52.8,
    payoutRatio:       30.3,
    currentRatio:      1.26,
    dso:               33,
  },

  tendances: {
    per:       'hausse',  // compression multiple depuis 2023
    fcfYield:  'stable',
    roic:      'stable',
    margeEbit: 'stable',
  },

  updates: [
    {
      date: '2026-03-16',
      note: 'Création de la fiche. Conviction initiale : forte. Données FY2025.',
    },
  ],

  chartData: {
    revenue: [
      { year: 2021, value: 19 },
      { year: 2022, value: 21 },
      { year: 2023, value: 28 },
      { year: 2024, value: 28 },
      { year: 2025, value: 33 },
    ],
    geoRevenue: [
      { region: 'Chine',          pct: 29   },
      { region: 'Taïwan',         pct: 25.5 },
      { region: 'Corée du Sud',   pct: 24.9 },
      { region: 'États-Unis',     pct: 12.5 },
      { region: 'Reste du monde', pct: 8.1  },
    ],
    marges: [
      { year: 2021, net: 31.6, operating: 35.1 },
      { year: 2022, net: 26.6, operating: 30.7 },
      { year: 2023, net: 28.4, operating: 32.8 },
      { year: 2024, net: 26.8, operating: 31.9 },
      { year: 2025, net: 29.2, operating: 34.6 },
    ],
    roic: [
      { year: 2021, value: 28.3 },
      { year: 2022, value: 22.9 },
      { year: 2023, value: 28.3 },
      { year: 2024, value: 24.2 },
      { year: 2025, value: 28.3 },
    ],
    fcf: [
      { year: 2021, value: 5.7 },
      { year: 2022, value: 5.2 },
      { year: 2023, value: 7.1 },
      { year: 2024, value: 6.0 },
      { year: 2025, value: 7.8 },
    ],
  },
}
