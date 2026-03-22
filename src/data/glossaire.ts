// src/data/glossaire.ts

export type GlossaireCategory =
  | 'Fondamentaux'
  | 'Marchés'
  | 'Stratégies'
  | 'Enveloppes fiscales'
  | 'ETF & indices'
  | 'Analyse fondamentale'
  | 'Analyse technique'
  | 'Gestion du risque'
  | 'Produits avancés'
  | 'Ordres de bourse';

export interface ModuleLink {
  label: string;
  href: string;
}

export interface GlossaireTerm {
  slug: string;
  label: string;
  category: GlossaireCategory;
  shortDef: string; // 1-2 phrases pour la carte index
  definition: string; // Définition complète — séparée en paragraphes par \n\n
  related: string[]; // slugs de termes liés
  modules: ModuleLink[]; // liens retour vers les modules
}

export const glossaire: GlossaireTerm[] = [
  // ─── FONDAMENTAUX ─────────────────────────────────────────────────────────

  {
    slug: "action",
    label: "Action",
    category: "Fondamentaux",
    shortDef: "Une part de propriété dans une entreprise cotée en bourse.",
    definition: `Une action est un titre de propriété qui représente une fraction du capital d'une entreprise. En achetant une action, tu deviens actionnaire — c'est-à-dire copropriétaire de l'entreprise, à hauteur de ta mise.\n\nEn contrepartie, tu bénéficies de deux sources de gain potentielles : la hausse du cours de l'action si l'entreprise prend de la valeur, et les dividendes si l'entreprise distribue une partie de ses bénéfices.\n\nImportant : le prix d'une action ne reflète pas la valeur réelle de l'entreprise à court terme. Il reflète les anticipations des investisseurs. Une entreprise excellente peut voir son cours baisser si les attentes étaient trop élevées, et inversement.`,
    related: ['dividende', 'capitalisation-boursiere', 'volatilite', 'stock-picking'],
    modules: [
      { label: "Pourquoi investir", href: "/academie/bases/pourquoi-investir" },
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "etf",
    label: "ETF (Tracker)",
    category: "Fondamentaux",
    shortDef: "Un fonds coté en bourse qui réplique la performance d'un indice.",
    definition: `Un ETF (Exchange-Traded Fund) est un fonds d'investissement qui se négocie en bourse comme une action. Il réplique la performance d'un indice — le CAC 40, le MSCI World, le S&P 500 — en détenant les titres qui le composent.\n\nEn achetant une part d'ETF, tu t'exposes instantanément à des dizaines ou des centaines d'entreprises en une seule transaction, à frais réduits. C'est l'outil le plus efficace pour diversifier un portefeuille sans gestion active.\n\nDeux grandes familles de politiques de distribution : les ETF capitalisants (Acc) réinvestissent automatiquement les dividendes, les ETF distribuants (Dist) les versent sur le compte. Pour un investisseur en phase de constitution de patrimoine, les ETF capitalisants sont presque toujours préférables.`,
    related: ['indice-boursier', 'ter', 'capitalisant-distribuant', 'replication-physique', 'replication-synthetique', 'tracking-difference', 'encours'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
    ],
  },

  {
    slug: "indice-boursier",
    label: "Indice boursier",
    category: "Fondamentaux",
    shortDef: "Un panier de valeurs représentatif d'un marché, d'un secteur ou d'une zone géographique.",
    definition: `Un indice boursier est un indicateur synthétique qui mesure la performance d'un groupe d'actions sélectionnées selon des critères précis. Il sert de thermomètre pour un marché donné.\n\nLes indices les plus connus : le S&P 500 (500 plus grandes capitalisations américaines), le MSCI World (1 400+ entreprises dans 23 pays développés), le CAC 40 (40 plus grandes capitalisations françaises), le Nasdaq-100 (100 principales entreprises technologiques américaines).\n\nL'indice lui-même ne s'achète pas directement — on y accède via des ETF ou des fonds indiciels qui répliquent sa composition.`,
    related: ['etf', 'msci-world', 'sp500'],
    modules: [
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
    ],
  },

  {
    slug: "dividende",
    label: "Dividende",
    category: "Fondamentaux",
    shortDef: "Une partie des bénéfices d'une entreprise redistribuée aux actionnaires.",
    definition: `Un dividende est une distribution de bénéfices décidée par le conseil d'administration d'une entreprise. Il est versé à intervalles réguliers (trimestriellement aux États-Unis, annuellement ou semestriellement en Europe) à tous les actionnaires au prorata de leur détention.\n\nMécanique importante à connaître : lors du détachement du dividende, le cours de l'action baisse mécaniquement du montant distribué. Si une action vaut 100 € et verse 5 € de dividende, elle cotera 95 € le lendemain. L'actionnaire possède alors 95 € en action + 5 € en cash — sa richesse globale n'a pas changé avant impôt.\n\nLe dividende n'est donc pas un bonus gratuit. Sa valeur réside dans la régularité et la croissance du versement au fil du temps, pas dans le simple fait de le recevoir.`,
    related: ['action', 'capitalisant-distribuant', 'strategie-dividendes', 'pfu'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
    ],
  },

  {
    slug: "capitalisation-boursiere",
    label: "Capitalisation boursière",
    category: "Fondamentaux",
    shortDef: "La valeur totale d'une entreprise en bourse, calculée par le prix de l'action multiplié par le nombre d'actions.",
    definition: `La capitalisation boursière (ou "market cap") est la valeur de marché totale d'une entreprise. Elle se calcule en multipliant le prix d'une action par le nombre total d'actions en circulation.\n\nOn distingue traditionnellement trois catégories :\n— Large Caps (> 10 milliards €) : entreprises établies, leaders mondiaux, plus stables (LVMH, Apple, ASML).\n— Mid Caps (2 à 10 milliards €) : entreprises en croissance, profil risque/rendement intermédiaire.\n— Small Caps (< 2 milliards €) : entreprises plus volatiles, potentiel de hausse élevé mais liquidité réduite et risque plus fort.\n\nLa capitalisation boursière ne mesure pas la valeur réelle ou intrinsèque d'une entreprise — elle mesure ce que le marché est prêt à payer pour elle à un instant T.`,
    related: ['action', 'volatilite', 'liquidite'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "volatilite",
    label: "Volatilité",
    category: "Fondamentaux",
    shortDef: "L'ampleur des variations de prix d'un actif sur une période donnée.",
    definition: `La volatilité mesure l'intensité des fluctuations de prix d'un actif. Une action volatile peut gagner 5 % le matin et perdre 4 % l'après-midi. Une action peu volatile se déplace lentement et de façon plus prévisible.\n\nLa volatilité n'est pas synonyme de risque permanent — elle mesure l'incertitude à court terme. Sur le long terme, la volatilité des marchés actions est absorbée par la tendance haussière structurelle de l'économie mondiale.\n\nPour un investisseur long terme en Buy & Hold, la volatilité est davantage une opportunité (acheter plus bas en DCA) qu'une menace. Elle ne devient une perte définitive que si tu vends pendant la baisse.`,
    related: ['drawdown', 'vix', 'buy-and-hold', 'dca'],
    modules: [
      { label: "Pourquoi investir", href: "/academie/bases/pourquoi-investir" },
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },

  {
    slug: "liquidite",
    label: "Liquidité",
    category: "Fondamentaux",
    shortDef: "La facilité à acheter ou vendre un actif sans impacter significativement son prix.",
    definition: `La liquidité d'un actif désigne la facilité avec laquelle il peut être acheté ou vendu sur le marché sans provoquer de variation significative de son prix. Plus un actif est liquide, plus il y a d'acheteurs et de vendeurs prêts à transacter à tout moment.\n\nUn ETF très liquide comme un iShares MSCI World peut être acheté ou vendu en quelques secondes à un prix proche de la valeur réelle du fonds. Une small cap peu connue peut prendre plusieurs minutes ou heures à s'exécuter, avec un écart de prix notable.\n\nLa liquidité est directement liée au spread (l'écart entre prix d'achat et prix de vente) : plus un actif est liquide, plus le spread est faible, et moins tu perds à chaque transaction.`,
    related: ['spread', 'slippage', 'encours', 'capitalisation-boursiere'],
    modules: [
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
    ],
  },

  {
    slug: "obligation",
    label: "Obligation",
    category: "Fondamentaux",
    shortDef: "Un titre de dette émis par un État ou une entreprise qui verse des intérêts réguliers à son détenteur.",
    definition: `Une obligation est un instrument financier par lequel un emprunteur (État, collectivité, entreprise) lève des fonds auprès d'investisseurs. En échange, il s'engage à rembourser le capital à l'échéance et à verser des intérêts réguliers appelés "coupons".\n\nLes obligations d'État (comme les OAT françaises ou les Treasuries américaines) sont considérées comme peu risquées. Les obligations d'entreprises offrent un rendement plus élevé mais comportent un risque de défaut.\n\nLorsque les taux d'intérêt montent, le prix des obligations existantes baisse (et inversement). Cette relation inverse est un fondamental à intégrer si tu envisages d'inclure des obligations dans ton allocation.`,
    related: ['buy-and-hold', 'diversification'],
    modules: [
      { label: "Pourquoi investir", href: "/academie/bases/pourquoi-investir" },
    ],
  },

  // ─── MARCHÉS ──────────────────────────────────────────────────────────────

  {
    slug: "bull-market",
    label: "Bull Market (marché haussier)",
    category: "Marchés",
    shortDef: "Une période prolongée de hausse des marchés financiers, généralement supérieure à 20 %.",
    definition: `Un bull market (marché haussier) désigne une période durant laquelle les marchés financiers sont en tendance haussière prolongée. Par convention, on parle de bull market quand un indice gagne plus de 20 % depuis son dernier point bas.\n\nPsychologiquement, le bull market amplifie la confiance des investisseurs, parfois jusqu'à l'excès. Les valorisations s'élèvent, les nouvelles introductions en bourse se multiplient, l'appétit pour le risque grimpe. C'est dans ces périodes que les erreurs de surconcentration et d'endettement sont les plus fréquentes.\n\nPour un investisseur long terme, le bull market est la "récompense normale" d'une détention patiente. La tentation à éviter : réduire sa discipline d'investissement parce que "ça monte tout seul".`,
    related: ['bear-market', 'correction', 'buy-and-hold', 'fomo'],
    modules: [
      { label: "Psychologie de l'investisseur", href: "/academie/intermediaire/psychologie-investisseur" },
    ],
  },

  {
    slug: "bear-market",
    label: "Bear Market (marché baissier)",
    category: "Marchés",
    shortDef: "Une baisse prolongée des marchés d'au moins 20 % par rapport au dernier sommet.",
    definition: `Un bear market (marché baissier) est une période de repli prolongé des marchés, conventionnellement définie par une baisse de plus de 20 % depuis le dernier sommet. Les bear markets peuvent durer de quelques mois à plusieurs années.\n\nLes plus marquants de l'histoire récente : la crise internet (2000–2002, −50 % sur le S&P 500), la crise financière de 2008 (−57 %), le krach COVID de mars 2020 (−34 % en un mois, récupéré en 5 mois).\n\nPour un investisseur long terme en DCA, le bear market est une opportunité d'acheter à prix réduit. Pour un investisseur non préparé psychologiquement, c'est le moment où il vend — cristallisant une perte temporaire en perte définitive.`,
    related: ['bull-market', 'correction', 'drawdown', 'dca', 'psychologie'],
    modules: [
      { label: "Pourquoi investir", href: "/academie/bases/pourquoi-investir" },
      { label: "Psychologie de l'investisseur", href: "/academie/intermediaire/psychologie-investisseur" },
    ],
  },

  {
    slug: "correction",
    label: "Correction de marché",
    category: "Marchés",
    shortDef: "Une baisse temporaire des marchés entre 10 % et 20 % depuis un récent sommet.",
    definition: `Une correction de marché est une baisse entre 10 % et 20 % d'un indice ou d'une action depuis son dernier sommet récent. Elle est considérée comme saine et normale — elle corrige les excès de valorisation qui se forment pendant les périodes de hausse.\n\nEn moyenne, les marchés actions connaissent une correction de 10 %+ une fois par an, et une correction de 20 %+ une fois tous les 3 à 5 ans. Ces chiffres sont des moyennes — la réalité est irrégulière et impossible à prédire avec précision.\n\nLa réaction saine face à une correction : ne rien faire si tu es en stratégie long terme. La réaction qui coûte le plus cher : vendre pendant la baisse par peur.`,
    related: ['bear-market', 'drawdown', 'volatilite', 'buy-and-hold'],
    modules: [
      { label: "Psychologie de l'investisseur", href: "/academie/intermediaire/psychologie-investisseur" },
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },

  // ─── STRATÉGIES ───────────────────────────────────────────────────────────

  {
    slug: "buy-and-hold",
    label: "Buy & Hold",
    category: "Stratégies",
    shortDef: "Stratégie consistant à acheter des actifs de qualité et à les conserver sur le très long terme.",
    definition: `Le Buy & Hold ("acheter et conserver") est une stratégie d'investissement qui consiste à acheter des actifs de qualité — actions, ETF — et à les détenir sur de longues périodes, indépendamment des fluctuations de marché à court terme.\n\nL'idée centrale : les marchés montent sur le long terme, porté par la croissance économique mondiale. Essayer de "timer" le marché (acheter au plus bas, vendre au plus haut) est statistiquement contre-productif — même les professionnels y échouent durablement.\n\nSur ce site, le Buy & Hold est la stratégie de référence. Le trading actif est abordé dans les modules avancés comme un complément possible, pas une alternative supérieure.`,
    related: ['dca', 'full-etf', 'core-satellite', 'stock-picking', 'interet-compose'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },

  {
    slug: "dca",
    label: "DCA — Dollar Cost Averaging",
    category: "Stratégies",
    shortDef: "Investir une somme fixe à intervalles réguliers, indépendamment des conditions de marché.",
    definition: `Le DCA (Dollar Cost Averaging — investissement programmé en français) consiste à investir une somme fixe à date régulière, quelle que soit la situation du marché. Chaque mois, tu investis 100 €. Que le marché soit en hausse ou en baisse. Sans chercher à optimiser le timing d'entrée.\n\nDeux avantages structurels : tu lisses ton prix d'achat moyen (tu achètes plus de parts quand les prix sont bas, moins quand ils sont élevés), et tu supprimes la question paralysante "est-ce le bon moment ?". La réponse est toujours la même : oui, c'est le jour prévu.\n\nLe DCA est particulièrement efficace couplé à des ETF capitalisants sur des indices larges. C'est la méthode la plus simple, la plus éprouvée et la moins chronophage pour constituer un patrimoine sur le long terme.`,
    related: ['buy-and-hold', 'interet-compose', 'routine-investisseur'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
      { label: "La routine de l'investisseur", href: "/academie/bases/routine-investisseur" },
    ],
  },

  {
    slug: "interet-compose",
    label: "Intérêts composés",
    category: "Stratégies",
    shortDef: "Le mécanisme par lequel les gains génèrent eux-mêmes des gains, produisant une croissance exponentielle.",
    definition: `Les intérêts composés sont le mécanisme le plus puissant de la finance personnelle. Principe : chaque année, tes gains s'ajoutent à ton capital. L'année suivante, tu produis des gains sur un capital plus élevé. Les intérêts produisent eux-mêmes des intérêts. La croissance devient exponentielle.\n\nExemple concret : 100 €/mois investis à 7 % de rendement annuel moyen donnent 17 300 € après 10 ans (12 000 € versés), 52 000 € après 20 ans (24 000 € versés), et 121 000 € après 30 ans (36 000 € versés). En multipliant la durée par 3, les gains sont multipliés par 16.\n\nLa conclusion contre-intuitive : commencer tôt avec peu vaut mieux que commencer tard avec beaucoup. Le temps est la ressource la plus rare en investissement — elle ne se rachète pas.`,
    related: ['dca', 'buy-and-hold', 'capitalisant-distribuant'],
    modules: [
      { label: "Pourquoi investir", href: "/academie/bases/pourquoi-investir" },
    ],
  },

  {
    slug: "full-etf",
    label: "Full ETF (Lazy Investor)",
    category: "Stratégies",
    shortDef: "Stratégie consistant à investir exclusivement sur des ETF indiciels larges.",
    definition: `La stratégie Full ETF, aussi appelée Lazy Investing, consiste à construire un portefeuille composé uniquement d'ETF sur des indices larges — typiquement un ETF MSCI World ou une combinaison MSCI World + marchés émergents. Aucune sélection d'actions individuelle, aucune rotation sectorielle.\n\nRendement cible historique : 7 % à 9 % par an sur le long terme. Risque modéré (3/10). Perte maximale en crise sévère : −20 % à −30 %. Temps de gestion requis : quelques heures par an.\n\nCette stratégie bat statistiquement la grande majorité des gérants actifs professionnels sur 10 ans. Elle est particulièrement adaptée aux investisseurs qui ne souhaitent pas passer du temps à analyser des entreprises.`,
    related: ['etf', 'dca', 'buy-and-hold', 'core-satellite', 'overlap'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
    ],
  },

  {
    slug: "core-satellite",
    label: "Core-Satellite",
    category: "Stratégies",
    shortDef: "Un portefeuille composé d'un cœur passif (ETF larges) et de positions ciblées plus actives.",
    definition: `La stratégie Core-Satellite combine un cœur stable et une orbite active. Le cœur (core) représente généralement 70 à 80 % du portefeuille — investi en ETF indiciels larges, géré passivement. Les satellites (20 à 30 %) sont des positions plus ciblées : ETF sectoriels, actions individuelles, thématiques de croissance.\n\nL'objectif : obtenir la stabilité du cœur passif tout en conservant la possibilité de surperformer via les satellites, sans exposer le portefeuille entier aux risques du stock picking.\n\nC'est la stratégie la plus courante pour les investisseurs "équilibrés" qui veulent s'impliquer dans la gestion sans tout miser sur leurs convictions personnelles.`,
    related: ['full-etf', 'stock-picking', 'diversification'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
    ],
  },

  {
    slug: "stock-picking",
    label: "Stock Picking",
    category: "Stratégies",
    shortDef: "La sélection manuelle d'actions individuelles après analyse fondamentale.",
    definition: `Le stock picking consiste à sélectionner soi-même les entreprises dans lesquelles on investit, sur la base d'une analyse approfondie des fondamentaux : modèle économique, avantage concurrentiel, valorisation, santé financière.\n\nRendement potentiel : 12 % à 20 %+ par an si l'analyse est rigoureuse. Mais ces chiffres supposent une exécution sans erreur et un temps d'analyse significatif. En pratique, la majorité des particuliers qui pratiquent le stock picking sous-performent un simple ETF Monde sur 10 ans.\n\nLe stock picking n'est pas une stratégie déconseillée — c'est une stratégie exigeante. Elle nécessite de maîtriser l'analyse fondamentale, de gérer ses biais psychologiques, et d'accepter une volatilité plus élevée que celle d'un portefeuille indiciel.`,
    related: ['analyse-fondamentale-module', 'moat', 'per-valorisation', 'diversification'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "overlap",
    label: "Overlap (chevauchement)",
    category: "Stratégies",
    shortDef: "Le pourcentage de positions communes entre deux ETF ou deux actifs d'un même portefeuille.",
    definition: `L'overlap (chevauchement) désigne la proportion de positions identiques entre deux ETF ou deux actifs d'un portefeuille. C'est le piège classique de la fausse diversification.\n\nExemple typique : acheter un ETF MSCI World et un ETF S&P 500. Le MSCI World est déjà composé d'environ 70 % d'actions américaines. Ajouter du S&P 500 ne diversifie pas — cela surexpose aux États-Unis. Si Wall Street chute, l'intégralité du portefeuille chute avec.\n\nRègle pratique : si deux ETF partagent plus de 50 % de leurs positions, l'un est probablement superflu. L'outil Morningstar X-Ray permet d'analyser les chevauchements entre ETF gratuitement.`,
    related: ['etf', 'diversification', 'full-etf'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
    ],
  },

  {
    slug: "diversification",
    label: "Diversification",
    category: "Stratégies",
    shortDef: "Répartir ses investissements sur plusieurs actifs, secteurs ou zones géographiques pour réduire le risque.",
    definition: `La diversification est le seul "repas gratuit" en finance — elle permet de réduire le risque d'un portefeuille sans réduire son espérance de rendement.\n\nElle s'applique à plusieurs niveaux : géographique (ne pas concentrer sur un seul pays ou continent), sectoriel (ne pas sur-pondérer un seul secteur), par classe d'actifs (actions, obligations, or), et au sein des actions elles-mêmes (nombre de lignes).\n\nEn stock picking, une position individuelle ne devrait pas dépasser 5 à 10 % du portefeuille. En Full ETF, un ETF MSCI World offre déjà une diversification sur 1 400+ entreprises dans 23 pays — une seule ligne suffit.`,
    related: ['overlap', 'full-etf', 'core-satellite', 'drawdown'],
    modules: [
      { label: "Choisir sa stratégie", href: "/academie/bases/choisir-sa-strategie" },
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },

  // ─── ENVELOPPES FISCALES ──────────────────────────────────────────────────

  {
    slug: "pea",
    label: "PEA — Plan d'Épargne en Actions",
    category: "Enveloppes fiscales",
    shortDef: "L'enveloppe fiscale française qui exonère d'impôt les plus-values après 5 ans de détention.",
    definition: `Le Plan d'Épargne en Actions est une enveloppe d'investissement réglementée qui offre un avantage fiscal majeur : après 5 ans de détention, les plus-values et dividendes sont exonérés d'impôt sur le revenu (seuls les prélèvements sociaux de 18,6 % restent dus).\n\nPlafond : 150 000 € de versements par personne. Le capital peut croître au-delà sans limite. Univers d'investissement : actions et ETF de l'Espace Économique Européen, mais les ETF synthétiques permettent d'accéder au MSCI World et au S&P 500 tout en respectant les contraintes réglementaires.\n\nConseil critique : ouvrir un PEA dès aujourd'hui, même avec 10 €. Le compteur des 5 ans démarre à la date du premier versement. Chaque mois d'attente est un mois d'avantage fiscal perdu définitivement.`,
    related: ['cto', 'pfu', 'replication-synthetique', 'pea-pme'],
    modules: [
      { label: "Choisir son enveloppe", href: "/academie/bases/choisir-son-enveloppe" },
      { label: "Choisir son broker", href: "/academie/bases/choisir-son-broker" },
    ],
  },

  {
    slug: "cto",
    label: "CTO — Compte-Titres Ordinaire",
    category: "Enveloppes fiscales",
    shortDef: "Un compte d'investissement sans avantage fiscal particulier, mais sans restriction d'actifs ni de montant.",
    definition: `Le Compte-Titres Ordinaire est l'enveloppe d'investissement la plus flexible : aucun plafond de versement, aucune restriction sur les actifs, accès à l'ensemble des marchés mondiaux (actions US, REITs, obligations, ETF, options, levier...\n\nFiscalité : les plus-values sont soumises au Prélèvement Forfaitaire Unique (PFU) de 31,4 % (12,8 % IR + 18,6 % prélèvements sociaux depuis 2026). Ce taux s'applique à chaque cession, sans avantage lié à la durée de détention.\n\nStratégie courante : détenir PEA et CTO en parallèle. Le PEA pour les actifs éligibles (ETF Monde synthétiques, actions européennes), le CTO pour le reste (actions US, REITs, stratégies de couverture). Les deux enveloppes sont complémentaires.`,
    related: ['pea', 'pfu', 'assurance-vie'],
    modules: [
      { label: "Choisir son enveloppe", href: "/academie/bases/choisir-son-enveloppe" },
      { label: "Choisir son broker", href: "/academie/bases/choisir-son-broker" },
    ],
  },

  {
    slug: "assurance-vie",
    label: "Assurance-vie",
    category: "Enveloppes fiscales",
    shortDef: "Une enveloppe d'épargne française combinant avantages fiscaux et transmission patrimoniale.",
    definition: `L'assurance-vie est une enveloppe d'épargne réglementée qui cumule deux avantages : une fiscalité allégée après 8 ans de détention (abattement annuel de 4 600 € pour une personne seule, 9 200 € pour un couple, avant imposition), et un avantage successoral significatif (les bénéficiaires désignés peuvent recevoir jusqu'à 152 500 € par personne sans droits de succession).\n\nElle donne accès à deux types de supports : les fonds en euros (capital garanti, rendement faible mais sécurisé) et les unités de compte (actions, ETF, SCPI — avec risque de perte en capital).\n\nL'assurance-vie est particulièrement intéressante pour la transmission patrimoniale et pour les investisseurs qui souhaitent sécuriser une partie de leur capital sur le fonds en euros tout en maintenant une exposition aux marchés.`,
    related: ['pea', 'cto', 'pfu'],
    modules: [
      { label: "Choisir son enveloppe", href: "/academie/bases/choisir-son-enveloppe" },
    ],
  },

  {
    slug: "pfu",
    label: "PFU — Prélèvement Forfaitaire Unique",
    category: "Enveloppes fiscales",
    shortDef: "La flat tax de 31,4 % appliquée aux revenus du capital en France depuis 2018.",
    definition: `Le Prélèvement Forfaitaire Unique (PFU), aussi appelé "flat tax", est le régime fiscal par défaut appliqué aux revenus du capital en France : dividendes, plus-values sur cessions, intérêts. Son taux est de 31,4 % depuis janvier 2026 (12,8 % d'impôt sur le revenu + 18,6 % de prélèvements sociaux).\n\nLe PFU s'applique automatiquement sur le CTO. En PEA, il ne s'applique pas aux plus-values après 5 ans — seuls les 18,6 % de prélèvements sociaux restent dus. En assurance-vie, un abattement annuel s'applique après 8 ans avant la partie imposable.\n\nIl est possible d'opter pour le barème progressif de l'impôt sur le revenu au lieu du PFU si ton taux marginal d'imposition est inférieur à 12,8 % — cela concerne peu de contribuables en pratique.`,
    related: ['pea', 'cto', 'assurance-vie', 'dividende'],
    modules: [
      { label: "Choisir son enveloppe", href: "/academie/bases/choisir-son-enveloppe" },
    ],
  },

  // ─── ETF & INDICES ────────────────────────────────────────────────────────

  {
    slug: "ter",
    label: "TER — Total Expense Ratio",
    category: "ETF & indices",
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
    category: "ETF & indices",
    shortDef: "L'écart de performance entre un ETF et l'indice qu'il est censé répliquer sur un an.",
    definition: `La Tracking Difference (TD) mesure l'écart de performance entre un ETF et son indice de référence sur une période donnée (généralement un an). C'est l'indicateur le plus important pour évaluer la qualité réelle d'un ETF — plus fiable que le seul TER.\n\nIdéalement proche de zéro, voire légèrement négatif (l'ETF bat l'indice grâce au prêt de titres). Un ETF avec un TER de 0,20 % mais une TD de 0,50 % coûte en réalité plus cher qu'un ETF avec un TER de 0,35 % et une TD de 0,10 %.\n\nÀ distinguer de la Tracking Error, qui mesure la volatilité de la TD dans le temps (l'irrégularité du suivi). Une TD faible et stable est le signe d'une gestion rigoureuse.`,
    related: ['ter', 'etf', 'encours'],
    modules: [
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
    ],
  },

  {
    slug: "encours",
    label: "Encours (AUM)",
    category: "ETF & indices",
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
    category: "ETF & indices",
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
    category: "ETF & indices",
    shortDef: "Un ETF qui réplique son indice via un contrat financier (swap) plutôt qu'en détenant les actions directement.",
    definition: `La réplication synthétique utilise un contrat de swap : le gestionnaire de l'ETF passe un accord avec une banque qui s'engage à lui livrer la performance de l'indice cible en échange d'une contrepartie. L'ETF ne détient pas forcément les actions de l'indice qu'il suit.\n\nPourquoi utiliser le synthétique ? En France, c'est l'astuce technique qui rend éligibles au PEA des ETF suivant des indices américains (S&P 500, MSCI World). L'ETF détient physiquement un panier d'actions européennes (pour respecter les 75 % requis par la réglementation PEA) et échange leur performance contre celle de l'indice américain via le swap.\n\nRisque spécifique : un risque de contrepartie bancaire, généralement plafonné réglementairement à 10 % de la valeur du fonds et couvert par des garanties. Dans la pratique, ce risque est considéré comme très faible pour les grands émetteurs (Amundi, BNP).`,
    related: ['replication-physique', 'pea', 'etf'],
    modules: [
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
      { label: "Choisir son enveloppe", href: "/academie/bases/choisir-son-enveloppe" },
    ],
  },

  {
    slug: "capitalisant-distribuant",
    label: "Capitalisant (Acc) vs Distribuant (Dist)",
    category: "ETF & indices",
    shortDef: "Les deux modes de gestion des dividendes d'un ETF : réinvestissement automatique ou versement en cash.",
    definition: `Un ETF capitalisant (Accumulating, suffixe Acc ou C) réinvestit automatiquement les dividendes reçus des entreprises du fonds. La valeur de la part augmente progressivement. C'est le mode optimal pour les intérêts composés et l'efficacité fiscale — aucun dividende distribué signifie aucun impôt immédiat.\n\nUn ETF distribuant (Distributing, suffixe Dist ou D) verse les dividendes sur ton compte espèces. Chaque distribution déclenche une imposition (PFU à 31,4 % en CTO). Utile si tu veux générer des revenus passifs réguliers — stratégie retraite ou rente.\n\nPour un investisseur en phase d'accumulation (construction du patrimoine), le capitalisant est presque toujours préférable. L'exception : si tu investis en stratégie dividendes et as besoin du flux de revenu.`,
    related: ['etf', 'dividende', 'interet-compose', 'pfu'],
    modules: [
      { label: "Analyser un ETF", href: "/academie/intermediaire/analyser-un-etf" },
    ],
  },

  // ─── ANALYSE FONDAMENTALE ─────────────────────────────────────────────────

  {
    slug: "moat",
    label: "Moat (avantage concurrentiel)",
    category: "Analyse fondamentale",
    shortDef: "L'avantage concurrentiel durable qui protège une entreprise de ses concurrents.",
    definition: `Le concept de Moat (douves, en anglais) vient de Warren Buffett. Il désigne l'avantage concurrentiel durable d'une entreprise — ce qui empêche ses concurrents de la copier ou de prendre ses parts de marché. Plus les douves sont larges, plus l'entreprise est protégée.\n\nQuatre formes principales de Moat :\n— La marque : les clients paient plus cher pour le nom (LVMH, Apple, Hermès).\n— Les brevets : une protection légale contre la copie (pharma, semi-conducteurs comme ASML).\n— Les coûts de changement : les clients ne partent pas parce que migrer est trop coûteux ou complexe (logiciels d'entreprise, systèmes bancaires, Microsoft Office).\n— Les effets de réseau : le produit devient plus utile à mesure que le nombre d'utilisateurs augmente (Visa, LinkedIn, marketplaces).\n\nUne entreprise sans Moat identifiable est en compétition permanente sur les prix. C'est une guerre d'usure que peu survivent longtemps.`,
    related: ['stock-picking', 'free-cash-flow', 'marge-nette'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "bpa",
    label: "BPA — Bénéfice par Action",
    category: "Analyse fondamentale",
    shortDef: "Le bénéfice net de l'entreprise divisé par le nombre d'actions en circulation.",
    definition: `Le BPA (Bénéfice par Action, ou EPS — Earnings Per Share en anglais) mesure la rentabilité de l'entreprise rapportée à une seule action. Il se calcule en divisant le bénéfice net par le nombre d'actions en circulation.\n\nCritère de surveillance : un BPA croissant sur 5 ans est le signe d'une entreprise qui améliore sa rentabilité. Si le chiffre d'affaires monte mais que le BPA baisse, les coûts explosent et la rentabilité se dégrade — c'est un signal d'alerte.\n\nLe BPA est directement lié au PER : PER = Prix de l'action / BPA. Un BPA en croissance soutenue peut justifier un PER élevé.`,
    related: ['per-valorisation', 'marge-nette', 'free-cash-flow', 'chiffre-affaires'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "free-cash-flow",
    label: "Free Cash Flow (FCF)",
    category: "Analyse fondamentale",
    shortDef: "L'argent réellement disponible après investissements — le vrai indicateur de la santé financière d'une entreprise.",
    definition: `Le Free Cash Flow (FCF) est la trésorerie générée par l'activité après déduction des dépenses d'investissement nécessaires à la maintien et au développement du business (capex). C'est l'argent qui reste réellement disponible.\n\nC'est l'indicateur le plus honnête de la santé financière d'une entreprise. Le chiffre d'affaires peut être gonflé par de la dette, les bénéfices comptables peuvent être manipulés via des écritures. Le FCF, lui, représente l'argent en banque.\n\nCritère à vérifier : FCF positif et croissant sur 5 ans. Un FCF positif est ce qui permet de payer les dividendes, racheter des actions (rachats qui augmentent mécaniquement le BPA), rembourser la dette ou financer de la croissance.`,
    related: ['bpa', 'marge-nette', 'dette-ebitda', 'moat'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "per-valorisation",
    label: "PER — Price-to-Earnings Ratio",
    category: "Analyse fondamentale",
    shortDef: "Le ratio cours/bénéfice : combien de fois les bénéfices annuels tu paies pour acheter l'action.",
    definition: `Le PER (Price-to-Earnings Ratio) est le ratio de valorisation le plus utilisé en bourse. Il se calcule en divisant le prix de l'action par le bénéfice par action (BPA) : PER = Prix / BPA. Un PER de 20 signifie que tu paies 20 ans de bénéfices actuels.\n\nL'interprétation du PER dépend fortement du secteur et du taux de croissance de l'entreprise. Les fourchettes normales varient : une banque française tourne à PER 8–12, une entreprise technologique à forte croissance peut afficher un PER 30–50 sans être nécessairement surévaluée si ses bénéfices croissent vite.\n\nRègle de base : comparer le PER d'une entreprise à celui de ses concurrents directs, pas à un "PER universel". Un PER bas n'est pas automatiquement une bonne affaire — il peut signaler des problèmes réels.`,
    related: ['bpa', 'ev-ebitda', 'marge-nette', 'stock-picking'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "ebitda",
    label: "EBITDA",
    category: "Analyse fondamentale",
    shortDef: "Le bénéfice avant intérêts, impôts, dépréciation et amortissement — indicateur de la rentabilité opérationnelle.",
    definition: `L'EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) mesure la rentabilité opérationnelle d'une entreprise avant les effets de la structure financière (intérêts sur la dette), de la fiscalité, et des choix comptables d'amortissement.\n\nC'est une mesure de la capacité bénéficiaire "brute" de l'activité, indépendamment de la façon dont l'entreprise est financée. Particulièrement utile pour comparer des entreprises d'un même secteur avec des structures de capital différentes.\n\nL'EBITDA est utilisé dans deux ratios importants : le ratio Dette nette/EBITDA (mesure du niveau d'endettement) et le multiple EV/EBITDA (mesure de valorisation). Sa limite : il exclut les capex, qui peuvent être très élevés dans certains secteurs — c'est pourquoi le Free Cash Flow lui est souvent préféré.`,
    related: ['dette-ebitda', 'ev-ebitda', 'free-cash-flow', 'marge-nette'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "dette-ebitda",
    label: "Dette nette / EBITDA",
    category: "Analyse fondamentale",
    shortDef: "Le nombre d'années de profits nécessaires pour rembourser la dette nette de l'entreprise.",
    definition: `Le ratio Dette nette / EBITDA mesure le niveau d'endettement d'une entreprise en le ramenant à sa capacité bénéficiaire. Il indique combien d'années seraient nécessaires pour rembourser toute la dette nette si l'intégralité de l'EBITDA y était consacrée.\n\nGrille de lecture indicative : ratio < 1 (très peu endetté), 1–2 (sain), 2–3 (modéré, vigilance), > 3 (alerte — l'entreprise est vulnérable à une hausse des taux d'intérêt).\n\nLe contexte sectoriel est essentiel : les entreprises en phase de forte croissance (SaaS, biotech) acceptent parfois des ratios élevés temporairement. Les entreprises matures dans des secteurs cycliques (automobile, construction) devraient viser un ratio plus bas.`,
    related: ['ebitda', 'free-cash-flow', 'current-ratio'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "marge-nette",
    label: "Marge nette",
    category: "Analyse fondamentale",
    shortDef: "Le pourcentage du chiffre d'affaires qui reste en bénéfice net après toutes les charges.",
    definition: `La marge nette est le ratio qui mesure combien de centimes de bénéfice net restent pour chaque euro de chiffre d'affaires. Formule : Marge nette = Bénéfice net / Chiffre d'affaires × 100.\n\nRéférences indicatives : > 10 % = correct, > 20 % = excellent, > 30 % = rarissime et caractéristique d'entreprises à Moat exceptionnel (Apple, ASML, Hermès).\n\nUne marge nette élevée signifie que l'entreprise a du pricing power — elle peut maintenir ses prix même en période d'inflation. Une marge nette faible (< 5 %) rend l'entreprise vulnérable à tout choc sur ses coûts. À analyser en tendance sur 5 ans, pas comme une photo à un instant T.`,
    related: ['free-cash-flow', 'bpa', 'moat', 'chiffre-affaires'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "chiffre-affaires",
    label: "Chiffre d'affaires (CA)",
    category: "Analyse fondamentale",
    shortDef: "Le total des revenus générés par les ventes d'une entreprise sur une période donnée.",
    definition: `Le chiffre d'affaires (CA) représente le total des ventes réalisées par une entreprise sur une période donnée. C'est la ligne du haut du compte de résultat (d'où le nom anglais "top line").\n\nCritère de croissance à surveiller : un CA en croissance de plus de 5 % par an sur 5 ans indique une entreprise qui gagne des parts de marché ou opère sur un marché en expansion. Un CA stagnant ou en recul signifie que l'entreprise est sur un marché saturé ou perd du terrain face à ses concurrents.\n\nAttention : la croissance du CA seule ne suffit pas. Un CA qui monte tandis que les bénéfices baissent signifie que l'entreprise achète sa croissance à perte. Il faut toujours analyser la rentabilité (marge nette, FCF) en parallèle.`,
    related: ['marge-nette', 'bpa', 'free-cash-flow'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "ev-ebitda",
    label: "EV/EBITDA",
    category: "Analyse fondamentale",
    shortDef: "Un multiple de valorisation qui compare la valeur totale de l'entreprise (dette incluse) à sa rentabilité opérationnelle.",
    definition: `L'EV/EBITDA (Enterprise Value / EBITDA) est un multiple de valorisation plus complet que le PER car il intègre la dette dans le calcul. L'Enterprise Value (EV) = capitalisation boursière + dette nette — cash.\n\nAvantage sur le PER : il permet de comparer des entreprises avec des structures financières différentes (l'une fortement endettée, l'autre sans dette) sur un pied d'égalité. Particulièrement utile dans les secteurs où l'endettement est structurel (immobilier, infrastructures, télécoms).\n\nComme le PER, l'EV/EBITDA n'a de sens qu'en comparaison sectorielle. Une entreprise tech à EV/EBITDA 20 peut être bon marché. Une entreprise d'utilité publique à EV/EBITDA 20 peut être chère. Toujours contextualiser.`,
    related: ['ebitda', 'per-valorisation', 'dette-ebitda', 'capitalisation-boursiere'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "current-ratio",
    label: "Current Ratio (ratio de liquidité)",
    category: "Analyse fondamentale",
    shortDef: "La capacité d'une entreprise à honorer ses obligations financières à court terme.",
    definition: `Le Current Ratio mesure la capacité d'une entreprise à couvrir ses dettes à court terme (moins d'un an) avec ses actifs à court terme (cash, stocks, créances). Formule : Current Ratio = Actifs courants / Passifs courants.\n\nGrille de lecture : < 1 (risque de défaut à court terme — l'entreprise ne peut pas couvrir ses obligations), entre 1,2 et 2,5 (zone saine), > 3 (thésaurisation excessive — l'entreprise immobilise inutilement du capital qui pourrait être redistribué ou investi).\n\nÀ nuancer selon le secteur : les grandes surfaces (Carrefour, Walmart) affichent régulièrement un Current Ratio < 1 car elles encaissent les clients avant de payer leurs fournisseurs — ce n'est pas un signal d'alerte dans ce cas.`,
    related: ['dette-ebitda', 'free-cash-flow'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },


  {
    slug: "roic",
    label: "ROIC — Return on Invested Capital",
    category: "Analyse fondamentale",
    shortDef: "Le rendement généré par l'entreprise sur chaque euro de capital investi dans son activité.",
    definition: `Le ROIC (Return on Invested Capital) mesure l'efficacité avec laquelle une entreprise utilise le capital qui lui est confié — fonds propres et dette — pour générer des bénéfices. Formule simplifiée : ROIC = Résultat opérationnel net après impôt (NOPAT) / Capital investi.\n\nC'est l'un des indicateurs les plus puissants de l'analyse fondamentale. Un ROIC supérieur au WACC signifie que l'entreprise crée de la valeur — chaque euro investi en rapporte davantage qu'il ne coûte. Un ROIC inférieur au WACC signifie que l'entreprise détruit de la valeur, même si elle est profitable.\n\nNiveaux de référence : ROIC < 8 % = performances médiocres, ROIC 10-15 % = bon, ROIC > 20 % = excellent (souvent signe d'un Moat solide). ASML affiche un ROIC > 30 %, Novo Nordisk > 25 % — des niveaux qui reflètent des avantages concurrentiels structurels.\n\nSuivre le ROIC sur 5 ans révèle si l'entreprise maintient ou érode son avantage concurrentiel dans le temps.`,
    related: ["wacc", "moat", "free-cash-flow", "marge-nette", "capex"],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "wacc",
    label: "WACC — Coût Moyen Pondéré du Capital",
    category: "Analyse fondamentale",
    shortDef: "Le taux de rendement minimum qu'une entreprise doit générer pour satisfaire ses actionnaires et créanciers.",
    definition: `Le WACC (Weighted Average Cost of Capital) représente le coût moyen de l'ensemble des financements d'une entreprise — fonds propres et dette — pondéré par leur poids respectif. C'est le taux de rendement minimum que l'entreprise doit générer pour ne pas détruire de valeur.\n\nPour un investisseur, le WACC sert de référence dans deux contextes clés : comparer au ROIC (si ROIC > WACC, l'entreprise crée de la valeur), et actualiser les flux de trésorerie futurs dans un modèle DCF (Discounted Cash Flow).\n\nUn WACC typique varie entre 6 % et 12 % selon le secteur et le profil de risque. Les entreprises technologiques à forte croissance ont souvent un WACC plus élevé. Les grandes entreprises industrielles stables ont un WACC plus bas. La règle d'or : un ROIC durablement supérieur au WACC est la signature d'une entreprise de qualité exceptionnelle.`,
    related: ["roic", "free-cash-flow", "moat"],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "capex",
    label: "CAPEX — Dépenses d'investissement",
    category: "Analyse fondamentale",
    shortDef: "Les dépenses engagées pour acquérir ou maintenir des actifs physiques à long terme.",
    definition: `Le CAPEX (Capital Expenditure) désigne les dépenses d'investissement qu'une entreprise engage pour acquérir, améliorer ou maintenir ses actifs physiques à long terme : usines, équipements, machines, infrastructures.\n\nOn distingue deux types : le CAPEX de maintenance (remplacer ce qui s'use — indispensable pour maintenir l'activité) et le CAPEX de croissance (investir dans de nouvelles capacités — signe d'ambition mais consommateur de cash).\n\nLe CAPEX est directement lié au Free Cash Flow : FCF = Cash-flow opérationnel − CAPEX. Une entreprise avec un CAPEX élevé génère moins de FCF disponible pour les actionnaires. Les entreprises à faible CAPEX (logiciels, plateformes, marques fortes) sont souvent les plus rentables sur le long terme — elles n'ont pas besoin de réinvestir massivement pour croître.`,
    related: ["free-cash-flow", "roic", "dette-ebitda"],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "marge-de-securite",
    label: "Marge de sécurité (Margin of Safety)",
    category: "Analyse fondamentale",
    shortDef: "L'écart entre la valeur intrinsèque estimée d'une action et son prix de marché actuel.",
    definition: `La marge de sécurité (Margin of Safety, MOS) est un concept fondamental de l'investissement value, popularisé par Benjamin Graham. Elle représente l'écart entre la valeur intrinsèque estimée d'une entreprise et son cours de bourse actuel.\n\nFormule : MOS = (Valeur intrinsèque − Prix actuel) / Valeur intrinsèque × 100. Une MOS positive signifie que l'action est décotée — tu achètes avec un coussin de sécurité. Une MOS négative signifie que l'action est surévaluée.\n\nPourquoi est-elle essentielle ? Parce que toute valorisation est une estimation, jamais une certitude. La marge de sécurité compense les erreurs d'analyse, les imprévus et la volatilité des marchés. Warren Buffett la résume ainsi : acheter un billet de 1 € pour 0,50 €.\n\nNiveaux pratiques : MOS < 15 % = faible (patience recommandée), MOS 15-30 % = correcte, MOS > 30 % = attractive pour un investisseur value. En bio-pharma ou technologie à forte incertitude, viser 25-35 % minimum.`,
    related: ["per-valorisation", "ev-ebitda", "free-cash-flow", "roic"],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "cagr",
    label: "CAGR — Taux de croissance annuel composé",
    category: "Analyse fondamentale",
    shortDef: "Le taux de croissance annuel moyen d'une grandeur sur une période donnée, en supposant une croissance régulière.",
    definition: `Le CAGR (Compound Annual Growth Rate) est le taux de croissance annuel moyen qui permettrait à une valeur d'atteindre son niveau final à partir de son niveau initial sur une période donnée. Il suppose une croissance régulière chaque année.\n\nFormule : CAGR = (Valeur finale / Valeur initiale)^(1/nombre d'années) − 1. Exemple : un chiffre d'affaires qui passe de 100 à 200 M€ en 5 ans affiche un CAGR de 14,9 % — même si la croissance réelle a été irrégulière.\n\nLe CAGR est très utilisé pour comparer la croissance du CA, des bénéfices, du FCF ou du cours d'une action sur des périodes différentes. Sa limite : il lisse la réalité et masque la volatilité interannuelle. Un CAGR de 20 % peut cacher une année à +80 % suivie de trois années plates.`,
    related: ["chiffre-affaires", "free-cash-flow", "bpa"],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "payout-ratio",
    label: "Payout Ratio",
    category: "Analyse fondamentale",
    shortDef: "La part des bénéfices nets distribuée aux actionnaires sous forme de dividendes.",
    definition: `Le Payout Ratio (taux de distribution) mesure la proportion du bénéfice net reversée aux actionnaires via les dividendes. Formule : Payout Ratio = Dividende par action / BPA × 100.\n\nInterprétation : un ratio de 40 % signifie que l'entreprise distribue 40 % de ses bénéfices et conserve 60 % pour réinvestir. Un ratio trop élevé (> 80-90 %) peut signaler un dividende fragile. Un ratio faible (< 30 %) indique une entreprise qui préfère réinvestir sa croissance.\n\nAttention : le Payout Ratio basé sur les bénéfices comptables peut être trompeur. Le ratio FCF Payout (dividende / Free Cash Flow) est plus fiable — il mesure si le dividende est réellement couvert par l'argent généré. TotalEnergies affiche un Payout Ratio de 55 % avec un dividende couvert 1,32× par le FCF — une couverture correcte mais à surveiller en bas de cycle.`,
    related: ["dividende", "free-cash-flow", "bpa", "rachat-actions"],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "rachat-actions",
    label: "Rachat d'actions (Buyback)",
    category: "Analyse fondamentale",
    shortDef: "Quand une entreprise rachète ses propres actions sur le marché, réduisant mécaniquement le nombre de titres en circulation.",
    definition: `Un rachat d'actions (share buyback) se produit quand une entreprise utilise sa trésorerie pour racheter ses propres titres sur le marché boursier. Les actions rachetées sont généralement annulées, ce qui réduit le nombre total de titres en circulation.\n\nEffet mécanique immédiat : en divisant le bénéfice net par un nombre d'actions plus faible, le BPA augmente mécaniquement — même si le bénéfice total n'a pas changé. C'est pourquoi les rachats sont souvent perçus comme un signal positif par le marché.\n\nQuand est-ce intelligent ? Quand l'action est sous-évaluée. Racheter ses propres titres décotés est la meilleure allocation de capital possible. Quand est-ce problématique ? Quand l'entreprise rachète à des prix élevés, s'endette pour financer les rachats, ou sacrifie ses investissements en CAPEX nécessaires à long terme.`,
    related: ["bpa", "dividende", "payout-ratio", "free-cash-flow"],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "pricing-power",
    label: "Pricing Power",
    category: "Analyse fondamentale",
    shortDef: "La capacité d'une entreprise à augmenter ses prix sans perdre de clients.",
    definition: `Le Pricing Power désigne la capacité d'une entreprise à augmenter ses prix sans provoquer de fuite significative de sa clientèle. C'est l'une des manifestations les plus directes d'un Moat solide.\n\nUne entreprise avec fort Pricing Power peut répercuter l'inflation sur ses clients, protéger ses marges en période de hausse des coûts, et extraire davantage de valeur de chaque client au fil du temps. ASML en est l'exemple le plus pur : ses clients (TSMC, Intel, Samsung) n'ont aucune alternative. Hermès, Apple, Visa disposent du même pouvoir.\n\nComment l'identifier : regarder si la marge nette reste stable ou s'améliore sur 5 ans malgré l'inflation. Si oui, l'entreprise a du Pricing Power. Si elle s'érode, elle en manque. C'est la différence entre une entreprise qui subit son marché et une entreprise qui le domine.`,
    related: ["moat", "marge-nette", "roic", "marge-de-securite"],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "p-fcf",
    label: "P/FCF — Price to Free Cash Flow",
    category: "Analyse fondamentale",
    shortDef: "Le ratio qui compare le prix de l'action au Free Cash Flow généré par action.",
    definition: `Le P/FCF (Price to Free Cash Flow) est un multiple de valorisation qui divise le cours de l'action par le Free Cash Flow par action. Il complète le PER en utilisant le FCF plutôt que le bénéfice comptable — ce qui le rend moins manipulable par les choix comptables d'amortissement.\n\nFormule : P/FCF = Prix de l'action / FCF par action. Un P/FCF de 15 signifie que tu paies 15 fois le cash réellement généré par action. C'est souvent préféré au PER dans les secteurs à fort CAPEX (énergie, industrie, télécoms) où les amortissements peuvent déformer le bénéfice net.\n\nGrille de lecture sectorielle : les entreprises énergétiques matures traitent souvent à P/FCF 8-12, les entreprises technologiques à 20-40. Comme tous les multiples, il n'a de sens qu'en comparaison sectorielle et dans la durée.`,
    related: ["free-cash-flow", "per-valorisation", "ev-ebitda", "capex"],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  // ─── ANALYSE TECHNIQUE ────────────────────────────────────────────────────

  {
    slug: "support-resistance",
    label: "Support et Résistance",
    category: "Analyse technique",
    shortDef: "Des niveaux de prix où l'offre et la demande s'équilibrent historiquement, créant des zones de rebond ou de blocage.",
    definition: `Un support est un niveau de prix auquel l'actif a historiquement rebondi à la hausse — les acheteurs ont pris le dessus sur les vendeurs à ce niveau. Une résistance est le niveau symétrique : l'actif a historiquement buté à la baisse à ce prix — les vendeurs ont pris le dessus sur les acheteurs.\n\nCes zones sont créées par la mémoire collective du marché. Les investisseurs qui ont acheté à un certain niveau veulent revendre pour retrouver leur point d'équilibre ; ceux qui ont raté une entrée guettent un retour sur ce prix. Cette psychologie de masse crée des points de convergence prévisibles.\n\nConcept clé : quand un support est cassé, il devient souvent une résistance. Quand une résistance est franchie avec fort volume, elle devient souvent un support. L'inversion des rôles est l'un des signaux les plus fiables en analyse technique.`,
    related: ['bougies-japonaises', 'moyenne-mobile', 'cycle-weinstein'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },

  {
    slug: "moyenne-mobile",
    label: "Moyenne Mobile (MM)",
    category: "Analyse technique",
    shortDef: "La moyenne des prix de clôture sur une période donnée — indicateur de tendance.",
    definition: `Une Moyenne Mobile calcule la moyenne des prix de clôture d'un actif sur une période donnée. Elle "lisse" les fluctuations quotidiennes pour révéler la tendance sous-jacente. Les plus utilisées : MM20 (20 jours), MM50 (50 jours), MM200 (200 jours).\n\nInterprétation simple : si le prix est au-dessus de sa MM200, l'actif est en tendance haussière de long terme. En dessous, il est en tendance baissière. Les MM courtes (20, 50) signalent des tendances plus récentes.\n\nDeux signaux clés : le Golden Cross (la MM50 croise la MM200 à la hausse — signal haussier fort) et le Death Cross (la MM50 croise la MM200 à la baisse — signal baissier). Ces croisements ne se produisent que quelques fois par décennie sur les grands indices.`,
    related: ['support-resistance', 'golden-cross', 'cycle-weinstein', 'momentum'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },

  {
    slug: "golden-cross",
    label: "Golden Cross & Death Cross",
    category: "Analyse technique",
    shortDef: "Le croisement des moyennes mobiles 50 et 200 jours — signaux forts de changement de tendance.",
    definition: `Le Golden Cross se produit quand la Moyenne Mobile sur 50 jours (MM50) croise la MM200 à la hausse. C'est considéré comme un signal haussier de long terme — la tendance court terme reprend de la vigueur par rapport à la tendance long terme.\n\nLe Death Cross est l'inverse : la MM50 croise la MM200 à la baisse. Signal baissier de long terme, annonçant souvent des mois difficiles pour un actif.\n\nImportant : ces signaux sont historiquement fiables sur les grands indices (S&P 500, MSCI World) mais jamais absolus. Ils se produisent avec un décalage — au moment du signal, une partie du mouvement est déjà passée. À utiliser en confirmation d'autres signaux, pas en déclencheur unique d'une décision.`,
    related: ['moyenne-mobile', 'support-resistance', 'cycle-weinstein'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },

  {
    slug: "bougies-japonaises",
    label: "Bougies japonaises (chandeliers)",
    category: "Analyse technique",
    shortDef: "Un type de graphique qui représente l'ouverture, le plus haut, le plus bas et la clôture d'une période.",
    definition: `Les bougies japonaises (Japanese candlesticks) sont la représentation graphique standard des prix en analyse technique. Chaque bougie représente une période (1 jour, 1 heure, 1 semaine) et affiche quatre informations : le cours d'ouverture, le plus haut, le plus bas, et le cours de clôture.\n\nCouleurs : une bougie verte (ou blanche) signifie que le cours a clôturé au-dessus de son ouverture (période haussière). Une bougie rouge (ou noire) signifie qu'il a clôturé en dessous (période baissière). Le corps de la bougie représente l'écart ouverture/clôture, les mèches représentent les extrêmes.\n\nLes patterns de bougies (Doji, Marteau, Étoile du matin, Englobante...) peuvent signaler des retournements ou des continuations de tendance. Une bougie seule n'est jamais un signal suffisant — les patterns doivent être confirmés par le volume et le contexte chartiste.`,
    related: ['support-resistance', 'moyenne-mobile', 'double-bottom', 'epaule-tete-epaule'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },

  {
    slug: "cycle-weinstein",
    label: "Cycle de Weinstein (4 phases)",
    category: "Analyse technique",
    shortDef: "Un modèle qui découpe le cycle de vie d'une action en quatre phases distinctes avec des règles d'entrée et de sortie précises.",
    definition: `Stan Weinstein a formalisé dans les années 1980 un modèle cyclique qui décrit comment les actions évoluent en quatre phases successives, basé principalement sur la MM30 hebdomadaire (équivalente à la MM150 journalière).\n\nPhase 1 — Consolidation : l'action évolue en range horizontal autour de la MM30. Ni acheteurs ni vendeurs ne dominent. Attendre.\nPhase 2 — Avancée : l'action casse le range à la hausse, la MM30 monte. C'est la seule phase où acheter est pertinent.\nPhase 3 — Distribution : l'action atteint des sommets mais la MM30 commence à s'aplatir. Les "mains fortes" distribuent leurs positions. Vendre ou ne pas acheter.\nPhase 4 — Déclin : l'action est en dessous d'une MM30 baissière. Ne pas acheter, même si l'action semble "pas chère".\n\nRègle centrale : n'acheter qu'en Phase 2, sortir en Phase 3. La Phase 4 est le cimetière des investisseurs qui "moyennent à la baisse".`,
    related: ['moyenne-mobile', 'support-resistance', 'stop-loss'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },

  {
    slug: "double-bottom",
    label: "Double Bottom (double creux)",
    category: "Analyse technique",
    shortDef: "Un pattern chartiste de retournement haussier formé par deux points bas consécutifs au même niveau.",
    definition: `Le Double Bottom est un pattern de retournement qui se forme après une tendance baissière. L'actif touche un point bas, remonte vers une résistance intermédiaire (le "col"), retombe vers le même niveau bas, puis repart à la hausse.\n\nLe signal de confirmation : la cassure du col (la résistance intermédiaire) avec un volume élevé. C'est ce moment — pas les deux creux eux-mêmes — qui valide le retournement. Entrer trop tôt (avant la cassure du col) expose à de faux signaux.\n\nSon symétrique baissier est le Double Top (deux sommets au même niveau), qui signale un retournement baissier après une tendance haussière.`,
    related: ['epaule-tete-epaule', 'support-resistance', 'bougies-japonaises'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },

  {
    slug: "epaule-tete-epaule",
    label: "Épaule-Tête-Épaule (ETE)",
    category: "Analyse technique",
    shortDef: "Un pattern chartiste de retournement baissier parmi les plus fiables de l'analyse technique.",
    definition: `L'Épaule-Tête-Épaule (Head & Shoulders en anglais) est l'un des patterns de retournement les plus étudiés. Il se forme après une tendance haussière et signale un probable retournement baissier.\n\nStructure : une première hausse (épaule gauche), une deuxième hausse plus forte (tête), une troisième hausse inférieure à la tête (épaule droite). La ligne reliant les creux entre les trois sommets s'appelle la "ligne de cou" (neckline).\n\nLe signal de déclenchement : la cassure de la neckline vers le bas, confirmée par un volume élevé. L'objectif de prix théorique après cassure se calcule en soustrayant la hauteur de la "tête" au niveau de la neckline. Son symétrique haussier est l'ETE inversée, signal de retournement après tendance baissière.`,
    related: ['double-bottom', 'support-resistance', 'bougies-japonaises'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },

  {
    slug: "momentum",
    label: "Momentum",
    category: "Analyse technique",
    shortDef: "La tendance d'un actif à maintenir sa direction — ce qui monte continue à monter, ce qui baisse continue à baisser.",
    definition: `Le momentum désigne la persistance de la tendance d'un actif. Les marchés financiers exhibent un effet momentum documenté statistiquement : les actifs qui ont bien performé sur les 6 à 12 derniers mois tendent à continuer à surperformer sur les 3 à 6 mois suivants.\n\nEn analyse technique, le momentum se mesure via des indicateurs comme le RSI (Relative Strength Index) ou le MACD. En gestion de portefeuille, des stratégies entières sont construites autour du momentum (acheter les actifs en tendance haussière, vendre les actifs en tendance baissière).\n\nLimite importante : le momentum peut s'inverser brutalement lors de retournements de marché. Il amplifie les gains en tendance, mais aussi les pertes lors des retournements — ce qui explique pourquoi les stratégies momentum combinées avec une gestion stricte des stops sont plus robustes que le momentum pur.`,
    related: ['rsi', 'moyenne-mobile', 'cycle-weinstein'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },

  {
    slug: "rsi",
    label: "RSI — Relative Strength Index",
    category: "Analyse technique",
    shortDef: "Un indicateur de momentum qui mesure la vitesse et l'amplitude des variations de prix pour détecter les excès.",
    definition: `Le RSI (Relative Strength Index) est un indicateur oscillant entre 0 et 100. Il mesure la vitesse et l'amplitude des mouvements de prix pour identifier les zones de surachat ou de survente.\n\nInterprétation classique : RSI > 70 = zone de surachat (attention à un possible retournement baissier), RSI < 30 = zone de survente (attention à un possible rebond). RSI autour de 50 = zone neutre.\n\nImportant : un RSI > 70 ne signifie pas automatiquement "vendre". En tendance haussière forte, le RSI peut rester en zone de surachat pendant des mois. L'indicateur est plus utile pour détecter les divergences : quand le prix fait de nouveaux sommets mais que le RSI ne suit pas (divergence baissière), cela signale un affaiblissement du mouvement.`,
    related: ['momentum', 'bougies-japonaises', 'moyenne-mobile'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },

  // ─── GESTION DU RISQUE ────────────────────────────────────────────────────

  {
    slug: "stop-loss",
    label: "Stop-Loss",
    category: "Gestion du risque",
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
    category: "Gestion du risque",
    shortDef: "Un stop-loss dynamique qui remonte automatiquement avec le prix pour sécuriser les gains.",
    definition: `Le trailing stop (stop suiveur) est une version dynamique du stop-loss. Au lieu d'être fixe, il s'ajuste automatiquement : il remonte à chaque nouveau plus-haut du prix, mais ne descend jamais. Il sécurise progressivement les gains accumulés sans plafonner la hausse potentielle.\n\nExemple : tu achètes une action à 100 € avec un trailing stop à 10 %. Si l'action monte à 130 €, ton stop remonte à 117 € (130 × 90 %). Si l'action redescend ensuite sous 117 €, tu es vendeur automatiquement — avec un gain net de 17 %.\n\nCalibration : trop serré (5 %), tu seras éjecté sur un simple rebond intraday. Trop large (25 %), tu laisses trop de gains sur la table. Pour un investisseur long terme sur actions de conviction, un trailing stop entre 10 et 20 % est généralement adapté selon la volatilité de l'actif.`,
    related: ['stop-loss', 'regle-1-pourcent', 'ordre-stop'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },

  {
    slug: "drawdown",
    label: "Drawdown",
    category: "Gestion du risque",
    shortDef: "La baisse maximale d'un portefeuille ou d'un actif depuis son plus haut historique.",
    definition: `Le drawdown mesure la baisse d'un portefeuille entre son dernier point le plus haut et un point bas ultérieur. Le Maximum Drawdown (MDD) est la pire baisse observée sur une période donnée — c'est l'indicateur de risque réel ressenti par l'investisseur.\n\nExemple : un portefeuille qui passe de 100 000 € à 70 000 € subit un drawdown de 30 %. Pour revenir au niveau initial, il faut un gain de 43 % (et non 30 %) — l'asymétrie entre les pertes et les gains nécessaires pour les récupérer est un concept fondamental.\n\nPourquoi connaître son drawdown acceptable avant d'investir ? Parce que c'est dans les moments de drawdown élevé que les investisseurs commettent leurs pires erreurs — vendre au creux, modifier leur stratégie sous la douleur. Si tu ne peux pas dormir avec un drawdown de −30 %, ne construis pas un portefeuille 100 % actions.`,
    related: ['volatilite', 'stop-loss', 'regle-1-pourcent', 'correction'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
      { label: "Psychologie de l'investisseur", href: "/academie/intermediaire/psychologie-investisseur" },
    ],
  },

  {
    slug: "slippage",
    label: "Slippage (glissement)",
    category: "Gestion du risque",
    shortDef: "L'écart entre le prix affiché et le prix réel d'exécution d'un ordre.",
    definition: `Le slippage désigne la différence entre le prix que tu vois sur ton écran au moment de passer un ordre et le prix auquel ton ordre est effectivement exécuté. Il peut être positif (exécution à meilleur prix) ou négatif (exécution à moins bon prix), mais dans les marchés volatils, il est presque toujours négatif.\n\nCauses principales : une forte volatilité (le prix bouge trop vite pour que ton ordre suive), un manque de liquidité (pas assez de contrepartie au prix demandé), ou des ordres au marché sur des actifs peu liquides.\n\nComment le minimiser : utiliser des ordres à cours limité plutôt que des ordres au marché, surtout sur les small caps et les heures d'ouverture/clôture des marchés où la liquidité est plus faible. Les ordres au marché sur des ETF très liquides génèrent un slippage généralement négligeable.`,
    related: ['ordre-marche', 'ordre-limite', 'liquidite', 'spread'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },

  {
    slug: "regle-1-pourcent",
    label: "Règle des 1 %",
    category: "Gestion du risque",
    shortDef: "Ne jamais risquer plus de 1 % du capital total sur une seule opération de trading.",
    definition: `La règle des 1 % est le principe de survie mathématique du trading actif : ne jamais risquer plus de 1 % du capital total sur une seule opération. Sur un portefeuille de 10 000 €, la perte maximale acceptable par trade est de 100 €.\n\nL'impact est immédiat sur la durabilité : avec cette règle, il faudrait enchaîner 100 pertes consécutives pour ruiner le compte. Avec une règle de 10 % par trade, 10 mauvaises décisions suffisent. La question n'est pas si tu vas avoir des trades perdants — tu en auras — mais si tu survivras suffisamment longtemps pour que ta méthode exprime son avantage statistique.\n\nNote : cette règle est spécifique au trading actif. Un investisseur Buy & Hold en DCA sur ETF n'a pas à dimensionner ses versements mensuels selon cette logique — son horizon de temps et sa diversification rendent ce type de calcul inutile.`,
    related: ['stop-loss', 'ratio-risque-rendement', 'drawdown'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },

  {
    slug: "ratio-risque-rendement",
    label: "Ratio Risque/Rendement (r/R)",
    category: "Gestion du risque",
    shortDef: "Le rapport entre le gain potentiel et la perte maximale acceptée sur une opération.",
    definition: `Le ratio risque/rendement (r/R) compare, avant d'entrer en position, le gain potentiel visé et la perte maximale acceptée. Un ratio de 1:3 signifie que pour une perte potentielle de 1 € (le stop-loss), tu vises un gain de 3 € (ton objectif de prix).\n\nL'avantage mathématique est décisif : avec un ratio 1:3, tu peux avoir tort une fois sur deux et rester rentable sur la durée. Avec un ratio 1:1, tu dois avoir raison plus de 50 % du temps pour survivre.\n\nLa règle pratique : ne jamais entrer en position avec un ratio inférieur à 1:2. Un ratio de 1:3 ou plus est l'objectif des traders disciplinés. Ce calcul doit être fait avant chaque entrée — il détermine à la fois le stop-loss et l'objectif de sortie.`,
    related: ['stop-loss', 'regle-1-pourcent', 'trailing-stop'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },

  // ─── PRODUITS AVANCÉS ─────────────────────────────────────────────────────

  {
    slug: "vente-a-decouvert",
    label: "Vente à découvert (Short)",
    category: "Produits avancés",
    shortDef: "Une stratégie qui consiste à parier sur la baisse d'un actif en vendant ce qu'on ne possède pas encore.",
    definition: `La vente à découvert (shorting) consiste à vendre un actif qu'on ne détient pas encore — en l'empruntant auprès d'un broker — dans l'espoir de le racheter moins cher plus tard et d'empocher la différence.\n\nExemple : tu empruntes et vends 100 actions à 50 € chacune (5 000 €). L'action descend à 30 €. Tu les rachètes pour 3 000 €. Tu rends les actions et tu gardes 2 000 € de profit.\n\nRisque asymétrique critique : à la hausse, une action peut théoriquement monter à l'infini. Si tu es short sur une action à 50 € et qu'elle monte à 200 €, ta perte est de 150 € par action — bien plus que ton gain potentiel si elle tombe à 0 €. Le short squeeze est un risque réel : une hausse brutale force tous les vendeurs à découvert à racheter simultanément, amplifiant la hausse.`,
    related: ['levier', 'stop-loss', 'hedge'],
    modules: [
      { label: "Long et Short", href: "/academie/avance/long-et-short" },
    ],
  },

  {
    slug: "levier",
    label: "Levier financier",
    category: "Produits avancés",
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
    category: "Produits avancés",
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
    category: "Produits avancés",
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
    category: "Produits avancés",
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
    category: "Produits avancés",
    shortDef: "Le prix prédéfini auquel une option peut être exercée.",
    definition: `Le strike (ou prix d'exercice) est le prix auquel l'option donne le droit d'acheter (Call) ou de vendre (Put) l'actif sous-jacent. Il est fixé à la création du contrat et ne change pas jusqu'à l'échéance.\n\nTerminologie liée : une option est dite "dans la monnaie" (in-the-money, ITM) si l'exercer immédiatement serait profitable (ex : Call strike 50 € sur une action à 60 €). Elle est "hors de la monnaie" (out-of-the-money, OTM) si l'exercice immédiat ne serait pas profitable. Elle est "à la monnaie" (at-the-money, ATM) quand le prix actuel est égal ou très proche du strike.\n\nLe choix du strike détermine l'équilibre entre la probabilité de gain et le coût de la prime : un strike très éloigné du prix actuel est moins cher mais a moins de chances d'être dans la monnaie à l'échéance.`,
    related: ['option-call', 'option-put', 'prime-option'],
    modules: [
      { label: "Les Options", href: "/academie/avance/les-options" },
    ],
  },

  {
    slug: "covered-call",
    label: "Covered Call",
    category: "Produits avancés",
    shortDef: "Vendre un Call sur des actions déjà détenues pour générer un revenu supplémentaire.",
    definition: `Le Covered Call est une stratégie qui consiste à vendre une option Call sur des actions que tu possèdes déjà. En échange, tu encaisses immédiatement la prime.\n\nProfil de gain : si l'action reste en dessous du strike à l'échéance, le Call expire sans valeur — tu gardes la prime ET tes actions. Si l'action monte au-dessus du strike, tu dois vendre tes actions au prix du strike — tu profites de la hausse jusqu'au strike mais pas au-delà, prime incluse.\n\nC'est la stratégie options la plus adaptée à l'investisseur long terme. Elle génère des revenus réguliers (entre 1 et 3 % par mois selon les conditions de marché) sur des positions déjà en portefeuille, au prix d'une limitation de la hausse potentielle. Elle est souvent appelée "louer ses actions".`,
    related: ['option-call', 'prime-option', 'strike'],
    modules: [
      { label: "Les Options", href: "/academie/avance/les-options" },
    ],
  },

  {
    slug: "vix",
    label: "VIX (indice de volatilité)",
    category: "Produits avancés",
    shortDef: "L'indicateur de la volatilité implicite du marché américain — surnommé le baromètre de la peur.",
    definition: `Le VIX (CBOE Volatility Index) mesure la volatilité implicite des options sur le S&P 500. Il reflète les anticipations des marchés quant aux fluctuations futures sur les 30 prochains jours. Un VIX élevé signifie que les marchés anticipent des turbulences ; un VIX bas signifie que les marchés sont calmes.\n\nNiveaux de référence : VIX < 15 = marché calme, complacency. VIX 15–25 = volatilité normale. VIX 25–40 = inquiétude et volatilité élevée. VIX > 40 = panique (COVID en mars 2020 : VIX proche de 85, crise 2008 : proche de 90).\n\nPour l'investisseur long terme, le VIX est utile comme signal de timing pour les stratégies de hedging via les Puts : acheter de la protection (Puts) quand le VIX est bas (assurance peu chère) plutôt qu'au pic de la panique (assurance très chère) est une règle de bon sens.`,
    related: ['option-put', 'option-call', 'prime-option', 'volatilite', 'hedge'],
    modules: [
      { label: "Le Hedge", href: "/academie/avance/le-hedge" },
    ],
  },

  {
    slug: "hedge",
    label: "Hedge (couverture)",
    category: "Produits avancés",
    shortDef: "Une position prise pour réduire le risque d'une autre position déjà détenue.",
    definition: `Hedger une position signifie prendre une position inverse ou complémentaire pour protéger un portefeuille contre une baisse. L'objectif n'est pas de maximiser les gains mais de limiter les pertes dans des scénarios défavorables.\n\nInstruments de couverture courants : les options Put sur les actifs détenus ou sur les indices (protège contre les baisses de marché), les ETF inverses (répliquent la performance inverse d'un indice — simples mais imparfaits sur le long terme), les actifs défensifs (or, obligations d'État).\n\nLe coût du hedge est réel : si le marché ne baisse pas, tu as payé une prime "pour rien". C'est le prix de l'assurance. La règle pratique est de hedger aux moments où le coût est faible (VIX bas, marché calme) et non dans la panique (VIX élevé, protection très chère).`,
    related: ['option-put', 'vix', 'vente-a-decouvert'],
    modules: [
      { label: "Le Hedge", href: "/academie/avance/le-hedge" },
    ],
  },

  // ─── ORDRES DE BOURSE ─────────────────────────────────────────────────────

  {
    slug: "ordre-marche",
    label: "Ordre au marché (Market Order)",
    category: "Ordres de bourse",
    shortDef: "Un ordre d'achat ou de vente exécuté immédiatement au meilleur prix disponible.",
    definition: `Un ordre au marché s'exécute immédiatement au meilleur prix disponible, quelle que soit ce que ce prix soit. Il garantit l'exécution, pas le prix.\n\nAvantage : exécution certaine et quasi-instantanée. Inconvénient majeur : en période de forte volatilité ou sur des actifs peu liquides, tu peux être exécuté à un prix très différent de celui affiché — c'est le slippage.\n\nUsage recommandé : uniquement sur des ETF très liquides (iShares MSCI World, S&P 500) en pleine séance et dans des conditions de marché normales. À éviter absolument sur les small caps, à l'ouverture/clôture des marchés, ou lors d'annonces de résultats.`,
    related: ['ordre-limite', 'slippage', 'spread', 'liquidite'],
    modules: [
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
      { label: "Choisir son broker", href: "/academie/bases/choisir-son-broker" },
    ],
  },

  {
    slug: "ordre-limite",
    label: "Ordre à cours limité (Limit Order)",
    category: "Ordres de bourse",
    shortDef: "Un ordre exécuté uniquement si le prix atteint un seuil prédéfini.",
    definition: `Un ordre à cours limité fixe un prix maximum pour l'achat (ou minimum pour la vente). L'ordre ne s'exécute que si le marché touche ton prix. S'il ne l'atteint jamais, l'ordre n'est pas exécuté — et c'est parfois la bonne issue.\n\nAvantage : contrôle total sur le prix d'exécution, aucun slippage. Inconvénient : risque de non-exécution si le marché ne revient pas à ton niveau.\n\nValidité des ordres : DAY (expire en fin de séance), GTC — Good Till Cancelled (reste actif jusqu'à exécution ou annulation manuelle, généralement 30 à 90 jours selon le broker — mode par défaut pour un investisseur long terme qui pose son ordre à prix cible et attend), GTD — Good Till Date (expire à une date précise, utile avant événements spécifiques).`,
    related: ['ordre-marche', 'slippage', 'ordre-oco', 'ordre-stop'],
    modules: [
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },

  {
    slug: "ordre-stop",
    label: "Ordre Stop (Stop Order)",
    category: "Ordres de bourse",
    shortDef: "Un ordre déclenché automatiquement quand le prix atteint un niveau seuil prédéfini.",
    definition: `Un ordre stop se déclenche automatiquement quand le prix d'un actif atteint un seuil prédéfini. Il existe deux formes principales : le stop-loss (ordre de vente pour limiter les pertes si le prix descend sous le seuil) et le stop d'achat (ordre d'achat pour entrer en position si le prix monte au-dessus du seuil).\n\nDifférence avec l'ordre limite : l'ordre limite fixe un prix maximum/minimum d'exécution. L'ordre stop est un déclencheur — une fois le seuil touché, l'ordre devient un ordre au marché (ou un ordre limite, selon la configuration choisie).\n\nLe stop-limit combine les deux : une fois le seuil touché, l'ordre se transforme en ordre limite plutôt qu'en ordre au marché. Utile pour éviter le slippage dans un mouvement rapide, mais au risque de non-exécution si le prix dépasse le limit avant que l'ordre soit rempli.`,
    related: ['stop-loss', 'trailing-stop', 'ordre-limite', 'ordre-marche'],
    modules: [
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },

  {
    slug: "ordre-oco",
    label: "Ordre OCO — One Cancels the Other",
    category: "Ordres de bourse",
    shortDef: "Un couple d'ordres où l'exécution de l'un annule automatiquement l'autre.",
    definition: `Un ordre OCO (One Cancels the Other) est un couple d'ordres liés : si l'un est exécuté, l'autre est annulé automatiquement. Il permet de définir à l'avance les deux scénarios de sortie d'une position — la prise de profit et le stop-loss — sans avoir à surveiller le marché.\n\nExemple : tu achètes une action à 100 €. Tu places un OCO avec un ordre de vente à 120 € (prise de profit) et un ordre stop à 90 € (stop-loss). Si l'action monte à 120 €, tu sors en profit et l'ordre stop est annulé. Si elle tombe à 90 €, le stop déclenche et la prise de profit est annulée.\n\nC'est l'outil de gestion de position le plus efficace pour les investisseurs qui ne peuvent pas surveiller leurs positions en continu. Il matérialise à l'avance une décision rationnelle, avant que les émotions n'interviennent.`,
    related: ['stop-loss', 'ordre-limite', 'ordre-stop', 'trailing-stop'],
    modules: [
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },

  {
    slug: "spread",
    label: "Spread (écart achat/vente)",
    category: "Ordres de bourse",
    shortDef: "L'écart entre le prix d'achat (ask) et le prix de vente (bid) d'un actif à un instant donné.",
    definition: `Le spread est la différence entre le prix auquel le marché est prêt à te vendre un actif (ask) et le prix auquel il est prêt à te l'acheter (bid). C'est le coût implicite de chaque transaction — tu "paies" le spread à chaque achat et à chaque vente.\n\nExemple : un ETF affiche bid 100,00 € / ask 100,05 €. Le spread est de 0,05 €. Si tu achètes et revends immédiatement, tu perds 0,05 € par part même si le prix n'a pas bougé.\n\nLe spread est directement lié à la liquidité : plus un actif est liquide (beaucoup d'acheteurs et de vendeurs), plus le spread est faible. Sur un ETF MSCI World, le spread est souvent de 0,01 %. Sur une small cap peu liquide, il peut atteindre 1 à 2 % — un coût significatif pour des transactions fréquentes.`,
    related: ['liquidite', 'slippage', 'ordre-marche', 'encours'],
    modules: [
      { label: "Choisir son broker", href: "/academie/bases/choisir-son-broker" },
      { label: "Les ordres avancés", href: "/academie/avance/ordres-avances" },
    ],
  },

  // ─── PSYCHOLOGIE & MARCHÉS ────────────────────────────────────────────────

  {
    slug: "fomo",
    label: "FOMO — Fear Of Missing Out",
    category: "Marchés",
    shortDef: "La peur de rater une opportunité — un des biais comportementaux les plus coûteux en investissement.",
    definition: `Le FOMO (Fear Of Missing Out) est la peur de rater un mouvement de marché. Il pousse les investisseurs à acheter après une forte hausse, dans la panique de ne pas "profiter" de la tendance — souvent au pire moment, au sommet du cycle.\n\nLe FOMO est amplifié par les réseaux sociaux : quand tout le monde parle de la même action qui a fait +200 %, la tentation d'y entrer est forte. C'est précisément quand l'euphorie est maximale que le risque de correction est le plus élevé.\n\nLe remède contre le FOMO : avoir un plan d'investissement défini à l'avance. Si une action n'est pas dans ta liste de surveillance avec un prix d'entrée ciblé, la hausse que tu "rates" n'était pas ta trade. Il y aura toujours une prochaine opportunité — les marchés offrent des rebonds régulièrement à qui sait attendre.`,
    related: ['psychologie', 'bull-market', 'buy-and-hold'],
    modules: [
      { label: "Psychologie de l'investisseur", href: "/academie/intermediaire/psychologie-investisseur" },
    ],
  },

  {
    slug: "inflation",
    label: "Inflation",
    category: "Fondamentaux",
    shortDef: "La hausse générale et durable des prix, qui érode le pouvoir d'achat de l'argent au fil du temps.",
    definition: `L'inflation est la hausse générale des prix des biens et services sur une période donnée. Elle se mesure par le taux d'inflation annuel — en France, calculé par l'INSEE via l'Indice des Prix à la Consommation (IPC).\n\nPour l'investisseur, l'inflation est le "voleur silencieux" : 10 000 € sur un compte courant à 0 % avec une inflation de 2 % par an valent l'équivalent de 8 200 € de pouvoir d'achat 10 ans plus tard. L'argent n'a pas disparu nominalement, mais il a perdu de la valeur réelle.\n\nInvestir dans des actifs réels (actions, immobilier) est la principale protection contre l'inflation sur le long terme. Historiquement, les actions ont surperformé l'inflation de 5 à 7 points de pourcentage par an sur des horizons de 20 ans et plus.`,
    related: ['interet-compose', 'buy-and-hold', 'obligation'],
    modules: [
      { label: "Pourquoi investir", href: "/academie/bases/pourquoi-investir" },
    ],
  },
// ─────────────────────────────────────────────────────────────────────────────
// NOUVEAUX TERMES — à insérer dans glossaire.ts juste avant le ]; final du tableau
// ─────────────────────────────────────────────────────────────────────────────

// ─── TRANSVERSAL ─────────────────────────────────────────────────────────────

  {
    slug: "multiple-de-valorisation",
    label: "Multiple de valorisation",
    category: "Analyse fondamentale" as const,
    shortDef: "Un ratio qui met en relation le prix d'un actif avec une mesure de sa valeur économique — PER, EV/EBITDA, P/FCF.",
    definition: `Un multiple de valorisation compare le prix auquel le marché valorise une entreprise à une mesure de sa performance économique. Les plus courants : le PER (Prix / Bénéfice), l'EV/EBITDA (Valeur d'entreprise / EBITDA), le P/FCF (Prix / Free Cash Flow).\n\nLe niveau d'un multiple n'est jamais absolu — il n'a de sens qu'en comparaison : par rapport à l'historique de l'entreprise, par rapport à ses pairs sectoriels, et par rapport au taux sans risque. Un PER de 15 est cher pour une utility stable, raisonnable pour une entreprise technologique en croissance de 20 % par an.\n\nLa compression des multiples est l'un des principaux risques d'une action chère : si le marché accepte de payer 30 fois les bénéfices aujourd'hui mais n'en accepte plus que 20 demain, le cours peut baisser de 30 % même si les bénéfices progressent. C'est pourquoi la marge de sécurité est essentielle quand les multiples sont élevés.`,
    related: ["per-valorisation", "ev-ebitda", "p-fcf", "marge-de-securite", "roic"],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

// ─── SEMI-CONDUCTEURS & TECHNOLOGIE ──────────────────────────────────────────

  {
    slug: "semi-conducteurs",
    label: "Semi-conducteurs",
    category: "Fondamentaux" as const,
    shortDef: "Composants électroniques à la base de toute l'industrie numérique — des smartphones aux data centers.",
    definition: `Un semi-conducteur est un matériau (principalement le silicium) dont la conductivité électrique peut être modulée avec précision. Cette propriété en fait le matériau fondamental des circuits intégrés — les puces électroniques qui équipent tous les appareils numériques.\n\nL'industrie des semi-conducteurs est organisée en trois grandes chaînes : la conception (fabless), la fabrication (foundries) et l'équipement qui fournit les machines indispensables à la production. Ces trois maillons sont souvent assurés par des entreprises distinctes, ce qui crée une chaîne de dépendance et de spécialisation très forte.\n\nLes semi-conducteurs sont des actifs cycliques : la demande suit les grands cycles d'investissement technologique (smartphones, PC, data centers, automobiles électriques). Comprendre à quel stade du cycle se trouve le secteur est essentiel avant d'investir dans l'une de ses composantes.`,
    related: ["lithographie-euv", "moat", "supply-chain"],
    modules: [],
  },

  {
    slug: "lithographie-euv",
    label: "Lithographie EUV",
    category: "Analyse fondamentale" as const,
    shortDef: "Technologie de gravure de puces utilisant une lumière à 13,5 nm — seule capable de produire des semi-conducteurs inférieurs à 5 nm.",
    definition: `La lithographie est le procédé qui grave les circuits électroniques sur une plaque de silicium. Elle consiste à projeter un motif lumineux à travers un masque sur une surface photosensible, reproduisant ainsi des milliers de transistors de quelques nanomètres.\n\nL'EUV (Extreme Ultraviolet) utilise une lumière à longueur d'onde de 13,5 nanomètres — bien plus courte que les technologies précédentes — ce qui permet de graver des structures beaucoup plus fines. C'est aujourd'hui la seule technique disponible pour fabriquer des puces en deçà de 5 nm.\n\nLa maîtrise de la lithographie EUV est le goulot d'étranglement de toute la chaîne de production des semi-conducteurs avancés. Sans accès à ces machines, aucun fabricant ne peut produire les puces les plus récentes.`,
    related: ["semi-conducteurs", "high-na", "duv", "moat", "supply-chain"],
    modules: [],
  },

  {
    slug: "duv",
    label: "DUV (Deep Ultraviolet)",
    category: "Analyse fondamentale" as const,
    shortDef: "Génération précédente de lithographie, encore utilisée pour les nœuds technologiques 10 nm et plus — représente la majorité du parc mondial installé.",
    definition: `Le DUV (Deep Ultraviolet) est la technologie de lithographie qui précède l'EUV. Elle utilise une lumière à longueur d'onde de 193 nm et constitue encore la majorité du parc mondial de machines lithographiques.\n\nPour les nœuds technologiques 10 nm et plus — logique mature, mémoire, analogique, capteurs, composants automobiles — le DUV reste la solution standard et largement suffisante. La majeure partie de la production mondiale de semi-conducteurs utilise des équipements DUV.\n\nMalgré son ancienneté relative, le DUV reste stratégiquement sensible : les restrictions à l'exportation imposées sur certaines machines DUV avancées illustrent que même les technologies "matures" peuvent avoir une dimension géopolitique forte.`,
    related: ["lithographie-euv", "semi-conducteurs", "high-na"],
    modules: [],
  },

  {
    slug: "high-na",
    label: "High-NA EUV",
    category: "Analyse fondamentale" as const,
    shortDef: "Prochaine génération de lithographie EUV avec une ouverture numérique plus élevée (0,55 vs 0,33), permettant la gravure à 2 nm et en deçà.",
    definition: `Le High-NA (High Numerical Aperture) désigne la prochaine génération de lithographie EUV. L'ouverture numérique — qui détermine la finesse des motifs gravables — passe de 0,33 à 0,55, permettant de graver des structures encore plus petites.\n\nCette évolution est nécessaire pour atteindre les nœuds technologiques 2 nm et moins, indispensables aux générations futures de puces. Elle prolonge ainsi la trajectoire de miniaturisation décrite par la loi de Moore.\n\nLes machines High-NA sont significativement plus complexes, plus coûteuses et plus longues à développer que leurs prédécesseurs. Leur déploiement conditionne la capacité des fabricants à rester à la frontière technologique dans la seconde moitié des années 2020.`,
    related: ["lithographie-euv", "duv", "semi-conducteurs", "moat"],
    modules: [],
  },

  {
    slug: "supply-chain",
    label: "Supply Chain (chaîne d'approvisionnement)",
    category: "Fondamentaux" as const,
    shortDef: "L'ensemble des acteurs, flux et processus reliant les fournisseurs de matières premières jusqu'au client final.",
    definition: `La supply chain (chaîne d'approvisionnement) désigne l'ensemble des étapes, acteurs et flux — matières premières, composants, produits finis, informations, flux financiers — entre la source de production et le client final.\n\nPour un investisseur, la solidité de la supply chain d'une entreprise est un indicateur de risque opérationnel. Une dépendance excessive à un fournisseur unique, une exposition géographique à une zone instable, ou des délais de livraison très longs peuvent affecter sévèrement la capacité de production et les marges.\n\nÀ l'inverse, une supply chain maîtrisée — avec des fournisseurs diversifiés, des stocks tampon adaptés et une logistique robuste — contribue à la résilience du modèle économique. Sa solidité ou sa fragilité se lit souvent dans l'évolution des marges brutes sur plusieurs cycles.`,
    related: ["moat", "semi-conducteurs", "marge-nette"],
    modules: [],
  },

// ─── PHARMA ───────────────────────────────────────────────────────────────────

  {
    slug: "glp-1",
    label: "GLP-1 (Glucagon-Like Peptide-1)",
    category: "Analyse fondamentale" as const,
    shortDef: "Classe de médicaments imitant une hormone naturelle pour traiter le diabète de type 2 et l'obésité — le marché pharmaceutique à la croissance la plus rapide des années 2020.",
    definition: `Le GLP-1 (Glucagon-Like Peptide-1) est une hormone naturellement produite par l'intestin après un repas. Elle stimule la sécrétion d'insuline, ralentit la vidange gastrique et réduit l'appétit. Les médicaments agonistes du récepteur GLP-1 imitent cette hormone pour traiter le diabète de type 2 et l'obésité.\n\nCes traitements ont démontré des résultats cliniques inédits dans leur catégorie : réduction de poids de 15 à 22 % selon les molécules, diminution significative des risques cardiovasculaires, et pistes thérapeutiques explorées dans d'autres pathologies métaboliques.\n\nLe marché adressable est structurellement large : plusieurs centaines de millions de personnes concernées dans le monde. La bataille commerciale se joue principalement sur trois axes — l'accès au remboursement, la forme galénique (injectable vs oral) et l'efficacité différentielle entre molécules concurrentes.`,
    related: ["moat", "pipeline-pharma", "net-price", "pbm", "multiple-de-valorisation"],
    modules: [],
  },

  {
    slug: "pbm",
    label: "PBM (Pharmacy Benefit Manager)",
    category: "Analyse fondamentale" as const,
    shortDef: "Intermédiaires américains entre laboratoires pharmaceutiques, assureurs et pharmacies, qui négocient les prix et les remises.",
    definition: `Les PBM (Pharmacy Benefit Managers) sont des entités qui gèrent les prestations pharmaceutiques pour le compte des assureurs aux États-Unis. Leurs trois fonctions principales : négocier les remises avec les laboratoires, établir les formulaires (liste des médicaments remboursés), et traiter les demandes de remboursement.\n\nQuelques grands acteurs concentrent une part très importante du marché américain. Leur pouvoir de négociation est considérable : en incluant ou excluant un médicament de leurs formulaires, ils peuvent orienter des millions de prescriptions et exercer une pression significative sur les prix nets encaissés par les laboratoires.\n\nPour un investisseur dans le secteur pharmaceutique, les PBM représentent un facteur de risque structurel sur les marges aux États-Unis. La pression politique croissante sur les prix des médicaments tend à renforcer leur rôle de négociateur, comprimant l'écart entre prix affiché et prix net réellement perçu.`,
    related: ["glp-1", "net-price", "marge-nette"],
    modules: [],
  },

  {
    slug: "pipeline-pharma",
    label: "Pipeline (pharmaceutique)",
    category: "Analyse fondamentale" as const,
    shortDef: "L'ensemble des médicaments en cours de développement clinique dans un laboratoire, à différentes phases d'essais.",
    definition: `Le pipeline pharmaceutique désigne l'ensemble des molécules en cours de développement dans un laboratoire, classées selon leur stade clinique : Phase 1 (sécurité, premiers essais humains), Phase 2 (efficacité, dose), Phase 3 (comparaison avec un traitement de référence sur grande cohorte), puis soumission réglementaire.\n\nLe pipeline est l'actif fondamental d'une compagnie pharmaceutique. Un laboratoire sans pipeline solide est exposé à la "falaise des brevets" : quand ses médicaments phares tombent dans le domaine public, des génériques arrivent immédiatement sur le marché et effondrent les prix.\n\nÉvaluer un pipeline requiert de probabiliser les flux futurs de chaque candidat. La probabilité de succès en Phase 3 est d'environ 50-60 %. Une molécule en Phase 2 positive ne garantit pas l'approbation finale. Un pipeline riche en Phase 3 représente une optionnalité de valeur réelle — un pipeline vide est un signal d'alerte structurel.`,
    related: ["glp-1", "moat", "multiple-de-valorisation", "marge-de-securite"],
    modules: [],
  },

  {
    slug: "net-price",
    label: "Net Price (prix net)",
    category: "Analyse fondamentale" as const,
    shortDef: "Le prix réellement encaissé par un laboratoire pharmaceutique après déduction de toutes les remises accordées aux intermédiaires.",
    definition: `Dans l'industrie pharmaceutique américaine, le "gross price" (prix affiché) et le "net price" (prix réel) sont radicalement différents. Le net price est ce que le laboratoire encaisse effectivement après avoir accordé les remises aux PBM, assureurs et pharmacies.\n\nL'écart entre les deux peut être très important — pour certains médicaments, les remises représentent 40 à 60 % du prix affiché. C'est pourquoi la croissance du chiffre d'affaires brut d'un laboratoire peut être trompeuse : si les remises augmentent, la croissance réelle encaissée est plus faible.\n\nLe net price est un indicateur clé à surveiller pour évaluer la santé commerciale d'un médicament sur le marché américain. Son évolution dans le temps révèle la dynamique concurrentielle et le rapport de force avec les intermédiaires.`,
    related: ["pbm", "glp-1", "marge-nette"],
    modules: [],
  },

// ─── ÉNERGIE ─────────────────────────────────────────────────────────────────

  {
    slug: "gnl",
    label: "GNL (Gaz Naturel Liquéfié)",
    category: "Fondamentaux" as const,
    shortDef: "Gaz naturel refroidi à -162 °C pour être transporté sous forme liquide par tankers — énergie de transition entre le charbon et les renouvelables.",
    definition: `Le Gaz Naturel Liquéfié (GNL) est du gaz naturel refroidi à -162 °C, ce qui réduit son volume d'un facteur 600 et permet son transport par méthaniers sur des routes intercontinentales. Il est ensuite regazéifié à destination pour être distribué dans les réseaux locaux.\n\nLe GNL est présenté comme une énergie de transition : il émet moins de CO₂ que le charbon et le pétrole, et peut remplacer des centrales à charbon dans les pays qui n'ont pas accès à un réseau de gazoducs. La demande mondiale de GNL a fortement progressé depuis 2022, notamment en Europe.\n\nPour un investisseur, le GNL expose à plusieurs risques simultanés : la volatilité du prix du gaz, les risques géopolitiques liés aux zones de production et de transit, et le risque de transition si les renouvelables se déploient plus vite que prévu.`,
    related: ["integrated-power", "stranded-assets", "scope-3", "marge-brute-d-autofinancement"],
    modules: [],
  },

  {
    slug: "integrated-power",
    label: "Integrated Power (puissance intégrée)",
    category: "Analyse fondamentale" as const,
    shortDef: "Segment de production d'électricité bas carbone — renouvelables, gaz et stockage — développé par les grandes compagnies énergétiques dans le cadre de leur transition.",
    definition: `L'Integrated Power désigne la stratégie par laquelle des compagnies énergétiques historiquement fossiles développent des capacités de production d'électricité bas carbone : énergie solaire, éolien terrestre et offshore, centrales à gaz pour l'électricité, et solutions de stockage.\n\nCe modèle "intégré" vise à couvrir toute la chaîne de valeur électrique — production, transport et vente — plutôt que de se spécialiser sur un seul maillon. Il permet de sécuriser des revenus via des contrats long terme (Power Purchase Agreements, PPA) avec des industriels ou des États.\n\nPour un investisseur, l'Integrated Power représente une optionnalité de transformation : si la transition énergétique s'accélère, les compagnies ayant investi tôt dans ces capacités bénéficient d'un avantage concurrentiel. Si elle est plus lente, les CAPEX engagés pèsent sur le rendement à court terme.`,
    related: ["gnl", "stranded-assets", "scope-3", "capex"],
    modules: [],
  },

  {
    slug: "stranded-assets",
    label: "Stranded Assets (actifs échoués)",
    category: "Gestion du risque" as const,
    shortDef: "Actifs qui perdent de la valeur avant la fin de leur durée de vie économique prévue — risque majeur pour les entreprises exposées à la transition énergétique.",
    definition: `Les stranded assets (actifs échoués ou dépréciés anticipés) sont des actifs inscrits au bilan d'une entreprise qui risquent de perdre tout ou partie de leur valeur avant d'avoir été entièrement amortis, en raison d'une évolution réglementaire, technologique ou de marché imprévue.\n\nLe terme s'est imposé dans le secteur énergétique pour désigner les réserves fossiles (pétrole, gaz, charbon) susceptibles de ne jamais être exploitées si les politiques climatiques contraignaient fortement l'usage des énergies carbonées avant leur amortissement comptable.\n\nCe risque affecte également d'autres secteurs : une usine automobile dimensionnée pour les moteurs thermiques peut devenir un stranded asset si l'électrique s'impose plus vite que prévu. Identifier les actifs les plus exposés dans un bilan est une étape clé de l'analyse des risques extra-financiers.`,
    related: ["gnl", "scope-3", "integrated-power", "marge-de-securite"],
    modules: [],
  },

  {
    slug: "scope-3",
    label: "Scope 3 (émissions indirectes)",
    category: "Fondamentaux" as const,
    shortDef: "Les émissions de CO₂ induites par l'utilisation des produits vendus — souvent la part la plus importante de l'empreinte carbone d'une entreprise.",
    definition: `Le bilan carbone d'une entreprise se décompose en trois "scopes" selon le protocole GHG (Greenhouse Gas Protocol). Le Scope 1 couvre les émissions directes des installations propres. Le Scope 2 couvre les émissions liées à l'énergie achetée. Le Scope 3 couvre toutes les autres émissions indirectes — en amont (extraction des matières premières, transport) et en aval (utilisation des produits par les clients).\n\nPour la plupart des entreprises, le Scope 3 est de loin le plus significatif. Dans le secteur pétrolier, l'essentiel des émissions survient quand les clients brûlent le pétrole et le gaz achetés. Dans l'industrie automobile, elles surviennent pendant l'utilisation du véhicule.\n\nLa réglementation sur le Scope 3 est en cours de durcissement — notamment via la directive CSRD européenne. Son intégration croissante dans les bilans carbone représente un risque réglementaire et de réputation à anticiper dans l'analyse des entreprises à forte intensité carbone indirecte.`,
    related: ["stranded-assets", "integrated-power", "gnl"],
    modules: [],
  },

  {
    slug: "marge-brute-d-autofinancement",
    label: "Marge brute d'autofinancement (MBA)",
    category: "Analyse fondamentale" as const,
    shortDef: "Le cash généré par l'activité d'une entreprise avant investissements et charges financières — indicateur clé dans les secteurs à forte intensité capitalistique.",
    definition: `La marge brute d'autofinancement (MBA), appelée "cash flow from operations" dans les rapports anglo-saxons, mesure la trésorerie générée par l'activité opérationnelle d'une entreprise avant le financement de ses investissements.\n\nContrairement au résultat net, la MBA n'est pas affectée par les amortissements, les dépréciations d'actifs ou certains effets comptables. Elle reflète le cash réellement produit par l'activité. C'est sur cette base que les directions allouent leur capital entre maintien des actifs, croissance et rémunération des actionnaires.\n\nCet indicateur est particulièrement utilisé dans les secteurs à forte intensité capitalistique — énergie, industrie lourde, télécoms, infrastructure — où les amortissements massifs peuvent masquer la génération réelle de trésorerie. La MBA segment par segment est souvent plus révélatrice que le résultat net consolidé pour comprendre où une entreprise crée ou détruit de la valeur.`,
    related: ["free-cash-flow", "capex", "roic", "ebitda"],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

  {
    slug: "tac",
    label: "TAC (Total Acquisition Cost)",
    category: "Analyse fondamentale" as const,
    shortDef: "Coût complet d'acquisition d'une unité de réserve pétrolière ou gazière, incluant exploration, développement et acquisitions — exprimé en $/baril équivalent pétrole.",
    definition: `Le TAC (Total Acquisition Cost) désigne le coût complet supporté par une compagnie pétrolière pour mettre en production une unité de réserve d'hydrocarbures. Il s'exprime généralement en dollars par baril d'équivalent pétrole ($/boe) et intègre trois composantes : les coûts d'exploration, les coûts de développement des puits et des infrastructures, et les éventuelles acquisitions de réserves sur le marché.\n\nUn TAC bas indique que la compagnie trouve et développe ses réserves à moindre coût — avantage concurrentiel direct dans un secteur où le prix de vente est dicté par le marché mondial. Un TAC élevé signifie que la rentabilité dépend fortement d'un prix du baril soutenu.\n\nComparer le TAC d'une compagnie à ses concurrents et au prix spot du pétrole ou du gaz permet d'évaluer sa marge de sécurité opérationnelle et sa capacité à rester rentable en bas de cycle.`,
    related: ["marge-brute-d-autofinancement", "capex", "roic", "moat"],
    modules: [],
  },
];

// ─── UTILS ────────────────────────────────────────────────────────────────────

export const CATEGORIES: GlossaireCategory[] = [
  'Fondamentaux',
  'Marchés',
  'Stratégies',
  'Enveloppes fiscales',
  'ETF & indices',
  'Analyse fondamentale',
  'Analyse technique',
  'Gestion du risque',
  'Produits avancés',
  'Ordres de bourse',
];

export function getTermBySlug(slug: string): GlossaireTerm | undefined {
  return glossaire.find((t) => t.slug === slug);
}

export function getRelatedTerms(term: GlossaireTerm): GlossaireTerm[] {
  return term.related
    .map((slug) => getTermBySlug(slug))
    .filter((t): t is GlossaireTerm => t !== undefined)
    .slice(0, 6);
}

export function getTermsByCategory(category: GlossaireCategory): GlossaireTerm[] {
  return glossaire.filter((t) => t.category === category);
}

export function getAllSlugs(): string[] {
  return glossaire.map((t) => t.slug);
}