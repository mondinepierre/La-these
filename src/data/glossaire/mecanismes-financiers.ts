// src/data/glossaire/mecanismes-financiers.ts
// ─────────────────────────────────────────────────────────────────────────────
// Catégorie : Mécanismes financiers
// 25 termes
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm } from './types';

export const mecanismesFinanciers: GlossaireTerm[] = [
  {
    slug: "asset-turnover",
    label: "Asset Turnover (rotation des actifs)",
    category: 'Mécanismes financiers',
    shortDef: "Le chiffre d'affaires généré pour chaque euro d'actif détenu par l'entreprise.",
    definition: `L'asset turnover (rotation des actifs) mesure l'efficacité avec laquelle une entreprise utilise ses actifs pour générer des revenus. Formule : Asset Turnover = Chiffre d'affaires / Total des actifs.\n\nUn asset turnover de 0,8x signifie qu'un euro d'actif génère 0,80 € de CA. Plus ce ratio est élevé, plus les actifs "travaillent" efficacement. Il est directement lié au ROIC via la décomposition DuPont : ROIC = Marge opérationnelle × Asset Turnover (× effet de levier).\n\nDeux business models opposés : un groupe comme Visa avec un asset turnover élevé (actifs légers, revenus forts) vs une industrie lourde avec un asset turnover bas (actifs immobilisés importants, CA proportionnellement plus faible). La dégradation de l'asset turnover lors d'acquisitions est normale et attendue : le goodwill gonfle les actifs avant que les nouvelles entités contribuent pleinement au CA.`,
    related: ['roic', 'goodwill', 'capital-investi', 'asset-light'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "backlog",
    label: "Backlog (carnet de commandes)",
    category: 'Mécanismes financiers',
    shortDef: "L'ensemble des commandes reçues et contractuellement engagées mais pas encore livrées ni facturées.",
    definition: `Le backlog (carnet de commandes) désigne le montant total des commandes qu'une entreprise a reçues, contractuellement confirmées, mais qui n'ont pas encore été livrées ni reconnues en chiffre d'affaires. C'est un indicateur avancé de la croissance future du revenu.\n\nUn backlog en forte croissance signifie que la demande dépasse la capacité de livraison actuelle — signal positif pour les trimestres à venir. Un backlog qui se réduit peut indiquer un ralentissement de la demande ou une accélération des livraisons. Dans les industries à cycles longs (défense, aérospatial, équipements industriels, énergies), le backlog peut représenter plusieurs années de chiffre d'affaires.\n\nRheinmetall, par exemple, affiche un backlog de plusieurs dizaines de milliards d'euros sous l'effet du réarmement européen — une visibilité pluriannuelle sur ses revenus qui justifie en partie la prime de valorisation accordée par le marché. Le backlog est publié trimestriellement par la plupart des industriels et des équipementiers.`,
    related: ['chiffre-affaires', 'cagr', 'moat', 'pricing-power'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "bfr",
    label: "BFR — Besoin en Fonds de Roulement",
    category: 'Mécanismes financiers',
    shortDef: "Le capital nécessaire pour financer le décalage entre les encaissements et les décaissements du cycle d'exploitation.",
    definition: `Le Besoin en Fonds de Roulement (BFR) mesure le capital qu'une entreprise doit mobiliser pour financer son cycle d'exploitation : elle achète des matières premières, les transforme, les stocke et attend d'être payée avant d'encaisser. Formule : BFR = Stocks + Créances clients − Dettes fournisseurs.\n\nUn BFR positif signifie que l'entreprise doit financer elle-même ce décalage — elle avance de la trésorerie avant d'être remboursée. Un BFR négatif est une situation favorable : l'entreprise encaisse ses clients et/ou paye ses fournisseurs plus tard, utilisant le cycle d'exploitation comme source de financement gratuite.\n\nPour un investisseur, la variation du BFR d'une année à l'autre est un signal clé : une dégradation soudaine (BFR qui augmente fortement) absorbe la trésorerie et comprime le Free Cash Flow, même si les bénéfices comptables restent élevés. C'est ce qui s'est produit pour L'Oréal en 2022, où une variation exceptionnelle de -1 011 M€ du BFR a comprimé le FCF.`,
    related: ['ccc', 'dso', 'dio', 'dpo', 'free-cash-flow'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "book-to-bill",
    label: "Book-to-bill",
    category: 'Mécanismes financiers',
    shortDef: "Ratio entre les commandes reçues et le chiffre d'affaires facturé sur une période.",
    definition: `Le book-to-bill (ou ratio prises de commandes / chiffre d'affaires) mesure si une entreprise industrielle accumule du carnet de commandes ou le consomme. Un ratio supérieur à 1 signifie que les nouvelles commandes excèdent les livraisons : le carnet grossit, la visibilité future s'améliore. Un ratio inférieur à 1 signifie l'inverse.\n\nC'est un indicateur avancé de la croissance future d'un industriel : un book-to-bill structurellement supérieur à 1 sur plusieurs années annonce une croissance organique soutenue dans les exercices à venir. À l'inverse, un book-to-bill inférieur à 1 sur plusieurs trimestres est un signal d'alerte sur la trajectoire de revenus.\n\nChez les industriels défense à longs cycles de production — comme Thales, Airbus ou Safran — le book-to-bill est l'un des indicateurs les plus suivis par les analystes car les contrats signés aujourd'hui ne se traduisent en chiffre d'affaires que sur plusieurs années.`,
    related: ['carnet-de-commandes', 'backlog', 'chiffre-affaires'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "bund",
    label: "Bund (obligation d'État allemande)",
    category: 'Mécanismes financiers',
    shortDef: "L'obligation souveraine de référence de la zone euro, émise par l'Allemagne — son taux sert de taux sans risque européen.",
    definition: `Le Bund est l'obligation d'État émise par la République Fédérale d'Allemagne. Il est considéré comme l'actif sans risque de référence en zone euro, équivalent européen des Treasuries américains. Son taux à 10 ans (Bund 10 ans) est le taux sans risque utilisé dans les modèles de valorisation européens.\n\nLe niveau du Bund impacte mécaniquement les valorisations boursières via deux canaux : il entre dans le calcul du WACC (taux sans risque + prime de risque), et il détermine l'attractivité relative des actions par rapport aux obligations. Quand le Bund monte, les multiples de valorisation (PER, EV/EBITDA) se compriment — les flux futurs actualisés à un taux plus élevé valent moins aujourd'hui.\n\nEntre 2014 et 2021, le Bund à 10 ans était négatif, situation historiquement exceptionnelle qui a gonflé les multiples boursiers européens. La remontée à partir de 2022 a déclenché une compression des valorisations, particulièrement marquée sur les valeurs de croissance à long terme.`,
    related: ['wacc', 'dcf', 'fcf-yield', 'per-valorisation', 'marge-de-securite'],
    modules: [],
  },
  {
    slug: "capital-investi",
    label: "Capital investi",
    category: 'Mécanismes financiers',
    shortDef: "Le total des ressources financières mobilisées dans l'exploitation d'une entreprise — fonds propres plus dette nette.",
    definition: `Le capital investi représente les ressources financières effectivement engagées dans l'activité opérationnelle de l'entreprise. Formule standard : Capital investi = Fonds propres + Dette nette (ou, en approche actif : Actifs immobilisés nets + BFR).\n\nC'est le dénominateur du ROIC : ROIC = NOPAT / Capital investi. Plus le capital investi est faible pour un niveau de NOPAT donné, plus le ROIC est élevé. C'est pourquoi les modèles asset-light — où l'entreprise n'immobilise pas de capital physique — affichent des ROIC structurellement élevés.\n\nLors d'acquisitions, le goodwill s'ajoute au capital investi et dilue mécaniquement le ROIC : si l'entreprise acquise n'a pas encore contribué au NOPAT à la même hauteur que le prix payé, le ratio se dégrade temporairement. C'est la signature des phases post-acquisition.`,
    related: ['roic', 'nopat', 'goodwill', 'asset-light', 'bfr'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "ccc",
    label: "CCC — Cash Conversion Cycle",
    category: 'Mécanismes financiers',
    shortDef: "Le nombre de jours entre le décaissement pour l'achat de matières premières et l'encaissement des ventes.",
    definition: `Le Cash Conversion Cycle (cycle de conversion du cash) mesure le temps qui s'écoule entre le moment où une entreprise paie ses fournisseurs et le moment où elle encaisse ses clients. Formule : CCC = DSO + DIO − DPO.\n\nUn CCC positif signifie que l'entreprise doit financer elle-même le décalage — elle avance de la trésorerie. Un CCC négatif est une situation rare et précieuse : l'entreprise encaisse avant de payer, utilisant le cycle d'exploitation comme source de financement gratuite. C'est la signature des entreprises avec un fort pouvoir de négociation des deux côtés (clients et fournisseurs).\n\nExemples contrastés : L'Oréal affiche un CCC de -33 jours (DPO de 210 jours, DIO de 147 jours, DSO de 38 jours) — financement gratuit de l'exploitation. Une start-up qui doit payer ses fournisseurs rapidement et attend 60 jours pour être payée peut avoir un CCC de +80 jours, mobilisant beaucoup de trésorerie dans son exploitation. Pour un investisseur, un CCC négatif et stable est un signal de qualité opérationnelle fort.`,
    related: ['dso', 'dio', 'dpo', 'bfr', 'free-cash-flow', 'pricing-power'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "client-incentives",
    label: "Client Incentives",
    category: 'Mécanismes financiers',
    theme: 'finance-paiements',
    shortDef: "Remises contractuelles versées par Visa à ses partenaires bancaires et marchands pour stimuler les volumes et l'adoption du réseau.",
    definition: `Les client incentives sont des remises et rabais que Visa accorde contractuellement à ses partenaires — banques émettrices, marchands, processeurs de paiement — en échange de l'adoption ou du maintien du réseau Visa sur leurs plateformes et cartes.\n\nComptablement, ils viennent en déduction du chiffre d'affaires brut pour donner le revenu net. En 2025, ils représentaient 35,9 % du CA brut de Visa et progressaient à +14 %, soit plus vite que le CA net. C'est un signe que la compétition avec Mastercard sur chaque renouvellement de contrat bancaire oblige Visa à "acheter" sa position dominante.\n\nPour un investisseur, les client incentives sont un indicateur de tension concurrentielle : leur progression plus rapide que le CA net comprime mécaniquement les marges à long terme. Ils ne constituent pas un moat — c'est précisément l'opposé : une dépense structurelle que Visa ne peut pas unilatéralement réduire sans risquer de perdre des contrats au profit de Mastercard.`,
    related: ['duopole', 'interchange', 'moat', 'marge-nette', 'pricing-power'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "dcf",
    label: "DCF — Discounted Cash Flow",
    category: 'Mécanismes financiers',
    shortDef: "Méthode de valorisation qui actualise les flux de trésorerie futurs estimés au coût du capital.",
    definition: `Le DCF (Discounted Cash Flow — actualisation des flux de trésorerie) est l'une des méthodes de valorisation intrinsèque les plus rigoureuses. Elle consiste à estimer les Free Cash Flows futurs d'une entreprise sur un horizon donné (typiquement 5 à 10 ans), puis à les ramener à leur valeur actuelle en appliquant un taux d'actualisation (généralement le WACC).\n\nFormule simplifiée : Valeur = Σ (FCF_n / (1 + WACC)^n) + Valeur terminale actualisée. La valeur terminale représente la valeur de l'entreprise au-delà de l'horizon explicite de prévision — elle pèse souvent 60 à 80 % de la valeur totale, ce qui souligne la sensibilité du modèle aux hypothèses de croissance long terme.\n\nLimite importante : un DCF est aussi fiable que ses hypothèses. Une petite variation du taux de croissance terminal ou du WACC peut faire varier la valorisation de 20 à 30 %. C'est pourquoi un DCF s'utilise avec une marge de sécurité et en scénarios (conservateur, central, optimiste) plutôt qu'en valeur unique.`,
    related: ['wacc', 'free-cash-flow', 'marge-de-securite', 'fcf-yield'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "dette-nette",
    label: "Dette nette",
    category: 'Mécanismes financiers',
    shortDef: "La dette financière totale d'une entreprise, diminuée de sa trésorerie disponible — indicateur réel de l'endettement.",
    definition: `La dette nette est la mesure d'endettement la plus utilisée en analyse fondamentale. Formule : Dette nette = Dette financière totale (court et long terme) − Trésorerie et équivalents.\n\nElle mesure l'endettement réel : une entreprise avec 5 Md€ de dette et 4 Md€ de trésorerie a une dette nette de seulement 1 Md€ — très différente d'une entreprise avec 5 Md€ de dette et 100 M€ de trésorerie. Quand la trésorerie excède la dette, la dette nette est négative : l'entreprise est en position de "cash net", comme Alphabet ou Microsoft.\n\nLa dette nette est le numérateur du ratio Dette nette / EBITDA, l'un des indicateurs de solvabilité les plus utilisés. Elle entre aussi dans le calcul de l'Enterprise Value (EV = capitalisation boursière + dette nette), qui est le dénominateur des multiples EV/EBITDA et EV/FCF. Une dette nette négative réduit mécaniquement l'EV par rapport à la capitalisation, ce qui comprime ces multiples.`,
    related: ['dette-ebitda', 'ev-ebitda', 'free-cash-flow', 'working-capital', 'current-ratio'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "dio",
    label: "DIO — Days Inventory Outstanding",
    category: 'Mécanismes financiers',
    shortDef: "Le nombre de jours moyen qu'une entreprise met à vendre ses stocks.",
    definition: `Le DIO (Days Inventory Outstanding), ou délai moyen d'écoulement des stocks, mesure combien de jours en moyenne une entreprise détient ses stocks avant de les vendre. Formule : DIO = (Stocks / Coût des ventes) × 365.\n\nUn DIO faible signifie que les stocks tournent vite — signe d'une forte demande ou d'une gestion logistique efficace. Un DIO élevé peut indiquer des ventes plus lentes que prévu, un risque d'obsolescence, ou simplement la nature du secteur (vins millésimés, produits saisonniers, cosmétiques haut de gamme avec de longs cycles de formulation).\n\nLe DIO est le second composant du CCC (Cash Conversion Cycle) : CCC = DSO + DIO − DPO. Il doit être interprété en contexte sectoriel : un DIO de 147 jours est structurel dans le secteur cosmétique (formulations complexes, cycles de validation clinique, stocks de sécurité sur 157 pays), alors qu'il serait alarmant dans la distribution alimentaire.`,
    related: ['ccc', 'dso', 'dpo', 'bfr', 'free-cash-flow'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "dpo",
    label: "DPO — Days Payable Outstanding",
    category: 'Mécanismes financiers',
    shortDef: "Le nombre de jours moyen qu'une entreprise prend pour payer ses fournisseurs.",
    definition: `Le DPO (Days Payable Outstanding), ou délai moyen de règlement fournisseurs, mesure combien de jours en moyenne une entreprise met à payer ses fournisseurs après réception de la marchandise ou de la prestation. Formule : DPO = (Dettes fournisseurs / Coût des ventes) × 365.\n\nUn DPO élevé est généralement favorable : l'entreprise utilise la trésorerie de ses fournisseurs comme financement de son exploitation, gratuitement. C'est un indicateur direct du rapport de force commercial — seules les entreprises avec un pouvoir de négociation fort peuvent imposer des délais de paiement longs sans perdre leurs fournisseurs.\n\nC'est le troisième composant du CCC, en position négative : CCC = DSO + DIO − DPO. Un DPO de 210 jours comme celui de L'Oréal (7 mois) traduit un rapport de force structurellement favorable avec les fournisseurs, dépendants des volumes et de la visibilité mondiale du groupe.`,
    related: ['ccc', 'dso', 'dio', 'bfr', 'pricing-power'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "dso",
    label: "DSO — Days Sales Outstanding",
    category: 'Mécanismes financiers',
    shortDef: "Le délai moyen en jours entre la facturation et l'encaissement effectif du paiement.",
    definition: `Le DSO (Days Sales Outstanding), ou délai moyen de recouvrement, mesure combien de jours en moyenne une entreprise attend entre l'émission d'une facture et la réception du paiement. Formule : DSO = (Créances clients / Chiffre d'affaires) × Nombre de jours.\n\nUn DSO faible est généralement positif : l'entreprise encaisse rapidement, ce qui améliore son cash-flow opérationnel et réduit le risque de créances irrécouvrables. Un DSO élevé peut signaler une clientèle lente à payer, un pouvoir de négociation faible, ou un mix B2B lourd (les contrats entreprises paient souvent à 60-90 jours).\n\nLe contexte sectoriel est essentiel : un DSO de 100 jours est attendu pour une entreprise B2B avec des contrats annuels facturés d'avance, tandis qu'un DSO de 100 jours dans la distribution alimentaire serait alarmant. Microsoft a fortement amélioré son DSO entre 2021 et 2023 notamment grâce à l'acquisition d'Activision (B2C) qui encaisse quasi-instantanément.`,
    related: ['free-cash-flow', 'current-ratio', 'chiffre-affaires'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "equity-method",
    label: "Méthode de mise en équivalence",
    category: 'Mécanismes financiers',
    shortDef: "Méthode comptable pour les participations minoritaires : seule la quote-part du résultat net est consolidée, pas le chiffre d'affaires.",
    definition: `La méthode de mise en équivalence s'applique lorsqu'une entreprise détient une participation significative (généralement entre 20% et 50%) dans une autre entité sans en avoir le contrôle.\n\nSeule la quote-part du résultat net de l'entité détenue est inscrite dans le compte de résultat de l'entreprise mère. Le chiffre d'affaires et le bilan de l'entité ne sont pas consolidés ligne par ligne. Au bilan, la participation est inscrite à sa valeur d'acquisition, ajustée chaque année de la quote-part des résultats et des dividendes reçus.\n\nExemple : Cameco détient 49% de Westinghouse. Le chiffre d'affaires de Westinghouse n'apparaît pas dans les revenus de Cameco. En revanche, 49% du résultat net de Westinghouse est inscrit dans le compte de résultat de Cameco sous la ligne 'Quote-part des résultats des sociétés mises en équivalence'.`,
    related: ['goodwill', 'roic'],
    modules: [],
  },
  {
    slug: "fid",
    label: "FID (Final Investment Decision)",
    category: 'Mécanismes financiers',
    theme: 'energie',
    shortDef: "Décision finale d'investissement — engagement formel d'allouer le capital nécessaire pour lancer un projet industriel de grande échelle.",
    definition: `La FID (Final Investment Decision) est la décision formelle d'un consortium ou d'un opérateur de lancer la construction d'un grand projet industriel — typiquement une usine de liquéfaction GNL, un champ pétrolier offshore, une raffinerie, une mine.\n\nElle marque le point de non-retour : avant la FID, le projet est en phase d'études (FEED, faisabilité technique et économique), avec des dépenses limitées ; après la FID, les commandes d'équipements sont passées, les contrats de construction signés, et les flux financiers significatifs s'engagent. Une FID se déclenche typiquement quand le producteur a sécurisé des contrats d'achat long terme couvrant 70 à 90 % de la production future.\n\nPour les investisseurs dans la chaîne de valeur GNL (GTT, Technip Energies, équipementiers), le suivi des FID est un indicateur avancé central : chaque FID se traduit en commandes de méthaniers 6 à 18 mois plus tard, puis en royalties 3 à 4 ans après pendant la construction des navires.`,
    related: ['capex', 'take-or-pay', 'gnl'],
    modules: [],
  },
  {
    slug: "goodwill",
    label: "Goodwill — Écart d'acquisition",
    category: 'Mécanismes financiers',
    shortDef: "L'excédent de prix payé lors d'un rachat par rapport à la valeur réelle des actifs nets.",
    definition: `Le Goodwill (ou écart d'acquisition) désigne la valeur immatérielle qu'une entreprise accepte de payer au-delà de la valeur de marché des actifs identifiables d'une cible (usines, stocks, brevets) lors d'une acquisition. Il représente tout ce qui ne figure pas au bilan comptable : la force d'une marque, la fidélité des clients, le talent des équipes ou les synergies futures espérées.\n\nOn distingue deux aspects de sa gestion :\n\n— L'inscription au bilan : Contrairement aux actifs physiques, le Goodwill est un actif incorporel qui reste au bilan tant que sa valeur est justifiée.\n\n— Le test de dépréciation (Impairment) : Il ne s'amortit pas chaque année. En revanche, si l'acquisition ne tient pas ses promesses, l'entreprise doit « déprécier » son Goodwill, ce qui impacte lourdement le résultat net (sans toucher à la trésorerie).\n\nLe Goodwill est un pari sur l'avenir : c'est un levier de puissance si les synergies se concrétisent, mais une « bombe à retardement » comptable si le prix payé était trop élevé.`,
    related: ['wacc', 'roic'],
    modules: [],
  },
  {
    slug: "lti",
    label: "LTI - Long-Term Incentive",
    category: 'Mécanismes financiers',
    shortDef: "Mécanisme de rémunération différée des dirigeants lié à la performance à long terme de l'entreprise, généralement sous forme d'actions soumises à des conditions sur 3 à 5 ans.",
    definition: `Les Long-Term Incentives (LTI), ou rémunérations à long terme, désignent la composante différée de la rémunération des dirigeants et cadres supérieurs, conçue pour aligner leurs intérêts sur ceux des actionnaires sur une période multi-annuelle — typiquement 3 à 5 ans.\n\nContrairement à la part variable annuelle (bonus) liée aux résultats de l'exercice précédent, les LTI sont attribués sous condition de performance et ne se matérialisent qu'au terme d'une période de vesting. Les formes principales :\n- Actions de performance (Performance Shares) : actions attribuées si certains critères sont atteints au terme de la période\n- Stock-options : droit d'acheter des actions à un prix fixé d'avance\n- Unités de performance (PSU, RSU) : unités convertibles en actions selon la performance réalisée\n\nLes conditions attachées aux LTI peuvent porter sur des indicateurs financiers (ROCE, TSR relatif, croissance du BPA, génération de FCF) ou extra-financiers (critères ESG, réduction des émissions CO2). La présence d'un LTI significatif dans la rémunération du dirigeant est généralement considérée comme un signal d'alignement avec les actionnaires — à condition que les critères retenus soient pertinents et non manipulables.`,
    related: ['tsr', 'roce', 'dividende', 'bpa'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "marge-brute-d-autofinancement",
    label: "Marge brute d'autofinancement (MBA)",
    category: 'Mécanismes financiers',
    shortDef: "Le cash généré par l'activité d'une entreprise avant investissements et charges financières — indicateur clé dans les secteurs à forte intensité capitalistique.",
    definition: `La marge brute d'autofinancement (MBA), appelée "cash flow from operations" dans les rapports anglo-saxons, mesure la trésorerie générée par l'activité opérationnelle d'une entreprise avant le financement de ses investissements.\n\nContrairement au résultat net, la MBA n'est pas affectée par les amortissements, les dépréciations d'actifs ou certains effets comptables. Elle reflète le cash réellement produit par l'activité. C'est sur cette base que les directions allouent leur capital entre maintien des actifs, croissance et rémunération des actionnaires.\n\nCet indicateur est particulièrement utilisé dans les secteurs à forte intensité capitalistique — énergie, industrie lourde, télécoms, infrastructure — où les amortissements massifs peuvent masquer la génération réelle de trésorerie. La MBA segment par segment est souvent plus révélatrice que le résultat net consolidé pour comprendre où une entreprise crée ou détruit de la valeur.`,
    related: ['free-cash-flow', 'capex', 'roic', 'ebitda'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "nopat",
    label: "NOPAT — Résultat opérationnel net après impôt",
    category: 'Mécanismes financiers',
    shortDef: "Le bénéfice opérationnel d'une entreprise après impôt, hors effet de sa structure de financement.",
    definition: `Le NOPAT (Net Operating Profit After Tax) est le résultat opérationnel de l'entreprise après application du taux d'imposition théorique, indépendamment de la façon dont l'entreprise est financée (dette ou fonds propres). Formule simplifiée : NOPAT = EBIT × (1 − taux d'imposition).\n\nC'est le numérateur du ROIC : ROIC = NOPAT / Capital investi. En excluant les charges et produits financiers, le NOPAT mesure la rentabilité pure de l'activité opérationnelle, sans l'effet de levier de la dette.\n\nUne entreprise dont le NOPAT croît régulièrement démontre que son activité opérationnelle crée de la valeur indépendamment de ses choix de financement. Une stagnation du NOPAT avec une progression du bénéfice net peut signaler que la croissance est portée par des éléments financiers non récurrents.`,
    related: ['roic', 'ebitda', 'marge-operationnelle', 'capital-investi'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "ppa",
    label: "PPA - Power Purchase Agreement",
    category: 'Mécanismes financiers',
    shortDef: "Contrat d'achat d'électricité à long terme entre un producteur et un acheteur, fixant un prix garanti sur 10 à 25 ans — mécanisme fondamental de financement des énergies renouvelables.",
    definition: `Un Power Purchase Agreement (PPA), ou contrat d'achat d'électricité à long terme, est un accord commercial par lequel un producteur d'électricité s'engage à livrer de l'électricité à un acheteur (entreprise industrielle, utility, gestionnaire de réseau) à un prix fixe ou indexé sur une durée généralement comprise entre 10 et 25 ans.\n\nStructure typique : le développeur construit et opère la centrale, l'acheteur s'engage à acheter tout ou partie de la production à un tarif contractuel. Ce mécanisme transfère le risque de prix de marché de l'électricité du producteur vers l'acheteur — en échange d'un prix prédictible qui permet au producteur d'accéder au financement bancaire et d'optimiser le rendement du capital investi.\n\nPour TotalEnergies (branche Puissance Intégrée), les PPAs signés avec des grands acteurs technologiques (Microsoft, Amazon, Google) et industriels sur 15 à 20 ans remplissent deux fonctions : sécuriser des revenus prévisibles qui réduisent l'exposition au marché spot volatile de l'électricité, et permettre le financement des parcs à des conditions optimales. C'est l'équivalent pour l'électricité renouvelable des clauses take-or-pay dans le gaz — la structure contractuelle qui permet à Puissance Intégrée de viser un retour sur capitaux employés de 12 % à horizon 2028.`,
    related: ['integrated-power', 'stranded-assets', 'capex', 'take-or-pay', 'moat'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "rsu",
    label: "RSU - Restricted Stock Unit",
    category: 'Mécanismes financiers',
    shortDef: "Unité de rémunération différée convertible en actions après une période de vesting, conditionnée au maintien dans l'entreprise — principal outil de fidélisation des talents dans la tech.",
    definition: `Une Restricted Stock Unit (RSU) est une promesse d'attribution d'actions à un salarié, soumise à une période de vesting — en général 3 à 4 ans. Contrairement à une stock-option, la RSU a une valeur dès l'attribution (même si le cours baisse, l'action garde une valeur positive), ce qui en fait un outil de fidélisation plus lisible pour le bénéficiaire.\n\nMécanisme : à l'attribution, l'entreprise promet X RSUs. Chaque année, une fraction se débloque ("veste") selon un calendrier prédéfini — souvent 25 % par an sur 4 ans. Au moment du vesting, les RSUs se convertissent en actions ordinaires et la valeur est imposée comme revenu du travail. Pour le salarié, la valeur perçue dépend directement du cours de bourse au moment du vesting.\n\nImpact comptable pour l'analyste : les RSUs génèrent une charge de Stock-Based Compensation (SBC) enregistrée en résultat opérationnel sur la durée du vesting. Cette charge est non-cash mais crée une dilution réelle du bénéfice par action. En 2025, Alphabet avait 42,9 milliards de dollars de charges RSU non encore comptabilisées (durée résiduelle 2,6 ans) — un engagement significatif qui pèse sur le BPA futur mais reflète aussi l'attraction des talents clés liée à la performance du cours.`,
    related: ['bpa', 'payout-ratio', 'rachat-actions', 'lti'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "take-or-pay",
    label: "Clause take-or-pay",
    category: 'Mécanismes financiers',
    theme: 'energie',
    shortDef: "Clause contractuelle obligeant l'acheteur à payer un volume minimum qu'il consomme ou non — mécanisme clé de protection des revenus dans les contrats industriels de long terme.",
    definition: `Une clause take-or-pay (littéralement "prends ou paye") est une disposition contractuelle par laquelle un acheteur s'engage à payer un volume minimum d'un bien ou d'un service, qu'il en ait besoin ou non sur la période contractuelle. Si l'acheteur ne "prend" pas le volume prévu, il doit quand même "payer" pour ce volume.\n\nCette clause est caractéristique des contrats d'approvisionnement en énergie (gaz naturel, électricité), en matières premières industrielles (gaz industriels, produits chimiques) et dans les infrastructures (terminaux GNL, pipelines, réseaux ferroviaires). Elle transfère le risque de volume du fournisseur vers l'acheteur : le producteur est assuré d'un revenu minimum indépendamment de la demande réelle.\n\nPour un investisseur, les take-or-pay sont un indicateur de qualité du modèle économique. Une entreprise dont les revenus sont majoritairement couverts par des clauses take-or-pay bénéficie d'une visibilité sur ses cash flows qui justifie généralement une prime de valorisation. Air Liquide applique cette structure à ses contrats Grande Industrie de 15 à 20 ans : le client signe un engagement ferme sur un volume minimum, ce qui sécurise le retour sur le capex de construction dès la signature.`,
    related: ['capex', 'free-cash-flow', 'backlog', 'moat'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "taux-sans-risque",
    label: "Taux sans risque",
    category: 'Mécanismes financiers',
    shortDef: "Rendement d'un placement considéré comme exempt de risque de défaut, utilisé comme référence dans les modèles de valorisation.",
    definition: `Le taux sans risque est le rendement théorique d'un investissement qui ne comporte aucun risque de défaut. En pratique, on l'approxime par le rendement des obligations d'État des émetteurs les plus solides : l'OAT 10 ans en France, le Bund 10 ans en Allemagne, le Treasury 10 ans aux États-Unis.\n\nIl joue un rôle central dans les modèles de valorisation. Dans le WACC (Weighted Average Cost of Capital), il sert de point de départ au coût des capitaux propres via le CAPM : Re = Rf + β × ERP, où Rf est le taux sans risque, β la sensibilité au marché et ERP la prime de risque attendue sur les actions.\n\nSon niveau influence directement les valorisations boursières : lorsque les taux sans risque montent, le coût du capital augmente, et la valeur actuelle des flux futurs baisse — ce qui comprime les multiples de valorisation des actions. C'est pourquoi les marchés actions sont structurellement sensibles aux politiques des banques centrales.`,
    related: ['wacc', 'dcf', 'beta', 'bund'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "wacc",
    label: "WACC — Coût Moyen Pondéré du Capital",
    category: 'Mécanismes financiers',
    shortDef: "Le taux de rendement minimum qu'une entreprise doit générer pour satisfaire ses actionnaires et créanciers.",
    definition: `Le WACC (Weighted Average Cost of Capital) représente le coût moyen de l'ensemble des financements d'une entreprise — fonds propres et dette — pondéré par leur poids respectif. C'est le taux de rendement minimum que l'entreprise doit générer pour ne pas détruire de valeur.\n\nPour un investisseur, le WACC sert de référence dans deux contextes clés : comparer au ROIC (si ROIC > WACC, l'entreprise crée de la valeur), et actualiser les flux de trésorerie futurs dans un modèle DCF (Discounted Cash Flow).\n\nUn WACC typique varie entre 6 % et 12 % selon le secteur et le profil de risque. Les entreprises technologiques à forte croissance ont souvent un WACC plus élevé. Les grandes entreprises industrielles stables ont un WACC plus bas. La règle d'or : un ROIC durablement supérieur au WACC est la signature d'une entreprise de qualité exceptionnelle.`,
    related: ['roic', 'free-cash-flow', 'moat'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "working-capital",
    label: "Working Capital (Fonds de roulement)",
    category: 'Mécanismes financiers',
    shortDef: "Le capital disponible pour financer les opérations courantes — actifs courants moins passifs courants.",
    definition: `Le working capital (fonds de roulement net global) désigne l'excédent des actifs courants sur les passifs courants : Working Capital = Actifs courants − Passifs courants. C'est la mesure de la liquidité à court terme disponible pour financer l'exploitation.\n\nUn working capital positif signifie que l'entreprise dispose d'un coussin de liquidité pour faire face à ses obligations à court terme. Un working capital négatif signifie que les passifs courants dépassent les actifs courants — situation qui peut être parfaitement viable (grande distribution, modèles à encaissement rapide) ou préoccupante (entreprise sous tension de liquidité).\n\nÀ ne pas confondre avec le BFR (Besoin en Fonds de Roulement), qui exclut la trésorerie et la dette court terme pour se concentrer sur le cycle opérationnel seul. Le working capital est une vue plus large intégrant tous les postes courants. En pratique, les deux termes sont parfois utilisés de façon interchangeable dans les rapports anglophones, ce qui peut créer des confusions.`,
    related: ['bfr', 'current-ratio', 'ccc', 'free-cash-flow', 'dette-nette'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  // -------------------------------------------------------
// 3. PSU — Performance Stock Unit
// -------------------------------------------------------
{
  slug:     'psu',
  label:    'PSU - Performance Stock Unit',
  category: 'Mécanismes financiers',
  shortDef: "Unité de rémunération différée convertible en actions, conditionnée à l'atteinte d'objectifs de performance sur 3 à 5 ans. Principal outil d'alignement dirigeants/actionnaires dans les grandes entreprises cotées.",
  definition: `Une Performance Stock Unit (PSU) est une promesse d'attribution d'actions soumise à une double condition : l'atteinte d'objectifs de performance prédéfinis (financiers et/ou extra-financiers) et le maintien dans l'entreprise jusqu'au terme d'une période de vesting, généralement 3 à 5 ans.

Contrairement aux RSU (Restricted Stock Units) qui se débloquent automatiquement avec le temps, les PSU intègrent une composante performance : le nombre d'actions effectivement reçues peut être supérieur, inférieur ou nul à l'attribution initiale selon les résultats atteints. Un mécanisme classique prévoit un multiplicateur de 0x à 2x selon le niveau de performance.

Les critères de performance attachés aux PSU peuvent être absolus (croissance du BPA, génération de FCF, ROIC) ou relatifs (TSR total shareholder return par rapport à un indice ou un groupe de pairs). Les critères ESG font une entrée croissante dans les programmes des grandes entreprises depuis 2020.

Pour l'analyste fondamental, les PSU représentent une dilution potentielle du BPA dans les hypothèses haute performance, et un signal d'alignement managérial sur la création de valeur à long terme. La vérification de la cohérence entre les critères PSU et les indicateurs mis en avant par le management dans sa communication aux investisseurs est un test de cohérence utile : des KPIs de rémunération alignés sur la thèse d'investissement renforcent la crédibilité de la stratégie annoncée.`,
  related:  ['rsu', 'lti', 'tsr', 'bpa'],
  modules:  [
    { label: 'Analyse fondamentale', href: '/academie/intermediaire/analyse-fondamentale' },
  ],
},
];
