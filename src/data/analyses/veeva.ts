// ─────────────────────────────────────────────────────────────────────────────
// Veeva Systems, Inc. - Analyse ponctuelle
// Ticker : VEEV | NYSE | USD | CTO (non eligible PEA)
// Derniere mise a jour : 2026-06-07
// Sources : 10-K FY2026 (cloture 31/01/2026), Annual Reports FY2022-FY2026,
//           communique + slides Q1 FY2027 (clos 30/04/2026, publies 03/06/2026),
//           Proxy 2025-2026, Excel consolide La These
// ─────────────────────────────────────────────────────────────────────────────
//
// NOTE METHODOLOGIQUE - EXERCICE DECALE (cloture 31 janvier)
//   Veeva cloture son exercice fiscal le 31 janvier. FYxx = exercice clos le
//   31/01/xx (FY2026 = 01/02/2025 au 31/01/2026). Toutes les series ci-dessous
//   sont datees en ANNEE FISCALE Veeva (FY2022 a FY2026).
//   ATTENTION : l'onglet "Indicateurs" du modele Excel est decale d'un an (sa
//   colonne "2025" = FY2026, libelle par annee calendaire dominante). Les onglets
//   Compte de resultat / Bilan / Segments sont, eux, dates en annee fiscale.
//   Le titre de l'onglet Bilan ("FY = 30 juin") est un artefact de template faux :
//   la vraie date est le 31/01. Convention retenue ici : annee fiscale partout.
//
// NOTE METHODOLOGIQUE - DEVISE
//   Veeva publie en USD. Les libelles "M$" du modele sont corrects (millions USD).
//
// NOTE METHODOLOGIQUE - TRESORERIE NETTE (convention pleine)
//   Pas de dette financiere (uniquement leases : 96 M$ FY2026). Tresorerie :
//   cash & equivalents 1 421 + placements court terme 5 140 = 6 561 M$ de liquidites.
//   Net cash PLEIN (incl. placements CT, qui sont la tresorerie de la societe) =
//   6 561 - 96 = 6 465 M$. Utilise pour EV, dette nette/EBITDA et le bridge equity
//   du DCF. NB : l'onglet Excel "dette nette" (-1 325 M$) ne nette QUE le cash &
//   equivalents et ignore les 5,1 Md$ de placements CT ; convention non retenue ici.
//
// NOTE METHODOLOGIQUE - PRODUITS FINANCIERS
//   Other income net = 278 M$ FY2026 (quasi exclusivement interets sur les 6,5 Md$
//   de cash, monte avec les taux). Pour la valorisation : operationnel valorise hors
//   ces interets, net cash ajoute a part (eviter le double comptage). [Q2 validee Pierre]
//
// NOTE METHODOLOGIQUE - SBC (remuneration en actions)
//   SBC FY2026 = 473 M$ (14,8 % du CA), reintegree dans le non-GAAP publie (cas
//   Autodesk, pas ServiceNow). Mais SBC en BAISSE en % du CA (pic 16,7 % FY2024).
//   Traitement La These :
//     - BPA normalise (calculateur PER) : GAAP + amort. incorporels d'acquisition
//       + reglement litige IQVIA (non-recurrent) + IS normalise a 21 %, SBC CONSERVEE
//       en charge. FY2026 = 5,86 $.
//     - DCF central : FCF owner = FCF publie - SBC apres IS (FCF - SBC x (1-21%)).
//       FY2026 : 1 386 - 373 = 1 013 M$. FCF publie = borne haute (scenario bull).
//   Trois bases FY2026 : BPA GAAP 5,44 $ | BPA normalise 5,86 $ | non-GAAP publie 8,10 $.
//   L'ecart non-GAAP - normalise (2,24 $) = exactement la SBC apres IS par action
//   (473 x 0,79 / 167,0). Doctrine appliquee ; pivot narratif = sortie Salesforce / IA
//   (PAS le "referendum SBC", deja l'angle Autodesk, et moins vrai ici).
//
// NOTE METHODOLOGIQUE - ROIC (double lecture)
//   ROIC standard La These FY2026 = 9,7 % (NOPAT 697 / IC = CP 7 215, dette plancher 0).
//   DEPRIME par les 6,5 Md$ de cash loges dans les capitaux propres. Le ROIC
//   OPERATIONNEL ex-tresorerie ressort > 100 % (NOPAT 697 / IC ex-cash 654) : c'est
//   la vraie economie asset-light. A commenter dans une <NoteAnalyse> du MDX.
//
// NOTE METHODOLOGIQUE - BETA / WACC
//   Beta 0,80 : regression mensuelle 5 ans vs S&P 500 Total Return (SPXTR),
//   convention La These US (confirme par Pierre).
//   Rf UST 10Y au 31/01/2026 : 4,15 % | ERP Damodaran US : 4,23 % (sans CRP)
//   Re = 4,15 + 0,80 x 4,23 = 7,53 % | dette quasi nulle -> WACC ~ Re = 7,53 %.
//
// NOTE METHODOLOGIQUE - SALESFORCE (a dater / quantifier)
//   Vault CRM (sur la plateforme Vault detenue par Veeva, hebergee AWS) GA avril 2024.
//   L'ancienne plateforme Salesforce supporte le parc Veeva CRM jusqu'au 31/12/2029.
//   Migration EN COURS, pas terminee : 150+ clients Vault CRM live (+27 au Q1 FY27).
//   Veeva classe elle-meme la migration en facteur de risque (disruption clients).
//   => emancipation PLATEFORME actee (tout le nouveau tourne sur Vault), migration du
//   PARC CRM en cours. Risque d'execution encore vivant cote Commercial (45 % du CA).
//
// NOTE METHODOLOGIQUE - ANCRAGE TTM (dernier trimestre valide)
//   Snapshot ancre sur le TTM clos au Q1 FY2027 (30/04/2026) : P&L = 4 trimestres
//   glissants (FY2026 + Q1 FY2027 - Q1 FY2026), bilan au 30/04/2026, cours de
//   cloture Q1 155,97 $ (courant 172,61 $ mentionne). Les SERIES historiques des
//   graphiques restent en annee fiscale (FY2022-FY2026). Q1 FY2027 : acquisition
//   Ostro (IA conversationnelle, mars 2026, +48 M$ de goodwill) ; rachats poursuivis
//   (227 M$ au Q1, soit ~397 M$ sur les 12 derniers mois) ; actions diluees en
//   leger repli (167,0 M FY2026 -> 166,0 M) sous l'effet des rachats.
//
// VALORISATION - A FINALISER avec Pierre (DCF FCF owner + calculateur PER normalise)
//   Methode primaire : PER sur BPA normalise. Methode de controle : DCF FCF owner.
//   Snapshot TTM (clos Q1 FY2027) au cours de cloture Q1 155,97 $ : PER normalise
//   25,5x | PER GAAP 27,5x | PER non-GAAP 18,5x | EV/EBITDA 18,8x | EV/Sales 5,6x |
//   FCF owner yield (EV) 5,4 %. Au cours courant 172,61 $ (05/06/2026) : PER norm 28,2x.
//   Le titre a de-rate de ~306 $ (sept. 2025) a ~156-173 $ : forward PER non-GAAP ~34x -> ~19x.
//   prixCible 317-404 (PER central 361 +/- MoE 12 %). conviction forte ; positionnement
//   surveillance (Pierre hors position, PF deja trop expose tech) ; MoS correcte (decote 23-30 %).
// ─────────────────────────────────────────────────────────────────────────────

