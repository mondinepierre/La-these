import type { Metadata } from 'next';
import { Tableau } from '@/components/ui/Tableau';

export const metadata: Metadata = {
  title: 'Fiscalité des investissements',
  description:
    'Comprendre la fiscalité des placements financiers en France : PFU (Flat Tax), PEA, CTO, assurance-vie, plus-values et dividendes. Mis à jour pour 2026.',
};

// ─── Composants internes ─────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl font-bold mt-12 mb-4 pb-2 border-b"
      style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}
    >
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-lg font-semibold mt-8 mb-3"
      style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}
    >
      {children}
    </h3>
  );
}

function Callout({
  type = 'info',
  children,
}: {
  type?: 'info' | 'warning' | 'key';
  children: React.ReactNode;
}) {
  const styles: Record<string, { border: string; bg: string; icon: string }> = {
    info:    { border: 'var(--color-accent)', bg: 'var(--color-accent-muted)', icon: 'ℹ' },
    warning: { border: '#b45309',             bg: '#fef3c7',                   icon: '⚠' },
    key:     { border: 'var(--color-gold)',   bg: 'var(--color-gold-muted)',   icon: '★' },
  };
  const s = styles[type];
  return (
    <div
      className="flex gap-3 rounded-r-md py-4 px-5 my-5"
      style={{ borderLeft: `4px solid ${s.border}`, background: s.bg }}
    >
      <span className="shrink-0 font-bold text-sm mt-0.5" style={{ color: s.border }}>
        {s.icon}
      </span>
      {/* <p> garantit l'héritage de var(--font-serif) via la règle globale de globals.css */}
      <p className="m-0 leading-relaxed" style={{ color: 'var(--color-ink)' }}>
        {children}
      </p>
    </div>
  );
}


// ─── Page ────────────────────────────────────────────────────────────────────

