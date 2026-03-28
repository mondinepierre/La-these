import type { Metadata } from 'next';
import { Tableau } from '@/components/ui/Tableau';

export const metadata: Metadata = {
  title: 'Déclarer ses investissements',
  description:
    'Guide pratique pour déclarer ses investissements en France : IFU, cases du formulaire 2042, plus-values CTO, PEA, assurance-vie et report de moins-values.',
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
      <p className="m-0 text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>
        {children}
      </p>
    </div>
  );
}

function CaseBox({ code, label, detail }: { code: string; label: string; detail: string }) {
  return (
    <div
      className="flex items-start gap-4 p-4 rounded-md my-3"
      style={{
        background: 'var(--color-stone-warm)',
        border: '1px solid var(--color-stone-border)',
      }}
    >
      <div
        className="shrink-0 text-sm font-bold px-2 py-1 rounded"
        style={{
          background: 'var(--color-accent)',
          color: 'var(--color-stone-warm)',
          fontFamily: 'monospace',
          letterSpacing: '0.05em',
        }}
      >
        {code}
      </div>
      <div>
        <p className="font-semibold text-sm mt-0 mb-0.5">{label}</p>
        <p
          className="text-xs mt-0 mb-0"
          style={{ color: 'var(--color-ink-muted)' }}
        >
          {detail}
        </p>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DeclarationFiscalePage() {
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
          Déclarer ses investissements
        </h1>
        <p className="text-lg max-w-2xl leading-relaxed">
          Guide pratique pour remplir sa déclaration de revenus quand on a un CTO, un PEA ou
          une assurance-vie. Pas à pas, sans jargon inutile.
        </p>
        <p
          className="text-xs mt-3"
          style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-ink-muted)' }}
        >
          Mis à jour : mars 2026 · Déclaration des revenus 2025 — campagne printemps 2026
        </p>
      </div>

      <Callout type="info">
        Cette page concerne la déclaration des revenus de placements financiers pour un{' '}
        <strong>résident fiscal français</strong> à titre personnel. Pour les règles d'imposition,
        consultez la page{' '}
        <a href="/fiscalite" className="underline" style={{ color: 'var(--color-accent)' }}>
          Fiscalité des investissements
        </a>.
      </Callout>

      {/* ── 1. L'IFU ──────────────────────────────────────────────────────── */}
      <SectionTitle>L'IFU — votre document de référence</SectionTitle>

      <p className="mb-4 leading-relaxed ">
        L'<strong>Imprimé Fiscal Unique (IFU)</strong> est le document que chaque établissement
        financier a l'obligation de vous transmettre au plus tard fin février de l'année suivante.
        Il récapitule l'ensemble des opérations fiscalement déclarables de l'année écoulée :
        dividendes perçus, intérêts (y compris les intérêts sur trésorerie non investie),
        plus-values et moins-values réalisées, et les acomptes prélevés à la source.
      </p>

      <Callout type="key">
        <strong>La règle d'or :</strong> ne remplissez jamais votre déclaration de mémoire.
        Attendez l'IFU de chaque broker et de chaque assureur avant de commencer. Les montants
        pré-remplis par l'administration proviennent de ces documents — vérifiez qu'ils
        correspondent.
      </Callout>

      <SubTitle>Où trouver votre IFU</SubTitle>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>
          <strong>Brokers en ligne</strong> (Degiro, IBKR, Trade Republic, Bourse Direct…) :
          espace client, rubrique Documents ou Fiscalité, disponible courant février.
        </li>
        <li>
          <strong>Banques traditionnelles</strong> : courrier papier ou espace client selon
          l'établissement.
        </li>
        <li>
          <strong>Assureurs vie</strong> : document distinct de l'IFU, transmis lors de chaque
          rachat partiel ou total.
        </li>
        <li>
          Si vous avez <strong>plusieurs comptes</strong> chez différents brokers, vous recevez
          un IFU par établissement — chacun doit être reporté.
        </li>
      </ul>

      <Callout type="warning">
        <strong>Brokers étrangers (IBKR, Degiro, Trade Republic…) :</strong> leurs IFU ne sont
        pas toujours transmis automatiquement à l'administration française. Les montants peuvent
        être absents ou erronés dans votre déclaration pré-remplie. Vérifiez systématiquement
        et corrigez si nécessaire — vous êtes responsable de l'exactitude de votre déclaration,
        pas votre broker.
      </Callout>

      {/* ── 2. Calendrier ─────────────────────────────────────────────────── */}
      <SectionTitle>Calendrier fiscal</SectionTitle>
      <Tableau id="declaration-calendrier" />

      {/* ── 3. Cases formulaire 2042 ──────────────────────────────────────── */}
      <SectionTitle>Les cases essentielles du formulaire 2042</SectionTitle>

      <p className="mb-4 leading-relaxed ">
        La déclaration principale des revenus de placements se fait sur le formulaire{' '}
        <strong>2042</strong> et son annexe <strong>2042 C</strong>.
      </p>

      <SubTitle>Revenus financiers — CTO</SubTitle>
      <CaseBox
        code="2DC"
        label="Dividendes éligibles à l'abattement de 40 %"
        detail="Dividendes sur actions françaises ou européennes — option barème progressif uniquement"
      />
      <CaseBox
        code="2TR"
        label="Intérêts et autres revenus de placement"
        detail="Intérêts de comptes à terme, coupons d'obligations, intérêts sur trésorerie broker (Trade Republic, IBKR…), PEL imposables"
      />
      <CaseBox
        code="3VG"
        label="Plus-values mobilières imposables nettes"
        detail="Solde net des plus-values et moins-values de l'année sur CTO — chiffre positif uniquement"
      />
      <CaseBox
        code="3VH"
        label="Moins-values mobilières reportables"
        detail="Solde déficitaire de l'année ou reliquat des années antérieures — montant positif (sans signe moins)"
      />

      <SubTitle>Option fiscale</SubTitle>
      <CaseBox
        code="2OP"
        label="Option pour le barème progressif"
        detail="À cocher pour appliquer le barème à l'ensemble de vos revenus du capital. Ne cochez que si c'est avantageux pour vous."
      />
      <CaseBox
        code="2BH"
        label="CSG déductible (si option barème)"
        detail="Pré-rempli par l'administration si vous optez pour le barème"
      />

      <SubTitle>PEA</SubTitle>
      <CaseBox
        code="3VY / 3VZ"
        label="Gains nets sur PEA (retrait après 5 ans)"
        detail="Uniquement en cas de retrait. Exonéré d'IR — seuls les prélèvements sociaux s'appliquent. Formulaire 2042 C."
      />

      <Callout type="info">
        <strong>Aucune déclaration annuelle pour le PEA tant qu'il n'y a pas de retrait.</strong>{' '}
        Les dividendes et plus-values à l'intérieur du plan ne sont pas déclarés année par année.
        La fiscalité n'est déclenchée qu'au moment d'un retrait ou de la clôture.
      </Callout>

      <SubTitle>Assurance-vie</SubTitle>
      <CaseBox
        code="2YY / 2ZZ"
        label="Produits des contrats d'assurance-vie en cas de rachat"
        detail="Quote-part de gain retirée lors d'un rachat partiel ou total. L'assureur prélève directement les PS — seule la part IR peut rester à déclarer."
      />

      {/* ── 4. Cas pratiques ──────────────────────────────────────────────── */}
      <SectionTitle>Cas pratiques</SectionTitle>

      <SubTitle>Cas 1 — Déclarer une plus-value sur CTO</SubTitle>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li>
          Récupérez l'IFU de votre broker. Il indique un solde net de plus-values après
          compensation avec les moins-values de l'année.
        </li>
        <li>
          Reportez ce solde en case <strong>3VG</strong>.
        </li>
        <li>
          L'administration calcule l'impôt à 31,4 % (PFU), après déduction de l'acompte d'IR
          déjà prélevé (12,8 %).
        </li>
        <li>
          Si vous préférez le barème progressif, cochez la case <strong>2OP</strong>. Ce choix
          est irrévocable une fois la déclaration validée.
        </li>
      </ol>

      <Callout type="info">
        Les acomptes prélevés à la source par votre broker (12,8 % d'IR) sont pré-remplis dans
        votre déclaration. Ils s'imputent sur l'impôt dû. Si le solde est négatif, vous êtes
        remboursé.
      </Callout>

      <SubTitle>Cas 2 — Reporter une moins-value</SubTitle>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li>
          Si votre solde annuel est négatif, indiquez ce solde déficitaire en case{' '}
          <strong>3VH</strong> — montant positif, sans signe moins.
        </li>
        <li>
          Ce déficit est automatiquement reporté sur les 10 années suivantes.
        </li>
        <li>
          Vérifiez chaque année que le reliquat reportable apparaît dans votre déclaration
          pré-remplie. En cas d'erreur, signalez-le avec l'IFU correspondant.
        </li>
      </ol>

      <Callout type="warning">
        <strong>Délai de report : 10 ans.</strong> Une moins-value non utilisée s'éteint au bout
        de 10 ans. Les moins-values ne se transmettent pas — elles sont perdues en cas de décès.
      </Callout>

      <SubTitle>Cas 3 — Premier retrait sur PEA après 5 ans</SubTitle>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li>
          Votre broker calcule le gain net depuis l'ouverture du PEA, au prorata du retrait.
        </li>
        <li>
          Les prélèvements sociaux (18,6 %) sont prélevés directement par le broker.
        </li>
        <li>
          La part IR est exonérée. Déclarez le gain net en case <strong>3VY</strong> ou{' '}
          <strong>3VZ</strong> du formulaire 2042 C. Aucun impôt supplémentaire ne sera dû.
        </li>
      </ol>

      {/* ── 5. Documents à conserver ──────────────────────────────────────── */}
      <SectionTitle>Documents à conserver</SectionTitle>
      <Tableau id="declaration-documents" />

      {/* ── 6. Ressources officielles ─────────────────────────────────────── */}
      <SectionTitle>Ressources officielles</SectionTitle>
      <ul className="list-disc pl-6 space-y-2 text-sm mb-8">
        <li>
          <a
            href="https://www.impots.gouv.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: 'var(--color-accent)' }}
          >
            impots.gouv.fr
          </a>{' '}
          — déclaration en ligne, simulateurs, documentation officielle
        </li>
        <li>
          <a
            href="https://www.service-public.fr/particuliers/vosdroits/F21618"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: 'var(--color-accent)' }}
          >
            service-public.fr — Fiche PEA
          </a>
        </li>
        <li>
          <a
            href="https://www.service-public.fr/particuliers/vosdroits/F21618"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: 'var(--color-accent)' }}
          >
            service-public.fr — Plus-values mobilières
          </a>
        </li>
      </ul>

      {/* ── Avertissement ─────────────────────────────────────────────────── */}
      <div
        className="mt-4 p-5 rounded-md text-sm"
        style={{ background: 'var(--color-stone-border)' }}
      >
        <p className="font-semibold mt-0 mb-2">Note importante</p>
        <p className="mt-0 mb-3">
          Ce guide est une synthèse pédagogique à destination des investisseurs particuliers
          résidents fiscaux en France. Il ne constitue pas un conseil fiscal personnalisé. Les
          règles fiscales évoluent chaque année — vérifiez les informations sur impots.gouv.fr
          avant de remplir votre déclaration. Pour des situations complexes (expatriation, SCI,
          succession), consultez un conseiller fiscal qualifié.
        </p>
        <p className="mt-0 mb-0">
          ←{' '}
          <a
            href="/fiscalite"
            className="underline"
            style={{ color: 'var(--color-accent)' }}
          >
            Revenir à la page Fiscalité des investissements
          </a>
        </p>
      </div>

    </main>
  );
}