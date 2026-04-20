interface ColonneDef {
  key: string
  label: string
  primary?: boolean
}

interface LigneDef {
  [key: string]: string | undefined
  _headerBg?: string
  _headerText?: string
}

interface TableauData {
  colonnes: ColonneDef[]
  lignes: LigneDef[]
  compact?: boolean
}

const TABLEAUX: Record<string, TableauData> = {
  'spread-ev-ebitda': {
    colonnes: [
      { key: 'profil',         label: 'Profil',         primary: true },
      { key: 'spread',         label: 'Spread'                        },
      { key: 'evEbitda',       label: 'EV/EBITDA'                     },
      { key: 'interpretation', label: 'Interprétation'                },
    ],
    lignes: [
      {
        profil:         'Compounder de qualité',
        spread:         'Large et stable (>15 %)',
        evEbitda:       'Élevé',
        interpretation: 'Prime justifiée : la valeur croît plus vite que le temps.',
        _headerBg:   '#1B4332',
        _headerText:   '#F7F4EF',
      },
      {
        profil:         'Valeur décotée',
        spread:         'Positif (5-10 %)',
        evEbitda:       'Faible - Moyen',
        interpretation: 'Opportunité potentielle : le marché sous-évalue la création de valeur.',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        profil:         'Le Piège (Value Trap)',
        spread:         'Nul ou négatif',
        evEbitda:       'Faible',
        interpretation: "Pas cher pour une bonne raison : l'entreprise détruit de la valeur.",
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        profil:         "L'Espoir (Growth)",
        spread:         'Négatif',
        evEbitda:       'Très élevé',
        interpretation: "Pari sur le futur et l'effet d'échelle à venir.",
        _headerBg:   '#F7F4EF',
        _headerText: '#78716C',
      },
    ],
  },

  'roic-variantes-alphabet': {
    colonnes: [
      { key: 'type',          label: 'Type de ROIC',  primary: true },
      { key: 'valeur',        label: 'Valeur'                       },
      { key: 'avantages',     label: 'Avantages'                    },
      { key: 'inconvenients', label: 'Inconvénients'                },
    ],
    lignes: [
      {
        _headerBg:     '#1B4332',
        _headerText:   '#F7F4EF',
        type:          'Invested Capital',
        valeur:        '32,05 %',
        avantages:     'Lecture brute du bilan consolidé.',
        inconvenients: 'Faussé par la trésorerie excédentaire massive.',
        
      },
      {
        _headerBg:     '#C9A84C',
        _headerText:   '#1C1917',
        type:          'Cash-Adjusted',
        valeur:        '25,85 %',
        avantages:     "Standard : exclut le cash inutile et juge l'allocation de capital.",
        inconvenients: 'Impacté si les actifs acquis perdent de leur valeur.',
      },
      {
        type:          'Tangible',
        valeur:        '28,11 %',
        avantages:     'Mesure la performance brute du "moteur" (produits/services).',
        inconvenients: "Peut masquer des erreurs de gestion (acquisitions surpayées).",
        _headerBg:     '#E0DBCF',
        _headerText:   '#44403C',
      },
    ],
  },

  'fiscalite-pfu-decomposition': {
    colonnes: [
      { key: 'composante', label: 'Composante', primary: true },
      { key: 'taux',       label: 'Taux 2026'                },
      { key: 'detail',     label: 'Détail'                   },
    ],
    lignes: [
      {
        composante: 'Impôt sur le revenu (IR)',
        taux:       '12,8 %',
        detail:     'Inchangé depuis 2018',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        composante: 'Prélèvements sociaux',
        taux:       '18,6 %',
        detail:     'CSG 10,6 % + CRDS 0,5 % + Solidarité 7,5 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        composante: 'PFU total (taux général)',
        taux:       '31,4 %',
        detail:     'En vigueur depuis le 01/01/2026 — LFSS 2026',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
    ],
  },

  'fiscalite-tmi': {
    colonnes: [
      { key: 'tmi',     label: 'Votre TMI',         primary: true },
      { key: 'pfu',     label: 'PFU à 31,4 %'                    },
      { key: 'bareme',  label: 'Barème progressif'               },
      { key: 'conseil', label: 'Conseil indicatif'               },
    ],
    lignes: [
      {
        tmi:     '0 % ou 11 %',
        pfu:     '31,4 % sur tout',
        bareme:  "Taux réel < 31,4 % + abattement 40 % dividendes + CSG déductible 6,8 %",
        conseil: 'Barème souvent avantageux',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        tmi:     '30 %',
        pfu:     '31,4 % sur tout',
        bareme:  'Environ 30 % + PS sans abattement',
        conseil: 'À calculer selon votre situation',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        tmi:     '41 % ou 45 %',
        pfu:     '31,4 % sur tout',
        bareme:  'Taux réel > 31,4 %',
        conseil: 'PFU généralement préférable',
        _headerBg:   '#F7F4EF',
        _headerText: '#78716C',
      },
    ],
  },

  'fiscalite-enveloppes': {
    colonnes: [
      { key: 'critere', label: 'Critère',        primary: true },
      { key: 'pea',     label: 'PEA'                           },
      { key: 'cto',     label: 'CTO'                           },
      { key: 'av',      label: 'Assurance-vie'                 },
    ],
    lignes: [
      {
        critere: 'Pendant la détention',
        pea:     'Dividendes et PV capitalisent librement',
        cto:     'Dividendes et PV imposés chaque année',
        av:      'Gains capitalisent librement',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        critere: 'Impôt sur le revenu',
        pea:     'Exonéré après 5 ans',
        cto:     '12,8 % (ou barème)',
        av:      "12,8 % avant 8 ans — 7,5 % après 8 ans (versements ≤ 150 000 €)",
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        critere: 'Prélèvements sociaux',
        pea:     '18,6 % (hausse 2026)',
        cto:     '18,6 %',
        av:      '17,2 % — exception maintenue en 2026',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        critere: 'Taux global après délai',
        pea:     '18,6 % seulement (après 5 ans)',
        cto:     '31,4 %',
        av:      '30 % avant 8 ans — ~24,7 % après 8 ans*',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
      {
        critere: 'Plafond versements',
        pea:     '150 000 € (PEA classique)',
        cto:     'Aucun',
        av:      'Aucun (abattement plafonné)',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        critere: 'Titres éligibles',
        pea:     'Actions UE + fonds ≥ 75 % UE',
        cto:     'Tous titres cotés',
        av:      'Unités de compte, fonds euros',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        critere: 'Retrait avant délai',
        pea:     '31,4 % + clôture du plan',
        cto:     '31,4 % (pas de contrainte)',
        av:      '30 % (PS à 17,2 %)',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        critere: 'Abattement spécifique',
        pea:     'Aucun',
        cto:     'Aucun',
        av:      "4 600 €/an sur les gains (9 200 € couple) après 8 ans",
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
    ],
  },

  'declaration-calendrier': {
    colonnes: [
      { key: 'periode', label: 'Période', primary: true },
      { key: 'etape',   label: 'Étape'                 },
      { key: 'action',  label: 'Action à mener'        },
    ],
    lignes: [
      {
        periode: 'Janvier – février',
        etape:   'Réception des IFU',
        action:  "Télécharger l'IFU de chaque broker et assureur — les conserver toute l'année",
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        periode: 'Mi-avril',
        etape:   'Ouverture de la déclaration en ligne',
        action:  "Accéder à impots.gouv.fr — vérifier les montants pré-remplis",
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        periode: 'Mai – début juin',
        etape:   'Délai de déclaration',
        action:  "Délai variable selon votre département (zones 1, 2, 3) — consultez le site des impôts pour votre date limite",
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        periode: 'Septembre – octobre',
        etape:   "Avis d'imposition",
        action:  "Vérifier le montant, identifier les éventuels compléments à payer",
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        periode: 'Décembre (année N)',
        etape:   "Arbitrages de fin d'année",
        action:  "Dernière opportunité pour réaliser des moins-values compensatrices avant le 31/12",
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
    ],
  },

  'declaration-documents': {
    colonnes: [
      { key: 'document', label: 'Document',              primary: true },
      { key: 'duree',    label: 'Durée de conservation'               },
      { key: 'utilite',  label: 'Utilité'                             },
    ],
    lignes: [
      {
        document: 'IFU de chaque broker / banque',
        duree:    '3 ans minimum (recommandé : 6 ans)',
        utilite:  'Justificatif en cas de contrôle fiscal',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        document: 'Historique des transactions',
        duree:    '10 ans (durée du report de moins-values)',
        utilite:  'Vérification des calculs de PV/MV, traçabilité',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        document: 'Documents assureur (rachats AV)',
        duree:    '3 ans minimum',
        utilite:  'Justificatif des gains déclarés et des PS prélevés',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        document: 'Copies des déclarations',
        duree:    '3 ans',
        utilite:  "Référence pour les reports de moins-values et les calculs d'acompte",
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
    ],
  },

'per-ajuste-exemple': {
  colonnes: [
    { key: 'etape',  label: 'Étape',  primary: true },
    { key: 'valeur', label: 'Valeur'                },
  ],
  lignes: [
    { etape: 'PER médian sectoriel (20 trimestres)', valeur: '24x' },
    { etape: 'US10Y base (15 ans)',                  valeur: '2,4 %' },
    { etape: 'US10Y actuel',                         valeur: '4,5 %' },
    { etape: 'Décote calculée',                      valeur: '(4,5 − 2,4) × 2,5 = 5,25 pts' },
    {
      etape:  'PER sectoriel ajusté',
      valeur: '≈ 18-19x',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'dcf-exemple-simplifie': {
  colonnes: [
    { key: 'annee',   label: 'Année',              primary: true },
    { key: 'fcf',     label: 'FCF projeté (M€)'                 },
    { key: 'calcul',  label: 'Actualisation'                     },
    { key: 'va',      label: 'Valeur actuelle (M€)'             },
  ],
  lignes: [
    {
      annee:  'Année 1',
      fcf:    '110',
      calcul: '110 / (1,09)¹',
      va:     '101',
    },
    {
      annee:  'Année 2',
      fcf:    '121',
      calcul: '121 / (1,09)²',
      va:     '102',
    },
    {
      annee:  'Année 3',
      fcf:    '133',
      calcul: '133 / (1,09)³',
      va:     '103',
    },
    {
      annee:  'Année 4',
      fcf:    '146',
      calcul: '146 / (1,09)⁴',
      va:     '103',
    },
    {
      annee:  'Année 5',
      fcf:    '161',
      calcul: '161 / (1,09)⁵',
      va:     '105',
    },
    {
      annee:   'Sous-total flux (années 1-5)',
      fcf:     '—',
      calcul:  '—',
      va:      '514',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      annee:   'Valeur terminale actualisée',
      fcf:     '—',
      calcul:  '(161 × 1,03 / 0,06) / (1,09)⁵',
      va:      '1 797',
      _headerBg:   '#C9A84C',
      _headerText: '#44300A',
    },
    {
      annee:   'Valeur totale',
      fcf:     '—',
      calcul:  '514 + 1 797',
      va:      '≈ 2 311',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'visa-allocation-capital': {
  colonnes: [
    { key: 'destination', label: 'Destination', primary: true },
    { key: 'montant',     label: 'Montant'                    },
  ],
  lignes: [
    {
      destination: 'Rachats d\'actions',
      montant:     '18,3 Md$',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
    {
      destination: 'Dividendes',
      montant:     '4,6 Md$',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      destination: 'Capex',
      montant:     '1,5 Md$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      destination: 'Acquisition Featurespace',
      montant:     '0,9 Md$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
  ],
},
'visa-dcf-parametres': {
  compact: true,
  colonnes: [
    { key: 'parametre', label: 'Paramètre',       primary: true },
    { key: 'valeur',    label: 'Valeur retenue'                 },
    { key: 'justif',    label: 'Justification'                  },
  ],
  lignes: [
    {
      parametre: 'WACC',
      valeur:    '7,25 %',
      justif:    'US 10Y + prime de risque marché ajustée au bêta du titre',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'Croissance (années 1–5)',
      valeur:    '8,92 %',
      justif:    'CAGR FCF 2022–2025, normalisé hors rebond post-Covid',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'Croissance perpétuelle',
      valeur:    '1,50 %',
      justif:    'Hypothèse de maturité basse — scénario conservateur',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
  ],
},
'visa-dcf-flux': {
  compact: true,
  colonnes: [
    { key: 'element', label: 'Élément (M$)',    primary: true },
    { key: 'a1',      label: 'Année 1'                       },
    { key: 'a2',      label: 'Année 2'                       },
    { key: 'a3',      label: 'Année 3'                       },
    { key: 'a4',      label: 'Année 4'                       },
    { key: 'a5',      label: 'Année 5'                       },
    { key: 'tv',      label: 'Val. Terminale'                },
  ],
  lignes: [
    {
      element: 'FCF projeté',
      a1: '24 974', a2: '27 202', a3: '29 630', a4: '32 274', a5: '35 154',
      tv: '620 332',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      element: 'FCF actualisé',
      a1: '23 285', a2: '23 648', a3: '24 017', a4: '24 391', a5: '24 771',
      tv: '437 118',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'visa-dcf-synthese': {
  compact: true,
  colonnes: [
    { key: 'element', label: 'Élément',   primary: true },
    { key: 'valeur',  label: 'Valeur (M$)'              },
    { key: 'detail',  label: 'Détail'                   },
  ],
  lignes: [
    {
      element: 'Somme FCF actualisés (5 ans)',
      valeur:  '120 112',
      detail:  'Cumul des flux annuels ramenés en valeur actuelle',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur Terminale actualisée',
      valeur:  '437 118',
      detail:  'TV / (1 + WACC)^5',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur d\'Entreprise (EV)',
      valeur:  '557 230',
      detail:  'Somme FCF actualisés + TV actualisée',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      element: 'Dette nette',
      valeur:  '6 421',
      detail:  'Dette totale − trésorerie',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur des capitaux propres',
      valeur:  '550 809',
      detail:  'EV − dette nette',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Nombre d\'actions',
      valeur:  '1 953 M',
      detail:  'Actions diluted CY2025',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Fair Value par action',
      valeur:  '282,07 $',
      detail:  'Valeur capitaux propres / nombre d\'actions',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'loreal-dcf-parametres': {
  compact: true,
  colonnes: [
    { key: 'parametre', label: 'Paramètre',       primary: true },
    { key: 'valeur',    label: 'Valeur retenue'                 },
    { key: 'justif',    label: 'Justification'                  },
  ],
  lignes: [
    {
      parametre: 'WACC',
      valeur:    '6.56 %',
      justif:    'Bunds 10 ans + prime de risque marché ajustée au bêta du titre',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'Croissance (années 1-5)',
      valeur:    '6.09%',
      justif:    'CAGR FCF 2021-2025',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'Croissance perpétuelle',
      valeur:    '2 %',
      justif:    'Hypothèse de maturité, scénario pondéré',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
  ],
},
'loreal-dcf-flux': {
  compact: true,
  colonnes: [
    { key: 'element', label: 'Élément (M€)',    primary: true },
    { key: 'a5',      label: 'Année 5'                       },
    { key: 'tv',      label: 'Val. Terminale'                },
  ],
  lignes: [
    {
      element: 'FCF projeté',
      a5: '9625.3',
      tv: '215 429,0',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      element: 'FCF actualisé',
      a5: '7 006.4',
      tv: '156 814.9',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'loreal-dcf-synthese': {
  compact: true,
  colonnes: [
    { key: 'element', label: 'Élément',   primary: true },
    { key: 'valeur',  label: 'Valeur (M€)'              },
    { key: 'detail',  label: 'Détail'                   },
  ],
  lignes: [
    {
      element: 'Somme FCF actualisés (5 ans)',
      valeur:  '35 341.2',
      detail:  'Cumul des flux annuels ramenés en valeur actuelle',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur Terminale actualisée',
      valeur:  '156 814.9',
      detail:  'TV / (1 + WACC)^5',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur d\'Entreprise (EV)',
      valeur:  '192 156.1',
      detail:  'Somme FCF actualisés + TV actualisée',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      element: 'Dette nette',
      valeur:  '2 051',
      detail:  'Dette totale - trésorerie',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur des capitaux propres',
      valeur:  '190 105.1',
      detail:  'EV - dette nette',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Nombre d\'actions',
      valeur:  '535 M',
      detail:  'Actions diluted FY2025',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Fair Value par action',
      valeur:  '355.09 €',
      detail:  'Valeur capitaux propres / nombre d\'actions',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

  'exemple-roiic-nopat': {
    colonnes: [
      { key: 'annee',         label: 'Année',               primary: true },
      { key: 'nopat',         label: 'NOPAT (M€)'                         },
      { key: 'capital',       label: 'Capital Investi (M€)'               },
      { key: 'roiic',         label: 'ROIIC CaLculé'                       },
    ],
    lignes: [
      {
        annee:         'N-2',
        nopat:         '80',
        capital:       '400',
        _headerBg:   '#2D6A4F',
        _headerText: '#F7F4EF',
      },
      {
        annee:         'N-1',
        nopat:         '100',
        capital:       '500',
        _headerBg:   '#2D6A4F',
        _headerText: '#F7F4EF',
      },
      {
        annee:         'N',
        nopat:         '130',
        capital:       '620',
        roiic:         "(130-100) / (500-400) = 30 %",
        _headerBg:   '#2D6A4F',
        _headerText: '#F7F4EF',
      },
      {
        annee:         "N+1",
        nopat:         '150',
        capital:       '750',
        roiic:        "(150-130) / (620-500) = 17 %",
        _headerBg:   '#2D6A4F',
        _headerText: '#F7F4EF',
      },
    ],
  },
  'asml-allocation-capital': {
    colonnes: [
      { key: 'destination', label: 'Destination', primary: true },
      { key: 'montant',     label: 'Montant 2025'           },
    ],
    lignes: [
      {
        destination: 'Rachats d\'actions',
        montant:     '5 950 M€',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
      {
        destination: 'Dividendes versés',
        montant:     '2 550 M€',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        destination: 'Total restitué aux actionnaires',
        montant:     '8 500 M€',
        _headerBg:   '#C9A84C',
        _headerText: '#F7F4EF',
      },
      {
        destination: 'Capex (immobilisations)',
        montant:     '1 574 M€',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        destination: 'Free Cash Flow',
        montant:     '11 085 M€',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
    ],
  },
'asml-dcf-scenarios': {
  colonnes: [
    { key: 'scenario',  label: 'Scénario',        primary: true },
    { key: 'cagr',      label: 'CAGR FCF retenu'               },
    { key: 'base',      label: 'Base de calcul'                 },
    { key: 'cours',     label: 'Cours DCF'                      },
  ],
  lignes: [
    {
      scenario:  'Conservateur',
      cagr:      '2,75 %',
      base:      '2021-2025 (série complète)',
      cours:     '~521 €',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      scenario:  'Optimiste',
      cagr:      '15,44 %',
      base:      '2022-2025 (rebond post-correction)',
      cours:     '~871 €',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
  ],
},

'asml-zone-juste': {
  colonnes: [
    { key: 'taux',       label: 'Taux exigé',              primary: true },
    { key: 'zone',       label: 'Zone juste centrale'                    },
    { key: 'mos10',      label: 'Point d\'entrée (MoS 10 %)'             },
    { key: 'diagnostic', label: 'Prime / décote vs 1 284 €'              },
  ],
  lignes: [
    {
      taux:       '7,0 %',
      zone:       '1 340 €',
      mos10:      '1 206 €',
      diagnostic: 'Décote de 4,4 %',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      taux:       '8,5 %',
      zone:       '1 250 €',
      mos10:      '1 125 €',
      diagnostic: 'Prime de 2,6 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      taux:       '10,0 %',
      zone:       '1 167 €',
      mos10:      '1 051 €',
      diagnostic: 'Prime de 9,1 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      taux:       '12,0 %',
      zone:       '1 067 €',
      mos10:      '960 €',
      diagnostic: 'Prime de 16,9 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
    {
      taux:       '15,0 %',
      zone:       '935 €',
      mos10:      '855 €',
      diagnostic: 'Prime de 27,2 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},
// À ajouter dans TABLEAUX dans src/components/ui/Tableau.tsx

'novo-dcf-parametres': {
  compact: true,
  colonnes: [
    { key: 'parametre', label: 'Paramètre',       primary: true },
    { key: 'valeur',    label: 'Valeur retenue'                 },
    { key: 'justif',    label: 'Justification'                  },
  ],
  lignes: [
    {
      parametre: 'WACC',
      valeur:    '7,23 %',
      justif:    'Rf 2,86 % (Bund 10 ans) + Beta 1,14 × ERP 4,23 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'FCF de base (FY2025)',
      valeur:    '58 962 M DKK',
      justif:    'Cash opérationnel 119 102 M - investissements industriels (usines, équipements) 60 140 M',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'Croissance perpétuelle',
      valeur:    '2,0 %',
      justif:    'Plancher conservateur, 5.23 points sous le WACC',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'Dette nette',
      valeur:    '104 494 M DKK',
      justif:    'Bilan FY2025 — inclut dette Catalent',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'Actions diluées',
      valeur:    '4 448 M',
      justif:    'Rapport annuel FY2025',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
  ],
},

'novo-dcf-scenarios': {
  colonnes: [
    { key: 'scenario',  label: 'Scénario',        primary: true },
    { key: 'cagr',      label: 'CAGR FCF'                      },
    { key: 'hypothese', label: 'Hypothèse'                     },
    { key: 'cours5',    label: 'Cours DCF (5 ans)'             },
    { key: 'cours10',   label: 'Cours DCF (10 ans)'            },
  ],
  lignes: [
    {
      scenario:  'Pessimiste',
      cagr:      '0 %',
      hypothese: 'FCF comprimé stable, pas de normalisation',
      cours5:    '~213 DKK',
      cours10:   '~251 DKK',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      scenario:  'Central',
      cagr:      '3,9 %',
      hypothese: 'CAGR 2021-2025, continuité sans redressement',
      cours5:    '~258 DKK',
      cours10:   '~356 DKK',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      scenario:  'Optimiste',
      cagr:      '10,0 %',
      hypothese: 'Normalisation capex + volume oral en croissance',
      cours5:    '~340 DKK',
      cours10:   '~602 DKK',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
  ],
},

'novo-dcf-synthese': {
  compact: true,
  colonnes: [
    { key: 'element', label: 'Élément',          primary: true },
    { key: 'valeur',  label: 'Valeur (M DKK)'                 },
    { key: 'detail',  label: 'Détail'                         },
  ],
  lignes: [
    {
      element: 'Somme FCF actualisés (5 ans)',
      valeur:  '265 100',
      detail:  'FCF base 58 962 M × CAGR 3,9 % sur 5 ans, actualisés à 7,23 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur terminale actualisée',
      valeur:  '976 800',
      detail:  'FCF5 × (1 + 2 %) / (7,23 % - 2 %), actualisée sur 5 ans',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Enterprise Value',
      valeur:  '1 241 900',
      detail:  'Somme FCF actualisés + valeur terminale actualisée',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      element: 'Dette nette',
      valeur:  '104 494',
      detail:  'Bilan FY2025',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur des capitaux propres',
      valeur:  '1 137 400',
      detail:  'EV - dette nette',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Cours DCF implicite',
      valeur:  '~258 DKK',
      detail:  'Valeur capitaux propres / 4 448 M actions',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},


'novo-per-scenarios-v2': {
  colonnes: [
    { key: 'element',  label: 'Élément',            primary: true },
    { key: 'conserv',  label: 'Conservateur (19,3×)'              },
    { key: 'central',  label: 'Central (21,8×)'                   },
  ],
  lignes: [
    {
      element:  'Hypothèse multiple',
      conserv:  'PER ajusté 2021-2022 — diabète pur',
      central:  'Moyenne PER historique et sectoriel',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element:  'CAGR BPA retenu',
      conserv:  '8 % (guidance FY2026)',
      central:  '8 % (guidance FY2026)',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element:  'BPA projeté (5 ans)',
      conserv:  '33,83 DKK',
      central:  '33,83 DKK',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element:  'Prix cible central',
      conserv:  '653 DKK',
      central:  '738 DKK',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      element:  'Prix cible bas',
      conserv:  '540 DKK',
      central:  '611 DKK',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element:  'Prix cible haut',
      conserv:  '765 DKK',
      central:  '865 DKK',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element:  'MoS au cours actuel (259,70 DKK)',
      conserv:  '36 %',
      central:  '43 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'novo-per-zone-v2': {
  colonnes: [
    { key: 'taux',    label: 'Rendement exigé',              primary: true },
    { key: 'conserv', label: 'Zone juste — Conservateur (DKK)'             },
    { key: 'central', label: 'Zone juste — Central (DKK)'                  },
  ],
  lignes: [
    {
      taux:    '7,0 %',
      conserv: '465',
      central: '526',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      taux:    '8,5 %',
      conserv: '434',
      central: '491',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      taux:    '10,0 %',
      conserv: '405',
      central: '458',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      taux:    '12,0 %',
      conserv: '370',
      central: '419',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      taux:    '15,0 %',
      conserv: '325',
      central: '367',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
  ],
},

'novo-per-entree-conservateur-v2': {
  compact: true,
  colonnes: [
    { key: 'mos',    label: 'Marge de sécurité',    primary: true },
    { key: 'prix',   label: 'Prix d\'entrée (DKK)'               },
    { key: 'upside', label: 'Upside vs prix cible'               },
  ],
  lignes: [
    {
      mos:    '10 %',
      prix:   '365',
      upside: '+79 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '15 %',
      prix:   '344',
      upside: '+90 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '20 % ← norme dossier',
      prix:   '324',
      upside: '+101 %',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      mos:    '25 %',
      prix:   '304',
      upside: '+115 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '36 % ← cours actuel',
      prix:   '260',
      upside: '+151 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'novo-per-entree-central-v2': {
  compact: true,
  colonnes: [
    { key: 'mos',    label: 'Marge de sécurité',    primary: true },
    { key: 'prix',   label: 'Prix d\'entrée (DKK)'               },
    { key: 'upside', label: 'Upside vs prix cible'               },
  ],
  lignes: [
    {
      mos:    '10 %',
      prix:   '412',
      upside: '+79 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '15 %',
      prix:   '389',
      upside: '+90 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '20 % ← norme dossier',
      prix:   '366',
      upside: '+101 %',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      mos:    '25 %',
      prix:   '344',
      upside: '+115 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '43 % ← cours actuel',
      prix:   '260',
      upside: '+184 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

}



export function Tableau({ id }: { id: string }) {
  const data = TABLEAUX[id]
  if (!data) return null

  const { colonnes, lignes, compact } = data
  const colonnesData = colonnes.filter(c => !c.key.startsWith('_'))

  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:block my-6">
        <table className="w-full text-sm border-collapse table-fixed">
          <thead>
            <tr className="border-b border-[#E0DBCF]">
              {colonnesData.map(col => (
                <th
                  key={col.key}
                  className={`text-left py-2 pr-2 text-xs font-semibold uppercase tracking-widest text-[#78716C] ${compact ? 'text-[10px]' : ''}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lignes.map((ligne, i) => (
              <tr
                key={i}
                className={`border-b border-[#E0DBCF] ${i % 2 !== 0 ? 'bg-[#F7F4EF]/50' : ''}`}
              >
                {colonnesData.map(col => (
                  <td
                    key={col.key}
                    className={`py-2 pr-2 text-[#44403C] align-top break-words ${compact ? 'text-xs' : 'text-sm'} ${col.primary ? 'font-semibold text-[#1B4332]' : ''}`}
                  >
                    {ligne[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile — cartes empilées */}
      <div className="flex flex-col gap-3 my-6 sm:hidden">
        {lignes.map((ligne, i) => {
          const headerBg   = ligne._headerBg   ?? '#F7F4EF'
          const headerText = ligne._headerText ?? '#1B4332'
          const hasBorder  = headerBg === '#F7F4EF'

          return (
            <div
              key={i}
              className="border border-[#E0DBCF] rounded-lg overflow-hidden"
            >
              <div
                style={{
                  backgroundColor: headerBg,
                  borderBottom: hasBorder ? '1px solid #E0DBCF' : undefined,
                  padding: '9px 14px',
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: headerText,
                  }}
                >
                  {ligne[colonnesData.find(c => c.primary)?.key ?? colonnesData[0].key]}
                </span>
              </div>
              <div className="p-3 bg-white grid grid-cols-2 gap-x-4 gap-y-2.5">
                {colonnesData
                  .filter(col => !col.primary)
                  .map(col => (
                    <div
                      key={col.key}
                      className={col.key === 'interpretation' || col.key === 'inconvenients' || col.key === 'avantages' ? 'col-span-2' : ''}
                    >
                      <span className="block text-[10px] font-semibold uppercase tracking-widest text-[#78716C] mb-0.5">
                        {col.label}
                      </span>
                      <span className="text-sm text-[#44403C]">
                        {ligne[col.key]}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}