// src/data/glossaire/etf-indices.ts
// ─────────────────────────────────────────────────────────────────────────────
// Catégorie : ETF & indices
// 6 termes
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm } from './types';

export const etfIndices: GlossaireTerm[] = [
  {
    slug: "capitalisant-distribuant",
    label: "Capitalisant (Acc) vs Distribuant (Dist)",
    category: 'ETF & indices',
    shortDef: "Les deux modes de gestion des dividendes d'un ETF : réinvestissement automatique ou versement en cash.",
    definition: `Un ETF capitalisant (Accumulating, suffixe Acc ou C) réinvestit automatiquement les dividendes reçus des entreprises du fonds. La valeur de la part augmente progressivement. C'est le mode optimal pour les intérêts composés et l'efficacité fiscale — aucun dividende distribué signifie aucun impôt immédiat.\n\nUn ETF distribuant (Distributing, suffixe Dist ou D) verse les dividendes sur ton compte espèces. Chaque distribution déclenche une imposition (PFU à 31,4 % en CTO). Utile si tu veux générer des revenus passifs réguliers — stratégie retraite ou rente.\n\nPour un investisseur en phase d'accumulation (construction du patrimoine), le capitalisant est presque toujours préférable. L'exception : si tu investis en stratégie dividendes et as besoin du flux de revenu.`,
    related: ['etf', 'dividende', 'interet-compose', 'pfu'],
    modules: [
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
    ],
  },
  {
    slug: "encours",
    label: "Encours (AUM)",
    category: 'ETF & indices',
    shortDef: "Le montant total des actifs gérés par un fonds. Indicateur de pérennité et de liquidité.",
    definition: `L'encours (ou AUM — Assets Under Management) est la somme totale d'argent gérée par un ETF ou un fonds. C'est un indicateur de pérennité et de liquidité.\n\nRègle minimale : viser des ETF avec plus de 100 millions d'euros d'encours. En dessous, le fonds n'est pas rentable pour le gestionnaire et risque d'être fermé — te forçant à vendre tes parts lors de la liquidation, pas nécessairement au bon moment.\n\nPlus l'encours est élevé, plus l'ETF est liquide, et plus le spread (écart achat/vente) est faible. Les grands ETF iShares, Amundi ou Vanguard atteignent plusieurs milliards d'euros d'encours — aucun risque de fermeture.`,
    related: ['etf', 'ter', 'liquidite', 'spread'],
    modules: [
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
    ],
  },
  {
    slug: "replication-physique",
    label: "Réplication physique",
    category: 'ETF & indices',
    shortDef: "Un ETF qui détient réellement les actions composant l'indice qu'il réplique.",
    definition: `La réplication physique est la méthode par laquelle un ETF reproduit son indice en achetant directement les actions qui le composent. Un ETF CAC 40 à réplication physique détient réellement les 40 actions du CAC 40.\n\nC'est la méthode la plus transparente : l'investisseur sait exactement ce que contient le fonds. Il n'existe aucun risque de contrepartie lié à un accord contractuel avec une banque.\n\nÀ noter : certains ETF physiques pratiquent le prêt de titres (prêter les actions détenues à des fonds vendeurs à découvert contre rémunération). Cette pratique génère des revenus qui peuvent réduire la Tracking Difference, mais introduit un faible risque de contrepartie.`,
    related: ['replication-synthetique', 'etf', 'tracking-difference'],
    modules: [
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
    ],
  },
  {
    slug: "replication-synthetique",
    label: "Réplication synthétique (swap)",
    category: 'ETF & indices',
    shortDef: "Un ETF qui réplique son indice via un contrat financier (swap) plutôt qu'en détenant les actions directement.",
    definition: `La réplication synthétique utilise un contrat de swap : le gestionnaire de l'ETF passe un accord avec une banque qui s'engage à lui livrer la performance de l'indice cible en échange d'une contrepartie. L'ETF ne détient pas forcément les actions de l'indice qu'il suit.\n\nPourquoi utiliser le synthétique ? En France, c'est l'astuce technique qui rend éligibles au PEA des ETF suivant des indices américains (S&P 500, MSCI World). L'ETF détient physiquement un panier d'actions européennes (pour respecter les 75 % requis par la réglementation PEA) et échange leur performance contre celle de l'indice américain via le swap.\n\nRisque spécifique : un risque de contrepartie bancaire, généralement plafonné réglementairement à 10 % de la valeur du fonds et couvert par des garanties. Dans la pratique, ce risque est considéré comme très faible pour les grands émetteurs (Amundi, BNP).`,
    related: ['replication-physique', 'pea', 'etf'],
    modules: [
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
      { label: "Choisir son enveloppe", href: "/academie/bases/choisir-son-enveloppe" },
    ],
  },
  {
    slug: "ter",
    label: "TER — Total Expense Ratio",
    category: 'ETF & indices',
    shortDef: "Les frais annuels de gestion d'un ETF, prélevés automatiquement sur la valeur du fonds.",
    definition: `Le TER (Total Expense Ratio) représente les frais annuels de gestion prélevés automatiquement sur la valeur d'un ETF ou d'un fonds. Tu ne les vois pas sur ton relevé — ils sont déduits en continu de la performance du fonds.\n\nObjectifs à respecter : moins de 0,30 % pour les indices larges (MSCI World, S&P 500), moins de 0,50 % pour les secteurs spécifiques ou les marchés émergents.\n\nL'impact peut sembler négligeable, mais sur 20 ans avec un capital de 50 000 €, 0,20 % de différence représente plusieurs milliers d'euros de performance définitivement perdus. Le TER est le seul coût certain et permanent d'un ETF — c'est le premier critère à vérifier. Important : un TER bas ne garantit pas une bonne qualité de suivi — vérifier aussi la Tracking Difference.`,
    related: ['etf', 'tracking-difference', 'encours'],
    modules: [
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
    ],
  },
  {
    slug: "tracking-difference",
    label: "Tracking Difference (TD)",
    category: 'ETF & indices',
    shortDef: "L'écart de performance entre un ETF et l'indice qu'il est censé répliquer sur un an.",
    definition: `La Tracking Difference (TD) mesure l'écart de performance entre un ETF et son indice de référence sur une période donnée (généralement un an). C'est l'indicateur le plus important pour évaluer la qualité réelle d'un ETF — plus fiable que le seul TER.\n\nIdéalement proche de zéro, voire légèrement négatif (l'ETF bat l'indice grâce au prêt de titres). Un ETF avec un TER de 0,20 % mais une TD de 0,50 % coûte en réalité plus cher qu'un ETF avec un TER de 0,35 % et une TD de 0,10 %.\n\nÀ distinguer de la Tracking Error, qui mesure la volatilité de la TD dans le temps (l'irrégularité du suivi). Une TD faible et stable est le signe d'une gestion rigoureuse.`,
    related: ['ter', 'etf', 'encours'],
    modules: [
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
    ],
  },
];
