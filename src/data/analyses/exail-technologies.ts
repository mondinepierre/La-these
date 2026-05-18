// ─────────────────────────────────────────────────────────────────────────────
// Exail Technologies (EXA) — Valeur suivie
// Dernière mise à jour : mai 2026
// Sources : DEU 2021 (Groupe Gorgé), DEU 2022/2023/2024/2025 (Exail Technologies),
//           CP Q1 2026 publié le 15/04/2026, Excel La Thèse
// Devise : Euro (EUR) — cotation Euronext Paris (compartiment B), PEA-éligible
// Cours de référence pour les multiples snapshot : 119,00 € (TTM 31/03/2026)
// ─────────────────────────────────────────────────────────────────────────────
//
// HISTORIQUE DU PÉRIMÈTRE
//   - Avant 2022 : entité connue sous "Groupe Gorgé", périmètre incluant des
//     activités cédées depuis (Prodways en 3D printing notamment).
//   - T2 2022 : acquisition iXBlue (~312 M€), création du futur Exail.
//   - 2023 : cession Prodways, recentrage défense/maritime.
//   - 2023 : renommage Groupe Gorgé → Exail Technologies.
//   Conséquence : les séries pré-2022 ne sont pas pleinement comparables.
//   - BPA 2021 = 2,68 € intègre 38,3 M€ de résultat net sur activités non
//     poursuivies (cessions). Hors activités non poursuivies, BPA 2021 ≈ 0,49 €.
//   - L'historique segments n'est publié de manière comparable qu'à partir
//     de 2023 (premier exercice post-fusion complète).
//
// NOTES MÉTHODOLOGIQUES
//   ROIC La Thèse : NOPAT / IC avec dette plancher à 0
//                   CP 2025 = 501 M€ incluent 299 M€ d'obligations à durée
//                   indéterminée (hybrides émises en sept. 2025) et 88 M€ de
//                   minoritaires. Ces hybrides n'ont pas encore "travaillé"
//                   un exercice complet → ROIC publié dilué à 5,6 %.
//                   ROIC ex-hybrides (sur le périmètre opérationnel) = 13,9 %.
//                   La fiche affiche le ROIC standard La Thèse en métrique
//                   principale et explicite le retraitement dans le commentaire
//                   de la section Rentabilité (option (b) skill workflow).
//   WACC FY2025 : 6,94 %
//                 Rf Bund 10Y au 31/12/2025 : 2,86 % (pas de plancher 2 %)
//                 β = 0,84 (régression 5 ans mensuelle vs CAC 40 GR)
//                 ERP Damodaran France (CRP inclus) : 4,78 %
//                 Re = 6,86 % | Rd post-IS = 7,30 % (coupon hybrides élevé)
//                 E/V = 81 % | D/V = 19 % (re-rating capi 2025 réduit D/V)
//   ROIIC : Volatilité structurelle 2022-2024 (delta IC très variable du fait des
//           écritures de fusion et des hybrides 2025). Lecture multi-périodes
//           plus pertinente que YoY pour Exail.
//   Carnet de commandes : métrique centrale pour Exail. Source CP annuels.
//                         Carnet FY2025 = 1 074 M€ (+52 % YoY)
//                         Book-to-bill FY2025 = 1,76 (844 M€ prises / 478 M€ CA)
//                         Carnet/CA = 2,24 années de visibilité
//   PER trailing : non significatif au stade actuel (676x au cours 110,10 €).
//                  Le BPA 2025 = 0,176 € est plombé par amortissement PPA
//                  (~18 M€/an) et charges financières (27 M€/an, coupon
//                  hybrides élevé). Valorisation principale = DCF + EV/EBITDA.
//                  Calculateur PER produit avec BPA normalisé en N+5.
//
// GUIDANCE 2026 (CP Q1 2026 publié le 15/04/2026)
//   Croissance CA à deux chiffres confirmée
//   Croissance EBITDA supérieure à celle du CA (effet levier opérationnel)
//   Q1 2026 : CA 131 M€ (+40 %), dont Navigation & Robotique maritime
//   +51 % et Technologies avancées +10 %
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const exailTechnologies: AnalyseCard = {
  slug:           'exail-technologies',
  type:           'valeur',
  title:          'Exail Technologies',
  ticker:         'EXA',
  secteur:        'Défense',
  geo:            'France',
  conviction:     'forte',           // à valider par Pierre dans le Verdict
  positionnement: 'accumulation',      // entrée en zone d'achat technique (support 106-113 €)
  lastUpdated:    '2026-05-17',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '3 ans',
  excerpt:        "Pure-player français des technologies critiques de souveraineté maritime : navigation inertielle propriétaire (gyroscopes à fibre optique), drones autonomes anti-mines et anti-sous-marins, photonique. Premier exercice rentable en 2025 après la fusion ECA-iXBlue de 2022, carnet de commandes triplé en 4 ans, exposition directe au cycle de réarmement européen.",
  glossaire:      ['moat', 'cieemg', 'book-to-bill', 'roic', 'wacc', 'free-cash-flow'],
  logo:           '/analyse/exail-technologies.png',
  prixCible:      { bas: 132, haut: 170, devise: 'EUR' },   // à compléter après la section Valorisation
  marginOfSafety: 'correcte',                       // à compléter après la section Valorisation
  readingTime:    50,                                    // à compléter à la fin de rédaction

  onePager: {
    thesis:    "Navigation inertielle, drones maritimes, photonique : carnet à 1 Md€, marges en construction.",
    cours:     110.10,
    coursDate: '2026-05-15',          // à actualiser au moment de la publication
    devise:    'EUR',
    range52w:  { low: 17.36, high: 122.00 },   // à vérifier/actualiser au moment de la publication
  },

  // ── Métriques snapshot — FY2025 (au cours TTM 110,10 € sauf mention) ─────────
  metrics: {
    per:               676.1,    // Cours 110,10 € / BPA dilué FY2025 0,176 € — non significatif (voir notes)
    evEbitda:          18.1,     // EV (capi 1 868 M€ + dette nette -3 M€) / EBITDA 103,3 M€
    fcfYield:          3.5,      // FCF 65 M€ / EV 1 865 M€ - dénominateur EV (EV ≈ capi car tréso nette)
    roic:              5.6,      // ROIC Cash Adjusted standard La Thèse — voir notes méthodologiques
    wacc:              6.9,      // CAPM FY2025 — voir notes
    detteEbitda:      -0.03,     // Dette nette -3 M€ / EBITDA 103 M€ — trésorerie nette quasi nulle
    croissanceCA3ans:  38.4,     // TCAC CA 2022-2025 : 180 → 478,5 M€ (rupture iXBlue dans la base)
    croissanceBPA3ans: 0,        // CAGR BPA dilué 2022-2025 non calculable (BPA 2022 négatif)
    margeEbit:         6.6,      // EBIT courant 31,7 M€ / CA 478,5 M€
    margeBrute:        53.8,     // (CA - Coût des ventes) / CA - définition standard La Thèse
    payoutRatio:       9.9,      // Pas de dividende versé sur l'exercice 2025 (réinvestissement)
    currentRatio:      1.79,     // Actifs courants 694,6 M€ / Passifs courants 387,9 M€
    dso:               46,       // (Créances clients 60,9 / CA 478,5) × 365
  },

  tendances: {
    per:       'hausse',   // Non lisible sur PER trailing (BPA volatile post-fusion) — re-rating sur EV/EBITDA
    fcfYield:  'baisse',   // FCF Yield divisé par 4 sur 2024-2025 par effet re-rating de la capi
    roic:      'hausse',   // 0,6 % (2022) → 5,6 % (2025) — réparation continue, spread WACC réduit de -6,9 à -1,4
    margeEbit: 'hausse',   // 0,6 % (2022) → 6,6 % (2025) — levier opérationnel visible
  },

  updates: [
    {
      date: '2026-05-17',
      note: "Création de la fiche, données FY2025 (DEU Exail 2025, CP Q1 2026 publié le 15/04/2026). Premier exercice rentable sur les activités poursuivies depuis 2021. Carnet de commandes record à 1 074 M€ (+52 % YoY), book-to-bill 1,76. Émission obligations hybrides 296 M€ en sept. 2025 (+ émission complémentaire 256 M€ en janv. 2026) en préparation du refinancement bancaire 2026 et du dénouement ICG/minoritaires.",
    },
  ],

  chartData: {

    // ── Ruptures de série ─────────────────────────────────────────────────────
    segmentBreaks: [
      { year: 2022, label: "Acquisition iXBlue (T2 2022, ~312 M€) — création du périmètre Exail" },
      { year: 2023, label: "Cession Prodways - renommage Groupe Gorgé → Exail Technologies" },
    ],

    // ── CA sur 5 ans (M€) ─────────────────────────────────────────────────────
    // 2021 : Groupe Gorgé sans iXBlue
    // 2022 : Groupe Gorgé + 6 mois iXBlue (acquisition T2)
    // 2023-2025 : périmètre Exail Technologies complet
    revenue: [
      { year: 2021, value: 178.273 },
      { year: 2022, value: 180.052 },
      { year: 2023, value: 322.820 },
      { year: 2024, value: 373.062 },
      { year: 2025, value: 478.545 },
    ],

    // ── Répartition géographique du CA — FY2025 ────────────────────────────────
    // Source : DEU 2025 — total 100 % hors ligne d'agrégation "Autres" du tableau
    // historique pré-fusion (exclue en 2025 sur indication de Pierre).
    // Régions du composant GeoMap : France n'est pas une zone autonome, donc
    // France 21,2 % + Europe hors France 47,1 % = Europe 68,3 %.
    // À expliciter dans le commentaire MDX (France isolément mentionnée).
    geoRevenue: [
      { region: 'Europe',         pct: 47.05 },
      { region: 'France',         pct: 21.19 },    // dont France 21,2 % et Europe hors France 47,1 %
      { region: 'Asie',           pct: 22.35 },
      { region: 'Amériques',      pct: 8.64 },
      { region: 'Océanie',        pct: 0.40 },
      { region: 'Afrique',        pct: 0.36 },
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    // Marge brute (gross) : (CA − Coût des ventes) / CA — définition stricte
    // Marge opérationnelle (operating) : EBIT courant / CA
    // Marge nette (net) : Résultat net / CA
    marges: [
      { year: 2021, gross: 58.3, operating:  8.0, net:  4.8 },
      { year: 2022, gross: 60.2, operating:  0.6, net: -5.8 },
      { year: 2023, gross: 57.3, operating:  2.2, net: -5.9 },
      { year: 2024, gross: 55.4, operating:  4.8, net: -1.2 },
      { year: 2025, gross: 53.8, operating:  6.6, net:  1.2 },
    ],

    // ── ROIC simple sur 5 ans (%) ─────────────────────────────────────────────
    roic: [
      { year: 2021, value: 7.0 },
      { year: 2022, value: 0.6 },
      { year: 2023, value: 1.5 },
      { year: 2024, value: 5.8 },
      { year: 2025, value: 5.6 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // WACC 2021 (3,0 %) bas car Rf historique négatif et β/E/V Groupe Gorgé pré-fusion.
    // Pas de plancher 2 % appliqué : cohérence avec convention La Thèse.
    // Spread se réduit de -6,9 pt (2022) à -1,4 pt (2025) → trajectoire de
    // réparation économique. À commenter dans la section Rentabilité.
    roicVsWacc: [
      { year: 2021, value: 7.0, wacc: 3.0 },
      { year: 2022, value: 0.6, wacc: 7.5 },
      { year: 2023, value: 1.5, wacc: 7.4 },
      { year: 2024, value: 5.8, wacc: 10.0 },
      { year: 2025, value: 5.6, wacc: 6.9 },
    ],

    // ── Free Cash Flow sur 5 ans (M€) ─────────────────────────────────────────
    // FCF = OCF − Capex industriel (corporels + incorporels, hors acquisitions)
    // 2021 négatif : effet BFR pré-fusion + restructuration Groupe Gorgé
    // Trajectoire d'amélioration continue depuis 2022 (post-fusion)
    fcf: [
      { year: 2021, value: -37.119 },
      { year: 2022, value:  29.249 },
      { year: 2023, value:  23.838 },
      { year: 2024, value:  56.682 },
      { year: 2025, value:  64.988 },
    ],

    // ── CA par segment (M€) ───────────────────────────────────────────────────
    // Comparabilité limitée aux exercices 2023-2025 (post-fusion complète).
    // 2021/2022 : segments non publiés sous cette nomenclature.
    // Éliminations intra-groupe et structure : exclues du visuel pour lisibilité,
    // mentionnées en commentaire MDX.
    segmentRevenue: {
      unit:  'M€',
      total: { show: false, label: 'CA total consolidé' },
      data: [
        { year: 2023, segments: [
          { name: 'Navigation & Robotique maritime', value: 245.547 },
          { name: 'Technologies avancées',           value:  84.896 },
        ]},
        { year: 2024, segments: [
          { name: 'Navigation & Robotique maritime', value: 289.004 },
          { name: 'Technologies avancées',           value:  97.332 },
        ]},
        { year: 2025, segments: [
          { name: 'Navigation & Robotique maritime', value: 373.009 },
          { name: 'Technologies avancées',           value: 177.951 },
        ]},
      ],
    },

    // ── Graphiques de valorisation comparée ───────────────────────────────────
    // Sources : Pairs depuis l'onglet Excel "Comparaison sectorielle" — données
    // au cours du moment de la rédaction (mai 2026).
    // Métriques Exail recalculées au cours 110,10 € (capi 2 020 M€, EV 2 017 M€).
    // PER trailing exclu des radars : non significatif (676x), remplacé par
    // 'TCAC CA 3 ans %' qui est la métrique de croissance pertinente pour Exail.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: "Valorisation comparée - Exail vs secteur défense/photonique (médiane de 15 pairs)",
        data: [
          { label: 'EV/EBITDA',       valeur: 19.5, secteur: 19.0 },
          { label: 'P/FCF',           valeur: 31.1, secteur: 26.2 },
          { label: 'Marge EBIT %',    valeur:  6.6, secteur: 11.3 },
          { label: 'ROIC %',          valeur:  5.6, secteur:  8.9 },
          { label: 'FCF Yield %',     valeur:  3.2, secteur:  3.8 },
          { label: 'Dette/EBITDA',    valeur: -0.03, secteur:  1.5 },
          { label: 'TCAC CA 3 ans %', valeur: 38.4, secteur: 22.2 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: "Valorisation comparée - Exail vs Kongsberg Gruppen (défense maritime nordique)",
        concurrent1: 'Kongsberg Gruppen',
        data: [
          { label: 'EV/EBITDA',       valeur: 19.5, concurrent1: 39.4 },
          { label: 'P/FCF',           valeur: 31.1, concurrent1: 26.2 },
          { label: 'Marge EBIT %',    valeur:  6.6, concurrent1: 16.7 },
          { label: 'ROIC %',          valeur:  5.6, concurrent1: 14.7 },
          { label: 'FCF Yield %',     valeur:  3.2, concurrent1:  3.8 },
          { label: 'Dette/EBITDA',    valeur: -0.03, concurrent1: -2.4 },
          { label: 'TCAC CA 3 ans %', valeur: 38.4, concurrent1: 27.1 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: "Valorisation comparée - Exail vs Thales (défense intégrateur français)",
        concurrent1: 'Thales',
        data: [
          { label: 'EV/EBITDA',       valeur: 19.5, concurrent1: 15.5 },
          { label: 'P/FCF',           valeur: 31.1, concurrent1: 17.6 },
          { label: 'Marge EBIT %',    valeur:  6.6, concurrent1: 10.5 },
          { label: 'ROIC %',          valeur:  5.6, concurrent1:  9.8 },
          { label: 'FCF Yield %',     valeur:  3.2, concurrent1:  5.7 },
          { label: 'Dette/EBITDA',    valeur: -0.03, concurrent1:  0.6 },
          { label: 'TCAC CA 3 ans %', valeur: 38.4, concurrent1:  7.1 },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────────
    metricHistory: [

      // ── EV/EBITDA historique ──────────────────────────────────────────────
      // EV calculé au cours de clôture FY chaque année.
      // 2022 (15,8x) reflète l'effet de la fusion (EBITDA encore comprimé).
      // 2025 (13,4x) au cours de clôture 81,5 € — moyenne 5 ans 11,6x.
      // Au cours actuel ~110,10 € : EV/EBITDA = 19,5x (visible dans le radar secteur).
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 12.2 },
          { year: 2022, value: 15.8 },
          { year: 2023, value:  9.3 },
          { year: 2024, value:  7.5 },
          { year: 2025, value: 13.4 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 11.6 },
              { year: 2022, value: 11.6 },
              { year: 2023, value: 11.6 },
              { year: 2024, value: 11.6 },
              { year: 2025, value: 11.6 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex ─────────────────────────────────────────────────
      // Capex industriel inclut immobilisations corporelles et incorporelles
      // (hors investissements financiers et acquisitions de filiales).
      // Trajectoire d'amélioration de l'OCF (45 → 100 M€) et de stabilité du
      // capex en valeur absolue (15-35 M€) → effet de levier sur le FCF.
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'M€',
        data: [
          { year: 2021, value: -11.827 },
          { year: 2022, value:  46.360 },
          { year: 2023, value:  55.649 },
          { year: 2024, value:  91.387 },
          { year: 2025, value: 100.080 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: -37.119 },
              { year: 2022, value:  29.249 },
              { year: 2023, value:  23.838 },
              { year: 2024, value:  56.682 },
              { year: 2025, value:  64.988 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 25.292 },   // incorporels + corporels (hors acquisitions)
              { year: 2022, value: 17.111 },
              { year: 2023, value: 31.811 },
              { year: 2024, value: 34.705 },
              { year: 2025, value: 35.092 },
            ],
          },
        ],
      },

      // ── BPA dilué ──────────────────────────────────────────────────────────
      // BPA 2021 (2,68 €) intègre 38,3 M€ de RN sur activités non poursuivies
      // (cessions Prodways principalement). Hors activités non poursuivies,
      // BPA 2021 ≈ 0,49 €. Annoter dans le MDX.
      // 2022-2024 : BPA négatif (charges PPA + restructuration).
      // 2025 : premier BPA positif post-fusion (0,176 €) — non encore lissé.
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '€',
        data: [
          { year: 2021, value:  2.684 },     // dont 2,19 € d'activités non poursuivies (cessions)
          { year: 2022, value: -0.473 },
          { year: 2023, value:  0.932 },     // dont 1,84 € d'activités non poursuivies (cession Prodways)
          { year: 2024, value: -0.214 },
          { year: 2025, value:  0.176 },
        ],
      },

      // ── Carnet de commandes (clé pour Exail) ──────────────────────────────
      // Métrique centrale du business : visibilité du CA futur.
      // Carnet FY2025 = 1 074 M€ = 2,24 années de CA 2025.
      // Croissance +52 % YoY portée par contrat 400 M€ remporté en T1 2025
      // (lutte anti-mines, programme allié confidentiel) + dynamique navigation.
      {
        label: 'Orderbook',
        name:  'Carnet de commandes',
        unit:  'M€',
        yMin:  0,
        data: [
          { year: 2021, value: 489.885 },
          { year: 2022, value: 628.304 },
          { year: 2023, value: 630.268 },
          { year: 2024, value: 708.392 },
          { year: 2025, value: 1073.947 },
        ],
        competitors: [
          {
            name:   'CA annuel (référence)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 178.273 },
              { year: 2022, value: 180.052 },
              { year: 2023, value: 322.820 },
              { year: 2024, value: 373.062 },
              { year: 2025, value: 478.545 },
            ],
          },
        ],
      },

      // ── ROCE vs WACC vs ROIC ─────────────────────────────────────────────
      // ROCE = NOPAT / (CP + dette totale − trésorerie)
      // Différence avec ROIC : ROCE intègre la dette totale, pas la dette nette.
      // Pour Exail en trésorerie nette 2025, ROIC > ROCE car la dette totale
      // (325 M€) reste comptabilisée même si la trésorerie l'efface presque.
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        data: [
          { year: 2021, value: 9.4 },
          { year: 2022, value: 0.2 },
          { year: 2023, value: 1.5 },
          { year: 2024, value: 3.8 },
          { year: 2025, value: 4.1 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 3.0 },
              { year: 2022, value: 7.5 },
              { year: 2023, value: 7.4 },
              { year: 2024, value: 10.0 },
              { year: 2025, value: 6.9 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 7.0 },
              { year: 2022, value: 0.6 },
              { year: 2023, value: 1.5 },
              { year: 2024, value: 5.8 },
              { year: 2025, value: 5.6 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (1 an glissant) ──────────────────────────────────────
      // Volatilité structurelle 2022-2024 du fait des écritures de fusion et
      // de l'émission d'hybrides 2025. La valeur 2024 (-6,8) reflète une
      // dégradation ponctuelle du NOPAT incrémental.
      // Lecture multi-périodes préférée (graphe suivant).
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value: 82.7 },     // base 2021 très faible (IC pré-fusion 149 M€)
          { year: 2023, value:  1.3 },     // saut IC post-fusion lisse l'incrémental
          { year: 2024, value: -680.3 },   // delta IC quasi-nul → ratio extrême (à annoter)
          { year: 2025, value: -4.2 },     // delta IC réapparaît, NOPAT marginal négatif
        ],
      },

      // ── ROIIC glissant multi-périodes ─────────────────────────────────────
      // Lissage 1 à 4 ans pour atténuer la volatilité 2022-2024.
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value:  -4.2 },
          { year: 2, value: -73.7 },
          { year: 3, value:   8.0 },
          { year: 4, value:   5.8 },
        ],
      },

      // ── PER historique ────────────────────────────────────────────────────
      // PER trailing non significatif sur cette période :
      //   - 2022/2024 négatif (RN négatif)
      //   - 2023 distordu par 31 M€ de RN sur activités non poursuivies
      //   - 2025 = 462x au cours de clôture (BPA artificiellement bas)
      // Le graphique reste publié pour la cohérence inter-fiches mais le
      // commentaire MDX souligne sa non-significativité.
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value:  32.8 },
          { year: 2022, value: -65.2 },
          { year: 2023, value: -17.2 },
          { year: 2024, value: -65.2 },    // BPA négatif → PER négatif (à interpréter avec prudence)
          { year: 2025, value: 462.5 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (significative)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 32.8 },
              { year: 2022, value: 32.8 },
              { year: 2023, value: 32.8 },
              { year: 2024, value: 32.8 },
              { year: 2025, value: 32.8 },
            ],
          },
        ],
      },

      // ── FCF Yield historique ──────────────────────────────────────────────
      // FCF Yield (EV) — convention La Thèse.
      // Compression 2024-2025 par effet capi (re-rating ×4,7).
      // 2021 : négatif (FCF négatif).
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: -10.1 },
          { year: 2022, value:   4.8 },
          { year: 2023, value:   4.0 },
          { year: 2024, value:  10.2 },
          { year: 2025, value:   4.7 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (post-fusion 2022-2025)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 5.9 },
              { year: 2022, value: 5.9 },
              { year: 2023, value: 5.9 },
              { year: 2024, value: 5.9 },
              { year: 2025, value: 5.9 },
            ],
          },
          {
            name:  'Taux sans risque (Bund 10Y)',
            color: '#52B788',
            data: [
              { year: 2021, value: -0.2 },
              { year: 2022, value:  2.6 },
              { year: 2023, value:  2.0 },
              { year: 2024, value:  2.4 },
              { year: 2025, value:  2.9 },
            ],
          },
        ],
      },

      // ── CCC — DSO / DIO / DPO / Cash Conversion Cycle ────────────────────
      // Amélioration spectaculaire 2022 → 2025 (196 j → 66 j).
      // 2022 reflète l'année de fusion (BFR temporairement dégradé).
      // 2025 = 66 jours sur niveau industriel défense classique.
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value:  93 },
          { year: 2022, value: 110 },
          { year: 2023, value:  73 },
          { year: 2024, value:  65 },
          { year: 2025, value:  46 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 100 },
              { year: 2022, value: 288 },
              { year: 2023, value: 160 },
              { year: 2024, value: 146 },
              { year: 2025, value: 120 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 143 },
              { year: 2022, value: 202 },
              { year: 2023, value: 129 },
              { year: 2024, value:  91 },
              { year: 2025, value: 102 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value:  50 },
              { year: 2022, value: 196 },
              { year: 2023, value: 105 },
              { year: 2024, value: 120 },
              { year: 2025, value:  66 },
            ],
          },
        ],
      },

      // ── Current Ratio ─────────────────────────────────────────────────────
      // 2025 saute à 1,79x sous l'effet de la trésorerie boostée par l'émission
      // d'hybrides 296 M€ (sept. 2025). Niveau pré-émission ~1,25-1,40x.
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.37 },
          { year: 2022, value: 1.42 },
          { year: 2023, value: 1.32 },
          { year: 2024, value: 1.25 },
          { year: 2025, value: 1.79 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.43 },
              { year: 2022, value: 1.43 },
              { year: 2023, value: 1.43 },
              { year: 2024, value: 1.43 },
              { year: 2025, value: 1.43 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA ─────────────────────────────────────────────
      // 2022-2024 : dette nette élevée (acquisition iXBlue financée par dette).
      // 2025 : dette nette quasi nulle (-3 M€) du fait de l'émission d'hybrides
      // (296 M€) classés en CP (durée indéterminée), qui ont remboursé une partie
      // de la dette bancaire et alimenté la trésorerie.
      // À annoter : le retour en "trésorerie nette" est une convention IFRS
      // sur les hybrides ; économiquement, le service de la dette reste lourd
      // (coupon hybrides 8-10 % typique).
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value:  2.8 },
          { year: 2022, value:  7.0 },
          { year: 2023, value:  4.2 },
          { year: 2024, value:  3.5 },
          { year: 2025, value: -0.03 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 3.5 },
              { year: 2022, value: 3.5 },
              { year: 2023, value: 3.5 },
              { year: 2024, value: 3.5 },
              { year: 2025, value: 3.5 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      // 2022 baisse à 0,20 (sous-utilisation post-fusion, base d'actifs gonflée
      // par goodwill et PPA).
      // Trajectoire d'amélioration 2023-2024 : 0,40 → 0,45.
      // 2025 (0,38) : redescente sous l'effet du bilan gonflé par cash hybrides.
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.51 },
          { year: 2022, value: 0.20 },
          { year: 2023, value: 0.40 },
          { year: 2024, value: 0.45 },
          { year: 2025, value: 0.38 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.39 },
              { year: 2022, value: 0.39 },
              { year: 2023, value: 0.39 },
              { year: 2024, value: 0.39 },
              { year: 2025, value: 0.39 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions ──────────────────────────────
      // Stable : pas de programme de rachat majeur, pas d'attributions massives.
      // Légère concentration tendancielle (-0,1 à -0,7 %/an).
      {
        label: 'Dilution',
        name:  "Variation du nombre d'actions (%)",
        unit:  '%',
        data: [
          { year: 2022, value: -0.66 },
          { year: 2023, value: -0.39 },
          { year: 2024, value: -0.24 },
          { year: 2025, value: -0.17 },
        ],
      },

      // ── Dividende par action ──────────────────────────────────────────────
      // Pas de politique de dividende régulière depuis la fusion iXBlue.
      // 2021 : dividende exceptionnel 4,11 €/action (cession Prodways).
      // 2023 : dividende symbolique 0,27 €/action.
      // 2022, 2024, 2025 : aucun dividende versé.
      // Le graphique illustre visuellement l'absence de politique régulière.
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '€',
        data: [
          { year: 2021, value: 4.11 },
          { year: 2022, value: 0.00 },
          { year: 2023, value: 0.27 },
          { year: 2024, value: 0.00 },
          { year: 2025, value: 0.00 },
        ],
      },

      // ── Payout Ratio ──────────────────────────────────────────────────────
      // Pas de politique de dividende régulière depuis la fusion.
      // 2021 : dividende exceptionnel 4,11 €/action (cessions Groupe Gorgé).
      // 2022/2024/2025 : pas de dividende versé.
      // 2023 : dividende symbolique 0,27 €/action.
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 68.4 },
          { year: 2022, value:  0.0 },
          { year: 2023, value:  0.0 },     // dividende sur exercice non poursuivi
          { year: 2024, value:  0.0 },
          { year: 2025, value:  0.0 },
        ],
      },

      // ── Allocation du capital — retour actionnaires vs Capex ──────────────
      // data = Retour total (dividendes + rachats nets)
      // concurrent1 = Rachats d'actions bruts
      // concurrent2 (dashed) = Capex industriel
      // Profil : 100 % du capex est tourné vers la croissance organique.
      // Pas de retour aux actionnaires significatif depuis 2021.
      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires',
        unit:  'M€',
        data: [
          { year: 2021, value: 9.082 },    // dividende exceptionnel 5,9 + autocontrôle 3,2
          { year: 2022, value: 0.848 },
          { year: 2023, value: 3.017 },
          { year: 2024, value: 1.187 },
          { year: 2025, value: 0.084 },
        ],
        competitors: [
          {
            name:  "Rachats d'actions",
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 3.213 },
              { year: 2022, value: 0.264 },
              { year: 2023, value: 2.889 },
              { year: 2024, value: 0.821 },
              { year: 2025, value: 0.000 },     // 2025 : cessions nettes d'autocontrôle (+0,499 M€)
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 25.292 },
              { year: 2022, value: 17.111 },
              { year: 2023, value: 31.811 },
              { year: 2024, value: 34.705 },
              { year: 2025, value: 35.092 },
            ],
          },
        ],
      },

    ],
  },
}