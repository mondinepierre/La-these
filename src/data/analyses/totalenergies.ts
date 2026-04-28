import type { AnalyseCard } from '@/types/analyses'

// ─────────────────────────────────────────────────────────────────────────────
// TotalEnergies SE — Valeur suivie — Mise à jour FY2025
// Dernière révision : 21/03/2026
//
// UNITÉS : Toutes les valeurs financières en M$ (cohérence DEU 2025).
//          Cours en EUR (cotation principale Euronext Paris — TTE.PA).
//          WACC calculé via CAPM — onglet WACC de l'Excel de suivi.
//
// ROIC MÉTHODOLOGIE (La Thèse — Cash Adjusted) :
//   NOPAT = EBIT × (1 − T_effectif)
//   IC    = Capitaux propres + max(dette nette, 0) — goodwill inclus dans CP
//   T_effectif 2025 : 40,5 % (charge impôt consolidé IFRS / EBT)
//   Source : DEU 2025 — compte de résultat consolidé
//
// WACC :
//   Re  = Rf + β × ERP = 2,86 % + 0,947 × 4,78 % = 7,39 %
//   Rd  = |Intérêts bruts| / Dette totale = 3 051 / 61 033 = 5,00 %
//   Rd après impôt = 5,00 % × (1 − 40,5 %) = 2,97 %
//   Pondérations : E/V = 70,3 %, D/V = 29,7 %
//   WACC = 7,39 % × 70,3 % + 2,97 % × 29,7 % = 6,08 %
//   Rf source : OAT 10 ans — 31/12/2025 = 2,86 %
//   β  source : Finviz — β = 0,9472
//   ERP source : Damodaran Implied ERP janvier 2026 = 4,78 %
//
// FCF = OCF − Investissements corporels et incorporels (hors M&A)
//   2025 : 27 343 − 16 953 = 10 390 M$
//
// MÉTRIQUES DASHBOARD : au cours de clôture FY2025 (65,42 € / 31/12/2025)
//   PER = Capi 144 863 M€ / NI 13 357 M$ ≈ 10,85 (approximation EUR/USD)
//   EV  = Capi 144 863 + Dette nette 34 831 = 179 694 M€
// ─────────────────────────────────────────────────────────────────────────────

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
  excerpt:        "La major la mieux positionnée sur la transition énergétique, entre génération de cash robuste sur les hydrocarbures et construction d'un pilier Puissance intégrée, moteur de sa diversification vers un modèle multi-énergies.",
  glossaire: [
    'gnl',
    'integrated-power',
    'stranded-assets',
    'scope-3',
    'moat',
    'marge-brute-d-autofinancement',
  ],
  readingTime:    18,
  logo:           '/analyse/totalenergies.png',
  prixCible:      { bas: 55, haut: 73, devise: 'EUR' },
  // Prix cible en EUR — scénario central, fourchette basse et haute (±14,2 %).
  // Base : BPA ajusté FY2025 (7,05 $) × multiple central 8,57 × = 73,5 $
  // Fourchette 63,1 – 83,9 $ / taux de change 1,153 = 54,7 – 72,8 € → arrondi 55 – 73 €.
  // Calculs conduits en USD (cohérence DEU) — voir note de change dans le Verdict.
  // Le cours de rédaction (76,96 €) est au-dessus de la borne haute : marge de sécurité négative.
  marginOfSafety: 'négative',

  // ── Métriques snapshot — cours de clôture FY2025 (65,42 € / 31/12/2025) ──
  metrics: {
    per:               10.85,  // Capi 144 863 M€ / NI 13 357 M$
    evEbitda:           5.10,  // EV 179 694 M€ / EBITDA 35 254 M$
    fcfYield:           5.78,  // FCF 10 390 / EV 179 694 — dénominateur EV
    roic:               8.36,  // NOPAT 12 737 / IC 152 354 — Cash Adjusted
    wacc:               6.08,  // CAPM — détail en en-tête
    detteEbitda:        0.99,  // DN 34 831 / EBITDA 35 254
    croissanceCA3ans: -11.53,  // CAGR CA FY2022→FY2025
    croissanceBPA3ans: -9.70,  // CAGR BPA dilué FY2022→FY2025
    margeEbit:         11.74,  // EBIT 21 407 / Produits des ventes 182 344
    margeBrute:        35.98,  // Marge brute / Produits des ventes
    payoutRatio:       64.4,   // Dividendes 8 603 / NI 13 357
    currentRatio:       0.97,  // Actif courant 89 469 / Passif courant 92 563
    dso:               37.1,   // (Créances 18 559 / PdV 182 344) × 365
  },

  tendances: {
    per:       'hausse',
    fcfYield:  'baisse',
    roic:      'baisse',
    margeEbit: 'baisse',
  },

  updates: [
    {
      date: '2026-03-21',
      note: 'Mise à jour complète FY2025. Données DEU 2025. WACC recalculé CAPM (6,08 % vs 7,97 % GuruFocus v1). ROIC corrigé 8,36 % (vs 12,07 % v1). Toutes les sections du template complétées. Conviction maintenue : Forte. Positionnement : Allègement.',
    },
  ],

  chartData: {

    revenue: [
      { year: 2021, value: 205.9 },
      { year: 2022, value: 281.0 },
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

    // RONET ajusté par branche (M$) — non IFRS.
    // 2021 exclu : nomenclature "Integrated Power" lancée avec le rebrand juin 2021.
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'RONET total' },
      data: [
        { year: 2022, segments: [
          { name: 'Exploration - Production', value: 17479 },
          { name: 'LNG',                      value: 11169 },
          { name: 'Puissance intégrée',        value:   975 },
          { name: 'Raffinage - Chimie',        value:  7302 },
          { name: 'Marketing & Services',      value:  1550 },
        ]},
        { year: 2023, segments: [
          { name: 'Exploration - Production', value: 10942 },
          { name: 'LNG',                      value:  6200 },
          { name: 'Puissance intégrée',        value:  1853 },
          { name: 'Raffinage - Chimie',        value:  4654 },
          { name: 'Marketing & Services',      value:  1458 },
        ]},
        { year: 2024, segments: [
          { name: 'Exploration - Production', value: 10004 },
          { name: 'LNG',                      value:  4869 },
          { name: 'Puissance intégrée',        value:  2173 },
          { name: 'Raffinage - Chimie',        value:  2160 },
          { name: 'Marketing & Services',      value:  1360 },
        ]},
        { year: 2025, segments: [
          { name: 'Exploration - Production', value:  8399 },
          { name: 'LNG',                      value:  4109 },
          { name: 'Puissance intégrée',        value:  2215 },
          { name: 'Raffinage - Chimie',        value:  2378 },
          { name: 'Marketing & Services',      value:  1373 },
        ]},
      ],
    },

    // operating = EBIT / Produits des ventes (hors droits d'accises).
    marges: [
      { year: 2021, gross: 35.75, operating: 12.90, net:  8.86 },
      { year: 2022, gross: 35.65, operating: 17.49, net:  7.99 },
      { year: 2023, gross: 34.67, operating: 15.27, net:  9.82 },
      { year: 2024, gross: 34.74, operating: 13.24, net:  8.20 },
      { year: 2025, gross: 35.98, operating: 11.74, net:  7.33 },
    ],

    roic: [
      { year: 2021, value:  9.49 },
      { year: 2022, value: 15.73 },
      { year: 2023, value: 14.52 },
      { year: 2024, value: 10.47 },
      { year: 2025, value:  8.36 },
    ],

    // WACC 2021 bas (3,53 %) : Rf OAT = −0,18 % non plafonné pour le WACC.
    roicVsWacc: [
      { year: 2021, value:  9.49, wacc: 3.53 },
      { year: 2022, value: 15.73, wacc: 6.82 },
      { year: 2023, value: 14.52, wacc: 6.12 },
      { year: 2024, value: 10.47, wacc: 5.88 },
      { year: 2025, value:  8.36, wacc: 6.08 },
    ],

    // FCF = OCF − Capex industriel (hors acquisitions M&A).
    fcf: [
      { year: 2021, value: 18.067 },
      { year: 2022, value: 31.677 },
      { year: 2023, value: 22.957 },
      { year: 2024, value: 15.945 },
      { year: 2025, value: 10.390 },
    ],

    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'TotalEnergies vs médiane sectorielle — Finviz',
        data: [
          { label: 'PER',          valeur: 15.22, secteur: 17.67 },
          { label: 'P/FCF',        valeur: 17.79, secteur: 15.76 },
          { label: 'EV/EBITDA',    valeur:  6.57, secteur:  7.14 },
          { label: 'Marge EBIT %', valeur: 11.49, secteur: 18.76 },
          { label: 'ROIC %',       valeur:  8.01, secteur:  8.55 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'TotalEnergies vs Shell — Finviz',
        concurrent1: 'Shell',
        data: [
          { label: 'PER',          valeur: 15.22, concurrent1: 14.84 },
          { label: 'P/FCF',        valeur: 17.79, concurrent1: 11.43 },
          { label: 'EV/EBITDA',    valeur:  6.57, concurrent1:  5.56 },
          { label: 'Marge EBIT %', valeur: 11.49, concurrent1: 11.60 },
          { label: 'ROIC %',       valeur:  8.01, concurrent1:  7.41 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: 'TotalEnergies vs Equinor — Finviz',
        concurrent1: 'Equinor',
        data: [
          { label: 'PER',          valeur: 15.22, concurrent1: 19.86 },
          { label: 'P/FCF',        valeur: 17.79, concurrent1: 16.04 },
          { label: 'EV/EBITDA',    valeur:  6.57, concurrent1:  2.91 },
          { label: 'Marge EBIT %', valeur: 11.49, concurrent1: 25.71 },
          { label: 'ROIC %',       valeur:  8.01, concurrent1:  7.63 },
        ],
      },
    ],

    metricHistory: [

      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 4.56 },
          { year: 2022, value: 3.14 },
          { year: 2023, value: 3.95 },
          { year: 2024, value: 3.95 },
          { year: 2025, value: 5.10 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 4.14 }, { year: 2022, value: 4.14 },
              { year: 2023, value: 4.14 }, { year: 2024, value: 4.14 },
              { year: 2025, value: 4.14 },
            ],
          },
        ],
      },

      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'Md$',
        yMin:  0,
        data: [
          { year: 2021, value: 30.41 },
          { year: 2022, value: 47.37 },
          { year: 2023, value: 40.68 },
          { year: 2024, value: 30.85 },
          { year: 2025, value: 27.34 },
        ],
        competitors: [
          {
            name: 'Free Cash Flow', color: '#C9A84C',
            data: [
              { year: 2021, value: 18.07 }, { year: 2022, value: 31.68 },
              { year: 2023, value: 22.96 }, { year: 2024, value: 15.95 },
              { year: 2025, value: 10.39 },
            ],
          },
          {
            name: 'Capex industriel', color: '#A8A29E', dashed: true,
            data: [
              { year: 2021, value: 12.34 }, { year: 2022, value: 15.69 },
              { year: 2023, value: 17.72 }, { year: 2024, value: 14.91 },
              { year: 2025, value: 16.95 },
            ],
          },
        ],
      },

      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '$',
        data: [
          { year: 2021, value: 5.92 },
          { year: 2022, value: 7.85 },
          { year: 2023, value: 8.67 },
          { year: 2024, value: 6.69 },
          { year: 2025, value: 5.78 },
        ],
      },

      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '€',
        data: [
          { year: 2021, value: 2.64 },
          { year: 2022, value: 2.81 },
          { year: 2023, value: 3.01 },
          { year: 2024, value: 3.22 },
          { year: 2025, value: 3.40 },
        ],
      },

      // Label custom — utilisé dans le MDX via <MetricGraph_Brent />
      {
        label: 'Brent',
        name:  'Prix du Brent ($/baril)',
        unit:  '$',
        data: [
          { year: 2021, value:  77.94 },
          { year: 2022, value:  85.99 },
          { year: 2023, value:  77.08 },
          { year: 2024, value:  74.83 },
          { year: 2025, value:  60.91 },
          { year: 2026, value: 107.00 }, // cours spot 21/03/2026 — prime géopolitique Iran/US
        ],
      },

      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 14.48 },
          { year: 2022, value: 28.82 },
          { year: 2023, value: 20.90 },
          { year: 2024, value: 15.81 },
          { year: 2025, value: 12.86 },
        ],
        competitors: [
          {
            name: 'WACC', color: '#C9A84C',
            data: [
              { year: 2021, value: 3.53 }, { year: 2022, value: 6.82 },
              { year: 2023, value: 6.12 }, { year: 2024, value: 5.88 },
              { year: 2025, value: 6.08 },
            ],
          },
          {
            name: 'ROIC (Cash Adjusted)', color: '#2D6A4F', dashed: true,
            data: [
              { year: 2021, value:  9.49 }, { year: 2022, value: 15.73 },
              { year: 2023, value: 14.52 }, { year: 2024, value: 10.47 },
              { year: 2025, value:  8.36 },
            ],
          },
        ],
      },

      // 2022 et 2024 : valeurs aberrantes (ΔIC quasi-nul → dénominateur minime).
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel',
        unit:  '%',
        data: [
          { year: 2022, value:  121.2 },
          { year: 2023, value:   10.9 },
          { year: 2024, value:   99.5 },
          { year: 2025, value:  -48.1 },
        ],
      },

      // year 2 aberrant (−140 %) : ΔIC 2023-2025 quasi-nul → dénominateur minime.
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value:  -48.1 },
          { year: 2, value: -140.0 },
          { year: 3, value:   94.3 },
          { year: 4, value:   55.0 },
        ],
      },

      // PER FY = Capi clôture 31/12 / NI consolidé.
      // PER ajusté : taux plancher 2 % appliqué pour 2021 (Rf = −0,18 %).
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value:  8.00 },
          { year: 2022, value:  7.59 },
          { year: 2023, value:  7.62 },
          { year: 2024, value:  7.87 },
          { year: 2025, value: 10.85 },
        ],
        competitors: [
          {
            name: 'Moyenne PER ajusté (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 8.57 }, { year: 2022, value: 8.57 },
              { year: 2023, value: 8.57 }, { year: 2024, value: 8.57 },
              { year: 2025, value: 8.57 },
            ],
          },
          {
            name: 'PER ajusté taux', color: '#52B788', dashed: true,
            data: [
              { year: 2021, value: 13.45 }, { year: 2022, value:  6.18 },
              { year: 2023, value:  7.55 }, { year: 2024, value:  6.96 },
              { year: 2025, value:  8.69 },
            ],
          },
        ],
      },

      // FCF Yield EV — taux sans risque = OAT 10 ans (plancher 2 % pour 2021).
      {
        label: 'FCFy',
        name:  'FCF Yield (EV)',
        unit:  '%',
        data: [
          { year: 2021, value: 10.37 },
          { year: 2022, value: 16.90 },
          { year: 2023, value: 12.29 },
          { year: 2024, value: 10.36 },
          { year: 2025, value:  5.78 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 11.14 }, { year: 2022, value: 11.14 },
              { year: 2023, value: 11.14 }, { year: 2024, value: 11.14 },
              { year: 2025, value: 11.14 },
            ],
          },
          {
            name: 'OAT 10 ans (Rf)', color: '#52B788',
            data: [
              { year: 2021, value: 2.00 }, { year: 2022, value: 2.57 },
              { year: 2023, value: 2.03 }, { year: 2024, value: 2.36 },
              { year: 2025, value: 2.86 },
            ],
          },
        ],
      },

      // Graphique combiné Current Ratio + Dette/EBITDA — usage custom TTE.
      {
        label: 'CR_D_EBITDA',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.169 },
          { year: 2022, value: 1.145 },
          { year: 2023, value: 1.121 },
          { year: 2024, value: 1.098 },
          { year: 2025, value: 0.967 },
        ],
        competitors: [
          {
            name: 'Dette nette / EBITDA', color: '#C9A84C',
            data: [
              { year: 2021, value: 1.132 }, { year: 2022, value: 0.464 },
              { year: 2023, value: 0.483 }, { year: 2024, value: 0.711 },
              { year: 2025, value: 0.988 },
            ],
          },
        ],
      },

      // CCC négatif structurel : fournisseurs (DPO 114j) financent le BFR.
      {
        label: 'CCC_resume',
        name:  'DSO (jours)',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value:  43.5 },
          { year: 2022, value:  33.8 },
          { year: 2023, value:  39.1 },
          { year: 2024, value:  36.0 },
          { year: 2025, value:  37.1 },
        ],
        competitors: [
          {
            name: 'DIO (jours)', color: '#2D6A4F',
            data: [
              { year: 2021, value: 61.4 }, { year: 2022, value: 49.4 },
              { year: 2023, value: 49.3 }, { year: 2024, value: 53.9 },
              { year: 2025, value: 52.1 },
            ],
          },
          {
            name: 'DPO (jours)', color: '#77bd92',
            data: [
              { year: 2021, value: 131.7 }, { year: 2022, value: 112.6 },
              { year: 2023, value:  93.7 }, { year: 2024, value: 102.8 },
              { year: 2025, value: 113.6 },
            ],
          },
          {
            name: 'Cash Conversion Cycle', color: '#C9A84C',
            data: [
              { year: 2021, value: -26.8 }, { year: 2022, value: -29.4 },
              { year: 2023, value:  -5.3 }, { year: 2024, value: -12.9 },
              { year: 2025, value: -24.4 },
            ],
          },
        ],
      },

      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.629 },
          { year: 2022, value: 0.867 },
          { year: 2023, value: 0.772 },
          { year: 2024, value: 0.685 },
          { year: 2025, value: 0.626 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 0.716 }, { year: 2022, value: 0.716 },
              { year: 2023, value: 0.716 }, { year: 2024, value: 0.716 },
              { year: 2025, value: 0.716 },
            ],
          },
        ],
      },

      // Valeurs négatives = concentration nette (rachats > attributions).
      {
        label: 'Dilution',
        name:  "Variation du nombre d'actions dilué (%)",
        unit:  '%',
        data: [
          { year: 2022, value: -2.84 },
          { year: 2023, value: -5.38 },
          { year: 2024, value: -4.90 },
          { year: 2025, value: -4.33 },
        ],
      },

      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 51.0 },
          { year: 2022, value: 50.0 },
          { year: 2023, value: 36.4 },
          { year: 2024, value: 50.1 },
          { year: 2025, value: 64.4 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 50.4 }, { year: 2022, value: 50.4 },
              { year: 2023, value: 50.4 }, { year: 2024, value: 50.4 },
              { year: 2025, value: 50.4 },
            ],
          },
        ],
      },

      // Retour total = dividendes versés + rachats bruts d'actions.
      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires',
        unit:  'Md$',
        yMin:  0,
        data: [
          { year: 2021, value: 10.18 },
          { year: 2022, value: 18.23 },
          { year: 2023, value: 16.99 },
          { year: 2024, value: 16.03 },
          { year: 2025, value: 16.32 },
        ],
        competitors: [
          {
            name: "Rachats d'actions", color: '#2D6A4F',
            data: [
              { year: 2021, value:  1.82 }, { year: 2022, value:  7.71 },
              { year: 2023, value:  9.17 }, { year: 2024, value:  8.00 },
              { year: 2025, value:  7.71 },
            ],
          },
          {
            name: 'Capex industriel', color: '#A8A29E', dashed: true,
            data: [
              { year: 2021, value: 12.34 }, { year: 2022, value: 15.69 },
              { year: 2023, value: 17.72 }, { year: 2024, value: 14.91 },
              { year: 2025, value: 16.95 },
            ],
          },
        ],
      },

    ],
  },
}