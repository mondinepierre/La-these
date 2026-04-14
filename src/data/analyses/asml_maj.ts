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

export const asml_maj: AnalyseCard = {
  slug:           'asml_maj',                  // URL : /analyses/[slug]
  type:           'valeur',
  title:          'ASML',
  ticker:         'ASML',
  secteur:        'Technologie',       // voir union Secteur dans types/analyses.ts
  geo:            'Pays-Bas',        // voir union ZoneGeo
  conviction:     'exceptionnelle',           // exceptionnelle | forte | moyenne | spéculative
  positionnement: 'surveillance',      // achat fort | accumulation | surveillance | maintien | allégement
  lastUpdated:    '2026-04-15',
  statut:         'en-construction',   // en-construction | actif | archivé
  portefeuille:   'PEA',              // PEA | CTO | PEA + CTO | Aucun
  horizon:        '5 ans',
  excerpt:        '',
  glossaire:      ['per', 'free-cash-flow', 'moat', 'roic'],
  logo:           '/analyse/asml.png',
  prixCible:      { bas: 0, haut: 0, devise: 'USD' },
  marginOfSafety: 'négative',     // forte | correcte | faible | négative | indéterminée
  readingTime:    0,

  metrics: {
    per:               37.3,
    evEbitda:          29.1,
    fcfYield:          3.09,
    roic:              47.5,
    wacc:              8,
    detteEbitda:       -0.69,  // négatif = trésorerie nette
    croissanceCA3ans:  15.6,
    croissanceBPA3ans: 20.5,
    margeEbit:         34.6,
    margeBrute:        52.8,
    payoutRatio:       26.5,
    currentRatio:      1.26,
    dso:               34,
  },

  tendances: {
    per:       'hausse',  // hausse | stable | baisse
    fcfYield:  'baisse',
    roic:      'hausse',
    margeEbit: 'hausse',
  },

  updates: [
    {
      date: '2026-04-15',
      note: 'mise à jour de la fiche.',
    },
  ],

  chartData: {
    // ── CA sur 5 ans ──────────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 18.611 },
      { year: 2022, value: 21.173 },
      { year: 2023, value: 27.558 },
      { year: 2024, value: 28.262 },
      { year: 2025, value: 32.667 },
    ],

    // ── Répartition géographique du CA ────────────────────────────────────
    // Régions disponibles : voir REGION_TO_CODES dans GeoRevenueMap.tsx
    geoRevenue: [
      { region: 'Japon',            pct: 4.35 },
      { region: 'Corée du Sud',     pct: 24.98 },
      { region: 'Singapour',        pct: 1.86 },
      { region: 'Taïwan',           pct: 25.52 },
      { region: 'Chine',            pct: 29.14 },
      { region: "Reste de l'Asie",  pct: 0.01 },
      { region: 'Pays-Bas',         pct: 0.01 },
      { region: 'EMEA',             pct: 1.60 },
      { region: 'États-Unis',       pct: 12.52 },
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
    segmentRevenue: {
      unit: 'Md$',
      total: { show: false, label: 'CA' },
      data: [
        { year: 2021, segments: [
          { name: 'EUV',                              value: 6.284 },
          { name: 'DUV',                              value: 6.855 },
          { name: 'Metrology & Inspection',           value: 0.513 },
          { name: 'Service and field option sales',   value: 4.958 },
        ]},
        { year: 2022, segments: [
          { name: 'EUV',                              value: 7.045 },
          { name: 'DUV',                              value: 7.724 },
          { name: 'Metrology & Inspection',           value: 0.659 },
          { name: 'Service and field option sales',   value: 5.743 },
        ]},
        { year: 2023, segments: [
          { name: 'EUV',                              value: 9.124 },
          { name: 'DUV',                              value: 12.278 },
          { name: 'Metrology & Inspection',           value: 0.536 },
          { name: 'Service and field option sales',   value: 5.619 },
        ]},
        { year: 2024, segments: [
          { name: 'EUV',                              value: 8.321 },
          { name: 'DUV',                              value: 12.801 },
          { name: 'Metrology & Inspection',           value: 0.645 },
          { name: 'Service and field option sales',   value: 6.494 },
        ]},
        { year: 2025, segments: [
          { name: 'EUV',                              value: 11.602 },
          { name: 'DUV',                              value: 12.047 },
          { name: 'Metrology & Inspection',           value: 0.824 },
          { name: 'Service and field option sales',   value: 8.193 },
        ]},
      ],
    },

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