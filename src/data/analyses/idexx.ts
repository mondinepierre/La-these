// ─────────────────────────────────────────────────────────────────────────────
// IDEXX Laboratories (NASDAQ: IDXX) — Analyse ponctuelle (riche, non revisitée régulièrement)
// Semaine santé La Thèse, jour 2 (après Veeva). Devise USD, enveloppe CTO.
// Snapshot : fondamentaux FY2025 (clos 31/12/2025), multiples au cours courant
//            562,16 $ (05/06/2026). WACC β=1,55 -> 10,6 % (2025).
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const IDEXX: AnalyseCard = {
  slug:           'idexx',
  type:           'ponctuelle',
  title:          'IDEXX Laboratories',
  ticker:         'IDXX',
  secteur:        'Santé',
  geo:            'États-Unis',
  conviction:     'forte',              // Critère 2 (Mars/Zoetis rivaux crédibles) + critère 3 (intégration verticale Mars) non remplis
  positionnement: 'surveillance',       // Pas en position ; MoS négative au cours actuel
  lastUpdated:    '2026-06-08',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Le quasi-monopole invisible du diagnostic vétérinaire : modèle rasoir-lames, 86 % de revenus récurrents et un ROIC de 58 %, mais une valorisation qui price la perfection.",
  glossaire:      ['roic', 'moat', 'free-cash-flow', 'per', 'wacc', 'ev-ebitda'],
  logo:           '/analyse/idex-laboratories.png',
  prixCible:      { bas: 609, haut: 978, devise: 'USD' },  // Central PER 793 $ (BPA 2030 22 $ x 36x) +/- MoE 23,25 %
  marginOfSafety: 'négative',                              // Cours 562 $ vs zone juste centrale 493 $ : -14 %
  readingTime:    38,    // (5964 mots / 200) + (31 visuels x 0,25)
  onePager: {
    thesis:    "Quasi-monopole du diagnostic vétérinaire : 86 % de revenus récurrents, ROIC 58 %, mais payé 43x les bénéfices.",
    cours:     562.16,
    coursDate: '2026-06-05',
    devise:    'USD',
    range52w:  { low: 514.61, high: 766.68 },
  },

  // ── Métriques snapshot — FY2025, multiples au cours courant 562,16 $ ────────
  metrics: {
    per:               43.0,   // 562,16 / BPA dilué 13,08 $
    evEbitda:          30.4,   // EV 45 819 M$ / EBITDA 1 505 M$
    fcfYield:          2.3,    // FCF 1 044 M$ / capitalisation 45 549 M$
    roic:              58.0,   // ROIC La Thèse : NOPAT 1 088 / IC 1 875 (goodwill incl., dette plancher 0)
    wacc:              10.6,   // CAPM β=1,55 — voir tableau WACC
    detteEbitda:       0.18,   // Dette nette 270 M$ / EBITDA 1 505 M$
    croissanceCA3ans:  8.5,    // TCAC CA 2022->2025
    croissanceBPA3ans: 17.7,   // TCAC BPA dilué 2022->2025
    margeEbit:         31.6,
    margeBrute:        61.8,
    payoutRatio:       0,      // Aucun dividende ; 100 % du retour via rachats
    currentRatio:      1.23,
    dso:               78.9,   // Élevé structurel (labos de référence + international)
  },

  tendances: {
    per:       'baisse',   // Compression du multiple (de-rating depuis le pic déc. 2025)
    fcfYield:  'hausse',
    roic:      'hausse',
    margeEbit: 'hausse',
  },

  updates: [
    {
      date: '2026-06-08',
      note: 'Création de la fiche. Snapshot FY2025, cours 562 $ (05/06/2026). Semaine santé jour 2.',
    },
  ],

  chartData: {

    // ── CA sur 5 ans (M$) ─────────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 3215.4 },
      { year: 2022, value: 3367.3 },
      { year: 2023, value: 3661.0 },
      { year: 2024, value: 3897.5 },
      { year: 2025, value: 4303.7 },
    ],

    // ── Répartition géographique du CA (FY2025) ───────────────────────────────
    // US 64 % ; Europe (DE/FR/NL/UK/Other EMEA) 17,6 % ; Asie-Pacifique 8,3 % ;
    // Reste du monde (Canada + Amérique latine + autres) 10,1 %.
    geoRevenue: [
      { region: 'États-Unis',     pct: 63.9 },
      { region: 'Europe',         pct: 17.6 },
      { region: 'Asie-Pacifique', pct: 8.3 },
      { region: 'Reste du monde', pct: 10.2 },
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    marges: [
      { year: 2021, gross: 58.8, operating: 29.0, net: 23.2 },
      { year: 2022, gross: 59.5, operating: 26.7, net: 20.2 },
      { year: 2023, gross: 59.8, operating: 30.0, net: 23.1 },
      { year: 2024, gross: 61.0, operating: 29.0, net: 22.8 },
      { year: 2025, gross: 61.8, operating: 31.6, net: 24.6 },
    ],

    // ── ROIC simple sur 5 ans (%) — La Thèse, goodwill inclus ──────────────────
    roic: [
      { year: 2021, value: 55.1 },
      { year: 2022, value: 56.1 },
      { year: 2023, value: 50.5 },
      { year: 2024, value: 46.9 },
      { year: 2025, value: 58.0 },
    ],

    // ── ROIC vs WACC (%) — WACC recalculé β=1,55 ──────────────────────────────
    roicVsWacc: [
      { year: 2021, value: 55.1, wacc: 8.08 },
      { year: 2022, value: 56.1, wacc: 12.84 },
      { year: 2023, value: 50.5, wacc: 10.76 },
      { year: 2024, value: 46.9, wacc: 10.93 },
      { year: 2025, value: 58.0, wacc: 10.59 },
    ],

    // ── Free Cash Flow sur 5 ans (M$) ─────────────────────────────────────────
    fcf: [
      { year: 2021, value: 636.0 },
      { year: 2022, value: 384.1 },   // Déprimé : capex/BFR élevés
      { year: 2023, value: 772.9 },
      { year: 2024, value: 798.1 },
      { year: 2025, value: 1043.6 },
    ],

    // ── CA par segment reportable (M$) ────────────────────────────────────────
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'CAG (animaux de compagnie)', value: 2890.96 },
          { name: 'Water',                       value: 146.505 },
          { name: 'LPD (élevage)',               value: 135.887 },
          { name: 'Other',                       value: 43.008 },
        ]},
        { year: 2022, segments: [
          { name: 'CAG (animaux de compagnie)', value: 3058.793 },
          { name: 'Water',                       value: 155.72 },
          { name: 'LPD (élevage)',               value: 122.607 },
          { name: 'Other',                       value: 30.204 },
        ]},
        { year: 2023, segments: [
          { name: 'CAG (animaux de compagnie)', value: 3352.356 },
          { name: 'Water',                       value: 168.149 },
          { name: 'LPD (élevage)',               value: 121.659 },
          { name: 'Other',                       value: 18.789 },
        ]},
        { year: 2024, segments: [
          { name: 'CAG (animaux de compagnie)', value: 3574.044 },
          { name: 'Water',                       value: 185.112 },
          { name: 'LPD (élevage)',               value: 122.06 },
          { name: 'Other',                       value: 16.288 },
        ]},
        { year: 2025, segments: [
          { name: 'CAG (animaux de compagnie)', value: 3953.285 },
          { name: 'Water',                       value: 201.149 },
          { name: 'LPD (élevage)',               value: 131.787 },
          { name: 'Other',                       value: 17.481 },
        ]},
      ],
    },

    // ── Valorisation comparée (source : onglet Comparaison sectorielle) ────────
    // Axes : PER, EV/EBITDA, P/FCF (plus bas = moins cher) ; Marge EBIT %, ROIC %
    // (plus haut = mieux). ROIC ici = base standard agrégateur (38,6 %), pas le
    // ROIC La Thèse (58 %), pour comparabilité avec les pairs.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée : IDEXX vs médiane des pairs',
        data: [
          { label: 'PER',          valeur: 41.3, secteur: 26.3 },
          { label: 'EV/EBITDA',    valeur: 29.3, secteur: 10.0 },
          { label: 'P/FCF',        valeur: 42.5, secteur: 24.0 },
          { label: 'Marge EBIT %', valeur: 31.8, secteur: 22.9 },
          { label: 'ROIC %',       valeur: 38.6, secteur: 12.8 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'Valorisation comparée : IDEXX vs Zoetis',
        concurrent1: 'Zoetis',
        data: [
          { label: 'PER',          valeur: 41.3, concurrent1: 13.0 },
          { label: 'EV/EBITDA',    valeur: 29.3, concurrent1: 10.0 },
          { label: 'P/FCF',        valeur: 42.5, concurrent1: 14.6 },
          { label: 'Marge EBIT %', valeur: 31.8, concurrent1: 36.6 },
          { label: 'ROIC %',       valeur: 38.6, concurrent1: 22.0 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: 'Valorisation comparée : IDEXX vs Sysmex',
        concurrent1: 'Sysmex',
        data: [
          { label: 'PER',          valeur: 41.3, concurrent1: 26.3 },
          { label: 'EV/EBITDA',    valeur: 29.3, concurrent1: 8.3 },
          { label: 'P/FCF',        valeur: 42.5, concurrent1: 24.0 },
          { label: 'Marge EBIT %', valeur: 31.8, concurrent1: 10.6 },
          { label: 'ROIC %',       valeur: 38.6, concurrent1: 12.8 },
        ],
      },
      {
        id: 'vs_pair3', type: 'radar',
        title: 'Valorisation comparée : IDEXX vs Danaher',
        concurrent1: 'Danaher',
        data: [
          { label: 'PER',          valeur: 41.3, concurrent1: 35.7 },
          { label: 'EV/EBITDA',    valeur: 29.3, concurrent1: 18.2 },
          { label: 'P/FCF',        valeur: 42.5, concurrent1: 24.8 },
          { label: 'Marge EBIT %', valeur: 31.8, concurrent1: 22.9 },
          { label: 'ROIC %',       valeur: 38.6, concurrent1: 3.6 },
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
          { year: 2021, value: 62.1 },
          { year: 2022, value: 40.7 },
          { year: 2023, value: 44.7 },
          { year: 2024, value: 31.5 },
          { year: 2025, value: 36.9 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 43.2 },
              { year: 2022, value: 43.2 },
              { year: 2023, value: 43.2 },
              { year: 2024, value: 43.2 },
              { year: 2025, value: 43.2 },
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
          { year: 2021, value: 755.5 },
          { year: 2022, value: 543.0 },
          { year: 2023, value: 906.5 },
          { year: 2024, value: 929.0 },
          { year: 2025, value: 1181.8 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 636.0 },
              { year: 2022, value: 384.1 },
              { year: 2023, value: 772.9 },
              { year: 2024, value: 798.1 },
              { year: 2025, value: 1043.6 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 119.5 },
              { year: 2022, value: 158.8 },
              { year: 2023, value: 133.6 },
              { year: 2024, value: 130.9 },
              { year: 2025, value: 138.2 },
            ],
          },
        ],
      },

      // ── BPA dilué ($) ─────────────────────────────────────────────────────
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '$',
        data: [
          { year: 2021, value: 8.60 },
          { year: 2022, value: 8.03 },
          { year: 2023, value: 10.06 },
          { year: 2024, value: 10.67 },
          { year: 2025, value: 13.08 },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) ──────────────────────────────────────────
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 63.6 },
          { year: 2022, value: 69.0 },
          { year: 2023, value: 52.1 },
          { year: 2024, value: 55.2 },
          { year: 2025, value: 68.7 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 8.08 },
              { year: 2022, value: 12.84 },
              { year: 2023, value: 10.76 },
              { year: 2024, value: 10.93 },
              { year: 2025, value: 10.59 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 55.1 },
              { year: 2022, value: 56.1 },
              { year: 2023, value: 50.5 },
              { year: 2024, value: 46.9 },
              { year: 2025, value: 58.0 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (1 an glissant, %) — volatil (base IC faible) ─────────
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value: -24.9 },
          { year: 2023, value: -125.9 },
          { year: 2024, value: 6.3 },
          { year: 2025, value: 94.6 },
        ],
      },

      // ── ROIIC glissant multi-périodes (%) ─────────────────────────────────
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 94.6 },
          { year: 2, value: 32.5 },
          { year: 3, value: 71.6 },
          { year: 4, value: 41.6 },
        ],
      },

      // ── PER historique (clôtures de fin d'exercice) ───────────────────────
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 76.5 },
          { year: 2022, value: 50.8 },
          { year: 2023, value: 55.2 },
          { year: 2024, value: 38.8 },
          { year: 2025, value: 51.7 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 54.6 },
              { year: 2022, value: 54.6 },
              { year: 2023, value: 54.6 },
              { year: 2024, value: 54.6 },
              { year: 2025, value: 54.6 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 88.5 },
              { year: 2022, value: 46.6 },
              { year: 2023, value: 51.5 },
              { year: 2024, value: 36.1 },
              { year: 2025, value: 49.2 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (% sur capitalisation) ───────────────────────
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 1.1 },
          { year: 2022, value: 1.1 },
          { year: 2023, value: 1.7 },
          { year: 2024, value: 2.3 },
          { year: 2025, value: 1.9 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.6 },
              { year: 2022, value: 1.6 },
              { year: 2023, value: 1.6 },
              { year: 2024, value: 1.6 },
              { year: 2025, value: 1.6 },
            ],
          },
          {
            name:  'Taux sans risque',   // UST 10 ans, fin d'exercice
            color: '#52B788',
            data: [
              { year: 2021, value: 1.57 },
              { year: 2022, value: 3.83 },
              { year: 2023, value: 3.73 },
              { year: 2024, value: 4.34 },
              { year: 2025, value: 4.09 },
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
          { year: 2021, value: 72.4 },
          { year: 2022, value: 83.3 },
          { year: 2023, value: 83.5 },
          { year: 2024, value: 80.1 },
          { year: 2025, value: 78.9 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 74.1 },
              { year: 2022, value: 98.5 },
              { year: 2023, value: 94.4 },
              { year: 2024, value: 91.8 },
              { year: 2025, value: 83.9 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 32.0 },
              { year: 2022, value: 29.5 },
              { year: 2023, value: 27.5 },
              { year: 2024, value: 27.5 },
              { year: 2025, value: 24.5 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 114.4 },
              { year: 2022, value: 152.3 },
              { year: 2023, value: 150.4 },
              { year: 2024, value: 144.4 },
              { year: 2025, value: 138.2 },
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
          { year: 2021, value: 1.25 },
          { year: 2022, value: 0.89 },   // Sous 1 : papier commercial CT
          { year: 2023, value: 1.57 },
          { year: 2024, value: 1.31 },
          { year: 2025, value: 1.23 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.25 },
              { year: 2022, value: 1.25 },
              { year: 2023, value: 1.25 },
              { year: 2024, value: 1.25 },
              { year: 2025, value: 1.25 },
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
          { year: 2021, value: 0.68 },
          { year: 2022, value: 0.65 },
          { year: 2023, value: 0.20 },
          { year: 2024, value: 0.26 },
          { year: 2025, value: 0.18 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.40 },
              { year: 2022, value: 0.40 },
              { year: 2023, value: 0.40 },
              { year: 2024, value: 0.40 },
              { year: 2025, value: 0.40 },
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
          { year: 2021, value: 1.32 },
          { year: 2022, value: 1.23 },
          { year: 2023, value: 1.12 },
          { year: 2024, value: 1.18 },
          { year: 2025, value: 1.28 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.23 },
              { year: 2022, value: 1.23 },
              { year: 2023, value: 1.23 },
              { year: 2024, value: 1.23 },
              { year: 2025, value: 1.23 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions (%) ──────────────────────────
      // Négatif = concentration (rachats nets). IDEXX réduit son flottant.
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: -2.3 },
          { year: 2023, value: -0.7 },
          { year: 2024, value: -0.9 },
          { year: 2025, value: -2.7 },
        ],
      },

      // ── Allocation du capital — rachats vs Capex (M$) ─────────────────────
      // Aucun dividende : 100 % du retour actionnaire passe par les rachats.
      {
        label: 'Capex_Action',
        name:  'Rachats d\'actions',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 746.8 },
          { year: 2022, value: 819.7 },
          { year: 2023, value: 71.9 },
          { year: 2024, value: 837.0 },
          { year: 2025, value: 1217.0 },
        ],
        competitors: [
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 119.5 },
              { year: 2022, value: 158.8 },
              { year: 2023, value: 133.6 },
              { year: 2024, value: 130.9 },
              { year: 2025, value: 138.2 },
            ],
          },
        ],
      },

    ],
  },
}
