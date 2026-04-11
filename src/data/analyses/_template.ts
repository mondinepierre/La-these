// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE v2 — Valeur suivie
// Copier ce fichier, renommer en [ticker].ts, compléter les champs.
// NE PAS importer dans index.ts tant que la fiche n'est pas prête.
// ─────────────────────────────────────────────────────────────────────────────
//
// SOURCES PAR INDICATEUR
//   per, evEbitda, fcfYield, margeEbit, margeBrute → Yahoo Finance / Finviz
//   roic          → Calcul manuel : NOPAT / (CP + max(dette nette, 0) + goodwill)
//   wacc          → GuruFocus
//   detteEbitda   → Yahoo Finance Statistics — négatif = trésorerie nette
//   croissanceCA3ans / croissanceBPA3ans → calcul manuel TCAC sur 3 ans
//   currentRatio  → Bilan : actif courant / passif courant
//   dso           → (Créances clients / CA) × 365
//   payoutRatio   → Dividende total / Résultat net
//
// GRAPHIQUES DISPONIBLES DANS LE MDX
//   <RevenueGraph />             → chartData.revenue
//   <MargesGraph />              → chartData.marges
//   <RoicGraph />                → chartData.roic
//   <RoicWacc />                 → chartData.roicVsWacc
//   <FcfGraph />                 → chartData.fcf
//   <GeoMap />                   → chartData.geoRevenue
//   <SegmentGraph unit="..." />  → chartData.segmentRevenue   (décommenter si pertinent)
//   <ValuationBar name="..." />  → chartData.valuationCompare  (pairs directs)
//   <ValuationBar2 name="..." /> → chartData.valuationCompare2 (vs moyenne secteur)
//   <MetricGraph_LABEL />        → chartData.metricHistory — LABEL = label sans tirets ni /
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const NOUVEAU_TICKER: AnalyseCard = {
  slug:           '',                  // URL : /analyses/[slug]
  type:           'valeur',
  title:          '',
  ticker:         '',
  secteur:        'Technologie',       // voir union Secteur dans types/analyses.ts
  geo:            'États-Unis',        // voir union ZoneGeo
  conviction:     'moyenne',           // exceptionnelle | forte | moyenne | spéculative
  positionnement: 'surveillance',      // achat fort | accumulation | surveillance | maintien | allégement
  lastUpdated:    '2026-01-01',
  statut:         'en-construction',   // en-construction | actif | archivé
  portefeuille:   'CTO',              // PEA | CTO | PEA + CTO | Aucun
  horizon:        '5 ans',
  excerpt:        '',
  glossaire:      ['per', 'free-cash-flow', 'moat', 'roic'],
  logo:           '/analyse/[ticker].png',
  prixCible:      { bas: 0, haut: 0, devise: 'USD' },
  marginOfSafety: 'indéterminée',     // forte | correcte | faible | négative | indéterminée
  readingTime:    0,

  metrics: {
    per:               0,
    evEbitda:          0,
    fcfYield:          0,
    roic:              0,
    wacc:              0,
    detteEbitda:       0,  // négatif = trésorerie nette
    croissanceCA3ans:  0,
    croissanceBPA3ans: 0,
    margeEbit:         0,
    margeBrute:        0,
    payoutRatio:       0,
    currentRatio:      0,
    dso:               0,
  },

  tendances: {
    per:       'stable',  // hausse | stable | baisse
    fcfYield:  'stable',
    roic:      'stable',
    margeEbit: 'stable',
  },

  updates: [
    {
      date: '2026-01-01',
      note: 'Création de la fiche.',
    },
  ],

  chartData: {
    // ── CA sur 5 ans ──────────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 0 },
      { year: 2022, value: 0 },
      { year: 2023, value: 0 },
      { year: 2024, value: 0 },
      { year: 2025, value: 0 },
    ],

    // ── Répartition géographique du CA ────────────────────────────────────
    // Régions disponibles : voir REGION_TO_CODES dans GeoRevenueMap.tsx
    geoRevenue: [
      { region: 'États-Unis',     pct: 0 },
      { region: 'Europe',         pct: 0 },
      { region: 'Asie',           pct: 0 },
      { region: 'Reste du monde', pct: 0 },
    ],

    // ── Marges sur 5 ans ──────────────────────────────────────────────────
    marges: [
      { year: 2021, net: 0, operating: 0 },
      { year: 2022, net: 0, operating: 0 },
      { year: 2023, net: 0, operating: 0 },
      { year: 2024, net: 0, operating: 0 },
      { year: 2025, net: 0, operating: 0 },
    ],

    // ── ROIC simple sur 5 ans ─────────────────────────────────────────────
    roic: [
      { year: 2021, value: 0 },
      { year: 2022, value: 0 },
      { year: 2023, value: 0 },
      { year: 2024, value: 0 },
      { year: 2025, value: 0 },
    ],

    // ── ROIC vs WACC ──────────────────────────────────────────────────────
    roicVsWacc: [
      { year: 2021, value: 0, wacc: 0 },
      { year: 2022, value: 0, wacc: 0 },
      { year: 2023, value: 0, wacc: 0 },
      { year: 2024, value: 0, wacc: 0 },
      { year: 2025, value: 0, wacc: 0 },
    ],

    // ── Free Cash Flow sur 5 ans ──────────────────────────────────────────
    fcf: [
      { year: 2021, value: 0 },
      { year: 2022, value: 0 },
      { year: 2023, value: 0 },
      { year: 2024, value: 0 },
      { year: 2025, value: 0 },
    ],

    // ── CA par segment (optionnel) ────────────────────────────────────────
    // Décommenter si l'entreprise publie une ventilation par division
    // segmentRevenue: {
    //   unit: 'Md$',
    //   total: { show: true, label: 'CA' },
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

    // ── Comparaison pairs directs ─────────────────────────────────────────
    // Composant : <ValuationBar name="Entreprise" concurrent1="X" concurrent2="Y" />
    valuationCompare: [
      { label: 'PER',                  valeur: 0, concurrent1: 0, concurrent2: 0 },
      { label: 'P/FCF',                valeur: 0, concurrent1: 0, concurrent2: 0 },
      { label: 'EV/EBITDA',            valeur: 0, concurrent1: 0, concurrent2: 0 },
      { label: 'Marge opérationnelle', valeur: 0, concurrent1: 0, concurrent2: 0 },
      { label: 'ROIC',                 valeur: 0, concurrent1: 0, concurrent2: 0 },
    ],

    // ── Comparaison moyenne secteur ───────────────────────────────────────
    // Composant : <ValuationBar2 name="Entreprise" />
    valuationCompare2: [
      { label: 'PER',                  valeur: 0, secteur: 0 },
      { label: 'P/FCF',                valeur: 0, secteur: 0 },
      { label: 'EV/EBITDA',            valeur: 0, secteur: 0 },
      { label: 'Marge opérationnelle', valeur: 0, secteur: 0 },
      { label: 'ROIC',                 valeur: 0, secteur: 0 },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────
    // Composant : <MetricGraph_LABEL /> — LABEL = champ label ci-dessous
    metricHistory: [
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
      {
        label: 'FCF_OCF_Capex',
        name:  'Operating Cash Flow',
        unit:  'Md$',
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
      {
        label: 'EPS',
        name:  'BPA ajusté',
        unit:  '$',
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
      },
      {
        label: 'Dividendes',
        name:  'Dividende annuel',
        unit:  '$',
        data: [
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 0 },
          { year: 2024, value: 0 },
          { year: 2025, value: 0 },
        ],
      },
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
            name:   'PER historique (5 ans)',
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
      {
        label: 'FCFy',
        name:  'Free-Cash-Flow Yield',
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
            name:  'Taux sans risque',  // OAT 10 ans (€) ou US 10 ans ($) selon l'entreprise
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
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE — Analyse ponctuelle (rappel)
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
//   excerpt: '',
// }