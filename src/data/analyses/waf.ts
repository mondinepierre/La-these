// ─────────────────────────────────────────────────────────────────────────────
// West African Resources Ltd (WAF.AX) - Analyse ponctuelle
// Dernière mise à jour : juillet 2026
// Sources : Rapport annuel 2025 (états financiers), communiqué de résultats 2025
//           (17/03/2026), présentations investisseurs (mars/mai 2026), estimations
//           de ressources et réserves JORC, DFS Kiaka ; multiples de marché : API Yahoo
//           (base TTM homogène).
// ─────────────────────────────────────────────────────────────────────────────
//
// CONVENTION DEVISE (piège du dossier, tranché)
//   Devise FONCTIONNELLE ET DE PRÉSENTATION : dollar australien (AUD), confirmé par la note
//   comptable ("both the functional and presentation currency ... are Australian dollars").
//   Le fondamental, la NAV, les ratios, le cours, le prix cible et les niveaux sont TOUS en AUD :
//   PAS le hybride USD-fonctionnel/CAD-cotation de Lundin/K92, mais un cas AUD-natif de bout en
//   bout (plus simple, à la SCCO USD-natif). Seuls le PRIX DE L'OR et l'AISC sont exprimés en
//   USD/oz (convention sectorielle) et alimentent la NAV après conversion FX (AUD/USD 0,6896 :
//   1 USD = 1,45 AUD, API Yahoo, annoté). PAS de bug de conversion du cours (contraste Lundin).
//   Réconciliation de contrôle : 280 065 oz vendues x 3 525 $US = 987 M$US x 1,45 = ~1 430 M$AU
//   proche du revenu 1 543 M$AU ; BPA 0,413 AUD -> PER 2,67/0,413 = 6,46x ~ Yahoo 6,51x. OK.
//
// PIÈGES DU TABLEUR (corrigés, accord de méthode)
//   1. Nombre d'actions divisé par 100 dans le modèle (11,478 M au lieu de 1 142 M réels ;
//      capi de présentation A$3 427m à A$3,00 = 1 142 M actions). => capi, BPA et EV du modèle
//      sont faux d'un facteur 100 ; ancrage sur Yahoo + le vrai flottant. Le BPA par action réel
//      est correct (0,413 AUD) car NI/actions se compensent.
//   2. Label "in euros" de la ligne EPS = coquille (comme Autodesk M€, Kri Kri $, SCCO euros) :
//      lire en cents AUD.
//   3. Bêta du modèle = -0,2472 (régression cassée, négatif absurde) ; Yahoo = 1,1 ; retenu 1,1.
//   4. DCF perpétuel de l'Excel cassé (WACC 2,33 % < g 2,5 % => VT négative, cours -21 255) :
//      NEUTRALISÉ, comme attendu pour un producteur de matière première (actif fini).
//
// NOTES MÉTHODOLOGIQUES
//   ROIC La Thèse : NOPAT / IC, IC = CP + max(dette nette, 0). Trésorerie nette structurelle
//                   => IC = CP. ROIC 2025 = 34,3 % (NOPAT 603,6 M$AU / IC 1 758 M$AU).
//   WACC : CAPM, Rf = obligation d'État australienne 10 ans ~4,2 % (reporting AUD ; le label
//          "treasury.gov / UST" de l'onglet est une coquille pour un émetteur australien) ;
//          bêta 1,1 (vs ASX 200 / All Ords TR ; la régression -0,2472 du modèle est cassée) ;
//          ERP = mature 4,23 % + CRP BURKINA FASO 9,47 % (Damodaran, Caa2, pays d'OPÉRATION) =
//          13,7 %. Re = WACC ~= 19,7 %, arrondi ~20 % (net cash, WACC ~= Re). Situé ENTRE CMOC
//          (RDC, 18 %) et Lundin (Équateur, 25 %) : le Caa2 burkinabè est moins pénalisé que le
//          Caa1 équatorien (11,85 %) malgré une note nominale voisine. Le CRP domine le WACC :
//          double lentille du discount 5 % (convention) vs 20 % (honnête) au coeur de l'angle.
//   FY = exercice calendaire clos le 31/12 (confirmé tous onglets).
//   Snapshot : structure FY2025 (AUD) ; valorisation au COURS SPOT (2,67 AUD au 01/07/2026 ;
//              52 sem. 2,21-3,91 ; en repli d'environ 32 % depuis le plus-haut).
//   FY2025 record : revenu 1 543 M$AU (+111 %), EBIT 859,5 M$AU (marge 55,7 %), NPAT 567 M$AU
//              (part groupe 474 M$AU), OCF 790 M$AU, FCF +358 M$AU (vs -236 M$AU en 2024, creux
//              de construction Kiaka), net cash ~131 M$AU (Q1-2026 : US$732m cash+bullion vs
//              US$250m dette Kiaka), zéro dividende. Production 300 383 oz à AISC US$1 488/oz
//              (Sanbrado 205 koz SSC US$1 348 ; Kiaka 95 koz SSC US$1 702, ramp), or réalisé
//              US$3 525/oz.
//   FCF La Thèse = OCF - capex. Bridé 2023-2024 par le capex d'EXPANSION Kiaka (construction),
//              distinct du capex de maintien (dans l'AISC) ; se libère fortement dès 2025
//              (Kiaka construit). Le vrai FCF post-ramp est à venir (2026, 1er exercice plein).
//
// ACTIFS - DEUX CENTRES DE PRODUCTION, MONO-PAYS (Burkina Faso)
//   Sanbrado (production depuis mars 2020, haute teneur, souterrain M1 South + open pit) et Kiaka
//   (grande mine open pit, DFS 20 ans, premières coulées H2 2025, montée en cadence). Réserves
//   JORC 7,0 Moz P&P (à prix conservateurs US$1 400/oz open pit, US$1 800/oz souterrain) ;
//   ressources 12,2 Moz ; durée de vie +11 ans (réserves). Cible 10 ans relevée à 533 koz/an moy.
//   (2026-2035), pic 569 koz en 2029 ; +500 koz dès 2027. Kiaka DFS : 255 koz/an 2026-2030
//   (234 koz LOM), AISC LOM US$1 052/oz (an 1-5 US$953). 100 % non couvert (unhedged).
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const waf: AnalyseCard = {
  slug:           'waf',
  type:           'ponctuelle',            // non détenue, pas de suivi trimestriel engagé
  title:          'West African Resources',
  ticker:         'WAF.AX',                // Yahoo ; cotation ASX (AUD)
  secteur:        'Matériaux',
  geo:            'Afrique',               // deux mines, un seul pays : Burkina Faso
  conviction:     'moyenne',               // deux actifs long-life bas coût + net cash + ROIC 34 %, MAIS mono-pays frontière extrême + price-taker + exécution +500 koz
  positionnement: 'surveillance',          // hors position : la plus décotée des cinq sur la NAV, mais risque pays binaire
  lastUpdated:    '2026-07-02',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Producteur d'or à bas coût du Burkina Faso, en pleine montée en puissance : Sanbrado en production, Kiaka qui double le groupe vers 500 000 oz. Le titre traite à 0,3-0,7 fois sa valeur d'actif : décote frontière béante, ou pépite ignorée ?",
  glossaire:      ['nav-minier', 'aisc', 'prime-de-risque-pays', 'roic', 'free-cash-flow', 'wacc'],
  logo:           '/analyse/waf.png',
  prixCible:      { bas: 3.9, haut: 5.6, devise: 'AUD' },   // NAV vie-de-mine au WACC HONNÊTE 20 % (Caa2 déjà intégré) : bear ~3,9 / central ~4,7 / bull ~5,6 AUD. La NAV conventionnelle à 5 % (6,9-10,1) serait l'upside "pays sans risque"
  marginOfSafety: 'forte',                                  // cours 2,67 vs NAV centrale au WACC honnête 20 % (~4,7) : décote ~43 % même en discountant honnêtement le Caa2 ; le marché price un taux implicite de ~45 %
  readingTime:    38,
  onePager: {
    thesis:    "Or bas coût du Burkina Faso, en route vers 500 000 oz avec Kiaka. Le marché le paie 0,3-0,7x sa valeur d'actif : décote frontière ou pépite ?",
    cours:     2.67,                  // cours ASX (AUD) au 01/07/2026
    coursDate: '2026-07-01',
    devise:    'AUD',
    range52w:  { low: 2.21, high: 3.91 },   // extrêmes 52 semaines (AUD, ASX)
  },

  // ── Métriques snapshot ─────────────────────────────────────────────────────
  // Structure FY2025 (AUD) ; valorisation au cours spot 2,67 AUD.
  metrics: {
    per:                6.5,   // Cours 2,67 AUD / BPA 0,413 AUD ; Yahoo trailing 6,51x ; PER forward ~3,0x (1er exercice Kiaka plein + or record)
    evEbitda:           3.2,   // EV (cap 3 050 M$AU - net cash 131) / EBITDA FY2025 961,5 M$AU ; Yahoo 3,23x
    fcfYield:          12.3,   // FCF 358,4 M$AU / EV 2 919 M$AU - déjà élevé alors que Kiaka finit sa construction (Yahoo N/M, FCF 2024 négatif) ; explose en régime plein
    roic:              34.3,   // NOPAT 603,6 M$AU / IC 1 758 M$AU - FY2025 (méthode La Thèse, net cash => IC = CP) ; Yahoo 33,1 %
    wacc:              19.8,   // CAPM : Rf 4,2 % + bêta 1,1 x ERP 13,7 % (dont CRP Burkina Faso 9,47 %, Caa2) - net cash, WACC ~= Re
    detteEbitda:       -0.14,  // Trésorerie nette 131 M$AU FY2025 (US$732m cash+bullion vs US$250m dette au Q1-2026) - net cash ; Yahoo -0,15
    croissanceCA3ans:  21.3,   // TCAC CA 4 ans (base 2021) - le 3 ans (+36,4 %) part du creux 2022 (CA -14,6 %), trompeur
    croissanceBPA3ans: 18.9,   // TCAC BPA 4 ans (base 2021) - le 3 ans (+37,5 %) part du creux 2022, trompeur ; 2024->2025 : BPA x2 (Kiaka + or)
    margeEbit:         55.7,   // EBIT 859,5 M$AU / CA 1 543 M$AU - FY2025 (Yahoo 53,9 %)
    margeBrute:        57.0,   // Marge brute FY2025
    payoutRatio:        0.0,   // Pas de dividende (cash réinvesti dans Kiaka et la croissance)
    currentRatio:       2.02,  // Actifs courants 991,5 M$AU / passifs courants 490,9 M$AU
    dso:               31.8,   // (Créances clients / CA) x 365
  },

  tendances: {
    per:       'baisse',   // de-rating mécanique : le bénéfice double (Kiaka + or) plus vite que le cours
    fcfYield:  'hausse',   // de négatif (creux Kiaka 2024) à +10,5 % (2025), explose en régime plein
    roic:      'hausse',   // creux 18 % (2024, dilution construction) -> 34 % (2025)
    margeEbit: 'hausse',   // 39 % (2023) -> 56 % (2025) - effet prix de l'or + volume Kiaka
  },

  updates: [
    {
      date: '2026-07-02',
      note: "Création de la fiche. Données FY2025 (états financiers, communiqué du 17/03/2026), présentations investisseurs (mars/mai 2026), réserves et ressources JORC, DFS Kiaka. FY2025 record : production 300 383 oz à AISC US$1 488/oz (Sanbrado 205 koz ; Kiaka 95 koz en montée en cadence), or réalisé US$3 525/oz, revenu 1 543 M$AU (+111 %), NPAT 567 M$AU, OCF 790 M$AU, FCF +358 M$AU, net cash. Réserves 7,0 Moz, ressources 12,2 Moz, durée de vie +11 ans. Cible 10 ans relevée à 533 koz/an moy. (pic 569 koz en 2029), +500 koz dès 2027. Cours 2,67 AUD au 01/07/2026 (52 sem. 2,21-3,91), or spot US$4 052/oz, AUD/USD 0,6896. Conviction : moyenne. Positionnement : surveillance (non détenue).",
    },
    {
      date: '2026-07-21',
      note: 'Résultats semestriels S1-2026 attendus. Source : Yahoo Finance API.',
    },
  ],

  chartData: {

    // ── CA consolidé sur 5 ans (M$AU) ────────────────────────────────────────
    // Croissance = prix de l'or réalisé x volume. 2022 = creux (baisse volume). 2025 = doublement
    // (Kiaka + or record). L'inflexion est nette et récente.
    revenue: [
      { year: 2021, value:  712.1 },
      { year: 2022, value:  608.2 },
      { year: 2023, value:  661.2 },
      { year: 2024, value:  730.0 },
      { year: 2025, value: 1543.0 },
    ],

    // ── Répartition géographique : deux mines, un seul pays (Burkina Faso) ─────
    geoRevenue: [
      { region: 'Burkina Faso', pct: 100 },
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    // Expansion des marges = prix de l'or (price-taker) + dilution des coûts fixes par le volume.
    marges: [
      { year: 2021, gross: 56.9, operating: 55.6, net: 30.1 },
      { year: 2022, gross: 46.6, operating: 44.5, net: 30.2 },
      { year: 2023, gross: 40.9, operating: 38.8, net: 24.9 },
      { year: 2024, gross: 48.3, operating: 46.4, net: 33.7 },
      { year: 2025, gross: 57.0, operating: 55.7, net: 36.8 },
    ],

    // ── ROIC sur 5 ans (%) ────────────────────────────────────────────────────
    // Creux 2024 (base de capital gonflée par la construction Kiaka avant que les onces n'arrivent),
    // rebond 2025 (Kiaka produit + or record).
    roic: [
      { year: 2021, value: 47.7 },
      { year: 2022, value: 26.1 },
      { year: 2023, value: 19.1 },
      { year: 2024, value: 18.1 },
      { year: 2025, value: 34.3 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // WACC élevé (~20 %) par le CRP Burkina Faso. Le spread se resserre en 2023-2024 (construction
    // Kiaka : capital investi avant les onces), puis se rouvre franchement en 2025.
    roicVsWacc: [
      { year: 2021, value: 47.7, wacc: 16.8 },
      { year: 2022, value: 26.1, wacc: 19.1 },
      { year: 2023, value: 19.1, wacc: 19.0 },
      { year: 2024, value: 18.1, wacc: 19.4 },
      { year: 2025, value: 34.3, wacc: 19.8 },
    ],

    // ── Free Cash Flow sur 5 ans (M$AU) ───────────────────────────────────────
    // FCF = OCF - capex. BRIDÉ, puis NÉGATIF (2023-2024) par le capex d'EXPANSION Kiaka
    // (construction), rebond massif en 2025 (Kiaka construit, or record). La signature du minier
    // en croissance qui sort de sa phase d'investissement.
    fcf: [
      { year: 2021, value:  294.4 },
      { year: 2022, value:   69.2 },
      { year: 2023, value:  -19.7 },
      { year: 2024, value: -235.7 },
      { year: 2025, value:  358.4 },
    ],

    // ── Graphiques de valorisation comparée (radar 8 branches, API Yahoo) ─────
    // Panel : producteurs d'or ouest-africains / frontière (médiane hors N/M). Le P/FCF et le
    // FCF Yield de WAF (N/M chez Yahoo, FCF 2024 négatif) sont substitués par les valeurs FY2025
    // calculées (base API Yahoo homogène pour les pairs).
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - West African Resources vs producteurs d\'or ouest-africains',
        data: [
          { label: 'PER',             valeur:   6.5, secteur:  11.3 },
          { label: 'EV/EBITDA',       valeur:   3.2, secteur:   6.5 },
          { label: 'P/FCF',           valeur:   8.5, secteur:  14.2 },
          { label: 'Marge EBIT %',    valeur:  53.9, secteur:  45.2 },
          { label: 'ROIC %',          valeur:  33.1, secteur:  22.2 },
          { label: 'FCF Yield %',     valeur:  12.0, secteur:   6.6 },
          { label: 'Dette/EBITDA',    valeur:  -0.15, secteur: -0.2 },
          { label: 'Croissance CA %', valeur: 176.4, secteur:  52.6 },
        ],
      },
      {
        id: 'vs_endeavour', type: 'radar',
        title: 'Valorisation comparée - West African Resources vs Endeavour Mining',
        concurrent1: 'Endeavour Mining',
        data: [
          { label: 'PER',             valeur:   6.5, concurrent1: 14.4 },
          { label: 'EV/EBITDA',       valeur:   3.2, concurrent1:  6.4 },
          { label: 'P/FCF',           valeur:   8.5, concurrent1: 15.2 },
          { label: 'Marge EBIT %',    valeur:  53.9, concurrent1: 54.0 },
          { label: 'ROIC %',          valeur:  33.1, concurrent1: 36.4 },
          { label: 'FCF Yield %',     valeur:  12.0, concurrent1:  6.6 },
          { label: 'Dette/EBITDA',    valeur:  -0.15, concurrent1: 0.09 },
          { label: 'Croissance CA %', valeur: 176.4, concurrent1: 29.5 },
        ],
      },
      {
        id: 'vs_perseus', type: 'radar',
        title: 'Valorisation comparée - West African Resources vs Perseus Mining',
        concurrent1: 'Perseus Mining',
        data: [
          { label: 'PER',             valeur:   6.5, concurrent1: 12.6 },
          { label: 'EV/EBITDA',       valeur:   3.2, concurrent1:  9.0 },
          { label: 'P/FCF',           valeur:   8.5, concurrent1: 14.2 },
          { label: 'Marge EBIT %',    valeur:  53.9, concurrent1: 41.5 },
          { label: 'ROIC %',          valeur:  33.1, concurrent1: 21.1 },
          { label: 'FCF Yield %',     valeur:  12.0, concurrent1:  6.6 },
          { label: 'Dette/EBITDA',    valeur:  -0.15, concurrent1: -1.11 },
          { label: 'Croissance CA %', valeur: 176.4, concurrent1:  4.6 },
        ],
      },
      {
        id: 'vs_orezone', type: 'radar',
        title: 'Valorisation comparée - West African Resources vs Orezone Gold',
        concurrent1: 'Orezone Gold',
        data: [
          { label: 'PER',             valeur:   6.5, concurrent1: 11.3 },
          { label: 'EV/EBITDA',       valeur:   3.2, concurrent1:  6.6 },
          { label: 'P/FCF',           valeur:   8.5, concurrent1: 14.2 },
          { label: 'Marge EBIT %',    valeur:  53.9, concurrent1: 46.7 },
          { label: 'ROIC %',          valeur:  33.1, concurrent1: 21.6 },
          { label: 'FCF Yield %',     valeur:  12.0, concurrent1: -2.7 },
          { label: 'Dette/EBITDA',    valeur:  -0.15, concurrent1: 0.09 },
          { label: 'Croissance CA %', valeur: 176.4, concurrent1: 124.8 },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────────
    metricHistory: [

      // ── Prix de l'or réalisé vs AISC (US$/oz) - LE graphique de la thèse ────
      // L'écart entre le prix réalisé (qui monte avec l'or) et l'AISC (bas, qui monte plus
      // lentement) = la marge cash par once. L'AISC 2025 remonte (montée en cadence Kiaka +
      // royalty or glissante), mais l'écart reste béant.
      {
        label: 'Or_Realise',
        name:  'Prix de l\'or réalisé',
        unit:  '$/oz',
        yMin:  0,
        data: [
          { year: 2021, value: 1808 },
          { year: 2022, value: 1798 },
          { year: 2023, value: 1944 },
          { year: 2024, value: 2391 },
          { year: 2025, value: 3525 },
        ],
        competitors: [
          {
            name:  'AISC (US$/oz)',
            color: '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value:  796 },
              { year: 2022, value: 1086 },
              { year: 2023, value: 1136 },
              { year: 2024, value: 1240 },
              { year: 2025, value: 1488 },
            ],
          },
        ],
      },

      // ── OCF, FCF et Capex (M$AU) - la phase d'investissement Kiaka ─────────
      // L'OCF explose (790 M$ en 2025), mais le capex de construction Kiaka a rendu le FCF
      // NÉGATIF en 2023-2024. Kiaka construit, le FCF rebondit à +358 M$ en 2025.
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash-flow opérationnel',
        unit:  'M$',
        yMin:  -300,
        data: [
          { year: 2021, value: 349.7 },
          { year: 2022, value: 184.1 },
          { year: 2023, value: 208.6 },
          { year: 2024, value: 251.6 },
          { year: 2025, value: 789.7 },
        ],
        competitors: [
          {
            name:  'Capex (construction Kiaka + maintien)',
            color: '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value:  55.3 },
              { year: 2022, value: 114.9 },
              { year: 2023, value: 228.3 },
              { year: 2024, value: 487.3 },
              { year: 2025, value: 431.3 },
            ],
          },
          {
            name:  'FCF (OCF - capex)',
            color: '#C9A84C',
            data: [
              { year: 2021, value:  294.4 },
              { year: 2022, value:   69.2 },
              { year: 2023, value:  -19.7 },
              { year: 2024, value: -235.7 },
              { year: 2025, value:  358.4 },
            ],
          },
        ],
      },

      // ── BPA dilué (AUD) ───────────────────────────────────────────────────
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '$',
        data: [
          { year: 2021, value: 0.209 },
          { year: 2022, value: 0.159 },
          { year: 2023, value: 0.142 },
          { year: 2024, value: 0.206 },
          { year: 2025, value: 0.413 },
        ],
      },

      // ── EV/EBITDA historique (au cours de clôture FY, base ASX/AUD) ────────
      // Chroniquement bas (2-4x) sur cinq ans : ce n'est PAS un de-rating, c'est une décote
      // frontière STRUCTURELLE et permanente. C'est tout le débat de la fiche.
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 2.3 },
          { year: 2022, value: 3.2 },
          { year: 2023, value: 3.4 },
          { year: 2024, value: 3.8 },
          { year: 2025, value: 3.4 },
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
        ],
      },

      // ── PER historique (au cours de clôture FY, base ASX/AUD) ──────────────
      // Là encore : ~7x depuis cinq ans, sans de-rating ni re-rating. La décote frontière est
      // un état permanent, pas une phase.
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 6.4 },
          { year: 2022, value: 7.4 },
          { year: 2023, value: 6.9 },
          { year: 2024, value: 7.0 },
          { year: 2025, value: 7.3 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 7.0 },
              { year: 2022, value: 7.0 },
              { year: 2023, value: 7.0 },
              { year: 2024, value: 7.0 },
              { year: 2025, value: 7.0 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (capitalisation, au cours de clôture FY) ──────
      // Négatif en 2023-2024 (construction Kiaka), rebond à +10,5 % en 2025. Comparé au taux
      // sans risque australien (~4 %).
      {
        label: 'FCFy',
        name:  'FCF Yield (capitalisation)',
        unit:  '%',
        data: [
          { year: 2021, value:  24.7 },
          { year: 2022, value:   5.8 },
          { year: 2023, value:  -2.0 },
          { year: 2024, value: -15.2 },
          { year: 2025, value:  10.5 },
        ],
        competitors: [
          {
            name:  'Obligation d\'État australienne 10 ans',
            color: '#52B788',
            data: [
              { year: 2021, value: 1.7 },
              { year: 2022, value: 4.1 },
              { year: 2023, value: 4.0 },
              { year: 2024, value: 4.4 },
              { year: 2025, value: 4.3 },
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
          { year: 2021, value: 69.0 },
          { year: 2022, value: 36.5 },
          { year: 2023, value: 24.7 },
          { year: 2024, value: 19.8 },
          { year: 2025, value: 40.9 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 16.8 },
              { year: 2022, value: 19.1 },
              { year: 2023, value: 19.0 },
              { year: 2024, value: 19.4 },
              { year: 2025, value: 19.8 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 47.7 },
              { year: 2022, value: 26.1 },
              { year: 2023, value: 19.1 },
              { year: 2024, value: 18.1 },
              { year: 2025, value: 34.3 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (%) - peu significatif (base de capital en forte expansion) ─
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value: -30.2 },
          { year: 2023, value:  -9.6 },
          { year: 2024, value:  38.2 },
          { year: 2025, value:  84.0 },
        ],
      },

      // ── Dette nette / EBITDA ──────────────────────────────────────────────
      // Trésorerie nette maintenue malgré la construction de Kiaka (léger passage en dette nette
      // 2023-2024, financement par tirage du prêt Kiaka), retour en net cash dès 2025.
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  -1,
        data: [
          { year: 2021, value: -0.23 },
          { year: 2022, value: -0.27 },
          { year: 2023, value:  0.02 },
          { year: 2024, value:  0.08 },
          { year: 2025, value: -0.14 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: -0.11 },
              { year: 2022, value: -0.11 },
              { year: 2023, value: -0.11 },
              { year: 2024, value: -0.11 },
              { year: 2025, value: -0.11 },
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
          { year: 2021, value: 1.45 },
          { year: 2022, value: 3.37 },
          { year: 2023, value: 3.69 },
          { year: 2024, value: 3.33 },
          { year: 2025, value: 2.02 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.77 },
              { year: 2022, value: 2.77 },
              { year: 2023, value: 2.77 },
              { year: 2024, value: 2.77 },
              { year: 2025, value: 2.77 },
            ],
          },
        ],
      },

      // ── CCC - DSO / DIO / DPO ─────────────────────────────────────────────
      // DIO élevé (146 j) : stocks de minerai et de doré. DSO 2023 exceptionnel (créances de
      // règlement), normalisé depuis.
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value:  21.8 },
          { year: 2022, value:  26.0 },
          { year: 2023, value: 128.0 },
          { year: 2024, value:  58.8 },
          { year: 2025, value:  31.8 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value:  70.2 },
              { year: 2022, value:  76.5 },
              { year: 2023, value:  97.0 },
              { year: 2024, value: 129.7 },
              { year: 2025, value: 145.8 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 126.2 },
              { year: 2022, value:  58.9 },
              { year: 2023, value:  77.1 },
              { year: 2024, value: 106.7 },
              { year: 2025, value:  97.1 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: -34.2 },
              { year: 2022, value:  43.6 },
              { year: 2023, value: 147.9 },
              { year: 2024, value:  81.8 },
              { year: 2025, value:  80.6 },
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
          { year: 2021, value: 0.89 },
          { year: 2022, value: 0.69 },
          { year: 2023, value: 0.54 },
          { year: 2024, value: 0.37 },
          { year: 2025, value: 0.57 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.61 },
              { year: 2022, value: 0.61 },
              { year: 2023, value: 0.61 },
              { year: 2024, value: 0.61 },
              { year: 2025, value: 0.61 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions (%) ──────────────────────────
      // Financement de la croissance (émissions 2022 et 2024) : ~5 % en 2024-2025, un pic en 2022.
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: 13.1 },
          { year: 2023, value:  0.0 },
          { year: 2024, value:  5.3 },
          { year: 2025, value:  5.7 },
        ],
      },

    ],
  },
}
