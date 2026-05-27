// ─────────────────────────────────────────────────────────────────────────────
// ServiceNow, Inc. - Valeur suivie
// Ticker : NOW | NYSE | USD | CTO
// Derniere mise a jour : 2026-05-27
// Sources : 10-K FY2025 (cloture 31/12/2025), 10-Q Q1-2026, Analyst Day 2025,
//           Excel consolide La These
// ─────────────────────────────────────────────────────────────────────────────
//
// NOTE METHODOLOGIQUE - STOCK SPLIT 5-FOR-1 (DECEMBRE 2025)
//   ServiceNow a procede a un split 5:1 le 17 decembre 2025 (record date 16/12,
//   approuve par le board le 5/12). Toutes les references per share et nombre
//   d'actions dans le 10-K ont ete retroactivement ajustees post-split.
//   Convention La These : tous les chiffres historiques sont retraites
//   post-split (cours, BPA, nombre d'actions diluees) pour coherence.
//   Diluted shares post-split historiques (retraitees) :
//     FY2021 : 1 015,8 M | FY2022 : 1 017,7 M | FY2023 : 1 028,0 M
//     FY2024 : 1 042,1 M | FY2025 : 1 046,7 M (deja post-split dans 10-K)
//
// NOTE METHODOLOGIQUE - BPA DE REFERENCE
//   BPA de reference pour calculateur PER : Adjusted EPS (Non-GAAP)
//   FY2025 = 3,51 $ post-split (3 669 M$ Non-GAAP NI / 1 046,7 M shares)
//   Ajustements Non-GAAP : SBC restee dans Non-GAAP (recurrence), amortissement
//   intangibles, business combination costs, severance, contract termination,
//   impairment, legal settlements - methodologie ServiceNow standard.
//   GAAP EPS FY2025 = 1,67 $ post-split, gonfle par PPA Moveworks (505 M$
//   developed tech sur ~5-7 ans) et historiquement par tax reversal 2023.
//
// NOTE METHODOLOGIQUE - BETA
//   Beta source : calcul vs S&P 500 Total Return (SPXTR) mensuel 5 ans
//   (convention La These US, alignee Damodaran). Beta 0,87 (Excel).
//
// NOTE METHODOLOGIQUE - WACC
//   Rf UST 10Y au 31/12/2025 : 4,09 %
//   ERP Damodaran US au 31/12/2025 : 4,23 %
//   Beta : 0,87 (S&P 500 TR) | Re = 4,09 + 0,87 x 4,23 = 7,77 %
//   Rd post-IS : 1,14 % (interest expense 22 M$ sur dette 1 491 M$ x (1-22,7%))
//   D/V : 0,92 % (capitalisation 160 343 M$ vs dette 1 491 M$ a fin 2025)
//   WACC = 99,08% x 7,77% + 0,92% x 1,14% = 7,70 %
//
// PRIX CIBLE - methode PER primaire (doctrine 3 niveaux R10-15 / R10-20 / R12-15)
//   BPA Adj base FY2025 : 3,51 $ | CAGR Bear 14 % / Central 22 % / Bull 28 %
//   PER central retenu : 35x | Horizon 5 ans
//   BPA Adj proj central 5 ans : 3,51 x (1,22)^5 = 9,49 $
//   Prix cible central : 9,49 x 35 = 332,0 $ | MoE Beta x 15 % = 0,87 x 15 % = 13,03 %
//   prixCible (horizon 5 ans, non actualise) : { bas: 289, haut: 375, USD }
//   Zone juste centrale actualisee r=10 % : 332,0 / (1,10)^5 = 206,2 $
//   Zone juste centrale actualisee r=12 % : 332,0 / (1,12)^5 = 188,4 $
//
//   Niveaux personnels ancrage PER (doctrine La These 3 niveaux) :
//   Surveillance = R10 MoS 15 % = 206,2 x 0,85 = 175,3 $
//   Premier renforcement = R10 MoS 20 % = 206,2 x 0,80 = 165,0 $
//   Achat fort = R12 MoS 15 % = 188,4 x 0,85 = 160,1 $
//   Cours actuel 99,92 $ (26/05/2026) : SOUS Achat fort PER -38 %
//   Lecture editoriale : opportunite maximale, initiation immediate sans attendre.
//   DCF en complement (convergence) : Prix/action central actualise 195,1 $,
//   ecart 6 % sur la zone juste centrale - methodes convergentes.
//   Position Pierre : surveillance (initiation majeure imminente)
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const NOW: AnalyseCard = {
  slug:           'now',
  type:           'valeur',
  title:          'ServiceNow, Inc.',
  ticker:         'NOW',
  secteur:        'Technologie',
  geo:            'États-Unis',
  conviction:     'forte',                // a valider en Verdict ; pas exceptionnelle (concurrence Microsoft / Salesforce)
  positionnement: 'achat fort',         // a valider en Verdict apres echange avec Pierre
  lastUpdated:    '2026-05-27',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',                // these compounder, premier checkpoint 5 ans
  excerpt:        "Plateforme leader des workflows d'entreprise. Renewal rate 98 %, RPO 28 Mds$, marge FCF 35 %. Stack AI Now Assist + acquisitions Moveworks et Armis. Correction tech 2026 ouvre fenetre d'entree apres prime de qualite historique.",
  glossaire:      ['moat', 'saas', 'roic', 'wacc', 'free-cash-flow', 'rpo'],
  logo:           '/analyse/now.png',
  // PER central 5 ans non actualise : 9,49 x 35x = 332 $ | MoE 13,03 % | { bas: 289, haut: 375 }
  prixCible:      { bas: 289, haut: 375, devise: 'USD' },
  marginOfSafety: 'forte',                // Cours 99,92 $ vs zone juste centrale ~195 $ = decote 49 %
  readingTime:    50,
  onePager: {
    thesis:    "La plateforme de workflow qui tient l'entreprise : 98 % renewal, RPO 28 Mds$, FCF margin 35 %. Le standard B2B silencieux.",
    cours:     99.92,
    coursDate: '2026-05-26',
    devise:    'USD',
    range52w:  { low: 85.44, high: 126.67 },
  },

  // ── Metriques snapshot FY2025 (post-split, cours cloture 31/12/2025 153,19 $) ─
  // PER GAAP : 153,19 / 1,67 = 91,7x (distordu par PPA + tax reversal historique)
  // PER Adj  : 153,19 / 3,51 = 43,7x (cours / Adjusted EPS Non-GAAP)
  // EV/EBITDA : EV 158 108 / EBITDA 3 183 = 49,7x
  // FCF Yield (EV) : 4 576 / 158 108 = 2,9 %
  // ROIC La These : NOPAT 1 410 / IC cash-adjusted 12 964 = 10,9 %
  // WACC FY2025 : 7,70 % (Re 7,77 %, Rd ap. IS 1,14 %, E/V 99,1 %)
  // Dette nette / EBITDA : -2 235 / 3 183 = -0,70x (tresorerie nette structurelle)
  // DSO : creances 2 627 / CA 13 278 x 365 = 72 jours
  metrics: {
    per:               43.7,    // Adjusted EPS base
    evEbitda:          49.7,
    fcfYield:          2.9,     // FCF / EV
    roic:              10.9,    // IC cash-adjusted FY2025 : CP 12 964 + max(dette nette,0) = 12 964
    wacc:              7.70,
    detteEbitda:       -0.70,   // Tresorerie nette structurelle
    croissanceCA3ans:  22.4,    // CAGR CA 2022-2025
    croissanceBPA3ans: 43.7,    // CAGR Adj EPS 2022-2025 : 3,51 / 1,18 = 2,97x
    margeEbit:         13.7,    // EBIT GAAP 1 824 / CA 13 278
    margeBrute:        77.5,    // (CA - Cout des ventes) / CA
    payoutRatio:       0,       // Pas de dividende
    currentRatio:      1.00,    // Actifs courants 10 471 / Passifs courants 10 443
    dso:               72.2,    // (Creances 2 627 / CA 13 278) x 365
  },

  // ── Tendances visuelles (badge fleche fiche index) ─────────────────────────
  tendances: {
    per:       'baisse',    // Adj EPS : 142x (2021) -> 44x (2025) : normalisation post-ZIRP
    fcfYield:  'hausse',    // 1,4 % (2021) -> 2,9 % (2025) : croissance FCF + taux normalises
    roic:      'hausse',    // 6,4 % (2021) -> 10,9 % (2025) : levier operationnel SaaS
    margeEbit: 'hausse',    // 4,4 % (2021) -> 13,7 % (2025) : montee marge operationnelle
  },

  // ── Historique des mises a jour ────────────────────────────────────────────
  updates: [
    {
      date: '2026-05-27',
      note: "Creation de la fiche. Donnees FY2025 (cloture 31/12/2025), Q1-2026, Analyst Day 2025, guidance FY2026.",
    },
    {
      date: '2026-07-23',
      note: 'Resultats Q2-2026 attendus. Source : Yahoo Finance API.',
    },
    {
      date: '2027-01-28',
      note: 'Resultats Q4-2026 / FY2026 attendus. Source : Yahoo Finance API.',
    },
  ],

  chartData: {

    // ── Ruptures de serie dans les segments ──────────────────────────────────
    // Moveworks (15/12/2025) et Logik.io (30/05/2025) integrees en FY2025.
    // Effet Subscription marginal sur FY2025 (13 jours Moveworks).
    segmentBreaks: [
      { year: 2025, label: 'Integration Logik.io (05/2025) et Moveworks (12/2025)' },
    ],

    // ── CA FY2021-FY2025 (M$) ────────────────────────────────────────────────
    // CAGR 5 ans : (13 278 / 5 896)^(1/4) - 1 = 22,5 %
    // Croissance FY2025 : +20,9 % YoY ; guidance FY2026 +20,5 a 21 %
    revenue: [
      { year: 2021, value: 5896 },
      { year: 2022, value: 7245 },
      { year: 2023, value: 8971 },
      { year: 2024, value: 10984 },
      { year: 2025, value: 13278 },
    ],

    // ── Repartition geographique FY2025 ──────────────────────────────────────
    // Source : 10-K Note "Geographic Information", base sur localisation client
    // North America incl. Canada | EMEA = Europe + Moyen-Orient + Afrique
    geoRevenue: [
      { region: 'Amérique du Nord',  pct: 62.9 },
      { region: 'EMEA',              pct: 25.6 },
      { region: 'Asie-Pacifique',    pct: 11.5 },
    ],

    // ── Marges FY2021-FY2025 (%) ─────────────────────────────────────────────
    // gross     : (CA - cout des ventes) / CA
    // operating : EBIT GAAP / CA
    // net       : NI GAAP / CA
    // FY2023 marge nette 19,3 % distordue par reversal valuation allowance IS
    // de -723 M$ (liberation deferred tax assets). Marge nette normalisee 2023 ~11 %.
    marges: [
      { year: 2021, gross: 77.1, operating: 4.4,  net: 3.9  },
      { year: 2022, gross: 78.3, operating: 4.9,  net: 4.5  },
      { year: 2023, gross: 78.6, operating: 8.5,  net: 19.3 },
      { year: 2024, gross: 79.2, operating: 12.4, net: 13.0 },
      { year: 2025, gross: 77.5, operating: 13.7, net: 13.2 },
    ],

    // ── ROIC La These FY2021-FY2025 (%) ──────────────────────────────────────
    // IC = CP + max(dette nette, 0). Tresorerie nette structurelle a partir
    // de 2023 -> IC = CP seul.
    // NOPAT = EBIT x (1 - taux IS effectif). Taux 2023 negatif (-71,7 %) du au
    // tax reversal -> NOPAT 2023 reconstruit hors reversal pour comparabilite :
    // EBIT 762 x (1 - 18 %) = 625 M$ (taux normalise 2024-2025).
    roic: [
      { year: 2021, value: 6.4  },
      { year: 2022, value: 5.7  },
      { year: 2023, value: 17.2 },    // Distorde par tax reversal, voir commentaire
      { year: 2024, value: 11.6 },
      { year: 2025, value: 10.9 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // Spread positif structurel 2024-2025 (+3 a +4 pts). FY2022 negatif (-2,6 pt)
    // : remontee post-ZIRP du WACC plus rapide que progression de la rentabilite.
    roicVsWacc: [
      { year: 2021, value: 6.4,  wacc: 5.08 },
      { year: 2022, value: 5.7,  wacc: 8.33 },
      { year: 2023, value: 17.2, wacc: 7.48 },
      { year: 2024, value: 11.6, wacc: 7.88 },
      { year: 2025, value: 10.9, wacc: 7.70 },
    ],

    // ── Free Cash Flow FY2021-FY2025 (M$) ────────────────────────────────────
    // FCF = OCF - Capex industriel (purchases of property and equipment)
    // Definition standard La These. Note : ServiceNow publie un FCF Non-GAAP
    // qui rajoute legal settlements et business combination costs (typique
    // pour communication investisseurs), non utilise ici.
    fcf: [
      { year: 2021, value: 1799 },
      { year: 2022, value: 2173 },
      { year: 2023, value: 2704 },
      { year: 2024, value: 3415 },
      { year: 2025, value: 4576 },
    ],

    // ── CA par decomposition Subscription / Professional Services (M$) ───────
    // ServiceNow communique un single reportable segment GAAP (Note 17 du 10-K).
    // La decomposition Subscription / Professional Services est la seule
    // publiee de maniere consolidee. Mix Subscription : 94,5 % (2021) -> 97,0 %
    // (2025) : levier operationnel positif structurel.
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'Subscription',            value: 5573 },
          { name: 'Professional Services',   value: 323 },
        ]},
        { year: 2022, segments: [
          { name: 'Subscription',            value: 6891 },
          { name: 'Professional Services',   value: 354 },
        ]},
        { year: 2023, segments: [
          { name: 'Subscription',            value: 8680 },
          { name: 'Professional Services',   value: 291 },
        ]},
        { year: 2024, segments: [
          { name: 'Subscription',            value: 10646 },
          { name: 'Professional Services',   value: 338 },
        ]},
        { year: 2025, segments: [
          { name: 'Subscription',            value: 12883 },
          { name: 'Professional Services',   value: 395 },
        ]},
      ],
    },

    // ── Graphiques de valorisation comparee ──────────────────────────────────
    // Sources : Excel de Pierre (Comparaison sectorielle), cours au moment de
    // l'extraction (mai 2026). ServiceNow se paye une prime structurelle sur
    // les pairs SaaS / tech sur PER et EV/EBITDA, justifiee par sa croissance
    // (22 % vs mediane 16,5 %), son renewal rate 98 % et son RPO 28 Mds$.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'ServiceNow vs mediane sectorielle (SaaS / tech enterprise)',
        data: [
          { label: 'PER',             valeur: 59.8, secteur: 24.5 },
          { label: 'EV/EBITDA',       valeur: 35.5, secteur: 20.6 },
          { label: 'P/FCF',           valeur: 22.7, secteur: 17.6 },
          { label: 'Marge EBIT %',    valeur: 13.3, secteur: 13.6 },
          { label: 'ROIC %',          valeur: 8.5,  secteur: 7.1  },
          { label: 'FCF Yield %',     valeur: 4.4,  secteur: 5.7  },
          { label: 'Dette/EBITDA',    valeur: -0.5, secteur: 1.5  },
          { label: 'TCAC CA 3 ans %', valeur: 22.4, secteur: 16.5 },
        ],
      },
      {
        id: 'vs_msft', type: 'radar',
        title: 'ServiceNow vs Microsoft (MSFT)',
        concurrent1: 'Microsoft',
        data: [
          { label: 'PER',             valeur: 59.8, concurrent1: 24.8 },
          { label: 'EV/EBITDA',       valeur: 35.5, concurrent1: 17.1 },
          { label: 'P/FCF',           valeur: 22.7, concurrent1: 43.2 },
          { label: 'Marge EBIT %',    valeur: 13.3, concurrent1: 46.3 },
          { label: 'ROIC %',          valeur: 8.5,  concurrent1: 21.5 },
          { label: 'FCF Yield %',     valeur: 4.4,  concurrent1: 2.3  },
          { label: 'Dette/EBITDA',    valeur: -0.5, concurrent1: 0.2  },
          { label: 'TCAC CA 3 ans %', valeur: 22.4, concurrent1: 18.3 },
        ],
      },
      {
        id: 'vs_crm', type: 'radar',
        title: 'ServiceNow vs Salesforce (CRM)',
        concurrent1: 'Salesforce',
        data: [
          { label: 'PER',             valeur: 59.8, concurrent1: 23.0 },
          { label: 'EV/EBITDA',       valeur: 35.5, concurrent1: 13.9 },
          { label: 'P/FCF',           valeur: 22.7, concurrent1: 10.2 },
          { label: 'Marge EBIT %',    valeur: 13.3, concurrent1: 19.2 },
          { label: 'ROIC %',          valeur: 8.5,  concurrent1: 5.5  },
          { label: 'FCF Yield %',     valeur: 4.4,  concurrent1: 9.8  },
          { label: 'Dette/EBITDA',    valeur: -0.5, concurrent1: 0.8  },
          { label: 'TCAC CA 3 ans %', valeur: 22.4, concurrent1: 12.1 },
        ],
      },
      {
        id: 'vs_sap', type: 'radar',
        title: 'ServiceNow vs SAP (SAP)',
        concurrent1: 'SAP',
        data: [
          { label: 'PER',             valeur: 59.8, concurrent1: 24.3 },
          { label: 'EV/EBITDA',       valeur: 35.5, concurrent1: 15.0 },
          { label: 'P/FCF',           valeur: 22.7, concurrent1: 21.0 },
          { label: 'Marge EBIT %',    valeur: 13.3, concurrent1: 30.0 },
          { label: 'ROIC %',          valeur: 8.5,  concurrent1: 9.3  },
          { label: 'FCF Yield %',     valeur: 4.4,  concurrent1: 4.8  },
          { label: 'Dette/EBITDA',    valeur: -0.5, concurrent1: -0.1 },
          { label: 'TCAC CA 3 ans %', valeur: 22.4, concurrent1: 6.0  },
        ],
      },
    ],

    // ── Metriques libres sur 5 ans ───────────────────────────────────────────
    metricHistory: [

      // ── EV/EBITDA historique ─────────────────────────────────────────────
      // EV = capi (cours close 31/12 x diluted shares post-split) + dette nette
      // Moyenne 5 ans : 83,0x (gonfle par 2021 a 128,8x - sommet ZIRP tech)
      // Mediane 5 ans : 78,0x (plus representative)
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 128.8 },
          { year: 2022, value: 68.5  },
          { year: 2023, value: 79.0  },
          { year: 2024, value: 88.9  },
          { year: 2025, value: 49.7  },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 83.0 },
              { year: 2022, value: 83.0 },
              { year: 2023, value: 83.0 },
              { year: 2024, value: 83.0 },
              { year: 2025, value: 83.0 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (M$) ───────────────────────────────────────────
      // Capex = purchases of property and equipment (PP&E + datacenters)
      // FCF margin 30 % stable 2021-2024, monte a 34,5 % en 2025
      // Cash conversion FCF/EBITDA 144 % en 2025 (typique SaaS recurrent)
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Operationnel',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 2191 },
          { year: 2022, value: 2723 },
          { year: 2023, value: 3398 },
          { year: 2024, value: 4267 },
          { year: 2025, value: 5444 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 1799 },
              { year: 2022, value: 2173 },
              { year: 2023, value: 2704 },
              { year: 2024, value: 3415 },
              { year: 2025, value: 4576 },
            ],
          },
          {
            name:   'Capex (PP&E)',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 392 },
              { year: 2022, value: 550 },
              { year: 2023, value: 694 },
              { year: 2024, value: 852 },
              { year: 2025, value: 868 },
            ],
          },
        ],
      },

      // ── Adjusted EPS FY2021-FY2025 ($, post-split) ────────────────────────
      // Source : reconciliation GAAP -> Non-GAAP communiquee par ServiceNow
      // (releases trimestriels). Diluted shares post-split.
      // CAGR Adj EPS 2021-2025 : 3,51 / 0,91 = 3,86x sur 4 ans = +40,1 %
      // CAGR Adj EPS 3 ans (2022-2025) : 3,51 / 1,18 = 2,97x = +43,7 %
      {
        label: 'EPS',
        name:  'Adjusted EPS (post-split)',
        unit:  '$',
        data: [
          { year: 2021, value: 0.91 },
          { year: 2022, value: 1.18 },
          { year: 2023, value: 2.15 },
          { year: 2024, value: 2.78 },
          { year: 2025, value: 3.51 },
        ],
      },

      // ── Carnet de commandes (RPO et cRPO, en milliards $) ─────────────────
      // RPO = contracted revenue not yet recognized. cRPO = RPO sur 12 mois.
      // RPO FY2025 28,2 Mds$ (+27 % YoY) | cRPO 12,97 Mds$ (+25 % YoY)
      // Equivalent a 2,1 annees de CA en visibilite contractuelle.
      // Note : non publie en FY2021, debut serie 2022.
      {
        label: 'Orderbook',
        name:  'Remaining Performance Obligations',
        unit:  'Md$',
        yMin:  0,
        data: [
          { year: 2022, value: 13.2  },
          { year: 2023, value: 17.8  },
          { year: 2024, value: 22.2  },
          { year: 2025, value: 28.2  },
        ],
        competitors: [
          {
            name:  'cRPO (12 prochains mois)',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 6.7  },
              { year: 2023, value: 8.6  },
              { year: 2024, value: 10.4 },
              { year: 2025, value: 13.0 },
            ],
          },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) ─────────────────────────────────────────
      // ROCE = NOPAT / (CP + dette totale - tresorerie) - actifs operationnels
      // Convergence ROCE / ROIC pour ServiceNow (tresorerie nette structurelle)
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 5.0  },
          { year: 2022, value: 5.4  },
          { year: 2023, value: 8.4  },
          { year: 2024, value: 12.3 },
          { year: 2025, value: 12.6 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 5.08 },
              { year: 2022, value: 8.33 },
              { year: 2023, value: 7.48 },
              { year: 2024, value: 7.88 },
              { year: 2025, value: 7.70 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 6.4  },
              { year: 2022, value: 5.7  },
              { year: 2023, value: 17.2 },
              { year: 2024, value: 11.6 },
              { year: 2025, value: 10.9 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (%) ─────────────────────────────────────────────────
      // ROIIC(N) = delta NOPAT(N) / delta IC(N-1)
      // FY2023 valeur exceptionnellement elevee (75 %) due au tax reversal qui
      // gonfle NI mais a faible variation IC. Valeur non representative.
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel',
        unit:  '%',
        data: [
          { year: 2022, value: 6.0  },
          { year: 2023, value: 75.3 },     // Distorde par tax reversal
          { year: 2024, value: -7.4 },
          { year: 2025, value: 14.7 },
        ],
      },

      // ── ROIIC glissant multi-periodes (%) ────────────────────────────────
      // Lissage utile pour ServiceNow : la volatilite annuelle est forte du
      // fait des distorsions IS et des acquisitions. Le ROIIC 3 ans (19 %) et
      // 4 ans (17 %) sont des indicateurs plus stables de la productivite du capital.
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 a 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 14.7 },
          { year: 2, value: 2.2  },
          { year: 3, value: 19.0 },
          { year: 4, value: 17.3 },
        ],
      },

      // ── PER historique (Adjusted EPS) et PER ajuste taux ─────────────────
      // Base : Adj EPS (Non-GAAP). PER GAAP non utilise (volatil distorsions).
      // PER ajuste taux : PER(N) x (Re_moyen_planche / Re(N))
      // Re moyen 5 ans (planche 2 % en 2021) : 7,66 %
      // 2021 PER tres eleve (143x) reflete sommet ZIRP tech : normalisation
      // structurelle a partir de 2022. Moyenne 5 ans : 78,4x (gonflee par 2021).
      {
        label: 'PER',
        name:  'PER (Adjusted EPS)',
        unit:  'x',
        data: [
          { year: 2021, value: 142.7 },
          { year: 2022, value: 65.3  },
          { year: 2023, value: 64.0  },
          { year: 2024, value: 76.3  },
          { year: 2025, value: 43.7  },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 78.4 },
              { year: 2022, value: 78.4 },
              { year: 2023, value: 78.4 },
              { year: 2024, value: 78.4 },
              { year: 2025, value: 78.4 },
            ],
          },
          {
            name:   'PER ajuste taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 192.2 },
              { year: 2022, value: 55.7  },
              { year: 2023, value: 63.4  },
              { year: 2024, value: 72.1  },
              { year: 2025, value: 43.1  },
            ],
          },
        ],
      },

      // ── FCF Yield historique (%) ─────────────────────────────────────────
      // FCF Yield (cap) = FCF / capitalisation boursiere FY-end (post-split)
      // 2021 base capitalisation 131 871 M$, FCF 1 799 -> FCF Yield 1,4 %
      // 2025 base capitalisation 160 343 M$, FCF 4 576 -> FCF Yield 2,9 %
      // Spread vs UST10Y reste negatif (rente de croissance, pas obligataire)
      {
        label: 'FCFy',
        name:  'FCF Yield (capitalisation)',
        unit:  '%',
        data: [
          { year: 2021, value: 1.4 },
          { year: 2022, value: 2.8 },
          { year: 2023, value: 1.9 },
          { year: 2024, value: 1.5 },
          { year: 2025, value: 2.9 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.1 },
              { year: 2022, value: 2.1 },
              { year: 2023, value: 2.1 },
              { year: 2024, value: 2.1 },
              { year: 2025, value: 2.1 },
            ],
          },
          {
            name:  'UST 10Y (taux sans risque)',
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

      // ── DSO / DIO / DPO / CCC (jours) ─────────────────────────────────────
      // SaaS pur : DIO = 0 (pas de stocks physiques).
      // DSO 72 j stable (typique B2B grands comptes, factures trimestrielles)
      // DPO variable car fournisseurs technologiques (cloud, datacenter) payes
      // a different rythme. CCC autour de 47-58 j, peu informatif pour SaaS.
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 86.0 },
          { year: 2022, value: 86.9 },
          { year: 2023, value: 82.8 },
          { year: 2024, value: 74.4 },
          { year: 2025, value: 72.2 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 24.0 },
              { year: 2022, value: 63.6 },
              { year: 2023, value: 23.9 },
              { year: 2024, value: 10.9 },
              { year: 2025, value: 25.0 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 62.0 },
              { year: 2022, value: 23.3 },
              { year: 2023, value: 58.9 },
              { year: 2024, value: 63.5 },
              { year: 2025, value: 47.2 },
            ],
          },
        ],
      },

      // ── Current Ratio ─────────────────────────────────────────────────────
      // Autour de 1,0x : passifs courants tires par deferred revenue qui
      // represente 8 314 M$ en 2025 (subscription prepayee). Le FCF libre
      // 4,6 Mds$ couvre largement les echeances effectives de dette ST.
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.05 },
          { year: 2022, value: 1.11 },
          { year: 2023, value: 1.06 },
          { year: 2024, value: 1.10 },
          { year: 2025, value: 1.00 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.06 },
              { year: 2022, value: 1.06 },
              { year: 2023, value: 1.06 },
              { year: 2024, value: 1.06 },
              { year: 2025, value: 1.06 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA ──────────────────────────────────────────────
      // Tresorerie nette structurelle depuis 2021 : entreprise non endettee.
      // Convention La These : dette nette = total dette - cash & equivalents
      // (sans MS marketable securities). Si on integre MS, tresorerie nette
      // grimpe a 8,6 Mds$ (incl. 6,3 Md$ de marketable securities).
      // Note : a venir, financement Armis Security (close H2 2026, 7,75 Mds$)
      // necessitera ~5-7 Mds$ de dette nouvelle -> bilan post-Armis ~neutre.
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: -0.15 },
          { year: 2022, value: 0.01  },
          { year: 2023, value: -0.23 },
          { year: 2024, value: -0.33 },
          { year: 2025, value: -0.70 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: -0.28 },
              { year: 2022, value: -0.28 },
              { year: 2023, value: -0.28 },
              { year: 2024, value: -0.28 },
              { year: 2025, value: -0.28 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      // CA / Total actifs. Bilan croit avec acquisitions et marketable securities.
      // Stable autour de 0,51-0,55x : business asset-medium pour SaaS (datacenters
      // representent une partie significative des actifs immobilises).
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.55 },
          { year: 2022, value: 0.54 },
          { year: 2023, value: 0.52 },
          { year: 2024, value: 0.54 },
          { year: 2025, value: 0.51 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.53 },
              { year: 2022, value: 0.53 },
              { year: 2023, value: 0.53 },
              { year: 2024, value: 0.53 },
              { year: 2025, value: 0.53 },
            ],
          },
        ],
      },

      // ── Variation annuelle du nombre d'actions diluees (post-split, %) ────
      // Dilution structurelle 0,2-1,4 % par an (SBC absorbe par rachats nets).
      // 2025 : +0,4 % (acquisition Moveworks 10,3 M shares + Logik.io 2,1 M)
      // Le programme de rachat (1 840 M$ en 2025 vs 696 M$ en 2024) compense
      // la SBC (1 955 M$ FY2025 = 14,7 % du CA).
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: 0.18 },
          { year: 2023, value: 1.01 },
          { year: 2024, value: 1.38 },
          { year: 2025, value: 0.44 },
        ],
      },

      // ── R&D en % du CA ────────────────────────────────────────────────────
      // R&D structurellement eleve 22-24 % : investissement IA / Now Assist /
      // workflow data fabric / Industry verticals. Niveau coherent avec
      // ambition technologique mais pesant sur la marge EBIT court terme.
      {
        label: 'RD_CA',
        name:  'R&D en % du CA',
        unit:  '%',
        data: [
          { year: 2021, value: 23.7 },
          { year: 2022, value: 24.4 },
          { year: 2023, value: 23.7 },
          { year: 2024, value: 23.2 },
          { year: 2025, value: 22.3 },
        ],
      },

      // ── Allocation du capital - rachats vs Capex (M$) ─────────────────────
      // Pas de dividende. Rachats acceleres a partir de 2023 (autorisation
      // mai 2023 1,5 Md$ + janvier 2025 nouvelle autorisation 3 Mds$).
      // Capex tracking proche du FCF de croissance.
      {
        label: 'Capex_Action',
        name:  "Allocation du capital",
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 0    },
          { year: 2022, value: 0    },
          { year: 2023, value: 538  },
          { year: 2024, value: 696  },
          { year: 2025, value: 1840 },
        ],
        competitors: [
          {
            name:  "Rachats d'actions",
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 0    },
              { year: 2022, value: 0    },
              { year: 2023, value: 538  },
              { year: 2024, value: 696  },
              { year: 2025, value: 1840 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 392 },
              { year: 2022, value: 550 },
              { year: 2023, value: 694 },
              { year: 2024, value: 852 },
              { year: 2025, value: 868 },
            ],
          },
        ],
      },

    ],
  },
}
