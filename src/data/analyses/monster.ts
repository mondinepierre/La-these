// ─────────────────────────────────────────────────────────────────────────────
// Monster Beverage Corporation (NASDAQ: MNST) - Analyse ponctuelle (riche)
// Devise USD, enveloppe CTO (hors PEA).
// Snapshot : fondamentaux FY2025 (clos 31/12/2025), multiples ancrés au cours de
//            clôture FY2025 76,67 $. Cours spot 93,25 $ (15/06/2026, plus haut 52 sem.)
//            référencé dans le onePager et le Verdict.
//
// CONVENTIONS / CHOIX MÉTHODO (validés Pierre, juin 2026) :
//  - BPA ajusté = base du calculateur PER (GAAP 1,94 $ ; ajusté 2,063 $ en 2025).
//    Le pont GAAP->ajusté = impairments + pertes Alcohol Brands + litiges + items Bang ;
//    NUL en 2021/2022 (non-GAAP = GAAP ces années). SBC (~1,5 % du CA) conservée en
//    charge dans l'ajusté : PAS un cas SaaS, doctrine "référendum SBC" non applicable.
//  - EV vraie = capi - trésorerie nette (cash + placements CT - dette courante).
//    L'Excel plancher l'EV à la capi (treso nette) ; on rétablit l'EV vraie ici.
//    Net cash matériel mais ~3 % de la capi : effet EV/EBITDA et FCF Yield marginal.
//  - WACC 6,34 % = coût des fonds propres pur (dette négligeable, D/V=0). Rf UST 10 ans
//    4,09 %, β 0,531 (régression 60 mois vs S&P 500 Total Return), ERP US 4,23 % (sans CRP).
//  - Pas de dividende -> payout 0, retour actionnaire 100 % rachats (Capex_Action).
//  - ROIC La Thèse 22,5 % (IC = CP, dette plancher 0). ROIC ex-cash ~34 % commenté en MDX.
//
// PIÈGES EXCEL CORRIGÉS : libellés "M€"/"bund"/"Finviz" = artefacts template (tout USD,
//  Rf = UST, β = régression propre). Ligne "R&D % du CA" = en réalité Opex/CA (pas de R&D
//  isolée -> pas de graphe R&D). Calculateurs reparamétrés (croissance centrale réaliste,
//  pas le CAGR 3 ans gonflé par le creux 2022).
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const MONSTER: AnalyseCard = {
  slug:           'monster',
  type:           'ponctuelle',
  title:          'Monster Beverage',
  ticker:         'MNST',
  secteur:        'Consommation',
  geo:            'États-Unis',
  conviction:     'forte',              // Business superbe, mais Celsius = challenger crédible sur le coeur US + dépendance Coca-Cola : pas 'exceptionnelle'
  positionnement: 'surveillance',       // Hors position ; MoS négative au cours actuel
  lastUpdated:    '2026-06-15',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Le leader mondial des boissons énergisantes, adossé au réseau de distribution de Coca-Cola : ROIC 22 %, zéro dette, FCF massif, mais payé 48x les bénéfices à son plus haut historique.",
  glossaire:      ['moat', 'asset-light', 'pricing-power', 'roic', 'free-cash-flow', 'rachat-actions'],
  logo:           '/analyse/monster.png',
  prixCible:      { bas: 86, haut: 100, devise: 'USD' },  // Central PER 93 $ (BPA ajusté 2030 3,32 $ x 28x) +/- MoE 8,0 % (β 0,531 x 15 %)
  marginOfSafety: 'négative',                             // Cours 93,25 $ vs zone juste centrale r=10 % 57,8 $ : -38 %
  readingTime:    37,    // provisoire - recalculé depuis le compte de mots du MDX
  onePager: {
    thesis:    "Le leader mondial de l'energy, distribué par le réseau Coca-Cola : ROIC 22 %, zéro dette. À 48x les bénéfices, le cours paie déjà sa cible 2030.",
    cours:     93.25,
    coursDate: '2026-06-15',
    devise:    'USD',
    range52w:  { low: 58.09, high: 93.28 },
  },

  // ── Métriques snapshot - FY2025, multiples au cours de clôture FY2025 76,67 $ ──
  metrics: {
    per:               39.6,   // 76,67 / BPA dilué GAAP 1,94 $ (ajusté : 37,2x). Au spot 93,25 $ : 48x GAAP / 45x ajusté
    evEbitda:          28.3,   // EV vraie 73 096 M$ (capi 75 478 - net cash 2 382) / EBITDA 2 584 M$
    fcfYield:          2.6,    // FCF 1 936 M$ / EV vraie 73 096 M$
    roic:              22.5,   // ROIC La Thèse : NOPAT 1 857 / IC 8 254 (CP, goodwill incl., dette plancher 0)
    wacc:              6.3,    // CAPM β=0,531 - coût des fonds propres (dette négligeable)
    detteEbitda:       -0.9,   // Trésorerie nette 2 382 M$ (cash + placements CT) / EBITDA 2 584 M$ -> -0,9x
    croissanceCA3ans:  9.5,    // TCAC CA 2022->2025
    croissanceBPA3ans: 20.1,   // TCAC BPA dilué GAAP 2022->2025 (flatté par le creux 2022 ; ajusté : 22,7 %)
    margeEbit:         29.2,
    margeBrute:        55.9,
    payoutRatio:       0,      // Aucun dividende ; 100 % du retour via rachats
    currentRatio:      3.7,
    dso:               71.2,   // Monté à 71 j en 2025 (vs ~59 j) : build de créances clients
  },

  tendances: {
    per:       'hausse',   // Re-rating : 35x (2024) -> 40x (clôture 2025) -> 48x (spot)
    fcfYield:  'baisse',   // Comprimé par la hausse du cours
    roic:      'stable',   // Plage 20-25 %
    margeEbit: 'hausse',   // Reprise 25,8 % (2024) -> 29,2 % (2025)
  },

  updates: [
    {
      date: '2026-06-15',
      note: 'Création de la fiche. Snapshot FY2025 (clos 31/12/2025), cours spot 93,25 $ (15/06/2026, plus haut 52 semaines).',
    },
  ],

  chartData: {

    // Entrée du segment Alcohol Brands : acquisition CANarchy (fév. 2022).
    segmentBreaks: [
      { year: 2022, label: 'Entrée du segment Alcohol Brands (acquisition CANarchy)' },
    ],

    // ── CA sur 5 ans (M$) ─────────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 5541.4 },
      { year: 2022, value: 6311.1 },
      { year: 2023, value: 7140.0 },
      { year: 2024, value: 7492.7 },
      { year: 2025, value: 8294.3 },
    ],

    // ── Répartition géographique du CA (FY2025) ───────────────────────────────
    // US & Canada 61,2 % ; EMEA 22,9 % ; Asia Pacific 7,5 % ; LatAm & Caraïbes 8,4 %.
    geoRevenue: [
      { region: 'Amérique du Nord', pct: 61.2 },
      { region: 'EMEA',             pct: 22.9 },
      { region: 'Asie-Pacifique',   pct: 7.5 },
      { region: 'Amérique Latine',  pct: 8.4 },
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    marges: [
      { year: 2021, gross: 56.1, operating: 32.4, net: 24.9 },
      { year: 2022, gross: 50.3, operating: 25.1, net: 18.9 },   // Creux : aluminium + fret
      { year: 2023, gross: 53.1, operating: 27.4, net: 22.8 },
      { year: 2024, gross: 54.0, operating: 25.8, net: 20.1 },
      { year: 2025, gross: 55.9, operating: 29.2, net: 23.0 },
    ],

    // ── ROIC simple sur 5 ans (%) - La Thèse, goodwill inclus, dette plancher 0 ─
    roic: [
      { year: 2021, value: 20.9 },
      { year: 2022, value: 17.1 },
      { year: 2023, value: 18.7 },
      { year: 2024, value: 24.6 },
      { year: 2025, value: 22.5 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    roicVsWacc: [
      { year: 2021, value: 20.9, wacc: 3.81 },   // Rf 2021 1,56 % (non planché, convention US)
      { year: 2022, value: 17.1, wacc: 6.99 },
      { year: 2023, value: 18.7, wacc: 6.18 },
      { year: 2024, value: 24.6, wacc: 6.64 },
      { year: 2025, value: 22.5, wacc: 6.34 },
    ],

    // ── Free Cash Flow sur 5 ans (M$) ─────────────────────────────────────────
    fcf: [
      { year: 2021, value: 1097.0 },
      { year: 2022, value: 674.2 },    // Déprimé : BFR (stocks) + creux de marge
      { year: 2023, value: 1480.5 },
      { year: 2024, value: 1619.4 },
      { year: 2025, value: 1936.3 },
    ],

    // ── CA par segment opérationnel (M$) ──────────────────────────────────────
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'Monster Energy Drinks', value: 5220.7 },
          { name: 'Strategic Brands',      value: 294.8 },
          { name: 'Alcohol Brands',        value: 0 },
          { name: 'Other',                 value: 25.9 },
        ]},
        { year: 2022, segments: [
          { name: 'Monster Energy Drinks', value: 5833.2 },
          { name: 'Strategic Brands',      value: 353.5 },
          { name: 'Alcohol Brands',        value: 101.4 },
          { name: 'Other',                 value: 22.9 },
        ]},
        { year: 2023, segments: [
          { name: 'Monster Energy Drinks', value: 6555.1 },
          { name: 'Strategic Brands',      value: 376.6 },
          { name: 'Alcohol Brands',        value: 184.9 },
          { name: 'Other',                 value: 23.5 },
        ]},
        { year: 2024, segments: [
          { name: 'Monster Energy Drinks', value: 6864.6 },
          { name: 'Strategic Brands',      value: 432.2 },
          { name: 'Alcohol Brands',        value: 172.3 },
          { name: 'Other',                 value: 23.6 },
        ]},
        { year: 2025, segments: [
          { name: 'Monster Energy Drinks', value: 7665.9 },
          { name: 'Strategic Brands',      value: 468.7 },
          { name: 'Alcohol Brands',        value: 134.7 },   // -21,8 % YoY, déficitaire (sortie en cours)
          { name: 'Other',                 value: 25.0 },
        ]},
      ],
    },

    // ── Valorisation comparée (source : API Yahoo, base marché courante) ───────
    // Axes : PER, EV/EBITDA, P/FCF (plus bas = moins cher) ; Marge EBIT %, ROIC %
    // (plus haut = mieux). ROIC Monster = ROIC La Thèse FY2025 (cellule vide dans le
    // pull Yahoo) ; pour les pairs = base agrégateur Yahoo : lecture comparative
    // indicative, à nuancer.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée : Monster vs médiane des pairs',
        data: [
          { label: 'PER',          valeur: 45.0, secteur: 24.5 },
          { label: 'EV/EBITDA',    valeur: 31.1, secteur: 13.3 },
          { label: 'P/FCF',        valeur: 47.0, secteur: 24.4 },
          { label: 'Marge EBIT %', valeur: 31.0, secteur: 13.5 },
          { label: 'ROIC %',       valeur: 22.5, secteur: 11.9 },
          { label: 'FCF Yield %',     valeur: 2.1,  secteur: 4.1 },
          { label: 'Dette/EBITDA',    valeur: -0.9, secteur: 2.16 },
          { label: 'TCAC CA 3 ans %', valeur: 9.5,  secteur: 8.4 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'Valorisation comparée : Monster vs Celsius',
        concurrent1: 'Celsius',
        data: [
          { label: 'PER',          valeur: 45.0, concurrent1: 66.8 },
          { label: 'EV/EBITDA',    valeur: 31.1, concurrent1: 13.8 },
          { label: 'P/FCF',        valeur: 47.0, concurrent1: 22.7 },
          { label: 'Marge EBIT %', valeur: 31.0, concurrent1: 19.8 },
          { label: 'ROIC %',       valeur: 22.5, concurrent1: 9.8 },
          { label: 'FCF Yield %',     valeur: 2.1,  concurrent1: 4.4 },
          { label: 'Dette/EBITDA',    valeur: -0.9, concurrent1: 0.4 },
          { label: 'TCAC CA 3 ans %', valeur: 9.5,  concurrent1: 137.7 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: 'Valorisation comparée : Monster vs Coca-Cola',
        concurrent1: 'Coca-Cola',
        data: [
          { label: 'PER',          valeur: 45.0, concurrent1: 25.4 },
          { label: 'EV/EBITDA',    valeur: 31.1, concurrent1: 23.2 },
          { label: 'P/FCF',        valeur: 47.0, concurrent1: 65.7 },
          { label: 'Marge EBIT %', valeur: 31.0, concurrent1: 35.1 },
          { label: 'ROIC %',       valeur: 22.5, concurrent1: 14.8 },
          { label: 'FCF Yield %',     valeur: 2.1,  concurrent1: 1.5 },
          { label: 'Dette/EBITDA',    valeur: -0.9, concurrent1: 2.11 },
          { label: 'TCAC CA 3 ans %', valeur: 9.5,  concurrent1: 12.1 },
        ],
      },
      {
        id: 'vs_pair3', type: 'radar',
        title: 'Valorisation comparée : Monster vs PepsiCo',
        concurrent1: 'PepsiCo',
        data: [
          { label: 'PER',          valeur: 45.0, concurrent1: 22.9 },
          { label: 'EV/EBITDA',    valeur: 31.1, concurrent1: 12.8 },
          { label: 'P/FCF',        valeur: 47.0, concurrent1: 26.1 },
          { label: 'Marge EBIT %', valeur: 31.0, concurrent1: 17.0 },
          { label: 'ROIC %',       valeur: 22.5, concurrent1: 13.6 },
          { label: 'FCF Yield %',     valeur: 2.1,  concurrent1: 3.8 },
          { label: 'Dette/EBITDA',    valeur: -0.9, concurrent1: 2.18 },
          { label: 'TCAC CA 3 ans %', valeur: 9.5,  concurrent1: 8.5 },
        ],
      },
      {
        id: 'vs_pair4', type: 'radar',
        title: 'Valorisation comparée : Monster vs Keurig Dr Pepper',
        concurrent1: 'Keurig Dr Pepper',
        data: [
          { label: 'PER',          valeur: 45.0, concurrent1: 23.5 },
          { label: 'EV/EBITDA',    valeur: 31.1, concurrent1: 17.9 },
          { label: 'P/FCF',        valeur: 47.0, concurrent1: 29.0 },
          { label: 'Marge EBIT %', valeur: 31.0, concurrent1: 19.0 },
          { label: 'ROIC %',       valeur: 22.5, concurrent1: 4.6 },
          { label: 'FCF Yield %',     valeur: 2.1,  concurrent1: 3.4 },
          { label: 'Dette/EBITDA',    valeur: -0.9, concurrent1: 3.4 },
          { label: 'TCAC CA 3 ans %', valeur: 9.5,  concurrent1: 9.4 },
        ],
      },
    ],

    metricHistory: [

      // ── EV/EBITDA historique (EV vraie / EBITDA, clôtures FY) ──────────────
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 26.3 },
          { year: 2022, value: 31.4 },
          { year: 2023, value: 28.1 },
          { year: 2024, value: 24.2 },
          { year: 2025, value: 28.3 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 27.7 },
              { year: 2022, value: 27.7 },
              { year: 2023, value: 27.7 },
              { year: 2024, value: 27.7 },
              { year: 2025, value: 27.7 },
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
          { year: 2021, value: 1155.7 },
          { year: 2022, value: 887.7 },
          { year: 2023, value: 1717.8 },
          { year: 2024, value: 1928.5 },
          { year: 2025, value: 2098.2 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 1097.0 },
              { year: 2022, value: 674.2 },
              { year: 2023, value: 1480.5 },
              { year: 2024, value: 1619.4 },
              { year: 2025, value: 1936.3 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 58.8 },
              { year: 2022, value: 213.5 },
              { year: 2023, value: 237.2 },
              { year: 2024, value: 309.2 },
              { year: 2025, value: 161.8 },
            ],
          },
        ],
      },

      // ── BPA dilué GAAP vs ajusté ($) ──────────────────────────────────────
      {
        label: 'EPS',
        name:  'BPA dilué GAAP',
        unit:  '$',
        data: [
          { year: 2021, value: 1.29 },
          { year: 2022, value: 1.12 },
          { year: 2023, value: 1.54 },
          { year: 2024, value: 1.49 },
          { year: 2025, value: 1.94 },
        ],
        competitors: [
          {
            name:   'BPA ajusté',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.29 },
              { year: 2022, value: 1.12 },
              { year: 2023, value: 1.56 },
              { year: 2024, value: 1.66 },
              { year: 2025, value: 2.06 },
            ],
          },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) - ROCE Excel = EBIT avant IS / (CP + dette LT) ─
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 27.4 },
          { year: 2022, value: 22.6 },
          { year: 2023, value: 23.7 },
          { year: 2024, value: 30.5 },
          { year: 2025, value: 29.3 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 3.81 },
              { year: 2022, value: 6.99 },
              { year: 2023, value: 6.18 },
              { year: 2024, value: 6.64 },
              { year: 2025, value: 6.34 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 20.9 },
              { year: 2022, value: 17.1 },
              { year: 2023, value: 18.7 },
              { year: 2024, value: 24.6 },
              { year: 2025, value: 22.5 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (1 an glissant, %) - distordu par les rachats (ΔIC) ───
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value: -12.3 },
          { year: 2023, value: 74.0 },
          { year: 2024, value: -6.3 },
          { year: 2025, value: -17.3 },
        ],
      },

      // ── ROIIC glissant multi-périodes (%) - peu informatif (IC piloté rachats) ─
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: -17.3 },
          { year: 2, value: -29.7 },
          { year: 3, value: -107.6 },
          { year: 4, value: 60.6 },
        ],
      },

      // ── PER historique (clôtures FY, base GAAP) ───────────────────────────
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 37.4 },
          { year: 2022, value: 45.4 },
          { year: 2023, value: 37.4 },
          { year: 2024, value: 35.3 },
          { year: 2025, value: 39.6 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 39.0 },
              { year: 2022, value: 39.0 },
              { year: 2023, value: 39.0 },
              { year: 2024, value: 39.0 },
              { year: 2025, value: 39.0 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 42.2 },
              { year: 2022, value: 43.2 },
              { year: 2023, value: 31.8 },
              { year: 2024, value: 29.7 },
              { year: 2025, value: 34.6 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (% sur EV vraie) ─────────────────────────────
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 2.3 },
          { year: 2022, value: 1.3 },
          { year: 2023, value: 2.6 },
          { year: 2024, value: 3.1 },
          { year: 2025, value: 2.6 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.4 },
              { year: 2022, value: 2.4 },
              { year: 2023, value: 2.4 },
              { year: 2024, value: 2.4 },
              { year: 2025, value: 2.4 },
            ],
          },
          {
            name:  'Taux sans risque',   // UST 10 ans, fin d'exercice
            color: '#52B788',
            data: [
              { year: 2021, value: 1.6 },
              { year: 2022, value: 3.8 },
              { year: 2023, value: 3.7 },
              { year: 2024, value: 4.3 },
              { year: 2025, value: 4.1 },
            ],
          },
        ],
      },

      // ── DSO / DIO / DPO / CCC (jours) ─────────────────────────────────────
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 59.1 },
          { year: 2022, value: 58.8 },
          { year: 2023, value: 61.0 },
          { year: 2024, value: 59.5 },
          { year: 2025, value: 71.2 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 89.0 },
              { year: 2022, value: 108.9 },
              { year: 2023, value: 106.0 },
              { year: 2024, value: 78.1 },
              { year: 2025, value: 79.7 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 60.6 },
              { year: 2022, value: 51.7 },
              { year: 2023, value: 61.6 },
              { year: 2024, value: 49.5 },
              { year: 2025, value: 56.4 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 87.4 },
              { year: 2022, value: 116.0 },
              { year: 2023, value: 105.4 },
              { year: 2024, value: 88.2 },
              { year: 2025, value: 94.5 },
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
          { year: 2021, value: 4.85 },
          { year: 2022, value: 4.76 },
          { year: 2023, value: 4.81 },
          { year: 2024, value: 3.32 },   // Tender 2024 : trésorerie ponctionnée
          { year: 2025, value: 3.70 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 4.3 },
              { year: 2022, value: 4.3 },
              { year: 2023, value: 4.3 },
              { year: 2024, value: 4.3 },
              { year: 2025, value: 4.3 },
            ],
          },
        ],
      },

      // ── Trésorerie nette / EBITDA (négatif = net cash) ────────────────────
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: -1.5 },
          { year: 2022, value: -1.5 },
          { year: 2023, value: -1.5 },
          { year: 2024, value: -0.6 },
          { year: 2025, value: -0.9 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: -1.2 },
              { year: 2022, value: -1.2 },
              { year: 2023, value: -1.2 },
              { year: 2024, value: -1.2 },
              { year: 2025, value: -1.2 },
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
          { year: 2021, value: 0.71 },
          { year: 2022, value: 0.76 },
          { year: 2023, value: 0.74 },
          { year: 2024, value: 0.97 },
          { year: 2025, value: 0.83 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.80 },
              { year: 2022, value: 0.80 },
              { year: 2023, value: 0.80 },
              { year: 2024, value: 0.80 },
              { year: 2025, value: 0.80 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions (%) ──────────────────────────
      // Négatif = concentration (rachats nets). 2024 : tender offer massif (-4,2 %).
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: -0.5 },
          { year: 2023, value: -0.8 },
          { year: 2024, value: -4.2 },
          { year: 2025, value: -2.8 },
        ],
      },

      // ── Allocation du capital - rachats vs Capex (M$) ─────────────────────
      // Aucun dividende : 100 % du retour actionnaire passe par les rachats.
      {
        label: 'Capex_Action',
        name:  'Rachats d\'actions',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 13.8 },
          { year: 2022, value: 771.0 },
          { year: 2023, value: 659.0 },
          { year: 2024, value: 3772.0 },   // Tender offer (enchère hollandaise modifiée)
          { year: 2025, value: 103.6 },
        ],
        competitors: [
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 58.8 },
              { year: 2022, value: 213.5 },
              { year: 2023, value: 237.2 },
              { year: 2024, value: 309.2 },
              { year: 2025, value: 161.8 },
            ],
          },
        ],
      },

    ],
  },
}
