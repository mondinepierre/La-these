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
      geoRevenue: [
        { region: 'Chine',           pct: 29 },
        { region: 'Reste du monde',  pct: 8.1 },
        { region: 'Corée du Sud',    pct: 24.9 },
        { region: 'Taïwan',          pct: 25.5 },
        { region: 'États-Unis',      pct:  12.5 },
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
    positionnement:  'maintien',
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
        { year: 2025, value: 309 },
      ],
      geoRevenue: [
        { region: 'Europe et Canada',   pct: 21 },
        { region: 'Marché émergents',   pct: 10 },
        { region: 'Asie et Pacifique',  pct: 7 },
        { region: 'Chine',              pct: 6 },
        { region: 'États-Unis',         pct: 56 },
      ],
      marges: [
        { year: 2021, net: 33.9, operating: 41.7 },
        { year: 2022, net: 31.4, operating: 42.3 },
        { year: 2023, net: 36, operating: 44.2 },
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
        { year: 2021, value: 29.3 },
        { year: 2022, value: 57.3 },
        { year: 2023, value: 68.3 },
        { year: 2024, value: -14.7 },
        { year: 2025, value: 28.2 },
      ],
    },
  },
  

  // ── Totale ──
  {
    slug:         'totale',
    type:         'valeur',
    title:        'Totale Energies',
    ticker:       'TTE.PA',
    secteur:      'Énergie',
    geo:          'France',
    conviction:      'forte',
    positionnement:  'allégement',
    lastUpdated:  '2026-03-20',
    statut:       'en-construction',
    portefeuille: 'PEA',
    horizon:      '15 ans',
    excerpt:      'Le roi du pétrole mais pas que',
    prixCible:      { bas: 0, haut: 0, devise: 'EUR' },
    marginOfSafety: 'indéterminée',
    metrics: {
      per:               12.6, // Price / Earnings
      evEbitda:          4.99, // EV / EBITDA
      fcfYield:          6.51, // FCF Yield en % -> FCF / EV ou Cap
      roic:              12.07, // Return on Invested Capital en % (NOPAT/capitaux investis) -> NOPAT = EBIT*(1-%imposition) / Capitaux investis = capitaux propres (equity) + dette court et long terme - trésorerie
      wacc:              7.97, // Weighted Average Cost of Capital en % -> GuruFocus ou WACC = [(Capitalisation /EV)*cout des fonds propre (prendre 9% pour simplification, c'est le retour attendu sur la performance CAGR)]+[(Dette nette/EV) * taux sans risque (Intérets/Dette totale)*(1-Taux d'imposition)]
      detteEbitda:       0.49, // Dette nette / EBITDA — négatif = trésorerie nette // Dette nette = Dette longue + courte - trésorerie
      croissanceCA3ans:  -10.54, // TCAC CA sur 3 ans en %
      croissanceBPA3ans: -9.7, // TCAC BPA sur 3 ans en %
      margeEbit:         15.1, // Marge opérationnelle en %
      margeBrute:        35.97, // Marge brute en %
      payoutRatio:       55, // Dividendes / Résultat net en %
      currentRatio:      17.2, // Actif court terme / Passif court terme
      dso:               37, // Days Sales Outstanding en jours (créance (ou client si il y'a)/ CA)
    },
    tendances: {
      per:       'hausse',
      fcfYield:  'baisse',
      roic:      'baisse',
      margeEbit: 'stable',
    },
    updates: [      
      {
        date: '2026-03-20',
        note: 'Création de la fiche. Conviction initiale : moyenne. Données FY2025.',
      },],
    chartData: {
      revenue: [
        { year: 2021, value: 205.9 },
        { year: 2022, value: 281 },
        { year: 2023, value: 237.1 },
        { year: 2024, value: 214.5 },
        { year: 2025, value: 201.2 },
      ],
      marges: [
        { year: 2021, net: 8.7, operating: 15.8 },
        { year: 2022, net: 7.8, operating: 22.4 },
        { year: 2023, net: 9.7, operating: 17.1 },
        { year: 2024, net: 8, operating: 15.9 },
        { year: 2025, net: 7.2, operating: 15.1 },
      ],
      roic: [
        { year: 2021, value: 13.34 },
        { year: 2022, value: 28.22 },
        { year: 2023, value: 18.7 },
        { year: 2024, value: 14.36 },
        { year: 2025, value: 12.07 },
      ],
      fcf: [
        { year: 2021, value: 15.8 },
        { year: 2022, value: 29.4 },
        { year: 2023, value: 19.1 },
        { year: 2024, value: 12.1 },
        { year: 2025, value: 10.7 },
      ],
    },
  },
  
  // ── TEMPLATE valeur suivie — copier-coller pour chaque nouvelle fiche ──
  // {
  //   slug:         '',
  //   type:         'valeur',
  //   title:        '',
  //   ticker:       '',
  //   secteur:      'Technologie / Énergie / Santé',
  //   geo:          'États-Unis',
  //   conviction:      'exceptionnelle / forte / moyenne / speculative',
  //   positionnement:  'achat fort / accumulation / surveillance / allégement',
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
  //     fcfYield:          0, FCF Yield en % -> FCF / EV ou Cap
  //     roic:              0, Return on Invested Capital en % (NOPAT/capitaux investis) -> NOPAT = EBIT*(1-%imposition) / Capitaux investis = capitaux propres (equity) + dette court et long terme - trésorerie
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