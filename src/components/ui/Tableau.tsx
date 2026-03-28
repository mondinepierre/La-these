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