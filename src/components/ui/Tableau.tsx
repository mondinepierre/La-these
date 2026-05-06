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