import type { AnalyseCard } from '@/types/analyses'

export const veeva: AnalyseCard = {
  slug:           'veeva',
  type:           'ponctuelle',
  title:          'Veeva Systems, Inc.',
  ticker:         'VEEV',
  secteur:        'Santé',              // GICS Health Care (Health Care Technology) - editeur vertical sciences de la vie
  geo:            'États-Unis',
  conviction:     'forte',              // moat wide consolide (exceptionnel R&D/Vault, narrow Commercial)
  positionnement: 'surveillance',       // dossier attractif mais Pierre hors position : PF deja trop expose tech
  lastUpdated:    '2026-06-07',
  statut:         'actif',
  portefeuille:   'CTO',
  horizon:        '5 ans',
  excerpt:        "Le cloud metier des sciences de la vie : CRM pharma (Commercial Cloud) et gestion documentaire reglementaire (Vault). 1 500+ clients dont toute la Big Pharma, 99 % de revenus recurrents, marge brute 76 %, 6,5 Md$ de tresorerie nette, zero dette. Veeva s'affranchit de la plateforme Salesforce (Vault CRM, migration jusqu'a fin 2029) et bascule vers l'IA agentique. Le titre a perdu 44 % depuis septembre 2025 : la prime de qualite se degonfle.",
  glossaire:      ['moat', 'couts-de-changement', 'saas', 'free-cash-flow', 'stock-based-compensation', 'roic'],
  logo:           '/analyse/veeva-systems.png',
  // Prix cible 5 ans central : BPA normalise FY2031 12,88 $ x PER 28x = 361 $, MoE beta 0,80 x 15 % = 12 % -> 317-404
  prixCible:      { bas: 317, haut: 404, devise: 'USD' },
  marginOfSafety: 'correcte',           // decote ~23 % sur zone juste centrale r10 (224 $), ~30 % sur DCF central (248 $)
  readingTime:    50,                   // (8294 mots / 200) + (36 visuels x 0,25)
  onePager: {
    thesis:    "Le cloud metier des sciences de la vie. 1 500+ labos, marge brute 76 %, net cash 6,5 Md$. Sortie de Salesforce, cap sur l'IA agentique.",
    cours:     172.61,
    coursDate: '2026-06-05',
    devise:    'USD',
    range52w:  { low: 151.43, high: 306.22 },
  },

  // ── Metriques snapshot TTM (clos Q1 FY2027, 30/04/2026), cours cloture Q1 155,97 $ ─
  // Ancrage sur le dernier trimestre valide : P&L TTM (4 trim. glissants), bilan
  // 30/04/2026, ~166,0 M actions diluees. Cours de cloture Q1 155,97 $ (courant 172,61 $).
  // Capitalisation 25,9 Md$ | net cash plein 7 210 M$ | EV ~18,7 Md$.
  // per : BPA normalise La These TTM 6,13 $ -> 25,5x (controle : PER GAAP 27,5x sur
  //       5,67 $ ; PER non-GAAP 18,5x sur 8,41 $). Au cours courant 172,61 $ : 28,2x.
  // evEbitda : EV 18 680 / EBITDA TTM 995 = 18,8x
  // fcfYield : FCF owner run-rate FY2026 1 013 / EV 18 680 = 5,4 % (TTM brut 6,8 %,
  //            gonfle par le timing d'encaissement du Q1 ; FCF publie run-rate / EV 7,4 %)
  // roic : NOPAT TTM 724 / IC = CP 7 304 = 9,9 % (ex-cash > 100 %, voir note)
  // detteEbitda : net cash plein -7 210 / EBITDA 995 = -7,2x (cash & equiv seuls : -1,8x)
  // dso : base FY2026 (creances brutes 1 310 / CA 3 195 x 365 = 149,7 j). NB : au
  //       30/04 le DSO chute a ~62 j (creux saisonnier post-encaissement Q4), d'ou
  //       le maintien de la base annuelle, plus representative.
  metrics: {
    per:               25.5,    // BPA normalise La These TTM (SBC en charge), cours cloture Q1
    evEbitda:          18.8,
    fcfYield:          5.4,     // FCF owner run-rate / EV
    roic:              9.9,     // IC = CP seuls (tresorerie nette structurelle)
    wacc:              7.5,
    detteEbitda:       -7.2,    // Net cash plein (incl. placements CT)
    croissanceCA3ans:  14.0,    // CAGR CA FY2023-FY2026
    croissanceBPA3ans: 23.7,    // CAGR BPA non-GAAP ajuste FY2023-FY2026 (normalise 4 ans : 22,7 %)
    margeEbit:         28.8,    // EBIT GAAP TTM / CA (non-GAAP ~44 %)
    margeBrute:        75.0,
    payoutRatio:       0,       // Pas de dividende
    currentRatio:      4.7,     // Tres eleve : cash + placements CT
    dso:               149.7,
  },

  // ── Tendances visuelles (badge fleche fiche index) ─────────────────────────
  tendances: {
    per:       'baisse',    // PER normalise 99x (FY22) -> 38x (FY26) -> 29x (courant) : de-rating
    fcfYield:  'hausse',    // 1,8 % (FY22) -> 3,7 % (FY26)
    roic:      'hausse',    // creux 8,3 % (FY24) -> 9,7 % (FY26) : levier operationnel
    margeEbit: 'hausse',    // 18,2 % (FY24) -> 28,7 % (FY26)
  },

  // ── Historique des mises a jour ────────────────────────────────────────────
  updates: [
    {
      date: '2026-06-07',
      note: "Creation de la fiche. Donnees FY2026 (cloture 31/01/2026), Q1 FY2027, guidance FY2027.",
    },
    {
      date: '2026-08-26',
      note: 'Resultats Q2 FY2027 attendus (cloture 31/07/2026).',
    },
    {
      date: '2027-03-04',
      note: 'Resultats Q4 / FY2027 attendus (cloture 31/01/2027).',
    },
  ],

  chartData: {

    // ── CA FY2022-FY2026 (M$) ────────────────────────────────────────────────
    // CAGR 4 ans : (3 195 / 1 851)^(1/4) - 1 = 14,6 %. Croissance FY2026 +16,3 %.
    // Guidance FY2027 : ~3 640 M$ (+13,9 %).
    revenue: [
      { year: 2022, value: 1850.8 },
      { year: 2023, value: 2155.1 },
      { year: 2024, value: 2363.7 },
      { year: 2025, value: 2746.6 },
      { year: 2026, value: 3195.3 },
    ],

    // ── Repartition geographique FY2026 ──────────────────────────────────────
    // Source 10-K (localisation client). Amerique du Nord incl. Canada.
    geoRevenue: [
      { region: 'Amérique du Nord',  pct: 59.6 },
      { region: 'Europe',            pct: 29.4 },
      { region: 'Asie-Pacifique',    pct: 8.8  },
      { region: 'Reste du monde',    pct: 2.2  },
    ],

    // ── Marges FY2022-FY2026 (%) ─────────────────────────────────────────────
    // gross : (CA - cout des revenus) / CA | operating : EBIT GAAP / CA | net : NI / CA
    // Creux de marge EBIT FY2024 (18,2 %) : pic d'investissement R&D (Vault, Data
    // Cloud) + montee SBC. Redressement net FY2025-FY2026 (levier operationnel).
    marges: [
      { year: 2022, gross: 72.8, operating: 27.3, net: 23.1 },
      { year: 2023, gross: 71.7, operating: 21.3, net: 22.6 },
      { year: 2024, gross: 71.3, operating: 18.2, net: 22.2 },
      { year: 2025, gross: 74.5, operating: 25.2, net: 26.0 },
      { year: 2026, gross: 75.5, operating: 28.7, net: 28.4 },
    ],

    // ── ROIC La These FY2022-FY2026 (%) ──────────────────────────────────────
    // IC = CP + max(dette nette, 0) = CP seuls (tresorerie nette structurelle).
    // NOPAT = EBIT x (1 - taux IS effectif). Niveau DEPRIME par les 6,5 Md$ de
    // cash dans les CP : le ROIC operationnel ex-cash depasse 100 % (voir note).
    roic: [
      { year: 2022, value: 14.5 },
      { year: 2023, value: 11.8 },
      { year: 2024, value: 8.3  },
      { year: 2025, value: 9.2  },
      { year: 2026, value: 9.7  },
    ],

    // ── ROIC vs WACC (%) ──────────────────────────────────────────────────────
    // Spread positif toutes annees sauf FY2024 (creux de rentabilite). FY2022 WACC
    // bas (5,2 %) car Rf 1,84 %. Spread structurellement positif mais ecrase par le cash.
    roicVsWacc: [
      { year: 2022, value: 14.5, wacc: 5.24 },
      { year: 2023, value: 11.8, wacc: 8.24 },
      { year: 2024, value: 8.3,  wacc: 7.56 },
      { year: 2025, value: 9.2,  wacc: 7.85 },
      { year: 2026, value: 9.7,  wacc: 7.53 },
    ],

    // ── Free Cash Flow FY2022-FY2026 (M$) ────────────────────────────────────
    // FCF = OCF - capex (achats d'immobilisations + actifs long terme). Capex
    // negligeable (< 1 % du CA) : Veeva LOUE son campus, modele asset-light pur.
    // NB : Veeva publie un "free cash flow" = OCF (capex immateriel) : 1 415 M$ FY2026.
    fcf: [
      { year: 2022, value: 750.3  },
      { year: 2023, value: 767.0  },
      { year: 2024, value: 885.1  },
      { year: 2025, value: 1069.6 },
      { year: 2026, value: 1386.1 },
    ],

    // ── CA par solution Commercial / R&D (M$) ────────────────────────────────
    // Les deux segments reportes par Veeva. NB : ils ne recouvrent pas exactement
    // "Commercial Cloud vs Vault" (Vault Commercial est en Commercial ; Vault
    // Clinical/Regulatory/Quality/Safety est en R&D). Fait marquant : R&D (Vault)
    // a DEPASSE Commercial en FY2025 et croit ~2x plus vite (+20 % vs +12 % en FY2026).
    // total.show = false : pas de segment negatif, le cumul se lit a la barre.
    segmentRevenue: {
      unit: 'M$',
      total: { show: false, label: 'CA total' },
      data: [
        { year: 2022, segments: [
          { name: 'Commercial Solutions', value: 1041.5 },
          { name: 'R&D Solutions',        value: 809.2  },
        ]},
        { year: 2023, segments: [
          { name: 'Commercial Solutions', value: 1123.4 },
          { name: 'R&D Solutions',        value: 1031.6 },
        ]},
        { year: 2024, segments: [
          { name: 'Commercial Solutions', value: 1181.8 },
          { name: 'R&D Solutions',        value: 1181.9 },
        ]},
        { year: 2025, segments: [
          { name: 'Commercial Solutions', value: 1290.2 },
          { name: 'R&D Solutions',        value: 1456.4 },
        ]},
        { year: 2026, segments: [
          { name: 'Commercial Solutions', value: 1446.9 },
          { name: 'R&D Solutions',        value: 1748.4 },
        ]},
      ],
    },

    // ── Graphiques de valorisation comparee ──────────────────────────────────
    // Sources : Excel de Pierre (Comparaison sectorielle) pour Veeva + Salesforce +
    // IQVIA + Medidata (Dassault) + Guidewire (meme extraction, base trailing).
    // ServiceNow et Autodesk ajoutes depuis leurs fiches La These (snapshot FY-end ;
    // base legerement differente, a re-homogeneiser si besoin). Veeva : PER trailing
    // GAAP 30,6x, EV/EBITDA 20,5x (EBITDA TTM), ROIC 9,1 %, croissance 16,3 %.
    valuationCharts: [
      {
        id: 'vs_secteur', type: 'radar',
        title: 'Veeva vs mediane sectorielle (SaaS sante / vertical)',
        data: [
          { label: 'PER',             valeur: 30.6, secteur: 24.8 },
          { label: 'EV/EBITDA',       valeur: 20.5, secteur: 16.3 },
          { label: 'P/FCF',           valeur: 19.9, secteur: 17.6 },
          { label: 'Marge EBIT %',    valeur: 30.9, secteur: 13.6 },
          { label: 'ROIC %',          valeur: 9.1,  secteur: 5.2  },
          { label: 'FCF Yield %',     valeur: 5.0,  secteur: 5.7  },
          { label: 'Dette/EBITDA',    valeur: -1.3, secteur: 0.8  },
          { label: 'TCAC CA 3 ans %', valeur: 16.3, secteur: 14.5 },
        ],
      },
      {
        id: 'vs_iqvia', type: 'radar',
        title: 'Veeva vs IQVIA (concurrent CRM / data, allie a Salesforce)',
        concurrent1: 'IQVIA',
        data: [
          { label: 'PER',             valeur: 30.6, concurrent1: 22.8 },
          { label: 'EV/EBITDA',       valeur: 20.5, concurrent1: 15.0 },
          { label: 'P/FCF',           valeur: 19.9, concurrent1: 14.9 },
          { label: 'Marge EBIT %',    valeur: 30.9, concurrent1: 13.6 },
          { label: 'ROIC %',          valeur: 9.1,  concurrent1: 5.2  },
          { label: 'FCF Yield %',     valeur: 5.0,  concurrent1: 6.7  },
          { label: 'Dette/EBITDA',    valeur: -1.3, concurrent1: 4.7  },
          { label: 'TCAC CA 3 ans %', valeur: 16.3, concurrent1: 8.4  },
        ],
      },
      {
        id: 'vs_crm', type: 'radar',
        title: 'Veeva vs Salesforce (ex-hote de plateforme, concurrent CRM)',
        concurrent1: 'Salesforce',
        data: [
          { label: 'PER',             valeur: 30.6, concurrent1: 21.5 },
          { label: 'EV/EBITDA',       valeur: 20.5, concurrent1: 14.2 },
          { label: 'P/FCF',           valeur: 19.9, concurrent1: 10.6 },
          { label: 'Marge EBIT %',    valeur: 30.9, concurrent1: 21.8 },
          { label: 'ROIC %',          valeur: 9.1,  concurrent1: 5.5  },
          { label: 'FCF Yield %',     valeur: 5.0,  concurrent1: 9.5  },
          { label: 'Dette/EBITDA',    valeur: -1.3, concurrent1: 0.8  },
          { label: 'TCAC CA 3 ans %', valeur: 16.3, concurrent1: 13.3 },
        ],
      },
      {
        id: 'vs_medidata', type: 'radar',
        title: 'Veeva vs Medidata / Dassault Systemes (concurrent clinique)',
        concurrent1: 'Dassault',
        data: [
          { label: 'PER',             valeur: 30.6, concurrent1: 21.4 },
          { label: 'EV/EBITDA',       valeur: 20.5, concurrent1: 14.1 },
          { label: 'P/FCF',           valeur: 19.9, concurrent1: 17.6 },
          { label: 'Marge EBIT %',    valeur: 30.9, concurrent1: 23.4 },
          { label: 'ROIC %',          valeur: 9.1,  concurrent1: 8.4  },
          { label: 'FCF Yield %',     valeur: 5.0,  concurrent1: 5.7  },
          { label: 'Dette/EBITDA',    valeur: -1.3, concurrent1: -0.6 },
          { label: 'TCAC CA 3 ans %', valeur: 16.3, concurrent1: -4.1 },
        ],
      },
      {
        id: 'vs_now', type: 'radar',
        title: 'Veeva vs ServiceNow (cousin vertical SaaS)',
        concurrent1: 'ServiceNow',
        data: [
          { label: 'PER',             valeur: 30.6, concurrent1: 43.7 },
          { label: 'EV/EBITDA',       valeur: 20.5, concurrent1: 49.7 },
          { label: 'P/FCF',           valeur: 19.9, concurrent1: 22.7 },
          { label: 'Marge EBIT %',    valeur: 30.9, concurrent1: 13.7 },
          { label: 'ROIC %',          valeur: 9.1,  concurrent1: 10.9 },
          { label: 'FCF Yield %',     valeur: 5.0,  concurrent1: 4.4  },
          { label: 'Dette/EBITDA',    valeur: -1.3, concurrent1: -0.7 },
          { label: 'TCAC CA 3 ans %', valeur: 16.3, concurrent1: 22.4 },
        ],
      },
      {
        id: 'vs_adsk', type: 'radar',
        title: 'Veeva vs Autodesk (cousin SaaS, doctrine SBC)',
        concurrent1: 'Autodesk',
        data: [
          { label: 'PER',             valeur: 30.6, concurrent1: 33.4 },
          { label: 'EV/EBITDA',       valeur: 20.5, concurrent1: 19.3 },
          { label: 'P/FCF',           valeur: 19.9, concurrent1: 20.5 },
          { label: 'Marge EBIT %',    valeur: 30.9, concurrent1: 21.9 },
          { label: 'ROIC %',          valeur: 9.1,  concurrent1: 31.3 },
          { label: 'FCF Yield %',     valeur: 5.0,  concurrent1: 4.9  },
          { label: 'Dette/EBITDA',    valeur: -1.3, concurrent1: 0.2  },
          { label: 'TCAC CA 3 ans %', valeur: 16.3, concurrent1: 12.9 },
        ],
      },
    ],

    // ── Metriques libres sur 5 ans ───────────────────────────────────────────
    metricHistory: [

      // ── EV/EBITDA historique ─────────────────────────────────────────────
      // EV = capitalisation (cours close Dec-31) - net cash plein. Moyenne 5 ans
      // 50,7x gonflee par FY2022 (sommet 73x). Compression structurelle post-ZIRP.
      {
        label: 'EV_EBITDA',
        name:  'EV/EBITDA',
        unit:  'x',
        data: [
          { year: 2022, value: 73.4 },
          { year: 2023, value: 47.5 },
          { year: 2024, value: 59.5 },
          { year: 2025, value: 40.6 },
          { year: 2026, value: 32.3 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 50.7 },
              { year: 2023, value: 50.7 },
              { year: 2024, value: 50.7 },
              { year: 2025, value: 50.7 },
              { year: 2026, value: 50.7 },
            ],
          },
        ],
      },

      // ── OCF / FCF / Capex (M$) ───────────────────────────────────────────
      // Asset-light pur : capex < 1 % du CA (campus loue). FCF ~ OCF.
      // Conversion FCF/EBITDA structurellement > 100 % (encaissements d'avance).
      {
        label: 'FCF_OCF_Capex',
        name:  'Cash Flow Operationnel',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2022, value: 764.5  },
          { year: 2023, value: 780.5  },
          { year: 2024, value: 911.3  },
          { year: 2025, value: 1090.1 },
          { year: 2026, value: 1415.2 },
        ],
        competitors: [
          {
            name:  'Free Cash Flow',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 750.3  },
              { year: 2023, value: 767.0  },
              { year: 2024, value: 885.1  },
              { year: 2025, value: 1069.6 },
              { year: 2026, value: 1386.1 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2022, value: 14.2 },
              { year: 2023, value: 13.5 },
              { year: 2024, value: 26.2 },
              { year: 2025, value: 20.5 },
              { year: 2026, value: 29.1 },
            ],
          },
        ],
      },

      // ── BPA : normalise (La These) vs GAAP vs non-GAAP publie ($) ─────────
      // Le coeur de la doctrine SBC : le non-GAAP (SBC reintegree) surevalue de
      // ~2,2 $/action (= SBC apres IS). Le normalise (SBC en charge) est la base
      // du calculateur PER. FY2023 GAAP gonfle par un taux d'IS de 4 % (vs 21 %
      // normalise) : le normalise corrige cette distorsion.
      {
        label: 'EPS',
        name:  'BPA normalise La These',
        unit:  '$',
        data: [
          { year: 2022, value: 2.58 },
          { year: 2023, value: 2.57 },
          { year: 2024, value: 2.94 },
          { year: 2025, value: 4.51 },
          { year: 2026, value: 5.86 },
        ],
        competitors: [
          {
            name:  'BPA GAAP dilue',
            color: '#A8A29E',
            data: [
              { year: 2022, value: 2.63 },
              { year: 2023, value: 3.00 },
              { year: 2024, value: 3.22 },
              { year: 2025, value: 4.32 },
              { year: 2026, value: 5.44 },
            ],
          },
          {
            name:   'BPA non-GAAP publie (SBC reintegree)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 3.73 },
              { year: 2023, value: 4.28 },
              { year: 2024, value: 4.84 },
              { year: 2025, value: 6.60 },
              { year: 2026, value: 8.10 },
            ],
          },
        ],
      },

      // ── Billings reconstruits (M$) ───────────────────────────────────────
      // Billings = CA + variation du deferred revenue. Indicateur de dynamique
      // commerciale. Au-dessus du CA reconnu toutes annees (croissance saine).
      // Guidance FY2027 : billings normalises ~3 825 M$.
      {
        label: 'Billings',
        name:  'Billings (CA + var. produits constates d\'avance)',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2022, value: 1965 },
          { year: 2023, value: 2293 },
          { year: 2024, value: 2544 },
          { year: 2025, value: 2971 },
          { year: 2026, value: 3410 },
        ],
        competitors: [
          {
            name:   'Chiffre d\'affaires',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2022, value: 1851 },
              { year: 2023, value: 2155 },
              { year: 2024, value: 2364 },
              { year: 2025, value: 2747 },
              { year: 2026, value: 3195 },
            ],
          },
        ],
      },

      // ── ROCE vs WACC vs ROIC (%) ─────────────────────────────────────────
      // ROCE = NOPAT / (CP + dette totale - tresorerie). Proche du ROIC (net cash).
      {
        label: 'ROCE',
        name:  'ROCE',
        unit:  '%',
        yMin:  0,
        data: [
          { year: 2022, value: 17.1 },
          { year: 2023, value: 12.2 },
          { year: 2024, value: 9.2  },
          { year: 2025, value: 11.7 },
          { year: 2026, value: 12.6 },
        ],
        competitors: [
          {
            name:  'WACC',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 5.24 },
              { year: 2023, value: 8.24 },
              { year: 2024, value: 7.56 },
              { year: 2025, value: 7.85 },
              { year: 2026, value: 7.53 },
            ],
          },
          {
            name:   'ROIC',
            color:  '#2D6A4F',
            dashed: true,
            data: [
              { year: 2022, value: 14.5 },
              { year: 2023, value: 11.8 },
              { year: 2024, value: 8.3  },
              { year: 2025, value: 9.2  },
              { year: 2026, value: 9.7  },
            ],
          },
        ],
      },

      // ── ROIIC annuel (%) ─────────────────────────────────────────────────
      // ROIIC(N) = delta NOPAT(N) / delta IC(N-1). FY2024 negatif (creux de marge
      // + forte hausse de l'IC liee a l'accumulation de cash). Volatilite normale.
      {
        label: 'ROIIC_YoY',
        name:  'ROIIC annuel',
        unit:  '%',
        data: [
          { year: 2023, value: 2.8  },
          { year: 2024, value: -7.0 },
          { year: 2025, value: 16.5 },
          { year: 2026, value: 13.5 },
        ],
      },

      // ── ROIIC glissant multi-periodes (%) ────────────────────────────────
      {
        label: 'ROIIC',
        name:  'ROIIC glissant (1 a 4 ans)',
        unit:  '%',
        data: [
          { year: 1, value: 13.5 },
          { year: 2, value: 14.8 },
          { year: 3, value: 8.8  },
          { year: 4, value: 7.7  },
        ],
      },

      // ── PER historique (BPA normalise) et PER ajuste taux ────────────────
      // Base : BPA normalise (SBC en charge). PER ajuste taux = PER x (Re moyen
      // planche / Re(N)), Rf planche a 2 % (FY2022). Moyenne 5 ans 62,4x (gonflee
      // par FY2022). Compression vers ~38x (FY2026), ~29x au cours courant.
      {
        label: 'PER',
        name:  'PER (BPA normalise)',
        unit:  'x',
        data: [
          { year: 2022, value: 98.9 },
          { year: 2023, value: 62.8 },
          { year: 2024, value: 65.6 },
          { year: 2025, value: 46.6 },
          { year: 2026, value: 38.1 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 62.4 },
              { year: 2023, value: 62.4 },
              { year: 2024, value: 62.4 },
              { year: 2025, value: 62.4 },
              { year: 2026, value: 62.4 },
            ],
          },
          {
            name:   'PER ajuste taux',
            color:  '#52B788',
            dashed: true,
            data: [
              { year: 2022, value: 134.1 },
              { year: 2023, value: 55.7  },
              { year: 2024, value: 63.4  },
              { year: 2025, value: 43.4  },
              { year: 2026, value: 37.0  },
            ],
          },
        ],
      },

      // ── FCF Yield historique (%) ─────────────────────────────────────────
      // FCF Yield (cap) = FCF / capitalisation FY-end. Spread vs UST10Y devenu
      // negatif depuis FY2025 (le taux sans risque depasse le FCF yield) : la rente
      // est de croissance, pas obligataire.
      {
        label: 'FCFy',
        name:  'FCF Yield (capitalisation)',
        unit:  '%',
        data: [
          { year: 2022, value: 1.8 },
          { year: 2023, value: 2.9 },
          { year: 2024, value: 2.8 },
          { year: 2025, value: 3.1 },
          { year: 2026, value: 3.7 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 2.9 },
              { year: 2023, value: 2.9 },
              { year: 2024, value: 2.9 },
              { year: 2025, value: 2.9 },
              { year: 2026, value: 2.9 },
            ],
          },
          {
            name:  'UST 10Y (taux sans risque)',
            color: '#52B788',
            data: [
              { year: 2022, value: 1.84 },
              { year: 2023, value: 3.49 },
              { year: 2024, value: 3.88 },
              { year: 2025, value: 4.39 },
              { year: 2026, value: 4.15 },
            ],
          },
        ],
      },

      // ── DSO / DIO / DPO / CCC (jours) ─────────────────────────────────────
      // SaaS : DIO = 0 (pas de stocks). DSO eleve (137-150 j) et croissant :
      // facturation annuelle d'avance + cloture 31/01 juste apres la vague de
      // renouvellements du Q4. CCC peu informatif, garde pour memoire.
      {
        label: 'CCC_resume',
        name:  'Days Sales Outstanding',
        unit:  'J',
        heightMultiplier: 1.5,
        data: [
          { year: 2022, value: 137.0 },
          { year: 2023, value: 133.0 },
          { year: 2024, value: 137.2 },
          { year: 2025, value: 140.5 },
          { year: 2026, value: 149.7 },
        ],
        competitors: [
          {
            name:  'Days Inventory Outstanding',
            color: '#2D6A4F',
            data: [
              { year: 2022, value: 0 },
              { year: 2023, value: 0 },
              { year: 2024, value: 0 },
              { year: 2025, value: 0 },
              { year: 2026, value: 0 },
            ],
          },
          {
            name:  'Days Payable Outstanding',
            color: '#77bd92',
            data: [
              { year: 2022, value: 14.7 },
              { year: 2023, value: 25.0 },
              { year: 2024, value: 17.0 },
              { year: 2025, value: 15.9 },
              { year: 2026, value: 17.6 },
            ],
          },
          {
            name:  'Cash Conversion Cycle',
            color: '#C9A84C',
            data: [
              { year: 2022, value: 122.2 },
              { year: 2023, value: 108.0 },
              { year: 2024, value: 120.2 },
              { year: 2025, value: 124.6 },
              { year: 2026, value: 132.1 },
            ],
          },
        ],
      },

      // ── Current Ratio ─────────────────────────────────────────────────────
      // Tres eleve (3,7 -> 4,9x) : montagne de cash + placements CT face a un passif
      // courant tire par le deferred revenue (1 489 M$ FY2026, abonnements prepayes).
      {
        label: 'CR',
        name:  'Current Ratio',
        unit:  'x',
        data: [
          { year: 2022, value: 3.70 },
          { year: 2023, value: 3.94 },
          { year: 2024, value: 4.24 },
          { year: 2025, value: 4.51 },
          { year: 2026, value: 4.89 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 4.26 },
              { year: 2023, value: 4.26 },
              { year: 2024, value: 4.26 },
              { year: 2025, value: 4.26 },
              { year: 2026, value: 4.26 },
            ],
          },
        ],
      },

      // ── Dette nette / EBITDA (net cash plein) ─────────────────────────────
      // Convention pleine : (cash + placements CT - leases) / EBITDA. Tresorerie
      // nette massive et structurelle (-4 a -9x). NB : sur cash & equivalents seuls,
      // le ratio ressort a ~-1,4x (convention non retenue).
      {
        label: 'DETTE_EBITDA',
        name:  'Dette nette / EBITDA',
        unit:  'x',
        data: [
          { year: 2022, value: -4.36 },
          { year: 2023, value: -6.23 },
          { year: 2024, value: -8.60 },
          { year: 2025, value: -6.94 },
          { year: 2026, value: -6.77 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: -6.58 },
              { year: 2023, value: -6.58 },
              { year: 2024, value: -6.58 },
              { year: 2025, value: -6.58 },
              { year: 2026, value: -6.58 },
            ],
          },
        ],
      },

      // ── Asset Turnover ────────────────────────────────────────────────────
      // CA / Total actifs. Baisse (0,48 -> 0,36x) : le bilan gonfle plus vite que le
      // CA, tire par l'accumulation de cash et de placements (pas par des actifs
      // operationnels). Lecture trompeuse : l'operationnel reste hyper-leger.
      {
        label: 'AT',
        name:  'Asset Turnover',
        unit:  'x',
        data: [
          { year: 2022, value: 0.48 },
          { year: 2023, value: 0.45 },
          { year: 2024, value: 0.40 },
          { year: 2025, value: 0.37 },
          { year: 2026, value: 0.36 },
        ],
        competitors: [
          {
            name:   'Moyenne historique (5 ans)',
            color:  '#C9A84C',
            dashed: true,
            data: [
              { year: 2022, value: 0.41 },
              { year: 2023, value: 0.41 },
              { year: 2024, value: 0.41 },
              { year: 2025, value: 0.41 },
              { year: 2026, value: 0.41 },
            ],
          },
        ],
      },

      // ── Variation annuelle du nombre d'actions diluees (%) ────────────────
      // Dilution maitrisee (0,1 -> 1,1 % par an) : la SBC dilue mais le premier
      // rachat (170 M$ FY2026) commence a compenser. Pas de split.
      {
        label: 'Dilution',
        name:  'Variation du nombre d\'actions (%)',
        unit:  '%',
        data: [
          { year: 2023, value: 0.10 },
          { year: 2024, value: 0.65 },
          { year: 2025, value: 1.07 },
          { year: 2026, value: 1.07 },
        ],
      },

      // ── R&D en % du CA ────────────────────────────────────────────────────
      // R&D structurellement eleve (21-27 %) : investissement Vault, Data Cloud,
      // Veeva AI. Pic FY2024 (26,6 %) qui a comprime la marge, puis stabilisation.
      {
        label: 'RD_CA',
        name:  'R&D en % du CA',
        unit:  '%',
        data: [
          { year: 2022, value: 20.6 },
          { year: 2023, value: 24.1 },
          { year: 2024, value: 26.6 },
          { year: 2025, value: 25.2 },
          { year: 2026, value: 24.0 },
        ],
      },

      // ── Allocation du capital - rachats vs Capex (M$) ─────────────────────
      // Pas de dividende. Premier programme de rachat en FY2026 (170 M$) : debut
      // de retour au capital apres des annees de thesaurisation. Capex negligeable.
      {
        label: 'Capex_Action',
        name:  'Allocation du capital',
        unit:  'M$',
        yMin:  0,
        data: [
          { year: 2022, value: 0     },
          { year: 2023, value: 0     },
          { year: 2024, value: 0     },
          { year: 2025, value: 0     },
          { year: 2026, value: 169.9 },
        ],
        competitors: [
          {
            name:  'Rachats d\'actions',
            color: '#2D6A4F',
            data: [
              { year: 2022, value: 0     },
              { year: 2023, value: 0     },
              { year: 2024, value: 0     },
              { year: 2025, value: 0     },
              { year: 2026, value: 169.9 },
            ],
          },
          {
            name:   'Capex',
            color:  '#A8A29E',
            dashed: true,
            data: [
              { year: 2022, value: 14.2 },
              { year: 2023, value: 13.5 },
              { year: 2024, value: 26.2 },
              { year: 2025, value: 20.5 },
              { year: 2026, value: 29.1 },
            ],
          },
        ],
      },

    ],
  },
}
