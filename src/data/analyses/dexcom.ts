// ─────────────────────────────────────────────────────────────────────────────
// DexCom, Inc. (DXCM) — Analyse ponctuelle (valeur non détenue)
// Ancre : exercice clos FY2025 (10-K). Cours du jour mentionné (cf. onePager).
// Split 4-pour-1 (juin 2024) : toutes les séries par action sont retraitées.
// SBC 2025 = 159,6 M$ = 3,4 % du CA → base GAAP (pas de cas type Autodesk).
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const DEXCOM: AnalyseCard = {
  slug:           'dexcom',
  type:           'ponctuelle',
  title:          'DexCom, Inc.',
  ticker:         'DXCM',
  secteur:        'Santé',
  geo:            'États-Unis',
  conviction:     'forte',           // Business d'exception, capée sous 'exceptionnelle' par le risque GLP-1 et la marge brute
  positionnement: 'surveillance',
  lastUpdated:    '2026-06-10',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '2031',
  excerpt:        "Le pure player du capteur de glycémie en continu : dispositif et donnée récurrente, ROIC 22 %, bilan quasi net cash, croissance 15 %. Qualité d'exception payée au prix fort, sur fond de marge brute en repli et d'incertitude GLP-1.",
  glossaire:      ['cgm', 'glp-1', 'free-cash-flow', 'roic', 'moat', 'marge-de-securite'],
  logo:           '/analyse/Dexcom.png',
  prixCible:      { bas: 83, haut: 128, devise: 'USD' },   // PER central 105 $ ± MoE 21,7 % (horizon 2031)
  marginOfSafety: 'négative',
  readingTime:    42,
  onePager: {
    thesis:    "Pure player du capteur de glycémie en continu : rente de consommable, ROIC 22 %, net cash. Qualité payée environ 37x, sans marge de sécurité.",
    cours:     78.18,
    coursDate: '2026-06-09',
    devise:    'USD',
    range52w:  { low: 54, high: 90 },
  },

  // ── Métriques snapshot (ancre FY2025, multiples au cours de clôture 66,37 $) ──
  metrics: {
    per:               32.2,   // 66,37 $ / BPA dilué 2,06 $ (FY2025). Environ 37x au cours du jour 78 $
    evEbitda:          23.5,   // EV 27 331 / EBITDA 1 163,6 (corrigé : ligne Excel surévaluée à 30,7)
    fcfYield:          3.9,    // FCF 1 077 / EV 27 331 (convention La Thèse = FCF/EV). 3,4 % au cours du jour
    roic:              22.1,   // NOPAT 700,6 / IC 3 164 — gonflé par le désendettement (IC en repli)
    wacc:              9.9,    // CAPM US : Rf 4,09 % + β 1,45 × ERP 4,23 %
    detteEbitda:       0.4,    // 0,36x — quasi trésorerie nette après remboursement des convertibles
    croissanceCA3ans:  17.0,   // TCAC CA 2022 → 2025
    croissanceBPA3ans: 36.6,   // TCAC BPA dilué 2022 → 2025 (base 2022 encore basse)
    margeEbit:         19.6,
    margeBrute:        60.1,
    payoutRatio:       0,      // Aucun dividende : retour via rachats d'actions
    currentRatio:      1.9,
    dso:               144,
  },

  tendances: {
    per:       'baisse',   // De-rating massif : 265x (2021) vers 32x (2025)
    fcfYield:  'hausse',
    roic:      'hausse',
    margeEbit: 'hausse',
  },

  updates: [
    {
      date: '2026-06-10',
      note: "Création de la fiche. Ancre FY2025 : CA 4 662 M$ (+15,6 %), BPA dilué 2,09 $, FCF 1 077 M$, dette nette 418 M$. DCF recalibré (croissance FCF 13 % central) et calculateur PER recalibré (PER sortie 24x, CAGR BPA 16 %) après correction des artefacts de base 2021. Zone juste 56-65 $, cours du jour 78 $ : surveillance.",
    },
  ],

  chartData: {

    // ── CA sur 5 ans (M$) ─────────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 2448.5 },
      { year: 2022, value: 2909.8 },
      { year: 2023, value: 3622.3 },
      { year: 2024, value: 4033.0 },
      { year: 2025, value: 4662.0 },
    ],

    // ── Répartition géographique du CA (FY2025) ───────────────────────────────
    // Dexcom ne publie qu'un découpage US / International.
    geoRevenue: [
      { region: 'États-Unis',     pct: 71.5 },
      { region: 'Reste du monde', pct: 28.5 },
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    marges: [
      { year: 2021, gross: 68.6, operating: 10.9, net: 8.9 },
      { year: 2022, gross: 64.7, operating: 13.4, net: 11.7 },
      { year: 2023, gross: 63.2, operating: 16.5, net: 14.9 },
      { year: 2024, gross: 60.5, operating: 14.9, net: 14.3 },
      { year: 2025, gross: 60.1, operating: 19.6, net: 17.9 },
    ],

    // ── ROIC simple sur 5 ans (%) ─────────────────────────────────────────────
    roic: [
      { year: 2021, value: 7.4 },
      { year: 2022, value: 9.6 },
      { year: 2023, value: 11.3 },
      { year: 2024, value: 12.1 },
      { year: 2025, value: 22.1 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    roicVsWacc: [
      { year: 2021, value: 7.4,  wacc: 7.6 },
      { year: 2022, value: 9.6,  wacc: 12.1 },
      { year: 2023, value: 11.3, wacc: 10.1 },
      { year: 2024, value: 12.1, wacc: 10.1 },
      { year: 2025, value: 22.1, wacc: 9.9 },
    ],

    // ── Free Cash Flow sur 5 ans (M$) ─────────────────────────────────────────
    fcf: [
      { year: 2021, value: 53.3 },
      { year: 2022, value: 304.7 },
      { year: 2023, value: 511.9 },
      { year: 2024, value: 630.7 },
      { year: 2025, value: 1077.2 },
    ],

    // ── CA par canal de distribution (M$) ─────────────────────────────────────
    // Dexcom opère un seul segment (CGM). Disaggrégation par canal :
    // distributeurs/pharmacies (gros) vs vente directe (patients).
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'CA' },
      data: [
        { year: 2021, segments: [
          { name: 'Distributeurs', value: 2024.3 },
          { name: 'Vente directe', value: 424.2 },
        ]},
        { year: 2022, segments: [
          { name: 'Distributeurs', value: 2470.8 },
          { name: 'Vente directe', value: 439.0 },
        ]},
        { year: 2023, segments: [
          { name: 'Distributeurs', value: 3095.6 },
          { name: 'Vente directe', value: 526.7 },
        ]},
        { year: 2024, segments: [
          { name: 'Distributeurs', value: 3430.1 },
          { name: 'Vente directe', value: 602.9 },
        ]},
        { year: 2025, segments: [
          { name: 'Distributeurs', value: 3959.0 },
          { name: 'Vente directe', value: 703.0 },
        ]},
      ],
    },

    // ── Comparaison valorisation (multiples Yahoo temps réel, cours du jour) ───
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Dexcom vs secteur medtech',
        data: [
          { label: 'PER',                  valeur: 33.56, secteur: 21.98 },
          { label: 'EV/EBITDA',            valeur: 22.08, secteur: 14.95 },
          { label: 'P/FCF',                valeur: 28.0,  secteur: 21.0  },
          { label: 'Marge opérationnelle', valeur: 21.4,  secteur: 19.95 },
          { label: 'ROIC',                 valeur: 21.6,  secteur: 9.4   },
          { label: 'Croissance CA',        valeur: 15.0,  secteur: 9.65  },
        ],
      },
      {
        id: 'vs_pairs', type: 'radar',
        title: 'Valorisation comparée - Dexcom vs pairs diabète/medtech',
        concurrent1: 'Abbott', concurrent2: 'Insulet', concurrent3: 'Medtronic',
        data: [
          { label: 'PER',                  valeur: 33.56, concurrent1: 25.56, concurrent2: 37.38, concurrent3: 21.98 },
          { label: 'EV/EBITDA',            valeur: 22.08, concurrent1: 15.76, concurrent2: 18.32, concurrent3: 12.25 },
          { label: 'P/FCF',                valeur: 28.0,  concurrent1: 21.5,  concurrent2: 31.6,  concurrent3: 20.3  },
          { label: 'Marge opérationnelle', valeur: 21.4,  concurrent1: 13.5,  concurrent2: 16.0,  concurrent3: 21.3  },
          { label: 'ROIC',                 valeur: 21.6,  concurrent1: 7.6,   concurrent2: 19.2,  concurrent3: 4.7   },
          { label: 'Croissance CA',        valeur: 15.0,  concurrent1: 7.8,   concurrent2: 33.9,  concurrent3: 9.9   },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────────
    metricHistory: [

      // ── EV/EBITDA historique ──────────────────────────────────────────────
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 158.6 },
          { year: 2022, value: 91.1 },
          { year: 2023, value: 69.9 },
          { year: 2024, value: 41.6 },
          { year: 2025, value: 23.5 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 76.9 },
              { year: 2022, value: 76.9 },
              { year: 2023, value: 76.9 },
              { year: 2024, value: 76.9 },
              { year: 2025, value: 76.9 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (M$) ────────────────────────────────────────────
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 442.5 },
          { year: 2022, value: 669.5 },
          { year: 2023, value: 748.5 },
          { year: 2024, value: 989.5 },
          { year: 2025, value: 1440.7 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 53.3 },
              { year: 2022, value: 304.7 },
              { year: 2023, value: 511.9 },
              { year: 2024, value: 630.7 },
              { year: 2025, value: 1077.2 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 389.2 },
              { year: 2022, value: 364.8 },
              { year: 2023, value: 236.6 },
              { year: 2024, value: 358.8 },
              { year: 2025, value: 363.5 },
            ],
          },
        ],
      },

      // ── BPA dilué (GAAP, post-split 4:1) ──────────────────────────────────
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '$',
        data: [
          { year: 2021, value: 0.53 },
          { year: 2022, value: 0.82 },
          { year: 2023, value: 1.30 },
          { year: 2024, value: 1.42 },
          { year: 2025, value: 2.09 },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) ──────────────────────────────────────────
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 6.6 },
          { year: 2022, value: 11.4 },
          { year: 2023, value: 13.0 },
          { year: 2024, value: 17.6 },
          { year: 2025, value: 22.5 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 7.6 },
              { year: 2022, value: 12.1 },
              { year: 2023, value: 10.1 },
              { year: 2024, value: 10.1 },
              { year: 2025, value: 9.9 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 7.4 },
              { year: 2022, value: 9.6 },
              { year: 2023, value: 11.3 },
              { year: 2024, value: 12.1 },
              { year: 2025, value: 22.1 },
            ],
          },
        ],
      },

      // ── PER historique (de-rating) ────────────────────────────────────────
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 265.4 },
          { year: 2022, value: 141.9 },
          { year: 2023, value: 97.5 },
          { year: 2024, value: 55.7 },
          { year: 2025, value: 32.2 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 118.5 },
              { year: 2022, value: 118.5 },
              { year: 2023, value: 118.5 },
              { year: 2024, value: 118.5 },
              { year: 2025, value: 118.5 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 307.4 },
              { year: 2022, value: 129.5 },
              { year: 2023, value: 92.0 },
              { year: 2024, value: 52.6 },
              { year: 2025, value: 30.9 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (%) ──────────────────────────────────────────
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 0.09 },
          { year: 2022, value: 0.61 },
          { year: 2023, value: 0.94 },
          { year: 2024, value: 1.85 },
          { year: 2025, value: 3.94 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.49 },
              { year: 2022, value: 1.49 },
              { year: 2023, value: 1.49 },
              { year: 2024, value: 1.49 },
              { year: 2025, value: 1.49 },
            ],
          },
          {
            name:  'Taux sans risque',   // UST 10 ans
            color: '#52B788',
            data: [
              { year: 2021, value: 1.5 },
              { year: 2022, value: 3.83 },
              { year: 2023, value: 3.73 },
              { year: 2024, value: 4.34 },
              { year: 2025, value: 4.09 },
            ],
          },
        ],
      },

      // ── CCC — DSO / DIO / DPO / Cash Conversion Cycle (jours) ─────────────
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 129.9 },
          { year: 2022, value: 127.9 },
          { year: 2023, value: 154.5 },
          { year: 2024, value: 140.1 },
          { year: 2025, value: 144.5 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 169.8 },
              { year: 2022, value: 109.0 },
              { year: 2023, value: 153.2 },
              { year: 2024, value: 124.2 },
              { year: 2025, value: 123.4 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 272.3 },
              { year: 2022, value: 320.6 },
              { year: 2023, value: 368.3 },
              { year: 2024, value: 362.8 },
              { year: 2025, value: 381.5 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 27.4 },
              { year: 2022, value: -83.6 },
              { year: 2023, value: -60.6 },
              { year: 2024, value: -98.5 },
              { year: 2025, value: -113.6 },
            ],
          },
        ],
      },

      // ── Current Ratio ─────────────────────────────────────────────────────
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 5.11 },
          { year: 2022, value: 1.99 },
          { year: 2023, value: 2.84 },
          { year: 2024, value: 1.47 },
          { year: 2025, value: 1.88 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.66 },
              { year: 2022, value: 2.66 },
              { year: 2023, value: 2.66 },
              { year: 2024, value: 2.66 },
              { year: 2025, value: 2.66 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA ─────────────────────────────────────────────
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 2.09 },
          { year: 2022, value: 2.64 },
          { year: 2023, value: 2.51 },
          { year: 2024, value: 2.35 },
          { year: 2025, value: 0.36 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.99 },
              { year: 2022, value: 1.99 },
              { year: 2023, value: 1.99 },
              { year: 2024, value: 1.99 },
              { year: 2025, value: 1.99 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.50 },
          { year: 2022, value: 0.54 },
          { year: 2023, value: 0.58 },
          { year: 2024, value: 0.62 },
          { year: 2025, value: 0.74 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.60 },
              { year: 2022, value: 0.60 },
              { year: 2023, value: 0.60 },
              { year: 2024, value: 0.60 },
              { year: 2025, value: 0.60 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions (%) ─────────────────────────
      // Négatif = nombre d'actions en repli (rachats nets, conversion des converts).
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: -0.30 },
          { year: 2023, value: -0.47 },
          { year: 2024, value: -3.01 },
          { year: 2025, value: -1.74 },
        ],
      },

      // ── Allocation du capital — rachats vs Capex (M$) ─────────────────────
      // Aucun dividende : tout le retour passe par les rachats d'actions.
      {
        label: 'Capex_Action',
        name:  'Rachats d\'actions',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 557.7 },
          { year: 2023, value: 688.7 },
          { year: 2024, value: 750.0 },
          { year: 2025, value: 500.0 },
        ],
        competitors: [
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 389.2 },
              { year: 2022, value: 364.8 },
              { year: 2023, value: 236.6 },
              { year: 2024, value: 358.8 },
              { year: 2025, value: 363.5 },
            ],
          },
        ],
      },

    ],
  },
}
