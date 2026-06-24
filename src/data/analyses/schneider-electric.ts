import type { AnalyseCard } from '@/types/analyses'

// -----------------------------------------------------------------------------
// SCHNEIDER ELECTRIC SE - Analyse ponctuelle - FY2025 (snapshot fige) + valo au spot
// Creation : 24/06/2026
//
// DEVISE : EUR pure. Schneider publie ET cote en euros (Euronext Paris, SU.PA,
//   PEA-eligible). Les libelles "Cours ($)" / "treasury.gov" / "Finviz" de l'Excel
//   sont des coquilles heritees de template : toutes les valeurs sont lues en EUR.
//
// SNAPSHOT : structurel FY2025 fige. Cours spot 281,2 € (24/06/2026) vs cloture
//   FY2025 234,9 € = +19,7 % (sous le seuil de re-ancrage ~20 %) : structure FY figee,
//   valorisation, onePager, prixCible et niveaux re-ancres au spot.
//
// ROIC METHODOLOGIE (La These - Cash Adjusted, goodwill inclus, dette plancher 0) :
//   NOPAT = EBIT 6 699 x (1 - 23,54 %) = 5 122 ; IC = CP 24 455 + max(DN 13 246, 0) = 37 701
//   2025 : 13,59 %. Tangible hors goodwill 40,8 % (25 Md€ de goodwill, AVEVA/RIB).
//   Spread ROIC-WACC = +4,75 pts. NB : l'IC 2025 baisse (rachat minoritaires Inde +
//   change USD ont reduit les CP de 31,3 a 24,5 Md€), ce qui flatte mecaniquement le ROIC.
//
// WACC (France, propre) :
//   Rf   = Bund 10 ans 31/12/2025 = 2,86 % (le libelle "treasury.gov" est une coquille)
//   beta = 1,439 : regression SLOPE 61 points mensuels du titre vs CAC 40 GR (colonne
//          "referent CAC40GR" confirmee ; le libelle "Finviz/Bloomberg" est une coquille)
//   ERP  = Damodaran mature 4,23 % + CRP France 0,55 % = 4,78 % (CRP deja inclus)
//   Re   = 2,86 % + 1,439 x 4,78 % = 9,74 % ; Rd ap. IS = 2,65 % x (1 - 23,54 %) = 2,02 %
//   E/V 88,2 %, D/V 11,8 % ; WACC 2025 = 8,83 %.
//   NB : beta 1,44 ELEVE (momentum 2023-2024) -> MoE = 21,6 % et DCF EXPLOITABLE
//        (VT ~76 % de l'EV, pas de neutralisation faible-beta comme TTE/Engie/Coca).
//
// BASE PER : Adjusted EPS PUBLIE = 8,59 € en 2025 (Adj. Net Income 4 829 M€, +13,6 %
//   organique / +3 % publie, l'ecart = vent de change USD). Le BPA dilue publie 7,33 €
//   (-2,7 % YoY) est plombe par 388 M€ de depreciation de la participation Uplight
//   (associe) + 457 M€ d'amortissement PPA. La ligne "EPS ajuste" de l'Excel etant vide,
//   le calculateur a tourne sur 7,33 (faux) : bascule sur 8,59 validee (Regle des chiffres,
//   meme famille que l'underlying Nestle / le RNRpg Engie).
//
// VALO : industriel mature a BPA significatif -> PER dominant sur Adj EPS 8,59 €.
//   PER central 28x, croissance Adj EPS centrale +10 %/an, r=10 % -> zone juste centrale
//   240,5 € ; spot 281,2 € = +17 % de prime (MoS negative). Le DCF (WACC 8,83 %, g 2,5 %)
//   corrobore : central ~150 €, capte par la croissance terminale 2,5 % bornee.
//
// SEGMENTS : Energy Management (82,5 % du CA, Adj EBITA 21,8 %) + Industrial Automation
//   (17,5 %, 14,2 %) + Central Functions (EBITA -709, CA = 0). EM + IA = CA total exact,
//   pas de ligne d'elimination negative en CA -> total.show = false. Colonne 2021 cassee
//   (somme 41 523 != 28 905, nomenclature non comparable) -> segmentBreak, affichage 2022-2025.
//
// EVENEMENTS 2025 : rachat des 35 % de minoritaires de Schneider Electric India a Temasek
//   pour ~5,5 Md€ (pleine propriete, finance par dette -> levier 0,99x -> 1,58x EBITDA) ;
//   bolt-ons Motivair (refroidissement liquide datacenter) + Planon. CEO Olivier Blum
//   (depuis nov. 2024) ; transition CFO : Hilary Maxson partie le 05/04/2026, Nathan Fast
//   CFO depuis le 06/04/2026.
// -----------------------------------------------------------------------------

