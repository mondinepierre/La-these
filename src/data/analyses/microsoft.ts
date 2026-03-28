// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE — Valeur suivie
// Copier ce fichier, renommer en [ticker].ts, compléter les champs.
// NE PAS importer dans index.ts tant que la fiche n'est pas prête.
// ─────────────────────────────────────────────────────────────────────────────
//
// SOURCES PAR INDICATEUR
//   per, evEbitda, fcfYield, margeEbit, margeBrute → Yahoo Finance / Finviz
//   roic          → Calcul manuel : NOPAT / (equity + dette nette) — ou GuruFocus
//   wacc          → GuruFocus (ou formule : voir commentaire dans totalenergies.ts)
//   detteEbitda   → Yahoo Finance Statistics — négatif = trésorerie nette
//   croissanceCA3ans / croissanceBPA3ans → Macrotrends ou calcul manuel 3 ans
//   currentRatio  → Bilan : actif courant / passif courant
//   dso           → (Créances clients / CA) × 365
//   payoutRatio   → Dividende total / Résultat net
//
// RÈGLE LABELS metricHistory
//   Utiliser uniquement lettres, chiffres et _ (pas de tirets ni /
//   Exemple : 'EV_EBITDA' → composant MDX <MetricGraph_EV_EBITDA />
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const microsoft: AnalyseCard = {
  slug:           'microsoft',           // URL : /analyses/[slug]
  type:           'valeur',
  title:          'Microsoft',
  ticker:         'MSFT',
  secteur:        'Technologie',  // voir union Secteur dans types/analyses.ts
  geo:            'États-Unis',   // voir union ZoneGeo
  conviction:     'moyenne',      // exceptionnelle | forte | moyenne | spéculative
  positionnement: 'surveillance', // achat fort | accumulation | surveillance | maintien | allégement
  lastUpdated:    '2026-03-28',
  statut:         'en-construction', // en-construction | actif | archivé
  portefeuille:   'CTO',          // PEA | CTO | PEA + CTO | Aucun
  horizon:        '',
  excerpt:        '',
  glossaire:      ['per', 'free-cash-flow', 'moat', 'roic'], // slugs glossaire liés
  logo:          '/analyse/MSFT.png',
  prixCible:      { bas: 0, haut: 0, devise: 'USD' },
  marginOfSafety: 'indéterminée', // forte | correcte | faible | négative | indéterminée

  metrics: {
    per:               30.25,  // Price / Earnings
    evEbitda:          19.27,  // EV / EBITDA
    fcfYield:          2.17,  // FCF Yield en %
    roic:              17.44,  // Return on Invested Capital en %
    wacc:              9.2,  // Weighted Average Cost of Capital en %
    detteEbitda:       -0.27,  // Dette nette / EBITDA — négatif = trésorerie nette
    croissanceCA3ans:  14.39,  // TCAC CA sur 3 ans en %
    croissanceBPA3ans: 21.12,  // TCAC BPA sur 3 ans en %
    margeEbit:         57.85,  // Marge opérationnelle en %
    margeBrute:        68.59,  // Marge brute en %
    payoutRatio:       21.19,  // Dividendes / Résultat net en %
    currentRatio:      1.52,  // Actif courant / Passif courant
    dso:               107,  // Days Sales Outstanding en jours
  },

  tendances: {
    per:       'stable', // hausse | stable | baisse
    fcfYield:  'baisse',
    roic:      'baisse',
    margeEbit: 'hausse',
  },

  updates: [
    {
      date: '2026-03-28',
      note: 'Création de la fiche.',
    },
  ],

  chartData: {
    // ── CA sur 5 ans ──────────────────────────────────────────
    revenue: [
      { year: 2021, value: 0 },
      { year: 2022, value: 0 },
      { year: 2023, value: 0 },
      { year: 2024, value: 0 },
      { year: 2025, value: 0 },
    ],

    // ── Répartition géographique du CA ────────────────────────
    // Régions disponibles : voir REGION_TO_CODES dans GeoRevenueMap.tsx
    geoRevenue: [
      { region: 'États-Unis', pct: 51.4 },
      { region: 'Reste du monde',     pct: 48.6 },
    ],

    // ── Marges sur 5 ans ──────────────────────────────────────
    marges: [
      { year: 2021, gross: 68.83, operating: 48.84, net: 38.5 },
      { year: 2022, gross: 68.16, operating: 47.66, net: 33.05 },
      { year: 2023, gross: 69.75, operating: 50.26, net: 36.27 },
      { year: 2024, gross: 69.41, operating: 53.47, net: 35.43 },
      { year: 2025, gross: 68.59, operating: 57.85, net: 39.04 },
    ],

    // ── ROIC simple sur 5 ans ─────────────────────────────────
    roic: [
      { year: 2021, value: 0 },
      { year: 2022, value: 0 },
      { year: 2023, value: 0 },
      { year: 2024, value: 0 },
      { year: 2025, value: 0 },
    ],

    // ── ROIC vs WACC ──────────────────────────────────────────
    // Composant MDX : <RoicWacc />
    roicVsWacc: [
      { year: 2021, value: 0, wacc: 0 },
      { year: 2022, value: 0, wacc: 0 },
      { year: 2023, value: 0, wacc: 0 },
      { year: 2024, value: 0, wacc: 0 },
      { year: 2025, value: 0, wacc: 0 },
    ],

    // ── Free Cash Flow sur 5 ans ──────────────────────────────
    fcf: [
      { year: 2021, value: 0 },
      { year: 2022, value: 0 },
      { year: 2023, value: 0 },
      { year: 2024, value: 0 },
      { year: 2025, value: 0 },
    ],

    // ── CA par segment (optionnel) ────────────────────────────
    // Composant MDX : <SegmentGraph unit="Md$" />
    segmentRevenue: [
      { year: 2021, segments: [
        { name: 'Productivity and Business Processes',  value: 59.2 },
        { name: 'Intelligent Cloud',                    value: 67.6 },
        { name: 'More Personal Computing',              value: 58 },
      ]
    },
    { year: 2022, segments: [
        { name: 'Productivity and Business Processes',  value: 77 },
        { name: 'Intelligent Cloud',                    value: 74.6 },
        { name: 'More Personal Computing',              value: 52.4 },
      ]
    },
    { year: 2023, segments: [
        { name: 'Productivity and Business Processes',  value: 100.5 },
        { name: 'Intelligent Cloud',                    value: 79.6 },
        { name: 'More Personal Computing',              value: 47.3 },
      ]
    },
    { year: 2024, segments: [
        { name: 'Productivity and Business Processes',  value: 113.4 },
        { name: 'Intelligent Cloud',                    value: 72.5 },
        { name: 'More Personal Computing',              value: 52.7 },
      ]
    },
    { year: 2025, segments: [
        { name: 'Productivity and Business Processes',  value: 130.1 },
        { name: 'Intelligent Cloud',                    value: 120.4 },
        { name: 'More Personal Computing',              value: 54.8 },
      ]
    },
    ],
      metricHistory: [
        {
          label: 'CA_MIX',
          name:  'Productivity and Business Processes',
          unit:  '%',
          data: [
            { year: 2021, value: 32.03 },
            { year: 2022, value: 35.02 },
            { year: 2023, value: 32.36 },
            { year: 2024, value: 40.89 },
            { year: 2025, value: 42.62 },
          ],
          competitors: [
            {
              name:  'Intelligent Cloud',
              color: '#C9A84C',
              data: [
                { year: 2021, value: 36.60 },
                { year: 2022, value: 38.31 },
                { year: 2023, value: 42.28 },
                { year: 2024, value: 34.28 },
                { year: 2025, value: 39.43 },
              ],
            },
            {
              name:  'More Personal Computing',
              color: '#2D6A4F',
              data: [
                { year: 2021, value: 31.38 },
                { year: 2022, value: 26.68 },
                { year: 2023, value: 25.36 },
                { year: 2024, value: 24.83 },
                { year: 2025, value: 17.95 },
              ],
            },
          ],
        },
        {
          label: 'CA_MI',
          name:  'États-Unis',
          unit:  '%',
          data: [
            { year: 2021, value: 32.03 },
            { year: 2022, value: 35.02 },
            { year: 2023, value: 32.36 },
            { year: 2024, value: 40.89 },
            { year: 2025, value: 42.62 },
          ],
          competitors: [
            {
              name:  'Intelligent Cloud',
              color: '#C9A84C',
              data: [
                { year: 2021, value: 36.60 },
                { year: 2022, value: 38.31 },
                { year: 2023, value: 42.28 },
                { year: 2024, value: 34.28 },
                { year: 2025, value: 39.43 },
              ],
            },
          ],
        },
      ]
    }
  }
    // ── Comparaison sectorielle ───────────────────────────────
    // Composant MDX : <ValuationRadar name="Nom" /> ou <ValuationBar name="Nom" />
    // Pairs : moyenne tronquée sur 6 pairs — source Finviz
    // valuationCompare: [
    //   { label: 'PER',                  valeur: 0, secteur: 0 },
    //   { label: 'P/FCF',                valeur: 0, secteur: 0 },
    //   { label: 'EV/EBITDA',            valeur: 0, secteur: 0 },
    //   { label: 'Marge opérationnelle', valeur: 0, secteur: 0 },
    //   { label: 'ROIC',                 valeur: 0, secteur: 0 },
    // ],

    // ── Métriques libres (PER historique, dividende, etc.) ────
    // Composant MDX : <MetricGraph_LABEL /> — LABEL = label sans tirets ni /
    // metricHistory: [
    //   {
    //     label: 'PER',
    //     name:  'Nom entreprise',
    //     unit:  '×',
    //     data: [
    //       { year: 2021, value: 0 },
    //       { year: 2022, value: 0 },
    //       { year: 2023, value: 0 },
    //       { year: 2024, value: 0 },
    //       { year: 2025, value: 0 },
    //     ],
    //     competitors: [
    //       {
    //         name:  'Concurrent A',
    //         color: '#2D6A4F',
    //         data: [
    //           { year: 2021, value: 0 },
    //           { year: 2025, value: 0 },
    //         ],
    //       },
    //     ],
    //   },
    // ],
// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE — Analyse ponctuelle
// Copier ce bloc, renommer la variable, compléter.
// ─────────────────────────────────────────────────────────────────────────────

// export const SLUG_PONCTUELLE: AnalyseCard = {
//   slug:    '',           // ex: 'nvidia-resultats-q1-2026'
//   type:    'ponctuelle',
//   title:   '',
//   date:    '2026-01-01',
//   ticker:  '',
//   secteur: 'Technologie',
//   geo:     'États-Unis',
//   statut:  'en-construction',
//   excerpt: '',
// 
