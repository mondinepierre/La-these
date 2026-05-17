// src/data/glossaire/enveloppes-fiscales.ts
// ─────────────────────────────────────────────────────────────────────────────
// Catégorie : Enveloppes fiscales
// 4 termes
// ─────────────────────────────────────────────────────────────────────────────

import type { GlossaireTerm } from './types';

export const enveloppesFiscales: GlossaireTerm[] = [
  {
    slug: "assurance-vie",
    label: "Assurance-vie",
    category: 'Enveloppes fiscales',
    shortDef: "Une enveloppe d'épargne française combinant avantages fiscaux et transmission patrimoniale.",
    definition: `L'assurance-vie est une enveloppe d'épargne réglementée qui cumule deux avantages : une fiscalité allégée après 8 ans de détention (abattement annuel de 4 600 € pour une personne seule, 9 200 € pour un couple, avant imposition), et un avantage successoral significatif (les bénéficiaires désignés peuvent recevoir jusqu'à 152 500 € par personne sans droits de succession).\n\nElle donne accès à deux types de supports : les fonds en euros (capital garanti, rendement faible mais sécurisé) et les unités de compte (actions, ETF, SCPI — avec risque de perte en capital).\n\nL'assurance-vie est particulièrement intéressante pour la transmission patrimoniale et pour les investisseurs qui souhaitent sécuriser une partie de leur capital sur le fonds en euros tout en maintenant une exposition aux marchés.`,
    related: ['pea', 'cto', 'pfu'],
    modules: [
      { label: "Choisir son enveloppe", href: "/academie/bases/choisir-son-enveloppe" },
    ],
  },
  {
    slug: "cto",
    label: "CTO — Compte-Titres Ordinaire",
    category: 'Enveloppes fiscales',
    shortDef: "Un compte d'investissement sans avantage fiscal particulier, mais sans restriction d'actifs ni de montant.",
    definition: `Le Compte-Titres Ordinaire est l'enveloppe d'investissement la plus flexible : aucun plafond de versement, aucune restriction sur les actifs, accès à l'ensemble des marchés mondiaux (actions US, REITs, obligations, ETF, options, levier...\n\nFiscalité : les plus-values sont soumises au Prélèvement Forfaitaire Unique (PFU) de 31,4 % (12,8 % IR + 18,6 % prélèvements sociaux depuis 2026). Ce taux s'applique à chaque cession, sans avantage lié à la durée de détention.\n\nStratégie courante : détenir PEA et CTO en parallèle. Le PEA pour les actifs éligibles (ETF Monde synthétiques, actions européennes), le CTO pour le reste (actions US, REITs, stratégies de couverture). Les deux enveloppes sont complémentaires.`,
    related: ['pea', 'pfu', 'assurance-vie'],
    modules: [
      { label: "Choisir son enveloppe", href: "/academie/bases/choisir-son-enveloppe" },
      { label: "Choisir son broker", href: "/academie/bases/choisir-son-broker" },
    ],
  },
  {
    slug: "pea",
    label: "PEA — Plan d'Épargne en Actions",
    category: 'Enveloppes fiscales',
    shortDef: "L'enveloppe fiscale française qui exonère d'impôt les plus-values après 5 ans de détention.",
    definition: `Le Plan d'Épargne en Actions est une enveloppe d'investissement réglementée qui offre un avantage fiscal majeur : après 5 ans de détention, les plus-values et dividendes sont exonérés d'impôt sur le revenu (seuls les prélèvements sociaux de 18,6 % restent dus).\n\nPlafond : 150 000 € de versements par personne. Le capital peut croître au-delà sans limite. Univers d'investissement : actions et ETF de l'Espace Économique Européen, mais les ETF synthétiques permettent d'accéder au MSCI World et au S&P 500 tout en respectant les contraintes réglementaires.\n\nConseil critique : ouvrir un PEA dès aujourd'hui, même avec 10 €. Le compteur des 5 ans démarre à la date du premier versement. Chaque mois d'attente est un mois d'avantage fiscal perdu définitivement.`,
    related: ['cto', 'pfu', 'replication-synthetique', 'pea-pme'],
    modules: [
      { label: "Choisir son enveloppe", href: "/academie/bases/choisir-son-enveloppe" },
      { label: "Choisir son broker", href: "/academie/bases/choisir-son-broker" },
    ],
  },
  {
    slug: "pfu",
    label: "PFU — Prélèvement Forfaitaire Unique",
    category: 'Enveloppes fiscales',
    shortDef: "La flat tax de 31,4 % appliquée aux revenus du capital en France depuis 2018.",
    definition: `Le Prélèvement Forfaitaire Unique (PFU), aussi appelé "flat tax", est le régime fiscal par défaut appliqué aux revenus du capital en France : dividendes, plus-values sur cessions, intérêts. Son taux est de 31,4 % depuis janvier 2026 (12,8 % d'impôt sur le revenu + 18,6 % de prélèvements sociaux).\n\nLe PFU s'applique automatiquement sur le CTO. En PEA, il ne s'applique pas aux plus-values après 5 ans — seuls les 18,6 % de prélèvements sociaux restent dus. En assurance-vie, un abattement annuel s'applique après 8 ans avant la partie imposable.\n\nIl est possible d'opter pour le barème progressif de l'impôt sur le revenu au lieu du PFU si ton taux marginal d'imposition est inférieur à 12,8 % — cela concerne peu de contribuables en pratique.`,
    related: ['pea', 'cto', 'assurance-vie', 'dividende'],
    modules: [
      { label: "Choisir son enveloppe", href: "/academie/bases/choisir-son-enveloppe" },
    ],
  },
];
