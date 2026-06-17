// ─────────────────────────────────────────────────────────────────────────────
// Nestlé S.A. (SIX Swiss Exchange : NESN ; Yahoo NESN.SW) - Analyse ponctuelle (riche)
// Devise CHF, enveloppe CTO (valeur suisse, NON éligible PEA).
// Snapshot : fondamentaux FY2025 (clos 31/12/2025), multiples ancrés au cours spot
//            79,58 CHF (16/06/2026), quasi identique à la clôture FY2025 (~78,7).
//
// CONVENTIONS / CHOIX MÉTHODO (validés Pierre, juin 2026) :
//  - WACC convention SUISSE : Rf = obligation Confédération suisse 10 ans (0,28 % au
//    31/12/2025, série 1,62/0,70/0,25/0,28, -0,14 en 2021), PAS le Bund. ERP Damodaran
//    4,23 % + CRP Suisse 0,0 % (AAA, déjà nul). β 0,978 = régression 61 mois vs SMI
//    Cum Div (Total Return). WACC 2025 = 3,90 %, tiré par le Rf suisse quasi nul.
//  - DCF NEUTRALISÉ : au WACC observé 3,90 %, le DCF sort une juste valeur absurde
//    (~355 CHF, dénominateur WACC-g = 1,4 %). C'est un artefact des taux suisses, pas
//    une réalité Nestlé. Valo PILOTÉE PAR LE PER + triangulation du rendement attendu.
//    DCF montré au WACC normalisé (~6,5 % -> ~85 CHF) en lecture croisée.
//  - PER sur BPA SOUS-JACENT (underlying) 4,42 CHF (publié Nestlé), PAS le BPA publié
//    3,51 (déprimé par impairments/restructuration 2025). 79,58 / 4,42 = 18,0x ; forward
//    consensus 17,0x. C'est l'écart à l'Excel (qui prend 3,51) validé par Pierre.
//  - Croissance reparamétrée à la main (le calculateur Excel sort central +0,87 % /
//    bull -12,76 %, cassé par le pic L'Oréal 2021 et le creux 2025). Retenu sur BPA
//    sous-jacent : bear 2 % / central 5 % / bull 7 %. PER cible 16x / 18x / 20x.
//  - Dividende dans la zone juste : traité EN BONUS (rendement ~3,9 % > seuil 3 %, le
//    calculateur Excel avait dividende = 0). Juste valeur sous deux lentilles (cours
//    seul r=10 % ~63 ; rendement total avec dividende ~75).
//  - Dividende convention DEU : 3,10 CHF au titre de 2025 (proposé, versé 2026). Pas de
//    prime de fidélité (spécifique L'Oréal). Rachats EFFONDRÉS : 10,7 Md (2022) -> 0,2 Md
//    (2025), la nouvelle direction priorise le désendettement (Capex_Action).
//  - PARTICIPATION L'ORÉAL : 107 621 021 actions (~20,1 %), valeur comptable 9,0 Md CHF
//    mais ~38 Md à la valeur de marché (~15 CHF/action Nestlé). Valeur cachée / SOTP,
//    PAS un retraitement du DCF (participation stratégique, fiscalité de cession lourde).
//  - ROIC La Thèse 10,7 % (NOPAT 9 262 / IC 86 331, goodwill inclus, dette plancher 0) ;
//    ex-goodwill 15,8 %. Sur le radar de valo, ROIC = 10,7 % La Thèse (cellule Yahoo
//    8-9 %). ROCE Excel = EBIT avant IS / (CP + dette LT) = 15,5 %.
//  - Nestlé n'est PAS en trésorerie nette : dette nette 53 273 (dette totale 57 852 -
//    cash & équiv. 4 579), dette nette/EBITDA 3,35x (Nestlé annonce 2,85x sur EBITDA
//    ajusté). FCF Yield calculé sur EV.
//
// PIÈGES EXCEL CORRIGÉS : libellés "bund"/"$"/"Finviz" = artefacts template (tout CHF,
//  Rf = Confédération suisse, β = régression vs SMI TR). Marge op. = EBIT publié 13,7 %
//  (UTOP sous-jacente 16,1 % notée en prose). Revenue chart = ligne "Sales" 89 490 (pas
//  "total revenues" 89 885 incl. autres produits). FCF La Thèse = OCF - capex = 10 993
//  (Nestlé publie un "FCF" de 9,2 Md sur sa définition). Segments : structure à 7
//  catégories affichée 2022-2025 (PetCare reclassé en 2022, 2021 non comparable).
//  range52w = extrêmes INTRADAY (69,90 le 04/08/2025 ; 85,06 le 20/10/2025).
//
// GOUVERNANCE (sources : rapport de gouvernance + communiqué FY2025) : 3 CEO en ~13 mois
//  - Mark Schneider (jusqu'à août 2024) -> Laurent Freixe (sept. 2024, parti le
//  01/09/2025) -> Philipp Navratil (au comex 01/2025, CEO depuis 09/2025). Président :
//  Paul Bulcke -> Pablo Isla (ex-Inditex). CFO Anna Manz.
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const NESTLE: AnalyseCard = {
  slug:           'nestle',
  type:           'ponctuelle',
  title:          'Nestlé',
  ticker:         'NESN',
  secteur:        'Consommation',
  geo:            'Monde',
  conviction:     'forte',              // Moat large (échelle, distribution, portefeuille de marques) mais croissance calée, gouvernance chahutée, menace GLP-1 : leader mondial, pas monopole -> pas 'exceptionnelle'
  positionnement: 'surveillance',       // Hors position ; cours proche de la juste valeur, légère prime sur base r=10 % stricte
  lastUpdated:    '2026-06-16',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Le numéro un mondial de l'alimentaire (café Nescafé et Nespresso, Purina, Nutrition), payé 18x les bénéfices sous-jacents après une chute de 40 % du cours : un compounder de qualité enfin à prix raisonnable, ou un piège de valeur sur une croissance en panne ?",
  glossaire:      ['moat', 'pricing-power', 'roic', 'free-cash-flow', 'per-valorisation', 'wacc'],
  logo:           '/analyse/nestle.png',
  prixCible:      { bas: 87, haut: 116, devise: 'CHF' },  // Central PER 101,5 CHF (BPA sous-jacent 2030 5,64 x 18x) +/- MoE 14,7 % (β 0,978 x 15 %)
  marginOfSafety: 'faible',                               // Cours 79,58 vs juste valeur centrale ~63 (r=10 % strict) à ~75 (rendement total) : prix équilibré, légère prime
  readingTime:    38,    // provisoire - recalculé depuis le compte de mots du MDX
  onePager: {
    thesis:    "Géant alimentaire mondial, multiple tombé de 25x à 18x : croissance en panne et gouvernance chahutée, mais ROIC 11 % et 3,9 % de rendement.",
    cours:     79.58,
    coursDate: '2026-06-16',
    devise:    'CHF',
    range52w:  { low: 69.90, high: 85.06 },
  },

  // ── Métriques snapshot - FY2025, multiples au cours spot 79,58 CHF (~clôture FY2025) ──
  metrics: {
    per:               22.7,   // 79,58 / BPA publié 3,51 (sous-jacent 4,42 -> 18,0x ; forward consensus 17,0x)
    evEbitda:          16.2,   // EV ~258 300 (capi 205 038 + dette nette 53 273) / EBITDA 15 910
    fcfYield:          4.3,    // FCF 10 993 / EV (sur EV, pas capi)
    roic:              10.7,   // ROIC La Thèse : NOPAT 9 262 / IC 86 331 (CP + dette nette, goodwill incl.). Ex-goodwill 15,8 %
    wacc:              3.9,    // CAPM convention suisse : Rf Confédération 0,28 %, β 0,978 (vs SMI TR), ERP 4,23 % (CRP Suisse 0)
    detteEbitda:       3.35,   // Dette nette 53 273 / EBITDA 15 910. Nestlé annonce 2,85x sur EBITDA ajusté
    croissanceCA3ans:  -1.8,   // TCAC CA publié 2022->2025 (rongé par le FX, -5,7 % en 2025). Organique 2025 : +3,5 %
    croissanceBPA3ans: 0.9,    // TCAC BPA publié 2022->2025 (quasi plat ; BPA sous-jacent stable ~4,4-4,8)
    margeEbit:         13.7,   // EBIT publié 12 277 / ventes. Marge opérationnelle SOUS-JACENTE (UTOP) 16,1 %
    margeBrute:        45.8,
    payoutRatio:       86.7,   // Dividendes 8 021 / résultat net 9 254 (déprimé). Sur BPA sous-jacent : ~70 %
    currentRatio:      0.79,   // Structurellement < 1 (BFR négatif, modèle de grande conso)
    dso:               35.5,   // (Créances clients brutes 8 744 / ventes) x 365
  },

  tendances: {
    per:       'baisse',   // Dé-rating : ~22-25x historique -> 17-18x (sous-jacent / forward)
    fcfYield:  'hausse',   // FCF Yield remonté avec la baisse du cours (2,2 % en 2021 -> 4,3 % en 2025)
    roic:      'baisse',   // 13,3 % (2023) -> 10,7 % (2025), érodé par la compression de marge
    margeEbit: 'baisse',   // Marge UTOP 17,2 % (2024) -> 16,1 % (2025), -110 bps
  },

  updates: [
    {
      date: '2026-06-16',
      note: 'Création de la fiche. Snapshot FY2025 (clos 31/12/2025, résultats publiés 19/02/2026), cours spot 79,58 CHF (16/06/2026).',
    },
    {
      date: '2026-07-24',
      note: 'Résultats S1-2026 attendus. Source : Nestlé / Yahoo Finance.',
    },
  ],

  chartData: {

    // Structure de segments restated : PetCare reclassé en segment distinct en 2022.
    // 2021 non comparable -> SegmentGraph affiché sur 2022-2025.
    segmentBreaks: [
      { year: 2022, label: 'Réorganisation : structure à 7 catégories de produits' },
    ],

    // ── CA sur 5 ans (M CHF) - ligne "Sales" publiée ──────────────────────────
    revenue: [
      { year: 2021, value: 87088 },
      { year: 2022, value: 94424 },
      { year: 2023, value: 92998 },
      { year: 2024, value: 91354 },
      { year: 2025, value: 89490 },
    ],

    // ── Répartition géographique du CA (FY2025, par zone géographique publiée) ──
    // Source : annexe "by geographic area" des comptes 2025 (somme = 89 490 M CHF).
    // Zone Amériques (AMS) 42 958 = 48,0 % (dont USA 28 605) ; Zone Asie-Océanie-
    // Afrique (AOA) 23 989 = 26,8 % ; Zone Europe (EUR) 22 543 = 25,2 %. Découpage
    // officiel Nestlé en 3 zones (pas EMENA/LATAM : EMENA = ancien nom d'avant 2022).
    geoRevenue: [
      { region: 'Amériques',            pct: 48.00 },
      { region: 'Asie-Océanie-Afrique', pct: 26.81 },
      { region: 'Europe',               pct: 25.19 },
    ],

    // ── Marges sur 5 ans (%) - marge opérationnelle = EBIT publié (UTOP plus haute) ─
    marges: [
      { year: 2021, gross: 48.0, operating: 13.4, net: 19.7 },   // net 2021 gonflé par la cession L'Oréal (+8,7 Md en associés)
      { year: 2022, gross: 45.4, operating: 13.0, net: 10.1 },
      { year: 2023, gross: 46.1, operating: 15.1, net: 12.3 },
      { year: 2024, gross: 46.9, operating: 16.1, net: 12.2 },
      { year: 2025, gross: 45.8, operating: 13.7, net: 10.3 },   // EBIT publié comprimé par impairments ; UTOP 16,1 %
    ],

    // ── ROIC simple sur 5 ans (%) - La Thèse, goodwill inclus, dette plancher 0 ─
    roic: [
      { year: 2021, value: 9.9 },
      { year: 2022, value: 10.2 },
      { year: 2023, value: 13.2 },
      { year: 2024, value: 11.7 },
      { year: 2025, value: 10.7 },
    ],

    // ── ROIC vs WACC (%) - WACC convention suisse (série de l'onglet, Rd par année) ─
    roicVsWacc: [
      { year: 2021, value: 9.9,  wacc: 3.69 },
      { year: 2022, value: 10.2, wacc: 6.47 },
      { year: 2023, value: 13.2, wacc: 4.63 },
      { year: 2024, value: 11.7, wacc: 3.83 },
      { year: 2025, value: 10.7, wacc: 3.90 },
    ],

    // ── Free Cash Flow sur 5 ans (M CHF) - OCF - capex industriel ─────────────
    fcf: [
      { year: 2021, value: 8523 },
      { year: 2022, value: 6546 },   // Comprimé : flambée des coûts + BFR
      { year: 2023, value: 9738 },
      { year: 2024, value: 10712 },
      { year: 2025, value: 10993 },
    ],

    // ── CA par catégorie de produit (M CHF) - structure restated, 2022-2025 ───
    segmentRevenue: {
      unit: 'M CHF',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2022, segments: [
          { name: 'Boissons en poudre et liquides', value: 25218 },
          { name: 'PetCare (Purina)',               value: 18101 },
          { name: 'Nutrition et Health Science',    value: 15678 },
          { name: 'Plats préparés',                 value: 12484 },
          { name: 'Produits laitiers et glaces',    value: 11289 },
          { name: 'Confiserie',                     value: 8118 },
          { name: 'Eaux',                           value: 3536 },
        ]},
        { year: 2023, segments: [
          { name: 'Boissons en poudre et liquides', value: 24786 },
          { name: 'PetCare (Purina)',               value: 18860 },
          { name: 'Nutrition et Health Science',    value: 15278 },
          { name: 'Plats préparés',                 value: 11666 },
          { name: 'Produits laitiers et glaces',    value: 10981 },
          { name: 'Confiserie',                     value: 8107 },
          { name: 'Eaux',                           value: 3320 },
        ]},
        { year: 2024, segments: [
          { name: 'Boissons en poudre et liquides', value: 24598 },
          { name: 'PetCare (Purina)',               value: 18882 },
          { name: 'Nutrition et Health Science',    value: 15137 },
          { name: 'Plats préparés',                 value: 10711 },
          { name: 'Produits laitiers et glaces',    value: 10397 },
          { name: 'Confiserie',                     value: 8449 },
          { name: 'Eaux',                           value: 3180 },
        ]},
        { year: 2025, segments: [
          { name: 'Boissons en poudre et liquides', value: 25144 },
          { name: 'PetCare (Purina)',               value: 18406 },
          { name: 'Nutrition et Health Science',    value: 14304 },
          { name: 'Plats préparés',                 value: 10114 },
          { name: 'Produits laitiers et glaces',    value: 9698 },
          { name: 'Confiserie',                     value: 8696 },
          { name: 'Eaux',                           value: 3128 },
        ]},
      ],
    },

    // ── Valorisation comparée (source : onglet Comparaison, API Yahoo, base marché
    // courante). Axes "moins cher" : PER, EV/EBITDA, P/FCF, Dette/EBITDA. Axes
    // "mieux" : Marge EBIT %, ROIC %, FCF Yield %, TCAC CA 3 ans %.
    // ROIC Nestlé = ROIC La Thèse 10,7 % (cellule Yahoo 8-9 %). TCAC CA -2,2 % =
    // publié/FX (organique +3,5 %), clampé à 0 par le radar. Marge EBIT Nestlé 14,9 %
    // = base Yahoo TTM (vs 13,7 % publié / 16,1 % UTOP en série FY).
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée : Nestlé vs médiane des pairs',
        data: [
          { label: 'PER',             valeur: 22.67, secteur: 23.19 },
          { label: 'EV/EBITDA',       valeur: 15.34, secteur: 12.94 },
          { label: 'P/FCF',           valeur: 18.6,  secteur: 20.6 },
          { label: 'Marge EBIT %',    valeur: 14.9,  secteur: 17.0 },
          { label: 'ROIC %',          valeur: 10.7,  secteur: 6.9 },
          { label: 'FCF Yield %',     valeur: 5.4,   secteur: 4.7 },
          { label: 'Dette/EBITDA',    valeur: 3.22,  secteur: 2.18 },
          { label: 'TCAC CA 3 ans %', valeur: -2.2,  secteur: 8.45 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'Valorisation comparée : Nestlé vs Danone',
        concurrent1: 'Danone',
        data: [
          { label: 'PER',             valeur: 22.67, concurrent1: 23.48 },
          { label: 'EV/EBITDA',       valeur: 15.34, concurrent1: 11.44 },
          { label: 'P/FCF',           valeur: 18.6,  concurrent1: 15.6 },
          { label: 'Marge EBIT %',    valeur: 14.9,  concurrent1: 13.7 },
          { label: 'ROIC %',          valeur: 10.7,  concurrent1: 5.6 },
          { label: 'FCF Yield %',     valeur: 5.4,   concurrent1: 6.4 },
          { label: 'Dette/EBITDA',    valeur: 3.22,  concurrent1: 2.78 },
          { label: 'TCAC CA 3 ans %', valeur: -2.2,  concurrent1: -0.5 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: 'Valorisation comparée : Nestlé vs Unilever',
        concurrent1: 'Unilever',
        data: [
          { label: 'PER',             valeur: 22.67, concurrent1: 19.67 },
          { label: 'EV/EBITDA',       valeur: 15.34, concurrent1: 12.49 },
          { label: 'P/FCF',           valeur: 18.6,  concurrent1: 16.3 },
          { label: 'Marge EBIT %',    valeur: 14.9,  concurrent1: 20.1 },
          { label: 'ROIC %',          valeur: 10.7,  concurrent1: 12.7 },
          { label: 'FCF Yield %',     valeur: 5.4,   concurrent1: 6.1 },
          { label: 'Dette/EBITDA',    valeur: 3.22,  concurrent1: 2.18 },
          { label: 'TCAC CA 3 ans %', valeur: -2.2,  concurrent1: 0 },   // Unilever N/M (cessions) -> mis à plat
        ],
      },
      {
        id: 'vs_pair3', type: 'radar',
        title: 'Valorisation comparée : Nestlé vs Mondelez',
        concurrent1: 'Mondelez',
        data: [
          { label: 'PER',             valeur: 22.67, concurrent1: 30.77 },
          { label: 'EV/EBITDA',       valeur: 15.34, concurrent1: 19.0 },
          { label: 'P/FCF',           valeur: 18.6,  concurrent1: 24.7 },
          { label: 'Marge EBIT %',    valeur: 14.9,  concurrent1: 9.3 },
          { label: 'ROIC %',          valeur: 10.7,  concurrent1: 3.8 },
          { label: 'FCF Yield %',     valeur: 5.4,   concurrent1: 4.1 },
          { label: 'Dette/EBITDA',    valeur: 3.22,  concurrent1: 3.77 },
          { label: 'TCAC CA 3 ans %', valeur: -2.2,  concurrent1: 8.2 },
        ],
      },
      {
        id: 'vs_pair4', type: 'radar',
        title: 'Valorisation comparée : Nestlé vs PepsiCo',
        concurrent1: 'PepsiCo',
        data: [
          { label: 'PER',             valeur: 22.67, concurrent1: 22.9 },
          { label: 'EV/EBITDA',       valeur: 15.34, concurrent1: 12.94 },
          { label: 'P/FCF',           valeur: 18.6,  concurrent1: 26.0 },
          { label: 'Marge EBIT %',    valeur: 14.9,  concurrent1: 17.0 },
          { label: 'ROIC %',          valeur: 10.7,  concurrent1: 13.6 },
          { label: 'FCF Yield %',     valeur: 5.4,   concurrent1: 3.8 },
          { label: 'Dette/EBITDA',    valeur: 3.22,  concurrent1: 2.18 },
          { label: 'TCAC CA 3 ans %', valeur: -2.2,  concurrent1: 8.5 },
        ],
      },
    ],

    metricHistory: [

      // ── EV/EBITDA historique (clôtures FY) ────────────────────────────────
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 26.1 },
          { year: 2022, value: 21.4 },
          { year: 2023, value: 17.6 },
          { year: 2024, value: 13.8 },
          { year: 2025, value: 16.1 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 19.0 },
              { year: 2022, value: 19.0 },
              { year: 2023, value: 19.0 },
              { year: 2024, value: 19.0 },
              { year: 2025, value: 19.0 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (M CHF) ─────────────────────────────────────────
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'M CHF',
        yMin:  0,
        data: [
          { year: 2021, value: 13864 },
          { year: 2022, value: 11907 },
          { year: 2023, value: 15941 },
          { year: 2024, value: 16675 },
          { year: 2025, value: 15904 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 8523 },
              { year: 2022, value: 6546 },
              { year: 2023, value: 9738 },
              { year: 2024, value: 10712 },
              { year: 2025, value: 10993 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 5341 },
              { year: 2022, value: 5361 },
              { year: 2023, value: 6203 },
              { year: 2024, value: 5963 },
              { year: 2025, value: 4911 },
            ],
          },
        ],
      },

      // ── BPA dilué publié vs sous-jacent (CHF) ─────────────────────────────
      // Publié gonflé en 2021 (cession L'Oréal) puis déprimé en 2025 (impairments).
      // Sous-jacent (underlying, publié Nestlé) = base récurrente, stable ~4,4-4,8.
      {
        label: 'EPS',
        name:  'BPA dilué publié',
        unit:  'CHF',
        data: [
          { year: 2021, value: 6.06 },
          { year: 2022, value: 3.42 },
          { year: 2023, value: 4.23 },
          { year: 2024, value: 4.19 },
          { year: 2025, value: 3.51 },
        ],
        competitors: [
          {
            name:   'BPA sous-jacent',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 4.42 },
              { year: 2022, value: 4.80 },
              { year: 2023, value: 4.80 },
              { year: 2024, value: 4.77 },
              { year: 2025, value: 4.42 },
            ],
          },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) - ROCE Excel = EBIT avant IS / (CP + dette LT) ─
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 12.9 },
          { year: 2022, value: 14.3 },
          { year: 2023, value: 17.1 },
          { year: 2024, value: 16.7 },
          { year: 2025, value: 15.5 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 3.69 },
              { year: 2022, value: 6.47 },
              { year: 2023, value: 4.63 },
              { year: 2024, value: 3.83 },
              { year: 2025, value: 3.90 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 9.9 },
              { year: 2022, value: 10.2 },
              { year: 2023, value: 13.2 },
              { year: 2024, value: 11.7 },
              { year: 2025, value: 10.7 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (1 an glissant, %) - ininterprétable : IC piloté par les
      // rachats et surtout la réserve de conversion (FX), pas les réinvestissements ─
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value: 0.9 },
          { year: 2023, value: -125.4 },
          { year: 2024, value: 9.7 },
          { year: 2025, value: -22.5 },
        ],
      },

      // ── ROIIC glissant multi-périodes (%) - idem, peu informatif ──────────
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: -22.5 },
          { year: 2, value: -72.1 },
          { year: 3, value: -5.9 },
          { year: 4, value: 0.2 },
        ],
      },

      // ── PER historique (clôtures FY, base BPA publié) ─────────────────────
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 20.7 },
          { year: 2022, value: 30.2 },
          { year: 2023, value: 22.4 },
          { year: 2024, value: 17.4 },
          { year: 2025, value: 21.9 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 22.5 },
              { year: 2022, value: 22.5 },
              { year: 2023, value: 22.5 },
              { year: 2024, value: 22.5 },
              { year: 2025, value: 22.5 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 23.8 },
              { year: 2022, value: 28.0 },
              { year: 2023, value: 24.0 },
              { year: 2024, value: 18.6 },
              { year: 2025, value: 23.5 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (% sur EV) ───────────────────────────────────
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 2.2 },
          { year: 2022, value: 1.9 },
          { year: 2023, value: 3.2 },
          { year: 2024, value: 4.2 },
          { year: 2025, value: 4.3 },
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
            name:  'Taux sans risque',   // Confédération suisse 10 ans, fin d'exercice
            color: '#52B788',
            data: [
              { year: 2021, value: -0.1 },
              { year: 2022, value: 1.6 },
              { year: 2023, value: 0.7 },
              { year: 2024, value: 0.3 },
              { year: 2025, value: 0.3 },
            ],
          },
        ],
      },

      // ── DSO / DIO / DPO / CCC (jours) ─────────────────────────────────────
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 35.7 },
          { year: 2022, value: 33.9 },
          { year: 2023, value: 35.2 },
          { year: 2024, value: 37.5 },
          { year: 2025, value: 35.5 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 96.2 },
              { year: 2022, value: 105.9 },
              { year: 2023, value: 86.3 },
              { year: 2024, value: 99.4 },
              { year: 2025, value: 96.0 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 125.4 },
              { year: 2022, value: 111.4 },
              { year: 2023, value: 102.9 },
              { year: 2024, value: 125.1 },
              { year: 2025, value: 120.7 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 6.5 },
              { year: 2022, value: 28.4 },
              { year: 2023, value: 18.5 },
              { year: 2024, value: 11.8 },
              { year: 2025, value: 10.9 },
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
          { year: 2021, value: 0.98 },
          { year: 2022, value: 0.88 },
          { year: 2023, value: 0.83 },
          { year: 2024, value: 0.82 },
          { year: 2025, value: 0.79 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.86 },
              { year: 2022, value: 0.86 },
              { year: 2023, value: 0.86 },
              { year: 2024, value: 0.86 },
              { year: 2025, value: 0.86 },
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
          { year: 2021, value: 2.62 },
          { year: 2022, value: 3.08 },
          { year: 2023, value: 2.88 },
          { year: 2024, value: 3.17 },
          { year: 2025, value: 3.35 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 3.02 },
              { year: 2022, value: 3.02 },
              { year: 2023, value: 3.02 },
              { year: 2024, value: 3.02 },
              { year: 2025, value: 3.02 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.63 },
          { year: 2022, value: 0.70 },
          { year: 2023, value: 0.74 },
          { year: 2024, value: 0.66 },
          { year: 2025, value: 0.71 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.69 },
              { year: 2022, value: 0.69 },
              { year: 2023, value: 0.69 },
              { year: 2024, value: 0.69 },
              { year: 2025, value: 0.69 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions (%) - négatif = rachats nets ─
      // 2025 quasi nul (-0,9 %) : rachats suspendus pour désendetter.
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: -2.9 },
          { year: 2023, value: -2.3 },
          { year: 2024, value: -1.9 },
          { year: 2025, value: -0.9 },
        ],
      },

      // ── Dividende par action (CHF) - convention DEU (au titre de l'exercice) ─
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  'CHF',
        data: [
          { year: 2021, value: 2.80 },
          { year: 2022, value: 2.95 },
          { year: 2023, value: 3.00 },
          { year: 2024, value: 3.05 },
          { year: 2025, value: 3.10 },
        ],
      },

      // ── Payout Ratio (%) - sur résultat net publié (déprimé 2025) ──────────
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 46.4 },
          { year: 2022, value: 82.3 },
          { year: 2023, value: 70.8 },
          { year: 2024, value: 71.5 },
          { year: 2025, value: 86.7 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 71.6 },
              { year: 2022, value: 71.6 },
              { year: 2023, value: 71.6 },
              { year: 2024, value: 71.6 },
              { year: 2025, value: 71.6 },
            ],
          },
        ],
      },

      // ── Allocation du capital - dividendes / rachats / Capex (M CHF) ──────
      // Dividende stable ~7,7 Md. Rachats EFFONDRÉS : 10,7 Md (2022) -> 0,2 Md (2025).
      {
        label: 'Capex_Action',
        name:  'Dividendes',
        unit:  'M CHF',
        yMin:  0,
        data: [
          { year: 2021, value: 7681 },
          { year: 2022, value: 7618 },
          { year: 2023, value: 7829 },
          { year: 2024, value: 7816 },
          { year: 2025, value: 7849 },
        ],
        competitors: [
          {
            name:  'Rachats d\'actions',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 6548 },
              { year: 2022, value: 10679 },
              { year: 2023, value: 5234 },
              { year: 2024, value: 4678 },
              { year: 2025, value: 213 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 5341 },
              { year: 2022, value: 5361 },
              { year: 2023, value: 6203 },
              { year: 2024, value: 5963 },
              { year: 2025, value: 4911 },
            ],
          },
        ],
      },

    ],
  },
}
