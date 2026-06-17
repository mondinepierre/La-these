// ─────────────────────────────────────────────────────────────────────────────
// The Coca-Cola Company (NYSE: KO) - Analyse ponctuelle (riche)
// Devise USD, enveloppe CTO (hors PEA).
// Snapshot : fondamentaux FY2025 (clos 31/12/2025), multiples ancrés au cours de
//            clôture FY2025 69,91 $. Cours spot 79,94 $ (17/06/2026) référencé dans
//            le onePager et le Verdict (re-rating +14 % depuis la clôture, sous le
//            seuil 20 % : snapshot FY figé, valorisation ré-ancrée au spot).
//
// CONVENTIONS / CHOIX MÉTHODO (penchant Claude validé par Pierre, juin 2026) :
//  - BPA comparable (sous-jacent) = base du calculateur PER : 3,00 $ en 2025
//    (GAAP dilué 3,04 $, quasi identique cette année car impairments +867 compensés
//    par un crédit d'impôt -878). Série comparable propre : 2,32 / 2,48 / 2,69 /
//    2,88 / 3,00 (TCAC ~6,6 %). C'est la base de la guidance ("vs 3,00 $ in 2025").
//  - Croissance BPA reparamétrée à la main (le calculateur Excel sort un central
//    11,55 % > bull 7,81 %, incohérent : CAGR GAAP 3 ans gonflé par le creux 2022).
//    Retenu : bear 4 % / central 6,5 % / bull 8 % (comparable, algorithme LT 7-9 %).
//  - PER central 22,8x = (PER ajusté 5 ans 23,3x + médiane pairs 22,3x) / 2.
//  - WACC 5,19 % : convention US. Rf 4,09 % (UST 10 ans, fin 2025 ; le libellé
//    "bund 10Y" de l'onglet est une coquille de template), ERP 4,23 % (Damodaran US,
//    CRP 0), β 0,3486 (régression mensuelle 5 ans vs S&P 500 Total Return - colonne
//    indice à ~16 900 = SPXTR, vérifié). DCF piloté au PER : à WACC 5,19 % la valeur
//    terminale pèse 88 % de l'EV (piège Nestlé) -> sensibilité WACC en lecture croisée.
//  - FCF reporté DÉPRIMÉ par des one-offs : dépôt fiscal IRS ~6 Md$ (2024) + paiement
//    du contingent consideration fairlife 6 126 M$ (janv. 2025). FCF normalisé ~11,5 Md$
//    (KO guide un FCF 2026 de ~12,2 Md$). Le FCF publié 5,3 Md$ n'est PAS la capacité.
//  - Participations cotées = valeur cachée / SOTP, PAS de retraitement du DCF :
//    34,3 Md$ de valeur de marché vs 14,0 Md$ au bilan = +20,3 Md$ (~4,7 $/action),
//    dont Monster 21 % (15,7 Md$), CCEP, KOF, CCHBC. Filet de sécurité, pas moteur.
//  - Dividende : Dividend King, 64e hausse consécutive (2,04 $ en 2025 -> 2,12 $ 2026).
//  - ROIC La Thèse 16,5 % (NOPAT 11 301 / IC 68 465 ; pas de bug de signe IS, taux +17,9 %).
//    Le radar utilise le ROIC Yahoo 14,8 % (base homogène pairs) ; écart signalé en MDX.
//
// PIÈGES EXCEL : ligne "R&D % du CA" = en réalité Opex/CA (pas de R&D isolée chez KO).
//  Onglet Guidance vide (sourcé depuis le communiqué T1-2026). EV non plancherée
//  (KO en dette nette, pas net cash : EV = capi + dette nette, correct).
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const COCA: AnalyseCard = {
  slug:           'coca',
  type:           'ponctuelle',
  title:          'Coca-Cola',
  ticker:         'KO',
  secteur:        'Consommation',
  geo:            'Monde',
  conviction:     'forte',              // Moat large, mais Pepsi = concurrent crédible + risque structurel sucre/GLP-1 sur >50 % des volumes : pas 'exceptionnelle'
  positionnement: 'surveillance',       // Hors position ; MoS négative au cours actuel
  lastUpdated:    '2026-06-17',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "La marque la plus puissante du monde et son système d'embouteillage mondial : un modèle concentré asset-light à ROIC élevé, Dividend King depuis 64 ans, mais payé environ 26x les bénéfices après un nouveau record.",
  glossaire:      ['moat', 'asset-light', 'pricing-power', 'roic', 'free-cash-flow', 'dividende'],
  logo:           '/analyse/coca.png',
  prixCible:      { bas: 89, haut: 99, devise: 'USD' },   // Central PER 93,7 $ (BPA comparable 2030 4,11 $ x 22,8x) +/- MoE 5,2 % (β 0,3486 x 15 %)
  marginOfSafety: 'négative',                             // Cours 79,94 $ vs zone juste centrale r=10 % 58,2 $ : -37 %
  readingTime:    38,    // recalculé depuis le compte de mots du MDX
  onePager: {
    thesis:    "Marque n°1 mondiale + système d'embouteillage inégalable : modèle concentré asset-light, ROIC 16 %, Dividend King 64 ans. Mais payée ~26x.",
    cours:     79.94,
    coursDate: '2026-06-17',
    devise:    'USD',
    range52w:  { low: 65.35, high: 84.04 },
  },

  // ── Métriques snapshot - FY2025, multiples au cours de clôture FY2025 69,91 $ ──
  metrics: {
    per:               22.95,  // 69,91 / BPA GAAP 3,04 $ (comparable 23,3x). Au spot 79,94 $ : 26,3x GAAP / 24,5x forward
    evEbitda:          22.66,  // EV 335 712 M$ (capi 301 522 + dette nette 34 190) / EBITDA 14 812 M$
    fcfYield:          1.58,   // FCF publié 5 309 M$ / EV 335 712 M$ - DÉPRIMÉ (fairlife+IRS) ; normalisé ~3,5 %
    roic:              16.5,   // ROIC La Thèse : NOPAT 11 301 / IC 68 465 (CP + dette nette, goodwill incl.)
    wacc:              5.19,   // CAPM : Rf 4,09 % + β 0,3486 x ERP 4,23 % = Re 5,56 % ; WACC pondéré dette
    detteEbitda:       2.31,   // Dette nette 34 190 M$ / EBITDA 14 812 M$
    croissanceCA3ans:  3.7,    // TCAC CA 2022->2025 (organique 2025 ~6 %, change défavorable)
    croissanceBPA3ans: 6.6,    // TCAC BPA comparable 2022->2025 (GAAP 11,55 % gonflé par le creux 2022)
    margeEbit:         28.7,   // EBIT GAAP 2025 ; comparable ~30 % (2024 GAAP déprimé à 21 % par fairlife+impairments)
    margeBrute:        61.6,
    payoutRatio:       66.8,   // Dividendes 8 779 / RN GAAP 13 107 ; sur BPA comparable ~68 %
    currentRatio:      1.46,
    dso:               23.1,   // Court : le réseau d'embouteilleurs paie vite le concentré
  },

  tendances: {
    per:       'stable',   // FY-close 25,3->22,95 ; re-rating au spot (~26x)
    fcfYield:  'baisse',   // Comprimé par les one-offs (fairlife, IRS) : 3,9 % -> 1,6 %
    roic:      'stable',   // Plage 14-16,5 %
    margeEbit: 'hausse',   // Comparable en expansion ; pricing power + refranchising
  },

  updates: [
    {
      date: '2026-06-17',
      note: 'Création de la fiche. Snapshot FY2025 (clos 31/12/2025), cours spot 79,94 $ (17/06/2026). Données FY2025 + T1-2026 + guidance 2026.',
    },
    {
      date: '2026-07-22',
      note: 'Résultats T2-2026 attendus. Source : communiqués KO / Yahoo Finance.',
    },
  ],

  chartData: {

    // Réorganisation 2024 : Global Ventures dissous, Costa intégré à EMEA.
    // Les séries segment antérieures à 2023 (ancienne nomenclature) ne sont pas comparables.
    segmentBreaks: [
      { year: 2024, label: 'Réorganisation : Global Ventures dissous, Costa intégré à EMEA' },
    ],

    // ── CA sur 5 ans (M$) ─────────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 38655 },
      { year: 2022, value: 43004 },
      { year: 2023, value: 45754 },
      { year: 2024, value: 47061 },
      { year: 2025, value: 47941 },
    ],

    // ── Répartition géographique du CA (FY2025, segments opérationnels) ────────
    // North America 40,8 % ; EMEA 22,6 % ; Amérique Latine 13,2 % ; Asie-Pacifique 11,1 %.
    // "Reste du monde" = Bottling Investments 11,9 % + Corporate 0,3 % (embouteilleurs
    // consolidés répartis sur plusieurs zones, non géographiques en propre).
    geoRevenue: [
      { region: 'Amérique du Nord', pct: 40.8 },
      { region: 'EMEA',             pct: 22.6 },
      { region: 'Amérique Latine',  pct: 13.2 },
      { region: 'Asie-Pacifique',   pct: 11.1 },
      { region: 'Reste du monde',   pct: 12.3 },
    ],

    // ── Marges sur 5 ans (%) - GAAP ───────────────────────────────────────────
    // 2024 EBIT déprimé (21,2 %) par 4 163 M$ d'other operating charges (fairlife +
    // impairments) ; 2025 rebond (28,7 %). La marge opérationnelle comparable est ~30 %.
    marges: [
      { year: 2021, gross: 60.3, operating: 26.7, net: 25.4 },
      { year: 2022, gross: 58.1, operating: 25.4, net: 22.3 },
      { year: 2023, gross: 59.5, operating: 24.7, net: 23.4 },
      { year: 2024, gross: 61.1, operating: 21.2, net: 22.6 },   // Creux EBIT GAAP : fairlife + impairments
      { year: 2025, gross: 61.6, operating: 28.7, net: 27.4 },
    ],

    // ── ROIC simple sur 5 ans (%) - La Thèse, goodwill inclus, dette plancher 0 ─
    roic: [
      { year: 2021, value: 14.4 },
      { year: 2022, value: 16.4 },
      { year: 2023, value: 16.4 },
      { year: 2024, value: 14.0 },   // NOPAT déprimé (EBIT 2024 bas)
      { year: 2025, value: 16.5 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    roicVsWacc: [
      { year: 2021, value: 14.4, wacc: 3.03 },   // Rf 2021 1,56 % (convention US, non planché)
      { year: 2022, value: 16.4, wacc: 5.40 },
      { year: 2023, value: 16.4, wacc: 5.01 },
      { year: 2024, value: 14.0, wacc: 5.45 },
      { year: 2025, value: 16.5, wacc: 5.19 },
    ],

    // ── Free Cash Flow sur 5 ans (M$) - PUBLIÉ ────────────────────────────────
    // 2024 et 2025 écrasés par des one-offs : dépôt fiscal IRS ~6 Md$ (2024) +
    // paiement contingent consideration fairlife 6 126 M$ (janv. 2025). FCF normalisé ~11,5 Md$.
    fcf: [
      { year: 2021, value: 11366 },
      { year: 2022, value: 9609 },
      { year: 2023, value: 9821 },
      { year: 2024, value: 4781 },    // Dépôt fiscal IRS
      { year: 2025, value: 5309 },    // Paiement fairlife
    ],

    // ── CA par segment opérationnel (M$) - structure 5 segments + Corporate ────
    // 3 ans seulement : la nomenclature a changé en 2024 (Global Ventures dissous).
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2023, segments: [
          { name: 'North America',        value: 16965 },
          { name: 'EMEA',                 value: 10152 },
          { name: 'Bottling Investments', value: 7852 },
          { name: 'Latin America',        value: 5834 },
          { name: 'Asia Pacific',         value: 4811 },
          { name: 'Corporate',            value: 140 },
        ]},
        { year: 2024, segments: [
          { name: 'North America',        value: 18860 },
          { name: 'EMEA',                 value: 10278 },
          { name: 'Latin America',        value: 6471 },
          { name: 'Bottling Investments', value: 6215 },
          { name: 'Asia Pacific',         value: 5127 },
          { name: 'Corporate',            value: 110 },
        ]},
        { year: 2025, segments: [
          { name: 'North America',        value: 19579 },
          { name: 'EMEA',                 value: 10833 },
          { name: 'Latin America',        value: 6331 },
          { name: 'Bottling Investments', value: 5726 },   // Décline : refranchising (Afrique, Philippines, Inde)
          { name: 'Asia Pacific',         value: 5328 },
          { name: 'Corporate',            value: 144 },
        ]},
      ],
    },

    // ── Valorisation comparée (source : onglet Comparaison sectorielle, API Yahoo) ─
    // Base marché TTM courante (peut différer des séries FY de la fiche). KO P/FCF et
    // FCF Yield reflètent le FCF publié DÉPRIMÉ (normalisé : P/FCF ~28x, yield ~3,5 %).
    // KO ROIC = Yahoo 14,8 % (homogène pairs ; La Thèse 16,5 %). Croissance CA KO = TCAC
    // réel 3 ans 3,7 % (substitué au 12,1 % Yahoo, gonflé par un trimestre). Monster :
    // ROIC 22,5 % et dette nette -0,9x = La Thèse (cellules vides Yahoo), TCAC réel 9,5 %.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée : Coca-Cola vs médiane des pairs boissons',
        data: [
          { label: 'PER',             valeur: 25.1, secteur: 22.3 },
          { label: 'EV/EBITDA',       valeur: 22.6, secteur: 12.9 },
          { label: 'P/FCF',           valeur: 64.9, secteur: 20.0 },
          { label: 'Marge EBIT %',    valeur: 35.1, secteur: 17.2 },
          { label: 'ROIC %',          valeur: 14.8, secteur: 9.9 },
          { label: 'FCF Yield %',     valeur: 1.5,  secteur: 5.0 },
          { label: 'Dette/EBITDA',    valeur: 2.11, secteur: 2.48 },
          { label: 'TCAC CA 3 ans %', valeur: 3.7,  secteur: 8.4 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'Valorisation comparée : Coca-Cola vs PepsiCo',
        concurrent1: 'PepsiCo',
        data: [
          { label: 'PER',             valeur: 25.1, concurrent1: 22.2 },
          { label: 'EV/EBITDA',       valeur: 22.6, concurrent1: 12.9 },
          { label: 'P/FCF',           valeur: 64.9, concurrent1: 25.2 },
          { label: 'Marge EBIT %',    valeur: 35.1, concurrent1: 17.0 },
          { label: 'ROIC %',          valeur: 14.8, concurrent1: 13.6 },
          { label: 'FCF Yield %',     valeur: 1.5,  concurrent1: 4.0 },
          { label: 'Dette/EBITDA',    valeur: 2.11, concurrent1: 2.18 },
          { label: 'TCAC CA 3 ans %', valeur: 3.7,  concurrent1: 8.5 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: 'Valorisation comparée : Coca-Cola vs Keurig Dr Pepper',
        concurrent1: 'Keurig Dr Pepper',
        data: [
          { label: 'PER',             valeur: 25.1, concurrent1: 22.9 },
          { label: 'EV/EBITDA',       valeur: 22.6, concurrent1: 18.0 },
          { label: 'P/FCF',           valeur: 64.9, concurrent1: 28.2 },
          { label: 'Marge EBIT %',    valeur: 35.1, concurrent1: 19.0 },
          { label: 'ROIC %',          valeur: 14.8, concurrent1: 4.6 },
          { label: 'FCF Yield %',     valeur: 1.5,  concurrent1: 3.5 },
          { label: 'Dette/EBITDA',    valeur: 2.11, concurrent1: 3.4 },
          { label: 'TCAC CA 3 ans %', valeur: 3.7,  concurrent1: 9.4 },
        ],
      },
      {
        id: 'vs_pair3', type: 'radar',
        title: 'Valorisation comparée : Coca-Cola vs Monster Beverage',
        concurrent1: 'Monster',
        data: [
          { label: 'PER',             valeur: 25.1, concurrent1: 44.3 },
          { label: 'EV/EBITDA',       valeur: 22.6, concurrent1: 31.2 },
          { label: 'P/FCF',           valeur: 64.9, concurrent1: 46.2 },
          { label: 'Marge EBIT %',    valeur: 35.1, concurrent1: 31.0 },
          { label: 'ROIC %',          valeur: 14.8, concurrent1: 22.5 },
          { label: 'FCF Yield %',     valeur: 1.5,  concurrent1: 2.2 },
          { label: 'Dette/EBITDA',    valeur: 2.11, concurrent1: -0.9 },
          { label: 'TCAC CA 3 ans %', valeur: 3.7,  concurrent1: 9.5 },
        ],
      },
      {
        id: 'vs_pair4', type: 'radar',
        title: 'Valorisation comparée : Coca-Cola vs Coca-Cola Europacific Partners',
        concurrent1: 'CCEP',
        data: [
          { label: 'PER',             valeur: 25.1, concurrent1: 19.7 },
          { label: 'EV/EBITDA',       valeur: 22.6, concurrent1: 16.0 },
          { label: 'P/FCF',           valeur: 64.9, concurrent1: 21.5 },
          { label: 'Marge EBIT %',    valeur: 35.1, concurrent1: 13.7 },
          { label: 'ROIC %',          valeur: 14.8, concurrent1: 9.7 },
          { label: 'FCF Yield %',     valeur: 1.5,  concurrent1: 4.7 },
          { label: 'Dette/EBITDA',    valeur: 2.11, concurrent1: 2.85 },
          { label: 'TCAC CA 3 ans %', valeur: 3.7,  concurrent1: 0.2 },
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
          { year: 2021, value: 24.6 },
          { year: 2022, value: 25.1 },
          { year: 2023, value: 22.9 },
          { year: 2024, value: 27.2 },
          { year: 2025, value: 22.7 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 24.5 },
              { year: 2022, value: 24.5 },
              { year: 2023, value: 24.5 },
              { year: 2024, value: 24.5 },
              { year: 2025, value: 24.5 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (M$) ────────────────────────────────────────────
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 12625 },
          { year: 2022, value: 11018 },
          { year: 2023, value: 11599 },
          { year: 2024, value: 6805 },    // Dépôt fiscal IRS
          { year: 2025, value: 7408 },    // Paiement fairlife
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 11366 },
              { year: 2022, value: 9609 },
              { year: 2023, value: 9821 },
              { year: 2024, value: 4781 },
              { year: 2025, value: 5309 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 1259 },
              { year: 2022, value: 1409 },
              { year: 2023, value: 1778 },
              { year: 2024, value: 2024 },
              { year: 2025, value: 2099 },
            ],
          },
        ],
      },

      // ── BPA dilué GAAP vs comparable ($) ──────────────────────────────────
      {
        label: 'EPS',
        name:  'BPA dilué GAAP',
        unit:  '$',
        data: [
          { year: 2021, value: 2.25 },
          { year: 2022, value: 2.19 },
          { year: 2023, value: 2.47 },
          { year: 2024, value: 2.46 },
          { year: 2025, value: 3.04 },
        ],
        competitors: [
          {
            name:   'BPA comparable (sous-jacent)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.32 },
              { year: 2022, value: 2.48 },
              { year: 2023, value: 2.69 },
              { year: 2024, value: 2.88 },
              { year: 2025, value: 3.00 },
            ],
          },
        ],
      },

      // ── Dividende par action ($) - Dividend King, 64e hausse consécutive ───
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '$',
        data: [
          { year: 2021, value: 1.68 },
          { year: 2022, value: 1.76 },
          { year: 2023, value: 1.84 },
          { year: 2024, value: 1.94 },
          { year: 2025, value: 2.04 },
        ],
      },

      // ── Payout Ratio (%) - dividendes versés / RN GAAP ────────────────────
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 74.0 },
          { year: 2022, value: 79.6 },
          { year: 2023, value: 74.3 },
          { year: 2024, value: 78.5 },
          { year: 2025, value: 66.8 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 74.6 },
              { year: 2022, value: 74.6 },
              { year: 2023, value: 74.6 },
              { year: 2024, value: 74.6 },
              { year: 2025, value: 74.6 },
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
          { year: 2021, value: 16.4 },
          { year: 2022, value: 17.5 },
          { year: 2023, value: 18.0 },
          { year: 2024, value: 14.5 },
          { year: 2025, value: 18.0 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 3.03 },
              { year: 2022, value: 5.40 },
              { year: 2023, value: 5.01 },
              { year: 2024, value: 5.45 },
              { year: 2025, value: 5.19 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 14.4 },
              { year: 2022, value: 16.4 },
              { year: 2023, value: 16.4 },
              { year: 2024, value: 14.0 },
              { year: 2025, value: 16.5 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (1 an glissant, %) - NON INTERPRÉTABLE (ΔIC minuscule) ─
      // Modèle asset-light : le capital investi bouge à peine, le ratio explose.
      // Bruit, pas signal. Lentille pertinente : le spread ROIC-WACC (+11 pts).
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value: 67.7 },
          { year: 2023, value: -18.1 },
          { year: 2024, value: -43.9 },
          { year: 2025, value: 365.2 },   // Rebond NOPAT post-2024 / ΔIC quasi nul
        ],
      },

      // ── ROIIC glissant multi-périodes (%) - lissage, même réserve ─────────
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 365.2 },
          { year: 2, value: 53.7 },
          { year: 3, value: 174.8 },
          { year: 4, value: 124.8 },
        ],
      },

      // ── PER historique (clôtures FY, base GAAP) ───────────────────────────
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 26.2 },
          { year: 2022, value: 28.9 },
          { year: 2023, value: 23.9 },
          { year: 2024, value: 25.3 },
          { year: 2025, value: 23.0 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 25.4 },
              { year: 2022, value: 25.4 },
              { year: 2023, value: 25.4 },
              { year: 2024, value: 25.4 },
              { year: 2025, value: 25.4 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 29.3 },
              { year: 2022, value: 28.1 },
              { year: 2023, value: 19.5 },
              { year: 2024, value: 20.3 },
              { year: 2025, value: 19.3 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (% sur EV) ───────────────────────────────────
      // 2024-2025 déprimés par les one-offs (fairlife, IRS) ; normalisé ~3,5 %.
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 3.9 },
          { year: 2022, value: 3.2 },
          { year: 2023, value: 3.4 },
          { year: 2024, value: 1.6 },
          { year: 2025, value: 1.6 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.7 },
              { year: 2022, value: 2.7 },
              { year: 2023, value: 2.7 },
              { year: 2024, value: 2.7 },
              { year: 2025, value: 2.7 },
            ],
          },
          {
            name:  'Taux sans risque',   // UST 10 ans, fin d'exercice
            color: '#52B788',
            data: [
              { year: 2021, value: 1.6 },
              { year: 2022, value: 3.8 },
              { year: 2023, value: 3.7 },
              { year: 2024, value: 4.3 },
              { year: 2025, value: 4.1 },
            ],
          },
        ],
      },

      // ── DSO / DIO / DPO / CCC (jours) - CCC quasi nul, négatif en 2025 ─────
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 33.2 },
          { year: 2022, value: 29.6 },
          { year: 2023, value: 27.2 },
          { year: 2024, value: 27.7 },
          { year: 2025, value: 23.1 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 81.1 },
              { year: 2022, value: 85.8 },
              { year: 2023, value: 87.2 },
              { year: 2024, value: 94.2 },
              { year: 2025, value: 87.8 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 109.4 },
              { year: 2022, value: 107.6 },
              { year: 2023, value: 110.2 },
              { year: 2024, value: 108.9 },
              { year: 2025, value: 112.1 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 4.9 },
              { year: 2022, value: 7.8 },
              { year: 2023, value: 4.2 },
              { year: 2024, value: 12.9 },
              { year: 2025, value: -1.2 },
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
          { year: 2021, value: 1.13 },
          { year: 2022, value: 1.15 },
          { year: 2023, value: 1.13 },
          { year: 2024, value: 1.03 },
          { year: 2025, value: 1.46 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.18 },
              { year: 2022, value: 1.18 },
              { year: 2023, value: 1.18 },
              { year: 2024, value: 1.18 },
              { year: 2025, value: 1.18 },
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
          { year: 2021, value: 2.71 },
          { year: 2022, value: 2.35 },
          { year: 2023, value: 2.39 },
          { year: 2024, value: 2.86 },
          { year: 2025, value: 2.31 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.52 },
              { year: 2022, value: 2.52 },
              { year: 2023, value: 2.52 },
              { year: 2024, value: 2.52 },
              { year: 2025, value: 2.52 },
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
          { year: 2021, value: 0.41 },
          { year: 2022, value: 0.46 },
          { year: 2023, value: 0.47 },
          { year: 2024, value: 0.47 },
          { year: 2025, value: 0.46 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.45 },
              { year: 2022, value: 0.45 },
              { year: 2023, value: 0.45 },
              { year: 2024, value: 0.45 },
              { year: 2025, value: 0.45 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions (%) ──────────────────────────
      // Négatif = concentration (rachats nets). Rachats modestes, compensent la SBC.
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: 0.2 },
          { year: 2023, value: -0.2 },
          { year: 2024, value: -0.4 },
          { year: 2025, value: -0.2 },
        ],
      },

      // ── Allocation du capital - dividendes vs rachats nets vs Capex (M$) ───
      // Dividende = le coeur du retour (Dividend King). Rachats nets modestes.
      {
        label: 'Capex_Action',
        name:  'Dividendes',
        unit:  'M$',
        data: [
          { year: 2021, value: 7252 },
          { year: 2022, value: 7616 },
          { year: 2023, value: 7952 },
          { year: 2024, value: 8359 },
          { year: 2025, value: 8779 },
        ],
        competitors: [
          {
            name:  'Rachats nets',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: -591 },   // Net émetteur (rachats 111 < émissions 702)
              { year: 2022, value: 581 },
              { year: 2023, value: 1750 },
              { year: 2024, value: 1048 },
              { year: 2025, value: 433 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 1259 },
              { year: 2022, value: 1409 },
              { year: 2023, value: 1778 },
              { year: 2024, value: 2024 },
              { year: 2025, value: 2099 },
            ],
          },
        ],
      },

    ],
  },
}
