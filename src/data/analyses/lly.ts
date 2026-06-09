// ─────────────────────────────────────────────────────────────────────────────
// Eli Lilly and Company (LLY) - Analyse ponctuelle
// Semaine santé, jour 4 (miroir US de Novo Nordisk).
// Enveloppe : CTO. Devise : USD. Snapshot ancré FY2025 (clos 31/12/2025),
//             cours courant mentionné dans onePager.
// ─────────────────────────────────────────────────────────────────────────────
//
// NOTES MÉTHODO (à lire avant toute reprise) :
//  - Devise USD native (société US, publie en USD).
//  - ROIC La Thèse standard : NOPAT / (CP + max(dette nette, 0)), goodwill inclus.
//    Dette nette FY2025 positive (35 235 M$), donc incluse. ROIC 2025 = 34,16 %.
//  - WACC US : Rf = UST 10 ans, ERP Damodaran US (sans CRP), beta 0,527 vs SPXTR
//    (régression mensuelle 5 ans, confirmé Pierre). WACC 2025 = 6,21 %.
//  - DSO recalculé sur Créances clients seules (le modèle Excel intègre prepaid
//    expenses -> DSO faussé à 190 j ; valeur propre = 99,5 j).
//  - Dividende en convention DEU "au titre de l'exercice" (déclaré, pas versé) :
//    2021 3,53 / 2022 4,07 / 2023 4,69 / 2024 5,40 / 2025 6,23 $.
//  - FCF métrique = OCF - tout capex (standard La Thèse). Le capex est en phase
//    d'hyperinvestissement (1,3 -> 7,8 Md$), donc le FCF publié est déprimé : le
//    DCF central tournera sur un FCF NORMALISÉ (double lecture <NoteAnalyse>).
//  - Acquired IPR&D : charge récurrente mais erratique ; l'adjusted EPS Lilly
//    l'exclut (avec amort. incorporels). EPS GAAP dilué 2025 = 22,95 $ ;
//    adjusted = 24,21 $ (écart faible, +5,5 %).
//
// CHAMPS EN ATTENTE DE VALIDATION (workflow) :
//  - conviction / positionnement / marginOfSafety : après section Verdict.
//  - prixCible / onePager.cours / range52w : après scénarios DCF + PER validés.
//  - valuationCharts (pairs + multiples) : après confirmation des pairs.
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const lly: AnalyseCard = {
  slug:           'lly',
  type:           'ponctuelle',             // Pierre hors position, pas de suivi trimestriel engagé
  title:          'Eli Lilly and Company',
  ticker:         'LLY',
  secteur:        'Santé',
  geo:            'États-Unis',
  conviction:     'forte',                  // duopole GLP-1 (pas monopole) + concentration 74 % + falaise brevets : forte, pas exceptionnelle
  positionnement: 'surveillance',           // hors position : qualité exceptionnelle mais prix de la perfection
  lastUpdated:    '2026-06-09',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '2031',
  excerpt:        "L'autre titan du GLP-1, côté américain : ROIC 34 %, marge EBIT 40 %, CA +45 % en un an. La perfection opérationnelle, payée près de 50x les bénéfices.",
  glossaire:      ['glp-1', 'pipeline-pharma', 'roic', 'free-cash-flow', 'per-valorisation', 'marge-de-securite'],
  logo:           '/analyse/Eli_Lilly.png',
  // prixCible = objectif HORIZON 2031 (non actualisé). DCF central 739 $ capitalisé
  // à r=10 % sur 5 ans = 1 190 $, ± MoE (beta 0,527 x 15 % = 7,9 %) -> 1 096-1 284.
  prixCible:      { bas: 1096, haut: 1284, devise: 'USD' },
  // Cours ~1 149 vs juste valeur mixte DCF+PER ~1 010 : prime modérée. DCF dit prime,
  // PER forward dit décote -> les méthodes encadrent le cours, MoS globalement faible.
  marginOfSafety: 'faible',
  readingTime:    50,

  onePager: {
    thesis:    "Le titan américain du GLP-1 : Mounjaro et Zepbound portent 74 % du CA, ROIC 34 %, marge EBIT 40 %. La perfection, à près de 50x les bénéfices.",
    cours:     1149.15,                      // PROVISOIRE : confirmer cours + date
    coursDate: '2026-06-09',
    devise:    'USD',
    range52w:  { low: 677, high: 1150 },     // PROVISOIRE : confirmer fourchette 52 semaines
  },

  metrics: {
    per:               47.5,   // cours courant / EPS ajusté 24,21
    evEbitda:          37.8,
    fcfYield:          0.8,    // FCF publié / EV (déprimé par le capex, voir NoteAnalyse)
    roic:              34.2,
    wacc:              6.2,
    detteEbitda:       1.25,
    croissanceCA3ans:  31.69,
    croissanceBPA3ans: 49.27,  // CAGR EPS dilué GAAP 3 ans (jambe montante du S-curve GLP-1)
    margeEbit:         40.4,
    margeBrute:        83.0,
    payoutRatio:       27.1,   // DPS déclaré 6,23 / EPS dilué 22,95
    currentRatio:      1.58,
    dso:               99,     // créances clients seules (bug Excel corrigé)
  },

  tendances: {
    per:       'baisse',   // derating : 100x (2023) -> 47x, le BPA croît plus vite que le cours
    fcfYield:  'hausse',   // remontée depuis le creux 2023 (capex au pic)
    roic:      'hausse',   // 15,5 % (2023) -> 34,2 %
    margeEbit: 'hausse',   // 22 % (2021) -> 40 %
  },

  updates: [
    {
      date: '2026-06-09',
      note: "Création de la fiche. Données FY2025 (clos 31/12/2025), 10-Q Q1-2026, guidance 2026 (CA 80-83 Md$, +25 % ; EPS ajusté 33,50-35,00 $). Semaine santé, miroir US de Novo Nordisk.",
    },
    {
      date: '2026-07-23',
      note: 'Résultats Q2-2026 attendus. Source : Yahoo Finance API.',
    },
  ],

  chartData: {
    // ── CA sur 5 ans (Md$) ────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 28.318 },
      { year: 2022, value: 28.541 },
      { year: 2023, value: 34.124 },
      { year: 2024, value: 45.043 },
      { year: 2025, value: 65.179 },
    ],

    // ── Répartition géographique du CA (FY2025) ───────────────────────────
    geoRevenue: [
      { region: 'États-Unis',     pct: 66.71 },
      { region: 'Europe',         pct: 17.73 },
      { region: 'Reste du monde', pct:  9.29 },
      { region: 'Japon',          pct:  3.27 },
      { region: 'Chine',          pct:  2.99 },
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────
    marges: [
      { year: 2021, gross: 74.18, operating: 22.45, net: 19.71 },
      { year: 2022, gross: 76.77, operating: 24.97, net: 21.88 },
      { year: 2023, gross: 79.25, operating: 18.92, net: 15.36 },
      { year: 2024, gross: 81.31, operating: 28.64, net: 23.51 },
      { year: 2025, gross: 83.04, operating: 40.35, net: 31.67 },
    ],

    // ── ROIC La Thèse sur 5 ans (%) ───────────────────────────────────────
    roic: [
      { year: 2021, value: 25.94 },
      { year: 2022, value: 26.21 },
      { year: 2023, value: 15.52 },
      { year: 2024, value: 24.13 },
      { year: 2025, value: 34.16 },
    ],

    // ── ROIC vs WACC ──────────────────────────────────────────────────────
    roicVsWacc: [
      { year: 2021, value: 25.94, wacc: 3.83 },
      { year: 2022, value: 26.21, wacc: 6.84 },
      { year: 2023, value: 15.52, wacc: 6.05 },
      { year: 2024, value: 24.13, wacc: 6.50 },
      { year: 2025, value: 34.16, wacc: 6.21 },
    ],

    // ── Free Cash Flow publié sur 5 ans (Md$) ─────────────────────────────
    fcf: [
      { year: 2021, value: 6.056 },
      { year: 2022, value: 5.731 },
      { year: 2023, value: 0.792 },
      { year: 2024, value: 3.760 },
      { year: 2025, value: 8.972 },
    ],

    // ── CA par segment thérapeutique (Md$) ────────────────────────────────
    segmentRevenue: {
      unit: 'Md$',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'Cardiometabolic Health', value: 14.188 },
          { name: 'Oncology',               value:  5.741 },
          { name: 'Immunology',             value:  3.361 },
          { name: 'Neuroscience',           value:  1.899 },
          { name: 'Other',                  value:  4.130 },
        ]},
        { year: 2022, segments: [
          { name: 'Cardiometabolic Health', value: 14.465 },
          { name: 'Oncology',               value:  5.666 },
          { name: 'Immunology',             value:  3.345 },
          { name: 'Neuroscience',           value:  1.546 },
          { name: 'Other',                  value:  3.522 },
        ]},
        { year: 2023, segments: [
          { name: 'Cardiometabolic Health', value: 22.452 },
          { name: 'Oncology',               value:  6.658 },
          { name: 'Immunology',             value:  3.798 },
          { name: 'Neuroscience',           value:  2.879 },
          { name: 'Other',                  value:  1.122 },
        ]},
        { year: 2024, segments: [
          { name: 'Cardiometabolic Health', value: 29.521 },
          { name: 'Oncology',               value:  8.753 },
          { name: 'Immunology',             value:  4.393 },
          { name: 'Neuroscience',           value:  1.474 },
          { name: 'Other',                  value:  0.903 },
        ]},
        { year: 2025, segments: [
          { name: 'Cardiometabolic Health', value: 48.221 },
          { name: 'Oncology',               value:  9.376 },
          { name: 'Immunology',             value:  5.247 },
          { name: 'Neuroscience',           value:  1.391 },
          { name: 'Other',                  value:  0.943 },
        ]},
      ],
    },

    // ── Comparaison valorisation (radars) ─────────────────────────────────
    // Source homogène : stockanalysis.com (multiples marché TTM, base identique
    // pour tous les pairs ; juin 2026). Secteur = médiane pharma large cap.
    // NB : ces multiples sont en base marché courante (TTM), donc marge op et ROIC
    // diffèrent des séries FY2025 du reste de la fiche (snapshot ancré exercice clos).
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Eli Lilly vs médiane secteur pharma',
        data: [
          { label: 'PER',                  valeur: 40.82, secteur: 20.14 },
          { label: 'P/FCF',                valeur: 86.67, secteur: 16.10 },
          { label: 'EV/EBITDA',            valeur: 29.34, secteur:  8.79 },
          { label: 'Marge opérationnelle', valeur: 47.30, secteur: 31.90 },
          { label: 'ROIC',                 valeur: 41.92, secteur: 13.50 },
        ],
      },
      {
        id: 'vs_pairs', type: 'radar',
        title: 'Valorisation comparée - Eli Lilly vs pairs directs',
        concurrent1: 'Novo Nordisk', concurrent2: 'AstraZeneca', concurrent3: 'Amgen',
        data: [
          { label: 'PER',                  valeur: 40.82, concurrent1: 9.89,  concurrent2: 27.48, concurrent3: 24.06 },
          { label: 'P/FCF',                valeur: 86.67, concurrent1: 19.91, concurrent2: 25.28, concurrent3: 21.59 },
          { label: 'EV/EBITDA',            valeur: 29.34, concurrent1: 7.66,  concurrent2: 15.59, concurrent3: 13.65 },
          { label: 'Marge opérationnelle', valeur: 47.30, concurrent1: 49.25, concurrent2: 24.75, concurrent3: 32.63 },
          { label: 'ROIC',                 valeur: 41.92, concurrent1: 40.42, concurrent2: 16.44, concurrent3: 19.05 },
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
          { year: 2021, value: 24.47 },
          { year: 2022, value: 25.19 },
          { year: 2023, value: 27.29 },
          { year: 2024, value: 24.40 },
          { year: 2025, value: 20.46 },
        ],
      },
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 43.1 },
          { year: 2022, value: 49.5 },
          { year: 2023, value: 119.9 },
          { year: 2024, value: 57.5 },
          { year: 2025, value: 38.3 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 61.7 },
              { year: 2022, value: 61.7 },
              { year: 2023, value: 61.7 },
              { year: 2024, value: 61.7 },
              { year: 2025, value: 61.7 },
            ],
          },
        ],
      },
      {
        label: 'FCF_OCF_Capex',
        name:  'Operating Cash Flow',
        unit:  'Md$',
        yMin:  0,
        data: [
          { year: 2021, value:  7.366 },
          { year: 2022, value:  7.586 },
          { year: 2023, value:  4.240 },
          { year: 2024, value:  8.818 },
          { year: 2025, value: 16.813 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 6.056 },
              { year: 2022, value: 5.731 },
              { year: 2023, value: 0.792 },
              { year: 2024, value: 3.760 },
              { year: 2025, value: 8.972 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 1.310 },
              { year: 2022, value: 1.854 },
              { year: 2023, value: 3.448 },
              { year: 2024, value: 5.058 },
              { year: 2025, value: 7.841 },
            ],
          },
        ],
      },
      {
        label: 'EPS',
        name:  'EPS dilué (GAAP)',
        unit:  ' $',
        data: [
          { year: 2021, value:  6.12 },
          { year: 2022, value:  6.90 },
          { year: 2023, value:  5.80 },
          { year: 2024, value: 11.71 },
          { year: 2025, value: 22.95 },
        ],
        competitors: [
          {
            name:   'EPS ajusté (non-GAAP Lilly)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value:  7.39 },
              { year: 2022, value:  7.94 },
              { year: 2023, value:  6.32 },
              { year: 2024, value: 12.99 },
              { year: 2025, value: 24.21 },
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
          { year: 2021, value: 86 },
          { year: 2022, value: 88 },
          { year: 2023, value: 97 },
          { year: 2024, value: 89 },
          { year: 2025, value: 100 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 194 },
              { year: 2022, value: 237 },
              { year: 2023, value: 298 },
              { year: 2024, value: 329 },
              { year: 2025, value: 454 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value:  83 },
              { year: 2022, value: 106 },
              { year: 2023, value: 134 },
              { year: 2024, value: 140 },
              { year: 2025, value: 178 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 197 },
              { year: 2022, value: 219 },
              { year: 2023, value: 261 },
              { year: 2024, value: 278 },
              { year: 2025, value: 376 },
            ],
          },
          {
            name:   'Moyenne historique CCC (5 ans)',
            color:  '#917939',
            dashed: true,
            data: [
              { year: 2021, value: 266 },
              { year: 2022, value: 266 },
              { year: 2023, value: 266 },
              { year: 2024, value: 266 },
              { year: 2025, value: 266 },
            ],
          },
        ],
      },
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.23 },
          { year: 2022, value: 1.05 },
          { year: 2023, value: 0.94 },
          { year: 2024, value: 1.15 },
          { year: 2025, value: 1.58 },
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
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 1.65 },
          { year: 2022, value: 1.64 },
          { year: 2023, value: 2.81 },
          { year: 2024, value: 2.07 },
          { year: 2025, value: 1.25 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.88 },
              { year: 2022, value: 1.88 },
              { year: 2023, value: 1.88 },
              { year: 2024, value: 1.88 },
              { year: 2025, value: 1.88 },
            ],
          },
        ],
      },
      {
        label: 'Dilution',
        name:  'Dilution / Concentration',
        unit:  '%',
        data: [
          { year: 2022, value: -0.77 },
          { year: 2023, value: -0.15 },
          { year: 2024, value:  0.09 },
          { year: 2025, value: -0.53 },
        ],
      },
      {
        label: 'Dividendes',
        name:  'Dividende annuel (déclaré)',
        unit:  ' $',
        data: [
          { year: 2021, value: 3.53 },
          { year: 2022, value: 4.07 },
          { year: 2023, value: 4.69 },
          { year: 2024, value: 5.40 },
          { year: 2025, value: 6.23 },
        ],
      },
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 57.7 },
          { year: 2022, value: 59.0 },
          { year: 2023, value: 80.9 },
          { year: 2024, value: 46.1 },
          { year: 2025, value: 27.1 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 54.2 },
              { year: 2022, value: 54.2 },
              { year: 2023, value: 54.2 },
              { year: 2024, value: 54.2 },
              { year: 2025, value: 54.2 },
            ],
          },
        ],
      },
      {
        label: 'Capex_Action',
        name:  'Dividendes',
        unit:  'Md$',
        yMin:  0,
        data: [
          { year: 2021, value: 3.087 },
          { year: 2022, value: 3.536 },
          { year: 2023, value: 4.069 },
          { year: 2024, value: 4.680 },
          { year: 2025, value: 5.384 },
        ],
        competitors: [
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 1.310 },
              { year: 2022, value: 1.854 },
              { year: 2023, value: 3.448 },
              { year: 2024, value: 5.058 },
              { year: 2025, value: 7.841 },
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
          { year: 2021, value: 0.58 },
          { year: 2022, value: 0.58 },
          { year: 2023, value: 0.53 },
          { year: 2024, value: 0.57 },
          { year: 2025, value: 0.58 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.57 },
              { year: 2022, value: 0.57 },
              { year: 2023, value: 0.57 },
              { year: 2024, value: 0.57 },
              { year: 2025, value: 0.57 },
            ],
          },
        ],
      },
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 25.95 },
          { year: 2022, value: 27.94 },
          { year: 2023, value: 22.12 },
          { year: 2024, value: 30.14 },
          { year: 2025, value: 39.02 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 3.83 },
              { year: 2022, value: 6.84 },
              { year: 2023, value: 6.05 },
              { year: 2024, value: 6.50 },
              { year: 2025, value: 6.21 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 25.94 },
              { year: 2022, value: 26.21 },
              { year: 2023, value: 15.52 },
              { year: 2024, value: 24.13 },
              { year: 2025, value: 34.16 },
            ],
          },
        ],
      },
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 45.1 },
          { year: 2022, value: 53.0 },
          { year: 2023, value: 100.5 },
          { year: 2024, value: 65.9 },
          { year: 2025, value: 46.8 },
        ],
        competitors: [
          {
            name:   'PER historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 62.3 },
              { year: 2022, value: 62.3 },
              { year: 2023, value: 62.3 },
              { year: 2024, value: 62.3 },
              { year: 2025, value: 62.3 },
            ],
          },
          {
            name:   'PER ajusté (non-GAAP)',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 51.0 },
              { year: 2022, value: 50.4 },
              { year: 2023, value: 85.5 },
              { year: 2024, value: 55.5 },
              { year: 2025, value: 40.8 },
            ],
          },
        ],
      },
      {
        label: 'FCFy',
        name:  'Free-Cash-Flow Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 2.40 },
          { year: 2022, value: 1.73 },
          { year: 2023, value: 0.15 },
          { year: 2024, value: 0.54 },
          { year: 2025, value: 0.93 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.15 },
              { year: 2022, value: 1.15 },
              { year: 2023, value: 1.15 },
              { year: 2024, value: 1.15 },
              { year: 2025, value: 1.15 },
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
