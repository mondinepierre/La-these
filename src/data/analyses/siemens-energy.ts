import type { AnalyseCard } from '@/types/analyses'

// -----------------------------------------------------------------------------
// SIEMENS ENERGY AG - Analyse ponctuelle - FY2025 (snapshot operationnel fige) + valo au spot
// Creation : 26/06/2026
//
// DEVISE : EUR pure. Siemens Energy publie ET cote en euros (Xetra/Francfort, ENR /
//   ENR.DE, indice DAX, CTO - action allemande, NON eligible PEA). Les libelles
//   "Cours ($)", "EPS ($)" et "CAC40GR" de l'Excel sont des coquilles heritees de
//   template (miroir Autodesk / Kri Kri / Iberdrola) : toutes les valeurs sont lues en EUR.
//
// EXERCICE FISCAL DECALE - cloture 30 SEPTEMBRE (piege Autodesk). FY2025 = clos le
//   30/09/2025. Convention canonique retenue : FY fiscale partout. Cartographie des
//   onglets : Compte de resultat / Bilan / Flux / Resultat par secteur = colonne C en
//   FY fiscale (30/09). Les onglets BOURSE et WACC sont en annee CALENDAIRE (31/12) :
//   leur "FY2025" est un snapshot de marche au 31/12/2025 (cap, Rf), pas au 30/09.
//
// SNAPSHOT : structurel FY2025 fige (CA, marges, ROIC, bilan, segments). Cours spot
//   163,46 € (25/06/2026) vs cloture FY2025 120,40 € (31/12/2025) = +35,8 % (TRES au-dessus
//   du seuil de re-ancrage ~20 %, rappel Kri Kri/Veeva) : onePager, radars, DCF/PER,
//   prixCible et niveaux sont lus au SPOT. 52 sem. : 83,32 - 191,66 € (intraday).
//   Le titre a fait +2400 % depuis son creux de crise (~6,40 € fin 2023).
//
// PROFIL : equipementier de l'energie en TURNAROUND LIVRE. Spin-off de Siemens AG (2020),
//   quasi-faillite 2023 (defauts qualite Siemens Gamesa, garantie d'Etat ~15 Md€), puis
//   redressement spectaculaire. 4 poles : Grid Technologies (transport/transformateurs,
//   le joyau, dope par le supercycle reseaux), Gas Services (turbines a gaz, demande
//   datacenters), Transformation of Industry (electrification/compression), Siemens Gamesa
//   (eolien, encore deficitaire, break-even vise FY2026). PAS une rente : un cyclique de
//   croissance dont la these est la conversion d'un carnet record (154 Md€ au Q2 FY26).
//
// WACC (vraie convention pays d'origine, legitime cette fois) : Rf = Bund 10 ans 2,86 %
//   (societe allemande, le label "bund 10Y" porte de VRAIES valeurs Bund, pas une coquille) ;
//   ERP = Damodaran mature 4,23 % + CRP Allemagne 0,0 % (Aaa/AAA, rien a ajouter) ;
//   beta = 1,767 (regression SLOPE 60 mois vs DAX ; le label "CAC40GR" du bloc est une
//   coquille de template, indice reel = DAX confirme par Pierre). Re 2025 = 10,34 % ;
//   Rd ap. IS 1,33 % ; E/V 95 % (quasi pas de dette nette). WACC 2025 = 9,92 %.
//   beta ELEVE (1,77) -> DCF techniquement exploitable (cas Schneider, different de famille faible-beta
//   Iberdrola/Engie/TTE/Coca), MAIS le FCF est distordu par les avances clients -> DCF en
//   complement/sensibilite, valo pilotee au PER forward + EV/EBITDA + SOTP.
//
// VALORISATION CYCLIQUE/TURNAROUND - le PER trailing est CASSE : pertes FY2021-2023
//   (RN attribuable -4 532 M€ en FY2023). PER trailing au spot ~100x = N/M. Piloter au
//   PER FORWARD (BPA guide/normalise), EV/EBITDA et SOTP, sur base normalisee, jamais le
//   creux ni le trailing distordu. Le carnet (154 Md€) est l'ancre de visibilite.
//   Calculateur Excel CASSE (croissance BPA -2,35 % depuis base FY2022 negative) ET DCF
//   Excel aberrant (CAGR FCF +42,5 % depuis le creux, cours central 298 €) -> tout
//   reparametre a la main (rappel Monster/Coca/Schneider).
//
// ROIC (La These - Cash Adjusted) : NOPAT = EBIT x (1 - T) ; IC = CP + max(dette nette, 0),
//   goodwill inclus, dette plancher 0 (net cash). FY2025 : NOPAT 1 637 / IC 10 676 = 15,34 %.
//   WACC 9,92 % -> spread +5,4 pts : la creation de valeur est RESTAUREE (different de Iberdrola, spread
//   mince ; different de crise ou le spread etait fortement negatif). NB : Yahoo affiche ROIC 6,2 %
//   (base differente) ; je retiens 15,3 % La These, signale au radar. ROIC tangible (hors
//   goodwill 9 037) non significatif (capitaux propres tangibles quasi nuls).
//
// BILAN : tresorerie NETTE 4 013 M€ (cash 9 162 - dette totale 5 149). Passifs de contrats
//   22 321 M€ (avances clients sur carnet) -> BFR structurellement NEGATIF, CCC -90,6 j,
//   current ratio 0,90. Le carnet s'autofinance : c'est le moteur du cash et du net cash.
//
// DIVIDENDE : 0,70 € propose au titre FY2025 (1er depuis 4 ans, 50 % du RN ajuste des
//   effets non-cash). L'onglet Excel trace encore 0 -> 0,70 € retenu (proposition AG, accord
//   Pierre, Regle des chiffres). Yield au spot 0,43 % : cadre REINVESTISSEUR/turnaround,
//   PAS dividende-aware (different de Engie/Iberdrola).
//
// GUIDANCE (l'onglet Excel etait vide, mais le groupe guide - rappel Coca/Iberdrola) :
//   FY2026 RELEVE 2x -> croissance comparable 14-16 %, marge avant Special Items 10-12 %,
//   RN ~4 Md€, FCF pre-tax ~8 Md€ (dope par avances), Gamesa au break-even. Cible FY2028 :
//   CAGR "low-teens", marge avant SI 14-16 %. Carnet 154 Md€ au Q2 FY26 (book-to-bill 1,72,
//   Grid 2,19). Croissance BPA scenarios : bear +6 % / central +9 % / bull +12 %.
//
// CONCLUSION VALO : turnaround spectaculaire et LIVRE (net cash, dividende, ROIC > WACC),
//   mais PAYE POUR LA PERFECTION (3e "perfection" de fond apres Schneider et Iberdrola).
//   PER forward FY2026 ~43x ; sur la cible FY2028 ~23x (le marche capitalise deja 2028).
//   SOTP statique ~70-77 €/action, DCF central ~87 €, zone juste PER centrale ~78 € : la
//   valeur intrinseque cluster ~75-90 €, soit ~la MOITIE du spot 163 €. Prix cible central
//   5 ans (128 €) SOUS le spot a multiple normalise ; le scenario bull (~166 €) environ au spot.
//   marginOfSafety negative, positionnement surveillance (non detenue), conviction forte.
// -----------------------------------------------------------------------------

