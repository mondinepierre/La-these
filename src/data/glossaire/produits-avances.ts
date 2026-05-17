// src/data/glossaire/produits-avances.ts
// ─────────────────────────────────────────────────────────────────────────────
// Catégorie : Produits avancés
// 9 termes
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm } from './types';

export const produitsAvances: GlossaireTerm[] = [
  {
    slug: "covered-call",
    label: "Covered Call",
    category: 'Produits avancés',
    shortDef: "Vendre un Call sur des actions déjà détenues pour générer un revenu supplémentaire.",
    definition: `Le Covered Call est une stratégie qui consiste à vendre une option Call sur des actions que tu possèdes déjà. En échange, tu encaisses immédiatement la prime.\n\nProfil de gain : si l'action reste en dessous du strike à l'échéance, le Call expire sans valeur — tu gardes la prime ET tes actions. Si l'action monte au-dessus du strike, tu dois vendre tes actions au prix du strike — tu profites de la hausse jusqu'au strike mais pas au-delà, prime incluse.\n\nC'est la stratégie options la plus adaptée à l'investisseur long terme. Elle génère des revenus réguliers (entre 1 et 3 % par mois selon les conditions de marché) sur des positions déjà en portefeuille, au prix d'une limitation de la hausse potentielle. Elle est souvent appelée "louer ses actions".`,
    related: ['option-call', 'prime-option', 'strike'],
    modules: [
      { label: "Les Options", href: "/academie/avance/les-options" },
    ],
  },
  {
    slug: "hedge",
    label: "Hedge (couverture)",
    category: 'Produits avancés',
    shortDef: "Une position prise pour réduire le risque d'une autre position déjà détenue.",
    definition: `Hedger une position signifie prendre une position inverse ou complémentaire pour protéger un portefeuille contre une baisse. L'objectif n'est pas de maximiser les gains mais de limiter les pertes dans des scénarios défavorables.\n\nInstruments de couverture courants : les options Put sur les actifs détenus ou sur les indices (protège contre les baisses de marché), les ETF inverses (répliquent la performance inverse d'un indice — simples mais imparfaits sur le long terme), les actifs défensifs (or, obligations d'État).\n\nLe coût du hedge est réel : si le marché ne baisse pas, tu as payé une prime "pour rien". C'est le prix de l'assurance. La règle pratique est de hedger aux moments où le coût est faible (VIX bas, marché calme) et non dans la panique (VIX élevé, protection très chère).`,
    related: ['option-put', 'vix', 'vente-a-decouvert'],
    modules: [
      { label: "Le Hedge", href: "/academie/avance/le-hedge" },
    ],
  },
  {
    slug: "levier",
    label: "Levier financier",
    category: 'Produits avancés',
    shortDef: "L'utilisation de capital emprunté pour amplifier les gains (et les pertes) d'un investissement.",
    definition: `Le levier financier consiste à investir plus que le capital réellement disponible en utilisant de l'emprunt ou des produits dérivés. Un levier de 2 signifie que pour 1 000 € de capital, tu contrôles 2 000 € d'actifs — tes gains et tes pertes sont doublés.\n\nL'erreur classique de l'investisseur long terme : les ETF à levier (ETF 2×, 3×). Ces produits répliquent deux ou trois fois la performance journalière de l'indice — mais la composition quotidienne des rendements crée un glissement (volatility decay) qui fait converger vers zéro tout ETF à levier sur un marché en range ou en baisse prolongée.\n\nPour un investisseur long terme, le levier sur les marchés est quasi toujours une erreur. Pour un trader actif, il ne doit être utilisé qu'avec des stops stricts et un sizing réduit — le levier amplifie autant les erreurs que les succès.`,
    related: ['vente-a-decouvert', 'stop-loss', 'regle-1-pourcent', 'slippage'],
    modules: [
      { label: "Le Levier", href: "/academie/avance/le-levier" },
    ],
  },
  {
    slug: "option-call",
    label: "Option Call",
    category: 'Produits avancés',
    shortDef: "Un contrat donnant le droit d'acheter un actif à un prix fixé (strike) avant une date d'échéance.",
    definition: `Une option Call est un contrat financier qui donne à son acheteur le droit — mais pas l'obligation — d'acheter un actif sous-jacent (action, ETF, indice) à un prix prédéfini appelé strike, jusqu'à une date précise appelée échéance.\n\nL'acheteur d'un Call paie une prime pour obtenir ce droit. Si le prix du sous-jacent monte au-dessus du strike, le Call prend de la valeur. Si le prix reste en dessous du strike à l'échéance, le Call expire sans valeur et l'acheteur perd sa prime.\n\nPour l'investisseur long terme, l'achat de Calls peut servir à amplifier un mouvement haussier avec un risque limité à la prime payée. La vente de Calls (Covered Call sur des actions déjà détenues) génère des revenus supplémentaires.`,
    related: ['option-put', 'covered-call', 'prime-option', 'strike'],
    modules: [
      { label: "Les Options", href: "/academie/avance/les-options" },
    ],
  },
  {
    slug: "option-put",
    label: "Option Put",
    category: 'Produits avancés',
    shortDef: "Un contrat donnant le droit de vendre un actif à un prix fixé (strike) avant une date d'échéance.",
    definition: `Une option Put est un contrat financier qui donne à son acheteur le droit — mais pas l'obligation — de vendre un actif sous-jacent à un prix prédéfini (strike) jusqu'à une date précise (échéance).\n\nL'acheteur d'un Put paie une prime pour obtenir ce droit. Si le prix du sous-jacent descend en dessous du strike, le Put prend de la valeur (et peut valoir beaucoup plus que la prime payée). Si le prix reste au-dessus du strike à l'échéance, le Put expire sans valeur.\n\nPour l'investisseur long terme, les Puts servent principalement à protéger un portefeuille contre une baisse — c'est l'outil de base du hedging. Acheter des Puts sur ses positions ou sur un indice revient à souscrire une "assurance portefeuille".`,
    related: ['option-call', 'prime-option', 'strike', 'hedge', 'vix'],
    modules: [
      { label: "Les Options", href: "/academie/avance/les-options" },
      { label: "Le Hedge", href: "/academie/avance/le-hedge" },
    ],
  },
  {
    slug: "prime-option",
    label: "Prime (option)",
    category: 'Produits avancés',
    shortDef: "Le prix payé par l'acheteur d'une option — représente le coût maximum de la perte pour l'acheteur.",
    definition: `La prime est le prix d'une option — ce que l'acheteur paie pour obtenir le droit d'acheter (Call) ou de vendre (Put) à un prix fixé. Pour l'acheteur, la prime représente sa perte maximale : si l'option expire "hors de la monnaie" (sans valeur), il perd seulement la prime payée.\n\nLa prime est influencée par plusieurs facteurs : la distance entre le prix actuel et le strike, la durée jusqu'à l'échéance (plus c'est loin, plus la prime est élevée), et la volatilité implicite (le VIX pour les options sur indices).\n\nPour le vendeur d'option, c'est l'inverse : il encaisse la prime immédiatement mais s'expose à des pertes potentiellement illimitées (côté Call) ou importantes (côté Put). L'asymétrie acheteur/vendeur est fondamentale à comprendre avant de vendre des options.`,
    related: ['option-call', 'option-put', 'vix', 'covered-call'],
    modules: [
      { label: "Les Options", href: "/academie/avance/les-options" },
    ],
  },
  {
    slug: "strike",
    label: "Strike (prix d'exercice)",
    category: 'Produits avancés',
    shortDef: "Le prix prédéfini auquel une option peut être exercée.",
    definition: `Le strike (ou prix d'exercice) est le prix auquel l'option donne le droit d'acheter (Call) ou de vendre (Put) l'actif sous-jacent. Il est fixé à la création du contrat et ne change pas jusqu'à l'échéance.\n\nTerminologie liée : une option est dite "dans la monnaie" (in-the-money, ITM) si l'exercer immédiatement serait profitable (ex : Call strike 50 € sur une action à 60 €). Elle est "hors de la monnaie" (out-of-the-money, OTM) si l'exercice immédiat ne serait pas profitable. Elle est "à la monnaie" (at-the-money, ATM) quand le prix actuel est égal ou très proche du strike.\n\nLe choix du strike détermine l'équilibre entre la probabilité de gain et le coût de la prime : un strike très éloigné du prix actuel est moins cher mais a moins de chances d'être dans la monnaie à l'échéance.`,
    related: ['option-call', 'option-put', 'prime-option'],
    modules: [
      { label: "Les Options", href: "/academie/avance/les-options" },
    ],
  },
  {
    slug: "vente-a-decouvert",
    label: "Vente à découvert (Short)",
    category: 'Produits avancés',
    shortDef: "Une stratégie qui consiste à parier sur la baisse d'un actif en vendant ce qu'on ne possède pas encore.",
    definition: `La vente à découvert (shorting) consiste à vendre un actif qu'on ne détient pas encore — en l'empruntant auprès d'un broker — dans l'espoir de le racheter moins cher plus tard et d'empocher la différence.\n\nExemple : tu empruntes et vends 100 actions à 50 € chacune (5 000 €). L'action descend à 30 €. Tu les rachètes pour 3 000 €. Tu rends les actions et tu gardes 2 000 € de profit.\n\nRisque asymétrique critique : à la hausse, une action peut théoriquement monter à l'infini. Si tu es short sur une action à 50 € et qu'elle monte à 200 €, ta perte est de 150 € par action — bien plus que ton gain potentiel si elle tombe à 0 €. Le short squeeze est un risque réel : une hausse brutale force tous les vendeurs à découvert à racheter simultanément, amplifiant la hausse.`,
    related: ['levier', 'stop-loss', 'hedge'],
    modules: [
      { label: "Long et Short", href: "/academie/avance/long-et-short" },
    ],
  },
  {
    slug: "vix",
    label: "VIX (indice de volatilité)",
    category: 'Produits avancés',
    shortDef: "L'indicateur de la volatilité implicite du marché américain — surnommé le baromètre de la peur.",
    definition: `Le VIX (CBOE Volatility Index) mesure la volatilité implicite des options sur le S&P 500. Il reflète les anticipations des marchés quant aux fluctuations futures sur les 30 prochains jours. Un VIX élevé signifie que les marchés anticipent des turbulences ; un VIX bas signifie que les marchés sont calmes.\n\nNiveaux de référence : VIX < 15 = marché calme, complacency. VIX 15–25 = volatilité normale. VIX 25–40 = inquiétude et volatilité élevée. VIX > 40 = panique (COVID en mars 2020 : VIX proche de 85, crise 2008 : proche de 90).\n\nPour l'investisseur long terme, le VIX est utile comme signal de timing pour les stratégies de hedging via les Puts : acheter de la protection (Puts) quand le VIX est bas (assurance peu chère) plutôt qu'au pic de la panique (assurance très chère) est une règle de bon sens.`,
    related: ['option-put', 'option-call', 'prime-option', 'volatilite', 'hedge'],
    modules: [
      { label: "Le Hedge", href: "/academie/avance/le-hedge" },
    ],
  },
];
