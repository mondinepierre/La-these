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

'visa-per-scenarios': {
  colonnes: [
    { key: 'scenario', label: 'Scénario',       primary: true },
    { key: 'r',        label: 'r / MoS'                      },
    { key: 'zone',     label: 'Zone juste ($)'               },
    { key: 'mos',      label: 'Écart vs 327 $'               },
  ],
  lignes: [
    {
      scenario: 'Premier renforcement',
      r:        'r=10 %, MoS 10 %',
      zone:     '332,03 $',
      mos:      '+1,5 %',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      scenario: 'Renforcement fort',
      r:        'r=10 %, MoS 15 %',
      zone:     '313,58 $',
      mos:      '−4,1 %',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      scenario: 'Zone exigeante',
      r:        'r=12 %, MoS 10 %',
      zone:     '303,42 $',
      mos:      '−7,2 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
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
      conserv:  '6 % (creux 2026-2027 puis reprise)',
      central:  '6 % (creux 2026-2027 puis reprise)',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element:  'BPA projeté (5 ans)',
      conserv:  '30,82 DKK',
      central:  '30,82 DKK',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element:  'Prix cible central',
      conserv:  '595 DKK',
      central:  '672 DKK',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      element:  'Prix cible bas',
      conserv:  '493 DKK',
      central:  '556 DKK',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element:  'Prix cible haut',
      conserv:  '697 DKK',
      central:  '788 DKK',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element:  'MoS au cours actuel (283,9 DKK)',
      conserv:  '23 %',
      central:  '32 %',
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
      conserv: '424',
      central: '479',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      taux:    '8,5 %',
      conserv: '396',
      central: '447',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      taux:    '10,0 %',
      conserv: '369',
      central: '417',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      taux:    '12,0 %',
      conserv: '338',
      central: '381',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      taux:    '15,0 %',
      conserv: '296',
      central: '334',
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
      prix:   '332',
      upside: '+79 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '20 % ← norme dossier',
      prix:   '295',
      upside: '+102 %',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      mos:    '23 % ← cours actuel',
      prix:   '284',
      upside: '+110 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
    {
      mos:    '30 %',
      prix:   '258',
      upside: '+131 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '40 %',
      prix:   '221',
      upside: '+169 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
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
      prix:   '375',
      upside: '+79 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '20 % ← norme dossier',
      prix:   '334',
      upside: '+101 %',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      mos:    '30 %',
      prix:   '292',
      upside: '+130 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '32 % ← cours actuel',
      prix:   '284',
      upside: '+137 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
    {
      mos:    '40 %',
      prix:   '250',
      upside: '+169 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
  ],
},

'al-dcf-parametres': {
  compact: true,
  colonnes: [
    { key: 'parametre', label: 'Paramètre',      primary: true },
    { key: 'valeur',    label: 'Valeur retenue'               },
    { key: 'justif',    label: 'Justification'                },
  ],
  lignes: [
    {
      parametre: 'WACC',
      valeur:    '6,3 %',
      justif:    'Rf 2,86 % (Bund 10 ans) + Beta 0,78 x ERP 5,28 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'FCF de base (FY2025)',
      valeur:    '2 675 M€',
      justif:    'OCF 6 518 M€ - Capex industriel 3 843 M€',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'CAGR FCF retenu',
      valeur:    '0,2 %',
      justif:    'CAGR FCF observé 2021-2025. Note : CAGR OCF = 4 % - le capex absorbe la croissance',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      parametre: 'Croissance perpétuelle',
      valeur:    '2,0 %',
      justif:    'Plancher conservateur, 4,3 points sous le WACC',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'Dette nette',
      valeur:    '8 416 M€',
      justif:    'Bilan FY2025 - hors dettes de loyers IFRS 16',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'Actions diluées',
      valeur:    '578 millions',
      justif:    'Rapport annuel FY2025',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
  ],
},

'al-dcf-scenarios': {
  colonnes: [
    { key: 'scenario',  label: 'Scénario',        primary: true },
    { key: 'cagr',      label: 'CAGR FCF (5 ans)'              },
    { key: 'hypothese', label: 'Hypothèse'                     },
    { key: 'cours',     label: 'Valeur intrinsèque'            },
  ],
  lignes: [
    {
      scenario:  'Conservateur',
      cagr:      '0 %',
      hypothese: 'FCF stagne - pas de conversion du backlog',
      cours:     '~86 €',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      scenario:  'Central',
      cagr:      '0,2 %',
      hypothese: 'CAGR FCF observé sur 5 ans - continuité sans accélération',
      cours:     '~87 €',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      scenario:  'Optimiste',
      cagr:      '5 %',
      hypothese: 'Conversion partielle du backlog à partir de 2026-2027',
      cours:     '~111 €',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      scenario:  'Pour justifier 186 €',
      cagr:      '~14-15 %',
      hypothese: 'FCF triple en 5 ans - scénario bull maximal',
      cours:     '186 €',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'al-dcf-synthese': {
  compact: true,
  colonnes: [
    { key: 'element', label: 'Élément',   primary: true },
    { key: 'valeur',  label: 'Valeur (M€)'              },
    { key: 'detail',  label: 'Détail'                   },
  ],
  lignes: [
    {
      element: 'Somme FCF actualisés (5 ans)',
      valeur:  '11 361',
      detail:  'FCF base 2 675 M€ x CAGR 0,2 % sur 5 ans, actualisés à 5.91 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur terminale actualisée',
      valeur:  '52 893',
      detail:  'FCF5 x (1 + 2 %) / (5.91 % - 2 %), actualisée sur 5 ans',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Enterprise Value',
      valeur:  '64 254',
      detail:  'Somme FCF actualisés + valeur terminale actualisée',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      element: 'Dette nette',
      valeur:  '8 416',
      detail:  'Bilan FY2025 - hors IFRS 16',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur des capitaux propres',
      valeur:  '55 838',
      detail:  'EV - dette nette',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur intrinsèque par action',
      valeur:  '~97 €',
      detail:  '55 838 M€ / 578 M actions',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'al-per-zone': {
  colonnes: [
    { key: 'taux',     label: 'Rendement exigé',   primary: true },
    { key: 'zone',     label: 'Zone juste centrale'              },
    { key: 'entrees',  label: 'Points d\'entrée (MoS)'          },
    { key: 'prime',    label: 'Prime cours actuel (~186 €)'      },
  ],
  lignes: [
    {
      taux:    'r = 10 %',
      zone:    '107 €',
      entrees: '86 € (20 %) - 80 € (25 %) - 75 € (30 %)',
      prime:   '+73 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      taux:    'r = 12 %',
      zone:    '98 €',
      entrees: '83 € (15 %) - 78 € (20 %) - 74 € (25 %)',
      prime:   '+90 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      taux:    'r = 15 %',
      zone:    '86 €',
      entrees: '77 € (10 %) - 73 € (15 %) - 69 € (20 %)',
      prime:   '+117 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'al-per-zone-analystes': {
  colonnes: [
    { key: 'taux',    label: 'Rendement exigé',   primary: true },
    { key: 'zone',    label: 'Zone juste centrale'              },
    { key: 'entrees', label: "Points d'entrée (MoS)"           },
    { key: 'prime',   label: 'Prime cours actuel (~186 €)'      },
  ],
  lignes: [
    {
      taux:    'r = 10 %',
      zone:    '157 €',
      entrees: '125 € (20 %) - 117 € (25 %) - 110 € (30 %)',
      prime:   '+19 %',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      taux:    'r = 12 %',
      zone:    '143 €',
      entrees: '122 € (15 %) - 114 € (20 %) - 107 € (25 %)',
      prime:   '+30 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      taux:    'r = 15 %',
      zone:    '125 €',
      entrees: '113 € (10 %) - 100 € (20 %) - 88 € (30 %)',
      prime:   '+48 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},
'al-per-trois-scenarios': {
  colonnes: [
    { key: 'scenario',   label: 'Scénario',          primary: true },
    { key: 'cagr',       label: 'Base de calcul'                    },
    { key: 'bpa2030',    label: 'BPA 2030'                          },
    { key: 'cible',      label: 'Prix cible (24,6x)'                },
    { key: 'zone10',     label: 'Zone juste r=10 %'                 },
  ],
  lignes: [
    {
      scenario: 'Bear - EPS reporté',
      cagr:     'CAGR EPS observé 2021-2025 : +2,9 %',
      bpa2030:  '7,02 €',
      cible:    '172,8 €',
      zone10:   '107 €',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      scenario: 'Normalisé - NI réel + attributions',
      cagr:     'CAGR NI 8,1 % + 2 attributions 2026 et 2028',
      bpa2030:  '7,42 €',
      cible:    '182,7 €',
      zone10:   '113 €',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      scenario: 'Bull - Consensus analystes',
      cagr:     'CAGR BPA 11 % (conversion backlog)',
      bpa2030:  '10,25 €',
      cible:    '252,2 €',
      zone10:   '157 €',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
  ],
},

'al-per-zone-normalise': {
  colonnes: [
    { key: 'taux',    label: 'Rendement exigé',   primary: true },
    { key: 'zone',    label: 'Zone juste centrale'              },
    { key: 'entrees', label: "Points d'entrée (MoS)"           },
    { key: 'prime',   label: 'Prime cours actuel (~186 €)'      },
  ],
  lignes: [
    {
      taux:    'r = 10 %',
      zone:    '113 €',
      entrees: '91 € (20 %) - 85 € (25 %) - 79 € (30 %)',
      prime:   '+64 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      taux:    'r = 12 %',
      zone:    '104 €',
      entrees: '83 € (20 %) - 78 € (25 %) - 73 € (30 %)',
      prime:   '+79 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      taux:    'r = 15 %',
      zone:    '91 €',
      entrees: '82 € (10 %) - 77 € (15 %) - 73 € (20 %)',
      prime:   '+105 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// À AJOUTER dans TABLEAUX dans src/components/ui/Tableau.tsx
// Insérer avant la dernière accolade fermante } du Record TABLEAUX
// ─────────────────────────────────────────────────────────────────────────────

'loreal-per-trois-scenarios': {
  colonnes: [
    { key: 'scenario',  label: 'Scénario',         primary: true },
    { key: 'r',         label: 'Rendement exigé'                 },
    { key: 'bpa2030',   label: 'BPA 2030 (€)'                    },
    { key: 'cible',     label: 'Prix cible (€)'                  },
    { key: 'zone',      label: 'Zone juste (€)'                  },
  ],
  lignes: [
    {
      scenario: 'Bear',
      r:        '10,0 %',
      bpa2030:  '17,32',
      cible:    '499,52',
      zone:     '310',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      scenario: 'Central',
      r:        '8,5 %',
      bpa2030:  '17,32',
      cible:    '499,52',
      zone:     '332',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      scenario: 'Bull',
      r:        '7,0 %',
      bpa2030:  '17,32',
      cible:    '499,52',
      zone:     '356',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
  ],
},

'loreal-per-zone-bear': {
  compact: true,
  colonnes: [
    { key: 'mos',    label: 'Marge de sécurité',    primary: true },
    { key: 'prix',   label: "Prix d'entrée (€)"                   },
    { key: 'upside', label: 'Upside vs prix cible'                },
  ],
  lignes: [
    {
      mos:    '5 %',
      prix:   '295',
      upside: '+70 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '10 %',
      prix:   '279',
      upside: '+79 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '15 %',
      prix:   '264',
      upside: '+89 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '20 %',
      prix:   '248',
      upside: '+101 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'loreal-per-zone-central': {
  compact: true,
  colonnes: [
    { key: 'mos',    label: 'Marge de sécurité',    primary: true },
    { key: 'prix',   label: "Prix d'entrée (€)"                   },
    { key: 'upside', label: 'Upside vs prix cible'                },
  ],
  lignes: [
    {
      mos:    '5 %',
      prix:   '316',
      upside: '+58 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '10 %',
      prix:   '299',
      upside: '+67 %',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      mos:    '15 %',
      prix:   '282',
      upside: '+77 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '20 %',
      prix:   '266',
      upside: '+88 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'loreal-per-zone-bull': {
  compact: true,
  colonnes: [
    { key: 'mos',    label: 'Marge de sécurité',    primary: true },
    { key: 'prix',   label: "Prix d'entrée (€)"                   },
    { key: 'upside', label: 'Upside vs prix cible'                },
  ],
  lignes: [
    {
      mos:    '0 % — cours actuel (~357 €)',
      prix:   '357',
      upside: '+40 %',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      mos:    '5 %',
      prix:   '338',
      upside: '+48 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '10 %',
      prix:   '320',
      upside: '+56 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '15 %',
      prix:   '303',
      upside: '+65 %',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},
// ── Nouvelles entrées à ajouter dans Tableau.tsx après 'asml-zone-juste' ──

  'asml-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario',   label: 'Scénario',               primary: true },
      { key: 'cagr',       label: 'CAGR BPA'                              },
      { key: 'bpa2030',    label: 'BPA 2030'                              },
      { key: 'cible',      label: 'Prix cible 5 ans'                      },
      { key: 'zone10',     label: 'Zone juste r=10 %'                     },
      { key: 'diag',       label: 'Prime vs 1 284 €'                      },
    ],
    lignes: [
      {
        scenario: 'Bear — Chine + mémoire',
        cagr:     '7 %',
        bpa2030:  '34,66 €',
        cible:    '1 088 - 1 582 €',
        zone10:   '829 €',
        diag:     '+54,9 % (prime)',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
      {
        scenario: 'Central — CAGR historique',
        cagr:     '14,57 %',
        bpa2030:  '48,78 €',
        cible:    '1 532 - 2 228 €',
        zone10:   '1 167 €',
        diag:     '+10,0 % (prime)',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        scenario: 'Bull — High-NA plein régime',
        cagr:     '20 %',
        bpa2030:  '61,49 €',
        cible:    '1 931 - 2 807 €',
        zone10:   '1 471 €',
        diag:     '-12,7 % (décote)',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
    ],
  },

  'asml-per-zone-bear': {
    colonnes: [
      { key: 'taux',   label: 'Taux exigé',             primary: true },
      { key: 'zone',   label: 'Zone juste (prix cible 1 335 €)'       },
      { key: 'mos10',  label: "Point d'entrée (MoS 10 %)"             },
      { key: 'diag',   label: 'Prime vs 1 284 €'                      },
    ],
    lignes: [
      { taux: '7,0 %',  zone: '951 €',   mos10: '856 €',   diag: '+34,9 %', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { taux: '10,0 %', zone: '829 €',   mos10: '746 €',   diag: '+54,9 %', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { taux: '12,0 %', zone: '757 €',   mos10: '681 €',   diag: '+69,6 %', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { taux: '15,0 %', zone: '663 €',   mos10: '597 €',   diag: '+93,7 %', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },

  'asml-per-zone-central': {
    colonnes: [
      { key: 'taux',   label: 'Taux exigé',             primary: true },
      { key: 'zone',   label: 'Zone juste (prix cible 1 880 €)'       },
      { key: 'mos10',  label: "Point d'entrée (MoS 10 %)"             },
      { key: 'diag',   label: 'Prime / décote vs 1 284 €'             },
    ],
    lignes: [
      { taux: '7,0 %',  zone: '1 340 €', mos10: '1 206 €', diag: '-4,2 % (décote)',  _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '10,0 %', zone: '1 167 €', mos10: '1 051 €', diag: '+10,0 % (prime)',  _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '12,0 %', zone: '1 067 €', mos10: '960 €',   diag: '+20,3 % (prime)',  _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { taux: '15,0 %', zone: '935 €',   mos10: '841 €',   diag: '+37,3 % (prime)',  _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },

  'asml-per-zone-bull': {
    colonnes: [
      { key: 'taux',   label: 'Taux exigé',             primary: true },
      { key: 'zone',   label: 'Zone juste (prix cible 2 369 €)'       },
      { key: 'mos10',  label: "Point d'entrée (MoS 10 %)"             },
      { key: 'diag',   label: 'Prime / décote vs 1 284 €'             },
    ],
    lignes: [
      { taux: '7,0 %',  zone: '1 689 €', mos10: '1 520 €', diag: '-24,0 % (décote)', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '10,0 %', zone: '1 471 €', mos10: '1 324 €', diag: '-12,7 % (décote)', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '12,0 %', zone: '1 344 €', mos10: '1 210 €', diag: '-4,5 % (décote)',  _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '15,0 %', zone: '1 178 €', mos10: '1 060 €', diag: '+8,9 % (prime)',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────────
// ENTRÉES TABLEAU — Microsoft (MSFT)
// À coller dans TABLEAUX dans src/components/ui/Tableau.tsx
// Cours de référence : 358,96 $ (30/03/2026) | BPA CY TTM : 15,99 $
// PER central CY : 30,12x (moyenne PER ajusté 5 ans CY)
// ─────────────────────────────────────────────────────────────────────────────

  'microsoft-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',   primary: true },
      { key: 'valeur',    label: 'Valeur'                     },
      { key: 'source',    label: 'Source / Note'              },
    ],
    lignes: [
      {
        parametre: 'WACC',
        valeur:    '8,23 %',
        source:    'CAPM — Rf 4,15 % (UST 10 ans) + β 0,97 × ERP 4,23 % (Damodaran)',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        parametre: 'Croissance perpétuelle',
        valeur:    '2,0 %',
        source:    'Plancher conservateur (sous la croissance nominale US long terme)',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        parametre: 'FCF base CY2025 (TTM)',
        valeur:    '77 412 M$',
        source:    'OCF 160 506 M$ − Capex 83 094 M$ — Source : CF CY agrégé',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '7 462 M',
        source:    'Moyenne pondérée CY2025 — Source : CR trimestriel',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        parametre: 'Dette nette',
        valeur:    '−49 200 M$',
        source:    'Négatif = trésorerie nette excédentaire — Source : Bilan CY2025',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        parametre: 'Horizon de projection',
        valeur:    '5 ans',
        source:    '—',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
    ],
  },

  'microsoft-dcf-scenarios': {
    colonnes: [
      { key: 'scenario',  label: 'Scénario',     primary: true },
      { key: 'cagr',      label: 'CAGR FCF'                    },
      { key: 'fcf5',      label: 'FCF an 5'                    },
      { key: 'ev',        label: 'EV'                          },
      { key: 'prix',      label: 'Prix implicite'              },
      { key: 'ecart',     label: 'Écart vs cours 359 $'        },
    ],
    lignes: [
      {
        scenario: 'Conservateur — CAGR historique',
        cagr:     '6,28 %',
        fcf5:     '97 Mds$',
        ev:       '1 409 Mds$',
        prix:     '~196 $',
        ecart:    '−45 %',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
      {
        scenario: 'Central — normalisation partielle du Capex',
        cagr:     '10 %',
        fcf5:     '125 Mds$',
        ev:       '1 780 Mds$',
        prix:     '~245 $',
        ecart:    '−32 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        scenario: 'Optimiste — Azure s\'accélère + Capex normalisé',
        cagr:     '16 %',
        fcf5:     '163 Mds$',
        ev:       '2 270 Mds$',
        prix:     '~311 $',
        ecart:    '−13 %',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        scenario: 'Seuil — justifie le cours de rédaction',
        cagr:     '~20 %',
        fcf5:     '~193 Mds$',
        ev:       '~2 656 Mds$',
        prix:     '~362 $',
        ecart:    '+0 %',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
    ],
  },

  'microsoft-dcf-synthese': {
    colonnes: [
      { key: 'composante', label: 'Composante',   primary: true },
      { key: 'montant',    label: 'Montant (Mds$)'              },
      { key: 'part',       label: '% de l\'EV'                  },
    ],
    lignes: [
      {
        composante: 'Somme FCF actualisés (5 ans)',
        montant:    '406',
        part:       '22,8 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        composante: 'Valeur terminale actualisée',
        montant:    '1 373',
        part:       '77,2 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        composante: 'Enterprise Value',
        montant:    '1 779',
        part:       '100 %',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
      {
        composante: '+ Trésorerie nette',
        montant:    '+49',
        part:       '—',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        composante: 'Equity Value',
        montant:    '1 828',
        part:       '—',
        _headerBg:   '#E0DBCF',
        _headerText: '#1C1917',
      },
      {
        composante: 'Prix implicite (7 462 M actions)',
        montant:    '245 $',
        part:       '—',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
    ],
  },

  'microsoft-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario',          primary: true },
      { key: 'cagr',     label: 'CAGR EPS'                         },
      { key: 'bpa',      label: 'BPA 2031'                         },
      { key: 'cible',    label: 'Prix cible'                       },
      { key: 'zone10',   label: 'Zone juste r=10 %'                },
      { key: 'mos',      label: 'MoS vs 358,96 $'                  },
    ],
    lignes: [
      {
        scenario: 'Bear — décélération (Azure < 25 %)',
        cagr:     '9 %',
        bpa:      '24,60 $',
        cible:    '741 $',
        zone10:   '460 $',
        mos:      '22 %',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
      {
        scenario: 'Central — CAGR historique CY',
        cagr:     '14,2 %',
        bpa:      '31,14 $',
        cible:    '938 $',
        zone10:   '582 $',
        mos:      '38 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        scenario: 'Bull — accélération Azure + Copilot',
        cagr:     '19 %',
        bpa:      '38,16 $',
        cible:    '1 149 $',
        zone10:   '713 $',
        mos:      '50 %',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
    ],
  },

  // ── Scénario Bear — CAGR EPS 9 % | Prix cible 741 $ ──────────────────────
  'microsoft-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'taux',  label: 'Taux exigé (r)', primary: true },
      { key: 'zone',  label: 'Zone juste'                    },
      { key: 'mos',   label: 'MoS vs 358,96 $'              },
      { key: 'diag',  label: 'Interprétation'               },
    ],
    lignes: [
      {
        taux:  '7 %',
        zone:  '528 $',
        mos:   '32 %',
        diag:  'Modéré',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        taux:  '10 %',
        zone:  '460 $',
        mos:   '22 %',
        diag:  'Standard',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        taux:  '12 %',
        zone:  '420 $',
        mos:   '15 %',
        diag:  'Élevé',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        taux:  '15 %',
        zone:  '368 $',
        mos:   '2 %',
        diag:  'Agressif — quasi au cours',
        _headerBg:   '#F7F4EF',
        _headerText: '#78716C',
      },
    ],
  },

  // ── Scénario Central — CAGR EPS 14,2 % | Prix cible 938 $ ────────────────
  'microsoft-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'taux',  label: 'Taux exigé (r)', primary: true },
      { key: 'zone',  label: 'Zone juste'                    },
      { key: 'mos',   label: 'MoS vs 358,96 $'              },
      { key: 'diag',  label: 'Interprétation'               },
    ],
    lignes: [
      {
        taux:  '7 %',
        zone:  '669 $',
        mos:   '46 %',
        diag:  'Modéré',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        taux:  '10 %',
        zone:  '582 $',
        mos:   '38 %',
        diag:  'Standard',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        taux:  '12 %',
        zone:  '532 $',
        mos:   '33 %',
        diag:  'Élevé',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        taux:  '15 %',
        zone:  '466 $',
        mos:   '23 %',
        diag:  'Agressif',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
    ],
  },

  // ── Scénario Bull — CAGR EPS 19 % | Prix cible 1 149 $ ───────────────────
  'microsoft-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'taux',  label: 'Taux exigé (r)', primary: true },
      { key: 'zone',  label: 'Zone juste'                    },
      { key: 'mos',   label: 'MoS vs 358,96 $'              },
      { key: 'diag',  label: 'Interprétation'               },
    ],
    lignes: [
      {
        taux:  '7 %',
        zone:  '819 $',
        mos:   '56 %',
        diag:  'Modéré',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        taux:  '10 %',
        zone:  '713 $',
        mos:   '50 %',
        diag:  'Standard',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        taux:  '12 %',
        zone:  '652 $',
        mos:   '45 %',
        diag:  'Élevé',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        taux:  '15 %',
        zone:  '571 $',
        mos:   '37 %',
        diag:  'Agressif',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
    ],
  },
  
// ─────────────────────────────────────────────────────────────────────────────
// TABLEAU ENTRIES — TotalEnergies v2
// À coller dans le record TABLEAUX de src/components/ui/Tableau.tsx
//
// BASE : BPA ajusté FY2025 = résultat net ajusté 15 600 M$ / 2 214 M actions = 7,05 $
// (résultat net ajusté publié dans le DEU 2025 — hors effets de stock et éléments
// non récurrents. Les analystes buy-side utilisent cette base.)
//
// Multiple central : 8,57× (moyenne des multiples ajustés aux taux sur 5 ans)
// Marge d'erreur   : 14,2 % (bêta 0,947 × 15 %)
// r retenu         : 10 % (défensif haut de fourchette — cyclique intégrée à dividende)
// Dividende annuel : 3,92 $/action (3,40 € × taux de change 1,153 au 20/03/2026)
// Cours de rédaction : 88,75 $ = 76,96 € (20/03/2026)
//
// ZONE JUSTE CENTRALE à r = 10 % :
//   Prix cible central = 8,58 $ × 8,57 = 73,5 $
//   Zone juste = 73,5 / (1,10)^5 + PV dividendes (3,92 $ × 3,791) = 45,6 + 14,9 = 60,5 $
//   Soit 60,5 / 1,153 = 52,5 € — correspond à la MM200 hebdomadaire (52 €)
//
// DCF : inchangé — basé sur le cash-flow libre, pas le résultat net
// ─────────────────────────────────────────────────────────────────────────────

  // ── 1. DCF — Paramètres ────────────────────────────────────────────────────
  'totalenergies-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',      primary: true },
      { key: 'valeur',    label: 'Valeur'                        },
      { key: 'source',    label: 'Source / Note'                 },
    ],
    lignes: [
      {
        parametre: 'Cash-flow libre de base (FY2025)',
        valeur:    '10 390 M$',
        source:    'Cash-flow opérationnel 27 343 − Investissements industriels 16 953 — DEU 2025',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'Coût moyen pondéré du capital',
        valeur:    '6,08 %',
        source:    'CAPM — Rf OAT 2,86 % + bêta 0,947 × prime de risque 4,78 % — coût de la dette après impôt 2,97 %',
      },
      {
        parametre: 'Taux de croissance perpétuelle',
        valeur:    '2,0 %',
        source:    'Croissance nominale long terme — en ligne avec cible inflation BCE',
      },
      {
        parametre: 'Horizon de projection',
        valeur:    '5 ans',
        source:    '2026 – 2030',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '2 214 M',
        source:    'FY2025 — DEU 2025',
      },
      {
        parametre: 'Dette nette déduite',
        valeur:    '34 831 M$',
        source:    'Bilan consolidé 31/12/2025',
      },
      {
        parametre: 'Part valeur terminale / valeur d\'entreprise',
        valeur:    '80 – 84 %',
        source:    'Selon le scénario — ±0,5 pt sur le taux de croissance perpétuelle = ±15 $ sur le cours implicite',
      },
    ],
  },

  // ── 2. DCF — Scénarios ─────────────────────────────────────────────────────
  'totalenergies-dcf-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario',                          primary: true },
      { key: 'brent',    label: 'Brent retenu'                                     },
      { key: 'cagr',     label: 'Croissance cash-flow libre / an'                  },
      { key: 'fcf2030',  label: 'Cash-flow libre 2030'                             },
      { key: 'sommefcf', label: 'Somme flux actualisés'                            },
      { key: 'vt',       label: 'Valeur terminale actualisée'                      },
      { key: 'ev',       label: 'Valeur d\'entreprise'                             },
    ],
    lignes: [
      {
        scenario:  'Conservateur',
        brent:     '60 – 65 $',
        cagr:      '−5 %/an',
        fcf2030:   '8 040 M$',
        sommefcf:  '37 765 M$',
        vt:        '149 545 M$',
        ev:        '187 310 M$',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        scenario:  'Central',
        brent:     '72 – 75 $',
        cagr:      '+3 %/an',
        fcf2030:   '12 045 M$',
        sommefcf:  '47 600 M$',
        vt:        '224 120 M$',
        ev:        '271 720 M$',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        scenario:  'Optimiste',
        brent:     '82 – 85 $',
        cagr:      '+8 %/an',
        fcf2030:   '15 266 M$',
        sommefcf:  '54 837 M$',
        vt:        '284 150 M$',
        ev:        '338 987 M$',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  // ── 3. DCF — Synthèse ──────────────────────────────────────────────────────
  'totalenergies-dcf-synthese': {
    colonnes: [
      { key: 'scenario',  label: 'Scénario',          primary: true },
      { key: 'equity',    label: 'Valeur des fonds propres'         },
      { key: 'cours',     label: 'Cours implicite'                  },
      { key: 'reference', label: 'Cours 20/03/2026'                 },
      { key: 'ecart',     label: 'Prime / Décote'                   },
    ],
    lignes: [
      {
        scenario:  'Conservateur',
        equity:    '152 479 M$',
        cours:     '68,9 $',
        reference: '88,75 $',
        ecart:     '−22,4 %',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        scenario:  'Central',
        equity:    '236 889 M$',
        cours:     '107,0 $',
        reference: '88,75 $',
        ecart:     '+20,6 %',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        scenario:  'Optimiste',
        equity:    '304 156 M$',
        cours:     '137,4 $',
        reference: '88,75 $',
        ecart:     '+54,8 %',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  // ── 4. Calculateur de multiples — Synthèse des trois scénarios ─────────────
  // Base : BPA ajusté FY2025 = 7,05 $ (résultat net ajusté DEU 2025 / actions diluées)
  // Le BPA consolidé IFRS (5,78 $) intègre des éléments non récurrents (effets de
  // stock, dépréciations ponctuelles) que le marché exclut de sa valorisation.
  'totalenergies-per-trois-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'bear',      label: 'Conservateur'              },
      { key: 'central',   label: 'Central'                   },
      { key: 'bull',      label: 'Optimiste'                 },
    ],
    lignes: [
      {
        parametre:  'Brent retenu',
        bear:       '60 – 65 $',
        central:    '72 – 75 $',
        bull:       '82 – 85 $',
        _headerBg:  '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre:  'Croissance BPA par an',
        bear:       '−3 %',
        central:    '+4 %',
        bull:       '+9 %',
      },
      {
        parametre:  'BPA ajusté projeté FY2031',
        bear:       '6,05 $',
        central:    '8,58 $',
        bull:       '10,85 $',
      },
      {
        parametre:  'Multiple central retenu',
        bear:       '8,57×',
        central:    '8,57×',
        bull:       '8,57×',
      },
      {
        parametre:  'Prix cible',
        bear:       '51,8 $',
        central:    '73,5 $',
        bull:       '93,0 $',
        _headerBg:  '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre:  'Fourchette basse (−14,2 %)',
        bear:       '44,4 $',
        central:    '63,1 $',
        bull:       '79,8 $',
      },
      {
        parametre:  'Fourchette haute (+14,2 %)',
        bear:       '59,2 $',
        central:    '83,9 $',
        bull:       '106,2 $',
      },
      {
        parametre:  'Cours 20/03/2026 (position)',
        bear:       '↑ au-dessus',
        central:    '↑ au-dessus',
        bull:       '→ dans la fourchette haute',
        _headerBg:  '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // ── 5. Zone juste — Scénario conservateur ──────────────────────────────────
  // Zone juste = prix cible / (1+r)^5 + valeur actuelle des dividendes sur 5 ans
  // Prix cible conservateur = 51,8 $ | Dividende annuel = 3,92 $/action
  'totalenergies-per-zone-bear': {
    colonnes: [
      { key: 'signal',       label: 'Signal',            primary: true },
      { key: 'mos',          label: 'Marge de sécurité'                },
      { key: 'zonejuste',    label: 'Zone juste ($)'                   },
      { key: 'fourchette',   label: 'Fourchette d\'achat (€)'          },
    ],
    lignes: [
      {
        signal:       'Surveillance active',
        mos:          '5 – 10 %',
        zonejuste:    '42,2 $',
        fourchette:   '32 – 34 €',
        _headerBg:    '#1B4332', _headerText: '#F7F4EF',
      },
      {
        signal:       'Premier renforcement',
        mos:          '15 – 20 %',
        zonejuste:    '42,2 $',
        fourchette:   '29 – 32 €',
      },
      {
        signal:       'Achat fort',
        mos:          '25 – 30 %',
        zonejuste:    '42,2 $',
        fourchette:   '25 – 28 €',
      },
    ],
  },

  // ── 6. Zone juste — Scénario central ───────────────────────────────────────
  // Zone juste = 73,5 / (1,10)^5 + PV dividendes = 45,6 + 14,9 = 60,5 $
  // 60,5 / 1,153 = 52,5 € — correspond à la MM200 hebdomadaire (52 €)
  'totalenergies-per-zone-central': {
    colonnes: [
      { key: 'signal',       label: 'Signal',            primary: true },
      { key: 'mos',          label: 'Marge de sécurité'                },
      { key: 'zonejuste',    label: 'Zone juste ($)'                   },
      { key: 'fourchette',   label: 'Fourchette d\'achat (€)'          },
    ],
    lignes: [
      {
        signal:       'Surveillance active',
        mos:          '5 – 10 %',
        zonejuste:    '60,5 $',
        fourchette:   '47 – 50 €',
        _headerBg:    '#C9A84C', _headerText: '#1B4332',
      },
      {
        signal:       'Premier renforcement',
        mos:          '15 – 20 %',
        zonejuste:    '60,5 $',
        fourchette:   '42 – 45 €',
      },
      {
        signal:       'Achat fort',
        mos:          '25 – 30 %',
        zonejuste:    '60,5 $',
        fourchette:   '37 – 40 €',
      },
    ],
  },

  // ── 7. Zone juste — Scénario optimiste ─────────────────────────────────────
  // Zone juste = 93,0 / (1,10)^5 + PV dividendes = 57,8 + 14,9 = 72,7 $
  // Le cours de rédaction (88,75 $) est 22 % au-dessus de cette zone juste.
  'totalenergies-per-zone-bull': {
    colonnes: [
      { key: 'signal',       label: 'Signal',            primary: true },
      { key: 'mos',          label: 'Marge de sécurité'                },
      { key: 'zonejuste',    label: 'Zone juste ($)'                   },
      { key: 'fourchette',   label: 'Fourchette d\'achat (€)'          },
    ],
    lignes: [
      {
        signal:       'Surveillance active',
        mos:          '5 – 10 %',
        zonejuste:    '72,7 $',
        fourchette:   '56 – 60 €',
        _headerBg:    '#D6EDDF', _headerText: '#1B4332',
      },
      {
        signal:       'Premier renforcement',
        mos:          '15 – 20 %',
        zonejuste:    '72,7 $',
        fourchette:   '50 – 54 €',
      },
      {
        signal:       'Achat fort',
        mos:          '25 – 30 %',
        zonejuste:    '72,7 $',
        fourchette:   '44 – 48 €',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
// ALPHABET — 7 blocs à insérer dans le Record TABLEAUX de src/components/ui/Tableau.tsx
// Insérer avant la dernière accolade fermante } du Record TABLEAUX
// ─────────────────────────────────────────────────────────────────────────────

'goog-dcf-parametres': {
  compact: true,
  colonnes: [
    { key: 'parametre', label: 'Paramètre',      primary: true },
    { key: 'valeur',    label: 'Valeur retenue'               },
    { key: 'justif',    label: 'Justification'                },
  ],
  lignes: [
    {
      parametre: 'WACC',
      valeur:    '8,78 %',
      justif:    'Rf 4,15 % (UST 10 ans) + Beta 1,118 × ERP 4,23 % (Damodaran jan. 2026)',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'FCF de base (FY2025)',
      valeur:    '73 266 M$',
      justif:    'OCF 164 713 M$ − Capex industriel 91 447 M$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'CAGR FCF retenu',
      valeur:    '2,3 %',
      justif:    'CAGR FCF observé 2021-2025. Note : CAGR OCF = 15,7 % — le capex ×3,7 absorbe la croissance',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      parametre: 'Croissance perpétuelle',
      valeur:    '2,0 %',
      justif:    'Plancher conservateur, 6,8 points sous le WACC',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'Trésorerie nette',
      valeur:    '80 296 M$',
      justif:    'Cash + marketable securities 126 843 M$ − dette brute 46 547 M$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'Actions diluées',
      valeur:    '12 230 millions',
      justif:    '10-K FY2025, Note 12 — diluted shares weighted average',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
  ],
},

'goog-dcf-scenarios': {
  colonnes: [
    { key: 'scenario',  label: 'Scénario',        primary: true },
    { key: 'cagr',      label: 'CAGR FCF (5 ans)'              },
    { key: 'hypothese', label: 'Hypothèse'                     },
    { key: 'cours',     label: 'Valeur intrinsèque'            },
  ],
  lignes: [
    {
      scenario:  'Conservateur',
      cagr:      '0 %',
      hypothese: 'FCF stagne — capex massif maintenu sans conversion',
      cours:     '~89 $',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      scenario:  'Central',
      cagr:      '2,3 %',
      hypothese: 'CAGR FCF observé 2021-2025 — continuité sans normalisation',
      cours:     '~98 $',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      scenario:  'Optimiste',
      cagr:      '5 %',
      hypothese: 'Légère amélioration du ratio FCF/OCF à partir de 2027',
      cours:     '~109 $',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      scenario:  'Pour justifier 313,80 $ (31/12/2025)',
      cagr:      '~25-30 %',
      hypothese: 'FCF triple en 5 ans — capex normalisé + explosion Cloud',
      cours:     '313,80 $',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'goog-dcf-synthese': {
  compact: true,
  colonnes: [
    { key: 'element', label: 'Élément',   primary: true },
    { key: 'valeur',  label: 'Valeur (M$)'              },
    { key: 'detail',  label: 'Détail'                   },
  ],
  lignes: [
    {
      element: 'Somme FCF actualisés (5 ans)',
      valeur:  '305 488',
      detail:  'FCF base 73 266 M$ × CAGR 2,3 % sur 5 ans, actualisés à 8,78 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur terminale actualisée',
      valeur:  '809 659',
      detail:  'FCF₅ × (1 + 2 %) / (8,78 % − 2 %), actualisée sur 5 ans — 72,6 % de l\'EV',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Enterprise Value',
      valeur:  '1 115 147',
      detail:  'Somme FCF actualisés + valeur terminale actualisée',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      element: 'Trésorerie nette (à ajouter)',
      valeur:  '80 296',
      detail:  'Cash 30 708 + titres 96 135 − dette LT 46 547 M$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur des capitaux propres',
      valeur:  '1 195 443',
      detail:  'EV + trésorerie nette',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur intrinsèque par action',
      valeur:  '~97,75 $',
      detail:  '1 195 443 M$ / 12 230 M actions diluées',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

'goog-per-trois-scenarios': {
  colonnes: [
    { key: 'scenario',  label: 'Scénario',          primary: true },
    { key: 'cagr',      label: 'Base de calcul'                    },
    { key: 'bpa2030',   label: 'BPA 2030'                          },
    { key: 'cible',     label: 'Prix cible (20,41x)'               },
    { key: 'zone10',    label: 'Zone juste r=10 %'                 },
  ],
  lignes: [
    {
      scenario: 'Bear — ralentissement',
      cagr:     'CAGR EPS 12 % (base prudente)',
      bpa2030:  '19,05 $',
      cible:    '388,8 $',
      zone10:   '241 $',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      scenario: 'Central — continuité historique',
      cagr:     'CAGR EPS observé 2021-2025 : +17,8 %',
      bpa2030:  '24,52 $',
      cible:    '500,4 $',
      zone10:   '311 $',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      scenario: 'Bull — accélération IA',
      cagr:     'CAGR EPS 22 % (Cloud + Search IA)',
      bpa2030:  '29,22 $',
      cible:    '596,5 $',
      zone10:   '370 $',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
  ],
},

'goog-per-zone-bear': {
  colonnes: [
    { key: 'taux',    label: 'Rendement exigé',   primary: true },
    { key: 'zone',    label: 'Zone juste centrale'              },
    { key: 'entrees', label: "Points d'entrée (MoS)"           },
    { key: 'prime',   label: 'Rapport cours rédaction (~291 $)' },
  ],
  lignes: [
    {
      taux:    'r = 10 %',
      zone:    '241 $',
      entrees: '205 $ (15 %) — 193 $ (20 %) — 181 $ (25 %)',
      prime:   '+21 % (cours au-dessus de la zone)',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      taux:    'r = 12 %',
      zone:    '221 $',
      entrees: '188 $ (15 %) — 177 $ (20 %) — 165 $ (25 %)',
      prime:   '+32 % (cours au-dessus de la zone)',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
  ],
},

'goog-per-zone-central': {
  colonnes: [
    { key: 'taux',    label: 'Rendement exigé',   primary: true },
    { key: 'zone',    label: 'Zone juste centrale'              },
    { key: 'entrees', label: "Points d'entrée (MoS)"           },
    { key: 'mos',     label: 'MoS cours rédaction (~291 $)'    },
  ],
  lignes: [
    {
      taux:    'r = 10 %',
      zone:    '311 $',
      entrees: '264 $ (15 %) — 249 $ (20 %) — 233 $ (25 %)',
      mos:     '+6,8 % de MoS — insuffisant (seuil 15 %)',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      taux:    'r = 12 %',
      zone:    '284 $',
      entrees: '241 $ (15 %) — 227 $ (20 %) — 213 $ (25 %)',
      mos:     '−2,4 % (cours légèrement au-dessus de la zone)',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
  ],
},

'goog-per-zone-bull': {
  colonnes: [
    { key: 'taux',    label: 'Rendement exigé',   primary: true },
    { key: 'zone',    label: 'Zone juste centrale'              },
    { key: 'entrees', label: "Points d'entrée (MoS)"           },
    { key: 'mos',     label: 'MoS cours rédaction (~291 $)'    },
  ],
  lignes: [
    {
      taux:    'r = 10 %',
      zone:    '370 $',
      entrees: '315 $ (15 %) — 296 $ (20 %) — 277 $ (25 %)',
      mos:     '+21,4 % de MoS au cours actuel',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      taux:    'r = 12 %',
      zone:    '338 $',
      entrees: '287 $ (15 %) — 270 $ (20 %) — 253 $ (25 %)',
      mos:     '+13,9 % de MoS au cours actuel',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// CAMECO — Entrées à ajouter dans TABLEAUX dans Tableau.tsx
//
// Convention devise :
//   - Tableaux d'analyse (DCF, PER trois scénarios) : $CA (données primaires 40-F)
//   - Tableaux de zone juste / points d'entrée (per-zone-*) : $US (NYSE CCJ)
//     -> cohérence avec PRU Pierre (70,92 $US) et les niveaux de suivi du Verdict
//   - Taux de conversion retenu : 1 USD = 1,40 CAD
// ─────────────────────────────────────────────────────────────────────────────

  'cameco-dcf-parametres': {
    compact: true,
    colonnes: [
      { key: 'parametre', label: 'Paramètre',       primary: true },
      { key: 'valeur',    label: 'Valeur retenue'                 },
      { key: 'justif',    label: 'Justification'                  },
    ],
    lignes: [
      {
        parametre: 'WACC',
        valeur:    '7,42 %',
        justif:    'CAPM : Rf 3,44 % (UST 10Y), Beta 0,955, ERP 4,23 %, Rd après impôt 4,19 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        parametre: 'FCF base normalisé',
        valeur:    '835 M$CA',
        justif:    'FCF publié 1 075 M$CA - distribution exceptionnelle Westinghouse/Dukovany (~240 M$CA, non récurrente)',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        parametre: 'Horizon de projection',
        valeur:    '5 ans',
        justif:    'Standard La Thèse — cohérent avec la durée visible du repricing contractuel',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '435 458 k',
        justif:    'Dilution quasi nulle depuis 2023 (0,03 % en FY2025)',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        parametre: 'Trésorerie nette',
        valeur:    '+118 M$CA',
        justif:    'Dette nette négative — ajoutée à l\'EV pour calculer l\'equity value',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
    ],
  },

  'cameco-dcf-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',           primary: true },
      { key: 'bear',      label: 'Bear'                              },
      { key: 'central',   label: 'Central'                           },
      { key: 'bull',      label: 'Bull'                              },
    ],
    lignes: [
      {
        parametre: 'CAGR FCF (5 ans)',
        bear:      '5 %',
        central:   '8 %',
        bull:      '12 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        parametre: 'Croissance perpétuelle',
        bear:      '1,5 %',
        central:   '2,0 %',
        bull:      '2,5 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        parametre: 'Hypothèse centrale',
        bear:      'Repricing partiel — spot uranium ~60-65 $US/lb, WH se normalise sans accélération',
        central:   'Repricing conforme au MD&A — spot ~73-80 $US/lb, WH +12 %/an',
        bull:      'Repricing accéléré — spot >80 $US/lb durable, WH gagne contrats new build additionnels',
        _headerBg:   '#F7F4EF',
        _headerText: '#78716C',
      },
      {
        parametre: 'FCF année 5 (k$CA)',
        bear:      '1 065 695',
        central:   '1 226 889',
        bull:      '1 471 555',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
    ],
  },

  'cameco-dcf-synthese': {
    colonnes: [
      { key: 'element',  label: 'Élément (k$CA)',   primary: true },
      { key: 'bear',     label: 'Bear'                            },
      { key: 'central',  label: 'Central'                         },
      { key: 'bull',     label: 'Bull'                            },
    ],
    lignes: [
      {
        element:  'Somme FCF actualisés',
        bear:     '3 901 418',
        central:  '4 243 395',
        bull:     '4 740 686',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        element:  'Valeur Terminale actualisée',
        bear:     '12 781 195',
        central:  '16 151 624',
        bull:     '21 446 901',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        element:  '% VT dans l\'EV',
        bear:     '77 %',
        central:  '79 %',
        bull:     '82 %',
        _headerBg:   '#F7F4EF',
        _headerText: '#78716C',
      },
      {
        element:  'Enterprise Value',
        bear:     '16 682 613',
        central:  '20 395 020',
        bull:     '26 187 587',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        element:  'Equity Value',
        bear:     '16 801 125',
        central:  '20 513 532',
        bull:     '26 306 099',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
      {
        element:  'Cours implicite ($CA)',
        bear:     '38,58',
        central:  '47,11',
        bull:     '60,41',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
    ],
  },

  'cameco-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario',             primary: true },
      { key: 'cagr',     label: 'CAGR BPA'                           },
      { key: 'bpa2030',  label: 'BPA 2030 ($CA)'                     },
      { key: 'cible',    label: 'Prix cible ($CA)'                   },
      { key: 'zone',     label: 'Zone juste $CA (r=10 %)'            },
    ],
    lignes: [
      {
        scenario: 'Bear',
        cagr:     '5 %',
        bpa2030:  '1,72',
        cible:    '110,20',
        zone:     '68,42',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        scenario: 'Central',
        cagr:     '8 %',
        bpa2030:  '1,98',
        cible:    '126,86',
        zone:     '78,77',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
      {
        scenario: 'Bull',
        cagr:     '12 %',
        bpa2030:  '2,38',
        cible:    '152,16',
        zone:     '94,48',
        _headerBg:   '#D6EDDF',
        _headerText: '#1B4332',
      },
    ],
  },

  // ── Tableaux de zone juste : prix d'entrée en $US (NYSE CCJ, cohérence avec PRU) ──

  'cameco-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'mos',    label: 'Marge de sécurité', primary: true },
      { key: 'prix',   label: "Prix d'entrée ($US)"              },
      { key: 'upside', label: 'Upside vs prix cible'             },
    ],
    lignes: [
      {
        mos:    '5 %',
        prix:   '46,43',
        upside: '+69,5 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '10 %',
        prix:   '43,99',
        upside: '+78,9 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '15 %',
        prix:   '41,54',
        upside: '+89,5 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '20 %',
        prix:   '39,10',
        upside: '+101,3 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '25 %',
        prix:   '36,66',
        upside: '+114,7 %',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
      {
        mos:    '30 %',
        prix:   '34,21',
        upside: '+130,1 %',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
    ],
  },

  'cameco-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'mos',    label: 'Marge de sécurité', primary: true },
      { key: 'prix',   label: "Prix d'entrée ($US)"              },
      { key: 'upside', label: 'Upside vs prix cible'             },
    ],
    lignes: [
      {
        mos:    '5 %',
        prix:   '53,45',
        upside: '+69,5 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '10 %',
        prix:   '50,64',
        upside: '+78,9 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '15 %',
        prix:   '47,83',
        upside: '+89,5 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '20 %',
        prix:   '45,01',
        upside: '+101,3 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '25 %',
        prix:   '42,20',
        upside: '+114,7 %',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
      {
        mos:    '30 %',
        prix:   '39,39',
        upside: '+130,1 %',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
    ],
  },

  'cameco-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'mos',    label: 'Marge de sécurité', primary: true },
      { key: 'prix',   label: "Prix d'entrée ($US)"              },
      { key: 'upside', label: 'Upside vs prix cible'             },
    ],
    lignes: [
      {
        mos:    '0 % - cours actuel CCJ (~122,82 $US)',
        prix:   '122,82',
        upside: '-11,4 %',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
      {
        mos:    '5 %',
        prix:   '64,11',
        upside: '+69,5 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '10 %',
        prix:   '60,74',
        upside: '+78,9 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '15 %',
        prix:   '57,36',
        upside: '+89,5 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '20 %',
        prix:   '53,99',
        upside: '+101,3 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '25 %',
        prix:   '50,62',
        upside: '+114,7 %',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
      {
        mos:    '30 %',
        prix:   '47,24',
        upside: '+130,1 %',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────────
// TABLEAUX CEG — à coller dans le Record<string, TableauData> de Tableau.tsx
// juste avant la dernière accolade fermante `}`
// ─────────────────────────────────────────────────────────────────────────────

  // ── DCF Paramètres ──────────────────────────────────────────────────────────
  'ceg-dcf-parametres': {
    compact: true,
    colonnes: [
      { key: 'parametre', label: 'Paramètre',       primary: true },
      { key: 'valeur',    label: 'Valeur retenue'                 },
      { key: 'justif',    label: 'Justification'                  },
    ],
    lignes: [
      {
        parametre: 'WACC',
        valeur:    '9,0 %',
        justif:    'UST 10Y (4,4 %) + prime de risque marché ajustée au bêta (0,85)',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        parametre: 'Croissance (années 1-5)',
        valeur:    '18 % (scénario central)',
        justif:    'Normalisation FCF post-Calpine et post-Crane — voir scénarios',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        parametre: 'Croissance perpétuelle',
        valeur:    '2,0 %',
        justif:    'Ancré sur la croissance nominale long terme de l\'économie américaine',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        parametre: 'FCF base FY2025 (GAAP)',
        valeur:    '1 288 M$',
        justif:    'OCF 4 237 M$ – Capex 2 949 M$ — première année positive post-distorsions DPP',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        parametre: 'Dette nette (31/12/2025)',
        valeur:    '3 594 M$',
        justif:    'Hors dette Calpine consolidée à partir de janvier 2026',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '314 M',
        justif:    'Post-rachats 2022-2025 (329 M en 2022 → 314 M en 2025)',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
    ],
  },

  // ── DCF Scénarios ────────────────────────────────────────────────────────────
  'ceg-dcf-scenarios': {
    compact: true,
    colonnes: [
      { key: 'scenario',   label: 'Scénario',     primary: true },
      { key: 'cagr',       label: 'CAGR FCF'                   },
      { key: 'fcf2030',    label: 'FCF FY2030'                 },
      { key: 'vtPct',      label: 'VT (% EV)'                  },
      { key: 'prixAction', label: 'Equity/action'              },
    ],
    lignes: [
      {
        scenario:   'Bear',
        cagr:       '10 %',
        fcf2030:    '2 074 M$',
        vtPct:      '75 %',
        prixAction: '72 $',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        scenario:   'Central',
        cagr:       '18 %',
        fcf2030:    '2 946 M$',
        vtPct:      '77 %',
        prixAction: '104 $',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
      {
        scenario:   'Bull',
        cagr:       '25 %',
        fcf2030:    '3 930 M$',
        vtPct:      '79 %',
        prixAction: '139 $',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
    ],
  },

  // ── DCF Synthèse (scénario central) ─────────────────────────────────────────
  'ceg-dcf-synthese': {
    compact: true,
    colonnes: [
      { key: 'element', label: 'Élément',    primary: true },
      { key: 'valeur',  label: 'Valeur (M$)'               },
      { key: 'detail',  label: 'Détail'                    },
    ],
    lignes: [
      {
        element: 'Somme FCF actualisés (5 ans)',
        valeur:  '8 024',
        detail:  'Cumul des flux annuels ramenés en valeur actuelle (WACC 9,0 %)',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        element: 'Valeur Terminale actualisée',
        valeur:  '28 088',
        detail:  'TV / (1 + WACC)^5 — représente 77 % de l\'EV',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        element: 'Valeur d\'Entreprise (EV)',
        valeur:  '36 112',
        detail:  'Somme FCF actualisés + TV actualisée',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
      {
        element: 'Dette nette',
        valeur:  '3 594',
        detail:  'Au 31/12/2025 — hors dette Calpine (janvier 2026)',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        element: 'Valeur des capitaux propres',
        valeur:  '32 518',
        detail:  'EV - dette nette',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        element: 'Nombre d\'actions',
        valeur:  '314 M',
        detail:  'Actions diluées FY2025',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        element: 'Fair Value par action',
        valeur:  '103,56 $',
        detail:  'Valeur capitaux propres / nombre d\'actions',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
    ],
  },

  // ── PER — Trois scénarios résumé ────────────────────────────────────────────
  'ceg-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario',  label: 'Scénario',              primary: true },
      { key: 'cagr',      label: 'CAGR BPA'                            },
      { key: 'bpa2030',   label: 'BPA FY2030'                          },
      { key: 'cible',     label: 'Prix cible (PER × BPA)'              },
      { key: 'zoneJuste', label: 'Zone juste (r=10 %)'                 },
    ],
    lignes: [
      {
        scenario:  'Bear',
        cagr:      '8 %',
        bpa2030:   '13,80 $',
        cible:     '331 $',
        zoneJuste: '206 $',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        scenario:  'Central',
        cagr:      '12 %',
        bpa2030:   '16,55 $',
        cible:     '397 $',
        zoneJuste: '247 $',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
      {
        scenario:  'Bull',
        cagr:      '16 %',
        bpa2030:   '19,72 $',
        cible:     '473 $',
        zoneJuste: '294 $',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
    ],
  },

  // ── PER Zone Bear ────────────────────────────────────────────────────────────
  'ceg-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'mos',    label: 'Marge de sécurité', primary: true },
      { key: 'prix',   label: 'Prix d\'entrée ($)'               },
      { key: 'upside', label: 'Upside vs prix cible (331 $)'     },
    ],
    lignes: [
      {
        mos:    '0 % - cours actuel (~353 $)',
        prix:   '353',
        upside: '-6,3 %',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
      {
        mos:    '5 %',
        prix:   '314',
        upside: '+5,4 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '10 %',
        prix:   '298',
        upside: '+11,1 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '15 %',
        prix:   '281',
        upside: '+17,8 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '20 %',
        prix:   '265',
        upside: '+25,0 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '25 % — zone juste r=10 %',
        prix:   '206',
        upside: '+60,7 %',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
    ],
  },

  // ── PER Zone Central ─────────────────────────────────────────────────────────
  'ceg-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'mos',    label: 'Marge de sécurité', primary: true },
      { key: 'prix',   label: 'Prix d\'entrée ($)'               },
      { key: 'upside', label: 'Upside vs prix cible (397 $)'     },
    ],
    lignes: [
      {
        mos:    '0 % - cours actuel (~353 $)',
        prix:   '353',
        upside: '+12,5 %',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
      {
        mos:    '5 %',
        prix:   '377',
        upside: '+5,3 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '10 %',
        prix:   '357',
        upside: '+11,2 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '15 %',
        prix:   '337',
        upside: '+17,8 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '20 %',
        prix:   '318',
        upside: '+24,8 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '25 % — zone juste r=10 %',
        prix:   '247',
        upside: '+60,7 %',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
    ],
  },

  // ── PER Zone Bull ─────────────────────────────────────────────────────────────
  'ceg-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'mos',    label: 'Marge de sécurité', primary: true },
      { key: 'prix',   label: 'Prix d\'entrée ($)'               },
      { key: 'upside', label: 'Upside vs prix cible (473 $)'     },
    ],
    lignes: [
      {
        mos:    '0 % - cours actuel (~353 $)',
        prix:   '353',
        upside: '+34,0 %',
        _headerBg:   '#C9A84C',
        _headerText: '#1C1917',
      },
      {
        mos:    '5 %',
        prix:   '449',
        upside: '+5,3 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '10 %',
        prix:   '426',
        upside: '+11,0 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '15 %',
        prix:   '402',
        upside: '+17,7 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '20 %',
        prix:   '378',
        upside: '+25,1 %',
        _headerBg:   '#E0DBCF',
        _headerText: '#44403C',
      },
      {
        mos:    '25 % — zone juste r=10 %',
        prix:   '294',
        upside: '+60,9 %',
        _headerBg:   '#1B4332',
        _headerText: '#F7F4EF',
      },
    ],
  },


  // ─────────────────────────────────────────────────────────────────────────
  // THALES (HO) — 6 tableaux
  // Cours référence : 226 € (12 mai 2026) | BPA FY2025 : 8,13 € | PER central : 26,2x
  // ─────────────────────────────────────────────────────────────────────────

  'thales-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',    primary: true },
      { key: 'valeur',    label: 'Valeur'                      },
      { key: 'source',    label: 'Source / note'               },
    ],
    lignes: [
      { parametre: 'Base FCF',              valeur: '2 565 M€',                                                    source: 'FCF opérationnel FY2025 — DEU 2025',                             _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'WACC',                  valeur: '6,0 %',                                                       source: 'CAPM — Rf Bund 10Y Allemagne 2,86 %, Beta 0,74, ERP Damodaran 4,78 %', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Croissance perpétuelle',valeur: '1,5 % (bear / central) — 2,0 % (bull)',                      source: 'PIB nominal zone euro long terme',                                _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Dette nette',           valeur: '1 683 M€',                                                    source: 'Bilan FY2025 — 0,53x EBITDA',                                    _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Actions diluées',       valeur: '206,1 M',                                                     source: 'Rapport annuel 2025',                                            _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Horizon explicite',     valeur: '5 ans (FY2026 — FY2030)',                                     source: 'Cohérent avec LPM 2024-2030 et cible marge 2028',                _headerBg: '#E0DBCF', _headerText: '#1C1917' },
    ],
  },

  'thales-dcf-scenarios': {
    colonnes: [
      { key: 'scenario',  label: 'Scénario',             primary: true },
      { key: 'cagr',      label: 'CAGR FCF'                            },
      { key: 'perp',      label: 'Croissance perp.'                    },
      { key: 'hypothese', label: 'Hypothèse principale'                },
      { key: 'dcf',       label: 'Valeur DCF / action'                 },
    ],
    lignes: [
      { scenario: 'Bear',    cagr: '0 %',    perp: '1,5 %', hypothese: 'FCF stable — expansion de marge avortée, pas de levier opérationnel',             dcf: '254 €', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Central', cagr: '3,26 %', perp: '1,5 %', hypothese: 'CAGR FCF historique 5 ans — marge converge vers 11-12 % en 2028',                dcf: '296 €', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { scenario: 'Bull',    cagr: '7 %',    perp: '2,0 %', hypothese: 'Cible management 13-14 % EBIT 2028 atteinte — conversion FCF en forte expansion', dcf: '351 €', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
    ],
  },

  'thales-dcf-synthese': {
    colonnes: [
      { key: 'methode', label: 'Méthode',           primary: true },
      { key: 'bear',    label: 'Scénario bear'                    },
      { key: 'central', label: 'Scénario central'                 },
      { key: 'bull',    label: 'Scénario bull'                    },
    ],
    lignes: [
      { methode: 'DCF (FCF opérationnel)',        bear: '254 €', central: '296 €', bull: '351 €', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { methode: 'Calculateur PER — prix cible',  bear: '285 €', central: '381 €', bull: '487 €', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { methode: 'Zone juste r=10 % (PER)',       bear: '177 €', central: '236 €', bull: '303 €', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { methode: 'Cours actuel (12 mai 2026)',    bear: '226 €', central: '226 €', bull: '226 €', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },

  'thales-per-trois-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',             primary: true },
      { key: 'bear',      label: 'Bear — CAGR 6 %'                      },
      { key: 'central',   label: 'Central — CAGR 12,31 %'               },
      { key: 'bull',      label: 'Bull — CAGR 18 %'                     },
    ],
    lignes: [
      { parametre: 'BPA FY2025 (base)',      bear: '8,13 €',  central: '8,13 €',  bull: '8,13 €',  _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { parametre: 'BPA projeté 2030',       bear: '10,88 €', central: '14,53 €', bull: '18,60 €', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { parametre: 'PER central retenu',     bear: '26,2x',   central: '26,2x',   bull: '26,2x',   _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { parametre: 'Prix cible',             bear: '285 €',   central: '381 €',   bull: '487 €',   _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { parametre: 'Borne basse (MoE 11 %)', bear: '254 €',   central: '339 €',   bull: '434 €',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { parametre: 'Borne haute (MoE 11 %)', bear: '316 €',   central: '423 €',   bull: '541 €',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { parametre: 'Zone juste r=10 %',      bear: '177 €',   central: '236 €',   bull: '303 €',   _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },


  // MoS sur zone juste — bear (pc=285€, zj10=177€, zj12=162€)
  'thales-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'mos', label: 'MoS sur zone juste', primary: true },
      { key: 'r10', label: "Entrée r=10 % (€)"                 },
      { key: 'r12', label: "Entrée r=12 % (€)"                 },
    ],
    lignes: [
      { mos: '5 %',  r10: '168,13', r12: '153,65', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { mos: '10 %', r10: '159,28', r12: '145,56', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { mos: '15 %', r10: '150,43', r12: '137,47', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { mos: '20 %', r10: '141,58', r12: '129,39', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },

  // MoS sur zone juste — central (pc=381€, zj10=236€, zj12=216€)
  'thales-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'mos', label: 'MoS sur zone juste', primary: true },
      { key: 'r10', label: "Entrée r=10 % (€)"                  },
      { key: 'r12', label: "Entrée r=12 % (€)"                  },
    ],
    lignes: [
      { mos: '5 %',  r10: '224,49', r12: '205,38', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { mos: '10 %', r10: '212,68', r12: '194,57', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { mos: '15 %', r10: '200,86', r12: '183,76', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { mos: '20 %', r10: '189,05', r12: '172,95', _headerBg: '#E0DBCF', _headerText: '#44403C' },
    ],
  },

  // MoS sur zone juste — bull (pc=487€, zj10=303€, zj12=276€)
  'thales-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'mos', label: 'MoS sur zone juste', primary: true },
      { key: 'r10', label: "Entrée r=10 % (€)"                  },
      { key: 'r12', label: "Entrée r=12 % (€)"                  },
    ],
    lignes: [
      { mos: '5 %',  r10: '287,43', r12: '262,52', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { mos: '10 %', r10: '272,30', r12: '248,70', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { mos: '15 %', r10: '257,18', r12: '234,89', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { mos: '20 %', r10: '242,05', r12: '221,07', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },
// ─────────────────────────────────────────────────────────────────────────────
// GTT — TABLEAUX DE VALORISATION
// À insérer dans le record TABLEAUX de src/components/ui/Tableau.tsx
// WACC : 5,14 % (Excel La Thèse — Re = Rf Bund 2,86 % + β 0,49 × ERP US 4,78 %)
// FCF base ajusté 2026 : 350 M€ (guidance EBITDA 490-530 M€ × conv. FCF/EBITDA ~70 %)
// Trésorerie nette : +218 M€ (bilan 31/12/2025)
// Actions diluées : 37,18 M
// ─────────────────────────────────────────────────────────────────────────────

  // ── DCF — Paramètres ────────────────────────────────────────────────────
  'gtt-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',     primary: true },
      { key: 'valeur',    label: 'Valeur'                       },
      { key: 'source',    label: 'Source / Note'                },
    ],
    lignes: [
      {
        parametre: 'WACC',
        valeur:    '5,14 %',
        source:    'Re = Rf Bund 2,86 % + β 0,49 × ERP US 4,78 % — pondération E/V 97,8 %, D/V 2,2 %',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Croissance perpétuelle',
        valeur:    '2,0 %',
        source:    'Ancré sur la croissance nominale long terme du secteur GNL',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'FCF base (FY2025)',
        valeur:    '383,2 M€',
        source:    'FCF réalisé FY2025 — base retenue telle quelle, sans ajustement forward',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Trésorerie nette',
        valeur:    '+218 M€',
        source:    'Ajoutée à l\'EV pour obtenir l\'Equity Value (dette nette négative = tréso)',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '37,18 M',
        source:    'DEU FY2025 — nombre d\'actions dilué fin d\'exercice',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Part valeur terminale (central)',
        valeur:    '~87 %',
        source:    'Structurel pour ce modèle : WACC bas + FCF élevé concentrent la valeur dans la TV',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // ── DCF — Scénarios ────────────────────────────────────────────────────
  'gtt-dcf-scenarios': {
    colonnes: [
      { key: 'scenario',  label: 'Scénario',             primary: true },
      { key: 'cagr',      label: 'CAGR FCF 5 ans'                      },
      { key: 'hypothese', label: 'Hypothèse principale'                 },
      { key: 'fcf2030',   label: 'FCF projeté 2030'                     },
      { key: 'dcf',       label: 'Valeur DCF / action'                  },
    ],
    lignes: [
      {
        scenario:  'Bear',
        cagr:      '3 %',
        hypothese: 'Rechargement du carnet tardif — commandes 30-40/an sur 2026-2027, trough prolongé',
        fcf2030:   '444 M€',
        dcf:       '357 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        scenario:  'Central',
        cagr:      '8 %',
        hypothese: 'Rechargement progressif à partir de 2027 — thèse 2028-2030 se réalise normalement',
        fcf2030:   '563 M€',
        dcf:       '445 €',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        scenario:  'Bull',
        cagr:      '13 %',
        hypothese: 'Fort rechargement dès 2026-2027 — synergies Digital 25-30 M€ EBIT atteintes en 2030',
        fcf2030:   '706 M€',
        dcf:       '551 €',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  // ── DCF — Synthèse croisée ─────────────────────────────────────────────
  'gtt-dcf-synthese': {
    colonnes: [
      { key: 'methode', label: 'Méthode',           primary: true },
      { key: 'bear',    label: 'Scénario bear'                    },
      { key: 'central', label: 'Scénario central'                 },
      { key: 'bull',    label: 'Scénario bull'                    },
    ],
    lignes: [
      {
        methode: 'DCF (FCF opérationnel)',
        bear: '357 €', central: '445 €', bull: '551 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        methode: 'Calculateur PER — prix cible (×18)',
        bear: '255 €', central: '322 €', bull: '420 €',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        methode: 'Zone juste r=10 % (PER)',
        bear: '158 €', central: '200 €', bull: '261 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        methode: 'Cours actuel (15 mai 2026)',
        bear: '209 €', central: '209 €', bull: '209 €',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // ── PER — Les trois scénarios ──────────────────────────────────────────
  // BPA FY2025 : 11,10 € | PER central : 18x | MoE : ±7 % (β 0,49 × 15 %)
  'gtt-per-trois-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',            primary: true },
      { key: 'bear',      label: 'Bear — CAGR 5 %'                     },
      { key: 'central',   label: 'Central — CAGR 10 %'                 },
      { key: 'bull',      label: 'Bull — CAGR 16 %'                    },
    ],
    lignes: [
      {
        parametre: 'BPA FY2025 (base)',
        bear: '11,10 €', central: '11,10 €', bull: '11,10 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'BPA projeté FY2030',
        bear: '14,17 €', central: '17,88 €', bull: '23,31 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'PER central retenu',
        bear: '18x', central: '18x', bull: '18x',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        parametre: 'Prix cible',
        bear: '255 €', central: '322 €', bull: '420 €',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        parametre: 'Borne basse (MoE 7 %)',
        bear: '237 €', central: '299 €', bull: '390 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Borne haute (MoE 7 %)',
        bear: '273 €', central: '344 €', bull: '449 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Zone juste r=10 %',
        bear: '158 €', central: '200 €', bull: '261 €',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'Zone juste r=12 %',
        bear: '145 €', central: '183 €', bull: '238 €',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // ── PER — Zone juste · Scénario bear ──────────────────────────────────
  // Prix cible 255 € | Zone juste r=10 % : 158,34 € | Zone juste r=12 % : 144,71 €
  'gtt-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'mos', label: 'MoS sur zone juste', primary: true },
      { key: 'r10', label: 'Entrée r=10 % (€)'                 },
      { key: 'r12', label: 'Entrée r=12 % (€)'                 },
    ],
    lignes: [
      {
        mos: '15 %',
        r10: '134,59', r12: '123,00',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        mos: '20 %',
        r10: '126,67', r12: '115,77',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // ── PER — Zone juste · Scénario central ───────────────────────────────
  // Prix cible 322 € | Zone juste r=10 % : 199,80 € | Zone juste r=12 % : 182,59 €
  'gtt-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'mos', label: 'MoS sur zone juste', primary: true },
      { key: 'r10', label: 'Entrée r=10 % (€)'                 },
      { key: 'r12', label: 'Entrée r=12 % (€)'                 },
    ],
    lignes: [
      {
        mos: '15 %',
        r10: '169,83', r12: '155,20',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        mos: '20 %',
        r10: '159,84', r12: '146,07',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // ── PER — Zone juste · Scénario bull ──────────────────────────────────
  // Prix cible 420 € | Zone juste r=10 % : 260,57 € | Zone juste r=12 % : 238,12 €
  'gtt-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'mos', label: 'MoS sur zone juste', primary: true },
      { key: 'r10', label: 'Entrée r=10 % (€)'                 },
      { key: 'r12', label: 'Entrée r=12 % (€)'                 },
    ],
    lignes: [
      {
        mos: '15 %',
        r10: '221,48', r12: '202,40',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        mos: '20 %',
        r10: '208,46', r12: '190,50',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },
// ─────────────────────────────────────────────────────────────────────────────
// EXAIL TECHNOLOGIES — TABLEAUX DE VALORISATION
// À insérer dans le record TABLEAUX de src/components/ui/Tableau.tsx
//
// DCF : WACC 6,94 % - perpétuelle 2,5 % - FCF Y0 2026 75 M€ - 16,968 M actions
// PER : BPA normalisé 2025 1,45 € - PER central 28x - MoE ±12,6 % (β 0,84 × 15 %)
//       Scénarios CAGR BPA : Bear 15 % - Central 22 % - Bull 30 %
// Niveaux personnels : R10 MoS20 (Surveillance) - R10 MoS25 (Premier renfo) - R12 MoS20 (Achat fort)
// Cours de référence : 110,10 € (mai 2026)
// ─────────────────────────────────────────────────────────────────────────────

  // ── DCF - Paramètres ────────────────────────────────────────────────────
  'exail-technologies-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',     primary: true },
      { key: 'valeur',    label: 'Valeur'                       },
      { key: 'source',    label: 'Source / Note'                },
    ],
    lignes: [
      {
        parametre: 'WACC',
        valeur:    '6,94 %',
        source:    'Re = Rf Bund 2,86 % + β 0,84 × ERP France 4,78 % - pondération E/V 81 %, D/V 19 %',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Croissance perpétuelle',
        valeur:    '2,5 %',
        source:    'Standard sectoriel défense long terme',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'FCF base (Y0 2026)',
        valeur:    '75 M€',
        source:    'FCF 2025 65 M€ + ~15 % implicite Q1 2026 (+40 % CA, levier opérationnel)',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Dette nette retraitée',
        valeur:    '+276 M€',
        source:    "50 % d'equity credit appliqué aux 552 M€ d'ODIRNANE (convention Moody's / S&P)",
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '16,97 M',
        source:    "DEU FY2025 - nombre d'actions dilué fin d'exercice",
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Part valeur terminale (central)',
        valeur:    '~85 %',
        source:    'Au-dessus du seuil de vigilance 75 % - forte sensibilité à la croissance perpétuelle',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // ── DCF - Scénarios ────────────────────────────────────────────────────
  'exail-technologies-dcf-scenarios': {
    colonnes: [
      { key: 'scenario',  label: 'Scénario',             primary: true },
      { key: 'cagr',      label: 'CAGR FCF 5 ans'                      },
      { key: 'hypothese', label: 'Hypothèse principale'                 },
      { key: 'fcf2030',   label: 'FCF projeté 2030'                     },
      { key: 'dcf',       label: 'Valeur DCF / action'                  },
    ],
    lignes: [
      {
        scenario:  'Bear',
        cagr:      '8 %',
        hypothese: 'Normalisation rapide post-2026 - pas de levier opérationnel matériel - marge EBITDA ~22 %',
        fcf2030:   '102 M€',
        dcf:       '104 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        scenario:  'Central',
        cagr:      '18 %',
        hypothese: 'Marge EBITDA franchit 25 % en 2027-2028 - book-to-bill stable 1,2 - conversion FCF/EBITDA améliorée',
        fcf2030:   '145 M€',
        dcf:       '151 €',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        scenario:  'Bull',
        cagr:      '25 %',
        hypothese: 'Marge EBITDA > 27 % - nouvelle phase prises de commandes 2027-2028 - photonique et quantique contribuent',
        fcf2030:   '183 M€',
        dcf:       '191 €',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  // ── DCF - Synthèse croisée ─────────────────────────────────────────────
  'exail-technologies-dcf-synthese': {
    colonnes: [
      { key: 'methode', label: 'Méthode',           primary: true },
      { key: 'bear',    label: 'Scénario bear'                    },
      { key: 'central', label: 'Scénario central'                 },
      { key: 'bull',    label: 'Scénario bull'                    },
    ],
    lignes: [
      {
        methode: 'DCF (FCF opérationnel)',
        bear: '104 €', central: '151 €', bull: '191 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        methode: 'Calculateur PER - prix cible (×28)',
        bear: '82 €', central: '110 €', bull: '151 €',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        methode: 'Zone juste r=10 % (PER)',
        bear: '51 €', central: '68 €', bull: '94 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        methode: 'Cours actuel (15 mai 2026)',
        bear: '110,10 €', central: '110,10 €', bull: '110,10 €',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // ── PER - Les trois scénarios ──────────────────────────────────────────
  // BPA normalisé 2025 : 1,45 € | PER central : 28x | MoE : ±12,6 % (β 0,84 × 15 %)
  // Scénarios révisés : Bear 15 % - Central 22 % - Bull 30 %
  'exail-technologies-per-trois-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',            primary: true },
      { key: 'bear',      label: 'Bear - CAGR 15 %'                    },
      { key: 'central',   label: 'Central - CAGR 22 %'                 },
      { key: 'bull',      label: 'Bull - CAGR 30 %'                    },
    ],
    lignes: [
      {
        parametre: 'BPA normalisé FY2025',
        bear: '1,45 €', central: '1,45 €', bull: '1,45 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'BPA projeté FY2030',
        bear: '2,92 €', central: '3,92 €', bull: '5,38 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'PER central retenu',
        bear: '28x', central: '28x', bull: '28x',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        parametre: 'Prix cible',
        bear: '82 €', central: '110 €', bull: '151 €',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        parametre: 'Borne basse (MoE 12,6 %)',
        bear: '71 €', central: '96 €', bull: '132 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Borne haute (MoE 12,6 %)',
        bear: '92 €', central: '124 €', bull: '170 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Zone juste r=10 %',
        bear: '51 €', central: '68 €', bull: '94 €',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'Zone juste r=12 %',
        bear: '46 €', central: '62 €', bull: '86 €',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // ── PER - Zone juste - Scénario bear ──────────────────────────────────
  // Prix cible 82 € | Zone juste r=10 % : 50,71 € | Zone juste r=12 % : 46,35 €
  'exail-technologies-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'mos', label: 'MoS sur zone juste', primary: true },
      { key: 'r10', label: 'Entrée r=10 % (€)'                 },
      { key: 'r12', label: 'Entrée r=12 % (€)'                 },
    ],
    lignes: [
      {
        mos: '15 %',
        r10: '43,10', r12: '39,40',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        mos: '20 %',
        r10: '40,57', r12: '37,08',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // ── PER - Zone juste - Scénario central ───────────────────────────────
  // Prix cible 110 € | Zone juste r=10 % : 68,13 € | Zone juste r=12 % : 62,27 €
  // MoS du tableau alignées sur les niveaux personnels (Surveillance 20 %, Premier renfo 25 %)
  'exail-technologies-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'mos', label: 'MoS sur zone juste', primary: true },
      { key: 'r10', label: 'Entrée r=10 % (€)'                 },
      { key: 'r12', label: 'Entrée r=12 % (€)'                 },
    ],
    lignes: [
      {
        mos: '20 %',
        r10: '54,50', r12: '49,82',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        mos: '25 %',
        r10: '51,10', r12: '46,70',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // ── PER - Zone juste - Scénario bull ──────────────────────────────────
  // Prix cible 151 € | Zone juste r=10 % : 93,76 € | Zone juste r=12 % : 85,68 €
  'exail-technologies-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'mos', label: 'MoS sur zone juste', primary: true },
      { key: 'r10', label: 'Entrée r=10 % (€)'                 },
      { key: 'r12', label: 'Entrée r=12 % (€)'                 },
    ],
    lignes: [
      {
        mos: '15 %',
        r10: '79,69', r12: '72,83',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        mos: '20 %',
        r10: '75,01', r12: '68,55',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────────
// ROCKWELL AUTOMATION — TABLEAUX DE VALORISATION
// À insérer dans le record TABLEAUX de src/components/ui/Tableau.tsx
//
// DCF : WACC 9,65 % - perpétuelle 2,5 % - FCF TTM 1 339 M$ - 112,9 M actions diluées
// PER : BPA Adjusted TTM 12,24 $ - PER central 34,10x - MoE ±21,2 % (β 1,413 × 15 %)
//       Scénarios CAGR EPS : Bear 4 % - Central 8 % - Bull 11 %
// Niveaux personnels : R10 MoS15 (323,6 $) - R10 MoS20 (304,6 $) - R12 MoS15 (295,7 $)
// Cours de référence : 422,29 $ (20 mai 2026)
// ─────────────────────────────────────────────────────────────────────────────

  // ── DCF - Paramètres ────────────────────────────────────────────────────
  'rockwell-automation-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',     primary: true },
      { key: 'valeur',    label: 'Valeur'                       },
      { key: 'source',    label: 'Source / Note'                },
    ],
    lignes: [
      {
        parametre: 'WACC',
        valeur:    '9,65 %',
        source:    'Re = Rf UST 10Y 4,09 % + β 1,413 × ERP US 4,23 % - pondération E/V 93,2 %, D/V 6,8 %',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Croissance perpétuelle',
        valeur:    '2,5 %',
        source:    'Standard sectoriel industriel mature US',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'FCF base (TTM au 31/03/2026)',
        valeur:    '1 339 M$',
        source:    'OCF TTM 1 525 M$ - Capex TTM 186 M$',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Dette nette',
        valeur:    '3 266 M$',
        source:    'Short-term debt 1 116 + Long-term debt 2 571 - Cash 423 (TTM)',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '112,9 M',
        source:    '10-Q Q2-FY2026 - nombre d\'actions dilué moyen TTM',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Part valeur terminale (central)',
        valeur:    '~72 %',
        source:    'Niveau standard pour un modèle 5 ans sur industriel mature - sensibilité modérée à la perpétuité',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // ── DCF - Scénarios ────────────────────────────────────────────────────
  'rockwell-automation-dcf-scenarios': {
    colonnes: [
      { key: 'scenario',  label: 'Scénario',             primary: true },
      { key: 'cagr',      label: 'CAGR FCF 5 ans'                      },
      { key: 'hypothese', label: 'Hypothèse principale'                 },
      { key: 'fcf2030',   label: 'FCF projeté 2030'                     },
      { key: 'dcf',       label: 'Valeur DCF / action'                  },
    ],
    lignes: [
      {
        scenario:  'Bear',
        cagr:      '3 %',
        hypothese: 'Cycle plat - marges Lifecycle stagnantes - levier opérationnel limité - pas d\'accélération transition software',
        fcf2030:   '1 552 M$',
        dcf:       '147,85 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        scenario:  'Central',
        cagr:      '6,5 %',
        hypothese: 'Aligné guidance FY2026 (+10 % YoY) et CAGR historique long terme - transition software qui contribue progressivement',
        fcf2030:   '1 836 M$',
        dcf:       '179,48 $',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        scenario:  'Bull',
        cagr:      '9 %',
        hypothese: 'Bascule structurelle recurring software - levier marges Software & Control au-delà de 30 % - haut de cycle prolongé',
        fcf2030:   '2 060 M$',
        dcf:       '209,33 $',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  // ── DCF - Synthèse croisée ─────────────────────────────────────────────
  'rockwell-automation-dcf-synthese': {
    colonnes: [
      { key: 'methode', label: 'Méthode',           primary: true },
      { key: 'bear',    label: 'Scénario bear'                    },
      { key: 'central', label: 'Scénario central'                 },
      { key: 'bull',    label: 'Scénario bull'                    },
    ],
    lignes: [
      {
        methode: 'DCF (FCF opérationnel)',
        bear: '147,85 $', central: '179,48 $', bull: '209,33 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        methode: 'Calculateur PER - prix cible (×34,10)',
        bear: '507,8 $', central: '613,1 $', bull: '703,5 $',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        methode: 'Zone juste r=10 % (PER)',
        bear: '315,3 $', central: '380,7 $', bull: '436,8 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        methode: 'Cours actuel (20 mai 2026)',
        bear: '422,29 $', central: '422,29 $', bull: '422,29 $',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // ── PER - Les trois scénarios ──────────────────────────────────────────
  // BPA Adjusted TTM : 12,24 $ | PER central : 34,10x | MoE : ±21,2 % (β 1,413 × 15 %)
  // Scénarios CAGR Adj EPS : Bear 4 % - Central 8 % - Bull 11 %
  'rockwell-automation-per-trois-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',            primary: true },
      { key: 'bear',      label: 'Bear - CAGR 4 %'                     },
      { key: 'central',   label: 'Central - CAGR 8 %'                  },
      { key: 'bull',      label: 'Bull - CAGR 11 %'                    },
    ],
    lignes: [
      {
        parametre: 'BPA Adjusted TTM (31/03/2026)',
        bear: '12,24 $', central: '12,24 $', bull: '12,24 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'BPA Adjusted projeté 2031',
        bear: '14,89 $', central: '17,98 $', bull: '20,63 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'PER central retenu',
        bear: '34,10x', central: '34,10x', bull: '34,10x',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        parametre: 'Prix cible',
        bear: '507,8 $', central: '613,1 $', bull: '703,5 $',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        parametre: 'Borne basse (MoE 21,2 %)',
        bear: '400,2 $', central: '483,1 $', bull: '554,4 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Borne haute (MoE 21,2 %)',
        bear: '615,5 $', central: '743,1 $', bull: '852,6 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Zone juste r=10 %',
        bear: '315,3 $', central: '380,7 $', bull: '436,8 $',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'Zone juste r=12 %',
        bear: '288,1 $', central: '347,9 $', bull: '399,3 $',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // ── PER - Zone juste - Scénario bear ──────────────────────────────────
  // Prix cible 507,8 $ | Zone juste r=10 % : 315,3 $ | Zone juste r=12 % : 288,1 $
  'rockwell-automation-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'mos', label: 'MoS sur zone juste', primary: true },
      { key: 'r10', label: 'Entrée r=10 % ($)'                 },
      { key: 'r12', label: 'Entrée r=12 % ($)'                 },
    ],
    lignes: [
      {
        mos: '15 %',
        r10: '268,01', r12: '244,89',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        mos: '20 %',
        r10: '252,24', r12: '230,48',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // ── PER - Zone juste - Scénario central ───────────────────────────────
  // Prix cible 613,1 $ | Zone juste r=10 % : 380,7 $ | Zone juste r=12 % : 347,9 $
  // MoS alignées sur les niveaux personnels (Premier renforcement 15 %, Renforcement 20 %)
  'rockwell-automation-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'mos', label: 'MoS sur zone juste', primary: true },
      { key: 'r10', label: 'Entrée r=10 % ($)'                 },
      { key: 'r12', label: 'Entrée r=12 % ($)'                 },
    ],
    lignes: [
      {
        mos: '15 %',
        r10: '323,60', r12: '295,72',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        mos: '20 %',
        r10: '304,56', r12: '278,32',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // ── PER - Zone juste - Scénario bull ──────────────────────────────────
  // Prix cible 703,5 $ | Zone juste r=10 % : 436,8 $ | Zone juste r=12 % : 399,3 $
  'rockwell-automation-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'mos', label: 'MoS sur zone juste', primary: true },
      { key: 'r10', label: 'Entrée r=10 % ($)'                 },
      { key: 'r12', label: 'Entrée r=12 % ($)'                 },
    ],
    lignes: [
      {
        mos: '15 %',
        r10: '371,28', r12: '339,41',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        mos: '20 %',
        r10: '349,44', r12: '319,44',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },
  // ============================================================
// MSCI Inc. — Blocs tableaux pour src/components/ui/Tableau.tsx
// A insérer dans le record TABLEAUX de Tableau.tsx
// ============================================================
// Paramètres DCF : FCF TTM $1 458,6 M$, WACC 7,88%, g 2,5%, dette nette $5 687 M, 76,6 M actions
// Paramètres PER : BPA Adj FY2025 $17,28, CAGR central 12% (Pierre Q2-B), r=10%, n=5 ans, MoE 16,0%
// Scénarios bear/bull : 4%/12% CAGR FCF | 7%/16% CAGR BPA | PER exit 28x/40x
// Cours de référence : $588,55 (22/05/2026)
// ============================================================

// -------------------------------------------------------
// 1. DCF - Paramètres du modèle
// -------------------------------------------------------
'msci-dcf-parametres': {
  colonnes: [
    { key: 'parametre', label: 'Parametre', primary: true },
    { key: 'valeur',    label: 'Valeur'                  },
    { key: 'source',    label: 'Source / Note'           },
  ],
  lignes: [
    {
      parametre:   'WACC',
      valeur:      '7,88 %',
      source:      'Rf 4,09 % (UST 10 ans) + ERP 4,60 % (Damodaran US) x Beta 1,069',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      parametre:   'Croissance perpetuelle (g)',
      valeur:      '2,5 %',
      source:      'Plancher conservateur : inflation US longue (~2,2 %) + croissance reelle faible. Sensibilite : +/-0,5 pp sur g = +/-11 % sur equity value',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'FCF reference (FY2025 TTM)',
      valeur:      '1 458,6 M$',
      source:      'OCF 1 588,4 M$ - Capex industriel 129,9 M$ (PP&E + logiciel capitalise). Convention La These : OCF - capex industriel, hors acquisitions financieres',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'Dette nette',
      valeur:      '5 687,0 M$',
      source:      'Dettes financieres brutes 6 028,0 M$ - tresorerie 341,0 M$ au 31/03/2026',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'Actions diluees',
      valeur:      '76,6 M',
      source:      'Actions diluees FY2025. Base stable (rachats ~1,5-2 % / an compensant le SBC ~0,6 %)',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'Horizon de projection',
      valeur:      '5 ans',
      source:      'FY2026-FY2030. Valeur terminale calculee a partir du FCF FY2030 x (1+g) / (WACC - g)',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   '% Valeur terminale / EV',
      valeur:      '78-80 %',
      source:      'Structurel sur les business asset-light a faible capex. Sensibilite au WACC et a g elevee. Cela confirme que le DCF est moins adapte que le PER pour valoriser MSCI (voir Lecture croisee)',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

// -------------------------------------------------------
// 2. DCF - Scénarios (projections FCF 2026-2030)
// -------------------------------------------------------
'msci-dcf-scenarios': {
  colonnes: [
    { key: 'parametre', label: 'Parametre',       primary: true },
    { key: 'bear',      label: 'Bear (CAGR 4 %)'              },
    { key: 'central',   label: 'Central (CAGR 8 %)' },
    { key: 'bull',      label: 'Bull (CAGR 12 %)'             },
  ],
  lignes: [
    {
      parametre:   'FCF FY2025 (base)',
      bear:        '1 458,6 M$',
      central:     '1 458,6 M$',
      bull:        '1 458,6 M$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'FCF annee 1 (FY2026)',
      bear:        '1 516,9 M$',
      central:     '1 575,3 M$',
      bull:        '1 633,6 M$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'FCF annee 3 (FY2028)',
      bear:        '1 640,7 M$',
      central:     '1 837,4 M$',
      bull:        '2 049,2 M$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'FCF annee 5 (FY2030)',
      bear:        '1 774,7 M$',
      central:     '2 143,1 M$',
      bull:        '2 570,5 M$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'Somme VAN FCF (5 ans)',
      bear:        '6 543 M$',
      central:     '7 317 M$',
      bull:        '8 171 M$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'Valeur terminale (brute)',
      bear:        '33 811 M$',
      central:     '40 831 M$',
      bull:        '48 966 M$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'VAN valeur terminale',
      bear:        '23 138 M$',
      central:     '27 942 M$',
      bull:        '33 508 M$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   '% VT / EV total',
      bear:        '77,9 %',
      central:     '79,3 %',
      bull:        '80,4 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'EV totale actualisee',
      bear:        '29 681 M$',
      central:     '35 259 M$',
      bull:        '41 679 M$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'Equity value totale',
      bear:        '23 994 M$',
      central:     '29 572 M$',
      bull:        '35 992 M$',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'Equity value par action',
      bear:        '313 $',
      central:     '386 $',
      bull:        '470 $',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

// -------------------------------------------------------
// 3. DCF - Synthèse
// -------------------------------------------------------
'msci-dcf-synthese': {
  colonnes: [
    { key: 'scenario',  label: 'Scenario',                    primary: true },
    { key: 'cagr',      label: 'CAGR FCF'                                  },
    { key: 'equity',    label: 'Equity value / action'                      },
    { key: 'upside',    label: 'Ecart vs cours 589 $'                       },
  ],
  lignes: [
    {
      scenario:    'Bear - normalisation sectorielle',
      cagr:        '4 %',
      equity:      '313 $',
      upside:      '-47 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      scenario:    'Central - poursuite regime actuel',
      cagr:        '8 %',
      equity:      '386 $',
      upside:      '-34 %',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      scenario:    'Bull - reacceleration + synergies OneMSCI',
      cagr:        '12 %',
      equity:      '470 $',
      upside:      '-20 %',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      scenario:    'Cours actuel (589 $) vs DCF',
      cagr:        '',
      equity:      '589 $',
      upside:      'Prime de 53 % vs central DCF - le DCF sous-evalue MSCI (voir Lecture croisee)',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

// -------------------------------------------------------
// 4. PER - Les trois scénarios côte à côte
// -------------------------------------------------------
'msci-per-trois-scenarios': {
  colonnes: [
    { key: 'parametre', label: 'Parametre',            primary: true },
    { key: 'bear',      label: 'Bear (CAGR 7 %)'                    },
    { key: 'central',   label: 'Central (CAGR 12 %)'               },
    { key: 'bull',      label: 'Bull (CAGR 16 %)'                   },
  ],
  lignes: [
    {
      parametre:   'BPA Adj FY2025 (reference)',
      bear:        '17,28 $',
      central:     '17,28 $',
      bull:        '17,28 $',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'CAGR BPA ajuste (5 ans)',
      bear:        '7 %',
      central:     '12 %',
      bull:        '16 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'BPA Adj projete FY2030',
      bear:        '24,24 $',
      central:     '30,46 $',
      bull:        '36,29 $',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'PER de sortie retenu',
      bear:        '28x',
      central:     '35x',
      bull:        '40x',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre:   'Prix cible a horizon 5 ans',
      bear:        '679 $',
      central:     '1 066 $',
      bull:        '1 452 $',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      parametre:   'Zone juste actualisee (r=10 %)',
      bear:        '421 $',
      central:     '662 $',
      bull:        '901 $',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
    {
      parametre:   'Ecart vs cours 589 $',
      bear:        '-28 % (cours > zone juste bear)',
      central:     '+11 % (cours sous zone juste)',
      bull:        '+35 % (marge de securite correcte)',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
  ],
},

// -------------------------------------------------------
// 5. PER Zone juste - Scénario Bear
// -------------------------------------------------------
'msci-per-zone-bear': {
  compact: true,
  colonnes: [
    { key: 'mos',     label: 'Marge de securite',   primary: true },
    { key: 'entree',  label: "Prix d'entree ($)"                  },
    { key: 'note',    label: 'Contexte'                           },
  ],
  lignes: [
    {
      mos:     'Rappel : zone juste bear = 421 $',
      entree:  '',
      note:    'BPA Adj FY2030 24,24 $ x PER 28x = 679 $ / (1,10)^5',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:     '0 % (zone juste seule)',
      entree:  '421 $',
      note:    'Entree si on suppose que le bear est le scenario le plus probable',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:     '5 %',
      entree:  '400 $',
      note:    'Entree prudente scenario bear',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:     '10 %',
      entree:  '379 $',
      note:    'Achat equilibre scenario bear',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      mos:     '15 %',
      entree:  '358 $',
      note:    'Achat fort scenario bear',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:     '20 %',
      entree:  '337 $',
      note:    'Achat agressif scenario bear (repli de marche severe)',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:     'Cours actuel : 589 $',
      entree:  '',
      note:    'Prime de 40 % vs zone juste bear (589 $ / 421 $ - 1) : cours incompatible avec scenario bear',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},

// -------------------------------------------------------
// 6. PER Zone juste - Scénario Central
// -------------------------------------------------------
'msci-per-zone-central': {
  compact: true,
  colonnes: [
    { key: 'mos',     label: 'Marge de securite',   primary: true },
    { key: 'entree',  label: "Prix d'entree ($)"                  },
    { key: 'note',    label: 'Contexte'                           },
  ],
  lignes: [
    {
      mos:     'Rappel : zone juste centrale = 662 $',
      entree:  '',
      note:    'BPA Adj FY2030 30,46 $ x PER 35x = 1 066 $ / (1,10)^5. Methode primaire recommandee pour MSCI',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      mos:     '0 % (zone juste seule)',
      entree:  '662 $',
      note:    'Entree si marge de securite non exigee (qualite du business)',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:     '5 %',
      entree:  '629 $',
      note:    'Entree avec marge minimale - profil large cap, moat documente',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      mos:     '10 %',
      entree:  '596 $',
      note:    'Achat equilibre - correspond au cours actuel (589 $). Zone d\'entree actuelle',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
    {
      mos:     '15 %',
      entree:  '563 $',
      note:    'Achat fort - correction de -5 % depuis le cours actuel',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:     '20 %',
      entree:  '530 $',
      note:    'Achat agressif - correction de -10 % depuis le cours actuel',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:     'Cours actuel : 589 $',
      entree:  '',
      note:    'MoS de +11 % vs zone juste centrale (662 $ - 589 $) / 662 $ = 11 %. Marge de securite correcte selon methode primaire PER',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
  ],
},

// -------------------------------------------------------
// 7. PER Zone juste - Scénario Bull
// -------------------------------------------------------
'msci-per-zone-bull': {
  compact: true,
  colonnes: [
    { key: 'mos',     label: 'Marge de securite',   primary: true },
    { key: 'entree',  label: "Prix d'entree ($)"                  },
    { key: 'note',    label: 'Contexte'                           },
  ],
  lignes: [
    {
      mos:     'Rappel : zone juste bull = 901 $',
      entree:  '',
      note:    'BPA Adj FY2030 36,29 $ x PER 40x = 1 452 $ / (1,10)^5. Scenario reacceleration + synergies OneMSCI',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      mos:     '0 % (zone juste seule)',
      entree:  '901 $',
      note:    'Entree si on est convaincu du scenario bull',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:     '5 %',
      entree:  '856 $',
      note:    'Entree prudente scenario bull',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:     '10 %',
      entree:  '811 $',
      note:    'Achat equilibre scenario bull',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:     '15 %',
      entree:  '766 $',
      note:    'Achat fort scenario bull',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      mos:     '20 %',
      entree:  '721 $',
      note:    'Achat agressif scenario bull',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:     'Cours actuel : 589 $',
      entree:  '',
      note:    'MoS de +35 % vs zone juste bull (901 $ - 589 $) / 901 $ = 35 %. Marge de securite forte si le scenario bull se realise',
      _headerBg:   '#1B4332',
      _headerText: '#F7F4EF',
    },
  ],
},
// ── now-dcf-parametres ─────────────────────────────────────────────────────
'now-dcf-parametres': {
  colonnes: [
    { key: 'parametre', label: 'Paramètre', primary: true },
    { key: 'valeur',    label: 'Valeur'                  },
    { key: 'source',    label: 'Source / Note'           },
  ],
  lignes: [
    {
      parametre: 'WACC',
      valeur:    '7,70 %',
      source:    'Re 7,77 % (Rf UST 4,09 % + β 0,87 × ERP 4,23 %) + Rd ap. IS 1,14 % pondéré dette/capi',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      parametre: 'Taux sans risque (Rf)',
      valeur:    '4,09 %',
      source:    'UST 10 ans au 31/12/2025',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'ERP',
      valeur:    '4,23 %',
      source:    'Damodaran US (mature market, sans CRP)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Beta',
      valeur:    '0,87',
      source:    'Régression mensuelle 5 ans vs S&P 500 Total Return',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Croissance perpétuelle',
      valeur:    '2,5 %',
      source:    'Inflation long terme + croissance économique réelle modérée',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Horizon explicite',
      valeur:    '5 ans',
      source:    'Convention La Thèse pour compounder en transition',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'FCF base FY2025',
      valeur:    '4 576 M$',
      source:    'OCF 5 444 - Capex 868 (10-K FY2025)',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      parametre: 'Trésorerie nette',
      valeur:    '2 235 M$',
      source:    'Cash 3 726 - Dette LT 1 491 (sans marketable securities)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Actions diluées post-split',
      valeur:    '1 046,7 M',
      source:    'Split 5:1 effectif 17/12/2025, retraitement rétroactif',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

// ── now-dcf-scenarios ──────────────────────────────────────────────────────
'now-dcf-scenarios': {
  colonnes: [
    { key: 'scenario',     label: 'Scénario',                  primary: true },
    { key: 'cagrFcf',      label: 'CAGR FCF 5 ans'                          },
    { key: 'evActualisee', label: 'EV actualisée (M$)'                      },
    { key: 'equity',       label: 'Equity (M$)'                             },
    { key: 'prixAction',   label: 'Prix / action ($)'                       },
  ],
  lignes: [
    {
      scenario:     'Bear',
      cagrFcf:      '+14 %',
      evActualisee: '147 052',
      equity:       '149 287',
      prixAction:   '142,6',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      scenario:     'Central',
      cagrFcf:      '+22 %',
      evActualisee: '202 003',
      equity:       '204 238',
      prixAction:   '195,1',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      scenario:     'Bull',
      cagrFcf:      '+28 %',
      evActualisee: '253 429',
      equity:       '255 664',
      prixAction:   '244,3',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
    {
      scenario:     'Cours actuel (26/05/2026)',
      cagrFcf:      'Implicite ~9 %',
      evActualisee: '~102 350',
      equity:       '~104 585',
      prixAction:   '99,92',
      _headerBg: '#1B4332', _headerText: '#F7F4EF',
    },
  ],
},

// ── now-dcf-synthese (a placer en section Lecture croisee) ─────────────────
'now-dcf-synthese': {
  colonnes: [
    { key: 'lecture',         label: 'Lecture',           primary: true },
    { key: 'dcfActualise',    label: 'DCF actualisé ($)'                },
    { key: 'perRdix',         label: 'PER zone juste r=10 % ($)'        },
    { key: 'ecart',           label: 'Convergence / Écart'              },
  ],
  lignes: [
    {
      lecture:      'Bear',
      dcfActualise: '142,6',
      perRdix:      '146,8',
      ecart:        '+3 % - méthodes convergentes',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      lecture:      'Central',
      dcfActualise: '195,1',
      perRdix:      '206,2',
      ecart:        '+6 % - méthodes convergentes',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      lecture:      'Bull',
      dcfActualise: '244,3',
      perRdix:      '262,1',
      ecart:        '+7 % - méthodes convergentes',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
    {
      lecture:      'Cours actuel',
      dcfActualise: '99,92',
      perRdix:      '99,92',
      ecart:        'Décote ~51 % sur zone juste centrale actualisée',
      _headerBg: '#1B4332', _headerText: '#F7F4EF',
    },
  ],
},

// ── now-per-trois-scenarios ────────────────────────────────────────────────
'now-per-trois-scenarios': {
  colonnes: [
    { key: 'scenario',     label: 'Scénario',         primary: true },
    { key: 'cagrEps',      label: 'CAGR Adj EPS'                    },
    { key: 'bpaProj',      label: 'BPA projeté 2030 ($)'            },
    { key: 'perCentral',   label: 'PER central'                     },
    { key: 'prixCible',    label: 'Prix cible 5 ans ($)'            },
  ],
  lignes: [
    {
      scenario:    'Bear',
      cagrEps:     '+14 %',
      bpaProj:     '6,76',
      perCentral:  '35x',
      prixCible:   '236,5',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      scenario:    'Central',
      cagrEps:     '+22 %',
      bpaProj:     '9,49',
      perCentral:  '35x',
      prixCible:   '332,0',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      scenario:    'Bull',
      cagrEps:     '+28 %',
      bpaProj:     '12,06',
      perCentral:  '35x',
      prixCible:   '422,1',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
  ],
},

// ── now-per-zone-bear ──────────────────────────────────────────────────────
'now-per-zone-bear': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 99,92 $'              },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '161,0 $',
      mosCours:  'Décote 38 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '146,8 $',
      mosCours:  'Décote 32 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '134,2 $',
      mosCours:  'Décote 26 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

// ── now-per-zone-central ───────────────────────────────────────────────────
'now-per-zone-central': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 99,92 $'              },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '226,0 $',
      mosCours:  'Décote 56 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '206,2 $',
      mosCours:  'Décote 52 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '188,4 $',
      mosCours:  'Décote 47 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

// ── now-per-zone-bull ──────────────────────────────────────────────────────
'now-per-zone-bull': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 99,92 $'              },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '287,2 $',
      mosCours:  'Décote 65 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '262,1 $',
      mosCours:  'Décote 62 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '239,5 $',
      mosCours:  'Décote 58 %',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
  ],
},

// ════════════════════════════════════════════════════════════════════════════
// AUTODESK (ADSK) - valorisation PER normalise (SBC en charge) primaire
// ════════════════════════════════════════════════════════════════════════════

// ── autodesk-dcf-parametres (DCF de confirmation sur FCF owner) ─────────────
'autodesk-dcf-parametres': {
  colonnes: [
    { key: 'parametre', label: 'Paramètre', primary: true },
    { key: 'valeur',    label: 'Valeur'                  },
    { key: 'source',    label: 'Source / Note'           },
  ],
  lignes: [
    {
      parametre: 'WACC',
      valeur:    '9,4 %',
      source:    'Re 9,5 % (Rf UST 4,1 % + β 1,288 × ERP 4,2 %) + Rd ap. IS ~2,0 % pondéré dette 4 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      parametre: 'FCF de référence (owner FY27)',
      valeur:    '2 067 M$',
      source:    'FCF publié (guidance 2 750) - SBC après IS 683 : la SBC est passée en charge',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      parametre: 'Taux sans risque (Rf)',
      valeur:    '4,1 %',
      source:    'UST 10 ans au 31/01/2026 (pas de plancher 2 % en environnement US)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'ERP',
      valeur:    '4,2 %',
      source:    'Damodaran US (mature market, sans CRP)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Bêta',
      valeur:    '1,288',
      source:    'Régression mensuelle 5 ans vs S&P 500 Total Return',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Croissance FCF owner',
      valeur:    '~12 % central',
      source:    'SBC se normalisant de 11 % vers 8 % du CA (discipline Starboard)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Croissance perpétuelle',
      valeur:    '3,0 %',
      source:    'Central (2,5 % bear, 3,5 % bull) : moat durable, tailwind digitalisation',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Trésorerie nette',
      valeur:    '+490 M$',
      source:    'Net cash : dette financière 2 483 - cash & placements 2 973',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Actions diluées',
      valeur:    '214 M',
      source:    'Nombre d actions en baisse (rachats > dilution SBC)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

// ── autodesk-dcf-scenarios (FCF owner, SBC passee en charge) ───────────────
'autodesk-dcf-scenarios': {
  colonnes: [
    { key: 'scenario',     label: 'Scénario',                  primary: true },
    { key: 'cagrFcf',      label: 'CAGR FCF owner'                           },
    { key: 'gPerp',        label: 'g perpétuel'                              },
    { key: 'equity',       label: 'Equity (M$)'                             },
    { key: 'prixAction',   label: 'Prix / action ($)'                       },
  ],
  lignes: [
    {
      scenario:   'Bear',
      cagrFcf:    '+8 %',
      gPerp:      '2,5 %',
      equity:     '36 356',
      prixAction: '170',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      scenario:   'Central',
      cagrFcf:    '+12 %',
      gPerp:      '3,0 %',
      equity:     '43 807',
      prixAction: '205',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      scenario:   'Bull',
      cagrFcf:    '+16 %',
      gPerp:      '3,5 %',
      equity:     '53 052',
      prixAction: '248',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
    {
      scenario:   'Cours actuel (04/06/2026)',
      cagrFcf:    'Implicite : SBC non passée en charge',
      gPerp:      '-',
      equity:     '50 000',
      prixAction: '233,64',
      _headerBg: '#1B4332', _headerText: '#F7F4EF',
    },
  ],
},

// ── autodesk-dcf-synthese (Lecture croisee : le referendum SBC) ────────────
'autodesk-dcf-synthese': {
  colonnes: [
    { key: 'methode',     label: 'Méthode',                   primary: true },
    { key: 'justeValeur', label: 'Juste valeur centrale ($)'                },
    { key: 'sbc',         label: 'Traitement SBC'                           },
    { key: 'lecture',     label: 'Lecture'                                  },
  ],
  lignes: [
    {
      methode:     'DCF owner FCF (actualisé)',
      justeValeur: '205',
      sbc:         'en charge',
      lecture:     'Mon ancrage',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      methode:     'PER normalisé - zone juste r=10 %',
      justeValeur: '214',
      sbc:         'en charge',
      lecture:     'Confirmation',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      methode:     'EV/FCF owner',
      justeValeur: '212',
      sbc:         'en charge',
      lecture:     'Confirmation',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      methode:     'Consensus / PER non-GAAP 26x',
      justeValeur: '290-325',
      sbc:         'ignorée',
      lecture:     'Décote apparente ~40 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      methode:     'Cours actuel (04/06/2026)',
      justeValeur: '233,64',
      sbc:         '-',
      lecture:     'Prime ~9 % vs juste valeur, SBC passée en charge',
      _headerBg: '#1B4332', _headerText: '#F7F4EF',
    },
  ],
},

// ── autodesk-per-trois-scenarios ───────────────────────────────────────────
'autodesk-per-trois-scenarios': {
  colonnes: [
    { key: 'scenario',   label: 'Scénario',              primary: true },
    { key: 'cagrEps',    label: 'CAGR BPA normalisé'                   },
    { key: 'bpaProj',    label: 'BPA projeté 5 ans ($)'                },
    { key: 'perCentral', label: 'PER central'                         },
    { key: 'prixCible',  label: 'Prix cible 5 ans ($)'                },
  ],
  lignes: [
    {
      scenario:   'Bear',
      cagrEps:    '+8 %',
      bpaProj:    '10,29',
      perCentral: '28x',
      prixCible:  '288',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      scenario:   'Central',
      cagrEps:    '+12 %',
      bpaProj:    '12,34',
      perCentral: '28x',
      prixCible:  '345',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      scenario:   'Bull',
      cagrEps:    '+16 %',
      bpaProj:    '14,70',
      perCentral: '28x',
      prixCible:  '412',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
  ],
},

// ── autodesk-per-zone-bear ─────────────────────────────────────────────────
'autodesk-per-zone-bear': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 233,64 $'             },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '196,0 $',
      mosCours:  'Prime 19 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '178,8 $',
      mosCours:  'Prime 31 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '163,4 $',
      mosCours:  'Prime 43 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

// ── autodesk-per-zone-central ──────────────────────────────────────────────
'autodesk-per-zone-central': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 233,64 $'             },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '234,8 $',
      mosCours:  'Juste prix',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '214,2 $',
      mosCours:  'Prime 9 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '195,8 $',
      mosCours:  'Prime 19 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

// ── autodesk-per-zone-bull ─────────────────────────────────────────────────
'autodesk-per-zone-bull': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 233,64 $'             },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '280,4 $',
      mosCours:  'Décote 17 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '255,8 $',
      mosCours:  'Décote 9 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '233,8 $',
      mosCours:  'Juste prix',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
  ],
},

// ── DCF : parametres du modele ──────────────────────────────────────────────
  'apr-corporation-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'valeur',    label: 'Valeur'                  },
      { key: 'source',    label: 'Source / Note'           },
    ],
    lignes: [
      {
        parametre: 'WACC',
        valeur:    '8,4 %',
        source:    "CAPM tout-equity (zero dette financière)",
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        parametre: 'Bêta',
        valeur:    '1,10',
        source:    "Sectoriel bottom-up (régression KOSPI 0,47 écartée : historique coté trop court)",
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Taux sans risque',
        valeur:    '3,385 %',
        source:    'KTB Corée 10 ans (pas de plancher 2 %)',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Prime de risque actions',
        valeur:    '4,65 %',
        source:    'Damodaran marché mûr 4,23 % + CRP Corée 0,42 %',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Croissance perpétuelle (g)',
        valeur:    '3,0 %',
        source:    'Scénario central (2,5 % bear, 3,5 % bull)',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Trésorerie nette',
        valeur:    'environ 190 Md KRW',
        source:    'Hors IFRS 16, zéro dette financière',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '37,4 M',
        source:    'Post-split 5:1, rachats nets 2025',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Poids de la valeur terminale',
        valeur:    '82 %',
        source:    "Scénario central : sensibilité élevée à g, MoS 25 % appliquée",
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // ── DCF : scenarios ─────────────────────────────────────────────────────────
  'apr-corporation-dcf-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario',                primary: true },
      { key: 'croissance', label: 'CAGR FCF (Y1 à Y5, %/an)'           },
      { key: 'g',        label: 'g perpétuelle'                         },
      { key: 'valeur',   label: 'Valeur DCF / action'                  },
    ],
    lignes: [
      {
        scenario:   'Conservateur (bear)',
        croissance: '+45 / 20 / 12 / 8 / 5',
        g:          '2,5 %',
        valeur:     '292 000 KRW',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        scenario:   'Central',
        croissance: '+52 / 32 / 23 / 16 / 12',
        g:          '3,0 %',
        valeur:     '441 000 KRW',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        scenario:   'Optimiste (bull)',
        croissance: '+65 / 44 / 30 / 22 / 16',
        g:          '3,5 %',
        valeur:     '642 000 KRW',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  // ── Synthese : DCF vs Zone juste PER vs Prix cible ──────────────────────────
  'apr-corporation-dcf-synthese': {
    colonnes: [
      { key: 'scenario', label: 'Scénario',                    primary: true },
      { key: 'dcf',      label: 'DCF / action'                              },
      { key: 'zone',     label: 'Zone juste PER (r=10 %)'                    },
      { key: 'cible',    label: 'Prix cible (horizon 2030)'                  },
    ],
    lignes: [
      {
        scenario: 'Conservateur (bear)',
        dcf:      '292 000 KRW',
        zone:     '191 000 KRW',
        cible:    '307 000 KRW',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        scenario: 'Central',
        dcf:      '441 000 KRW',
        zone:     '338 000 KRW',
        cible:    '544 000 KRW',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        scenario: 'Optimiste (bull)',
        dcf:      '642 000 KRW',
        zone:     '587 000 KRW',
        cible:    '945 000 KRW',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
      {
        scenario: 'Cours actuel (28/05/2026)',
        dcf:      '400 500 KRW',
        zone:     'prime de 18 % / zone centrale',
        cible:    'décote DCF 9 % (< MoS 25 %)',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // ── Calculateur PER : les trois scenarios ───────────────────────────────────
  'apr-corporation-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario',              primary: true },
      { key: 'bpa',      label: 'BPA 2030 (KRW)'                       },
      { key: 'per',      label: 'PER cible'                            },
      { key: 'cible',    label: 'Prix cible (KRW)'                     },
      { key: 'zone',     label: 'Zone juste r=10 % (KRW)'             },
    ],
    lignes: [
      {
        scenario: 'Bear',
        bpa:      'environ 17 100',
        per:      '18x',
        cible:    'environ 307 000',
        zone:     '191 000',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        scenario: 'Central',
        bpa:      'environ 24 700',
        per:      '22x',
        cible:    'environ 544 000',
        zone:     '338 000',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        scenario: 'Bull',
        bpa:      'environ 33 700',
        per:      '28x',
        cible:    'environ 945 000',
        zone:     '587 000',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  // ── Zone juste - scenario bear (compact) ────────────────────────────────────
  'apr-corporation-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'rendement', label: 'Rendement exigé',        primary: true },
      { key: 'zone',      label: 'Zone juste'                            },
      { key: 'zoneMos',   label: 'Zone juste - MoS 25 %'                 },
    ],
    lignes: [
      {
        rendement: 'r = 10 %',
        zone:      '191 000 KRW',
        zoneMos:   '143 000 KRW',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        rendement: 'r = 12 %',
        zone:      '174 000 KRW',
        zoneMos:   '131 000 KRW',
      },
    ],
  },

  // ── Zone juste - scenario central (compact) ─────────────────────────────────
  'apr-corporation-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'rendement', label: 'Rendement exigé',        primary: true },
      { key: 'zone',      label: 'Zone juste'                            },
      { key: 'zoneMos',   label: 'Zone juste - MoS 25 %'                 },
    ],
    lignes: [
      {
        rendement: 'r = 10 %',
        zone:      '338 000 KRW',
        zoneMos:   '254 000 KRW',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        rendement: 'r = 12 %',
        zone:      '309 000 KRW',
        zoneMos:   '232 000 KRW',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // ── Zone juste - scenario bull (compact) ────────────────────────────────────
  'apr-corporation-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'rendement', label: 'Rendement exigé',        primary: true },
      { key: 'zone',      label: 'Zone juste'                            },
      { key: 'zoneMos',   label: 'Zone juste - MoS 25 %'                 },
    ],
    lignes: [
      {
        rendement: 'r = 10 %',
        zone:      '587 000 KRW',
        zoneMos:   '440 000 KRW',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
      {
        rendement: 'r = 12 %',
        zone:      '536 000 KRW',
        zoneMos:   '402 000 KRW',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
// OTC MARKETS GROUP (OTCM) -Bloc a inserer dans le record TABLEAUX de
// src/components/ui/Tableau.tsx
// DCF (parametres + scenarios + synthese) + Calculateur PER (3 scenarios + 3 zones).
// Inputs valides : WACC 6,31 % (beta 0,547 vs S&P 500 TR), base FCF ajustee SBC 40,5 M$,
// croissance normalisee 3/6/10 %, BPA TTM 2,66 $, PER central 19,5x, r exige 10 %.
// ─────────────────────────────────────────────────────────────────────────────

  // ── DCF : parametres ────────────────────────────────────────────────────────
  'otc-markets-group-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Parametre', primary: true },
      { key: 'valeur',    label: 'Valeur'                    },
      { key: 'source',    label: 'Source / Note'             },
    ],
    lignes: [
      {
        parametre: 'WACC',
        valeur:    '6,31 %',
        source:    'CAPM. Poids dette 1,4 % (baux), Rd environ 0 : WACC environ Re.',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        parametre: 'Beta',
        valeur:    '0,547',
        source:    'Regression mensuelle 5 ans vs S&P 500 Total Return.',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Taux sans risque (Rf)',
        valeur:    '4,088 %',
        source:    'UST 10 ans au 31/12/2025 (pas de plancher 2 %).',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Prime de risque (ERP)',
        valeur:    '4,23 %',
        source:    'Damodaran US, marche mur, sans prime pays.',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Croissance perpetuelle',
        valeur:    '2,5 %',
        source:    'Convention La These (rente recurrente mature).',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Horizon explicite',
        valeur:    '5 ans',
        source:    'Projection 2026-2030.',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Base FCF (ajustee SBC)',
        valeur:    '40,5 M$',
        source:    'OCF 48,6 - remuneration en actions 6,8 - capex normalise 1,3.',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        parametre: 'Tresorerie nette ajoutee',
        valeur:    '+40,5 M$',
        source:    'Tresorerie et placements - obligations locatives.',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        parametre: 'Actions diluees',
        valeur:    '11,865 M',
        source:    'Moyenne diluee Q1-2026.',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // ── DCF : scenarios ─────────────────────────────────────────────────────────
  'otc-markets-group-dcf-scenarios': {
    colonnes: [
      { key: 'scenario',   label: 'Scenario',          primary: true },
      { key: 'croissance', label: 'Croiss. FCF'                      },
      { key: 'fcf5',       label: 'FCF an 5'                         },
      { key: 'valeur',     label: 'Valeur / action'                  },
      { key: 'vt',         label: 'Poids val. terminale'             },
    ],
    lignes: [
      {
        scenario: 'Bear', croissance: '3 %', fcf5: '47 M$', valeur: '97 $', vt: '83 %',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        scenario: 'Central', croissance: '6 %', fcf5: '54 M$', valeur: '111 $', vt: '84 %',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        scenario: 'Bull', croissance: '10 %', fcf5: '65 M$', valeur: '131 $', vt: '85 %',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  // ── DCF : synthese / pont (a placer en Lecture croisee) ─────────────────────
  'otc-markets-group-dcf-synthese': {
    colonnes: [
      { key: 'element', label: 'Element',  primary: true },
      { key: 'valeur',  label: 'Valeur'                  },
      { key: 'lecture', label: 'Lecture'                 },
    ],
    lignes: [
      {
        element: 'DCF central (WACC 6,31 %)',
        valeur:  '111 $',
        lecture: 'Valeur intrinseque, mais 84 % en valeur terminale (hyper-sensible au WACC).',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        element: 'Zone juste DCF actualisee a r = 10 %',
        valeur:  '94 $',
        lecture: 'Pont : on actualise la valeur future au rendement exige plutot qu\'au WACC.',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        element: 'Zone juste PER centrale (r = 10 %)',
        valeur:  '43 $',
        lecture: 'Vue par les benefices : ignore la rente perpetuelle.',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        element: 'Cours actuel',
        valeur:  '52 $',
        lecture: 'Entre les deux methodes, beaucoup plus pres du PER.',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        element: 'WACC implicite au cours',
        valeur:  '10,8 %',
        lecture: 'Rendement exige par le marche : 4,5 pts au-dessus du WACC CAPM.',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
    ],
  },

  // ── DCF : sensibilite WACC x croissance (a placer en Lecture croisee) ───────
  'otc-markets-group-dcf-sensibilite': {
    colonnes: [
      { key: 'wacc', label: 'WACC',        primary: true },
      { key: 'g3',   label: 'Croiss. 3 %'                },
      { key: 'g6',   label: 'Croiss. 6 %'                },
      { key: 'g10',  label: 'Croiss. 10 %'               },
    ],
    lignes: [
      { wacc: '5,5 %',           g3: '123 $', g6: '140 $', g10: '167 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { wacc: '6,0 %',           g3: '106 $', g6: '120 $', g10: '143 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { wacc: '6,31 % (retenu)', g3: '97 $',  g6: '111 $', g10: '131 $', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { wacc: '7,0 %',           g3: '83 $',  g6: '94 $',  g10: '111 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { wacc: '7,5 %',           g3: '75 $',  g6: '85 $',  g10: '100 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { wacc: '8,0 %',           g3: '68 $',  g6: '77 $',  g10: '91 $',  _headerBg: '#E0DBCF', _headerText: '#44403C' },
    ],
  },

  // ── Calculateur PER : 3 scenarios ───────────────────────────────────────────
  'otc-markets-group-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario',   label: 'Scenario',     primary: true },
      { key: 'croissance', label: 'Croiss. BPA'                 },
      { key: 'bpa5',       label: 'BPA a 5 ans'                 },
      { key: 'per',        label: 'PER de sortie'               },
      { key: 'cible',      label: 'Cible 5 ans'                 },
      { key: 'zonejuste',  label: 'Zone juste (r=10 %)'         },
    ],
    lignes: [
      {
        scenario: 'Bear', croissance: '3 %', bpa5: '3,08 $', per: '19,5x', cible: '60 $', zonejuste: '37 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        scenario: 'Central', croissance: '6 %', bpa5: '3,56 $', per: '19,5x', cible: '69 $', zonejuste: '43 $',
        _headerBg: '#C9A84C', _headerText: '#1C1917',
      },
      {
        scenario: 'Bull', croissance: '10 %', bpa5: '4,28 $', per: '19,5x', cible: '84 $', zonejuste: '52 $',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  // ── Zone juste PER : scenario bear (compact) ────────────────────────────────
  'otc-markets-group-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'parametre', label: 'Bear (croiss. 3 %)', primary: true },
      { key: 'valeur',    label: ''                                   },
    ],
    lignes: [
      { parametre: 'BPA projete 5 ans', valeur: '3,08 $' },
      { parametre: 'PER de sortie',     valeur: '19,5x'  },
      { parametre: 'Prix cible 5 ans',  valeur: '60 $'   },
      { parametre: 'Zone juste (r=10 %)', valeur: '37 $', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { parametre: 'Bornes (MoE 8,2 %)', valeur: '34 - 40 $' },
      { parametre: 'Prime vs cours 52 $', valeur: '+41 %' },
    ],
  },

  // ── Zone juste PER : scenario central (compact) ─────────────────────────────
  'otc-markets-group-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'parametre', label: 'Central (croiss. 6 %)', primary: true },
      { key: 'valeur',    label: ''                                     },
    ],
    lignes: [
      { parametre: 'BPA projete 5 ans', valeur: '3,56 $' },
      { parametre: 'PER de sortie',     valeur: '19,5x'  },
      { parametre: 'Prix cible 5 ans',  valeur: '69 $'   },
      { parametre: 'Zone juste (r=10 %)', valeur: '43 $', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { parametre: 'Bornes (MoE 8,2 %)', valeur: '40 - 47 $' },
      { parametre: 'Prime vs cours 52 $', valeur: '+21 %' },
    ],
  },

  // ── Zone juste PER : scenario bull (compact) ────────────────────────────────
  'otc-markets-group-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'parametre', label: 'Bull (croiss. 10 %)', primary: true },
      { key: 'valeur',    label: ''                                    },
    ],
    lignes: [
      { parametre: 'BPA projete 5 ans', valeur: '4,28 $' },
      { parametre: 'PER de sortie',     valeur: '19,5x'  },
      { parametre: 'Prix cible 5 ans',  valeur: '84 $'   },
      { parametre: 'Zone juste (r=10 %)', valeur: '52 $', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { parametre: 'Bornes (MoE 8,2 %)', valeur: '48 - 56 $' },
      { parametre: 'Prime vs cours 52 $', valeur: '0 %' },
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
      <div className="tableau-desktop my-6">
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
      <div className="tableau-mobile">
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