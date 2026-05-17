// src/data/glossaire/gestion-risque.ts
// ─────────────────────────────────────────────────────────────────────────────
// Catégorie : Gestion du risque
// 8 termes
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm } from './types';

export const gestionRisque: GlossaireTerm[] = [
  {
    slug: "beta",
    label: "Bêta (β)",
    category: 'Gestion du risque',
    shortDef: "La sensibilité d'une action aux mouvements du marché — mesure du risque systématique non diversifiable.",
    definition: `Le bêta (β) mesure la sensibilité d'une action aux variations d'un indice de référence (généralement le marché dans son ensemble). Un bêta de 1 signifie que l'action évolue en ligne avec le marché. Un bêta de 1,5 signifie que si le marché monte de 10 %, l'action tend à monter de 15 % — et à baisser de 15 % si le marché perd 10 %.\n\nBêta < 1 : action défensive, moins volatile que le marché (utilities, consommation de base, santé). Bêta > 1 : action cyclique ou de croissance, plus amplificatrice des mouvements de marché (technologie, industrie). Bêta négatif : rare, désigne des actifs qui montent quand le marché baisse (or parfois, certains volatility products).\n\nLimite importante : le bêta est calculé sur des données historiques et peut varier significativement selon la période retenue. Il mesure uniquement le risque systématique (risque de marché) et non le risque spécifique à l'entreprise. Un faible bêta ne garantit pas un faible risque fondamental — une entreprise peut avoir un bêta faible et un bilan fragile.`,
    related: ['volatilite', 'drawdown', 'diversification', 'wacc'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },
  {
    slug: "drawdown",
    label: "Drawdown",
    category: 'Gestion du risque',
    shortDef: "La baisse maximale d'un portefeuille ou d'un actif depuis son plus haut historique.",
    definition: `Le drawdown mesure la baisse d'un portefeuille entre son dernier point le plus haut et un point bas ultérieur. Le Maximum Drawdown (MDD) est la pire baisse observée sur une période donnée — c'est l'indicateur de risque réel ressenti par l'investisseur.\n\nExemple : un portefeuille qui passe de 100 000 € à 70 000 € subit un drawdown de 30 %. Pour revenir au niveau initial, il faut un gain de 43 % (et non 30 %) — l'asymétrie entre les pertes et les gains nécessaires pour les récupérer est un concept fondamental.\n\nPourquoi connaître son drawdown acceptable avant d'investir ? Parce que c'est dans les moments de drawdown élevé que les investisseurs commettent leurs pires erreurs — vendre au creux, modifier leur stratégie sous la douleur. Si tu ne peux pas dormir avec un drawdown de −30 %, ne construis pas un portefeuille 100 % actions.`,
    related: ['volatilite', 'stop-loss', 'regle-1-pourcent', 'correction'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },
  {
    slug: "ratio-risque-rendement",
    label: "Ratio Risque/Rendement (r/R)",
    category: 'Gestion du risque',
    shortDef: "Le rapport entre le gain potentiel et la perte maximale acceptée sur une opération.",
    definition: `Le ratio risque/rendement (r/R) compare, avant d'entrer en position, le gain potentiel visé et la perte maximale acceptée. Un ratio de 1:3 signifie que pour une perte potentielle de 1 € (le stop-loss), tu vises un gain de 3 € (ton objectif de prix).\n\nL'avantage mathématique est décisif : avec un ratio 1:3, tu peux avoir tort une fois sur deux et rester rentable sur la durée. Avec un ratio 1:1, tu dois avoir raison plus de 50 % du temps pour survivre.\n\nLa règle pratique : ne jamais entrer en position avec un ratio inférieur à 1:2. Un ratio de 1:3 ou plus est l'objectif des traders disciplinés. Ce calcul doit être fait avant chaque entrée — il détermine à la fois le stop-loss et l'objectif de sortie.`,
    related: ['stop-loss', 'regle-1-pourcent', 'trailing-stop'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },
  {
    slug: "regle-1-pourcent",
    label: "Règle des 1 %",
    category: 'Gestion du risque',
    shortDef: "Ne jamais risquer plus de 1 % du capital total sur une seule opération de trading.",
    definition: `La règle des 1 % est le principe de survie mathématique du trading actif : ne jamais risquer plus de 1 % du capital total sur une seule opération. Sur un portefeuille de 10 000 €, la perte maximale acceptable par trade est de 100 €.\n\nL'impact est immédiat sur la durabilité : avec cette règle, il faudrait enchaîner 100 pertes consécutives pour ruiner le compte. Avec une règle de 10 % par trade, 10 mauvaises décisions suffisent. La question n'est pas si tu vas avoir des trades perdants — tu en auras — mais si tu survivras suffisamment longtemps pour que ta méthode exprime son avantage statistique.\n\nNote : cette règle est spécifique au trading actif. Un investisseur Buy & Hold en DCA sur ETF n'a pas à dimensionner ses versements mensuels selon cette logique — son horizon de temps et sa diversification rendent ce type de calcul inutile.`,
    related: ['stop-loss', 'ratio-risque-rendement', 'drawdown'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },
  {
    slug: "risque-de-credit",
    label: "Risque de crédit",
    category: 'Gestion du risque',
    shortDef: "Le risque qu'un emprunteur ou une contrepartie ne rembourse pas sa dette ou n'honore pas ses engagements.",
    definition: `Le risque de crédit est le risque de perte financière lié à la défaillance d'une contrepartie — qu'il s'agisse d'un emprunteur qui ne rembourse pas un prêt, d'un client qui ne paie pas ses factures, ou d'un émetteur d'obligations qui fait défaut.\n\nDans le secteur des paiements, le risque de crédit est structurellement absent du modèle Visa : l'entreprise traite les transactions mais ne prête pas d'argent. Ce sont les banques émettrices qui portent le risque de crédit des porteurs de carte. C'est cette caractéristique qui distingue fondamentalement Visa d'American Express, qui est à la fois réseau et émetteur.\n\nPour un investisseur, l'absence de risque de crédit dans un modèle économique est un avantage structurel majeur : elle supprime le risque de pertes sur créances, réduit le besoin en capital réglementaire, et améliore la prévisibilité des résultats. Les modèles sans risque de crédit affichent structurellement des marges et des ROIC plus élevés que les modèles bancaires traditionnels.`,
    related: ['asset-light', 'moat', 'free-cash-flow', 'roic'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },
  {
    slug: "slippage",
    label: "Slippage (glissement)",
    category: 'Gestion du risque',
    shortDef: "L'écart entre le prix affiché et le prix réel d'exécution d'un ordre.",
    definition: `Le slippage désigne la différence entre le prix que tu vois sur ton écran au moment de passer un ordre et le prix auquel ton ordre est effectivement exécuté. Il peut être positif (exécution à meilleur prix) ou négatif (exécution à moins bon prix), mais dans les marchés volatils, il est presque toujours négatif.\n\nCauses principales : une forte volatilité (le prix bouge trop vite pour que ton ordre suive), un manque de liquidité (pas assez de contrepartie au prix demandé), ou des ordres au marché sur des actifs peu liquides.\n\nComment le minimiser : utiliser des ordres à cours limité plutôt que des ordres au marché, surtout sur les small caps et les heures d'ouverture/clôture des marchés où la liquidité est plus faible. Les ordres au marché sur des ETF très liquides génèrent un slippage généralement négligeable.`,
    related: ['ordre-marche', 'ordre-limite', 'liquidite', 'spread'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },
  {
    slug: "stop-loss",
    label: "Stop-Loss",
    category: 'Gestion du risque',
    shortDef: "Un ordre de vente automatique déclenché quand un actif atteint un seuil de perte prédéfini.",
    definition: `Un stop-loss est un ordre de vente conditionnel qui se déclenche automatiquement lorsqu'un actif atteint un niveau de prix prédéfini. Son rôle : limiter les pertes sur une position qui évolue dans le mauvais sens.\n\nPour le trading actif, le stop-loss est l'outil fondamental de gestion du risque. La logique est claire : si tu achètes une action parce que tu penses qu'elle va monter, à quel niveau ton hypothèse est-elle invalidée ? C'est ton stop. Si ce niveau est touché, tu sors sans négocier avec toi-même.\n\nMise en garde importante pour les investisseurs Buy & Hold : un stop-loss sur un ETF MSCI World en correction de marché revient à vendre exactement au mauvais moment. Les stops sont des outils de trading actif — ils sont inadaptés à une stratégie long terme passive où la volatilité est attendue et acceptée.`,
    related: ['trailing-stop', 'regle-1-pourcent', 'drawdown', 'ratio-risque-rendement', 'ordre-stop'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },
  {
    slug: "trailing-stop",
    label: "Trailing Stop (Stop Suiveur)",
    category: 'Gestion du risque',
    shortDef: "Un stop-loss dynamique qui remonte automatiquement avec le prix pour sécuriser les gains.",
    definition: `Le trailing stop (stop suiveur) est une version dynamique du stop-loss. Au lieu d'être fixe, il s'ajuste automatiquement : il remonte à chaque nouveau plus-haut du prix, mais ne descend jamais. Il sécurise progressivement les gains accumulés sans plafonner la hausse potentielle.\n\nExemple : tu achètes une action à 100 € avec un trailing stop à 10 %. Si l'action monte à 130 €, ton stop remonte à 117 € (130 × 90 %). Si l'action redescend ensuite sous 117 €, tu es vendeur automatiquement — avec un gain net de 17 %.\n\nCalibration : trop serré (5 %), tu seras éjecté sur un simple rebond intraday. Trop large (25 %), tu laisses trop de gains sur la table. Pour un investisseur long terme sur actions de conviction, un trailing stop entre 10 et 20 % est généralement adapté selon la volatilité de l'actif.`,
    related: ['stop-loss', 'regle-1-pourcent', 'ordre-stop'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },
];
