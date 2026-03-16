import type { AnalyseCard } from '@/types/analyses'

export const ANALYSES: AnalyseCard[] = [

  // ── ASML ──────────────────────────────────────────────────
  {
    slug:         'asml',
    type:         'valeur',
    title:        'ASML Holding',
    ticker:       'ASML',
    secteur:      'Technologie',
    geo:          'Europe',
    conviction:   'forte',
    lastUpdated:  '2026-03-16',
    statut:       'actif',
    portefeuille: 'CTO',
    horizon:      '5 ans minimum',
    excerpt:      "L'unique fournisseur de la lithographie EUV pour les puces IA",

    prixCible: {
      bas:    700,
      haut:   860,
      devise: 'EUR',
    },

    marginOfSafety: 'correcte',

    metrics: {
      per:               48.41,
      evEbitda:          36.1,
      fcfYield:          2.44,
      roic:              26.3,
      wacc:              8.5,
      detteEbitda:       -1.2,  // trésorerie nette
      croissanceCA3ans:  14.7,
      croissanceBPA3ans: 11.2,
      margeEbit:         32.1,
      margeBrute:        51.3,
      payoutRatio:       37.0,
      currentRatio:      1.6,
      dso:               64,
    },

    tendances: {
      per:       'baisse',   // compression multiple depuis 2023
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
  },

  // ── TEMPLATE valeur suivie — copier-coller pour chaque nouvelle fiche ──
  // {
  //   slug:         '',
  //   type:         'valeur',
  //   title:        '',
  //   ticker:       '',
  //   secteur:      'Technologie',
  //   geo:          'États-Unis',
  //   conviction:   'surveillance',
  //   lastUpdated:  '2026-03-16',
  //   statut:       'en-construction',
  //   portefeuille: 'Aucun',
  //   horizon:      '',
  //   excerpt:      '',
  //   prixCible:      { bas: 0, haut: 0, devise: 'USD' },
  //   marginOfSafety: 'indéterminée',
  //   metrics: {
  //     per:               0,
  //     evEbitda:          0,
  //     fcfYield:          0,
  //     roic:              0,
  //     wacc:              0,
  //     detteEbitda:       0,
  //     croissanceCA3ans:  0,
  //     croissanceBPA3ans: 0,
  //     margeEbit:         0,
  //     margeBrute:        0,
  //     payoutRatio:       0,
  //     currentRatio:      0,
  //     dso:               0,
  //   },
  //   tendances: {
  //     per:       'stable',
  //     fcfYield:  'stable',
  //     roic:      'stable',
  //     margeEbit: 'stable',
  //   },
  //   updates: [],
  //   chartData: {
  //     revenue: [],
  //     marges:  [],
  //     roic:    [],
  //     fcf:     [],
  //   },
  // },

  // ── Nvidia — Analyse ponctuelle ────────────────────────────
  {
    slug:    'nvidia-resultats-q4-2025',
    type:    'ponctuelle',
    title:   'Nvidia — Résultats Q4 2025 : le pic ou la suite ?',
    date:    '2025-02-26',
    ticker:  'NVDA',
    secteur: 'Technologie',
    geo:     'États-Unis',
    statut:  'actif',
    excerpt: "Des résultats records mais un marché qui n'applaudit plus.",
  },
]