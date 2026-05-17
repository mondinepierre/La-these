// src/data/glossaire/strategies.ts
// ─────────────────────────────────────────────────────────────────────────────
// Catégorie : Stratégies
// 9 termes
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm } from './types';

export const strategies: GlossaireTerm[] = [
  {
    slug: "buy-and-hold",
    label: "Buy & Hold",
    category: 'Stratégies',
    shortDef: "Stratégie consistant à acheter des actifs de qualité et à les conserver sur le très long terme.",
    definition: `Le Buy & Hold ("acheter et conserver") est une stratégie d'investissement qui consiste à acheter des actifs de qualité — actions, ETF — et à les détenir sur de longues périodes, indépendamment des fluctuations de marché à court terme.\n\nL'idée centrale : les marchés montent sur le long terme, porté par la croissance économique mondiale. Essayer de "timer" le marché (acheter au plus bas, vendre au plus haut) est statistiquement contre-productif — même les professionnels y échouent durablement.\n\nSur ce site, le Buy & Hold est la stratégie de référence. Le trading actif est abordé dans les modules avancés comme un complément possible, pas une alternative supérieure.`,
    related: ['dca', 'full-etf', 'core-satellite', 'stock-picking', 'interet-compose'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },
  {
    slug: "core-satellite",
    label: "Core-Satellite",
    category: 'Stratégies',
    shortDef: "Un portefeuille composé d'un cœur passif (ETF larges) et de positions ciblées plus actives.",
    definition: `La stratégie Core-Satellite combine un cœur stable et une orbite active. Le cœur (core) représente généralement 70 à 80 % du portefeuille — investi en ETF indiciels larges, géré passivement. Les satellites (20 à 30 %) sont des positions plus ciblées : ETF sectoriels, actions individuelles, thématiques de croissance.\n\nL'objectif : obtenir la stabilité du cœur passif tout en conservant la possibilité de surperformer via les satellites, sans exposer le portefeuille entier aux risques du stock picking.\n\nC'est la stratégie la plus courante pour les investisseurs "équilibrés" qui veulent s'impliquer dans la gestion sans tout miser sur leurs convictions personnelles.`,
    related: ['full-etf', 'stock-picking', 'diversification'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
    ],
  },
  {
    slug: "dca",
    label: "DCA — Dollar Cost Averaging",
    category: 'Stratégies',
    shortDef: "Investir une somme fixe à intervalles réguliers, indépendamment des conditions de marché.",
    definition: `Le DCA (Dollar Cost Averaging — investissement programmé en français) consiste à investir une somme fixe à date régulière, quelle que soit la situation du marché. Chaque mois, tu investis 100 €. Que le marché soit en hausse ou en baisse. Sans chercher à optimiser le timing d'entrée.\n\nDeux avantages structurels : tu lisses ton prix d'achat moyen (tu achètes plus de parts quand les prix sont bas, moins quand ils sont élevés), et tu supprimes la question paralysante "est-ce le bon moment ?". La réponse est toujours la même : oui, c'est le jour prévu.\n\nLe DCA est particulièrement efficace couplé à des ETF capitalisants sur des indices larges. C'est la méthode la plus simple, la plus éprouvée et la moins chronophage pour constituer un patrimoine sur le long terme.`,
    related: ['buy-and-hold', 'interet-compose', 'routine-investisseur'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
    ],
  },
  {
    slug: "diversification",
    label: "Diversification",
    category: 'Stratégies',
    shortDef: "Répartir ses investissements sur plusieurs actifs, secteurs ou zones géographiques pour réduire le risque.",
    definition: `La diversification est le seul "repas gratuit" en finance — elle permet de réduire le risque d'un portefeuille sans réduire son espérance de rendement.\n\nElle s'applique à plusieurs niveaux : géographique (ne pas concentrer sur un seul pays ou continent), sectoriel (ne pas sur-pondérer un seul secteur), par classe d'actifs (actions, obligations, or), et au sein des actions elles-mêmes (nombre de lignes).\n\nEn stock picking, une position individuelle ne devrait pas dépasser 5 à 10 % du portefeuille. En Full ETF, un ETF MSCI World offre déjà une diversification sur 1 400+ entreprises dans 23 pays — une seule ligne suffit.`,
    related: ['overlap', 'full-etf', 'core-satellite', 'drawdown'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },
  {
    slug: "full-etf",
    label: "Full ETF (Lazy Investor)",
    category: 'Stratégies',
    shortDef: "Stratégie consistant à investir exclusivement sur des ETF indiciels larges.",
    definition: `La stratégie Full ETF, aussi appelée Lazy Investing, consiste à construire un portefeuille composé uniquement d'ETF sur des indices larges — typiquement un ETF MSCI World ou une combinaison MSCI World + marchés émergents. Aucune sélection d'actions individuelle, aucune rotation sectorielle.\n\nRendement cible historique : 7 % à 9 % par an sur le long terme. Risque modéré (3/10). Perte maximale en crise sévère : −20 % à −30 %. Temps de gestion requis : quelques heures par an.\n\nCette stratégie bat statistiquement la grande majorité des gérants actifs professionnels sur 10 ans. Elle est particulièrement adaptée aux investisseurs qui ne souhaitent pas passer du temps à analyser des entreprises.`,
    related: ['etf', 'dca', 'buy-and-hold', 'core-satellite', 'overlap'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
    ],
  },
  {
    slug: "interet-compose",
    label: "Intérêts composés",
    category: 'Stratégies',
    shortDef: "Le mécanisme par lequel les gains génèrent eux-mêmes des gains, produisant une croissance exponentielle.",
    definition: `Les intérêts composés sont le mécanisme le plus puissant de la finance personnelle. Principe : chaque année, tes gains s'ajoutent à ton capital. L'année suivante, tu produis des gains sur un capital plus élevé. Les intérêts produisent eux-mêmes des intérêts. La croissance devient exponentielle.\n\nExemple concret : 100 €/mois investis à 7 % de rendement annuel moyen donnent 17 300 € après 10 ans (12 000 € versés), 52 000 € après 20 ans (24 000 € versés), et 121 000 € après 30 ans (36 000 € versés). En multipliant la durée par 3, les gains sont multipliés par 16.\n\nLa conclusion contre-intuitive : commencer tôt avec peu vaut mieux que commencer tard avec beaucoup. Le temps est la ressource la plus rare en investissement — elle ne se rachète pas.`,
    related: ['dca', 'buy-and-hold', 'capitalisant-distribuant'],
    modules: [
      { label: "Pourquoi investir", href: "/academie/bases/pourquoi-investir" },
    ],
  },
  {
    slug: "isr",
    label: "In-Situ Recovery (ISR)",
    category: 'Stratégies',
    theme: 'esg-climat',
    shortDef: "Méthode d'extraction minière qui dissout le minerai directement dans le sous-sol, sans extraction physique de la roche.",
    definition: `L'In-Situ Recovery (ISR), aussi appelée In-Situ Leaching (ISL), est une technique d'extraction minière utilisée principalement pour l'uranium. Elle consiste à injecter une solution chimique (eau avec bicarbonate ou acide sulfurique) directement dans le gisement souterrain pour dissoudre l'uranium, puis à pomper la solution enrichie en surface pour en extraire le métal.\n\nL'ISR présente des coûts opérationnels structurellement plus bas que l'extraction minière conventionnelle (pas d'excavation, pas de transport de roche, pas de concassage). Elle convient aux gisements poreux et perméables, souvent peu profonds. Le Kazakhstan, premier producteur mondial d'uranium, exploite la quasi-totalité de sa production via l'ISR.\n\nEn revanche, l'ISR ne convient pas aux gisements à très haute teneur comme ceux du bassin de l'Athabasca (McArthur River, Cigar Lake), qui nécessitent une extraction minière souterraine spécialisée mais offrent des grades 50 à 100 fois supérieurs. La comparaison des coûts entre ISR kazakh et extraction souterraine canadienne doit donc intégrer le grade : un minerai 100 fois plus concentré produit beaucoup plus d'uranium par tonne extraite.`,
    related: ['roic', 'marge-brute'],
    modules: [],
  },
  {
    slug: "overlap",
    label: "Overlap (chevauchement)",
    category: 'Stratégies',
    shortDef: "Le pourcentage de positions communes entre deux ETF ou deux actifs d'un même portefeuille.",
    definition: `L'overlap (chevauchement) désigne la proportion de positions identiques entre deux ETF ou deux actifs d'un portefeuille. C'est le piège classique de la fausse diversification.\n\nExemple typique : acheter un ETF MSCI World et un ETF S&P 500. Le MSCI World est déjà composé d'environ 70 % d'actions américaines. Ajouter du S&P 500 ne diversifie pas — cela surexpose aux États-Unis. Si Wall Street chute, l'intégralité du portefeuille chute avec.\n\nRègle pratique : si deux ETF partagent plus de 50 % de leurs positions, l'un est probablement superflu. L'outil Morningstar X-Ray permet d'analyser les chevauchements entre ETF gratuitement.`,
    related: ['etf', 'diversification', 'full-etf'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
    ],
  },
  {
    slug: "stock-picking",
    label: "Stock Picking",
    category: 'Stratégies',
    shortDef: "La sélection manuelle d'actions individuelles après analyse fondamentale.",
    definition: `Le stock picking consiste à sélectionner soi-même les entreprises dans lesquelles on investit, sur la base d'une analyse approfondie des fondamentaux : modèle économique, avantage concurrentiel, valorisation, santé financière.\n\nRendement potentiel : 12 % à 20 %+ par an si l'analyse est rigoureuse. Mais ces chiffres supposent une exécution sans erreur et un temps d'analyse significatif. En pratique, la majorité des particuliers qui pratiquent le stock picking sous-performent un simple ETF Monde sur 10 ans.\n\nLe stock picking n'est pas une stratégie déconseillée — c'est une stratégie exigeante. Elle nécessite de maîtriser l'analyse fondamentale, de gérer ses biais psychologiques, et d'accepter une volatilité plus élevée que celle d'un portefeuille indiciel.`,
    related: ['analyse-fondamentale-module', 'moat', 'per-valorisation', 'diversification'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
];
