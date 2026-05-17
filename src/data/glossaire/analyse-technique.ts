// src/data/glossaire/analyse-technique.ts
// ─────────────────────────────────────────────────────────────────────────────
// Catégorie : Analyse technique
// 10 termes
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm } from './types';

export const analyseTechnique: GlossaireTerm[] = [
  {
    slug: "atr",
    label: "ATR - Average True Range",
    category: 'Analyse technique',
    shortDef: "Indicateur de volatilité mesurant l'amplitude moyenne des mouvements de prix sur une période donnée — utilisé pour calibrer les stop loss ou les objectifs de cours.",
    definition: `L'Average True Range (ATR) est un indicateur de volatilité développé par J. Welles Wilder. Il mesure l'amplitude moyenne des variations de prix d'un actif sur une période de référence — généralement 14 périodes (jours, semaines, etc.).\n\nLe True Range (TR) d'une période est le maximum entre :\n- La distance entre le plus haut et le plus bas de la période\n- La distance entre le plus haut et la clôture précédente\n- La distance entre le plus bas et la clôture précédente\n\nL'ATR est la moyenne mobile de ces True Range sur N périodes. Il ne donne pas de direction (haussière ou baissière) : il mesure l'intensité du mouvement.\n\nUtilisations pratiques :\n- Placement de stop loss : "2 ATR sous le cours" est une règle commune pour positionner un stop en tenant compte de la volatilité réelle du titre, évitant les arrêts sur bruit\n- Calibrage d'objectifs : les objectifs de cours sont parfois exprimés en multiples d'ATR\n- Gestion de position : un ATR plus élevé signale une période de volatilité accrue qui peut justifier une réduction de la taille de position\n\nL'ATR hebdomadaire lisse les variations journalières et donne une mesure de la volatilité structurelle du titre, plus adaptée aux décisions d'investissement à moyen terme.`,
    related: ['stop-loss', 'beta'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },
  {
    slug: "bougies-japonaises",
    label: "Bougies japonaises (chandeliers)",
    category: 'Analyse technique',
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
    category: 'Analyse technique',
    shortDef: "Un modèle qui découpe le cycle de vie d'une action en quatre phases successives, avec des règles d'entrée et de sortie précises basées sur la moyenne mobile 30 semaines.",
    definition: `Stan Weinstein a formalisé dans les années 1980 un modèle cyclique décrivant comment toute action traverse quatre phases successives et répétables. L'outil central est la moyenne mobile à 30 semaines (MM30), équivalente à la MM150 en données journalières.\n\nPhase 1 — Consolidation : l'action évolue en range horizontal, sans tendance claire. La MM30 s'aplatit, les volumes sont faibles et irréguliers. C'est une phase d'accumulation discrète par les "mains fortes". Entrer en Phase 1 revient à immobiliser du capital sans direction. Attitude : attendre.\n\nPhase 2 — Avancée : l'action casse le range à la hausse avec un volume significativement supérieur à la moyenne. La MM30 s'incurve à la hausse. C'est la seule phase où acheter est pertinent. Les corrections restent peu profondes et se font en volume faible — signe de santé. Plus la Phase 1 précédente a duré longtemps, plus la Phase 2 a de potentiel. Attitude : acheter à la cassure, renforcer sur les pullbacks.\n\nPhase 3 — Distribution : l'action plafonne et la MM30 commence à s'aplatir après une longue avancée. Le cours oscille de part et d'autre de la MM30 avec des volumes élevés mais sans nouvelle hausse franche. C'est la phase où les "mains fortes" distribuent leurs positions aux acheteurs tardifs. Attitude : vendre ou alléger. Ne pas acheter même si l'action semble encore solide.\n\nPhase 4 — Déclin : l'action casse le support de Phase 3 à la baisse avec du volume. La MM30 s'incurve à la baisse, les rebonds échouent sous elle. C'est le cimetière des acheteurs qui "moyennent à la baisse". Attitude : ne jamais acheter en Phase 4, même si l'action semble bon marché.\n\nLa règle centrale : n'acheter qu'en Phase 2 confirmée — cassure de résistance, volume en hausse, MM30 ascendante. Sortir en Phase 3 naissante — MM30 qui s'aplatit, volumes de distribution. La durée des phases est variable, quelques mois à plusieurs années. La séquence, elle, ne change pas.`,
    related: ['moyenne-mobile', 'support-resistance', 'golden-cross', 'momentum', 'stop-loss'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },
  {
    slug: "double-bottom",
    label: "Double Bottom (double creux)",
    category: 'Analyse technique',
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
    category: 'Analyse technique',
    shortDef: "Un pattern chartiste de retournement baissier parmi les plus fiables de l'analyse technique.",
    definition: `L'Épaule-Tête-Épaule (Head & Shoulders en anglais) est l'un des patterns de retournement les plus étudiés. Il se forme après une tendance haussière et signale un probable retournement baissier.\n\nStructure : une première hausse (épaule gauche), une deuxième hausse plus forte (tête), une troisième hausse inférieure à la tête (épaule droite). La ligne reliant les creux entre les trois sommets s'appelle la "ligne de cou" (neckline).\n\nLe signal de déclenchement : la cassure de la neckline vers le bas, confirmée par un volume élevé. L'objectif de prix théorique après cassure se calcule en soustrayant la hauteur de la "tête" au niveau de la neckline. Son symétrique haussier est l'ETE inversée, signal de retournement après tendance baissière.`,
    related: ['double-bottom', 'support-resistance', 'bougies-japonaises'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },
  {
    slug: "golden-cross",
    label: "Golden Cross & Death Cross",
    category: 'Analyse technique',
    shortDef: "Le croisement des moyennes mobiles 50 et 200 jours — signaux forts de changement de tendance.",
    definition: `Le Golden Cross se produit quand la Moyenne Mobile sur 50 jours (MM50) croise la MM200 à la hausse. C'est considéré comme un signal haussier de long terme — la tendance court terme reprend de la vigueur par rapport à la tendance long terme.\n\nLe Death Cross est l'inverse : la MM50 croise la MM200 à la baisse. Signal baissier de long terme, annonçant souvent des mois difficiles pour un actif.\n\nImportant : ces signaux sont historiquement fiables sur les grands indices (S&P 500, MSCI World) mais jamais absolus. Ils se produisent avec un décalage — au moment du signal, une partie du mouvement est déjà passée. À utiliser en confirmation d'autres signaux, pas en déclencheur unique d'une décision.`,
    related: ['moyenne-mobile', 'support-resistance', 'cycle-weinstein'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },
  {
    slug: "momentum",
    label: "Momentum",
    category: 'Analyse technique',
    shortDef: "La tendance d'un actif à maintenir sa direction — ce qui monte continue à monter, ce qui baisse continue à baisser.",
    definition: `Le momentum désigne la persistance de la tendance d'un actif. Les marchés financiers exhibent un effet momentum documenté statistiquement : les actifs qui ont bien performé sur les 6 à 12 derniers mois tendent à continuer à surperformer sur les 3 à 6 mois suivants.\n\nEn analyse technique, le momentum se mesure via des indicateurs comme le RSI (Relative Strength Index) ou le MACD. En gestion de portefeuille, des stratégies entières sont construites autour du momentum (acheter les actifs en tendance haussière, vendre les actifs en tendance baissière).\n\nLimite importante : le momentum peut s'inverser brutalement lors de retournements de marché. Il amplifie les gains en tendance, mais aussi les pertes lors des retournements — ce qui explique pourquoi les stratégies momentum combinées avec une gestion stricte des stops sont plus robustes que le momentum pur.`,
    related: ['rsi', 'moyenne-mobile', 'cycle-weinstein'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },
  {
    slug: "moyenne-mobile",
    label: "Moyenne Mobile (MM)",
    category: 'Analyse technique',
    shortDef: "La moyenne des prix de clôture sur une période donnée — indicateur de tendance.",
    definition: `Une Moyenne Mobile calcule la moyenne des prix de clôture d'un actif sur une période donnée. Elle "lisse" les fluctuations quotidiennes pour révéler la tendance sous-jacente. Les plus utilisées : MM20 (20 jours), MM50 (50 jours), MM200 (200 jours).\n\nInterprétation simple : si le prix est au-dessus de sa MM200, l'actif est en tendance haussière de long terme. En dessous, il est en tendance baissière. Les MM courtes (20, 50) signalent des tendances plus récentes.\n\nDeux signaux clés : le Golden Cross (la MM50 croise la MM200 à la hausse — signal haussier fort) et le Death Cross (la MM50 croise la MM200 à la baisse — signal baissier). Ces croisements ne se produisent que quelques fois par décennie sur les grands indices.`,
    related: ['support-resistance', 'golden-cross', 'cycle-weinstein', 'momentum'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },
  {
    slug: "rsi",
    label: "RSI — Relative Strength Index",
    category: 'Analyse technique',
    shortDef: "Un indicateur de momentum qui mesure la vitesse et l'amplitude des variations de prix pour détecter les excès.",
    definition: `Le RSI (Relative Strength Index) est un indicateur oscillant entre 0 et 100. Il mesure la vitesse et l'amplitude des mouvements de prix pour identifier les zones de surachat ou de survente.\n\nInterprétation classique : RSI > 70 = zone de surachat (attention à un possible retournement baissier), RSI < 30 = zone de survente (attention à un possible rebond). RSI autour de 50 = zone neutre.\n\nImportant : un RSI > 70 ne signifie pas automatiquement "vendre". En tendance haussière forte, le RSI peut rester en zone de surachat pendant des mois. L'indicateur est plus utile pour détecter les divergences : quand le prix fait de nouveaux sommets mais que le RSI ne suit pas (divergence baissière), cela signale un affaiblissement du mouvement.`,
    related: ['momentum', 'bougies-japonaises', 'moyenne-mobile'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },
  {
    slug: "support-resistance",
    label: "Support et Résistance",
    category: 'Analyse technique',
    shortDef: "Des niveaux de prix où l'offre et la demande s'équilibrent historiquement, créant des zones de rebond ou de blocage.",
    definition: `Un support est un niveau de prix auquel l'actif a historiquement rebondi à la hausse — les acheteurs ont pris le dessus sur les vendeurs à ce niveau. Une résistance est le niveau symétrique : l'actif a historiquement buté à la baisse à ce prix — les vendeurs ont pris le dessus sur les acheteurs.\n\nCes zones sont créées par la mémoire collective du marché. Les investisseurs qui ont acheté à un certain niveau veulent revendre pour retrouver leur point d'équilibre ; ceux qui ont raté une entrée guettent un retour sur ce prix. Cette psychologie de masse crée des points de convergence prévisibles.\n\nConcept clé : quand un support est cassé, il devient souvent une résistance. Quand une résistance est franchie avec fort volume, elle devient souvent un support. L'inversion des rôles est l'un des signaux les plus fiables en analyse technique.`,
    related: ['bougies-japonaises', 'moyenne-mobile', 'cycle-weinstein'],
    modules: [
      { label: "Analyse technique", href: "/academie/intermediaire/analyse-technique" },
    ],
  },
];
