// ─────────────────────────────────────────────────────────────────────────────
// Air Liquide (AI.PA) - Valeur suivie
// Dernière mise à jour : avril 2026
// Sources : DEU 2021-2025 (rapports annuels), Excel La Thèse
// ─────────────────────────────────────────────────────────────────────────────
//
// NOTES MÉTHODOLOGIQUES
//   ROIC : IC = Capitaux propres totaux + max(dette nette, 0) - goodwill inclus,
//          dette nette hors IFRS 16 (définition Air Liquide = dettes financières
//          CT + LT − trésorerie, excluant dettes de loyers)
//   Dette nette retenue : 8 416 M€ (définition Air Liquide, cohérente Finviz/GuruFocus)
//   CA 2022 : distordu par la refacturation de l'énergie au pic de crise —
//             ne pas interpréter comme croissance organique
//   Marge brute = (CA − Achats) / CA - définition Air Liquide (hors charges de pers.)
//   WACC 2021 : Rf négatif (OAT 10 ans en territoire négatif) → non représentatif
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const airliquide: AnalyseCard = {
  slug:           'airliquide',
  type:           'valeur',
  title:          'Air Liquide',
  ticker:         'AI.PA',
  secteur:        'Industrie',
  geo:            'France',
  conviction:     'forte',
  positionnement: 'allégement',
  lastUpdated:    '2026-04-28',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '5 ans',
  excerpt:        'Le leader français des gaz industriels au modèle contractuel ultra-résilient, entre normalisation post-crise énergétique et pari sur la conversion du backlog en cash-flow.',
  glossaire:      ['moat', 'roic', 'free-cash-flow', 'wacc', 'per', 'ev-ebitda'],
  logo:           '/analyse/air_liquide.png',
  prixCible:      { bas: 153, haut: 213, devise: 'EUR' },
  marginOfSafety: 'négative',
  readingTime:    45,

  metrics: {
    per:               25.4,   // Cours clôture 31/12/2025 (160,26€) / BPA dilué 6,08€
    evEbitda:          12.4,   // EV 101 068 M€ / EBITDA 8 145 M€ - FY2025
    fcfYield:           2.9,   // FCF 2 675 M€ / Capitalisation 92 653 M€ - FY2025
    roic:              11.8,   // NOPAT 4 175 M€ / IC 35 363 M€ - méthodologie La Thèse
    wacc:               5.91,  // CAPM : Rf 2,86 % + β 0,78 × ERP 4,73 % - coût dette 1,1 % après impôt - ERP Damodaran corrigé
    detteEbitda:        1.03,  // Dette nette 8 416 M€ / EBITDA 8 145 M€
    croissanceCA3ans:  -3.5,   // TCAC 2022-2025 - distordu par normalisation énergie (pic 2022)
    croissanceBPA3ans:  4.9,   // TCAC BPA dilué 2022-2025 : 5,27€ → 6,08€
    margeEbit:         20.7,   // ROC 5 582 M€ / CA 26 940 M€
    margeBrute:        64.2,   // (CA − Achats) / CA - définition Air Liquide
    payoutRatio:       56.3,   // Dividendes versés 2 053 M€ / Résultat net 3 644 M€
    currentRatio:       1.14,  // Actifs courants 9 989 M€ / Passifs courants 8 758 M€
    dso:               38.8,   // Créances clients 2 867 M€ / CA × 365
  },

  tendances: {
    per:       'stable',   // 25-26x sur 2023-2025, légère détente vs 2022
    fcfYield:  'baisse',   // 4,4 % (2021) → 2,9 % (2025) : compression continue
    roic:      'hausse',   // 9,6 % (2021) → 11,8 % (2025) : amélioration régulière
    margeEbit: 'hausse',   // 17,8 % (2021) → 20,7 % (2025) : levier opérationnel plan ADVANCE
  },

  updates: [
    {
      date: '2026-04-22',
      note: 'Création de la fiche - données FY2025 (DEU 2025). Plan ADVANCE clôturé avec ses trois objectifs atteints. Nouveau plan stratégique attendu au T1 2026.',
    },
  ],

  chartData: {

    segmentBreaks: [
      { year: 2025, label: 'fusion I&C + MG&T en Ingénierie & Technologies' },
    ],
    // ── CA sur 5 ans (M€) ──────────────────────────────────────────────────
    // Note : pic 2022 = refacturation de l'énergie (non organique)
    revenue: [
      { year: 2021, value: 23334.8 },
      { year: 2022, value: 29934.0 },
      { year: 2023, value: 27607.6 },
      { year: 2024, value: 27057.8 },
      { year: 2025, value: 26940.2 },
    ],

    // ── Répartition géographique du CA (activité Gaz & Services, 96,8 % du total) ──
    geoRevenue: [
      { region: 'Amériques',          pct: 39.7 },
      { region: 'EMEA',             pct: 40.7 },
      { region: 'Asie et Pacifique',  pct: 19.6 },
    ],

    // ── Marges sur 5 ans ──────────────────────────────────────────────────
    // gross = (CA - Achats) / CA. Note 2022 : pic énergie gonfle achats -> marge brute comprimée
    marges: [
      { year: 2021, gross: 59.8, operating: 17.8, net: 11.5 },
      { year: 2022, gross: 53.9, operating: 16.2, net:  9.7 },
      { year: 2023, gross: 59.6, operating: 18.4, net: 11.5 },
      { year: 2024, gross: 63.0, operating: 19.9, net: 12.7 },
      { year: 2025, gross: 64.2, operating: 20.7, net: 13.5 },
    ],

    // ── ROIC simple sur 5 ans ─────────────────────────────────────────────
    roic: [
      { year: 2021, value:  9.6 },
      { year: 2022, value: 10.4 },
      { year: 2023, value: 11.3 },
      { year: 2024, value: 11.1 },
      { year: 2025, value: 11.8 },
    ],

    // ── ROIC vs WACC ──────────────────────────────────────────────────────
    // WACC 2021 non représentatif (Rf négatif - taux zéro BCE)
    roicVsWacc: [
      { year: 2021, value:  9.6, wacc: 2.47 },
      { year: 2022, value: 10.4, wacc: 6.83 },
      { year: 2023, value: 11.3, wacc: 5.53 },
      { year: 2024, value: 11.1, wacc: 6.26 },
      { year: 2025, value: 11.8, wacc: 5.91 },
    ],

    // ── Free Cash Flow sur 5 ans (M€) ─────────────────────────────────────
    // FCF = OCF − Capex industriel (hors acquisitions financières)
    fcf: [
      { year: 2021, value: 2653.9 },
      { year: 2022, value: 2537.1 },
      { year: 2023, value: 2869.6 },
      { year: 2024, value: 2797.1 },
      { year: 2025, value: 2675.0 },
    ],

    // ── CA par segment (M€) ──────────────────────────────────────────────
    // Rupture 2025 : fusion Ingénierie & Construction + Marchés Globaux & Technologies
    // en une seule entité "Ingénierie & Technologies" au 1er janvier 2025.
    // Avant 2025 : "Ingénierie & Tech." = agrégat I&C + MG&T pour comparabilité.
    segmentRevenue: {
      unit: 'M€',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'Grande Industrie',     value: 6978  },
          { name: 'Industriel Marchand',  value: 9487  },
          { name: 'Sante',               value: 3706  },
          { name: 'Electronique',         value: 2096  },
          { name: 'Ingenierie & Tech.',   value: 1068  },  // I&C 387 + MG&T 681
        ]},
        { year: 2022, segments: [
          { name: 'Grande Industrie',     value: 10525 },
          { name: 'Industriel Marchand',  value: 11567 },
          { name: 'Sante',               value: 3923  },
          { name: 'Electronique',         value: 2558  },
          { name: 'Ingenierie & Tech.',   value: 1361  },  // I&C 474 + MG&T 887
        ]},
        { year: 2023, segments: [
          { name: 'Grande Industrie',     value: 7825  },
          { name: 'Industriel Marchand',  value: 11975 },
          { name: 'Sante',               value: 4077  },
          { name: 'Electronique',         value: 2483  },
          { name: 'Ingenierie & Tech.',   value: 1248  },  // I&C 390 + MG&T 858
        ]},
        { year: 2024, segments: [
          { name: 'Grande Industrie',     value: 7120  },
          { name: 'Industriel Marchand',  value: 11906 },
          { name: 'Sante',               value: 4274  },
          { name: 'Electronique',         value: 2510  },
          { name: 'Ingenierie & Tech.',   value: 1248  },  // I&C 412 + MG&T 836
        ]},
        { year: 2025, segments: [
          { name: 'Grande Industrie',     value: 7110  },
          { name: 'Industriel Marchand',  value: 12132 },
          { name: 'Sante',               value: 4378  },
          { name: 'Electronique',         value: 2465  },
          { name: 'Ingenierie & Tech.',   value:  855  },  // Nouvelle entite fusionnee (hors Biogaz/Maritime)
        ]},
      ],
    },

    // ── Comparaison valorisation ──────────────────────────────────────────
    // Composants : <ValuationChart_vs_secteur /> <ValuationChart_vs_pairs />
    // Source : script yfinance — cours avril 2026
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Air Liquide vs Chimie de Spécialité et Gaz Industriels',
        data: [
          { label: 'PER',             valeur: 30.6,  secteur: 26.8 },
          { label: 'EV/EBITDA',       valeur: 15.7,  secteur: 14.3 },
          { label: 'P/FCF',           valeur: 40.2,  secteur: 36.5 },
          { label: 'Marge EBIT %',    valeur: 19.5,  secteur: 13.3 },
          { label: 'ROIC %',          valeur:  7.8,  secteur:  5.0 },
          { label: 'FCF Yield %',     valeur:  2.5,  secteur:  2.1 },
          { label: 'Dette/EBITDA',    valeur:  1.33, secteur:  2.16 },
          { label: 'TCAC CA 3 ans %', valeur: -3.4,  secteur:  5.8 },
        ],
      },
      {
        id: 'vs_linde', type: 'radar',
        title: 'Valorisation comparée - Air Liquide vs Linde',
        concurrent1: 'Linde',
        data: [
          { label: 'PER',             valeur: 30.6,  concurrent1: 33.9  },
          { label: 'EV/EBITDA',       valeur: 15.7,  concurrent1: 19.0  },
          { label: 'P/FCF',           valeur: 40.2,  concurrent1: 45.0  },
          { label: 'Marge EBIT %',    valeur: 19.5,  concurrent1: 28.2  },
          { label: 'ROIC %',          valeur:  7.8,  concurrent1:  8.1  },
          { label: 'FCF Yield %',     valeur:  2.5,  concurrent1:  2.2  },
          { label: 'Dette/EBITDA',    valeur:  1.33, concurrent1:  1.72 },
          { label: 'TCAC CA 3 ans %', valeur: -3.4,  concurrent1:  5.8  },
        ],
      },
      {
        id: 'vs_air_products', type: 'radar',
        title: 'Valorisation comparée - Air Liquide vs Air Products',
        concurrent1: 'Air Products',
        data: [
          { label: 'PER',             valeur: 30.6,  concurrent1: 23.0  },
          { label: 'EV/EBITDA',       valeur: 15.7,  concurrent1: 10.8  },
          { label: 'P/FCF',           valeur: 40.2,  concurrent1: 0     },
          { label: 'Marge EBIT %',    valeur: 19.5,  concurrent1: 14.5  },
          { label: 'ROIC %',          valeur:  7.8,  concurrent1: 5.0   },
          { label: 'FCF Yield %',     valeur:  2.5,  concurrent1: -5.6  },
          { label: 'Dette/EBITDA',    valeur:  1.33, concurrent1: 19.48 },
          { label: 'TCAC CA 3 ans %', valeur: -3.4,  concurrent1: 5.8   },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────
    metricHistory: [
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 11.1 },
          { year: 2022, value: 10.0 },
          { year: 2023, value: 12.3 },
          { year: 2024, value: 12.7 },
          { year: 2025, value: 12.4 },
        ],
        competitors: [
          {
            name:   'Moyenne historique 5 ans',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 11.7 },
              { year: 2022, value: 11.7 },
              { year: 2023, value: 11.7 },
              { year: 2024, value: 11.7 },
              { year: 2025, value: 11.7 },
            ],
          },
        ],
      },
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'M€',
        yMin:  0,
        data: [
          { year: 2021, value: 5570.7 },
          { year: 2022, value: 5810.1 },
          { year: 2023, value: 6263.0 },
          { year: 2024, value: 6322.2 },
          { year: 2025, value: 6518.4 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 2653.9 },
              { year: 2022, value: 2537.1 },
              { year: 2023, value: 2869.6 },
              { year: 2024, value: 2797.1 },
              { year: 2025, value: 2675.0 },
            ],
          },
          {
            name:   'Capex industriel',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 2916.8 },
              { year: 2022, value: 3273.0 },
              { year: 2023, value: 3393.4 },
              { year: 2024, value: 3525.1 },
              { year: 2025, value: 3843.4 },
            ],
          },
        ],
      },
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '€',
        data: [
          { year: 2021, value: 5.42 },
          { year: 2022, value: 5.27 },
          { year: 2023, value: 5.87 },
          { year: 2024, value: 5.72 },
          { year: 2025, value: 6.08 },
        ],
      },
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '€',
        data: [
          { year: 2021, value: 2.75 },
          { year: 2022, value: 2.90 },
          { year: 2023, value: 2.90 },
          { year: 2024, value: 3.30 },
          { year: 2025, value: 3.70 },
        ],
      },
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 12.8 },
          { year: 2022, value: 14.0 },
          { year: 2023, value: 15.1 },
          { year: 2024, value: 15.0 },
          { year: 2025, value: 15.1 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 2.47 },
              { year: 2022, value: 6.83 },
              { year: 2023, value: 5.53 },
              { year: 2024, value: 6.26 },
              { year: 2025, value: 5.91 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value:  9.6 },
              { year: 2022, value: 10.4 },
              { year: 2023, value: 11.3 },
              { year: 2024, value: 11.1 },
              { year: 2025, value: 11.8 },
            ],
          },
        ],
      },
      {
          label: 'ROIIC_YoY',
          name:  'ROIIC',
          unit:  '%',
          data: [
              { year: 2022, value: 18.02  },
              { year: 2023, value: 11.26  },
              { year: 2024, value: -37.72 },
              { year: 2025, value: 3.1    },
          ],
      },
      {
          label: 'ROIIC',
          name:  'ROIIC glissant (1 à 4 ans)',
          unit:  '%',
          data: [
            { year: 1, value: 3.1 },
            { year: 2, value: 15.0 },
            { year: 3, value: 12.9 },
            { year: 4, value: 15.0 },
          ],
      },
      {
        label: 'FCFy',
        name:  'FCF Yield (capitalisation)',
        unit:  '%',
        data: [
          { year: 2021, value: 4.4 },
          { year: 2022, value: 4.0 },
          { year: 2023, value: 3.4 },
          { year: 2024, value: 3.1 },
          { year: 2025, value: 2.9 },
        ],
        competitors: [
          {
            name:   'Moyenne historique 5 ans',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 3.6 },
              { year: 2022, value: 3.6 },
              { year: 2023, value: 3.6 },
              { year: 2024, value: 3.6 },
              { year: 2025, value: 3.6 },
            ],
          },
          {
            name:  'Bunds 10 ans',
            color: '#52B788',
            data: [
              { year: 2021, value: 0.2 },
              { year: 2022, value: 2.6 },
              { year: 2023, value: 2.9 },
              { year: 2024, value: 2.9 },
              { year: 2025, value: 2.9 },
            ],
          },
        ],
      },
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 22.3 },
          { year: 2022, value: 21.7 },
          { year: 2023, value: 26.3 },
          { year: 2024, value: 26.4 },
          { year: 2025, value: 25.4 },
        ],
        competitors: [
          {
            name:   'PER historique moyen 5 ans',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 24.4 },
              { year: 2022, value: 24.4 },
              { year: 2023, value: 24.4 },
              { year: 2024, value: 24.4 },
              { year: 2025, value: 24.4 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 27.8 },
              { year: 2022, value: 20.3 },
              { year: 2023, value: 26.2 },
              { year: 2024, value: 25.5 },
              { year: 2025, value: 23.3 },
            ],
          },
        ],
      },
      // ── CCC résumé ──────────────────────────────────────────────────────
      // DSO = (Créances / CA) × 365
      // DIO = (Stocks / Achats) × 365
      // DPO = (Fournisseurs / Achats) × 365
      // CCC = DSO + DIO - DPO
      // Valeurs négatives = fournisseurs financent le BFR (favorable)
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 42.1 },
          { year: 2022, value: 37.0 },
          { year: 2023, value: 39.6 },
          { year: 2024, value: 40.4 },
          { year: 2025, value: 38.8 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 61.6 },
              { year: 2022, value: 51.8 },
              { year: 2023, value: 66.4 },
              { year: 2024, value: 79.9 },
              { year: 2025, value: 80.5 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 129.6 },
              { year: 2022, value: 100.0 },
              { year: 2023, value: 108.4 },
              { year: 2024, value: 121.0 },
              { year: 2025, value: 113.6 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: -25.8 },
              { year: 2022, value: -11.1 },
              { year: 2023, value:  -2.4 },
              { year: 2024, value:  -0.8 },
              { year: 2025, value:   5.7 },
            ],
          },
          {
            name:   'Moyenne historique CCC (5 ans)',
            color:  '#917939',
            dashed: true,
            data: [
              { year: 2021, value: -6.9 },
              { year: 2022, value: -6.9 },
              { year: 2023, value: -6.9 },
              { year: 2024, value: -6.9 },
              { year: 2025, value: -6.9 },
            ],
          },
        ],
      },

      // ── Current Ratio ───────────────────────────────────────────────────
      // Actifs courants / Passifs courants
      // Saut 2025 : trésorerie gonflée par le financement obligataire DIG Airgas
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 0.898 },
          { year: 2022, value: 0.926 },
          { year: 2023, value: 0.872 },
          { year: 2024, value: 0.880 },
          { year: 2025, value: 1.141 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.943 },
              { year: 2022, value: 0.943 },
              { year: 2023, value: 0.943 },
              { year: 2024, value: 0.943 },
              { year: 2025, value: 0.943 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA ─────────────────────────────────────────────
      // Dette nette hors IFRS 16 / EBITDA consolidé
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 1.650 },
          { year: 2022, value: 1.400 },
          { year: 2023, value: 1.221 },
          { year: 2024, value: 1.160 },
          { year: 2025, value: 1.033 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.293 },
              { year: 2022, value: 1.293 },
              { year: 2023, value: 1.293 },
              { year: 2024, value: 1.293 },
              { year: 2025, value: 1.293 },
            ],
          },
        ],
      },

      // ── Asset Turnover ───────────────────────────────────────────────────
      // CA / Total actifs
      // Baisse 2024-2025 : actifs totaux croissent plus vite que le CA (capex intense)
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        yMin:  0.40,
        data: [
          { year: 2021, value: 0.499 },
          { year: 2022, value: 0.605 },
          { year: 2023, value: 0.571 },
          { year: 2024, value: 0.522 },
          { year: 2025, value: 0.519 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.543 },
              { year: 2022, value: 0.543 },
              { year: 2023, value: 0.543 },
              { year: 2024, value: 0.543 },
              { year: 2025, value: 0.543 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration ─────────────────────────────────────────
      // Variation YoY du nombre d'actions dilué (%)
      // ATTENTION : les sauts 2022 (+10,5 %) et 2024 (+10,3 %) sont les
      // attributions gratuites 1-pour-10 d'Air Liquide (fidélité actionnaire)
      // Ce n'est pas de la dilution par stock-options — c'est une politique
      // de rémunération des actionnaires fidèles, à distinguer dans le MDX.
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value:  10.46 },
          { year: 2023, value:   0.02 },
          { year: 2024, value:  10.34 },
          { year: 2025, value:  -0.01 },
        ],
      },

      // ── Payout Ratio ─────────────────────────────────────────────────────
      // Dividendes versés / Résultat net total
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 52.7 },
          { year: 2022, value: 51.2 },
          { year: 2023, value: 52.3 },
          { year: 2024, value: 52.6 },
          { year: 2025, value: 56.3 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 53.0 },
              { year: 2022, value: 53.0 },
              { year: 2023, value: 53.0 },
              { year: 2024, value: 53.0 },
              { year: 2025, value: 53.0 },
            ],
          },
        ],
      },

      // ── Allocation actionnaires vs Capex ─────────────────────────────────
      // Retour total = Dividendes versés + Rachats d'actions propres
      // Capex = investissements industriels (hors acquisitions financières)
      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires',
        unit:  'M€',
        yMin:  0,
        data: [
          { year: 2021, value: 1457.8 },
          { year: 2022, value: 1678.3 },
          { year: 2023, value: 1748.5 },
          { year: 2024, value: 2039.2 },
          { year: 2025, value: 2057.2 },
        ],
        competitors: [
          {
            name:  'Rachats d\'actions',
            color: '#2D6A4F',
            data: [
              { year: 2021, value:   40.1 },
              { year: 2022, value:  191.5 },
              { year: 2023, value:   81.9 },
              { year: 2024, value:  230.8 },
              { year: 2025, value:    4.0 },
            ],
          },
          {
            name:   'Capex industriel',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 2916.8 },
              { year: 2022, value: 3273.0 },
              { year: 2023, value: 3393.4 },
              { year: 2024, value: 3525.1 },
              { year: 2025, value: 3843.4 },
            ],
          },
        ],
      },
    ],
  },
}