export const schneiderElectric: AnalyseCard = {
  slug:           'schneider-electric',
  type:           'ponctuelle',
  title:          'Schneider Electric',
  ticker:         'SU.PA',
  secteur:        'Industrie',
  geo:            'France',
  conviction:     'forte',
  positionnement: 'surveillance',
  lastUpdated:    '2026-06-24',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '5 ans',
  excerpt:        "Le numéro un mondial de la gestion de l'énergie et de l'automatisation, devenu le fournisseur d'infrastructure électrique et de refroidissement des datacenters d'IA. Un compounder de qualité (ROIC 13,6 %, marge Adj EBITA 18,7 %, croissance organique +9 % en 2025) qui se paie une prime : sur le bénéfice ajusté publié (8,59 €), le cours intègre déjà la quasi-totalité de la croissance séculaire, avec une marge de sécurité négative.",
  glossaire: [
    'moat',
    'couts-de-changement',
    'roic',
    'per-valorisation',
    'free-cash-flow',
    'wacc',
  ],
  readingTime:    40,
  logo:           '/analyse/schneider.png',
  onePager: {
    thesis:    "L'arsenal électrique de l'IA et de l'électrification. ROIC 13,6 %, marge 18,7 %, datacenter en moteur. Qualité réelle, prime assumée.",
    cours:     281.2,
    coursDate: '2026-06-24',
    devise:    'EUR',
    range52w:  { low: 208.8, high: 293.7 },
  },
  prixCible:      { bas: 304, haut: 471, devise: 'EUR' },
  // Prix cible a l'horizon de la these (5 ans, non actualise), en EUR.
  // Base : Adjusted EPS publie FY2025 8,59 €, croissance centrale +10 %/an -> BPA 2030
  //   13,83 € x PER central 28x = 387 € cible centrale.
  // Fourchette = cible +/- MoE (beta 1,439 x 15 % = 21,6 %) : 304 - 471 €.
  // Cours spot 281,2 € sous la cible centrale mais zone juste centrale r=10 % = 240,5 € : MoS negative.
  marginOfSafety: 'négative',

  // ── Metriques snapshot - structure FY2025, valo au spot (281,2 € / 24/06/2026) ──
  metrics: {
    per:               32.7,   // Spot 281,2 € / Adjusted EPS publie 8,59 €. Sur BPA publie 7,33 : 38,4x ; forward ~24x
    evEbitda:          20.7,   // EV spot 173 675 (capi 160 429 + DN 13 246) / EBITDA 8 404 M€
    fcfYield:           2.7,   // FCF 4 635 / EV spot 173 675
    roic:              13.6,   // NOPAT 5 122 / IC 37 701 - Cash Adjusted (goodwill inclus)
    wacc:               8.83,  // CAPM beta 1,439 - detail en en-tete
    detteEbitda:        1.58,  // DN 13 246 / EBITDA 8 404 (1,6x sur la dette nette publiee incl. IFRS 16)
    croissanceCA3ans:   5.5,   // CAGR CA publie FY2022->FY2025 (+8,9 % organique 2025, FX en frein)
    croissanceBPA3ans:  6.0,   // CAGR BPA publie FY2022->FY2025 (Adj EPS +13,6 % organique en 2025)
    margeEbit:         16.7,   // EBIT 6 699 / CA 40 152 (Adj EBITA 18,7 %)
    margeBrute:        42.1,   // Marge brute 16 895 / CA 40 152
    payoutRatio:       52.6,   // Dividendes verses 2 287 / RN 4 351 (sur FCF : ~49 %)
    currentRatio:       1.19,  // Actif courant 22 038 / Passif courant 18 506
    dso:               89.4,   // (Creances clients 9 836 / CA 40 152) × 365
  },

  tendances: {
    per:       'hausse',
    fcfYield:  'baisse',
    roic:      'hausse',
    margeEbit: 'stable',
  },

  updates: [
    {
      date: '2026-06-24',
      note: "Création de la fiche (analyse ponctuelle). Données FY2025 (résultats publiés le 26/02/2026), Q1-2026 (révélés le 30/04/2026, +11,2 % organique), cible 2026 réaffirmée et objectifs Capital Markets Day 2026-2030. Snapshot structurel FY2025 figé, valorisation ré-ancrée au cours spot (281,2 € au 24/06/2026, +19,7 % depuis la clôture 2025). WACC 8,83 % (bêta 1,439, régression 60 mois vs CAC 40 GR) : DCF exploitable. Valorisation pilotée au PER sur Adjusted EPS publié (8,59 €), DCF en complément. Conviction : forte. Positionnement : surveillance.",
    },
    {
      date: '2026-07-31',
      note: "Résultats S1-2026 attendus. Source : calendrier financier Schneider Electric.",
    },
    {
      date: '2027-02-18',
      note: "Résultats FY2026 attendus (1re année pleine d'Energy Management après les bolt-ons datacenter). Source : calendrier financier Schneider Electric.",
    },
  ],

  chartData: {

    // Nomenclature des segments non comparable en 2021 (l'ancien decoupage gonfle
    // Industrial Automation a 19 344 M€). Serie comparable a partir de 2022.
    segmentBreaks: [
      { year: 2022, label: 'Série segments comparable à partir de 2022 (nomenclature 2021 non comparable)' },
    ],

    // CA total (Md€). Franchit 40 Md€ en 2025 pour la 1re fois.
    revenue: [
      { year: 2021, value: 28.905 },
      { year: 2022, value: 34.176 },
      { year: 2023, value: 35.902 },
      { year: 2024, value: 38.153 },
      { year: 2025, value: 40.152 },
    ],

    // Repartition du CA par zone (FY2025). Amerique du Nord = 1re region, tiree par
    // les USA (34,4 % du groupe) et le capex datacenter. Chine en repli (11,5 %).
    geoRevenue: [
      { region: 'Amérique du Nord', pct: 38.45 },
      { region: 'Asie-Pacifique',   pct: 26.14 },
      { region: 'Europe',           pct: 23.20 },
      { region: 'Reste du monde',   pct: 12.21 },
    ],

    // operating = EBIT (apres amortissement PPA et restructuration) / CA.
    // L'Adjusted EBITA margin (mesure pilotee par le groupe) monte a 18,7 % en 2025.
    marges: [
      { year: 2021, gross: 40.97, operating: 14.98, net: 11.32 },
      { year: 2022, gross: 40.60, operating: 14.43, net: 10.35 },
      { year: 2023, gross: 41.81, operating: 16.53, net: 11.61 },
      { year: 2024, gross: 42.64, operating: 16.90, net: 11.63 },
      { year: 2025, gross: 42.08, operating: 16.68, net: 10.84 },
    ],

    roic: [
      { year: 2021, value:  9.43 },
      { year: 2022, value: 11.26 },
      { year: 2023, value: 12.42 },
      { year: 2024, value: 12.64 },
      { year: 2025, value: 13.59 },
    ],

    // 2021 WACC bas (6,17 %) : Rf Bund negatif (-0,18 %). Spread ROIC-WACC positif
    // chaque annee sauf 2022 (WACC 10,54 %, Rf et ERP plus eleves au creux).
    roicVsWacc: [
      { year: 2021, value:  9.43, wacc:  6.17 },
      { year: 2022, value: 11.26, wacc: 10.54 },
      { year: 2023, value: 12.42, wacc:  8.57 },
      { year: 2024, value: 12.64, wacc:  8.69 },
      { year: 2025, value: 13.59, wacc:  8.83 },
    ],

    // FCF = OCF - capex industriel (corporel + incorporel). Conversion ~100 % du RN.
    fcf: [
      { year: 2021, value: 2.799 },
      { year: 2022, value: 3.330 },
      { year: 2023, value: 4.594 },
      { year: 2024, value: 4.216 },
      { year: 2025, value: 4.635 },
    ],

    // CA par pole (M€). Central Functions (couts centraux + digital) a 0 de CA externe,
    // non affiche. Energy Management = pole dominant (datacenter, basse/moyenne tension) ;
    // Industrial Automation = pole cyclique (destockage, reprise du Discrete en cours).
    segmentRevenue: {
      unit: 'M€',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2022, segments: [
          { name: 'Energy Management',     value: 26442 },
          { name: 'Industrial Automation', value:  7734 },
        ]},
        { year: 2023, segments: [
          { name: 'Energy Management',     value: 28241 },
          { name: 'Industrial Automation', value:  7661 },
        ]},
        { year: 2024, segments: [
          { name: 'Energy Management',     value: 31131 },
          { name: 'Industrial Automation', value:  7022 },
        ]},
        { year: 2025, segments: [
          { name: 'Energy Management',     value: 33130 },
          { name: 'Industrial Automation', value:  7022 },
        ]},
      ],
    },

    // Radars 8 branches, source API Yahoo (base TTM homogene). Pairs : mediane du secteur
    // (electrification + automatisation), ABB (concurrent direct le plus proche), Rockwell
    // Automation (fiche existante /analyses/rockwell-automation), Siemens (industriel
    // diversifie). Alfen exclu (PER N/M). Cellule ROIC de SU = 8,6 % (base Yahoo, vs ROIC
    // La These 13,6 %) et Croissance CA 4,2 % (publiee, FX en frein, vs +8,9 % organique) :
    // signales en NoteAnalyse du MDX.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Schneider Electric vs médiane du secteur (électrification & automatisation)',
        data: [
          { label: 'PER',             valeur: 35.19, secteur: 32.12 },
          { label: 'EV/EBITDA',       valeur: 21.78, secteur: 20.89 },
          { label: 'P/FCF',           valeur: 34.40, secteur: 29.70 },
          { label: 'Marge EBIT %',    valeur: 17.60, secteur: 17.70 },
          { label: 'ROIC %',          valeur:  8.60, secteur:  8.60 },
          { label: 'FCF Yield %',     valeur:  2.90, secteur:  3.40 },
          { label: 'Dette/EBITDA',    valeur:  1.67, secteur:  1.47 },
          { label: 'TCAC CA 3 ans %', valeur:  4.20, secteur: 11.90 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'Valorisation comparée - Schneider Electric vs ABB',
        concurrent1: 'ABB',
        data: [
          { label: 'PER',             valeur: 35.19, concurrent1: 40.27 },
          { label: 'EV/EBITDA',       valeur: 21.78, concurrent1: 22.84 },
          { label: 'P/FCF',           valeur: 34.40, concurrent1: 35.20 },
          { label: 'Marge EBIT %',    valeur: 17.60, concurrent1: 20.60 },
          { label: 'ROIC %',          valeur:  8.60, concurrent1: 14.20 },
          { label: 'FCF Yield %',     valeur:  2.90, concurrent1:  2.80 },
          { label: 'Dette/EBITDA',    valeur:  1.67, concurrent1:  0.63 },
          { label: 'TCAC CA 3 ans %', valeur:  4.20, concurrent1: 18.30 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: 'Valorisation comparée - Schneider Electric vs Rockwell Automation',
        concurrent1: 'Rockwell',
        data: [
          { label: 'PER',             valeur: 35.19, concurrent1: 47.77 },
          { label: 'EV/EBITDA',       valeur: 21.78, concurrent1: 27.66 },
          { label: 'P/FCF',           valeur: 34.40, concurrent1: 37.70 },
          { label: 'Marge EBIT %',    valeur: 17.60, concurrent1: 20.70 },
          { label: 'ROIC %',          valeur:  8.60, concurrent1: 10.90 },
          { label: 'FCF Yield %',     valeur:  2.90, concurrent1:  2.70 },
          { label: 'Dette/EBITDA',    valeur:  1.67, concurrent1:  1.61 },
          { label: 'TCAC CA 3 ans %', valeur:  4.20, concurrent1: 11.90 },
        ],
      },
      {
        id: 'vs_pair3', type: 'radar',
        title: 'Valorisation comparée - Schneider Electric vs Siemens',
        concurrent1: 'Siemens',
        data: [
          { label: 'PER',             valeur: 35.19, concurrent1: 28.10 },
          { label: 'EV/EBITDA',       valeur: 21.78, concurrent1: 22.26 },
          { label: 'P/FCF',           valeur: 34.40, concurrent1: 19.10 },
          { label: 'Marge EBIT %',    valeur: 17.60, concurrent1: 12.70 },
          { label: 'ROIC %',          valeur:  8.60, concurrent1:  4.80 },
          { label: 'FCF Yield %',     valeur:  2.90, concurrent1:  5.20 },
          { label: 'Dette/EBITDA',    valeur:  1.67, concurrent1:  3.51 },
          { label: 'TCAC CA 3 ans %', valeur:  4.20, concurrent1:  0.00 },
        ],
      },
    ],

    metricHistory: [

      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 18.08 },
          { year: 2022, value: 12.41 },
          { year: 2023, value: 15.06 },
          { year: 2024, value: 18.09 },
          { year: 2025, value: 17.52 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 16.23 }, { year: 2022, value: 16.23 },
              { year: 2023, value: 16.23 }, { year: 2024, value: 16.23 },
              { year: 2025, value: 16.23 },
            ],
          },
        ],
      },

      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'Md€',
        yMin:  0,
        data: [
          { year: 2021, value: 3.616 },
          { year: 2022, value: 4.354 },
          { year: 2023, value: 5.907 },
          { year: 2024, value: 5.580 },
          { year: 2025, value: 6.131 },
        ],
        competitors: [
          {
            name: 'Free Cash Flow', color: '#C9A84C',
            data: [
              { year: 2021, value: 2.799 }, { year: 2022, value: 3.330 },
              { year: 2023, value: 4.594 }, { year: 2024, value: 4.216 },
              { year: 2025, value: 4.635 },
            ],
          },
          {
            name: 'Capex industriel', color: '#A8A29E', dashed: true,
            data: [
              { year: 2021, value: 0.817 }, { year: 2022, value: 1.024 },
              { year: 2023, value: 1.313 }, { year: 2024, value: 1.364 },
              { year: 2025, value: 1.496 },
            ],
          },
        ],
      },

      // BPA dilue publie. Le repli 2025 (-2,7 %) vient de la depreciation Uplight (388 M€)
      // et de l'amortissement PPA (457 M€) : l'Adjusted EPS publie (8,59 €) progresse de
      // +13,6 % organique. Voir prose Croissance / Valorisation.
      {
        label: 'EPS',
        name:  'BPA dilué publié',
        unit:  '€',
        data: [
          { year: 2021, value: 5.67 },
          { year: 2022, value: 6.15 },
          { year: 2023, value: 7.07 },
          { year: 2024, value: 7.53 },
          { year: 2025, value: 7.33 },
        ],
      },

      // Dividende au titre de l'exercice (convention DEU). 2025 : 4,20 € proposé (AG 07/05/2026).
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '€',
        data: [
          { year: 2021, value: 2.90 },
          { year: 2022, value: 3.15 },
          { year: 2023, value: 3.50 },
          { year: 2024, value: 3.90 },
          { year: 2025, value: 4.20 },
        ],
      },

      // Carnet de commandes (M€), Energy Management + Industrial Automation. La forte
      // croissance du carnet EM (+20,6 % en 2025) materialise la demande datacenter.
      {
        label: 'Orderbook',
        name:  'Carnet de commandes total',
        unit:  'M€',
        yMin:  0,
        data: [
          { year: 2021, value: 16319 },
          { year: 2022, value: 16490 },
          { year: 2023, value: 19162 },
          { year: 2024, value: 21420 },
          { year: 2025, value: 25362 },
        ],
        competitors: [
          {
            name: 'dont Energy Management', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value:  9088 }, { year: 2022, value: 13156 },
              { year: 2023, value: 15414 }, { year: 2024, value: 17698 },
              { year: 2025, value: 21340 },
            ],
          },
        ],
      },

      // R&D rapportee au CA (~3,4 %). Innovation logicielle (EcoStruxure, AVEVA, ETAP)
      // et electronique de puissance ; un pilier du moat, pas le principal.
      {
        label: 'RD_CA',
        name:  'R&D / CA',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 2.96 },
          { year: 2022, value: 3.04 },
          { year: 2023, value: 3.25 },
          { year: 2024, value: 3.43 },
          { year: 2025, value: 3.40 },
        ],
      },

      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 12.14 },
          { year: 2022, value: 14.76 },
          { year: 2023, value: 15.31 },
          { year: 2024, value: 15.29 },
          { year: 2025, value: 16.97 },
        ],
        competitors: [
          {
            name: 'WACC', color: '#C9A84C',
            data: [
              { year: 2021, value:  6.17 }, { year: 2022, value: 10.54 },
              { year: 2023, value:  8.57 }, { year: 2024, value:  8.69 },
              { year: 2025, value:  8.83 },
            ],
          },
          {
            name: 'ROIC (Cash Adjusted)', color: '#2D6A4F', dashed: true,
            data: [
              { year: 2021, value:  9.43 }, { year: 2022, value: 11.26 },
              { year: 2023, value: 12.42 }, { year: 2024, value: 12.64 },
              { year: 2025, value: 13.59 },
            ],
          },
        ],
      },

      // ROIIC annuel volatil par construction (IC lourd et lumpy). 2023 negatif (delta IC
      // eleve, base 2022 du capex AVEVA). A lire en tendance, pas en niveau.
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel',
        unit:  '%',
        data: [
          { year: 2022, value:   4.3 },
          { year: 2023, value: -32.1 },
          { year: 2024, value:  11.3 },
          { year: 2025, value:   5.9 },
        ],
      },

      // PER FY (cours de cloture / RN publie). PER ajuste taux = PER x (Re moyen 5 ans
      // planche / Re de l'annee). Le creux 2022 (20,9x) coincide avec le point bas du titre.
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 29.75 },
          { year: 2022, value: 20.89 },
          { year: 2023, value: 24.70 },
          { year: 2024, value: 30.88 },
          { year: 2025, value: 30.80 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 27.40 }, { year: 2022, value: 27.40 },
              { year: 2023, value: 27.40 }, { year: 2024, value: 27.40 },
              { year: 2025, value: 27.40 },
            ],
          },
          {
            name: 'PER ajusté taux', color: '#52B788', dashed: true,
            data: [
              { year: 2021, value: 34.05 }, { year: 2022, value: 19.21 },
              { year: 2023, value: 25.72 }, { year: 2024, value: 32.75 },
              { year: 2025, value: 30.94 },
            ],
          },
        ],
      },

      // FCF Yield (EV). Spread comprime vs le Bund a mesure que le titre s'est re-rate.
      {
        label: 'FCFy',
        name:  'FCF Yield (EV)',
        unit:  '%',
        data: [
          { year: 2021, value: 2.68 },
          { year: 2022, value: 4.14 },
          { year: 2023, value: 4.09 },
          { year: 2024, value: 2.91 },
          { year: 2025, value: 3.15 },
        ],
        competitors: [
          {
            name: 'Bund 10 ans (Rf)', color: '#52B788',
            data: [
              { year: 2021, value: -0.18 }, { year: 2022, value: 2.56 },
              { year: 2023, value:  2.03 }, { year: 2024, value: 2.36 },
              { year: 2025, value:  2.86 },
            ],
          },
        ],
      },

      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 86.23 },
          { year: 2022, value: 80.25 },
          { year: 2023, value: 85.28 },
          { year: 2024, value: 89.58 },
          { year: 2025, value: 89.41 },
        ],
        competitors: [
          {
            name: 'Days Inventory Outstanding', color: '#2D6A4F',
            data: [
              { year: 2021, value: 84.95 }, { year: 2022, value: 78.14 },
              { year: 2023, value: 78.96 }, { year: 2024, value: 90.25 },
              { year: 2025, value: 84.25 },
            ],
          },
          {
            name: 'Days Payable Outstanding', color: '#77bd92',
            data: [
              { year: 2021, value: 122.26 }, { year: 2022, value: 112.45 },
              { year: 2023, value: 132.72 }, { year: 2024, value: 148.32 },
              { year: 2025, value: 146.38 },
            ],
          },
          {
            name: 'Cash Conversion Cycle', color: '#C9A84C',
            data: [
              { year: 2021, value: 48.93 }, { year: 2022, value: 45.94 },
              { year: 2023, value: 31.51 }, { year: 2024, value: 31.51 },
              { year: 2025, value: 27.28 },
            ],
          },
        ],
      },

      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.085 },
          { year: 2022, value: 0.872 },
          { year: 2023, value: 1.208 },
          { year: 2024, value: 1.226 },
          { year: 2025, value: 1.191 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 1.116 }, { year: 2022, value: 1.116 },
              { year: 2023, value: 1.116 }, { year: 2024, value: 1.116 },
              { year: 2025, value: 1.116 },
            ],
          },
        ],
      },

      // Dette nette / EBITDA. Saut 2025 (0,99x -> 1,58x) : rachat des minoritaires Inde
      // (~5,5 Md€) finance par dette. Reste tres soutenable (note A/A-).
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 1.23 },
          { year: 2022, value: 1.00 },
          { year: 2023, value: 1.24 },
          { year: 2024, value: 0.99 },
          { year: 2025, value: 1.58 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 1.21 }, { year: 2022, value: 1.21 },
              { year: 2023, value: 1.21 }, { year: 2024, value: 1.21 },
              { year: 2025, value: 1.21 },
            ],
          },
        ],
      },

      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.530 },
          { year: 2022, value: 0.586 },
          { year: 2023, value: 0.610 },
          { year: 2024, value: 0.579 },
          { year: 2025, value: 0.642 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 0.589 }, { year: 2022, value: 0.589 },
              { year: 2023, value: 0.589 }, { year: 2024, value: 0.589 },
              { year: 2025, value: 0.589 },
            ],
          },
        ],
      },

      // Variation du nombre d'actions dilue (%). Legerement dilutif (stock-options >
      // rachats nets) : Schneider rachete peu (priorite croissance + dividende + M&A).
      {
        label: 'Dilution',
        name:  "Variation du nombre d'actions dilué (%)",
        unit:  '%',
        data: [
          { year: 2022, value: 0.08 },
          { year: 2023, value: 0.25 },
          { year: 2024, value: 0.44 },
          { year: 2025, value: 0.25 },
        ],
      },

      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 48.4 },
          { year: 2022, value: 50.2 },
          { year: 2023, value: 44.4 },
          { year: 2024, value: 46.2 },
          { year: 2025, value: 52.6 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 48.4 }, { year: 2022, value: 48.4 },
              { year: 2023, value: 48.4 }, { year: 2024, value: 48.4 },
              { year: 2025, value: 48.4 },
            ],
          },
        ],
      },

      // Retour aux actionnaires (dividendes + rachats) vs Capex industriel. Le retour
      // croit avec le dividende ; les rachats restent modestes (priorite a la croissance).
      {
        label: 'Capex_Action',
        name:  'Retour aux actionnaires',
        unit:  'Md€',
        yMin:  0,
        data: [
          { year: 2021, value: 1.709 },
          { year: 2022, value: 1.837 },
          { year: 2023, value: 2.470 },
          { year: 2024, value: 2.285 },
          { year: 2025, value: 2.532 },
        ],
        competitors: [
          {
            name: "Rachats d'actions", color: '#2D6A4F',
            data: [
              { year: 2021, value: 0.262 }, { year: 2022, value: 0.219 },
              { year: 2023, value: 0.703 }, { year: 2024, value: 0.322 },
              { year: 2025, value: 0.341 },
            ],
          },
          {
            name: 'Capex industriel', color: '#A8A29E', dashed: true,
            data: [
              { year: 2021, value: 0.817 }, { year: 2022, value: 1.024 },
              { year: 2023, value: 1.313 }, { year: 2024, value: 1.364 },
              { year: 2025, value: 1.496 },
            ],
          },
        ],
      },

    ],
  },
}
