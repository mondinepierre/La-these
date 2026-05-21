// ─────────────────────────────────────────────────────────────────────────────
// Thales SA (HO) - Valeur suivie
// Dernière mise à jour : mai 2026
// Sources : DEU 2021-2025 (Documents d'Enregistrement Universel),
//           Résultats annuels 2025 publiés le 3 mars 2026, Excel La Thèse
// Devise : Euro (EUR) - cotation Euronext Paris (compartiment A)
// ─────────────────────────────────────────────────────────────────────────────
//
// NOTES MÉTHODOLOGIQUES
//   ROIC : IC Cash Adjusted = Capitaux propres + max(dette nette, 0) + goodwill
//          Goodwill inclus (8 530 M€ FY2025) - Gemalto (2019), Cobham Aerospace (2023), Imperva (2024)
//          NOPAT = EBIT current x (1 - taux effectif d'impôt)
//          Exclut la quote-part Thales Alenia Space + Naval Group (mise en équivalence)
//   WACC : CAPM avec Bund 10Y Allemagne comme Rf
//          IMPORTANT : Plancher 2 % NON APPLIQUE au Rf historique
//          Donc WACC 2021 (2,65 %) est techniquement bas (OAT 10Y proche de 0 % à l'époque)
//          Spread ROIC-WACC 2021 (+10,5 pts) potentiellement surévalué
//          A annoter dans le MDX lors de la lecture du graphique ROIC vs WACC
//   ROIIC : Volatilité structurelle car le dénominateur (IC) varie fortement avec le mouvement
//           de désendettement (dette nette : 5 400 M€ en 2023 -> 1 683 M€ en 2025)
//           Lecture en glissé 1-2-3-4 plus pertinente que YoY pour Thales
//   EBIT segments : Thales publie un EBIT ajusté par segment (somme = 2 740 M€ FY2025)
//                   EBIT consolidé courant (CR) = 2 087 M€ FY2025
//                   Ecart (-653 M€) explique par : amortissement PPA Gemalto/Cobham,
//                   coûts de restructuration (132 M€), autres elements non recurrents
//                   Les marges segments affichées sont donc sur base ajustée
//   Sociétés mises en équivalence (non consolidees en CA) :
//     Thales Alenia Space (67 %, JV avec Leonardo) - quote-part resultat
//     Naval Group (35 %) - quote-part resultat
//     Quote-part totale FY2025 : 198 M€ (~12 % du resultat net groupe)
//
// CARNET DE COMMANDES - Source : Communique resultats annuels 2025 (3 mars 2026)
//   Carnet consolide 31/12/2025 : 53,3 Md€ (record historique)
//   Prises de commandes 2025 : 25 264 M€ (+1 % organique)
//   Book-to-bill consolide 2025 : 1,14 (1,17 hors Cyber & Digital)
//   Couverture : 2,4 années de CA consolide
//
// GUIDANCE 2026 (annoncee le 3 mars 2026)
//   CA : 23,3-23,6 Md€ (+6 a +7 % organique)
//   Marge EBIT Ajustee : 12,6-12,8 %
//   Surtaxe fiscale France reconduite : charge supplementaire 90-100 M€
//   Impact Naval Group (mise en equivalence) : ~8 M€ EBIT Ajuste
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const thales: AnalyseCard = {
  slug:           'thales',
  type:           'valeur',
  title:          'Thales',
  ticker:         'HO',
  secteur:        'Défense',
  geo:            'France',
  conviction:     'forte',              // à valider par Pierre dans le Verdict
  positionnement: 'maintien',           // à valider par Pierre dans le Verdict
  lastUpdated:    '2026-05-13',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '5 ans',
  excerpt:        "L'exposition la plus large au cycle de réarmement européen sur Euronext Paris, portée par un carnet de commandes Défense de 41,6 Md€, une marge EBIT en expansion vers 13-14 % à horizon 2028 et un bilan désendetté qui restaure l'optionalité d'allocation.",
  glossaire:      ['moat', 'roic', 'wacc', 'free-cash-flow', 'ev-ebitda', 'per-valorisation'],
  logo:           '/analyse/thales.png',
  prixCible:      { bas: 339, haut: 423, devise: 'EUR' },   // à compléter après la section Valorisation
  marginOfSafety: 'faible',                        // à compléter après la section Valorisation
  readingTime:    60,                                     // à compléter à la fin de rédaction
      onePager: {
    thesis: "53 Md€ de carnet consolidé : le réarmement européen en cours de matérialisation.",
    cours:     209.40,
    coursDate: '2026-05-19',
    devise:    'EUR',
    range52w:  { low: 147.3, high: 215 },   // À vérifier / mettre à jour
  },

  // ── Métriques snapshot FY2025 ──────────────────────────────────────────────
  // Cours de référence : 229,80 € (clôture 31/12/2025)
  // Cours au moment de la rédaction (12 mai 2026) : 226,00 €
  // Métriques calculées sur FY2025 (exercice clos 31/12/2025, IFRS)
  metrics: {
    per:               28.3,   // Cours 229,80 € / BPA dilué 8,13 €
    evEbitda:          15.4,   // EV 48 993 M€ / EBITDA 3 174 M€
    fcfYield:           5.4,   // FCF 2 565 M€ / Capitalisation 47 310 M€
    roic:              17.4,   // ROIC Cash Adjusted - NOPAT 1 680 M€ / IC 9 671 M€
    wacc:               6.0,   // CAPM - voir notes méthodologiques (plancher non appliqué)
    detteEbitda:        0.53,  // Dette nette 1 683 M€ / EBITDA 3 174 M€
    croissanceCA3ans:   8.0,   // CAGR CA 2022-2025 : 17 569 -> 22 136 M€
    croissanceBPA3ans: 15.5,   // CAGR BPA 2022-2025 : 5,28 -> 8,13 €
    margeEbit:          9.4,   // EBIT current 2 087 M€ / CA 22 136 M€
    margeBrute:        26.4,   // (CA - Coût activité) / CA = 5 853 / 22 136
    payoutRatio:       46.6,   // Dividendes versés 781 M€ / Résultat net 1 675 M€
    currentRatio:       0.84,  // Actifs courants 21 322 / Passifs courants 25 239 M€
    dso:               91,     // (Créances 4 114 / CA 22 136) x 365 - long, normal en défense (contrats LT)
  },

  tendances: {
    per:       'hausse',   // 14,6 (2021) -> 28,3 (2025) - re-rating massif du secteur défense européen
    fcfYield:  'baisse',   // 14,2 % (2021) -> 5,4 % (2025) - expansion du multiple (dénominateur)
    roic:      'hausse',   // 13,1 % (2021) -> 17,4 % (2025) - mais effet désendettement sur dénominateur
    margeEbit: 'hausse',   // 7,1 % (2021) -> 9,4 % (2025) - expansion structurelle, cible 13-14 % en 2028
  },

  updates: [
    {
      date: '2026-05-13',
      note: 'Création de la fiche - données FY2025 (DEU 2025, résultats annuels publiés le 3 mars 2026). Premier exercice à valider la trajectoire de marge vers la cible 13-14 % en 2028. Bilan désendetté (0,53x EBITDA). Carnet consolidé record à 53,3 Md€, dont 41,6 Md€ en Défense.',
    },
  ],

  chartData: {

    // ── CA sur 5 ans (M€) ─────────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 16192 },
      { year: 2022, value: 17569 },
      { year: 2023, value: 18428 },
      { year: 2024, value: 20577 },
      { year: 2025, value: 22136 },
    ],

    // ── Répartition géographique du CA FY2025 ─────────────────────────────────
    // Source : DEU 2025 - Note sur les segments / géographie
    // Libellés alignés avec REGION_TO_CODES dans GeoRevenueMap.tsx
    geoRevenue: [
      { region: 'France',             pct: 27.7 },
      { region: 'Royaume-Uni',        pct:  6.5 },
      { region: 'Europe',             pct: 28.0 },  // "Autres pays d'Europe" hors France et UK
      { region: 'Amériques',          pct: 12.4 },  // Amérique du Nord (E-U + Canada) - libellé Amériques car incluant Canada
      { region: 'Asie et Pacifique',  pct:  4.1 },  // Australie & Nouvelle Zélande
      { region: 'Reste du monde',     pct: 21.3 },  // Marchés émergents (Asie hors ANZ, Moyen-Orient, Afrique, Amérique latine)
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    // gross = Marge brute publiée (Gross Margin / Revenue)
    // operating = Marge EBIT courante (EBIT current / Revenue)
    // net = Marge nette (Net Income / Revenue) - inclut activités non poursuivies en 2024
    marges: [
      { year: 2021, gross: 24.9, operating: 7.1, net: 6.7 },
      { year: 2022, gross: 25.4, operating: 7.7, net: 6.4 },
      { year: 2023, gross: 25.9, operating: 8.5, net: 5.6 },
      { year: 2024, gross: 26.1, operating: 8.3, net: 6.9 },
      { year: 2025, gross: 26.4, operating: 9.4, net: 7.6 },
    ],

    // ── ROIC simple sur 5 ans (%) ─────────────────────────────────────────────
    // Méthodologie La Thèse : NOPAT / IC Cash Adjusted (CP + max(dette nette, 0) + goodwill)
    roic: [
      { year: 2021, value: 13.1 },
      { year: 2022, value: 11.1 },
      { year: 2023, value:  9.9 },
      { year: 2024, value: 12.6 },
      { year: 2025, value: 17.4 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // ATTENTION : Plancher 2 % non appliqué au Rf historique
    // WACC 2021 (2,65 %) techniquement bas - spread surévalué
    // Lecture honnête : spread structurel ~5-8 pts hors effet désendettement 2025
    roicVsWacc: [
      { year: 2021, value: 13.1, wacc: 2.65 },
      { year: 2022, value: 11.1, wacc: 6.24 },
      { year: 2023, value:  9.9, wacc: 4.81 },
      { year: 2024, value: 12.6, wacc: 5.30 },
      { year: 2025, value: 17.4, wacc: 6.00 },
    ],

    // ── Free Cash Flow sur 5 ans (M€) ─────────────────────────────────────────
    // FCF = OCF - Capex industriel (hors acquisitions financières)
    // Le creux 2023 (971 M€) reflète l'effet Cobham Aerospace + cycle BFR défavorable
    fcf: [
      { year: 2021, value: 2256 },
      { year: 2022, value: 2460 },
      { year: 2023, value:  971 },
      { year: 2024, value: 2015 },
      { year: 2025, value: 2565 },
    ],

    // ── CA par segment (M€) ───────────────────────────────────────────────────
    // Source : DEU 2025, note "Résultat par segment opérationnel"
    // Segments : Aerospace, Défense, Cybersecurité & Digital
    // "Autres / éliminations" omis (négatif, non significatif visuellement)
    segmentRevenue: {
      unit: 'M€',
      total: { show: false, label: 'CA hors éliminations' },
      data: [
        { year: 2021, segments: [
          { name: 'Aérospatial',           value: 4554.6 },
          { name: 'Défense',               value: 8961.3 },
          { name: 'Cybersécurité & Digital', value: 3034.3 },
        ]},
        { year: 2022, segments: [
          { name: 'Aérospatial',           value: 4806.6 },
          { name: 'Défense',               value: 9521.5 },
          { name: 'Cybersécurité & Digital', value: 3683.0 },
        ]},
        { year: 2023, segments: [
          { name: 'Aérospatial',           value: 5338.2 },
          { name: 'Défense',               value: 10181.6 },
          { name: 'Cybersécurité & Digital', value: 3422.4 },
        ]},
        { year: 2024, segments: [
          { name: 'Aérospatial',           value: 5639.6 },
          { name: 'Défense',               value: 11316.3 },
          { name: 'Cybersécurité & Digital', value: 4149.1 },
        ]},
        { year: 2025, segments: [
          { name: 'Aérospatial',           value: 6086.8 },
          { name: 'Défense',               value: 12590.6 },
          { name: 'Cybersécurité & Digital', value: 3929.7 },
        ]},
      ],
    },

    // ── Graphiques de valorisation comparée ───────────────────────────────────
    // Source : onglet "Comparaison sectorielle" — Excel La Thèse, mai 2026
    // IMPORTANT : le ROIC ci-dessous est la valeur du peer screening (définition externe,
    // probablement Yahoo Finance / Finviz — hors goodwill ou autre définition).
    // Il diffère du ROIC La Thèse (17,4 %) pour Thales.
    // Pour la cohérence inter-pairs, on utilise la même définition externe pour tous.
    // Panel sectoriel restreint retenu (5 pairs) : Rheinmetall, RTX Corp, Lockheed Martin,
    // Airbus Group, Safran. Les valeurs P/FCF aberrantes (>10 000, N/M exportés) sont exclues.
    // Médiane panel large (17 pairs) : PER 30.9x, EV/EBITDA 19.6x, P/FCF 38.2x,
    // Marge EBIT 10.75%, ROIC 10.4%, FCF Yield 3.1%
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Thales vs panel défense/aérospatial (médiane)',
        data: [
          { label: 'PER',             valeur: 27.8, secteur: 30.9 },
          { label: 'EV/EBITDA',       valeur: 15.9, secteur: 19.6 },
          { label: 'P/FCF',           valeur: 18.1, secteur: 38.2 },
          { label: 'Marge EBIT %',    valeur: 10.5, secteur: 10.75 },
          { label: 'ROIC %',          valeur:  9.8, secteur: 10.4 },
          { label: 'FCF Yield %',     valeur:  5.5, secteur:  3.1 },
          { label: 'Dette/EBITDA',    valeur:  0.6, secteur:  1.2 },
          { label: 'TCAC CA 3 ans %', valeur:  7.1, secteur: 11.3 },
        ],
      },
      {
        id: 'vs_safran', type: 'radar',
        title: 'Valorisation comparée - Thales vs Safran',
        concurrent1: 'Safran',
        data: [
          { label: 'PER',             valeur: 27.8, concurrent1: 16.3 },
          { label: 'EV/EBITDA',       valeur: 15.9, concurrent1: 19.9 },
          { label: 'P/FCF',           valeur: 18.1, concurrent1: 29.8 },
          { label: 'Marge EBIT %',    valeur: 10.5, concurrent1: 13.2 },
          { label: 'ROIC %',          valeur:  9.8, concurrent1: 15.8 },
          { label: 'FCF Yield %',     valeur:  5.5, concurrent1:  3.4 },
          { label: 'Dette/EBITDA',    valeur:  0.6, concurrent1: -0.3 },
          { label: 'TCAC CA 3 ans %', valeur:  7.1, concurrent1: 12.5 },
        ],
      },
      {
        id: 'vs_leonardo', type: 'radar',
        title: 'Valorisation comparée - Thales vs Leonardo',
        concurrent1: 'Leonardo',
        data: [
          { label: 'PER',             valeur: 27.8, concurrent1: 22.3 },
          { label: 'EV/EBITDA',       valeur: 15.9, concurrent1: 13.9 },
          { label: 'P/FCF',           valeur: 18.1, concurrent1: 39.3 },
          { label: 'Marge EBIT %',    valeur: 10.5, concurrent1:  5.6 },
          { label: 'ROIC %',          valeur:  9.8, concurrent1:  9.1 },
          { label: 'FCF Yield %',     valeur:  5.5, concurrent1:  2.5 },
          { label: 'Dette/EBITDA',    valeur:  0.6, concurrent1:  0.5 },
          { label: 'TCAC CA 3 ans %', valeur:  7.1, concurrent1:  6.9 },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────────
    metricHistory: [

      // ── EV/EBITDA historique ──────────────────────────────────────────────
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value:  7.6 },
          { year: 2022, value: 11.7 },
          { year: 2023, value: 12.8 },
          { year: 2024, value: 11.1 },
          { year: 2025, value: 15.4 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 11.7 },
              { year: 2022, value: 11.7 },
              { year: 2023, value: 11.7 },
              { year: 2024, value: 11.7 },
              { year: 2025, value: 11.7 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex ─────────────────────────────────────────────────
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'M€',
        yMin:  0,
        data: [
          { year: 2021, value: 2707 },
          { year: 2022, value: 2995 },
          { year: 2023, value: 1596 },
          { year: 2024, value: 2638 },
          { year: 2025, value: 3322 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 2256 },
              { year: 2022, value: 2460 },
              { year: 2023, value:  971 },
              { year: 2024, value: 2015 },
              { year: 2025, value: 2565 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 451 },
              { year: 2022, value: 535 },
              { year: 2023, value: 626 },
              { year: 2024, value: 623 },
              { year: 2025, value: 757 },
            ],
          },
        ],
      },

      // ── BPA dilué ─────────────────────────────────────────────────────────
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '€',
        data: [
          { year: 2021, value: 5.11 },
          { year: 2022, value: 5.28 },
          { year: 2023, value: 4.89 },
          { year: 2024, value: 6.89 },
          { year: 2025, value: 8.13 },
        ],
      },

      // ── Dividende par action ──────────────────────────────────────────────
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '€',
        data: [
          { year: 2021, value: 2.56 },
          { year: 2022, value: 2.94 },
          { year: 2023, value: 3.40 },
          { year: 2024, value: 3.70 },
          { year: 2025, value: 3.90 },
        ],
      },

      // ── ROCE vs WACC vs ROIC ─────────────────────────────────────────────
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 10.1 },
          { year: 2022, value: 11.8 },
          { year: 2023, value: 12.3 },
          { year: 2024, value: 14.0 },
          { year: 2025, value: 17.4 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 2.65 },
              { year: 2022, value: 6.24 },
              { year: 2023, value: 4.81 },
              { year: 2024, value: 5.30 },
              { year: 2025, value: 6.00 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 13.1 },
              { year: 2022, value: 11.1 },
              { year: 2023, value:  9.9 },
              { year: 2024, value: 12.6 },
              { year: 2025, value: 17.4 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (1 an glissant) ──────────────────────────────────────
      // NOTE IMPORTANTE : volatilité structurelle du ROIIC sur Thales
      // due au mouvement de désendettement (dette nette 5 400 -> 1 683 M€ en 2 ans)
      // qui fait varier fortement le dénominateur IC d'une année sur l'autre
      // Le ROIIC 2025 négatif (-19,3 %) est un artefact comptable, pas un signal de qualité
      // Lecture en glissé 1-2-3-4 plus pertinente que YoY pour Thales
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value: -36.0 },
          { year: 2023, value:   4.4 },
          { year: 2024, value:   4.9 },
          { year: 2025, value: -19.3 },
        ],
      },

      // ── ROIIC glissant multi-périodes ─────────────────────────────────────
      // Lecture plus stable car lisse les mouvements de dette
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: -19.3 },
          { year: 2, value:  81.9 },
          { year: 3, value:  18.6 },
          { year: 4, value:  25.4 },
        ],
      },

      // ── PER historique ────────────────────────────────────────────────────
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 14.6 },
          { year: 2022, value: 22.6 },
          { year: 2023, value: 27.4 },
          { year: 2024, value: 20.1 },
          { year: 2025, value: 28.3 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 22.6 },
              { year: 2022, value: 22.6 },
              { year: 2023, value: 22.6 },
              { year: 2024, value: 22.6 },
              { year: 2025, value: 22.6 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 20.1 },
              { year: 2022, value: 21.2 },
              { year: 2023, value: 27.3 },
              { year: 2024, value: 19.2 },
              { year: 2025, value: 26.1 },
            ],
          },
        ],
      },

      // ── FCF Yield historique ──────────────────────────────────────────────
      // Dénominateur = capitalisation boursière (cohérence inter-fiches)
      // Taux sans risque = Bund 10Y Allemagne
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 14.2 },
          { year: 2022, value:  9.7 },
          { year: 2023, value:  3.5 },
          { year: 2024, value:  7.1 },
          { year: 2025, value:  5.4 },
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
          {
            name:  'Bund 10Y Allemagne',
            color: '#52B788',
            data: [
              { year: 2021, value: 0.2 },
              { year: 2022, value: 2.7 },
              { year: 2023, value: 2.6 },
              { year: 2024, value: 3.1 },
              { year: 2025, value: 3.4 },
            ],
          },
        ],
      },

      // ── CCC - DSO / DIO / DPO / Cash Conversion Cycle ────────────────────
      // Thales a un CCC structurellement long (~150 jours) - normal pour la défense
      // qui opère sur des contrats long terme avec retenues d'exécution et acomptes pluriannuels
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value:  87 },
          { year: 2022, value:  86 },
          { year: 2023, value:  94 },
          { year: 2024, value:  96 },
          { year: 2025, value:  91 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 115 },
              { year: 2022, value: 115 },
              { year: 2023, value: 126 },
              { year: 2024, value: 130 },
              { year: 2025, value: 124 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 62 },
              { year: 2022, value: 70 },
              { year: 2023, value: 73 },
              { year: 2024, value: 72 },
              { year: 2025, value: 66 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 140 },
              { year: 2022, value: 131 },
              { year: 2023, value: 146 },
              { year: 2024, value: 154 },
              { year: 2025, value: 149 },
            ],
          },
        ],
      },

      // ── Current Ratio ─────────────────────────────────────────────────────
      // Thales a structurellement un current ratio < 1
      // Raison : les "passifs sur contrats" (avances clients) gonflent le passif courant
      // sans correspondre à une dette financière - 12 384 M€ en 2025
      // C'est le modèle de financement défense, pas un signal de fragilité
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.06 },
          { year: 2022, value: 1.01 },
          { year: 2023, value: 0.89 },
          { year: 2024, value: 0.83 },
          { year: 2025, value: 0.84 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.93 },
              { year: 2022, value: 0.93 },
              { year: 2023, value: 0.93 },
              { year: 2024, value: 0.93 },
              { year: 2025, value: 0.93 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA ─────────────────────────────────────────────
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 0.40 },
          { year: 2022, value: 1.12 },
          { year: 2023, value: 2.07 },
          { year: 2024, value: 1.07 },
          { year: 2025, value: 0.53 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 1.04 },
              { year: 2022, value: 1.04 },
              { year: 2023, value: 1.04 },
              { year: 2024, value: 1.04 },
              { year: 2025, value: 1.04 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      // CA / Total actifs
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.49 },
          { year: 2022, value: 0.51 },
          { year: 2023, value: 0.48 },
          { year: 2024, value: 0.51 },
          { year: 2025, value: 0.57 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.51 },
              { year: 2022, value: 0.51 },
              { year: 2023, value: 0.51 },
              { year: 2024, value: 0.51 },
              { year: 2025, value: 0.51 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions ──────────────────────────────
      // Variation YoY du nombre d'actions dilué (%)
      // Thales rachète plus qu'il n'émet : tendance à la concentration
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: 0.35 },
          { year: 2023, value: 1.50 },
          { year: 2024, value: 1.50 },
          { year: 2025, value: 0.07 },
        ],
      },

      // ── Payout Ratio ──────────────────────────────────────────────────────
      // Policy management : 40 % du Résultat Net Ajusté Part du Groupe
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 38.3 },
          { year: 2022, value: 50.3 },
          { year: 2023, value: 61.9 },
          { year: 2024, value: 49.9 },
          { year: 2025, value: 46.6 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 49.4 },
              { year: 2022, value: 49.4 },
              { year: 2023, value: 49.4 },
              { year: 2024, value: 49.4 },
              { year: 2025, value: 49.4 },
            ],
          },
        ],
      },

      // ── Allocation du capital - retour actionnaires vs Capex ──────────────
      // data = Retour total (dividendes + rachats nets)
      // concurrent1 = Rachats d'actions bruts
      // concurrent2 = Capex industriel
      {
        label: 'Capex_Action',
        name:  'Dividendes',
        unit:  'M€',
        yMin:  0,
        data: [
          { year: 2021, value: 417 },
          { year: 2022, value: 563 },
          { year: 2023, value: 633 },
          { year: 2024, value: 708 },
          { year: 2025, value: 780 },
        ],
        competitors: [
          {
            name:  'Rachats d\'actions',
            color: '#2D6A4F',
            data: [
              { year: 2021, value:  27 },
              { year: 2022, value: 351 },
              { year: 2023, value: 491 },
              { year: 2024, value: 275 },
              { year: 2025, value:  45 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 451 },
              { year: 2022, value: 535 },
              { year: 2023, value: 626 },
              { year: 2024, value: 623 },
              { year: 2025, value: 757 },
            ],
          },
        ],
      },


      // ── Marge EBIT par segment (%) ────────────────────────────────────────
      // Source : onglet "Résultat par secteur" — EBIT ajusté par segment / CA segment
      // EBIT ajusté segment != EBIT courant consolidé (voir notes méthodologiques)
      // C'est le graphique clé de la thèse : doublement de marge Aérospatial sur 5 ans
      // et expansion nette Défense, pendant que Cyber se tasse.
      {
        label: 'Marge_Segments',
        name:  'Marge EBIT ajustée — Défense',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 12.4 },
          { year: 2022, value: 12.4 },
          { year: 2023, value: 12.3 },
          { year: 2024, value: 12.7 },
          { year: 2025, value: 12.9 },
        ],
        competitors: [
          {
            name:  'Aérospatial',
            color: '#52B788',
            data: [
              { year: 2021, value:  4.4 },
              { year: 2022, value:  4.9 },
              { year: 2023, value:  7.0 },
              { year: 2024, value:  6.9 },
              { year: 2025, value:  9.2 },
            ],
          },
          {
            name:   'Cybersécurité & Digital',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 11.8 },
              { year: 2022, value: 13.4 },
              { year: 2023, value: 14.8 },
              { year: 2024, value: 14.1 },
              { year: 2025, value: 13.4 },
            ],
          },
        ],
      },

      // ── Carnet de commandes par segment (M€) ──────────────────────────────
      // Source : onglet "Résultat par secteur" — carnet hors Groupe au 31/12
      // Données clé pour la thèse : explosion du carnet Défense (+59 % sur 5 ans)
      // vs stagnation Aérospatial et volatilité Cyber
      {
        label: 'Carnet_Commandes',
        name:  'Carnet de commandes — Défense',
        unit:  'M€',
        yMin:  0,
        data: [
          { year: 2021, value: 26110.8 },
          { year: 2022, value: 30970.8 },
          { year: 2023, value: 35247.0 },
          { year: 2024, value: 39153.5 },
          { year: 2025, value: 41577.3 },
        ],
        competitors: [
          {
            name:  'Aérospatial',
            color: '#52B788',
            data: [
              { year: 2021, value:  7903.4 },
              { year: 2022, value:  9224.2 },
              { year: 2023, value:  9272.0 },
              { year: 2024, value: 10485.9 },
              { year: 2025, value: 10804.3 },
            ],
          },
          {
            name:   'Cybersécurité & Digital',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value:  613.3 },
              { year: 2022, value:  632.2 },
              { year: 2023, value:  658.6 },
              { year: 2024, value:  375.4 },
              { year: 2025, value:  835.3 },
            ],
          },
        ],
      },

      // ── Prises de commandes par segment (M€) ──────────────────────────────
      // Source : onglet "Résultat par secteur" — prises de commandes hors Groupe
      // Lecture : Défense en hausse régulière (+35 % sur 5 ans),
      // Aérospatial en légère baisse 2025 (retour à la normale après 2024 élevé),
      // Cyber structurellement court-cycle, fluctuations normales
      {
        label: 'Prises_Commandes',
        name:  'Prises de commandes — Défense',
        unit:  'M€',
        yMin:  0,
        data: [
          { year: 2021, value: 11185.0 },
          { year: 2022, value: 13959.2 },
          { year: 2023, value: 14139.2 },
          { year: 2024, value: 14723.3 },
          { year: 2025, value: 15127.7 },
        ],
        competitors: [
          {
            name:  'Aérospatial',
            color: '#52B788',
            data: [
              { year: 2021, value: 6530.8 },
              { year: 2022, value: 5892.2 },
              { year: 2023, value: 5591.7 },
              { year: 2024, value: 6434.2 },
              { year: 2025, value: 6121.6 },
            ],
          },
          {
            name:   'Cybersécurité & Digital',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2994.5 },
              { year: 2022, value: 3615.5 },
              { year: 2023, value: 3342.4 },
              { year: 2024, value: 4031.6 },
              { year: 2025, value: 3872.4 },
            ],
          },
        ],
      },

    ],
  },
}