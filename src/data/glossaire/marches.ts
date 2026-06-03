// src/data/glossaire/marches.ts
// ─────────────────────────────────────────────────────────────────────────────
// Catégorie : Marchés
// 7 termes
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm } from './types';

export const marches: GlossaireTerm[] = [
  {
    slug: "bear-market",
    label: "Bear Market (marché baissier)",
    category: 'Marchés',
    shortDef: "Une baisse prolongée des marchés d'au moins 20 % par rapport au dernier sommet.",
    definition: `Un bear market (marché baissier) est une période de repli prolongé des marchés, conventionnellement définie par une baisse de plus de 20 % depuis le dernier sommet. Les bear markets peuvent durer de quelques mois à plusieurs années.\n\nLes plus marquants de l'histoire récente : la crise internet (2000–2002, −50 % sur le S&P 500), la crise financière de 2008 (−57 %), le krach COVID de mars 2020 (−34 % en un mois, récupéré en 5 mois).\n\nPour un investisseur long terme en DCA, le bear market est une opportunité d'acheter à prix réduit. Pour un investisseur non préparé psychologiquement, c'est le moment où il vend — cristallisant une perte temporaire en perte définitive.`,
    related: ['bull-market', 'correction', 'drawdown', 'dca', 'psychologie'],
    modules: [
      { label: "Pourquoi investir", href: "/academie/bases/pourquoi-investir" },
    ],
  },
  {
    slug: "brent",
    label: "Prix du Brent",
    category: 'Marchés',
    theme: 'energie',
    shortDef: "Le prix de référence mondial du pétrole brut, coté sur le marché ICE à Londres — benchmark pour environ 70 % du pétrole commercialisé dans le monde.",
    definition: `Le Brent est la principale référence mondiale de prix du pétrole brut. Il tire son nom du champ pétrolifère Brent de la mer du Nord, découvert par Shell dans les années 1970. Aujourd'hui, le "Brent" désigne un panier de plusieurs bruts de mer du Nord (BFOET : Brent, Forties, Oseberg, Ekofisk, Troll), coté sur le marché ICE (Intercontinental Exchange) à Londres.\n\nEnviron 70 % du pétrole commercialisé dans le monde est indexé sur le Brent — c'est pourquoi son prix est le thermomètre principal de l'industrie pétrolière mondiale. L'autre benchmark majeur est le WTI (West Texas Intermediate), principalement utilisé pour les flux nord-américains. L'écart entre les deux (le "spread Brent-WTI") reflète des différences de qualité du brut et de logistique.\n\nPour un investisseur dans les majors pétrolières intégrées comme TotalEnergies, le Brent est la variable macro dominante : une variation de ±10 dollars par baril se traduit directement par ±2,3 milliards de dollars de résultat net. À Brent 60 dollars (bas de cycle), les majors couvrent à peine leurs investissements et dividendes. À Brent 85-90 dollars (haut de cycle), elles génèrent des cash-flows exceptionnels. La prime géopolitique — comme celle liée aux tensions Iran/US de mars 2026 qui a poussé le Brent à 107 dollars — peut temporairement déconnecter le prix des fondamentaux de l'offre et de la demande.`,
    related: ['stranded-assets', 'scope-3', 'gnl', 'integrated-power', 'free-cash-flow'],
    modules: [
      { label: "Marchés", href: "/academie/debutant/marches" },
    ],
  },
  {
    slug: "bull-market",
    label: "Bull Market (marché haussier)",
    category: 'Marchés',
    shortDef: "Une période prolongée de hausse des marchés financiers, généralement supérieure à 20 %.",
    definition: `Un bull market (marché haussier) désigne une période durant laquelle les marchés financiers sont en tendance haussière prolongée. Par convention, on parle de bull market quand un indice gagne plus de 20 % depuis son dernier point bas.\n\nPsychologiquement, le bull market amplifie la confiance des investisseurs, parfois jusqu'à l'excès. Les valorisations s'élèvent, les nouvelles introductions en bourse se multiplient, l'appétit pour le risque grimpe. C'est dans ces périodes que les erreurs de surconcentration et d'endettement sont les plus fréquentes.\n\nPour un investisseur long terme, le bull market est la "récompense normale" d'une détention patiente. La tentation à éviter : réduire sa discipline d'investissement parce que "ça monte tout seul".`,
    related: ['bear-market', 'correction', 'buy-and-hold', 'fomo'],
    modules: [],
  },
  {
    slug: "correction",
    label: "Correction de marché",
    category: 'Marchés',
    shortDef: "Une baisse temporaire des marchés entre 10 % et 20 % depuis un récent sommet.",
    definition: `Une correction de marché est une baisse entre 10 % et 20 % d'un indice ou d'une action depuis son dernier sommet récent. Elle est considérée comme saine et normale — elle corrige les excès de valorisation qui se forment pendant les périodes de hausse.\n\nEn moyenne, les marchés actions connaissent une correction de 10 %+ une fois par an, et une correction de 20 %+ une fois tous les 3 à 5 ans. Ces chiffres sont des moyennes — la réalité est irrégulière et impossible à prédire avec précision.\n\nLa réaction saine face à une correction : ne rien faire si tu es en stratégie long terme. La réaction qui coûte le plus cher : vendre pendant la baisse par peur.`,
    related: ['bear-market', 'drawdown', 'volatilite', 'buy-and-hold'],
    modules: [
      { label: "Gestion du risque", href: "/academie/intermediaire/gerer-le-risque" },
    ],
  },
  {
    slug: "fomo",
    label: "FOMO — Fear Of Missing Out",
    category: 'Marchés',
    shortDef: "La peur de rater une opportunité — un des biais comportementaux les plus coûteux en investissement.",
    definition: `Le FOMO (Fear Of Missing Out) est la peur de rater un mouvement de marché. Il pousse les investisseurs à acheter après une forte hausse, dans la panique de ne pas "profiter" de la tendance — souvent au pire moment, au sommet du cycle.\n\nLe FOMO est amplifié par les réseaux sociaux : quand tout le monde parle de la même action qui a fait +200 %, la tentation d'y entrer est forte. C'est précisément quand l'euphorie est maximale que le risque de correction est le plus élevé.\n\nLe remède contre le FOMO : avoir un plan d'investissement défini à l'avance. Si une action n'est pas dans ta liste de surveillance avec un prix d'entrée ciblé, la hausse que tu "rates" n'était pas ta trade. Il y aura toujours une prochaine opportunité — les marchés offrent des rebonds régulièrement à qui sait attendre.`,
    related: ['psychologie', 'bull-market', 'buy-and-hold'],
    modules: [],
  },
  {
    slug: "greenwashing",
    label: "Greenwashing",
    category: 'Marchés',
    theme: 'esg-climat',
    shortDef: "La pratique consistant à exagérer ou falsifier des engagements environnementaux pour améliorer son image.",
    definition: `Le greenwashing (littéralement "verdissement") désigne la pratique consistant pour une entreprise à communiquer sur des engagements ou des pratiques environnementales de façon trompeuse, exagérée ou non vérifiable, dans le but d'améliorer son image sans nécessairement changer ses pratiques réelles.\n\nPour un investisseur, le greenwashing est un risque opérationnel et réputationnel concret : les régulateurs européens (directive CSRD, règlement Green Claims) ont durci les exigences de preuve sur les allégations environnementales. Une entreprise dont les engagements ESG ne résistent pas à l'audit indépendant s'expose à des amendes, des procédures judiciaires et un dommage d'image potentiellement durable.\n\nC'est particulièrement sensible dans la cosmétique et la grande consommation, secteurs où les allégations "naturel", "bio", "durable" sont au cœur du positionnement produit. La multiplication des engagements ESG publics par L'Oréal (SBTi, programme Sciences Vertes) crée une exposition réputationnelle accrue si les résultats ne suivent pas à la même vitesse que les promesses.`,
    related: ['marge-nette', 'pricing-power'],
    modules: [
      { label: "Analyse fondamentale", href: "/academie/intermediaire/analyse-fondamentale" },
    ],
  },
  {
    slug: "marche-spot",
    label: "Marché spot",
    category: 'Marchés',
    shortDef: "Marché sur lequel une matière première ou un actif est acheté et livré immédiatement, au prix du moment.",
    definition: `Le marché spot désigne le marché au comptant, par opposition aux marchés à terme ou aux contrats longs. Sur un marché spot, la transaction est conclue et livrée quasi immédiatement au prix courant du marché.\n\nPour les matières premières comme l'uranium, le marché spot représente une fraction de l'activité totale : la majeure partie des transactions se fait via des contrats longs (2 à 10 ans) signés entre producteurs et utilities. Le prix spot sert néanmoins de référence pour les nouvelles signatures et pour évaluer la rentabilité des mines.\n\nLe marché spot uranium est publié chaque semaine par des courtiers spécialisés (UxC, TradeTech). Un prix spot bas (sous 40 $US/lb) peut rendre non rentable la production de mines à coût élevé. Un prix spot élevé crée une incitation à signer de nouveaux contrats à des prix plus favorables, ce qui se répercute progressivement dans les prix réalisés au fil du renouvellement du carnet.`,
    related: ['oligopole', 'backlog'],
    modules: [],
  },
  // -------------------------------------------------------
// 4. ZIRP — Zero Interest Rate Policy
// -------------------------------------------------------
{
  slug:     'zirp',
  label:    'ZIRP - Zero Interest Rate Policy',
  category: 'Marchés',
  theme:    'macroeconomie',
  shortDef: "Politique monétaire de taux directeurs proches de zéro conduite par les banques centrales, en vigueur de 2010 à 2022, qui a comprimé le coût du capital et gonflé les multiples de valorisation des actifs longs.",
  definition: `La Zero Interest Rate Policy (ZIRP) désigne la période de politique monétaire ultra-accommodante dans laquelle les banques centrales (Fed, BCE, BoJ, BoE) ont maintenu leurs taux directeurs proches ou égaux à zéro, essentiellement entre 2009 et 2022.

La ZIRP a été initialement déployée après la crise financière de 2008 pour stimuler le crédit et relancer l'économie. Après un retour partiel à des taux normaux entre 2016 et 2018, la pandémie de 2020 a provoqué un retour aux taux zéro jusqu'au cycle de resserrement historique de 2022-2023 (la Fed remontant de 0 % à 5,25 % en 16 mois).

L'impact sur les valorisations boursières a été massif et bien documenté. Un taux sans risque proche de zéro réduit mécaniquement le WACC, ce qui augmente la valeur actuelle des flux futurs lointains dans tout modèle DCF. Les entreprises à forte croissance dont la valeur est concentrée dans une valeur terminale éloignée (tech, SaaS, biotech) ont été les plus bénéficiaires : leurs PER ont atteint des niveaux historiquement élevés (50x, 70x, voire 100x) entre 2020 et 2021.

La fin de la ZIRP en 2022 a déclenché une compression multiples spectaculaire : les entreprises valorisées à 70x leurs bénéfices en 2021 sont revenues à 30-35x en 2023-2024, non pas parce que leurs fondamentaux s'étaient dégradés, mais parce que le taux d'actualisation avait doublé. Cette normalisation est un rappel structurel : un multiple de valorisation n'est pas une constante, il dépend du niveau des taux longs au moment de l'évaluation.`,
  related:  ['taux-sans-risque', 'wacc', 'multiple-de-valorisation', 'dcf'],
  modules:  [],
},

  {
    slug:     'rule-15c2-11',
    label:    'Rule 15c2-11 (eligibilite a la cotation OTC)',
    category: 'Marchés',
    theme:    'marches-instruments',
    shortDef: "Regle SEC qui conditionne le droit, pour un courtier, de publier des cotations sur un titre hors-cote a la disponibilite d'une information publique a jour.",
    definition: `La Rule 15c2-11 est une regle de la SEC (le regulateur boursier americain) qui encadre la publication de cotations sur les marches de gre a gre. Avant qu'un courtier puisse afficher un prix acheteur ou vendeur sur un titre hors-cote, une information minimale et a jour sur l'emetteur doit etre publiquement disponible. La regle a ete sensiblement durcie en septembre 2021 : les titres dont l'emetteur ne publie plus d'information ont ete repousses vers un compartiment restreint (l'Expert Market), reserve aux investisseurs avertis.

Le coeur du modele d'OTC Markets tient a cette regle. Sa filiale OTC Link ATS opere comme "Qualified Interdealer Quotation System" (Qualified IDQS) : c'est l'une des rares entites habilitees a realiser, et a rendre publiques, les determinations d'eligibilite d'un titre a la cotation au sens de la 15c2-11. Les courtiers s'appuient sur ces determinations pour pouvoir afficher leurs prix. Cette fonction quasi-reglementaire constitue une barriere a l'entree puissante.

Le revers est symetrique : l'activite d'OTC Markets reste dependante de ce cadre reglementaire. Une evolution defavorable de la 15c2-11, ou de la Regulation SCI et du Consolidated Audit Trail qui l'accompagnent, pourrait alterer la valeur de cette franchise.`,
    related:  ['ats', 'marches-otc', 'moat', 'effet-de-reseau'],
    modules:  [],
  },

  {
    slug:     'ats',
    label:    'ATS (Alternative Trading System)',
    category: 'Marchés',
    theme:    'marches-instruments',
    shortDef: "Plateforme electronique de negociation reglementee par la SEC, alternative aux Bourses traditionnelles, qui apparie les ordres d'acheteurs et de vendeurs.",
    definition: `Un ATS (Alternative Trading System) est une plateforme electronique de negociation autorisee par la SEC, qui met en relation acheteurs et vendeurs de titres sans avoir le statut formel de Bourse (national securities exchange). Aux Etats-Unis, une part importante des volumes se traite sur des ATS plutot que sur les Bourses cotantes.

OTC Markets exploite plusieurs ATS sous la marque OTC Link : un ECN (Electronic Communication Network, qui apparie automatiquement les ordres avec rebate de liquidite), OTC Link NQB et OTC Link ATS (un systeme de cotation interdealer). S'y ajoute MOON ATS, dedie a la negociation de nuit (overnight) de valeurs cotees en Bourse. Ces plateformes generent des revenus transactionnels (a l'execution) et d'usage (messages, acces aux cotations), par nature plus cycliques que les abonnements aux donnees ou aux services aux emetteurs.

Le statut d'ATS implique des obligations reglementaires lourdes (Regulation ATS, Regulation SCI) qui renforcent la barriere a l'entree pour de nouveaux acteurs.`,
    related:  ['rule-15c2-11', 'marches-otc', 'liquidite', 'spread'],
    modules:  [],
  },

  {
    slug:     'marches-otc',
    label:    'Marches OTC (OTCQX, OTCQB, OTCID, Pink)',
    category: 'Marchés',
    theme:    'marches-instruments',
    shortDef: "Marches de gre a gre americains organises en compartiments hierarchises selon le niveau d'information et de conformite des emetteurs.",
    definition: `Les marches OTC (over-the-counter, de gre a gre) regroupent les titres negocies en dehors des Bourses cotantes comme le NYSE ou le Nasdaq. Aux Etats-Unis, OTC Markets Group les organise en compartiments hierarchises, du plus exigeant au plus risque :

OTCQX Best Market : le compartiment premium, reserve aux societes etablies repondant a des standards financiers, de gouvernance et d'information eleves. OTCQB Venture Market : pour les societes en developpement, avec verification de conformite et reporting courant. OTCID Basic Market : lance en juillet 2025, un niveau d'entree qui exige une information de base et une certification du management, comblant l'espace au-dessus du compartiment Pink. Pink Limited : pour les titres a information limitee. Expert Market : reserve aux investisseurs avertis, pour les titres sans information publique a jour au sens de la Rule 15c2-11.

Plus une societe monte dans la hierarchie, plus elle paie de services aux emetteurs (Corporate Services) et meilleure est la qualite de son marche. C'est le moteur du modele : inciter les emetteurs a se connecter et a publier davantage d'information pour ameliorer leur propre marche.`,
    related:  ['rule-15c2-11', 'ats', 'liquidite', 'effet-de-reseau'],
    modules:  [],
  },

  {
    slug:     'blue-sky-laws',
    label:    'Blue Sky laws (lois etatiques sur les valeurs mobilieres)',
    category: 'Marchés',
    theme:    'marches-instruments',
    shortDef: "Lois propres a chaque Etat americain encadrant l'offre et la negociation de titres, en complement de la reglementation federale.",
    definition: `Les Blue Sky laws sont les lois sur les valeurs mobilieres propres a chacun des 50 Etats americains (plus le District de Columbia et les territoires), qui s'ajoutent a la reglementation federale de la SEC. Elles encadrent l'offre, la vente et parfois la cotation des titres au niveau de chaque Etat, dans le but de proteger les investisseurs locaux contre la fraude.

La conformite Blue Sky est complexe car elle suppose de satisfaire, Etat par Etat, des exigences differentes. OTC Markets en a fait un axe strategique : la societe a obtenu la conformite Blue Sky pour ses propres actions dans l'ensemble des 50 Etats, et entend transformer ce savoir-faire en service a valeur ajoutee pour ses emetteurs OTCQX. L'idee est de rapprocher la fonctionnalite de ses marches premium de celle des Bourses cotantes, ou les titres beneficient d'exemptions Blue Sky.`,
    related:  ['marches-otc', 'rule-15c2-11'],
    modules:  [],
  },
  {
    slug:     'stock-based-compensation',
    label:    'Remuneration en actions (SBC)',
    category: 'Mécanismes financiers',
    shortDef: "Remuneration des salaries et dirigeants sous forme d'actions ou d'options : une charge bien reelle, non decaissee, souvent reintegree dans les flux de tresorerie.",
    definition: `La stock-based compensation (SBC, remuneration en actions) designe la part de la remuneration versee aux salaries et dirigeants sous forme d'actions, d'options ou d'unites d'actions (RSU, PSU). C'est une charge comptabilisee au compte de resultat, qui reduit donc le resultat net. Mais comme elle ne donne lieu a aucune sortie de cash, elle est reintegree dans le tableau des flux de tresorerie pour calculer le flux operationnel.

C'est la source d'un piege d'analyse. En reintegrant la SBC, le flux de tresorerie operationnel, et donc le free cash flow, apparaissent superieurs au resultat net. Or la SBC est un cout economique reel pour l'actionnaire existant : elle le dilue, ou oblige l'entreprise a racheter des actions pour neutraliser cette dilution. Considerer le FCF brut comme entierement distribuable surestime donc la richesse revenant aux proprietaires.

Une approche prudente, retenue dans la valorisation par actualisation des flux (DCF), consiste a traiter la SBC comme un cout cash et a la deduire du FCF. Chez OTC Markets, la SBC represente environ 6,8 M$ par an, soit a peu pres 22 % du resultat net : la difference entre FCF brut et FCF ajuste de la SBC est donc significative.`,
    related:  ['dilution', 'rachat-actions', 'free-cash-flow', 'rsu'],
    modules:  [],
  },

];
