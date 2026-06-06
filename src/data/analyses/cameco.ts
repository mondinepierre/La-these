// ─────────────────────────────────────────────────────────────────────────────
// Cameco Corporation (CCO.TO / CCJ) - Valeur suivie
// Dernière mise à jour : mai 2026
// Sources : 40-F 2021-2025 (rapports annuels IFRS), Excel La Thèse
// Devise : Dollar canadien (CAD) — cotation primaire TSX (CCO.TO)
//           Cotation secondaire NYSE en USD (CCJ)
// ─────────────────────────────────────────────────────────────────────────────
//
// NOTES MÉTHODOLOGIQUES
//   ROIC : IC = Capitaux propres totaux + max(dette nette, 0)
//          Cameco sans goodwill significatif en propre (Westinghouse en equity-method,
//          non consolidé dans le bilan comme acquisition) — IC = equity holders equity
//          NOPAT = EBIT x (1 - taux effectif) — exclut la quote-part Westinghouse
//          (les equity earnings ne font pas partie de l EBIT opérationnel)
//   Marge brute : (CA - Coût des produits et services HORS D&A) / CA
//                 Le 40-F inclut le D&A dans le Cost of sales — retraitement appliqué
//                 pour comparabilité sectorielle (D&A séparé dans la note CF)
//   Dette nette FY2025 : négative (-118 M$CA, trésorerie nette) — plancher 0 en ROIC
//   Westinghouse Electric : participation 49% — equity-method
//                           CA non consolidé dans les revenus Cameco
//                           Quote-part earnings = Share of earnings from investees (P&L)
//                           Quote-part EBITDA ajusté = ligne dédiée dans le MD&A
//                           Acquisition finalisée novembre 2023 — 2023 = exercice partiel
//   Segments CA : Uranium + Fuel Services + Other (périmètre consolidé uniquement)
//   EBITDA ajusté segments : mesure non-IFRS publiée dans le MD&A
//                            Uranium et Fuel Services : ajustements mineurs vs IFRS
//                            Other/Corporate : frais holding, R&D groupe, admin centrale
//                            Westinghouse : quote-part 49% du total WH ajusté
//                            Total segment ajusté != EBITDA IFRS consolidé (normal)
//   WACC : CAPM avec UST 10 ans comme Rf — Cameco facture et s endette principalement en USD
//
// CARNET DE COMMANDES URANIUM - Future sales commitments (source : MD&A FY2025, en k$CA)
//   Uranium     : 2026 : 481 854  |  2027 : 492 426  |  2028 : 553 687
//                 2029 : 498 133  |  2030 : 411 968  |  au-dela : 855 275
//                 Total 2026-2030 : ~2,44 Md$CA (0,84x CA uranium FY2025)
//   Fuel Serv.  : 2026 : 458 646  |  2027 : 444 353  |  2028 : 458 012
//                 2029 : 421 582  |  2030 : 394 806  |  au-dela : 1 858 824
//                 Total 2026-2030 : ~2,18 Md$CA (3,9x CA fuel services FY2025)
//   Lecture : base de revenus sécurisée sur 5 ans, mais prix réalisé dépend
//             du mix fixed-price/market-related en vigueur chaque année
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const cameco: AnalyseCard = {
  slug:           'cameco',
  type:           'valeur',
  title:          'Cameco',
  ticker:         'CCO.TO',           // Cotation primaire TSX — secondaire NYSE : CCJ (USD)
  secteur:        'Énergie',
  geo:            'Canada',
  conviction:     'forte',            // à valider par Pierre
  positionnement: 'maintien',         // à valider par Pierre
  lastUpdated:    '2026-05-01',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Le premier producteur d\'uranium occidental, en phase de repricing de son carnet de commandes, associé à Westinghouse pour couvrir l\'ensemble du cycle du combustible nucléaire.",
  glossaire:      ['roic', 'wacc', 'free-cash-flow', 'moat', 'per-valorisation', 'marge-de-securite'],
  logo:           '/analyse/cameco.png',
  prixCible:      { bas: 79, haut: 109, devise: '$US' },   // à compléter après la section Valorisation
  marginOfSafety: 'indéterminée',                         // méthodes divergentes — voir section Valorisation
  readingTime:    40,                                      // à compléter à la fin de rédaction

  // ── Métriques snapshot FY2025 ──────────────────────────────────────────────
  // Cours de référence : 125,68 $CA (clôture 31/12/2025, CCO.TO)
  // Cours au moment de la rédaction : ~167,55 $CA
  // Toutes les valeurs calculées sur FY2025 (exercice clos 31/12/2025, IFRS)
  metrics: {
    per:               92.8,   // Cours 125,68 $CA / BPA dilué 1,35 $CA — FY2025
    evEbitda:          60.1,   // EV 54 728 M$CA / EBITDA IFRS 911 M$CA — FY2025
    fcfYield:           2.0,   // FCF 1 075 M$CA / Cap 54 728 M$CA — dette nette négative => EV cap
    roic:               6.8,   // NOPAT 469 M$CA / IC 6 903 M$CA — méthode La Thèse
    wacc:               7.42,  // CAPM : Rf 3,44% (UST 10Y) + beta 0,955 x ERP 4,23% - Rd après impôt 4,19%
    detteEbitda:       -0.13,  // Trésorerie nette 118 M$CA — valeur négative = tréso nette (favorable)
    croissanceCA3ans:  23.1,   // CAGR CA 2022-2025 : 1 868 M => 3 482 M$CA — inclut redémarrage McArthur River
    croissanceBPA3ans: 83.1,   // CAGR BPA 2022-2025 : 0,22 => 1,35 $CA — base 2022 très déprimée, non représentatif structurellement
    margeEbit:         17.75,  // EBIT 618 M$CA / CA 3 482 M$CA — FY2025
    margeBrute:        36.3,   // Retraitement La Thèse : hors D&A (D&A inclus dans Cost of sales selon IFRS Cameco)
    payoutRatio:       17.72,  // Dividendes versés 104 M$CA / Résultat net 590 M$CA — FY2025
    currentRatio:       2.47,  // Actifs courants 2 639 M$CA / Passifs courants 1 070 M$CA
    dso:               37.8,   // (Créances clients 360 M$CA / CA 3 482 M$CA) x 365
  },

  tendances: {
    per:       'baisse',   // 187x (2024) => 93x (2025) — compression liée à la hausse du BPA
    fcfYield:  'stable',   // 2,1-2,2% sur 2023-2025, stable malgré la hausse du cours
    roic:      'hausse',   // -2,8% (2021) => +6,8% (2025) — convergence vers le WACC en cours
    margeEbit: 'hausse',   // -9,2% (2021) => +17,8% (2025) — effet prix uranium et normalisation McArthur
  },

  updates: [
    {
      date: '2026-05-01',
      note: 'Création de la fiche — données FY2025 (40-F 2025). Première année pleine avec Westinghouse (acquis nov. 2023). Spread ROIC-WACC encore légèrement négatif (-0,6 pt) mais en forte convergence depuis 2021.',
    },
  ],

  chartData: {

    // ── CA consolidé sur 5 ans (M$CA) ─────────────────────────────────────
    // Westinghouse non inclus (equity-method — CA non consolidé)
    // Rupture 2022-2023 : redémarrage McArthur River (arrêté depuis 2018, reprise mi-2022)
    // Unité : M$CA tout au long de ce fichier (données brutes 40-F divisées par 1 000)
    revenue: [
      { year: 2021, value: 1475.0 },
      { year: 2022, value: 1868.0 },
      { year: 2023, value: 2587.8 },
      { year: 2024, value: 3135.8 },
      { year: 2025, value: 3481.9 },
    ],

    // ── Répartition géographique du CA FY2025 (%) ─────────────────────────
    // Source : MD&A FY2025 — agrégé Uranium + Fuel Services + Other
    // Americas = essentiellement États-Unis et Canada (utilities nucléaires américains)
    geoRevenue: [
      { region: 'Amériques',         pct: 52.1 },
      { region: 'Europe',            pct: 25.6 },
      { region: 'Asie et Pacifique', pct: 22.3 },
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────
    // gross = marge brute HORS D&A — retraitement La Thèse (D&A intégré dans Cost of sales IFRS)
    // operating = EBIT / CA (publiée)
    // net = résultat net / CA (IFRS — inclut quote-part Westinghouse à partir de nov. 2023)
    // 2021 : résultat net négatif (-102 M$CA) — mine McArthur arrêtée, coûts fixes maintenus
    // 2024 : marge nette comprimée par pertes sur dérivés (-183 M$CA) et perte Westinghouse (-11 M$CA)
    marges: [
      { year: 2021, gross: 13.0, operating:  -9.2, net:  -7.0 },
      { year: 2022, gross: 22.0, operating:   0.8, net:   4.8 },
      { year: 2023, gross: 30.2, operating:  10.9, net:  13.9 },
      { year: 2024, gross: 33.9, operating:  16.3, net:   5.5 },
      { year: 2025, gross: 36.3, operating:  17.8, net:  16.9 },
    ],

    // ── ROIC sur 5 ans (%) ────────────────────────────────────────────────
    // Méthode La Thèse : goodwill inclus, dette nette plancher 0
    // IC = equity holders equity (dette nette plancher à 0 pour 2021, 2022, 2025)
    // IC inclut la dette nette pour 2023 et 2024 (dette positive post-acquisition WH)
    roic: [
      { year: 2021, value: -2.78 },
      { year: 2022, value:  0.27 },
      { year: 2023, value:  2.87 },
      { year: 2024, value:  4.85 },
      { year: 2025, value:  6.79 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────
    // Spread 2025 : -0,63 pt — légèrement négatif mais en convergence rapide depuis 2021 (-8,1 pt)
    roicVsWacc: [
      { year: 2021, value: -2.78, wacc: 5.35 },
      { year: 2022, value:  0.27, wacc: 8.64 },
      { year: 2023, value:  2.87, wacc: 7.14 },
      { year: 2024, value:  4.85, wacc: 7.27 },
      { year: 2025, value:  6.79, wacc: 7.42 },
    ],

    // ── Free Cash Flow sur 5 ans (M$CA) ──────────────────────────────────
    // FCF = OCF - Capex industriel (hors acquisition Westinghouse 3 029 M$CA en 2023)
    // 2022 : FCF déprimé par reconstitution des stocks post-redémarrage McArthur River
    fcf: [
      { year: 2021, value:  359.5 },
      { year: 2022, value:  161.2 },
      { year: 2023, value:  534.5 },
      { year: 2024, value:  693.7 },
      { year: 2025, value: 1075.4 },
    ],

    // ── CA par segment (M$CA) ─────────────────────────────────────────────
    // Westinghouse exclu (equity-method — CA non consolidé dans les revenus Cameco)
    // Other : revenus divers, intersegments — matérialité faible (<2% du CA total)
    segmentRevenue: {
      unit: 'M$CA',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'Uranium',       value: 1055.0 },
          { name: 'Fuel Services', value:  404.3 },
          { name: 'Autres',        value:   15.7 },
        ]},
        { year: 2022, segments: [
          { name: 'Uranium',       value: 1480.1 },
          { name: 'Fuel Services', value:  365.1 },
          { name: 'Autres',        value:   22.8 },
        ]},
        { year: 2023, segments: [
          { name: 'Uranium',       value: 2152.2 },
          { name: 'Fuel Services', value:  425.6 },
          { name: 'Autres',        value:   10.0 },
        ]},
        { year: 2024, segments: [
          { name: 'Uranium',       value: 2676.6 },
          { name: 'Fuel Services', value:  459.2 },
          { name: 'Autres',        value:    0.0 },
        ]},
        { year: 2025, segments: [
          { name: 'Uranium',       value: 2873.9 },
          { name: 'Fuel Services', value:  562.4 },
          { name: 'Autres',        value:   45.6 },
        ]},
      ],
    },

    // ── Graphiques de valorisation comparée ──────────────────────────────
    // Panel restreint : secteur uranium avec peu d opérateurs profitables comparables
    // Kazatomprom : pair direct (ISR, coût plus bas, risque Kazakhstan) — données atypiques
    //   EV/EBITDA 0,33x : suspect (structure de cotation KAP.IL, conversion KZT)
    //   Dividende : non significatif dans ce panel (rendement lié à distribution exceptionnelle)
    // BWXT : services nucléaires défense + civil — pair indirect (pas de mine)
    // Centrus : enrichissement — adjacent, modèle différent
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Cameco vs cycle nucléaire',
        data: [
          { label: 'PER',             valeur: 92.8,  secteur: 49.1   },   // médiane Centrus + BWXT (Kazato exclu: outlier 13,6x)
          { label: 'EV/EBITDA',       valeur: 60.1,  secteur: 47.7   },   // médiane Centrus + BWXT
          { label: 'P/FCF',           valeur: 50.9,  secteur: 64.6   },   // BWXT seul pair avec P/FCF disponible
          { label: 'Marge EBIT %',    valeur: 17.8,  secteur: 13.2   },   // médiane 3 pairs (Kazato + Centrus + BWXT)
          { label: 'ROIC %',          valeur:  6.8,  secteur:  8.3   },
          { label: 'FCF Yield %',     valeur:  2.0,  secteur:  1.5   },
          { label: 'Dette/EBITDA',    valeur: -0.1,  secteur:  3.4   },
          { label: 'TCAC CA 3 ans %', valeur: 23.1,  secteur: 18.7   },   // BWXT seul pair comparable (Centrus: -3,6%)
        ],
      },
      {
        id: 'vs_kazatomprom', type: 'radar',
        title: 'Valorisation comparée - Cameco vs Kazatomprom',
        concurrent1: 'Kazatomprom',
        data: [
          { label: 'PER',             valeur: 92.8, concurrent1: 13.6  },
          { label: 'EV/EBITDA',       valeur: 60.1, concurrent1:  0.3  },   // atypique — structure cotation KAP.IL
          { label: 'P/FCF',           valeur: 50.9, concurrent1:  0    },   // N/M
          { label: 'Marge EBIT %',    valeur: 17.8, concurrent1: 27.5  },   // avantage ISR structurel
          { label: 'ROIC %',          valeur:  6.8, concurrent1: 31.2  },   // coût de production ISR très inférieur
          { label: 'FCF Yield %',     valeur:  2.0, concurrent1:  0    },   // N/M
          { label: 'Dette/EBITDA',    valeur: -0.1, concurrent1: -0.2  },
          { label: 'TCAC CA 3 ans %', valeur: 23.1, concurrent1: -20.5 },   // baisse production volontaire Kazato depuis 2022
        ],
      },
      {
        id: 'vs_bwxt', type: 'radar',
        title: 'Valorisation comparée - Cameco vs BWX Technologies',
        concurrent1: 'BWX Technologies',
        data: [
          { label: 'PER',             valeur: 92.8, concurrent1: 58.0  },
          { label: 'EV/EBITDA',       valeur: 60.1, concurrent1: 47.7  },
          { label: 'P/FCF',           valeur: 50.9, concurrent1: 64.6  },
          { label: 'Marge EBIT %',    valeur: 17.8, concurrent1:  9.3  },
          { label: 'ROIC %',          valeur:  6.8, concurrent1:  8.3  },
          { label: 'FCF Yield %',     valeur:  2.0, concurrent1:  1.5  },
          { label: 'Dette/EBITDA',    valeur: -0.1, concurrent1:  3.4  },
          { label: 'TCAC CA 3 ans %', valeur: 23.1, concurrent1: 18.7  },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────
    metricHistory: [

      // ── EBITDA ajusté par segment (M$CA) ─────────────────────────────
      // Source : MD&A FY2025 — mesure non-IFRS publiée par Cameco
      // Westinghouse = quote-part Cameco 49% du total WH ajusté
      //   2023 = exercice partiel (acquisition nov. 2023)
      //   Saut 2024-2025 : Westinghouse opérationnel et en montée en charge
      // Other/Corporate : frais holding, R&D groupe, admin — structurellement négatif
      // Note : la somme des segments != EBITDA IFRS consolidé (ajustements non-récurrents)
      {
        label: 'Segments_EBITDA_Ajuste',
        name:  'Uranium',
        unit:  'M$CA',
        yMin:  -400,
        data: [
          { year: 2022, value:  380 },
          { year: 2023, value:  835 },
          { year: 2024, value: 1179 },
          { year: 2025, value: 1255 },
        ],
        competitors: [
          {
            name:  'Fuel Services',
            color: '#2D6A4F',
            data: [
              { year: 2022, value: 153 },
              { year: 2023, value: 164 },
              { year: 2024, value: 145 },
              { year: 2025, value: 219 },
            ],
          },
          {
            name:  'Westinghouse (49%)',
            color: '#C9A84C',
            data: [
              { year: 2023, value: 101 },
              { year: 2024, value: 145 },
              { year: 2025, value: 780 },
            ],
          },
          {
            name:   'Corporate et Autres',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2022, value: -102 },
              { year: 2023, value: -269 },
              { year: 2024, value: -276 },
              { year: 2025, value: -325 },
            ],
          },
        ],
      },

      // ── EV/EBITDA historique ──────────────────────────────────────────
      // 2021 = 202,5x (EBITDA quasi nul, mine arrêtée) — non représentatif
      // Moyenne calculée sur 2022-2025 uniquement (55,6x) — structurellement élevée
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 202.5 },
          { year: 2022, value:  69.0 },
          { year: 2023, value:  51.7 },
          { year: 2024, value:  41.5 },
          { year: 2025, value:  60.1 },
        ],
        competitors: [
          {
            name:   'Moyenne 2022-2025',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 55.6 },
              { year: 2022, value: 55.6 },
              { year: 2023, value: 55.6 },
              { year: 2024, value: 55.6 },
              { year: 2025, value: 55.6 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (M$CA) ─────────────────────────────────────
      // Capex 2023 : exclut l acquisition Westinghouse (3 029 M$CA) — non récurrent
      // Capex en hausse structurelle : McArthur River à pleine capacité, exploration Athabasca
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'M$CA',
        yMin:  0,
        data: [
          { year: 2021, value:  458.3 },
          { year: 2022, value:  304.6 },
          { year: 2023, value:  688.1 },
          { year: 2024, value:  905.3 },
          { year: 2025, value: 1408.4 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value:  359.5 },
              { year: 2022, value:  161.2 },
              { year: 2023, value:  534.5 },
              { year: 2024, value:  693.7 },
              { year: 2025, value: 1075.4 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value:  98.8 },
              { year: 2022, value: 143.4 },
              { year: 2023, value: 153.6 },
              { year: 2024, value: 211.6 },
              { year: 2025, value: 333.0 },
            ],
          },
        ],
      },

      // ── BPA dilué ($CA) ──────────────────────────────────────────────
      // 2021 : perte nette (-102 M$CA) — mine McArthur arrêtée, coûts fixes maintenus
      // 2024 : déprimé par pertes sur dérivés (-183 M$CA non récurrent) et FX (-62 M$CA)
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '$CA',
        data: [
          { year: 2021, value: -0.26 },
          { year: 2022, value:  0.22 },
          { year: 2023, value:  0.83 },
          { year: 2024, value:  0.39 },
          { year: 2025, value:  1.35 },
        ],
      },

      // ── Dividende par action ($CA) ───────────────────────────────────
      // Politique : dividende croissant, payout bas — priorité au bilan et au capex
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '$CA',
        data: [
          { year: 2021, value: 0.08 },
          { year: 2022, value: 0.12 },
          { year: 2023, value: 0.12 },
          { year: 2024, value: 0.16 },
          { year: 2025, value: 0.24 },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) ──────────────────────────────────────
      // ROCE 2025 = 7,82% vs WACC 7,42% : léger spread positif
      // ROIC 2025 = 6,79% vs WACC 7,42% : encore légèrement sous le WACC
      // Divergence ROCE/ROIC : ROCE utilise tous les actifs opérationnels (pas le plancher dette nette)
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        data: [
          { year: 2021, value: -2.33 },
          { year: 2022, value:  0.22 },
          { year: 2023, value:  3.83 },
          { year: 2024, value:  6.93 },
          { year: 2025, value:  7.82 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 5.35 },
              { year: 2022, value: 8.64 },
              { year: 2023, value: 7.14 },
              { year: 2024, value: 7.27 },
              { year: 2025, value: 7.42 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: -2.78 },
              { year: 2022, value:  0.27 },
              { year: 2023, value:  2.87 },
              { year: 2024, value:  4.85 },
              { year: 2025, value:  6.79 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (%) ─────────────────────────────────────────────
      // Valeurs très volatiles : phase de redémarrage McArthur River et acquisition WH
      // 2022 : ROIIC très négatif = IC augmente fortement (redémarrage) mais NOPAT quasi nul
      // 2025 : ROIIC négatif = IC diminue (désendettement post-WH) alors que NOPAT progresse
      //        un IC qui se contracte avec un NOPAT positif donne un ROIIC négatif par construction
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value: -79.30 },
          { year: 2023, value:  19.56 },
          { year: 2024, value:   8.94 },
          { year: 2025, value: -47.80 },
        ],
      },

      // ── ROIIC glissant 1 à 4 ans (%) ─────────────────────────────────
      // Lissage qui neutralise les années aberrantes — lire en complément du ROIIC annuel
      // Sur 3 et 4 ans, le ROIIC reflète la qualité réelle des investissements (>20%)
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 a 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: -47.80 },
          { year: 2, value:  21.45 },
          { year: 3, value:  20.60 },
          { year: 4, value:  30.03 },
        ],
      },

      // ── PER historique ────────────────────────────────────────────────
      // 2021 : EPS négatif — PER affiché à 0 (non significatif)
      // Moyenne 2022-2025 : 124,4x — structurellement élevée, cohérente avec le secteur uranium
      // Lecture : le marché price des earnings futurs normalisés, pas les earnings courants
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value:   0    },   // EPS négatif — non significatif
          { year: 2022, value: 148.7  },
          { year: 2023, value:  68.7  },
          { year: 2024, value: 187.2  },
          { year: 2025, value:  92.8  },
        ],
        competitors: [
          {
            name:   'Moyenne 2022-2025',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 124.4 },
              { year: 2022, value: 124.4 },
              { year: 2023, value: 124.4 },
              { year: 2024, value: 124.4 },
              { year: 2025, value: 124.4 },
            ],
          },
          {
            name:   'PER ajuste taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value:   0    },   // EPS négatif
              { year: 2022, value: 145.5  },
              { year: 2023, value:  66.0  },
              { year: 2024, value: 184.1  },
              { year: 2025, value:  89.2  },
            ],
          },
        ],
      },

      // ── FCF Yield historique (%) ──────────────────────────────────────
      // Dénominateur = capitalisation boursière (dette nette négative => EV presque = cap)
      // Rf = UST 10 ans (Cameco emprunte et facture principalement en USD)
      // Spread FCFy vs UST : négatif depuis 2022 — prime de risque absente au cours actuel
      {
        label: 'FCFy',
        name:  'FCF Yield (capitalisation)',
        unit:  '%',
        data: [
          { year: 2021, value: 3.28 },
          { year: 2022, value: 1.21 },
          { year: 2023, value: 2.15 },
          { year: 2024, value: 2.16 },
          { year: 2025, value: 1.97 },
        ],
        competitors: [
          {
            name:   'Moyenne historique 5 ans',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.15 },
              { year: 2022, value: 2.15 },
              { year: 2023, value: 2.15 },
              { year: 2024, value: 2.15 },
              { year: 2025, value: 2.15 },
            ],
          },
          {
            name:  'UST 10 ans',
            color: '#52B788',
            data: [
              { year: 2021, value: 1.43 },
              { year: 2022, value: 3.29 },
              { year: 2023, value: 3.11 },
              { year: 2024, value: 3.24 },
              { year: 2025, value: 3.44 },
            ],
          },
        ],
      },

      // ── CCC — DSO / DIO / DPO ────────────────────────────────────────
      // DIO structurellement tres élevé (~1000-1400 jours) : cycle du combustible nucléaire
      // Délai extraction => conversion => enrichissement => livraison utility : 18-24 mois
      // Ce n est PAS un signal de stock invendable — c est la mécanique sectorielle normale
      // Comparer à Kazatomprom : même anomalie apparente sur le CCC
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value:  68.3 },
          { year: 2022, value:  35.9 },
          { year: 2023, value:  59.6 },
          { year: 2024, value:  40.4 },
          { year: 2025, value:  37.8 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value:  785.0 },
              { year: 2022, value: 1367.8 },
              { year: 2023, value: 1146.8 },
              { year: 2024, value: 1075.2 },
              { year: 2025, value: 1051.0 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value:   7.9 },
              { year: 2022, value:  13.4 },
              { year: 2023, value:  39.9 },
              { year: 2024, value:  27.6 },
              { year: 2025, value:  20.6 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value:  845.4 },
              { year: 2022, value: 1390.4 },
              { year: 2023, value: 1166.5 },
              { year: 2024, value: 1088.0 },
              { year: 2025, value: 1068.3 },
            ],
          },
        ],
      },

      // ── Current Ratio ─────────────────────────────────────────────────
      // 2021-2022 : très élevé (>5) = trésorerie accumulée pendant l arrêt McArthur River
      // 2023 : contraction post-acquisition Westinghouse (utilisation tréso + dette émise)
      // 2024-2025 : normalisation — tréso reconstituée par le FCF croissant
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 5.18 },
          { year: 2022, value: 5.92 },
          { year: 2023, value: 1.55 },
          { year: 2024, value: 1.62 },
          { year: 2025, value: 2.47 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 3.35 },
              { year: 2022, value: 3.35 },
              { year: 2023, value: 3.35 },
              { year: 2024, value: 3.35 },
              { year: 2025, value: 3.35 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA ──────────────────────────────────────────
      // 2021-2022 : trésorerie nette importante (mine arrêtée, cash préservé)
      // 2023 : pic post-acquisition Westinghouse (dette émise pour co-financement)
      // 2024-2025 : désendettement rapide — FCF utilisé pour rembourser la dette
      // 2025 : retour en trésorerie nette (-0,13x)
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  -5,
        data: [
          { year: 2021, value: -4.63 },
          { year: 2022, value: -0.76 },
          { year: 2023, value:  2.42 },
          { year: 2024, value:  0.86 },
          { year: 2025, value: -0.13 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: -0.45 },
              { year: 2022, value: -0.45 },
              { year: 2023, value: -0.45 },
              { year: 2024, value: -0.45 },
              { year: 2025, value: -0.45 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────
      // Structurellement bas pour un mineur (actifs immobilisés lourds)
      // Tendance haussière nette = CA croît plus vite que l actif total : levier croissant
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 0.196 },
          { year: 2022, value: 0.216 },
          { year: 2023, value: 0.260 },
          { year: 2024, value: 0.317 },
          { year: 2025, value: 0.338 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.265 },
              { year: 2022, value: 0.265 },
              { year: 2023, value: 0.265 },
              { year: 2024, value: 0.265 },
              { year: 2025, value: 0.265 },
            ],
          },
        ],
      },

      // ── Dilution ──────────────────────────────────────────────────────
      // 2022 : forte dilution (+8,66%) = augmentation de capital pour co-financer Westinghouse
      //        (acquisition conjointe avec Brookfield Asset Management)
      // 2023-2025 : quasi-stabilité (stock-options résiduelles seulement, ~0%)
      // Pas de programme de rachat d actions en place
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: 8.66 },
          { year: 2023, value: 0.38 },
          { year: 2024, value: 0.26 },
          { year: 2025, value: 0.03 },
        ],
      },

      // ── Payout Ratio (%) ──────────────────────────────────────────────
      // 2021 : résultat net négatif — affiché à 0 (non significatif)
      // 2022 : élevé sur base BPA très déprimée (0,22 $CA)
      // 2024 : élevé car BPA déprimé par les dérivés et FX
      // Tendance : payout structurellement bas (priorité au bilan)
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value:  0    },   // résultat net négatif — non significatif
          { year: 2022, value: 58.1  },
          { year: 2023, value: 14.4  },
          { year: 2024, value: 40.5  },
          { year: 2025, value: 17.7  },
        ],
        competitors: [
          {
            name:   'Moyenne 2022-2025',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 32.7 },
              { year: 2022, value: 32.7 },
              { year: 2023, value: 32.7 },
              { year: 2024, value: 32.7 },
              { year: 2025, value: 32.7 },
            ],
          },
        ],
      },

      // ── Retour aux actionnaires vs Capex (M$CA) ───────────────────────
      // Retour = dividendes uniquement — pas de programme de rachat d actions chez Cameco
      // Capex en forte hausse : McArthur River full capacity, Cigar Lake, exploration
      // Lecture : la priorité va au réinvestissement et au capex, pas à la rémunération CT
      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires',
        unit:  'M$CA',
        yMin:  0,
        data: [
          { year: 2021, value:  31.8 },
          { year: 2022, value:  51.9 },
          { year: 2023, value:  52.1 },
          { year: 2024, value:  69.6 },
          { year: 2025, value: 104.5 },
        ],
        competitors: [
          {
            name:  'Rachats d\'actions',
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
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value:  98.8 },
              { year: 2022, value: 143.4 },
              { year: 2023, value: 153.6 },
              { year: 2024, value: 211.6 },
              { year: 2025, value: 333.0 },
            ],
          },
        ],
      },
      {
        label: 'Prix_Uranium',
        name:  'Prix spot uranium',
        unit:  'US$/lb',
        data: [
          { year: 2021, value: 35.28 },
          { year: 2022, value: 49.81 },
          { year: 2023, value: 62.51 },
          { year: 2024, value: 85.14 },
          { year: 2025, value: 73.54 },
        ],
        competitors: [
          {
            name:  'Prix réalisé Cameco',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 34.53 },
              { year: 2022, value: 44.73 },
              { year: 2023, value: 49.76 },
              { year: 2024, value: 58.34 },
              { year: 2025, value: 62.11 },
            ],
          },
        ],
      },
    ],
  },
}