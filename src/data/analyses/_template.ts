// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE v3 — Valeur suivie
// Copier ce fichier, renommer en [ticker].ts, compléter les champs.
// NE PAS importer dans index.ts tant que la fiche n'est pas prête.
// ─────────────────────────────────────────────────────────────────────────────
//
// SOURCES PAR INDICATEUR
//   per, evEbitda, fcfYield, margeEbit, margeBrute → Yahoo Finance / Finviz
//   roic          → Calcul manuel : NOPAT / (CP + max(dette nette, 0) + goodwill)
//                   IC = Capitaux propres + max(dette nette, 0) — goodwill inclus
//   wacc          → CAPM : Rf + β × ERP + coût de la dette × (1-T) × pondération
//                   Rf  = taux sans risque : OAT 10 ans (€) ou UST 10 ans ($)
//                         plancher à 2 % pour les années à taux négatifs/zéro
//                   ERP = Damodaran (Implied ERP, janvier de l'année suivante)
//                   β   = GuruFocus ou calcul régression 5 ans mensuelle vs indice
//   roce          → NOPAT / (CP + dette totale − trésorerie) — actifs opérationnels
//   roiic_yoy     → ΔNOPAT / ΔIC — ratio 1 an glissant (pas d'annualisation multi-ans)
//   detteEbitda   → Yahoo Finance Statistics — négatif = trésorerie nette
//   croissanceCA3ans / croissanceBPA3ans → calcul manuel TCAC sur 3 ans
//   margeBrute    → (CA − Coût des ventes) / CA selon définition publiée
//   margeEbit     → EBIT publié / CA — préférer résultat opérationnel courant si disponible
//   currentRatio  → Bilan : actif courant / passif courant
//   dso           → (Créances clients / CA) × 365
//   dio           → (Stocks / Achats) × 365
//   dpo           → (Dettes fournisseurs / Achats) × 365
//   ccc           → DSO + DIO - DPO (négatif = fournisseurs financent le BFR)
//   payoutRatio   → Dividendes versés / Résultat net
//   assetTurnover → CA / Total actifs
//
// GRAPHIQUES DISPONIBLES DANS LE MDX
//   <RevenueGraph />                  → chartData.revenue
//   <MargesGraph />                   → chartData.marges       (gross, operating, net)
//   <RoicGraph />                     → chartData.roic
//   <RoicWacc />                      → chartData.roicVsWacc
//   <FcfGraph />                      → chartData.fcf
//   <GeoMap />                        → chartData.geoRevenue
//   <SegmentGraph unit="..." />       → chartData.segmentRevenue   (décommenter si pertinent)
//   <ValuationChart_{id} />           → chartData.valuationCharts[].id
//   <MetricGraph_LABEL />             → chartData.metricHistory — LABEL = label sans tirets ni /
//
// LABELS METRICHISTORY STANDARDS (à utiliser pour cohérence inter-fiches)
//   EV_EBITDA       → EV/EBITDA vs moyenne historique
//   FCF_OCF_Capex   → OCF / FCF / Capex sur 5 ans
//   EPS             → BPA dilué ou ajusté
//   Dividendes      → Dividende par action
//   ROCE            → ROCE vs WACC et ROIC
//   ROIIC_YoY       → ROIIC annuel (1 an glissant)
//   ROIIC           → ROIIC glissant multi-périodes (1→4 ans)
//   PER             → PER vs historique et PER ajusté taux
//   FCFy            → FCF Yield vs historique et taux sans risque
//   CCC_resume      → DSO / DIO / DPO / CCC sur 5 ans
//   CR              → Current Ratio vs historique
//   DETTE_EBITDA    → Dette nette / EBITDA vs historique
//   AT              → Asset Turnover vs historique
//   Dilution        → Variation YoY du nombre d'actions (%)
//   Payout          → Payout Ratio vs historique
//   Capex_Action    → Retour aux actionnaires / Rachats / Capex
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const NOUVEAU_TICKER: AnalyseCard = {
  slug:           '',                  // URL : /analyses/[slug]
  type:           'valeur',
  title:          '',
  ticker:         '',
  secteur:        'Technologie',       // Technologie | Industrie | Santé | Finance | Énergie
                                       // Consommation | Immobilier | Matériaux | Défense | Autre
  geo:            'États-Unis',        // États-Unis | France | Europe | Asie | Reste du monde
  conviction:     'moyenne',           // exceptionnelle | forte | moyenne | spéculative
  positionnement: 'surveillance',      // achat fort | accumulation | surveillance | maintien | allégement
  lastUpdated:    '2026-01-01',
  statut:         'en-construction',   // en-construction | actif | archivé
  portefeuille:   'CTO',              // PEA | CTO | PEA + CTO | Aucun
  horizon:        '5 ans',
  excerpt:        '',
  glossaire:      ['per', 'free-cash-flow', 'moat', 'roic', 'wacc', 'ev-ebitda'],
  logo:           '/analyse/[ticker].png',
  prixCible:      { bas: 0, haut: 0, devise: 'USD' },
  marginOfSafety: 'indéterminée',     // forte | correcte | faible | négative | indéterminée
  readingTime:    0,
  onePager: {
    thesis:    "Short thesis",
    cours:     0,
    coursDate: '2026-05-15',
    devise:    'EUR',
    range52w:  { low: 0, high: 0 },   // À vérifier / mettre à jour
  },

  // ── Métriques snapshot (TTM ou dernier exercice) ───────────────────────────
  // Toutes les valeurs issues de calculs manuels sur données primaires.
  // Annoter les exceptions méthodologiques en commentaire inline.
  metrics: {
    per:               0,    // Cours clôture fin d'exercice / BPA dilué (ou ajusté si publié)
    evEbitda:          0,    // EV / EBITDA — EV = Capi + Dette nette + Minoritaires − Tréso
    fcfYield:          0,    // FCF / Capitalisation boursière (en %) — dénominateur = EV si pertinent
    roic:              0,    // NOPAT / IC — IC = CP + max(dette nette, 0) + goodwill
    wacc:              0,    // CAPM — voir sources en en-tête
    detteEbitda:       0,    // Négatif = trésorerie nette. Hors IFRS 16 sauf mention contraire
    croissanceCA3ans:  0,    // TCAC CA sur 3 ans (N-3 → N)
    croissanceBPA3ans: 0,    // TCAC BPA dilué (ou ajusté) sur 3 ans
    margeEbit:         0,    // EBIT (ou ROP courant) / CA (%)
    margeBrute:        0,    // (CA − Coût des ventes) / CA — préciser définition si non standard
    payoutRatio:       0,    // Dividendes versés / Résultat net (%)
    currentRatio:      0,    // Actif courant / Passif courant
    dso:               0,    // (Créances clients / CA) × 365
  },

  // ── Tendances visuelles (badge flèche sur la fiche index) ─────────────────
  tendances: {
    per:       'stable',  // hausse | stable | baisse
    fcfYield:  'stable',
    roic:      'stable',
    margeEbit: 'stable',
  },

  // ── Historique des mises à jour ────────────────────────────────────────────
  updates: [
    {
      date: '2026-01-01',
      note: 'Création de la fiche.',
    },
  ],

  chartData: {

    // ── [OPTIONNEL] Ruptures de série dans les segments ───────────────────────
    // À utiliser si la nomenclature des segments a changé au cours de la période.
    // Affiche une annotation sur le graphique <SegmentGraph />.
    // segmentBreaks: [
    //   { year: 2025, label: 'Fusion des segments X et Y en Z' },
    // ],

    // ── CA sur 5 ans ──────────────────────────────────────────────────────────
    // Unité : M€ ou M$ selon l'entreprise — préciser dans les commentaires MDX
    // Annoter les ruptures de série (acquisitions, cessions, retraitements).
    revenue: [
      { year: 2021, value: 0 },
      { year: 2022, value: 0 },
      { year: 2023, value: 0 },
      { year: 2024, value: 0 },
      { year: 2025, value: 0 },
    ],

    // ── Répartition géographique du CA ────────────────────────────────────────
    // Régions disponibles : voir REGION_TO_CODES dans GeoRevenueMap.tsx
    // Utiliser les libellés exacts : 'États-Unis' | 'Europe' | 'Asie' |
    //   'Asie et Pacifique' | 'Amériques' | 'EMEA' | 'Reste du monde' | 'Chine' | 'Japon'
    // La somme des pct doit faire 100.
    geoRevenue: [
      { region: 'États-Unis',     pct: 0 },
      { region: 'Europe',         pct: 0 },
      { region: 'Asie',           pct: 0 },
      { region: 'Reste du monde', pct: 0 },
    ],

    // ── Marges sur 5 ans (%) ──────────────────────────────────────────────────
    // gross     = Marge brute : (CA − Coût des ventes) / CA
    // operating = Marge EBIT (ou ROP courant / CA)
    // net       = Résultat net / CA
    // Les trois champs sont requis — mettre null si non disponible/non pertinent.
    marges: [
      { year: 2021, gross: 0, operating: 0, net: 0 },
      { year: 2022, gross: 0, operating: 0, net: 0 },
      { year: 2023, gross: 0, operating: 0, net: 0 },
      { year: 2024, gross: 0, operating: 0, net: 0 },
      { year: 2025, gross: 0, operating: 0, net: 0 },
    ],

    // ── ROIC simple sur 5 ans (%) ──────────────────────────────────────────────
    roic: [
      { year: 2021, value: 0 },
      { year: 2022, value: 0 },
      { year: 2023, value: 0 },
      { year: 2024, value: 0 },
      { year: 2025, value: 0 },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // Annoter les années où le Rf est non représentatif (taux zéro ou négatif).
    roicVsWacc: [
      { year: 2021, value: 0, wacc: 0 },
      { year: 2022, value: 0, wacc: 0 },
      { year: 2023, value: 0, wacc: 0 },
      { year: 2024, value: 0, wacc: 0 },
      { year: 2025, value: 0, wacc: 0 },
    ],

    // ── Free Cash Flow sur 5 ans ──────────────────────────────────────────────
    // FCF = OCF − Capex industriel (hors acquisitions financières)
    fcf: [
      { year: 2021, value: 0 },
      { year: 2022, value: 0 },
      { year: 2023, value: 0 },
      { year: 2024, value: 0 },
      { year: 2025, value: 0 },
    ],

    // ── CA par segment (optionnel) ────────────────────────────────────────────
    // Décommenter si l'entreprise publie une ventilation par division.
    // total.show : false par défaut (les fiches existantes n'affichent pas la ligne de total ;
    // les segments se lisent seuls). Passer à true seulement pour afficher explicitement le CA total.
    // segmentRevenue: {
    //   unit: 'Md$',
    //   total: { show: false, label: 'CA total' },
    //   data: [
    //     { year: 2021, segments: [
    //       { name: 'Segment A', value: 0 },
    //       { name: 'Segment B', value: 0 },
    //     ]},
    //     { year: 2022, segments: [
    //       { name: 'Segment A', value: 0 },
    //       { name: 'Segment B', value: 0 },
    //     ]},
    //     { year: 2023, segments: [
    //       { name: 'Segment A', value: 0 },
    //       { name: 'Segment B', value: 0 },
    //     ]},
    //     { year: 2024, segments: [
    //       { name: 'Segment A', value: 0 },
    //       { name: 'Segment B', value: 0 },
    //     ]},
    //     { year: 2025, segments: [
    //       { name: 'Segment A', value: 0 },
    //       { name: 'Segment B', value: 0 },
    //     ]},
    //   ],
    // },

    // ── Graphiques de valorisation comparée ───────────────────────────────────
    // Autant d'entrées que nécessaire : vs_secteur, vs_pair1, vs_pair2, etc.
    // type : 'radar' pour comparaison multidimensionnelle | 'bar' pour métrique unique
    // concurrent1/2/3 : libellé affiché dans la légende du graphique.
    // Labels radar standards : 'PER' | 'EV/EBITDA' | 'P/FCF' | 'Marge EBIT %' |
    //   'ROIC %' | 'FCF Yield %' | 'Dette/EBITDA' | 'TCAC CA 3 ans %'
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée — [Entreprise] vs secteur',
        data: [
          { label: 'PER',             valeur: 0, secteur: 0 },
          { label: 'EV/EBITDA',       valeur: 0, secteur: 0 },
          { label: 'P/FCF',           valeur: 0, secteur: 0 },
          { label: 'Marge EBIT %',    valeur: 0, secteur: 0 },
          { label: 'ROIC %',          valeur: 0, secteur: 0 },
          { label: 'FCF Yield %',     valeur: 0, secteur: 0 },
          { label: 'Dette/EBITDA',    valeur: 0, secteur: 0 },
          { label: 'TCAC CA 3 ans %', valeur: 0, secteur: 0 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'Valorisation comparée — [Entreprise] vs [Pair 1]',
        concurrent1: '[Pair 1]',
        data: [
          { label: 'PER',             valeur: 0, concurrent1: 0 },
          { label: 'EV/EBITDA',       valeur: 0, concurrent1: 0 },
          { label: 'P/FCF',           valeur: 0, concurrent1: 0 },
          { label: 'Marge EBIT %',    valeur: 0, concurrent1: 0 },
          { label: 'ROIC %',          valeur: 0, concurrent1: 0 },
          { label: 'FCF Yield %',     valeur: 0, concurrent1: 0 },
          { label: 'Dette/EBITDA',    valeur: 0, concurrent1: 0 },
          { label: 'TCAC CA 3 ans %', valeur: 0, concurrent1: 0 },
        ],
      },
      // Ajouter autant de blocs vs_pair2, vs_pair3 que nécessaire.
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────────
    // Composant MDX : <MetricGraph_LABEL /> — LABEL = champ label ci-dessous.
    // Règles de nommage des labels : majuscules, underscores, pas de tirets ni de /.
    // heightMultiplier : 1.5 si le graphique contient beaucoup de séries (CCC, etc.)
    metricHistory: [

      // ── EV/EBITDA historique ──────────────────────────────────────────────
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex ─────────────────────────────────────────────────
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'M$',    // adapter : M€ | Md$ | Md€
        yMin:  0,
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
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
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
        ],
      },

      // ── BPA dilué ou ajusté ───────────────────────────────────────────────
      // Préciser dans `name` si ajusté ou non-GAAP.
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '$',    // adapter : € | £
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
      },

      // ── Dividende par action ──────────────────────────────────────────────
      // Dividende ordinaire uniquement (hors dividendes exceptionnels).
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '$',
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
      },

      // ── ROCE vs WACC vs ROIC ─────────────────────────────────────────────
      // ROCE = NOPAT / (CP + dette totale − trésorerie)
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (1 an glissant) ──────────────────────────────────────
      // ROIIC = ΔNOPAT / ΔIC — ratio 1 an (pas d'annualisation multi-ans).
      // Commencer à N-4 car nécessite N-5 comme base de comparaison.
      // Valeurs volatiles normales — annoter les valeurs aberrantes dans le MDX.
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC',
        unit:  '%',
        data: [
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
      },

      // ── ROIIC glissant multi-périodes ─────────────────────────────────────
      // Axe X = nombre d'années de recul (1 = N−1/N, 4 = N−4/N).
      // Permet de lisser la volatilité du ROIIC annuel.
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 0 },
          { year: 2, value: 0 },
          { year: 3, value: 0 },
          { year: 4, value: 0 },
        ],
      },

      // ── PER historique ────────────────────────────────────────────────────
      // PER ajusté taux : PER × (taux_période / taux_ref) — normalise le multiple
      // selon l'environnement de taux (plancher 2 % pour les années zéro).
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
        ],
      },

      // ── FCF Yield historique ──────────────────────────────────────────────
      // Dénominateur = capitalisation boursière (cohérence inter-fiches).
      // Taux sans risque : OAT 10 ans (€) ou UST 10 ans ($) selon la devise de cotation.
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
          {
            name:  'Taux sans risque',   // OAT 10 ans (€) ou UST 10 ans ($) — préciser dans le MDX
            color: '#52B788',
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
        ],
      },

      // ── CCC — DSO / DIO / DPO / Cash Conversion Cycle ────────────────────
      // DSO = (Créances / CA) × 365
      // DIO = (Stocks / Achats) × 365
      // DPO = (Fournisseurs / Achats) × 365
      // CCC = DSO + DIO − DPO (négatif = fournisseurs financent le BFR)
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,  // graphique plus haut car 4 séries
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
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
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
        ],
      },

      // ── Current Ratio ─────────────────────────────────────────────────────
      // Actif courant / Passif courant.
      // Annoter tout saut ponctuel (financement obligataire, acquisition, etc.)
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA ─────────────────────────────────────────────
      // Hors IFRS 16 sauf mention contraire — préciser la définition de dette nette.
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      // CA / Total actifs. Baisse = actifs croissent plus vite que le CA.
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration des actions ──────────────────────────────
      // Variation YoY du nombre d'actions dilué (%).
      // Positif = dilution, négatif = concentration (rachats nets).
      // Annoter les événements non-récurrents (splits, attributions gratuites, augmentations).
      // Commencer à N-4 (la variation N-5/N-4 est la première calculable).
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
      },

      // ── Payout Ratio ──────────────────────────────────────────────────────
      // Dividendes versés / Résultat net (%).
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
        ],
      },

      // ── Allocation du capital — retour actionnaires vs Capex ──────────────
      // data = Retour total (dividendes + rachats nets)
      // concurrent1 = Rachats d'actions bruts
      // concurrent2 (dashed) = Capex industriel (hors acquisitions financières)
      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
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
              { year: 2021, value: 0 },
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
        ],
      },

    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE — Analyse ponctuelle (rappel)
// Type allégé, sans chartData complet ni méthodologie ROIC/WACC.
// ─────────────────────────────────────────────────────────────────────────────

// export const SLUG_PONCTUELLE: AnalyseCard = {
//   slug:    '',
//   type:    'ponctuelle',
//   title:   '',
//   date:    '2026-01-01',
//   ticker:  '',
//   secteur: 'Technologie',
//   geo:     'États-Unis',
//   statut:  'en-construction',
//   origine: 'sondage',   // sondage | actualité | suivi | autre
//   excerpt: '',
// }