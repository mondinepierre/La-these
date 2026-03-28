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
  // ─── À coller dans TABLEAUX dans src/components/ui/Tableau.tsx ───────────────
// Insérer avant la fermeture `}` de l'objet TABLEAUX (après la dernière entrée existante)

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
}

export function Tableau({ id }: { id: string }) {
  const data = TABLEAUX[id]
  if (!data) return null

  const { colonnes, lignes } = data
  const colonnesData = colonnes.filter(c => !c.key.startsWith('_'))

  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:block overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#E0DBCF]">
              {colonnesData.map(col => (
                <th
                  key={col.key}
                  className="text-left py-2 pr-4 text-xs font-semibold uppercase tracking-widest text-[#78716C]"
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
                    className={`py-3 pr-4 text-[#44403C] align-top ${col.primary ? 'font-semibold text-[#1B4332]' : ''}`}
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