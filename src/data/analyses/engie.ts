import type { AnalyseCard } from '@/types/analyses'

// -----------------------------------------------------------------------------
// ENGIE SA - Analyse ponctuelle - FY2025 (snapshot fige) + valo au spot
// Creation : 24/06/2026
//
// DEVISE : EUR pure. Engie publie ET cote en euros (Euronext Paris, ENGI.PA,
//   PEA-eligible). Les libelles "Cours ($)" sont des coquilles heritees de
//   template (miroir Kri Kri) : toutes les valeurs sont lues en EUR.
//
// SNAPSHOT : structurel FY2025 fige. Cours spot 26,96 € (23/06/2026) vs cloture
//   FY2025 22,41 € = +20,3 % : valorisation, onePager, prixCible et niveaux
//   re-ancres au spot (seuil de re-ancrage ~20 %).
//
// ROIC METHODOLOGIE (La These - Cash Adjusted) :
//   NOPAT = EBIT x (1 - T_effectif) ; IC = CP + max(dette nette, 0), goodwill inclus
//   2025 : NOPAT 6 231 / IC 81 288 = 7,66 %. Spread ROIC-WACC = +3,07 pts.
//
// WACC :
//   Rf   = Bund 10 ans 31/12/2025 = 2,86 % (libelle correct)
//   beta = 0,759 : regression SLOPE 60 mois (le libelle "Finviz/Bloomberg" est une coquille)
//   ERP  = Damodaran mature 4,23 % + CRP France 0,55 % = 4,78 % (CRP deja inclus)
//   Re   = 2,86 % + 0,759 x 4,78 % = 6,49 % ; Rd ap. IS = 3,61 % x (1 - 24,85 %) = 2,72 %
//   E/V 49,9 %, D/V 50,1 % (dette brute) ; WACC 2025 = 4,60 %
//   NB : beta 0,76 + WACC 4,60 % + FCF publie negatif (BFR GEMS) -> DCF inexploitable
//        (VT lourde, piege faible-beta). Valo pilotee au PER (BPA recurrent) + SOTP.
//
// FCF (piege GEMS) : OCF 2025 = -1 477 M€ car variation BFR -13 986 (restitution des
//   appels de marge GEMS post-choc 2022). FCF publie 2025 = -8 547 M€ : inexploitable.
//   OCF normalise ex-BFR ~ +12,5 Md€. FCF garde en publie pour le snapshot (doctrine
//   Coca/Lilly), normalise pour la valorisation.
//
// BASE PER : BPA recurrent (resultat net recurrent part du Groupe / action) = 1,95 € en
//   2025 (RNRpg 4,9 Md€), mesure propre publiee par Engie. Le BPA publie 1,51 € est
//   distordu (impairments, MtM, non-recurrents). Accord Pierre (Regle des chiffres).
//
// DETTE : nette IFRS 40,5 Md€ ; nette ECONOMIQUE 45,2 Md€ (Engie, integre 50 %
//   des hybrides perpetuels + financement nucleaire) -> retenue pour EV/SOTP. 3,1x EBITDA.
//
// NUCLEAIRE BELGE : accord 2023 avec l'Etat ; contribution plafonnee a 8,4 Md€, dechets
//   transferes, pas de hausse de provision apres revue CPN. Doel 4 / Tihange 3 (45 %)
//   prolonges a 2035 via co-entreprise 50/50. Risque largement purge.
// -----------------------------------------------------------------------------

