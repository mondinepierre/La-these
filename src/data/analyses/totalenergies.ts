import type { AnalyseCard } from '@/types/analyses'

// -----------------------------------------------------------------------------
// TotalEnergies SE - Valeur suivie - Revision FY2025 (snapshot fige) + valo au spot
// Derniere revision : 22/06/2026
//
// DEVISE (piege duelle) : la societe publie ses comptes en USD. Tous les financiers
//   de cette fiche sont en M$ (les libelles "M€" de l'Excel sont des coquilles de
//   template). La cotation suivie dans l'Excel est le titre en dollars (ADR / quote
//   USD), confirme par Pierre. Le cours, la valorisation, le prixCible et les niveaux
//   sont affiches en EUR (cotation principale Euronext Paris, TTE.PA, PEA-eligible),
//   convertis au taux EUR/USD = 1,146 (22/06/2026), explicite partout.
//
// ROIC METHODOLOGIE (La These - Cash Adjusted) :
//   NOPAT = EBIT x (1 - T_effectif) ; IC = CP + max(dette nette, 0), goodwill inclus
//   T_effectif 2025 : 40,5 % ; Source : DEU 2025, compte de resultat consolide
//   ROIC 2025 = 12 737 / 152 354 = 8,36 %
//
// WACC (onglet WACC, mis a jour 06/2026) :
//   Rf   = Bund 10 ans 31/12/2025 = 2,86 % (le libelle "US 10Y" de l'Excel est une coquille)
//   beta = 0,5198 : regression mensuelle 60 mois vs CAC 40 GR (le libelle "Finviz" est une coquille)
//   ERP  = Damodaran mature 4,23 % + CRP France 0,55 % = 4,78 % (CRP deja inclus, ne pas rajouter)
//   Re   = 2,86 % + 0,5198 x 4,78 % = 5,35 % ; Rd ap. IS = 5,00 % x (1 - 40,5 %) = 2,97 %
//   E/V 70,4 %, D/V 29,6 % ; WACC 2025 = 4,64 %
//   NB : le beta tombe de 0,947 (v1) a 0,52 (decorrelation TTE/CAC pendant le choc petrolier
//        2026). Le WACC s'ecrase a 4,64 %, ce qui rend le DCF inexploitable (VT > 85 % de l'EV,
//        piege Coca/Nestle a faible beta) : valo pilotee au PER + triangulation de rendement.
//
// FCF = OCF - investissements corporels et incorporels (hors M&A)
//   2025 : 27 343 - 16 953 = 10 390 M$
//
// METRIQUES DASHBOARD : figees au cours de cloture FY2025 (65,42 $ / 31/12/2025), base USD.
//   PER = capi / RN = 10,85x (USD/USD homogene). EV = capi + dette nette 34 831 = 179 694 M$.
//   Snapshot structurel fige (cours +1 % depuis la derniere revision de mars) ; seuls cours,
//   52 sem., radars, DCF/PER, prixCible et niveaux sont re-ancres au spot du 22/06/2026.
// -----------------------------------------------------------------------------