export default function FiscalitePage() {
  return (
    <main className="max-w-content mx-auto px-6 py-12">

      {/* En-tête */}
      <div className="mb-10">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-3"
          style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-gold)' }}
        >
          Référence · France
        </p>
        <h1
          className="text-4xl font-bold mb-4 leading-tight"
          style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}
        >
          Fiscalité des investissements
        </h1>
        <p className="text-lg max-w-2xl leading-relaxed">
          Comment sont imposés vos gains en France selon l'enveloppe choisie.
          Une lecture obligatoire avant d'ouvrir un compte.
        </p>
        <p
          className="text-xs mt-3"
          style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-ink-muted)' }}
        >
          Mis à jour : mars 2026 · Réforme PFU 2026 intégrée
        </p>
      </div>

       <Callout type="info">
        Cette page présente les <strong>principes d'imposition</strong> des placements financiers pour un{' '}
        <strong>résident fiscal français</strong>. Pour savoir comment rapporter ces gains sur votre formulaire 2042, 
        consultez notre{' '}
        <a href="/declaration-fiscale" className="underline" style={{ color: 'var(--color-accent)' }}>
          Guide pratique de la déclaration →
        </a>
      </Callout>

      <Callout type="warning">
        <strong>Attention - nouveau taux depuis le 1er janvier 2026.</strong> Le PFU est passé
        de 30 % à <strong>31,4 %</strong> pour la majorité des revenus du capital. Cette page
        intègre les nouveaux taux en vigueur.
      </Callout>

      {/* ── 1. PFU ────────────────────────────────────────────────────────── */}
      <SectionTitle>Le PFU - Prélèvement Forfaitaire Unique</SectionTitle>

      <p className="mb-4 leading-relaxed">
        La Flat Tax, instaurée en 2018, est le régime d'imposition par défaut de la grande
        majorité des revenus financiers : dividendes, intérêts, plus-values mobilières. Son
        principe : un taux unique, identique quel que soit le niveau de revenus, prélevé à la
        source par l'établissement financier ou régularisé à la déclaration annuelle.
      </p>

      <SubTitle>Décomposition du taux 2026</SubTitle>
      <Tableau id="fiscalite-pfu-decomposition" />

      <Callout type="key">
        <strong>Exception : certains produits restent à 30 %.</strong> L'assurance-vie,
        les PEL/CEL ouverts avant 2018 et les PEP conservent des prélèvements sociaux à 17,2 %,
        soit un PFU global de 30 %. Les revenus fonciers et plus-values immobilières sont
        également maintenus à 17,2 % de PS.
      </Callout>

      <SubTitle>Ce que le PFU ne touche pas</SubTitle>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Livrets réglementés (Livret A, LDDS, LEP) - totalement exonérés</li>
        <li>Revenus fonciers - soumis au barème progressif de l'IR</li>
        <li>Plus-values immobilières - régime spécifique avec abattements pour durée de détention</li>
        <li>Salaires et pensions - imposés au barème progressif</li>
      </ul>

      <SubTitle>Option barème progressif</SubTitle>
      <p className="mb-4 leading-relaxed">
        À chaque déclaration annuelle, vous pouvez renoncer au PFU et opter pour l'imposition au
        barème progressif de l'impôt sur le revenu. Ce choix s'applique alors à l'ensemble de vos
        revenus du capital de l'année - dividendes, intérêts, plus-values. Il ne peut pas être
        sélectif.
      </p>
      <Tableau id="fiscalite-tmi" />

      <Callout type="info">
        <strong>La règle générale :</strong> si votre tranche marginale d'imposition est de 0 % ou 11 %, le barème
        progressif est souvent plus avantageux, notamment pour les dividendes (abattement de 40 %).<br /><br />

        À partir d'une TMI de 30 %, la situation devient plus nuancée. Le barème peut rester intéressant
        si vos revenus sont majoritairement composés de dividendes, tandis que le PFU est généralement
        préférable pour les plus-values et intérêts.<br /><br />

        Pour les TMI de 41 % et plus, le PFU est le plus souvent avantageux.<br /><br />

        La bonne réponse dépend de votre situation complète (revenus, composition, effets de seuil) -
        <strong>faites des simulations et/ou consultez un professionnel</strong>.
      </Callout>

      <Callout type="warning">
        <strong>Le risque :</strong> l'option pour le barème est globale. Des revenus du capital plus élevés
        peuvent vous faire franchir un seuil d'imposition (par exemple de 11 % à 30 %), ce qui augmente
        la fiscalité sur une partie de vos revenus et peut rendre l'imposition globale moins avantageuse
        que le PFU.
      </Callout>

      {/* ── 2. Comparatif enveloppes ──────────────────────────────────────── */}
      <SectionTitle>PEA, CTO, Assurance-vie - comparatif fiscal</SectionTitle>

      <p className="mb-4 leading-relaxed">
        Le choix de l'enveloppe est l'une des décisions les plus structurantes pour un
        investisseur de long terme. Les règles fiscales varient considérablement selon l'enveloppe,
        et l'avantage fiscal du PEA en fait la priorité pour un investisseur en actions européennes.
      </p>
      <Tableau id="fiscalite-enveloppes" />
      <p
        className="text-xs mt-1 mb-6"
        style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-ink-muted)' }}
      >
        * Taux indicatif après abattement, sur la part de gains retirée. Le calcul exact dépend
        du montant des versements et de la quote-part de gain.
      </p>

      <Callout type="key">
        <strong>Le PEA est l'enveloppe de référence pour un investisseur actions de long terme.</strong>{' '}
        Après 5 ans, seuls les prélèvements sociaux à 18,6 % s'appliquent sur les gains - contre
        31,4 % pour un CTO. Sur un horizon de 15 à 20 ans, cet écart représente des dizaines de
        milliers d'euros sur un portefeuille significatif.
      </Callout>

      {/* ── 3. Dividendes et revenus de placement ─────────────────────────── */}
      <SectionTitle>Dividendes et revenus de placement</SectionTitle>

      <SubTitle>Dividendes sur CTO</SubTitle>
      <p className="mb-4 leading-relaxed">
        Les dividendes perçus sur un compte-titres ordinaire sont soumis au PFU par défaut.
        Le mécanisme fonctionne en deux temps :
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-5">
        <li>
          Au moment du versement : votre broker prélève automatiquement un{' '}
          <strong>acompte de 12,8 %</strong> au titre de l'IR et les prélèvements sociaux (18,6 %)
          à la source.
        </li>
        <li>
          Lors de la déclaration annuelle : régularisation selon votre choix PFU ou barème progressif.
        </li>
      </ol>

      <Callout type="info">
        <strong>Abattement de 40 % sur les dividendes si option barème.</strong> Si vous optez
        pour le barème progressif, un abattement de 40 % s'applique sur les dividendes d'entreprises
        françaises ou européennes (soumises à l'IS). Cet abattement n'existe pas avec le PFU - c'est
        l'une des raisons pour lesquelles le barème peut être avantageux pour les contribuables dans
        les premières tranches.
      </Callout>

      <SubTitle>Intérêts sur la trésorerie du compte broker</SubTitle>
      <p className="mb-4 leading-relaxed">
        Certains brokers rémunèrent les liquidités non investies sur votre compte - c'est le cas
        de Trade Republic, IBKR ou Degiro sur les soldes en euros. Ces intérêts sont des{' '}
        <strong>revenus de placement imposables</strong>, au même titre que les intérêts d'un
        compte à terme. Ils sont soumis au PFU à 31,4 % (ou au barème progressif sur option).
      </p>
      <Callout type="warning">
        Ces intérêts apparaissent sur votre IFU annuel, en général dans la rubrique
        "Intérêts et produits assimilés". Ils ne sont pas toujours pré-remplis correctement
        par l'administration si votre broker est étranger (IBKR, Degiro…) - vérifiez systématiquement
        votre IFU avant de valider votre déclaration.
      </Callout>

      <SubTitle>Dividendes sur PEA</SubTitle>
      <p className="mb-6 leading-relaxed">
        Les dividendes perçus à l'intérieur d'un PEA ne sont pas imposés tant qu'ils restent dans
        le plan. Ils se réinvestissent librement. L'imposition n'intervient qu'au moment d'un retrait,
        et uniquement sur les prélèvements sociaux si le plan a plus de 5 ans.
      </p>

      {/* ── 4. Plus-values et moins-values ────────────────────────────────── */}
      <SectionTitle>Plus-values et moins-values mobilières</SectionTitle>

      <SubTitle>Principe général</SubTitle>
      <p className="mb-4 leading-relaxed">
        Une plus-value ou une moins-value mobilière est réalisée au moment de la{' '}
        <strong>vente</strong> d'un titre. Tant que vous détenez un titre, aucune imposition
        n'est déclenchée, même si la valeur a fortement augmenté - c'est le principe fondamental
        qui rend les enveloppes capitalisantes si puissantes sur le long terme.
      </p>

      <SubTitle>Calcul et compensation</SubTitle>
      <ul className="list-disc pl-6 space-y-2 mb-5">
        <li>La plus-value imposable = prix de vente − prix d'acquisition (frais inclus).</li>
        <li>
          Dans la même année, les moins-values viennent en déduction des plus-values. Seul le
          solde net est imposé.
        </li>
        <li>
          Si le solde de l'année est négatif, la perte est reportable sur les{' '}
          <strong>10 années suivantes</strong>.
        </li>
        <li>
          Un solde positif est imposé au taux de <strong>31,4 % (PFU)</strong> ou au barème
          progressif selon votre choix.
        </li>
      </ul>

      <Callout type="warning">
        <strong>Les moins-values ne se compensent pas entre PEA et CTO.</strong> Les pertes
        réalisées dans un PEA restent dans le PEA - elles ne peuvent pas être imputées sur des
        plus-values réalisées dans un CTO, et réciproquement. De même, les moins-values ne
        s'imputent pas sur des dividendes ou intérêts.
      </Callout>

      <SubTitle>Rétroactivité 2026 sur les plus-values 2025</SubTitle>
      <p className="mb-4 leading-relaxed">
        La hausse des prélèvements sociaux à 18,6 % s'applique aux plus-values mobilières réalisées
        sur l'exercice 2025. Si vous avez vendu des titres en 2025, le complément de prélèvements
        sociaux (1,4 point) vous sera réclamé lors de la déclaration de revenus du printemps 2026.
      </p>

      {/* ── Avertissement ─────────────────────────────────────────────────── */}
      <div
        className="mt-12 p-5 rounded-md "
        style={{ background: 'var(--color-stone-border)' }}
      >
        <p className="font-semibold mb-2 mt-0">Note importante</p>
        <p className="mt-0 mb-3">
          Cette page est une synthèse pédagogique à destination des investisseurs particuliers
          résidents fiscaux en France. Elle ne constitue pas un conseil fiscal ou patrimonial
          personnalisé. Les règles fiscales peuvent évoluer. Pour toute décision significative,
          consultez un conseiller fiscal ou un notaire.
        </p>
        <p className="mt-0 mb-0">
          Besoin d'aller plus loin ?{' '}
          <a
            href="/declaration-fiscale"
            className="underline"
            style={{ color: 'var(--color-accent)' }}
          >
            Guide pratique de la déclaration fiscale →
          </a>
        </p>
      </div>

    </main>
  );
}