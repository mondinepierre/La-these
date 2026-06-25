import type { AnalyseCard } from '@/types/analyses'

// -----------------------------------------------------------------------------
// IBERDROLA SA - Analyse ponctuelle - FY2025 (snapshot operationnel fige) + valo au spot
// Creation : 25/06/2026
//
// DEVISE : EUR pure. Iberdrola publie ET cote en euros (Bolsa de Madrid, IBE / IBE.MC,
//   IBEX 35, PEA-eligible). Les libelles "Cours ($)", "bund 10Y", "CAC40GR" et "Finviz"
//   de l'Excel sont des coquilles heritees de template (miroir Engie / Kri Kri) :
//   toutes les valeurs sont lues en EUR.
//
// SNAPSHOT : structurel FY2025 fige (ROIC, marges, bilan, segments). Cours spot 21,61 €
//   (juin 2026, PLUS-HAUT HISTORIQUE) vs cloture FY2025 18,26 € = +18,3 % (sous le seuil
//   de re-ancrage ~20 %) : les ratios de marche du snapshot, l'onePager, le prixCible et
//   les niveaux sont neanmoins lus au SPOT, la fiche portant precisement sur la cherte au
//   plus-haut. 52 sem. : 15,10 - 21,61 € (intraday). +41 % depuis le creux de juillet 2025.
//
// DETTE (bug Excel corrige par Pierre) : la dette nette n'etait correctement mappee que
//   pour FY2025 ; la serie 2021-2024 a ete reconstruite. Convention retenue (La These,
//   hors IFRS 16) : dette FINANCIERE nette = emprunts bancaires & obligataires - tresorerie.
//   FY2025 = 50,2 Md€ (= chiffre communique par le groupe), ND/EBITDA ~3,2x. La definition
//   large de l'onglet (55,7 Md€) ajoute leases 2,6 + derives 2,0 ; elle approche la dette
//   ECONOMIQUE (~55-56 Md€, +50 % des hybrides perpetuels ~7 Md€, equity credit), retenue
//   pour l'EV/SOTP. Series du graphe sur base financiere propre.
//
// ROIC (La These - Cash Adjusted) : NOPAT = EBIT x (1 - T) ; IC = CP + max(dette nette, 0),
//   goodwill inclus. 2025 : NOPAT 7 742 / IC 113 839 = 6,80 %. WACC 5,74 % -> spread
//   ROIC-WACC = +1,06 pt SEULEMENT. Iberdrola n'est PAS un compounder a fort ROIC : c'est
//   un grossiste de capital REGULE a faible spread, dont la valeur tient au VOLUME de la
//   base d'actifs regulee (RAB) et a sa stabilite, pas a la rentabilite par euro.
//
// WACC : Rf = Bund 10 ans 2,86 % (label "bund" ; convention EU hors France theorique = bono
//   espagnol, ecart faible, DCF de toute facon neutralise) ; beta = 0,682 (regression
//   SLOPE 61 mois) ; ERP = Damodaran mature 4,23 % + CRP Espagne ~1,30 % = 5,53 % (CRP deja
//   inclus). Re = 6,64 % ; Rd ap. IS 3,54 %. E/V 71 %, D/V 29 %. WACC 2025 = 5,74 %.
//   beta 0,68 + WACC 5,7 % + FCF de base distordu -> DCF inexploitable (VT explosive,
//   piege faible-beta, famille Engie/TTE/Coca/Nestle). Valo pilotee au PER + SOTP.
//
// FCF (utility de croissance) : FCF publie 2025 = 1 677 M€ (marge 3,8 %), STRUCTURELLEMENT
//   faible car le groupe reinvestit dans la RAB (capex 9,96 Md€ ~ 86 % de l'OCF). Ce n'est
//   pas un one-off (≠ Lilly) : un grossiste de capital regule a un FCF bas par construction.
//   Le DCF sur FCF n'a donc pas de sens -> PER (BPA), SOTP (RAB + multiples) et rendement.
//
// BASE PER : BPA dilue publie 0,843 € (apres coupons hybrides). L'ecart publie/recurrent est
//   minime (resultat net publie 6 285 M€ vs ajuste 6 231 M€, ~1 %), donc pas de pont
//   necessaire (≠ Engie/Nestle). PER central retenu 16,3x = (PER ajuste hist. 15,1x +
//   mediane pairs 17,5x) / 2.
//
// GUIDANCE (l'onglet Excel etait vide, mais le groupe guide) : resultat net ajuste FY2026
//   >+8 % (releve au Q1-2026 vs >6 600 M€ initial) ; cible 2028 >7 600 M€ (~+7 % CAGR
//   2025-28) ; RAB en croissance double-digit ; ~100 % de la production 2026 deja vendue,
//   >80 % 2027. Croissance BPA scenarios : bear +4 % / central +7 % (= CAGR du plan) /
//   bull +9 % (= releve 2026).
//
// CONCLUSION VALO : belle utility de croissance verte, visibilite rare (A-rated, RAB +12 %),
//   mais PRIME PLEINE sur ses plus-hauts. PER spot ~25,6x (fwd ~20x vs mediane secteur ~16x) ;
//   prix cible central 5 ans (19,3 €) SOUS le spot a multiple normalise ; SOTP statique ~15-17 €
//   -> ~25-35 % de prime aujourd'hui. Pas de decote : la croissance verte est deja dans le prix.
//   marginOfSafety negative, positionnement surveillance (non detenue), conviction forte.
// -----------------------------------------------------------------------------