export const totalenergies: AnalyseCard = {
  slug:           'totalenergies',
  type:           'valeur',
  title:          'TotalEnergies',
  ticker:         'TTE.PA',
  secteur:        'Énergie',
  geo:            'France',
  conviction:     'forte',
  positionnement: 'maintien',
  lastUpdated:    '2026-06-22',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '15 ans',
  excerpt:        "La major intégrée la plus décotée face à ses pairs américains, entre une rente pétrolière cyclique généreuse en cash et un pivot des molécules vers les électrons via Integrated Power, dont la rentabilité reste à démontrer.",
  glossaire: [
    'gnl',
    'integrated-power',
    'brent',
    'stranded-assets',
    'moat',
    'marge-brute-d-autofinancement',
  ],
  readingTime:    42,
  logo:           '/analyse/totalenergies.png',
  onePager: {
    thesis:    "Major intégrée décotée vs les majors US : rente cyclique, dividende sans coupe depuis 15 ans, pivot des molécules vers les électrons.",
    cours:     71.0,
    coursDate: '2026-06-22',
    devise:    'EUR',
    range52w:  { low: 49.2, high: 81.3 },
  },
  prixCible:      { bas: 57, haut: 67, devise: 'EUR' },
  // Prix cible a l'horizon de la these (5 ans, non actualise), exprime en EUR.
  // Base : BPA ajuste FY2025 7,05 $, croissance centrale +4 %/an -> BPA 2031 8,58 $
  //   x multiple central 8,32 (PER ajuste multiplicatif moyen 5 ans) = 71,4 $ cible centrale.
  // Fourchette = cible centrale +/- MoE (beta 0,52 x 15 % = 7,8 %) : 65,8 - 77,0 $.
  // Converti en EUR au taux EUR/USD 1,146 : 57,4 - 67,2 € -> arrondi 57 - 67 €.
  // Cours spot 80,70 $ (environ 71 €) au-dessus de la cible centrale (71,4 $) : MoS negative.
  marginOfSafety: 'négative',

  // ── Métriques snapshot - cours de clôture FY2025 (65,42 $ / 31/12/2025), base USD ──
  metrics: {
    per:               10.85,  // Capi 144 863 M$ / NI 13 357 M$ (USD/USD homogene)
    evEbitda:           5.10,  // EV 179 694 M$ / EBITDA 35 254 M$
    fcfYield:           5.78,  // FCF 10 390 / EV 179 694 - dénominateur EV
    roic:               8.36,  // NOPAT 12 737 / IC 152 354 - Cash Adjusted
    wacc:               4.64,  // CAPM beta 0,52 - detail en en-tete (v1 : 6,08 % a beta 0,947)
    detteEbitda:        0.99,  // DN 34 831 / EBITDA 35 254
    croissanceCA3ans: -11.53,  // CAGR CA FY2022→FY2025
    croissanceBPA3ans: -9.70,  // CAGR BPA dilué FY2022→FY2025
    margeEbit:         11.74,  // EBIT 21 407 / Produits des ventes 182 344
    margeBrute:        35.98,  // Marge brute / Produits des ventes
    payoutRatio:       64.4,   // Dividendes 8 603 / NI 13 357
    currentRatio:       0.97,  // Actif courant 89 469 / Passif courant 92 563
    dso:               37.1,   // (Créances 18 559 / PdV 182 344) × 365
  },

  tendances: {
    per:       'hausse',
    fcfYield:  'baisse',
    roic:      'baisse',
    margeEbit: 'baisse',
  },

  updates: [
    {
      date: '2026-06-22',
      note: "Révision : snapshot structurel FY2025 figé, valorisation ré-ancrée au spot (80,70 $ ADR, environ 71 € sur Euronext Paris, EUR/USD 1,146). WACC recalculé à 4,64 % (bêta 0,52 vs 0,947, régression 60 mois vs CAC 40 GR), qui neutralise le DCF. Radar porté à 8 branches, bloc onePager ajouté, multiple central 8,32x (PER ajusté multiplicatif, 2023 corrigé d'un glitch de cours Excel). Brent autour de 80 $ après le pic de la crise du détroit d'Ormuz. Conviction : forte. Positionnement : maintien (vs allègement en mars).",
    },
    {
      date: '2026-03-21',
      note: "Mise à jour complète FY2025 (DEU 2025). WACC CAPM, ROIC 8,36 %. Toutes les sections du template complétées. Positionnement : allègement.",
    },
    {
      date: '2026-07-30',
      note: "Résultats S1-2026 attendus. Source : calendrier financier TotalEnergies.",
    },
    {
      date: '2027-02-25',
      note: "Résultats FY2026 attendus. Source : calendrier financier TotalEnergies.",
    },
  ],

  chartData: {

    revenue: [
      { year: 2021, value: 205.9 },
      { year: 2022, value: 281.0 },
      { year: 2023, value: 237.1 },
      { year: 2024, value: 214.5 },
      { year: 2025, value: 201.2 },
    ],

    // Repartition du CA externe par zone de vente (FY2025, onglet Resultat par secteur).
    // NB : c'est la geo des VENTES (Europe-lourde via raffinage/distribution), distincte
    // de la geo de PRODUCTION (Moyen-Orient / Afrique), traitee en prose (section Geo + Risques).
    geoRevenue: [
      { region: 'Europe',           pct: 45.0 },
      { region: 'France',           pct: 22.8 },
      { region: 'Reste du monde',   pct: 15.1 },
      { region: 'Afrique',          pct:  9.9 },
      { region: 'Amérique du Nord', pct:  7.2 },
    ],

    // RONET ajusté par branche (M$) - non IFRS.
    // 2021 exclu : nomenclature "Integrated Power" lancée avec le rebrand juin 2021.
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'RONET total' },
      data: [
        { year: 2022, segments: [
          { name: 'Exploration - Production', value: 17479 },
          { name: 'LNG',                      value: 11169 },
          { name: 'Puissance intégrée',        value:   975 },
          { name: 'Raffinage - Chimie',        value:  7302 },
          { name: 'Marketing & Services',      value:  1550 },
        ]},
        { year: 2023, segments: [
          { name: 'Exploration - Production', value: 10942 },
          { name: 'LNG',                      value:  6200 },
          { name: 'Puissance intégrée',        value:  1853 },
          { name: 'Raffinage - Chimie',        value:  4654 },
          { name: 'Marketing & Services',      value:  1458 },
        ]},
        { year: 2024, segments: [
          { name: 'Exploration - Production', value: 10004 },
          { name: 'LNG',                      value:  4869 },
          { name: 'Puissance intégrée',        value:  2173 },
          { name: 'Raffinage - Chimie',        value:  2160 },
          { name: 'Marketing & Services',      value:  1360 },
        ]},
        { year: 2025, segments: [
          { name: 'Exploration - Production', value:  8399 },
          { name: 'LNG',                      value:  4109 },
          { name: 'Puissance intégrée',        value:  2215 },
          { name: 'Raffinage - Chimie',        value:  2378 },
          { name: 'Marketing & Services',      value:  1373 },
        ]},
      ],
    },

    // operating = EBIT / Produits des ventes (hors droits d'accises).
    marges: [
      { year: 2021, gross: 35.75, operating: 12.90, net:  8.86 },
      { year: 2022, gross: 35.65, operating: 17.49, net:  7.99 },
      { year: 2023, gross: 34.67, operating: 15.27, net:  9.82 },
      { year: 2024, gross: 34.74, operating: 13.24, net:  8.20 },
      { year: 2025, gross: 35.98, operating: 11.74, net:  7.33 },
    ],

    roic: [
      { year: 2021, value:  9.49 },
      { year: 2022, value: 15.73 },
      { year: 2023, value: 14.52 },
      { year: 2024, value: 10.47 },
      { year: 2025, value:  8.36 },
    ],

    // WACC recalcule 06/2026 (beta 0,52 vs CAC 40 GR) : serie ecrasee vs v1.
    // 2021 bas (2,16 %) : Rf Bund negatif + beta faible. Spread ROIC-WACC large et croissant.
    roicVsWacc: [
      { year: 2021, value:  9.49, wacc: 2.16 },
      { year: 2022, value: 15.73, wacc: 4.81 },
      { year: 2023, value: 14.52, wacc: 4.42 },
      { year: 2024, value: 10.47, wacc: 4.42 },
      { year: 2025, value:  8.36, wacc: 4.64 },
    ],

    // FCF = OCF - Capex industriel (hors acquisitions M&A).
    fcf: [
      { year: 2021, value: 18.067 },
      { year: 2022, value: 31.677 },
      { year: 2023, value: 22.957 },
      { year: 2024, value: 15.945 },
      { year: 2025, value: 10.390 },
    ],

    // Radars 8 branches, source onglet "Comparaison sectorielle" (API Yahoo, base
    // marche TTM homogene pour la valeur ET chaque pair). Pairs directs = Eni / Shell /
    // BP / Exxon ; Shell omis (PER N/M sur ce pull Yahoo). Median secteur = panel large.
    // NB : marge EBIT (20,4 %) et ROIC (7,3 %) Yahoo TTM different du snapshot FY (11,7 %
    // et 8,36 %) car bases differentes : signale en NoteAnalyse du MDX.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - TotalEnergies vs médiane du secteur énergie',
        data: [
          { label: 'PER',             valeur: 12.06, secteur: 22.46 },
          { label: 'EV/EBITDA',       valeur:  5.15, secteur: 10.12 },
          { label: 'P/FCF',           valeur: 15.20, secteur: 21.00 },
          { label: 'Marge EBIT %',    valeur: 20.40, secteur: 13.30 },
          { label: 'ROIC %',          valeur:  7.30, secteur:  5.40 },
          { label: 'FCF Yield %',     valeur:  6.60, secteur:  4.10 },
          { label: 'Dette/EBITDA',    valeur:  0.98, secteur:  2.17 },
          { label: 'TCAC CA 3 ans %', valeur:  3.40, secteur:  5.65 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'Valorisation comparée - TotalEnergies vs ExxonMobil',
        concurrent1: 'ExxonMobil',
        data: [
          { label: 'PER',             valeur: 12.06, concurrent1: 23.35 },
          { label: 'EV/EBITDA',       valeur:  5.15, concurrent1: 11.02 },
          { label: 'P/FCF',           valeur: 15.20, concurrent1: 24.40 },
          { label: 'Marge EBIT %',    valeur: 20.40, concurrent1:  6.40 },
          { label: 'ROIC %',          valeur:  7.30, concurrent1:  8.40 },
          { label: 'FCF Yield %',     valeur:  6.60, concurrent1:  4.10 },
          { label: 'Dette/EBITDA',    valeur:  0.98, concurrent1:  0.59 },
          { label: 'TCAC CA 3 ans %', valeur:  3.40, concurrent1:  2.60 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: 'Valorisation comparée - TotalEnergies vs BP',
        concurrent1: 'BP',
        data: [
          { label: 'PER',             valeur: 12.06, concurrent1: 31.26 },
          { label: 'EV/EBITDA',       valeur:  5.15, concurrent1:  4.00 },
          { label: 'P/FCF',           valeur: 15.20, concurrent1:  6.90 },
          { label: 'Marge EBIT %',    valeur: 20.40, concurrent1: 15.50 },
          { label: 'ROIC %',          valeur:  7.30, concurrent1:  8.00 },
          { label: 'FCF Yield %',     valeur:  6.60, concurrent1: 14.60 },
          { label: 'Dette/EBITDA',    valeur:  0.98, concurrent1:  1.05 },
          { label: 'TCAC CA 3 ans %', valeur:  3.40, concurrent1: 11.60 },
        ],
      },
    ],

    metricHistory: [

      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 4.56 },
          { year: 2022, value: 3.14 },
          { year: 2023, value: 3.95 },
          { year: 2024, value: 3.95 },
          { year: 2025, value: 5.10 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 4.14 }, { year: 2022, value: 4.14 },
              { year: 2023, value: 4.14 }, { year: 2024, value: 4.14 },
              { year: 2025, value: 4.14 },
            ],
          },
        ],
      },

      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'Md$',
        yMin:  0,
        data: [
          { year: 2021, value: 30.41 },
          { year: 2022, value: 47.37 },
          { year: 2023, value: 40.68 },
          { year: 2024, value: 30.85 },
          { year: 2025, value: 27.34 },
        ],
        competitors: [
          {
            name: 'Free Cash Flow', color: '#C9A84C',
            data: [
              { year: 2021, value: 18.07 }, { year: 2022, value: 31.68 },
              { year: 2023, value: 22.96 }, { year: 2024, value: 15.95 },
              { year: 2025, value: 10.39 },
            ],
          },
          {
            name: 'Capex industriel', color: '#A8A29E', dashed: true,
            data: [
              { year: 2021, value: 12.34 }, { year: 2022, value: 15.69 },
              { year: 2023, value: 17.72 }, { year: 2024, value: 14.91 },
              { year: 2025, value: 16.95 },
            ],
          },
        ],
      },

      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '$',
        data: [
          { year: 2021, value: 5.92 },
          { year: 2022, value: 7.85 },
          { year: 2023, value: 8.67 },
          { year: 2024, value: 6.69 },
          { year: 2025, value: 5.78 },
        ],
      },

      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '€',
        data: [
          { year: 2021, value: 2.64 },
          { year: 2022, value: 2.81 },
          { year: 2023, value: 3.01 },
          { year: 2024, value: 3.22 },
          { year: 2025, value: 3.40 },
        ],
      },

      // Label custom - utilisé dans le MDX via <MetricGraph_Brent />
      {
        label: 'Brent',
        name:  'Prix du Brent ($/baril)',
        unit:  '$',
        data: [
          { year: 2021, value:  77.94 },
          { year: 2022, value:  85.99 },
          { year: 2023, value:  77.08 },
          { year: 2024, value:  74.83 },
          { year: 2025, value:  60.91 },
          { year: 2026, value:  80.00 }, // spot 22/06/2026 - retombe du pic crise Ormuz (Brent jusqu'a ~95-107 au plus fort)
        ],
      },

      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 14.48 },
          { year: 2022, value: 28.82 },
          { year: 2023, value: 20.90 },
          { year: 2024, value: 15.81 },
          { year: 2025, value: 12.86 },
        ],
        competitors: [
          {
            name: 'WACC', color: '#C9A84C',
            data: [
              { year: 2021, value: 2.16 }, { year: 2022, value: 4.81 },
              { year: 2023, value: 4.42 }, { year: 2024, value: 4.42 },
              { year: 2025, value: 4.64 },
            ],
          },
          {
            name: 'ROIC (Cash Adjusted)', color: '#2D6A4F', dashed: true,
            data: [
              { year: 2021, value:  9.49 }, { year: 2022, value: 15.73 },
              { year: 2023, value: 14.52 }, { year: 2024, value: 10.47 },
              { year: 2025, value:  8.36 },
            ],
          },
        ],
      },

      // 2022 et 2024 : valeurs aberrantes (ΔIC quasi-nul → dénominateur minime).
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel',
        unit:  '%',
        data: [
          { year: 2022, value:  121.2 },
          { year: 2023, value:   10.9 },
          { year: 2024, value:   99.5 },
          { year: 2025, value:  -48.1 },
        ],
      },

      // year 2 aberrant (-140 %) : ΔIC 2023-2025 quasi-nul → dénominateur minime.
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value:  -48.1 },
          { year: 2, value: -140.0 },
          { year: 3, value:   94.3 },
          { year: 4, value:   55.0 },
        ],
      },

      // PER FY = Capi clôture 31/12 / NI consolidé.
      // PER ajusté : taux plancher 2 % appliqué pour 2021 (Rf = -0,18 %).
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value:  8.00 },
          { year: 2022, value:  7.59 },
          { year: 2023, value:  7.62 },
          { year: 2024, value:  7.87 },
          { year: 2025, value: 10.85 },
        ],
        competitors: [
          {
            name: 'Moyenne PER ajusté (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 8.32 }, { year: 2022, value: 8.32 },
              { year: 2023, value: 8.32 }, { year: 2024, value: 8.32 },
              { year: 2025, value: 8.32 },
            ],
          },
          {
            name: 'PER ajusté multiplicatif', color: '#52B788', dashed: true,
            data: [
              { year: 2021, value:  8.74 }, { year: 2022, value:  7.05 },
              { year: 2023, value:  7.55 }, { year: 2024, value:  8.13 },
              { year: 2025, value: 10.11 },
            ],
          },
        ],
      },

      // FCF Yield EV - taux sans risque = OAT 10 ans (plancher 2 % pour 2021).
      {
        label: 'FCFy',
        name:  'FCF Yield (EV)',
        unit:  '%',
        data: [
          { year: 2021, value: 10.37 },
          { year: 2022, value: 16.90 },
          { year: 2023, value: 12.29 },
          { year: 2024, value: 10.36 },
          { year: 2025, value:  5.78 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 11.14 }, { year: 2022, value: 11.14 },
              { year: 2023, value: 11.14 }, { year: 2024, value: 11.14 },
              { year: 2025, value: 11.14 },
            ],
          },
          {
            name: 'Bund 10 ans (Rf)', color: '#52B788',
            data: [
              { year: 2021, value: 2.00 }, { year: 2022, value: 2.57 },
              { year: 2023, value: 2.03 }, { year: 2024, value: 2.36 },
              { year: 2025, value: 2.86 },
            ],
          },
        ],
      },

      // Graphique combiné Current Ratio + Dette/EBITDA - usage custom TTE.
      {
        label: 'CR_D_EBITDA',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.169 },
          { year: 2022, value: 1.145 },
          { year: 2023, value: 1.121 },
          { year: 2024, value: 1.098 },
          { year: 2025, value: 0.967 },
        ],
        competitors: [
          {
            name: 'Dette nette / EBITDA', color: '#C9A84C',
            data: [
              { year: 2021, value: 1.132 }, { year: 2022, value: 0.464 },
              { year: 2023, value: 0.483 }, { year: 2024, value: 0.711 },
              { year: 2025, value: 0.988 },
            ],
          },
        ],
      },

      // CCC négatif structurel : fournisseurs (DPO 114j) financent le BFR.
      {
        label: 'CCC_resume',
        name:  'DSO (jours)',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value:  43.5 },
          { year: 2022, value:  33.8 },
          { year: 2023, value:  39.1 },
          { year: 2024, value:  36.0 },
          { year: 2025, value:  37.1 },
        ],
        competitors: [
          {
            name: 'DIO (jours)', color: '#2D6A4F',
            data: [
              { year: 2021, value: 61.4 }, { year: 2022, value: 49.4 },
              { year: 2023, value: 49.3 }, { year: 2024, value: 53.9 },
              { year: 2025, value: 52.1 },
            ],
          },
          {
            name: 'DPO (jours)', color: '#77bd92',
            data: [
              { year: 2021, value: 131.7 }, { year: 2022, value: 112.6 },
              { year: 2023, value:  93.7 }, { year: 2024, value: 102.8 },
              { year: 2025, value: 113.6 },
            ],
          },
          {
            name: 'Cash Conversion Cycle', color: '#C9A84C',
            data: [
              { year: 2021, value: -26.8 }, { year: 2022, value: -29.4 },
              { year: 2023, value:  -5.3 }, { year: 2024, value: -12.9 },
              { year: 2025, value: -24.4 },
            ],
          },
        ],
      },

      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.629 },
          { year: 2022, value: 0.867 },
          { year: 2023, value: 0.772 },
          { year: 2024, value: 0.685 },
          { year: 2025, value: 0.626 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 0.716 }, { year: 2022, value: 0.716 },
              { year: 2023, value: 0.716 }, { year: 2024, value: 0.716 },
              { year: 2025, value: 0.716 },
            ],
          },
        ],
      },

      // Valeurs négatives = concentration nette (rachats > attributions).
      {
        label: 'Dilution',
        name:  "Variation du nombre d'actions dilué (%)",
        unit:  '%',
        data: [
          { year: 2022, value: -2.84 },
          { year: 2023, value: -5.38 },
          { year: 2024, value: -4.90 },
          { year: 2025, value: -4.33 },
        ],
      },

      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 51.0 },
          { year: 2022, value: 50.0 },
          { year: 2023, value: 36.4 },
          { year: 2024, value: 50.1 },
          { year: 2025, value: 64.4 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 50.4 }, { year: 2022, value: 50.4 },
              { year: 2023, value: 50.4 }, { year: 2024, value: 50.4 },
              { year: 2025, value: 50.4 },
            ],
          },
        ],
      },

      // Retour total = dividendes versés + rachats bruts d'actions.
      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires',
        unit:  'Md$',
        yMin:  0,
        data: [
          { year: 2021, value: 10.18 },
          { year: 2022, value: 18.23 },
          { year: 2023, value: 16.99 },
          { year: 2024, value: 16.03 },
          { year: 2025, value: 16.32 },
        ],
        competitors: [
          {
            name: "Rachats d'actions", color: '#2D6A4F',
            data: [
              { year: 2021, value:  1.82 }, { year: 2022, value:  7.71 },
              { year: 2023, value:  9.17 }, { year: 2024, value:  8.00 },
              { year: 2025, value:  7.71 },
            ],
          },
          {
            name: 'Capex industriel', color: '#A8A29E', dashed: true,
            data: [
              { year: 2021, value: 12.34 }, { year: 2022, value: 15.69 },
              { year: 2023, value: 17.72 }, { year: 2024, value: 14.91 },
              { year: 2025, value: 16.95 },
            ],
          },
        ],
      },

    ],
  },
}