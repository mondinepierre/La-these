// src/data/glossaire/analyse-fondamentale.ts
// ─────────────────────────────────────────────────────────────────────────────
// Catégorie : Analyse fondamentale
// 35 termes
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm } from './types';

export const analyseFondamentale: GlossaireTerm[] = [
  {
    slug: "reverse-dcf",
    label: "DCF inversé (Reverse DCF)",
    category: 'Analyse fondamentale',
    shortDef: "Méthode qui inverse le DCF pour déduire, à partir du cours actuel, le taux de croissance que le marché price implicitement, afin de juger si ces attentes sont réalistes.",
    definition: `Le DCF inversé (reverse DCF) part du principe que le cours de Bourse est le résultat d'un modèle d'actualisation, et cherche à retrouver l'hypothèse cachée derrière ce prix. Au lieu de projeter des flux pour en déduire une valeur, on fixe la valeur (le cours actuel) et on résout pour la variable d'entrée : le plus souvent, le taux de croissance des flux que le marché suppose implicitement.\n\nLa lecture est puissante car elle déplace la question. Plutôt que de demander combien vaut l'entreprise (un exercice fragile, très sensible aux hypothèses), on demande quelle performance il faut croire pour justifier le cours d'aujourd'hui, et si elle est plausible. Si le marché price une croissance de 50 % par an pendant cinq ans, il suffit de juger la crédibilité de ce chiffre.\n\nC'est un antidote particulièrement utile sur les valeurs de croissance à multiple élevé, où le DCF classique donne des fourchettes trop larges. Le DCF inversé transforme une valorisation en pari explicite et falsifiable.`,
    related: ['dcf', 'per-valorisation', 'wacc', 'free-cash-flow'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "bpa",
    label: "BPA — Bénéfice par Action",
    category: 'Analyse fondamentale',
    shortDef: "Le bénéfice net de l'entreprise divisé par le nombre d'actions en circulation.",
    definition: `Le BPA (Bénéfice par Action, ou EPS — Earnings Per Share en anglais) mesure la rentabilité de l'entreprise rapportée à une seule action. Il se calcule en divisant le bénéfice net par le nombre d'actions en circulation.\n\nCritère de surveillance : un BPA croissant sur 5 ans est le signe d'une entreprise qui améliore sa rentabilité. Si le chiffre d'affaires monte mais que le BPA baisse, les coûts explosent et la rentabilité se dégrade — c'est un signal d'alerte.\n\nLe BPA est directement lié au PER : PER = Prix de l'action / BPA. Un BPA en croissance soutenue peut justifier un PER élevé.`,
    related: ['per-valorisation', 'marge-nette', 'free-cash-flow', 'chiffre-affaires'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "cagr",
    label: "CAGR — Taux de croissance annuel composé",
    category: 'Analyse fondamentale',
    shortDef: "Le taux de croissance annuel moyen d'une grandeur sur une période donnée, en supposant une croissance régulière.",
    definition: `Le CAGR (Compound Annual Growth Rate) est le taux de croissance annuel moyen qui permettrait à une valeur d'atteindre son niveau final à partir de son niveau initial sur une période donnée. Il suppose une croissance régulière chaque année.\n\nFormule : CAGR = (Valeur finale / Valeur initiale)^(1/nombre d'années) − 1. Exemple : un chiffre d'affaires qui passe de 100 à 200 M€ en 5 ans affiche un CAGR de 14,9 % — même si la croissance réelle a été irrégulière.\n\nLe CAGR est très utilisé pour comparer la croissance du CA, des bénéfices, du FCF ou du cours d'une action sur des périodes différentes. Sa limite : il lisse la réalité et masque la volatilité interannuelle. Un CAGR de 20 % peut cacher une année à +80 % suivie de trois années plates.`,
    related: ['chiffre-affaires', 'free-cash-flow', 'bpa'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "capex",
    label: "CAPEX — Dépenses d'investissement",
    category: 'Analyse fondamentale',
    shortDef: "Les dépenses engagées pour acquérir ou maintenir des actifs physiques à long terme.",
    definition: `Le CAPEX (Capital Expenditure) désigne les dépenses d'investissement qu'une entreprise engage pour acquérir, améliorer ou maintenir ses actifs physiques à long terme : usines, équipements, machines, infrastructures.\n\nOn distingue deux types : le CAPEX de maintenance (remplacer ce qui s'use — indispensable pour maintenir l'activité) et le CAPEX de croissance (investir dans de nouvelles capacités — signe d'ambition mais consommateur de cash).\n\nLe CAPEX est directement lié au Free Cash Flow : FCF = Cash-flow opérationnel − CAPEX. Une entreprise avec un CAPEX élevé génère moins de FCF disponible pour les actionnaires. Les entreprises à faible CAPEX (logiciels, plateformes, marques fortes) sont souvent les plus rentables sur le long terme — elles n'ont pas besoin de réinvestir massivement pour croître.`,
    related: ['free-cash-flow', 'roic', 'dette-ebitda'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "chiffre-affaires",
    label: "Chiffre d'affaires (CA)",
    category: 'Analyse fondamentale',
    shortDef: "Le total des revenus générés par les ventes d'une entreprise sur une période donnée.",
    definition: `Le chiffre d'affaires (CA) représente le total des ventes réalisées par une entreprise sur une période donnée. C'est la ligne du haut du compte de résultat (d'où le nom anglais "top line").\n\nCritère de croissance à surveiller : un CA en croissance de plus de 5 % par an sur 5 ans indique une entreprise qui gagne des parts de marché ou opère sur un marché en expansion. Un CA stagnant ou en recul signifie que l'entreprise est sur un marché saturé ou perd du terrain face à ses concurrents.\n\nAttention : la croissance du CA seule ne suffit pas. Un CA qui monte tandis que les bénéfices baissent signifie que l'entreprise achète sa croissance à perte. Il faut toujours analyser la rentabilité (marge nette, FCF) en parallèle.`,
    related: ['marge-nette', 'bpa', 'free-cash-flow'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "current-ratio",
    label: "Current Ratio (ratio de liquidité)",
    category: 'Analyse fondamentale',
    shortDef: "La capacité d'une entreprise à honorer ses obligations financières à court terme.",
    definition: `Le Current Ratio mesure la capacité d'une entreprise à couvrir ses dettes à court terme (moins d'un an) avec ses actifs à court terme (cash, stocks, créances). Formule : Current Ratio = Actifs courants / Passifs courants.\n\nGrille de lecture : < 1 (risque de défaut à court terme — l'entreprise ne peut pas couvrir ses obligations), entre 1,2 et 2,5 (zone saine), > 3 (thésaurisation excessive — l'entreprise immobilise inutilement du capital qui pourrait être redistribué ou investi).\n\nÀ nuancer selon le secteur : les grandes surfaces (Carrefour, Walmart) affichent régulièrement un Current Ratio < 1 car elles encaissent les clients avant de payer leurs fournisseurs — ce n'est pas un signal d'alerte dans ce cas.`,
    related: ['dette-ebitda', 'free-cash-flow'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "dette-ebitda",
    label: "Dette nette / EBITDA",
    category: 'Analyse fondamentale',
    shortDef: "Le nombre d'années de profits nécessaires pour rembourser la dette nette de l'entreprise.",
    definition: `Le ratio Dette nette / EBITDA mesure le niveau d'endettement d'une entreprise en le ramenant à sa capacité bénéficiaire. Il indique combien d'années seraient nécessaires pour rembourser toute la dette nette si l'intégralité de l'EBITDA y était consacrée.\n\nGrille de lecture indicative : ratio < 1 (très peu endetté), 1–2 (sain), 2–3 (modéré, vigilance), > 3 (alerte — l'entreprise est vulnérable à une hausse des taux d'intérêt).\n\nLe contexte sectoriel est essentiel : les entreprises en phase de forte croissance (SaaS, biotech) acceptent parfois des ratios élevés temporairement. Les entreprises matures dans des secteurs cycliques (automobile, construction) devraient viser un ratio plus bas.`,
    related: ['ebitda', 'free-cash-flow', 'current-ratio'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "dilution",
    label: "Dilution (du capital)",
    category: 'Analyse fondamentale',
    shortDef: "Augmentation du nombre d'actions en circulation qui réduit mécaniquement la part de chaque actionnaire existant dans les bénéfices, les actifs et les droits de vote de l'entreprise.",
    definition: `La dilution désigne toute opération qui augmente le nombre d'actions en circulation, réduisant ainsi le poids relatif de chaque actionnaire sans que celui-ci ait vendu ses titres. Les sources de dilution sont multiples : émissions d'actions nouvelles pour financer une acquisition, exercice de stock-options et de RSUs par les salariés, conversion d'obligations convertibles, ou augmentations de capital en numéraire.\n\nLa dilution se mesure en comparant le nombre d'actions dilué (incluant tous les instruments potentiellement convertibles) au nombre d'actions basique, ou en observant l'évolution annuelle du nombre d'actions d'une année sur l'autre.\n\nUne dilution modérée (0 à 2% par an) liée à la rémunération des salariés est généralement acceptée pour les entreprises technologiques. Une dilution négative — c'est-à-dire une concentration résultant de rachats d'actions — est un signal positif d'allocation du capital quand elle est réalisée en dessous de la valeur intrinsèque estimée. À l'inverse, une dilution forte et répétée érode la valeur par action même quand l'entreprise croît en valeur absolue.`,
    related: ['rachat-actions', 'bpa', 'free-cash-flow', 'rsu'],
    modules: [],
  },
  {
    slug: "ebit",
    label: "EBIT",
    category: 'Analyse fondamentale',
    shortDef: "Résultat opérationnel d'une entreprise avant charges financières et impôts.",
    definition: `L'EBIT (Earnings Before Interest and Taxes) mesure la rentabilité opérationnelle d'une entreprise, indépendamment de sa structure de financement et de sa fiscalité. C'est le résultat généré par l'activité courante, avant que les intérêts sur la dette et l'impôt sur les sociétés n'en réduisent l'effet.\n\nOn l'obtient en partant du chiffre d'affaires et en soustrayant l'ensemble des charges opérationnelles (coût des ventes, frais généraux, amortissements, dépréciations). Le ratio EBIT / chiffre d'affaires donne la marge EBIT, qui mesure combien de centimes de résultat opérationnel chaque euro de CA génère.\n\nChez les industriels comme Thales, la marge EBIT est l'indicateur central de suivi de la rentabilité. Elle permet de comparer l'efficacité opérationnelle entre entreprises d'un même secteur, quelle que soit leur structure de capital ou leur taux d'imposition.`,
    related: ['ebitda', 'marge-operationnelle', 'nopat', 'roic'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "ebitda",
    label: "EBITDA",
    category: 'Analyse fondamentale',
    shortDef: "Le bénéfice avant intérêts, impôts, dépréciation et amortissement — indicateur de la rentabilité opérationnelle.",
    definition: `L'EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) mesure la rentabilité opérationnelle d'une entreprise avant les effets de la structure financière (intérêts sur la dette), de la fiscalité, et des choix comptables d'amortissement.\n\nC'est une mesure de la capacité bénéficiaire "brute" de l'activité, indépendamment de la façon dont l'entreprise est financée. Particulièrement utile pour comparer des entreprises d'un même secteur avec des structures de capital différentes.\n\nL'EBITDA est utilisé dans deux ratios importants : le ratio Dette nette/EBITDA (mesure du niveau d'endettement) et le multiple EV/EBITDA (mesure de valorisation). Sa limite : il exclut les capex, qui peuvent être très élevés dans certains secteurs — c'est pourquoi le Free Cash Flow lui est souvent préféré.`,
    related: ['dette-ebitda', 'ev-ebitda', 'free-cash-flow', 'marge-nette'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "ev-ebitda",
    label: "EV/EBITDA",
    category: 'Analyse fondamentale',
    shortDef: "Un multiple de valorisation qui compare la valeur totale de l'entreprise (dette incluse) à sa rentabilité opérationnelle.",
    definition: `L'EV/EBITDA (Enterprise Value / EBITDA) est un multiple de valorisation plus complet que le PER car il intègre la dette dans le calcul. L'Enterprise Value (EV) = capitalisation boursière + dette nette — cash.\n\nAvantage sur le PER : il permet de comparer des entreprises avec des structures financières différentes (l'une fortement endettée, l'autre sans dette) sur un pied d'égalité. Particulièrement utile dans les secteurs où l'endettement est structurel (immobilier, infrastructures, télécoms).\n\nComme le PER, l'EV/EBITDA n'a de sens qu'en comparaison sectorielle. Une entreprise tech à EV/EBITDA 20 peut être bon marché. Une entreprise d'utilité publique à EV/EBITDA 20 peut être chère. Toujours contextualiser.`,
    related: ['ebitda', 'per-valorisation', 'dette-ebitda', 'capitalisation-boursiere'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "fcf-yield",
    label: "FCF Yield — Rendement du Free Cash Flow",
    category: 'Analyse fondamentale',
    shortDef: "Le Free Cash Flow rapporté à la capitalisation boursière ou à l'Enterprise Value — indicateur de rendement réel.",
    definition: `Le FCF Yield (rendement du Free Cash Flow) compare le Free Cash Flow généré par une entreprise à sa valeur de marché. Deux formules existent selon le contexte : FCF Yield = FCF / Capitalisation boursière (point de vue actionnaire), ou FCF Yield = FCF / Enterprise Value (point de vue global, neutralise l'effet de la trésorerie nette).\n\nC'est un indicateur de valorisation inverse du P/FCF : un FCF Yield de 5 % correspond à un P/FCF de 20. Plus le FCF Yield est élevé, plus l'action est potentiellement bon marché par rapport au cash qu'elle génère.\n\nComparaison avec le taux sans risque : si le FCF Yield d'une action passe en dessous du taux des obligations d'État américaines à 10 ans, cela signifie que l'investisseur prend un risque actions sans être compensé par un rendement supérieur à l'actif sans risque. Microsoft et Alphabet ont tous deux vu leur FCF Yield passer sous le taux US 10 ans en 2024-2025 — signal que le marché price une forte croissance future du FCF pour justifier la prime.`,
    related: ['free-cash-flow', 'p-fcf', 'wacc', 'dcf', 'marge-de-securite'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "free-cash-flow",
    label: "Free Cash Flow (FCF)",
    category: 'Analyse fondamentale',
    shortDef: "L'argent réellement disponible après investissements — le vrai indicateur de la santé financière d'une entreprise.",
    definition: `Le Free Cash Flow (FCF) est la trésorerie générée par l'activité après déduction des dépenses d'investissement nécessaires à la maintien et au développement du business (capex). C'est l'argent qui reste réellement disponible.\n\nC'est l'indicateur le plus honnête de la santé financière d'une entreprise. Le chiffre d'affaires peut être gonflé par de la dette, les bénéfices comptables peuvent être manipulés via des écritures. Le FCF, lui, représente l'argent en banque.\n\nCritère à vérifier : FCF positif et croissant sur 5 ans. Un FCF positif est ce qui permet de payer les dividendes, racheter des actions (rachats qui augmentent mécaniquement le BPA), rembourser la dette ou financer de la croissance.`,
    related: ['bpa', 'marge-nette', 'dette-ebitda', 'moat'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "integrated-power",
    label: "Integrated Power (puissance intégrée)",
    category: 'Analyse fondamentale',
    theme: 'energie',
    shortDef: "Segment de production d'électricité bas carbone — renouvelables, gaz et stockage — développé par les grandes compagnies énergétiques dans le cadre de leur transition.",
    definition: `L'Integrated Power désigne la stratégie par laquelle des compagnies énergétiques historiquement fossiles développent des capacités de production d'électricité bas carbone : énergie solaire, éolien terrestre et offshore, centrales à gaz pour l'électricité, et solutions de stockage.\n\nCe modèle "intégré" vise à couvrir toute la chaîne de valeur électrique — production, transport et vente — plutôt que de se spécialiser sur un seul maillon. Il permet de sécuriser des revenus via des contrats long terme (Power Purchase Agreements, PPA) avec des industriels ou des États.\n\nPour un investisseur, l'Integrated Power représente une optionnalité de transformation : si la transition énergétique s'accélère, les compagnies ayant investi tôt dans ces capacités bénéficient d'un avantage concurrentiel. Si elle est plus lente, les CAPEX engagés pèsent sur le rendement à court terme.`,
    related: ['gnl', 'stranded-assets', 'scope-3', 'capex'],
    modules: [],
  },
  {
    slug: "levier-operationnel",
    label: "Levier opérationnel",
    category: 'Analyse fondamentale',
    shortDef: "La capacité d'une entreprise à augmenter ses bénéfices plus vite que son chiffre d'affaires grâce à une base de coûts fixes.",
    definition: `Le levier opérationnel mesure la sensibilité du résultat opérationnel aux variations du chiffre d'affaires. Une entreprise avec un fort levier opérationnel voit ses bénéfices croître beaucoup plus vite que ses revenus quand elle monte en charge — et baisser beaucoup plus vite en cas de repli.\n\nMécanique : si les coûts fixes représentent une large part de la structure de coûts, chaque euro de revenus supplémentaire contribue presque entièrement au bénéfice (les coûts variables étant faibles). C'est le modèle du cloud et du SaaS : construire l'infrastructure coûte cher, mais servir un client supplémentaire coûte presque rien.\n\nAlphabet l'illustre parfaitement sur Google Cloud : entre 2022 et 2025, le CA cloud a progressé de 77 % pendant que les dépenses ne montaient que de 43 % — un écart de 34 points qui révèle le levier opérationnel en action. L'implication pour l'investisseur : à mesure qu'un segment cloud mature, sa marge s'améliore structurellement sans effort proportionnel.`,
    related: ['marge-nette', 'capex', 'saas', 'roic'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "marge-brute",
    label: "Marge brute",
    category: 'Analyse fondamentale',
    shortDef: "Le pourcentage du chiffre d'affaires restant après déduction des coûts directs de production ou d'achat.",
    definition: `La marge brute est le premier niveau de rentabilité d'une entreprise. Elle mesure ce qui reste du chiffre d'affaires après avoir soustrait le coût des marchandises vendues (CMV) ou le coût de production. Formule : Marge brute = (CA − Coût des ventes) / CA × 100.\n\nElle révèle le pricing power fondamental d'une activité : une marge brute élevée signifie que l'entreprise vend nettement au-dessus de ses coûts directs, qu'elle contrôle bien ses achats, ou que ses produits ont une valeur perçue forte. Une marge brute stable ou croissante dans un contexte d'inflation sur les matières premières est le signe d'un vrai pouvoir de fixation des prix.\n\nImportant : la marge brute n'est pas universellement comparable entre secteurs. Un groupe comme Visa n'a pas de "coût des ventes" au sens industriel (marge brute proche de 97 %), quand une entreprise de distribution alimentaire peut tourner à 25-30 %. La comparaison n'a de sens qu'entre pairs directs.`,
    related: ['marge-nette', 'marge-operationnelle', 'pricing-power', 'ebitda'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "marge-de-securite",
    label: "Marge de sécurité (Margin of Safety)",
    category: 'Analyse fondamentale',
    shortDef: "L'écart entre la valeur intrinsèque estimée d'une action et son prix de marché actuel.",
    definition: `La marge de sécurité (Margin of Safety, MOS) est un concept fondamental de l'investissement value, popularisé par Benjamin Graham. Elle représente l'écart entre la valeur intrinsèque estimée d'une entreprise et son cours de bourse actuel.\n\nFormule : MOS = (Valeur intrinsèque − Prix actuel) / Valeur intrinsèque × 100. Une MOS positive signifie que l'action est décotée — tu achètes avec un coussin de sécurité. Une MOS négative signifie que l'action est surévaluée.\n\nPourquoi est-elle essentielle ? Parce que toute valorisation est une estimation, jamais une certitude. La marge de sécurité compense les erreurs d'analyse, les imprévus et la volatilité des marchés. Warren Buffett la résume ainsi : acheter un billet de 1 € pour 0,50 €.\n\nNiveaux pratiques : MOS < 15 % = faible (patience recommandée), MOS 15-30 % = correcte, MOS > 30 % = attractive pour un investisseur value. En bio-pharma ou technologie à forte incertitude, viser 25-35 % minimum.`,
    related: ['per-valorisation', 'ev-ebitda', 'free-cash-flow', 'roic'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "marge-nette",
    label: "Marge nette",
    category: 'Analyse fondamentale',
    shortDef: "Le pourcentage du chiffre d'affaires qui reste en bénéfice net après toutes les charges.",
    definition: `La marge nette est le ratio qui mesure combien de centimes de bénéfice net restent pour chaque euro de chiffre d'affaires. Formule : Marge nette = Bénéfice net / Chiffre d'affaires × 100.\n\nRéférences indicatives : > 10 % = correct, > 20 % = excellent, > 30 % = rarissime et caractéristique d'entreprises à Moat exceptionnel (Apple, ASML, Hermès).\n\nUne marge nette élevée signifie que l'entreprise a du pricing power — elle peut maintenir ses prix même en période d'inflation. Une marge nette faible (< 5 %) rend l'entreprise vulnérable à tout choc sur ses coûts. À analyser en tendance sur 5 ans, pas comme une photo à un instant T.`,
    related: ['free-cash-flow', 'bpa', 'moat', 'chiffre-affaires'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "marge-operationnelle",
    label: "Marge opérationnelle",
    category: 'Analyse fondamentale',
    shortDef: "Le pourcentage du chiffre d'affaires restant après toutes les charges opérationnelles, avant intérêts et impôts.",
    definition: `La marge opérationnelle (ou marge EBIT) mesure la rentabilité de l'exploitation d'une entreprise après déduction de tous ses coûts opérationnels : coûts de production, frais de personnel, dépenses marketing, R&D, amortissements. Elle exclut les charges financières (intérêts) et l'impôt. Formule : Marge opérationnelle = EBIT / CA × 100.\n\nC'est l'indicateur de rentabilité le plus utilisé pour comparer des entreprises d'un même secteur, car il est indépendant de leur structure de financement (dette ou fonds propres) et de leur environnement fiscal. Une marge opérationnelle en progression signifie que l'entreprise améliore son efficacité ou son pricing power plus vite qu'elle ne supporte de nouvelles charges.\n\nLa distance entre marge brute et marge opérationnelle révèle le poids des coûts de structure : marketing, R&D, administration. Pour L'Oréal, une marge brute de 74 % et une marge opérationnelle de 20 % signifient que 54 points sont absorbés par ces postes — principalement les dépenses publicitaires et la R&D, deux moteurs du moat.`,
    related: ['marge-brute', 'marge-nette', 'ebitda', 'roic', 'nopat'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "mix-produit",
    label: "Mix produit",
    category: 'Analyse fondamentale',
    shortDef: "Évolution de la composition des ventes d'une entreprise entre ses différentes gammes, qui influence mécaniquement la marge.",
    definition: `Le mix produit désigne la répartition des ventes d'une entreprise entre ses différentes catégories de produits ou services, chacune ayant un niveau de marge différent. Quand la part des produits les plus rentables augmente dans le total des ventes, on parle d'effet mix favorable — et la marge globale progresse même si les volumes et les prix restent stables.\n\nC'est un levier de création de valeur souvent sous-estimé. Une entreprise peut voir sa rentabilité s'améliorer simplement parce que ses clients achètent davantage de ses offres haut de gamme, ou parce qu'un segment à forte marge prend du poids dans le CA total.\n\nDans l'analyse fondamentale, l'évolution du mix produit est une variable clé pour comprendre pourquoi une marge progresse ou recule indépendamment des volumes ou des prix. Un investisseur averti distingue toujours l'effet volume, l'effet prix et l'effet mix dans l'explication de la dynamique de rentabilité.`,
    related: ['ebit', 'marge-brute', 'marge-operationnelle', 'levier-operationnel'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "multiple-de-valorisation",
    label: "Multiple de valorisation",
    category: 'Analyse fondamentale',
    shortDef: "Un ratio qui met en relation le prix d'un actif avec une mesure de sa valeur économique — PER, EV/EBITDA, P/FCF.",
    definition: `Un multiple de valorisation compare le prix auquel le marché valorise une entreprise à une mesure de sa performance économique. Les plus courants : le PER (Prix / Bénéfice), l'EV/EBITDA (Valeur d'entreprise / EBITDA), le P/FCF (Prix / Free Cash Flow).\n\nLe niveau d'un multiple n'est jamais absolu — il n'a de sens qu'en comparaison : par rapport à l'historique de l'entreprise, par rapport à ses pairs sectoriels, et par rapport au taux sans risque. Un PER de 15 est cher pour une utility stable, raisonnable pour une entreprise technologique en croissance de 20 % par an.\n\nLa compression des multiples est l'un des principaux risques d'une action chère : si le marché accepte de payer 30 fois les bénéfices aujourd'hui mais n'en accepte plus que 20 demain, le cours peut baisser de 30 % même si les bénéfices progressent. C'est pourquoi la marge de sécurité est essentielle quand les multiples sont élevés.`,
    related: ['per-valorisation', 'ev-ebitda', 'p-fcf', 'marge-de-securite', 'roic'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "net-price",
    label: "Net Price (prix net)",
    category: 'Analyse fondamentale',
    theme: 'pharma-sante',
    shortDef: "Le prix réellement encaissé par un laboratoire pharmaceutique après déduction de toutes les remises accordées aux intermédiaires.",
    definition: `Dans l'industrie pharmaceutique américaine, le "gross price" (prix affiché) et le "net price" (prix réel) sont radicalement différents. Le net price est ce que le laboratoire encaisse effectivement après avoir accordé les remises aux PBM, assureurs et pharmacies.\n\nL'écart entre les deux peut être très important — pour certains médicaments, les remises représentent 40 à 60 % du prix affiché. C'est pourquoi la croissance du chiffre d'affaires brut d'un laboratoire peut être trompeuse : si les remises augmentent, la croissance réelle encaissée est plus faible.\n\nLe net price est un indicateur clé à surveiller pour évaluer la santé commerciale d'un médicament sur le marché américain. Son évolution dans le temps révèle la dynamique concurrentielle et le rapport de force avec les intermédiaires.`,
    related: ['pbm', 'glp-1', 'marge-nette'],
    modules: [],
  },
  {
    slug: "ocf",
    label: "OCF - Operating Cash Flow",
    category: 'Analyse fondamentale',
    shortDef: "Le cash généré par les opérations courantes de l'entreprise avant investissements et financements — mesure brute de la puissance de génération de trésorerie.",
    definition: `L'Operating Cash Flow (OCF), ou cash-flow opérationnel, mesure le montant de trésorerie généré par les activités opérationnelles d'une entreprise sur une période donnée. C'est la ligne de départ du tableau des flux de trésorerie.\n\nFormule simplifiée : OCF = Résultat net + Amortissements et dépréciations ± Variations du besoin en fonds de roulement ± Autres éléments non-cash.\n\nL'OCF est la mesure brute de la capacité de génération de trésorerie avant les décisions d'investissement (capex) et de financement (dette, dividendes, rachats). Il est supérieur au résultat net pour les entreprises à forte base d'actifs amortissables (les amortissements sont une charge non-cash réintégrée), et peut lui être inférieur pour des entreprises à fort besoin en fonds de roulement.\n\nLa relation OCF → FCF est décisive pour l'analyste : FCF = OCF − Capex. Pour Alphabet en 2025, l'OCF de 165 milliards de dollars était impressionnant, mais le capex de 91 milliards le réduisait à un FCF de seulement 73 milliards — le ratio Capex/OCF de 55 % explique à lui seul l'essentiel de la compression du FCF Yield.`,
    related: ['free-cash-flow', 'capex', 'fcf-yield', 'bfr', 'ebitda'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "p-fcf",
    label: "P/FCF — Price to Free Cash Flow",
    category: 'Analyse fondamentale',
    shortDef: "Le ratio qui compare le prix de l'action au Free Cash Flow généré par action.",
    definition: `Le P/FCF (Price to Free Cash Flow) est un multiple de valorisation qui divise le cours de l'action par le Free Cash Flow par action. Il complète le PER en utilisant le FCF plutôt que le bénéfice comptable — ce qui le rend moins manipulable par les choix comptables d'amortissement.\n\nFormule : P/FCF = Prix de l'action / FCF par action. Un P/FCF de 15 signifie que tu paies 15 fois le cash réellement généré par action. C'est souvent préféré au PER dans les secteurs à fort CAPEX (énergie, industrie, télécoms) où les amortissements peuvent déformer le bénéfice net.\n\nGrille de lecture sectorielle : les entreprises énergétiques matures traitent souvent à P/FCF 8-12, les entreprises technologiques à 20-40. Comme tous les multiples, il n'a de sens qu'en comparaison sectorielle et dans la durée.`,
    related: ['free-cash-flow', 'per-valorisation', 'ev-ebitda', 'capex'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "payout-ratio",
    label: "Payout Ratio",
    category: 'Analyse fondamentale',
    shortDef: "La part des bénéfices nets distribuée aux actionnaires sous forme de dividendes.",
    definition: `Le Payout Ratio (taux de distribution) mesure la proportion du bénéfice net reversée aux actionnaires via les dividendes. Formule : Payout Ratio = Dividende par action / BPA × 100.\n\nInterprétation : un ratio de 40 % signifie que l'entreprise distribue 40 % de ses bénéfices et conserve 60 % pour réinvestir. Un ratio trop élevé (> 80-90 %) peut signaler un dividende fragile. Un ratio faible (< 30 %) indique une entreprise qui préfère réinvestir sa croissance.\n\nAttention : le Payout Ratio basé sur les bénéfices comptables peut être trompeur. Le ratio FCF Payout (dividende / Free Cash Flow) est plus fiable — il mesure si le dividende est réellement couvert par l'argent généré. TotalEnergies affiche un Payout Ratio de 55 % avec un dividende couvert 1,32× par le FCF — une couverture correcte mais à surveiller en bas de cycle.`,
    related: ['dividende', 'free-cash-flow', 'bpa', 'rachat-actions'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "peg",
    label: "PEG - Price/Earnings to Growth",
    category: 'Analyse fondamentale',
    shortDef: "Ratio qui met en regard le PER d'une action et son taux de croissance attendu des bénéfices — un PEG inférieur à 1 signale une action potentiellement sous-évaluée par rapport à sa croissance.",
    definition: `Le PEG ratio (Price-to-Earnings-to-Growth) est un indicateur de valorisation qui rapporte le PER (Price-to-Earnings) d'une action à son taux de croissance attendu des bénéfices par action sur une période donnée.\n\nFormule : PEG = PER / Taux de croissance annuel du BPA (en %)\n\nExemple : une action avec un PER de 25x et une croissance du BPA de 12,5 % par an affiche un PEG de 2,0x. Une action avec un PER de 15x et une croissance de 15 % par an affiche un PEG de 1,0x.\n\nRègle empirique popularisée par Peter Lynch :\n- PEG < 1 : l'action est potentiellement sous-évaluée par rapport à sa croissance\n- PEG = 1 : valorisation alignée sur la croissance\n- PEG > 1 : prime de valorisation, justifiée ou non par des facteurs qualitatifs\n\nLimites du PEG : le ratio est très sensible au taux de croissance retenu (consensus, historique, normalisé). Une croissance de faible qualité ou non soutenable peut conduire à un PEG apparemment attractif. De plus, le PEG ignore la structure financière et peut être trompeur pour des entreprises avec des effets de levier très différents.`,
    related: ['per-valorisation', 'bpa', 'dcf'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "per-valorisation",
    label: "PER — Price-to-Earnings Ratio",
    category: 'Analyse fondamentale',
    shortDef: "Le ratio cours/bénéfice : combien de fois les bénéfices annuels tu paies pour acheter l'action.",
    definition: `Le PER (Price-to-Earnings Ratio) est le ratio de valorisation le plus utilisé en bourse. Il se calcule en divisant le prix de l'action par le bénéfice par action (BPA) : PER = Prix / BPA. Un PER de 20 signifie que tu paies 20 ans de bénéfices actuels.\n\nL'interprétation du PER dépend fortement du secteur et du taux de croissance de l'entreprise. Les fourchettes normales varient : une banque française tourne à PER 8–12, une entreprise technologique à forte croissance peut afficher un PER 30–50 sans être nécessairement surévaluée si ses bénéfices croissent vite.\n\nRègle de base : comparer le PER d'une entreprise à celui de ses concurrents directs, pas à un "PER universel". Un PER bas n'est pas automatiquement une bonne affaire — il peut signaler des problèmes réels.`,
    related: ['bpa', 'ev-ebitda', 'marge-nette', 'stock-picking'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "ptc-nucleaire",
    label: "PTC Nucléaire — Production Tax Credit",
    category: 'Analyse fondamentale',
    theme: 'energie',
    shortDef: "Crédit d'impôt américain accordé par l'Inflation Reduction Act de 2022 aux producteurs d'électricité nucléaire existante, calculé en fonction de l'écart entre le prix de marché et un prix plancher garanti.",
    definition: `Le Production Tax Credit (PTC) nucléaire est un mécanisme de soutien à la production d'énergie nucléaire introduit par l'Inflation Reduction Act américain de 2022 (Section 45U). Il entre en vigueur le 1er janvier 2024 pour les réacteurs nucléaires existants aux États-Unis.\n\nLe mécanisme est conçu comme un plancher de revenus inversement corrélé aux prix de marché. Lorsque le prix moyen annuel de l'électricité sur les marchés de gros est inférieur à un seuil défini (environ 25 $/MWh en 2024, indexé à l'inflation), le producteur perçoit un crédit d'impôt par MWh produit pour combler l'écart. Lorsque les prix de marché sont élevés, le PTC est réduit voire nul : l'entreprise bénéficie directement des prix de marché favorables.\n\nCet asymétrie crée une structure de rémunération qui limite le downside sans plafonner le upside : si les prix s'effondrent, le PTC compense ; si les prix flambent, le producteur en bénéficie intégralement. Pour l'analyste, le PTC transforme une entreprise cyclique pure (exposée à la volatilité des prix spot) en actif présentant un plancher réglementaire sur les revenus — ce qui justifie une prime de valorisation par rapport à un producteur sans ce mécanisme.`,
    related: ['stranded-assets', 'integrated-power', 'ppa', 'take-or-pay', 'capex'],
    modules: [],
  },
  {
    slug: "rachat-actions",
    label: "Rachat d'actions (Buyback)",
    category: 'Analyse fondamentale',
    shortDef: "Quand une entreprise rachète ses propres actions sur le marché, réduisant mécaniquement le nombre de titres en circulation.",
    definition: `Un rachat d'actions (share buyback) se produit quand une entreprise utilise sa trésorerie pour racheter ses propres titres sur le marché boursier. Les actions rachetées sont généralement annulées, ce qui réduit le nombre total de titres en circulation.\n\nEffet mécanique immédiat : en divisant le bénéfice net par un nombre d'actions plus faible, le BPA augmente mécaniquement — même si le bénéfice total n'a pas changé. C'est pourquoi les rachats sont souvent perçus comme un signal positif par le marché.\n\nQuand est-ce intelligent ? Quand l'action est sous-évaluée. Racheter ses propres titres décotés est la meilleure allocation de capital possible. Quand est-ce problématique ? Quand l'entreprise rachète à des prix élevés, s'endette pour financer les rachats, ou sacrifie ses investissements en CAPEX nécessaires à long terme.`,
    related: ['bpa', 'dividende', 'payout-ratio', 'free-cash-flow'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "roce",
    label: "ROCE — Return on Capital Employed",
    category: 'Analyse fondamentale',
    shortDef: "Le rendement du capital effectivement employé dans l'exploitation, incluant la trésorerie et les actifs non financiers.",
    definition: `Le ROCE (Return on Capital Employed) mesure la rentabilité d'une entreprise par rapport au capital total qu'elle emploie dans son activité. Formule : ROCE = Résultat opérationnel (EBIT) / Capital employé, où capital employé = Total actifs − Passifs courants.\n\nDifférence avec le ROIC : le ROIC se concentre sur le capital investi (fonds propres + dette nette), en excluant la trésorerie excédentaire. Le ROCE intègre l'ensemble des actifs employés, trésorerie comprise. Pour une entreprise qui détient une trésorerie massive, le ROCE est mécaniquement plus faible que le ROIC, car la trésorerie gonfle le dénominateur sans nécessairement contribuer au résultat opérationnel.\n\nLes deux métriques sont complémentaires : le ROIC mesure l'efficacité du capital alloué par les actionnaires et créanciers, le ROCE mesure l'efficacité de l'ensemble de l'appareil productif. Quand les deux divergent significativement, cela révèle souvent une trésorerie importante ou des actifs peu productifs dans le bilan.`,
    related: ['roic', 'wacc', 'free-cash-flow', 'marge-operationnelle'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "roic",
    label: "ROIC — Return on Invested Capital",
    category: 'Analyse fondamentale',
    shortDef: "Le rendement généré par l'entreprise sur chaque euro de capital investi dans son activité.",
    definition: `Le ROIC (Return on Invested Capital) mesure l'efficacité avec laquelle une entreprise utilise le capital qui lui est confié — fonds propres et dette — pour générer des bénéfices. Formule simplifiée : ROIC = Résultat opérationnel net après impôt (NOPAT) / Capital investi.\n\nC'est l'un des indicateurs les plus puissants de l'analyse fondamentale. Un ROIC supérieur au WACC signifie que l'entreprise crée de la valeur — chaque euro investi en rapporte davantage qu'il ne coûte. Un ROIC inférieur au WACC signifie que l'entreprise détruit de la valeur, même si elle est profitable.\n\nNiveaux de référence : ROIC < 8 % = performances médiocres, ROIC 10-15 % = bon, ROIC > 20 % = excellent (souvent signe d'un Moat solide). ASML affiche un ROIC > 30 %, Novo Nordisk > 25 % — des niveaux qui reflètent des avantages concurrentiels structurels.\n\nSuivre le ROIC sur 5 ans révèle si l'entreprise maintient ou érode son avantage concurrentiel dans le temps.`,
    related: ['wacc', 'moat', 'free-cash-flow', 'marge-nette', 'capex'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "roiic",
    label: "ROIIC — Return on Incremental Invested Capital",
    category: 'Analyse fondamentale',
    shortDef: "Le rendement généré par les nouveaux capitaux investis sur une période donnée, distinct du ROIC historique.",
    definition: `Le ROIIC (Return on Incremental Invested Capital) mesure l'efficacité des nouveaux investissements réalisés sur une période donnée, contrairement au ROIC qui reflète le rendement de l'ensemble du capital accumulé historiquement. Formule : ROIIC = Variation du NOPAT / Variation du Capital investi.\n\nC'est un indicateur avancé particulièrement utile pour évaluer si les Capex actuels vont créer de la valeur. Un ROIIC > WACC sur les investissements récents signifie que l'entreprise alloue bien son capital marginal. Un ROIIC < WACC sur les nouveaux Capex est un signal d'alerte.\n\nLa comparaison ROIIC sur plusieurs fenêtres temporelles (1 an, 2 ans, 4 ans) révèle le délai de maturation des investissements. Microsoft affiche un ROIIC > 14 % sur toutes les fenêtres et un pic à 2 ans — ce qui indique que ses Capex mettent environ 2 ans à générer leur plein rendement.`,
    related: ['roic', 'wacc', 'capex', 'free-cash-flow'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "scope-3",
    label: "Scope 3 (émissions indirectes)",
    category: 'Analyse fondamentale',
    theme: 'esg-climat',
    shortDef: "Les émissions de CO₂ induites par l'utilisation des produits vendus — souvent la part la plus importante de l'empreinte carbone d'une entreprise.",
    definition: `Le bilan carbone d'une entreprise se décompose en trois "scopes" selon le protocole GHG (Greenhouse Gas Protocol). Le Scope 1 couvre les émissions directes des installations propres. Le Scope 2 couvre les émissions liées à l'énergie achetée. Le Scope 3 couvre toutes les autres émissions indirectes — en amont (extraction des matières premières, transport) et en aval (utilisation des produits par les clients).\n\nPour la plupart des entreprises, le Scope 3 est de loin le plus significatif. Dans le secteur pétrolier, l'essentiel des émissions survient quand les clients brûlent le pétrole et le gaz achetés. Dans l'industrie automobile, elles surviennent pendant l'utilisation du véhicule.\n\nLa réglementation sur le Scope 3 est en cours de durcissement — notamment via la directive CSRD européenne. Son intégration croissante dans les bilans carbone représente un risque réglementaire et de réputation à anticiper dans l'analyse des entreprises à forte intensité carbone indirecte.`,
    related: ['stranded-assets', 'integrated-power', 'gnl'],
    modules: [],
  },
  {
    slug: "stranded-assets",
    label: "Stranded Assets (actifs échoués)",
    category: 'Analyse fondamentale',
    theme: 'energie',
    shortDef: "Actifs qui perdent de la valeur avant la fin de leur durée de vie économique prévue — risque majeur pour les entreprises exposées à la transition énergétique.",
    definition: `Les stranded assets (actifs échoués ou dépréciés anticipés) sont des actifs inscrits au bilan d'une entreprise qui risquent de perdre tout ou partie de leur valeur avant d'avoir été entièrement amortis, en raison d'une évolution réglementaire, technologique ou de marché imprévue.\n\nLe terme s'est imposé dans le secteur énergétique pour désigner les réserves fossiles (pétrole, gaz, charbon) susceptibles de ne jamais être exploitées si les politiques climatiques contraignaient fortement l'usage des énergies carbonées avant leur amortissement comptable.\n\nCe risque affecte également d'autres secteurs : une usine automobile dimensionnée pour les moteurs thermiques peut devenir un stranded asset si l'électrique s'impose plus vite que prévu. Identifier les actifs les plus exposés dans un bilan est une étape clé de l'analyse des risques extra-financiers.`,
    related: ['gnl', 'scope-3', 'integrated-power', 'marge-de-securite'],
    modules: [],
  },
  {
    slug: "tac",
    label: "TAC (Total Acquisition Cost)",
    category: 'Analyse fondamentale',
    theme: 'energie',
    shortDef: "Coût complet d'acquisition d'une unité de réserve pétrolière ou gazière, incluant exploration, développement et acquisitions — exprimé en $/baril équivalent pétrole.",
    definition: `Le TAC (Total Acquisition Cost) désigne le coût complet supporté par une compagnie pétrolière pour mettre en production une unité de réserve d'hydrocarbures. Il s'exprime généralement en dollars par baril d'équivalent pétrole ($/boe) et intègre trois composantes : les coûts d'exploration, les coûts de développement des puits et des infrastructures, et les éventuelles acquisitions de réserves sur le marché.\n\nUn TAC bas indique que la compagnie trouve et développe ses réserves à moindre coût — avantage concurrentiel direct dans un secteur où le prix de vente est dicté par le marché mondial. Un TAC élevé signifie que la rentabilité dépend fortement d'un prix du baril soutenu.\n\nComparer le TAC d'une compagnie à ses concurrents et au prix spot du pétrole ou du gaz permet d'évaluer sa marge de sécurité opérationnelle et sa capacité à rester rentable en bas de cycle.`,
    related: ['marge-brute-d-autofinancement', 'capex', 'roic', 'moat'],
    modules: [],
  },
  {
    slug: "zone-juste",
    label: "Zone juste",
    category: 'Analyse fondamentale',
    shortDef: "Prix d'achat d'aujourd'hui qui permet d'obtenir un rendement annualisé cible si le prix cible est atteint à horizon.",
    definition: `La zone juste est le prix d'entrée implicite pour qu'un investisseur obtienne exactement son rendement annualisé exigé (r) si le titre atteint son prix cible à l'horizon défini. Elle s'obtient en actualisant le prix cible au taux r sur la durée de l'horizon : Zone juste = Prix cible / (1 + r)^n.\n\nSi l'on achète à la zone juste et que le prix cible est atteint à horizon n ans, le rendement annualisé sera exactement r. Si l'on achète en dessous de la zone juste, le rendement sera supérieur à r. D'où l'intérêt d'appliquer une marge de sécurité à la zone juste : entrer à zone juste × (1 - MoS) garantit un rendement supérieur au taux exigé en cas de scénario favorable.\n\nContrairement à la marge de sécurité appliquée au prix cible, la marge de sécurité appliquée à la zone juste a une interprétation économique directe : chaque point de MoS supplémentaire se traduit mécaniquement en rendement annualisé additionnel pour l'investisseur.`,
    related: ['marge-de-securite', 'dcf', 'per-valorisation', 'wacc', 'taux-sans-risque'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
    {
    slug: 'fog',
    label: 'FOG (Fiber Optic Gyroscope)',
    category: 'Analyse fondamentale',
    theme: 'defense-aerospatiale',
    shortDef: "Gyroscope à fibre optique, technologie de capteur inertiel utilisé dans les centrales de navigation haute précision.",
    definition: `Le FOG (Fiber Optic Gyroscope, gyroscope à fibre optique) est un type de gyroscope qui mesure la rotation en exploitant l'effet Sagnac : deux faisceaux lumineux circulent en sens opposés dans une boucle de fibre optique, et toute rotation du dispositif crée un déphasage entre les deux faisceaux, proportionnel à la vitesse de rotation.
 
Contrairement aux gyroscopes mécaniques traditionnels, le FOG n'a aucune pièce mobile, ce qui lui confère une durée de vie très longue, une fiabilité exceptionnelle, et l'absence de dérive mécanique. C'est l'une des trois grandes technologies de gyroscopes haute précision utilisées dans les centrales de navigation inertielle pour applications militaires et spatiales, avec le gyroscope laser à anneau (RLG) et les capteurs MEMS de haute performance.
 
Le FOG est particulièrement adapté aux environnements exigeants (sous-marins, espace, drones autonomes) où le signal GPS est indisponible ou dégradé. Cette indépendance vis-à-vis du GPS est devenue une exigence critique pour les forces armées dans un contexte de brouillage électronique généralisé. Les acteurs mondiaux capables de produire des centrales FOG à grade militaire haute précision sont peu nombreux : Northrop Grumman, Honeywell, Exail Technologies et dans une moindre mesure Safran Electronics & Defense.`,
    related: ['roic'],
    modules: [],
  },
  {
    slug: 'mcm',
    label: 'MCM (Mine Counter Measures)',
    category: 'Analyse fondamentale',
    theme: 'defense-aerospatiale',
    shortDef: "Lutte anti-mines navales : ensemble des moyens militaires destinés à détecter et neutraliser les mines sous-marines.",
    definition: `Le MCM (Mine Counter Measures, lutte anti-mines) regroupe l'ensemble des moyens et techniques militaires destinés à détecter, classifier, identifier et neutraliser les mines sous-marines. Les mines navales sont des armes asymétriques peu coûteuses qui peuvent paralyser le trafic maritime stratégique d'une nation entière (détroits, ports, voies commerciales).
 
Historiquement, la lutte anti-mines reposait sur des navires "chasseurs de mines" équipés de sonars haute résolution et de plongeurs démineurs. La nouvelle génération MCM (depuis les années 2010) repose sur des systèmes de drones autonomes (USV de surface, AUV sous-marins, ROV téléopérés) qui éloignent les opérateurs de la zone dangereuse et permettent un déminage plus rapide et plus sûr.
 
Le marché mondial du MCM est estimé à environ 3 Md€ sur les 15 prochaines années, avec un parc de plus de 300 navires chasseurs de mines en service dont 70 % âgés de plus de 20 ans qui devront être remplacés ou modernisés d'ici 2030. Exail Technologies est un leader mondial sur ce segment via son offre intégrée UMIS (USV + AUV + ROV + logiciel UMISOFT), illustrée par le contrat commun belgo-néerlandais (BENL) pour les marines belge et néerlandaise.`,
    related: ['fog'],
    modules: [],
  },
  {
    slug: 'bitd',
    label: 'BITD (Base Industrielle et Technologique de Défense)',
    category: 'Analyse fondamentale',
    theme: 'defense-aerospatiale',
    shortDef: "Ensemble des entreprises produisant des biens et services nécessaires à la défense d'un pays ou d'un ensemble géopolitique.",
    definition: `La BITD (Base Industrielle et Technologique de Défense) désigne l'ensemble des entreprises, à capitaux publics ou privés, qui produisent les biens et services nécessaires à la défense d'un pays. Le concept recouvre les grands intégrateurs systèmes (Thales, Naval Group, MBDA, BAE Systems, Lockheed Martin), les équipementiers de niveau 1 (Safran, Hensoldt, Kongsberg, Northrop Grumman), les fournisseurs spécialisés de composants critiques (Exail sur la navigation inertielle, Exosens sur la photonique sécuritaire), et un tissu de PME et ETI sous-traitantes.
 
La BITD européenne a vécu plusieurs décennies de sous-investissement après la fin de la guerre froide, avec une dépendance technologique croissante vis-à-vis des États-Unis sur plusieurs briques critiques (GPS, électronique embarquée, satellites). Le retour de la guerre en Europe (Ukraine 2022) a relancé l'effort d'investissement et la priorité à la souveraineté technologique, traduits dans plusieurs initiatives européennes : loi de programmation militaire française 2024-2030, règlement européen EDIRPA (acquisition conjointe), règlement européen ASAP (montée en cadence munitions).
 
Pour un investisseur, la BITD européenne offre un cycle d'investissement structurel pluriannuel à horizon 2028-2030, porté par l'objectif OTAN de 2 % du PIB en dépenses de défense (plusieurs pays visant désormais 3 %+).`,
    related: ['cieemg', 'mcm'],
    modules: [],
  },
  {
    slug: 'odirnane',
    label: 'ODIRNANE',
    category: 'Analyse fondamentale',
    shortDef: "Obligation à durée indéterminée remboursable en numéraire ou en actions, instrument hybride entre dette et capitaux propres.",
    definition: `L'ODIRNANE (Obligation à Durée Indéterminée Remboursable en Numéraire ou en Actions Nouvelles ou Existantes) est un instrument financier hybride, à mi-chemin entre la dette et les capitaux propres. Trois caractéristiques principales le définissent.
 
Premièrement, la durée indéterminée : pas de maturité fixe contractuelle. L'émetteur dispose de "call dates" périodiques (typiquement à 5, 7 ou 10 ans) où il peut choisir de rembourser tout ou partie de l'instrument. S'il choisit de ne pas rembourser, l'instrument continue indéfiniment.
 
Deuxièmement, le remboursement à l'option de l'émetteur : à chaque call date, l'émetteur peut rembourser en numéraire (cash) ou en actions nouvelles ou existantes. Cette optionnalité protège l'émetteur en cas de tension de trésorerie ou de besoin de préserver le bilan.
 
Troisièmement, le coupon : payable annuellement en cash. L'émetteur peut généralement suspendre le coupon en cas de stress financier sans déclencher de défaut, ce qui en fait un instrument plus flexible qu'une obligation classique. Le coupon est typiquement plus élevé que la dette senior pour rémunérer ce risque, mais inférieur aux instruments mezzanines ou obligataires high yield.
 
Au plan comptable IFRS, si l'émetteur peut éviter perpétuellement le remboursement en cash, l'ODIRNANE est classée en capitaux propres et non en dette. Le coupon est alors traité comme un dividende préférentiel (distribution de capitaux propres), pas comme une charge financière du compte de résultat. Les agences de notation rattrapent ce traitement en reconnaissant typiquement 50 % d'equity credit sur ce type d'instrument.
 
Exail Technologies a émis 552 M€ d'ODIRNANE en deux tranches (septembre 2025 et janvier 2026) pour refinancer la dette bancaire post-iXblue et solder les engagements ICG et les minoritaires hérités de la fusion.`,
    related: ['purchase-price-allocation'],
    modules: [],
  },
  {
    slug: 'purchase-price-allocation',
    label: 'Purchase Price Allocation (PPA)',
    category: 'Analyse fondamentale',
    shortDef: "Allocation comptable du prix d'acquisition d'une société entre ses actifs identifiables, le solde formant le goodwill. À distinguer du Power Purchase Agreement (utilities).",
    definition: `La PPA (Purchase Price Allocation, allocation du prix d'acquisition) est un exercice comptable obligatoire après l'acquisition d'une société. Selon les normes IFRS (notamment IFRS 3), l'acquéreur doit répartir le prix payé entre les différents actifs et passifs identifiables de la cible, valorisés à leur juste valeur (et non à leur valeur comptable historique).
 
Cette répartition fait apparaître généralement trois composantes : les actifs tangibles (immobilisations corporelles), les actifs incorporels identifiables (marques, brevets, relations clients, technologies, carnets de commandes) qui n'étaient pas comptabilisés au bilan de la cible, et le goodwill résiduel (différence entre le prix payé et la somme des justes valeurs des actifs nets identifiables).
 
Les actifs incorporels identifiés par la PPA s'amortissent ensuite sur leur durée d'utilité estimée (typiquement 5 à 20 ans selon la nature), créant une charge d'amortissement supplémentaire qui plombe le résultat comptable de l'acquéreur pendant plusieurs exercices après l'acquisition. C'est une distorsion à connaître pour les investisseurs : le BPA publié post-acquisition est mécaniquement abaissé par cette charge non-cash, sans que la performance économique réelle ne soit affectée. Pour évaluer correctement la rentabilité économique post-fusion, il convient de reconstituer un BPA normalisé en réintégrant la charge d'amortissement PPA x (1 - taux d'IS).
 
Pour Exail Technologies, la PPA générée par l'acquisition d'iXblue (2022) a fait apparaître environ 244 M€ d'actifs incorporels (technologies FOG, relations clients défense, marques) amortis sur plusieurs exercices, soit une charge récurrente d'environ 18 M€/an qui plombe le résultat publié jusqu'en 2030 environ.
 
**Distinction importante** : la PPA Purchase Price Allocation (fusion-acquisition, slug 'purchase-price-allocation') ne doit pas être confondue avec le PPA Power Purchase Agreement (contrat d'achat d'électricité dans les utilities, slug 'ppa'). Ces deux termes partagent le même acronyme mais relèvent de domaines distincts.`,
    related: ['odirnane'],
    modules: [],
  },
  {
    slug: 'industrie-4-0',
    label: 'Industrie 4.0',
    category: 'Analyse fondamentale',
    theme: 'automation-industrielle',
    shortDef: "Quatrième révolution industrielle, qui désigne la transformation numérique des usines via l'intégration verticale des systèmes de production.",
    definition: `L'Industrie 4.0 est un concept qui désigne la transformation numérique des usines via l'intégration verticale de l'ensemble des systèmes de production : capteurs connectés, automates programmables (PLC), supervision en temps réel (HMI / SCADA), MES (Manufacturing Execution System), maintenance prédictive, jumeau numérique, cybersécurité OT et analytique cloud. La promesse est de faire émerger une usine connectée et autonome capable d'optimiser ses opérations en temps réel.

Le concept naît en Allemagne au début des années 2010 sous l'impulsion du gouvernement fédéral et du programme Industrie 4.0, lancé officiellement en 2011. L'objectif est alors de préserver la compétitivité de l'industrie allemande face à la montée en gamme des acteurs asiatiques, en misant sur l'intégration numérique plutôt que sur la délocalisation. Le concept est rapidement adopté à l'échelle mondiale par les éditeurs d'automation industrielle, qui restructurent leur offre autour de cette logique d'intégration verticale.

Pour un investisseur, la maîtrise complète de la stack 4.0 (du capteur au cloud) constitue une barrière à l'entrée structurelle dans l'automatisation industrielle. Les acteurs qui doivent recourir à des partenaires pour combler les briques manquantes (Schneider avec Aveva, Siemens avec SAP) sont en position relative plus faible que ceux qui possèdent une chaîne intégralement propriétaire, situation rare sur le marché coté.`,
    related: ['plc', 'mes', 'iot-industriel', 'operational-technology'],
    modules: [],
  },

  {
    slug: 'industrie-5-0',
    label: 'Industrie 5.0',
    category: 'Analyse fondamentale',
    theme: 'automation-industrielle',
    shortDef: "Évolution de l'Industrie 4.0 ajoutant collaboration humain-machine, durabilité énergétique et résilience customizable des chaînes de production.",
    definition: `L'Industrie 5.0 est une évolution du concept Industrie 4.0 qui ajoute trois dimensions à l'usine connectée. La première est la collaboration humain-machine, matérialisée notamment par les robots collaboratifs (dits cobots) qui partagent l'espace de travail avec les opérateurs sans cage de protection. La deuxième est la durabilité énergétique, qui couvre l'efficience énergétique des équipements, le suivi des émissions carbone et l'économie circulaire à l'échelle de l'usine. La troisième est la résilience customizable des chaînes de production, c'est-à-dire la capacité à reconfigurer rapidement l'outil industriel pour s'adapter aux ruptures de supply chain ou aux changements de demande.

Le concept est promu par la Commission européenne à partir de 2021, dans le prolongement du Green Deal européen et de la stratégie de souveraineté industrielle. À la différence du concept Industrie 4.0 d'origine allemande centré sur l'efficacité, l'Industrie 5.0 met l'humain et la soutenabilité au cœur de la trajectoire de modernisation.

Pour un investisseur, l'Industrie 5.0 est encore en phase de structuration commerciale mais ses briques sont déjà valorisées par le marché. Les acteurs les mieux positionnés sur la 5.0 sont ABB et FANUC sur la robotique collaborative, Schneider Electric sur l'automatisation énergétique, et les grands intégrateurs systèmes sur la résilience. Les acteurs centrés sur l'Industrie 4.0 sans extension 5.0 (Rockwell Automation par exemple) peuvent rater une partie de la prochaine vague de valeur ajoutée si le concept devient le standard d'achat des prochaines générations d'usines.`,
    related: ['industrie-4-0'],
    modules: [],
  },

  {
    slug: 'plc',
    label: 'PLC (Automate programmable industriel)',
    category: 'Analyse fondamentale',
    theme: 'automation-industrielle',
    shortDef: "Programmable Logic Controller, ordinateur industriel dédié au pilotage en temps réel des machines sur une ligne de production.",
    definition: `Un PLC (Programmable Logic Controller) est un ordinateur industriel dédié au pilotage en temps réel des machines et procédés sur une ligne de production. Il reçoit les signaux issus des capteurs disposés sur l'installation, exécute une logique de contrôle programmée par les ingénieurs automaticiens, et envoie en retour des commandes aux actionneurs (moteurs, vannes, vérins, robots). Les langages de programmation utilisés sont historiquement le ladder logic (graphique, inspiré des schémas de relais électromécaniques), le structured text (proche du Pascal) et le function block (graphique, par blocs fonctionnels), normalisés par la norme internationale IEC 61131-3.

Les principales plateformes mondiales sont ControlLogix et CompactLogix de Rockwell Automation (commercialisées sous la marque Allen-Bradley) qui dominent le marché nord-américain avec environ 60 à 65 % de part de marché, SIMATIC S7 de Siemens qui domine le marché européen, Modicon de Schneider Electric, et MELSEC de Mitsubishi qui domine le marché asiatique. Le langage de programmation de chaque plateforme est propriétaire et non portable d'un éditeur à l'autre.

Pour un investisseur, la plateforme PLC choisie par une usine structure son écosystème logiciel et sa main-d'œuvre sur 20 à 25 ans en raison des coûts de migration élevés (réécriture intégrale du code, reformation des équipes, risque opérationnel). C'est cette friction qui crée les coûts de changement structurels qui constituent le moat principal des éditeurs d'automation industrielle, et notamment de Rockwell sur le marché américain.`,
    related: ['industrie-4-0', 'operational-technology', 'couts-de-changement'],
    modules: [],
  },

  {
    slug: 'mes',
    label: 'MES (Manufacturing Execution System)',
    category: 'Analyse fondamentale',
    theme: 'automation-industrielle',
    shortDef: "Système logiciel d'exécution manufacturing faisant l'interface entre les automates de production et les systèmes de gestion d'entreprise.",
    definition: `Un MES (Manufacturing Execution System) est un système logiciel d'exécution manufacturing qui fait l'interface entre les automates de production (couche basse, PLC) et les systèmes de gestion d'entreprise (couche haute, ERP). Le MES suit en temps réel la production (ordres de fabrication, traçabilité, qualité, performance des équipements via l'OEE pour Overall Equipment Effectiveness), planifie les opérations à court terme, et fournit les données opérationnelles consolidées aux dirigeants d'usine et aux ingénieurs procédés.

Les principales plateformes MES sont Plex Systems (acquis par Rockwell Automation en août 2021 pour 2,2 Md$, SaaS multi-tenant), Aveva (filiale de Schneider Electric depuis 2018), SAP Manufacturing Cloud et Oracle Manufacturing Cloud. Les plateformes SAP et Oracle bénéficient d'une intégration native avec leurs ERP respectifs, ce qui constitue un avantage pour les clients déjà équipés ; les plateformes spécialisées comme Plex et Aveva offrent une plus grande profondeur fonctionnelle.

Le MES en SaaS multi-tenant est une catégorie en forte croissance qui modifie progressivement le mix de revenu des éditeurs d'automation industrielle. Le passage du modèle perpétuel (licence vendue une fois) au modèle abonnement améliore la visibilité du revenu et la qualité du compte de résultat, mais nécessite une phase d'investissement préalable lors de la bascule.`,
    related: ['industrie-4-0', 'saas'],
    modules: [],
  },

  {
    slug: 'iot-industriel',
    label: 'IoT industriel',
    category: 'Analyse fondamentale',
    theme: 'automation-industrielle',
    shortDef: "Internet of Things appliqué au secteur industriel, qui collecte et analyse les données issues des équipements de production.",
    definition: `L'IoT industriel (parfois abrégé IIoT pour Industrial Internet of Things) désigne l'ensemble des capteurs connectés, passerelles de communication et plateformes cloud qui collectent et analysent les données issues des équipements de production. À la différence de l'IoT grand public (objets connectés domestiques, wearables), l'IoT industriel opère dans des environnements contraints (latence faible, fiabilité élevée, sécurité OT) et sur des cycles de vie longs (10 à 20 ans contre 2 à 5 ans côté grand public).

Les cas d'usage les plus courants sont la maintenance prédictive (détection de défaillances avant la panne à partir de signatures vibratoires, thermiques ou électriques), l'optimisation énergétique (suivi en temps réel de la consommation par équipement), la traçabilité fine des flux de production et l'optimisation des paramètres procédés. Les plateformes de référence sont ThingWorx de PTC (partenariat exclusif avec Rockwell Automation aux États-Unis depuis 2018), MindSphere de Siemens, et EcoStruxure de Schneider Electric.

Pour un investisseur, la couche IoT est l'un des étages clés de la stack Industrie 4.0. Les acteurs qui possèdent une plateforme IoT propriétaire ou un partenariat exclusif sur leur marché géographique principal disposent d'un avantage de positionnement durable, alors que les acteurs dépendants de partenariats non exclusifs sont en position relative plus faible.`,
    related: ['industrie-4-0', 'plc', 'mes'],
    modules: [],
  },

  {
    slug: 'operational-technology',
    label: 'OT (Operational Technology)',
    category: 'Analyse fondamentale',
    theme: 'automation-industrielle',
    shortDef: "Technologie opérationnelle, par opposition à l'IT, désignant les systèmes hardware et software qui pilotent les opérations physiques d'une usine.",
    definition: `L'OT (Operational Technology) désigne l'ensemble des systèmes hardware et software qui pilotent les opérations physiques d'une usine ou d'une infrastructure critique : automates programmables, supervision (HMI / SCADA), équipements de sécurité industrielle, capteurs et actionneurs. L'OT s'oppose conceptuellement à l'IT (Information Technology) qui gère les systèmes d'information administratifs (ERP, CRM, messagerie, gestion documentaire). La frontière entre OT et IT s'est progressivement estompée avec l'avènement de l'Industrie 4.0 et la connexion des équipements industriels aux réseaux d'entreprise.

La cybersécurité OT (Operational Technology Security) est une catégorie distincte de la cybersécurité IT classique. Elle protège des équipements industriels souvent anciens (cycles de vie de 20 à 30 ans), sensibles aux interruptions (une attaque sur un PLC peut arrêter une ligne de production ou créer un risque de sécurité physique), et opérant en temps réel sur des réseaux fermés ou peu connectés à internet. Les acteurs spécialisés sont Claroty (estimé à 7 Md$ de valorisation privée), Nozomi Networks et Dragos. Les éditeurs d'automation industrielle intègrent progressivement la cybersécurité OT à leur offre, Rockwell ayant fait l'acquisition d'Oylo en 2020 et d'Avnet Data Security en 2020.

Pour un investisseur, la convergence IT / OT est une thématique structurelle de la décennie 2020-2030, avec un marché de la cybersécurité OT estimé à plus de 30 Md$ à horizon 2030 selon les analyses sectorielles.`,
    related: ['industrie-4-0', 'plc'],
    modules: [],
  },

  {
    slug: 'lifecycle-services',
    label: 'Lifecycle Services',
    category: 'Analyse fondamentale',
    theme: 'automation-industrielle',
    shortDef: "Catégorie de services industriels qui couvre l'ensemble du cycle de vie d'une installation, du déploiement à la maintenance.",
    definition: `Les Lifecycle Services désignent une catégorie de services industriels qui couvre l'ensemble du cycle de vie d'une installation : audit et conception en amont, déploiement et intégration des systèmes, formation des opérateurs, maintenance préventive et corrective, modernisation à mi-vie, gestion de l'obsolescence et démantèlement en fin de vie. Le périmètre est plus large que la simple maintenance, car il inclut les phases de conseil amont et de transformation digitale (cybersécurité OT, migration cloud, mise en conformité réglementaire).

Chez les éditeurs d'automation industrielle, ce segment monétise la base installée d'équipements en générant des revenus récurrents et à plus forte valeur ajoutée que la vente de matériel seul. Le modèle économique est différent du modèle hardware : la barrière à l'entrée tient à la connaissance fine des équipements installés, au lien de proximité avec les opérateurs et à la disponibilité de la main-d'œuvre certifiée sur les plateformes propriétaires (Allen-Bradley, SIMATIC, EcoStruxure).

La marge structurelle des Lifecycle Services se situe généralement entre 10 et 15 % d'EBIT, inférieure à celle du software (>25 %) mais avec une visibilité contractuelle longue (contrats pluriannuels de maintenance, accords cadres avec les grands opérateurs industriels). Le segment joue un rôle de monétisation de la rente d'installé plutôt que de moteur de croissance organique, mais son intérêt stratégique reste de fidéliser les clients industriels sur l'écosystème complet de l'éditeur.`,
    related: ['mco', 'mro'],
    modules: [],
  },

  {
    slug: 'ism-pmi',
    label: 'ISM Manufacturing PMI',
    category: 'Analyse fondamentale',
    theme: 'macroeconomie',
    shortDef: "Purchasing Managers Index manufacturier américain publié mensuellement, indicateur composite et avancé du cycle industriel US.",
    definition: `L'ISM Manufacturing PMI (Purchasing Managers Index) est un indice composite publié chaque mois par l'Institute for Supply Management aux États-Unis. Il est construit à partir d'une enquête mensuelle auprès de plus de 400 directeurs des achats de l'industrie manufacturière américaine, qui mesure cinq composantes : l'évolution des nouvelles commandes, de la production, de l'emploi, des délais de livraison fournisseurs et des stocks. L'indice composite est exprimé sur une échelle de 0 à 100.

Un PMI supérieur à 50 signale une expansion de l'activité manufacturing par rapport au mois précédent, un PMI inférieur à 50 signale une contraction. Les seuils interprétatifs sont les suivants : un PMI durablement supérieur à 52-53 signale une expansion soutenue, un PMI compris entre 48 et 52 signale une zone d'incertitude (croissance faible ou stagnation), un PMI inférieur à 48 signale une contraction franche assimilable à une récession industrielle.

L'ISM Manufacturing PMI est l'un des meilleurs indicateurs avancés du cycle industriel américain. Il anticipe le cycle d'investissement des opérateurs manufacturing (capex en machines, automation industrielle, équipements de production) avec un décalage typique de 6 à 9 mois. Pour un investisseur exposé au secteur de l'automatisation industrielle (Rockwell Automation, Emerson Electric, ABB, Schneider Electric), c'est un signal de positionnement dans le cycle. Un passage durable au-dessus de 52-53 confirme la phase d'expansion ; un repli sous 48-49 signale le prochain ralentissement.`,
    related: ['cagr', 'inflation', 'levier-operationnel'],
    modules: [],
  },



// -------------------------------------------------------
// 2. Asset-based fees — Frais proportionnels aux encours
// -------------------------------------------------------
{
  slug:     'asset-based-fees',
  label:    'Asset-based fees',
  category: 'Analyse fondamentale',
  theme:    'finance-paiements',
  shortDef: "Commission calculée en pourcentage des actifs sous gestion (AUM), versée périodiquement par un gestionnaire de fonds à un fournisseur d'indices, de données ou de solutions d'investissement.",
  definition: `Les asset-based fees (ou frais basés sur les encours) sont des revenus calculés en proportion des actifs sous gestion (AUM) placés dans des produits financiers qui utilisent une licence ou un service donné. Ils constituent un modèle tarifaire distinct des abonnements fixes.

Le mécanisme est simple : si 100 Mds$ d'AUM répliquent un indice MSCI World, et que la commission contractuelle est de 0,025 % par an, le revenu annuel généré est de 25 M$. Ce revenu évolue mécaniquement avec la valeur des marchés financiers : il monte quand les marchés montent, sans effort commercial supplémentaire.

Ce modèle crée un levier naturel sur les revenus : le prestataire de l'indice ou du service n'a pas à signer de nouveaux contrats pour voir ses revenus progresser si les AUM augmentent via l'appréciation des actifs. A l'inverse, une correction de marché réduit temporairement les revenus même si le nombre de clients reste stable.

Les asset-based fees sont caractéristiques des fournisseurs d'indices (MSCI, S&P Global, FTSE Russell), des gestionnaires d'actifs actifs (frais de gestion en pourcentage des encours), et des dépositaires. Pour les fournisseurs d'indices, la combinaison asset-based fees + abonnements récurrents génère un profil de revenus à forte visibilité avec un levier opérationnel élevé.`,
  related:  ['encours', 'etf', 'indice-boursier', 'fcf-yield', 'pricing-power'],
  modules:  [
    { label: 'Analyse fondamentale', href: '/academie/intermediaire/analyse-fondamentale' },
  ],
},
 // ── rpo : Remaining Performance Obligations ───────────────────────────────
  {
    slug:     'rpo',
    label:    "RPO - Remaining Performance Obligations",
    category: 'Analyse fondamentale',
    theme:    'finance-paiements',
    shortDef: "Carnet de commandes contractuel non encore reconnu en chiffre d'affaires.",
    definition: `Les Remaining Performance Obligations (RPO) representent le montant total des revenus contractes par une entreprise SaaS ou B2B mais non encore reconnu comptablement en chiffre d'affaires. Cette metrique inclut le deferred revenue (deja facture) et les montants non-cancellable qui seront factures et reconnus dans les exercices futurs. Le RPO est divulgue trimestriellement par les acteurs SaaS et fournit une visibilite long terme sur le pipeline contractuel.

Le RPO se distingue du backlog comptable classique par sa rigueur normative : ASC 606 / IFRS 15 impose une definition unifiee qui exclut les contrats annulables sans penalite et les arrangements en mode "right to invoice" (time & material). Pour un SaaS pur avec contrats pluriannuels engagement ferme, le RPO peut representer 2 a 3 annees de chiffre d'affaires, signal de qualite du moat.

Une variante cle : le current RPO (cRPO) represente la fraction du RPO qui sera reconnue dans les 12 prochains mois. Le cRPO est l'indicateur le plus suivi par les analystes : son taux de croissance trimestriel est un leading indicator des prochaines guidances de chiffre d'affaires. Un cRPO en croissance plus rapide que le CA suggere une acceleration des signatures recentes ; un cRPO ralenti signale une potentielle decelaration future.

Pour ServiceNow, le RPO atteint 28,2 Md$ fin 2025 (+27 % YoY) avec un cRPO de 13,0 Md$ (+25 % YoY), soit l'equivalent de 2,1 annees de CA sous contrat. Le cRPO couvre a lui seul 82 % de la guidance Subscription 2026, ce qui limite mecaniquement le risque d'ecart entre guidance et realisation.`,
    related:  ['backlog', 'saas', 'free-cash-flow', 'moat'],
    modules:  [],
  },

  // ── billings : facturations ───────────────────────────────────────────────
  {
    slug:     'billings',
    label:    "Billings - facturations",
    category: 'Analyse fondamentale',
    theme:    'finance-paiements',
    shortDef: "Chiffre d'affaires augmenté de la variation du revenu différé : mesure ce qui a été facturé sur la période, pas ce qui a été reconnu.",
    definition: `Les billings (ou facturations) mesurent ce qu'une entreprise a facturé sur une période, et non ce qu'elle a reconnu en chiffre d'affaires. Ils se calculent comme le chiffre d'affaires de la période augmenté de la variation du revenu différé (deferred revenue) entre le début et la fin de période. Pour un acteur de l'abonnement, c'est un indicateur avancé de la demande : un client qui signe un contrat paye d'avance, ce qui gonfle les billings avant même que le revenu ne soit reconnu au prorata temporis.

Les billings sont particulièrement suivis pendant les phases de transition du modèle de facturation. Lorsqu'une entreprise fait migrer ses contrats pluriannuels payés d'avance vers une facturation annuelle, ses billings se dégonflent mécaniquement (elle facture une année au lieu de trois d'un coup), même si la demande sous-jacente est intacte. C'est ce qui rend la métrique trompeuse hors contexte : il faut toujours la lire à la lumière du modèle de facturation en vigueur.

Exemple chez Autodesk : lors de la bascule du paiement pluriannuel d'avance vers la facturation annuelle (FY2024 à FY2026), les billings sont passés sous le chiffre d'affaires reconnu en FY2024, avant de rebondir une fois la transition digérée. Le chiffre d'affaires, lui, est resté lisse, ce qui illustre que pendant une transition de facturation, c'est la trésorerie et les billings qui sont bruités, pas le revenu.`,
    related:  ['rpo', 'deferred-revenue', 'saas', 'free-cash-flow'],
    modules:  [],
  },

  // ── net-revenue-retention : taux de rétention nette du revenu ──────────────
  {
    slug:     'net-revenue-retention',
    label:    "NRR - Net Revenue Retention",
    category: 'Analyse fondamentale',
    theme:    'finance-paiements',
    shortDef: "Croissance du revenu récurrent issu de la seule base de clients existants, d'une année sur l'autre : expansion moins attrition.",
    definition: `Le taux de rétention nette du revenu (Net Revenue Retention, NRR, parfois noté NR3 ou Dollar-Based Net Retention) mesure la croissance du revenu récurrent générée par la seule base de clients existants, d'une année sur l'autre. Il se calcule en divisant le revenu récurrent du trimestre courant issu des clients présents un an plus tôt par le revenu récurrent de ces mêmes clients douze mois auparavant. Les nouveaux clients ne sont pas comptés : la métrique isole la dynamique de la base installée.

Un NRR supérieur à 100 % signifie que l'expansion (montées en gamme, modules supplémentaires, hausses de prix) l'emporte sur l'attrition et les réductions de contrat : la base de clients existants croît d'elle-même, sans coût d'acquisition. C'est l'une des signatures les plus fiables de la qualité d'un moat d'abonnement et de la profondeur des coûts de changement. Les meilleurs acteurs SaaS affichent un NRR durablement supérieur à 110 %.

La métrique doit être lue avec son contexte : un NRR ponctuellement gonflé par un changement de modèle commercial ou tarifaire n'a pas la même valeur qu'un NRR structurellement élevé. Chez Autodesk, le NRR dépasse 110 % à change constant en FY2026, en partie sous l'effet du nouveau modèle de transaction, et le management le guide en retour vers une fourchette de 100 à 110 % une fois cet effet dissipé.`,
    related:  ['arr', 'rpo', 'saas', 'moat'],
    modules:  [],
  },

  // ── arr : Annual Recurring Revenue ────────────────────────────────────────
  {
    slug:     'arr',
    label:    "ARR - Annual Recurring Revenue",
    category: 'Analyse fondamentale',
    theme:    'finance-paiements',
    shortDef: "Chiffre d'affaires recurrent annualise issu des abonnements actifs.",
    definition: `L'Annual Recurring Revenue (ARR) est une metrique non-GAAP utilisee principalement par les SaaS B2B pour mesurer le chiffre d'affaires recurrent annualise issu des abonnements actifs a une date donnee. L'ARR se calcule comme la somme des valeurs annuelles de tous les contrats d'abonnement en cours a un instant T, normalisees sur 12 mois.

L'ARR se distingue du chiffre d'affaires comptable de plusieurs facons : il exclut les revenus non-recurrents (Professional Services, implementation one-shot, frais ponctuels), il prend en compte les contrats signes mais pas encore factures, et il est snapshot a date donnee (pas un cumul sur une periode). C'est une metrique forward-looking qui mesure la base contractuelle a un moment precis.

Les variations d'ARR se decomposent typiquement en quatre composantes : New ARR (nouveaux clients), Expansion ARR (clients existants qui ajoutent des modules), Churn ARR (clients qui partent), Contraction ARR (clients qui reduisent leur abonnement). La somme Net New ARR (New + Expansion - Churn - Contraction) est le veritable indicateur de la dynamique commerciale.

L'ARR ne doit pas etre confondu avec le RPO : l'ARR est une projection annualisee de la base instantanee, le RPO est un montant total contractuel qui inclut la duree complete des contrats pluriannuels.`,
    related:  ['saas', 'rpo', 'mix-produit'],
    modules:  [],
  },

  // ── sbc : Stock-Based Compensation ────────────────────────────────────────
  {
    slug:     'sbc',
    label:    "SBC - Stock-Based Compensation",
    category: 'Analyse fondamentale',
    theme:    'finance-paiements',
    shortDef: "Remuneration des employes en actions, RSU ou stock options.",
    definition: `La Stock-Based Compensation (SBC) designe la fraction de la remuneration des employes versee sous forme d'actions, de RSU (Restricted Stock Units), de PSU (Performance Stock Units) ou de stock options, en lieu et place d'une remuneration cash. La SBC est une charge comptable GAAP qui reduit le resultat operationnel publie, mais qui ne consomme pas de tresorerie - d'ou son caractere souvent debattu dans la lecture des marges.

La SBC est massivement utilisee par les acteurs tech US, en particulier les SaaS et les semi-conducteurs, pour deux raisons : attirer et retenir les talents dans un marche du travail tendu (la part variable equity peut representer 30 a 60 % de la remuneration totale d'un ingenieur senior dans la Silicon Valley) et preserver le cash pour le reinvestissement. Pour les SaaS en hypergrowth, la SBC depasse couramment 15 % du chiffre d'affaires.

Le debat analytique central porte sur le traitement de la SBC dans les metriques Non-GAAP. Les directions financieres tendent a l'exclure du calcul des marges et BPA Non-GAAP, en arguant qu'il s'agit d'une charge non-cash. Les investisseurs rigoureux considerent au contraire que la SBC est une charge bien reelle - elle dilue le capital et constitue une remuneration directe aux employes. La convention la plus rigoureuse (et celle adoptee par les fiches La These) est de garder la SBC dans les charges recurrentes pour la lecture des marges et du BPA ajuste.

L'impact economique de la SBC depend du programme de rachat d'actions : si l'entreprise rachete autant d'actions qu'elle en emet via la SBC, la dilution nette est neutralisee mais le cash est ponctionne. Une SBC a 15 % du CA non compensee par les rachats represente une dilution structurelle de 1,5 a 3 % par an du capital.

Pour ServiceNow, la SBC ressort a 1 955 M$ en FY2025 (14,7 % du CA), en baisse continue proportionnelle depuis 2021 (19,2 %). Elle est largement compensee par le programme de rachat (1 840 M$ en 2025), ce qui limite la dilution nette annuelle a moins de 0,5 %.`,
    related:  ['rsu', 'dilution', 'bpa'],
    modules:  [],
  },

  // ── acv : Annual Contract Value ───────────────────────────────────────────
  {
    slug:     'acv',
    label:    "ACV - Annual Contract Value",
    category: 'Analyse fondamentale',
    theme:    'finance-paiements',
    shortDef: "Valeur annuelle moyenne d'un contrat client pour un acteur SaaS.",
    definition: `L'Annual Contract Value (ACV) represente la valeur annualisee d'un contrat client SaaS. Pour un contrat pluriannuel, l'ACV se calcule en divisant le Total Contract Value (TCV) par la duree en annees du contrat. C'est une metrique qui sert a comparer la taille des clients independamment de la duree contractuelle signee.

Les acteurs SaaS utilisent generalement l'ACV pour segmenter leur base clients : les "large enterprises" sont typiquement definies comme des clients avec un ACV superieur a un seuil (souvent 100 k$ ou 1 M$ selon la maturite du segment). La croissance du nombre de clients a haute ACV est un indicateur cle de l'expansion upmarket et de la captation de comptes strategiques.

L'ACV se distingue de l'ARR : l'ARR est une metrique snapshot pour l'ensemble de la base clients, l'ACV est une metrique par contrat individuel. Pour un client avec plusieurs contrats actifs, on parle generalement de Customer ACV total, qui est la somme des ACV de chaque contrat actif.

Pour ServiceNow, le nombre de clients avec un ACV superieur a 5 M$ a augmente de 420 fin 2023 a 603 fin 2025, soit une croissance de 43 % en deux ans. Cette metrique materialise l'expansion upmarket de la plateforme et est l'un des signaux les plus robustes de la captation de comptes Fortune 500.`,
    related:  ['arr', 'saas', 'rpo'],
    modules:  [],
  },

   {
    slug:     'prime-de-risque',
    label:    'Prime de risque actions (ERP)',
    category: 'Analyse fondamentale',
    shortDef: "Rendement supplémentaire exigé pour détenir des actions plutôt que l'actif sans risque.",
    definition: `La prime de risque actions, souvent désignée par son sigle anglais ERP (Equity Risk Premium), est le rendement supplémentaire qu'un investisseur exige pour accepter le risque de détenir des actions plutôt que de placer son argent dans un actif considéré comme sans risque (typiquement une obligation d'État de référence). C'est l'une des trois briques du coût des capitaux propres dans le modèle CAPM : coût des fonds propres = taux sans risque + bêta × prime de risque.

Concrètement, si les actions ne rapportaient pas davantage que les obligations d'État, personne n'accepterait leur volatilité : la prime de risque est la récompense de ce risque. Plus elle est élevée, plus le coût du capital de l'entreprise grimpe, et plus la valeur actualisée de ses flux futurs baisse.

Sur les fiches La Thèse, la prime de risque retenue est celle publiée par le professeur Aswath Damodaran pour un marché mûr. Pour un pays présentant un risque pays supérieur à celui des marchés les plus sûrs, on ajoute une prime de risque pays (CRP, Country Risk Premium). Pour APR Corporation, la prime retenue est de 4,65 % : 4,23 % de prime marché mûr plus 0,42 % de CRP Corée du Sud.`,
    related:  ['wacc', 'beta', 'taux-sans-risque', 'dcf'],
    modules:  [],
  },

  {
    slug:     'pdrn',
    label:    'PDRN (polydésoxyribonucléotide)',
    category: 'Analyse fondamentale',
    theme:    'luxe-consommation',
    shortDef: "Actif cosmétique de régénération cutanée, ingrédient héros de la marque Medicube.",
    definition: `Le PDRN (polydésoxyribonucléotide) est un actif cosmétique composé de fragments d'ADN, le plus souvent extraits de laitance de saumon. Il est utilisé dans les soins de la peau pour ses propriétés revendiquées de régénération cellulaire, d'hydratation et d'apaisement. C'est un ingrédient phare de la cosmétique coréenne, popularisé d'abord par des usages dérivés de la médecine esthétique.

Pour APR Corporation, le PDRN est l'ingrédient héros de la marque Medicube : le groupe revendique plus de 50 millions d'unités de produits PDRN vendues en cumulé. C'est autour de cet actif que s'est construite l'identité dermo-cosmétique de la marque et une partie de son pouvoir de fixation des prix.

Point d'analyse important : le PDRN n'est pas une molécule exclusive à APR. Il est utilisé par de nombreuses marques et reste largement accessible via l'écosystème de sous-traitance coréen. Il constitue donc un argument marketing et un facteur de notoriété, mais pas une barrière concurrentielle protégée : c'est un avantage d'exécution, pas un actif intangible défendable au sens d'un moat.`,
    related:  ['moat', 'pricing-power', 'k-beauty'],
    modules:  [],
  },

  {
    slug:     'k-beauty',
    label:    'K-beauty (cosmétique coréenne)',
    category: 'Analyse fondamentale',
    theme:    'luxe-consommation',
    shortDef: "Vague des produits et routines de soin issus de Corée du Sud, en forte expansion à l'export.",
    definition: `La K-beauty (Korean beauty) désigne l'ensemble des produits, marques et routines de soin issus de Corée du Sud. Le terme recouvre une approche de la beauté centrée sur le soin de la peau (skincare), des formulations innovantes, des routines en plusieurs étapes et un rythme de lancement de produits très rapide. La Corée du Sud est devenue l'un des premiers pôles mondiaux d'innovation cosmétique.

Depuis le milieu des années 2010, la K-beauty connaît une vague d'expansion internationale, d'abord en Asie puis aux États-Unis et en Europe. Cette dynamique est portée par l'influence culturelle coréenne plus large (musique, séries, contenus sociaux) et par un excellent rapport qualité-prix perçu. Pour des marques comme Medicube (APR Corporation), cette vague a permis de prendre des parts de marché significatives à l'export en quelques trimestres.

Point d'analyse important pour l'investisseur : la K-beauty relève en partie d'un cycle de mode. La dynamique actuelle peut se prolonger plusieurs années comme se retourner, car elle repose sur l'engouement culturel autant que sur la performance produit. Une marque qui surfe sur cette vague sans barrière concurrentielle propre est exposée au risque de mode : c'est un moteur de croissance puissant mais non garanti dans la durée.`,
    related:  ['moat', 'pdrn', 'travel-retail', 'pricing-power'],
    modules:  [],
  },

  {
    slug:     'deferred-revenue',
    label:    'Produits constates d\'avance (deferred revenue)',
    category: 'Analyse fondamentale',
    shortDef: "Encaissement recu d'un client avant que le service ne soit rendu : une dette envers le client, inscrite au passif, qui finance le besoin en fonds de roulement.",
    definition: `Le deferred revenue (produits constates d'avance) correspond a l'argent deja encaisse aupres d'un client pour un service qui n'a pas encore ete rendu. Comptablement, c'est un passif : l'entreprise doit encore livrer la prestation. Au fur et a mesure de l'execution, ce passif se transforme en chiffre d'affaires.

Pour un modele d'abonnement, le deferred revenue est un signal de qualite a double titre. D'abord, il materialise la visibilite : les revenus futurs sont deja encaisses et contractes. Ensuite, il finance gratuitement l'exploitation : le client prepaie, ce qui cree un besoin en fonds de roulement negatif (les clients financent l'entreprise plutot que l'inverse).

Chez OTC Markets, le deferred revenue depasse 33 M$ et provient surtout des abonnements annuels OTCQX, factures et encaisses au quatrieme trimestre pour l'annee suivante. C'est la vraie source de l'avantage de fonds de roulement de la societe, bien plus que le cycle clients-fournisseurs classique. C'est aussi ce qui explique la forte saisonnalite de sa tresorerie (haute en fin d'annee, basse au premier trimestre).`,
    related:  ['working-capital', 'bfr', 'saas', 'free-cash-flow'],
    modules:  [],
  },
{
    slug:     'tri',
    label:    'TRI (Taux de Rendement Interne)',
    category: 'Analyse fondamentale',
    shortDef: "Rendement annualise attendu d'un investissement : le taux qui egalise le prix paye aujourd'hui et la valeur actualisee des flux futurs (dividendes plus revente).",
    definition: `Le TRI (Taux de Rendement Interne, internal rate of return ou IRR en anglais) est le rendement annualise qu'un investissement est cense delivrer. C'est le taux d'actualisation qui rend la valeur actuelle des flux futurs (dividendes encaisses, puis prix de revente a l'horizon) exactement egale au prix paye aujourd'hui.

Le TRI est un angle de lecture complementaire de la zone juste. Plutot que de demander "a quel prix dois-je acheter pour obtenir le rendement exige ?", il inverse la question : "au cours actuel, quel rendement vais-je obtenir si mon scenario se realise ?". Un TRI implicite superieur au rendement exige signale une opportunite ; inferieur, une survalorisation.

Il est particulierement utile quand le DCF et le calculateur PER divergent fortement. Calculer le taux d'actualisation qui justifie exactement le cours observe (le WACC implicite ou cout des fonds propres implicite) revele le rendement que le marche exige reellement, qui peut differer du WACC theorique issu du modele d'evaluation des actifs financiers (CAPM), notamment pour les petites valeurs peu liquides.`,
    related:  ['dcf', 'zone-juste', 'wacc', 'marge-de-securite'],
    modules:  [],
  },
  {
    slug: "gross-bookings",
    label: "Gross Bookings (volume brut)",
    category: 'Analyse fondamentale',
    shortDef: "Le volume brut total des transactions traitées par une plateforme, taxes et frais inclus, avant reversement aux partenaires.",
    definition: `Les Gross Bookings désignent la valeur totale des transactions intermédiées par une place de marché ou une plateforme, taxes et frais inclus, avant tout reversement aux chauffeurs, livreurs, commerçants ou transporteurs. Chez Uber, ils agrègent la valeur des courses Mobility, des commandes Delivery et du fret.\n\nC'est l'indicateur de taille et de dynamique commerciale d'une plateforme : il mesure le volume d'affaires réellement traité, là où le chiffre d'affaires comptable ne retient souvent que la commission prélevée. Le rapport entre le chiffre d'affaires et les Gross Bookings définit le take rate (taux de prise) de la plateforme.\n\nUne plateforme peut afficher des Gross Bookings très supérieurs à son chiffre d'affaires : Uber traite environ 193 Md$ de Gross Bookings pour 52 Md$ de revenus en 2025, soit un take rate global de l'ordre de 27 %. Suivre la croissance des Gross Bookings, segment par segment, révèle la vitalité de la plateforme avant les effets de mix et de taux de commission.`,
    related: ['chiffre-affaires', 'effet-de-reseau', 'asset-light'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "prime-de-risque-pays",
    label: "Prime de risque pays (CRP)",
    category: 'Analyse fondamentale',
    theme: 'macroeconomie',
    shortDef: "Supplément de rendement exigé par les investisseurs pour détenir un actif dans un pays plus risqué qu'un marché mature. Elle renchérit le coût du capital, donc le WACC, indépendamment de la qualité de l'entreprise.",
    definition: `La prime de risque pays (Country Risk Premium, CRP) est le supplément de rendement qu'un investisseur exige pour s'exposer à un pays jugé plus risqué qu'un marché de référence mature (États-Unis, Allemagne). Elle capture le risque souverain, politique, monétaire et institutionnel propre à ce pays, et s'ajoute à la prime de risque actions (ERP) du marché mature.\n\nConcrètement, la CRP gonfle l'ERP utilisée dans le calcul du coût des fonds propres : Re = Rf + beta x (ERP mature + CRP). Une entreprise située dans un pays à CRP élevée verra donc son coût du capital, et donc son WACC, renchéri mécaniquement, même si son bilan est solide et son bêta faible. Damodaran publie chaque année des estimations de CRP par pays, dérivées des notations souveraines et des spreads de défaut.\n\nPour l'investisseur, l'effet est concret sur la valorisation : un WACC plus élevé abaisse la valeur actualisée des flux futurs, donc la juste valeur. Une excellente entreprise dans un pays à risque (par exemple un industriel grec ou turc) peut ainsi afficher une juste valeur déprimée non pas par ses fondamentaux, mais par le risque souverain de son pays de cotation. Distinguer le risque de l'entreprise du risque du pays est alors essentiel pour ne pas confondre cherté et prime de pays.`,
    related: ['wacc', 'taux-sans-risque', 'beta', 'dcf'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },

];

