// ─────────────────────────────────────────────────────────────────────────────
// Walmart Inc. (NYSE: WMT) - Analyse ponctuelle (riche)
// Devise USD, enveloppe CTO (hors PEA).
// Snapshot : fondamentaux FY2026 (clos 31/01/2026), multiples ancrés au cours de
//            clôture FY2026 111,41 $. Cours spot 117,17 $ (18/06/2026) référencé
//            dans le onePager et le Verdict (+5 % depuis la clôture, sous le seuil
//            20 % : snapshot FY figé, valorisation ré-ancrée au spot).
//
// PIÈGE EXERCICE FISCAL DÉCALÉ (type Autodesk) : Walmart clôt le 31/01. FY2026 =
//   clos 31/01/2026. Onglets FISCAUX (col "2026" = FY2026) : Compte de résultat,
//   Bilan, Flux, Other income, Résultat par secteur, WACC. Onglets CALENDAIRES
//   décalés -1 (col "2025" = FY2026) : Indicateurs, Bourse. Axe canonique = FY.
//
// CONVENTIONS / CHOIX MÉTHODO (penchant Claude validé par Pierre, juin 2026) :
//  - BPA comparable (ajusté) = base du calculateur PER : 2,64 $ en FY2026
//    (GAAP dilué 2,73 $, GONFLÉ cette année par un gain de participations de
//    +2,0 Md$ en "other gains/losses" ; l'ajusté est en-dessous du GAAP). Série
//    ajustée propre : 2,15 / 2,10 / 2,22 / 2,51 / 2,64 (TCAC 3 ans 8,0 %).
//  - Croissance BPA reparamétrée à la main (calculateur Excel cassé : central
//    24,3 % > bull 13,9 %, CAGR BPA GAAP gonflé par le creux FY2023 opioïdes/
//    markdowns). Retenu sur BPA ajusté : bear 6 % / central 8,5 % / bull 11 %
//    (guidance FY27 adj EPS +4 à +8 %, algorithme LT op income +6-8 % + rachats).
//  - PER central 25x = médiane pairs 23,7x + légère prime qualité (le calculateur
//    Excel sort 27x via une moyenne PER ajusté 5 ans 29,4x gonflée par le re-rating).
//  - BUG EXCEL DETTE (corrigé, accord Pierre) : les lignes "Dette courante"/"Total
//    dette" incluaient à tort fournisseurs+charges à payer pour FY2022-FY2025 (dette
//    affichée 116-122 Md$ vs vraie ~57-67 Md$). Net debt recalculé = toute dette
//    incl. leases finance+opérationnels - cash = 56,4 Md$ FY2026 (dette/EBITDA 1,28x,
//    colle à Yahoo 1,26x). Conséquence : la série ROIC/dette est recalculée ; le
//    "ROIC qui monte de 7 % à 14,5 %" de l'Excel était un artefact. Vrai ROIC stable
//    ~14 % (NOPAT 22 539 / IC 162 548, goodwill incl.) ; tangible (hors goodwill) ~17 %.
//  - WACC 6,42 % : convention US. Rf 4,15 % (UST 10 ans, le libellé "bund 10Y" de
//    l'onglet est une coquille de template), ERP 4,23 % (Damodaran US, CRP 0), β
//    0,594 (régression mensuelle 5 ans vs S&P 500 Total Return). Pondérations
//    recalculées avec la dette corrigée (D/V 7,0 %). DCF Excel CASSÉ à la baisse
//    (sort ~45 $ << spot) : FCF mince vs capi ~940 Md$ + CAGR FCF bas -> piloté au PER.
//  - Modèle INVERSE de Coca : marge nette mince 3,1 % x rotation énorme (asset
//    turnover 2,51x) = ROIC modéré ~14 % (Dupont). BFR négatif (current ratio 0,79,
//    les fournisseurs financent les stocks, CCC ~3 jours).
//  - Dividende : Dividend King (hausses ininterrompues depuis 1974, plus de 50 ans) ;
//    rachats nets substantiels (nouvelle autorisation 30 Md$ FY26 Q4).
//  - Participations = OPTIONALITÉ, pas un SOTP type Coca : Flipkart + PhonePe
//    (majoritaires/consolidés en Inde, IPO PhonePe possible) ; petites participations
//    fair-value-option (source du bruit BPA). JD.com cédé en FY2025 (3,6 Md$).
//  - Management : John Furner CEO (6e de l'histoire, ex-CEO Walmart US) a succédé à
//    Doug McMillon début 2026 (transition fraîche). CFO John David Rainey.
//
// PIÈGES EXCEL : ligne "R&D % du CA" = en réalité Opex/CA (pas de R&D isolée).
//  ROIIC très volatil et actuellement compressé (NOPAT flat FY25->FY26 pendant que
//  l'IC grossit sur le capex) : bruit, lentille pertinente = spread ROIC-WACC.
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const WALMART: AnalyseCard = {
  slug:           'walmart',
  type:           'ponctuelle',
  title:          'Walmart',
  ticker:         'WMT',
  secteur:        'Consommation',
  geo:            'États-Unis',
  conviction:     'forte',              // Avantage de coût par l'échelle large, mais Amazon = concurrent crédible + marge mince structurelle + tarifs : pas 'exceptionnelle'
  positionnement: 'surveillance',       // Hors position ; MoS négative au cours actuel (le re-rating prive d'un point d'entrée)
  lastUpdated:    '2026-06-18',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Le premier distributeur du monde (713 Md$ de CA, 2,1 millions d'employés) se re-note en écosystème : la publicité, l'abonnement et la marketplace ajoutent une couche de marge élevée à une machine à volume à marge mince. Mais le titre est passé de 22x à plus de 40x les bénéfices.",
  glossaire:      ['moat', 'asset-turnover', 'roic', 'retail-media', 'free-cash-flow', 'dividende'],
  logo:           '/analyse/walmart.png',
  prixCible:      { bas: 90, haut: 108, devise: 'USD' },   // Central PER 99 $ (BPA ajusté 2031 3,97 $ x 25x) +/- MoE 8,9 % (β 0,594 x 15 %)
  marginOfSafety: 'négative',                              // Cours 117,17 $ vs zone juste centrale r=10 % 61,6 $ : prime de l'ordre de -90 %
  readingTime:    39,    // recalculé depuis le compte de mots du MDX
  onePager: {
    thesis:    "Le n°1 mondial de la distribution se re-note en écosystème (pub, abonnement, marketplace) : marge mince, rotation énorme, ROIC 14 %. Mais payé ~44x.",
    cours:     117.17,
    coursDate: '2026-06-18',
    devise:    'USD',
    range52w:  { low: 94.09, high: 135.15 },
  },

  // ── Métriques snapshot - FY2026, multiples au cours de clôture FY2026 111,41 $ ──
  metrics: {
    per:               42.2,   // 111,41 / BPA ajusté 2,64 $ (40,8x sur GAAP 2,73). Au spot 117,17 $ : 44,4x ajusté
    evEbitda:          21.58,  // EV 950 099 M$ (capi 893 731 + dette nette 56 368) / EBITDA 44 028 M$
    fcfYield:          1.58,   // FCF 15 029 M$ / EV 950 099 M$ - comprimé par le capex (margin FCF 2,1 %)
    roic:              13.9,   // ROIC La Thèse : NOPAT 22 539 / IC 162 548 (CP + dette nette incl. leases, goodwill incl.). Tangible ~17 %
    wacc:              6.42,   // CAPM : Rf 4,15 % + β 0,594 x ERP 4,23 % = Re 6,67 % ; WACC pondéré dette corrigée
    detteEbitda:       1.28,   // Dette nette 56 368 M$ (incl. leases) / EBITDA 44 028 M$ (Yahoo 1,26x)
    croissanceCA3ans:  5.3,    // TCAC CA total FY2023->FY2026 (5,27 %)
    croissanceBPA3ans: 8.0,    // TCAC BPA AJUSTÉ FY2023->FY2026 (GAAP 24,3 % gonflé par le creux FY2023)
    margeEbit:         4.18,   // EBIT GAAP 29 825 / CA total 713 163 - marge mince typique de la distribution
    margeBrute:        24.93,
    payoutRatio:       35.6,   // Dividende 0,94 / BPA ajusté 2,64 (sur RN total ~36 %)
    currentRatio:      0.79,   // < 1 : BFR négatif structurel, les fournisseurs financent les stocks
    dso:               5.7,    // Très court : ventes au comptant/carte, pas de crédit client significatif
  },

  tendances: {
    per:       'hausse',   // Re-rating : ~23x (FY2024) -> 42x (FY2026)
    fcfYield:  'baisse',   // Comprimé par le capex en envolée (12,7 -> 26,5 Md$) et le re-rating
    roic:      'stable',   // Plage ~14 % (10 % au creux FY2023)
    margeEbit: 'stable',   // ~4,2 % - expansion visible en marge brute/ajusté, pas encore au niveau EBIT GAAP
  },

  updates: [
    {
      date: '2026-06-18',
      note: 'Création de la fiche. Snapshot FY2026 (clos 31/01/2026), cours spot 117,17 $ (18/06/2026). Données FY2026 + guidance FY2027.',
    },
    {
      date: '2026-08-21',
      note: 'Résultats Q2-FY2027 attendus. Source : communiqués Walmart / Yahoo Finance.',
    },
  ],

  chartData: {

    // ── CA total sur 5 ans (M$) - axe fiscal FY2022..FY2026 (clos 31/01) ───────
    revenue: [
      { year: 2022, value: 572754 },
      { year: 2023, value: 611289 },
      { year: 2024, value: 648125 },
      { year: 2025, value: 680985 },
      { year: 2026, value: 713163 },
    ],

    // ── Répartition géographique du CA (FY2026, base CA total publié US/non-US) ─
    // États-Unis 81,5 % (Walmart US + Sam's Club) ; International 18,5 % (Mexique/
    // Walmex, Canada, Chine, Inde/Flipkart). Walmart ne publie pas de ventilation
    // pays détaillée au-delà de US/non-US.
    geoRevenue: [
      { region: 'États-Unis',     pct: 81.5 },
      { region: 'Reste du monde', pct: 18.5 },
    ],

    // ── Marges sur 5 ans (%) - GAAP, sur CA total ─────────────────────────────
    // FY2023 EBIT déprimé (3,34 %) : charges opioïdes + markdowns de stocks.
    // Marge brute en expansion lente (mix : pub Walmart Connect comptée en réduction
    // de COGS, abonnement, eCommerce). Marge EBIT GAAP ~flat (phase d'investissement).
    marges: [
      { year: 2022, gross: 25.10, operating: 4.53, net: 2.43 },
      { year: 2023, gross: 24.14, operating: 3.34, net: 1.85 },   // Creux : opioïdes + markdowns
      { year: 2024, gross: 24.38, operating: 4.17, net: 2.51 },
      { year: 2025, gross: 24.85, operating: 4.31, net: 2.96 },
      { year: 2026, gross: 24.93, operating: 4.18, net: 3.12 },
    ],

    // ── ROIC simple sur 5 ans (%) - La Thèse, goodwill inclus, dette incl. leases ─
    // Série RECALCULÉE (le bug dette de l'Excel gonflait l'IC FY2022-FY2025 et
    // déprimait artificiellement le ROIC ; le vrai ROIC est stable ~14 %).
    roic: [
      { year: 2022, value: 14.4 },
      { year: 2023, value: 10.1 },   // Creux NOPAT (EBIT FY2023 bas)
      { year: 2024, value: 14.2 },
      { year: 2025, value: 15.1 },
      { year: 2026, value: 13.9 },
    ],

    // ── ROIC vs WACC (%) - WACC recalculé avec la dette corrigée (incl. leases) ─
    roicVsWacc: [
      { year: 2022, value: 14.4, wacc: 3.89 },   // Rf 2021 1,51 % (convention US, non planché)
      { year: 2023, value: 10.1, wacc: 6.73 },
      { year: 2024, value: 14.2, wacc: 6.15 },
      { year: 2025, value: 15.1, wacc: 6.87 },
      { year: 2026, value: 13.9, wacc: 6.42 },
    ],

    // ── Free Cash Flow sur 5 ans (M$) - PUBLIÉ ────────────────────────────────
    // Comprimé par un capex en forte hausse (12,7 -> 26,5 Md$ : automatisation,
    // supply chain, remodeling). OCF a presque doublé mais le FCF ne progresse que
    // de +31 % car le capex a doublé. FCF margin ~2 % (machine à volume).
    fcf: [
      { year: 2022, value: 11469 },
      { year: 2023, value: 12154 },
      { year: 2024, value: 15370 },
      { year: 2025, value: 13092 },
      { year: 2026, value: 15029 },
    ],

    // ── CA par segment opérationnel (M$) - 3 segments, pas de Corporate négatif ─
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2022, segments: [
          { name: 'Walmart U.S.',          value: 393247 },
          { name: 'Walmart International',  value: 100959 },
          { name: "Sam's Club",            value: 73556 },
        ]},
        { year: 2023, segments: [
          { name: 'Walmart U.S.',          value: 420553 },
          { name: 'Walmart International',  value: 100983 },
          { name: "Sam's Club",            value: 84345 },
        ]},
        { year: 2024, segments: [
          { name: 'Walmart U.S.',          value: 441817 },
          { name: 'Walmart International',  value: 114641 },
          { name: "Sam's Club",            value: 86179 },
        ]},
        { year: 2025, segments: [
          { name: 'Walmart U.S.',          value: 462415 },
          { name: 'Walmart International',  value: 121885 },
          { name: "Sam's Club",            value: 90238 },
        ]},
        { year: 2026, segments: [
          { name: 'Walmart U.S.',          value: 482975 },
          { name: 'Walmart International',  value: 130423 },
          { name: "Sam's Club",            value: 93015 },
        ]},
      ],
    },

    // ── Valorisation comparée (source : onglet Comparaison sectorielle, API Yahoo) ─
    // Base marché TTM courante (peut différer des séries FY de la fiche). WMT ROIC =
    // Yahoo 12,2 % (homogène pairs ; La Thèse 13,9 %). Croissance CA WMT = TCAC réel
    // 3 ans 5,3 % (substitué au 7,3 % Yahoo). Amazon P/FCF 341,6 et Costco dette nette
    // -0,43x (trésorerie nette) sont clampés par le composant (bord / centre du radar).
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée : Walmart vs médiane du secteur distribution',
        data: [
          { label: 'PER',             valeur: 41.3, secteur: 23.7 },
          { label: 'EV/EBITDA',       valeur: 23.1, secteur: 11.3 },
          { label: 'P/FCF',           valeur: 62.5, secteur: 16.8 },
          { label: 'Marge EBIT %',    valeur: 4.2,  secteur: 4.5 },
          { label: 'ROIC %',          valeur: 12.2, secteur: 12.6 },
          { label: 'FCF Yield %',     valeur: 1.6,  secteur: 4.8 },
          { label: 'Dette/EBITDA',    valeur: 1.26, secteur: 2.56 },
          { label: 'TCAC CA 3 ans %', valeur: 5.3,  secteur: 6.5 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'Valorisation comparée : Walmart vs Costco',
        concurrent1: 'Costco',
        data: [
          { label: 'PER',             valeur: 41.3, concurrent1: 47.98 },
          { label: 'EV/EBITDA',       valeur: 23.1, concurrent1: 31.61 },
          { label: 'P/FCF',           valeur: 62.5, concurrent1: 53.8 },
          { label: 'Marge EBIT %',    valeur: 4.2,  concurrent1: 3.7 },
          { label: 'ROIC %',          valeur: 12.2, concurrent1: 26.7 },
          { label: 'FCF Yield %',     valeur: 1.6,  concurrent1: 1.9 },
          { label: 'Dette/EBITDA',    valeur: 1.26, concurrent1: -0.43 },
          { label: 'TCAC CA 3 ans %', valeur: 5.3,  concurrent1: 21.5 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: 'Valorisation comparée : Walmart vs Target',
        concurrent1: 'Target',
        data: [
          { label: 'PER',             valeur: 41.3, concurrent1: 17.29 },
          { label: 'EV/EBITDA',       valeur: 23.1, concurrent1: 9.15 },
          { label: 'P/FCF',           valeur: 62.5, concurrent1: 20.9 },
          { label: 'Marge EBIT %',    valeur: 4.2,  concurrent1: 4.5 },
          { label: 'ROIC %',          valeur: 12.2, concurrent1: 12.6 },
          { label: 'FCF Yield %',     valeur: 1.6,  concurrent1: 4.8 },
          { label: 'Dette/EBITDA',    valeur: 1.26, concurrent1: 1.77 },
          { label: 'TCAC CA 3 ans %', valeur: 5.3,  concurrent1: 6.7 },
        ],
      },
      {
        id: 'vs_pair3', type: 'radar',
        title: 'Valorisation comparée : Walmart vs Amazon',
        concurrent1: 'Amazon',
        data: [
          { label: 'PER',             valeur: 41.3, concurrent1: 31.45 },
          { label: 'EV/EBITDA',       valeur: 23.1, concurrent1: 17.57 },
          { label: 'P/FCF',           valeur: 62.5, concurrent1: 341.6 },
          { label: 'Marge EBIT %',    valeur: 4.2,  concurrent1: 13.1 },
          { label: 'ROIC %',          valeur: 12.2, concurrent1: 12.0 },
          { label: 'FCF Yield %',     valeur: 1.6,  concurrent1: 0.3 },
          { label: 'Dette/EBITDA',    valeur: 1.26, concurrent1: 0.42 },
          { label: 'TCAC CA 3 ans %', valeur: 5.3,  concurrent1: 16.6 },
        ],
      },
      {
        id: 'vs_pair4', type: 'radar',
        title: 'Valorisation comparée : Walmart vs Kroger',
        concurrent1: 'Kroger',
        data: [
          { label: 'PER',             valeur: 41.3, concurrent1: 36.76 },
          { label: 'EV/EBITDA',       valeur: 23.1, concurrent1: 8.96 },
          { label: 'P/FCF',           valeur: 62.5, concurrent1: 10.1 },
          { label: 'Marge EBIT %',    valeur: 4.2,  concurrent1: 3.4 },
          { label: 'ROIC %',          valeur: 12.2, concurrent1: 5.4 },
          { label: 'FCF Yield %',     valeur: 1.6,  concurrent1: 9.9 },
          { label: 'Dette/EBITDA',    valeur: 1.26, concurrent1: 2.64 },
          { label: 'TCAC CA 3 ans %', valeur: 5.3,  concurrent1: 1.2 },
        ],
      },
    ],

    metricHistory: [

      // ── EV/EBITDA historique (clôtures FY, EV recalculé incl. leases) ──────
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2022, value: 12.3 },
          { year: 2023, value: 14.0 },
          { year: 2024, value: 12.3 },
          { year: 2025, value: 18.5 },
          { year: 2026, value: 21.6 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 15.7 },
              { year: 2023, value: 15.7 },
              { year: 2024, value: 15.7 },
              { year: 2025, value: 15.7 },
              { year: 2026, value: 15.7 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (M$) - capex en forte hausse comprime le FCF ─────
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2022, value: 24181 },
          { year: 2023, value: 28841 },
          { year: 2024, value: 35726 },
          { year: 2025, value: 36443 },
          { year: 2026, value: 41565 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 11469 },
              { year: 2023, value: 12154 },
              { year: 2024, value: 15370 },
              { year: 2025, value: 13092 },
              { year: 2026, value: 15029 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2022, value: 12712 },
              { year: 2023, value: 16687 },
              { year: 2024, value: 20356 },
              { year: 2025, value: 23351 },
              { year: 2026, value: 26536 },
            ],
          },
        ],
      },

      // ── BPA dilué GAAP vs ajusté ($) - split 3:1 de févr. 2024 rétro-appliqué ─
      // GAAP FY2026 (2,73) > ajusté (2,64) : le GAAP est gonflé par un gain de
      // participations. FY2023 GAAP déprimé (1,42 : opioïdes + markdowns).
      {
        label: 'EPS',
        name:  'BPA dilué GAAP',
        unit:  '$',
        data: [
          { year: 2022, value: 1.62 },
          { year: 2023, value: 1.42 },
          { year: 2024, value: 1.91 },
          { year: 2025, value: 2.41 },
          { year: 2026, value: 2.73 },
        ],
        competitors: [
          {
            name:   'BPA ajusté',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 2.15 },
              { year: 2023, value: 2.10 },
              { year: 2024, value: 2.22 },
              { year: 2025, value: 2.51 },
              { year: 2026, value: 2.64 },
            ],
          },
        ],
      },

      // ── Dividende par action ($) - Dividend King, hausses depuis 1974 ──────
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '$',
        data: [
          { year: 2022, value: 0.7333 },
          { year: 2023, value: 0.7467 },
          { year: 2024, value: 0.76 },
          { year: 2025, value: 0.83 },
          { year: 2026, value: 0.94 },
        ],
      },

      // ── Payout Ratio (%) - dividende / BPA GAAP ───────────────────────────
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2022, value: 47.2 },
          { year: 2023, value: 58.1 },   // Gonflé par le creux de BPA FY2023
          { year: 2024, value: 42.4 },
          { year: 2025, value: 36.0 },
          { year: 2026, value: 35.7 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 43.9 },
              { year: 2023, value: 43.9 },
              { year: 2024, value: 43.9 },
              { year: 2025, value: 43.9 },
              { year: 2026, value: 43.9 },
            ],
          },
        ],
      },

      // ── ROCE (pré-impôt) vs WACC vs ROIC (%) ──────────────────────────────
      // ROCE = EBIT / (CP + dette totale incl. leases). Pré-impôt, > ROIC (après IS).
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2022, value: 17.4 },
          { year: 2023, value: 14.3 },
          { year: 2024, value: 17.8 },
          { year: 2025, value: 18.6 },
          { year: 2026, value: 17.2 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 3.89 },
              { year: 2023, value: 6.73 },
              { year: 2024, value: 6.15 },
              { year: 2025, value: 6.87 },
              { year: 2026, value: 6.42 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2022, value: 14.4 },
              { year: 2023, value: 10.1 },
              { year: 2024, value: 14.2 },
              { year: 2025, value: 15.1 },
              { year: 2026, value: 13.9 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (1 an glissant, %) - TRÈS VOLATIL, actuellement compressé ─
      // NOPAT flat FY25->FY26 (+0,2 %) pendant que l'IC grossit sur le capex :
      // l'investissement n'a pas encore converti en rendement incrémental. Bruit,
      // pas signal ; la lentille pertinente est le spread ROIC-WACC (+7,5 pts).
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2023, value: 121.7 },
          { year: 2024, value: 404.2 },
          { year: 2025, value: 30.9 },
          { year: 2026, value: 0.7 },    // NOPAT quasi flat / capex en hausse
        ],
      },

      // ── ROIIC glissant multi-périodes (%) - lissage, même réserve ─────────
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 0.7 },
          { year: 2, value: 15.7 },
          { year: 3, value: 52.7 },
          { year: 4, value: 26.0 },
        ],
      },

      // ── PER historique (clôtures FY, base BPA AJUSTÉ) ──────────────────────
      // Le re-rating : ~22-24x (FY2022-FY2024) -> 36x (FY2025) -> 42x (FY2026).
      {
        label: 'PER',
        name:  'PER (sur BPA ajusté)',
        unit:  'x',
        data: [
          { year: 2022, value: 22.4 },
          { year: 2023, value: 22.5 },
          { year: 2024, value: 23.7 },
          { year: 2025, value: 36.0 },
          { year: 2026, value: 42.2 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 29.4 },
              { year: 2023, value: 29.4 },
              { year: 2024, value: 29.4 },
              { year: 2025, value: 29.4 },
              { year: 2026, value: 29.4 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2022, value: 35.4 },
              { year: 2023, value: 19.4 },
              { year: 2024, value: 22.8 },
              { year: 2025, value: 32.1 },
              { year: 2026, value: 40.3 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (% sur EV) ───────────────────────────────────
      // FY2026 1,58 % SOUS le taux sans risque 4,15 % : spread négatif (signal cher).
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2022, value: 2.6 },
          { year: 2023, value: 2.8 },
          { year: 2024, value: 3.2 },
          { year: 2025, value: 1.7 },
          { year: 2026, value: 1.6 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 2.4 },
              { year: 2023, value: 2.4 },
              { year: 2024, value: 2.4 },
              { year: 2025, value: 2.4 },
              { year: 2026, value: 2.4 },
            ],
          },
          {
            name:  'Taux sans risque',   // UST 10 ans, fin d'exercice fiscal
            color: '#52B788',
            data: [
              { year: 2022, value: 1.5 },
              { year: 2023, value: 3.9 },
              { year: 2024, value: 3.9 },
              { year: 2025, value: 4.6 },
              { year: 2026, value: 4.2 },
            ],
          },
        ],
      },

      // ── DSO / DIO / DPO / CCC (jours) - CCC ~3 jours (fournisseurs financent) ─
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2022, value: 5.3 },
          { year: 2023, value: 4.7 },
          { year: 2024, value: 5.0 },
          { year: 2025, value: 5.4 },
          { year: 2026, value: 5.7 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2022, value: 48.1 },
              { year: 2023, value: 44.5 },
              { year: 2024, value: 40.9 },
              { year: 2025, value: 40.3 },
              { year: 2026, value: 40.1 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2022, value: 47.0 },
              { year: 2023, value: 42.3 },
              { year: 2024, value: 42.3 },
              { year: 2025, value: 41.8 },
              { year: 2026, value: 43.0 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 6.3 },
              { year: 2023, value: 7.0 },
              { year: 2024, value: 3.5 },
              { year: 2025, value: 3.8 },
              { year: 2026, value: 2.9 },
            ],
          },
        ],
      },

      // ── Current Ratio - structurellement < 1 (BFR négatif) ────────────────
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2022, value: 0.93 },
          { year: 2023, value: 0.82 },
          { year: 2024, value: 0.83 },
          { year: 2025, value: 0.82 },
          { year: 2026, value: 0.79 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 0.84 },
              { year: 2023, value: 0.84 },
              { year: 2024, value: 0.84 },
              { year: 2025, value: 0.84 },
              { year: 2026, value: 0.84 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA - série RECALCULÉE incl. leases (bug Excel corrigé) ─
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2022, value: 1.16 },
          { year: 2023, value: 1.60 },
          { year: 2024, value: 1.32 },
          { year: 2025, value: 1.21 },
          { year: 2026, value: 1.28 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 1.31 },
              { year: 2023, value: 1.31 },
              { year: 2024, value: 1.31 },
              { year: 2025, value: 1.31 },
              { year: 2026, value: 1.31 },
            ],
          },
        ],
      },

      // ── Asset Turnover (CA / actifs) - élevé : le coeur du modèle ──────────
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2022, value: 2.34 },
          { year: 2023, value: 2.51 },
          { year: 2024, value: 2.57 },
          { year: 2025, value: 2.61 },
          { year: 2026, value: 2.51 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 2.51 },
              { year: 2023, value: 2.51 },
              { year: 2024, value: 2.51 },
              { year: 2025, value: 2.51 },
              { year: 2026, value: 2.51 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions (%) - rachats nets ───────────
      // Négatif = concentration. Le nombre d'actions baisse (8 415 -> 8 022 M).
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2023, value: -2.5 },
          { year: 2024, value: -1.1 },
          { year: 2025, value: -0.3 },
          { year: 2026, value: -0.7 },
        ],
      },

      // ── Allocation du capital - dividendes vs rachats vs Capex (M$) ────────
      // Le capex (26,5) dépasse désormais dividendes (7,5) + rachats (8,1) :
      // Walmart priorise le réinvestissement (automatisation, supply chain).
      {
        label: 'Capex_Action',
        name:  'Dividendes',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2022, value: 6152 },
          { year: 2023, value: 6114 },
          { year: 2024, value: 6140 },
          { year: 2025, value: 6688 },
          { year: 2026, value: 7507 },
        ],
        competitors: [
          {
            name:  'Rachats d\'actions',
            color: '#2D6A4F',
            data: [
              { year: 2022, value: 9787 },
              { year: 2023, value: 9920 },
              { year: 2024, value: 2779 },
              { year: 2025, value: 4494 },
              { year: 2026, value: 8088 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2022, value: 12712 },
              { year: 2023, value: 16687 },
              { year: 2024, value: 20356 },
              { year: 2025, value: 23351 },
              { year: 2026, value: 26536 },
            ],
          },
        ],
      },

    ],
  },
}
