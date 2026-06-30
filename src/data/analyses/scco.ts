// ─────────────────────────────────────────────────────────────────────────────
// Southern Copper Corporation (SCCO) - Analyse ponctuelle
// Dernière mise à jour : juin 2026
// Sources : 10-K 2025 (et 10-K 2021-2024 pour les séries), 10-Q Q1-2026, 8-K résultats
//           Q1-2026, proxy 2026, présentations investisseurs ; prix des métaux : 10-K (LME) ;
//           multiples de marché : API Yahoo (base TTM homogène).
// ─────────────────────────────────────────────────────────────────────────────
//
// CONVENTION DEVISE
//   USD natif partout (devise fonctionnelle et de reporting ; cotation primaire NYSE en USD,
//   cotation secondaire BVL Lima). Pas de cas devise multiple (contraste CMOC). Le label
//   « euros » de la ligne EPS du modèle Excel est une coquille de template (comme Autodesk,
//   Kri Kri) : les chiffres sont en USD. Exercice calendaire clos le 31/12 (confirmé tous onglets).
//
// PROFIL = PRODUCTEUR DE CUIVRE PUR (le plus bas coût et le plus rentable du secteur)
//   Cuivre = 74,8 % du CA ; sous-produits molybdène (10,5 %), argent (7,3 %), zinc (3,9 %),
//   autres (3,6 %), traités EN CRÉDIT DE COÛT (méthode « cash cost net of by-product revenues »).
//   Cinq mines : Toquepala + Cuajone (Pérou), Buenavista + La Caridad + IMMSA (Mexique).
//   Production cuivre 2025 : 2 035,6 M lbs produites (~923 kt) ; guidance 2026 : 911 kt.
//   Répartition par production : Pérou 43 %, Mexique 57 %.
//   Coût cash net de sous-produits 2025 : 0,58 $/lb (le plus bas du secteur ; avant crédit 2,17 $/lb).
//   Prix cuivre réalisé : 4,30 (2021) / 3,93 (2022) / 3,87 (2023) / 4,23 (2024) / 4,85 (2025) $/lb.
//   Filiale CONTRÔLÉE par Grupo México (88,9 % via Americas Mining Corp), flottant ~11 %.
//
// WACC (le piège du dossier, tranché)
//   Rf = UST 10 ans 4,09 % (label « bund » de l'onglet = coquille ; la colonne « indice sans risque »
//        porte le vrai UST 4,31 % au 30/06/2026, devise de reporting USD). β = 1,1146 régressé vs
//        S&P 500 Total Return (SLOPE mensuel, convention La Thèse). ERP = US mature 4,23 % + CRP.
//   CRP : l'Excel ne pondère QUE le Mexique (1,6 %). Retraitement retenu (accord Pierre) : CRP
//        MULTI-PAYS pondéré par la PRODUCTION des pays d'opération - Pérou 43 % (Damodaran Baa1
//        ~1,31 %) + Mexique 57 % (1,60 %) = CRP blend ~1,48 %. ERP 5,71 %, Re 10,45 %, WACC ~10,0 %
//        (vs Excel 10,14 % Mexique seul ; écart minime). Prolongement multi-pays de la règle
//        Lundin/K92/CMOC (pays d'OPÉRATION, pas de cotation).
//   POINT CLÉ : contrairement à Lundin (Équateur 11,85 %, WACC 25 %) ou CMOC (RDC 8,41 %, WACC 18 %),
//        SCCO opère en juridictions investment-grade (Mexique Baa2, Pérou Baa1) : le CRP est MODESTE
//        (~1,5 %), le WACC ~10 %. Le risque Pérou (Tia Maria, conflits sociaux, fiscalité minière)
//        est OPÉRATIONNEL/permitting, PAS souverain : il n'est PAS capté par ce CRP investment-grade.
//        Double lentille : convention minière 5 %/8 % vs WACC plein ~10 %.
//
// VALORISATION : NAV vie-de-mine par DECK DE CUIVRE (un seul métal, by-products en crédit de coût)
//   Decks : bear 3,80 (prix des réserves) / central 4,40 / bull 5,20 $/lb (proche spot record 5,68).
//   Méthode : FCFF steady-state ~ NOPAT(deck) actualisé sur la vie de mine (30 ans, conservateur
//   vs 20-35 ans/mine + ressources), + trésorerie nette - dette. Sensibilité disclosée :
//   +0,10 $/lb cuivre = +120 M$ de RN (donc +1 887 M$ d'EBIT pré-impôt par $/lb).
//   RÉSULTAT (le pivot) : P/NAV central 2,5x (5 %) / 3,5x (8 %) ; bull 2,0x (5 %). Même en cuivre
//   PERPÉTUEL à 5,20 $ actualisé à 5 %, NAV ~114 $ -> P/NAV 1,5x. SCCO est PLUS cher sur NAV que
//   Lundin (1,7x). Complété par EV/EBITDA forward + PER en cross-check. DCF perpétuel Excel
//   (central 47 $) conceptuellement faux ici (price-taker, actif fini) : neutralisé.
//
// NOTES MÉTHODOLOGIQUES
//   ROIC La Thèse : NOPAT / IC, dette plancher 0, goodwill inclus. 2025 = 31,8 % (NOPAT 4 452,6 /
//        IC 13 994). Taux d'IS POSITIF (36,4 %) : pas de bug de signe (contraste Autodesk).
//   EBITDA = EBIT 7 001,8 + D&A 868,4 = 7 870,2 (D&A réel, pas de troncature). FCF = OCF 4 752,3 -
//        capex 1 325,3 = 3 427,0 (signe correct). EV/EBITDA sanity-check OK vs Yahoo.
//   Dividende : CASH 3,10 $/action au titre de 2025 (+ stock dividend 3,50 $, NON-CASH, qui dilue
//        ~3,4 %/an - le « DPS 6,6 » de l'Excel additionne les deux). Rendement cash ~1,8 %. Payout
//        cash (dividendes payés / RN) 2025 = 57 %. Le graphe Dividendes trace le CASH seul.
//   Snapshot : structure FY2025 (USD) figée ; valorisation au COURS SPOT 174,11 $ (NYSE, 30/06/2026).
//   Pipeline organique : Tia Maria (Pérou, ~120 kt/an SX-EW, bloqué ~15 ans par conflits sociaux),
//        El Pilar, Los Chancas, Michiquillay (Pérou), El Arco (Mexique), Buenavista Zinc (achevé 2024).
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const scco: AnalyseCard = {
  slug:           'scco',
  type:           'ponctuelle',            // non détenue, pas de suivi trimestriel engagé
  title:          'Southern Copper',
  ticker:         'SCCO',                  // Yahoo ; cotation NYSE (USD), secondaire BVL Lima
  secteur:        'Matériaux',
  geo:            'Amériques',             // actifs 100 % Pérou + Mexique
  conviction:     'forte',                 // meilleur actif cuivre du monde (coût le plus bas, réserves les plus longues, ROIC 32 %, juridictions investment-grade) ; mais price-taker, filiale contrôlée, risque Pérou : pas exceptionnelle
  positionnement: 'surveillance',          // hors position : qualité réelle, mais payé 2,5-3,5x NAV et 33x bénéfices de pic
  lastUpdated:    '2026-06-30',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Le producteur de cuivre le plus rentable et au coût le plus bas du monde, aux plus longues réserves, en juridictions investment-grade. Mais aussi le plus cher à acheter : payé 2,5 à 3,5 fois sa valeur d'actif et 33 fois des bénéfices de haut de cycle.",
  glossaire:      ['cuivre', 'nav-minier', 'aisc', 'prime-de-risque-pays', 'roic', 'wacc'],
  logo:           '/analyse/scco.png',
  prixCible:      { bas: 80, haut: 115, devise: 'USD' },   // central horizon ~97 $ (NAV bull deck à la convention 5 % + optionnalité réserves/pipeline) +/- MoE (beta 1,1146 x 15 % = 16,7 %)
  marginOfSafety: 'négative',                              // spot 174 très au-dessus de la NAV (P/NAV 2,5-3,5x), au-dessus de toutes les lentilles
  readingTime:    42,
  onePager: {
    thesis:    "Le cuivre le moins cher à produire du monde, mais le plus cher à acheter : coût 0,58 $/lb, ROIC 32 %, payé 2,5x sa valeur d'actif.",
    cours:     174.11,                 // cours NYSE (USD) au 30/06/2026
    coursDate: '2026-06-30',
    devise:    'USD',
    range52w:  { low: 85.51, high: 221.67 },   // extrêmes intraday 52 semaines (USD, NYSE)
  },

  // ── Métriques snapshot ─────────────────────────────────────────────────────
  // Structure FY2025 (USD) ; valorisation au cours spot 174,11 $ (NYSE).
  metrics: {
    per:               33.2,   // Cours spot 174,11 / EPS FY2025 5,24 ; forward 2026E plus haut (Yahoo trailing 29,5x au relevé, cours plus bas)
    evEbitda:          18.7,   // EV (cap 143 919 + dette nette 2 889 = 146 808) / EBITDA 7 870 (médiane pairs ~9-10x)
    fcfYield:           2.3,   // FCF 3 427 / EV 146 808 (capex en hausse, pipeline qui démarre)
    roic:              31.8,   // NOPAT 4 452,6 / IC 13 994 - FY2025 (méthode La Thèse, taux d'IS positif)
    wacc:              10.0,   // CAPM : Rf 4,09 % + bêta 1,1146 x ERP 5,71 % (dont CRP blend Pérou/Mexique ~1,48 %)
    detteEbitda:        0.37,  // Dette nette 2 889 / EBITDA 7 870 - levier très bas
    croissanceCA3ans:  10.1,   // TCAC CA 2022-2025 (effet prix cuivre + volume)
    croissanceBPA3ans: 15.4,   // TCAC BPA 2022-2025
    margeEbit:         52.2,   // EBIT 7 001,8 / CA 13 420 - parmi les plus élevées du secteur
    margeBrute:        60.1,   // Marge brute FY2025
    payoutRatio:        0.57,  // Dividendes cash payés 2 485 / RN 4 335 (le stock dividend, non-cash, est exclu)
    currentRatio:       3.89,  // Actifs courants 8 352 / passifs courants 2 145
    dso:               55.0,   // Créances clients / CA - normal pour un vendeur de métal à crédit court
  },

  tendances: {
    per:       'hausse',   // re-rating avec la flambée du cuivre (13x en 2021 -> 33x au spot)
    fcfYield:  'baisse',   // cours en forte hausse + capex de croissance qui remonte
    roic:      'hausse',   // 28,5 % (2021) -> 19,4 % (2023) -> 31,8 % (2025) : effet prix cuivre
    margeEbit: 'hausse',   // 42,4 % (2023) -> 52,2 % (2025) - levier opérationnel sur le cuivre
  },

  updates: [
    {
      date: '2026-06-30',
      note: "Création de la fiche (analyse ponctuelle). Données FY2025 (10-K) et Q1-2026 (10-Q, 8-K). Production cuivre 2025 : 2 035,6 M lbs (~923 kt), guidance 2026 : 911 kt. Coût cash net de sous-produits 0,58 $/lb (le plus bas du secteur). Prix cuivre réalisé 4,85 $/lb (2025). ROIC 31,8 %, marge EBIT 52,2 %, dette nette 0,37x EBITDA. Contrôle Grupo México 88,9 %. Dividende cash 3,10 $/action (+ stock dividend 3,50 $, dilutif). Valorisation : NAV par deck cuivre (by-products en crédit), P/NAV central 2,5x (5 %) / 3,5x (8 %), bull 2,0x (5 %) ; PER 33x, EV/EBITDA 18,7x. WACC ~10,0 % (CRP blend Pérou/Mexique). Cours ré-ancré au spot 174,11 $ (NYSE). Cuivre spot proche du record (LME 5,68 $/lb atteint en 2025). Conviction : forte. Positionnement : surveillance (non détenue).",
    },
    {
      date: '2026-07-21',
      note: 'Résultats Q2-2026 attendus. Source : Yahoo Finance API.',
    },
  ],

  chartData: {

    // ── CA consolidé sur 5 ans (M$) ───────────────────────────────────────────
    revenue: [
      { year: 2021, value: 10934.1 },
      { year: 2022, value: 10047.9 },
      { year: 2023, value:  9895.8 },
      { year: 2024, value: 11433.4 },
      { year: 2025, value: 13420.0 },
    ],

    // ── Répartition géographique : par localisation des ACTIFS (production cuivre) ──
    // PAS la géographie des ventes (dominée par les hubs de négoce Suisse/Chine/Japon, trompeuse).
    // La valeur et le risque sont en Pérou (Toquepala, Cuajone) et au Mexique (Buenavista, La Caridad, IMMSA).
    geoRevenue: [
      { region: 'Mexique', pct: 57 },
      { region: 'Pérou',   pct: 43 },
    ],

    // ── Répartition du CA par métal (M$) ──────────────────────────────────────
    // Cuivre ~75 % du CA ; molybdène, argent, zinc et autres = sous-produits (~25 %),
    // traités en crédit de coût dans le calcul du coût cash net.
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'Cuivre',     value: 8828.3 },
          { name: 'Molybdène',  value: 1053.1 },
          { name: 'Argent',     value:  474.4 },
          { name: 'Zinc',       value:  289.5 },
          { name: 'Autres',     value:  288.8 },
        ]},
        { year: 2022, segments: [
          { name: 'Cuivre',     value: 7538.8 },
          { name: 'Molybdène',  value: 1192.7 },
          { name: 'Argent',     value:  402.6 },
          { name: 'Zinc',       value:  374.2 },
          { name: 'Autres',     value:  539.7 },
        ]},
        { year: 2023, segments: [
          { name: 'Cuivre',     value: 7591.1 },
          { name: 'Molybdène',  value: 1129.7 },
          { name: 'Argent',     value:  417.6 },
          { name: 'Zinc',       value:  301.4 },
          { name: 'Autres',     value:  456.0 },
        ]},
        { year: 2024, segments: [
          { name: 'Cuivre',     value: 8753.7 },
          { name: 'Molybdène',  value: 1246.4 },
          { name: 'Argent',     value:  588.0 },
          { name: 'Zinc',       value:  434.9 },
          { name: 'Autres',     value:  410.4 },
        ]},
        { year: 2025, segments: [
          { name: 'Cuivre',     value: 10033.8 },
          { name: 'Molybdène',  value:  1405.1 },
          { name: 'Argent',     value:   973.9 },
          { name: 'Zinc',       value:   529.9 },
          { name: 'Autres',     value:   477.2 },
        ]},
      ],
    },

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    marges: [
      { year: 2021, gross: 64.4, operating: 55.5, net: 31.1 },
      { year: 2022, gross: 53.7, operating: 44.1, net: 26.4 },
      { year: 2023, gross: 52.6, operating: 42.4, net: 24.6 },
      { year: 2024, gross: 57.7, operating: 48.6, net: 29.6 },
      { year: 2025, gross: 60.1, operating: 52.2, net: 32.1 },
    ],

    // ── ROIC sur 5 ans (%) ────────────────────────────────────────────────────
    roic: [
      { year: 2021, value: 28.5 },
      { year: 2022, value: 20.5 },
      { year: 2023, value: 19.4 },
      { year: 2024, value: 26.6 },
      { year: 2025, value: 31.8 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // WACC ~10 % (juridictions investment-grade ; CRP blend Pérou/Mexique ~1,5 %). 2023 corrigé
    // d'un glitch Excel (cours FY manquant -> capi nulle -> WACC tronqué) ramené à ~10,1 %.
    // Le spread ROIC-WACC est massif (+10 à +22 pts) chaque année : la signature d'un actif premium.
    roicVsWacc: [
      { year: 2021, value: 28.5, wacc:  7.3 },
      { year: 2022, value: 20.5, wacc: 10.9 },
      { year: 2023, value: 19.4, wacc: 10.1 },
      { year: 2024, value: 26.6, wacc: 10.2 },
      { year: 2025, value: 31.8, wacc: 10.0 },
    ],

    // ── Free Cash Flow sur 5 ans (M$) ─────────────────────────────────────────
    // FCF = OCF - capex industriel. Solide, mais le capex remonte (pipeline Tia Maria, etc.) :
    // la vague d'investissement de croissance est largement DEVANT, pas derrière.
    fcf: [
      { year: 2021, value: 3399.9 },
      { year: 2022, value: 1861.5 },
      { year: 2023, value: 2568.8 },
      { year: 2024, value: 3394.4 },
      { year: 2025, value: 3427.0 },
    ],

    // ── Graphiques de valorisation comparée (radar 8 branches, API Yahoo) ─────
    // Base homogène API Yahoo (TTM, relevé juin 2026, cours plus bas que le spot du jour).
    // Bloc « pairs directs » de l'onglet = Freeport, Antofagasta, Zijin, BHP. Médiane = panel
    // de producteurs de cuivre / diversifiés (hors valeurs aux multiples non significatifs).
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Southern Copper vs producteurs de cuivre',
        data: [
          { label: 'PER',             valeur: 29.5, secteur: 15.9 },
          { label: 'EV/EBITDA',       valeur: 16.1, secteur:  9.0 },
          { label: 'P/FCF',           valeur: 42.4, secteur: 34.3 },
          { label: 'Marge EBIT %',    valeur: 58.3, secteur: 31.1 },
          { label: 'ROIC %',          valeur: 31.4, secteur: 15.5 },
          { label: 'FCF Yield %',     valeur:  2.4, secteur:  2.9 },
          { label: 'Dette/EBITDA',    valeur:  0.4, secteur:  0.9 },
          { label: 'Croissance CA %', valeur: 36.2, secteur: 21.2 },
        ],
      },
      {
        id: 'vs_freeport', type: 'radar',
        title: 'Valorisation comparée - Southern Copper vs Freeport-McMoRan',
        concurrent1: 'Freeport-McMoRan',
        data: [
          { label: 'PER',             valeur: 29.5, concurrent1: 33.3 },
          { label: 'EV/EBITDA',       valeur: 16.1, concurrent1: 11.0 },   // Freeport EV/EBITDA Yahoo N/M -> valeur représentative
          { label: 'P/FCF',           valeur: 42.4, concurrent1: 81.0 },
          { label: 'Marge EBIT %',    valeur: 58.3, concurrent1: 31.1 },
          { label: 'ROIC %',          valeur: 31.4, concurrent1: 16.3 },
          { label: 'FCF Yield %',     valeur:  2.4, concurrent1:  1.2 },
          { label: 'Dette/EBITDA',    valeur:  0.4, concurrent1:  0.7 },
          { label: 'Croissance CA %', valeur: 36.2, concurrent1:  8.8 },
        ],
      },
      {
        id: 'vs_zijin', type: 'radar',
        title: 'Valorisation comparée - Southern Copper vs Zijin Mining',
        concurrent1: 'Zijin Mining',
        data: [
          { label: 'PER',             valeur: 29.5, concurrent1: 10.5 },
          { label: 'EV/EBITDA',       valeur: 16.1, concurrent1:  8.0 },
          { label: 'P/FCF',           valeur: 42.4, concurrent1: 16.4 },
          { label: 'Marge EBIT %',    valeur: 58.3, concurrent1: 29.6 },
          { label: 'ROIC %',          valeur: 31.4, concurrent1: 21.0 },
          { label: 'FCF Yield %',     valeur:  2.4, concurrent1:  6.1 },
          { label: 'Dette/EBITDA',    valeur:  0.4, concurrent1:  0.9 },
          { label: 'Croissance CA %', valeur: 36.2, concurrent1: 24.8 },
        ],
      },
      {
        id: 'vs_bhp', type: 'radar',
        title: 'Valorisation comparée - Southern Copper vs BHP Group',
        concurrent1: 'BHP Group',
        data: [
          { label: 'PER',             valeur: 29.5, concurrent1: 20.7 },
          { label: 'EV/EBITDA',       valeur: 16.1, concurrent1:  7.0 },   // BHP EV/EBITDA Yahoo N/M -> valeur représentative
          { label: 'P/FCF',           valeur: 42.4, concurrent1: 22.8 },
          { label: 'Marge EBIT %',    valeur: 58.3, concurrent1: 40.7 },
          { label: 'ROIC %',          valeur: 31.4, concurrent1: 19.2 },
          { label: 'FCF Yield %',     valeur:  2.4, concurrent1:  4.4 },
          { label: 'Dette/EBITDA',    valeur:  0.4, concurrent1:  0.5 },
          { label: 'Croissance CA %', valeur: 36.2, concurrent1: 10.8 },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────────
    metricHistory: [

      // ── Le graphe-driver : prix du cuivre réalisé vs coût cash net ($/lb) ────
      // L'écart entre les deux EST la marge cash par livre. SCCO produit le cuivre le moins cher
      // du monde (coût cash net 0,58 $/lb en 2025, abaissé par les crédits de sous-produits).
      {
        label: 'Cuivre_Realise',
        name:  'Prix cuivre réalisé',
        unit:  '$/lb',
        yMin:  0,
        data: [
          { year: 2021, value: 4.30 },
          { year: 2022, value: 3.93 },
          { year: 2023, value: 3.87 },
          { year: 2024, value: 4.23 },
          { year: 2025, value: 4.85 },
        ],
        competitors: [
          {
            name:  'Coût cash net de sous-produits',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 0.67 },
              { year: 2022, value: 0.78 },
              { year: 2023, value: 1.03 },
              { year: 2024, value: 0.89 },
              { year: 2025, value: 0.58 },
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
          { year: 2021, value: 4.39 },
          { year: 2022, value: 3.41 },
          { year: 2023, value: 3.14 },
          { year: 2024, value: 4.21 },
          { year: 2025, value: 5.24 },
        ],
      },

      // ── OCF, FCF et Capex (M$) ────────────────────────────────────────────
      // Le capex remonte (892 -> 1 325 M$) avec le démarrage du pipeline (Tia Maria, Los Chancas).
      // La grosse vague d'investissement de croissance est DEVANT : le FCF sera pressé, pas libéré.
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash-flow opérationnel',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 4292.2 },
          { year: 2022, value: 2810.0 },
          { year: 2023, value: 3577.4 },
          { year: 2024, value: 4421.7 },
          { year: 2025, value: 4752.3 },
        ],
        competitors: [
          {
            name:   'Capex industriel',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value:  892.3 },
              { year: 2022, value:  948.5 },
              { year: 2023, value: 1008.6 },
              { year: 2024, value: 1027.3 },
              { year: 2025, value: 1325.3 },
            ],
          },
          {
            name:  'FCF (OCF - capex)',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 3399.9 },
              { year: 2022, value: 1861.5 },
              { year: 2023, value: 2568.8 },
              { year: 2024, value: 3394.4 },
              { year: 2025, value: 3427.0 },
            ],
          },
        ],
      },

      // ── EV/EBITDA historique (au cours de clôture FY) ─────────────────────
      // 2023 corrigé (cours FY manquant dans l'onglet -> recalculé au cours CY 78,45 $).
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value:  7.1 },
          { year: 2022, value:  9.3 },
          { year: 2023, value: 13.2 },
          { year: 2024, value: 11.4 },
          { year: 2025, value: 15.2 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 11.2 },
              { year: 2022, value: 11.2 },
              { year: 2023, value: 11.2 },
              { year: 2024, value: 11.2 },
              { year: 2025, value: 11.2 },
            ],
          },
        ],
      },

      // ── PER historique (cours de clôture FY / BPA) ────────────────────────
      // 2023 corrigé (cours CY 78,45 $ / BPA 3,14).
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 13.0 },
          { year: 2022, value: 16.4 },
          { year: 2023, value: 25.0 },
          { year: 2024, value: 20.5 },
          { year: 2025, value: 26.9 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 20.4 },
              { year: 2022, value: 20.4 },
              { year: 2023, value: 20.4 },
              { year: 2024, value: 20.4 },
              { year: 2025, value: 20.4 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (FCF / capitalisation à la clôture FY) ───────
      {
        label: 'FCFy',
        name:  'FCF Yield (capitalisation)',
        unit:  '%',
        data: [
          { year: 2021, value: 7.7 },
          { year: 2022, value: 4.3 },
          { year: 2023, value: 4.2 },
          { year: 2024, value: 4.9 },
          { year: 2025, value: 2.9 },
        ],
        competitors: [
          {
            name:  'Taux sans risque (UST 10 ans)',
            color: '#52B788',
            data: [
              { year: 2021, value: 1.6 },
              { year: 2022, value: 3.8 },
              { year: 2023, value: 4.1 },
              { year: 2024, value: 4.3 },
              { year: 2025, value: 4.1 },
            ],
          },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) ──────────────────────────────────────────
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 38.2 },
          { year: 2022, value: 28.2 },
          { year: 2023, value: 27.9 },
          { year: 2024, value: 34.3 },
          { year: 2025, value: 37.0 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value:  7.3 },
              { year: 2022, value: 10.9 },
              { year: 2023, value: 10.1 },
              { year: 2024, value: 10.2 },
              { year: 2025, value: 10.0 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 28.5 },
              { year: 2022, value: 20.5 },
              { year: 2023, value: 19.4 },
              { year: 2024, value: 26.6 },
              { year: 2025, value: 31.8 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA ──────────────────────────────────────────────
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 0.65 },
          { year: 2022, value: 1.02 },
          { year: 2023, value: 1.16 },
          { year: 2024, value: 0.62 },
          { year: 2025, value: 0.37 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.76 },
              { year: 2022, value: 0.76 },
              { year: 2023, value: 0.76 },
              { year: 2024, value: 0.76 },
              { year: 2025, value: 0.76 },
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
          { year: 2021, value: 2.73 },
          { year: 2022, value: 4.20 },
          { year: 2023, value: 3.19 },
          { year: 2024, value: 2.75 },
          { year: 2025, value: 3.89 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 3.35 },
              { year: 2022, value: 3.35 },
              { year: 2023, value: 3.35 },
              { year: 2024, value: 3.35 },
              { year: 2025, value: 3.35 },
            ],
          },
        ],
      },

      // ── CCC - DSO / DIO / DPO ─────────────────────────────────────────────
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 48.3 },
          { year: 2022, value: 53.5 },
          { year: 2023, value: 45.3 },
          { year: 2024, value: 39.7 },
          { year: 2025, value: 55.0 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 91.2 },
              { year: 2022, value: 79.6 },
              { year: 2023, value: 79.2 },
              { year: 2024, value: 79.1 },
              { year: 2025, value: 72.1 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 55.5 },
              { year: 2022, value: 51.6 },
              { year: 2023, value: 50.8 },
              { year: 2024, value: 46.4 },
              { year: 2025, value: 58.7 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 84.0 },
              { year: 2022, value: 81.5 },
              { year: 2023, value: 73.7 },
              { year: 2024, value: 72.4 },
              { year: 2025, value: 68.4 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 0.60 },
          { year: 2022, value: 0.58 },
          { year: 2023, value: 0.59 },
          { year: 2024, value: 0.61 },
          { year: 2025, value: 0.63 },
        ],
      },

      // ── Dividende cash par action ($) ─────────────────────────────────────
      // CASH SEUL. Le stock dividend (3,50 $ en 2025) est non-cash et dilue ~3,4 %/an : il n'est
      // PAS compté ici. Politique variable : payout cash relevé dans les années faibles (2022-2023).
      {
        label: 'Dividendes',
        name:  'Dividende cash par action',
        unit:  '$',
        data: [
          { year: 2021, value: 3.20 },
          { year: 2022, value: 3.50 },
          { year: 2023, value: 4.00 },
          { year: 2024, value: 2.50 },
          { year: 2025, value: 3.10 },
        ],
      },

      // ── Payout ratio cash (%) ─────────────────────────────────────────────
      // Dividendes cash payés / résultat net. Politique variable : SCCO a sur-distribué en
      // 2022-2023 (payout > 100 %, années de cuivre plus faible), puis normalisé vers ~50-58 %.
      {
        label: 'Payout',
        name:  'Payout ratio (cash)',
        unit:  '%',
        data: [
          { year: 2021, value:  72.8 },
          { year: 2022, value: 102.0 },
          { year: 2023, value: 126.9 },
          { year: 2024, value:  48.4 },
          { year: 2025, value:  57.6 },
        ],
      },

      // ── Dilution annuelle (%) ─────────────────────────────────────────────
      // Le stock dividend (depuis ~2024) dilue le nombre d'actions d'environ 3 à 4 % par an :
      // chaque action reçoit plus de titres, mais chacun est mécaniquement dilué.
      {
        label: 'Dilution',
        name:  'Dilution annuelle',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 0.0 },
          { year: 2022, value: 0.0 },
          { year: 2023, value: 0.0 },
          { year: 2024, value: 3.9 },
          { year: 2025, value: 3.0 },
        ],
      },

    ],
  },
}
