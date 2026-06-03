// ─────────────────────────────────────────────────────────────────────────────
// OTC MARKETS GROUP INC. (OTCQX: OTCM) - Valeur suivie
// Fiche US, devise USD, enveloppe CTO (non eligible PEA).
// Source : Annual Reports OTCM 2021-2025 (Alternative Reporting Standard, audites),
//          Quarterly Report Q1-2026, transcripts Q4-2025 et Q1-2026, slides Q1-2026.
// Toutes les valeurs monetaires en M$ (les rapports sont en milliers de USD).
// ─────────────────────────────────────────────────────────────────────────────
//
// CONVENTIONS METHODOLOGIQUES RETENUES (validees avec Pierre) :
//   WACC US : Rf = UST 10 ans (pas de plancher 2 %), ERP Damodaran US (sans CRP),
//             beta = regression mensuelle 5 ans vs S&P 500 Total Return = 0,547.
//             Rf 4,088 % (31/12/2025) + 0,547 x ERP 4,23 % = Re 6,40 % ; WACC 6,31 %
//             (poids dette 1,4 %, dette = obligations locatives uniquement, Rd ~0).
//   ROIC La Thèse : NOPAT / IC, dette plancher 0, goodwill inclus. ROIC 75 % en 2025.
//   FCF (graphique) : OCF - capex industriel HORS acquisitions. 2022 retraite a 32,2 M$
//             (exclusion des acquisitions EDGAR Online + Blue Sky Data ~15 M$).
//   DCF (base) : FCF ajuste SBC ~40,5 M$ (SBC traitee en cout reel) + capex normalise.
//   Dividende : convention DEU (au titre de l'exercice), regulier + special recurrent.
//   Segments : OTCM a UN SEUL segment reportable. OTC Link / Market Data / Corporate
//             Services sont des lignes de revenus (desagregation), pas de marge sectorielle.
//   Revenus du graphique et des segments = revenus BRUTS (avant redistribution fees).
//   Marges calculees sur revenus NETS (apres redistribution fees), convention OTCM.
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const OTC_MARKETS_GROUP: AnalyseCard = {
  slug:           'otc-markets-group',
  type:           'valeur',
  title:          'OTC Markets Group',
  ticker:         'OTCM',
  secteur:        'Finance',           // Infrastructure de marche / operateur de marches financiers
  geo:            'États-Unis',
  conviction:     'forte',             // Rente quasi-reglementaire reelle, mais segment cyclique
                                       // (OTC Link ~21 %) + dependance SEC symetrique : pas 'exceptionnelle'.
  positionnement: 'accumulation',      // demarrage accumulation (juin 2026) : fraction au cours ~52, gros a ~47
  lastUpdated:    '2026-06-03',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Operateur des marches hors-cote americains (OTCQX, OTCQB, OTCID, Pink) et fournisseur de donnees. Modele asset-light a rente d'abonnement, ROIC 75 %, tresorerie nette. Cours stagnant depuis 5 ans : le marche confond le cyclique OTC Link avec l'absence de croissance du coeur recurrent.",
  glossaire:      ['moat', 'effet-de-reseau', 'asset-light', 'roic', 'wacc', 'free-cash-flow'],
  logo:           '/analyse/otcm.png',
  prixCible:      { bas: 64, haut: 75, devise: 'USD' },  // cible 5 ans centrale 69 $ +/- MoE 8,2 %
  marginOfSafety: 'faible',            // cours ~ juste valeur en methode rendement total (le cours bat Re,
                                       // dividende ~5 % en bonus) ; ~11 % de rendement total attendu a 52 $
  readingTime:    51,                  // 8167 mots + 39 visuels : (8167/200) + (39 x 0,25)
  onePager: {
    thesis:    "Le peage quasi-reglementaire de la cotation hors-cote US. ROIC 75 %, 79 % de revenus recurrents, tresorerie nette. Le cyclique masque le compounding.",
    cours:     52.00,
    coursDate: '2026-06-02',
    devise:    'USD',
    range52w:  { low: 49.89, high: 60.50 },
  },

  // ── Metriques snapshot (cours 52 $ au 02/06/2026 ; fondamentaux TTM ou FY2025) ──
  metrics: {
    per:               19.5,   // 52 $ / BPA dilue TTM 2,66 $
    evEbitda:          13.7,   // EV (capi 617 - tresorerie nette 40,5) / EBITDA TTM 42,1
    fcfYield:          7.9,    // FCF TTM 48,6 / capitalisation boursiere (en %)
    roic:              75.1,   // NOPAT / IC, dette plancher 0, goodwill inclus (FY2025)
    wacc:              6.31,   // CAPM, beta 0,547 vs S&P 500 TR, Rf 4,088 %, ERP 4,23 %
    detteEbitda:       -0.96,  // negatif = tresorerie nette (dette = baux uniquement)
    croissanceCA3ans:  5.9,    // TCAC revenus bruts 2022-2025
    croissanceBPA3ans: 0.7,    // TCAC BPA dilue 2022-2025 (deprime par la base 2022 proche du pic)
    margeEbit:         31.5,   // EBIT / revenus nets (FY2025)
    margeBrute:        92.4,   // (revenus nets - transaction-based expenses) / revenus nets
    payoutRatio:       95.4,   // dividendes verses / resultat net (FY2025) ; ~61 % du FCF
    currentRatio:      1.32,   // actif courant / passif courant (FY2025)
    dso:               27.2,   // (creances clients / revenus bruts) x 365
  },

  tendances: {
    per:       'baisse',   // de-rating : 21-23x historique vers 19,5x
    fcfYield:  'hausse',   // ~5 % a mi-periode vers ~8 %
    roic:      'stable',   // stabilise autour de 75 % (84 -> 74 -> 75)
    margeEbit: 'hausse',   // 29,9 % (2024) -> 31,5 % (2025), redressement
  },

  updates: [
    { date: '2026-06-03', note: 'Creation de la fiche. Donnees FY2025, Q1-2026, contexte virage dividende et rachats.' },
    { date: '2026-08-06', note: 'Resultats Q2-2026 attendus (estimation). Source : Yahoo Finance.' },
    { date: '2027-03-04', note: 'Resultats Q4-2026 / FY2026 attendus (estimation). Source : Yahoo Finance.' },
  ],

  chartData: {

    // OTCID Basic Market lance le 01/07/2025 ; acquisitions EDGAR Online + Blue Sky Data en 2022.
    segmentBreaks: [
      { year: 2022, label: 'Acquisitions EDGAR Online + Blue Sky Data Corp' },
    ],

    // ── Revenus BRUTS sur 5 ans (M$) ─────────────────────────────────────────
    revenue: [
      { year: 2021, value: 102.9 },
      { year: 2022, value: 105.1 },
      { year: 2023, value: 109.9 },
      { year: 2024, value: 111.1 },
      { year: 2025, value: 125.3 },
    ],

    // ── Repartition geographique du CA (revenus bruts FY2025) ─────────────────
    // OTCM ne publie que US vs International (pas de detail par pays).
    geoRevenue: [
      { region: 'États-Unis',     pct: 71.4 },
      { region: 'Reste du monde', pct: 28.6 },
    ],

    // ── Marges sur 5 ans (%) -denominateur = revenus NETS ────────────────────
    // gross = (revenus nets - transaction-based expenses) / revenus nets
    marges: [
      { year: 2021, gross: 90.7, operating: 38.1, net: 30.5 },
      { year: 2022, gross: 94.3, operating: 36.1, net: 30.2 },
      { year: 2023, gross: 94.8, operating: 30.6, net: 25.9 },
      { year: 2024, gross: 93.8, operating: 29.9, net: 25.4 },
      { year: 2025, gross: 92.4, operating: 31.5, net: 25.7 },
    ],

    // ── ROIC simple sur 5 ans (%) ─────────────────────────────────────────────
    // Tres eleve et decroissant : base de capital faible (asset-light) qui s'epaissit.
    roic: [
      { year: 2021, value: 122.3 },
      { year: 2022, value: 103.0 },
      { year: 2023, value: 83.5 },
      { year: 2024, value: 74.5 },
      { year: 2025, value: 75.1 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // Rf 2021 (1,56 %) non representatif (sortie de la periode taux zero) -> WACC 3,8 %.
    roicVsWacc: [
      { year: 2021, value: 122.3, wacc: 3.8 },
      { year: 2022, value: 103.0, wacc: 6.9 },
      { year: 2023, value: 83.5,  wacc: 6.1 },
      { year: 2024, value: 74.5,  wacc: 6.6 },
      { year: 2025, value: 75.1,  wacc: 6.3 },
    ],

    // ── Free Cash Flow sur 5 ans (M$) ─────────────────────────────────────────
    // 2022 retraite a 32,2 M$ : exclusion des acquisitions (EDGAR Online + Blue Sky ~15 M$).
    fcf: [
      { year: 2021, value: 45.1 },
      { year: 2022, value: 32.2 },
      { year: 2023, value: 31.5 },
      { year: 2024, value: 31.6 },
      { year: 2025, value: 48.4 },
    ],

    // ── Revenus par ligne (desagregation, revenus BRUTS, M$) ──────────────────
    // Un seul segment reportable : ces lignes n'ont pas de marge sectorielle propre.
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'Revenus bruts' },
      data: [
        { year: 2021, segments: [
          { name: 'OTC Link (trading)',      value: 29.7 },
          { name: 'Market Data Licensing',   value: 33.8 },
          { name: 'Corporate Services',      value: 39.5 },
        ]},
        { year: 2022, segments: [
          { name: 'OTC Link (trading)',      value: 20.9 },
          { name: 'Market Data Licensing',   value: 36.4 },
          { name: 'Corporate Services',      value: 47.8 },
        ]},
        { year: 2023, segments: [
          { name: 'OTC Link (trading)',      value: 19.6 },
          { name: 'Market Data Licensing',   value: 43.4 },
          { name: 'Corporate Services',      value: 46.9 },
        ]},
        { year: 2024, segments: [
          { name: 'OTC Link (trading)',      value: 22.4 },
          { name: 'Market Data Licensing',   value: 43.6 },
          { name: 'Corporate Services',      value: 45.0 },
        ]},
        { year: 2025, segments: [
          { name: 'OTC Link (trading)',      value: 26.3 },
          { name: 'Market Data Licensing',   value: 50.4 },
          { name: 'Corporate Services',      value: 48.7 },
        ]},
      ],
    },

    // ── Valorisation comparee (radars) ────────────────────────────────────────
    // Pairs Q4(c) : MarketAxess + Tradeweb + Cboe + MSCI. Donnees marche (screener),
    // base homogene entre pairs ; legeres differences de definition vs metriques internes.
    // Note : axe Dette/EBITDA negatif = tresorerie nette (OTCM et plusieurs pairs).
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparee : OTC Markets vs mediane operateurs/data',
        data: [
          { label: 'PER',             valeur: 19.4, secteur: 21.4 },
          { label: 'EV/EBITDA',       valeur: 13.8, secteur: 15.8 },
          { label: 'P/FCF',           valeur: 12.9, secteur: 19.1 },
          { label: 'Marge EBIT %',    valeur: 28.4, secteur: 43.9 },
          { label: 'ROIC %',          valeur: 68.3, secteur: 8.2 },
          { label: 'FCF Yield %',     valeur: 7.7,  secteur: 5.3 },
          { label: 'Dette/EBITDA',    valeur: -0.9, secteur: 2.9 },
          { label: 'TCAC CA 3 ans %', valeur: 12.3, secteur: 14.4 },
        ],
      },
      {
        id: 'vs_marketaxess', type: 'radar',
        title: 'Valorisation comparee : OTC Markets vs MarketAxess',
        concurrent1: 'MarketAxess',
        data: [
          { label: 'PER',             valeur: 19.4, concurrent1: 14.6 },
          { label: 'EV/EBITDA',       valeur: 13.8, concurrent1: 10.1 },
          { label: 'P/FCF',           valeur: 12.9, concurrent1: 13.5 },
          { label: 'Marge EBIT %',    valeur: 28.4, concurrent1: 43.9 },
          { label: 'ROIC %',          valeur: 68.3, concurrent1: 16.1 },
          { label: 'FCF Yield %',     valeur: 7.7,  concurrent1: 7.4 },
          { label: 'Dette/EBITDA',    valeur: -0.9, concurrent1: -0.5 },
          { label: 'TCAC CA 3 ans %', valeur: 12.3, concurrent1: 11.9 },
        ],
      },
      {
        id: 'vs_tradeweb', type: 'radar',
        title: 'Valorisation comparee : OTC Markets vs Tradeweb',
        concurrent1: 'Tradeweb',
        data: [
          { label: 'PER',             valeur: 19.4, concurrent1: 24.2 },
          { label: 'EV/EBITDA',       valeur: 13.8, concurrent1: 28.0 },
          { label: 'P/FCF',           valeur: 12.9, concurrent1: 20.1 },
          { label: 'Marge EBIT %',    valeur: 28.4, concurrent1: 46.4 },
          { label: 'ROIC %',          valeur: 68.3, concurrent1: 6.9 },
          { label: 'FCF Yield %',     valeur: 7.7,  concurrent1: 5.0 },
          { label: 'Dette/EBITDA',    valeur: -0.9, concurrent1: -1.8 },
          { label: 'TCAC CA 3 ans %', valeur: 12.3, concurrent1: 21.2 },
        ],
      },
      {
        id: 'vs_cboe', type: 'radar',
        title: 'Valorisation comparee : OTC Markets vs Cboe Global Markets',
        concurrent1: 'Cboe',
        data: [
          { label: 'PER',             valeur: 19.4, concurrent1: 23.5 },
          { label: 'EV/EBITDA',       valeur: 13.8, concurrent1: 17.4 },
          { label: 'P/FCF',           valeur: 12.9, concurrent1: 17.2 },
          { label: 'Marge EBIT %',    valeur: 28.4, concurrent1: 39.7 },
          { label: 'ROIC %',          valeur: 68.3, concurrent1: 12.8 },
          { label: 'FCF Yield %',     valeur: 7.7,  concurrent1: 5.8 },
          { label: 'Dette/EBITDA',    valeur: -0.9, concurrent1: -0.4 },
          { label: 'TCAC CA 3 ans %', valeur: 12.3, concurrent1: 6.5 },
        ],
      },
      {
        id: 'vs_msci', type: 'radar',
        title: 'Valorisation comparee : OTC Markets vs MSCI',
        concurrent1: 'MSCI',
        data: [
          { label: 'PER',             valeur: 19.4, concurrent1: 36.1 },
          { label: 'EV/EBITDA',       valeur: 13.8, concurrent1: 27.4 },
          { label: 'P/FCF',           valeur: 12.9, concurrent1: 29.4 },
          { label: 'Marge EBIT %',    valeur: 28.4, concurrent1: 55.3 },
          { label: 'ROIC %',          valeur: 68.3, concurrent1: 46.2 },
          { label: 'FCF Yield %',     valeur: 7.7,  concurrent1: 3.4 },
          { label: 'Dette/EBITDA',    valeur: -0.9, concurrent1: 3.4 },
          { label: 'TCAC CA 3 ans %', valeur: 12.3, concurrent1: 10.5 },
        ],
      },
    ],

    metricHistory: [

      // ── EV/EBITDA historique ──────────────────────────────────────────────
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 15.6 },
          { year: 2022, value: 15.6 },
          { year: 2023, value: 16.8 },
          { year: 2024, value: 15.7 },
          { year: 2025, value: 13.5 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 15.4 },
              { year: 2022, value: 15.4 },
              { year: 2023, value: 15.4 },
              { year: 2024, value: 15.4 },
              { year: 2025, value: 15.4 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (M$) ────────────────────────────────────────────
      // FCF 2022 retraite (hors acquisitions). Capex industriel quasi nul (asset-light).
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Operationnel',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 46.5 },
          { year: 2022, value: 33.7 },
          { year: 2023, value: 33.0 },
          { year: 2024, value: 32.9 },
          { year: 2025, value: 48.6 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 45.1 },
              { year: 2022, value: 32.2 },
              { year: 2023, value: 31.5 },
              { year: 2024, value: 31.6 },
              { year: 2025, value: 48.4 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 1.4 },
              { year: 2022, value: 1.4 },
              { year: 2023, value: 1.6 },
              { year: 2024, value: 1.3 },
              { year: 2025, value: 0.2 },
            ],
          },
        ],
      },

      // ── BPA dilue GAAP ($) ────────────────────────────────────────────────
      // Quasi-plat 2021-2025 : 2021 etait un pic cyclique (boom trading retail/COVID).
      {
        label: 'EPS',
        name:  'BPA dilue (GAAP)',
        unit:  '$',
        data: [
          { year: 2021, value: 2.52 },
          { year: 2022, value: 2.53 },
          { year: 2023, value: 2.28 },
          { year: 2024, value: 2.26 },
          { year: 2025, value: 2.58 },
        ],
      },

      // ── Dividende par action ($) -total incl. special ────────────────────
      // Cas OTCM : le special de fin d'annee est recurrent et materiel, integre au total.
      {
        label: 'Dividendes',
        name:  'Dividende total (incl. special)',
        unit:  '$',
        data: [
          { year: 2021, value: 2.16 },
          { year: 2022, value: 2.22 },
          { year: 2023, value: 2.22 },
          { year: 2024, value: 2.22 },
          { year: 2025, value: 2.47 },
        ],
        competitors: [
          {
            name:   'Dont dividende regulier',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 0.66 },
              { year: 2022, value: 0.72 },
              { year: 2023, value: 0.72 },
              { year: 2024, value: 0.72 },
              { year: 2025, value: 0.72 },
            ],
          },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) ─────────────────────────────────────────
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 96.2 },
          { year: 2022, value: 85.4 },
          { year: 2023, value: 73.9 },
          { year: 2024, value: 69.9 },
          { year: 2025, value: 77.7 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 3.8 },
              { year: 2022, value: 6.9 },
              { year: 2023, value: 6.1 },
              { year: 2024, value: 6.6 },
              { year: 2025, value: 6.3 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 122.3 },
              { year: 2022, value: 103.0 },
              { year: 2023, value: 83.5 },
              { year: 2024, value: 74.5 },
              { year: 2025, value: 75.1 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (1 an glissant, %) ──────────────────────────────────
      // Tres volatil : base de capital investi faible (asset-light) -> ratios extremes.
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value: 3.3 },
          { year: 2023, value: -77.9 },
          { year: 2024, value: -13.3 },
          { year: 2025, value: 108.5 },
        ],
      },

      // ── ROIIC glissant multi-periodes (%) ────────────────────────────────
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 a 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 108.5 },
          { year: 2, value: 58.6 },
          { year: 3, value: -2.9 },
          { year: 4, value: -0.9 },
        ],
      },

      // ── PER historique (x) ────────────────────────────────────────────────
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 21.2 },
          { year: 2022, value: 20.8 },
          { year: 2023, value: 23.3 },
          { year: 2024, value: 22.2 },
          { year: 2025, value: 19.5 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 21.4 },
              { year: 2022, value: 21.4 },
              { year: 2023, value: 21.4 },
              { year: 2024, value: 21.4 },
              { year: 2025, value: 21.4 },
            ],
          },
          {
            name:   'PER ajuste taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 23.3 },
              { year: 2022, value: 15.3 },
              { year: 2023, value: 20.2 },
              { year: 2024, value: 19.1 },
              { year: 2025, value: 18.6 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (%) -denominateur = capi boursiere ──────────
      // 2022 sur FCF retraite (hors acquisitions). Taux sans risque = UST 10 ans.
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 7.0 },
          { year: 2022, value: 5.0 },
          { year: 2023, value: 4.9 },
          { year: 2024, value: 5.2 },
          { year: 2025, value: 8.0 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 6.0 },
              { year: 2022, value: 6.0 },
              { year: 2023, value: 6.0 },
              { year: 2024, value: 6.0 },
              { year: 2025, value: 6.0 },
            ],
          },
          {
            name:  'Taux sans risque (UST 10 ans)',
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

      // ── DSO (jours) ───────────────────────────────────────────────────────
      // CCC complet non pertinent (pas de stock, dettes fournisseurs derisoires).
      // Le vrai avantage BFR vient du deferred revenue (abonnements prepayes ~34 M$).
      {
        label: 'DSO',
        name:  'Days Sales Outstanding',
        unit:  'J',
        data: [
          { year: 2021, value: 27.0 },
          { year: 2022, value: 33.9 },
          { year: 2023, value: 26.3 },
          { year: 2024, value: 27.4 },
          { year: 2025, value: 27.2 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 28.4 },
              { year: 2022, value: 28.4 },
              { year: 2023, value: 28.4 },
              { year: 2024, value: 28.4 },
              { year: 2025, value: 28.4 },
            ],
          },
        ],
      },

      // ── Current Ratio (x) ─────────────────────────────────────────────────
      // Optiquement bas car le deferred revenue (passif courant non-monetaire) pese.
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.44 },
          { year: 2022, value: 1.06 },
          { year: 2023, value: 1.07 },
          { year: 2024, value: 1.13 },
          { year: 2025, value: 1.32 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.20 },
              { year: 2022, value: 1.20 },
              { year: 2023, value: 1.20 },
              { year: 2024, value: 1.20 },
              { year: 2025, value: 1.20 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA (x) ──────────────────────────────────────────
      // Toujours negatif : tresorerie nette structurelle. Dette = baux uniquement.
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: -0.90 },
          { year: 2022, value: -0.62 },
          { year: 2023, value: -0.63 },
          { year: 2024, value: -0.69 },
          { year: 2025, value: -0.99 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: -0.77 },
              { year: 2022, value: -0.77 },
              { year: 2023, value: -0.77 },
              { year: 2024, value: -0.77 },
              { year: 2025, value: -0.77 },
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
          { year: 2021, value: 1.21 },
          { year: 2022, value: 1.14 },
          { year: 2023, value: 1.18 },
          { year: 2024, value: 1.19 },
          { year: 2025, value: 1.21 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.19 },
              { year: 2022, value: 1.19 },
              { year: 2023, value: 1.19 },
              { year: 2024, value: 1.19 },
              { year: 2025, value: 1.19 },
            ],
          },
        ],
      },

      // ── Dilution / concentration des actions (%) ─────────────────────────
      // Quasi-nulle : les rachats compensent la remuneration en actions (SBC).
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: 0.65 },
          { year: 2023, value: -0.21 },
          { year: 2024, value: -0.19 },
          { year: 2025, value: 0.04 },
        ],
      },

      // ── Payout Ratio (%) -dividendes verses / resultat net ──────────────
      // Eleve sur le resultat GAAP (~95 %), mais seulement ~61 % du FCF (ecart D&A + SBC).
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 83.5 },
          { year: 2022, value: 85.5 },
          { year: 2023, value: 95.7 },
          { year: 2024, value: 97.2 },
          { year: 2025, value: 95.4 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 91.5 },
              { year: 2022, value: 91.5 },
              { year: 2023, value: 91.5 },
              { year: 2024, value: 91.5 },
              { year: 2025, value: 91.5 },
            ],
          },
        ],
      },

      // ── Allocation du capital : retour actionnaires vs Capex (M$) ─────────
      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 27.0 },
          { year: 2022, value: 29.1 },
          { year: 2023, value: 29.9 },
          { year: 2024, value: 29.5 },
          { year: 2025, value: 32.6 },
        ],
        competitors: [
          {
            name:  'Rachats d\'actions',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 1.5 },
              { year: 2022, value: 2.8 },
              { year: 2023, value: 3.4 },
              { year: 2024, value: 2.9 },
              { year: 2025, value: 2.9 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 1.4 },
              { year: 2022, value: 1.4 },
              { year: 2023, value: 1.6 },
              { year: 2024, value: 1.3 },
              { year: 2025, value: 0.2 },
            ],
          },
        ],
      },

    ],
  },
}