export const iberdrola: AnalyseCard = {
  slug:           'iberdrola',
  type:           'ponctuelle',
  title:          'Iberdrola',
  ticker:         'IBE.MC',
  secteur:        'Énergie',
  geo:            'Europe',
  conviction:     'forte',
  positionnement: 'surveillance',
  lastUpdated:    '2026-06-25',
  statut:         'actif',
  portefeuille:   'PEA',
  horizon:        '5 ans',
  excerpt:        "Le leader mondial des réseaux électriques régulés (base d'actifs régulée de 51 Md€, +12 %) et de l'éolien, devenu la major verte chérie du marché : une utility de croissance à la visibilité rare (production vendue, pays A-rated), mais pleinement valorisée sur son plus-haut historique, où la croissance verte est déjà dans le prix et le spread de rentabilité reste mince.",
  glossaire: [
    'rab',
    'ppa',
    'wacc',
    'free-cash-flow',
    'dividende',
    'equity-credit',
  ],
  readingTime:    40,
  logo:           '/analyse/iberdrola.png',
  onePager: {
    thesis:    "Le leader mondial des réseaux régulés (RAB 51 Md€) et de l'éolien, pleinement valorisé sur ses plus-hauts : la croissance verte déjà dans le prix.",
    cours:     21.61,
    coursDate: '2026-06-01',
    devise:    'EUR',
    range52w:  { low: 15.10, high: 21.61 },
  },
  prixCible:      { bas: 17, haut: 21, devise: 'EUR' },
  // Prix cible a l'horizon de la these (5 ans, non actualise), en EUR.
  // Base : BPA dilue FY2025 0,843 €, croissance centrale +7 %/an (= CAGR du plan 2025-2028)
  //   -> BPA 2030 1,18 € x PER central 16,3x = 19,3 € cible centrale.
  // Fourchette = cible +/- MoE (beta 0,682 x 15 % = 10,2 %) : 17 - 21 €.
  // NB : la cible centrale (19,3 €) est SOUS le spot (21,61 €) -> a multiple normalise,
  //   5 ans de croissance du BPA ne rejoignent pas le cours d'aujourd'hui. MoS negative.
  marginOfSafety: 'négative',

  // ── Metriques snapshot - ratios de marche au SPOT (21,61 €), operationnels FY2025 ──
  metrics: {
    per:               25.6,   // Spot 21,61 € / BPA dilue 0,843 €. Forward ~20x. Cloture FY2025 : ~21,7x
    evEbitda:          12.5,   // EV spot (capi 145 778 + dette nette 50 200) / EBITDA 15 684
    fcfYield:           1.15,  // FCF 1 677 / capi spot 145 778 - STRUCTURELLEMENT bas (capex RAB)
    roic:               6.80,  // NOPAT 7 742 / IC 113 839 - Cash Adjusted (FY2025)
    wacc:               5.74,  // CAPM beta 0,682 - detail en en-tete
    detteEbitda:        3.20,  // DN financiere 50 200 / EBITDA ajuste 15 684. Economique : ~3,5x
    croissanceCA3ans:  -6.50,  // CAGR CA FY2022-FY2025 (normalisation des prix de l'energie)
    croissanceBPA3ans:  8.80,  // CAGR BPA dilue FY2022-FY2025 (serie propre, sans annee de creux)
    margeEbit:         22.13,  // EBIT 9 755 / CA 44 076
    margeBrute:        54.56,  // Marge brute 24 048 / CA 44 076
    payoutRatio:       73.0,   // Dividende 0,68 € au titre 2025 / resultat net (politique 65-75 %)
    currentRatio:       0.87,  // Actif courant 24 781 / Passif courant 28 343 (< 1, normal utility)
    dso:               85.2,   // (Creances clients 10 284 / CA 44 076) × 365
  },

  tendances: {
    per:       'hausse',
    fcfYield:  'baisse',
    roic:      'hausse',
    margeEbit: 'hausse',
  },

  updates: [
    {
      date: '2026-06-25',
      note: "Création de la fiche (analyse ponctuelle). Données FY2025 (résultats publiés le 25/02/2026), Q1-2026 (29/04/2026) et guidance 2026-2028. Snapshot structurel FY2025 figé, valorisation ré-ancrée au cours spot (21,61 € en juin 2026, plus-haut historique, +18,3 % depuis la clôture 2025). WACC 5,74 % (bêta 0,682) qui neutralise le DCF. Valorisation pilotée au PER sur BPA dilué (0,843 €) et somme des parties. Conviction : forte. Positionnement : surveillance (non détenue).",
    },
    {
      date: '2026-07-23',
      note: "Résultats S1-2026 attendus. Source : calendrier financier Iberdrola.",
    },
    {
      date: '2027-02-25',
      note: "Résultats FY2026 attendus. Source : calendrier financier Iberdrola.",
    },
  ],

  chartData: {

    revenue: [
      { year: 2021, value: 39.114 },
      { year: 2022, value: 53.949 },
      { year: 2023, value: 49.335 },
      { year: 2024, value: 44.739 },
      { year: 2025, value: 44.076 },
    ],

    // Repartition du CA externe par zone (FY2025, par pays). IEI (Iberdrola Energia
    // Internacional : renouvelables Europe continentale + Australie) regroupe en Reste du monde.
    geoRevenue: [
      { region: 'Espagne',        pct: 36.2 },
      { region: 'Brésil',         pct: 19.9 },
      { region: 'États-Unis',     pct: 18.7 },
      { region: 'Royaume-Uni',    pct: 16.2 },
      { region: 'Reste du monde', pct:  5.9 },
      { region: 'Mexique',        pct:  3.0 },
    ],

    // CA par pole (M€). "Production et clients" (commercialisation + thermique) porte un CA
    // eleve a faible valeur ajoutee : la valeur est dans l'EBIT des Reseaux (54 % de l'EBIT
    // groupe 2025) et des Renouvelables, pas dans le CA de la commercialisation. La ligne
    // "Corporate et ajustements" est l'elimination intersegment (negative) : total.show true.
    segmentRevenue: {
      unit: 'M€',
      total: { show: true, label: 'CA consolidé' },
      data: [
        { year: 2021, segments: [
          { name: 'Réseaux',                 value: 14887 },
          { name: 'Renouvelables',           value:  8969 },
          { name: 'Production et clients',   value: 23764 },
          { name: 'Corporate et ajustements', value: -8506 },
        ]},
        { year: 2022, segments: [
          { name: 'Réseaux',                 value: 18355 },
          { name: 'Renouvelables',           value: 10322 },
          { name: 'Production et clients',   value: 34939 },
          { name: 'Corporate et ajustements', value: -9667 },
        ]},
        { year: 2023, segments: [
          { name: 'Réseaux',                 value: 18363 },
          { name: 'Renouvelables',           value:  9281 },
          { name: 'Production et clients',   value: 30087 },
          { name: 'Corporate et ajustements', value: -8396 },
        ]},
        { year: 2024, segments: [
          { name: 'Réseaux',                 value: 18884 },
          { name: 'Renouvelables',           value: 10055 },
          { name: 'Production et clients',   value: 23547 },
          { name: 'Corporate et ajustements', value: -7747 },
        ]},
        { year: 2025, segments: [
          { name: 'Réseaux',                 value: 20921 },
          { name: 'Renouvelables',           value: 10315 },
          { name: 'Production et clients',   value: 22127 },
          { name: 'Corporate et ajustements', value: -7816 },
        ]},
      ],
    },

    // operating = EBIT / CA. Marge en expansion (mix vers les reseaux regules + efficacite).
    marges: [
      { year: 2021, gross: 43.62, operating: 18.77, net:  9.93 },
      { year: 2022, gross: 37.44, operating: 14.80, net:  8.04 },
      { year: 2023, gross: 47.23, operating: 18.19, net:  9.74 },
      { year: 2024, gross: 53.37, operating: 21.75, net: 12.54 },
      { year: 2025, gross: 54.56, operating: 22.13, net: 14.26 },
    ],

    roic: [
      { year: 2021, value: 5.48 },
      { year: 2022, value: 6.50 },
      { year: 2023, value: 6.55 },
      { year: 2024, value: 6.42 },
      { year: 2025, value: 6.80 },
    ],

    // Spread ROIC-WACC structurellement MINCE (~+1 a +2,5 pts) : signature d'un grossiste de
    // capital regule. 2021 WACC bas (2,94 %) : Rf Bund encore tres faible.
    roicVsWacc: [
      { year: 2021, value: 5.48, wacc: 2.94 },
      { year: 2022, value: 6.50, wacc: 5.66 },
      { year: 2023, value: 6.55, wacc: 5.09 },
      { year: 2024, value: 6.42, wacc: 5.06 },
      { year: 2025, value: 6.80, wacc: 5.74 },
    ],

    // FCF publie = OCF - capex (corporel + incorporel). Bas et en repli : capex de croissance
    // RAB (9,96 Md€ en 2025). Structurel pour une utility de croissance, pas un one-off.
    fcf: [
      { year: 2021, value: 0.457 },
      { year: 2022, value: 2.630 },
      { year: 2023, value: 3.229 },
      { year: 2024, value: 2.285 },
      { year: 2025, value: 1.677 },
    ],

    // Radars 8 branches, source API Yahoo (base TTM homogene). Pairs directs : Enel, Engie
    // (fiche La These), NextEra (le miroir reseaux + renouvelables US). Secteur = mediane du
    // panel utilities europeennes/US. NB : le secteur entier a un FCF Yield et une croissance
    // CA negatifs (super-cycle de capex + normalisation des prix de l'energie) ; les valeurs
    // negatives sont ramenees au centre par le clamp [0,2] du composant. Signale en NoteAnalyse.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Iberdrola vs médiane du secteur (utilities)',
        data: [
          { label: 'PER',             valeur: 26.82, secteur: 17.50 },
          { label: 'EV/EBITDA',       valeur: 15.14, secteur: 10.60 },
          { label: 'P/FCF',           valeur: 42.60, secteur: 25.00 },
          { label: 'Marge EBIT %',    valeur: 21.60, secteur: 20.10 },
          { label: 'ROIC %',          valeur:  7.60, secteur:  5.30 },
          { label: 'FCF Yield %',     valeur:  2.30, secteur: -3.00 },
          { label: 'Dette/EBITDA',    valeur:  3.84, secteur:  3.20 },
          { label: 'TCAC CA 3 ans %', valeur: -4.50, secteur: -3.00 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'Valorisation comparée - Iberdrola vs Enel',
        concurrent1: 'Enel',
        data: [
          { label: 'PER',             valeur: 26.82, concurrent1: 26.48 },
          { label: 'EV/EBITDA',       valeur: 15.14, concurrent1:  9.01 },
          { label: 'P/FCF',           valeur: 42.60, concurrent1: 23.30 },
          { label: 'Marge EBIT %',    valeur: 21.60, concurrent1: 19.30 },
          { label: 'ROIC %',          valeur:  7.60, concurrent1:  2.20 },
          { label: 'FCF Yield %',     valeur:  2.30, concurrent1:  4.30 },
          { label: 'Dette/EBITDA',    valeur:  3.84, concurrent1:  3.12 },
          { label: 'TCAC CA 3 ans %', valeur: -4.50, concurrent1: -6.70 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: 'Valorisation comparée - Iberdrola vs Engie',
        concurrent1: 'Engie',
        data: [
          { label: 'PER',             valeur: 26.82, concurrent1: 17.92 },
          { label: 'EV/EBITDA',       valeur: 15.14, concurrent1:  8.62 },
          { label: 'P/FCF',           valeur: 42.60, concurrent1:  0 },
          { label: 'Marge EBIT %',    valeur: 21.60, concurrent1: 10.50 },
          { label: 'ROIC %',          valeur:  7.60, concurrent1:  7.90 },
          { label: 'FCF Yield %',     valeur:  2.30, concurrent1:  0 },
          { label: 'Dette/EBITDA',    valeur:  3.84, concurrent1:  3.08 },
          { label: 'TCAC CA 3 ans %', valeur: -4.50, concurrent1: -6.60 },
        ],
      },
      {
        id: 'vs_pair3', type: 'radar',
        title: 'Valorisation comparée - Iberdrola vs NextEra Energy',
        concurrent1: 'NextEra',
        data: [
          { label: 'PER',             valeur: 26.82, concurrent1: 22.13 },
          { label: 'EV/EBITDA',       valeur: 15.14, concurrent1: 20.94 },
          { label: 'P/FCF',           valeur: 42.60, concurrent1: 56.60 },
          { label: 'Marge EBIT %',    valeur: 21.60, concurrent1: 30.20 },
          { label: 'ROIC %',          valeur:  7.60, concurrent1:  4.30 },
          { label: 'FCF Yield %',     valeur:  2.30, concurrent1:  1.80 },
          { label: 'Dette/EBITDA',    valeur:  3.84, concurrent1:  6.55 },
          { label: 'TCAC CA 3 ans %', valeur: -4.50, concurrent1:  7.30 },
        ],
      },
    ],

    metricHistory: [

      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value:  8.23 },
          { year: 2022, value:  8.25 },
          { year: 2023, value:  8.39 },
          { year: 2024, value:  8.02 },
          { year: 2025, value: 10.88 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 8.75 }, { year: 2022, value: 8.75 },
              { year: 2023, value: 8.75 }, { year: 2024, value: 8.75 },
              { year: 2025, value: 8.75 },
            ],
          },
        ],
      },

      // FCF structurellement bas : capex de croissance RAB ~ 86 % de l'OCF.
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'Md€',
        yMin:  0,
        data: [
          { year: 2021, value:  8.11 },
          { year: 2022, value: 10.44 },
          { year: 2023, value: 12.13 },
          { year: 2024, value: 11.93 },
          { year: 2025, value: 11.64 },
        ],
        competitors: [
          {
            name: 'Free Cash Flow', color: '#C9A84C',
            data: [
              { year: 2021, value: 0.46 }, { year: 2022, value: 2.63 },
              { year: 2023, value: 3.23 }, { year: 2024, value: 2.29 },
              { year: 2025, value: 1.68 },
            ],
          },
          {
            name: 'Capex', color: '#A8A29E', dashed: true,
            data: [
              { year: 2021, value: 7.65 }, { year: 2022, value: 7.81 },
              { year: 2023, value: 8.90 }, { year: 2024, value: 9.64 },
              { year: 2025, value: 9.96 },
            ],
          },
        ],
      },

      // BPA dilue publie. Croissance reguliere, sans annee de creux (≠ Engie/Nestle).
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '€',
        data: [
          { year: 2021, value: 0.583 },
          { year: 2022, value: 0.654 },
          { year: 2023, value: 0.717 },
          { year: 2024, value: 0.838 },
          { year: 2025, value: 0.843 },
        ],
      },

      // Dividende au titre de l'exercice (convention DEU). 2025 : 0,68 € proposé (+6,3 %).
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '€',
        data: [
          { year: 2021, value: 0.44 },
          { year: 2022, value: 0.47 },
          { year: 2023, value: 0.51 },
          { year: 2024, value: 0.64 },
          { year: 2025, value: 0.68 },
        ],
      },

      // ROCE (EBIT pre-impot / (CP + dette LT)) distinct du ROIC (NOPAT apres impot).
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2021, value: 8.41 },
          { year: 2022, value: 8.47 },
          { year: 2023, value: 9.29 },
          { year: 2024, value: 9.57 },
          { year: 2025, value: 9.24 },
        ],
        competitors: [
          {
            name: 'WACC', color: '#C9A84C',
            data: [
              { year: 2021, value: 2.94 }, { year: 2022, value: 5.66 },
              { year: 2023, value: 5.09 }, { year: 2024, value: 5.06 },
              { year: 2025, value: 5.74 },
            ],
          },
          {
            name: 'ROIC (Cash Adjusted)', color: '#2D6A4F', dashed: true,
            data: [
              { year: 2021, value: 5.48 }, { year: 2022, value: 6.50 },
              { year: 2023, value: 6.55 }, { year: 2024, value: 6.42 },
              { year: 2025, value: 6.80 },
            ],
          },
        ],
      },

      // ROIIC volatil par construction (IC lourd et lumpy d'une utility). A lire en tendance.
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel',
        unit:  '%',
        data: [
          { year: 2022, value: 12.2 },
          { year: 2023, value:  5.9 },
          { year: 2024, value:  4.3 },
          { year: 2025, value: 10.2 },
        ],
      },

      // PER (capi / resultat net). Re-rating spectaculaire : ~13-14x (2021-2024) -> 19,2x
      // (cloture 2025) -> 25,6x (spot juin 2026). C'est la these en un graphique.
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2021, value: 14.06 },
          { year: 2022, value: 13.08 },
          { year: 2023, value: 13.97 },
          { year: 2024, value: 14.22 },
          { year: 2025, value: 19.17 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 14.90 }, { year: 2022, value: 14.90 },
              { year: 2023, value: 14.90 }, { year: 2024, value: 14.90 },
              { year: 2025, value: 14.90 },
            ],
          },
          {
            name: 'PER ajusté aux taux', color: '#52B788', dashed: true,
            data: [
              { year: 2021, value: 15.71 }, { year: 2022, value: 12.40 },
              { year: 2023, value: 14.28 }, { year: 2024, value: 14.75 },
              { year: 2025, value: 18.33 },
            ],
          },
        ],
      },

      // FCF Yield (sur capitalisation). 2025 (1,4 %) sous le taux sans risque (2,9 %) :
      // signal de cherte. Rf = obligation 10 ans en euro.
      {
        label: 'FCFy',
        name:  'FCF Yield (capitalisation)',
        unit:  '%',
        data: [
          { year: 2021, value: 0.74 },
          { year: 2022, value: 3.92 },
          { year: 2023, value: 4.27 },
          { year: 2024, value: 2.69 },
          { year: 2025, value: 1.36 },
        ],
        competitors: [
          {
            name: 'Taux sans risque 10 ans (€)', color: '#52B788',
            data: [
              { year: 2021, value: 0.00 }, { year: 2022, value: 2.56 },
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
          { year: 2021, value: 0.919 },
          { year: 2022, value: 0.810 },
          { year: 2023, value: 0.822 },
          { year: 2024, value: 0.691 },
          { year: 2025, value: 0.874 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 0.823 }, { year: 2022, value: 0.823 },
              { year: 2023, value: 0.823 }, { year: 2024, value: 0.823 },
              { year: 2025, value: 0.823 },
            ],
          },
        ],
      },

      // Dette financiere nette / EBITDA (base propre, hors IFRS 16). Stable ~3x. Economique ~3,5x.
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        yMin:  0,
        data: [
          { year: 2021, value: 3.09 },
          { year: 2022, value: 3.17 },
          { year: 2023, value: 3.14 },
          { year: 2024, value: 2.99 },
          { year: 2025, value: 3.16 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 3.11 }, { year: 2022, value: 3.11 },
              { year: 2023, value: 3.11 }, { year: 2024, value: 3.11 },
              { year: 2025, value: 3.11 },
            ],
          },
        ],
      },

      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.276 },
          { year: 2022, value: 0.349 },
          { year: 2023, value: 0.329 },
          { year: 2024, value: 0.283 },
          { year: 2025, value: 0.274 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 0.302 }, { year: 2022, value: 0.302 },
              { year: 2023, value: 0.302 }, { year: 2024, value: 0.302 },
              { year: 2025, value: 0.302 },
            ],
          },
        ],
      },

      // Variation du nombre d'actions. 2025 : +4,5 % (dividende-action / scrip), partiellement
      // compense par 3,0 Md€ de rachats des actions emises.
      {
        label: 'Dilution',
        name:  "Variation du nombre d'actions dilué (%)",
        unit:  '%',
        data: [
          { year: 2022, value:  0.54 },
          { year: 2023, value: -0.60 },
          { year: 2024, value:  0.12 },
          { year: 2025, value:  4.51 },
        ],
      },

      // Payout sur resultat net (politique Iberdrola 65-75 %, plancher relevé chaque annee).
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value: 70.1 },
          { year: 2022, value: 67.1 },
          { year: 2023, value: 67.3 },
          { year: 2024, value: 64.2 },
          { year: 2025, value: 73.0 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 68.3 }, { year: 2022, value: 68.3 },
              { year: 2023, value: 68.3 }, { year: 2024, value: 68.3 },
              { year: 2025, value: 68.3 },
            ],
          },
        ],
      },

      // Rémunération de l'actionnaire (dividende total au titre) vs Capex : le capex de
      // croissance RAB domine largement (utility de croissance, pas de retour massif au cash).
      {
        label: 'Capex_Action',
        name:  'Dividende total (au titre)',
        unit:  'Md€',
        yMin:  0,
        data: [
          { year: 2021, value: 2.84 },
          { year: 2022, value: 3.05 },
          { year: 2023, value: 3.29 },
          { year: 2024, value: 4.13 },
          { year: 2025, value: 4.59 },
        ],
        competitors: [
          {
            name: 'Capex', color: '#A8A29E', dashed: true,
            data: [
              { year: 2021, value: 7.65 }, { year: 2022, value: 7.81 },
              { year: 2023, value: 8.90 }, { year: 2024, value: 9.64 },
              { year: 2025, value: 9.96 },
            ],
          },
        ],
      },

    ],
  },
}
