// ─────────────────────────────────────────────────────────────────────────────
// Uber Technologies, Inc. (UBER) - Analyse ponctuelle
// Enveloppe : CTO. Devise : USD (société US, publie en USD).
// Snapshot ancré FY2025 (clos 31/12/2025), cours du jour mentionné dans onePager.
// ─────────────────────────────────────────────────────────────────────────────
//
// NOTES METHODO (à lire avant toute reprise) :
//  - BPA NORMALISE La Thèse : le résultat net GAAP est inexploitable en série.
//    Il est gonflé par (i) une reprise d'impôt non-cash (release du valuation
//    allowance, dont 5,0 Md$ Pays-Bas en 2025 ; DTA passés de 6,2 à 11,0 Md$),
//    et (ii) la ligne "Other income (expense), net" qui porte les réévaluations
//    des participations cotées (Didi, Aurora, Grab) : +3,3 Md$ en 2021, -7,0 Md$
//    en 2022. Pont normalisé : EBIT + intérêts nets, IS normalisé 24 % (statutaire
//    US 21 % + states + mix international), participations et equity method retirés,
//    SBC CONSERVEE en charge (3,5 % du CA, "pas un cas Autodesk"). BPA normalisé
//    2025 = 2,10 $ (vs 4,73 GAAP dilué, vs 2,45 non-GAAP Uber qui réintègre la SBC).
//  - ROIC normalise : NOPAT = EBIT x (1 - 24 %). Au taux d'IS EFFECTIF publié
//    (74,9 % en 2025, distordu par la reprise de DTA), le NOPAT serait écrasé, d'où
//    un ROIC faux à 4,2 %. Au taux normalisé : ROIC 2025 = 12,8 %, premier exercice
//    AU-DESSUS du WACC (8,3 %). C'est l'inflexion centrale de la fiche.
//  - WACC US 8,33 % : Rf = UST 10 ans 4,09 %, beta 1,12 vs S&P 500 Total Return
//    (régression mensuelle 5 ans), ERP Damodaran US 4,23 % (sans CRP). Rd retenu
//    à 4,8 % (placeholder) ; impact négligeable, D/V = 6,5 %.
//  - DETTE NETTE positive (4 975 M$ = dette totale 12 080 - cash 7 105, leases
//    inclus), donc IC = CP + dette nette = 33 058 M$. Hors bilan : participations
//    9,2 Md$ + placements assurance 8,9 Md$ (adossés aux réserves d'assurance).
//  - FCF métrique = OCF - tout capex (standard La Thèse) = 9 763 M$ (marge 18,8 %).
//    Capex plancher (336 M$ : business asset-light). Le DCF central tourne sur le
//    FCF OWNER (FCF - SBC après IS = 8,4 Md$), conservateur ; le FCF publié est
//    flatté par le float assurance (+2,7 Md$ de réserves en 2025).
//  - Calculateurs automatiques DCF/PER : #NUM! (CAGR calculé sur base 2021 négative,
//    FCF -743 / BPA négatif). Reconstruits manuellement (hypothèses ci-dessous).
//  - Aucun dividende. Rachats d'actions 6,5 Md$ en 2025 (1,3 Md$ en 2024) : les
//    actions diluées BAISSENT (2 151 -> 2 120 M), la SBC est plus que neutralisée.
//  - RADARS (valuationCharts) : multiples de marché TTM via l'API Yahoo (base
//    homogène). Multiples GAAP, donc le PER (17x) et le ROIC
//    (6,8 %) du radar diffèrent des séries normalisées de la fiche (PER réel ~33x,
//    ROIC 12,8 %). Ecart signalé en <NoteAnalyse>. Pairs directs : Lyft, DoorDash,
//    Grab, Delivery Hero (tous en transition : multiples distordus, attendu).
//  - prixCible = objectif HORIZON (non actualisé) : convergence DCF terminal 2030
//    (~122 $) et PER de sortie 27x sur BPA 2030 4,41 $ (~119 $) = 120 $, +/- MoE
//    (beta 1,12 x 15 % = 16,8 %) -> 100-140 $. Les niveaux d'entrée (Verdict) sont
//    les zones justes ACTUALISEES avec MoS, distincts du prixCible.
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const uber: AnalyseCard = {
  slug:           'uber',
  type:           'ponctuelle',             // Pierre hors position, pas de suivi trimestriel engagé
  title:          'Uber Technologies',
  ticker:         'UBER',
  secteur:        'Technologie',
  geo:            'États-Unis',
  conviction:     'forte',                  // réseau dense mondial, mais risque réglementaire (statut chauffeurs) + disruption AV : forte, pas exceptionnelle
  positionnement: 'surveillance',           // hors position : décote correcte, mais incertitudes structurelles
  lastUpdated:    '2026-06-14',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '2031',
  excerpt:        "Le numéro un mondial du transport à la demande a franchi en 2025 le seuil de la création de valeur : ROIC 13 %, FCF 9,8 Md$, rachats massifs. Mais son résultat net GAAP, gonflé par une reprise d'impôt et les plus-values sur participations, fait passer son PER pour deux fois moins cher qu'il ne l'est.",
  glossaire:      ['effet-de-reseau', 'asset-light', 'moat', 'free-cash-flow', 'roic', 'per-valorisation'],
  logo:           '/analyse/UBER.png',
  // prixCible = objectif HORIZON 2031 (non actualisé). Convergence DCF terminal
  // 2030 (~122 $) + PER de sortie 27x sur BPA 2030 4,41 $ (~119 $) = 120 $.
  // MoE = beta 1,12 x 15 % = 16,8 % -> 100-140 $.
  prixCible:      { bas: 100, haut: 140, devise: 'USD' },
  // Cours 68,85 vs zone juste centrale ~80 $ (DCF central post-MoS 85 $ / PER r=10 % 74 $)
  // -> décote de l'ordre de 14 %, dans la fourchette "correcte".
  marginOfSafety: 'correcte',
  readingTime:    38,

  onePager: {
    thesis:    "Le leader mondial de la mobilité, devenu machine à cash : FCF 9,8 Md$, ROIC enfin au-dessus du WACC. Son PER de 17x masque un PER réel de 33x.",
    cours:     68.85,
    coursDate: '2026-06-12',
    devise:    'USD',
    range52w:  { low: 67, high: 102 },
  },

  metrics: {
    per:               32.8,   // cours 68,85 / BPA normalisé 2,10 (le PER GAAP de 17x est gonflé par la reprise d'impôt)
    evEbitda:          23.9,   // EV @ cours du jour 150,9 Md$ / EBITDA GAAP 6,31 Md$ (base Excel)
    fcfYield:          6.5,    // FCF 9 763 / EV (dénominateur EV, convention La Thèse)
    roic:              12.8,   // NOPAT normalisé (IS 24 %) / IC -> au-dessus du WACC pour la 1re fois
    wacc:              8.3,
    detteEbitda:       0.79,   // dette nette 4 975 / EBITDA GAAP 6 312 (base Excel)
    croissanceCA3ans:  17.7,   // CAGR CA 2022-2025
    croissanceBPA3ans: 71.9,   // CAGR BPA 3 ans N/M (BPA 2022 négatif) ; proxy = CAGR Adjusted EBITDA 2022-2025
    margeEbit:         10.7,
    margeBrute:        39.8,
    payoutRatio:       0,      // aucun dividende
    currentRatio:      1.14,
    dso:               27,     // créances clients 3 827 / CA x 365 (faible : encaissement quasi-immédiat des plateformes)
  },

  tendances: {
    per:       'baisse',   // derating : le BPA normalisé rattrape le cours (PER normalisé 57x 2024 -> 39x 2025)
    fcfYield:  'hausse',   // FCF/EV : -0,9 % (2021) -> 5,5 % (2025)
    roic:      'hausse',   // -17 % (2021) -> 12,8 %, franchit le WACC en 2025
    margeEbit: 'hausse',   // -22 % (2021) -> 10,7 %
  },

  updates: [
    {
      date: '2026-06-14',
      note: "Création de la fiche. Données FY2025 (clos 31/12/2025), 10-Q Q1-2026, supplemental Q4-2025. BPA normalisé (participations + reprise d'impôt retirées, SBC conservée).",
    },
    {
      date: '2026-08-05',
      note: 'Résultats Q2-2026 attendus. Source : Yahoo Finance API.',
    },
  ],

  chartData: {
    // ── CA sur 5 ans (Md$) ────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 17.455 },
      { year: 2022, value: 31.877 },
      { year: 2023, value: 37.281 },
      { year: 2024, value: 43.978 },
      { year: 2025, value: 52.017 },
    ],

    // ── Répartition géographique du CA (FY2025) ───────────────────────────
    geoRevenue: [
      { region: 'Amérique du Nord', pct: 50.9 },   // US & Canada
      { region: 'EMEA',             pct: 31.5 },
      { region: 'Asie-Pacifique',   pct: 11.3 },
      { region: 'Amérique Latine',  pct:  6.3 },
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────
    // net 2024-2025 SUPERIEURE à l'opérationnelle : artefact de la reprise d'impôt
    // (non-récurrent), commenté dans la prose Rentabilité.
    marges: [
      { year: 2021, gross: 46.4, operating: -22.0, net:  -3.3 },
      { year: 2022, gross: 38.3, operating:  -5.7, net: -28.7 },
      { year: 2023, gross: 39.8, operating:   3.0, net:   5.8 },
      { year: 2024, gross: 39.4, operating:   6.4, net:  22.4 },
      { year: 2025, gross: 39.8, operating:  10.7, net:  19.4 },
    ],

    // ── ROIC normalisé sur 5 ans (%) - NOPAT = EBIT x (1 - 24 %) ───────────
    roic: [
      { year: 2021, value: -17.3 },
      { year: 2022, value: -11.9 },
      { year: 2023, value:   4.4 },
      { year: 2024, value:   8.0 },
      { year: 2025, value:  12.8 },
    ],

    // ── ROIC normalisé vs WACC (%) ────────────────────────────────────────
    roicVsWacc: [
      { year: 2021, value: -17.3, wacc: 5.85 },
      { year: 2022, value: -11.9, wacc: 9.42 },
      { year: 2023, value:   4.4, wacc: 8.53 },
      { year: 2024, value:   8.0, wacc: 8.40 },
      { year: 2025, value:  12.8, wacc: 8.33 },
    ],

    // ── Free Cash Flow sur 5 ans (Md$) - OCF - tout capex ─────────────────
    fcf: [
      { year: 2021, value: -0.743 },
      { year: 2022, value:  0.390 },
      { year: 2023, value:  3.362 },
      { year: 2024, value:  6.895 },
      { year: 2025, value:  9.763 },
    ],

    // ── CA par segment opérationnel (Md$) ─────────────────────────────────
    segmentRevenue: {
      unit: 'Md$',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'Mobility', value:  6.953 },
          { name: 'Delivery', value:  8.362 },
          { name: 'Freight',  value:  2.132 },
        ]},
        { year: 2022, segments: [
          { name: 'Mobility', value: 14.029 },
          { name: 'Delivery', value: 10.901 },
          { name: 'Freight',  value:  6.947 },
        ]},
        { year: 2023, segments: [
          { name: 'Mobility', value: 19.832 },
          { name: 'Delivery', value: 12.204 },
          { name: 'Freight',  value:  5.245 },
        ]},
        { year: 2024, segments: [
          { name: 'Mobility', value: 25.087 },
          { name: 'Delivery', value: 13.750 },
          { name: 'Freight',  value:  5.141 },
        ]},
        { year: 2025, segments: [
          { name: 'Mobility', value: 29.670 },
          { name: 'Delivery', value: 17.248 },
          { name: 'Freight',  value:  5.099 },
        ]},
      ],
    },

    // ── Comparaison valorisation (radars) ─────────────────────────────────
    // Source : multiples de marché TTM via l'API Yahoo (base homogène pour tous
    // les acteurs). Base GAAP : le PER (17,1x) et le ROIC (6,8 %)
    // d'Uber sont ici en base marché, à distinguer du PER normalisé (~33x) et du
    // ROIC normalisé (12,8 %) du reste de la fiche. Signalé en <NoteAnalyse>.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Uber vs médiane secteur',
        data: [
          { label: 'PER',             valeur: 17.08, secteur: 19.88 },
          { label: 'EV/EBITDA',       valeur: 21.02, secteur: 12.62 },
          { label: 'P/FCF',           valeur: 14.40, secteur: 14.10 },
          { label: 'Marge EBIT %',    valeur: 14.60, secteur:  7.00 },
          { label: 'ROIC %',          valeur:  6.80, secteur:  6.45 },
          { label: 'FCF Yield %',     valeur:  7.00, secteur:  7.10 },
          { label: 'Dette/EBITDA',    valeur:  0.71, secteur:  2.34 },
          { label: 'Croissance CA %', valeur: 14.50, secteur: 14.70 },
        ],
      },
      {
        id: 'vs_pairs', type: 'radar',
        title: 'Valorisation comparée - Uber vs pairs directs',
        concurrent1: 'Lyft', concurrent2: 'DoorDash', concurrent3: 'Delivery Hero',
        data: [
          // Cellules non significatives omises (undefined) : le composant les ignore.
          // Lyft Dette/EBITDA = N/M ; Delivery Hero P/FCF = N/M ; DH PER trailing N/M -> PER forward 44,12.
          { label: 'PER',             valeur: 17.08, concurrent1:   1.98, concurrent2: 71.36, concurrent3: 44.12 },
          { label: 'EV/EBITDA',       valeur: 21.02, concurrent1: -705.12, concurrent2: 46.95, concurrent3: 45.56 },
          { label: 'P/FCF',           valeur: 14.40, concurrent1:   4.60, concurrent2: 35.90 },
          { label: 'Marge EBIT %',    valeur: 14.60, concurrent1:  -0.30, concurrent2:  5.30, concurrent3:  1.10 },
          { label: 'ROIC %',          valeur:  6.80, concurrent1:  -2.40, concurrent2:  4.60, concurrent3:  4.60 },
          { label: 'FCF Yield %',     valeur:  7.00, concurrent1:  21.70, concurrent2:  2.80, concurrent3: -2.20 },
          { label: 'Dette/EBITDA',    valeur:  0.71,                      concurrent2:  -0.81, concurrent3:  8.24 },
          { label: 'Croissance CA %', valeur: 14.50, concurrent1:  13.80, concurrent2: 33.10, concurrent3: 10.10 },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────
    metricHistory: [
      {
        label: 'RD_CA',
        name:  'R&D / CA',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 11.8 },
          { year: 2022, value:  8.8 },
          { year: 2023, value:  8.5 },
          { year: 2024, value:  7.1 },
          { year: 2025, value:  6.5 },
        ],
      },
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2023, value: 70.0 },
          { year: 2024, value: 37.8 },
          { year: 2025, value: 28.2 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (2023-2025)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2023, value: 45.3 },
              { year: 2024, value: 45.3 },
              { year: 2025, value: 45.3 },
            ],
          },
        ],
      },
      {
        label: 'FCF_OCF_Capex',
        name:  'Operating Cash Flow',
        unit:  'Md$',
        data: [
          { year: 2021, value: -0.445 },
          { year: 2022, value:  0.642 },
          { year: 2023, value:  3.585 },
          { year: 2024, value:  7.137 },
          { year: 2025, value: 10.099 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: -0.743 },
              { year: 2022, value:  0.390 },
              { year: 2023, value:  3.362 },
              { year: 2024, value:  6.895 },
              { year: 2025, value:  9.763 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 0.298 },
              { year: 2022, value: 0.252 },
              { year: 2023, value: 0.223 },
              { year: 2024, value: 0.242 },
              { year: 2025, value: 0.336 },
            ],
          },
        ],
      },
      {
        label: 'EPS',
        name:  'BPA normalisé La Thèse',
        unit:  ' $',
        data: [
          { year: 2021, value: -2.28 },
          { year: 2022, value: -1.21 },
          { year: 2023, value:  0.35 },
          { year: 2024, value:  1.06 },
          { year: 2025, value:  2.10 },
        ],
        competitors: [
          {
            name:   'BPA dilué GAAP',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: -0.29 },
              { year: 2022, value: -4.65 },
              { year: 2023, value:  0.87 },
              { year: 2024, value:  4.56 },
              { year: 2025, value:  4.73 },
            ],
          },
        ],
      },
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        yMin: 0,
        data: [
          { year: 2021, value: 51.0 },
          { year: 2022, value: 31.8 },
          { year: 2023, value: 33.3 },
          { year: 2024, value: 27.7 },
          { year: 2025, value: 26.9 },
        ],
        competitors: [
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 33.6 },
              { year: 2022, value: 13.5 },
              { year: 2023, value: 12.8 },
              { year: 2024, value: 11.8 },
              { year: 2025, value: 11.8 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 17.4 },
              { year: 2022, value: 18.3 },
              { year: 2023, value: 20.5 },
              { year: 2024, value: 15.9 },
              { year: 2025, value: 15.1 },
            ],
          },
        ],
      },
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 0.98 },
          { year: 2022, value: 1.04 },
          { year: 2023, value: 1.19 },
          { year: 2024, value: 1.07 },
          { year: 2025, value: 1.14 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.08 },
              { year: 2022, value: 1.08 },
              { year: 2023, value: 1.08 },
              { year: 2024, value: 1.08 },
              { year: 2025, value: 1.08 },
            ],
          },
        ],
      },
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2023, value: 3.4 },
          { year: 2024, value: 1.2 },
          { year: 2025, value: 0.8 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (2023-2025)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2023, value: 1.8 },
              { year: 2024, value: 1.8 },
              { year: 2025, value: 1.8 },
            ],
          },
        ],
      },
      {
        label: 'Dilution',
        name:  'Dilution / Concentration',
        unit:  '%',
        data: [
          { year: 2022, value:  4.2 },
          { year: 2023, value:  5.9 },
          { year: 2024, value:  2.8 },
          { year: 2025, value: -1.4 },
        ],
      },
      {
        label: 'Capex_Action',
        name:  "Rachats d'actions",
        unit:  'Md$',
        yMin:  0,
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 1.252 },
          { year: 2025, value: 6.523 },
        ],
        competitors: [
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 0.298 },
              { year: 2022, value: 0.252 },
              { year: 2023, value: 0.223 },
              { year: 2024, value: 0.242 },
              { year: 2025, value: 0.336 },
            ],
          },
        ],
      },
      {
        label: 'AT',
        name:  'Asset turnover',
        unit:  'x',
        yMin:  0.25,
        data: [
          { year: 2021, value: 0.45 },
          { year: 2022, value: 0.99 },
          { year: 2023, value: 0.96 },
          { year: 2024, value: 0.86 },
          { year: 2025, value: 0.84 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.82 },
              { year: 2022, value: 0.82 },
              { year: 2023, value: 0.82 },
              { year: 2024, value: 0.82 },
              { year: 2025, value: 0.82 },
            ],
          },
        ],
      },
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        data: [
          { year: 2021, value: -14.6 },
          { year: 2022, value:  -9.4 },
          { year: 2023, value:   4.7 },
          { year: 2024, value:   8.7 },
          { year: 2025, value:  13.9 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 5.85 },
              { year: 2022, value: 9.42 },
              { year: 2023, value: 8.53 },
              { year: 2024, value: 8.40 },
              { year: 2025, value: 8.33 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: -17.3 },
              { year: 2022, value: -11.9 },
              { year: 2023, value:   4.4 },
              { year: 2024, value:   8.0 },
              { year: 2025, value:  12.8 },
            ],
          },
        ],
      },
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value:   4.1 },
          { year: 2023, value: -41.7 },
          { year: 2024, value: -56.2 },
          { year: 2025, value:  34.0 },
        ],
      },
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 34.0 },
          { year: 2, value:  3.5 },
          { year: 3, value: 72.5 },
          { year: 4, value: 36.9 },
        ],
      },
      {
        label: 'PER',
        name:  'PER GAAP',
        unit:  'x',
        data: [
          { year: 2023, value: 59.7 },
          { year: 2024, value: 13.2 },
          { year: 2025, value: 17.2 },
        ],
        competitors: [
          {
            name:   'PER normalisé La Thèse',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2023, value: 176.0 },
              { year: 2024, value:  56.9 },
              { year: 2025, value:  38.9 },
            ],
          },
        ],
      },
      {
        label: 'FCFy',
        name:  'Free-Cash-Flow Yield',
        unit:  '%',
        data: [
          { year: 2021, value: -0.86 },
          { year: 2022, value:  0.70 },
          { year: 2023, value:  2.48 },
          { year: 2024, value:  5.15 },
          { year: 2025, value:  5.48 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.59 },
              { year: 2022, value: 2.59 },
              { year: 2023, value: 2.59 },
              { year: 2024, value: 2.59 },
              { year: 2025, value: 2.59 },
            ],
          },
          {
            name:  'UST 10 ans',
            color: '#52B788',
            data: [
              { year: 2021, value: 1.52 },
              { year: 2022, value: 3.88 },
              { year: 2023, value: 3.73 },
              { year: 2024, value: 4.34 },
              { year: 2025, value: 4.09 },
            ],
          },
        ],
      },
    ],
  },
}
