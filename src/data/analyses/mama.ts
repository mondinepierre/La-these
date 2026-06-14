// ─────────────────────────────────────────────────────────────────────────────
// Mama's Creations, Inc. - Analyse ponctuelle
// Ticker : MAMA | Nasdaq | USD | CTO (non eligible PEA)
// Derniere mise a jour : 2026-06-14
// Sources : 10-K FY2026 (cloture 31/01/2026), 10-K FY2022-FY2025, 10-Q Q1-FY27,
//           Investor Day 2026 + Investor Presentation juin 2026, Excel consolide La These
// ─────────────────────────────────────────────────────────────────────────────
//
// NOTE METHODOLOGIQUE - EXERCICE DECALE (cloture 31 janvier)
//   Mama's Creations cloture son exercice fiscal le 31 janvier (confirme 10-K :
//   "year ended January 31, 2026" ; 10-Q "quarter ended April 30, 2026"). FYxx =
//   exercice clos le 31/01/xx. Les trimestres fiscaux finissent avr/juil/oct/janv.
//   Toutes les series ci-dessous sont datees en ANNEE FISCALE (FY2022 a FY2026).
//   ATTENTION cartographie du modele Excel :
//     - Compte de resultat / Bilan / Flux / Secteur / WACC : annee fiscale (col "2026" = FY2026).
//     - Onglet "Indicateurs" : decale d'un an (sa colonne "2025" = FY2026, libelle calendaire).
//     - Onglet "Bourse" : cours fige au 31/12 calendaire (snapshot FY2026 = 13,49 $ au 31/12/2025).
//     - Colonnes trimestrielles : datees aux fins de trimestres CALENDAIRES (mars/juin/sept/dec),
//       libelles erronnes vs vrais trimestres fiscaux, MAIS non peuplees (zero) : aucun impact.
//   Convention retenue ici : annee fiscale partout, ancre FY2026.
//
// NOTE METHODOLOGIQUE - DEVISE
//   Mama's Creations publie en USD. Les libelles "en euros" / "M€" du modele Excel
//   sont un artefact de template ; toutes les valeurs sont en USD (milliers au 10-K,
//   convertis en millions ici sauf mention).
//
// NOTE METHODOLOGIQUE - NOPAT / ROIC (verifie : PAS de bug de signe Excel)
//   NOPAT = EBIT x (1 - |IS effectif|). FY2026 : 7,11 x (1-0,228) = 5,49 M$ < EBIT
//   (coherent, contrairement au piege Autodesk). IC = CP + max(dette nette, 0).
//   Dette nette = -13,4 M$ (tresorerie nette) -> planchee a 0 -> IC = CP 52,6 M$.
//   ROIC La These FY2026 = 5,49 / 52,6 = 10,4 % vs WACC 6,6 % -> spread +3,8 pts.
//   ROIC comprime vs FY2024 (34,5 %) car l'IC a double : levee de preferred Series B
//   (~18,9 M$) qui dort en tresorerie + goodwill. ROIC tangible (hors goodwill) 12,7 %.
//   ROIC ex-tresorerie (NOPAT / (CP - cash)) ~ 16,8 % : double lecture en MDX (cf. Veeva).
//
// NOTE METHODOLOGIQUE - EV (correction marginale vs Excel)
//   L'onglet Indicateurs calcule EV = capitalisation (ne retranche pas la tresorerie
//   nette). En valorisation j'utilise l'EV vrai = capi - tresorerie nette (~ -13,4 M$).
//   Ecart ~2 %, signale par transparence (Regle des chiffres).
//
// NOTE METHODOLOGIQUE - BETA / WACC (small cap, beta peu fiable)
//   WACC modele = 6,6 % : Rf 4,09 % (UST 10Y au 31/12/2025), beta 0,60,
//   ERP 4,23 % (Damodaran US, sans CRP) -> Re = 4,09 + 0,60 x 4,23 = 6,64 %.
//   Rd ap. IS ~3,7 % | D/V ~1,2 % | WACC = 6,6 %.
//   Beta 0,60 sur small cap a historique court / faible liquidite = probablement
//   sous-estime. WACC 6,6 % conserve comme metrique publiee (coherence methodo), mais
//   DCF teste a 8-9 % en sensibilite et niveaux ancres sur le scenario prudent.
//
// NOTE METHODOLOGIQUE - BPA NORMALISE (frais d'acquisition one-off)
//   SBC faible (2,0 M$ = 1,1 % du CA) : pas de doctrine SBC. FY2026 porte 1,3 M$ de
//   frais de transaction Crown 1 passes en SG&A (one-off). BPA normalise La These =
//   GAAP + frais d'acquisition ap. IS ~ 0,15 $ (vs 0,13 $ GAAP), base du calculateur PER.
//
// SNAPSHOT - metriques au FY2026 (cloture 31/01/2026, cours Excel 13,49 $ au 31/12/2025).
//   Cours courant 14,91 $ (12/06/2026) -> PER ~115x, EV/EBITDA ~45x (mentionne en prose).
//   Q1-FY27 (clos 30/04/2026) cite comme actualite fraiche : CA +49,7 %, RN +66 %.
//
// VALORISATION - DCF-dominant, PER normalise en confirmation, reverse-DCF comme pivot.
//   Juste valeur centrale AUJD ~7,7 $ (DCF) / 7,85 $ (PER zone juste r=10 %), convergentes.
//   Cours 14,91 $ = zone juste du scenario BULL : le marche price un CAGR CA ~51 %/an (reverse-DCF).
//   Niveaux perso etales sur supports techniques (Pierre) : surveillance 12,65 ; premier
//   renforcement 9,85 ; achat fort 5,75. Conviction moyenne, positionnement surveillance.
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const mama: AnalyseCard = {
  slug:           'mama',
  type:           'ponctuelle',
  title:          "Mama's Creations, Inc.",
  ticker:         'MAMA',
  secteur:        'Consommation',
  geo:            'États-Unis',
  conviction:     'moyenne',        // small cap, concentration clients (top 2 ~55 %), turnaround non encore prouve dans la duree
  positionnement: 'surveillance',   // hors position ; cours ~2x la juste valeur centrale
  lastUpdated:    '2026-06-14',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Petit specialiste americain du deli refrigere (poulet, boulettes, plats prepares) vendu en grande distribution et en clubs. Chiffre d'affaires multiplie par 3,6 en cinq ans (171,7 M$, +39 %) sous une direction de redressement arrivee en 2023, mais marge operationnelle encore a 4 % et deux clients qui pesent plus de la moitie des ventes. Tout le pari tient au levier d'echelle, paye plus de 100 fois les benefices.",
  glossaire:      ['moat', 'roic', 'free-cash-flow', 'wacc', 'ev-ebitda', 'marge-de-securite'],
  logo:           '/analyse/mama.png',
  // Cible centrale 5 ans 12,6 $ (BPA FY2031 0,49 $ x 26x) +/- MoE (beta 0,60 x 15 % = 9 %).
  prixCible:      { bas: 12, haut: 14, devise: 'USD' },
  marginOfSafety: 'négative',       // cours 14,91 $ vs juste valeur centrale ~7,7-7,9 $
  readingTime:    40,    // PROVISOIRE - a recalculer depuis le compte de mots final
  onePager: {
    thesis:    "Le deli americain qui se reinvente : CA x3,6 en 5 ans, mais marge encore a 4 % et deux clients = la moitie des ventes. Paye 100x.",
    cours:     14.91,
    coursDate: '2026-06-12',
    devise:    'USD',
    range52w:  { low: 7.90, high: 17.38 },
  },

  // ── Metriques snapshot FY2026 (cloture 31/01/2026 ; cours Excel 13,49 $ au 31/12/2025) ──
  // Reprises de l'Excel (onglet Indicateurs, col FY2026). Au cours courant 14,91 $ :
  //   PER ~115x (GAAP) / ~97x (normalise), EV/EBITDA ~45x, FCF Yield ~1,6 %.
  // per : 13,49 / BPA dilue 0,128 = 105,6x (GAAP trailing) ; normalise (hors frais Crown 1) ~90x
  // evEbitda : EV 544,8 / EBITDA 13,4 = 40,5x (Excel affiche 41,5x avec EV=capi ; voir note EV)
  // fcfYield : FCF 9,77 / EV 544,8 = 1,8 % (sur EV, convention La These)
  // roic : NOPAT 5,49 / IC 52,6 = 10,4 % (La These, goodwill inclus, dette plancher 0)
  // detteEbitda : dette nette -13,4 / EBITDA 13,4 = -1,0x (tresorerie nette)
  // dso : creances 13,1 / CA 171,7 x 365 = 27,8 j
  metrics: {
    per:               105.6,   // GAAP trailing FY2026 (cours 13,49 $). Normalise ~90x. Au cours courant ~115x.
    evEbitda:          41.5,    // Excel (EV = capi) ; EV vrai 40,5x
    fcfYield:          1.7,     // FCF / EV (snapshot FY2026)
    roic:              10.4,    // NOPAT / IC (La These). Tangible 12,7 % ; ex-tresorerie ~16,8 %
    wacc:              6.6,
    detteEbitda:       -1.0,    // tresorerie nette
    croissanceCA3ans:  22.6,    // CAGR CA FY2023-FY2026
    croissanceBPA3ans: 29.4,    // CAGR BPA dilue FY2023-FY2026 (base faible, volatil)
    margeEbit:         4.1,     // EBIT / CA (4,9 % hors 1,3 M$ frais Crown 1)
    margeBrute:        25.1,
    payoutRatio:       0,       // Pas de dividende
    currentRatio:      2.17,
    dso:               27.8,
  },

  // ── Tendances visuelles (badge fleche fiche index) ─────────────────────────
  tendances: {
    per:       'hausse',    // re-rating massif : ~29x (FY23) -> 105x (FY26)
    fcfYield:  'baisse',    // 7,4 % (FY23) -> 1,7 % (FY26) : compression par la hausse du cours
    roic:      'baisse',    // 34,5 % (FY24) -> 10,4 % (FY26) : IC double (levee + goodwill)
    margeEbit: 'stable',    // 4,0 % (FY25) -> 4,1 % (FY26), sous le pic FY24 a 8,6 %
  },

  // ── Historique des mises a jour ────────────────────────────────────────────
  updates: [
    {
      date: '2026-06-14',
      note: "Creation de la fiche. Donnees FY2026 (cloture 31/01/2026), Q1-FY27 (clos 30/04/2026), acquisition Crown 1.",
    },
    {
      date: '2026-09-08',
      note: 'Resultats Q2-FY27 attendus. Source : Yahoo Finance API.',
    },
    {
      date: '2027-04-15',
      note: 'Resultats Q4-FY27 / FY2027 attendus. Source : Yahoo Finance API.',
    },
  ],

  chartData: {

    // ── CA FY2022-FY2026 (M$) ────────────────────────────────────────────────
    // CAGR 4 ans : (171,7 / 47,1)^(1/4) - 1 = 38,2 % | CAGR 3 ans 22,6 %.
    // FY2023 (+98 %) dope par les acquisitions T&L + Olive Branch (2021) ; FY2026
    // (+39 %) organique + Crown 1 (consolide a partir du 02/09/2025).
    revenue: [
      { year: 2022, value: 47.1 },
      { year: 2023, value: 93.2 },
      { year: 2024, value: 103.3 },
      { year: 2025, value: 123.3 },
      { year: 2026, value: 171.7 },
    ],
    revenueBreaks: [
      { year: 2026, label: 'Acquisition Crown 1 (proteines / plats prets-a-chauffer)' },
    ],

    // ── Repartition geographique : ~100 % Etats-Unis (retail + clubs US) ──────
    geoRevenue: [
      { region: 'États-Unis', pct: 100 },
    ],

    // ── Marges FY2022-FY2026 (%) ─────────────────────────────────────────────
    // gross = marge brute | operating = EBIT / CA | net = RN / CA.
    // Pic de marge FY2024 (EBIT 8,6 %), creux FY2025, FY2026 dilue par l'integration
    // Crown 1 et 1,3 M$ de frais d'acquisition (EBIT 4,9 % hors frais).
    marges: [
      { year: 2022, gross: 25.2, operating: 0.2, net: -0.5 },
      { year: 2023, gross: 20.8, operating: 3.0, net: 2.5 },
      { year: 2024, gross: 29.4, operating: 8.6, net: 6.3 },
      { year: 2025, gross: 24.8, operating: 4.0, net: 3.0 },
      { year: 2026, gross: 25.1, operating: 4.1, net: 3.1 },
    ],

    // ── ROIC La These FY2022-FY2026 (%) ──────────────────────────────────────
    // NOPAT / IC (goodwill inclus, dette plancher 0). Pic FY2024 puis compression
    // mecanique : l'IC double (levee preferred Series B + goodwill Crown 1).
    roic: [
      { year: 2022, value: -2.6 },
      { year: 2023, value: 16.6 },
      { year: 2024, value: 34.5 },
      { year: 2025, value: 15.4 },
      { year: 2026, value: 10.4 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // FY2022 WACC non representatif (structure de capital distordue, dette nette 9x).
    roicVsWacc: [
      { year: 2022, value: -2.6, wacc: 0.0 },
      { year: 2023, value: 16.6, wacc: 7.1 },
      { year: 2024, value: 34.5, wacc: 6.4 },
      { year: 2025, value: 15.4, wacc: 6.9 },
      { year: 2026, value: 10.4, wacc: 6.6 },
    ],
    roicWaccBreaks: [
      { year: 2022, label: 'WACC FY2022 non representatif (dette nette 9x EBITDA)' },
    ],

    // ── Free Cash Flow FY2022-FY2026 (M$) ────────────────────────────────────
    // FCF = OCF - Capex industriel. Volatil : FY2025 ecrase par un capex de
    // capacite (5,1 M$), rebond FY2026 (capex 1,7 M$, OCF 11,4 M$).
    fcf: [
      { year: 2022, value: 0.05 },
      { year: 2023, value: 4.92 },
      { year: 2024, value: 10.84 },
      { year: 2025, value: 0.08 },
      { year: 2026, value: 9.77 },
    ],

    // ── Graphiques de valorisation comparee ──────────────────────────────────
    // Source : API Yahoo (base marche TTM courante, homogene entre pairs). Les
    // multiples peuvent differer legerement des series FY de la fiche (snapshot FY2026).
    // Radars batis sur les pairs a donnees PROPRES : mediane secteur agroalimentaire
    // (packaged food) et J&J Snack Foods. Vital Farms / Lifeway ecartes des radars
    // (cellules N/M sur P/FCF + valeurs aberrantes), traites en qualitatif.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: "Mama's Creations vs mediane sectorielle (agroalimentaire emballe)",
        data: [
          { label: 'PER',          valeur: 99.4, secteur: 10.7 },
          { label: 'EV/EBITDA',    valeur: 39.6, secteur: 8.0  },
          { label: 'P/FCF',        valeur: 62.1, secteur: 7.9  },
          { label: 'Marge EBIT %', valeur: 5.0,  secteur: 10.3 },
          { label: 'ROIC %',       valeur: 8.8,  secteur: 6.4  },
          { label: 'FCF Yield %',  valeur: 1.6,  secteur: 12.7 },
          { label: 'Dette/EBITDA', valeur: -0.4, secteur: 4.2  },
        ],
      },
      {
        id: 'vs_jjsf', type: 'radar',
        title: "Mama's Creations vs J&J Snack Foods (JJSF)",
        concurrent1: 'J&J Snack Foods',
        data: [
          { label: 'PER',          valeur: 99.4, concurrent1: 26.7 },
          { label: 'EV/EBITDA',    valeur: 39.6, concurrent1: 9.5  },
          { label: 'P/FCF',        valeur: 62.1, concurrent1: 18.1 },
          { label: 'Marge EBIT %', valeur: 5.0,  concurrent1: 1.9  },
          { label: 'ROIC %',       valeur: 8.8,  concurrent1: 6.3  },
          { label: 'FCF Yield %',  valeur: 1.6,  concurrent1: 5.5  },
          { label: 'Dette/EBITDA', valeur: -0.4, concurrent1: 0.3  },
        ],
      },
    ],

    // ── Metriques libres FY2022-FY2026 ───────────────────────────────────────
    metricHistory: [

      // ── EV/EBITDA historique (x) ─────────────────────────────────────────
      // FY2022 (74,6x) non significatif (EBITDA 1,1 M$). Re-rating massif depuis.
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2022, value: 74.6 },
          { year: 2023, value: 15.5 },
          { year: 2024, value: 16.6 },
          { year: 2025, value: 48.7 },
          { year: 2026, value: 41.5 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 39.4 },
              { year: 2023, value: 39.4 },
              { year: 2024, value: 39.4 },
              { year: 2025, value: 39.4 },
              { year: 2026, value: 39.4 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (M$) ───────────────────────────────────────────
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Operationnel',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2022, value: 0.91 },
          { year: 2023, value: 5.51 },
          { year: 2024, value: 11.62 },
          { year: 2025, value: 5.18 },
          { year: 2026, value: 11.42 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 0.05 },
              { year: 2023, value: 4.92 },
              { year: 2024, value: 10.84 },
              { year: 2025, value: 0.08 },
              { year: 2026, value: 9.77 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2022, value: 0.86 },
              { year: 2023, value: 0.59 },
              { year: 2024, value: 0.79 },
              { year: 2025, value: 5.09 },
              { year: 2026, value: 1.65 },
            ],
          },
        ],
      },

      // ── BPA dilue ($) ────────────────────────────────────────────────────
      {
        label: 'EPS',
        name:  'BPA dilue',
        unit:  '$',
        data: [
          { year: 2022, value: -0.01 },
          { year: 2023, value: 0.06 },
          { year: 2024, value: 0.17 },
          { year: 2025, value: 0.09 },
          { year: 2026, value: 0.13 },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) ─────────────────────────────────────────
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2022, value: 0.5 },
          { year: 2023, value: 14.9 },
          { year: 2024, value: 34.3 },
          { year: 2025, value: 17.8 },
          { year: 2026, value: 12.3 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 0.0 },
              { year: 2023, value: 7.1 },
              { year: 2024, value: 6.4 },
              { year: 2025, value: 6.9 },
              { year: 2026, value: 6.6 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2022, value: -2.6 },
              { year: 2023, value: 16.6 },
              { year: 2024, value: 34.5 },
              { year: 2025, value: 15.4 },
              { year: 2026, value: 10.4 },
            ],
          },
        ],
      },

      // ── PER historique (x) ───────────────────────────────────────────────
      // FY2022 exclu (perte). Re-rating de ~29x (FY23) a 105x (FY26).
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2023, value: 29.0 },
          { year: 2024, value: 28.7 },
          { year: 2025, value: 84.6 },
          { year: 2026, value: 105.6 },
        ],
        competitors: [
          {
            name:   'Moyenne historique',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2023, value: 62.0 },
              { year: 2024, value: 62.0 },
              { year: 2025, value: 62.0 },
              { year: 2026, value: 62.0 },
            ],
          },
          {
            name:   'PER ajuste taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2023, value: 27.4 },
              { year: 2024, value: 24.8 },
              { year: 2025, value: 72.3 },
              { year: 2026, value: 93.3 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (%) ─────────────────────────────────────────
      // Denominateur = EV. Taux sans risque = UST 10 ans.
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2022, value: 0.1 },
          { year: 2023, value: 7.4 },
          { year: 2024, value: 5.8 },
          { year: 2025, value: 0.0 },
          { year: 2026, value: 1.7 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 3.0 },
              { year: 2023, value: 3.0 },
              { year: 2024, value: 3.0 },
              { year: 2025, value: 3.0 },
              { year: 2026, value: 3.0 },
            ],
          },
          {
            name:  'Taux sans risque (UST 10 ans)',
            color: '#52B788',
            data: [
              { year: 2022, value: 1.6 },
              { year: 2023, value: 3.8 },
              { year: 2024, value: 3.7 },
              { year: 2025, value: 4.3 },
              { year: 2026, value: 4.1 },
            ],
          },
        ],
      },

      // ── DSO / DIO / DPO / CCC (jours) ────────────────────────────────────
      // CCC repasse legerement positif en FY2026 (build de stocks post-Crown 1).
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2022, value: 59.1 },
          { year: 2023, value: 26.8 },
          { year: 2024, value: 27.8 },
          { year: 2025, value: 24.1 },
          { year: 2026, value: 27.8 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2022, value: 30.0 },
              { year: 2023, value: 18.0 },
              { year: 2024, value: 16.6 },
              { year: 2025, value: 18.9 },
              { year: 2026, value: 27.4 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2022, value: 67.1 },
              { year: 2023, value: 44.8 },
              { year: 2024, value: 62.2 },
              { year: 2025, value: 47.4 },
              { year: 2026, value: 50.5 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 22.0 },
              { year: 2023, value: -0.1 },
              { year: 2024, value: -17.8 },
              { year: 2025, value: -4.4 },
              { year: 2026, value: 4.7 },
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
          { year: 2022, value: 1.30 },
          { year: 2023, value: 1.32 },
          { year: 2024, value: 1.41 },
          { year: 2025, value: 1.29 },
          { year: 2026, value: 2.17 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 1.50 },
              { year: 2023, value: 1.50 },
              { year: 2024, value: 1.50 },
              { year: 2025, value: 1.50 },
              { year: 2026, value: 1.50 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA (x) ─────────────────────────────────────────
      // FY2022 (9,3x) avant scale-up ; tresorerie nette structurelle depuis FY2024.
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        data: [
          { year: 2022, value: 9.3 },
          { year: 2023, value: 1.0 },
          { year: 2024, value: -0.1 },
          { year: 2025, value: -0.1 },
          { year: 2026, value: -1.0 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 1.8 },
              { year: 2023, value: 1.8 },
              { year: 2024, value: 1.8 },
              { year: 2025, value: 1.8 },
              { year: 2026, value: 1.8 },
            ],
          },
        ],
      },

      // ── Asset Turnover (x) ───────────────────────────────────────────────
      // Baisse FY2026 : actifs gonfles par Crown 1 + tresorerie levee, CA pas encore rattrape.
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2022, value: 1.57 },
          { year: 2023, value: 2.69 },
          { year: 2024, value: 2.29 },
          { year: 2025, value: 2.62 },
          { year: 2026, value: 2.00 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 2.23 },
              { year: 2023, value: 2.23 },
              { year: 2024, value: 2.23 },
              { year: 2025, value: 2.23 },
              { year: 2026, value: 2.23 },
            ],
          },
        ],
      },

      // ── Dilution annuelle (%) ────────────────────────────────────────────
      // Positif = dilution. ~3-5 %/an (SBC + actions emises pour financer la croissance).
      {
        label: 'Dilution',
        name:  "Variation du nombre d'actions (%)",
        unit:  '%',
        data: [
          { year: 2023, value: 4.5 },
          { year: 2024, value: 2.9 },
          { year: 2025, value: 2.7 },
          { year: 2026, value: 5.0 },
        ],
      },

    ],
  },
}
