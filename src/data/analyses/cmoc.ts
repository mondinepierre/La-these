// ─────────────────────────────────────────────────────────────────────────────
// CMOC Group Limited (603993.SS / 3993.HK) - Analyse ponctuelle
// Dernière mise à jour : juin 2026
// Sources : Rapport annuel 2025 (CMOC Group, IFRS), états financiers et notes FY2025,
//           résultats Q1-2026, guidance 2026, présentations investisseurs ; prix des métaux
//           et statut RDC : presse spécialisée ; multiples de marché : API Yahoo (base TTM
//           homogène).
// ─────────────────────────────────────────────────────────────────────────────
//
// CONVENTION DEVISE (piège du dossier, tranché)
//   Comptes publiés et fonctionnels : CNY (RMB) natif. Tout le fondamental, la NAV et la SOTP
//   sont en CNY. Double cotation : Shanghai 603993.SS (action A, CNY) et Hong Kong 3993.HK
//   (action H, HKD). Convention retenue : affichage cours / onePager / prixCible / niveaux du
//   Verdict sur l'ACTION A de Shanghai (603993.SS, CNY natif), cohérente avec le compte de
//   résultat en RMB et avec l'onglet de prix de l'Excel (la série, le bêta vs CSI 300 et les
//   niveaux techniques sont l'action A). L'action H (3993.HK) traite environ 25 % SOUS l'action A
//   (prime A/H structurelle, NON convertible au taux de change) : la décote « cuivre bon marché »
//   est plus marquée sur le H ; sur le A affiché, le titre est en ligne avec ses pairs.
//   Changes annotés : USD/CNY 6,775 ; HKD/CNY 0,8652 (API Yahoo). Les prix des métaux sont en USD.
//
// CORRECTIONS EXCEL (Règle des chiffres, validées)
//   1. EBITDA : l'onglet calculait EBIT + une ligne D&A partielle (167 M CNY) => EBITDA environ
//      EGAL à l'EBIT (35,5 Bn). Rétabli : EBIT 35,3 + D&A réel 7,2 Bn (note des flux : amort.
//      immo. corporelles 4,94 + incorporelles 2,17 + droits d'usage 0,04) = EBITDA 42,5 Bn.
//   2. FCF : l'onglet ADDITIONNAIT le capex au lieu de le soustraire (FCF affiché 28,4 Bn).
//      Rétabli FCF = OCF - capex = 20,84 - 7,58 = 13,3 Bn FY2025.
//
// NOTES MÉTHODOLOGIQUES
//   ROIC La Thèse : NOPAT / IC, IC = CP + max(dette nette, 0). Trésorerie nette => IC = CP.
//                   ROIC 2025 = 24,2 % (NOPAT 24,1 Bn / IC 99,8 Bn). Yahoo affiche 35,3 % (base
//                   différente) -> garder 24,2 % La Thèse, signaler au radar.
//   WACC : CAPM, Rf = obligation d'État CHINOISE 10 ans 1,86 % (devise de reporting CNY ; le label
//          « bund » de l'onglet est une coquille, la colonne « indice sans risque » confirme le taux
//          chinois) ; bêta 1,342 régressé vs CSI 300 ; ERP = US mature 4,23 % + CRP RDC 8,41 %
//          (Damodaran, B3/CCC+, pays d'OPÉRATION du cuivre-cobalt qui pèse ~70 % du profit brut).
//          Re 18,8 %, WACC 2025 = 17,9 %. Le CRP RDC domine le WACC (prolongement multi-pays de la
//          règle Lundin/K92 : le pays d'opération, pas de cotation). Double lentille : convention
//          minière 5 %/8 % vs WACC plein ~18 %.
//   FY = exercice calendaire clos le 31/12 (confirmé tous onglets ; TTM au 31/03/2026).
//   Snapshot : structure FY2025 (CNY) figée ; valorisation au COURS SPOT 17,55 CNY (603993.SS).
//   Q1-2026 (record) : CA 66,4 Bn (+44 %), résultat net part du groupe 7,76 Bn (+97 %), cuivre
//              188 kt (+10 %, 24 % de la guidance), cobalt 30,5 kt, segment OR désormais contributeur.
//              Prix moyens : cuivre +37 %, cobalt +119 % en glissement annuel. BPA TTM environ 1,13.
//   FCF La Thèse = OCF - capex industriel. Capex en croissance (KFM Phase II, expansion TFM) ->
//              FCF bridé par l'investissement, distinct de la trésorerie nette.
//   Dividende : 0,286 CNY/action au titre de 2025, payout 40 % (politique 40 % en phase de capex).
//
// ACTIFS (multi-pays, multi-métaux + bras de trading IXM)
//   RDC  : TFM (Tenke Fungurume) + KFM (Kisanfu), cuivre-cobalt. Cuivre 741 kt (+14 %), cobalt
//          117 kt FY2025 (#1 mondial). Réserves contenu : ~33 Mt cuivre, ~5,2 Mt cobalt (multi-
//          décennies). KFM Phase II en montée, plant d'acide sulfurique 200 kt. ~70 % du profit brut.
//   Chine : Sandaozhuang + Shangfanggou, molybdène-tungstène. Mo ~15 kt, W 13,9 kt.
//   Brésil : Catalão/Niobras, niobium (7,1 kt) + phosphates ; + 4 mines d'OR (Aurizona, RDM, Bahia,
//          rachetées 1,015 Md$ en 2025), 6-8 t d'or guidées 2026.
//   Équateur : Lumina Gold (Cangrejos), acquise ~581 M CAD juin 2025 ; projet Odin en préparation.
//   Australie : Northparkes (NPM), cuivre-or.
//   IXM (Suisse) : négociant mondial de métaux non ferreux, 180 Bn CNY de CA (flux, marge mince),
//          valorisé sur résultat/book, PAS en NAV de mine.
//   Actionnariat : Cathay Fortune (Yu Yong, privé) ~24,9 % contrôlant + CATL ~24,9 % (lien batterie/
//          EV, depuis 2022) + résidu municipalité de Luoyang. Top 3 ~66 %.
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const cmoc: AnalyseCard = {
  slug:           'cmoc',
  type:           'ponctuelle',            // non détenue, pas de suivi trimestriel engagé
  title:          'CMOC Group',
  ticker:         '603993.SS',             // Yahoo ; cotation Shanghai (action A, CNY)
  secteur:        'Matériaux',
  geo:            'Asie',                  // siège Chine ; mais l'actif est multi-pays (RDC, Chine, Brésil, Australie)
  conviction:     'moyenne',               // actifs de classe mondiale bas coût + net cash, MAIS gouvernance chinoise + concentration RDC + opacité IXM + cyclicité cobalt
  positionnement: 'surveillance',          // hors position : qualité réelle, mais le supercycle est déjà dans le cours de l'action A
  lastUpdated:    '2026-06-30',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Producteur diversifié chinois, premier mondial du cobalt et acteur majeur du cuivre de l'électrification, à très bas coût et en trésorerie nette. Mais l'essentiel de la valeur dort en RDC, et le supercycle est déjà largement payé sur l'action de Shanghai.",
  glossaire:      ['cuivre', 'cobalt', 'somme-des-parties', 'prime-de-risque-pays', 'roic', 'wacc'],
  logo:           '/analyse/cmoc.png',
  prixCible:      { bas: 16, haut: 22, devise: 'CNY' },   // central 5 ans ~19 CNY (mid-cycle cuivre 10,5k + croissance volume/or) +/- MoE (beta x 15 %)
  marginOfSafety: 'faible',                                // spot 17,55 au-dessus d'une SOTP statique (~12-14), juste en forward : ni décote, ni prime franche
  readingTime:    42,
  onePager: {
    thesis:    "Le diversifié chinois du cuivre et du cobalt de l'électrification : bas coût, net cash, premier mondial du cobalt. Mais la valeur dort en RDC.",
    cours:     17.55,                  // cours Shanghai 603993.SS (CNY) au 30/06/2026
    coursDate: '2026-06-30',
    devise:    'CNY',
    range52w:  { low: 8.02, high: 28.78 },   // extrêmes 52 semaines (CNY, Shanghai)
  },

  // ── Métriques snapshot ─────────────────────────────────────────────────────
  // Structure FY2025 (CNY) ; valorisation au cours spot 17,55 CNY (603993.SS).
  metrics: {
    per:               18.5,   // Cours spot 17,55 / BPA FY2025 0,95 ; TTM environ 15,5x ; forward 2026E environ 13x (Yahoo trailing H 13,8x)
    evEbitda:           8.5,   // EV (cap 376 Bn - tréso nette 15,3 Bn = 360 Bn) / EBITDA corrigé 42,5 Bn (médiane pairs 8,8x)
    fcfYield:           3.5,   // FCF corrigé 13,3 Bn / capitalisation 376 Bn (bridé par le capex de croissance KFM II)
    roic:              24.2,   // NOPAT 24,1 Bn / IC 99,8 Bn - FY2025 (méthode La Thèse ; Yahoo 35,3 % base différente)
    wacc:              17.9,   // CAPM : Rf 1,86 % + bêta 1,342 x ERP 12,64 % (dont CRP RDC 8,41 %)
    detteEbitda:       -0.36,  // Trésorerie nette 15,3 Bn / EBITDA corrigé 42,5 Bn - net cash
    croissanceCA3ans:   6.1,   // TCAC CA total 2022-2025 ; masqué par le négoce (plat) : le cuivre-cobalt a fait +67 %/an (13 -> 61 Bn)
    croissanceBPA3ans: 50.3,   // TCAC BPA 2022-2025 (prix des métaux + montée en charge cuivre-cobalt)
    margeEbit:         17.1,   // EBIT 35,3 Bn / CA 206,7 Bn - diluée par le négoce (180 Bn de CA, marge mince)
    margeBrute:        23.9,   // Marge brute FY2025 (idem, diluée par le négoce ; sur le minier seul, bien supérieure)
    payoutRatio:        0.40,  // 0,286 CNY/action au titre de 2025 (politique 40 % en phase d'expansion)
    currentRatio:       1.55,  // Actifs courants 110,3 Bn / passifs courants 71,1 Bn
    dso:                2.1,   // Très bas : le négoce se règle par lettres de crédit / paiements anticipés
  },

  tendances: {
    per:       'hausse',   // re-rating : 9x (2024, avant la flambée) -> 18x (spot) avec le supercycle cuivre-cobalt
    fcfYield:  'baisse',   // de 19 % (2024, capex bas) à 3,5 % : le capex de croissance (KFM II) remonte et bride le FCF
    roic:      'hausse',   // 10 % (2023) -> 24 % (2025) : prix des métaux + montée en charge du cuivre-cobalt
    margeEbit: 'hausse',   // 7 % (2023) -> 17 % (2025) - effet prix + mix (le cuivre-cobalt monte dans le total)
  },

  updates: [
    {
      date: '2026-06-30',
      note: "Création de la fiche. Données FY2025 (rapport annuel, états financiers IFRS, notes segments) et Q1-2026 (record : CA 66,4 Bn +44 %, résultat net part du groupe 7,76 Bn +97 %, cuivre 188 kt). Production FY2025 : cuivre 741 kt (+14 %), cobalt 117 kt (#1 mondial), niobium 7,1 kt. Prix réalisés : cuivre 9 945 $/t (+9 %), cobalt 16,08 $/lb (+43 %, effet suspension RDC). Trésorerie nette 15,3 Bn, ROIC 24,2 %, FCF corrigé 13,3 Bn. RDC : ban cobalt levé le 16/10/2025, remplacé par un quota (96 600 t/an 2026-2027). Stratégie « cuivre-or double cœur » : 4 mines d'or au Brésil (1,015 Md$) + Lumina Gold en Équateur. Cours ré-ancré au spot 17,55 CNY (Shanghai). Cuivre spot ~record 13 000 $/t, cobalt ~26 $/lb.",
    },
    {
      date: '2026-08-15',
      note: 'Résultats S1-2026 attendus. Source : Yahoo Finance API.',
    },
  ],

  chartData: {

    // ── CA consolidé sur 5 ans (Mds CNY) ──────────────────────────────────────
    // ATTENTION : le CA total est dominé à ~87 % par le NÉGOCE IXM (flux à marge mince),
    // qui masque la croissance du minier. La valeur est dans le cuivre-cobalt (voir segments).
    revenue: [
      { year: 2021, value: 173.9 },
      { year: 2022, value: 173.0 },
      { year: 2023, value: 186.3 },
      { year: 2024, value: 213.0 },
      { year: 2025, value: 206.7 },
    ],

    // ── Répartition géographique : par localisation des ACTIFS (profit brut), pas des ventes ──
    // Les ventes sont dominées par la Chine + les hubs de négoce (Singapour, Suisse) : trompeur.
    // La valeur minière est en RDC (cuivre-cobalt), en Chine (molybdène), au Brésil (niobium + or).
    geoRevenue: [
      { region: 'République démocratique du Congo', pct: 70 },
      { region: 'Chine',                            pct: 13 },
      { region: 'Brésil',                           pct: 10 },
      { region: 'Australie',                        pct:  7 },
    ],

    // ── Répartition du CA par segment (Mds CNY) ───────────────────────────────
    // Le négoce IXM écrase le CA ; le cuivre-cobalt (13 -> 61 Bn) est le moteur de valeur.
    segmentRevenue: {
      unit: 'Mds CNY',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'Négoce (IXM)',          value: 148.0 },
          { name: 'Cuivre-cobalt (RDC)',   value:  13.3 },
          { name: 'Molybdène-tungstène',   value:   5.4 },
          { name: 'Niobium-phosphates',    value:   5.1 },
          { name: 'Autres',                value:   0.5 },
        ]},
        { year: 2022, segments: [
          { name: 'Négoce (IXM)',          value: 159.1 },
          { name: 'Cuivre-cobalt (RDC)',   value:   9.7 },
          { name: 'Molybdène-tungstène',   value:   7.0 },
          { name: 'Niobium-phosphates',    value:   7.4 },
          { name: 'Autres',                value:   0.3 },
        ]},
        { year: 2023, segments: [
          { name: 'Négoce (IXM)',          value: 168.1 },
          { name: 'Cuivre-cobalt (RDC)',   value:  28.0 },
          { name: 'Molybdène-tungstène',   value:   8.6 },
          { name: 'Niobium-phosphates',    value:   6.3 },
          { name: 'Autres',                value:   0.3 },
        ]},
        { year: 2024, segments: [
          { name: 'Négoce (IXM)',          value: 188.4 },
          { name: 'Cuivre-cobalt (RDC)',   value:  50.6 },
          { name: 'Molybdène-tungstène',   value:   8.1 },
          { name: 'Niobium-phosphates',    value:   6.5 },
          { name: 'Autres',                value:   0.2 },
        ]},
        { year: 2025, segments: [
          { name: 'Négoce (IXM)',          value: 180.1 },
          { name: 'Cuivre-cobalt (RDC)',   value:  61.3 },
          { name: 'Molybdène-tungstène',   value:   8.8 },
          { name: 'Niobium-phosphates',    value:   7.7 },
          { name: 'Autres',                value:   0.2 },
        ]},
      ],
    },

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    // NB : marges sur le CA TOTAL (négoce inclus), donc structurellement basses. La tendance
    // haussière 2023-2025 reflète la montée du cuivre-cobalt (marge ~56 %) dans le mix.
    marges: [
      { year: 2021, gross:  9.4, operating:  5.1, net: 3.1 },
      { year: 2022, gross:  9.3, operating:  5.7, net: 4.2 },
      { year: 2023, gross:  9.7, operating:  7.1, net: 4.6 },
      { year: 2024, gross: 16.5, operating: 11.9, net: 7.3 },
      { year: 2025, gross: 23.9, operating: 17.1, net: 11.6 },
    ],

    // ── ROIC sur 5 ans (%) ────────────────────────────────────────────────────
    roic: [
      { year: 2021, value: 14.7 },
      { year: 2022, value:  9.9 },
      { year: 2023, value: 10.4 },
      { year: 2024, value: 18.1 },
      { year: 2025, value: 24.2 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // WACC élevé (~18 %) par le CRP RDC. Le spread bascule franchement positif en 2024-2025
    // (prix des métaux + montée en charge du cuivre-cobalt) : +6,3 pts en 2025.
    roicVsWacc: [
      { year: 2021, value: 14.7, wacc: 19.4 },
      { year: 2022, value:  9.9, wacc: 16.3 },
      { year: 2023, value: 10.4, wacc: 15.6 },
      { year: 2024, value: 18.1, wacc: 17.0 },
      { year: 2025, value: 24.2, wacc: 17.9 },
    ],

    // ── Free Cash Flow sur 5 ans (Mds CNY) ────────────────────────────────────
    // FCF = OCF - capex (corrigé du bug de signe Excel). Bridé par le capex de CROISSANCE
    // (TFM/KFM) : 2024 gonflé par un capex bas, 2025 normalisé avec la reprise de l'expansion.
    fcf: [
      { year: 2021, value:  1.9 },
      { year: 2022, value:  5.0 },
      { year: 2023, value:  3.0 },
      { year: 2024, value: 27.7 },
      { year: 2025, value: 13.3 },
    ],

    // ── Graphiques de valorisation comparée (radar 8 branches, API Yahoo) ─────
    // Base homogène API Yahoo (TTM). Pour CMOC, ces multiples référencent l'action H (3993.HK),
    // moins chère que l'action A affichée (prime A/H) : le radar montre donc CMOC plus
    // décotée que ses pairs sur le H. Bloc « pairs directs » de l'onglet = Zijin, Freeport,
    // Glencore, BHP. Médiane = panel de producteurs diversifiés / cuivre.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - CMOC vs producteurs diversifiés',
        data: [
          { label: 'PER',             valeur: 13.8, secteur: 18.0 },
          { label: 'EV/EBITDA',       valeur:  6.0, secteur:  8.8 },
          { label: 'P/FCF',           valeur: 21.0, secteur: 20.7 },
          { label: 'Marge EBIT %',    valeur: 19.6, secteur: 23.7 },
          { label: 'ROIC %',          valeur: 35.3, secteur: 16.3 },
          { label: 'FCF Yield %',     valeur:  3.5, secteur:  4.9 },
          { label: 'Dette/EBITDA',    valeur:  0.0, secteur:  0.8 },
          { label: 'Croissance CA %', valeur: 44.3, secteur: 17.5 },
        ],
      },
      {
        id: 'vs_glencore', type: 'radar',
        title: 'Valorisation comparée - CMOC vs Glencore',
        concurrent1: 'Glencore',
        data: [
          { label: 'PER',             valeur: 13.8, concurrent1: 11.4 },   // Glencore PER trailing N/M (257x), forward 11,4x retenu
          { label: 'EV/EBITDA',       valeur:  6.0, concurrent1:  9.9 },
          { label: 'P/FCF',           valeur: 21.0, concurrent1: 25.0 },
          { label: 'Marge EBIT %',    valeur: 19.6, concurrent1:  2.0 },
          { label: 'ROIC %',          valeur: 35.3, concurrent1:  2.0 },
          { label: 'FCF Yield %',     valeur:  3.5, concurrent1:  0.0 },   // Glencore FCFy -0,5 % ramené à 0
          { label: 'Dette/EBITDA',    valeur:  0.0, concurrent1:  4.1 },
          { label: 'Croissance CA %', valeur: 44.3, concurrent1: 14.3 },
        ],
      },
      {
        id: 'vs_freeport', type: 'radar',
        title: 'Valorisation comparée - CMOC vs Freeport-McMoRan',
        concurrent1: 'Freeport-McMoRan',
        data: [
          { label: 'PER',             valeur: 13.8, concurrent1: 33.2 },
          { label: 'EV/EBITDA',       valeur:  6.0, concurrent1: 11.0 },
          { label: 'P/FCF',           valeur: 21.0, concurrent1: 80.9 },
          { label: 'Marge EBIT %',    valeur: 19.6, concurrent1: 31.1 },
          { label: 'ROIC %',          valeur: 35.3, concurrent1: 16.3 },
          { label: 'FCF Yield %',     valeur:  3.5, concurrent1:  1.2 },
          { label: 'Dette/EBITDA',    valeur:  0.0, concurrent1:  0.7 },
          { label: 'Croissance CA %', valeur: 44.3, concurrent1:  8.8 },
        ],
      },
      {
        id: 'vs_zijin', type: 'radar',
        title: 'Valorisation comparée - CMOC vs Zijin Mining',
        concurrent1: 'Zijin Mining',
        data: [
          { label: 'PER',             valeur: 13.8, concurrent1: 10.5 },
          { label: 'EV/EBITDA',       valeur:  6.0, concurrent1:  8.1 },
          { label: 'P/FCF',           valeur: 21.0, concurrent1: 16.4 },
          { label: 'Marge EBIT %',    valeur: 19.6, concurrent1: 29.6 },
          { label: 'ROIC %',          valeur: 35.3, concurrent1: 21.0 },
          { label: 'FCF Yield %',     valeur:  3.5, concurrent1:  6.1 },
          { label: 'Dette/EBITDA',    valeur:  0.0, concurrent1:  0.9 },
          { label: 'Croissance CA %', valeur: 44.3, concurrent1: 24.8 },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────────
    metricHistory: [

      // ── OCF, FCF et Capex (Mds CNY) - le cash bridé par le capex de croissance ─
      // L'OCF est solide, mais le capex (TFM, KFM Phase II) en absorbe une part croissante :
      // le FCF est réel mais bridé tant que l'expansion tourne. 2024 = capex creux (FCF gonflé).
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash-flow opérationnel',
        unit:  'Mds CNY',
        yMin:  0,
        data: [
          { year: 2021, value:  6.2 },
          { year: 2022, value: 15.5 },
          { year: 2023, value: 15.5 },
          { year: 2024, value: 32.4 },
          { year: 2025, value: 20.8 },
        ],
        competitors: [
          {
            name:  'Capex industriel',
            color: '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value:  4.3 },
              { year: 2022, value: 10.5 },
              { year: 2023, value: 12.5 },
              { year: 2024, value:  4.7 },
              { year: 2025, value:  7.6 },
            ],
          },
          {
            name:  'FCF (OCF - capex)',
            color: '#C9A84C',
            data: [
              { year: 2021, value:  1.9 },
              { year: 2022, value:  5.0 },
              { year: 2023, value:  3.0 },
              { year: 2024, value: 27.7 },
              { year: 2025, value: 13.3 },
            ],
          },
        ],
      },

      // ── BPA dilué (CNY) ───────────────────────────────────────────────────
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  'CNY',
        data: [
          { year: 2021, value: 0.24 },
          { year: 2022, value: 0.28 },
          { year: 2023, value: 0.38 },
          { year: 2024, value: 0.63 },
          { year: 2025, value: 0.95 },
        ],
      },

      // ── EV/EBITDA historique (au cours de clôture FY, action A) ────────────
      // EBITDA corrigé (EBIT + D&A). De-rating 2021-2024 puis re-rating 2025 (flambée du cours).
      // D&A sourcé des notes de flux : 2022 (4,53 Bn), 2024 (6,0), 2025 (7,2) ; 2021 et 2023
      // interpolés (2,5 et 5,3, base d'actifs en consolidation). EBITDA : 11,3/14,4/18,6/31,3/42,5.
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 10.7 },
          { year: 2022, value:  7.6 },
          { year: 2023, value:  6.6 },
          { year: 2024, value:  4.3 },
          { year: 2025, value:  9.7 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 7.8 },
              { year: 2022, value: 7.8 },
              { year: 2023, value: 7.8 },
              { year: 2024, value: 7.8 },
              { year: 2025, value: 7.8 },
            ],
          },
        ],
      },

      // ── PER historique (cap / résultat net, action A) ──────────────────────
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 21.9 },
          { year: 2022, value: 13.7 },
          { year: 2023, value: 13.2 },
          { year: 2024, value:  9.2 },
          { year: 2025, value: 17.8 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 15.2 },
              { year: 2022, value: 15.2 },
              { year: 2023, value: 15.2 },
              { year: 2024, value: 15.2 },
              { year: 2025, value: 15.2 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (FCF corrigé / capitalisation à la clôture FY) ─
      // Volatil : 2024 (19 %) gonflé par un capex bas ; 2025 (3,1 %) bridé par la reprise du
      // capex de croissance. Référence : obligation chinoise 10 ans (le taux sans risque local).
      {
        label: 'FCFy',
        name:  'FCF Yield (capitalisation)',
        unit:  '%',
        data: [
          { year: 2021, value:  1.6 },
          { year: 2022, value:  5.1 },
          { year: 2023, value:  2.7 },
          { year: 2024, value: 19.4 },
          { year: 2025, value:  3.1 },
        ],
        competitors: [
          {
            name:  'Obligation chinoise 10 ans',
            color: '#52B788',
            data: [
              { year: 2021, value: 2.8 },
              { year: 2022, value: 2.9 },
              { year: 2023, value: 2.6 },
              { year: 2024, value: 1.7 },
              { year: 2025, value: 1.9 },
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
          { year: 2021, value: 22.3 },
          { year: 2022, value: 11.9 },
          { year: 2023, value: 14.3 },
          { year: 2024, value: 26.5 },
          { year: 2025, value: 35.0 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 19.4 },
              { year: 2022, value: 16.3 },
              { year: 2023, value: 15.6 },
              { year: 2024, value: 17.0 },
              { year: 2025, value: 17.9 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 14.7 },
              { year: 2022, value:  9.9 },
              { year: 2023, value: 10.4 },
              { year: 2024, value: 18.1 },
              { year: 2025, value: 24.2 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (%) - peu significatif (consolidation des actifs RDC) ─
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value:  60.1 },
          { year: 2023, value:   3.6 },
          { year: 2024, value:  75.8 },
          { year: 2025, value: 263.8 },
        ],
      },

      // ── Dette nette / EBITDA (EBITDA corrigé) ─────────────────────────────
      // Bascule du levier modéré (capex TFM/KFM 2021-2023) à la trésorerie nette (2024-2025).
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  -1,
        data: [
          { year: 2021, value:  0.26 },
          { year: 2022, value:  0.84 },
          { year: 2023, value:  0.59 },
          { year: 2024, value: -0.23 },
          { year: 2025, value: -0.36 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.22 },
              { year: 2022, value: 0.22 },
              { year: 2023, value: 0.22 },
              { year: 2024, value: 0.22 },
              { year: 2025, value: 0.22 },
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
          { year: 2021, value: 1.28 },
          { year: 2022, value: 1.71 },
          { year: 2023, value: 1.71 },
          { year: 2024, value: 1.74 },
          { year: 2025, value: 1.55 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.60 },
              { year: 2022, value: 1.60 },
              { year: 2023, value: 1.60 },
              { year: 2024, value: 1.60 },
              { year: 2025, value: 1.60 },
            ],
          },
        ],
      },

      // ── CCC - DSO / DIO / DPO ─────────────────────────────────────────────
      // Le CCC est dominé par le DIO (stocks de métal + inventaire de négoce). Le DSO est
      // quasi nul (négoce réglé par lettres de crédit / paiements anticipés).
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 2.2 },
          { year: 2022, value: 1.7 },
          { year: 2023, value: 2.2 },
          { year: 2024, value: 1.1 },
          { year: 2025, value: 2.1 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value:  0.4 },
              { year: 2022, value: 75.0 },
              { year: 2023, value: 68.2 },
              { year: 2024, value: 61.3 },
              { year: 2025, value: 94.3 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value:  0.6 },
              { year: 2022, value:  3.6 },
              { year: 2023, value:  7.7 },
              { year: 2024, value:  9.9 },
              { year: 2025, value: 11.9 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value:  2.1 },
              { year: 2022, value: 73.1 },
              { year: 2023, value: 62.7 },
              { year: 2024, value: 52.6 },
              { year: 2025, value: 84.5 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      // 2021 (3,66x) = base d'actifs pré-consolidation des mines RDC : non comparable.
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 3.66 },
          { year: 2022, value: 1.05 },
          { year: 2023, value: 1.08 },
          { year: 2024, value: 1.25 },
          { year: 2025, value: 1.03 },
        ],
      },

      // ── Dividende par action (CNY) ────────────────────────────────────────
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  'CNY',
        data: [
          { year: 2021, value: 0.071 },
          { year: 2022, value: 0.085 },
          { year: 2023, value: 0.154 },
          { year: 2024, value: 0.255 },
          { year: 2025, value: 0.286 },
        ],
      },

      // ── Payout ratio (%) ──────────────────────────────────────────────────
      // Politique : 40 % du résultat en phase de capex significatif (vs 80 % en phase mature).
      {
        label: 'Payout',
        name:  'Payout ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 51.0 },
          { year: 2022, value: 66.6 },
          { year: 2023, value: 85.0 },
          { year: 2024, value: 52.8 },
          { year: 2025, value: 40.1 },
        ],
      },

    ],
  },
}
