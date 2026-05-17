// src/data/glossaire/ordres-bourse.ts
// ─────────────────────────────────────────────────────────────────────────────
// Catégorie : Ordres de bourse
// 5 termes
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm } from './types';

export const ordresBourse: GlossaireTerm[] = [
  {
    slug: "ordre-limite",
    label: "Ordre à cours limité (Limit Order)",
    category: 'Ordres de bourse',
    shortDef: "Un ordre exécuté uniquement si le prix atteint un seuil prédéfini.",
    definition: `Un ordre à cours limité fixe un prix maximum pour l'achat (ou minimum pour la vente). L'ordre ne s'exécute que si le marché touche ton prix. S'il ne l'atteint jamais, l'ordre n'est pas exécuté — et c'est parfois la bonne issue.\n\nAvantage : contrôle total sur le prix d'exécution, aucun slippage. Inconvénient : risque de non-exécution si le marché ne revient pas à ton niveau.\n\nValidité des ordres : DAY (expire en fin de séance), GTC — Good Till Cancelled (reste actif jusqu'à exécution ou annulation manuelle, généralement 30 à 90 jours selon le broker — mode par défaut pour un investisseur long terme qui pose son ordre à prix cible et attend), GTD — Good Till Date (expire à une date précise, utile avant événements spécifiques).`,
    related: ['ordre-marche', 'slippage', 'ordre-oco', 'ordre-stop'],
    modules: [
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },
  {
    slug: "ordre-marche",
    label: "Ordre au marché (Market Order)",
    category: 'Ordres de bourse',
    shortDef: "Un ordre d'achat ou de vente exécuté immédiatement au meilleur prix disponible.",
    definition: `Un ordre au marché s'exécute immédiatement au meilleur prix disponible, quelle que soit ce que ce prix soit. Il garantit l'exécution, pas le prix.\n\nAvantage : exécution certaine et quasi-instantanée. Inconvénient majeur : en période de forte volatilité ou sur des actifs peu liquides, tu peux être exécuté à un prix très différent de celui affiché — c'est le slippage.\n\nUsage recommandé : uniquement sur des ETF très liquides (iShares MSCI World, S&P 500) en pleine séance et dans des conditions de marché normales. À éviter absolument sur les small caps, à l'ouverture/clôture des marchés, ou lors d'annonces de résultats.`,
    related: ['ordre-limite', 'slippage', 'spread', 'liquidite'],
    modules: [
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
      { label: "Choisir son broker", href: "/academie/bases/choisir-son-broker" },
    ],
  },
  {
    slug: "ordre-oco",
    label: "Ordre OCO — One Cancels the Other",
    category: 'Ordres de bourse',
    shortDef: "Un couple d'ordres où l'exécution de l'un annule automatiquement l'autre.",
    definition: `Un ordre OCO (One Cancels the Other) est un couple d'ordres liés : si l'un est exécuté, l'autre est annulé automatiquement. Il permet de définir à l'avance les deux scénarios de sortie d'une position — la prise de profit et le stop-loss — sans avoir à surveiller le marché.\n\nExemple : tu achètes une action à 100 €. Tu places un OCO avec un ordre de vente à 120 € (prise de profit) et un ordre stop à 90 € (stop-loss). Si l'action monte à 120 €, tu sors en profit et l'ordre stop est annulé. Si elle tombe à 90 €, le stop déclenche et la prise de profit est annulée.\n\nC'est l'outil de gestion de position le plus efficace pour les investisseurs qui ne peuvent pas surveiller leurs positions en continu. Il matérialise à l'avance une décision rationnelle, avant que les émotions n'interviennent.`,
    related: ['stop-loss', 'ordre-limite', 'ordre-stop', 'trailing-stop'],
    modules: [
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },
  {
    slug: "ordre-stop",
    label: "Ordre Stop (Stop Order)",
    category: 'Ordres de bourse',
    shortDef: "Un ordre déclenché automatiquement quand le prix atteint un niveau seuil prédéfini.",
    definition: `Un ordre stop se déclenche automatiquement quand le prix d'un actif atteint un seuil prédéfini. Il existe deux formes principales : le stop-loss (ordre de vente pour limiter les pertes si le prix descend sous le seuil) et le stop d'achat (ordre d'achat pour entrer en position si le prix monte au-dessus du seuil).\n\nDifférence avec l'ordre limite : l'ordre limite fixe un prix maximum/minimum d'exécution. L'ordre stop est un déclencheur — une fois le seuil touché, l'ordre devient un ordre au marché (ou un ordre limite, selon la configuration choisie).\n\nLe stop-limit combine les deux : une fois le seuil touché, l'ordre se transforme en ordre limite plutôt qu'en ordre au marché. Utile pour éviter le slippage dans un mouvement rapide, mais au risque de non-exécution si le prix dépasse le limit avant que l'ordre soit rempli.`,
    related: ['stop-loss', 'trailing-stop', 'ordre-limite', 'ordre-marche'],
    modules: [
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },
  {
    slug: "spread",
    label: "Spread (écart achat/vente)",
    category: 'Ordres de bourse',
    shortDef: "L'écart entre le prix d'achat (ask) et le prix de vente (bid) d'un actif à un instant donné.",
    definition: `Le spread est la différence entre le prix auquel le marché est prêt à te vendre un actif (ask) et le prix auquel il est prêt à te l'acheter (bid). C'est le coût implicite de chaque transaction — tu "paies" le spread à chaque achat et à chaque vente.\n\nExemple : un ETF affiche bid 100,00 € / ask 100,05 €. Le spread est de 0,05 €. Si tu achètes et revends immédiatement, tu perds 0,05 € par part même si le prix n'a pas bougé.\n\nLe spread est directement lié à la liquidité : plus un actif est liquide (beaucoup d'acheteurs et de vendeurs), plus le spread est faible. Sur un ETF MSCI World, le spread est souvent de 0,01 %. Sur une small cap peu liquide, il peut atteindre 1 à 2 % — un coût significatif pour des transactions fréquentes.`,
    related: ['liquidite', 'slippage', 'ordre-marche', 'encours'],
    modules: [
      { label: "Choisir son broker", href: "/academie/bases/choisir-son-broker" },
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },
];
