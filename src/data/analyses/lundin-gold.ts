// ─────────────────────────────────────────────────────────────────────────────
// Lundin Gold Inc. (LUG.TO / LUG.ST / LUGDF) - Analyse ponctuelle
// Dernière mise à jour : juin 2026
// Sources : Rapport annuel 2025, AIF 2025 (NI 43-101), résultats Q4-2025 et Q1-2026,
//           présentations investisseurs ; multiples de marché : API Yahoo (base TTM homogène).
// ─────────────────────────────────────────────────────────────────────────────
//
// CONVENTION DEVISE (piège du dossier, tranché)
//   Comptes publiés et fonctionnels : USD natif (compte de résultat, bilan, flux, AISC,
//   réserves, NAV). Toute la partie fondamentale et la valorisation NAV sont en USD.
//   Cotation primaire TSX en CAD (LUG) ; secondaire Stockholm (LUG.ST) et OTCQX (LUGDF).
//   Domaine PRIX (onePager, prixCible, niveaux du Verdict) exprimé en CAD natif (cours TSX,
//   sans conversion), change USD/CAD environ 1,42 annoté. Les ratios (PER, EV/EBITDA, FCF
//   Yield) sont calculés en USD (numérateur et dénominateur cohérents).
//
// NOTES MÉTHODOLOGIQUES
//   ROIC La Thèse : NOPAT / IC, IC = CP + max(dette nette, 0). Trésorerie nette structurelle
//                   => IC = CP (1 364 M$ en 2025), pas de goodwill. ROIC 2025 = 57,0 %.
//   WACC : CAPM, Rf = UST 10 ans (USD de reporting) 4,09 % ; bêta 1,30 régressé vs S&P/TSX 60 TR
//          (l'actif cote au Canada) ; ERP = US mature 4,23 % + CRP ÉQUATEUR 11,85 % (Damodaran,
//          Caa1/B-, pays d'OPÉRATION) = 16,08 %. Re = WACC = 25,1 % (pas de dette). Le CRP
//          Équateur domine le WACC et discounte lourdement la NAV : c'est le cœur de l'angle.
//   FY = exercice calendaire clos le 31/12 (les libellés "30/09"/"31/01" des onglets sources
//        sont des artefacts de template, ignorés).
//   Snapshot : structure FY2025 figée (ROIC, marges, bilan, croissance) ; valorisation
//              ré-ancrée au COURS SPOT (le titre a reflué de ~83 $ fin 2025 à ~54 $US / 77 CAD,
//              soit -35 %, au-delà du seuil de 20 %).
//   FCF La Thèse = OCF - capex (937 M$) ; la société publie un "free cash flow" de 926 M$
//                  (définition propre) : écart mineur, La Thèse retenu pour cohérence inter-fiches.
//   Dividende 2,75 $/action 2025 = ordinaire + spéciaux (664 M$ versés). Payout 84 % de l'EPS.
//
// FRUTA DEL NORTE - ACTIF UNIQUE (Équateur, sud-est)
//   FY2025 : 498 315 oz produites, 503 330 oz vendues, teneur 9,5 g/t, récupération 89,0 %.
//   Cash cost 838 $/oz, AISC 1 015 $/oz, marge AISC 72 % ; prix réalisé 3 594 $/oz.
//   Réserves P&P (31/12/2025) : 25,7 Mt @ 7,09 g/t = 5,85 Moz Au (calculées à 1 700 $/oz).
//   Ressources M&I (incl. réserves) : 7,48 Moz ; Inférées : 2,03 Moz. Vie de mine ~12 ans
//   sur réserves, extension via FDNS / FDN East / corridor de porphyres Cu-Au.
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const lundinGold: AnalyseCard = {
  slug:           'lundin-gold',
  type:           'ponctuelle',            // non détenue, pas de suivi trimestriel engagé
  title:          'Lundin Gold',
  ticker:         'LUG.TO',                // Yahoo ; cotation primaire TSX (CAD)
  secteur:        'Matériaux',
  geo:            'Amériques',             // actif unique en Équateur (société canadienne)
  conviction:     'forte',                 // ROIC 57 %, zéro dette, mais mono-actif + mono-juridiction Équateur => pas exceptionnelle
  positionnement: 'surveillance',          // hors position : payée pour un or record et une exécution parfaite
  lastUpdated:    '2026-06-28',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "La mine d'or la plus rentable du monde : AISC 1 015 $/oz, ROIC 57 %, zéro dette, FCF massif. Mais à un or record, déjà payée comme un actif unique parfait en Équateur.",
  glossaire:      ['nav-minier', 'aisc', 'prime-de-risque-pays', 'roic', 'free-cash-flow', 'marge-de-securite'],
  logo:           '/analyse/lundin-gold.png',
  prixCible:      { bas: 30, haut: 62, devise: 'CAD' },   // NAV vie-de-mine : bear deck 2 400 $ (~30 CAD) à bull deck 4 000 $ (~62 CAD), central ~46 CAD
  marginOfSafety: 'négative',                              // cours 77 CAD au-dessus du haut de la fourchette NAV
  readingTime:    38,
  onePager: {
    thesis:    "La mine d'or la plus rentable du monde, sans dette. Mais à un or record, déjà payée au prix d'un actif unique parfait en Équateur.",
    cours:     77.05,                  // cours TSX (CAD) au 26/06/2026 ; environ 54,3 $US au change 1,42
    coursDate: '2026-06-26',
    devise:    'CAD',
    range52w:  { low: 59.29, high: 124.15 },   // extrêmes intraday 52 semaines (CAD, TSX)
  },

  // ── Métriques snapshot ─────────────────────────────────────────────────────
  // Structure FY2025 (USD) ; valorisation ré-ancrée au cours spot ~54,28 $US (77 CAD).
  metrics: {
    per:               16.6,   // Cours spot 54,28 $US / EPS dilué 3,27 $ (Yahoo TTM trailing 14,4x ; PER forward ~12x)
    evEbitda:          10.1,   // EV (cap 13,2 Md$ - tréso nette 0,63 Md$) / EBITDA FY2025 1 238 M$ (Yahoo TTM 12,6x)
    fcfYield:           7.1,   // FCF 937 M$ / capitalisation 13,2 Md$ au spot
    roic:              57.0,   // NOPAT 777 M$ / IC 1 364 M$ - FY2025 (méthode La Thèse, tréso nette => IC = CP)
    wacc:              25.1,   // CAPM : Rf 4,09 % + bêta 1,30 x ERP 16,08 % (dont CRP Équateur 11,85 %)
    detteEbitda:       -0.51,  // Trésorerie nette 630 M$ - valeur négative = net cash (favorable)
    croissanceCA3ans:  29.8,   // TCAC CA 2022-2025
    croissanceBPA3ans: 36.6,   // TCAC EPS 2021-2025 (4 ans) - le 3 ans 2022-2025 (+119 %) est trompeur (base 2022 = creux post-démarrage)
    margeEbit:         61.8,   // EBIT 1 102 M$ / CA 1 783 M$ - FY2025
    margeBrute:        68.8,   // Marge brute FY2025
    payoutRatio:       83.8,   // Dividendes 2,75 $ (ord. + spéciaux) / EPS 3,27 $
    currentRatio:       2.53,  // Actifs courants 983 M$ / passifs courants 389 M$
    dso:               53.2,   // (Créances clients / CA) x 365
  },

  tendances: {
    per:       'baisse',   // de-rating : 25x (clôture FY2025, 83 $) -> 17x au spot
    fcfYield:  'hausse',   // remonte avec le repli du cours et la hausse du FCF
    roic:      'hausse',   // 21 % (2021) -> 57 % (2025) - effet prix de l'or
    margeEbit: 'hausse',   // 44 % (2021) -> 62 % (2025)
  },

  updates: [
    {
      date: '2026-06-28',
      note: "Création de la fiche. Données FY2025 (rapport annuel, AIF), Q1-2026, guidance 2026. Cours ré-ancré au spot (77 CAD / 54 $US) après un repli de ~35 % depuis le plus-haut fin 2025. Or spot ~4 085 $/oz.",
    },
    {
      date: '2026-08-05',
      note: 'Résultats Q2-2026 attendus. Source : Yahoo Finance API.',
    },
  ],

  chartData: {

    // ── CA consolidé sur 5 ans (M$, USD) ──────────────────────────────────────
    // Mono-actif : 100 % Fruta del Norte. Croissance = prix de l'or réalisé x volume.
    revenue: [
      { year: 2021, value:  733.3 },
      { year: 2022, value:  815.7 },
      { year: 2023, value:  902.5 },
      { year: 2024, value: 1193.1 },
      { year: 2025, value: 1782.9 },
    ],

    // ── Répartition géographique : actif unique en Équateur ───────────────────
    geoRevenue: [
      { region: 'Équateur', pct: 100 },
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    // L'expansion des marges suit le prix de l'or (price-taker, AISC bas et stable).
    marges: [
      { year: 2021, gross: 48.5, operating: 43.8, net: 30.2 },
      { year: 2022, gross: 45.3, operating: 41.1, net:  9.0 },
      { year: 2023, gross: 48.2, operating: 43.3, net: 19.9 },
      { year: 2024, gross: 59.0, operating: 52.6, net: 35.7 },
      { year: 2025, gross: 68.8, operating: 61.8, net: 44.4 },
    ],

    // ── ROIC sur 5 ans (%) ────────────────────────────────────────────────────
    roic: [
      { year: 2021, value: 21.4 },
      { year: 2022, value: 12.0 },
      { year: 2023, value: 24.7 },
      { year: 2024, value: 34.7 },
      { year: 2025, value: 57.0 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // WACC structurellement élevé (25 %) par le CRP Équateur. Spread néanmoins très
    // positif au prix de l'or actuel : +32 pts en 2025.
    roicVsWacc: [
      { year: 2021, value: 21.4, wacc: 17.4 },
      { year: 2022, value: 12.0, wacc: 21.4 },
      { year: 2023, value: 24.7, wacc: 23.2 },
      { year: 2024, value: 34.7, wacc: 25.4 },
      { year: 2025, value: 57.0, wacc: 25.1 },
    ],

    // ── Free Cash Flow sur 5 ans (M$, USD) ────────────────────────────────────
    // FCF = OCF - capex. Capex faible (mine bâtie) : ~8 % de l'OCF en 2025.
    fcf: [
      { year: 2021, value: 360.8 },
      { year: 2022, value: 372.1 },
      { year: 2023, value: 471.2 },
      { year: 2024, value: 580.0 },
      { year: 2025, value: 937.1 },
    ],

    // ── Graphiques de valorisation comparée (radar 8 branches, API Yahoo) ─────
    // Panel : producteurs d'or (streamers Franco-Nevada/Wheaton et Newmont N/M exclus).
    // Cellules vides de Lundin Gold (P/FCF, ROIC, FCF Yield, Dette/EBITDA) substituées
    // par les valeurs La Thèse (calcul propre), signalées en NoteAnalyse.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Lundin Gold vs producteurs d\'or',
        data: [
          { label: 'PER',             valeur: 14.4, secteur: 10.3 },
          { label: 'EV/EBITDA',       valeur: 12.6, secteur:  8.1 },
          { label: 'P/FCF',           valeur: 14.0, secteur: 32.9 },
          { label: 'Marge EBIT %',    valeur: 68.9, secteur: 53.8 },
          { label: 'ROIC %',          valeur: 57.0, secteur: 16.1 },
          { label: 'FCF Yield %',     valeur:  7.1, secteur:  2.5 },
          { label: 'Dette/EBITDA',    valeur: -0.5, secteur: -0.2 },
          { label: 'TCAC CA 3 ans %', valeur: 59.2, secteur: 66.4 },
        ],
      },
      {
        id: 'vs_agnico', type: 'radar',
        title: 'Valorisation comparée - Lundin Gold vs Agnico Eagle',
        concurrent1: 'Agnico Eagle',
        data: [
          { label: 'PER',             valeur: 14.4, concurrent1: 14.8 },
          { label: 'EV/EBITDA',       valeur: 12.6, concurrent1: 11.4 },
          { label: 'P/FCF',           valeur: 14.0, concurrent1: 26.2 },
          { label: 'Marge EBIT %',    valeur: 68.9, concurrent1: 62.8 },
          { label: 'ROIC %',          valeur: 57.0, concurrent1: 14.6 },
          { label: 'FCF Yield %',     valeur:  7.1, concurrent1:  3.8 },
          { label: 'Dette/EBITDA',    valeur: -0.5, concurrent1: -0.3 },
          { label: 'TCAC CA 3 ans %', valeur: 59.2, concurrent1: 66.1 },
        ],
      },
      {
        id: 'vs_alamos', type: 'radar',
        title: 'Valorisation comparée - Lundin Gold vs Alamos Gold',
        concurrent1: 'Alamos Gold',
        data: [
          { label: 'PER',             valeur: 14.4, concurrent1: 12.4 },
          { label: 'EV/EBITDA',       valeur: 12.6, concurrent1: 13.4 },
          { label: 'P/FCF',           valeur: 14.0, concurrent1: 68.7 },
          { label: 'Marge EBIT %',    valeur: 68.9, concurrent1: 52.4 },
          { label: 'ROIC %',          valeur: 57.0, concurrent1: 16.1 },
          { label: 'FCF Yield %',     valeur:  7.1, concurrent1:  1.5 },
          { label: 'Dette/EBITDA',    valeur: -0.5, concurrent1: -0.3 },
          { label: 'TCAC CA 3 ans %', valeur: 59.2, concurrent1: 79.2 },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────────
    metricHistory: [

      // ── Prix de l'or réalisé - LE driver (US$/oz) ─────────────────────────
      // Le moteur de la thèse : marge et FCF suivent le prix réalisé (price-taker).
      // Réserves calculées à seulement 1 700 $/oz ; spot ~4 085 $/oz mi-2026.
      {
        label: 'Or_Realise',
        name:  'Prix de l\'or réalisé',
        unit:  'US$/oz',
        yMin:  0,
        data: [
          { year: 2021, value: 1772 },
          { year: 2022, value: 1789 },
          { year: 2023, value: 1958 },
          { year: 2024, value: 2462 },
          { year: 2025, value: 3594 },
        ],
        competitors: [
          {
            name:   'AISC (coût tout compris)',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value:  762 },   // rapport annuel 2022 (FY2021)
              { year: 2022, value:  805 },   // rapport annuel 2022/2023 (FY2022)
              { year: 2023, value:  860 },   // rapport annuel 2023/2024 (FY2023)
              { year: 2024, value:  875 },   // rapport annuel 2024 (FY2024)
              { year: 2025, value: 1015 },   // rapport annuel 2025 (FY2025)
            ],
          },
        ],
      },

      // ── BPA dilué ($, USD) ────────────────────────────────────────────────
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '$',
        data: [
          { year: 2021, value: 0.94 },
          { year: 2022, value: 0.31 },
          { year: 2023, value: 0.75 },
          { year: 2024, value: 1.76 },
          { year: 2025, value: 3.27 },
        ],
      },

      // ── EV/EBITDA historique (au cours de clôture FY) ─────────────────────
      // 2025 à 16,3x = clôture FY2025 (~83 $) ; au spot (~54 $) l'EV/EBITDA retombe à ~10x.
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value:  5.6 },
          { year: 2022, value:  5.6 },
          { year: 2023, value:  5.7 },
          { year: 2024, value:  6.7 },
          { year: 2025, value: 16.3 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 8.0 },
              { year: 2022, value: 8.0 },
              { year: 2023, value: 8.0 },
              { year: 2024, value: 8.0 },
              { year: 2025, value: 8.0 },
            ],
          },
        ],
      },

      // ── PER historique (au cours de clôture FY) ───────────────────────────
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value:  8.7 },
          { year: 2022, value: 31.4 },
          { year: 2023, value: 16.6 },
          { year: 2024, value: 12.1 },
          { year: 2025, value: 25.4 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 18.9 },
              { year: 2022, value: 18.9 },
              { year: 2023, value: 18.9 },
              { year: 2024, value: 18.9 },
              { year: 2025, value: 18.9 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (capitalisation, au cours de clôture FY) ──────
      // Tombe à 4,7 % fin 2025 (cours haut) ; remonte à ~7 % au spot. Rf = UST 10 ans.
      {
        label: 'FCFy',
        name:  'FCF Yield (capitalisation)',
        unit:  '%',
        data: [
          { year: 2021, value: 18.7 },
          { year: 2022, value: 16.1 },
          { year: 2023, value: 15.8 },
          { year: 2024, value: 11.3 },
          { year: 2025, value:  4.7 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 13.3 },
              { year: 2022, value: 13.3 },
              { year: 2023, value: 13.3 },
              { year: 2024, value: 13.3 },
              { year: 2025, value: 13.3 },
            ],
          },
          {
            name:  'UST 10 ans',
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

      // ── ROCE vs WACC vs ROIC (%) ──────────────────────────────────────────
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 23.5 },
          { year: 2022, value: 28.5 },
          { year: 2023, value: 32.6 },
          { year: 2024, value: 51.6 },
          { year: 2025, value: 80.8 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 17.4 },
              { year: 2022, value: 21.4 },
              { year: 2023, value: 23.2 },
              { year: 2024, value: 25.4 },
              { year: 2025, value: 25.1 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 21.4 },
              { year: 2022, value: 12.0 },
              { year: 2023, value: 24.7 },
              { year: 2024, value: 34.7 },
              { year: 2025, value: 57.0 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (%) - non significatif ───────────────────────────────
      // Très volatile : montée en charge de la mine puis contraction de l'IC par les
      // dividendes spéciaux (capitaux propres qui se réduisent alors que le NOPAT monte).
      // Lire le ROIC absolu restauré, pas l'incrémental.
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value:  189.8 },
          { year: 2023, value:  -79.0 },
          { year: 2024, value: -107.8 },
          { year: 2025, value:  159.5 },
        ],
      },

      // ── Dette nette / EBITDA ──────────────────────────────────────────────
      // Désendettement total : dette de construction soldée (740 M$ en 2021 -> 0 en 2024).
      // Trésorerie nette depuis 2024 (-0,51x en 2025).
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  -2,
        data: [
          { year: 2021, value:  1.11 },
          { year: 2022, value:  0.65 },
          { year: 2023, value:  0.07 },
          { year: 2024, value: -0.46 },
          { year: 2025, value: -0.51 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.17 },
              { year: 2022, value: 0.17 },
              { year: 2023, value: 0.17 },
              { year: 2024, value: 0.17 },
              { year: 2025, value: 0.17 },
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
          { year: 2021, value: 1.70 },
          { year: 2022, value: 1.44 },
          { year: 2023, value: 2.85 },
          { year: 2024, value: 3.13 },
          { year: 2025, value: 2.53 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.33 },
              { year: 2022, value: 2.33 },
              { year: 2023, value: 2.33 },
              { year: 2024, value: 2.33 },
              { year: 2025, value: 2.33 },
            ],
          },
        ],
      },

      // ── CCC - DSO / DIO / DPO ─────────────────────────────────────────────
      // CCC qui s'effondre à 9 jours en 2025 : DPO en forte hausse (impôts à payer
      // gonflés par le bénéfice record). Cycle de trésorerie sain.
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 83.5 },
          { year: 2022, value: 75.7 },
          { year: 2023, value: 66.1 },
          { year: 2024, value: 71.5 },
          { year: 2025, value: 53.2 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 82.1 },
              { year: 2022, value: 73.5 },
              { year: 2023, value: 69.8 },
              { year: 2024, value: 65.8 },
              { year: 2025, value: 60.9 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value:  65.7 },
              { year: 2022, value:  58.5 },
              { year: 2023, value:  58.4 },
              { year: 2024, value:  82.0 },
              { year: 2025, value: 104.7 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 99.9 },
              { year: 2022, value: 90.7 },
              { year: 2023, value: 77.5 },
              { year: 2024, value: 55.3 },
              { year: 2025, value:  9.5 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      // En forte hausse : le CA croît plus vite que l'actif (mine amortie, prix de l'or).
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 0.44 },
          { year: 2022, value: 0.49 },
          { year: 2023, value: 0.62 },
          { year: 2024, value: 0.78 },
          { year: 2025, value: 1.00 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.66 },
              { year: 2022, value: 0.66 },
              { year: 2023, value: 0.66 },
              { year: 2024, value: 0.66 },
              { year: 2025, value: 0.66 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions (%) ──────────────────────────
      // Quasi-stable : ~0,5-1 %/an (anti-dilution rights, options). Pas de rachats.
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: 0.91 },
          { year: 2023, value: 1.03 },
          { year: 2024, value: 0.95 },
          { year: 2025, value: 0.45 },
        ],
      },

      // ── Dividende par action ($, USD) ─────────────────────────────────────
      // Ordinaire + spéciaux. Bond à 2,75 $ en 2025 (politique de retour massif du cash).
      {
        label: 'Dividendes',
        name:  'Dividende par action (ord. + spéciaux)',
        unit:  '$',
        data: [
          { year: 2021, value: 0.00 },
          { year: 2022, value: 0.20 },
          { year: 2023, value: 0.40 },
          { year: 2024, value: 0.60 },
          { year: 2025, value: 2.75 },
        ],
      },

      // ── Payout Ratio (%) ──────────────────────────────────────────────────
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value:  0.0 },
          { year: 2022, value: 63.9 },
          { year: 2023, value: 52.9 },
          { year: 2024, value: 33.8 },
          { year: 2025, value: 83.8 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 46.9 },
              { year: 2022, value: 46.9 },
              { year: 2023, value: 46.9 },
              { year: 2024, value: 46.9 },
              { year: 2025, value: 46.9 },
            ],
          },
        ],
      },

      // ── Retour aux actionnaires vs Capex (M$, USD) ────────────────────────
      // Retour = dividendes (pas de rachats). Capex faible et stable : la mine est bâtie,
      // le cash va au dividende. Bascule spectaculaire en 2025 (664 M$ de dividendes).
      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value:   0.0 },
          { year: 2022, value:  47.0 },
          { year: 2023, value:  94.9 },
          { year: 2024, value: 143.8 },
          { year: 2025, value: 663.8 },
        ],
        competitors: [
          {
            name:  'Rachats d\'actions',
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
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 57.0 },
              { year: 2022, value: 54.0 },
              { year: 2023, value: 48.2 },
              { year: 2024, value: 82.4 },
              { year: 2025, value: 86.0 },
            ],
          },
        ],
      },

    ],
  },
}