export const engie: AnalyseCard = {
  slug:           'engie',
  type:           'ponctuelle',
  title:          'Engie',
  ticker:         'ENGI.PA',
  secteur:        'Énergie',
  geo:            'France',
  conviction:     'moyenne',
  positionnement: 'surveillance',
  lastUpdated:    '2026-06-24',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '5 ans',
  excerpt:        "Le pendant déjà électrique de TotalEnergies : une utility multi-énergies adossée à un socle de réseaux régulés (RAB ~32 Md€) et un rendement de 5 %, dont la décote de conglomérat s'est largement refermée après un parcours de +20 %, alors que les bénéfices récurrents normalisent encore vers le bas depuis le pic du trading d'énergie.",
  glossaire: [
    'rab',
    'odirnane',
    'ppa',
    'wacc',
    'free-cash-flow',
    'dividende',
  ],
  readingTime:    40,
  logo:           '/analyse/engie.png',
  onePager: {
    thesis:    "Le socle de réseaux régulés (RAB ~32 Md€) d'un conglomérat multi-énergies à 5 % de rendement, dont la décote s'est largement refermée.",
    cours:     26.96,
    coursDate: '2026-06-23',
    devise:    'EUR',
    range52w:  { low: 17.20, high: 29.89 },
  },
  prixCible:      { bas: 27, haut: 34, devise: 'EUR' },
  // Prix cible a l'horizon de la these (5 ans, non actualise), en EUR.
  // Base : BPA recurrent FY2025 1,95 €, croissance centrale +3 %/an -> BPA 2030 2,26 €
  //   x PER central 13,5x = 30,5 € cible centrale.
  // Fourchette = cible +/- MoE (beta 0,76 x 15 % = 11,4 %) : 27,0 - 34,0 €.
  // Cours spot 26,96 € sous la cible centrale mais zone juste div-aware ~22,3 € : MoS negative.
  marginOfSafety: 'négative',

  // ── Metriques snapshot - cloture FY2025 (22,41 € / 31/12/2025) ──
  metrics: {
    per:               11.53,  // Capi 54 748 M€ / RN 4 748 M€. Sur BPA recurrent : ~11,2x
    evEbitda:           6.90,  // EV 95 206 M€ / EBITDA 13 807 M€ (FY-end)
    fcfYield:          -8.98,  // FCF -8 547 / EV - DISTORDU par BFR GEMS ; normalise ~ +4 a 5 %
    roic:               7.66,  // NOPAT 6 231 / IC 81 288 - Cash Adjusted
    wacc:               4.60,  // CAPM beta 0,759 - detail en en-tete
    detteEbitda:        2.93,  // DN IFRS 40 458 / EBITDA 13 807. Economique : 3,1x (45,2 Md€)
    croissanceCA3ans:  -8.50,  // CAGR CA FY2022→FY2025 (normalisation des prix de l'energie)
    croissanceBPA3ans: -2.76,  // CAGR BPA recurrent FY2022→FY2025 (reflux du pic GEMS)
    margeEbit:         11.52,  // EBIT 8 291 / CA 71 944
    margeBrute:        31.83,  // Marge brute 22 897 / CA 71 944
    payoutRatio:       69.0,   // Dividende 1,35 € / BPA recurrent 1,95 € (politique 65-75 % RNRpg)
    currentRatio:       1.08,  // Actif courant 58 395 / Passif courant 53 829
    dso:               71.7,   // (Creances clients 14 123 / CA 71 944) × 365
  },

  tendances: {
    per:       'hausse',
    fcfYield:  'baisse',
    roic:      'baisse',
    margeEbit: 'baisse',
  },

  updates: [
    {
      date: '2026-06-24',
      note: "Création de la fiche (analyse ponctuelle). Données FY2025 (résultats publiés le 25/02/2026) et perspectives CMD 2026-2028. Snapshot structurel FY2025 figé, valorisation ré-ancrée au cours spot (26,96 € au 23/06/2026, +20,3 % depuis la clôture 2025). WACC 4,60 % (bêta 0,759, régression 60 mois), qui neutralise le DCF. Valorisation pilotée au PER sur BPA récurrent (1,95 €) et somme des parties. Conviction : moyenne. Positionnement : surveillance.",
    },
    {
      date: '2026-07-31',
      note: "Résultats S1-2026 attendus. Source : calendrier financier Engie.",
    },
    {
      date: '2027-02-26',
      note: "Résultats FY2026 attendus (1re année incluant UKPN sur un semestre). Source : calendrier financier Engie.",
    },
  ],

  chartData: {

    // Reporting restructure en 2025 (4 poles + Nucleaire + Autres) : seuls 2024-2025
    // sont comparables sur cette nomenclature.
    segmentBreaks: [
      { year: 2025, label: 'Nouvelle structure 2025 (4 pôles) : série comparable 2024-2025' },
    ],

    revenue: [
      { year: 2021, value: 57.866 },
      { year: 2022, value: 93.865 },
      { year: 2023, value: 82.565 },
      { year: 2024, value: 73.812 },
      { year: 2025, value: 71.944 },
    ],

    // Repartition du CA externe par zone (FY2025, Databook "by geography").
    // AMEA (Asie / Moyen-Orient / Afrique, 5,2 %) + Others (1,4 %) regroupes en Reste du monde.
    geoRevenue: [
      { region: 'France',           pct: 41.2 },
      { region: 'Europe',           pct: 38.0 },
      { region: 'Amérique du Nord', pct:  7.8 },
      { region: 'Amérique Latine',  pct:  6.3 },
      { region: 'Reste du monde',   pct:  6.7 },
    ],

    // CA par pole (M€, Databook FY2024-FY2025). Supply & Energy Management = surtout
    // negoce de gros (chiffre eleve, faible valeur ajoutee) : la valeur est dans l'EBIT
    // des Reseaux et des Renouvelables, pas dans le CA du negoce.
    segmentRevenue: {
      unit: 'M€',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2024, segments: [
          { name: 'Supply & Energy Management',         value: 44717 },
          { name: 'Renouvelables & Flex Power',         value: 10398 },
          { name: 'Infrastructures énergétiques locales', value: 8900 },
          { name: 'Réseaux régulés',                    value:  7236 },
          { name: 'Autres',                             value:  2492 },
          { name: 'Nucléaire belge',                    value:    68 },
        ]},
        { year: 2025, segments: [
          { name: 'Supply & Energy Management',         value: 42495 },
          { name: 'Renouvelables & Flex Power',         value:  9860 },
          { name: 'Infrastructures énergétiques locales', value: 8831 },
          { name: 'Réseaux régulés',                    value:  7992 },
          { name: 'Autres',                             value:  2226 },
          { name: 'Nucléaire belge',                    value:   539 },
        ]},
      ],
    },

    // operating = EBIT / CA. 2022 : creux de marge (choc energetique, MtM negatif).
    marges: [
      { year: 2021, gross: 32.84, operating: 11.62, net:  6.35 },
      { year: 2022, gross: 20.59, operating:  1.20, net: -1.91 },
      { year: 2023, gross: 30.97, operating:  7.39, net:  3.52 },
      { year: 2024, gross: 32.99, operating: 12.24, net:  6.74 },
      { year: 2025, gross: 31.83, operating: 11.52, net:  6.60 },
    ],

    roic: [
      { year: 2021, value: 6.00 },
      { year: 2022, value: 1.82 },
      { year: 2023, value: 6.77 },
      { year: 2024, value: 8.09 },
      { year: 2025, value: 7.66 },
    ],

    // 2021 WACC bas (2,15 %) : Rf Bund negatif. Spread ROIC-WACC positif sauf 2022 (creux).
    roicVsWacc: [
      { year: 2021, value: 6.00, wacc: 2.15 },
      { year: 2022, value: 1.82, wacc: 4.83 },
      { year: 2023, value: 6.77, wacc: 4.10 },
      { year: 2024, value: 8.09, wacc: 4.13 },
      { year: 2025, value: 7.66, wacc: 4.60 },
    ],

    // FCF publie = OCF - investissements corporels et incorporels. 2025 negatif (BFR GEMS).
    fcf: [
      { year: 2021, value:  1.411 },
      { year: 2022, value:  2.380 },
      { year: 2023, value:  5.911 },
      { year: 2024, value:  3.835 },
      { year: 2025, value: -8.547 },
    ],

    // Radars 8 branches, source API Yahoo (base TTM
    // homogene). Pairs retenus : Iberdrola, Enel, E.ON (RWE et Orsted ecartes : aberrants
    // / PER N/M). Cellules Engie distordues par l'annee BFR (P/FCF N/M, FCF Yield -12,8 %)
    // remplacees par des valeurs normalisees La These ; signale en NoteAnalyse du MDX.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Engie vs médiane du secteur (utilities européennes)',
        data: [
          { label: 'PER',             valeur: 17.85, secteur: 17.13 },
          { label: 'EV/EBITDA',       valeur:  8.75, secteur:  9.22 },
          { label: 'P/FCF',           valeur: 12.20, secteur: 15.20 },
          { label: 'Marge EBIT %',    valeur: 10.50, secteur: 20.05 },
          { label: 'ROIC %',          valeur:  7.90, secteur:  6.35 },
          { label: 'FCF Yield %',     valeur:  4.50, secteur:  6.60 },
          { label: 'Dette/EBITDA',    valeur:  3.08, secteur:  2.47 },
          { label: 'TCAC CA 3 ans %', valeur: -6.60, secteur:  3.40 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'Valorisation comparée - Engie vs Iberdrola',
        concurrent1: 'Iberdrola',
        data: [
          { label: 'PER',             valeur: 17.85, concurrent1: 26.48 },
          { label: 'EV/EBITDA',       valeur:  8.75, concurrent1: 15.16 },
          { label: 'P/FCF',           valeur: 12.20, concurrent1: 42.10 },
          { label: 'Marge EBIT %',    valeur: 10.50, concurrent1: 21.60 },
          { label: 'ROIC %',          valeur:  7.90, concurrent1:  7.60 },
          { label: 'FCF Yield %',     valeur:  4.50, concurrent1:  2.40 },
          { label: 'Dette/EBITDA',    valeur:  3.08, concurrent1:  3.84 },
          { label: 'TCAC CA 3 ans %', valeur: -6.60, concurrent1: -4.50 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: 'Valorisation comparée - Engie vs Enel',
        concurrent1: 'Enel',
        data: [
          { label: 'PER',             valeur: 17.85, concurrent1: 26.05 },
          { label: 'EV/EBITDA',       valeur:  8.75, concurrent1:  8.98 },
          { label: 'P/FCF',           valeur: 12.20, concurrent1: 22.90 },
          { label: 'Marge EBIT %',    valeur: 10.50, concurrent1: 19.30 },
          { label: 'ROIC %',          valeur:  7.90, concurrent1:  2.20 },
          { label: 'FCF Yield %',     valeur:  4.50, concurrent1:  4.40 },
          { label: 'Dette/EBITDA',    valeur:  3.08, concurrent1:  3.12 },
          { label: 'TCAC CA 3 ans %', valeur: -6.60, concurrent1: -6.70 },
        ],
      },
      {
        id: 'vs_pair3', type: 'radar',
        title: 'Valorisation comparée - Engie vs E.ON',
        concurrent1: 'E.ON',
        data: [
          { label: 'PER',             valeur: 17.85, concurrent1: 13.60 },
          { label: 'EV/EBITDA',       valeur:  8.75, concurrent1:  9.46 },
          { label: 'P/FCF',           valeur: 12.20, concurrent1:  0 },
          { label: 'Marge EBIT %',    valeur: 10.50, concurrent1: 17.90 },
          { label: 'ROIC %',          valeur:  7.90, concurrent1: 13.80 },
          { label: 'FCF Yield %',     valeur:  4.50, concurrent1:  0 },
          { label: 'Dette/EBITDA',    valeur:  3.08, concurrent1:  0 },
          { label: 'TCAC CA 3 ans %', valeur: -6.60, concurrent1: -13.40 },
        ],
      },
    ],

    metricHistory: [

      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 5.33 },
          { year: 2022, value: 6.17 },
          { year: 2023, value: 3.97 },
          { year: 2024, value: 4.86 },
          { year: 2025, value: 6.90 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 5.45 }, { year: 2022, value: 5.45 },
              { year: 2023, value: 5.45 }, { year: 2024, value: 5.45 },
              { year: 2025, value: 5.45 },
            ],
          },
        ],
      },

      // OCF et FCF 2025 negatifs : restitution des appels de marge GEMS (BFR -13 986 M€).
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'Md€',
        data: [
          { year: 2021, value:  7.31 },
          { year: 2022, value:  8.59 },
          { year: 2023, value: 13.12 },
          { year: 2024, value: 13.15 },
          { year: 2025, value: -1.48 },
        ],
        competitors: [
          {
            name: 'Free Cash Flow', color: '#C9A84C',
            data: [
              { year: 2021, value:  1.41 }, { year: 2022, value:  2.38 },
              { year: 2023, value:  5.91 }, { year: 2024, value:  3.84 },
              { year: 2025, value: -8.55 },
            ],
          },
          {
            name: 'Capex industriel', color: '#A8A29E', dashed: true,
            data: [
              { year: 2021, value: 5.99 }, { year: 2022, value: 6.38 },
              { year: 2023, value: 7.33 }, { year: 2024, value: 9.39 },
              { year: 2025, value: 7.27 },
            ],
          },
        ],
      },

      // BPA publie (volatil : 2022 quasi nul, impairments) vs BPA recurrent (base propre).
      {
        label: 'EPS',
        name:  'BPA dilué publié',
        unit:  '€',
        data: [
          { year: 2021, value: 1.43 },
          { year: 2022, value: 0.06 },
          { year: 2023, value: 0.87 },
          { year: 2024, value: 1.65 },
          { year: 2025, value: 1.51 },
        ],
        competitors: [
          {
            name: 'BPA récurrent', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 1.25 }, { year: 2022, value: 2.12 },
              { year: 2023, value: 2.17 }, { year: 2024, value: 2.24 },
              { year: 2025, value: 1.95 },
            ],
          },
        ],
      },

      // Dividende au titre de l'exercice (convention DEU). 2025 : 1,35 € proposé.
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '€',
        data: [
          { year: 2021, value: 0.85 },
          { year: 2022, value: 1.40 },
          { year: 2023, value: 1.43 },
          { year: 2024, value: 1.48 },
          { year: 2025, value: 1.35 },
        ],
      },

      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 9.27 },
          { year: 2022, value: 1.67 },
          { year: 2023, value: 8.27 },
          { year: 2024, value: 10.70 },
          { year: 2025, value: 9.85 },
        ],
        competitors: [
          {
            name: 'WACC', color: '#C9A84C',
            data: [
              { year: 2021, value: 2.15 }, { year: 2022, value: 4.83 },
              { year: 2023, value: 4.10 }, { year: 2024, value: 4.13 },
              { year: 2025, value: 4.60 },
            ],
          },
          {
            name: 'ROIC (Cash Adjusted)', color: '#2D6A4F', dashed: true,
            data: [
              { year: 2021, value: 6.00 }, { year: 2022, value: 1.82 },
              { year: 2023, value: 6.77 }, { year: 2024, value: 8.09 },
              { year: 2025, value: 7.66 },
            ],
          },
        ],
      },

      // ROIIC volatil par construction (IC lourd et lumpy d'une utility). 2024 aberrant
      // (delta IC faible). A lire en tendance, pas en niveau.
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel',
        unit:  '%',
        data: [
          { year: 2022, value: -19.8 },
          { year: 2023, value: -27.9 },
          { year: 2024, value: 100.0 },
          { year: 2025, value:  -0.2 },
        ],
      },

      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value:  8.27 },
          { year: 2023, value: 12.83 },
          { year: 2024, value:  7.50 },
          { year: 2025, value: 11.53 },
        ],
        competitors: [
          {
            name: 'Moyenne PER ajusté (hors 2022)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 10.36 }, { year: 2023, value: 10.36 },
              { year: 2024, value: 10.36 }, { year: 2025, value: 10.36 },
            ],
          },
          {
            name: 'PER ajusté multiplicatif', color: '#52B788', dashed: true,
            data: [
              { year: 2021, value:  9.36 }, { year: 2023, value: 13.17 },
              { year: 2024, value:  7.83 }, { year: 2025, value: 11.08 },
            ],
          },
        ],
      },

      // FCF Yield (EV). 2025 negatif (BFR GEMS). Rf = Bund 10 ans.
      {
        label: 'FCFy',
        name:  'FCF Yield (EV)',
        unit:  '%',
        data: [
          { year: 2021, value:  2.17 },
          { year: 2022, value:  4.20 },
          { year: 2023, value:  8.69 },
          { year: 2024, value:  5.25 },
          { year: 2025, value: -8.98 },
        ],
        competitors: [
          {
            name: 'Bund 10 ans (Rf)', color: '#52B788',
            data: [
              { year: 2021, value: 2.00 }, { year: 2022, value: 2.57 },
              { year: 2023, value: 2.03 }, { year: 2024, value: 2.36 },
              { year: 2025, value: 2.86 },
            ],
          },
        ],
      },

      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.136 },
          { year: 2022, value: 1.109 },
          { year: 2023, value: 0.995 },
          { year: 2024, value: 1.089 },
          { year: 2025, value: 1.085 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 1.083 }, { year: 2022, value: 1.083 },
              { year: 2023, value: 1.083 }, { year: 2024, value: 1.083 },
              { year: 2025, value: 1.083 },
            ],
          },
        ],
      },

      // Dette nette IFRS / EBITDA. Convention economique Engie : 3,1x (45,2 Md€).
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 2.84 },
          { year: 2022, value: 2.77 },
          { year: 2023, value: 1.80 },
          { year: 2024, value: 2.38 },
          { year: 2025, value: 2.93 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 2.54 }, { year: 2022, value: 2.54 },
              { year: 2023, value: 2.54 }, { year: 2024, value: 2.54 },
              { year: 2025, value: 2.54 },
            ],
          },
        ],
      },

      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.257 },
          { year: 2022, value: 0.399 },
          { year: 2023, value: 0.424 },
          { year: 2024, value: 0.389 },
          { year: 2025, value: 0.425 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 0.379 }, { year: 2022, value: 0.379 },
              { year: 2023, value: 0.379 }, { year: 2024, value: 0.379 },
              { year: 2025, value: 0.379 },
            ],
          },
        ],
      },

      // Variation du nombre d'actions dilue (%). Quasi stable ; l'ABB UKPN diluera 2026.
      {
        label: 'Dilution',
        name:  "Variation du nombre d'actions dilué (%)",
        unit:  '%',
        data: [
          { year: 2022, value: -0.45 },
          { year: 2023, value:  0.54 },
          { year: 2024, value:  0.12 },
          { year: 2025, value:  0.29 },
        ],
      },

      // Payout sur BPA recurrent (politique Engie 65-75 % du RNRpg, plancher 1,10 €).
      {
        label: 'Payout',
        name:  'Payout Ratio (sur BPA récurrent)',
        unit:  '%',
        data: [
          { year: 2021, value: 68.0 },
          { year: 2022, value: 66.0 },
          { year: 2023, value: 66.0 },
          { year: 2024, value: 66.0 },
          { year: 2025, value: 69.0 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 67.0 }, { year: 2022, value: 67.0 },
              { year: 2023, value: 67.0 }, { year: 2024, value: 67.0 },
              { year: 2025, value: 67.0 },
            ],
          },
        ],
      },

      // Dividendes verses (les rachats d'actions sont negligeables) vs Capex industriel.
      {
        label: 'Capex_Action',
        name:  'Dividendes versés',
        unit:  'Md€',
        yMin:  0,
        data: [
          { year: 2021, value: 1.86 },
          { year: 2022, value: 2.67 },
          { year: 2023, value: 4.07 },
          { year: 2024, value: 4.15 },
          { year: 2025, value: 4.53 },
        ],
        competitors: [
          {
            name: 'Capex industriel', color: '#A8A29E', dashed: true,
            data: [
              { year: 2021, value: 5.99 }, { year: 2022, value: 6.38 },
              { year: 2023, value: 7.33 }, { year: 2024, value: 9.39 },
              { year: 2025, value: 7.27 },
            ],
          },
        ],
      },

    ],
  },
}
