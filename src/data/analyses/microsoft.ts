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
// NOTE DONNÉES — Toutes les séries utilisent l'Année Civile (CY) sauf mention
//   contraire. CY = agrégation des 4 rapports trimestriels (Jan-Déc).
//   Microsoft ayant une année fiscale juil-juin, FY et CY divergent.
//   Les séries CCC_resume, AT et ROCE utilisent des valeurs FY pour 2021-2023
//   (données CY non disponibles) et CY pour 2024-2025.
//   La série Dividendes affiche CY (principale) et FY (comparateur) pour
//   illustrer le décalage dû à l'année fiscale décalée.
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
  conviction:     'exceptionnelle',      // exceptionnelle | forte | moyenne | spéculative
  positionnement: 'achat fort', // achat fort | accumulation | surveillance | maintien | allégement
  lastUpdated:    '2026-03-30',
  statut:         'actif', // en-construction | actif | archivé
  portefeuille:   'CTO',          // PEA | CTO | PEA + CTO | Aucun
  horizon:        '5 ans',
  excerpt:        "L'infrastructure de la productivité d'entreprise, entre monétisation accélérée de Copilot sur une base installée de 400 millions d'utilisateurs et montée en puissance d'Azure comme colonne vertébrale de l'IA.",
  glossaire:      ['per', 'free-cash-flow', 'moat', 'roic', 'roiic', 'saas'],
  logo:          '/analyse/MSFT.png',
  prixCible:      { bas: 939, haut: 1149, devise: 'USD' },
  marginOfSafety: 'forte', // forte | correcte | faible | négative | indéterminée
  readingTime:    25,

  // ── Métriques snapshot — CY2025 TTM, cours clôture 31/12/2025 ────────────────
  // Valeurs issues directement de l'onglet Indicateurs Excel, colonne TTM/CY2025.
  // roic = ROIC Cash Adjusted La Thèse (goodwill inclus dans CP, dette plancher 0).
  // margeEbit = marge EBIT CONSOLIDÉE CY2025 (46,7 %) — source : CR agrégé.
  metrics: {
    per:               30.26,  // CY2025 — 30,3x affiché
    evEbitda:          19.53,  // CY2025 — 19,5x affiché
    fcfYield:          2.15,   // CY2025 — FCF Yield (Cap) = 2,15 %
    roic:              29.68,  // CY2025 — ROIC Cash Adjusted = 29,7 %
    wacc:              8.23,   // CY2025 — WACC CAPM = 8,2 %
    detteEbitda:       -0.27,  // CY2025 — négatif = trésorerie nette
    croissanceCA3ans:  14.39,  // CY2025 — CAGR CA 3 ans = 14,4 %
    croissanceBPA3ans: 21.12,  // CY2025 — CAGR EPS 3 ans = 21,1 %
    margeEbit:         46.67,  // CY2025 — Marge EBIT consolidée = 46,7 %
    margeBrute:        68.59,  // CY2025 — Marge brute = 68,6 %
    payoutRatio:       21.19,  // CY2025 — Payout Ratio = 21,2 %
    currentRatio:      1.39,   // CY2025 — Current Ratio = 1,39x
    dso:               79,     // CY2025 — DSO = 79 j
  },

  tendances: {
    per:       'baisse',  // 35,8x (CY2021) → 30,3x (CY2025)
    fcfYield:  'baisse',  // 2,38 % (CY2021) → 2,15 % (CY2025)
    roic:      'baisse',  // 43,9 % (CY2021) → 29,7 % (CY2025)
    margeEbit: 'hausse',  // 42,5 % (CY2021) → 46,7 % (CY2025)
  },

  updates: [
    {
      date: '2026-03-30',
      note: 'Création de la fiche.',
    },
  ],

  
  chartData: {
    segmentBreaks: [
    { year: 2025, label: 'Reclassification segments' },
    ],
    // ── CA sur 5 ans (CY) ─────────────────────────────────────
    revenue: [
      { year: 2021, value: 184.9  },
      { year: 2022, value: 204.0 },
      { year: 2023, value: 227.5 },
      { year: 2024, value: 261.8 },
      { year: 2025, value: 305.4 },
    ],

    // ── Répartition géographique du CA ────────────────────────
    // Régions disponibles : voir REGION_TO_CODES dans GeoRevenueMap.tsx
    geoRevenue: [
      { region: 'États-Unis', pct: 51.4 },
      { region: 'Reste du monde',     pct: 48.6 },
    ],

    // ── Marges sur 5 ans (CY) ─────────────────────────────────
    marges: [
      { year: 2021, gross: 68.83, operating: 48.84, net: 38.5 },
      { year: 2022, gross: 68.16, operating: 47.66, net: 33.05 },
      { year: 2023, gross: 69.75, operating: 50.26, net: 36.27 },
      { year: 2024, gross: 69.41, operating: 53.47, net: 35.43 },
      { year: 2025, gross: 68.59, operating: 57.85, net: 39.04 },
    ],

    // ── ROIC simple sur 5 ans (CY) ────────────────────────────
    roic: [
      { year: 2021, value: 43.9, },
      { year: 2022, value: 36.9, },
      { year: 2023, value: 34.4, },
      { year: 2024, value: 31.7,  },
      { year: 2025, value: 29.7, },
    ],

    // ── ROIC vs WACC (CY) ─────────────────────────────────────
    // Composant MDX : <RoicWacc />
    roicVsWacc: [
      { year: 2021, value: 43.9, wacc: 5.61 },
      { year: 2022, value: 36.9, wacc: 9.61 },
      { year: 2023, value: 34.4, wacc: 8.31 },
      { year: 2024, value: 31.7, wacc: 8.75 },
      { year: 2025, value: 29.7, wacc: 8.23 },
    ],

    // ── Free Cash Flow sur 5 ans (CY) ────────────────────────
    fcf: [
      { year: 2021, value: 60.6 },
      { year: 2022, value: 59.6 },
      { year: 2023, value: 67.4 },
      { year: 2024, value: 70 },
      { year: 2025, value: 77.4 },
    ],

    // ── CA par segment (FY) ───────────────────────────────────
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
            dataBreaks: [
            { year: 2025, label: 'Reclassification segments' },
            ],
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
          label: 'ROIC_ROIIC_WACC',
          name:  'ROIIC',
          unit:  '%',
          dataBreaks: [
            { year: 2023, label: 'Acquisition activision' },
            ],
          data: [
            { year: 2022, value: -7.2 },
            { year: 2023, value: 59.41 },
            { year: 2024, value: 13.31 },
            { year: 2025, value: 31.46},
          ],
          competitors: [
            {
              name:  'ROIC',
              color: '#2D6A4F',
              data: [
                { year: 2021, value: 20.64 },
                { year: 2022, value: 18.55 },
                { year: 2023, value: 17.42 },
                { year: 2024, value: 18 },
                { year: 2025, value: 17.44 },
              ],
            },
            {
              name:  'WACC',
              color: '#C9A84C',
              data: [
                { year: 2021, value: 9.37 },
                { year: 2022, value: 9.36 },
                { year: 2023, value: 9.03 },
                { year: 2024, value: 9.12 },
                { year: 2025, value: 9.20 },
              ],
            },
          ],
        },
        {
          label: 'MO_secteur',
          name:  'Productivity and Business Processes',
          unit:  '%',
          dataBreaks: [
            { year: 2025, label: 'Reclassification segments' },
            ],
          data: [
            { year: 2021, value: 46.83 },
            { year: 2022, value: 43.26 },
            { year: 2023, value: 51.52 },
            { year: 2024, value: 54.98 },
            { year: 2025, value: 59.43 },
          ],
          competitors: [
            {
              name:  'Intelligent Cloud',
              color: '#2D6A4F',
              data: [
                { year: 2021, value: 44.65 },
                { year: 2022, value: 44.87 },
                { year: 2023, value: 45.95 },
                { year: 2024, value: 57.08 },
                { year: 2025, value: 41.93 },
              ],
            },
            {
              name:  'More Personal Computing',
              color: '#C9A84C',
              data: [
                { year: 2021, value: 35.64 },
                { year: 2022, value: 30.88 },
                { year: 2023, value: 31.83 },
                { year: 2024, value: 29.17 },
                { year: 2025, value: 26.78 },
              ],
            },
          ],
        },
        {
          label: 'PER',
          name:  'PER',
          unit:  'x',
          data: [
            { year: 2021, value: 35.79 },
            { year: 2022, value: 26.63 },
            { year: 2023, value: 33.54 },
            { year: 2024, value: 33.95 },
            { year: 2025, value: 30.26 },
          ],
          competitors: [
            {
              name:  'PER historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 32.03 },
                { year: 2022, value: 32.03 },
                { year: 2023, value: 32.03 },
                { year: 2024, value: 32.03 },
                { year: 2025, value: 32.03 },
              ],
            },
            {
              name:  'PER historique ajusté',
              color: '#52B788',
              dashed: true,
              data: [
                { year: 2021, value: 40.79 },
                { year: 2022, value: 27.85 },
                { year: 2023, value: 28.85 },
                { year: 2024, value: 29.28 },
                { year: 2025, value: 23.83 },
              ],
            }      
          ]
        },
        {
          label: 'EPS',
          name:  'EPS',
          unit:  '$',
          data: [
            { year: 2021, value: 9.39 },
            { year: 2022, value: 8.99 },
            { year: 2023, value: 11.05 },
            { year: 2024, value: 12.41 },
            { year: 2025, value: 15.98 },
          ],
        },
        {
          label: 'ROIIC',
          name:  'ROIIC',
          unit:  '%',
          data: [
            { year: 1, value: 31.46 },
            { year: 2, value: 20.1 },
            { year: 3, value: 25.01 },
            { year: 4, value: 19.92 },
          ],
        },
        {
        label: 'FCF_OCF_Capex',
        name:  'Opérating Cash Flow',
        unit:  'Mds $',
        data: [
          { year: 2021, value: 83.9 },
          { year: 2022, value: 84.3 },
          { year: 2023, value: 102.6 },
          { year: 2024, value: 125.5 },
          { year: 2025, value: 160.5 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 60.6 },
              { year: 2022, value: 59.6 },
              { year: 2023, value: 67.4 },
              { year: 2024, value: 70 },
              { year: 2025, value: 77.4 },
            ],
          },
          {
            name:  'Capex',
            color: '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 23.2 },
              { year: 2022, value: 24.7 },
              { year: 2023, value: 35.2 },
              { year: 2024, value: 55.5 },
              { year: 2025, value: 83 },
            ],
          },
        ]        
      },
      {
          label: 'EV_EBIDTA',
          name:  'EV/EBITDA',
          unit:  'x',
          data: [
            { year: 2021, value: 27.02 },
            { year: 2022, value: 18.01 },
            { year: 2023, value: 23.77 },
            { year: 2024, value: 21.81 },
            { year: 2025, value: 19.27 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 21.97 },
                { year: 2022, value: 21.97 },
                { year: 2023, value: 21.97 },
                { year: 2024, value: 21.97 },
                { year: 2025, value: 21.97 },
              ],
            }   
          ]
        },
        {
          label: 'DETTE_EBIDTA',
          name:  'Dette nette / EBITDA',
          unit:  'x',
          dataBreaks: [
            { year: 2023, label: 'Acquisition activision' },
          ],
          data: [
            { year: 2021, value: -0.79 },
            { year: 2022, value: -0.53 },
            { year: 2023, value: -0.06 },
            { year: 2024, value: -0.19 },
            { year: 2025, value: -0.27 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: -0.37 },
                { year: 2022, value: -0.37 },
                { year: 2023, value: -0.37 },
                { year: 2024, value: -0.37 },
                { year: 2025, value: -0.37 },
              ],
            }   
          ]
        },
        {
          label: 'CR',
          name:  'Current Ratio',
          dataBreaks: [
            { year: 2023, label: 'Acquisition activision' },
          ],
          unit:  'x',
          data: [
            { year: 2021, value: 2.25 },
            { year: 2022, value: 1.93 },
            { year: 2023, value: 1.22 },
            { year: 2024, value: 1.35 },
            { year: 2025, value: 1.39 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 1.63 },
                { year: 2022, value: 1.63 },
                { year: 2023, value: 1.63 },
                { year: 2024, value: 1.63 },
                { year: 2025, value: 1.63 },
              ],
            }   
          ]
        },
        {
          label: 'DSO',
          name:  'Days Sales Oustanding',
          unit:  'x',
          data: [
            { year: 2021, value: 247 },
            { year: 2022, value: 178 },
            { year: 2023, value: 130 },
            { year: 2024, value: 100 },
            { year: 2025, value: 107 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 152 },
                { year: 2022, value: 152 },
                { year: 2023, value: 152 },
                { year: 2024, value: 152 },
                { year: 2025, value: 152 },
              ],
            }   
          ]
        },
        {
          label: 'Dilution',
          name:  'Dilution / Concentration (année civile)',
          unit:  '%',
          data: [
            { year: 2022, value: 1.01 },
            { year: 2023, value: 0.44 },
            { year: 2024, value: -0.07 },
            { year: 2025, value: 0.11 },
          ],
          competitors: [
            {
              name:  'Dilution / Concentration (année fiscale)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2022, value: 0.89 },
                { year: 2023, value: 0.9  },
                { year: 2024, value: 0.04 },
                { year: 2025, value: 0.05 },
              ],
            }   
          ]
        },
        {
          label: 'Dette_et_EBITDA',
          name:  'Dette nette',
          unit:  'Mds $',
          data: [
            { year: 2021, value: -72.1 },
            { year: 2022, value: -51.9 },
            { year: 2023, value: -6.7 },
            { year: 2024, value: -26.5 },
            { year: 2025, value: -49.2 },
          ],
          competitors: [
            {
              name:  'EBITDA',
              color: '#C9A84C',
              data: [
              { year: 2021, value: 91.6 },
              { year: 2022, value: 97 },
              { year: 2023, value: 117.8 },
              { year: 2024, value: 143.1 },
              { year: 2025, value: 184.7 },
              ],
            }   
          ]
        },
        {
          label: 'Payout',
          name:  'Payout Ratio',
          unit:  '%',
          data: [
            { year: 2021, value: 24.29 },
            { year: 2022, value: 28.12 },
            { year: 2023, value: 25.12 },
            { year: 2024, value: 24.68 },
            { year: 2025, value: 21.19 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 24.68 },
                { year: 2022, value: 24.68 },
                { year: 2023, value: 24.68 },
                { year: 2024, value: 24.68 },
                { year: 2025, value: 24.68 },
              ], 
            },
          ]
        },        
        {
          label: 'FCFy',
          name:  'Free-Cash-Flow Yield',
          unit:  '%',
          data: [
            { year: 2021, value: 2.45 },
            { year: 2022, value: 3.41 },
            { year: 2023, value: 2.41 },
            { year: 2024, value: 2.24 },
            { year: 2025, value: 2.17 },
          ],
          competitors: [
            {
              name:  'Moyenne historique (5ans)',
              color: '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 2.54 },
                { year: 2022, value: 2.54 },
                { year: 2023, value: 2.54 },
                { year: 2024, value: 2.54 },
                { year: 2025, value: 2.54 },
              ],
            },
           {
              name:  'US 10 ans',
              color: '#52B788',
              data: [
                { year: 2021, value: 0.916 },
                { year: 2022, value: 3.879 },
                { year: 2023, value: 3.866 },
                { year: 2024, value: 4.572 },
                { year: 2025, value: 4.153 },
              ],
            },  
          ]
        },

        // ── Asset Turnover CY (2024-2025) / FY proxy (2021-2023) ───────────────
        // AT = CA / Total actifs. Source : Excel Indicateurs, onglet Capital.
        // CY disponible depuis 2024 uniquement. 2021-2023 = valeurs FY (bilan juin).
        {
          label: 'AT',
          name:  'Asset Turnover',
          unit:  'x',
          data: [
            { year: 2021, value: 0.50 },  // FY proxy
            { year: 2022, value: 0.54 },  // FY proxy
            { year: 2023, value: 0.51 },  // FY proxy
            { year: 2024, value: 0.49 },  // CY
            { year: 2025, value: 0.46 },  // CY
          ],
          competitors: [
            {
              name:   'Moyenne historique (5 ans)',
              color:  '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 0.50 },
                { year: 2022, value: 0.50 },
                { year: 2023, value: 0.50 },
                { year: 2024, value: 0.50 },
                { year: 2025, value: 0.50 },
              ],
            },
          ],
        },

        // ── ROCE vs WACC vs ROIC CY (2024-2025) / FY proxy (2021-2023) ─────────
        // ROCE = NOPAT / (CP + dette totale − trésorerie). Source : Excel Indicateurs.
        {
          label: 'ROCE',
          name:  'ROCE',
          unit:  '%',
          yMin:  0,
          data: [
            { year: 2021, value: 36.4 },  // FY proxy
            { year: 2022, value: 39.0 },  // FY proxy
            { year: 2023, value: 35.7 },  // FY proxy
            { year: 2024, value: 34.4 },  // CY
            { year: 2025, value: 33.4 },  // CY
          ],
          competitors: [
            {
              name:  'WACC',
              color: '#C9A84C',
              data: [
                { year: 2021, value: 9.37 },
                { year: 2022, value: 9.36 },
                { year: 2023, value: 9.03 },
                { year: 2024, value: 9.12 },
                { year: 2025, value: 9.20 },
              ],
            },
            {
              name:   'ROIC',
              color:  '#2D6A4F',
              dashed: true,
              data: [
                { year: 2021, value: 20.64 },
                { year: 2022, value: 18.55 },
                { year: 2023, value: 17.42 },
                { year: 2024, value: 18.00 },
                { year: 2025, value: 17.44 },
              ],
            },
          ],
        },

        // ── CCC — DSO / DIO / DPO / Cash Conversion Cycle (FY) ─────────────────
        // FY = données au 30 juin (bilan Microsoft). CY disponible uniquement 2025
        // (CCC CY2025 = −86,5 j vs FY2025 = −21 j — écart expliqué dans le MDX).
        // Source : Excel Indicateurs, onglet Solidité.
        {
          label: 'CCC_resume',
          name:  'Days Sales Outstanding (FY)',
          unit:  'J',
          heightMultiplier: 1.5,
          data: [
            { year: 2021, value: 83 },
            { year: 2022, value: 81 },
            { year: 2023, value: 84 },
            { year: 2024, value: 85 },
            { year: 2025, value: 91 },
          ],
          competitors: [
            {
              name:  'Days Inventory Outstanding',
              color: '#2D6A4F',
              data: [
                { year: 2021, value: 18 },
                { year: 2022, value: 22 },
                { year: 2023, value: 14 },
                { year: 2024, value: 6  },
                { year: 2025, value: 4  },
              ],
            },
            {
              name:  'Days Payable Outstanding',
              color: '#77bd92',
              data: [
                { year: 2021, value: 106 },
                { year: 2022, value: 111 },
                { year: 2023, value: 100 },
                { year: 2024, value: 108 },
                { year: 2025, value: 115 },
              ],
            },
            {
              name:  'Cash Conversion Cycle',
              color: '#C9A84C',
              data: [
                { year: 2021, value: -5  },
                { year: 2022, value: -7  },
                { year: 2023, value: -3  },
                { year: 2024, value: -17 },
                { year: 2025, value: -21 },
              ],
            },
          ],
        },

        // ── Dividende par action — CY (principal) + FY (comparateur) ───────────
        // CY = dividendes versés jan-déc / actions diluées CY.
        // FY = dividendes versés juil-juin / actions diluées FY.
        // Le décalage CY/FY reflète l'année fiscale microsoft (juil-juin).
        // Source : Excel CF + Indicateurs.
        {
          label: 'Dividendes',
          name:  'Dividende par action (CY)',
          unit:  '$',
          data: [
            { year: 2021, value: 2.36 },
            { year: 2022, value: 2.60 },
            { year: 2023, value: 2.86 },
            { year: 2024, value: 3.16 },
            { year: 2025, value: 3.48 },
          ],
          competitors: [
            {
              name:   'Dividende par action (FY)',
              color:  '#C9A84C',
              dashed: true,
              data: [
                { year: 2021, value: 2.24 },
                { year: 2022, value: 2.48 },
                { year: 2023, value: 2.72 },
                { year: 2024, value: 3.00 },
                { year: 2025, value: 3.32 },
              ],
            },
          ],
        },

        // ── Allocation du capital — retour actionnaires vs Capex (FY) ──────────
        // Retour total = dividendes versés + rachats d'actions nets.
        // Capex = additions to PP&E (valeur absolue). Source : Excel CF (FY).
        {
          label: 'Capex_Action',
          name:  'Retour aux actionnaires (FY)',
          unit:  'Mds $',
          yMin:  0,
          data: [
            { year: 2021, value: 43.9 },
            { year: 2022, value: 50.8 },
            { year: 2023, value: 42.0 },
            { year: 2024, value: 39.0 },
            { year: 2025, value: 42.5 },
          ],
          competitors: [
            {
              name:  'Rachats d\'actions (FY)',
              color: '#2D6A4F',
              data: [
                { year: 2021, value: 27.4 },
                { year: 2022, value: 32.7 },
                { year: 2023, value: 22.2 },
                { year: 2024, value: 17.3 },
                { year: 2025, value: 18.4 },
              ],
            },
            {
              name:   'Capex (FY)',
              color:  '#A8A29E',
              dashed: true,
              data: [
                { year: 2021, value: 20.6 },
                { year: 2022, value: 23.9 },
                { year: 2023, value: 28.1 },
                { year: 2024, value: 44.5 },
                { year: 2025, value: 64.6 },
              ],
            },
          ],
        },

      ],
    // Composants : <ValuationChart_vs_secteur /> <ValuationChart_vs_pairs />
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Microsoft vs Technologies - Infrastructures',
        data: [
          { label: 'PER',                  valeur: 22.32, secteur: 32.6  },
          { label: 'P/FCF',                valeur: 34.22, secteur: 30.77 },
          { label: 'EV/EBITDA',            valeur: 14.52, secteur: 22.43 },
          { label: 'Marge opérationnelle', valeur: 46.67, secteur: 32.94 },
          { label: 'ROIC',                 valeur: 23.85, secteur: 11.28 },
        ],
      },
      {
        id: 'vs_pairs', type: 'radar',
        title: 'Valorisation comparée - Microsoft vs Oracle et Alphabet',
        concurrent1: 'Oracle', concurrent2: 'Alphabet',
        data: [
          { label: 'PER',                  valeur: 22.32, concurrent1: 25.07, concurrent2: 25.33 },
          { label: 'P/FCF',                valeur: 34.22, concurrent2: 45.25                    },
          { label: 'EV/EBITDA',            valeur: 14.52, concurrent1: 18.4,  concurrent2: 21.15 },
          { label: 'Marge opérationnelle', valeur: 46.67, concurrent1: 32.27, concurrent2: 32.94 },
          { label: 'ROIC',                 valeur: 23.85, concurrent1: 8.64,  concurrent2: 27.73 },
        ],
      },
    ],
  }
}