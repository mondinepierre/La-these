// ─────────────────────────────────────────────────────────────────────────────
// K92 Mining Inc. (KNT.TO / KNTNF) - Analyse ponctuelle
// Dernière mise à jour : juin 2026
// Sources : Rapport annuel / AIF 2025 (NI 43-101), résultats FY2025 (MD&A + états financiers),
//           Q1-2026, guidance 2026, présentations investisseurs ; multiples de marché : API Yahoo
//           (base TTM homogène).
// ─────────────────────────────────────────────────────────────────────────────
//
// CONVENTION DEVISE (piège du dossier, tranché)
//   Comptes publiés et fonctionnels : USD natif (compte de résultat, bilan, flux, AISC,
//   réserves, NAV). Toute la partie fondamentale et la valorisation NAV sont en USD.
//   Cotation primaire TSX en CAD (KNT) ; secondaires OTCQX (KNTNF, USD) et Francfort.
//   Domaine PRIX (onePager, prixCible, niveaux du Verdict) exprimé en CAD natif (cours TSX,
//   sans conversion), change USD/CAD = 1,4207 (CADUSD 0,7039, API Yahoo) annoté. Les ratios
//   (PER, EV/EBITDA, FCF Yield) sont calculés en USD (numérateur et dénominateur cohérents).
//   PAS le bug Lundin (x taux) : l'onglet Bourse stocke le cours en CAD brut. Le PER Excel
//   (14,9x) mélange cours CAD / BPA USD (incohérence de devise) ; PER ancré en USD sur le
//   panel Yahoo (12,1x trailing / 6,0x forward), cohérent avec la médiane producteurs.
//
// NOTES MÉTHODOLOGIQUES
//   ROIC La Thèse : NOPAT / IC, IC = CP + max(dette nette, 0). Trésorerie nette structurelle
//                   => IC = CP. ROIC 2025 = 34,8 % (NOPAT 267 M$ / IC 768 M$).
//   WACC : CAPM, Rf = UST 10 ans (USD de reporting) 4,09 % ; bêta 1,12 régressé vs S&P/TSX 60 TR
//          (l'actif cote au TSX) ; ERP = US mature 4,23 % + CRP PAPOUASIE-NOUVELLE-GUINÉE 7,0 %
//          (Damodaran, B2/B-, pays d'OPÉRATION) = 11,35 %. Re = WACC = 16,8 % (dette quasi nulle).
//          Le CRP PNG domine le WACC et discounte la NAV : analogue PNG du 25 % équatorien de
//          Lundin, moins extrême (B2 > Caa1). Label "bund 10Y" de l'onglet = coquille (Rf US).
//   FY = exercice calendaire clos le 31/12 (confirmé tous onglets ; TTM au 31/03/2026).
//   Snapshot : structure FY2025 (USD) figée ; valorisation ré-ancrée au COURS SPOT (le titre a
//              progressé de ~16,5 CAD fin 2025 à ~22,3 CAD / 15,7 $US, +35 %, au-delà du seuil 20 %).
//   Q1-2026 (publié 11/05/2026) très fort : CA 236 M$ (+63 %), résultat net 117 M$, EBITDA 180 M$,
//              OCF 133 M$, FCF +67 M$ (déjà le FCF de TOUTE l'année 2025 en un trimestre), BPA 0,48 $,
//              trésorerie nette RECORD 242,6 M$. BPA TTM = 1,30 $ (PER trailing Yahoo 12,1x). Usine
//              Stage 3 : récupérations or +2,5 % au-dessus de la DFS. AISC Q1 1 421 $/oz (encore en
//              haut de cycle, montée en charge). Guidance 2026 réitérée (190-225 koz).
//   FCF La Thèse = OCF - capex (65 M$ en 2025) ; FCF structurellement bridé par le capex
//              d'EXPANSION (Stage 3/4), distinct du capex de maintien inclus dans l'AISC ; commence
//              à se libérer au Q1-2026 (or au plus-haut + capex qui plafonne).
//   Pas de dividende (payout 0). Réserves P&P 1,69 Moz AuEq calculées à 1 900 $/oz seulement.
//   Consensus marché : P/NAV 0,8x vs pairs mid-tier 1,3x (présentation) ; 11 analystes à l'achat,
//              0 à la vente ; objectif moyen 36,7 CAD (haut 44, bas 32) ; juste valeur consensus 32 CAD.
//
// KAINANTU GOLD MINE (KGM) - ACTIF UNIQUE (Papouasie-Nouvelle-Guinée, Eastern Highlands)
//   FY2025 : 174 134 oz AuEq produites (164 484 oz or), record (+16 %). Teneur 9,7 g/t Au,
//   0,51 % Cu, 10,8 g/t Ag ; récupération or 94,7 %. Cash cost 695 $/oz, AISC 1 308 $/oz
//   (by-product) ; or réalisé payable 3 296 $/oz. Gisements Kora + Judd (veines à très haute
//   teneur or-cuivre). Réserves P&P 1,69 Moz AuEq (6,18 Mt @ 8,51 g/t) ; ressources Kora/Judd
//   M&I+inf ~7 Moz AuEq + Blue Lake (porphyre Cu-Au) maiden inférée 14,6 Moz AuEq.
//   EXPANSION : Stage 3 commissionné déc. 2025 (1,2 Mtpa, +100 %, run-rate ~300-319 koz,
//   production commerciale 1er janv. 2026, livré sous budget, AISC LOM DFS 920 $/oz co-product) ;
//   Stage 4 fin 2027 (1,8 Mtpa, +200 %, ~400 koz) -> cible "Tier 1". Guidance 2026 : 190-225 koz.
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const knt: AnalyseCard = {
  slug:           'knt',
  type:           'ponctuelle',            // non détenue, pas de suivi trimestriel engagé
  title:          'K92 Mining',
  ticker:         'KNT.TO',                // Yahoo ; cotation primaire TSX (CAD)
  secteur:        'Matériaux',
  geo:            'Asie',                  // actif unique en Papouasie-Nouvelle-Guinée (Asie-Pacifique)
  conviction:     'moyenne',               // grade d'exception, mais mono-actif + PNG frontière + réserves courtes + ramp non prouvé => sous Lundin
  positionnement: 'surveillance',          // hors position : moins cher que Lundin sur la NAV, mais gated sur l'exécution
  lastUpdated:    '2026-06-29',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Mineur d'or-cuivre à très haute teneur (9,7 g/t) en Papouasie, en pleine montée en puissance. Stage 3 livré, Stage 4 en 2027 pour viser environ 400 koz AuEq. Le pari n'est pas l'or, c'est l'exécution de l'expansion.",
  glossaire:      ['nav-minier', 'aisc', 'prime-de-risque-pays', 'roic', 'free-cash-flow', 'wacc'],
  logo:           '/analyse/k92.png',
  prixCible:      { bas: 19, haut: 34, devise: 'CAD' },   // NAV vie-de-mine à 5 % : bear deck 2 800 $ (~19 CAD) à bull deck 4 000 $ (~34 CAD), central ~26 CAD
  marginOfSafety: 'faible',                                // cours 22,3 CAD entre la NAV centrale à 5 % (~26) et au WACC honnête (~14) : prix grosso modo équitable, gated sur l'exécution
  readingTime:    37,
  onePager: {
    thesis:    "Or-cuivre à très haute teneur en Papouasie, en montée en puissance vers 400 koz AuEq. Le pari n'est pas l'or : c'est l'exécution de l'expansion.",
    cours:     22.34,                  // cours TSX (CAD) au 29/06/2026 ; environ 15,73 $US au change 1,4207
    coursDate: '2026-06-29',
    devise:    'CAD',
    range52w:  { low: 14.13, high: 33.45 },   // extrêmes 52 semaines (CAD, TSX)
  },

  // ── Métriques snapshot ─────────────────────────────────────────────────────
  // Structure FY2025 (USD) ; valorisation ré-ancrée au cours spot ~15,73 $US (22,34 CAD).
  metrics: {
    per:               12.1,   // Cours spot 15,73 $US / BPA TTM 1,30 $ (FY2025 1,11 + Q1-2026 0,48 - Q1-2025 0,29) ; Yahoo trailing 12,1x ; PER forward ~6,0x (ramp)
    evEbitda:           8.7,   // EV (cap 3 841 M$ - tréso nette 176 M$) / EBITDA FY2025 421 M$ (Yahoo 10,6x à son cours)
    fcfYield:           1.7,   // FCF 65 M$ / capitalisation 3 841 M$ au spot - bridé par le capex d'expansion (vs Lundin 7 %)
    roic:              34.8,   // NOPAT 267 M$ / IC 768 M$ - FY2025 (méthode La Thèse, tréso nette => IC = CP)
    wacc:              16.8,   // CAPM : Rf 4,09 % + bêta 1,12 x ERP 11,35 % (dont CRP PNG 7,0 %)
    detteEbitda:       -0.42,  // Trésorerie nette 176 M$ FY2025 (record 242,6 M$ au Q1-2026) - net cash, favorable
    croissanceCA3ans:  46.8,   // TCAC CA 2022-2025
    croissanceBPA3ans: 74.4,   // TCAC EPS 2021-2025 (4 ans) - le 3 ans (+94,9 %) est trompeur (base 2022 = creux de montée en charge)
    margeEbit:         64.5,   // EBIT 384 M$ / CA 595 M$ - FY2025 (Yahoo 71,1 % sur base ajustée)
    margeBrute:        73.6,   // Marge brute FY2025
    payoutRatio:        0.0,   // Pas de dividende (cash réinvesti dans l'expansion)
    currentRatio:       3.28,  // Actifs courants 377 M$ / passifs courants 115 M$
    dso:               37.5,   // (Créances clients / CA) x 365
  },

  tendances: {
    per:       'baisse',   // de-rating : 47x (2021, base de bénéfice quasi nul) -> ~12-14x au spot
    fcfYield:  'hausse',   // remonte (FCF négatif 2023 -> positif), mais reste bas (capex d'expansion)
    roic:      'hausse',   // 12 % (2021) -> 35 % (2025) - effet prix de l'or + montée en cadence
    margeEbit: 'hausse',   // 31 % (2021) -> 64 % (2025)
  },

  updates: [
    {
      date: '2026-06-29',
      note: "Création de la fiche. Données FY2025 (états financiers, MD&A, AIF NI 43-101) et Q1-2026 (publié 11/05/2026), guidance 2026. FY2025 : production record 174 134 oz AuEq, AISC 1 308 $/oz, FCF 65 M$. Q1-2026 record : CA 236 M$ (+63 %), résultat net 117 M$, FCF +67 M$, trésorerie nette record 242,6 M$, BPA 0,48 $ ; Stage 3 dépasse la DFS (récupérations or +2,5 %). Stage 3 commissionné déc. 2025 (production commerciale 1er janv. 2026) ; Stage 4 visée fin 2027. Cours ré-ancré au spot (22,34 CAD / 15,73 $US), or spot ~4 043 $/oz. Consensus : 11 achats / 0 vente, objectif moyen 36,7 CAD.",
    },
    {
      date: '2026-08-13',
      note: 'Résultats Q2-2026 attendus. Source : Yahoo Finance API.',
    },
  ],

  chartData: {

    // ── CA consolidé sur 5 ans (M$, USD) ──────────────────────────────────────
    // Croissance = prix de l'or réalisé x volume CROISSANT (montée en cadence + Stage 3).
    revenue: [
      { year: 2021, value: 154.3 },
      { year: 2022, value: 188.2 },
      { year: 2023, value: 200.3 },
      { year: 2024, value: 350.6 },
      { year: 2025, value: 595.2 },
    ],

    // ── Répartition géographique : actif unique en Papouasie-Nouvelle-Guinée ───
    geoRevenue: [
      { region: 'Papouasie-Nouvelle-Guinée', pct: 100 },
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    // Expansion des marges = prix de l'or (price-taker) + dilution des coûts fixes par le volume.
    marges: [
      { year: 2021, gross: 46.0, operating: 30.8, net: 17.7 },
      { year: 2022, gross: 48.8, operating: 33.7, net: 18.9 },
      { year: 2023, gross: 44.4, operating: 27.2, net: 16.6 },
      { year: 2024, gross: 59.4, operating: 46.6, net: 31.7 },
      { year: 2025, gross: 73.6, operating: 64.5, net: 45.4 },
    ],

    // ── ROIC sur 5 ans (%) ────────────────────────────────────────────────────
    roic: [
      { year: 2021, value: 12.3 },
      { year: 2022, value: 12.2 },
      { year: 2023, value: 10.0 },
      { year: 2024, value: 23.2 },
      { year: 2025, value: 34.8 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // WACC élevé (~17 %) par le CRP PNG. Le spread devient franchement positif en 2024-2025
    // avec la hausse de l'or et la montée en cadence (+18 pts en 2025).
    roicVsWacc: [
      { year: 2021, value: 12.3, wacc: 14.2 },
      { year: 2022, value: 12.2, wacc: 18.5 },
      { year: 2023, value: 10.0, wacc: 17.0 },
      { year: 2024, value: 23.2, wacc: 16.6 },
      { year: 2025, value: 34.8, wacc: 16.8 },
    ],

    // ── Free Cash Flow sur 5 ans (M$, USD) ────────────────────────────────────
    // FCF = OCF - capex. BRIDÉ par le capex d'EXPANSION (Stage 3/4) : négatif en 2023, mince
    // en 2025 malgré un OCF record. C'est la signature du mineur en croissance (vs Lundin).
    fcf: [
      { year: 2021, value:  21.4 },
      { year: 2022, value:   1.4 },
      { year: 2023, value: -27.8 },
      { year: 2024, value:  25.3 },
      { year: 2025, value:  65.0 },
    ],

    // ── Graphiques de valorisation comparée (radar 8 branches, API Yahoo) ─────
    // Panel : producteurs d'or (médiane hors streamers type Osisko Royalties et hors N/M
    // Centamin/Calibre). Bloc "pairs directs" de l'onglet = Lundin Gold, Alamos, Torex.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - K92 Mining vs producteurs d\'or',
        data: [
          { label: 'PER',             valeur: 12.1, secteur: 12.2 },
          { label: 'EV/EBITDA',       valeur: 10.6, secteur:  9.6 },
          { label: 'P/FCF',           valeur: 84.3, secteur: 32.3 },
          { label: 'Marge EBIT %',    valeur: 71.1, secteur: 55.6 },
          { label: 'ROIC %',          valeur: 36.3, secteur: 16.7 },
          { label: 'FCF Yield %',     valeur:  1.2, secteur:  2.6 },
          { label: 'Dette/EBITDA',    valeur: -0.4, secteur: -0.2 },
          { label: 'TCAC CA 3 ans %', valeur: 63.4, secteur: 66.1 },
        ],
      },
      {
        id: 'vs_lundin', type: 'radar',
        title: 'Valorisation comparée - K92 Mining vs Lundin Gold',
        concurrent1: 'Lundin Gold',
        data: [
          { label: 'PER',             valeur: 12.1, concurrent1: 14.3 },
          { label: 'EV/EBITDA',       valeur: 10.6, concurrent1: 12.6 },
          { label: 'P/FCF',           valeur: 84.3, concurrent1: 14.0 },
          { label: 'Marge EBIT %',    valeur: 71.1, concurrent1: 68.9 },
          { label: 'ROIC %',          valeur: 36.3, concurrent1: 57.0 },
          { label: 'FCF Yield %',     valeur:  1.2, concurrent1:  7.1 },
          { label: 'Dette/EBITDA',    valeur: -0.4, concurrent1: -0.5 },
          { label: 'TCAC CA 3 ans %', valeur: 63.4, concurrent1: 59.2 },
        ],
      },
      {
        id: 'vs_alamos', type: 'radar',
        title: 'Valorisation comparée - K92 Mining vs Alamos Gold',
        concurrent1: 'Alamos Gold',
        data: [
          { label: 'PER',             valeur: 12.1, concurrent1: 12.2 },
          { label: 'EV/EBITDA',       valeur: 10.6, concurrent1: 13.4 },
          { label: 'P/FCF',           valeur: 84.3, concurrent1: 67.3 },
          { label: 'Marge EBIT %',    valeur: 71.1, concurrent1: 52.4 },
          { label: 'ROIC %',          valeur: 36.3, concurrent1: 16.1 },
          { label: 'FCF Yield %',     valeur:  1.2, concurrent1:  1.5 },
          { label: 'Dette/EBITDA',    valeur: -0.4, concurrent1: -0.3 },
          { label: 'TCAC CA 3 ans %', valeur: 63.4, concurrent1: 79.2 },
        ],
      },
      {
        id: 'vs_torex', type: 'radar',
        title: 'Valorisation comparée - K92 Mining vs Torex Gold',
        concurrent1: 'Torex Gold',
        data: [
          { label: 'PER',             valeur: 12.1, concurrent1:  6.3 },
          { label: 'EV/EBITDA',       valeur: 10.6, concurrent1:  5.5 },
          { label: 'P/FCF',           valeur: 84.3, concurrent1: 38.8 },
          { label: 'Marge EBIT %',    valeur: 71.1, concurrent1: 55.6 },
          { label: 'ROIC %',          valeur: 36.3, concurrent1: 17.2 },
          { label: 'FCF Yield %',     valeur:  1.2, concurrent1:  2.6 },
          { label: 'Dette/EBITDA',    valeur: -0.4, concurrent1:  0.0 },
          { label: 'TCAC CA 3 ans %', valeur: 63.4, concurrent1: 217.2 },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────────
    metricHistory: [

      // ── OCF, FCF et Capex (M$, USD) - LE graphique de la thèse ─────────────
      // Le capex (croissance Stage 3/4) absorbe l'OCF record : le FCF reste mince. C'est ce
      // qui distingue K92 (croissance) de Lundin (plateau, FCF massif).
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash-flow opérationnel',
        unit:  'M$',
        yMin:  -50,
        data: [
          { year: 2021, value:  61.2 },
          { year: 2022, value:  73.1 },
          { year: 2023, value:  74.4 },
          { year: 2024, value: 185.1 },
          { year: 2025, value: 280.9 },
        ],
        competitors: [
          {
            name:  'Capex (croissance + maintien)',
            color: '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value:  39.8 },
              { year: 2022, value:  71.7 },
              { year: 2023, value: 102.3 },
              { year: 2024, value: 159.8 },
              { year: 2025, value: 215.9 },
            ],
          },
          {
            name:  'FCF (OCF - capex)',
            color: '#C9A84C',
            data: [
              { year: 2021, value:  21.4 },
              { year: 2022, value:   1.4 },
              { year: 2023, value: -27.8 },
              { year: 2024, value:  25.3 },
              { year: 2025, value:  65.0 },
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
          { year: 2021, value: 0.12 },
          { year: 2022, value: 0.15 },
          { year: 2023, value: 0.14 },
          { year: 2024, value: 0.46 },
          { year: 2025, value: 1.11 },
        ],
      },

      // ── EV/EBITDA historique (au cours de clôture FY, base TSX/CAD) ────────
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 20.9 },
          { year: 2022, value: 15.8 },
          { year: 2023, value: 13.2 },
          { year: 2024, value:  7.3 },
          { year: 2025, value:  9.6 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 13.4 },
              { year: 2022, value: 13.4 },
              { year: 2023, value: 13.4 },
              { year: 2024, value: 13.4 },
              { year: 2025, value: 13.4 },
            ],
          },
        ],
      },

      // ── PER historique (au cours de clôture FY, base TSX/CAD) ──────────────
      // De-rating massif : 47x (2021, bénéfice quasi nul) -> ~15x (2025), le bénéfice ayant
      // rattrapé le cours. Niveaux indicatifs (cours CAD / BPA USD) ; le trend est l'info.
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 47.4 },
          { year: 2022, value: 37.2 },
          { year: 2023, value: 35.3 },
          { year: 2024, value: 13.1 },
          { year: 2025, value: 14.9 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 29.6 },
              { year: 2022, value: 29.6 },
              { year: 2023, value: 29.6 },
              { year: 2024, value: 29.6 },
              { year: 2025, value: 29.6 },
            ],
          },
        ],
      },

      // ── FCF Yield historique (capitalisation, au cours de clôture FY) ──────
      // Structurellement bas (capex d'expansion) : négatif en 2023, ~1,6 % en 2025. Rf = UST 10 ans.
      {
        label: 'FCFy',
        name:  'FCF Yield (capitalisation)',
        unit:  '%',
        data: [
          { year: 2021, value:  1.7 },
          { year: 2022, value:  0.1 },
          { year: 2023, value: -2.4 },
          { year: 2024, value:  1.7 },
          { year: 2025, value:  1.6 },
        ],
        competitors: [
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
          { year: 2021, value: 20.3 },
          { year: 2022, value: 20.2 },
          { year: 2023, value: 15.5 },
          { year: 2024, value: 31.9 },
          { year: 2025, value: 48.0 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 14.2 },
              { year: 2022, value: 18.5 },
              { year: 2023, value: 17.0 },
              { year: 2024, value: 16.6 },
              { year: 2025, value: 16.8 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 12.3 },
              { year: 2022, value: 12.2 },
              { year: 2023, value: 10.0 },
              { year: 2024, value: 23.2 },
              { year: 2025, value: 34.8 },
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
          { year: 2022, value:  22.6 },
          { year: 2023, value:  -2.9 },
          { year: 2024, value: 180.4 },
          { year: 2025, value: 126.9 },
        ],
      },

      // ── Dette nette / EBITDA ──────────────────────────────────────────────
      // Trésorerie nette constante malgré le capex lourd : l'expansion est autofinancée.
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  -2,
        data: [
          { year: 2021, value: -0.93 },
          { year: 2022, value: -1.19 },
          { year: 2023, value: -0.76 },
          { year: 2024, value: -0.37 },
          { year: 2025, value: -0.42 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: -0.73 },
              { year: 2022, value: -0.73 },
              { year: 2023, value: -0.73 },
              { year: 2024, value: -0.73 },
              { year: 2025, value: -0.73 },
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
          { year: 2021, value: 3.68 },
          { year: 2022, value: 3.60 },
          { year: 2023, value: 3.08 },
          { year: 2024, value: 2.27 },
          { year: 2025, value: 3.28 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 3.18 },
              { year: 2022, value: 3.18 },
              { year: 2023, value: 3.18 },
              { year: 2024, value: 3.18 },
              { year: 2025, value: 3.18 },
            ],
          },
        ],
      },

      // ── CCC - DSO / DIO / DPO ─────────────────────────────────────────────
      // DIO élevé (157 j) : stocks de concentré et de doré en transit (mine éloignée, PNG).
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 39.6 },
          { year: 2022, value: 30.0 },
          { year: 2023, value: 27.4 },
          { year: 2024, value: 21.0 },
          { year: 2025, value: 37.5 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 111.3 },
              { year: 2022, value: 108.1 },
              { year: 2023, value: 118.0 },
              { year: 2024, value:  99.8 },
              { year: 2025, value: 157.9 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 62.3 },
              { year: 2022, value: 69.9 },
              { year: 2023, value: 71.8 },
              { year: 2024, value: 60.5 },
              { year: 2025, value: 94.3 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 88.6 },
              { year: 2022, value: 68.2 },
              { year: 2023, value: 73.6 },
              { year: 2024, value: 60.3 },
              { year: 2025, value: 101.1 },
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
          { year: 2021, value: 0.57 },
          { year: 2022, value: 0.51 },
          { year: 2023, value: 0.49 },
          { year: 2024, value: 0.56 },
          { year: 2025, value: 0.62 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.55 },
              { year: 2022, value: 0.55 },
              { year: 2023, value: 0.55 },
              { year: 2024, value: 0.55 },
              { year: 2025, value: 0.55 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions (%) ──────────────────────────
      // Modérée (~1-3 %/an) : options et financement de l'expansion, pas de gros placement.
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: 2.88 },
          { year: 2023, value: 2.16 },
          { year: 2024, value: 0.90 },
          { year: 2025, value: 1.53 },
        ],
      },

    ],
  },
}
