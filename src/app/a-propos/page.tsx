import Link from 'next/link'

// ─── Valeurs ─────────────────────────────────────────────────────────────────
const VALUES = [
  {
    label: 'Pédagogie avant tout',
    text: "Le jargon financier existe souvent pour impressionner, pas pour clarifier. Ici, chaque concept est expliqué comme s'il devait être compris dès la première lecture.",
  },
  {
    label: 'Fondamental, pas spéculatif',
    text: 'On analyse des entreprises — leurs bilans, leurs marges, leur position concurrentielle. Pas des graphiques en chandeliers ni des "signaux" de court terme.',
  },
  {
    label: 'Honnêteté sur les limites',
    text: "Personne ne prédit l'avenir. Ce site ne prétend pas le faire. L'objectif est de vous donner les outils pour former votre propre jugement.",
  },
  {
    label: 'Long terme, toujours',
    text: "L'horizon de réflexion par défaut est de 5 à 10 ans. L'investissement est une discipline de patience — les marchés récompensent ceux qui savent attendre.",
  },
]

export const metadata = {
  title: 'À propos — La Thèse',
  description:
    'La Thèse est un espace de ressources pédagogiques sur l'investissement fondamental long terme. Sobre, sérieux, sans promesse de rendement.',
}

export default function APropos() {
  return (
    <div className="bg-[#F7F4EF] min-h-screen">

      {/* ── En-tête sobre (pas de HeroSection — page éditoriale) ───────── */}
      <div className="border-b border-[#E0DBCF] bg-[#F7F4EF]">
        <div className="max-w-full-layout mx-auto px-6 py-12 md:py-16">
          <p className="section-label mb-4">À propos</p>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-[#1C1917] leading-tight max-w-2xl">
            Un projet sur l'investissement.{' '}
            <em className="italic text-[#1B4332]">Pas sur le trading.</em>
          </h1>
        </div>
      </div>

      {/* ── Corps éditorial ─────────────────────────────────────────────── */}
      <div className="max-w-full-layout mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">

          {/* Colonne principale */}
          <div className="prose-editorial">

            <h2>D'où vient ce projet ?</h2>
            <p>
              La Thèse est né d'un constat simple : il existe peu d'endroits en
              français où apprendre à investir sérieusement — sans être noyé
              sous les alertes de trading, les "opportunités du moment" ou les
              discours sur la liberté financière à 30 ans.
            </p>
            <p>
              Ce projet a commencé comme un serveur Discord pédagogique. Avec le
              temps, le contenu a grossi, s'est structuré, et méritait un espace
              plus propre et plus accessible qu'un fil de messages. Ce site est
              cet espace.
            </p>

            <h2>Pour qui ?</h2>
            <p>
              Pour les investisseurs particuliers qui ont compris — ou
              commencent à comprendre — que la bourse n'est pas un casino, et
              qu'acheter une action, c'est acheter une part d'une entreprise
              réelle, avec des résultats, des dettes, et un avenir incertain.
            </p>
            <p>
              Que vous déposiez votre premier euro ou que vous ayez déjà quelques
              années de marché derrière vous, l'objectif est le même : penser
              avec méthode, investir avec cohérence, et ne pas vous laisser
              emporter par le bruit.
            </p>

            <h2>Ce que ce site n'est pas</h2>
            <p>
              Ce site n'est pas un service de conseil en investissement. Aucun
              contenu publié ici ne constitue une recommandation d'achat ou de
              vente. Les analyses présentées reflètent une démarche pédagogique
              et un point de vue personnel — pas une vérité absolue.
            </p>
            <p>
              Les marchés financiers comportent des risques réels, y compris de
              perte totale du capital investi. La formation ne remplace pas la
              réflexion personnelle.
            </p>

            <blockquote>
              "L'investissement est une course de fond, pas un sprint. Formez-vous
              avant d'agir."
            </blockquote>

          </div>

          {/* Colonne latérale */}
          <aside className="space-y-6">

            {/* Valeurs */}
            <div className="bg-white border border-[#E0DBCF] rounded-lg p-6">
              <p className="section-label mb-5">Ce qui guide ce projet</p>
              <ul className="space-y-5">
                {VALUES.map(({ label, text }) => (
                  <li key={label}>
                    <p className="font-sans text-sm font-medium text-[#1B4332] mb-1">
                      {label}
                    </p>
                    <p className="font-serif text-sm italic text-[#78716C] leading-relaxed">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Avertissement légal */}
            <div className="bg-[#F2EFE9] border border-[#D8D2C8] rounded-lg p-5">
              <p className="font-sans text-xs font-medium text-[#6B6458] uppercase tracking-wide mb-2">
                Avertissement
              </p>
              <p className="font-serif text-xs text-[#78716C] leading-relaxed italic">
                Je ne suis pas Conseiller en Investissements Financiers (CIF).
                Tout le contenu est fourni à titre informatif et pédagogique
                uniquement.
              </p>
              <Link
                href="/legal"
                className="inline-block mt-3 font-sans text-xs text-[#1B4332] border-b border-[#D6EDDF] hover:border-[#1B4332] transition-colors"
              >
                Lire l'avertissement complet →
              </Link>
            </div>

            {/* CTA communauté */}
            <div className="bg-white border border-[#E0DBCF] rounded-lg p-5">
              <p className="font-sans text-sm font-medium text-[#1C1917] mb-2">
                La communauté Discord
              </p>
              <p className="font-serif text-sm italic text-[#78716C] leading-relaxed mb-4">
                Questions, échanges, retours d'expérience — tout ce qui ne tient
                pas dans un article.
              </p>
              <Link
                href="/discord"
                className="inline-flex items-center font-sans text-sm font-medium bg-[#1B4332] text-[#F7F4EF] px-4 py-2 rounded hover:bg-[#2D6A4F] transition-colors duration-150"
              >
                Rejoindre →
              </Link>
            </div>

          </aside>
        </div>
      </div>

    </div>
  )
}