export const siemensEnergy: AnalyseCard = {
  slug:           'siemens-energy',
  type:           'ponctuelle',
  title:          'Siemens Energy',
  ticker:         'ENR.DE',
  secteur:        'Énergie',
  geo:            'Europe',
  conviction:     'forte',
  positionnement: 'surveillance',
  lastUpdated:    '2026-06-26',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Le fournisseur de pelles et de pioches du supercycle électrique : équipementier allemand rescapé de la quasi-faillite de 2023, dont Grid Technologies porte un carnet de commandes record de 154 Md€. Le turnaround est spectaculaire et déjà livré (trésorerie nette, dividende rétabli, rentabilité restaurée), mais après +2400 % depuis ses plus-bas, la somme des parties vaut la moitié du cours et le marché paie déjà la marge de 2028.",
  glossaire: [
    'moat',
    'book-to-bill',
    'backlog',
    'spin-off',
    'free-cash-flow',
    'ev-ebitda',
  ],
  readingTime:    40,
  logo:           '/analyse/siemens-energy.png',
  onePager: {
    thesis:    "Les pelles et pioches du supercycle électrique. Carnet record 154 Md€, turnaround livré (net cash, dividende rétabli), mais payé pour 2028.",
    cours:     163.46,
    coursDate: '2026-06-25',
    devise:    'EUR',
    range52w:  { low: 83.32, high: 191.66 },
  },
  prixCible:      { bas: 94, haut: 162, devise: 'EUR' },
  // Prix cible a l'horizon de la these (5 ans, non actualise), en EUR.
  // Base : BPA dilue normalise FY2030, scenarios bear 5,8 € / central 7,0 € / bull 8,3 €,
  //   x PER cible normalise (16x / 18x / 20x) -> cibles 95 / 128 / 166 €.
  // Fourchette prixCible = cible centrale 128 € +/- MoE (beta 1,767 x 15 % = 26,5 %) : 94 - 162 €.
  // NB : la cible centrale (128 €) est SOUS le spot (163,46 €), et meme le scenario bull
  //   (~166 €) ne fait qu'egaler le cours : 5 ans de montee en marge ne depassent pas le
  //   prix d'aujourd'hui a multiple normalise. MoS fortement negative.
  marginOfSafety: 'négative',

  // ── Metriques snapshot - ratios de marche au SPOT (163,46 €), operationnels FY2025 ──
  metrics: {
    per:               43.0,   // PER FORWARD FY2026 (cap spot / BPA attribuable estime ~3,80 €). Trailing ~100x = N/M (turnaround)
    evEbitda:          35.7,   // EV spot (cap 144 366 - tresorerie nette 4 013) / EBITDA FY2025 3 930. Forward FY2026 ~21x
    fcfYield:           2.9,   // FCF La These FY2025 4 157 / cap spot 144 366
    roic:              15.3,   // NOPAT 1 637 / IC 10 676 - Cash Adjusted (FY2025). Yahoo 6,2 % = base differente
    wacc:               9.9,   // CAPM beta 1,767 vs DAX - detail en en-tete (WACC 2025 = 9,92 %)
    detteEbitda:       -1.02,  // Tresorerie NETTE 4 013 / EBITDA 3 930 (negatif = net cash)
    croissanceCA3ans:  10.45,  // CAGR CA FY2022-FY2025 (tous segments en croissance)
    croissanceBPA3ans: 18.5,   // Sortie de pertes : proxy = croissance EPS FY2024->FY2025 ; CAGR 3 ans N/M (base FY2022 negative)
    margeEbit:          6.0,   // Marge du resultat operationnel AVANT Special Items (mesure pilotee par le groupe). EBIT reporte 5,5 %
    margeBrute:        16.8,   // Marge brute 6 579 / CA 39 077
    payoutRatio:       43.0,   // Dividende 0,70 € au titre FY2025 / EPS basic 1,63 € (politique 50 % du RN ajuste)
    currentRatio:       0.90,  // Actif courant 34 452 / Passif courant 38 490 (< 1 : BFR negatif, avances clients)
    dso:               110.8,  // (Creances clients 7 571 / CA 39 077) × 365
  },

  tendances: {
    per:       'hausse',
    fcfYield:  'baisse',
    roic:      'hausse',
    margeEbit: 'hausse',
  },

  updates: [
    {
      date: '2026-06-26',
      note: "Création de la fiche (analyse ponctuelle). Données FY2025 (résultats publiés le 13/11/2025), Q2 FY2026 (12/05/2026) et guidance FY2026/FY2028. Snapshot structurel FY2025 figé, valorisation ré-ancrée au cours spot (163,46 € le 25/06/2026, +35,8 % depuis la clôture FY2025). WACC 9,92 % (bêta 1,767 vs DAX) : DCF techniquement exploitable mais FCF distordu par les avances clients. Valorisation pilotée au PER forward, à l'EV/EBITDA et à la somme des parties. Carnet de commandes record 154 Md€. Dividende 0,70 € rétabli au titre FY2025. Conviction : forte. Positionnement : surveillance (non détenue).",
    },
    {
      date: '2026-08-13',
      note: "Résultats Q3 FY2026 attendus. Source : calendrier financier Siemens Energy.",
    },
    {
      date: '2026-11-12',
      note: "Résultats Q4 / FY2026 et guidance FY2027 attendus. Source : calendrier financier Siemens Energy.",
    },
  ],

  chartData: {

    // Reorganisation en 4 segments comparable depuis FY2022 (avant : Gas and Power + Gamesa).
    segmentBreaks: [
      { year: 2022, label: 'Structure à 4 segments (avant 2022 : Gas and Power + Gamesa)' },
    ],

    // CA consolide groupe (Md€). Croissance acceleree, +15,2 % comparable en FY2025.
    revenue: [
      { year: 2021, value: 28.482 },
      { year: 2022, value: 29.005 },
      { year: 2023, value: 31.119 },
      { year: 2024, value: 34.465 },
      { year: 2025, value: 39.077 },
    ],

    // Repartition du CA par zone (FY2025). EMEA = Europe/CEI/Moyen-Orient/Afrique.
    geoRevenue: [
      { region: 'EMEA',           pct: 53.0 },
      { region: 'Amériques',      pct: 30.5 },
      { region: 'Asie-Pacifique', pct: 16.5 },
    ],

    // CA par pole (Md€, New Units + Service). Comparable depuis FY2022 (segmentBreak).
    // Grid Technologies EXPLOSE (6,1 -> 11,0 Md€ en 3 ans) : le joyau du supercycle reseaux.
    // Pas de segment a CA negatif (Gamesa positif en CA, deficitaire en profit) : total.show false.
    segmentRevenue: {
      unit: 'Md€',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2022, segments: [
          { name: 'Gas Services',               value: 9.32 },
          { name: 'Grid Technologies',          value: 6.13 },
          { name: 'Siemens Gamesa',             value: 9.81 },
          { name: 'Transformation of Industry', value: 3.73 },
        ]},
        { year: 2023, segments: [
          { name: 'Gas Services',               value: 10.78 },
          { name: 'Grid Technologies',          value:  6.95 },
          { name: 'Siemens Gamesa',             value:  9.09 },
          { name: 'Transformation of Industry', value:  4.24 },
        ]},
        { year: 2024, segments: [
          { name: 'Gas Services',               value: 10.55 },
          { name: 'Grid Technologies',          value:  9.06 },
          { name: 'Siemens Gamesa',             value: 10.01 },
          { name: 'Transformation of Industry', value:  4.81 },
        ]},
        { year: 2025, segments: [
          { name: 'Gas Services',               value: 12.07 },
          { name: 'Grid Technologies',          value: 11.05 },
          { name: 'Siemens Gamesa',             value: 10.38 },
          { name: 'Transformation of Industry', value:  5.54 },
        ]},
      ],
    },

    // operating = EBIT reporte / CA. La traversee de la crise est lisible : marge brute
    // effondree a 2,4 % en FY2023 (defauts Gamesa), puis redressement net (16,8 % en FY2025).
    marges: [
      { year: 2021, gross: 11.99, operating:  -1.26, net:  -1.97 },
      { year: 2022, gross: 11.52, operating:  -1.98, net:  -2.45 },
      { year: 2023, gross:  2.42, operating: -10.47, net: -14.75 },
      { year: 2024, gross: 13.07, operating:   6.16, net:   3.87 },
      { year: 2025, gross: 16.84, operating:   5.50, net:   4.31 },
    ],

    roic: [
      { year: 2021, value:  -1.87 },
      { year: 2022, value:  -2.75 },
      { year: 2023, value: -21.21 },
      { year: 2024, value:  16.62 },
      { year: 2025, value:  15.34 },
    ],

    // Bascule du spread ROIC-WACC du fortement NEGATIF (crise) au franchement POSITIF
    // (+5,4 pts en FY2025) : la creation de valeur est restauree, c'est le coeur du turnaround.
    roicVsWacc: [
      { year: 2021, value:  -1.87, wacc: 6.40 },
      { year: 2022, value:  -2.75, wacc: 9.95 },
      { year: 2023, value: -21.21, wacc: 7.53 },
      { year: 2024, value:  16.62, wacc: 9.26 },
      { year: 2025, value:  15.34, wacc: 9.92 },
    ],

    // FCF La These = OCF - capex (corporel + incorporel). Bond a 4,16 Md€ en FY2025, dope
    // par les avances clients (passifs de contrats +3,5 Md€) : fort mais en partie non recurrent.
    fcf: [
      { year: 2021, value: 1.007 },
      { year: 2022, value: 1.117 },
      { year: 2023, value: 0.424 },
      { year: 2024, value: 1.401 },
      { year: 2025, value: 4.157 },
    ],

    // Radars 8 branches, source API Yahoo (base TTM homogene). Pairs directs de l'onglet :
    // GE Vernova (le miroir US : reseaux + power + eolien, aussi spin-off), Vestas (l'eolien
    // pur, lentille Gamesa), Siemens AG (l'ex-maison-mere). Secteur = mediane du panel large
    // (GE Vernova, Hitachi, Mitsubishi Heavy, Nordex, Vestas, Eaton, Nexans, Prysmian,
    // Schneider, ABB, Siemens AG ; Toshiba N/M exclu). Pour Siemens Energy, ROIC (15,3 % La
    // These vs 6,2 % Yahoo, base differente) et TCAC CA 3 ans (10,45 % reel vs 3,3 % Yahoo)
    // substitues, signales en NoteAnalyse. PER trailing SE 64,35x (Yahoo, distordu turnaround ;
    // forward 27,25x). GE Vernova / Vestas portent des EV/EBITDA et P/FCF extremes (clamp [0,2]).
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Valorisation comparée - Siemens Energy vs médiane du secteur',
        data: [
          { label: 'PER',             valeur: 64.35, secteur: 31.67 },
          { label: 'EV/EBITDA',       valeur: 36.22, secteur: 21.38 },
          { label: 'P/FCF',           valeur: 33.90, secteur: 32.95 },
          { label: 'Marge EBIT %',    valeur: 11.90, secteur: 11.00 },
          { label: 'ROIC %',          valeur: 15.30, secteur:  9.15 },
          { label: 'FCF Yield %',     valeur:  2.90, secteur:  2.90 },
          { label: 'Dette/EBITDA',    valeur: -1.41, secteur:  1.26 },
          { label: 'TCAC CA 3 ans %', valeur: 10.45, secteur: 11.30 },
        ],
      },
      {
        id: 'vs_pair1', type: 'radar',
        title: 'Valorisation comparée - Siemens Energy vs GE Vernova',
        concurrent1: 'GE Vernova',
        data: [
          { label: 'PER',             valeur: 64.35, concurrent1: 31.67 },
          { label: 'EV/EBITDA',       valeur: 36.22, concurrent1: 81.80 },
          { label: 'P/FCF',           valeur: 33.90, concurrent1: 78.60 },
          { label: 'Marge EBIT %',    valeur: 11.90, concurrent1:  5.50 },
          { label: 'ROIC %',          valeur: 15.30, concurrent1:  4.40 },
          { label: 'FCF Yield %',     valeur:  2.90, concurrent1:  1.30 },
          { label: 'Dette/EBITDA',    valeur: -1.41, concurrent1: -2.25 },
          { label: 'TCAC CA 3 ans %', valeur: 10.45, concurrent1: 16.30 },
        ],
      },
      {
        id: 'vs_pair2', type: 'radar',
        title: 'Valorisation comparée - Siemens Energy vs Vestas',
        concurrent1: 'Vestas',
        data: [
          { label: 'PER',             valeur: 64.35, concurrent1: 26.75 },
          { label: 'EV/EBITDA',       valeur: 36.22, concurrent1: 105.36 },
          { label: 'P/FCF',           valeur: 33.90, concurrent1: 165.60 },
          { label: 'Marge EBIT %',    valeur: 11.90, concurrent1:  3.20 },
          { label: 'ROIC %',          valeur: 15.30, concurrent1: 14.90 },
          { label: 'FCF Yield %',     valeur:  2.90, concurrent1:  0.60 },
          { label: 'Dette/EBITDA',    valeur: -1.41, concurrent1: -0.60 },
          { label: 'TCAC CA 3 ans %', valeur: 10.45, concurrent1: 14.40 },
        ],
      },
      {
        id: 'vs_pair3', type: 'radar',
        title: 'Valorisation comparée - Siemens Energy vs Siemens AG',
        concurrent1: 'Siemens AG',
        data: [
          { label: 'PER',             valeur: 64.35, concurrent1: 28.20 },
          { label: 'EV/EBITDA',       valeur: 36.22, concurrent1: 22.27 },
          { label: 'P/FCF',           valeur: 33.90, concurrent1: 19.20 },
          { label: 'Marge EBIT %',    valeur: 11.90, concurrent1: 12.70 },
          { label: 'ROIC %',          valeur: 15.30, concurrent1:  4.80 },
          { label: 'FCF Yield %',     valeur:  2.90, concurrent1:  5.20 },
          { label: 'Dette/EBITDA',    valeur: -1.41, concurrent1:  3.51 },
          { label: 'TCAC CA 3 ans %', valeur: 10.45, concurrent1:  0.00 },
        ],
      },
    ],

    metricHistory: [

      // EV/EBITDA (sur EV vraie = cap fin de periode - tresorerie nette). FY2023 N/M
      // (EBITDA negatif, crise). Re-rating massif vers 27x (FY2025) puis ~36x (spot).
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: 14.67 },
          { year: 2022, value: 11.96 },
          { year: 2023, value: -6.35 },
          { year: 2024, value: 12.12 },
          { year: 2025, value: 27.06 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 11.89 }, { year: 2022, value: 11.89 },
              { year: 2023, value: 11.89 }, { year: 2024, value: 11.89 },
              { year: 2025, value: 11.89 },
            ],
          },
        ],
      },

      // OCF / FCF / Capex (Md€). Bond du cash en FY2025 (OCF 5,82, FCF 4,16) porte par les
      // avances clients sur le carnet record. Capex en hausse reguliere (1,66 Md€).
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Opérationnel',
        unit:  'Md€',
        yMin:  0,
        data: [
          { year: 2021, value: 1.944 },
          { year: 2022, value: 2.217 },
          { year: 2023, value: 1.621 },
          { year: 2024, value: 2.888 },
          { year: 2025, value: 5.820 },
        ],
        competitors: [
          {
            name: 'Free Cash Flow', color: '#C9A84C',
            data: [
              { year: 2021, value: 1.007 }, { year: 2022, value: 1.117 },
              { year: 2023, value: 0.424 }, { year: 2024, value: 1.401 },
              { year: 2025, value: 4.157 },
            ],
          },
          {
            name: 'Capex', color: '#A8A29E', dashed: true,
            data: [
              { year: 2021, value: 0.937 }, { year: 2022, value: 1.100 },
              { year: 2023, value: 1.197 }, { year: 2024, value: 1.487 },
              { year: 2025, value: 1.663 },
            ],
          },
        ],
      },

      // BPA dilue publie (en EUR). Pertes FY2021-2023 (-5,47 € au creux), retour au positif
      // FY2024 (1,35 €) et FY2025 (1,60 €). Le PER trailing est donc casse sur la periode.
      {
        label: 'EPS',
        name:  'BPA dilué',
        unit:  '€',
        data: [
          { year: 2021, value: -0.63 },
          { year: 2022, value: -0.65 },
          { year: 2023, value: -5.47 },
          { year: 2024, value:  1.35 },
          { year: 2025, value:  1.60 },
        ],
      },

      // Dividende par action au titre de l'exercice (convention DEU). Suspendu pendant la
      // crise (token 0,10 € en FY2022), RETABLI a 0,70 € au titre FY2025 (1er depuis 4 ans).
      {
        label: 'Dividendes',
        name:  'Dividende par action',
        unit:  '€',
        data: [
          { year: 2021, value: 0.00 },
          { year: 2022, value: 0.10 },
          { year: 2023, value: 0.00 },
          { year: 2024, value: 0.00 },
          { year: 2025, value: 0.70 },
        ],
      },

      // ROCE (NOPAT / (CP + dette LT)) vs WACC vs ROIC. Meme bascule que le ROIC : du
      // fortement negatif (crise) au franchement positif (FY2024-2025).
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        data: [
          { year: 2021, value:  -2.01 },
          { year: 2022, value:  -2.87 },
          { year: 2023, value: -26.67 },
          { year: 2024, value:  16.32 },
          { year: 2025, value:  15.90 },
        ],
        competitors: [
          {
            name: 'WACC', color: '#C9A84C',
            data: [
              { year: 2021, value: 6.40 }, { year: 2022, value: 9.95 },
              { year: 2023, value: 7.53 }, { year: 2024, value: 9.26 },
              { year: 2025, value: 9.92 },
            ],
          },
          {
            name: 'ROIC (Cash Adjusted)', color: '#2D6A4F', dashed: true,
            data: [
              { year: 2021, value:  -1.87 }, { year: 2022, value:  -2.75 },
              { year: 2023, value: -21.21 }, { year: 2024, value:  16.62 },
              { year: 2025, value:  15.34 },
            ],
          },
        ],
      },

      // ROIIC annuel - NON SIGNIFICATIF sur la periode (denominateurs sur annees de pertes :
      // valeurs erratiques de +109 % a -86 %). A lire en complement du ROIC restaure, pas seul.
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel',
        unit:  '%',
        data: [
          { year: 2022, value: 109.0 },
          { year: 2023, value: -85.9 },
          { year: 2024, value: -50.7 },
          { year: 2025, value: -14.9 },
        ],
      },

      // ROIIC glissant (1 a 4 ans) - egalement N/M sur la fenetre de crise/redressement.
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 à 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: -14.9 },
          { year: 2, value: -48.2 },
          { year: 3, value: -36.0 },
          { year: 4, value: -31.9 },
        ],
      },

      // PER (cours fin de periode / BPA). N/M FY2021-2023 (pertes). FY2024 33x, FY2025 63x
      // (au 31/12/2025, 120,40 €). Au spot 163,46 € : ~100x trailing, ~43x forward FY2026.
      {
        label: 'PER',
        name:  'PER',
        unit:  'x',
        data: [
          { year: 2024, value: 33.03 },
          { year: 2025, value: 63.07 },
        ],
        competitors: [
          {
            name: 'PER forward FY2026 (au spot)', color: '#52B788', dashed: true,
            data: [
              { year: 2024, value: 43.0 }, { year: 2025, value: 43.0 },
            ],
          },
        ],
      },

      // FCF Yield (sur capitalisation fin de periode) vs taux sans risque (Bund 10 ans).
      // FY2025 3,9 % > Bund 2,9 % ; au spot 2,9 %, le spread vs Bund est quasi nul.
      {
        label: 'FCFy',
        name:  'FCF Yield (capitalisation)',
        unit:  '%',
        data: [
          { year: 2021, value: 6.21 },
          { year: 2022, value: 8.82 },
          { year: 2023, value: 4.26 },
          { year: 2024, value: 3.18 },
          { year: 2025, value: 3.91 },
        ],
        competitors: [
          {
            name: 'Taux sans risque (Bund 10 ans)', color: '#52B788',
            data: [
              { year: 2021, value: 0.00 }, { year: 2022, value: 2.56 },
              { year: 2023, value: 2.03 }, { year: 2024, value: 2.36 },
              { year: 2025, value: 2.86 },
            ],
          },
        ],
      },

      // Cycle de conversion du cash (jours). CCC structurellement NEGATIF et qui se creuse
      // (-16 j -> -90 j) : les avances clients sur le carnet financent le BFR. DPO tres eleve.
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2021, value: 128.4 },
          { year: 2022, value: 129.5 },
          { year: 2023, value: 125.4 },
          { year: 2024, value: 119.3 },
          { year: 2025, value: 110.8 },
        ],
        competitors: [
          {
            name: 'Days Inventory Outstanding', color: '#2D6A4F',
            data: [
              { year: 2021, value:  89.5 }, { year: 2022, value: 113.5 },
              { year: 2023, value: 107.7 }, { year: 2024, value: 119.3 },
              { year: 2025, value: 116.5 },
            ],
          },
          {
            name: 'Days Payable Outstanding', color: '#77bd92',
            data: [
              { year: 2021, value: 234.6 }, { year: 2022, value: 281.5 },
              { year: 2023, value: 272.2 }, { year: 2024, value: 306.5 },
              { year: 2025, value: 318.0 },
            ],
          },
          {
            name: 'Cash Conversion Cycle', color: '#C9A84C',
            data: [
              { year: 2021, value: -16.7 }, { year: 2022, value: -38.5 },
              { year: 2023, value: -39.1 }, { year: 2024, value: -67.9 },
              { year: 2025, value: -90.6 },
            ],
          },
        ],
      },

      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2021, value: 1.035 },
          { year: 2022, value: 1.025 },
          { year: 2023, value: 0.841 },
          { year: 2024, value: 0.899 },
          { year: 2025, value: 0.895 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 0.939 }, { year: 2022, value: 0.939 },
              { year: 2023, value: 0.939 }, { year: 2024, value: 0.939 },
              { year: 2025, value: 0.939 },
            ],
          },
        ],
      },

      // Dette nette / EBITDA : tresorerie NETTE sur toute la periode (valeurs negatives).
      // FY2023 (-0,64) est un artefact (net debt +1,1 Md€ / EBITDA negatif) : a lire N/M.
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        data: [
          { year: 2021, value: -1.57 },
          { year: 2022, value: -0.88 },
          { year: 2023, value: -0.64 },
          { year: 2024, value: -0.45 },
          { year: 2025, value: -1.02 },
        ],
        competitors: [
          {
            name: 'Seuil trésorerie nette (0)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 0 }, { year: 2022, value: 0 },
              { year: 2023, value: 0 }, { year: 2024, value: 0 },
              { year: 2025, value: 0 },
            ],
          },
        ],
      },

      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2021, value: 0.645 },
          { year: 2022, value: 0.568 },
          { year: 2023, value: 0.650 },
          { year: 2024, value: 0.677 },
          { year: 2025, value: 0.690 },
        ],
        competitors: [
          {
            name: 'Moyenne historique (5 ans)', color: '#C9A84C', dashed: true,
            data: [
              { year: 2021, value: 0.646 }, { year: 2022, value: 0.646 },
              { year: 2023, value: 0.646 }, { year: 2024, value: 0.646 },
              { year: 2025, value: 0.646 },
            ],
          },
        ],
      },

      // Variation du nombre d'actions dilue. Pic de DILUTION en FY2023 (+15,0 %) : augmentation
      // de capital pendant la crise (sauvetage). Quasi stable depuis (FY2025 +1,0 %).
      {
        label: 'Dilution',
        name:  "Variation du nombre d'actions dilué (%)",
        unit:  '%',
        data: [
          { year: 2022, value:  0.00 },
          { year: 2023, value: 14.99 },
          { year: 2024, value:  5.52 },
          { year: 2025, value:  0.98 },
        ],
      },

      // Payout sur resultat net. N/M en annees de pertes ; nul tant que le dividende est
      // suspendu ; 43 % au titre FY2025 (reprise, 0,70 € / EPS 1,63 €).
      {
        label: 'Payout',
        name:  'Payout Ratio',
        unit:  '%',
        data: [
          { year: 2021, value:  0.0 },
          { year: 2022, value:  0.0 },
          { year: 2023, value:  0.0 },
          { year: 2024, value:  0.0 },
          { year: 2025, value: 43.0 },
        ],
      },

      // Remuneration de l'actionnaire (dividende au titre) vs Capex. Le capex de croissance
      // domine ; le retour au cash redemarre tout juste (dividende FY2025). Pas de rachats.
      {
        label: 'Capex_Action',
        name:  'Dividende total (au titre)',
        unit:  'Md€',
        yMin:  0,
        data: [
          { year: 2021, value: 0.00 },
          { year: 2022, value: 0.07 },
          { year: 2023, value: 0.00 },
          { year: 2024, value: 0.00 },
          { year: 2025, value: 0.61 },
        ],
        competitors: [
          {
            name: 'Capex', color: '#A8A29E', dashed: true,
            data: [
              { year: 2021, value: 0.94 }, { year: 2022, value: 1.10 },
              { year: 2023, value: 1.20 }, { year: 2024, value: 1.49 },
              { year: 2025, value: 1.66 },
            ],
          },
        ],
      },

    ],
  },
}
