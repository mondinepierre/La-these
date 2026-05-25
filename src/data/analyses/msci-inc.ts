// ─────────────────────────────────────────────────────────────────────────────
// MSCI Inc. — Valeur suivie
// Ticker : MSCI | Nasdaq | USD | CTO
// Dernière mise à jour : 2026-05-25
// Sources : 10-K FY2025, 10-Q Q1-2026, Earnings Presentation Q4-2025, Proxy 2026
// ─────────────────────────────────────────────────────────────────────────────
//
// NOTE METHODOLOGIQUE — IC & ROIC
//   Les capitaux propres MSCI sont NEGATIFS depuis 2019 (-2 654 M$ en FY2025)
//   en raison de rachats cumulatifs de ~9 Mds$ depuis 2012, superieurs aux
//   benefices retenu. Cela n'affecte pas la solvabilite : la dette est financement
//   de la rente, non signe de detresse.
//   IC La These = CP + max(dette nette, 0) = -2 654,5 + 5 687,0 = 3 032,4 M$
//   ROIC = NOPAT / IC = 1 378,8 / 3 032,4 = 45,5 %
//
// NOTE METHODOLOGIQUE — BPA DE REFERENCE
//   BPA de reference : Adjusted EPS FY2025 = 17,28 $ (vs GAAP EPS dilue 15,69 $)
//   Ajustements MSCI : amortissement intangibles acquisition, stock-based comp, etc.
//   Le PER historique dans les graphiques utilise le GAAP EPS (comparabilite).
//   Le calculateur PER et la these utilisent l'Adjusted EPS.
//
// NOTE METHODOLOGIQUE — BETA
//   Beta source : Finviz / Bloomberg (beta vs S&P 500 simple).
//   Convention La These US : beta vs S&P 500 Total Return (SPXTR).
//   Biais marginal estime : +0,02 a +0,04 sur le beta, soit ~5-10 bps sur le WACC.
//   Impact non materiel sur les conclusions. A corriger lors d'une prochaine MAJ.
//
// PRIX CIBLE — methode PER primaire (divergence DCF/PER 71 %, voir Lecture croisee)
//   BPA adj base FY2025 : 17,28 $ | CAGR central 12 % | PER sortie 35x | Horizon 5 ans
//   BPA proj central 5 ans : 17,28 x (1,12)^5 = 30,46 $
//   Prix cible central : 30,46 x 35 = 1 066 $ | MoE : 1,069 x 15 % = 16,0 %
//   prixCible (non actualise, horizon 5 ans) : { bas: 895, haut: 1237 }
//   Zone juste r=10 % : 662 $ | Zone juste r=12 % : 605 $
//   PRU Pierre : 534,56 $ | Positionnement : accumulation
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const MSCI: AnalyseCard = {
  slug:           'msci',
  type:           'valeur',
  title:          'MSCI Inc.',
  ticker:         'MSCI',
  secteur:        'Finance',
  geo:            'États-Unis',
  conviction:     'forte',
  positionnement: 'accumulation',        // En position (PRU 534,56 $), cours en zone R10 MoS 10 %
  lastUpdated:    '2026-05-25',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '10 ans',             // These de long terme, checkpoints 5 ans
  excerpt:        'Fournisseur mondial de standards financiers pour la gestion institutionnelle : indices, ESG, analytique et actifs prives. Moat exceptionnel fonde sur la certification des normes et les switching costs. Rente recurrente en forte croissance, autofinancement discipline, rachats massifs.',
  glossaire:      ['moat', 'roic', 'wacc', 'pricing-power', 'couts-de-changement', 'fcf-yield'],
  logo:           '/analyse/msci.png',
  // Central : BPA adj 30,46 $ x PER 35x = 1 066 $ | MoE 16,0 % (beta 1,069 x 15 %)
  // Zone juste r=10 % : 662 $ | Zone juste r=12 % : 605 $
  // Niveaux : R10 MoS 10 % = 596 $ | R10 MoS 15 % = 563 $ | R12 MoS 10 % = 545 $
  prixCible:      { bas: 895, haut: 1237, devise: 'USD' },
  marginOfSafety: 'correcte',           // MoS +11 % au cours 589 $ vs zone juste centrale 662 $
  readingTime:    50,
  onePager: {
    thesis:    'Standard mondial incontournable : 15 000 Mds$ d\'AUM répliquent ses indices. 82 % revenus récurrents. ROIC 45 %. Rente sur le capital institutionnel.',
    cours:     588.55,
    coursDate: '2026-05-25',
    devise:    'USD',
    range52w:  { low: 511.84, high: 624.75 },
  },

  // ── Metriques snapshot FY2025 ──────────────────────────────────────────────
  // PER : cours cloture FY2025 (573,73 $) / Adjusted EPS (17,28 $) = 33,19x
  // EV/EBITDA : EV 49 655 M$ / EBITDA 1 848,3 M$ = 26,9x
  // FCF Yield : FCF 1 458,6 M$ / EV 49 655 M$ = 2,9 %
  // ROIC : NOPAT 1 378,8 M$ / IC cash-adjusted 3 032,4 M$ = 45,5 %
  // WACC : Rf UST 4,09 % + beta 1,069 x ERP 4,23 % = 8,61 % ; WACC = 7,88 %
  // Dette nette / EBITDA : 5 687 / 1 848,3 = 3,1x
  // DSO : (crances 986,7 / CA 3 134,5) x 365 = 114,9 jours
  metrics: {
    per:               33.2,   // Adj EPS base : 573,73 / 17,28 = 33,19x
    evEbitda:          26.9,
    fcfYield:          2.9,    // FCF / EV = 1 458,6 / 49 655 = 2,94 %
    roic:              45.5,   // IC cash-adjusted : CP + max(dette nette, 0)
    wacc:              7.88,
    detteEbitda:       3.1,    // Dette LT 6 202,3 M$ / EBITDA 1 848,3 M$
    croissanceCA3ans:  11.7,   // CAGR CA FY2022-FY2025
    croissanceBPA3ans: 14.7,   // CAGR Adj EPS FY2022-FY2025
    margeEbit:         54.7,   // EBIT 1 713,6 / CA 3 134,5
    margeBrute:        82.4,   // (CA - cout des ventes) / CA
    payoutRatio:       46.3,   // Dividendes verses 556,5 M$ / NI GAAP 1 202,3 M$
    currentRatio:      0.90,   // Actifs courants 1 644,8 / Passifs courants 1 829,7
    dso:               114.9,  // Creances clients / CA x 365
  },

  tendances: {
    per:       'baisse',   // De 70x (2021) a 33x (2025) : normalisation post-ZIRP
    fcfYield:  'hausse',   // De 1,7 % (2021) a 3,3 % (2025) : taux + croissance FCF
    roic:      'hausse',   // 35 % -> 45 % sur 5 ans : levier operationnel + mix
    margeEbit: 'stable',   // 52-55 % sur 5 ans : discipline sur opex
  },

  updates: [
    {
      date: '2026-05-25',
      note: 'Creation de la fiche. Donnees FY2025, Q1-2026, guidance 2026.',
    },
    {
      date: '2026-07-21',
      note: 'Résultats Q2-2026 attendus. Source : Yahoo Finance API.',
    },
    {
      date: '2027-01-26',
      note: 'Résultats Q4-2026 / FY2026 attendus. Source : Yahoo Finance API.',
    },
  ],

  chartData: {

    // ── CA FY2021-FY2025 (M$) ─────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 2043.5 },
      { year: 2022, value: 2248.6 },
      { year: 2023, value: 2528.9 },
      { year: 2024, value: 2856.1 },
      { year: 2025, value: 3134.5 },
    ],

    // ── Repartition geographique FY2025 ───────────────────────────────────────
    // Ameriques 44,9 % | EMEA 39,6 % | Asie-Pacifique 15,5 %
    geoRevenue: [
      { region: 'Amériques',      pct: 44.9 },
      { region: 'EMEA',           pct: 39.6 },
      { region: 'Asie-Pacifique', pct: 15.5 },
    ],

    // ── Marges FY2021-FY2025 (%) ──────────────────────────────────────────────
    // NI FY2023 inclut un gain exceptionnel de 143 M$ (Burgiss equity method) :
    // marge nette 45,4 % distordue cette annee-la ; marge normalisee ~40 %
    marges: [
      { year: 2021, gross: 82.4, operating: 52.5, net: 35.5 },
      { year: 2022, gross: 82.0, operating: 53.7, net: 38.7 },
      { year: 2023, gross: 82.3, operating: 54.8, net: 45.4 },
      { year: 2024, gross: 82.0, operating: 53.5, net: 38.8 },
      { year: 2025, gross: 82.4, operating: 54.7, net: 38.4 },
    ],

    // ── ROIC cash-adjusted FY2021-FY2025 (%) ─────────────────────────────────
    // IC = CP + max(dette nette, 0) ; CP negatifs dus aux rachats cumulatifs
    roic: [
      { year: 2021, value: 35.2 },
      { year: 2022, value: 40.1 },
      { year: 2023, value: 35.1 },
      { year: 2024, value: 39.5 },
      { year: 2025, value: 45.5 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // WACC 2021 bas (5,9 %) : UST 10Y a 1,56 % (env. ZIRP)
    // Spread ROIC-WACC positif et croissant toute la periode : creation de valeur
    roicVsWacc: [
      { year: 2021, value: 35.2, wacc: 5.88 },
      { year: 2022, value: 40.1, wacc: 9.43 },
      { year: 2023, value: 35.1, wacc: 8.18 },
      { year: 2024, value: 39.5, wacc: 8.48 },
      { year: 2025, value: 45.5, wacc: 7.88 },
    ],

    // ── Free Cash Flow FY2021-FY2025 (M$) ────────────────────────────────────
    // FCF = OCF - Capex industriel (capex PP&E + capex logiciel capitalise)
    fcf: [
      { year: 2021, value: 883.3 },
      { year: 2022, value: 1022.5 },
      { year: 2023, value: 1145.2 },
      { year: 2024, value: 1386.5 },
      { year: 2025, value: 1458.6 },
    ],

    // ── CA par segment FY2021-FY2025 (M$) ────────────────────────────────────
    // Index : indices de marche, asset-based fees liees a l'AUM
    // Analytics : modeles de risque, attribution de performance
    // Sustainability & Climate : ESG, notes de durabilite
    // Private Assets : donnees sur le non-cote (ex-Burgiss, ex-Real Assets)
    segmentBreaks: [
      { year: 2023, label: 'Integration Burgiss (oct. 2023) dans Private Assets' },
    ],
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'Index',                    value: 1251.8 },
          { name: 'Analytics',                value: 544.3 },
          { name: 'Sustainability & Climate', value: 166.2 },
          { name: 'Private Assets',           value: 81.3 },
        ]},
        { year: 2022, segments: [
          { name: 'Index',                    value: 1303.2 },
          { name: 'Analytics',                value: 576.1 },
          { name: 'Sustainability & Climate', value: 228.3 },
          { name: 'Private Assets',           value: 141.0 },
        ]},
        { year: 2023, segments: [
          { name: 'Index',                    value: 1451.8 },
          { name: 'Analytics',                value: 616.0 },
          { name: 'Sustainability & Climate', value: 287.6 },
          { name: 'Private Assets',           value: 173.6 },
        ]},
        { year: 2024, segments: [
          { name: 'Index',                    value: 1596.1 },
          { name: 'Analytics',                value: 675.1 },
          { name: 'Sustainability & Climate', value: 326.6 },
          { name: 'Private Assets',           value: 258.3 },
        ]},
        { year: 2025, segments: [
          { name: 'Index',                    value: 1786.8 },
          { name: 'Analytics',                value: 714.4 },
          { name: 'Sustainability & Climate', value: 353.9 },
          { name: 'Private Assets',           value: 279.3 },
        ]},
      ],
    },

    // ── Graphiques de valorisation comparee ───────────────────────────────────
    // Sources pairs : Finviz / Koyfin au 22/05/2026 (meme source que MSCI)
    // ROIC pairs : source externe (Finviz) — different du calcul La These
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'MSCI vs mediane sectorielle (data financiere / indices)',
        data: [
          { label: 'PER',             valeur: 33.6,  secteur: 26.4 },
          { label: 'EV/EBITDA',       valeur: 25.8,  secteur: 17.6 },
          { label: 'P/FCF',           valeur: 29.3,  secteur: 22.2 },
          { label: 'Marge EBIT %',    valeur: 53.7,  secteur: 29.8 },
          { label: 'ROIC %',          valeur: 22.7,  secteur: 9.0  },
          { label: 'FCF Yield %',     valeur: 3.3,   secteur: 2.8  },
          { label: 'Dette/EBITDA',    valeur: 3.1,   secteur: 2.0  },
          { label: 'TCAC CA 3 ans %', valeur: 11.7,  secteur: 8.0  },
        ],
      },
      {
        id: 'vs_spgi', type: 'radar',
        title: 'MSCI vs S&P Global (SPGI)',
        concurrent1: 'S&P Global',
        data: [
          { label: 'PER',             valeur: 33.6,  concurrent1: 26.4 },
          { label: 'EV/EBITDA',       valeur: 25.8,  concurrent1: 17.9 },
          { label: 'P/FCF',           valeur: 29.3,  concurrent1: 22.7 },
          { label: 'Marge EBIT %',    valeur: 53.7,  concurrent1: 44.3 },
          { label: 'ROIC %',          valeur: 22.7,  concurrent1: 6.0  },
          { label: 'FCF Yield %',     valeur: 3.3,   concurrent1: 2.9  },
          { label: 'Dette/EBITDA',    valeur: 3.1,   concurrent1: 2.2  },
          { label: 'TCAC CA 3 ans %', valeur: 11.7,  concurrent1: 12.0 },
        ],
      },
      {
        id: 'vs_mco', type: 'radar',
        title: "MSCI vs Moody's Corporation (MCO)",
        concurrent1: "Moody's",
        data: [
          { label: 'PER',             valeur: 33.6,  concurrent1: 32.3 },
          { label: 'EV/EBITDA',       valeur: 25.8,  concurrent1: 22.2 },
          { label: 'P/FCF',           valeur: 29.3,  concurrent1: 30.5 },
          { label: 'Marge EBIT %',    valeur: 53.7,  concurrent1: 45.7 },
          { label: 'ROIC %',          valeur: 22.7,  concurrent1: 17.7 },
          { label: 'FCF Yield %',     valeur: 3.3,   concurrent1: 2.8  },
          { label: 'Dette/EBITDA',    valeur: 3.1,   concurrent1: 2.8  },
          { label: 'TCAC CA 3 ans %', valeur: 11.7,  concurrent1: 10.0 },
        ],
      },
    ],

    // ── Metriques libres sur 5 ans ────────────────────────────────────────────
    metricHistory: [

      // ── EV/EBITDA historique ────────────────────────────────────────────────
      // EV = capi boursiere + dette nette au cours de cloture FY
      // Moyenne 5 ans : (47,8 + 32,6 + 33,8 + 31,7 + 27,2) / 5 = 34,6x
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 47.8 },
          { year: 2022, value: 32.6 },
          { year: 2023, value: 33.8 },
          { year: 2024, value: 31.7 },
          { year: 2025, value: 27.2 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 34.6 },
              { year: 2022, value: 34.6 },
              { year: 2023, value: 34.6 },
              { year: 2024, value: 34.6 },
              { year: 2025, value: 34.6 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (M$) ─────────────────────────────────────────────
      // Capex = PP&E + logiciel capitalise (pas d'acquisitions financieres)
      // FCF margin FY2025 : 1 458,6 / 3 134,5 = 46,5 %
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Operationnel',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 936.1 },
          { year: 2022, value: 1095.4 },
          { year: 2023, value: 1236.0 },
          { year: 2024, value: 1501.6 },
          { year: 2025, value: 1588.4 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 883.3 },
              { year: 2022, value: 1022.5 },
              { year: 2023, value: 1145.2 },
              { year: 2024, value: 1386.5 },
              { year: 2025, value: 1458.6 },
            ],
          },
          {
            name:   'Capex (PP&E + logiciel)',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 52.8 },
              { year: 2022, value: 72.9 },
              { year: 2023, value: 90.8 },
              { year: 2024, value: 115.1 },
              { year: 2025, value: 129.9 },
            ],
          },
        ],
      },

      // ── Adjusted EPS FY2021-FY2025 ($) ────────────────────────────────────
      // Source : communiques de resultats MSCI (reconciliation GAAP -> non-GAAP)
      // CAGR Adj EPS 2021-2025 : 14,8 % | CAGR Adj EPS 3 ans : 14,7 %
      {
        label: 'EPS',
        name:  'Adjusted EPS',
        unit:  '$',
        data: [
          { year: 2021, value: 9.95 },
          { year: 2022, value: 11.45 },
          { year: 2023, value: 13.52 },
          { year: 2024, value: 15.20 },
          { year: 2025, value: 17.28 },
        ],
      },

      // ── Dividende par action ($) ───────────────────────────────────────────
      // Convention DEU : dividende au titre de l'exercice clos
      // Croissance dividende : CAGR 2021-2025 = 18,6 %
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '$',
        data: [
          { year: 2021, value: 3.64 },
          { year: 2022, value: 4.58 },
          { year: 2023, value: 5.52 },
          { year: 2024, value: 6.40 },
          { year: 2025, value: 7.20 },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) ───────────────────────────────────────────
      // ROCE = NOPAT / (CP + dette totale - tresorerie) ; actifs operationnels nets
      // ROCE FY2025 48,3 % > ROIC 45,5 % : legere divergence due structure endettement
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 26.8 },
          { year: 2022, value: 34.6 },
          { year: 2023, value: 36.9 },
          { year: 2024, value: 42.8 },
          { year: 2025, value: 48.3 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 5.88 },
              { year: 2022, value: 9.43 },
              { year: 2023, value: 8.18 },
              { year: 2024, value: 8.48 },
              { year: 2025, value: 7.88 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 35.2 },
              { year: 2022, value: 40.1 },
              { year: 2023, value: 35.1 },
              { year: 2024, value: 39.5 },
              { year: 2025, value: 45.5 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (%) ───────────────────────────────────────────────────
      // ROIIC(N) = delta NOPAT(N) / delta IC(N-1)
      // Valeurs volatiles structurelles : quand IC diminue (rachats > capex operationnel),
      // le denominateur est negatif et le ROIIC devient negatif meme si la rentabilite
      // s'ameliore. Voir ROIIC glissant pour lecture plus stable.
      // FY2023 : -234 % car delta IC FY2022 negatif (-66 M$) alors que Burgiss (727 M$)
      // a ete comptabilise en FY2023 (mars-oct) -> chiffre non representatif
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel',
        unit:  '%',
        data: [
          { year: 2022, value: 10.5 },
          { year: 2023, value: -233.8 },
          { year: 2024, value: 11.1 },
          { year: 2025, value: -88.9 },
        ],
      },

      // ── ROIIC glissant multi-periodes (%) ─────────────────────────────────
      // ROIIC K ans = delta NOPAT(2025 vs 2025-K) / delta IC(2024 vs 2024-K)
      // Lissage essentiel ici : le ROIIC 3 ans (63,5 %) reflète mieux la productivite
      // reelle du capital que les chiffres 1 an ou 2 ans volatils
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 a 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: -88.9 },
          { year: 2, value: 33.4 },
          { year: 3, value: 63.5 },
          { year: 4, value: 30.6 },
        ],
      },

      // ── PER historique (GAAP EPS) et PER ajuste taux ──────────────────────
      // PER GAAP FY2021 70,5x : cours/earnings avec UST ~1,6 % (ZIRP)
      // PER ajuste taux : normalise pour l'environnement de taux (plancher 2 %)
      // Re moyen 5 ans planché : ~8,5 % | Moyenne PER historique 5 ans : 46,5x
      // Compression significative : 70x -> 36x en 5 ans, tendance structurelle
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 70.5 },
          { year: 2022, value: 43.4 },
          { year: 2023, value: 39.3 },
          { year: 2024, value: 42.7 },
          { year: 2025, value: 36.6 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 46.5 },
              { year: 2022, value: 46.5 },
              { year: 2023, value: 46.5 },
              { year: 2024, value: 46.5 },
              { year: 2025, value: 46.5 },
            ],
          },
          {
            name:   'PER ajuste taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 81.2 },
              { year: 2022, value: 34.4 },
              { year: 2023, value: 36.3 },
              { year: 2024, value: 39.4 },
              { year: 2025, value: 36.2 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (%) ───────────────────────────────────────────
      // FCF Yield (cap) = FCF / capitalisation boursiere FY-end
      // Taux sans risque = UST 10Y au 31/12 de l'exercice
      // Spread FCFy vs Rf negatif sur l'ensemble de la periode :
      // MSCI se paye comme une rente de croissance, pas une rente obligataire
      // Moyenne FCF Yield 5 ans : (1,73 + 2,71 + 2,54 + 2,93 + 3,32) / 5 = 2,65 %
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 1.73 },
          { year: 2022, value: 2.71 },
          { year: 2023, value: 2.54 },
          { year: 2024, value: 2.93 },
          { year: 2025, value: 3.32 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.65 },
              { year: 2022, value: 2.65 },
              { year: 2023, value: 2.65 },
              { year: 2024, value: 2.65 },
              { year: 2025, value: 2.65 },
            ],
          },
          {
            name:  'UST 10Y (taux sans risque)',
            color: '#52B788',
            data: [
              { year: 2021, value: 1.56 },
              { year: 2022, value: 3.83 },
              { year: 2023, value: 3.73 },
              { year: 2024, value: 4.34 },
              { year: 2025, value: 4.09 },
            ],
          },
        ],
      },

      // ── DSO / DPO (jours) ──────────────────────────────────────────────────
      // MSCI n'a pas de stocks (DIO = 0) : CCC = DSO - DPO
      // DSO eleve (115 j) structurel : fees AUM facturees en differé apres calcul
      // des AUM trimestriels ; abonnements annuels factures a l'avance = deferred rev
      // DPO faible (10 j) : fournisseurs technologiques payes rapidement
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        data: [
          { year: 2021, value: 118.7 },
          { year: 2022, value: 107.7 },
          { year: 2023, value: 121.2 },
          { year: 2024, value: 104.9 },
          { year: 2025, value: 114.9 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 13.7 },
              { year: 2022, value: 13.6 },
              { year: 2023, value: 8.0 },
              { year: 2024, value: 10.3 },
              { year: 2025, value: 10.2 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 105.0 },
              { year: 2022, value: 94.1 },
              { year: 2023, value: 113.2 },
              { year: 2024, value: 94.6 },
              { year: 2025, value: 104.7 },
            ],
          },
        ],
      },

      // ── Current Ratio ─────────────────────────────────────────────────────
      // Passage sous 1x en FY2023 : hausse du deferred revenue (abonnements
      // prepaid) et extension de la dette LT -> signal comptable, pas de detresse.
      // Le FCF libre (1 459 M$) couvre largement les echeances de dette ST
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.71 },
          { year: 2022, value: 1.40 },
          { year: 2023, value: 0.94 },
          { year: 2024, value: 0.85 },
          { year: 2025, value: 0.90 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.16 },
              { year: 2022, value: 1.16 },
              { year: 2023, value: 1.16 },
              { year: 2024, value: 1.16 },
              { year: 2025, value: 1.16 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA ──────────────────────────────────────────────
      // Levier en hausse en FY2025 (3,1x) apres refinancement opportuniste :
      // MSCI a emis 2 806 M$ d'obligations en 2025 pour rachats + refinancement LT
      // dette LT passant de 4 511 M$ (2024) a 6 202 M$ (2025)
      // Levier reste supporte par FCF : FCF / charges financieres = 1 459 / 210 = 7x
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 2.37 },
          { year: 2022, value: 2.72 },
          { year: 2023, value: 2.74 },
          { year: 2024, value: 2.50 },
          { year: 2025, value: 3.08 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.68 },
              { year: 2022, value: 2.68 },
              { year: 2023, value: 2.68 },
              { year: 2024, value: 2.68 },
              { year: 2025, value: 2.68 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      // CA / Total actifs. Faible (~0,5x) : bilan chargé en goodwill (2 923 M$)
      // et intangibles (833 M$) des acquisitions. Tendance haussiere positive :
      // la croissance organique rattrape progressivement la base d'actifs.
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.37 },
          { year: 2022, value: 0.45 },
          { year: 2023, value: 0.46 },
          { year: 2024, value: 0.52 },
          { year: 2025, value: 0.55 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.47 },
              { year: 2022, value: 0.47 },
              { year: 2023, value: 0.47 },
              { year: 2024, value: 0.47 },
              { year: 2025, value: 0.47 },
            ],
          },
        ],
      },

      // ── Variation annuelle du nombre d'actions dilue (%) ──────────────────
      // Tous les chiffres negatifs = concentration nette par rachats
      // FY2022 : -2,71 % (forte annee de rachats : 1 398 M$)
      // FY2025 : -2,94 % (tres forte annee de rachats : 2 484 M$)
      // FY2025-2021 cumule : -8,2 % de reduction du capital (83,5M -> 76,6M shares)
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: -2.71 },
          { year: 2023, value: -1.69 },
          { year: 2024, value: -1.11 },
          { year: 2025, value: -2.94 },
        ],
      },

      // ── Payout Ratio (%) ──────────────────────────────────────────────────
      // Calcul sur NI GAAP (base comparable)
      // FY2023 bas (38,4 %) : distorsion par gain Burgiss 143 M$ (NI gonfle)
      // Payout normalise autour de 42-46 % : dividende croissant mais raisonnable
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 41.7 },
          { year: 2022, value: 42.8 },
          { year: 2023, value: 38.4 },
          { year: 2024, value: 45.9 },
          { year: 2025, value: 46.3 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 43.0 },
              { year: 2022, value: 43.0 },
              { year: 2023, value: 43.0 },
              { year: 2024, value: 43.0 },
              { year: 2025, value: 43.0 },
            ],
          },
        ],
      },

      // ── Allocation du capital : retour actionnaires vs Capex (M$) ─────────
      // data = retour total (dividendes + rachats nets)
      // FY2025 : retour total 3 041 M$ = 208 % du FCF ! (financement par dette LT)
      // Capex faible (<9 % de l'OCF) : modele asset-light confirme
      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 500.8 },
          { year: 2022, value: 1770.4 },
          { year: 2023, value: 945.2 },
          { year: 2024, value: 1394.4 },
          { year: 2025, value: 3040.8 },
        ],
        competitors: [
          {
            name:  "Rachats d'actions",
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 198.4 },
              { year: 2022, value: 1397.5 },
              { year: 2023, value: 504.2 },
              { year: 2024, value: 885.3 },
              { year: 2025, value: 2484.3 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 52.8 },
              { year: 2022, value: 72.9 },
              { year: 2023, value: 90.8 },
              { year: 2024, value: 115.1 },
              { year: 2025, value: 129.9 },
            ],
          },
        ],
      },

    ],
  },
}
