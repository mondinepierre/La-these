// ─────────────────────────────────────────────────────────────────────────────
// Rockwell Automation (ROK) - Valeur suivie
// Dernière mise à jour : mai 2026
// Sources : 10-K FY2021 à FY2025 (clôture 30 septembre),
//           10-Q Q1-FY2026 (déc. 2025) et Q2-FY2026 (mars 2026),
//           Proxy Statement FY2026, Excel La Thèse (Rockwell.xlsx),
//           Financial Disclosures Rockwell (Financieal_ROK.xlsx)
// Devise : Dollar américain (USD) - cotation NYSE - non éligible PEA (CTO)
// Cours snapshot multiples publiés : 358,88 $ au 31/03/2026 (TTM)
// Cours référence valorisation et niveaux personnels : 422,29 $ au 20/05/2026
// ─────────────────────────────────────────────────────────────────────────────
//
// CALENDRIER FISCAL
//   Exercice fiscal clos au 30 septembre. FY2025 = oct. 2024 à sept. 2025.
//   TTM au 31/03/2026 = Q3-25 + Q4-25 + Q1-26 + Q2-26.
//
// NOTES MÉTHODOLOGIQUES
//   ROIC : IC Cash Adjusted = Capitaux propres + max(dette nette, 0) + goodwill
//          Goodwill 3 838 M$ inclus (post-acquisitions 2020-2022 : Plex, Fiix,
//          AVATA, Sensia, ASEM, Avnet, Oylo, Kalypso)
//          NOPAT = EBIT × (1 - taux effectif d'impôt)
//          ROIC TTM 20,1 % vs ROIC ex-goodwill 45,7 % - écart structurel
//          attendu pour un industriel acquisitif.
//   WACC : CAPM avec UST 10Y comme Rf (4,09 % au 31/12/2025)
//          Pas de plancher 2 % appliqué (environnement US à taux normalisés)
//          β = 1,413 (régression mensuelle 5 ans vs S&P 500 Total Return)
//          ERP Damodaran US (sans CRP) : 4,23 %
//          Re = 10,07 % | Rd post-IS = 3,95 % | E/V = 93,2 % | D/V = 6,8 %
//   BPA : EPS dilué GAAP TTM = 9,62 $ - Adjusted EPS TTM = 12,24 $
//         Écart 2,62 $/action : amortissement PPA (~1,30 $), restructuration
//         FY25 (~0,55 $), charges asbestos + Sensia (~0,55 $), divers (~0,22 $)
//         PER snapshot publié sur GAAP TTM (cohérence inter-fiches La Thèse).
//         Adjusted EPS utilisé dans le calculateur PER (cohérence pairs).
//   PER ajusté taux : PER × (Re_année / Re_moyenne) - moyenne 5 ans 33,79x
//   ROIIC : Volatilité (2 % à 58 % YoY) liée aux acquisitions 2020-2022 et
//           au cycle. Lecture multi-périodes plus pertinente.
//   Backlog : Total annuel uniquement (pas par segment trimestriel).
//             FY2025 : 2 989 M$ (vs 3 091 M$ FY2024, -3,3 %).
//   Géographie : sales pays de destination (convention 10-K). NA Rockwell =
//                US + Canada (en quasi-totalité US). Libellés régions :
//                'Amérique du Nord', 'EMEA', 'Asie-Pacifique', 'Amérique Latine'.
//
// CYCLICITÉ
//   Pic FY23 9 058 M$ - creux FY24 8 264 M$ (-9 %) - retour FY25 8 342 M$
//   Réaccélération TTM (+5,3 %, +11,9 % en Q1-26 et Q2-26 organique).
//
// ANGLE PIVOT
//   Seul acteur coté à offrir une stack Industrie 4.0 propriétaire complète
//   sur le marché US, qui prépare activement sa transition vers compounder
//   à mix software. Rente Allen-Bradley + 4 piliers de moat (switching costs,
//   stack 4.0, dominance US 60-65 % automation discrete, écosystème).
//
// GUIDANCE FY2026 (publiée 5 mai 2026)
//   Sales : 5 % à 9 % organique (mid 7 %) ~8,9 Md$
//   Pretax margin : ~19,0 %
//   EPS dilué GAAP : 11,88-12,48 $
//   Adjusted EPS : 12,50-13,10 $ (mid 12,80 $)
//   Tax rate effectif : ~18,5 % | FCF : ~1,5 Md$
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const rockwellAutomation: AnalyseCard = {
  slug:           'rockwell-automation',
  type:           'valeur',
  title:          'Rockwell Automation',
  ticker:         'ROK',
  secteur:        'Industrie',
  geo:            'États-Unis',
  conviction:     'forte',              // validée par Pierre - basée sur la qualité du business
  positionnement: 'maintien',       // à arbitrer par Pierre après revue complète des cours
  lastUpdated:    '2026-05-20',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Seul acteur coté à offrir une stack Industrie 4.0 propriétaire complète sur le marché américain de l'automatisation industrielle. Rente Allen-Bradley sur 60-65 % de l'automation discrete US, switching costs vérifiés par 30 ans de spread ROIC-WACC durablement supérieur à +8 points, transition vers un mix software en cours. Le marché paie un PER forward 33x sur Adjusted FY26 qui price déjà l'exécution sans accroc.",
  glossaire:      ['moat', 'roic', 'wacc', 'free-cash-flow', 'per-valorisation', 'couts-de-changement'],
  logo:           '/analyse/rockwell-automation.png',
  prixCible:      { bas: 483, haut: 743, devise: 'USD' },   // Prix cible central à 5 ans 613 $ ± MoE 21,2 % (β × 15 %)
  marginOfSafety: 'négative',           // cours 422,29 $ vs zone juste centrale 380,7 $ = prime +10,9 %
  readingTime:    55,                    // à recalculer en fin de production

  onePager: {
    thesis:    "Stack Industrie 4.0 propriétaire unique sur le marché US, transition software en marche.",
    cours:     436.80,
    coursDate: '2026-05-20',
    devise:    'USD',
    range52w:  { low: 298.7, high: 463.49 },     // à compléter manuellement à la publication
  },

  // ── Métriques snapshot - TTM au 31/03/2026 (cours 358,88 $) ─────────────────
  metrics: {
    per:               37.23,    // Cours TTM 358,88 / EPS dilué GAAP TTM 9,62
    evEbitda:          23.66,    // EV TTM 43 775 / EBITDA TTM 1 850
    fcfYield:           3.06,    // FCF TTM 1 339 / EV TTM 43 775 (dénominateur EV)
    roic:              20.07,    // NOPAT TTM 1 372 / IC TTM 6 842 (Cash Adjusted, goodwill inclus)
    wacc:               9.56,    // CAPM TTM - voir notes méthodologiques
    detteEbitda:        1.77,    // Dette nette 3 266 / EBITDA TTM 1 850
    croissanceCA3ans:   1.77,    // CAGR TTM vs FY22 (cyclicité absorbe la base)
    croissanceBPA3ans:  3.10,    // CAGR Adjusted EPS TTM vs FY22
    margeEbit:         18.96,    // EBIT TTM 1 669 / Sales TTM 8 804 (non Adjusted)
    margeBrute:        48.92,    // (Sales 8 804 - Cost of sales 4 497) / Sales
    payoutRatio:       61.83,    // Dividendes TTM 603 / Net income TTM 1 088
    currentRatio:       1.09,    // Actifs courants 4 085 / Passifs courants 3 745
    dso:               78,       // (Receivables 1 883 / Sales TTM 8 804) × 365
  },

  tendances: {
    per:       'hausse',     // 30 → 32 → 26 → 34 → 51 → 37 (TTM)
    fcfYield:  'hausse',     // 2,6 → 2,0 → 3,2 → 1,8 → 2,9 → 3,1 (TTM)
    roic:      'hausse',     // 17,8 → 18,0 → 23,9 → 15,0 → 18,0 → 20,1 (TTM)
    margeEbit: 'hausse',     // 17,4 → 17,2 → 18,7 → 14,4 → 17,1 → 19,0 (TTM)
  },

  updates: [
    {
      date: '2026-05-20',
      note: "Création de la fiche, données FY2025 (10-K publié en nov. 2025) et TTM au 31/03/2026 (10-Q Q2-26 publié en mai 2026). Réaccélération du cycle confirmée : sales Q2-26 +11,9 % YoY, operating earnings +30 %. Guidance FY26 réaffirmée à +5 à +9 % organique. Adjusted EPS guidé à 12,50-13,10 $.",
    },
  ],

  chartData: {

    // ── CA sur 5 ans (M$) ─────────────────────────────────────────────────────
    // Pic FY23 - creux FY24 - réaccélération FY25/TTM. Cycle de 4 ans visible.
    revenue: [
      { year: 2021, value: 6997.4 },
      { year: 2022, value: 7760.4 },
      { year: 2023, value: 9058.0 },
      { year: 2024, value: 8263.7 },
      { year: 2025, value: 8342.0 },
    ],

    // ── Répartition géographique du CA FY2025 ─────────────────────────────────
    // Source : 10-K FY2025, Note 2 (sales attribuées au pays de destination)
    // Libellés alignés avec REGION_TO_CODES dans GeoRevenueMap.tsx
    geoRevenue: [
      { region: 'Amérique du Nord',   pct: 63.0 },     // North America 5 270 M$
      { region: 'EMEA',               pct: 17.8 },     // EMEA 1 488 M$
      { region: 'Asie-Pacifique',     pct: 12.3 },     // Asia Pacific 1 024 M$
      { region: 'Amérique Latine',    pct:  6.7 },     // LATAM 560 M$
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    // gross = (Sales - Cost of sales) / Sales (convention 10-K)
    // operating = EBIT GAAP / Sales (non Adjusted, comparabilité inter-fiches)
    // net = Net income (avant minoritaires) / Sales
    // Note : marge nette FY21 (19,2 %) gonflée par +397 M$ Change in fair value
    //        of investments (gain non récurrent sur PTC). À retraiter dans
    //        toute lecture cycle.
    marges: [
      { year: 2021, gross: 41.4, operating: 17.4, net: 19.2 },
      { year: 2022, gross: 40.0, operating: 17.2, net: 11.8 },
      { year: 2023, gross: 48.8, operating: 18.7, net: 14.1 },
      { year: 2024, gross: 46.6, operating: 14.4, net: 11.5 },
      { year: 2025, gross: 48.1, operating: 17.1, net:  9.0 },
    ],

    // ── ROIC simple sur 5 ans (%) ─────────────────────────────────────────────
    // Méthodologie La Thèse : NOPAT / IC Cash Adjusted (CP + max(dette nette, 0) + goodwill)
    roic: [
      { year: 2021, value: 17.84 },
      { year: 2022, value: 17.97 },
      { year: 2023, value: 23.87 },     // pic FY23 - effet levier marge + base IC stable
      { year: 2024, value: 15.01 },     // creux FY24 - NOPAT comprimé
      { year: 2025, value: 17.97 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // Spread structurellement positif (+5 à +14 pts) - signature compounder.
    // Resserrement FY24 (+5,2 pts) sur le creux du cycle, redressement FY25/TTM.
    roicVsWacc: [
      { year: 2021, value: 17.84, wacc:  7.07 },
      { year: 2022, value: 17.97, wacc: 11.15 },
      { year: 2023, value: 23.87, wacc:  9.73 },
      { year: 2024, value: 15.01, wacc:  9.78 },
      { year: 2025, value: 17.97, wacc:  9.65 },
    ],

    // ── Free Cash Flow sur 5 ans (M$) ─────────────────────────────────────────
    // FCF = OCF - Capex. Erratique (creux FY22 et FY24, rebonds FY21/23/25)
    // Capex industriel stable 1,5-2,5 % du CA, OCF moteur de volatilité (BFR).
    fcf: [
      { year: 2021, value: 1140.7 },
      { year: 2022, value:  682.0 },
      { year: 2023, value: 1212.9 },
      { year: 2024, value:  640.0 },
      { year: 2025, value: 1358.0 },
    ],

    // ── CA par segment (M$) ───────────────────────────────────────────────────
    // Source : 10-K FY2025, Note 19 "Operating Segments"
    // Trois segments depuis 2021 (réorganisation post-Architecture & Software /
    // Control Products & Solutions). Comparaisons cohérentes depuis FY21.
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'Intelligent Devices',  value: 3311.9 },
          { name: 'Software & Control',   value: 1947.0 },
          { name: 'Lifecycle Services',   value: 1738.5 },
        ]},
        { year: 2022, segments: [
          { name: 'Intelligent Devices',  value: 3544.6 },
          { name: 'Software & Control',   value: 2312.9 },
          { name: 'Lifecycle Services',   value: 1902.9 },
        ]},
        { year: 2023, segments: [
          { name: 'Intelligent Devices',  value: 4098.2 },
          { name: 'Software & Control',   value: 2886.0 },
          { name: 'Lifecycle Services',   value: 2073.8 },
        ]},
        { year: 2024, segments: [
          { name: 'Intelligent Devices',  value: 3804.1 },
          { name: 'Software & Control',   value: 2187.4 },
          { name: 'Lifecycle Services',   value: 2272.7 },
        ]},
        { year: 2025, segments: [
          { name: 'Intelligent Devices',  value: 3756.0 },
          { name: 'Software & Control',   value: 2383.0 },
          { name: 'Lifecycle Services',   value: 2203.0 },
        ]},
      ],
    },

    // ── Graphiques de valorisation comparée ───────────────────────────────────
    // Source : onglet "Comparaison sectorielle" - Excel La Thèse, mai 2026
    // Cours référence multiples : 422,29 $ au 20/05/2026 (comparabilité pairs)
    // Panel sectoriel retenu (5 pairs) : Schneider Electric, ABB, Siemens
    // (Digital Industries via Siemens AG), Emerson Electric, Yokogawa Electric.
    // Médiane secteur calculée sur ces 5 pairs.
    // Le ROIC affiché est convention Finviz/Yahoo (10,9 % pour ROK), distinct
    // du ROIC La Thèse (20,1 %) pour cohérence inter-pairs.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Rockwell vs panel automation industrielle (médiane 5 pairs)',
        data: [
          { label: 'PER',             valeur: 45.3, secteur: 33.9 },
          { label: 'EV/EBITDA',       valeur: 25.7, secteur: 21.2 },
          { label: 'P/FCF',           valeur: 35.7, secteur: 29.4 },
          { label: 'Marge EBIT %',    valeur: 20.7, secteur: 17.6 },
          { label: 'ROIC %',          valeur: 10.9, secteur:  9.0 },
          { label: 'FCF Yield %',     valeur:  2.8, secteur:  3.7 },
          { label: 'Dette/EBITDA',    valeur:  1.6, secteur:  1.4 },
          { label: 'TCAC CA 3 ans %', valeur: 11.9, secteur:  8.3 },
        ],
      },
      {
        id: 'vs_schneider', type: 'radar',
        title: 'Valorisation comparée - Rockwell vs Schneider Electric',
        concurrent1: 'Schneider Electric',
        data: [
          { label: 'PER',             valeur: 45.3, concurrent1: 33.2 },
          { label: 'EV/EBITDA',       valeur: 25.7, concurrent1: 20.1 },
          { label: 'P/FCF',           valeur: 35.7, concurrent1: 32.4 },
          { label: 'Marge EBIT %',    valeur: 20.7, concurrent1: 17.6 },
          { label: 'ROIC %',          valeur: 10.9, concurrent1:  8.6 },
          { label: 'FCF Yield %',     valeur:  2.8, concurrent1:  3.1 },
          { label: 'Dette/EBITDA',    valeur:  1.6, concurrent1:  1.7 },
          { label: 'TCAC CA 3 ans %', valeur: 11.9, concurrent1:  4.2 },
        ],
      },
      {
        id: 'vs_abb', type: 'radar',
        title: 'Valorisation comparée - Rockwell vs ABB',
        concurrent1: 'ABB',
        data: [
          { label: 'PER',             valeur: 45.3, concurrent1: 38.7 },
          { label: 'EV/EBITDA',       valeur: 25.7, concurrent1: 21.2 },
          { label: 'P/FCF',           valeur: 35.7, concurrent1: 33.0 },
          { label: 'Marge EBIT %',    valeur: 20.7, concurrent1: 20.6 },
          { label: 'ROIC %',          valeur: 10.9, concurrent1: 14.2 },
          { label: 'FCF Yield %',     valeur:  2.8, concurrent1:  3.0 },
          { label: 'Dette/EBITDA',    valeur:  1.6, concurrent1:  0.6 },
          { label: 'TCAC CA 3 ans %', valeur: 11.9, concurrent1: 18.3 },
        ],
      },
      {
        id: 'vs_emerson', type: 'radar',
        title: 'Valorisation comparée - Rockwell vs Emerson Electric',
        concurrent1: 'Emerson Electric',
        data: [
          { label: 'PER',             valeur: 45.3, concurrent1: 30.8 },
          { label: 'EV/EBITDA',       valeur: 25.7, concurrent1: 14.6 },
          { label: 'P/FCF',           valeur: 35.7, concurrent1: 27.9 },
          { label: 'Marge EBIT %',    valeur: 20.7, concurrent1: 24.2 },
          { label: 'ROIC %',          valeur: 10.9, concurrent1:  5.3 },
          { label: 'FCF Yield %',     valeur:  2.8, concurrent1:  3.6 },
          { label: 'Dette/EBITDA',    valeur:  1.6, concurrent1:  2.1 },
          { label: 'TCAC CA 3 ans %', valeur: 11.9, concurrent1:  2.9 },
        ],
      },
      {
        id: 'vs_yokogawa', type: 'radar',
        title: 'Valorisation comparée - Rockwell vs Yokogawa Electric',
        concurrent1: 'Yokogawa Electric',
        data: [
          { label: 'PER',             valeur: 45.3, concurrent1: 20.6 },
          { label: 'EV/EBITDA',       valeur: 25.7, concurrent1:  9.5 },
          { label: 'P/FCF',           valeur: 35.7, concurrent1: 16.6 },
          { label: 'Marge EBIT %',    valeur: 20.7, concurrent1: 13.0 },
          { label: 'ROIC %',          valeur: 10.9, concurrent1: 12.4 },
          { label: 'FCF Yield %',     valeur:  2.8, concurrent1:  6.0 },
          { label: 'Dette/EBITDA',    valeur:  1.6, concurrent1: -1.4 },
          { label: 'TCAC CA 3 ans %', valeur: 11.9, concurrent1: 11.1 },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────────
    metricHistory: [

      // ── EV/EBITDA historique ──────────────────────────────────────────────
      // EV calculé au cours de clôture FY. Moyenne 5 ans 26,5x.
      // Pic FY21 (32,9x) sur effet réévaluation Plex - normalisation depuis.
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 32.92 },
          { year: 2022, value: 22.85 },
          { year: 2023, value: 20.68 },
          { year: 2024, value: 26.51 },
          { year: 2025, value: 29.30 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 26.45 },
              { year: 2022, value: 26.45 },
              { year: 2023, value: 26.45 },
              { year: 2024, value: 26.45 },
              { year: 2025, value: 26.45 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex ─────────────────────────────────────────────────
      // OCF volatile (BFR, restructurations) - capex stable 1,5-2,5 % du CA.
      // FCF erratique sur le cycle, moyenne 5 ans ~1,0 Md$.
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 1261.0 },
          { year: 2022, value:  823.1 },
          { year: 2023, value: 1373.9 },
          { year: 2024, value:  864.7 },
          { year: 2025, value: 1544.0 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 1140.7 },
              { year: 2022, value:  682.0 },
              { year: 2023, value: 1212.9 },
              { year: 2024, value:  640.0 },
              { year: 2025, value: 1358.0 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 120.3 },
              { year: 2022, value: 141.1 },
              { year: 2023, value: 161.0 },
              { year: 2024, value: 224.7 },
              { year: 2025, value: 186.0 },
            ],
          },
        ],
      },

      // ── BPA dilué GAAP et Adjusted ────────────────────────────────────────
      // Écart structurel GAAP vs Adjusted (~2 $/action) lié à l'amortissement
      // PPA récurrent post-vague d'acquisitions 2020-2022 (Plex, Fiix...).
      {
        label: 'EPS',
        name:  'BPA dilué GAAP',
        unit:  '$',
        data: [
          { year: 2021, value: 11.58 },
          { year: 2022, value:  7.97 },
          { year: 2023, value: 11.95 },
          { year: 2024, value:  8.28 },
          { year: 2025, value:  7.67 },
        ],
        competitors: [
          {
            name:   'Adjusted EPS (non-GAAP)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value:  9.43 },
              { year: 2022, value:  9.49 },
              { year: 2023, value: 12.25 },
              { year: 2024, value:  9.85 },
              { year: 2025, value: 10.53 },
            ],
          },
        ],
      },

      // ── Dividende par action ──────────────────────────────────────────────
      // Croissance régulière (+5 à +6 % par an), payout en hausse 37 → 79 %
      // sur creux FY25 - politique dividende non recalibrée sur le cycle.
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '$',
        data: [
          { year: 2021, value: 4.28 },
          { year: 2022, value: 4.48 },
          { year: 2023, value: 4.72 },
          { year: 2024, value: 5.00 },
          { year: 2025, value: 5.24 },
        ],
      },

      // ── ROCE vs WACC vs ROIC ─────────────────────────────────────────────
      // ROCE = NOPAT / (CP + dette totale - trésorerie)
      // Plus stable que ROIC car intègre toute la dette. Profil industriel
      // à dette modeste, spread ROCE-WACC durablement positif (+10 pts moy).
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 19.77 },
          { year: 2022, value: 22.69 },
          { year: 2023, value: 25.63 },
          { year: 2024, value: 19.11 },
          { year: 2025, value: 22.50 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value:  7.07 },
              { year: 2022, value: 11.15 },
              { year: 2023, value:  9.73 },
              { year: 2024, value:  9.78 },
              { year: 2025, value:  9.65 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 17.84 },
              { year: 2022, value: 17.97 },
              { year: 2023, value: 23.87 },
              { year: 2024, value: 15.01 },
              { year: 2025, value: 17.97 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (1 an glissant) ──────────────────────────────────────
      // Volatilité 2 % à 58 % - typique des business à IC stable (peu de
      // capex de croissance) où le delta NOPAT domine. Lecture annuelle peu
      // robuste, le ROIIC multi-périodes est plus informatif.
      // ROIIC FY24 négatif - artefact comptable lié au creux NOPAT, pas un
      // signal de qualité du capital.
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value:   2.09 },
          { year: 2023, value:  57.97 },
          { year: 2024, value: -43.98 },
          { year: 2025, value:  11.23 },
        ],
      },

      // ── ROIIC glissant multi-périodes ─────────────────────────────────────
      // Axe X = nombre d'années de recul (1 = N−1/N, 4 = N−4/N)
      // ROIIC 4 ans (FY21 vs FY25) à 2,1 % reflète l'absence de gain net de
      // capital efficiency sur cycle complet (effet acquisitions 2020-2022).
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 11.23 },
          { year: 2, value: -38.12 },
          { year: 3, value:   2.31 },
          { year: 4, value:   2.14 },
        ],
      },

      // ── PER historique ────────────────────────────────────────────────────
      // PER ajusté taux : PER × (Re_année / Re_moyenne) - normalise selon
      // l'environnement de taux. Moyenne 5 ans 34,6x (proche médiane secteur).
      // FY25 (50,6x) gonflé par creux EPS GAAP (7,67 $).
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 30.08 },
          { year: 2022, value: 32.24 },
          { year: 2023, value: 25.88 },
          { year: 2024, value: 34.35 },
          { year: 2025, value: 50.64 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 34.64 },
              { year: 2022, value: 34.64 },
              { year: 2023, value: 34.64 },
              { year: 2024, value: 34.64 },
              { year: 2025, value: 34.64 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 34.85 },
              { year: 2022, value: 26.03 },
              { year: 2023, value: 24.51 },
              { year: 2024, value: 32.57 },
              { year: 2025, value: 50.96 },
            ],
          },
        ],
      },

      // ── FCF Yield historique ──────────────────────────────────────────────
      // Dénominateur EV. FCFy structurellement bas (2-3 %) compatible avec
      // un compounder à PER élevé. Spread négatif vs UST 10Y sur FY24/FY25
      // (configuration rare sur 10 ans).
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 2.58 },
          { year: 2022, value: 2.04 },
          { year: 2023, value: 3.21 },
          { year: 2024, value: 1.78 },
          { year: 2025, value: 2.90 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.50 },
              { year: 2022, value: 2.50 },
              { year: 2023, value: 2.50 },
              { year: 2024, value: 2.50 },
              { year: 2025, value: 2.50 },
            ],
          },
          {
            name:  'UST 10Y',
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

      // ── CCC - DSO / DIO / DPO / Cash Conversion Cycle ────────────────────
      // CCC en hausse 66 → 111 jours sur 5 ans : BFR alourdi (~250-300 M$ de
      // cash mobilisé en plus depuis FY21). DIO en hausse (71 → 105 jours)
      // dominant - effet supply chain 2022-2023 + stocks sécurité composants.
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 74.3 },
          { year: 2022, value: 81.7 },
          { year: 2023, value: 87.3 },
          { year: 2024, value: 79.6 },
          { year: 2025, value: 84.5 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value:  71.1 },
              { year: 2022, value:  82.6 },
              { year: 2023, value: 110.6 },
              { year: 2024, value: 106.9 },
              { year: 2025, value: 105.2 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 79.2 },
              { year: 2022, value: 80.5 },
              { year: 2023, value: 90.6 },
              { year: 2024, value: 71.1 },
              { year: 2025, value: 78.5 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value:  66.1 },
              { year: 2022, value:  83.7 },
              { year: 2023, value: 107.4 },
              { year: 2024, value: 115.4 },
              { year: 2025, value: 111.2 },
            ],
          },
        ],
      },

      // ── Current Ratio ─────────────────────────────────────────────────────
      // Liquidité modeste (1,0-1,5x) typique industriel US à BFR négatif
      // court terme. Pic FY23 (1,46x) sur cash d'une cession.
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.02 },
          { year: 2022, value: 1.01 },
          { year: 2023, value: 1.46 },
          { year: 2024, value: 1.08 },
          { year: 2025, value: 1.14 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.14 },
              { year: 2022, value: 1.14 },
              { year: 2023, value: 1.14 },
              { year: 2024, value: 1.14 },
              { year: 2025, value: 1.14 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA ──────────────────────────────────────────────
      // Stable 1,0-2,5x sur 5 ans. Pas de signe de dérive du levier malgré
      // les acquisitions 2020-2022 (3,4 Md$ cumulés).
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 2.36 },
          { year: 2022, value: 2.13 },
          { year: 2023, value: 0.98 },
          { year: 2024, value: 2.10 },
          { year: 2025, value: 1.58 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.83 },
              { year: 2022, value: 1.83 },
              { year: 2023, value: 1.83 },
              { year: 2024, value: 1.83 },
              { year: 2025, value: 1.83 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      // CA / Total actifs. Stable 0,7-0,8x, typique industriel asset-medium.
      // Plex et bases logicielles diluent l'asset turnover post-2020.
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.65 },
          { year: 2022, value: 0.72 },
          { year: 2023, value: 0.80 },
          { year: 2024, value: 0.74 },
          { year: 2025, value: 0.74 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.73 },
              { year: 2022, value: 0.73 },
              { year: 2023, value: 0.73 },
              { year: 2024, value: 0.73 },
              { year: 2025, value: 0.73 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions ──────────────────────────────
      // Pic FY21 (+4 %) lié à l'opération Plex (émission actions).
      // Réduction nette de 1 % par an depuis (rachats > attributions LTI).
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: -1.11 },
          { year: 2023, value: -0.94 },
          { year: 2024, value: -0.95 },
          { year: 2025, value: -1.22 },
        ],
      },

      // ── Payout Ratio ──────────────────────────────────────────────────────
      // Politique dividende non recalibrée sur le cycle : 37 % (FY21) → 79 %
      // (FY25) sur creux EPS. Retour à payout 50-60 % suppose un EPS GAAP > 10 $.
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 37.0 },
          { year: 2022, value: 56.5 },
          { year: 2023, value: 42.4 },
          { year: 2024, value: 60.3 },
          { year: 2025, value: 78.9 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 55.0 },
              { year: 2022, value: 55.0 },
              { year: 2023, value: 55.0 },
              { year: 2024, value: 55.0 },
              { year: 2025, value: 55.0 },
            ],
          },
        ],
      },

      // ── Allocation du capital - retour actionnaires vs Capex ──────────────
      // data = Dividendes versés
      // concurrent1 = Rachats d'actions
      // concurrent2 (dashed) = Capex industriel
      // Sur 5 ans : 2,7 Md$ dividendes + 2,1 Md$ rachats = 4,8 Md$ redistribués
      // ~96 % du FCF cumulé sur la période (5,0 Md$). Discipline maintenue.
      {
        label: 'Capex_Action',
        name:  'Dividendes',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 497.1 },
          { year: 2022, value: 519.4 },
          { year: 2023, value: 542.4 },
          { year: 2024, value: 571.0 },
          { year: 2025, value: 591.0 },
        ],
        competitors: [
          {
            name:  'Rachats d\'actions',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 299.7 },
              { year: 2022, value: 301.3 },
              { year: 2023, value: 312.0 },
              { year: 2024, value: 594.9 },
              { year: 2025, value: 425.0 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 120.3 },
              { year: 2022, value: 141.1 },
              { year: 2023, value: 161.0 },
              { year: 2024, value: 224.7 },
              { year: 2025, value: 186.0 },
            ],
          },
        ],
      },

    ],
  },
}