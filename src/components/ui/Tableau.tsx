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
      valeur:    '6,98 %',
      justif:    'Bund 10 ans 2,86 % + bêta 0,945 vs CAC 40 GR + ERP Damodaran France 4,78 % (CRP 0,55 % inclus)',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      parametre: 'Croissance (années 1-5)',
      valeur:    '8,2 %',
      justif:    'CAGR FCF 2023-2025 (hors creux BFR 2022)',
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
      a5: '10 626,4',
      tv: '217 686,2',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      element: 'FCF actualisé',
      a5: '7 583,8',
      tv: '155 358,7',
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
      valeur:  '37 065,0',
      detail:  'Cumul des flux annuels ramenés en valeur actuelle',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur Terminale actualisée',
      valeur:  '155 358,7',
      detail:  'TV / (1 + WACC)^5',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Valeur d\'Entreprise (EV)',
      valeur:  '192 423,7',
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
      valeur:  '190 372,7',
      detail:  'EV - dette nette',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Nombre d\'actions',
      valeur:  '535,4 M',
      detail:  'Actions diluées FY2025',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      element: 'Fair Value par action',
      valeur:  '355,59 €',
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

// ─── DEXCOM (DXCM) ───────────────────────────────────────────────────────────
'dexcom-dcf-parametres': {
  compact: true,
  colonnes: [
    { key: 'parametre', label: 'Paramètre',      primary: true },
    { key: 'valeur',    label: 'Valeur retenue'                },
    { key: 'justif',    label: 'Justification'                 },
  ],
  lignes: [
    { parametre: 'WACC',                   valeur: '9,9 %',     justif: 'Rf 4,09 % (UST 10 ans) + Beta 1,45 × ERP 4,23 % (Damodaran US)', _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { parametre: 'FCF de base (FY2025)',   valeur: '1 077 M$',  justif: 'Cash opérationnel 1 441 M - capex 364 M',                        _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { parametre: 'Croissance perpétuelle', valeur: '2,5 %',     justif: 'Plancher conservateur, 7,4 points sous le WACC',                 _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { parametre: 'Dette nette',            valeur: '418 M$',    justif: 'Bilan FY2025, post-remboursement des convertibles',              _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { parametre: 'Actions diluées',        valeur: '405,5 M',   justif: '10-K FY2025',                                                    _headerBg: '#E0DBCF', _headerText: '#44403C' },
  ],
},

'dexcom-dcf-scenarios': {
  colonnes: [
    { key: 'scenario',  label: 'Scénario',         primary: true },
    { key: 'cagr',      label: 'CAGR FCF'                        },
    { key: 'hypothese', label: 'Hypothèse'                       },
    { key: 'cours',     label: 'Cours DCF (5 ans)'               },
  ],
  lignes: [
    { scenario: 'Bear',    cagr: '9 %',  hypothese: 'Décélération sous la guidance, marge sous pression', cours: '~47 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { scenario: 'Central', cagr: '13 %', hypothese: 'Guidance CA +12 % + léger levier opérationnel',      cours: '~56 $', _headerBg: '#C9A84C', _headerText: '#1C1917' },
    { scenario: 'Bull',    cagr: '17 %', hypothese: 'Stelo, international et GLP-1 porteur, marge stable',  cours: '~65 $', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
  ],
},

'dexcom-dcf-synthese': {
  compact: true,
  colonnes: [
    { key: 'element', label: 'Élément',     primary: true },
    { key: 'valeur',  label: 'Valeur (M$)'                },
    { key: 'detail',  label: 'Détail'                     },
  ],
  lignes: [
    { element: 'Somme FCF actualisés (5 ans)', valeur: '5 860',  detail: 'FCF base 1 077 M × croissance 13 %, actualisés à 9,9 %',      _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { element: 'Valeur terminale actualisée',  valeur: '17 169', detail: 'FCF5 × (1 + 2,5 %) / (9,9 % - 2,5 %), actualisée sur 5 ans',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { element: 'Enterprise Value',             valeur: '23 029', detail: "Somme FCF actualisés + valeur terminale (VT = 75 % de l'EV)", _headerBg: '#C9A84C', _headerText: '#1C1917' },
    { element: 'Dette nette',                  valeur: '418',    detail: 'Bilan FY2025',                                                 _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { element: 'Valeur des capitaux propres',  valeur: '22 611', detail: 'EV - dette nette',                                            _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { element: 'Cours DCF implicite',          valeur: '~56 $',  detail: 'Capitaux propres / 405,5 M actions',                          _headerBg: '#1B4332', _headerText: '#F7F4EF' },
  ],
},

'dexcom-per-trois-scenarios': {
  colonnes: [
    { key: 'element', label: 'Élément',            primary: true },
    { key: 'bear',    label: 'Bear (BPA +12 %)'                  },
    { key: 'central', label: 'Central (BPA +16 %)'              },
    { key: 'bull',    label: 'Bull (BPA +20 %)'                  },
  ],
  lignes: [
    { element: 'BPA projeté 2031',          bear: '3,68 $', central: '4,39 $', bull: '5,20 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { element: 'PER de sortie',             bear: '24x',    central: '24x',    bull: '24x',    _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { element: 'Prix cible 2031',           bear: '88 $',   central: '105 $',  bull: '125 $',  _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { element: 'Zone juste (r=10 %)',       bear: '55 $',   central: '65 $',   bull: '78 $',   _headerBg: '#C9A84C', _headerText: '#1C1917' },
    { element: "Point d'entrée (MoS 15 %)", bear: '47 $',   central: '56 $',   bull: '66 $',   _headerBg: '#1B4332', _headerText: '#F7F4EF' },
  ],
},

'dexcom-per-zone-bear': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zone',      label: 'Zone juste'                     },
  ],
  lignes: [
    { rendement: 'r = 8 %',  zone: '60 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { rendement: 'r = 10 %', zone: '55 $', _headerBg: '#C9A84C', _headerText: '#1C1917' },
    { rendement: 'r = 12 %', zone: '50 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
  ],
},

'dexcom-per-zone-central': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zone',      label: 'Zone juste'                     },
  ],
  lignes: [
    { rendement: 'r = 8 %',  zone: '72 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { rendement: 'r = 10 %', zone: '65 $', _headerBg: '#C9A84C', _headerText: '#1C1917' },
    { rendement: 'r = 12 %', zone: '60 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
  ],
},

'dexcom-per-zone-bull': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zone',      label: 'Zone juste'                     },
  ],
  lignes: [
    { rendement: 'r = 8 %',  zone: '85 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
    { rendement: 'r = 10 %', zone: '78 $', _headerBg: '#C9A84C', _headerText: '#1C1917' },
    { rendement: 'r = 12 %', zone: '71 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
  ],
},

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
      bpa2030:  '16,81',
      cible:    '466',
      zone:     '289',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      scenario: 'Central',
      r:        '8,5 %',
      bpa2030:  '16,81',
      cible:    '466',
      zone:     '310',
      _headerBg:   '#C9A84C',
      _headerText: '#1C1917',
    },
    {
      scenario: 'Bull',
      r:        '7,0 %',
      bpa2030:  '16,81',
      cible:    '466',
      zone:     '332',
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
      prix:   '275',
      upside: '+70 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '10 %',
      prix:   '260',
      upside: '+79 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '15 %',
      prix:   '246',
      upside: '+89 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '20 %',
      prix:   '231',
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
      prix:   '294',
      upside: '+58 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '10 %',
      prix:   '279',
      upside: '+67 %',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      mos:    '15 %',
      prix:   '263',
      upside: '+77 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '20 %',
      prix:   '248',
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
      mos:    '0 % (zone juste)',
      prix:   '332',
      upside: '+40 %',
      _headerBg:   '#D6EDDF',
      _headerText: '#1B4332',
    },
    {
      mos:    '5 %',
      prix:   '316',
      upside: '+47 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '10 %',
      prix:   '299',
      upside: '+56 %',
      _headerBg:   '#E0DBCF',
      _headerText: '#44403C',
    },
    {
      mos:    '15 %',
      prix:   '282',
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
// =============================================================================
// TABLEAU ENTRIES - TotalEnergies v3 (revision 22/06/2026, valo au spot)
//
// BASE : BPA ajuste FY2025 = resultat net ajuste 15 600 M$ / 2 214 M actions = 7,05 $.
// Multiple central : 8,32x (moyenne du PER ajuste multiplicatif sur 5 ans).
// Marge d'erreur   : 7,8 % (beta 0,52 x 15 %).
// r retenu : 10 % ; Dividende annuel : 3,90 $ (3,40 EUR x EUR/USD 1,146).
// Cours de redaction : 80,70 $ = environ 71 EUR (22/06/2026), Brent autour de 80 $.
//
// ZONE JUSTE CENTRALE a r = 10 % :
//   Prix cible central = 8,58 $ x 8,32 = 71,4 $.
//   Zone juste = 71,4 / (1,10)^5 + PV div (3,90 x 3,791) = 44,3 + 14,8 = 59,1 $ (51,6 EUR).
//
// DCF NEUTRALISE : a WACC 4,64 % (beta 0,52), VT > 88 % de l'EV, cours implicite 174 $.
//   Le tableau "scenarios" est une SENSIBILITE AU WACC ; le marche price environ 7,2 %.
// =============================================================================

  // -- 1. DCF - Parametres --
  'totalenergies-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'valeur',    label: 'Valeur'                  },
      { key: 'source',    label: 'Source / Note'           },
    ],
    lignes: [
      {
        parametre: 'Cash-flow libre de base (FY2025)',
        valeur:    '10 390 M$',
        source:    'OCF 27 343 - investissements industriels 16 953 (DEU 2025)',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'WACC (recalculé 06/2026)',
        valeur:    '4,64 %',
        source:    "CAPM, bêta 0,52 vs CAC 40 GR. Rf Bund 2,86 %, ERP 4,78 %, Rd ap. IS 2,97 %",
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Croissance perpétuelle',
        valeur:    '2,0 %',
        source:    'Croissance nominale long terme (cible inflation BCE)',
      },
      {
        parametre: 'Horizon de projection',
        valeur:    '5 ans',
        source:    '2026 - 2030',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '2 214 M',
        source:    'FY2025 (DEU 2025)',
      },
      {
        parametre: 'Dette nette déduite',
        valeur:    '34 831 M$',
        source:    'Bilan consolidé 31/12/2025',
      },
      {
        parametre: 'Part valeur terminale / EV',
        valeur:    'environ 88 %',
        source:    "À WACC 4,64 %, le modèle est piloté par la valeur terminale, donc par le taux",
      },
    ],
  },

  // -- 2. DCF - Sensibilite au WACC (DCF neutralise par le faible beta) --
  'totalenergies-dcf-scenarios': {
    colonnes: [
      { key: 'wacc',  label: 'WACC retenu',                 primary: true },
      { key: 'note',  label: 'Lecture'                                     },
      { key: 'vt',    label: 'Part VT / EV'                                 },
      { key: 'cours', label: 'Cours implicite (FCF +3 %/an)'               },
    ],
    lignes: [
      {
        wacc:  '4,64 %',
        note:  'WACC comptable (bêta 0,52)',
        vt:    '88 %',
        cours: '174 $',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        wacc:  '5,5 %',
        note:  'Bêta normalisé vers 0,7',
        vt:    '85 %',
        cours: '127 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        wacc:  '6,5 %',
        note:  'Bêta vers 0,9 (WACC v1 de la fiche)',
        vt:    '81 %',
        cours: '96 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        wacc:  '7,2 %',
        note:  "Taux implicite du marché (cours = DCF)",
        vt:    '79 %',
        cours: '81 $',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        wacc:  '7,5 %',
        note:  'Major cyclique de risque standard',
        vt:    '77 %',
        cours: '75 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // -- 3. DCF - Synthese --
  'totalenergies-dcf-synthese': {
    colonnes: [
      { key: 'lecture',     label: 'Lecture',     primary: true },
      { key: 'valeur',      label: 'Valeur'                      },
      { key: 'commentaire', label: 'Commentaire'                 },
    ],
    lignes: [
      {
        lecture:     'DCF au WACC comptable (4,64 %)',
        valeur:      '174 $ (environ 152 €)',
        commentaire: "Inexploitable : VT 88 % de l'EV, gonflée par le bêta 0,52",
        _headerBg:   '#E0DBCF', _headerText: '#44403C',
      },
      {
        lecture:     "Taux d'actualisation implicite du marché",
        valeur:      'environ 7,2 %',
        commentaire: 'Le cours (80,70 $) = DCF à 7,2 %, soit +2,6 pts sur le WACC comptable',
        _headerBg:   '#C9A84C', _headerText: '#1B4332',
      },
      {
        lecture:     'Conclusion',
        valeur:      'DCF neutralisé',
        commentaire: 'Le marché refuse le bêta 0,52 et price une major cyclique normale. Valo pilotée au PER.',
        _headerBg:   '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // -- 4. Calculateur PER - Synthese des trois scenarios --
  'totalenergies-per-trois-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'bear',      label: 'Conservateur'              },
      { key: 'central',   label: 'Central'                   },
      { key: 'bull',      label: 'Optimiste'                 },
    ],
    lignes: [
      {
        parametre: 'Brent retenu',
        bear:      '60 - 65 $',
        central:   '70 - 75 $',
        bull:      '82 - 85 $',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'Croissance BPA ajusté / an',
        bear:      '-3 %',
        central:   '+4 %',
        bull:      '+9 %',
      },
      {
        parametre: 'BPA ajusté projeté FY2031',
        bear:      '6,05 $',
        central:   '8,58 $',
        bull:      '10,85 $',
      },
      {
        parametre: 'Multiple central retenu',
        bear:      '8,32x',
        central:   '8,32x',
        bull:      '8,32x',
      },
      {
        parametre: 'Prix cible (5 ans)',
        bear:      '50,3 $',
        central:   '71,4 $',
        bull:      '90,3 $',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Fourchette (MoE 7,8 %)',
        bear:      '46,4 - 54,2 $',
        central:   '65,8 - 77,0 $',
        bull:      '83,2 - 97,3 $',
      },
      {
        parametre: 'Cours 22/06 (80,70 $)',
        bear:      'au-dessus',
        central:   'au-dessus',
        bull:      'sous la fourchette',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // -- 5. Zone juste - Scenario conservateur --
  'totalenergies-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'signal',     label: 'Signal',           primary: true },
      { key: 'mos',        label: 'Marge de sécurité'                },
      { key: 'zonejuste',  label: 'Zone juste ($)'                   },
      { key: 'fourchette', label: 'Fourchette achat (€)'             },
    ],
    lignes: [
      { signal: 'Surveillance',         mos: '5 - 10 %',  zonejuste: '46,0 $', fourchette: '36 - 38 €', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { signal: 'Premier renforcement', mos: '15 - 20 %', zonejuste: '46,0 $', fourchette: '32 - 34 €' },
      { signal: 'Achat fort',           mos: '25 - 30 %', zonejuste: '46,0 $', fourchette: '28 - 30 €' },
    ],
  },

  // -- 6. Zone juste - Scenario central --
  'totalenergies-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'signal',     label: 'Signal',           primary: true },
      { key: 'mos',        label: 'Marge de sécurité'                },
      { key: 'zonejuste',  label: 'Zone juste ($)'                   },
      { key: 'fourchette', label: 'Fourchette achat (€)'             },
    ],
    lignes: [
      { signal: 'Surveillance',         mos: '5 - 10 %',  zonejuste: '59,1 $', fourchette: '46 - 49 €', _headerBg: '#C9A84C', _headerText: '#1B4332' },
      { signal: 'Premier renforcement', mos: '12 - 15 %', zonejuste: '59,1 $', fourchette: '44 - 45 €' },
      { signal: 'Achat fort',           mos: '25 - 30 %', zonejuste: '59,1 $', fourchette: '36 - 39 €' },
    ],
  },

  // -- 7. Zone juste - Scenario optimiste --
  'totalenergies-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'signal',     label: 'Signal',           primary: true },
      { key: 'mos',        label: 'Marge de sécurité'                },
      { key: 'zonejuste',  label: 'Zone juste ($)'                   },
      { key: 'fourchette', label: 'Fourchette achat (€)'             },
    ],
    lignes: [
      { signal: 'Surveillance',         mos: '5 - 10 %',  zonejuste: '70,9 $', fourchette: '56 - 59 €', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { signal: 'Premier renforcement', mos: '15 - 20 %', zonejuste: '70,9 $', fourchette: '49 - 53 €' },
      { signal: 'Achat fort',           mos: '25 - 30 %', zonejuste: '70,9 $', fourchette: '43 - 46 €' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ENGIE - DCF neutralise (faible beta + FCF distordu) + SOTP + Calculateur PER
  // ─────────────────────────────────────────────────────────────────────────────

  // -- 1. DCF - Parametres (sur FCF normalise hors appels de marge GEMS) --
  'engie-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'valeur',    label: 'Valeur'                  },
      { key: 'source',    label: 'Source / Note'           },
    ],
    lignes: [
      {
        parametre: 'Cash-flow libre normalisé (base)',
        valeur:    'environ 5 000 M€',
        source:    'OCF normalisé hors appels de marge GEMS (environ 12,5 Md€) - capex récurrent. Le FCF publié 2025 (-8 547 M€) est inexploitable',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'WACC',
        valeur:    '4,60 %',
        source:    'CAPM, bêta 0,759 (régression 60 mois). Rf Bund 2,86 %, ERP 4,78 %, Rd ap. IS 2,72 %',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Croissance perpétuelle',
        valeur:    '2,0 %',
        source:    'Croissance nominale long terme (cible inflation BCE)',
      },
      {
        parametre: 'Horizon de projection',
        valeur:    '5 ans',
        source:    '2026 - 2030',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '2 443 M',
        source:    'FY2025. Une augmentation de capital (ABB) pour UKPN diluera 2026',
      },
      {
        parametre: 'Dette nette économique déduite',
        valeur:    '45 200 M€',
        source:    'Convention Engie : intègre 50 % des hybrides perpétuels + financement nucléaire (vs 40,5 Md€ IFRS)',
      },
      {
        parametre: 'Part valeur terminale / EV',
        valeur:    'environ 87 %',
        source:    'À WACC 4,60 %, le modèle est piloté par la valeur terminale, donc par le taux',
      },
    ],
  },

  // -- 2. DCF - Sensibilite au WACC (DCF neutralise par le faible beta) --
  'engie-dcf-scenarios': {
    colonnes: [
      { key: 'wacc',  label: 'WACC retenu',                 primary: true },
      { key: 'note',  label: 'Lecture'                                     },
      { key: 'vt',    label: 'Part VT / EV'                                 },
      { key: 'cours', label: 'Cours implicite (FCF +2 %/an)'               },
    ],
    lignes: [
      {
        wacc:  '4,60 %',
        note:  'WACC comptable (bêta 0,76)',
        vt:    '87 %',
        cours: 'environ 60 €',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        wacc:  '5,5 %',
        note:  'Bêta normalisé vers 0,9',
        vt:    '84 %',
        cours: 'environ 40 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        wacc:  '6,5 %',
        note:  'Prime de risque utility complexe (cours = DCF)',
        vt:    '80 %',
        cours: 'environ 27 €',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        wacc:  '7,0 %',
        note:  'Risque cyclique + dilution',
        vt:    '78 %',
        cours: 'environ 22 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // -- 3. DCF - Synthese --
  'engie-dcf-synthese': {
    colonnes: [
      { key: 'lecture',     label: 'Lecture',     primary: true },
      { key: 'valeur',      label: 'Valeur'                      },
      { key: 'commentaire', label: 'Commentaire'                 },
    ],
    lignes: [
      {
        lecture:     'DCF au WACC comptable (4,60 %)',
        valeur:      'environ 60 €',
        commentaire: "Inexploitable : VT 87 % de l'EV, gonflée par le bêta 0,76 et un FCF de base incertain",
        _headerBg:   '#E0DBCF', _headerText: '#44403C',
      },
      {
        lecture:     "Taux d'actualisation implicite du marché",
        valeur:      'environ 6,5 %',
        commentaire: 'Le cours (26,96 €) = DCF à ~6,5 %, soit +1,9 pt sur le WACC comptable',
        _headerBg:   '#C9A84C', _headerText: '#1B4332',
      },
      {
        lecture:     'Conclusion',
        valeur:      'DCF neutralisé',
        commentaire: 'Le marché price une utility de risque normal. Valorisation pilotée au PER et à la somme des parties.',
        _headerBg:   '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // -- 4. Somme des parties (SOTP) - multiples d'EBITDA FY2025 par pole --
  'engie-sotp': {
    colonnes: [
      { key: 'pole',     label: 'Pôle',                primary: true },
      { key: 'ebitda',   label: 'EBITDA 2025 (M€)'                    },
      { key: 'multiple', label: 'Multiple EV/EBITDA'                  },
      { key: 'ev',       label: 'EV (Md€)'                            },
    ],
    lignes: [
      {
        pole:     'Réseaux régulés',
        ebitda:   '4 975',
        multiple: '11x',
        ev:       '54,7',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      { pole: 'Renouvelables & BESS',                ebitda: '3 524', multiple: '9x', ev: '31,7' },
      { pole: 'Supply & Energy Management (GEMS)',   ebitda: '2 824', multiple: '5x', ev: '14,1' },
      { pole: 'Infrastructures énergétiques locales', ebitda: '939',  multiple: '9x', ev: '8,5'  },
      { pole: 'Gas Generation (flexibilité)',        ebitda: '1 438', multiple: '5x', ev: '7,2'  },
      { pole: 'Nucléaire belge (vie finie 2035)',    ebitda: '1 318', multiple: '3x', ev: '4,0'  },
      { pole: 'Corporate / Autres',                  ebitda: '-286',  multiple: '5x', ev: '-1,4' },
      {
        pole:     "Valeur d'entreprise (EV)",
        ebitda:   '',
        multiple: '',
        ev:       'environ 119',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      { pole: 'moins dette nette économique',  ebitda: '', multiple: '', ev: '-45,2' },
      { pole: 'moins minoritaires (au marché)', ebitda: '', multiple: '', ev: 'environ -11' },
      {
        pole:     'Capitaux propres (part du Groupe)',
        ebitda:   '',
        multiple: '',
        ev:       'environ 63',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
      {
        pole:     'Par action (2 443 M actions)',
        ebitda:   '',
        multiple: '',
        ev:       'environ 26 €',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
    ],
  },

  // -- 5. Calculateur PER - Synthese des trois scenarios (BPA recurrent) --
  'engie-per-trois-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'bear',      label: 'Conservateur'              },
      { key: 'central',   label: 'Central'                   },
      { key: 'bull',      label: 'Optimiste'                 },
    ],
    lignes: [
      {
        parametre: 'Croissance BPA récurrent / an',
        bear:      '+1 %',
        central:   '+3 %',
        bull:      '+5 %',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'BPA récurrent projeté 2030',
        bear:      '2,05 €',
        central:   '2,26 €',
        bull:      '2,49 €',
      },
      {
        parametre: 'PER central retenu',
        bear:      '13,5x',
        central:   '13,5x',
        bull:      '13,5x',
      },
      {
        parametre: 'Prix cible (5 ans)',
        bear:      '27,7 €',
        central:   '30,5 €',
        bull:      '33,6 €',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Fourchette (MoE 11,4 %)',
        bear:      '24,5 - 30,9 €',
        central:   '27,0 - 34,0 €',
        bull:      '29,8 - 37,4 €',
      },
      {
        parametre: 'Zone juste (hurdle Re, dividende en bonus)',
        bear:      '20,2 €',
        central:   '22,3 €',
        bull:      '24,5 €',
      },
      {
        parametre: 'Cours 23/06 (26,96 €)',
        bear:      'au-dessus',
        central:   'au-dessus',
        bull:      'proche du haut',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // -- 6. Zone juste - Scenario conservateur --
  'engie-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'signal',     label: 'Signal',           primary: true },
      { key: 'mos',        label: 'Marge de sécurité'                },
      { key: 'zonejuste',  label: 'Zone juste (€)'                   },
      { key: 'fourchette', label: "Fourchette d'entrée (€)"          },
    ],
    lignes: [
      { signal: 'Surveillance',         mos: '0 - 5 %',   zonejuste: '20,2 €', fourchette: '19 - 20 €', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { signal: 'Premier renforcement', mos: '10 - 15 %', zonejuste: '20,2 €', fourchette: '17 - 18 €' },
      { signal: 'Achat fort',           mos: '25 - 30 %', zonejuste: '20,2 €', fourchette: '14 - 15 €' },
    ],
  },

  // -- 7. Zone juste - Scenario central --
  'engie-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'signal',     label: 'Signal',           primary: true },
      { key: 'mos',        label: 'Marge de sécurité'                },
      { key: 'zonejuste',  label: 'Zone juste (€)'                   },
      { key: 'fourchette', label: "Fourchette d'entrée (€)"          },
    ],
    lignes: [
      { signal: 'Surveillance',         mos: '0 - 5 %',   zonejuste: '22,3 €', fourchette: '21 - 22 €', _headerBg: '#C9A84C', _headerText: '#1B4332' },
      { signal: 'Premier renforcement', mos: '8 - 12 %',  zonejuste: '22,3 €', fourchette: '20 €' },
      { signal: 'Achat fort',           mos: '25 %',      zonejuste: '22,3 €', fourchette: '16 - 17 €' },
    ],
  },

  // -- 8. Zone juste - Scenario optimiste --
  'engie-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'signal',     label: 'Signal',           primary: true },
      { key: 'mos',        label: 'Marge de sécurité'                },
      { key: 'zonejuste',  label: 'Zone juste (€)'                   },
      { key: 'fourchette', label: "Fourchette d'entrée (€)"          },
    ],
    lignes: [
      { signal: 'Surveillance',         mos: '0 - 5 %',   zonejuste: '24,5 €', fourchette: '23 - 25 €', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { signal: 'Premier renforcement', mos: '12 - 15 %', zonejuste: '24,5 €', fourchette: '21 - 22 €' },
      { signal: 'Achat fort',           mos: '25 - 30 %', zonejuste: '24,5 €', fourchette: '17 - 18 €' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // IBERDROLA - 8 blocs (DCF parametres / sensibilite WACC / synthese + SOTP + PER
  // trois scenarios + zones bear/central/bull). Base PER = BPA dilue publie 0,843 €.
  // DCF neutralise (faible beta + FCF distordu) -> presente en sensibilite au WACC.
  // ─────────────────────────────────────────────────────────────────────────────

  'iberdrola-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'valeur',    label: 'Valeur'                  },
      { key: 'source',    label: 'Source / Note'           },
    ],
    lignes: [
      {
        parametre: 'Cash-flow libre normalisé (base)',
        valeur:    'environ 6 000 M€',
        source:    "OCF 11 635 - capex de maintenance (environ 5 600, soit ~D&A). Le FCF publié 2025 (1 677 M€) est écrasé par le capex de croissance RAB (utility de croissance)",
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'WACC',
        valeur:    '5,74 %',
        source:    'CAPM, bêta 0,682 (régression 61 mois). Rf 2,86 %, ERP 5,53 % (Damodaran mature + CRP Espagne 1,30 %), Rd ap. IS 3,54 %',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Croissance perpétuelle',
        valeur:    '2,5 %',
        source:    'Croissance nominale long terme de la base régulée + renouvelables',
      },
      {
        parametre: 'Horizon de projection',
        valeur:    '5 ans',
        source:    '2026 - 2030',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '6 747 M',
        source:    'FY2025. Le dividende-action (scrip) dilue ~+4,5 %/an, partiellement racheté',
      },
      {
        parametre: 'Dette nette économique déduite',
        valeur:    '55 500 M€',
        source:    "Convention : dette financière nette 50 200 + 50 % des hybrides perpétuels (equity credit) + leases (vs 50,2 Md€ IFRS communiqué)",
      },
      {
        parametre: 'Part valeur terminale / EV',
        valeur:    'plus de 85 %',
        source:    'À WACC 5,74 % et g 2,5 %, le modèle est piloté par la valeur terminale, donc par le taux : DCF neutralisé',
      },
    ],
  },

  // -- 2. DCF - Sensibilite au WACC (DCF neutralise par le faible beta + FCF distordu) --
  'iberdrola-dcf-scenarios': {
    colonnes: [
      { key: 'wacc',  label: 'WACC retenu',                 primary: true },
      { key: 'note',  label: 'Lecture'                                     },
      { key: 'vt',    label: 'Part VT / EV'                                 },
      { key: 'cours', label: 'Cours implicite (FCF norm. +2,5 %/an)'       },
    ],
    lignes: [
      {
        wacc:  '5,74 %',
        note:  'WACC comptable (bêta 0,68)',
        vt:    '88 %',
        cours: 'environ 20 €',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        wacc:  '6,5 %',
        note:  'Prime de risque utility / exécution capex',
        vt:    '84 %',
        cours: 'environ 15 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        wacc:  '7,0 %',
        note:  'Normalisation des taux',
        vt:    '82 %',
        cours: 'environ 12 €',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        wacc:  '7,5 %',
        note:  'Bêta normalisé vers 0,9 + risque réglementaire',
        vt:    '80 %',
        cours: 'environ 10 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // -- 3. DCF - Synthese --
  'iberdrola-dcf-synthese': {
    colonnes: [
      { key: 'lecture',     label: 'Lecture',     primary: true },
      { key: 'valeur',      label: 'Valeur'                      },
      { key: 'commentaire', label: 'Commentaire'                 },
    ],
    lignes: [
      {
        lecture:     'DCF au WACC comptable (5,74 %)',
        valeur:      'environ 20 €',
        commentaire: "Inexploitable : VT plus de 85 % de l'EV, gonflée par le bêta 0,68 et un FCF de base difficile à normaliser (utility de croissance)",
        _headerBg:   '#E0DBCF', _headerText: '#44403C',
      },
      {
        lecture:     "Taux d'actualisation implicite du marché",
        valeur:      'environ 5,7 %',
        commentaire: 'Le cours (21,6 €) = DCF au WACC comptable : le marché price un risque régulé minimal (A-rated), sans prime',
        _headerBg:   '#C9A84C', _headerText: '#1B4332',
      },
      {
        lecture:     'Conclusion',
        valeur:      'DCF neutralisé',
        commentaire: 'Le moindre point de WACC efface 25 % de la valeur. Valorisation pilotée au PER et à la somme des parties.',
        _headerBg:   '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  // -- 4. Somme des parties (SOTP) - multiples d'EBITDA FY2025 par pole --
  'iberdrola-sotp': {
    colonnes: [
      { key: 'pole',     label: 'Pôle',                primary: true },
      { key: 'ebitda',   label: 'EBITDA 2025 (M€)'                    },
      { key: 'multiple', label: 'Multiple EV/EBITDA'                  },
      { key: 'ev',       label: 'EV (Md€)'                            },
    ],
    lignes: [
      {
        pole:     'Réseaux régulés (RAB 51 Md€)',
        ebitda:   '7 900',
        multiple: '12x',
        ev:       '94,8',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      { pole: 'Renouvelables',                       ebitda: '4 950', multiple: '10x', ev: '49,5' },
      { pole: 'Production et commercialisation',     ebitda: '2 920', multiple: '7x',  ev: '20,4' },
      { pole: 'Corporate / ajustements',             ebitda: '-86',   multiple: '5x',  ev: '-0,5' },
      {
        pole:     "Valeur d'entreprise (EV)",
        ebitda:   '',
        multiple: '',
        ev:       'environ 164',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      { pole: 'moins dette nette économique',  ebitda: '', multiple: '', ev: '-55,5' },
      { pole: 'moins minoritaires (au marché)', ebitda: '', multiple: '', ev: 'environ -14' },
      {
        pole:     'Capitaux propres (part du Groupe)',
        ebitda:   '',
        multiple: '',
        ev:       'environ 95',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
      {
        pole:     'Par action (6 747 M actions)',
        ebitda:   '',
        multiple: '',
        ev:       'environ 14 €',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
    ],
  },

  // -- 5. Calculateur PER - Synthese des trois scenarios (BPA dilue publie) --
  'iberdrola-per-trois-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'bear',      label: 'Conservateur'              },
      { key: 'central',   label: 'Central'                   },
      { key: 'bull',      label: 'Optimiste'                 },
    ],
    lignes: [
      {
        parametre: 'Croissance BPA / an',
        bear:      '+4 %',
        central:   '+7 %',
        bull:      '+9 %',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'BPA projeté 2030',
        bear:      '1,03 €',
        central:   '1,18 €',
        bull:      '1,30 €',
      },
      {
        parametre: 'PER central retenu',
        bear:      '16,3x',
        central:   '16,3x',
        bull:      '16,3x',
      },
      {
        parametre: 'Prix cible (5 ans)',
        bear:      '16,7 €',
        central:   '19,3 €',
        bull:      '21,2 €',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Fourchette (MoE 10,2 %)',
        bear:      '15,0 - 18,4 €',
        central:   '17,3 - 21,3 €',
        bull:      '19,0 - 23,3 €',
      },
      {
        parametre: 'Zone juste (hurdle Re, dividende en bonus)',
        bear:      '12,1 €',
        central:   '14,0 €',
        bull:      '15,4 €',
      },
      {
        parametre: 'Cours juin 2026 (21,6 €)',
        bear:      'très au-dessus',
        central:   'au-dessus de la cible',
        bull:      'au niveau de la cible',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  // -- 6. Zone juste - Scenario conservateur --
  'iberdrola-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'signal',     label: 'Signal',           primary: true },
      { key: 'mos',        label: 'Marge de sécurité'                },
      { key: 'zonejuste',  label: 'Zone juste (€)'                   },
      { key: 'fourchette', label: "Fourchette d'entrée (€)"          },
    ],
    lignes: [
      { signal: 'Surveillance',         mos: '0 - 5 %',   zonejuste: '12,1 €', fourchette: '11 - 12 €', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { signal: 'Premier renforcement', mos: '10 - 15 %', zonejuste: '12,1 €', fourchette: '10 - 11 €' },
      { signal: 'Achat fort',           mos: '20 - 25 %', zonejuste: '12,1 €', fourchette: '9 - 10 €' },
    ],
  },

  // -- 7. Zone juste - Scenario central --
  'iberdrola-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'signal',     label: 'Signal',           primary: true },
      { key: 'mos',        label: 'Marge de sécurité'                },
      { key: 'zonejuste',  label: 'Zone juste (€)'                   },
      { key: 'fourchette', label: "Fourchette d'entrée (€)"          },
    ],
    lignes: [
      { signal: 'Surveillance',         mos: '0 - 5 %',   zonejuste: '14,0 €', fourchette: '13 - 14 €', _headerBg: '#C9A84C', _headerText: '#1B4332' },
      { signal: 'Premier renforcement', mos: '8 - 12 %',  zonejuste: '14,0 €', fourchette: '12 - 13 €' },
      { signal: 'Achat fort',           mos: '20 - 25 %', zonejuste: '14,0 €', fourchette: '11 €' },
    ],
  },

  // -- 8. Zone juste - Scenario optimiste --
  'iberdrola-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'signal',     label: 'Signal',           primary: true },
      { key: 'mos',        label: 'Marge de sécurité'                },
      { key: 'zonejuste',  label: 'Zone juste (€)'                   },
      { key: 'fourchette', label: "Fourchette d'entrée (€)"          },
    ],
    lignes: [
      { signal: 'Surveillance',         mos: '0 - 5 %',   zonejuste: '15,4 €', fourchette: '15 - 16 €', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { signal: 'Premier renforcement', mos: '10 - 15 %', zonejuste: '15,4 €', fourchette: '13 - 14 €' },
      { signal: 'Achat fort',           mos: '20 - 25 %', zonejuste: '15,4 €', fourchette: '12 €' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SIEMENS ENERGY - 8 blocs (DCF parametres / scenarios / synthese + SOTP + PER trois
  // scenarios + zones bear/central/bull). Turnaround : PER FORWARD (BPA normalise FY2030)
  // dominant, DCF exploitable (beta 1,77) en complement, SOTP au coeur de l'angle.
  // ─────────────────────────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────────────────────
  // LUNDIN GOLD - producteur d'or à actif unique (Fruta del Norte, Équateur).
  // Valorisation au cadre MINIER : NAV vie-de-mine par deck de prix de l'or (pas de
  // DCF perpétuel : la mine s'épuise), multiples (EV/EBITDA, P/FCF, FCF Yield) et P/NAV.
  // Devise : NAV en USD natif ; prixCible et niveaux du Verdict en CAD (cours TSX).
  // ─────────────────────────────────────────────────────────────────────────────

  'lundin-gold-nav-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'valeur',    label: 'Valeur'                  },
      { key: 'source',    label: 'Source / Note'           },
    ],
    lignes: [
      {
        parametre: 'Réserves prouvées et probables',
        valeur:    '5,85 Moz Au',
        source:    '25,7 Mt @ 7,09 g/t (AIF 2025, NI 43-101). Estimées à un prix de l\'or de seulement 1 700 $/oz. Ressources M&I 7,48 Moz, inférées 2,03 Moz',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'Production annuelle',
        valeur:    'environ 500 koz',
        source:    'FY2025 : 498 315 oz. Guidance 2026 : 475 000 - 525 000 oz',
      },
      {
        parametre: 'Vie de mine (réserves)',
        valeur:    'environ 12 ans',
        source:    '5,85 Moz / 0,5 Moz par an. Modèle NAV : 14 ans en central (conversion partielle des ressources M&I)',
      },
      {
        parametre: 'AISC (coût tout compris)',
        valeur:    'environ 1 150 $/oz',
        source:    'FY2025 publié 1 015 $/oz. Retenu 1 150 $ en vie de mine (dérive des coûts + capex de croissance FDNS)',
      },
      {
        parametre: 'Taux d\'imposition effectif',
        valeur:    'environ 30 %',
        source:    'Équateur. Les redevances (NSR + participation) sont déjà nettées dans l\'AISC',
      },
      {
        parametre: 'Taux d\'actualisation',
        valeur:    '5 % (base) ; 25 % (risque-honnête)',
        source:    'Convention minière P/NAV à 5 %. Le WACC La Thèse (CRP Équateur 11,85 %) ressort à 25,1 % : c\'est l\'écart entre les deux qui mesure le prix du risque pays',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Trésorerie nette',
        valeur:    '+704 M$',
        source:    'Q1-2026. Zéro dette (dette de construction soldée). Ajoutée à la NAV',
      },
    ],
  },

  'lundin-gold-deck-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Scénario de deck', primary: true },
      { key: 'bear',      label: 'Bear'                            },
      { key: 'central',   label: 'Central'                         },
      { key: 'bull',      label: 'Bull'                            },
    ],
    lignes: [
      {
        parametre: 'Deck de prix de l\'or',
        bear:      '2 400 $/oz',
        central:   '3 200 $/oz',
        bull:      '4 000 $/oz (~spot)',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'FCF après impôt / an',
        bear:      'environ 440 M$',
        central:   'environ 720 M$',
        bull:      'environ 1 000 M$',
      },
      {
        parametre: 'NAV par action (discount 5 %)',
        bear:      'environ 21 $US',
        central:   'environ 32 $US',
        bull:      'environ 44 $US',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'NAV par action (en CAD, x1,42)',
        bear:      'environ 30 CAD',
        central:   'environ 46 CAD',
        bull:      'environ 62 CAD',
      },
      {
        parametre: 'P/NAV au cours (77 CAD / 54 $US)',
        bear:      '2,6x',
        central:   '1,7x',
        bull:      '1,25x',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  'lundin-gold-nav-deck': {
    colonnes: [
      { key: 'deck',  label: 'Deck de l\'or', primary: true },
      { key: 'd5',    label: 'Discount 5 %'                  },
      { key: 'd8',    label: 'Discount 8 %'                  },
      { key: 'd12',   label: 'Discount 12 %'                 },
      { key: 'd25',   label: 'WACC 25 %'                     },
    ],
    lignes: [
      {
        deck: '2 400 $/oz (bear)',
        d5:   '21 $',  d8: '18 $',  d12: '15 $',  d25: '10 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        deck: '3 200 $/oz (central)',
        d5:   '32 $',  d8: '27 $',  d12: '23 $',  d25: '14 $',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        deck: '4 000 $/oz (bull / spot)',
        d5:   '44 $',  d8: '37 $',  d12: '30 $',  d25: '19 $',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
      {
        deck: 'Cours actuel : 54 $US (77 CAD)',
        d5:   'P/NAV 1,2-2,6x',  d8: '1,5-3,0x',  d12: '1,8-3,7x',  d25: '2,9-5,4x',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  'lundin-gold-multiples': {
    colonnes: [
      { key: 'metrique', label: 'Multiple (cours spot)', primary: true },
      { key: 'lug',      label: 'Lundin Gold'                          },
      { key: 'pairs',    label: 'Médiane producteurs'                  },
      { key: 'histo',    label: 'Moyenne 5 ans LUG'                    },
    ],
    lignes: [
      {
        metrique: 'PER (trailing)',
        lug:      '16,6x',
        pairs:    '10,3x',
        histo:    '18,9x',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      { metrique: 'EV / EBITDA',      lug: '10,1x', pairs: '8,1x',  histo: '8,0x'  },
      { metrique: 'P / FCF',          lug: '14,0x', pairs: '32,9x', histo: 'n.s.'  },
      { metrique: 'FCF Yield',        lug: '7,1 %', pairs: '2,5 %', histo: '13,3 %' },
      { metrique: 'Dette nette / EBITDA', lug: '-0,5x', pairs: '-0,2x', histo: '0,2x' },
      {
        metrique: 'P / NAV (deck central, 5 %)',
        lug:      '1,7x',
        pairs:    'environ 1,0x',
        histo:    '-',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
    ],
  },

  'lundin-gold-fcf-deck': {
    colonnes: [
      { key: 'deck',   label: 'Deck de l\'or',   primary: true },
      { key: 'fcf',    label: 'FCF après impôt'                },
      { key: 'yield',  label: 'FCF Yield (cap)'                },
      { key: 'lecture', label: 'Lecture'                        },
    ],
    lignes: [
      {
        deck: '2 400 $/oz',
        fcf:  'environ 440 M$',
        yield: 'environ 3,3 %',
        lecture: 'Sous le taux sans risque US (4,1 %) : plus de marge de sécurité',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        deck: '3 200 $/oz',
        fcf:  'environ 720 M$',
        yield: 'environ 5,4 %',
        lecture: 'Au-dessus du taux sans risque, prime mince',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        deck: '3 594 $/oz (réalisé 2025)',
        fcf:  '937 M$ (réel)',
        yield: '7,1 %',
        lecture: 'Le FCF Yield "bon marché" actuel suppose un or qui reste près du spot',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        deck: '4 000 $/oz (spot)',
        fcf:  'environ 1 000 M$',
        yield: 'environ 7,6 %',
        lecture: 'Le meilleur des cas, déjà dans le cours',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'lundin-gold-nav-synthese': {
    colonnes: [
      { key: 'lecture',     label: 'Lecture',     primary: true },
      { key: 'valeur',      label: 'Valeur'                      },
      { key: 'commentaire', label: 'Commentaire'                 },
    ],
    lignes: [
      {
        lecture:     'NAV centrale (deck 3 200 $, discount 5 %)',
        valeur:      'environ 32 $US / 46 CAD',
        commentaire: 'Le cours (77 CAD) traite à 1,7x cette NAV. Les mineurs traitent en général 0,7-1,3x NAV',
        _headerBg:   '#E0DBCF', _headerText: '#44403C',
      },
      {
        lecture:     'Deck implicite du cours',
        valeur:      'environ spot (4 000 $)',
        commentaire: 'Le cours n\'est justifié (P/NAV 1,06x) qu\'au scénario deck spot + conversion totale des ressources (18 ans) + discount 5 % qui price ZÉRO risque Équateur',
        _headerBg:   '#C9A84C', _headerText: '#1B4332',
      },
      {
        lecture:     'Effet du risque pays (CRP Équateur)',
        valeur:      'NAV divisée par environ 2',
        commentaire: 'Au WACC La Thèse 25 % (CRP Équateur 11,85 %), la NAV tombe à 14-19 $ même à or élevé : P/NAV 3-4x. Le marché actualise comme un actif sans risque pays',
        _headerBg:   '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  'knt-nav-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'valeur',    label: 'Valeur'                  },
      { key: 'source',    label: 'Source / Note'           },
    ],
    lignes: [
      {
        parametre: 'Réserves prouvées et probables',
        valeur:    '1,69 Moz AuEq',
        source:    '6,18 Mt @ 8,51 g/t AuEq (AIF 2025, NI 43-101, Kora + Judd). Calculées à un prix de l\'or de seulement 1 900 $/oz. Ressources Kora/Judd M&I + inférées environ 7 Moz AuEq ; Blue Lake (porphyre) maiden inférée 14,6 Moz AuEq',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'Profil de production (AuEq)',
        valeur:    'CROISSANT, vers environ 400 koz',
        source:    'FY2025 174 koz ; guidance 2026 190-225 koz ; Stage 3 (1,2 Mtpa) run-rate environ 300-319 koz ; Stage 4 (1,8 Mtpa, fin 2027) environ 400 koz. NAV : montée en cadence modélisée, pas un plateau',
      },
      {
        parametre: 'Vie de mine retenue',
        valeur:    'environ 13 ans (central)',
        source:    'Stage 3 DFS : 7 ans sur réserves seules (1,69 Moz). Central NAV : environ 4,25 Moz extraits, soit réserves + conversion partielle des ressources Kora/Judd (le pari)',
      },
      {
        parametre: 'AISC co-product (vie de mine)',
        valeur:    'environ 1 150 $/oz AuEq',
        source:    'FY2025 publié 1 308 $/oz (by-product) ; guidance 2026 co-product 1 480-1 580 $. DFS Stage 3 : LOM 920 $/oz co-product. Retenu environ 1 150 $ (conservateur, déclinant avec l\'échelle)',
      },
      {
        parametre: 'Capex d\'expansion (hors AISC)',
        valeur:    'environ 340 M$ (2026-2028)',
        source:    'Stage 4 / accéléré. Distinct du capex de maintien (dans l\'AISC). Soustrait de la NAV en début de vie. Autofinancé (cash + cash-flow + lignes de crédit)',
      },
      {
        parametre: 'Taux d\'imposition effectif',
        valeur:    'environ 32 %',
        source:    'Papouasie-Nouvelle-Guinée (IS minier 30 % + prélèvements/redevances). Redevances déjà nettées dans l\'AISC',
      },
      {
        parametre: 'Taux d\'actualisation',
        valeur:    '5 % (base) ; 16,8 % (risque-honnête)',
        source:    'Convention minière P/NAV à 5 %. Le WACC La Thèse (CRP PNG 7,0 %, Rf US 4,09 %, bêta 1,12 vs S&P/TSX 60 TR, ERP 11,35 %) ressort à 16,8 % : l\'écart entre les deux mesure le prix du risque pays + exécution',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Trésorerie nette',
        valeur:    '+242,6 M$ (record)',
        source:    'Q1-2026 (publié 11/05/2026). Dette quasi nulle. Ajoutée à la NAV. FY2025 : +176 M$',
      },
    ],
  },

  'knt-deck-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Scénario de deck', primary: true },
      { key: 'bear',      label: 'Bear'                            },
      { key: 'central',   label: 'Central'                         },
      { key: 'bull',      label: 'Bull'                            },
    ],
    lignes: [
      {
        parametre: 'Deck de prix de l\'or',
        bear:      '2 800 $/oz',
        central:   '3 400 $/oz',
        bull:      '4 000 $/oz (~spot)',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'FCF après impôt / an (régime Stage 4)',
        bear:      'environ 480 M$',
        central:   'environ 640 M$',
        bull:      'environ 800 M$',
      },
      {
        parametre: 'NAV par action (discount 5 %)',
        bear:      'environ 13,5 $US',
        central:   'environ 18,6 $US',
        bull:      'environ 23,8 $US',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'NAV par action (en CAD, x1,42)',
        bear:      'environ 19 CAD',
        central:   'environ 26 CAD',
        bull:      'environ 34 CAD',
      },
      {
        parametre: 'P/NAV au cours (22,3 CAD / 15,7 $US)',
        bear:      '1,17x',
        central:   '0,84x',
        bull:      '0,66x',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'knt-nav-deck': {
    colonnes: [
      { key: 'deck',  label: 'Deck de l\'or',  primary: true },
      { key: 'd5',    label: 'Discount 5 %'                  },
      { key: 'd8',    label: 'Discount 8 %'                  },
      { key: 'd12',   label: 'Discount 12 %'                 },
      { key: 'd17',   label: 'WACC 16,8 %'                   },
    ],
    lignes: [
      {
        deck: '2 800 $/oz (bear)',
        d5:   '13,5 $',  d8: '11,3 $',  d12: '9,0 $',  d17: '7,1 $',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        deck: '3 400 $/oz (central)',
        d5:   '18,6 $',  d8: '15,6 $',  d12: '12,5 $',  d17: '9,9 $',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        deck: '4 000 $/oz (bull / spot)',
        d5:   '23,8 $',  d8: '19,9 $',  d12: '16,0 $',  d17: '12,7 $',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
      {
        deck: 'Cours actuel : 15,7 $US (22,3 CAD)',
        d5:   'P/NAV 0,7-1,2x',  d8: '0,8-1,4x',  d12: '1,0-1,7x',  d17: '1,2-2,2x',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  'knt-production-ramp': {
    colonnes: [
      { key: 'jalon',  label: 'Jalon',           primary: true },
      { key: 'debit',  label: 'Débit'                          },
      { key: 'prod',   label: 'Production AuEq'                 },
      { key: 'aisc',   label: 'AISC'                           },
    ],
    lignes: [
      {
        jalon: '2024 (réalisé)',
        debit: '0,6 Mtpa',
        prod:  '150 koz',
        aisc:  '1 066 $/oz',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        jalon: '2025 (réalisé, record)',
        debit: '0,6 -> 1,2 Mtpa',
        prod:  '174 koz',
        aisc:  '1 308 $/oz',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        jalon: '2026 (guidance)',
        debit: '1,2 Mtpa',
        prod:  '190-225 koz',
        aisc:  '1 250-1 350 $ (by-prod.)',
      },
      {
        jalon: 'Stage 3 (régime, dès 2026)',
        debit: '1,2 Mtpa',
        prod:  'environ 300-319 koz',
        aisc:  'LOM 920 $/oz (co-prod., DFS)',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        jalon: 'Stage 4 (commissioning fin 2027)',
        debit: '1,8 Mtpa',
        prod:  'environ 400 koz',
        aisc:  'bas (économies d\'échelle)',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
      {
        jalon: 'Cible Tier 1 (long terme)',
        debit: '1,8 Mtpa +',
        prod:  'vers 500 koz',
        aisc:  'parmi les plus bas du secteur',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  'knt-multiples': {
    colonnes: [
      { key: 'metrique', label: 'Multiple (cours spot)', primary: true },
      { key: 'knt',      label: 'K92 Mining'                           },
      { key: 'pairs',    label: 'Médiane producteurs'                  },
      { key: 'lug',      label: 'Lundin Gold'                          },
    ],
    lignes: [
      {
        metrique: 'PER (trailing)',
        knt:      '12,1x',
        pairs:    '12,2x',
        lug:      '14,3x',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      { metrique: 'PER (forward)',       knt: '6,0x',  pairs: '7,6x',  lug: '11,6x' },
      { metrique: 'EV / EBITDA',         knt: '10,6x', pairs: '9,6x',  lug: '12,6x' },
      { metrique: 'P / FCF',             knt: '84x',   pairs: '32x',   lug: '14x'   },
      { metrique: 'FCF Yield',           knt: '1,2 %', pairs: '2,6 %', lug: '7,1 %' },
      { metrique: 'Dette nette / EBITDA', knt: '-0,4x', pairs: '-0,2x', lug: '-0,5x' },
      {
        metrique: 'P / NAV (deck central, 5 %)',
        knt:      '0,84x',
        pairs:    'environ 1,0x',
        lug:      '1,7x',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
    ],
  },

  'knt-fcf-deck': {
    colonnes: [
      { key: 'deck',    label: 'Deck de l\'or',  primary: true },
      { key: 'fcf',     label: 'FCF après impôt'                },
      { key: 'yield',   label: 'FCF Yield (cap)'                },
      { key: 'lecture', label: 'Lecture'                        },
    ],
    lignes: [
      {
        deck: '2 800 $/oz',
        fcf:  'environ 480 M$',
        yield: 'environ 12 %',
        lecture: 'En RÉGIME Stage 4 (environ 400 koz) : le yield se normalise une fois l\'expansion finie',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        deck: '3 400 $/oz (central)',
        fcf:  'environ 640 M$',
        yield: 'environ 17 %',
        lecture: 'Le potentiel post-expansion : c\'est ce FCF que le marché n\'a pas encore (capex en cours)',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        deck: '3 296 $/oz (réalisé 2025)',
        fcf:  '65 M$ (réel, bridé)',
        yield: '1,7 %',
        lecture: 'Le FCF ACTUEL est mince : l\'OCF record (281 M$) est absorbé par le capex d\'expansion (216 M$)',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        deck: '4 000 $/oz (spot)',
        fcf:  'environ 800 M$',
        yield: 'environ 21 %',
        lecture: 'Le meilleur des cas en régime Stage 4 : suppose exécution + or au spot',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'knt-nav-synthese': {
    colonnes: [
      { key: 'lecture',     label: 'Lecture',     primary: true },
      { key: 'valeur',      label: 'Valeur'                      },
      { key: 'commentaire', label: 'Commentaire'                 },
    ],
    lignes: [
      {
        lecture:     'NAV centrale (deck 3 400 $, discount 5 %)',
        valeur:      'environ 18,6 $US / 26 CAD',
        commentaire: 'Le cours (22,3 CAD) traite à 0,84x cette NAV : SOUS la valeur d\'actif centrale. L\'inverse de Lundin Gold (1,7x). La croissance n\'est pas entièrement price',
        _headerBg:   '#E0DBCF', _headerText: '#44403C',
      },
      {
        lecture:     'Discount implicite du cours (deck central)',
        valeur:      'environ 8 %',
        commentaire: 'Le marché actualise la central deck à environ 8 % : il croit à l\'exécution et à un or sobre, mais applique une prime modeste pour PNG + exécution. Ni le bull deck, ni le WACC plein 16,8 %',
        _headerBg:   '#C9A84C', _headerText: '#1B4332',
      },
      {
        lecture:     'NAV "réserves seules" (sans conversion)',
        valeur:      'environ 14 CAD',
        commentaire: 'Sur les seules 1,69 Moz de réserves (environ 6 ans), la NAV centrale tombe à environ 14 CAD : P/NAV 1,6x. La valeur au-dessus de ce plancher EST le pari sur la conversion des ressources',
        _headerBg:   '#1B4332', _headerText: '#F7F4EF',
      },
      {
        lecture:     'Effet du risque pays + exécution (WACC 16,8 %)',
        valeur:      'NAV centrale environ 14 CAD',
        commentaire: 'Au WACC honnête (CRP PNG 7,0 %), la NAV centrale tombe à 9,9 $US / 14 CAD : P/NAV 1,6x. Beaucoup moins extrême que Lundin (3-4x), mais le cours est alors fair-to-rich',
        _headerBg:   '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'cmoc-sotp': {
    colonnes: [
      { key: 'pole',     label: 'Pôle (somme des parties)', primary: true },
      { key: 'ebitda',   label: 'EBITDA est. (Mds CNY)'                   },
      { key: 'multiple', label: 'Multiple EV/EBITDA'                      },
      { key: 'ev',       label: "Valeur d'entreprise"                     },
    ],
    lignes: [
      {
        pole:     'Cuivre-cobalt (RDC : TFM + KFM)',
        ebitda:   'environ 32',
        multiple: '5,5x (décote RDC)',
        ev:       'environ 176 Mds',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      { pole: 'Molybdène-tungstène (Chine)', ebitda: 'environ 4,0', multiple: '6,0x', ev: 'environ 24 Mds' },
      { pole: 'Niobium-phosphates (Brésil)', ebitda: 'environ 2,5', multiple: '7,0x (franchise)', ev: 'environ 18 Mds' },
      { pole: 'Or (Brésil + Équateur, naissant)', ebitda: 'environ 2,5 (fwd)', multiple: '6,0x', ev: 'environ 15 Mds' },
      { pole: 'Négoce IXM (Suisse)', ebitda: 'environ 1,5', multiple: '6,0x / book', ev: 'environ 9 Mds' },
      {
        pole:     "Valeur d'entreprise (somme des pôles)",
        ebitda:   '-',
        multiple: '-',
        ev:       'environ 242 Mds',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        pole:     '+ Trésorerie nette',
        ebitda:   '-',
        multiple: '-',
        ev:       '+15,3 Mds',
      },
      {
        pole:     'Valeur des fonds propres / 21,4 Md actions',
        ebitda:   '-',
        multiple: '-',
        ev:       'environ 12-13 CNY/action',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        pole:     'Cours de l\'action A (Shanghai)',
        ebitda:   '-',
        multiple: '-',
        ev:       '17,55 CNY (prime sur la SOTP statique)',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'cmoc-decks': {
    colonnes: [
      { key: 'param',   label: 'Deck de prix des métaux', primary: true },
      { key: 'bear',    label: 'Bear'                                    },
      { key: 'central', label: 'Central'                                 },
      { key: 'bull',    label: 'Bull'                                    },
    ],
    lignes: [
      {
        param:   'Cuivre (LME, $/t)',
        bear:    '9 000',
        central: '10 500',
        bull:    '13 000 (~spot record)',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        param:   'Cobalt ($/lb)',
        bear:    '12 (quota levé)',
        central: '18',
        bull:    '26 (~spot, quotas)',
      },
      {
        param:   'EBITDA groupe implicite (Mds CNY)',
        bear:    'environ 33',
        central: 'environ 42',
        bull:    'environ 52',
      },
      {
        param:   "Valeur / action (EV/EBITDA 7x + tréso nette)",
        bear:    'environ 11,5 CNY',
        central: 'environ 14,4 CNY',
        bull:    'environ 17,7 CNY',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        param:   'Lecture au cours (17,55 CNY)',
        bear:    'P/V 1,5x',
        central: 'P/V 1,2x',
        bull:    'P/V 1,0x',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'cmoc-production': {
    colonnes: [
      { key: 'metal',  label: 'Métal',           primary: true },
      { key: 'p2024',  label: '2024'                           },
      { key: 'p2025',  label: '2025'                           },
      { key: 'g2026',  label: 'Guidance 2026'                  },
    ],
    lignes: [
      {
        metal: 'Cuivre',
        p2024: '650 kt',
        p2025: '741 kt (+14 %)',
        g2026: '760-820 kt',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        metal: 'Cobalt (#1 mondial)',
        p2024: '114 kt',
        p2025: '117 kt',
        g2026: '100-120 kt (quota RDC)',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      { metal: 'Molybdène',  p2024: 'environ 16 kt', p2025: 'environ 15 kt', g2026: 'maintenu' },
      { metal: 'Niobium',    p2024: '8,3 kt',        p2025: '7,1 kt',        g2026: 'environ 7 kt' },
      { metal: 'Tungstène',  p2024: '15,4 kt',       p2025: '13,9 kt',       g2026: 'maintenu' },
      {
        metal: 'Or (nouveau segment)',
        p2024: '-',
        p2025: 'démarrage (acquisitions)',
        g2026: '6-8 t (Brésil)',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'cmoc-multiples': {
    colonnes: [
      { key: 'metrique', label: 'Multiple (base API Yahoo, TTM)', primary: true },
      { key: 'cmoc',     label: 'CMOC'                                          },
      { key: 'pairs',    label: 'Médiane pairs'                                 },
      { key: 'glencore', label: 'Glencore'                                      },
    ],
    lignes: [
      {
        metrique: 'PER (trailing)',
        cmoc:     '13,8x',
        pairs:    '18,0x',
        glencore: 'N/M (257x)',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      { metrique: 'PER (forward 2026E)', cmoc: 'environ 13x', pairs: '13,2x', glencore: '11,4x' },
      { metrique: 'EV / EBITDA',         cmoc: '6,0x',  pairs: '8,8x', glencore: '9,9x' },
      { metrique: 'P / FCF',             cmoc: '21x',   pairs: '21x',  glencore: 'N/M' },
      { metrique: 'FCF Yield',           cmoc: '3,5 %', pairs: '4,9 %', glencore: '-0,5 %' },
      { metrique: 'Dette nette / EBITDA', cmoc: '-0,4x (net cash)', pairs: '0,8x', glencore: '4,1x' },
      {
        metrique: 'Note A/H',
        cmoc:     'sur l\'action A (Shanghai) : +25 %',
        pairs:    '-',
        glencore: '-',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
    ],
  },

  'cmoc-fcf-deck': {
    colonnes: [
      { key: 'deck',    label: 'Deck de cuivre',  primary: true },
      { key: 'fcf',     label: 'FCF normalisé'                   },
      { key: 'yield',   label: 'FCF Yield (cap)'                 },
      { key: 'lecture', label: 'Lecture'                         },
    ],
    lignes: [
      {
        deck: '9 000 $/t (bear)',
        fcf:  'environ 10 Mds',
        yield: 'environ 2,7 %',
        lecture: 'Post-KFM Phase II (capex de croissance retombé) : le FCF se libère même à cuivre normalisé',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        deck: '10 500 $/t (central)',
        fcf:  'environ 18 Mds',
        yield: 'environ 4,8 %',
        lecture: 'Le potentiel une fois l\'expansion finie : c\'est le FCF que le capex actuel bride',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        deck: '9 945 $/t (réalisé 2025)',
        fcf:  '13,3 Mds (bridé)',
        yield: '3,5 %',
        lecture: 'Le FCF ACTUEL : l\'OCF (20,8 Mds) est absorbé par le capex de croissance (KFM II, TFM)',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        deck: '13 000 $/t (bull / spot)',
        fcf:  'environ 28 Mds',
        yield: 'environ 7,5 %',
        lecture: 'Le meilleur des cas : cuivre au record + capex retombé. Suppose un supercycle durable',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'cmoc-synthese': {
    colonnes: [
      { key: 'lecture',     label: 'Lecture',     primary: true },
      { key: 'valeur',      label: 'Valeur'                      },
      { key: 'commentaire', label: 'Commentaire'                 },
    ],
    lignes: [
      {
        lecture:     'SOTP statique (FY2025, multiples par métal)',
        valeur:      'environ 12-13 CNY',
        commentaire: 'Le cours (17,55) traite à environ 1,4x cette SOTP statique : SOUS aucun pôle pris isolément, mais au-dessus de leur somme. Comme Iberdrola/Siemens Energy, le marché capitalise par avance la croissance forward (KFM II, or, supercycle)',
        _headerBg:   '#E0DBCF', _headerText: '#44403C',
      },
      {
        lecture:     'Deck implicite du cours',
        valeur:      'bull (cuivre ~record + cobalt haut)',
        commentaire: 'À EV/EBITDA 7x, le cours 17,55 correspond au scénario bull (EBITDA environ 52 Mds). Le marché price un cuivre durablement au record et un cobalt soutenu par les quotas RDC : peu de marge si l\'un des deux reflue',
        _headerBg:   '#C9A84C', _headerText: '#1B4332',
      },
      {
        lecture:     'EV/EBITDA forward (2026E environ 46 Mds)',
        valeur:      'environ 7,8x',
        commentaire: 'En forward, le titre revient en ligne avec la médiane des pairs (8,8x trailing). Ni cher ni en solde : un producteur de qualité au juste prix, pas une décote',
        _headerBg:   '#1B4332', _headerText: '#F7F4EF',
      },
      {
        lecture:     'Décote A/H (action H, Hong Kong)',
        valeur:      'environ -25 %',
        commentaire: 'Sur le 3993.HK, l\'EV/EBITDA tombe à environ 6x : la vraie décote « cuivre bon marché » est sur la ligne de Hong Kong, pas sur l\'action A de Shanghai affichée ici',
        _headerBg:   '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'scco-nav-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre (NAV vie-de-mine)', primary: true },
      { key: 'valeur',    label: 'Valeur'                                      },
      { key: 'source',    label: 'Source / Note'                              },
    ],
    lignes: [
      {
        parametre: 'Production cuivre normalisée',
        valeur:    'environ 2 050 M lbs/an',
        source:    'Production 2025 : 2 035,6 M lbs (~923 kt) ; guidance 2026 : 911 kt. Cinq mines (Pérou 43 %, Mexique 57 %)',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'Coût cash net de sous-produits',
        valeur:    '0,58 $/lb (2025)',
        source:    'Le plus bas du secteur. Avant crédit de sous-produits : 2,17 $/lb. Les sous-produits (molybdène, argent, zinc) sont crédités contre le coût du cuivre, pas valorisés à part',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Sensibilité disclosée',
        valeur:    '+0,10 $/lb = +120 M$ de RN',
        source:    'Sensibilité du 10-K (donc +1 887 M$ d\'EBIT pré-impôt par dollar/lb). Sert à dériver le NOPAT par deck',
      },
      {
        parametre: 'Vie de mine retenue',
        valeur:    '30 ans (conservateur)',
        source:    'Réserves calculées à 3,80 $/lb, vies de mine 20 à 35 ans PAR mine + ressources massives. 30 ans est une borne basse pour les plus grandes réserves de cuivre du secteur',
      },
      {
        parametre: 'Taux d\'imposition',
        valeur:    '36 %',
        source:    'Taux effectif FY2025 (Pérou + Mexique, redevances minières incluses dans le coût)',
      },
      {
        parametre: 'Trésorerie nette',
        valeur:    '-2 889 M$ (dette nette)',
        source:    'Dette totale 7 798 - trésorerie 4 909. Levier très bas (0,37x EBITDA)',
      },
      {
        parametre: 'Taux d\'actualisation (double lentille)',
        valeur:    '5 % / 8 % / 10 %',
        source:    '5 % = convention minière ; 10 % = WACC plein (CRP blend Pérou/Mexique ~1,5 %, juridictions investment-grade)',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  'scco-deck-scenarios': {
    colonnes: [
      { key: 'param',   label: 'Scénario (deck de cuivre)', primary: true },
      { key: 'bear',    label: 'Bear'                                       },
      { key: 'central', label: 'Central'                                    },
      { key: 'bull',    label: 'Bull'                                       },
    ],
    lignes: [
      {
        param:   'Prix cuivre (deck, $/lb)',
        bear:    '3,80 (prix des réserves)',
        central: '4,40 (mid-cycle)',
        bull:    '5,20 (proche spot record)',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        param:   'NOPAT steady-state (M$)',
        bear:    'environ 3 193',
        central: 'environ 3 913',
        bull:    'environ 4 873',
      },
      {
        param:   'NAV/action à 5 % (convention)',
        bear:    'environ 56 $',
        central: 'environ 69 $',
        bull:    'environ 87 $',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        param:   'NAV/action à 8 %',
        bear:    'environ 40 $',
        central: 'environ 50 $',
        bull:    'environ 63 $',
      },
      {
        param:   'P/NAV au cours (174 $), à 5 %',
        bear:    '3,1x',
        central: '2,5x',
        bull:    '2,0x',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'scco-nav-deck': {
    colonnes: [
      { key: 'deck',  label: 'NAV/action ($) par deck x discount', primary: true },
      { key: 'd5',    label: '5 % (convention)'                                   },
      { key: 'd8',    label: '8 %'                                                },
      { key: 'd10',   label: '10 % (WACC plein)'                                  },
    ],
    lignes: [
      {
        deck: 'Bear (cuivre 3,80 $/lb)',
        d5:   '56 $ - P/NAV 3,1x',
        d8:   '40 $ - 4,3x',
        d10:  '33 $ - 5,3x',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        deck: 'Central (cuivre 4,40 $/lb)',
        d5:   '69 $ - P/NAV 2,5x',
        d8:   '50 $ - 3,5x',
        d10:  '41 $ - 4,2x',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        deck: 'Bull (cuivre 5,20 $/lb)',
        d5:   '87 $ - P/NAV 2,0x',
        d8:   '63 $ - 2,8x',
        d10:  '52 $ - 3,3x',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
      {
        deck: 'Cuivre PERPÉTUEL à 5,20 $ (pas d\'épuisement)',
        d5:   '114 $ - P/NAV 1,5x',
        d8:   '70 $ - 2,5x',
        d10:  '56 $ - 3,1x',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  'scco-production': {
    colonnes: [
      { key: 'metal',  label: 'Métal',          primary: true },
      { key: 'p2024',  label: '2024'                          },
      { key: 'p2025',  label: '2025'                          },
      { key: 'g2026',  label: 'Guidance 2026'                 },
    ],
    lignes: [
      {
        metal: 'Cuivre (mine)',
        p2024: '2 147 M lbs',
        p2025: '2 108 M lbs (-1,8 %)',
        g2026: '911 kt (~2 009 M lbs)',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        metal: 'Coût cash net (par lb)',
        p2024: '0,89 $/lb',
        p2025: '0,58 $/lb',
        g2026: 'le plus bas du secteur',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      { metal: 'Molybdène',  p2024: '63,9 M lbs', p2025: '68,7 M lbs (+7,4 %)', g2026: 'maintenu' },
      { metal: 'Argent',     p2024: 'croissance', p2025: '+15,3 %',             g2026: 'maintenu' },
      { metal: 'Zinc',       p2024: '287 M lbs',  p2025: '390 M lbs (+36 %)',   g2026: 'Buenavista Zinc à pleine capacité' },
      {
        metal: 'Pipeline (organique)',
        p2024: '-',
        p2025: 'Tia Maria, Los Chancas en lancement',
        g2026: 'El Pilar, Michiquillay, El Arco',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'scco-multiples': {
    colonnes: [
      { key: 'metrique', label: 'Multiple (base API Yahoo, TTM)', primary: true },
      { key: 'scco',     label: 'Southern Copper'                               },
      { key: 'pairs',    label: 'Médiane pairs'                                 },
      { key: 'freeport', label: 'Freeport'                                      },
    ],
    lignes: [
      {
        metrique: 'PER (trailing)',
        scco:     '33x (spot) / 29,5x (relevé)',
        pairs:    '15,9x',
        freeport: '33,3x',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      { metrique: 'EV / EBITDA',          scco: '18,7x (spot)', pairs: '9,0x',  freeport: '~11x' },
      { metrique: 'P / FCF',              scco: '42x',          pairs: '34,3x', freeport: '81x' },
      { metrique: 'FCF Yield',            scco: '2,3 %',        pairs: '2,9 %', freeport: '1,2 %' },
      { metrique: 'Dette nette / EBITDA', scco: '0,37x',        pairs: '0,85x', freeport: '0,68x' },
      { metrique: 'Marge EBIT',           scco: '52-58 %',      pairs: '31 %',  freeport: '31 %' },
      {
        metrique: 'P/NAV (deck central, 5 %)',
        scco:     '2,5x',
        pairs:    '0,7-1,3x (norme minière)',
        freeport: '-',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
    ],
  },

  'scco-fcf-deck': {
    colonnes: [
      { key: 'deck',    label: 'Deck de cuivre',  primary: true },
      { key: 'fcf',     label: 'FCF (OCF - capex)'               },
      { key: 'yield',   label: 'FCF Yield (cap)'                 },
      { key: 'lecture', label: 'Lecture'                         },
    ],
    lignes: [
      {
        deck: '3,80 $/lb (bear)',
        fcf:  'environ 2 170 M$',
        yield: 'environ 1,5 %',
        lecture: 'Cuivre normalisé : le FCF se comprime, le rendement tombe sous le taux sans risque',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        deck: '4,40 $/lb (central)',
        fcf:  'environ 2 890 M$',
        yield: 'environ 2,0 %',
        lecture: 'Mid-cycle : un rendement du cash modeste pour un titre payé 33x les bénéfices',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        deck: '4,85 $/lb (réalisé 2025)',
        fcf:  '3 427 M$',
        yield: '2,4 %',
        lecture: 'Le FCF ACTUEL, déjà à cuivre élevé. Attention : le capex de croissance (Tia Maria, El Pilar, Los Chancas) va MONTER et presser le FCF futur',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        deck: '5,20 $/lb (bull / proche spot)',
        fcf:  'environ 3 850 M$',
        yield: 'environ 2,7 %',
        lecture: 'Cuivre proche du record : même là, le rendement du FCF reste mince. On ne paie pas pour le cash immédiat, mais pour la rareté de l\'actif',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'scco-nav-synthese': {
    colonnes: [
      { key: 'lecture',     label: 'Lecture',     primary: true },
      { key: 'valeur',      label: 'Valeur'                      },
      { key: 'commentaire', label: 'Commentaire'                 },
    ],
    lignes: [
      {
        lecture:     'NAV vie-de-mine, deck central à 5 %',
        valeur:      'environ 69 $/action',
        commentaire: 'À la convention minière la plus généreuse (5 %, cuivre mid-cycle), le cours (174 $) vaut déjà 2,5 fois la valeur d\'actif. À 8 %, 3,5x. SCCO est plus cher sur NAV que Lundin Gold (1,7x), pourtant qualifiée de « payée pour la perfection »',
        _headerBg:   '#E0DBCF', _headerText: '#44403C',
      },
      {
        lecture:     'NAV à cuivre PERPÉTUEL (5,20 $) à 5 %',
        valeur:      'environ 114 $/action',
        commentaire: 'Même en supposant un cuivre au record À PERPÉTUITÉ (pas d\'épuisement des réserves) et le discount le plus bas, la valeur reste sous le cours. Le marché paie au-delà de toute hypothèse raisonnable de prix et de durée',
        _headerBg:   '#C9A84C', _headerText: '#1B4332',
      },
      {
        lecture:     'Deck implicite du cours',
        valeur:      'cuivre durablement > 5 $/lb + discount < 5 %',
        commentaire: 'Pour réconcilier le cours avec la NAV, il faut un cuivre éternellement au record ET un taux d\'actualisation inférieur à la convention minière. Le marché valorise SCCO comme une rente quasi perpétuelle sur le cuivre, pas comme un actif fini',
        _headerBg:   '#1B4332', _headerText: '#F7F4EF',
      },
      {
        lecture:     'Ce que la prime achète',
        valeur:      'le coût le plus bas + les réserves les plus longues',
        commentaire: 'La prime n\'est pas absurde : coût cash 0,58 $/lb (survit à tout repli), réserves parmi les plus grandes du monde (rente longue), juridictions investment-grade (WACC ~10 %), ROIC 32 %. Mais elle suppose la perfection maintenue, et ignore le risque Pérou (Tia Maria) et le contrôle Grupo México',
        _headerBg:   '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'siemens-energy-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'valeur',    label: 'Valeur'                  },
      { key: 'source',    label: 'Source / Note'           },
    ],
    lignes: [
      {
        parametre: 'Cash-flow libre normalisé (base)',
        valeur:    'environ 4 000 M€',
        source:    "FCF FY2025 publié 4 157 M€ NORMALISÉ : il est dopé par les avances clients sur le carnet record (passifs de contrats +3,5 Md€). Le FCF pre-tax guidé FY2026 (~8 Md€) n'est pas un régime de croisière",
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'WACC',
        valeur:    '9,92 %',
        source:    'CAPM, bêta 1,767 (régression 60 mois vs DAX). Rf 2,86 % (Bund), ERP 4,23 % (Damodaran mature, CRP Allemagne 0 %), E/V 95 % (quasi pas de dette nette)',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Croissance perpétuelle',
        valeur:    '2,5 %',
        source:    'Croissance nominale long terme du marché électrique',
      },
      {
        parametre: 'Horizon de projection',
        valeur:    '5 ans',
        source:    'FY2026 - FY2030',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '883 M',
        source:    'FY2025. Stable depuis la fin des augmentations de capital de sauvetage',
      },
      {
        parametre: 'Trésorerie nette ajoutée',
        valeur:    '+4 013 M€',
        source:    'Cash 9 162 - dette totale 5 149. Net cash : l\'EV est INFÉRIEURE à la capitalisation',
      },
      {
        parametre: 'Part valeur terminale / EV',
        valeur:    'environ 73 %',
        source:    "Bêta ÉLEVÉ (1,77) -> WACC 9,9 % qui borne la VT : le DCF est EXPLOITABLE (≠ famille faible-bêta), mais le FCF de base est incertain",
      },
    ],
  },

  'siemens-energy-dcf-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario',                  primary: true },
      { key: 'cagr',     label: 'CAGR FCF (5 ans)'                          },
      { key: 'vt',       label: 'Part VT / EV'                              },
      { key: 'cours',    label: 'Valeur par action'                         },
    ],
    lignes: [
      {
        scenario: 'Conservateur',
        cagr:     '+6 %/an',
        vt:       '72 %',
        cours:    'environ 77 €',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        scenario: 'Central',
        cagr:     '+9 %/an',
        vt:       '73 %',
        cours:    'environ 87 €',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        scenario: 'Optimiste',
        cagr:     '+12 %/an',
        vt:       '74 %',
        cours:    'environ 98 €',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'siemens-energy-dcf-synthese': {
    colonnes: [
      { key: 'lecture',     label: 'Lecture',     primary: true },
      { key: 'valeur',      label: 'Valeur'                      },
      { key: 'commentaire', label: 'Commentaire'                 },
    ],
    lignes: [
      {
        lecture:     'DCF central (WACC 9,92 %, FCF normalisé)',
        valeur:      'environ 87 €',
        commentaire: "Exploitable (VT 73 % de l'EV, pas de piège faible-bêta), mais le FCF de base est incertain (gonflé par les avances clients)",
        _headerBg:   '#E0DBCF', _headerText: '#44403C',
      },
      {
        lecture:     "Taux d'actualisation implicite du marché",
        valeur:      'sous 9,9 %',
        commentaire: 'Le cours (163 €) suppose un FCF normalisé bien supérieur à 4 Md€ OU une croissance pérenne très au-dessus de 2,5 % : le marché price la montée en marge de 2028',
        _headerBg:   '#C9A84C', _headerText: '#1B4332',
      },
      {
        lecture:     'Convergence DCF / SOTP / PER',
        valeur:      'environ 75 - 90 €',
        commentaire: 'Les trois méthodes pointent une valeur intrinsèque autour de 75-90 €, soit environ la MOITIÉ du cours. La prime tient à la livraison parfaite de la cible FY2028',
        _headerBg:   '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  'siemens-energy-sotp': {
    colonnes: [
      { key: 'pole',     label: 'Pôle',                          primary: true },
      { key: 'profit',   label: 'Profit av. SI 2025 (M€)'                       },
      { key: 'multiple', label: 'Multiple'                                      },
      { key: 'ev',       label: 'EV (Md€)'                                      },
    ],
    lignes: [
      {
        pole:     'Grid Technologies (le joyau, +25 %)',
        profit:   '1 746',
        multiple: '18x EBIT aj.',
        ev:       '31,4',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      { pole: 'Gas Services',                    profit: '1 569',  multiple: '11x EBIT aj.', ev: '17,3' },
      { pole: 'Transformation of Industry',      profit: '626',    multiple: '10x EBIT aj.', ev: '6,3'  },
      { pole: 'Siemens Gamesa (option, déficit)', profit: '-1 359', multiple: '0,6x ventes',  ev: '6,2'  },
      { pole: 'Corporate / central',             profit: '-227',   multiple: '10x',          ev: '-2,3' },
      {
        pole:     "Valeur d'entreprise (EV)",
        profit:   '',
        multiple: '',
        ev:       'environ 58,9',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      { pole: 'plus trésorerie nette',           profit: '', multiple: '', ev: '+4,0'  },
      { pole: 'moins minoritaires (au marché)',  profit: '', multiple: '', ev: 'environ -0,5' },
      {
        pole:     'Capitaux propres (part du Groupe)',
        profit:   '',
        multiple: '',
        ev:       'environ 62,4',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
      {
        pole:     'Par action (883 M actions)',
        profit:   '',
        multiple: '',
        ev:       'environ 71 €',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
    ],
  },

  'siemens-energy-per-trois-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'bear',      label: 'Conservateur'              },
      { key: 'central',   label: 'Central'                   },
      { key: 'bull',      label: 'Optimiste'                 },
    ],
    lignes: [
      {
        parametre: 'Croissance BPA / an',
        bear:      '+6 %',
        central:   '+9 %',
        bull:      '+12 %',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'BPA normalisé projeté FY2030',
        bear:      '5,85 €',
        central:   '7,10 €',
        bull:      '8,35 €',
      },
      {
        parametre: 'PER cible normalisé',
        bear:      '16x',
        central:   '18x',
        bull:      '20x',
      },
      {
        parametre: 'Prix cible (5 ans)',
        bear:      '94 €',
        central:   '128 €',
        bull:      '167 €',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Fourchette (MoE 26,5 %)',
        bear:      '69 - 119 €',
        central:   '94 - 162 €',
        bull:      '123 - 211 €',
      },
      {
        parametre: 'Zone juste (r = 10 %, actualisée)',
        bear:      '58 €',
        central:   '79 €',
        bull:      '104 €',
      },
      {
        parametre: 'Cours juin 2026 (163 €)',
        bear:      'très au-dessus',
        central:   'au-dessus de la cible',
        bull:      'au niveau de la cible',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  'siemens-energy-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'signal',     label: 'Signal',           primary: true },
      { key: 'mos',        label: 'Marge de sécurité'                },
      { key: 'zonejuste',  label: 'Zone juste (€)'                   },
      { key: 'fourchette', label: "Fourchette d'entrée (€)"          },
    ],
    lignes: [
      { signal: 'Surveillance',         mos: '0 - 5 %',   zonejuste: '58 €', fourchette: '56 - 58 €', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { signal: 'Premier intérêt',      mos: '10 - 12 %', zonejuste: '58 €', fourchette: '51 - 52 €' },
      { signal: 'Achat fort',           mos: '17 - 20 %', zonejuste: '58 €', fourchette: '47 - 48 €' },
    ],
  },

  'siemens-energy-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'signal',     label: 'Signal',           primary: true },
      { key: 'mos',        label: 'Marge de sécurité'                },
      { key: 'zonejuste',  label: 'Zone juste (€)'                   },
      { key: 'fourchette', label: "Fourchette d'entrée (€)"          },
    ],
    lignes: [
      { signal: 'Surveillance',         mos: '0 - 5 %',   zonejuste: '79 €', fourchette: '77 - 79 €', _headerBg: '#C9A84C', _headerText: '#1B4332' },
      { signal: 'Premier intérêt',      mos: '10 - 12 %', zonejuste: '79 €', fourchette: '70 - 71 €' },
      { signal: 'Achat fort',           mos: '25 - 27 %', zonejuste: '79 €', fourchette: '58 €' },
    ],
  },

  'siemens-energy-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'signal',     label: 'Signal',           primary: true },
      { key: 'mos',        label: 'Marge de sécurité'                },
      { key: 'zonejuste',  label: 'Zone juste (€)'                   },
      { key: 'fourchette', label: "Fourchette d'entrée (€)"          },
    ],
    lignes: [
      { signal: 'Surveillance',         mos: '0 - 5 %',   zonejuste: '104 €', fourchette: '101 - 104 €', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { signal: 'Premier intérêt',      mos: '12 - 14 %', zonejuste: '104 €', fourchette: '90 - 91 €' },
      { signal: 'Achat fort',           mos: '24 - 25 %', zonejuste: '104 €', fourchette: '78 €' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SCHNEIDER ELECTRIC - 7 blocs (DCF parametres / scenarios / synthese + PER trois
  // scenarios + zones bear/central/bull). Base PER = Adjusted EPS publie 8,59 €.
  // ─────────────────────────────────────────────────────────────────────────────

  'schneider-electric-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'valeur',    label: 'Valeur'                  },
      { key: 'source',    label: 'Source / Note'           },
    ],
    lignes: [
      {
        parametre: 'Free cash-flow de base (2025)',
        valeur:    '4 635 M€',
        source:    'OCF 6 131 - capex industriel 1 496. Conversion proche de 100 % du résultat net',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'WACC',
        valeur:    '8,83 %',
        source:    'CAPM, bêta 1,439 (régression 60 mois vs CAC 40 GR). Rf Bund 2,86 %, ERP France 4,78 %',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Croissance perpétuelle',
        valeur:    '2,5 %',
        source:    'Croissance nominale long terme prudente',
      },
      {
        parametre: 'Horizon de projection',
        valeur:    '5 ans',
        source:    '2026 - 2030',
      },
      {
        parametre: 'Actions diluées',
        valeur:    '570,5 M',
        source:    'FY2025. Dilution annuelle minime (environ +0,3 %/an)',
      },
      {
        parametre: 'Dette nette déduite',
        valeur:    '13 246 M€',
        source:    'FY2025. Hausse 2025 liée au rachat des minoritaires indiens (~5,5 Md€)',
      },
      {
        parametre: 'Part valeur terminale / EV',
        valeur:    'environ 76 %',
        source:    'Bêta 1,44 et WACC 8,83 % : DCF exploitable (pas de neutralisation faible-bêta)',
      },
    ],
  },

  'schneider-electric-dcf-scenarios': {
    colonnes: [
      { key: 'scenario',  label: 'Scénario',                 primary: true },
      { key: 'croiss',    label: 'Croissance FCF / an'                      },
      { key: 'cours',     label: 'Cours DCF (€)'                            },
      { key: 'vt',        label: 'Part VT / EV'                             },
    ],
    lignes: [
      {
        scenario: 'Conservateur',
        croiss:   '+6 %',
        cours:    '130 €',
        vt:       '75 %',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
      {
        scenario: 'Central',
        croiss:   '+9 %',
        cours:    '150 €',
        vt:       '76 %',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        scenario: 'Optimiste',
        croiss:   '+12 %',
        cours:    '173 €',
        vt:       '77 %',
        _headerBg: '#D6EDDF', _headerText: '#1B4332',
      },
    ],
  },

  'schneider-electric-dcf-synthese': {
    colonnes: [
      { key: 'lecture',     label: 'Lecture',     primary: true },
      { key: 'valeur',      label: 'Valeur'                      },
      { key: 'commentaire', label: 'Commentaire'                 },
    ],
    lignes: [
      {
        lecture:     'DCF central (croissance perpétuelle 2,5 %)',
        valeur:      'environ 150 €',
        commentaire: "Plancher de prudence : la croissance terminale bornée tronque la rente séculaire de l'électrification",
        _headerBg:   '#E0DBCF', _headerText: '#44403C',
      },
      {
        lecture:     'Zone juste PER centrale (r=10 %)',
        valeur:      'environ 240 €',
        commentaire: 'Méthode dominante : capte le multiple que le marché paie pour la croissance ajustée',
        _headerBg:   '#C9A84C', _headerText: '#1B4332',
      },
      {
        lecture:     'Cours actuel (281 €)',
        valeur:      'Prime / payé pour la perfection',
        commentaire: 'Au-dessus des deux. Rendement implicite environ 6,6 %/an sur le scénario central',
        _headerBg:   '#1B4332', _headerText: '#F7F4EF',
      },
    ],
  },

  'schneider-electric-per-trois-scenarios': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'bear',      label: 'Conservateur'              },
      { key: 'central',   label: 'Central'                   },
      { key: 'bull',      label: 'Optimiste'                 },
    ],
    lignes: [
      {
        parametre: 'Croissance BPA ajusté / an',
        bear:      '+7 %',
        central:   '+10 %',
        bull:      '+13 %',
        _headerBg: '#1B4332', _headerText: '#F7F4EF',
      },
      {
        parametre: 'BPA ajusté projeté 2030',
        bear:      '12,05 €',
        central:   '13,83 €',
        bull:      '15,83 €',
      },
      {
        parametre: 'PER central retenu',
        bear:      '24x',
        central:   '28x',
        bull:      '32x',
      },
      {
        parametre: 'Prix cible (5 ans)',
        bear:      '289 €',
        central:   '387 €',
        bull:      '506 €',
        _headerBg: '#C9A84C', _headerText: '#1B4332',
      },
      {
        parametre: 'Fourchette (MoE 21,6 %)',
        bear:      '226 - 352 €',
        central:   '304 - 471 €',
        bull:      '397 - 615 €',
      },
      {
        parametre: 'Zone juste centrale (r=10 %)',
        bear:      '180 €',
        central:   '240 €',
        bull:      '315 €',
      },
      {
        parametre: 'Cours 24/06 (281 €)',
        bear:      'au-dessus',
        central:   'au-dessus (+17 %)',
        bull:      'proche / sous',
        _headerBg: '#E0DBCF', _headerText: '#44403C',
      },
    ],
  },

  'schneider-electric-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'rendement', label: 'Rendement exigé', primary: true },
      { key: 'zonejuste', label: 'Zone juste (€)'                  },
      { key: 'vscours',   label: 'vs cours 281 €'                  },
    ],
    lignes: [
      { rendement: 'r = 8 %',  zonejuste: '197 €', vscours: '-30 %', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { rendement: 'r = 10 %', zonejuste: '180 €', vscours: '-36 %' },
      { rendement: 'r = 12 %', zonejuste: '164 €', vscours: '-42 %' },
    ],
  },

  'schneider-electric-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'rendement', label: 'Rendement exigé', primary: true },
      { key: 'zonejuste', label: 'Zone juste (€)'                  },
      { key: 'vscours',   label: 'vs cours 281 €'                  },
    ],
    lignes: [
      { rendement: 'r = 8 %',  zonejuste: '264 €', vscours: '-6 %',  _headerBg: '#C9A84C', _headerText: '#1B4332' },
      { rendement: 'r = 10 %', zonejuste: '240 €', vscours: '-15 %' },
      { rendement: 'r = 12 %', zonejuste: '220 €', vscours: '-22 %' },
    ],
  },

  'schneider-electric-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'rendement', label: 'Rendement exigé', primary: true },
      { key: 'zonejuste', label: 'Zone juste (€)'                  },
      { key: 'vscours',   label: 'vs cours 281 €'                  },
    ],
    lignes: [
      { rendement: 'r = 8 %',  zonejuste: '345 €', vscours: '+23 %', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { rendement: 'r = 10 %', zonejuste: '315 €', vscours: '+12 %' },
      { rendement: 'r = 12 %', zonejuste: '287 €', vscours: '+2 %'  },
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
// VEEVA (VEEV) - valorisation PER normalise (SBC en charge) primaire + DCF FCF owner
// ════════════════════════════════════════════════════════════════════════════

// ── veeva-dcf-parametres ───────────────────────────────────────────────────
'veeva-dcf-parametres': {
  colonnes: [
    { key: 'parametre', label: 'Paramètre', primary: true },
    { key: 'valeur',    label: 'Valeur'                  },
    { key: 'source',    label: 'Source / Note'           },
  ],
  lignes: [
    {
      parametre: 'WACC',
      valeur:    '7,5 %',
      source:    'Re = Rf 4,15 % + β 0,80 × ERP 4,23 % ; dette quasi nulle, WACC ≈ Re',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      parametre: 'Taux sans risque (Rf)',
      valeur:    '4,15 %',
      source:    'UST 10 ans au 31/01/2026',
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
      valeur:    '0,80',
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
      parametre: 'FCF owner base FY2026',
      valeur:    '1 013 M$',
      source:    'FCF 1 386 - SBC après IS 373 (SBC 473 × 0,79). Base centrale du DCF',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      parametre: 'Trésorerie nette',
      valeur:    '7 210 M$',
      source:    'Cash 1 897 + placements CT 5 416 - leases 103 (au 30/04/2026)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Actions diluées',
      valeur:    '166,0 M',
      source:    'Diluées Q1 FY2027, en léger repli sous l\'effet des rachats',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

// ── veeva-dcf-scenarios ─────────────────────────────────────────────────────
'veeva-dcf-scenarios': {
  colonnes: [
    { key: 'scenario',     label: 'Scénario',             primary: true },
    { key: 'cagrFcf',      label: 'CAGR FCF owner 5 ans'                },
    { key: 'evActualisee', label: 'EV actualisée (M$)'                  },
    { key: 'equity',       label: 'Equity (M$)'                         },
    { key: 'prixAction',   label: 'Prix / action ($)'                   },
  ],
  lignes: [
    {
      scenario:     'Bear',
      cagrFcf:      '+9 %',
      evActualisee: '27 537',
      equity:       '34 747',
      prixAction:   '209',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      scenario:     'Central',
      cagrFcf:      '+14 %',
      evActualisee: '33 913',
      equity:       '41 123',
      prixAction:   '248',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      scenario:     'Bull',
      cagrFcf:      '+19 %',
      evActualisee: '41 461',
      equity:       '48 671',
      prixAction:   '293',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
    {
      scenario:     'Cours actuel (05/06/2026)',
      cagrFcf:      'Implicite ~6 %',
      evActualisee: '~21 443',
      equity:       '~28 653',
      prixAction:   '172,61',
      _headerBg: '#1B4332', _headerText: '#F7F4EF',
    },
  ],
},

// ── veeva-dcf-synthese (a placer en section Lecture croisee) ────────────────
'veeva-dcf-synthese': {
  colonnes: [
    { key: 'lecture',      label: 'Lecture',            primary: true },
    { key: 'dcfActualise', label: 'DCF FCF owner ($)'                 },
    { key: 'perRdix',      label: 'PER zone juste r=10 % ($)'         },
    { key: 'ecart',        label: 'Convergence / Écart'               },
  ],
  lignes: [
    {
      lecture:      'Bear',
      dcfActualise: '209',
      perRdix:      '154',
      ecart:        '+36 % - le DCF capte la rente perpétuelle (VT 81 %)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      lecture:      'Central',
      dcfActualise: '248',
      perRdix:      '224',
      ecart:        'Zone de juste valeur 224-248',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      lecture:      'Bull',
      dcfActualise: '293',
      perRdix:      '296',
      ecart:        '-1 % - méthodes convergentes',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
    {
      lecture:      'Cours actuel',
      dcfActualise: '172,61',
      perRdix:      '172,61',
      ecart:        'Décote 23 à 30 % sur la zone juste centrale',
      _headerBg: '#1B4332', _headerText: '#F7F4EF',
    },
  ],
},

// ── veeva-per-trois-scenarios ───────────────────────────────────────────────
'veeva-per-trois-scenarios': {
  colonnes: [
    { key: 'scenario',   label: 'Scénario',             primary: true },
    { key: 'cagrEps',    label: 'CAGR BPA normalisé'                  },
    { key: 'bpaProj',    label: 'BPA projeté FY2031 ($)'              },
    { key: 'perCible',   label: 'PER cible'                           },
    { key: 'prixCible',  label: 'Prix cible 5 ans ($)'               },
  ],
  lignes: [
    {
      scenario:    'Bear',
      cagrEps:     '+11 %',
      bpaProj:     '10,33',
      perCible:    '24x',
      prixCible:   '248',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      scenario:    'Central',
      cagrEps:     '+16 %',
      bpaProj:     '12,88',
      perCible:    '28x',
      prixCible:   '361',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      scenario:    'Bull',
      cagrEps:     '+21 %',
      bpaProj:     '15,90',
      perCible:    '30x',
      prixCible:   '477',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
  ],
},

// ── veeva-per-zone-bear ─────────────────────────────────────────────────────
'veeva-per-zone-bear': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 172,61 $'             },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '168,7 $',
      mosCours:  'Prime 2 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '153,9 $',
      mosCours:  'Prime 12 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '140,7 $',
      mosCours:  'Prime 23 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

// ── veeva-per-zone-central ──────────────────────────────────────────────────
'veeva-per-zone-central': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 172,61 $'             },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '245,4 $',
      mosCours:  'Décote 30 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '223,8 $',
      mosCours:  'Décote 23 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '204,6 $',
      mosCours:  'Décote 16 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

// ── veeva-per-zone-bull ─────────────────────────────────────────────────────
'veeva-per-zone-bull': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 172,61 $'             },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '324,6 $',
      mosCours:  'Décote 47 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '296,2 $',
      mosCours:  'Décote 42 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '270,7 $',
      mosCours:  'Décote 36 %',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
  ],
},

// ════════════════════════════════════════════════════════════════════════════
// AUTODESK (ADSK) - valorisation PER normalise (SBC en charge) primaire
// ════════════════════════════════════════════════════════════════════════════

// ── autodesk-dcf-parametres (DCF de confirmation sur FCF owner) ─────────────
// ── mama-dcf-parametres ─────────────────────────────────────────────────────
'mama-dcf-parametres': {
  colonnes: [
    { key: 'parametre', label: 'Paramètre', primary: true },
    { key: 'valeur',    label: 'Valeur'                  },
    { key: 'source',    label: 'Source / Note'           },
  ],
  lignes: [
    {
      parametre: 'WACC',
      valeur:    '6,6 %',
      source:    'Re 6,64 % (Rf 4,09 % + β 0,60 × ERP 4,23 %) ; testé à 8,5 % (prime small cap)',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      parametre: 'Marge EBIT cible (5 ans)',
      valeur:    '8 % central',
      source:    'Levier d échelle : 4,1 % FY2026 vers 8 % (6 % bear, 10 % bull)',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      parametre: 'Croissance CA (5 ans)',
      valeur:    '18 % central',
      source:    'CAGR CA (12 % bear, 25 % bull) ; CAGR historique 3 ans 22,6 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Taux sans risque (Rf)',
      valeur:    '4,09 %',
      source:    'UST 10 ans au 31/12/2025 (pas de plancher 2 % en environnement US)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'ERP',
      valeur:    '4,23 %',
      source:    'Damodaran US (mature market, sans CRP)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Bêta',
      valeur:    '0,60',
      source:    'Régression vs S&P 500 TR ; peu fiable sur small cap, d où le test à 8,5 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Croissance perpétuelle',
      valeur:    '2,5 %',
      source:    'Prudent (business non encore mature, exécution à prouver)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Trésorerie nette',
      valeur:    '+13,4 M$',
      source:    'FY2026 (24,4 M$ au Q1-FY27) : dette 6,6 - cash 19,9',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Actions diluées',
      valeur:    '41,4 M',
      source:    'Dilution ~3,5 %/an (SBC + actions émises) vers ~49 M à 5 ans',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

// ── mama-dcf-scenarios (juste valeur AUJOURD HUI) ──────────────────────────
'mama-dcf-scenarios': {
  colonnes: [
    { key: 'scenario',  label: 'Scénario',           primary: true },
    { key: 'cagrCA',    label: 'CAGR CA'                            },
    { key: 'margeTerm', label: 'Marge EBIT cible'                   },
    { key: 'jv66',      label: 'JV/action WACC 6,6 %'               },
    { key: 'jv85',      label: 'JV/action WACC 8,5 %'               },
  ],
  lignes: [
    {
      scenario:  'Bear',
      cagrCA:    '+12 %',
      margeTerm: '6 %',
      jv66:      '4,77 $',
      jv85:      '3,28 $',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      scenario:  'Central',
      cagrCA:    '+18 %',
      margeTerm: '8 %',
      jv66:      '7,72 $',
      jv85:      '5,19 $',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      scenario:  'Bull',
      cagrCA:    '+25 %',
      margeTerm: '10 %',
      jv66:      '12,30 $',
      jv85:      '8,16 $',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
    {
      scenario:  'Cours actuel (12/06/2026)',
      cagrCA:    'Implicite reverse-DCF : ~51 %',
      margeTerm: '-',
      jv66:      '14,91 $',
      jv85:      '14,91 $',
      _headerBg: '#1B4332', _headerText: '#F7F4EF',
    },
  ],
},

// ── mama-dcf-synthese (Lecture croisee) ────────────────────────────────────
'mama-dcf-synthese': {
  colonnes: [
    { key: 'methode',     label: 'Méthode',                   primary: true },
    { key: 'justeValeur', label: 'Juste valeur aujourd hui ($)'             },
    { key: 'lecture',     label: 'Lecture'                                  },
  ],
  lignes: [
    {
      methode:     'DCF central (WACC 6,6 %)',
      justeValeur: '7,72',
      lecture:     'Mon ancrage',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      methode:     'PER normalisé - zone juste r=10 %',
      justeValeur: '7,85',
      lecture:     'Confirmation (convergence)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      methode:     'DCF central (WACC 8,5 % prudent)',
      justeValeur: '5,19',
      lecture:     'Scénario prudent small cap',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      methode:     'DCF bull (WACC 6,6 %)',
      justeValeur: '12,30',
      lecture:     'Sous le cours malgré 25 % de CAGR',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
    {
      methode:     'Cours actuel (12/06/2026)',
      justeValeur: '14,91',
      lecture:     'Prime ~90 % vs juste valeur centrale',
      _headerBg: '#1B4332', _headerText: '#F7F4EF',
    },
  ],
},

// ── mama-per-trois-scenarios ───────────────────────────────────────────────
'mama-per-trois-scenarios': {
  colonnes: [
    { key: 'scenario',   label: 'Scénario',              primary: true },
    { key: 'cagrCA',     label: 'CAGR CA'                              },
    { key: 'bpaProj',    label: 'BPA normalisé FY2031 ($)'            },
    { key: 'perCentral', label: 'PER de sortie'                       },
    { key: 'prixCible',  label: 'Prix cible 5 ans ($)'                },
  ],
  lignes: [
    {
      scenario:   'Bear',
      cagrCA:     '+12 %',
      bpaProj:    '0,28',
      perCentral: '20x',
      prixCible:  '5,62',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      scenario:   'Central',
      cagrCA:     '+18 %',
      bpaProj:    '0,49',
      perCentral: '26x',
      prixCible:  '12,63',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      scenario:   'Bull',
      cagrCA:     '+25 %',
      bpaProj:    '0,81',
      perCentral: '30x',
      prixCible:  '24,31',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
  ],
},

// ── mama-per-zone-bear ─────────────────────────────────────────────────────
'mama-per-zone-bear': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 14,91 $'              },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '3,83 $',
      mosCours:  'Prime 289 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '3,49 $',
      mosCours:  'Prime 327 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '3,19 $',
      mosCours:  'Prime 367 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

// ── mama-per-zone-central ──────────────────────────────────────────────────
'mama-per-zone-central': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 14,91 $'              },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '8,60 $',
      mosCours:  'Prime 73 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '7,85 $',
      mosCours:  'Prime 90 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '7,17 $',
      mosCours:  'Prime 108 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

// ── mama-per-zone-bull ─────────────────────────────────────────────────────
'mama-per-zone-bull': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 14,91 $'              },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '16,55 $',
      mosCours:  'Décote 10 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '15,09 $',
      mosCours:  'Juste prix (prime 1 %)',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '13,80 $',
      mosCours:  'Prime 8 %',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
  ],
},

'krikri-dcf-parametres': {
  colonnes: [
    { key: 'parametre', label: 'Paramètre', primary: true },
    { key: 'valeur',    label: 'Valeur'                  },
    { key: 'source',    label: 'Source / Note'           },
  ],
  lignes: [
    {
      parametre: 'WACC',
      valeur:    '8,84 %',
      source:    'Re 8,97 % (Rf 2,86 % + β 0,82 × ERP 7,43 %) ; ERP intègre un CRP Grèce ~3,2 pts',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      parametre: 'FCF normalisé (base 2026)',
      valeur:    '~40 M€',
      source:    'Owner earnings : OCF moins capex de maintenance (~D&A 6,5 M) ; exclut 22,2 M de construction en cours',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      parametre: 'Croissance perpétuelle',
      valeur:    '2,5 %',
      source:    'Prudent (laitier mature, marge cyclique)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Taux sans risque (Rf)',
      valeur:    '2,86 %',
      source:    'Bund 10 ans au 31/12/2025 (convention EU)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'ERP',
      valeur:    '7,43 %',
      source:    'Mature ~4,2 % + CRP Grèce ~3,2 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Bêta',
      valeur:    '0,82',
      source:    'Régression mensuelle 5 ans vs indice grec ATHEX',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Trésorerie nette',
      valeur:    '+7,8 M€',
      source:    'FY2025 : dette 16,3 moins trésorerie 24,1',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      parametre: 'Actions diluées',
      valeur:    '33,0 M',
      source:    'Capital stable, dilution proche de zéro',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

'krikri-dcf-scenarios': {
  colonnes: [
    { key: 'scenario', label: 'Scénario',                 primary: true },
    { key: 'cagrFcf',  label: 'CAGR FCF normalisé'                      },
    { key: 'jv',       label: 'JV/action (WACC 8,84 %)'                 },
    { key: 'lecture',  label: 'Lecture'                                 },
  ],
  lignes: [
    {
      scenario: 'Bear',
      cagrFcf:  '+5 %',
      jv:       '21,0 €',
      lecture:  'Prime 34 % vs cours',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      scenario: 'Central',
      cagrFcf:  '+8 %',
      jv:       '23,2 €',
      lecture:  'Mon ancrage de contrôle',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      scenario: 'Bull',
      cagrFcf:  '+12 %',
      jv:       '26,3 €',
      lecture:  'Sous le cours malgré 12 % de CAGR',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
    {
      scenario: 'Cours actuel (12/06/2026)',
      cagrFcf:  'r implicite ~7,7 %',
      jv:       '28,15 €',
      lecture:  'Au-dessus du scénario bull',
      _headerBg: '#1B4332', _headerText: '#F7F4EF',
    },
  ],
},

'krikri-dcf-synthese': {
  colonnes: [
    { key: 'methode',     label: 'Méthode',                primary: true },
    { key: 'justeValeur', label: 'Juste valeur centrale (€)'             },
    { key: 'lecture',     label: 'Lecture'                               },
  ],
  lignes: [
    {
      methode:     'DCF normalisé central (WACC 8,84 %)',
      justeValeur: '23,2',
      lecture:     'Mon ancrage de contrôle',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      methode:     'PER zone juste centrale r=10 %',
      justeValeur: '23,3',
      lecture:     'Convergence (méthode indépendante)',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      methode:     'DCF normalisé bull',
      justeValeur: '26,3',
      lecture:     'Sous le cours malgré 12 % de CAGR FCF',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
    {
      methode:     'Rendement triangulé à 28 €',
      justeValeur: '~10 %/an',
      lecture:     'Conditionnel à la croissance, coussin dividende mince',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      methode:     'Cours actuel (12/06/2026)',
      justeValeur: '28,15',
      lecture:     'Prime ~21 % vs juste valeur centrale',
      _headerBg: '#1B4332', _headerText: '#F7F4EF',
    },
  ],
},

'krikri-per-trois-scenarios': {
  colonnes: [
    { key: 'scenario',   label: 'Scénario',            primary: true },
    { key: 'croissance', label: 'Croissance BPA post-2026'           },
    { key: 'bpaProj',    label: 'BPA projeté 2030 (€)'               },
    { key: 'perCentral', label: 'PER de sortie'                      },
    { key: 'prixCible',  label: 'Prix cible 5 ans (€)'               },
  ],
  lignes: [
    {
      scenario:   'Bear',
      croissance: '+5 %/an',
      bpaProj:    '1,76',
      perCentral: '19x',
      prixCible:  '33',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      scenario:   'Central',
      croissance: '+8 %/an',
      bpaProj:    '1,97',
      perCentral: '19x',
      prixCible:  '37',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      scenario:   'Bull',
      croissance: '+12 %/an',
      bpaProj:    '2,28',
      perCentral: '19x',
      prixCible:  '43',
      _headerBg: '#D6EDDF', _headerText: '#1B4332',
    },
  ],
},

'krikri-per-zone-bear': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 28,15 €'              },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '22,8 €',
      mosCours:  'Prime 24 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '20,8 €',
      mosCours:  'Prime 35 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '19,0 €',
      mosCours:  'Prime 48 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

'krikri-per-zone-central': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 28,15 €'              },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '25,5 €',
      mosCours:  'Prime 10 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '23,3 €',
      mosCours:  'Prime 21 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '21,3 €',
      mosCours:  'Prime 32 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

'krikri-per-zone-bull': {
  compact: true,
  colonnes: [
    { key: 'rendement', label: 'Rendement exigé', primary: true },
    { key: 'zoneJuste', label: 'Zone juste'                    },
    { key: 'mosCours',  label: 'vs cours 28,15 €'              },
  ],
  lignes: [
    {
      rendement: 'r=8 %',
      zoneJuste: '29,5 €',
      mosCours:  'Décote 5 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
    {
      rendement: 'r=10 %',
      zoneJuste: '26,9 €',
      mosCours:  'Prime 5 %',
      _headerBg: '#C9A84C', _headerText: '#1C1917',
    },
    {
      rendement: 'r=12 %',
      zoneJuste: '24,6 €',
      mosCours:  'Prime 14 %',
      _headerBg: '#E0DBCF', _headerText: '#44403C',
    },
  ],
},

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

  // ── IDEXX Laboratories (NASDAQ IDXX) : cours réf. 562 $ (05/06/2026) ──────
  'idexx-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',   primary: true },
      { key: 'valeur',    label: 'Valeur'                     },
      { key: 'source',    label: 'Source / Note'              },
    ],
    lignes: [
      { parametre: 'WACC',                   valeur: '10,6 %',   source: 'CAPM : Rf 4,09 % (UST 10 ans) + beta 1,55 x ERP 4,23 % (Damodaran US)', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Croissance perpétuelle', valeur: '2,5 %',    source: 'Plancher conservateur (sous la croissance nominale US long terme)',     _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'FCF base FY2025',        valeur: '1 044 M$', source: 'OCF 1 182 - Capex 138 (Source : CF du 10-K)',                            _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Actions diluées',        valeur: '81,0 M',   source: 'Moyenne pondérée FY2025 (Source : CR)',                                  _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Dette nette',            valeur: '270 M$',   source: 'Faible levier (0,18x EBITDA) - Source : Bilan FY2025',                   _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Horizon de projection',  valeur: '5 ans',    source: '-',                                                                     _headerBg: '#C9A84C', _headerText: '#1C1917' },
    ],
  },

  'idexx-dcf-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario',          primary: true },
      { key: 'cagr',     label: 'CAGR FCF'                         },
      { key: 'fcf5',     label: 'FCF an 5'                         },
      { key: 'ev',       label: 'EV'                               },
      { key: 'prix',     label: 'Prix implicite'                   },
      { key: 'ecart',    label: 'Écart vs cours 562 $'             },
    ],
    lignes: [
      { scenario: 'Bear : décélération organique',          cagr: '6 %',   fcf5: '1 397 M$', ev: '15 281 M$', prix: '~185 $', ecart: '-67 %', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { scenario: 'Central : guidance BPA',                 cagr: '9 %',   fcf5: '1 606 M$', ev: '17 274 M$', prix: '~210 $', ecart: '-63 %', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Bull : réaccélération (placements/menu)', cagr: '12 %', fcf5: '1 839 M$', ev: '19 483 M$', prix: '~237 $', ecart: '-58 %', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { scenario: 'Seuil : justifie le cours 562 $',        cagr: '~35 %', fcf5: '~4 700 M$', ev: '~45 800 M$', prix: '~562 $', ecart: '+0 %', _headerBg: '#C9A84C', _headerText: '#1C1917' },
    ],
  },

  'idexx-dcf-synthese': {
    colonnes: [
      { key: 'composante', label: 'Composante',  primary: true },
      { key: 'montant',    label: 'Montant (M$)'               },
      { key: 'part',       label: '% de l\'EV'                 },
    ],
    lignes: [
      { composante: 'Somme FCF actualisés (5 ans)',     montant: '4 996',  part: '28,9 %', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { composante: 'Valeur terminale actualisée',      montant: '12 278', part: '71,1 %', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { composante: 'Enterprise Value',                 montant: '17 274', part: '100 %',  _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { composante: 'Dette nette',                      montant: '-270',   part: '-',      _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { composante: 'Equity Value',                     montant: '17 004', part: '-',      _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { composante: 'Prix implicite (81,0 M actions)',  montant: '210 $',  part: '-',      _headerBg: '#C9A84C', _headerText: '#1C1917' },
    ],
  },

  'idexx-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario',          primary: true },
      { key: 'multiple', label: 'Multiple sortie'                  },
      { key: 'bpa',      label: 'BPA 2030'                         },
      { key: 'cible',    label: 'Prix cible'                       },
      { key: 'zone10',   label: 'Zone juste r=10 %'                },
      { key: 'mos',      label: 'MoS vs 562 $'                     },
    ],
    lignes: [
      { scenario: 'Bear',    multiple: '30x', bpa: '22 $', cible: '661 $', zone10: '411 $', mos: '-37 %', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { scenario: 'Central', multiple: '36x', bpa: '22 $', cible: '793 $', zone10: '493 $', mos: '-14 %', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Bull',    multiple: '42x', bpa: '22 $', cible: '926 $', zone10: '575 $', mos: '+2 %',  _headerBg: '#D6EDDF', _headerText: '#1B4332' },
    ],
  },

  'idexx-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 562 $'                  },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',  zone: '471 $', mos: '-19 %', diag: 'Modéré',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '10 %', zone: '411 $', mos: '-37 %', diag: 'Standard', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '12 %', zone: '375 $', mos: '-50 %', diag: 'Élevé',    _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '15 %', zone: '329 $', mos: '-71 %', diag: 'Agressif', _headerBg: '#F7F4EF', _headerText: '#78716C' },
    ],
  },

  'idexx-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 562 $'                  },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',  zone: '566 $', mos: '+1 %',  diag: 'Modéré',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '10 %', zone: '493 $', mos: '-14 %', diag: 'Standard', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '12 %', zone: '450 $', mos: '-25 %', diag: 'Élevé',    _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '15 %', zone: '394 $', mos: '-43 %', diag: 'Agressif', _headerBg: '#F7F4EF', _headerText: '#78716C' },
    ],
  },

  'idexx-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 562 $'                  },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',  zone: '660 $', mos: '+15 %', diag: 'Modéré',   _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '10 %', zone: '575 $', mos: '+2 %',  diag: 'Standard', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '12 %', zone: '525 $', mos: '-7 %',  diag: 'Élevé',    _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '15 %', zone: '460 $', mos: '-22 %', diag: 'Agressif', _headerBg: '#E0DBCF', _headerText: '#44403C' },
    ],
  },

  // ── NESTLÉ (SIX NESN) : cours réf. 79,58 CHF (16/06/2026) ─────────────────
  // DCF neutralisé (paradoxe des taux suisses) : valo pilotée par le PER.
  'nestle-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',   primary: true },
      { key: 'valeur',    label: 'Valeur'                     },
      { key: 'source',    label: 'Source / Note'              },
    ],
    lignes: [
      { parametre: 'WACC observé',           valeur: '3,90 %',    source: 'CAPM suisse : Rf Confédération 10 ans 0,28 % + beta 0,978 (vs SMI Total Return) x ERP 4,23 % (CRP Suisse 0)', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'WACC normalisé',         valeur: '6,50 %',    source: 'Rf re-planché vers 2,5 % : sortie de l\'anomalie de taux quasi nul suisse',                                  _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { parametre: 'Croissance perpétuelle', valeur: '2,0 %',     source: 'Convention rente alimentaire mature',                                                                       _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'FCF base FY2025',        valeur: '10 993 M CHF', source: 'OCF 15 904 - Capex 4 911 (Source : tableau de flux)',                                                     _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Dette nette',            valeur: '53 273 M CHF', source: 'Dette totale 57 852 - cash et équivalents 4 579 ; se soustrait de la valeur',                            _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Actions diluées',        valeur: '2 576 M',   source: 'Moyenne pondérée FY2025 (Source : compte de résultat)',                                                     _headerBg: '#E0DBCF', _headerText: '#1C1917' },
    ],
  },

  'nestle-dcf-scenarios': {
    colonnes: [
      { key: 'wacc',    label: 'WACC retenu',            primary: true },
      { key: 'valeur',  label: 'Juste valeur / action'                 },
      { key: 'lecture', label: 'Lecture'                               },
    ],
    lignes: [
      { wacc: '3,90 % (observé)',      valeur: '~355 CHF', lecture: 'Artefact des taux suisses (WACC - g = 1,4 %) : non retenu', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { wacc: '5,50 %',                valeur: '~116 CHF', lecture: 'Rf partiellement normalisé',                                _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { wacc: '6,50 % (normalisé)',    valeur: '~85 CHF',  lecture: 'Ancrage retenu : proche du cours, sain',                   _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { wacc: '7,50 %',                valeur: '~66 CHF',  lecture: 'Hurdle exigeant',                                          _headerBg: '#E0DBCF', _headerText: '#44403C' },
    ],
  },

  'nestle-dcf-synthese': {
    colonnes: [
      { key: 'methode',  label: 'Méthode',                 primary: true },
      { key: 'valeur',   label: 'Juste valeur centrale'                  },
      { key: 'lecture',  label: 'Lecture'                                },
    ],
    lignes: [
      { methode: 'DCF (WACC normalisé 6,5 %)',              valeur: '~85 CHF',    lecture: 'Très sensible aux taux ; ~355 au WACC observé 3,9 %',  _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { methode: 'PER central, cours seul (r=10 %)',        valeur: '~63 CHF',    lecture: 'Hurdle 10 % hors dividende',                          _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { methode: 'PER central, rendement total (div. bonus)', valeur: '~75 CHF',  lecture: 'Lentille adaptée a une valeur de rendement (3,9 %)',   _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { methode: 'Rendement total attendu au cours',        valeur: '~8 a 9 %/an', lecture: 'Dividende 3,9 % + croissance ~5 %',                   _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { methode: 'Cours spot (16/06/2026)',                 valeur: '79,58 CHF',  lecture: 'Prime légère (base stricte), ~juste (rendement total)', _headerBg: '#C9A84C', _headerText: '#1C1917' },
    ],
  },

  'nestle-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario',   label: 'Scénario',        primary: true },
      { key: 'croissance', label: 'Croissance BPA'                 },
      { key: 'bpa',        label: 'BPA s.-j. 2030'                 },
      { key: 'per',        label: 'PER cible'                      },
      { key: 'cible',      label: 'Prix cible 2030'                },
      { key: 'zone10',     label: 'Zone juste r=10 %'              },
      { key: 'mos',        label: 'MoS vs 79,58'                   },
    ],
    lignes: [
      { scenario: 'Bear',    croissance: '2 %', bpa: '4,88 CHF', per: '16x', cible: '78 CHF',  zone10: '48 CHF', mos: '-39 %', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { scenario: 'Central', croissance: '5 %', bpa: '5,64 CHF', per: '18x', cible: '101 CHF', zone10: '63 CHF', mos: '-21 %', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Bull',    croissance: '7 %', bpa: '6,20 CHF', per: '20x', cible: '124 CHF', zone10: '77 CHF', mos: '-3 %',  _headerBg: '#D6EDDF', _headerText: '#1B4332' },
    ],
  },

  'nestle-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 79,58'                  },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',  zone: '56 CHF', mos: '-30 %', diag: 'Modéré',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '10 %', zone: '48 CHF', mos: '-39 %', diag: 'Standard', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '12 %', zone: '44 CHF', mos: '-44 %', diag: 'Élevé',    _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '15 %', zone: '39 CHF', mos: '-51 %', diag: 'Agressif', _headerBg: '#F7F4EF', _headerText: '#78716C' },
    ],
  },

  'nestle-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 79,58'                  },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',  zone: '72 CHF', mos: '-9 %',  diag: 'Modéré',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '10 %', zone: '63 CHF', mos: '-21 %', diag: 'Standard', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '12 %', zone: '58 CHF', mos: '-27 %', diag: 'Élevé',    _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '15 %', zone: '50 CHF', mos: '-37 %', diag: 'Agressif', _headerBg: '#F7F4EF', _headerText: '#78716C' },
    ],
  },

  'nestle-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 79,58'                  },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',  zone: '88 CHF', mos: '+11 %', diag: 'Modéré',   _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '10 %', zone: '77 CHF', mos: '-3 %',  diag: 'Standard', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '12 %', zone: '70 CHF', mos: '-12 %', diag: 'Élevé',    _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '15 %', zone: '62 CHF', mos: '-22 %', diag: 'Agressif', _headerBg: '#E0DBCF', _headerText: '#44403C' },
    ],
  },

  // ── MONSTER BEVERAGE (NASDAQ MNST) : cours réf. 93 $ (15/06/2026) ──────────
  'monster-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre',   primary: true },
      { key: 'valeur',    label: 'Valeur'                     },
      { key: 'source',    label: 'Source / Note'              },
    ],
    lignes: [
      { parametre: 'WACC',                   valeur: '6,34 %',   source: 'CAPM : Rf 4,09 % (UST 10 ans) + beta 0,531 x ERP 4,23 % (Damodaran US) ; = coût des fonds propres (dette négligeable)', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Croissance perpétuelle', valeur: '2,5 %',    source: 'Plancher conservateur (sous la croissance nominale US long terme)',     _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'FCF base FY2025',        valeur: '1 936 M$', source: 'OCF 2 098 - Capex 162 (Source : CF du 10-K)',                            _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Actions diluées',        valeur: '984 M',    source: 'Moyenne pondérée FY2025 (Source : CR)',                                  _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Trésorerie nette',       valeur: '+2 382 M$', source: 'Cash 2 088 + placements CT 677 - dette 384 ; s\'ajoute a l\'EV',         _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Horizon de projection',  valeur: '5 ans',    source: '-',                                                                     _headerBg: '#C9A84C', _headerText: '#1C1917' },
    ],
  },

  'monster-dcf-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario',          primary: true },
      { key: 'cagr',     label: 'CAGR FCF'                         },
      { key: 'fcf5',     label: 'FCF an 5'                         },
      { key: 'ev',       label: 'EV'                               },
      { key: 'prix',     label: 'Prix implicite'                   },
      { key: 'ecart',    label: 'Écart vs cours 93 $'              },
    ],
    lignes: [
      { scenario: 'Bear : maturité US domine',          cagr: '4 %',    fcf5: '2 356 M$', ev: '55 355 M$', prix: '~59 $', ecart: '-37 %', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { scenario: 'Central : décélération maîtrisée',    cagr: '8 %',    fcf5: '2 845 M$', ev: '66 053 M$', prix: '~69 $', ecart: '-25 %', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Bull : prolongation du rythme',       cagr: '12 %',   fcf5: '3 413 M$', ev: '78 399 M$', prix: '~82 $', ecart: '-12 %', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { scenario: 'Seuil : justifie le cours 93 $',      cagr: '~15 %',  fcf5: '~3 921 M$', ev: '~89 419 M$', prix: '~93 $', ecart: '+0 %', _headerBg: '#C9A84C', _headerText: '#1C1917' },
    ],
  },

  'monster-dcf-synthese': {
    colonnes: [
      { key: 'composante', label: 'Composante',  primary: true },
      { key: 'montant',    label: 'Montant (M$)'               },
      { key: 'part',       label: '% de l\'EV'                 },
    ],
    lignes: [
      { composante: 'Somme FCF actualisés (5 ans)',     montant: '10 146', part: '15,4 %', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { composante: 'Valeur terminale actualisée',      montant: '55 907', part: '84,6 %', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { composante: 'Enterprise Value',                 montant: '66 053', part: '100 %',  _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { composante: 'Trésorerie nette',                 montant: '+2 382', part: '-',      _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { composante: 'Equity Value',                     montant: '68 434', part: '-',      _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { composante: 'Prix implicite (984 M actions)',   montant: '69 $',   part: '-',      _headerBg: '#C9A84C', _headerText: '#1C1917' },
    ],
  },

  'monster-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario',  label: 'Scénario',          primary: true },
      { key: 'croissance', label: 'Croissance BPA'                  },
      { key: 'bpa',       label: 'BPA 2030'                         },
      { key: 'cible',     label: 'Prix cible (28x)'                 },
      { key: 'zone10',    label: 'Zone juste r=10 %'                },
      { key: 'mos',       label: 'MoS vs 93 $'                      },
    ],
    lignes: [
      { scenario: 'Bear',    croissance: '6 %',  bpa: '2,76 $', cible: '77 $',  zone10: '48 $', mos: '-49 %', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { scenario: 'Central', croissance: '10 %', bpa: '3,32 $', cible: '93 $',  zone10: '58 $', mos: '-38 %', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Bull',    croissance: '14 %', bpa: '3,97 $', cible: '111 $', zone10: '69 $', mos: '-26 %', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
    ],
  },

  'monster-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 93 $'                   },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',  zone: '55 $', mos: '-41 %', diag: 'Modéré',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '10 %', zone: '48 $', mos: '-49 %', diag: 'Standard', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '12 %', zone: '44 $', mos: '-53 %', diag: 'Élevé',    _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '15 %', zone: '38 $', mos: '-59 %', diag: 'Agressif', _headerBg: '#F7F4EF', _headerText: '#78716C' },
    ],
  },

  'monster-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 93 $'                   },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',  zone: '66 $', mos: '-29 %', diag: 'Modéré',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '10 %', zone: '58 $', mos: '-38 %', diag: 'Standard', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '12 %', zone: '53 $', mos: '-43 %', diag: 'Élevé',    _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '15 %', zone: '46 $', mos: '-50 %', diag: 'Agressif', _headerBg: '#F7F4EF', _headerText: '#78716C' },
    ],
  },

  'monster-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 93 $'                   },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',  zone: '79 $', mos: '-15 %', diag: 'Modéré',   _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '10 %', zone: '69 $', mos: '-26 %', diag: 'Standard', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '12 %', zone: '63 $', mos: '-32 %', diag: 'Élevé',    _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '15 %', zone: '55 $', mos: '-41 %', diag: 'Agressif', _headerBg: '#E0DBCF', _headerText: '#44403C' },
    ],
  },

  // ── WALMART (NYSE WMT) : cours réf. 117,17 $ (18/06/2026) ─────────────────────
  'walmart-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'valeur',    label: 'Valeur'                  },
      { key: 'source',    label: 'Source / Note'           },
    ],
    lignes: [
      { parametre: 'WACC',                        valeur: '6,42 %',    source: 'E/V 93 % x Re 6,67 % + D/V 7 % x Rd après IS 3,15 %', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Taux sans risque (Rf)',       valeur: '4,15 %',    source: 'UST 10 ans, fin FY2026 (le libellé "bund" de l\'onglet est une coquille)' },
      { parametre: 'Beta',                        valeur: '0,594',     source: 'Régression mensuelle 5 ans vs S&P 500 Total Return' },
      { parametre: 'ERP',                         valeur: '4,23 %',    source: 'Damodaran US (marché mature, CRP 0)' },
      { parametre: 'Coût des fonds propres (Re)', valeur: '6,67 %',    source: 'Rf + beta x ERP' },
      { parametre: 'Croissance perpétuelle',      valeur: '2,5 %',     source: 'Plancher sous la croissance nominale US long terme' },
      { parametre: 'FCF base (publié)',           valeur: '15,0 Md$',  source: 'Comprimé par le capex de pic (26,5 Md$) ; capacité normalisée ~22 Md$', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { parametre: 'Dette nette',                 valeur: '56 368 M$', source: 'Toute dette incl. leases finance + opérationnels - trésorerie (Bilan FY2026)' },
      { parametre: 'Actions diluées',             valeur: '8 022 M',   source: 'Moyenne pondérée FY2026' },
      { parametre: 'Horizon de projection',       valeur: '5 ans',     source: 'FY2027-FY2031' },
    ],
  },

  'walmart-dcf-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario',     primary: true },
      { key: 'cagr',     label: 'CAGR FCF 5 ans'              },
      { key: 'fcf5',     label: 'FCF an 5'                    },
      { key: 'valeur',   label: 'Valeur / action'            },
      { key: 'ecart',    label: 'Écart vs cours 117 $'       },
    ],
    lignes: [
      { scenario: 'Bear : FCF publié, croissance 6 %',     cagr: '6 %',  fcf5: '20,1 Md$', valeur: '50 $',  ecart: '-57 %', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Central : FCF publié, croissance 8 %',  cagr: '8 %',  fcf5: '22,1 Md$', valeur: '56 $',  ecart: '-52 %', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Bull : FCF publié, croissance 11 %',    cagr: '11 %', fcf5: '25,3 Md$', valeur: '64 $',  ecart: '-45 %', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Central : FCF normalisé (~22 Md$)',     cagr: '8 %',  fcf5: '32,3 Md$', valeur: '82 $',  ecart: '-30 %', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { scenario: 'Cours actuel (taux implicite ~4,5-6,5 %)', cagr: '-', fcf5: '-',        valeur: '~117 $', ecart: '0 %',  _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },

  'walmart-dcf-synthese': {
    colonnes: [
      { key: 'methode', label: 'Méthode',         primary: true },
      { key: 'valeur',  label: 'Valeur centrale'                },
      { key: 'lecture', label: 'Lecture vs cours 117 $'         },
    ],
    lignes: [
      { methode: 'DCF, FCF publié (central)',           valeur: '56 $',  lecture: 'Cours = 2,1x : le FCF est trop mince (capex de pic)', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { methode: 'DCF, FCF normalisé (~22 Md$)',        valeur: '82 $',  lecture: 'Cours = 1,4x : même normalisé, sous le cours',         _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { methode: 'PER, prix cible 5 ans (25x)',         valeur: '99 $',  lecture: 'Objectif horizon SOUS le spot : payé au-delà de sa cible', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { methode: 'PER, zone juste r=10 % (central)',    valeur: '62 $',  lecture: 'MoS -90 % : exiger 10 % impose un repli de moitié',     _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { methode: 'Multiple de sortie implicite à 117 $', valeur: '47x',   lecture: 'Pour 10 %/an, le titre doit coter 47x en 2031 (vs 44x aujourd\'hui)', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },

  'walmart-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario',   label: 'Scénario',         primary: true },
      { key: 'croissance', label: 'Croissance BPA'                  },
      { key: 'bpa',        label: 'BPA 2031'                        },
      { key: 'cible',      label: 'Prix cible (25x)'                },
      { key: 'zone10',     label: 'Zone juste r=10 %'               },
      { key: 'mos',        label: 'MoS vs 117 $'                    },
    ],
    lignes: [
      { scenario: 'Bear',    croissance: '6 %',   bpa: '3,53 $', cible: '88 $',  zone10: '55 $', mos: '-113 %', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { scenario: 'Central', croissance: '8,5 %', bpa: '3,97 $', cible: '99 $',  zone10: '62 $', mos: '-90 %',  _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Bull',    croissance: '11 %',  bpa: '4,45 $', cible: '111 $', zone10: '69 $', mos: '-70 %',  _headerBg: '#D6EDDF', _headerText: '#1B4332' },
    ],
  },

  'walmart-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 117 $'                  },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',   zone: '63 $', mos: '-86 %',  diag: 'Modéré',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '8,5 %', zone: '59 $', mos: '-100 %', diag: 'Standard', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '10 %',  zone: '55 $', mos: '-113 %', diag: 'Exigeant', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '12 %',  zone: '50 $', mos: '-134 %', diag: 'Strict',   _headerBg: '#F7F4EF', _headerText: '#78716C' },
    ],
  },

  'walmart-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 117 $'                  },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',   zone: '71 $', mos: '-66 %',  diag: 'Modéré',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '8,5 %', zone: '66 $', mos: '-78 %',  diag: 'Standard', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '10 %',  zone: '62 $', mos: '-90 %',  diag: 'Exigeant', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { taux: '12 %',  zone: '56 $', mos: '-108 %', diag: 'Strict',   _headerBg: '#F7F4EF', _headerText: '#78716C' },
    ],
  },

  'walmart-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 117 $'                  },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',   zone: '79 $', mos: '-48 %', diag: 'Modéré',   _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '8,5 %', zone: '74 $', mos: '-58 %', diag: 'Standard', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '10 %',  zone: '69 $', mos: '-70 %', diag: 'Exigeant', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '12 %',  zone: '63 $', mos: '-86 %', diag: 'Strict',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
    ],
  },

  // ── COCA-COLA (NYSE KO) : cours réf. 79,94 $ (17/06/2026) ─────────────────────
  'coca-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'valeur',    label: 'Valeur'                  },
      { key: 'source',    label: 'Source / Note'           },
    ],
    lignes: [
      { parametre: 'WACC',                       valeur: '5,19 %',   source: 'E/V 86 % x Re 5,56 % + D/V 14 % x Rd après IS 2,83 %', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { parametre: 'Taux sans risque (Rf)',      valeur: '4,09 %',   source: 'UST 10 ans, fin 2025 (le libellé "bund" de l\'onglet est une coquille)' },
      { parametre: 'Beta',                       valeur: '0,3486',   source: 'Régression mensuelle 5 ans vs S&P 500 Total Return' },
      { parametre: 'ERP',                        valeur: '4,23 %',   source: 'Damodaran US (marché mature, CRP 0)' },
      { parametre: 'Coût des fonds propres (Re)', valeur: '5,56 %',  source: 'Rf + beta x ERP' },
      { parametre: 'Croissance perpétuelle',     valeur: '2,5 %',    source: 'Plancher sous la croissance nominale US long terme' },
      { parametre: 'FCF normalisé (base)',       valeur: '11,5 Md$', source: 'Publié 2025 5,3 Md$ déprimé (fairlife + dépôt IRS) ; KO guide un FCF 2026 de ~12,2 Md$', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { parametre: 'Dette nette',                valeur: '34 190 M$', source: 'Dette totale 48 062 - trésorerie + placements CT 13 872 (Bilan FY2025)' },
      { parametre: 'Actions diluées',            valeur: '4 313 M',  source: 'Moyenne pondérée FY2025' },
      { parametre: 'Horizon de projection',      valeur: '5 ans',    source: '2026-2031' },
    ],
  },

  'coca-dcf-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario',     primary: true },
      { key: 'cagr',     label: 'CAGR FCF 5 ans'              },
      { key: 'fcf5',     label: 'FCF an 5'                    },
      { key: 'valeur',   label: 'Valeur / action'            },
      { key: 'ecart',    label: 'Écart vs cours 80 $'        },
    ],
    lignes: [
      { scenario: 'Bear : maturité, change défavorable', cagr: '3 %', fcf5: '13,3 Md$', valeur: '96 $',  ecart: '+20 %', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Central : algorithme tenu',           cagr: '5 %', fcf5: '14,7 Md$', valeur: '106 $', ecart: '+33 %', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { scenario: 'Bull : reprise volumes + change',     cagr: '7 %', fcf5: '16,1 Md$', valeur: '117 $', ecart: '+46 %', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { scenario: 'Cours actuel (WACC implicite ~6,0 %)', cagr: '-',   fcf5: '-',        valeur: '~80 $', ecart: '0 %',   _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },

  'coca-dcf-synthese': {
    colonnes: [
      { key: 'methode', label: 'Méthode',         primary: true },
      { key: 'valeur',  label: 'Valeur centrale'                },
      { key: 'lecture', label: 'Lecture vs cours 80 $'          },
    ],
    lignes: [
      { methode: 'DCF, WACC 5,19 % (officiel)',      valeur: '106 $', lecture: 'Décote apparente, mais VT = 88 % de l\'EV : fragile', _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { methode: 'DCF, WACC 6,5 % (normalisé)',      valeur: '68 $',  lecture: 'Prime ~15 % : le DCF est piloté par le taux',          _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { methode: 'PER, prix cible 5 ans (22,8x)',    valeur: '94 $',  lecture: 'Objectif horizon, non actualisé (+17 %)',              _headerBg: '#E0DBCF', _headerText: '#1C1917' },
      { methode: 'PER, zone juste r=10 %',           valeur: '58 $',  lecture: 'Prime ~37 % : exiger 10 % impose un repli',            _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { methode: 'Rendement attendu au spot (Bogle)', valeur: '~9 %', lecture: 'Div 2,7 % + croissance 6,5 % : sous le seuil 10 %',    _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },

  'coca-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario',   label: 'Scénario',         primary: true },
      { key: 'croissance', label: 'Croissance BPA'                  },
      { key: 'bpa',        label: 'BPA 2030'                        },
      { key: 'cible',      label: 'Prix cible (22,8x)'              },
      { key: 'zone10',     label: 'Zone juste r=10 %'               },
      { key: 'mos',        label: 'MoS vs 80 $'                     },
    ],
    lignes: [
      { scenario: 'Bear',    croissance: '4 %',   bpa: '3,65 $', cible: '83 $',  zone10: '52 $', mos: '-55 %', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
      { scenario: 'Central', croissance: '6,5 %', bpa: '4,11 $', cible: '94 $',  zone10: '58 $', mos: '-37 %', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Bull',    croissance: '8 %',   bpa: '4,41 $', cible: '100 $', zone10: '62 $', mos: '-28 %', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
    ],
  },

  'coca-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 80 $'                   },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',   zone: '59 $', mos: '-35 %', diag: 'Modéré',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '8,5 %', zone: '55 $', mos: '-45 %', diag: 'Standard', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '10 %',  zone: '52 $', mos: '-55 %', diag: 'Exigeant', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '12 %',  zone: '47 $', mos: '-69 %', diag: 'Strict',   _headerBg: '#F7F4EF', _headerText: '#78716C' },
    ],
  },

  'coca-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 80 $'                   },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',   zone: '67 $', mos: '-20 %', diag: 'Modéré',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '8,5 %', zone: '62 $', mos: '-28 %', diag: 'Standard', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '10 %',  zone: '58 $', mos: '-37 %', diag: 'Exigeant', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { taux: '12 %',  zone: '53 $', mos: '-50 %', diag: 'Strict',   _headerBg: '#F7F4EF', _headerText: '#78716C' },
    ],
  },

  'coca-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'taux', label: 'Taux exigé (r)', primary: true },
      { key: 'zone', label: 'Zone juste'                    },
      { key: 'mos',  label: 'MoS vs 80 $'                   },
      { key: 'diag', label: 'Interprétation'                },
    ],
    lignes: [
      { taux: '7 %',   zone: '72 $', mos: '-11 %', diag: 'Modéré',   _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '8,5 %', zone: '67 $', mos: '-20 %', diag: 'Standard', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { taux: '10 %',  zone: '62 $', mos: '-28 %', diag: 'Exigeant', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { taux: '12 %',  zone: '57 $', mos: '-40 %', diag: 'Strict',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
    ],
  },

  // ── ELI LILLY (LLY) ─────────────────────────────────────────────────────────
  'lly-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'valeur',    label: 'Valeur'                  },
      { key: 'source',    label: 'Source / Note'           },
    ],
    lignes: [
      { parametre: 'WACC', valeur: '6,2 %', source: 'E/V x Re + D/V x Rd(1-t) ; quasi 100 % equity', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { parametre: 'Taux sans risque (Rf)', valeur: '4,09 %', source: 'UST 10 ans, fin 2025' },
      { parametre: 'Beta', valeur: '0,527', source: 'Régression mensuelle 5 ans vs S&P 500 Total Return' },
      { parametre: 'ERP', valeur: '4,23 %', source: 'Damodaran US (sans CRP)' },
      { parametre: 'Coût des fonds propres (Re)', valeur: '6,32 %', source: 'Rf + beta x ERP' },
      { parametre: 'Croissance perpétuelle', valeur: '2,5 %', source: 'Convention rente pharma mature' },
      { parametre: 'Horizon explicite', valeur: '5 ans', source: '2026-2031' },
      { parametre: 'FCF normalisé base (central)', valeur: '13,0 Md$', source: 'OCF - capex maintenance ~6 % CA (FCF publié 8,97 Md$ déprimé par le capex de capacité)' },
      { parametre: 'Dette nette', valeur: '35 235 M$', source: 'Bilan FY2025' },
      { parametre: 'Actions diluées', valeur: '899,3 M', source: '10-K FY2025' },
    ],
  },

  'lly-dcf-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario', primary: true },
      { key: 'fcf',      label: 'FCF base (Md$)'          },
      { key: 'cagr',     label: 'CAGR FCF 5 ans'          },
      { key: 'valeur',   label: 'Valeur / action'         },
    ],
    lignes: [
      { scenario: 'Bear',         fcf: '11,0', cagr: '10 %', valeur: '433 $',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Central',      fcf: '13,0', cagr: '18 %', valeur: '739 $',   _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { scenario: 'Bull',         fcf: '13,0', cagr: '25 %', valeur: '986 $',   _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { scenario: 'Cours actuel', fcf: '-',    cagr: '-',    valeur: '~1 149 $', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },

  'lly-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario', primary: true },
      { key: 'cagr',     label: 'CAGR EPS 5 ans'          },
      { key: 'bpa',      label: 'BPA 2031'                },
      { key: 'per',      label: 'PER cible'               },
      { key: 'cible',    label: 'Prix cible 2031'         },
      { key: 'zone',     label: 'Zone juste auj. (r=10 %)' },
    ],
    lignes: [
      { scenario: 'Bear',    cagr: '10 %', bpa: '55,2 $', per: '24x', cible: '1 324 $', zone: '822 $',   _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Central', cagr: '15 %', bpa: '68,9 $', per: '30x', cible: '2 067 $', zone: '1 284 $', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { scenario: 'Bull',    cagr: '20 %', bpa: '85,2 $', per: '36x', cible: '3 068 $', zone: '1 905 $', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
    ],
  },

  'lly-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'niveau', label: 'Bear', primary: true },
      { key: 'valeur', label: '' },
    ],
    lignes: [
      { niveau: 'Zone juste basse',    valeur: '757 $' },
      { niveau: 'Zone juste centrale', valeur: '822 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { niveau: 'Zone juste haute',    valeur: '887 $' },
    ],
  },

  'lly-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'niveau', label: 'Central', primary: true },
      { key: 'valeur', label: '' },
    ],
    lignes: [
      { niveau: 'Zone juste basse',    valeur: '1 182 $' },
      { niveau: 'Zone juste centrale', valeur: '1 284 $', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { niveau: 'Zone juste haute',    valeur: '1 385 $' },
    ],
  },

  'lly-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'niveau', label: 'Bull', primary: true },
      { key: 'valeur', label: '' },
    ],
    lignes: [
      { niveau: 'Zone juste basse',    valeur: '1 755 $' },
      { niveau: 'Zone juste centrale', valeur: '1 905 $', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { niveau: 'Zone juste haute',    valeur: '2 055 $' },
    ],
  },

  'lly-dcf-synthese': {
    colonnes: [
      { key: 'methode', label: 'Méthode', primary: true },
      { key: 'central', label: 'Valeur centrale' },
      { key: 'lecture', label: 'Lecture vs cours ~1 149 $' },
    ],
    lignes: [
      { methode: 'DCF normalisé (dominant)', central: '739 $',    lecture: 'Surévalué : -36 %, même le bull (986 $) reste sous le cours', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { methode: 'PER forward (pont)',       central: '1 284 $',  lecture: 'Légère décote : +12 %, si 15 % de CAGR EPS et 30x tiennent 5 ans' },
      { methode: 'Cours actuel',             central: '~1 149 $', lecture: 'Entre le bull DCF et le central PER : la perfection est payée', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },

  // ── UBER TECHNOLOGIES (UBER) ────────────────────────────────────────────────
  'uber-dcf-parametres': {
    colonnes: [
      { key: 'parametre', label: 'Paramètre', primary: true },
      { key: 'valeur',    label: 'Valeur'                  },
      { key: 'source',    label: 'Source / Note'           },
    ],
    lignes: [
      { parametre: 'WACC', valeur: '8,3 %', source: 'E/V x Re + D/V x Rd(1-t) ; equity ~93 %', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { parametre: 'Taux sans risque (Rf)', valeur: '4,09 %', source: 'UST 10 ans, fin 2025' },
      { parametre: 'Beta', valeur: '1,12', source: 'Régression mensuelle 5 ans vs S&P 500 Total Return' },
      { parametre: 'ERP', valeur: '4,23 %', source: 'Damodaran US (sans CRP)' },
      { parametre: 'Coût des fonds propres (Re)', valeur: '8,83 %', source: 'Rf + beta x ERP' },
      { parametre: 'Croissance perpétuelle', valeur: '2,5 %', source: 'Convention plateforme mature' },
      { parametre: 'Horizon explicite', valeur: '5 ans', source: '2026-2031' },
      { parametre: 'FCF owner base (central)', valeur: '8,4 Md$', source: 'FCF publié 9,8 Md$ - SBC après IS ; base conservatrice (float assurance)' },
      { parametre: 'Dette nette', valeur: '4 975 M$', source: 'Bilan FY2025 (leases inclus)' },
      { parametre: 'Actions diluées', valeur: '2 100 M', source: 'Post-rachats' },
    ],
  },

  'uber-dcf-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario', primary: true },
      { key: 'fcf',      label: 'FCF base (Md$)'          },
      { key: 'cagr',     label: 'CAGR FCF 5 ans'          },
      { key: 'valeur',   label: 'Valeur / action'         },
    ],
    lignes: [
      { scenario: 'Bear',         fcf: '8,4', cagr: '8 %',  valeur: '73 $',  _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Central',      fcf: '8,4', cagr: '12 %', valeur: '103 $', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { scenario: 'Bull',         fcf: '9,8', cagr: '16 %', valeur: '163 $', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { scenario: 'Cours actuel', fcf: '-',   cagr: '-',    valeur: '~69 $', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
    ],
  },

  'uber-per-trois-scenarios': {
    colonnes: [
      { key: 'scenario', label: 'Scénario', primary: true },
      { key: 'cagr',     label: 'CAGR BPA 5 ans'          },
      { key: 'bpa',      label: 'BPA 2030'                },
      { key: 'per',      label: 'PER cible'               },
      { key: 'cible',    label: 'Prix cible 2030'         },
      { key: 'zone',     label: 'Zone juste auj. (r=10 %)' },
    ],
    lignes: [
      { scenario: 'Bear',    cagr: '12 %', bpa: '3,70 $', per: '22x', cible: '81 $',  zone: '51 $',  _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { scenario: 'Central', cagr: '16 %', bpa: '4,41 $', per: '27x', cible: '119 $', zone: '74 $',  _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { scenario: 'Bull',    cagr: '20 %', bpa: '5,23 $', per: '31x', cible: '162 $', zone: '101 $', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
    ],
  },

  'uber-per-zone-bear': {
    compact: true,
    colonnes: [
      { key: 'niveau', label: 'Bear', primary: true },
      { key: 'valeur', label: '' },
    ],
    lignes: [
      { niveau: 'Zone juste basse',    valeur: '42 $' },
      { niveau: 'Zone juste centrale', valeur: '51 $', _headerBg: '#E0DBCF', _headerText: '#44403C' },
      { niveau: 'Zone juste haute',    valeur: '60 $' },
    ],
  },

  'uber-per-zone-central': {
    compact: true,
    colonnes: [
      { key: 'niveau', label: 'Central', primary: true },
      { key: 'valeur', label: '' },
    ],
    lignes: [
      { niveau: 'Zone juste basse',    valeur: '62 $' },
      { niveau: 'Zone juste centrale', valeur: '74 $', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { niveau: 'Zone juste haute',    valeur: '86 $' },
    ],
  },

  'uber-per-zone-bull': {
    compact: true,
    colonnes: [
      { key: 'niveau', label: 'Bull', primary: true },
      { key: 'valeur', label: '' },
    ],
    lignes: [
      { niveau: 'Zone juste basse',    valeur: '84 $' },
      { niveau: 'Zone juste centrale', valeur: '101 $', _headerBg: '#D6EDDF', _headerText: '#1B4332' },
      { niveau: 'Zone juste haute',    valeur: '118 $' },
    ],
  },

  'uber-dcf-synthese': {
    colonnes: [
      { key: 'methode', label: 'Méthode', primary: true },
      { key: 'central', label: 'Valeur centrale' },
      { key: 'lecture', label: 'Lecture vs cours ~69 $' },
    ],
    lignes: [
      { methode: 'DCF central (dominant)',     central: '103 $', lecture: 'Décote : +49 % ; même le bear (73 $) reste au-dessus du cours', _headerBg: '#C9A84C', _headerText: '#1C1917' },
      { methode: 'PER central (pont, r=10 %)', central: '74 $',  lecture: 'Décote : +7 % ; rejoint le DCF vers 120 $ en 2030' },
      { methode: 'Cours actuel',               central: '~69 $', lecture: 'Sous la zone juste : le marché price une décélération sévère', _headerBg: '#1B4332', _headerText: '#F7F4EF' },
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