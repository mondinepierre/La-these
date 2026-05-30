// ─────────────────────────────────────────────────────────────────────────────
// APR Corporation (KOSPI: 278470) — Valeur suivie
// Devise native : KRW. Tous les montants chartData sont en Md KRW (milliards), sauf
// EPS/Dividende (KRW par action) et ratios.
// Cours, capitalisation et multiples "snapshot" au 2026-05-28 (400 500 KRW).
// Historique des multiples (PER, EV/EBITDA, FCFy) : depuis l'IPO de fevrier 2024 seulement.
//
// FLAGS A VALIDER AVANT INTEGRATION SUR lathese.fr :
//   1. geoRevenue : le libelle "Coree du Sud" doit etre mappe vers "KR" dans
//      REGION_TO_CODES (GeoRevenueMap.tsx). La Coree pese 20 % du CA, elle merite sa
//      propre tranche. Si le composant ne connait pas ce libelle, ajouter la cle.
//   2. logo : deposer /public/analyse/APR.png
//   3. FX de publication (non utilises ici, fiche en KRW natif) : indicatif
//      1 EUR ~ 1 500 KRW, 1 USD ~ 1 380 KRW au 2026-05.
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const APR_CORPORATION: AnalyseCard = {
  slug:           'apr-corporation',
  type:           'valeur',
  title:          'APR Corporation',
  ticker:         'APR',
  secteur:        'Consommation',
  geo:            'Corée du sud',
  conviction:     'moyenne',
  positionnement: 'surveillance',
  lastUpdated:    '2026-05-30',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '3 à 5 ans',
  excerpt:        "Proprietaire de la marque de dermocosmetique Medicube, APR affiche une hypercroissance (CA +111 % en 2025) tiree par un flywheel appareils-soins et une percee fulgurante aux Etats-Unis. Bilan en tresorerie nette et rentabilite record (ROIC 65 %), mais aucune barriere concurrentielle durable et une valorisation tendue qui n'offre pas de marge de securite au cours actuel.",
  glossaire:      ['roic', 'moat', 'free-cash-flow', 'wacc', 'per-valorisation', 'marge-de-securite'],
  logo:           '/analyse/APR.png',
  prixCible:      { bas: 455000, haut: 634000, devise: 'KRW' },
  marginOfSafety: 'faible',
  readingTime:    45,
  onePager: {
    thesis:    "Qualité réelle, douve absente, prix sans marge : je surveille la durabilité des ventes US avant d'envisager une position.",
    cours:     400500,
    coursDate: '2026-05-28',
    devise:    'KRW',
    range52w:  { low: 118100, high: 473000 },
  },

  // ── Metriques snapshot ──────────────────────────────────────────────────────
  // Multiples au cours actuel (400 500 KRW, 2026-05-28) sur base TTM (cloture 2026-03-31).
  // Ratios de rentabilite et de bilan : exercice clos 2025.
  metrics: {
    per:               42.0,   // 400 500 / BPA TTM 9 538 KRW. (Pour memoire : PER cloture 2025 = 29,9x)
    evEbitda:          30.0,   // EV cours actuel / EBITDA TTM (~495 Md KRW)
    fcfYield:          2.2,    // FCF 2025 (325,6 Md KRW) / EV au cours actuel
    roic:              65.2,   // NOPAT 290,6 / IC 445,8 Md KRW (goodwill quasi nul, tresorerie nette)
    wacc:              8.4,    // CAPM beta sectoriel 1,10 ; Rf 3,39 % (KTB 10 ans) ; ERP 4,65 %
    detteEbitda:       -0.4,   // Tresorerie nette hors IFRS 16 (zero dette financiere). Incl. loyers : -0,1x
    croissanceCA3ans:  56.6,   // TCAC CA 2022 vers 2025
    croissanceBPA3ans: 111.6,  // TCAC BPA dilue ajuste du split 5:1 (2022 vers 2025). TCAC resultat net : ~115 %
    margeEbit:         23.9,   // ROP courant 2025 / CA
    margeBrute:        76.6,
    payoutRatio:       66,     // DPS declare 2025 (5 090 KRW, convention DEU) / BPA 7 718 KRW
    currentRatio:      2.29,
    dso:               18.7,   // Creances clients seules
  },

  tendances: {
    per:       'hausse',
    fcfYield:  'baisse',
    roic:      'hausse',
    margeEbit: 'hausse',
  },

  updates: [
    {
      date: '2026-05-30',
      note: "Creation de la fiche. Valorisation post-publication 1Q26 : CA +123 % en glissement annuel, marge operationnelle 25,7 %, Etats-Unis +250,8 % (deploiement Target).",
    },
  ],

  chartData: {

    // ── CA sur 5 ans (Md KRW) ─────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 259.1 },
      { year: 2022, value: 397.7 },
      { year: 2023, value: 523.8 },
      { year: 2024, value: 722.8 },
      { year: 2025, value: 1527.3 },
    ],

    // ── Repartition geographique du CA (FY2025) ───────────────────────────────
    // FLAG : "Coree du Sud" a mapper vers KR dans REGION_TO_CODES si absent.
    geoRevenue: [
      { region: 'États-Unis',     pct: 37 },
      { region: 'Reste du monde', pct: 23 },
      { region: 'Corée du Sud',   pct: 20 },
      { region: 'Japon',          pct: 12 },
      { region: 'Chine',          pct: 8 },
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    marges: [
      { year: 2021, gross: 72.36, operating: 5.51,  net: 4.40 },
      { year: 2022, gross: 73.29, operating: 9.86,  net: 7.28 },
      { year: 2023, gross: 75.49, operating: 19.89, net: 15.57 },
      { year: 2024, gross: 75.21, operating: 16.98, net: 14.89 },
      { year: 2025, gross: 76.64, operating: 23.93, net: 18.96 },
    ],

    // ── ROIC simple sur 5 ans (%) ─────────────────────────────────────────────
    roic: [
      { year: 2021, value: 17.94 },
      { year: 2022, value: 29.19 },
      { year: 2023, value: 40.77 },
      { year: 2024, value: 28.92 },
      { year: 2025, value: 65.19 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // WACC par annee avec beta sectoriel 1,10 (entreprise quasi tout-equity, WACC ~ Re).
    roicVsWacc: [
      { year: 2021, value: 17.94, wacc: 7.4 },
      { year: 2022, value: 29.19, wacc: 10.7 },
      { year: 2023, value: 40.77, wacc: 8.7 },
      { year: 2024, value: 28.92, wacc: 8.1 },
      { year: 2025, value: 65.19, wacc: 8.4 },
    ],

    // ── Free Cash Flow sur 5 ans (Md KRW) ─────────────────────────────────────
    fcf: [
      { year: 2021, value: 0.1 },
      { year: 2022, value: 25.9 },
      { year: 2023, value: 98.2 },
      { year: 2024, value: 34.1 },
      { year: 2025, value: 325.6 },
    ],

    // ── CA par division (Md KRW) — ventilation publiee depuis 2024 ─────────────
    segmentRevenue: {
      unit: 'Md KRW',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2024, segments: [
          { name: 'Cosmetiques',      value: 338.5 },
          { name: 'Appareils beaute', value: 312.6 },
          { name: 'Autres',           value: 71.6 },
        ]},
        { year: 2025, segments: [
          { name: 'Cosmetiques',      value: 1077.1 },
          { name: 'Appareils beaute', value: 407.0 },
          { name: 'Autres',           value: 43.2 },
        ]},
      ],
    },

    // ── Graphiques de valorisation comparee ───────────────────────────────────
    // PER en forward (NTM) car le PER trailing est non significatif pour la plupart
    // des pairs coreens (TTM deprime). APR ratios au cours actuel.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparee — APR vs mediane sectorielle (beaute / dermo-appareils)',
        data: [
          { label: 'PER',             valeur: 21.0, secteur: 14.1 },
          { label: 'EV/EBITDA',       valeur: 30.0, secteur: 11.9 },
          { label: 'P/FCF',           valeur: 45.8, secteur: 17.2 },
          { label: 'Marge EBIT %',    valeur: 24.5, secteur: 11.0 },
          { label: 'ROIC %',          valeur: 65.2, secteur: 8.5 },
          { label: 'FCF Yield %',     valeur: 2.2,  secteur: 5.8 },
          { label: 'Dette/EBITDA',    valeur: -0.1, secteur: 2.75 },
          { label: 'TCAC CA 3 ans %', valeur: 56.6, secteur: 7.6 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'Valorisation comparee — APR vs e.l.f. Beauty',
        concurrent1: 'e.l.f. Beauty',
        data: [
          { label: 'PER',             valeur: 21.0, concurrent1: 15.3 },
          { label: 'EV/EBITDA',       valeur: 30.0, concurrent1: 54.7 },
          { label: 'P/FCF',           valeur: 45.8, concurrent1: 17.5 },
          { label: 'Marge EBIT %',    valeur: 24.5, concurrent1: 1.7 },
          { label: 'ROIC %',          valeur: 65.2, concurrent1: 3.3 },
          { label: 'FCF Yield %',     valeur: 2.2,  concurrent1: 5.7 },
          { label: 'Dette/EBITDA',    valeur: -0.1, concurrent1: 9.8 },
          { label: 'TCAC CA 3 ans %', valeur: 56.6, concurrent1: 35.1 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: 'Valorisation comparee — APR vs Amorepacific',
        concurrent1: 'Amorepacific',
        data: [
          { label: 'PER',             valeur: 21.0, concurrent1: 17.4 },
          { label: 'EV/EBITDA',       valeur: 30.0, concurrent1: 11.9 },
          { label: 'P/FCF',           valeur: 45.8, concurrent1: 16.1 },
          { label: 'Marge EBIT %',    valeur: 24.5, concurrent1: 11.2 },
          { label: 'ROIC %',          valeur: 65.2, concurrent1: 3.9 },
          { label: 'FCF Yield %',     valeur: 2.2,  concurrent1: 6.2 },
          { label: 'Dette/EBITDA',    valeur: -0.1, concurrent1: -0.3 },
          { label: 'TCAC CA 3 ans %', valeur: 56.6, concurrent1: 6.4 },
        ],
      },
    ],

    // ── Metriques libres sur 5 ans ────────────────────────────────────────────
    metricHistory: [

      // ── EV/EBITDA historique (depuis IPO 2024) ────────────────────────────
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2024, value: 15.7 },
          { year: 2025, value: 23.7 },
        ],
        competitors: [
          {
            name:   'Moyenne depuis IPO',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2024, value: 19.7 },
              { year: 2025, value: 19.7 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (Md KRW) ────────────────────────────────────────
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Operationnel',
        unit:  'Md KRW',
        yMin:  0,
        data: [
          { year: 2021, value: 4.6 },
          { year: 2022, value: 31.6 },
          { year: 2023, value: 107.8 },
          { year: 2024, value: 79.1 },
          { year: 2025, value: 341.0 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 0.1 },
              { year: 2022, value: 25.9 },
              { year: 2023, value: 98.2 },
              { year: 2024, value: 34.1 },
              { year: 2025, value: 325.6 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 4.5 },
              { year: 2022, value: 5.7 },
              { year: 2023, value: 9.7 },
              { year: 2024, value: 45.0 },
              { year: 2025, value: 15.4 },
            ],
          },
        ],
      },

      // ── BPA dilue ajuste du split 5:1 (KRW) ───────────────────────────────
      {
        label: 'EPS',
        name:  'BPA dilue (ajuste split 5:1)',
        unit:  'KRW',
        data: [
          { year: 2021, value: 324 },
          { year: 2022, value: 814 },
          { year: 2023, value: 2219 },
          { year: 2024, value: 2819 },
          { year: 2025, value: 7718 },
        ],
      },

      // ── Dividende par action (KRW) — premier dividende au titre de 2025 ────
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  'KRW',
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 5090 },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) ──────────────────────────────────────────
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 19.40 },
          { year: 2022, value: 37.34 },
          { year: 2023, value: 51.39 },
          { year: 2024, value: 29.81 },
          { year: 2025, value: 69.75 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 7.4 },
              { year: 2022, value: 10.7 },
              { year: 2023, value: 8.7 },
              { year: 2024, value: 8.1 },
              { year: 2025, value: 8.4 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 17.94 },
              { year: 2022, value: 29.19 },
              { year: 2023, value: 40.77 },
              { year: 2024, value: 28.92 },
              { year: 2025, value: 65.19 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (1 an glissant, %) ───────────────────────────────────
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value: 25.97 },
          { year: 2023, value: 154.24 },
          { year: 2024, value: 19.19 },
          { year: 2025, value: 131.67 },
        ],
      },

      // ── ROIIC glissant multi-periodes (%) ─────────────────────────────────
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 a 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 131.67 },
          { year: 2, value: 86.49 },
          { year: 3, value: 94.64 },
          { year: 4, value: 81.41 },
        ],
      },

      // ── PER historique (depuis IPO 2024) ──────────────────────────────────
      {
        label: 'PER',
        name:  'PER (cloture annuelle)',
        unit:  'x',
        data: [
          { year: 2024, value: 17.7 },
          { year: 2025, value: 29.9 },
        ],
        competitors: [
          {
            name:   'Moyenne depuis IPO',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2024, value: 23.8 },
              { year: 2025, value: 23.8 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (%) ──────────────────────────────────────────
      // Denominateur = capitalisation. Taux sans risque = KTB Coree 10 ans.
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2024, value: 1.79 },
          { year: 2025, value: 3.76 },
        ],
        competitors: [
          {
            name:  'Taux sans risque (KTB 10 ans)',
            color: '#52B788',
            data: [
              { year: 2024, value: 2.87 },
              { year: 2025, value: 3.39 },
            ],
          },
        ],
      },

      // ── CCC — DSO / DIO / DPO / Cash Conversion Cycle (jours) ──────────────
      // Serie depuis 2022 (detail 2021 incomplet en source). DSO = creances clients seules.
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2022, value: 19.17 },
          { year: 2023, value: 15.66 },
          { year: 2024, value: 19.84 },
          { year: 2025, value: 18.65 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2022, value: 173.39 },
              { year: 2023, value: 160.72 },
              { year: 2024, value: 223.59 },
              { year: 2025, value: 169.29 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2022, value: 28.48 },
              { year: 2023, value: 32.89 },
              { year: 2024, value: 68.83 },
              { year: 2025, value: 65.61 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 164.08 },
              { year: 2023, value: 143.48 },
              { year: 2024, value: 174.60 },
              { year: 2025, value: 122.34 },
            ],
          },
        ],
      },

      // ── Current Ratio (x) ─────────────────────────────────────────────────
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.80 },
          { year: 2022, value: 1.80 },
          { year: 2023, value: 2.66 },
          { year: 2024, value: 1.97 },
          { year: 2025, value: 2.29 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.10 },
              { year: 2022, value: 2.10 },
              { year: 2023, value: 2.10 },
              { year: 2024, value: 2.10 },
              { year: 2025, value: 2.10 },
            ],
          },
        ],
      },

      // ── Tresorerie nette / EBITDA (x) — hors IFRS 16 ──────────────────────
      // Toutes les annees en tresorerie nette (valeurs negatives). Pas de yMin.
      {
        label: 'DETTE_EBITDA',
        name:  'Tresorerie nette / EBITDA (hors IFRS 16)',
        unit:  'x',
        data: [
          { year: 2021, value: -0.80 },
          { year: 2022, value: -0.72 },
          { year: 2023, value: -0.98 },
          { year: 2024, value: -0.60 },
          { year: 2025, value: -0.39 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: -0.70 },
              { year: 2022, value: -0.70 },
              { year: 2023, value: -0.70 },
              { year: 2024, value: -0.70 },
              { year: 2025, value: -0.70 },
            ],
          },
        ],
      },

      // ── Asset Turnover (x) ────────────────────────────────────────────────
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 2.05 },
          { year: 2022, value: 2.17 },
          { year: 2023, value: 1.82 },
          { year: 2024, value: 1.28 },
          { year: 2025, value: 1.98 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.86 },
              { year: 2022, value: 1.86 },
              { year: 2023, value: 1.86 },
              { year: 2024, value: 1.86 },
              { year: 2025, value: 1.86 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration (%) — ajuste du split 5:1 de l'IPO ────────
      // En donnees brutes, 2024 afficherait +417 % du seul fait du split. Ajuste,
      // 2024 = +3,4 % (flottant IPO), 2025 = -1,7 % (rachats nets).
      {
        label: 'Dilution',
        name:  "Variation du nombre d'actions (%)",
        unit:  '%',
        data: [
          { year: 2023, value: 3.83 },
          { year: 2024, value: 3.38 },
          { year: 2025, value: -1.67 },
        ],
      },

      // ── Payout Ratio (%) — convention DEU (au titre de l'exercice) ─────────
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 66 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 13.2 },
              { year: 2022, value: 13.2 },
              { year: 2023, value: 13.2 },
              { year: 2024, value: 13.2 },
              { year: 2025, value: 13.2 },
            ],
          },
        ],
      },

      // ── Allocation du capital (Md KRW) — base cash-flow ───────────────────
      // data = retour total (dividendes verses + rachats). concurrent1 = rachats bruts.
      // concurrent2 = capex industriel. 2025 : 134,4 div (acompte) + 30,0 rachats.
      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires',
        unit:  'Md KRW',
        yMin:  0,
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 59.9 },
          { year: 2025, value: 164.4 },
        ],
        competitors: [
          {
            name:  "Rachats d'actions",
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 59.9 },
              { year: 2025, value: 30.0 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 4.5 },
              { year: 2022, value: 5.7 },
              { year: 2023, value: 9.7 },
              { year: 2024, value: 45.0 },
              { year: 2025, value: 15.4 },
            ],
          },
        ],
      },

    ],
  },
}
