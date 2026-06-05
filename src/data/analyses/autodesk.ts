// ─────────────────────────────────────────────────────────────────────────────
// Autodesk, Inc. - Analyse ponctuelle
// Ticker : ADSK | Nasdaq Global Select | USD | CTO (non eligible PEA)
// Derniere mise a jour : 2026-06-05
// Sources : 10-K FY2026 (cloture 31/01/2026), 10-K FY2022-FY2025, 10-Q Q1-FY27,
//           Q4 FY26 Earnings Slides, Proxy 2024-2026, Excel consolide La These
// ─────────────────────────────────────────────────────────────────────────────
//
// NOTE METHODOLOGIQUE - EXERCICE DECALE (cloture 31 janvier)
//   Autodesk cloture son exercice fiscal le 31 janvier. FYxx = exercice clos le
//   31/01/xx (FY2026 = 01/02/2025 au 31/01/2026). Toutes les series ci-dessous
//   sont datees en ANNEE FISCALE Autodesk (FY2022 a FY2026).
//   ATTENTION : l'onglet "Indicateurs" du modele Excel est decale d'un an (sa
//   colonne "2025" = FY2026, libelle par annee calendaire dominante). Les onglets
//   Compte de resultat / Segments / WACC sont, eux, dates en annee fiscale.
//   Convention retenue ici : annee fiscale partout.
//
// NOTE METHODOLOGIQUE - DEVISE
//   Autodesk publie en USD. Les libelles "M€" du modele Excel sont un artefact de
//   template ; toutes les valeurs sont en USD (millions sauf mention).
//
// NOTE METHODOLOGIQUE - CORRECTION NOPAT / ROIC (bug de signe Excel)
//   Le modele stocke le taux d'IS effectif en NEGATIF, donc NOPAT = EBIT x (1-t)
//   etait calcule x (1+|t|) -> NOPAT > EBIT (impossible) et ROIC ~58 %.
//   Correction appliquee : NOPAT = EBIT x (1-|t|). FY2026 : 1 578 x 0,701 = 1 106.
//   ROIC La These corrige FY2026 : 1 106 / IC 3 530 = 31,3 % (au lieu de 58 %).
//   Le niveau reste eleve car les rachats massifs ont creuse un deficit accumule
//   (-1 432 M$) qui comprime les capitaux propres (3 045 M$) et donc l'IC.
//   ROCE = ROIC ici (dette nette = dette totale - cash, pas de netting des MS).
//
// NOTE METHODOLOGIQUE - SBC (remuneration en actions)
//   SBC FY2026 = 788 M$ (11 % du CA), reintegree dans l'OCF mais cout economique
//   reel (dilution neutralisee par 1,4 Md$ de rachats). Traitement La These :
//     - DCF central : FCF NET de SBC apres impot (FCF - SBC x (1-20%)).
//     - EV/EBITDA : EBITDA convention Street (SBC incluse) pour comparabilite ;
//       le sujet SBC est traite dans le FCF (lentille primaire).
//   BPA GAAP FY2026 5,23 $ (deprime par 216 M$ de restructuration + IS 29,9 %).
//   BPA non-GAAP publie FY2026 10,43 $ (rajoute 3,67 $ de SBC : trop genereux).
//   BPA normalise La These FY2026 ~6,76 $ : GAAP + restructuration + amortissement
//   incorporels + couts d'acquisition - IS, mais SBC CONSERVEE en charge.
//
// NOTE METHODOLOGIQUE - BETA / WACC
//   Beta 1,288 : regression mensuelle 5 ans vs S&P 500 Total Return (SPXTR),
//   convention La These US (confirme par Pierre ; le label "Finviz" du modele
//   etait une coquille de recopie).
//   Rf UST 10Y au 31/01/2026 : 4,1 % | ERP Damodaran US : 4,2 % (sans CRP)
//   Re = 4,1 + 1,288 x 4,2 = 9,5 % | Rd ap. IS ~2,0 % | D/V ~4 % | WACC = 9,4 %
//
// NOTE METHODOLOGIQUE - DETTE NETTE / EV
//   Convention solidite (dette/EBITDA) : dette incl. leases - cash = +485 M$.
//   Convention EV/DCF : dette financiere (notes 2 483) - cash & placements
//   (2 973) = NET CASH ~490 M$. EV ~ capitalisation. Facilite revolving 1,5 Md$
//   non tiree au 31/01/2026.
//
// VALORISATION - methode PER normalise (SBC en charge) primaire, DCF owner FCF
//   et EV/FCF owner en confirmation, PER GAAP/non-GAAP en controle.
//   LE PIVOT : la valorisation d'Autodesk est un referendum sur la SBC.
//   - SBC passee en charge (mon ancrage) : juste valeur centrale ~205-214 $ (DCF owner 205,
//     PER normalise zone juste r=10 % 214, EV/FCF owner 212). Cours 233,64 = prime ~9 %.
//   - SBC ignoree (consensus, PER non-GAAP 26x / FCF publie) : ~290-325 $, d'ou la
//     "decote" affichee par les analystes (PT moyen ~325 $ = 26x le non-GAAP FY27).
//   BPA normalise La These FY2026 (SBC CONSERVEE, hors non-recurrents/PPA, IS
//   normalise ~21 %) = 7,0 $. PER cible central 28x (= multiple forward actuel,
//   pas de re-rating). CAGR BPA 8/12/16 %. Prix cible 5 ans central 345 $.
//   Niveaux perso (zone juste centrale r=10 % 214, MoS 15-20 %) : 167-182 $.
//   Conviction / positionnement : a confirmer en section Verdict editorial.
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const autodesk: AnalyseCard = {
  slug:           'autodesk',
  type:           'ponctuelle',
  title:          'Autodesk, Inc.',
  ticker:         'ADSK',
  secteur:        'Technologie',
  geo:            'États-Unis',
  conviction:     'forte',          // PROVISOIRE - a valider en Verdict (overhang gouvernance + concurrence)
  positionnement: 'surveillance',   // PROVISOIRE - a valider en Verdict
  lastUpdated:    '2026-06-05',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Editeur des logiciels de conception standards de l'industrie (AutoCAD, Revit, Fusion). Abonnement a 91 % de marge brute, RPO 8,3 Md$, retention nette superieure a 110 %. La transition vers la facturation annuelle et la pression de l'activiste Starboard ont assaini les marges, mais la remuneration en actions et une valorisation deja riche limitent la marge de securite a 233 $.",
  glossaire:      ['moat', 'couts-de-changement', 'saas', 'rpo', 'free-cash-flow', 'stock-based-compensation'],
  logo:           '/analyse/autodesk.png',
  // Prix cible 5 ans central 345 $ (BPA 12,34 x 28x), MoE beta 1,288 x 15 % = 19,3 %
  prixCible:      { bas: 278, haut: 410, devise: 'USD' },
  marginOfSafety: 'faible',         // Cours 233,64 vs zone juste centrale 214 $ = prime ~9 %
  readingTime:    42,    // (6796 mots / 200) + (31 visuels x 0,25)
  onePager: {
    thesis:    "Les formats .dwg et .rvt sont des standards de l'industrie. Marge brute 91 %, RPO 8,3 Md$. Le hic : la SBC et une valo deja pleine.",
    cours:     233.64,
    coursDate: '2026-06-04',
    devise:    'USD',
    range52w:  { low: 218.45, high: 326.79 },
  },

  // ── Metriques snapshot (cours 233,64 $ au 04/06/2026 ; ~214 M actions) ───────
  // Capitalisation ~50,0 Md$ | Net cash ~490 M$ (ex-leases) | EV ~49,5 Md$
  // per : BPA normalise La These FY2026 7,0 $ (SBC conservee) -> 33,4x
  //       (controle : PER GAAP 44,7x sur 5,23 $ ; PER non-GAAP 22,4x sur 10,43 $)
  // evEbitda : EV 49 510 / EBITDA 2 561 (convention Street, SBC incluse) = 19,3x
  // fcfYield : FCF FY2026 2 409 / EV 49 510 = 4,9 % (forward FY27 ~5,6 %)
  // roic : NOPAT corrige 1 106 / IC 3 530 = 31,3 % (voir note bug de signe)
  // detteEbitda : net debt incl. leases 485 / EBITDA 2 561 = 0,2x (net cash ex-leases)
  // dso : creances 1 439 / CA 7 206 x 365 = 72,9 j (hausse = bascule billing annuel)
  metrics: {
    per:               33.4,    // BPA normalise La These 7,0 $ (SBC en charge)
    evEbitda:          19.3,
    fcfYield:          4.9,     // FCF / EV (trailing FY2026)
    roic:              31.3,    // NOPAT corrige / IC cash-adjusted
    wacc:              9.4,
    detteEbitda:       0.2,     // net cash sur base financiere (ex-leases)
    croissanceCA3ans:  12.9,    // CAGR CA FY2023-FY2026
    croissanceBPA3ans: 11.4,    // CAGR BPA GAAP FY2023-FY2026 (deprime par FY26)
    margeEbit:         21.9,    // EBIT GAAP / CA (non-GAAP 38 %)
    margeBrute:        91.0,
    payoutRatio:       0,       // Pas de dividende
    currentRatio:      0.85,    // < 1 du fait du deferred revenue (4,7 Md$)
    dso:               72.9,
  },

  // ── Tendances visuelles (badge fleche fiche index) ─────────────────────────
  tendances: {
    per:       'baisse',    // PER GAAP 125x (FY22) -> 57x (FY26) : normalisation
    fcfYield:  'hausse',    // 2,3 % (FY22) -> 3,8 % (FY26)
    roic:      'hausse',    // 22,9 % (FY22) -> 31,3 % (FY26)
    margeEbit: 'hausse',    // 14,1 % (FY22) -> 21,9 % (FY26)
  },

  // ── Historique des mises a jour ────────────────────────────────────────────
  updates: [
    {
      date: '2026-06-05',
      note: "Creation de la fiche. Donnees FY2026 (cloture 31/01/2026), Q1-FY27, guidance FY2027.",
    },
    {
      date: '2026-08-27',
      note: 'Resultats Q2-FY27 attendus. Source : Yahoo Finance API.',
    },
    {
      date: '2027-02-25',
      note: 'Resultats Q4-FY27 / FY2027 attendus. Source : Yahoo Finance API.',
    },
  ],

  chartData: {

    // ── Note transition billings ─────────────────────────────────────────────
    // FY2024-FY2026 distordus par : (1) bascule des contrats pluriannuels payes
    // d'avance vers la facturation annuelle ; (2) nouveau modele de transaction
    // (agence avec les Solution Providers). Effet visible sur billings, deferred
    // revenue, creances et FCF. Transition declaree "largely complete" en FY27.
    fcfBreaks: [
      { year: 2024, label: 'Debut transition facturation annuelle + modele agence' },
    ],

    // ── CA FY2022-FY2026 (M$) ────────────────────────────────────────────────
    // CAGR 4 ans : (7 206 / 4 386)^(1/4) - 1 = 13,2 % | FY2026 : +17,5 % publie
    // (+12 % organique a change constant et hors modele de transaction)
    revenue: [
      { year: 2022, value: 4386 },
      { year: 2023, value: 5005 },
      { year: 2024, value: 5497 },
      { year: 2025, value: 6131 },
      { year: 2026, value: 7206 },
    ],

    // ── Repartition geographique FY2026 (par localisation client) ─────────────
    // Americas (US 35,6 % + Other Americas 8,5 %) | EMEA | Asia Pacific
    geoRevenue: [
      { region: 'Amériques',      pct: 44.1 },
      { region: 'EMEA',           pct: 38.8 },
      { region: 'Asie-Pacifique', pct: 17.1 },
    ],

    // ── Marges FY2022-FY2026 (%) ─────────────────────────────────────────────
    // gross = (CA - cout des revenus) / CA | operating = EBIT GAAP / CA
    // net = RN GAAP / CA. FY2026 marge nette 15,6 % deprimee (restructuration
    // 216 M$ + IS 29,9 %). Marge op. non-GAAP FY2026 = 38 % (vs 21,9 % GAAP).
    marges: [
      { year: 2022, gross: 90.4, operating: 14.1, net: 11.3 },
      { year: 2023, gross: 90.4, operating: 19.8, net: 16.4 },
      { year: 2024, gross: 90.7, operating: 20.5, net: 16.5 },
      { year: 2025, gross: 90.6, operating: 22.1, net: 18.1 },
      { year: 2026, gross: 91.0, operating: 21.9, net: 15.6 },
    ],

    // ── ROIC La These corrige FY2022-FY2026 (%) ──────────────────────────────
    // NOPAT = EBIT x (1 - |IS effectif|). IC = CP + max(dette nette, 0).
    // Niveau eleve et volatil : IC comprime par le deficit accumule (rachats).
    // Spread vs WACC structurellement tres positif.
    roic: [
      { year: 2022, value: 22.9 },
      { year: 2023, value: 46.1 },    // IC trough (CP 1 145) -> pic mecanique
      { year: 2024, value: 34.8 },
      { year: 2025, value: 30.4 },
      { year: 2026, value: 31.3 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    roicVsWacc: [
      { year: 2022, value: 22.9, wacc: 7.1  },
      { year: 2023, value: 46.1, wacc: 10.7 },
      { year: 2024, value: 34.8, wacc: 9.5  },
      { year: 2025, value: 30.4, wacc: 9.7  },
      { year: 2026, value: 31.3, wacc: 9.4  },
    ],

    // ── Free Cash Flow FY2022-FY2026 (M$) ────────────────────────────────────
    // FCF = OCF - Capex industriel. Serie distordue par la transition billings :
    // FY2023 gonfle (pull-forward pluriannuel), FY2024 deprime (bascule annuelle),
    // FY2026 en rebond. Guidance FY2027 : 2 700-2 800 M$.
    fcf: [
      { year: 2022, value: 1475 },
      { year: 2023, value: 2031 },
      { year: 2024, value: 1282 },
      { year: 2025, value: 1567 },
      { year: 2026, value: 2409 },
    ],

    // ── CA par famille de produits FY2022-FY2026 (M$) ────────────────────────
    // AECO (BTP/infra) devenu le moteur (~50 % du CA, +22 % en FY2026).
    // Total reconcilie avec le CA consolide.
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2022, segments: [
          { name: 'AECO',                  value: 1969 },
          { name: 'AutoCAD & AutoCAD LT',  value: 1244 },
          { name: 'Manufacturing',         value: 876 },
          { name: 'Media & Entertainment', value: 259 },
          { name: 'Autres',                value: 38 },
        ]},
        { year: 2023, segments: [
          { name: 'AECO',                  value: 2278 },
          { name: 'AutoCAD & AutoCAD LT',  value: 1387 },
          { name: 'Manufacturing',         value: 978 },
          { name: 'Media & Entertainment', value: 291 },
          { name: 'Autres',                value: 71 },
        ]},
        { year: 2024, segments: [
          { name: 'AECO',                  value: 2580 },
          { name: 'AutoCAD & AutoCAD LT',  value: 1462 },
          { name: 'Manufacturing',         value: 1063 },
          { name: 'Media & Entertainment', value: 295 },
          { name: 'Autres',                value: 97 },
        ]},
        { year: 2025, segments: [
          { name: 'AECO',                  value: 2937 },
          { name: 'AutoCAD & AutoCAD LT',  value: 1572 },
          { name: 'Manufacturing',         value: 1189 },
          { name: 'Media & Entertainment', value: 315 },
          { name: 'Autres',                value: 118 },
        ]},
        { year: 2026, segments: [
          { name: 'AECO',                  value: 3583 },
          { name: 'AutoCAD & AutoCAD LT',  value: 1787 },
          { name: 'Manufacturing',         value: 1379 },
          { name: 'Media & Entertainment', value: 332 },
          { name: 'Autres',                value: 125 },
        ]},
      ],
    },

    // ── Graphiques de valorisation comparee ──────────────────────────────────
    // Source : Excel Comparaison sectorielle (screener Yahoo/Koyfin, mai-juin 2026,
    // base homogene entre pairs). Pairs retenus : editeurs conception/PLM purs
    // (Dassault Systemes, PTC, Bentley) + Adobe (benchmark software large cap).
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Autodesk vs mediane sectorielle (editeurs conception / PLM)',
        data: [
          { label: 'PER',          valeur: 34.2, secteur: 29.2 },
          { label: 'EV/EBITDA',    valeur: 22.6, secteur: 18.7 },
          { label: 'P/FCF',        valeur: 20.8, secteur: 26.4 },
          { label: 'Marge EBIT %', valeur: 29.5, secteur: 26.6 },
          { label: 'ROIC %',       valeur: 16.1, secteur: 8.9  },
          { label: 'FCF Yield %',  valeur: 4.8,  secteur: 4.1  },
          { label: 'Dette/EBITDA', valeur: 0.2,  secteur: 0.9  },
        ],
      },
      {
        id: 'vs_dassault', type: 'radar',
        title: 'Autodesk vs Dassault Systemes (DSY)',
        concurrent1: 'Dassault Systemes',
        data: [
          { label: 'PER',          valeur: 34.2, concurrent1: 21.9 },
          { label: 'EV/EBITDA',    valeur: 22.6, concurrent1: 13.6 },
          { label: 'P/FCF',        valeur: 20.8, concurrent1: 18.0 },
          { label: 'Marge EBIT %', valeur: 29.5, concurrent1: 23.4 },
          { label: 'ROIC %',       valeur: 16.1, concurrent1: 8.4  },
          { label: 'FCF Yield %',  valeur: 4.8,  concurrent1: 5.5  },
          { label: 'Dette/EBITDA', valeur: 0.2,  concurrent1: -0.6 },
        ],
      },
      {
        id: 'vs_ptc', type: 'radar',
        title: 'Autodesk vs PTC (PTC)',
        concurrent1: 'PTC',
        data: [
          { label: 'PER',          valeur: 34.2, concurrent1: 13.3 },
          { label: 'EV/EBITDA',    valeur: 22.6, concurrent1: 13.0 },
          { label: 'P/FCF',        valeur: 20.8, concurrent1: 18.7 },
          { label: 'Marge EBIT %', valeur: 29.5, concurrent1: 41.6 },
          { label: 'ROIC %',       valeur: 16.1, concurrent1: 9.4  },
          { label: 'FCF Yield %',  valeur: 4.8,  concurrent1: 5.3  },
          { label: 'Dette/EBITDA', valeur: 0.2,  concurrent1: 0.9  },
        ],
      },
      {
        id: 'vs_bentley', type: 'radar',
        title: 'Autodesk vs Bentley Systems (BSY)',
        concurrent1: 'Bentley Systems',
        data: [
          { label: 'PER',          valeur: 34.2, concurrent1: 38.0 },
          { label: 'EV/EBITDA',    valeur: 22.6, concurrent1: 25.3 },
          { label: 'P/FCF',        valeur: 20.8, concurrent1: 19.3 },
          { label: 'Marge EBIT %', valeur: 29.5, concurrent1: 30.6 },
          { label: 'ROIC %',       valeur: 16.1, concurrent1: 5.9  },
          { label: 'FCF Yield %',  valeur: 4.8,  concurrent1: 5.2  },
          { label: 'Dette/EBITDA', valeur: 0.2,  concurrent1: 2.6  },
        ],
      },
      {
        id: 'vs_adobe', type: 'radar',
        title: 'Autodesk vs Adobe (ADBE)',
        concurrent1: 'Adobe',
        data: [
          { label: 'PER',          valeur: 34.2, concurrent1: 15.1 },
          { label: 'EV/EBITDA',    valeur: 22.6, concurrent1: 10.9 },
          { label: 'P/FCF',        valeur: 20.8, concurrent1: 10.6 },
          { label: 'Marge EBIT %', valeur: 29.5, concurrent1: 38.8 },
          { label: 'ROIC %',       valeur: 16.1, concurrent1: 27.7 },
          { label: 'FCF Yield %',  valeur: 4.8,  concurrent1: 9.4  },
          { label: 'Dette/EBITDA', valeur: 0.2,  concurrent1: 0.1  },
        ],
      },
    ],

    // ── Metriques libres sur 5 ans ───────────────────────────────────────────
    metricHistory: [

      // ── EV/EBITDA historique (EBITDA convention Street, SBC incluse) ──────
      // EV = capi fin FY + dette nette. Moyenne 5 ans ~30,6x (gonflee par FY22).
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2022, value: 48.4 },
          { year: 2023, value: 23.1 },
          { year: 2024, value: 27.1 },
          { year: 2025, value: 29.4 },
          { year: 2026, value: 25.0 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 30.6 },
              { year: 2023, value: 30.6 },
              { year: 2024, value: 30.6 },
              { year: 2025, value: 30.6 },
              { year: 2026, value: 30.6 },
            ],
          },
        ],
      },

      // ── OCF / FCF / FCF net SBC / Capex (M$) ─────────────────────────────
      // Capex industriel ~40-56 M$/an (asset-light pur). La ligne "FCF net SBC"
      // retranche la SBC (cout economique reel) : ecart majeur (-30 % environ).
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Operationnel',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2022, value: 1531 },
          { year: 2023, value: 2071 },
          { year: 2024, value: 1313 },
          { year: 2025, value: 1607 },
          { year: 2026, value: 2452 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 1475 },
              { year: 2023, value: 2031 },
              { year: 2024, value: 1282 },
              { year: 2025, value: 1567 },
              { year: 2026, value: 2409 },
            ],
          },
          {
            name:   'FCF net SBC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2022, value: 920 },
              { year: 2023, value: 1374 },
              { year: 2024, value: 579 },
              { year: 2025, value: 884 },
              { year: 2026, value: 1621 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2022, value: 56 },
              { year: 2023, value: 40 },
              { year: 2024, value: 31 },
              { year: 2025, value: 40 },
              { year: 2026, value: 43 },
            ],
          },
        ],
      },

      // ── BPA dilue GAAP ($) ───────────────────────────────────────────────
      // FY2026 quasi stable (5,12 -> 5,23) malgre +17,5 % de CA : restructuration
      // 216 M$ + IS 29,9 %. BPA non-GAAP publie FY2026 = 10,43 $ (rajoute SBC).
      {
        label: 'EPS',
        name:  'BPA dilue GAAP',
        unit:  '$',
        data: [
          { year: 2022, value: 2.24 },
          { year: 2023, value: 3.78 },
          { year: 2024, value: 4.19 },
          { year: 2025, value: 5.12 },
          { year: 2026, value: 5.23 },
        ],
      },

      // ── Billings vs CA (M$) ──────────────────────────────────────────────
      // Billings = CA + variation du deferred revenue. FY2024 (5 181) PASSE SOUS
      // le CA (5 497) : signature visible de la bascule pluriannuel -> annuel.
      // FY2026 billings 7 771 (+30 % publie, +25 % corrige du modele de transaction).
      {
        label: 'Billings',
        name:  'Billings',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2022, value: 4816 },
          { year: 2023, value: 5795 },
          { year: 2024, value: 5181 },
          { year: 2025, value: 5995 },
          { year: 2026, value: 7771 },
        ],
        competitors: [
          {
            name:   'CA (revenue)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 4386 },
              { year: 2023, value: 5005 },
              { year: 2024, value: 5497 },
              { year: 2025, value: 6131 },
              { year: 2026, value: 7206 },
            ],
          },
        ],
      },

      // ── Carnet contractuel : RPO et cRPO (Md$) ───────────────────────────
      // RPO = deferred revenue (court + long terme) + unbilled deferred revenue.
      // cRPO = part reconnue sur les 12 prochains mois. RPO FY2026 8,3 Md$ (+20 %)
      // = ~1,15 annee de CA en visibilite contractuelle.
      {
        label: 'Orderbook',
        name:  'Remaining Performance Obligations',
        unit:  'Md$',
        yMin:  0,
        data: [
          { year: 2022, value: 4.739 },
          { year: 2023, value: 5.623 },
          { year: 2024, value: 6.108 },
          { year: 2025, value: 6.938 },
          { year: 2026, value: 8.300 },
        ],
        competitors: [
          {
            name:  'cRPO (12 prochains mois)',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 3.141 },
              { year: 2023, value: 3.518 },
              { year: 2024, value: 3.976 },
              { year: 2025, value: 4.457 },
              { year: 2026, value: 5.479 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (%) ─────────────────────────────────────────────────
      // ROIIC(N) = delta NOPAT corrige(N) / delta IC(N-1). Tres volatil (IC a
      // faible base, asset-light) : a lire via le glissant multi-periodes.
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel',
        unit:  '%',
        data: [
          { year: 2023, value: 29.2 },
          { year: 2024, value: -7.7 },    // delta IC negatif -> ratio non significatif
          { year: 2025, value: 25.8 },
          { year: 2026, value: 1.9 },     // NOPAT freine par restructuration + IS
        ],
      },

      // ── ROIIC glissant multi-periodes (%) ────────────────────────────────
      // Lissage : sur 3-4 ans, rendement incremental ~20-25 %, coherent avec un
      // modele d'abonnement a fort levier operationnel.
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 a 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 1.9  },
          { year: 2, value: 12.0 },
          { year: 3, value: 20.5 },
          { year: 4, value: 24.6 },
        ],
      },

      // ── PER historique GAAP (controle, distordu) ─────────────────────────
      // PER GAAP volatil : FY2022 a 125x (benefices au creux de la transition
      // abonnement). Lentille primaire = EV/FCF, pas le PER GAAP. Mediane ~57x.
      {
        label: 'PER',
        name:  'PER GAAP',
        unit:  'x',
        data: [
          { year: 2022, value: 125.5 },
          { year: 2023, value: 49.4  },
          { year: 2024, value: 58.1  },
          { year: 2025, value: 57.7  },
          { year: 2026, value: 56.6  },
        ],
        competitors: [
          {
            name:   'Mediane historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 57.7 },
              { year: 2023, value: 57.7 },
              { year: 2024, value: 57.7 },
              { year: 2025, value: 57.7 },
              { year: 2026, value: 57.7 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (EV, %) ─────────────────────────────────────
      // FCF / EV. Spread vs UST10Y proche de zero/negatif : rente de croissance,
      // pas de rendement obligataire. FY2026 3,8 % (forward FY27 ~5,6 %).
      {
        label: 'FCFy',
        name:  'FCF Yield (EV)',
        unit:  '%',
        data: [
          { year: 2022, value: 2.3 },
          { year: 2023, value: 4.9 },
          { year: 2024, value: 2.4 },
          { year: 2025, value: 2.4 },
          { year: 2026, value: 3.8 },
        ],
        competitors: [
          {
            name:  'UST 10Y (taux sans risque)',
            color: '#52B788',
            data: [
              { year: 2022, value: 1.8 },
              { year: 2023, value: 3.5 },
              { year: 2024, value: 3.9 },
              { year: 2025, value: 4.4 },
              { year: 2026, value: 4.1 },
            ],
          },
        ],
      },

      // ── DSO / DIO / DPO / CCC (jours) ─────────────────────────────────────
      // Editeur pur : DIO = 0. DSO 73 j en FY2026 (hausse = bascule billing annuel,
      // plus de creances etalees). DPO/CCC non significatifs (cout des revenus
      // marginal a 9 % du CA) : lire le DSO seul.
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2022, value: 59.6 },
          { year: 2023, value: 70.1 },
          { year: 2024, value: 58.2 },
          { year: 2025, value: 60.0 },
          { year: 2026, value: 72.9 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
              { year: 2026, value: 0 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2022, value: 105.5 },
              { year: 2023, value: 77.6 },
              { year: 2024, value: 71.4 },
              { year: 2025, value: 152.8 },
              { year: 2026, value: 237.0 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2022, value: -45.9  },
              { year: 2023, value: -7.5   },
              { year: 2024, value: -13.2  },
              { year: 2025, value: -92.8  },
              { year: 2026, value: -164.1 },
            ],
          },
        ],
      },

      // ── Current Ratio ─────────────────────────────────────────────────────
      // < 1 structurellement : le deferred revenue (4,7 Md$ FY2026) gonfle les
      // passifs courants. Aucun risque de liquidite (net cash + revolving 1,5 Md$).
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2022, value: 0.69 },
          { year: 2023, value: 0.84 },
          { year: 2024, value: 0.82 },
          { year: 2025, value: 0.68 },
          { year: 2026, value: 0.85 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 0.78 },
              { year: 2023, value: 0.78 },
              { year: 2024, value: 0.78 },
              { year: 2025, value: 0.78 },
              { year: 2026, value: 0.78 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA ──────────────────────────────────────────────
      // Convention solidite (dette incl. leases - cash). Tend vers 0,2x. Sur base
      // financiere (notes - cash & placements), Autodesk est net cash ~490 M$.
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        data: [
          { year: 2022, value: 1.16 },
          { year: 2023, value: 0.40 },
          { year: 2024, value: 0.37 },
          { year: 2025, value: 0.43 },
          { year: 2026, value: 0.19 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 0.51 },
              { year: 2023, value: 0.51 },
              { year: 2024, value: 0.51 },
              { year: 2025, value: 0.51 },
              { year: 2026, value: 0.51 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      // CA / Total actifs. Progression reguliere : levier operationnel.
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2022, value: 0.51 },
          { year: 2023, value: 0.53 },
          { year: 2024, value: 0.56 },
          { year: 2025, value: 0.57 },
          { year: 2026, value: 0.58 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 0.55 },
              { year: 2023, value: 0.55 },
              { year: 2024, value: 0.55 },
              { year: 2025, value: 0.55 },
              { year: 2026, value: 0.55 },
            ],
          },
        ],
      },

      // ── Variation annuelle du nombre d'actions diluees (%) ───────────────
      // Negatif = reduction nette du nombre d'actions (rachats > dilution SBC).
      // 5 M d'actions rachetees en FY2026 (1,4 Md$). Capacite restante ~7,5 Md$.
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2023, value: -1.8 },
          { year: 2024, value: -0.9 },
          { year: 2025, value: 0.5  },
          { year: 2026, value: -0.9 },
        ],
      },

      // ── R&D en % du CA ────────────────────────────────────────────────────
      // 23-25 % du CA. Investissement plateforme + IA (AutoCAD AI, Forma, Fusion).
      {
        label: 'RD_CA',
        name:  'R&D en % du CA',
        unit:  '%',
        data: [
          { year: 2022, value: 25.4 },
          { year: 2023, value: 24.4 },
          { year: 2024, value: 25.0 },
          { year: 2025, value: 24.2 },
          { year: 2026, value: 22.8 },
        ],
      },

      // ── Allocation du capital - rachats vs Capex (M$) ─────────────────────
      // Pas de dividende : retour actionnaire 100 % rachats. 1,4 Md$ en FY2026.
      {
        label: 'Capex_Action',
        name:  'Allocation du capital',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2022, value: 1079 },
          { year: 2023, value: 1101 },
          { year: 2024, value: 795 },
          { year: 2025, value: 852 },
          { year: 2026, value: 1402 },
        ],
        competitors: [
          {
            name:  "Rachats d'actions",
            color: '#2D6A4F',
            data: [
              { year: 2022, value: 1079 },
              { year: 2023, value: 1101 },
              { year: 2024, value: 795 },
              { year: 2025, value: 852 },
              { year: 2026, value: 1402 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2022, value: 56 },
              { year: 2023, value: 40 },
              { year: 2024, value: 31 },
              { year: 2025, value: 40 },
              { year: 2026, value: 43 },
            ],
          },
        ],
      },

    ],
  },
}
