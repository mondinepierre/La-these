// ─────────────────────────────────────────────────────────────────────────────
// GTT SA (ticker : GTT, Euronext Paris) — Valeur suivie
// Dernière mise à jour : mai 2026
// Sources : DEU FY2021 à FY2025, Excel La Thèse
// Devise : EUR — cotation Euronext Paris
// ─────────────────────────────────────────────────────────────────────────────
//
// NOTES MÉTHODOLOGIQUES
//   ROIC : IC = Capitaux propres totaux + max(dette nette, 0)
//          Goodwill inclus dans les CP (non soustrait de l'IC)
//          NOPAT = EBIT courant × (1 − taux effectif IS)
//          Dette nette = Dettes totales (LT + CT) − Trésorerie
//          Plancher dette nette à 0 → GTT en trésorerie nette structurelle sur 2021-2025
//          ROIC 2025 = 448,70 / 589,9 = 76,1 %
//   WACC : Rf = Bund 10 ans Allemagne (non UST)
//          ERP = ERP Damodaran France (CRP 0,55 % déjà inclus dans les valeurs du tableau)
//          ERP 2025 = 4,78 % (= ERP US 4,23 % + CRP France 0,55 %) — source tableau Excel
//          β = 0,49 (calcul propre, régression 5 ans mensuelle vs CAC 40 GR)
//          WACC 2025 : Rf 2,86 % + β 0,49 × ERP 4,78 % = 5,20 % (Re)
//                      Pondérations D/V = 2,16 %, E/V = 97,84 %
//                      WACC ≈ 5,14 % (valeur calculée dans l'onglet WACC du fichier Excel)
//   Dividende : convention DEU (au titre de l'exercice clos)
//          2021 : 3,10 € | 2022 : 3,10 € | 2023 : 4,36 € | 2024 : 7,50 €
//          2025 : acompte 4 € versé décembre 2025 — solde à voter en AG juin 2026
//          Payout snapshot = exercice 2024 : 7,50 / 9,40 = 79,8 %
//   DSO : (Créances clients / CA) × 365
//          Valeurs correctes (bug Excel corrigé — DSO pointait sur les stocks) :
//          2021 : 82,1 j | 2022 : 140,1 j | 2023 : 134,9 j | 2024 : 105,8 j | 2025 : 86,3 j
//          DSO élevé structurel : GTT facture des royalties sur jalons de construction
//          (commande + jalons + livraison navire). Pas comparable aux entreprises standards.
//          CCC complet non pertinent (DIO = travaux en cours non comparables, DPO étalé sur
//          durée de construction navale). Graphique DSO standalone uniquement.
//   ROIIC : formule décalée — ∆NOPAT(N) / ∆IC(N-1)
//          Le rendement des investissements de l'année N-1 est mesuré sur les NOPAT de l'année N.
//          Cohérent avec le cycle LNG (commande navire → royalties en cours de construction).
//   PER ajusté : PER × (Re_moyenne_5ans_planché / Re_courant)
//          Re calculé avec Rf planché à 2 % pour les années de taux négatifs
//          Re_2021 (planché) = 2,00 % + 0,49 × 4,79 % = 4,35 %
//          Re_2022 = 2,56 % + 0,49 × 6,49 % = 5,74 %
//          Re_2023 = 2,03 % + 0,49 × 5,15 % = 4,55 %
//          Re_2024 = 2,36 % + 0,49 × 4,88 % = 4,75 %
//          Re_2025 = 2,86 % + 0,49 × 4,78 % = 5,20 %
//          Re_moyenne_5ans_planché = 4,92 % | PER ajusté courant (209,4 €) = 18,9 × 4,92/5,20 = 17,8x
//
// ACQUISITION DANELEC (event structurant FY2025)
//   Finalisée le 31 juillet 2025 auprès du fonds Verdane (Danemark)
//   Prix : 194 M€ (dont remboursement emprunts existants)
//   Activité : leader mondial des Voyage Data Recorders (VDR) + solutions digitales
//              sécurité maritime et performance navires
//   Détention : 97,63 %
//   Contribution CA 2025 : 16,1 M€ (5 mois d'août à décembre)
//   Marque comptabilisée 26,5 M€ (allocation provisoire IFRS 3 — définitive S1 2026)
//   Synergies cibles : 25-30 M€ d'EBIT en 2030 (complémentarité Danelec + Ascenz Marorka + VPS)
//   Impact bilan : goodwill × 5,5 (19 → 104,8 M€), dette LT × 6,4 (13,8 → 88,4 M€)
//
// CARNET DE COMMANDES
//   31/12/2021 : 795 M€ | 31/12/2022 : 1 594 M€ | 31/12/2023 : 1 815 M€
//   31/12/2024 : 1 950 M€ (pic) | 31/12/2025 : 1 639 M€ (atterrissage post-pic 2022)
//   Unités 31/12/2025 : 288 navires (261 méthaniers + 21 éthaniers + 3 FSRU/FSU + 3 FLNG)
//   31/03/2026 : 297 unités après 32 nouvelles commandes et 22 livraisons Q1 2026
//
// POSITION DE MARCHÉ
//   ~740 méthaniers >100 000 m³ en opération dans le monde au 31/12/2025
//   ~635 équipés GTT (~86 % de la flotte mondiale)
//   Depuis fin 2015 : 100 % des commandes de méthaniers >100 000 m³ en technologie GTT
//
// GUIDANCE FY2026 (annoncée 19/02/2026)
//   CA 2026 : 740-780 M€ (mid-point 760, −5,4 % YoY vs 803 M€)
//   EBITDA 2026 : 490-530 M€ (mid-point 510, −6,6 % YoY vs 546 M€)
//   Atterrissage en ligne avec fin progressive de l'effet pic de commandes 2022
//
// MANAGEMENT (changement structurant)
//   François Michel — Directeur général depuis janvier 2026
//   Parcours : Alstom Marine & Power, Bourbon Offshore (DGA), CMA-CGM (CFO activités)
//   Succède à Jean-Baptiste Choimet qui a dirigé GTT durant la séquence post-Ukraine et l'acquisition Danelec
//
// SEGMENTS (rupture en 2024 : segment Digital formalisé)
//   Construction navale : méthaniers/éthaniers (92 % du CA), FSRU, FLNG, navires GNL carburant
//   Digital : Ascenz Marorka + VPS (fév 2024) + Danelec (août 2025) — 4,5 % du CA 2025
//   Services : ingénierie, homologation, formation, ATS — 2,9 % du CA 2025
//   Hydrogène : Elogen (électrolyseurs) — 0,6 % du CA 2025, pôle en pertes
//
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const gtt: AnalyseCard = {
  slug:           'gtt',
  type:           'valeur',
  title:          'GTT',
  ticker:         'GTT',
  secteur:        'Industrie',
  geo:            'France',
  conviction:     'forte',
  positionnement: 'maintien',
  lastUpdated:    '2026-05-15',
  statut:         'actif',
  portefeuille:   'CTO',              // Non éligible PEA (cotation Euronext Paris mais revenus royalties — cotation hors directive PEA)
  horizon:        '5 ans',
  excerpt:        'GTT conçoit et licencie les systèmes de confinement membranaire pour le transport et le stockage du GNL. Pure-play technologique asset-light, quasi-monopole mondial sur les méthaniers à membrane, marges d\'exploitation >60 %, FCF conversion structurellement supérieure à 90 %.',
  glossaire:      ['moat', 'asset-light', 'royalties', 'roic', 'gnl', 'fsru'],
  logo:           '/analyses/gtt.png',
  prixCible:      { bas: 299, haut: 344, devise: 'EUR' },   // Scénario central PER 18x ± MoE 7 % — BPA 2030 17,88 €
  marginOfSafety: 'faible',           // Prime de 4,5 % sur zone juste centrale r=10 % — maintien sans renforcement
  readingTime:    40,
    onePager: {
    thesis: "Royalties sur 86 % des méthaniers mondiaux : un quasi-monopole technologique en bas de cycle.",
    cours:     209.40,
    coursDate: '2026-05-15',
    devise:    'EUR',
    range52w:  { low: 147.3, high: 215 },   // À vérifier / mettre à jour
  },

  // ── Métriques snapshot — FY2025 (au cours de clôture 156,6 €) ──────────────
  // SAUF per, evEbitda, fcfYield, p/fcf → recalculés au cours rédaction 209,4 € (15/05/2026)
  // roic, wacc, marges → données FY2025
  metrics: {
    per:               18.86,   // Cours rédaction 209,4 € / BPA dilué FY2025 11,10 € = 18,9x
    evEbitda:          10.66,   // EV = Capi FY2025 5 821,8 M€ (tréso nette → EV = Capi) / EBITDA 546 M€
    fcfYield:          6.58,    // FCF 383,2 M€ / EV 5 821,8 M€ — dénominateur EV cohérent (Capi = EV car tréso nette)
    roic:              76.1,    // NOPAT 448,7 / IC 589,9 M€ — IC = CP + max(dette nette, 0) — goodwill inclus
    wacc:              5.14,    // WACC FY2025 — Re = Rf Bund 2,86 % + β 0,49 × ERP 4,78 % = 5,20 % — source Excel
    detteEbitda:       -0.40,   // Dette nette −218 M€ / EBITDA 546 M€ — trésorerie nette structurelle
    croissanceCA3ans:  37.6,    // CAGR CA 2022→2025 : (803,0/307,3)^(1/3) − 1
    croissanceBPA3ans: 47.5,    // CAGR BPA dilué 2022→2025 : (11,10/3,46)^(1/3) − 1
    margeEbit:         64.9,    // EBIT courant 521,3 / CA 803,0 M€
    margeBrute:        97.5,    // (803,0 − 20,2) / 803,0 M€
    payoutRatio:       79.8,    // Convention DEU — au titre FY2024 : dividende 7,50 / BPA 9,40 €
    currentRatio:      2.00,    // Actif courant 675,3 / Passif courant 337,5 M€
    dso:               86.3,    // (Créances clients 189,8 / CA 803,0) × 365 — valeur corrigée (bug Excel)
  },

  tendances: {
    per:       'baisse',   // 14–29x historique → 18,9x au cours actuel — multiple comprimé vs pic 2022
    fcfYield:  'hausse',   // 3,2–6,4 % sur 5 ans → 6,6 % — en haut de fourchette historique
    roic:      'hausse',   // 49 % (2022) → 76 % (2025) — levier opérationnel massif sur royalties
    margeEbit: 'hausse',   // 49 % (2022) → 65 % (2025) — progression structurelle continue
  },

  updates: [
    {
      date: '2026-05-15',
      note: 'Création de la fiche. Données FY2025 issues du DEU du 27 avril 2026. Acquisition Danelec finalisée juillet 2025 intégrée. Nouveau DG François Michel en poste depuis janvier 2026.',
    },
  ],

  chartData: {

    segmentBreaks: [
      { year: 2024, label: 'Segment Digital formalisé en 2024.' },
    ],

    // ── CA sur 5 ans (M€) ────────────────────────────────────────────────────
    revenue: [
      { year: 2021, value: 314.735 },
      { year: 2022, value: 307.294 },
      { year: 2023, value: 427.704 },
      { year: 2024, value: 641.4   },
      { year: 2025, value: 803.0   },
    ],

    // ── Répartition géographique (par localisation des chantiers navals clients) ─
    // Source : DEU FY2025 — onglet géographique (Résultat par secteur)
    // Note : géographie des chantiers navals commanditaires, pas des armateurs finaux
    geoRevenue: [
      { region: 'Corée du sud',      pct: 68 },   // Principalement Corée du Sud (HHI, Samsung, Hanwha)
      { region: 'Chine',             pct: 25 },   // Hudong-Zhonghua et autres chantiers chinois
      { region: 'Reste du monde',    pct: 7  },   // Europe (Chantiers de l'Atlantique), Singapour, etc.
    ],

    // ── Marges sur 5 ans (%) ─────────────────────────────────────────────────
    // gross     = Marge brute : (CA − Achats consommés) / CA
    // operating = Marge EBIT courant / CA (hors éléments non courants)
    // net       = Résultat net / CA
    marges: [
      { year: 2021, gross: 95.97, operating: 52.29, net: 42.60 },
      { year: 2022, gross: 95.61, operating: 49.53, net: 41.75 },
      { year: 2023, gross: 95.86, operating: 52.27, net: 47.09 },
      { year: 2024, gross: 95.63, operating: 58.36, net: 54.23 },
      { year: 2025, gross: 97.49, operating: 64.92, net: 51.49 },
    ],

    // ── ROIC sur 5 ans (%) ───────────────────────────────────────────────────
    // NOPAT = EBIT courant × (1 − taux effectif) | IC = CP + max(dette nette, 0)
    roic: [
      { year: 2021, value: 53.96 },
      { year: 2022, value: 49.21 },
      { year: 2023, value: 56.65 },
      { year: 2024, value: 69.33 },
      { year: 2025, value: 76.10 },
    ],

    // ── ROIC vs WACC (%) ─────────────────────────────────────────────────────
    // WACC source : onglet WACC du fichier Excel — Re sans plancher Rf (Rf négatif utilisé tel quel)
    // ERP = ERP Damodaran France (CRP 0,55 % inclus) : 4,79 % (2021), 6,49 % (2022), 5,15 % (2023), 4,88 % (2024), 4,78 % (2025)
    roicVsWacc: [
      { year: 2021, value: 53.96, wacc: 2.16 },
      { year: 2022, value: 49.21, wacc: 5.73 },
      { year: 2023, value: 56.65, wacc: 4.57 },
      { year: 2024, value: 69.33, wacc: 4.75 },
      { year: 2025, value: 76.10, wacc: 5.14 },
    ],

    // ── FCF sur 5 ans (M€) ───────────────────────────────────────────────────
    // FCF = OCF − Capex industriel (hors acquisitions financières)
    fcf: [
      { year: 2021, value: 196.471 },
      { year: 2022, value: 118.918 },
      { year: 2023, value: 173.031 },
      { year: 2024, value: 299.9   },
      { year: 2025, value: 383.2   },
    ],

    // ── CA par segment (M€) ──────────────────────────────────────────────────
    segmentRevenue: {
      unit: 'M€',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2021, segments: [
          { name: 'Construction navale', value: 292.407 },
          { name: 'Digital',             value: 0       },
          { name: 'Services',            value: 17.369  },
          { name: 'Hydrogène',           value: 4.959   },
        ]},
        { year: 2022, segments: [
          { name: 'Construction navale', value: 279.526 },
          { name: 'Digital',             value: 0       },
          { name: 'Services',            value: 23.117  },
          { name: 'Hydrogène',           value: 4.653   },
        ]},
        { year: 2023, segments: [
          { name: 'Construction navale', value: 389.465 },
          { name: 'Digital',             value: 0       },
          { name: 'Services',            value: 28.159  },
          { name: 'Hydrogène',           value: 10.08   },
        ]},
        { year: 2024, segments: [
          { name: 'Construction navale', value: 591.1  },
          { name: 'Digital',             value: 15.6   },
          { name: 'Services',            value: 23.3   },
          { name: 'Hydrogène',           value: 11.4   },
        ]},
        { year: 2025, segments: [
          { name: 'Construction navale', value: 739.2 },
          { name: 'Digital',             value: 36.1  },
          { name: 'Services',            value: 23.0  },
          { name: 'Hydrogène',           value: 4.6   },
        ]},
      ],
    },

    // ── Graphiques de valorisation comparée ──────────────────────────────────
    // Données au cours de rédaction 209,4 € (15/05/2026) — sources : Finviz/screening
    // GTT : PER 18,9x | EV/EBITDA 10,7x | P/FCF 20,3x | Marge EBIT 64,9% | ROIC 76,1%
    //       FCF Yield 6,6% | Dette/EBITDA -0,40 | TCAC CA 3 ans 37,6%
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'GTT vs secteur (panel 12 pairs — équipementiers maritimes, LNG, chantiers)',
        data: [
          { label: 'PER',             valeur: 18.86, secteur: 25.25 },
          { label: 'EV/EBITDA',       valeur: 10.66, secteur: 22.57 },
          { label: 'P/FCF',           valeur: 20.30, secteur: 32.96 },
          { label: 'Marge EBIT %',    valeur: 64.92, secteur: 18.62 },
          { label: 'ROIC %',          valeur: 76.10, secteur: 14.26 },
          { label: 'FCF Yield %',     valeur:  6.58, secteur:  4.87 },
          { label: 'Dette/EBITDA',    valeur: -0.40, secteur:  0.90 },
          { label: 'TCAC CA 3 ans %', valeur: 37.60, secteur:  3.67 },
        ],
      },
      {
        id: 'vs_chart_industries', type: 'radar',
        title: 'GTT vs Chart Industries — équipementier cryogénique LNG',
        concurrent1: 'Chart Industries',
        data: [
          // Chart : PER N/M (résultat négatif) → 0
          { label: 'PER',             valeur: 18.86, concurrent1:  0.00 },
          { label: 'EV/EBITDA',       valeur: 10.66, concurrent1: 16.24 },
          { label: 'P/FCF',           valeur: 20.30, concurrent1: 48.90 },
          { label: 'Marge EBIT %',    valeur: 64.92, concurrent1:  5.90 },
          { label: 'ROIC %',          valeur: 76.10, concurrent1:  4.10 },
          { label: 'FCF Yield %',     valeur:  6.58, concurrent1:  2.00 },
          { label: 'Dette/EBITDA',    valeur: -0.40, concurrent1:  3.84 },
          { label: 'TCAC CA 3 ans %', valeur: 37.60, concurrent1: -11.70 },
        ],
      },
      {
        id: 'vs_technip_energies', type: 'radar',
        title: 'GTT vs Technip Energies — ingénierie EPC LNG',
        concurrent1: 'Technip Energies',
        data: [
          { label: 'PER',             valeur: 18.86, concurrent1: 18.92 },
          { label: 'EV/EBITDA',       valeur: 10.66, concurrent1:  8.43 },
          { label: 'P/FCF',           valeur: 20.30, concurrent1: 11.40 },
          { label: 'Marge EBIT %',    valeur: 64.92, concurrent1:  5.90 },
          { label: 'ROIC %',          valeur: 76.10, concurrent1:  8.20 },
          { label: 'FCF Yield %',     valeur:  6.58, concurrent1:  8.80 },
          { label: 'Dette/EBITDA',    valeur: -0.40, concurrent1: -5.13 },
          { label: 'TCAC CA 3 ans %', valeur: 37.60, concurrent1: -2.00 },
        ],
      },
      {
        id: 'vs_hd_hyundai', type: 'radar',
        title: 'GTT vs HD Hyundai Heavy Industries — chantier naval client',
        concurrent1: 'HD Hyundai Heavy',
        data: [
          // HD Hyundai : PER N/M → 0
          { label: 'PER',             valeur: 18.86, concurrent1:  0.00 },
          { label: 'EV/EBITDA',       valeur: 10.66, concurrent1: 27.12 },
          { label: 'P/FCF',           valeur: 20.30, concurrent1: 22.60 },
          { label: 'Marge EBIT %',    valeur: 64.92, concurrent1: 11.10 },
          { label: 'ROIC %',          valeur: 76.10, concurrent1: 16.90 },
          { label: 'FCF Yield %',     valeur:  6.58, concurrent1:  4.40 },
          { label: 'Dette/EBITDA',    valeur: -0.40, concurrent1: -0.50 },
          { label: 'TCAC CA 3 ans %', valeur: 37.60, concurrent1: 29.60 },
        ],
      },
    ],

    // ── Métriques libres sur 5 ans ────────────────────────────────────────────
    metricHistory: [

      // ── EV/EBITDA historique ────────────────────────────────────────────────
      // EV = Capitalisation boursière (trésorerie nette → EV = Capi)
      // Moyenne historique 5 ans : (17,34+22,76+19,63+12,28+10,66)/5 = 16,53x
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 17.34 },
          { year: 2022, value: 22.76 },
          { year: 2023, value: 19.63 },
          { year: 2024, value: 12.28 },
          { year: 2025, value: 10.66 },
        ],
        competitors: [
          {
            name:   'Moyenne historique 5 ans',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 16.53 },
              { year: 2022, value: 16.53 },
              { year: 2023, value: 16.53 },
              { year: 2024, value: 16.53 },
              { year: 2025, value: 16.53 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (M€) ─────────────────────────────────────────────
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'M€',
        yMin:  0,
        data: [
          { year: 2021, value: 212.499 },
          { year: 2022, value: 139.432 },
          { year: 2023, value: 216.155 },
          { year: 2024, value: 361.6   },
          { year: 2025, value: 423.5   },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 196.471 },
              { year: 2022, value: 118.918 },
              { year: 2023, value: 173.031 },
              { year: 2024, value: 299.9   },
              { year: 2025, value: 383.2   },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 16.028 },
              { year: 2022, value: 20.514 },
              { year: 2023, value: 43.124 },
              { year: 2024, value: 61.7   },
              { year: 2025, value: 40.3   },
            ],
          },
        ],
      },

      // ── BPA dilué ──────────────────────────────────────────────────────────
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '€',
        data: [
          { year: 2021, value: 3.62  },
          { year: 2022, value: 3.46  },
          { year: 2023, value: 5.43  },
          { year: 2024, value: 9.40  },
          { year: 2025, value: 11.10 },
        ],
      },

      // ── Dividende par action (convention DEU — au titre de l'exercice clos) ─
      // 2025 : acompte 4 € versé décembre 2025, solde à voter en AG juin 2026
      // Série arrêtée à 2024 — valeur 2025 non confirmée
      {
        label: 'Dividendes',
        name:  "Dividende par action (au titre de l'exercice)",
        unit:  '€',
        data: [
          { year: 2021, value: 3.10 },
          { year: 2022, value: 3.10 },
          { year: 2023, value: 4.36 },
          { year: 2024, value: 7.50 },
        ],
      },

      // ── ROCE vs WACC vs ROIC ───────────────────────────────────────────────
      // ROCE ≈ ROIC pour GTT (trésorerie nette → actifs opérationnels ≈ IC)
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 65.28 },
          { year: 2022, value: 57.78 },
          { year: 2023, value: 65.30 },
          { year: 2024, value: 78.73 },
          { year: 2025, value: 76.85 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2021, value: 4.62 },
              { year: 2022, value: 6.01 },
              { year: 2023, value: 4.85 },
              { year: 2024, value: 5.02 },
              { year: 2025, value: 5.40 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2021, value: 53.96 },
              { year: 2022, value: 49.21 },
              { year: 2023, value: 56.65 },
              { year: 2024, value: 69.33 },
              { year: 2025, value: 76.10 },
            ],
          },
        ],
      },

      // ── ROIIC annuel (1 an glissant, formule décalée) ─────────────────────
      // ROIIC(N) = ∆NOPAT(N vs N-1) / ∆IC(N-1 vs N-2)
      // Valeurs élevées car IC base très faible (modèle royalty asset-light)
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel',
        unit:  '%',
        data: [
          { year: 2022, value: -155.3 },
          { year: 2023, value:  540.5 },
          { year: 2024, value:  169.2 },
          { year: 2025, value:  102.7 },
        ],
      },

      // ── ROIIC glissant (1 à 4 ans, base 2025) ─────────────────────────────
      // ROIIC K ans = ∆NOPAT(2025 vs 2025-K) / ∆IC(2024 vs 2024-K)
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 102.7 },
          { year: 2, value: 127.9 },
          { year: 3, value: 150.4 },
          { year: 4, value: 144.9 },
        ],
      },

      // ── PER historique ────────────────────────────────────────────────────
      // PER = Cours fin d'exercice / BPA dilué
      // PER ajusté = PER × (Re_moyenne_5ans / Re_période)
      // Re_moyenne_5ans = 5,19 %
      // Moyenne historique 5 ans : (22,74+28,81+22,09+13,73+14,08)/5 = 20,29x
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 22.74 },
          { year: 2022, value: 28.81 },
          { year: 2023, value: 22.09 },
          { year: 2024, value: 13.73 },
          { year: 2025, value: 14.08 },
        ],
        competitors: [
          {
            name:   'Moyenne historique 5 ans',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 20.29 },
              { year: 2022, value: 20.29 },
              { year: 2023, value: 20.29 },
              { year: 2024, value: 20.29 },
              { year: 2025, value: 20.29 },
            ],
          },
          {
            name:   'PER ajusté taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2021, value: 24.79 },
              { year: 2022, value: 24.76 },
              { year: 2023, value: 23.33 },
              { year: 2024, value: 13.85 },
              { year: 2025, value: 13.31 },
            ],
          },
        ],
      },

      // ── FCF Yield historique ──────────────────────────────────────────────
      // FCF Yield = FCF / EV (EV = Capi car trésorerie nette)
      // Taux sans risque = Bund 10 ans (planché à 2 % pour 2021)
      // Moyenne historique 5 ans : (6,44+3,22+3,89+6,28+6,58)/5 = 5,28 %
      {
        label: 'FCFy',
        name:  'FCF Yield',
        unit:  '%',
        data: [
          { year: 2021, value: 6.44 },
          { year: 2022, value: 3.22 },
          { year: 2023, value: 3.89 },
          { year: 2024, value: 6.28 },
          { year: 2025, value: 6.58 },
        ],
        competitors: [
          {
            name:   'Moyenne historique 5 ans',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 5.28 },
              { year: 2022, value: 5.28 },
              { year: 2023, value: 5.28 },
              { year: 2024, value: 5.28 },
              { year: 2025, value: 5.28 },
            ],
          },
          {
            name:  'Bund 10 ans (planché à 2 %)',
            color: '#52B788',
            data: [
              { year: 2021, value: 2.00 },
              { year: 2022, value: 2.56 },
              { year: 2023, value: 2.03 },
              { year: 2024, value: 2.36 },
              { year: 2025, value: 2.86 },
            ],
          },
        ],
      },

      // ── DSO — Days Sales Outstanding ──────────────────────────────────────
      // (Créances clients / CA) × 365
      // Valeurs élevées et variables : GTT facture sur jalons de construction navale
      // CCC complet non pertinent pour GTT (DIO = travaux en cours non comparables)
      {
        label: 'DSO',
        name:  'Days Sales Outstanding',
        unit:  'J',
        data: [
          { year: 2021, value: 82.1  },
          { year: 2022, value: 140.1 },
          { year: 2023, value: 134.9 },
          { year: 2024, value: 105.8 },
          { year: 2025, value: 86.3  },
        ],
        competitors: [
          {
            name:   'Moyenne historique 5 ans',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 109.8 },
              { year: 2022, value: 109.8 },
              { year: 2023, value: 109.8 },
              { year: 2024, value: 109.8 },
              { year: 2025, value: 109.8 },
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
          { year: 2021, value: 2.39 },
          { year: 2022, value: 1.95 },
          { year: 2023, value: 1.93 },
          { year: 2024, value: 2.04 },
          { year: 2025, value: 2.00 },
        ],
        competitors: [
          {
            name:   'Moyenne historique 5 ans',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 2.06 },
              { year: 2022, value: 2.06 },
              { year: 2023, value: 2.06 },
              { year: 2024, value: 2.06 },
              { year: 2025, value: 2.06 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA ──────────────────────────────────────────────
      // Valeur négative = trésorerie nette (aucune dette financière nette)
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: -1.13 },
          { year: 2022, value: -1.29 },
          { year: 2023, value: -1.14 },
          { year: 2024, value: -0.84 },
          { year: 2025, value: -0.40 },
        ],
        competitors: [
          {
            name:   'Moyenne historique 5 ans',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: -0.96 },
              { year: 2022, value: -0.96 },
              { year: 2023, value: -0.96 },
              { year: 2024, value: -0.96 },
              { year: 2025, value: -0.96 },
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
          { year: 2021, value: 0.76 },
          { year: 2022, value: 0.64 },
          { year: 2023, value: 0.69 },
          { year: 2024, value: 0.79 },
          { year: 2025, value: 0.77 },
        ],
        competitors: [
          {
            name:   'Moyenne historique 5 ans',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 0.73 },
              { year: 2022, value: 0.73 },
              { year: 2023, value: 0.73 },
              { year: 2024, value: 0.73 },
              { year: 2025, value: 0.73 },
            ],
          },
        ],
      },

      // ── Dilution / Concentration (variation YoY du nombre d'actions dilué) ─
      // Variation très faible — GTT pratique peu les rachats et peu de stock-options
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2022, value: -0.10 },
          { year: 2023, value:  0.15 },
          { year: 2024, value:  0.11 },
          { year: 2025, value:  0.11 },
        ],
      },

      // ── Payout Ratio (convention DEU — au titre de l'exercice clos) ─────────
      // 2025 non calculable (dividende 2025 non encore voté en AG juin 2026)
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 85.6 },
          { year: 2022, value: 89.6 },
          { year: 2023, value: 80.3 },
          { year: 2024, value: 79.8 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (4 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2021, value: 83.8 },
              { year: 2022, value: 83.8 },
              { year: 2023, value: 83.8 },
              { year: 2024, value: 83.8 },
            ],
          },
        ],
      },

      // ── Allocation du capital — retour actionnaires vs Capex ──────────────
      // data = dividendes versés en cash (sortie réelle de trésorerie)
      // concurrent1 = rachats d'actions nets (quasi-nuls chez GTT)
      // concurrent2 = capex industriel
      {
        label: 'Capex_Action',
        name:  'Dividendes versés',
        unit:  'M€',
        yMin:  0,
        data: [
          { year: 2021, value: 115.744 },
          { year: 2022, value: 121.783 },
          { year: 2023, value: 125.640 },
          { year: 2024, value: 228.9   },
          { year: 2025, value: 290.2   },
        ],
        competitors: [
          {
            name:  'Rachats d\'actions nets',
            color: '#2D6A4F',
            data: [
              { year: 2021, value: 17.24 },
              { year: 2022, value:  0.00 },
              { year: 2023, value:  0.00 },
              { year: 2024, value:  2.50 },
              { year: 2025, value:  0.00 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2021, value: 16.028 },
              { year: 2022, value: 20.514 },
              { year: 2023, value: 43.124 },
              { year: 2024, value: 61.7   },
              { year: 2025, value: 40.3   },
            ],
          },
        ],
      },

      // ── Carnet de commandes en valeur (M€) ────────────────────────────────
      // Source : section "Informations relatives au carnet de commandes" de chaque DEU
      // Carnet = CA garanti contractuellement sur les exercices suivants
      // Pic en 2024 (1 950 M€) — atterrissage 2025 lié à la fin de l'effet pic de commandes 2022
      {
        label: 'Orderbook',
        name:  'Carnet de commandes',
        unit:  'M€',
        data: [
          { year: 2021, value:  795  },
          { year: 2022, value: 1594  },
          { year: 2023, value: 1815  },
          { year: 2024, value: 1950  },
          { year: 2025, value: 1639  },
        ],
      },

      // ── Commandes annuelles de méthaniers GTT ─────────────────────────────
      // Source : DEU FY2025 — graphique "Commandes de méthaniers GTT de 2016 à 2025"
      // 2022 = pic historique (162 unités) lié aux décisions post-Ukraine et nouveaux projets LNG USA
      // 2025 = 37 unités : retour à la normale après absorption du pic 2022-2024
      {
        label: 'MethanierOrders',
        name:  'Commandes de méthaniers GTT',
        unit:  'navires',
        data: [
          { year: 2016, value:   5 },
          { year: 2017, value:  12 },
          { year: 2018, value:  48 },
          { year: 2019, value:  41 },
          { year: 2020, value:  57 },
          { year: 2021, value:  68 },
          { year: 2022, value: 162 },
          { year: 2023, value:  73 },
          { year: 2024, value:  72 },
          { year: 2025, value:  37 },
        ],
      },

      // ── R&D en proportion du CA ───────────────────────────────────────────
      // Dépenses R&D totales (activées + comptabilisées en charges) / CA
      // Source : section "Moyens dédiés à l'innovation et à la R&D" de chaque DEU
      // R&D absolue : 31,3 M€ (2021), 31,8 M€ (2022), 41,6 M€ (2023), 53,0 M€ (2024), 47,6 M€ (2025)
      {
        label: 'RD_CA',
        name:  'R&D / CA',
        unit:  '%',
        data: [
          { year: 2021, value:  9.9 },
          { year: 2022, value: 10.3 },
          { year: 2023, value:  9.7 },
          { year: 2024, value:  8.3 },
          { year: 2025, value:  5.9 },
        ],
      },

    ],
  },
}