// src/data/glossaire/strategie-moat.ts
// ─────────────────────────────────────────────────────────────────────────────
// Catégorie : Stratégie & moat
// 11 termes
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm } from './types';

export const strategieMoat: GlossaireTerm[] = [
  {
    slug: "category-captain",
    label: "Category captain (capitaine de catégorie)",
    category: 'Stratégie & moat',
    theme: 'luxe-consommation',
    shortDef: "Fournisseur désigné par un distributeur pour piloter toute une catégorie de produits en rayon (assortiment, merchandising, innovation), ce qui crée une proximité opérationnelle et de modestes coûts de changement.",
    definition: `Le category captain (capitaine de catégorie) est le fournisseur qu'une enseigne de distribution choisit pour l'aider à gérer l'ensemble d'une catégorie de produits : choix de l'assortiment, implantation en rayon (merchandising), calendrier promotionnel et innovation. En échange de cette expertise, le fournisseur gagne une position privilégiée et une visibilité sur les ventes de toute la catégorie, pas seulement de ses propres références.\n\nPour l'analyste, ce statut est une source d'avantage concurrentiel modeste mais réel : il crée des coûts de changement pour le distributeur (réorganiser une catégorie entière coûte du temps et du risque) et une proximité opérationnelle difficile à déloger. C'est une forme atténuée de moat, fondée sur la relation et l'exécution plutôt que sur un actif protégé.\n\nLa limite est structurelle : le statut reste à la main du distributeur, qui peut le retirer. Il ne confère pas de pouvoir de prix et coexiste souvent avec une forte dépendance commerciale : le fournisseur qui pilote la catégorie d'une grande enseigne en est aussi, souvent, dangereusement dépendant. Mama's Creations occupe ce rôle sur le rayon traiteur de certaines enseignes américaines.`,
    related: ['moat', 'couts-de-changement', 'pricing-power', 'concentration-clients'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "antitrust",
    label: "Antitrust (droit de la concurrence)",
    category: 'Stratégie & moat',
    shortDef: "Corpus juridique visant à prévenir les abus de position dominante et les pratiques anticoncurrentielles — risque réglementaire majeur pour les entreprises en situation de quasi-monopole.",
    definition: `Le droit antitrust (ou droit de la concurrence) regroupe l'ensemble des règles qui encadrent le comportement des entreprises pour prévenir les abus de position dominante, les ententes sur les prix, et les pratiques qui fausseraient la concurrence au détriment des consommateurs ou des acteurs du marché.\n\nAux États-Unis, les principales lois antitrust sont le Sherman Act (1890) et le Clayton Act (1914), appliqués par le Department of Justice (DOJ) et la Federal Trade Commission (FTC). En Europe, c'est la Direction générale de la concurrence de la Commission européenne qui instruit les dossiers, avec des amendes pouvant atteindre 10 % du chiffre d'affaires mondial.\n\nPour un investisseur, l'exposition antitrust est un risque structurel pour les entreprises en situation de domination de marché. Elle peut se matérialiser sous trois formes : une amende significative, une contrainte comportementale imposée par le régulateur (obligation de partager l'infrastructure, interdiction de certaines pratiques tarifaires), ou dans les cas extrêmes une scission forcée. Visa fait face à une procédure DOJ ouverte en 2024 sur le marché du débit américain — un risque réglementaire à surveiller sur plusieurs années.`,
    related: ['duopole', 'interchange', 'moat', 'pricing-power'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "asset-light",
    label: "Modèle asset-light",
    category: 'Stratégie & moat',
    shortDef: "Un modèle économique qui génère des revenus élevés sans immobiliser de capital physique important.",
    definition: `Un modèle asset-light est un modèle économique dans lequel l'entreprise génère des revenus et des bénéfices sans détenir ni investir massivement dans des actifs physiques — usines, équipements, stocks, créances.\n\nLa conséquence directe est une conversion exceptionnelle du résultat en cash : avec peu de Capex nécessaire, la quasi-totalité du résultat opérationnel se retrouve en Free Cash Flow disponible pour les actionnaires. C'est la caractéristique financière la plus précieuse d'une entreprise asset-light.\n\nVisa en est l'exemple canonique : le réseau est construit, les transactions transitent dessus sans que Visa n'immobilise de capital pour les financer. En 2025, Visa a généré 22,9 Md$ de FCF pour seulement 1,5 Md$ de Capex — soit 15 fois plus de cash redistribué aux actionnaires que de capital réinvesti dans l'outil industriel. À l'inverse, une banque classique comme American Express doit immobiliser du capital pour couvrir le risque de crédit de ses porteurs, ce qui comprime mécaniquement son ROIC.`,
    related: ['free-cash-flow', 'roic', 'capex', 'pricing-power', 'moat'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "couts-de-changement",
    label: "Coûts de changement (Switching Costs)",
    category: 'Stratégie & moat',
    shortDef: "Frais financiers, opérationnels ou réglementaires que supporte un client pour changer de fournisseur, créant une barrière à la sortie qui renforce l'avantage concurrentiel du titulaire.",
    definition: `Les coûts de changement (switching costs) désignent l'ensemble des frictions — financières, techniques, réglementaires ou relationnelles — qui rendent coûteuse pour un client le fait de substituer un fournisseur à un autre. C'est l'un des quatre archétypes de moat identifiés par la littérature d'analyse fondamentale, avec les effets de réseau, les actifs intangibles et les avantages de coût.\n\nLes coûts de changement peuvent prendre plusieurs formes : coûts directs (frais de résiliation, investissements de reconfiguration), coûts d'apprentissage (formation des équipes à un nouveau système), coûts réglementaires (recertification d'un équipement ou d'un fournisseur par une autorité de tutelle), et coûts relationnels (perte d'un historique de données ou d'une relation commerciale établie).\n\nPour l'analyste, les coûts de changement se détectent dans la récurrence du chiffre d'affaires (taux de rétention clients élevé), dans la durée des contrats, et dans la capacité de l'entreprise à augmenter ses prix sans perdre de clients (pricing power). Un moat fondé sur les coûts de changement est particulièrement défensif car il est ancré dans le comportement des clients plutôt que dans les actifs de l'entreprise.`,
    related: ['moat', 'pricing-power', 'saas', 'backlog'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "duopole",
    label: "Duopole",
    category: 'Stratégie & moat',
    shortDef: "Un marché dominé par deux acteurs qui se partagent l'essentiel des parts, sans qu'aucun ne parvienne à éliminer l'autre.",
    definition: `Un duopole est une structure de marché où deux entreprises concentrent la quasi-totalité de l'offre. Contrairement au monopole, les deux acteurs se font concurrence — mais cette concurrence est encadrée par une interdépendance structurelle : les décisions de l'un contraignent celles de l'autre.\n\nPour un investisseur, le duopole est l'une des structures les plus attractives : les deux acteurs bénéficient de barrières à l'entrée quasi infranchissables, d'un pricing power structurel et d'une visibilité de long terme sur leurs revenus. La concurrence existe, mais elle est prévisible et disciplinée — les deux acteurs ont plus à perdre à une guerre des prix totale qu'à maintenir un équilibre stable.\n\nVisa et Mastercard en sont l'exemple le plus documenté : plus de cinquante ans de coexistence stable, aucun des deux n'a éliminé l'autre malgré une compétition réelle sur les contrats bancaires. Cette stabilité est elle-même une preuve de la solidité du modèle.`,
    related: ['moat', 'pricing-power', 'effet-de-reseau', 'interchange'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "effet-de-reseau",
    label: "Effet de réseau",
    category: 'Stratégie & moat',
    shortDef: "Le mécanisme par lequel un produit ou service devient plus utile à mesure que le nombre de ses utilisateurs augmente.",
    definition: `L'effet de réseau désigne la propriété d'un produit ou d'un service dont la valeur croît à mesure que le nombre d'utilisateurs augmente. Chaque nouvel utilisateur améliore l'expérience de tous les utilisateurs existants — créant une dynamique auto-renforçante difficile à contester une fois établie.\n\nIl existe deux grandes formes. L'effet de réseau direct : chaque utilisateur supplémentaire apporte directement de la valeur aux autres (téléphonie, messagerie). L'effet de réseau indirect ou biface : deux groupes distincts se renforcent mutuellement via la plateforme — plus il y a de porteurs de carte Visa, plus les marchands l'acceptent, ce qui attire de nouveaux porteurs, qui convainquent de nouveaux marchands.\n\nL'effet de réseau est l'une des formes les plus puissantes de moat : une fois qu'il atteint une masse critique, il crée une barrière à l'entrée quasi infranchissable. Répliquer le réseau de Visa — 5 milliards d'identifiants de paiement, 175 millions de commerçants, 14 500 institutions financières — nécessiterait des décennies et des capitaux considérables, avec aucune garantie d'atteindre la même adoption.`,
    related: ['moat', 'duopole', 'asset-light', 'pricing-power'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "moat",
    label: "Moat (avantage concurrentiel)",
    category: 'Stratégie & moat',
    shortDef: "L'avantage concurrentiel durable qui protège une entreprise de ses concurrents.",
    definition: `Le concept de Moat (douves, en anglais) vient de Warren Buffett. Il désigne l'avantage concurrentiel durable d'une entreprise — ce qui empêche ses concurrents de la copier ou de prendre ses parts de marché. Plus les douves sont larges, plus l'entreprise est protégée.\n\nQuatre formes principales de Moat :\n— La marque : les clients paient plus cher pour le nom (LVMH, Apple, Hermès).\n— Les brevets : une protection légale contre la copie (pharma, semi-conducteurs comme ASML).\n— Les coûts de changement : les clients ne partent pas parce que migrer est trop coûteux ou complexe (logiciels d'entreprise, systèmes bancaires, Microsoft Office).\n— Les effets de réseau : le produit devient plus utile à mesure que le nombre d'utilisateurs augmente (Visa, LinkedIn, marketplaces).\n\nUne entreprise sans Moat identifiable est en compétition permanente sur les prix. C'est une guerre d'usure que peu survivent longtemps.`,
    related: ['stock-picking', 'free-cash-flow', 'marge-nette'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "oligopole",
    label: "Oligopole",
    category: 'Stratégie & moat',
    shortDef: "Structure de marché dominée par un petit nombre d'acteurs qui concentrent l'essentiel de l'offre et exercent une influence significative sur les prix.",
    definition: `Un oligopole est une structure de marché dans laquelle quelques entreprises — en général 2 à 5 — produisent la totalité ou la quasi-totalité de l'offre d'un bien ou d'un service. Les acteurs sont suffisamment peu nombreux pour que les décisions de l'un influencent les autres : chaque acteur tient compte des réactions probables de ses concurrents avant d'ajuster ses prix ou sa production.\n\nContrairement au monopole (un seul acteur) ou à la concurrence parfaite (multitude d'acteurs), l'oligopole occupe un espace intermédiaire caractérisé par une forte interdépendance stratégique. Les barrières à l'entrée y sont en général élevées — économies d'échelle, intensité capitalistique, réseaux physiques, réglementations — ce qui protège la position des acteurs en place.\n\nPour un investisseur, un oligopole est une structure favorable : la rationalité collective des acteurs (éviter une guerre des prix destructrice), les barrières à l'entrée et la concentration de la demande sur peu d'acteurs génèrent des marges et des retours sur capital supérieurs à la moyenne. Le secteur des gaz industriels (Air Liquide, Linde, Air Products) en est un exemple emblématique : trois acteurs concentrent plus de 60 % de la production mondiale, avec des actifs physiques irréplicables qui rendent toute entrée économiquement irrationnelle.`,
    related: ['duopole', 'moat', 'pricing-power'],
    modules: [
      { label: "Marchés", href: "/academie/debutant/marches" },
    ],
  },
  {
    slug: "pricing-power",
    label: "Pricing Power",
    category: 'Stratégie & moat',
    shortDef: "La capacité d'une entreprise à augmenter ses prix sans perdre de clients.",
    definition: `Le Pricing Power désigne la capacité d'une entreprise à augmenter ses prix sans provoquer de fuite significative de sa clientèle. C'est l'une des manifestations les plus directes d'un Moat solide.\n\nUne entreprise avec fort Pricing Power peut répercuter l'inflation sur ses clients, protéger ses marges en période de hausse des coûts, et extraire davantage de valeur de chaque client au fil du temps. ASML en est l'exemple le plus pur : ses clients (TSMC, Intel, Samsung) n'ont aucune alternative. Hermès, Apple, Visa disposent du même pouvoir.\n\nComment l'identifier : regarder si la marge nette reste stable ou s'améliore sur 5 ans malgré l'inflation. Si oui, l'entreprise a du Pricing Power. Si elle s'érode, elle en manque. C'est la différence entre une entreprise qui subit son marché et une entreprise qui le domine.`,
    related: ['moat', 'marge-nette', 'roic', 'marge-de-securite'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "royalties",
    label: "Royalties",
    category: 'Stratégie & moat',
    shortDef: "Redevance versée pour l'usage d'une propriété intellectuelle, brevetée ou licenciée — modèle économique à très haute marge.",
    definition: `Une royalty est un paiement versé par un licencié au détenteur d'une propriété intellectuelle (brevet, marque, savoir-faire, droit d'auteur) en échange du droit de l'utiliser. Elle peut être calculée en pourcentage du chiffre d'affaires généré par l'usage, en montant fixe par unité produite, ou en jalon (paiement à des étapes définies).\n\nLe modèle d'affaires par royalties est typique des entreprises de propriété intellectuelle pure : éditeurs de logiciels, laboratoires pharmaceutiques (licences de molécules), concédants technologiques (GTT pour le confinement GNL, ARM pour les architectures de processeurs). Il combine quatre avantages structurels : coûts marginaux quasi-nuls, marges d'exploitation élevées (50-70 %), conversion FCF supérieure à 80 %, et capital investi très faible.\n\nLa contrepartie est la dépendance à un noyau de propriété intellectuelle qui doit rester protégé, défendu juridiquement, et alimenté en R&D pour maintenir l'avance technologique sur la durée. Une fois la barrière franchie par un concurrent, le moat s'effondre rapidement.`,
    related: ['asset-light', 'pricing-power', 'moat', 'free-cash-flow'],
    modules: [],
  },
  {
    slug: "saas",
    label: "SaaS — Software as a Service",
    category: 'Stratégie & moat',
    shortDef: "Modèle de distribution logicielle par abonnement via le cloud, sans installation locale.",
    definition: `Le SaaS (Software as a Service) est un modèle de distribution où le logiciel est hébergé dans le cloud et accessible par abonnement, sans installation ni maintenance locale. L'utilisateur paie un abonnement mensuel ou annuel plutôt qu'une licence unique.\n\nPour l'investisseur, le modèle SaaS présente des caractéristiques financières attractives : revenus récurrents et prévisibles, coûts marginaux faibles (une copie supplémentaire du logiciel coûte quasi-rien), marges qui s'améliorent structurellement à mesure que la base d'abonnés croît sans coûts proportionnels.\n\nMicrosoft a opéré sa transition de licences perpétuelles vers le SaaS sous Satya Nadella — transformant un revenu ponctuel en flux récurrents. Cette transformation explique en grande partie l'expansion des marges opérationnelles de Productivity (passées à 58 %) et la visibilité accrue sur les revenus futurs.`,
    related: ['capex', 'marge-nette', 'free-cash-flow', 'pricing-power'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "universalisation",
    label: "Universalisation",
    category: 'Stratégie & moat',
    theme: 'luxe-consommation',
    shortDef: "Stratégie visant à couvrir l'intégralité de la pyramide de prix d'un marché, du bas de gamme au luxe.",
    definition: `L'universalisation désigne la stratégie consistant à adresser simultanément tous les niveaux de prix d'un marché, du produit d'entrée de gamme à l'article de luxe, via un portefeuille de marques positionnées à chaque étage.\n\nC'est le modèle de L'Oréal : contrairement à un conglomérat qui diversifie par secteur, le groupe diversifie par niveau de prix et par canal, capturant la même consommatrice à différents moments de sa vie et de son budget sans cannibalisation entre divisions — d'un shampoing Garnier en grande surface à un soin CeraVe prescrit par un dermatologue, en passant par un parfum Lancôme.\n\nL'intérêt de ce modèle pour l'investisseur est sa résilience cyclique : en période de croissance, les divisions Luxe et Grand Public captent la premiumisation ; en période de ralentissement, la Beauté Dermatologique, portée par la prescription médicale, résiste mieux. La diversification est intrinsèque au modèle, pas ajoutée artificiellement.`,
    related: ['moat', 'pricing-power', 'marge-nette', 'cagr'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
];
