import type { AnalyseCard } from '@/types/analyses'

export const ANALYSES: AnalyseCard[] = [

  // ── ASML ──────────────────────────────────────────────────
  {
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
      per:       'hausse',   // compression multiple depuis 2023
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

  // ── Novo Nordisk ──
  {
    slug:            'novo',
    type:            'valeur',
    title:           'Novo Nordisk A/S',
    ticker:          'NOVO-B.CO',
    secteur:         'Santé',
    geo:             'Europe',
    conviction:      'moyenne',
    positionnement:  'surveillance',
    lastUpdated:     '2026-03-19',
    statut:          'actif',
    portefeuille:    'PEA',
    horizon:         '2030',
    excerpt:         "Le géant danois de l'obésité et du diabète, qui veut passer de l'aiguille à la pillule.",
    prixCible:       { bas: 550, haut: 720, devise: 'DKK' },
    marginOfSafety:  'faible',
    metrics: {
      per:               9.22,
      evEbitda:          7.20,
      fcfYield:          2.62,
      roic:              26.82,
      wacc:              7.89,
      detteEbitda:       63.76, 
      croissanceCA3ans:  20.42,
      croissanceBPA3ans: 27.52,
      margeEbit:         41.30,
      margeBrute:        81.00,
      payoutRatio:       50.7,
      currentRatio:      79.96,
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
        { year: 2025, value: 309 },
      ],
      marges: [
        { year: 2021, net: 31.6, operating: 41.7 },
        { year: 2022, net: 26.6, operating: 42.3 },
        { year: 2023, net: 28.4, operating: 44.2 },
        { year: 2024, net: 26.8, operating: 44.2 },
        { year: 2025, net: 29.2, operating: 41.3 },
      ],
      roic: [
        { year: 2021, value: 27.3 },
        { year: 2022, value: 27.3 },
        { year: 2023, value: 30.5 },
        { year: 2024, value: 29.7 },
        { year: 2025, value: 26.8 },
      ],
      fcf: [
        { year: 2021, value: 29.3 },
        { year: 2022, value: 57.3 },
        { year: 2023, value: 68.3 },
        { year: 2024, value: -14.7 },
        { year: 2025, value: 28.2 },
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
  //   conviction:      'exceptionnelle / forte / moyenne / speculative',
  //   positionnement:  'achat fort / accumulation / surveillance / prise de profit',
  //   lastUpdated:  '2026-03-16',
  //   statut:       'en-construction',
  //   portefeuille: 'Aucun',
  //   horizon:      '',
  //   excerpt:      '',
  //   prixCible:      { bas: 0, haut: 0, devise: 'USD' },
  //   marginOfSafety: 'indéterminée',
  //   metrics: {
  //     per:               0, Price / Earnings
  //     evEbitda:          0, EV / EBITDA
  //     fcfYield:          0, FCF Yield en % -> FCF / CA
  //     roic:              0, Return on Invested Capital en % (NOPAT/capitaux investis) -> NOPAT = EBIT*(1-%imposition) / Capitaux investis = capitaux propres (equity) % dette court et long terme
  //     wacc:              0, Weighted Average Cost of Capital en % -> GuruFocus
  //     detteEbitda:       0, Dette nette / EBITDA — négatif = trésorerie nette
  //     croissanceCA3ans:  0, TCAC CA sur 3 ans en %
  //     croissanceBPA3ans: 0, TCAC BPA sur 3 ans en %
  //     margeEbit:         0, Marge opérationnelle en %
  //     margeBrute:        0, Marge brute en %
  //     payoutRatio:       0, Dividendes / Résultat net en %
  //     currentRatio:      0, Actif court terme / Passif court terme
  //     dso:               0, Days Sales Outstanding en jours (créance / CA)
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
    statut:  'en-construction',
    excerpt: "Des résultats records mais un marché qui n'applaudit plus.",
  },
]