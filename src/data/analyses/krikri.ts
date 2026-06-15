// ─────────────────────────────────────────────────────────────────────────────
// Kri Kri Milk Industry S.A. - Analyse ponctuelle
// Ticker : KRI | Athens Stock Exchange | EUR | PEA (valeur grecque, eligible EEE)
// Derniere mise a jour : 2026-06-15
// Sources : Rapports annuels (DEU) 2021-2025, communiques resultats 12M 2025
//           (22/04/2026) et Q1-2026 (27/05/2026), Excel consolide La These.
// ─────────────────────────────────────────────────────────────────────────────
//
// NOTE METHODOLOGIQUE - DEVISE & EXERCICE
//   Kri Kri publie en EUR (IFRS adoptes par l'UE). Les libelles "$" du modele Excel
//   (EPS, cours) sont un artefact de template : toutes les valeurs sont en euros.
//   Exercice = annee civile (cloture 31/12 sur tous les onglets). Convention colonnes
//   Excel : C = FY (C=2025 ... G=2021) ; blocs TTM (I-N) et CY (O-T) non peuples.
//   Snapshot structurel ancre FY2025.
//
// NOTE METHODOLOGIQUE - NOPAT / ROIC (verifie : PAS de bug de signe Excel)
//   NOPAT = EBIT x (1 - IS effectif), IS = +18,56 % (positif). NOPAT FY2025 = 42,11 x
//   0,8144 = 34,30 M EUR < EBIT (coherent). IC = CP + max(dette nette, 0). Dette nette
//   = -7,78 M EUR (tresorerie nette) -> planchee a 0 -> IC = CP 148,0 M EUR. Goodwill
//   negligeable (ROIC = ROIC tangible). ROIC La These FY2025 = 34,30 / 148,0 = 23,2 %
//   vs WACC 8,84 % -> spread +14,3 pts.
//
// NOTE METHODOLOGIQUE - WACC (Grece : CRP integre, beta vs ATHEX)
//   WACC FY2025 = 8,84 %. Rf 2,86 % (Bund 10Y 31/12/2025), beta 0,82 (regression SLOPE
//   60 points mensuels vs indice grec ATHEX, PAS CAC 40 GR : convention confirmee Pierre,
//   le CAC 40 TR est reserve aux fiches FR), ERP 7,43 % = ERP mature ~4,2 % + CRP Grece
//   ~3,2 %. Re = 2,86 + 0,82 x 7,43 = 8,97 %. Rd ap. IS 3,91 % | D/V 2,5 % | WACC 8,84 %.
//   Le WACC eleve vient du pays (CRP Grece), pas de l'entreprise (bilan net cash, beta < 1).
//
// NOTE METHODOLOGIQUE - DIVIDENDE (convention DEU au titre de l'exercice)
//   DPS au titre 2025 = 0,45 EUR (vs 0,40 en 2024), propose a l'AG (communique 22/04/2026).
//   Payout DEU = 0,45 / 1,034 = 43,5 % (l'Excel calcule un payout "verse" 38,8 % : on
//   retient la convention DEU au titre). Rendement au cours spot 1,6 %.
//
// NOTE METHODOLOGIQUE - 2022, ANNEE DE CRISE DU LAIT
//   2022 = choc du prix du lait/intrants : marge brute effondree a 18,3 % (vs 33,5 % en
//   2023), EBIT 2,3 %, BPA 0,096 EUR (vs 0,978 en 2023). Les ratios 2022 (PER 64x sur
//   benefice de creux, payout 207 %, CAGR EPS depuis 2022 surevalue) sont des artefacts
//   de ce trou : annotes partout, exclus des moyennes de reference quand ils faussent.
//
// SNAPSHOT - metriques FY2025 (cloture 31/12/2025, cours Excel 19 EUR au 31/12/2025).
//   Cours courant 28,15 EUR (12/06/2026), +48 % depuis la cloture -> trailing ~27x sur
//   BPA FY2025, ~19x forward sur BPA 2026e (guidance) : mentionne en prose / onePager.
//   BPA TTM (jusqu'a Q1-2026) ~1,235 EUR (saut Q1 net +92 %).
//
// GUIDANCE FY2026 (communiques) : CA > 390 M EUR, EBIT ~60 M EUR (BPA implicite ~1,45 EUR).
//   Q1-2026 : CA +35,4 %, BPA net +92 %, mais management prudent (couts Moyen-Orient,
//   marges en repli graduel sur l'annee). Capex 2026 attendu 26-30 M EUR (FCF reste deprime).
//
// VALORISATION - PER dominant (BPA propre, pas de PPA/SBC), DCF sur FCF normalise en
//   controle (capex de maintenance ~ D&A 6,5 M EUR ; les 22,2 M EUR de construction en
//   cours = croissance, note C11 du DEU 2025). DCF normalise central ~23 EUR CONVERGE avec
//   la zone juste PER centrale 23,2 EUR (vs DCF Excel brut 3,69 EUR, artefact du capex de
//   croissance). Triangulation rendement en Lecture croisee (~10 %, growth-dominated).
//   Cible centrale 5 ans 37,4 EUR (BPA 2030 ~1,97 EUR x PER 19x). Zones justes r=10 %
//   toutes sous le cours -> survalorisee a 28 EUR. Conviction moyenne, positionnement
//   surveillance. Niveaux perso ~23 / ~21 / ~17 EUR.
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const krikri: AnalyseCard = {
  slug:           'krikri',
  type:           'ponctuelle',
  title:          'Kri Kri Milk Industry S.A.',
  ticker:         'KRI',
  secteur:        'Consommation',
  geo:            'Europe',
  conviction:     'moyenne',        // PROVISOIRE (a confirmer tour Moat) : bon business + vent export private label, mais concentration clients (2 clients > 10 % chacun), exposition prix du lait, part de marque domestique en recul
  positionnement: 'surveillance',   // hors position ; cours ~28 EUR au-dessus de la juste valeur centrale ~23 EUR
  lastUpdated:    '2026-06-15',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '5 ans',
  excerpt:        "Laitier grec de Serres : numero 2 du yaourt en Grece, mais surtout fabricant de yaourt grec en marque de distributeur pour toute l'Europe. Chiffre d'affaires multiplie par 2,4 en cinq ans (328,8 M EUR, +28 %), export 62 % des ventes (+44 % en 2025), ROIC 23 %, bilan en tresorerie nette. Une integration verticale (lait local) et un avantage de cout reels, mais une marge brute exposee au prix du lait et deux clients qui pesent chacun plus de 10 % des ventes. Le marche price deja l'acceleration 2026.",
  glossaire:      ['moat', 'private-label', 'roic', 'free-cash-flow', 'wacc', 'marge-de-securite'],
  logo:           '/analyse/krikri.png',
  // Cible centrale 5 ans 37,4 EUR (BPA 2030 ~1,97 EUR x PER central 19x) +/- MoE (beta 0,82 x 15 % = 12,3 %).
  prixCible:      { bas: 33, haut: 42, devise: 'EUR' },
  marginOfSafety: 'négative',       // cours 28,15 EUR vs juste valeur centrale ~23 EUR (prime ~21 %)
  readingTime:    38,    // PROVISOIRE - a recalculer depuis le compte de mots final
  onePager: {
    thesis:    "Le yaourt grec devenu private label de l'Europe : export 62 % du CA, +44 % en 2025, ROIC 23 %, tresorerie nette. Mais le marche price deja 2026.",
    cours:     28.15,
    coursDate: '2026-06-12',
    devise:    'EUR',
    range52w:  { low: 16.74, high: 28.90 },
  },

  // ── Metriques snapshot FY2025 (cloture 31/12/2025 ; cours Excel 19 EUR au 31/12/2025) ──
  // Reprises de l'Excel (onglet Indicateurs, col FY2025). Au cours courant 28,15 EUR :
  //   PER ~27x (trailing FY2025) / ~22,8x (trailing TTM Q1-2026) / ~19x forward (BPA 2026e).
  // per : 19 / BPA 1,034 = 18,375x (FY close). evEbitda : EV 618,95 / EBITDA 48,56 = 12,9x.
  // fcfYield : FCF 9,97 / EV 618,95 = 1,6 % (sur EV, convention La These).
  // roic : NOPAT 34,30 / IC 148,0 = 23,2 % (La These, goodwill inclus, dette plancher 0).
  // detteEbitda : dette nette -7,78 / EBITDA 48,56 = -0,16x (tresorerie nette). dso : 41,1 j.
  metrics: {
    per:               18.4,    // FY close 19 EUR / BPA 1,034. Au cours courant 28,15 : ~27x trailing FY2025, ~19x forward 2026e.
    evEbitda:          12.9,
    fcfYield:          1.6,     // FCF / EV (snapshot FY2025) - comprime par le capex de capacite
    roic:              23.2,    // NOPAT / IC (La These, goodwill inclus, dette plancher 0)
    wacc:              8.8,     // CRP Grece inclus dans l'ERP (voir note en-tete)
    detteEbitda:       -0.16,   // tresorerie nette
    croissanceCA3ans:  24.1,    // CAGR CA FY2022-FY2025 (Excel)
    croissanceBPA3ans: 26.7,    // PROVISOIRE : CAGR BPA 4 ans (FY2021-FY2025). L'Excel calcule 120,5 % sur 3 ans, distordu par le creux 2022 (cf. note). A valider.
    margeEbit:         12.8,    // EBIT / CA
    margeBrute:        27.0,
    payoutRatio:       43.5,    // convention DEU (DPS 0,45 au titre 2025 / BPA 1,034)
    currentRatio:      2.0,
    dso:               41.1,
  },

  // ── Tendances visuelles (badge fleche fiche index) ─────────────────────────
  tendances: {
    per:       'hausse',    // re-rating : 14,3x (FY2024 close) -> 18,4x (FY2025 close), ~27x au cours spot
    fcfYield:  'baisse',    // comprime par le capex d'expansion (1,6 % vs 11,2 % en 2023)
    roic:      'baisse',    // 26,9 % (2024) -> 23,2 % (2025) : compression de marge brute
    margeEbit: 'baisse',    // 14,5 % (2024) -> 12,8 % (2025), sous le pic 2023 (18,6 %)
  },

  // ── Historique des mises a jour ────────────────────────────────────────────
  updates: [
    {
      date: '2026-06-15',
      note: 'Creation de la fiche. Donnees FY2025 (cloture 31/12/2025), Q1-2026, guidance 2026.',
    },
    {
      date: '2026-09-25',
      note: 'Resultats semestriels S1-2026 attendus. Source : Yahoo Finance API.',
    },
    {
      date: '2027-04-22',
      note: 'Resultats annuels FY2026 attendus. Source : Yahoo Finance API.',
    },
  ],

  chartData: {

    // ── CA FY2021-FY2025 (M EUR) ─────────────────────────────────────────────
    // CAGR 4 ans : (328,8 / 134,6)^(1/4) - 1 = 25,0 %. Croissance portee par l'export
    // (yaourt grec en private label pour l'Europe) : +44,1 % en 2025, 62 % des ventes.
    revenue: [
      { year: 2021, value: 134.6 },
      { year: 2022, value: 171.9 },
      { year: 2023, value: 216.3 },
      { year: 2024, value: 256.4 },
      { year: 2025, value: 328.8 },
    ],

    // ── Repartition geographique (% du CA 2025, ventilation Excel) ───────────
    // Excel Resultat par secteur : Grece 37,4 % / Other countries (export) 61,8 %. Export
    // = 61,8 % (chiffre exact Excel + communique) ; domestique fixe au complement 100 %
    // (le segment "Autres", 0,8 %, non ventile geographiquement, rattache au domestique).
    // Export vers 40+ pays a predominance europeenne (UK, Italie en tete) -> mappe 'Europe'.
    // Le composant attribue le code 300 (Grece) a la cle 'Grece' (plus specifique) avant 'Europe'.
    geoRevenue: [
      { region: 'Grèce',  pct: 38.2 },
      { region: 'Europe', pct: 61.8 },
    ],

    // ── Marges FY2021-FY2025 (%) ─────────────────────────────────────────────
    // gross = marge brute | operating = EBIT / CA | net = RN / CA.
    // 2022 = crise du prix du lait (marge brute 18,3 %). Pic 2023 (33,5 %), compression
    // depuis (intrants + mix export private label a marge plus serree).
    marges: [
      { year: 2021, gross: 30.6, operating: 12.4, net: 9.8 },
      { year: 2022, gross: 18.3, operating: 2.3,  net: 1.8 },
      { year: 2023, gross: 33.5, operating: 18.6, net: 14.9 },
      { year: 2024, gross: 29.7, operating: 14.5, net: 13.5 },
      { year: 2025, gross: 27.0, operating: 12.8, net: 10.4 },
    ],
    margesBreaks: [
      { year: 2022, label: 'Crise du prix du lait : marge brute effondree a 18,3 %' },
    ],

    // ── ROIC La These FY2021-FY2025 (%) ──────────────────────────────────────
    // NOPAT / IC (goodwill inclus, dette plancher 0). Creux 2022 (crise lait), retour
    // au-dessus de 23 % depuis. La These : net cash -> IC = capitaux propres.
    roic: [
      { year: 2021, value: 16.1 },
      { year: 2022, value: 3.8 },
      { year: 2023, value: 30.8 },
      { year: 2024, value: 26.9 },
      { year: 2025, value: 23.2 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // WACC eleve (8-10 %) du fait du CRP Grece. Spread ROIC-WACC positif sauf 2022.
    roicVsWacc: [
      { year: 2021, value: 16.1, wacc: 5.9 },
      { year: 2022, value: 3.8,  wacc: 9.7 },
      { year: 2023, value: 30.8, wacc: 8.3 },
      { year: 2024, value: 26.9, wacc: 8.5 },
      { year: 2025, value: 23.2, wacc: 8.8 },
    ],

    // ── Free Cash Flow FY2021-FY2025 (M EUR) ─────────────────────────────────
    // FCF = OCF - Capex industriel. Ecrase 2024-2025 par le capex de capacite (~26 M EUR/an,
    // dont 22,2 M de construction en cours en 2025). FCF normalise (capex de maintenance) en
    // Valorisation. 2022 negatif (creux operationnel + BFR).
    fcf: [
      { year: 2021, value: 12.37 },
      { year: 2022, value: -4.35 },
      { year: 2023, value: 35.41 },
      { year: 2024, value: 3.43 },
      { year: 2025, value: 9.97 },
    ],
    fcfBreaks: [
      { year: 2025, label: 'FCF comprime par le capex de capacite (construction en cours 22,2 M EUR)' },
    ],

    // ── CA par segment FY2021-FY2025 (M EUR) ─────────────────────────────────
    // Yaourt 82,6 % du CA (moteur, +32 % en 2025), Glaces 16,6 %, Autres 0,8 %.
    // total.show=false : aucun segment negatif, le CA total se lit au cumul de la barre.
    segmentRevenue: {
      unit: 'M€',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'Yaourt', value: 104.2 },
          { name: 'Glaces', value: 29.9 },
          { name: 'Autres', value: 0.4 },
        ]},
        { year: 2022, segments: [
          { name: 'Yaourt', value: 135.0 },
          { name: 'Glaces', value: 35.8 },
          { name: 'Autres', value: 1.0 },
        ]},
        { year: 2023, segments: [
          { name: 'Yaourt', value: 173.6 },
          { name: 'Glaces', value: 40.7 },
          { name: 'Autres', value: 2.0 },
        ]},
        { year: 2024, segments: [
          { name: 'Yaourt', value: 205.1 },
          { name: 'Glaces', value: 48.6 },
          { name: 'Autres', value: 2.7 },
        ]},
        { year: 2025, segments: [
          { name: 'Yaourt', value: 271.5 },
          { name: 'Glaces', value: 54.7 },
          { name: 'Autres', value: 2.5 },
        ]},
      ],
    },

    // ── Graphiques de valorisation comparee ──────────────────────────────────
    // Source : API Yahoo (base marche TTM courante, homogene entre pairs). Les multiples
    // peuvent differer des series FY de la fiche (snapshot FY2025 a la cloture). Pairs a
    // donnees PROPRES sur les 7 axes : mediane secteur laitier + Emmi, Glanbia, Danone.
    // Evrofarma (comparable grec) ecarte des radars (cellules N/M sur P/FCF, ROIC, FCF Yield,
    // Dette/EBITDA), traite en qualitatif dans la prose.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Kri Kri vs mediane sectorielle (laitier europeen)',
        data: [
          { label: 'PER',          valeur: 22.7, secteur: 22.74 },
          { label: 'EV/EBITDA',    valeur: 16.29, secteur: 11.72 },
          { label: 'P/FCF',        valeur: 94.4, secteur: 17.2 },
          { label: 'Marge EBIT %', valeur: 19.6, secteur: 8.65 },
          { label: 'ROIC %',       valeur: 23.0, secteur: 7.0 },
          { label: 'FCF Yield %',  valeur: 1.1,  secteur: 5.85 },
          { label: 'Dette/EBITDA', valeur: -0.14, secteur: 2.78 },
        ],
      },
      {
        id: 'vs_pairs', type: 'radar',
        title: 'Kri Kri vs pairs directs (Emmi, Glanbia, Danone)',
        concurrent1: 'Emmi',
        concurrent2: 'Glanbia',
        concurrent3: 'Danone',
        data: [
          { label: 'PER',          valeur: 22.7,  concurrent1: 20.79, concurrent2: 34.73, concurrent3: 23.82 },
          { label: 'EV/EBITDA',    valeur: 16.29, concurrent1: 11.89, concurrent2: 13.14, concurrent3: 11.54 },
          { label: 'P/FCF',        valeur: 94.4,  concurrent1: 20.1,  concurrent2: 18.6,  concurrent3: 15.8 },
          { label: 'Marge EBIT %', valeur: 19.6,  concurrent1: 7.7,   concurrent2: 9.2,   concurrent3: 13.7 },
          { label: 'ROIC %',       valeur: 23.0,  concurrent1: 11.5,  concurrent2: 7.0,   concurrent3: 5.6 },
          { label: 'FCF Yield %',  valeur: 1.1,   concurrent1: 5.0,   concurrent2: 5.4,   concurrent3: 6.3 },
          { label: 'Dette/EBITDA', valeur: -0.14, concurrent1: 1.92,  concurrent2: 1.4,   concurrent3: 2.78 },
        ],
      },
    ],

    // ── Metriques libres FY2021-FY2025 ───────────────────────────────────────
    metricHistory: [

      // ── EV/EBITDA historique (x) ─────────────────────────────────────────
      // 2022 (23,6x) sur EBITDA de creux. Re-rating depuis (cours x3 en 4 ans).
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 13.69 },
          { year: 2022, value: 23.58 },
          { year: 2023, value: 6.99 },
          { year: 2024, value: 11.62 },
          { year: 2025, value: 12.91 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 13.76 },
              { year: 2022, value: 13.76 },
              { year: 2023, value: 13.76 },
              { year: 2024, value: 13.76 },
              { year: 2025, value: 13.76 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (M EUR) ────────────────────────────────────────
      // Le capex (gris pointille) double en 2024-2025 (expansion de capacite) et passe
      // au-dessus du FCF : c'est la phase d'investissement qui ecrase le FCF publie.
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Operationnel',
        unit:  'M€',
        yMin:  0,
        data: [
          { year: 2021, value: 23.49 },
          { year: 2022, value: 4.33 },
          { year: 2023, value: 49.09 },
          { year: 2024, value: 29.98 },
          { year: 2025, value: 35.80 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 12.37 },
              { year: 2022, value: -4.35 },
              { year: 2023, value: 35.41 },
              { year: 2024, value: 3.43 },
              { year: 2025, value: 9.97 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 11.18 },
              { year: 2022, value: 8.79 },
              { year: 2023, value: 13.73 },
              { year: 2024, value: 26.66 },
              { year: 2025, value: 25.97 },
            ],
          },
        ],
      },

      // ── BPA dilue (EUR) ──────────────────────────────────────────────────
      // BPA quasi plat 2024 -> 2025 (1,047 -> 1,034) malgre un CA +28 % : la compression
      // de marge brute a absorbe la croissance. Creux 2022 (crise lait, 0,096).
      {
        label: 'EPS',
        name:  'BPA dilue',
        unit:  '€',
        data: [
          { year: 2021, value: 0.401 },
          { year: 2022, value: 0.096 },
          { year: 2023, value: 0.978 },
          { year: 2024, value: 1.047 },
          { year: 2025, value: 1.034 },
        ],
      },

      // ── Dividende par action (EUR, au titre de l'exercice) ───────────────
      // Croissance reguliere : 0,20 -> 0,45 EUR. Maintenu a 0,20 dans la crise 2022.
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '€',
        data: [
          { year: 2021, value: 0.20 },
          { year: 2022, value: 0.20 },
          { year: 2023, value: 0.35 },
          { year: 2024, value: 0.40 },
          { year: 2025, value: 0.45 },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) ─────────────────────────────────────────
      // ROCE Excel = EBIT / (CP + dette LT), AVANT impot (distinct du ROIC La These).
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 18.6 },
          { year: 2022, value: 4.7 },
          { year: 2023, value: 34.9 },
          { year: 2024, value: 28.2 },
          { year: 2025, value: 26.3 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 5.9 },
              { year: 2022, value: 9.7 },
              { year: 2023, value: 8.3 },
              { year: 2024, value: 8.5 },
              { year: 2025, value: 8.8 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 16.1 },
              { year: 2022, value: 3.8 },
              { year: 2023, value: 30.8 },
              { year: 2024, value: 26.9 },
              { year: 2025, value: 23.2 },
            ],
          },
        ],
      },

      // ── PER historique (x) ───────────────────────────────────────────────
      // 2022 (64,3x) = PER sur benefice de creux, non significatif. PER au cours de
      // cloture FY. PER ajuste taux integre le Re avec CRP Grece.
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 21.2 },
          { year: 2022, value: 64.3 },
          { year: 2023, value: 9.8 },
          { year: 2024, value: 14.3 },
          { year: 2025, value: 18.4 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (hors 2022)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 15.9 },
              { year: 2022, value: 15.9 },
              { year: 2023, value: 15.9 },
              { year: 2024, value: 15.9 },
              { year: 2025, value: 15.9 },
            ],
          },
          {
            name:   'PER ajuste taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 22.9 },
              { year: 2022, value: 60.3 },
              { year: 2023, value: 9.9 },
              { year: 2024, value: 14.8 },
              { year: 2025, value: 17.9 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (%) ─────────────────────────────────────────
      // Denominateur = EV (convention La These). Taux sans risque = Bund 10 ans.
      // Comprime 2024-2025 par le capex (sous le taux sans risque).
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 4.4 },
          { year: 2022, value: -2.1 },
          { year: 2023, value: 11.2 },
          { year: 2024, value: 0.7 },
          { year: 2025, value: 1.6 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 3.2 },
              { year: 2022, value: 3.2 },
              { year: 2023, value: 3.2 },
              { year: 2024, value: 3.2 },
              { year: 2025, value: 3.2 },
            ],
          },
          {
            name:  'Taux sans risque (Bund 10 ans)',
            color: '#52B788',
            data: [
              { year: 2021, value: -0.2 },
              { year: 2022, value: 2.6 },
              { year: 2023, value: 2.0 },
              { year: 2024, value: 2.4 },
              { year: 2025, value: 2.9 },
            ],
          },
        ],
      },

      // ── DSO / DIO / DPO / CCC (jours) ────────────────────────────────────
      // CCC structurellement positif (~30 j) : Kri Kri finance son BFR. DSO ameliore
      // (collateral sur les distributeurs domestiques).
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 51.1 },
          { year: 2022, value: 53.7 },
          { year: 2023, value: 39.5 },
          { year: 2024, value: 37.9 },
          { year: 2025, value: 41.1 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 46.7 },
              { year: 2022, value: 40.2 },
              { year: 2023, value: 44.2 },
              { year: 2024, value: 50.5 },
              { year: 2025, value: 46.9 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 57.7 },
              { year: 2022, value: 52.6 },
              { year: 2023, value: 55.5 },
              { year: 2024, value: 57.6 },
              { year: 2025, value: 56.6 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 40.1 },
              { year: 2022, value: 41.3 },
              { year: 2023, value: 28.2 },
              { year: 2024, value: 30.8 },
              { year: 2025, value: 31.5 },
            ],
          },
        ],
      },

      // ── Current Ratio (x) ────────────────────────────────────────────────
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 2.36 },
          { year: 2022, value: 1.67 },
          { year: 2023, value: 2.26 },
          { year: 2024, value: 2.16 },
          { year: 2025, value: 2.00 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.09 },
              { year: 2022, value: 2.09 },
              { year: 2023, value: 2.09 },
              { year: 2024, value: 2.09 },
              { year: 2025, value: 2.09 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA (x) ─────────────────────────────────────────
      // Tresorerie nette structurelle (sauf 2022, leger endettement sur le creux).
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: -0.07 },
          { year: 2022, value: 0.89 },
          { year: 2023, value: -0.20 },
          { year: 2024, value: -0.29 },
          { year: 2025, value: -0.16 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.03 },
              { year: 2022, value: 0.03 },
              { year: 2023, value: 0.03 },
              { year: 2024, value: 0.03 },
              { year: 2025, value: 0.03 },
            ],
          },
        ],
      },

      // ── Asset Turnover (x) ───────────────────────────────────────────────
      // En hausse : le CA croit plus vite que la base d'actifs (levier d'echelle).
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 1.12 },
          { year: 2022, value: 1.34 },
          { year: 2023, value: 1.35 },
          { year: 2024, value: 1.44 },
          { year: 2025, value: 1.50 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.35 },
              { year: 2022, value: 1.35 },
              { year: 2023, value: 1.35 },
              { year: 2024, value: 1.35 },
              { year: 2025, value: 1.35 },
            ],
          },
        ],
      },

      // ── Dilution annuelle (%) ────────────────────────────────────────────
      // Capital quasi stable : ~33 M d'actions, dilution proche de zero (pas de SBC notable).
      {
        label: 'Dilution',
        name:  "Variation du nombre d'actions (%)",
        unit:  '%',
        data: [
          { year: 2022, value: -0.03 },
          { year: 2023, value: 0.14 },
          { year: 2024, value: 0.01 },
          { year: 2025, value: -0.03 },
        ],
      },

      // ── Payout Ratio (%, convention DEU au titre) ────────────────────────
      // 2022 (207 %) = dividende 0,20 EUR maintenu sur un BPA de creux (0,096) : signal de
      // confiance du management, artefact a lire en contexte. Hors 2022, payout 36-50 %.
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 49.9 },
          { year: 2022, value: 207.0 },
          { year: 2023, value: 35.8 },
          { year: 2024, value: 38.2 },
          { year: 2025, value: 43.5 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (hors 2022)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 41.9 },
              { year: 2022, value: 41.9 },
              { year: 2023, value: 41.9 },
              { year: 2024, value: 41.9 },
              { year: 2025, value: 41.9 },
            ],
          },
        ],
      },

      // ── Retour aux actionnaires vs Capex (M EUR) ─────────────────────────
      // Dividendes verses vs Capex : le capex de capacite (croissance) absorbe largement
      // plus de cash que le retour actionnaires. Rachats d'actions negligeables.
      {
        label: 'Capex_Action',
        name:  'Dividendes verses',
        unit:  'M€',
        yMin:  0,
        data: [
          { year: 2021, value: 6.98 },
          { year: 2022, value: 6.61 },
          { year: 2023, value: 6.61 },
          { year: 2024, value: 11.57 },
          { year: 2025, value: 13.22 },
        ],
        competitors: [
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 11.18 },
              { year: 2022, value: 8.79 },
              { year: 2023, value: 13.73 },
              { year: 2024, value: 26.66 },
              { year: 2025, value: 25.97 },
            ],
          },
        ],
      },

    ],
  },
}
