import Link from 'next/link'

// ─── Distinction site / Discord ───────────────────────────────────────────────
const SITE_FEATURES = [
  'Modules pédagogiques structurés (21 modules)',
  'Analyses fondamentales de valeurs',
  'Glossaire des termes essentiels',
  'Portefeuilles modèles commentés',
  'Articles de fond sur la méthode',
]

const DISCORD_FEATURES = [
  'Questions sur les modules et les analyses',
  "Retours d'expérience de la communauté",
  "Discussions sur l'actualité des marchés",
  'Partage de lectures et de ressources',
  'Entraide entre investisseurs particuliers',
]

// ─── Règles d'esprit ─────────────────────────────────────────────────────────
const RULES = [
  {
    num: '01',
    title: 'Pas de "tuyaux"',
    text: 'Le Discord n'est pas un endroit pour donner des conseils d'achat ou de vente. Chacun est responsable de ses décisions.',
  },
  {
    num: '02',
    title: 'Qualité des questions',
    text: 'Avant de poser une question, vérifiez si la réponse est dans les modules ou le glossaire. La recherche fait partie de l'apprentissage.',
  },
  {
    num: '03',
    title: 'Ton respectueux',
    text: 'Tout le monde a commencé quelque part. Les questions "naïves" n'existent pas — uniquement des questions sans réponse encore.',
  },
  {
    num: '04',
    title: 'Pas de promotion',
    text: 'Aucune publicité, aucun lien vers des formations payantes, aucun referral. L'espace reste propre.',
  },
]

export const metadata = {
  title: 'Rejoindre la communauté — La Thèse',
  description:
    'Le Discord de La Thèse est un espace d'échange autour de l'investissement fondamental long terme — questions, analyses, retours d'expérience.',
}

export default function Discord() {
  return (
    <div className="bg-[#F7F4EF] min-h-screen">

      {/* ── En-tête ─────────────────────────────────────────────────────── */}
      <div className="border-b border-[#E0DBCF]">
        <div className="max-w-full-layout mx-auto px-6 py-12 md:py-16">
          <p className="section-label mb-4">Communauté</p>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-[#1C1917] leading-tight max-w-2xl mb-4">
            Un espace d'échange,{' '}
            <em className="italic text-[#1B4332]">pas un forum de conseils.</em>
          </h1>
          <p className="font-serif text-base italic text-[#78716C] leading-relaxed max-w-xl">
            Le Discord complète le site. Le contenu de référence est ici — la
            discussion et les questions, c'est là-bas.
          </p>
        </div>
      </div>

      <div className="max-w-full-layout mx-auto px-6 py-12 md:py-16 space-y-14">

        {/* ── Site vs Discord ─────────────────────────────────────────── */}
        <section>
          <p className="section-label mb-6">Comment les deux espaces se complètent</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Site */}
            <div className="bg-white border border-[#E0DBCF] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-sans text-xs font-medium bg-[#D6EDDF] text-[#1B4332] border border-[#A7D4B8] px-2.5 py-0.5 rounded-sm uppercase tracking-wide">
                  Ce site
                </span>
                <span className="font-sans text-xs text-[#A8A29E]">lathese.fr</span>
              </div>
              <p className="font-display text-lg font-medium text-[#1C1917] mb-4">
                Contenu de référence, structuré et permanent
              </p>
              <ul className="space-y-2.5">
                {SITE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="text-[#1B4332] mt-0.5 text-sm shrink-0">✓</span>
                    <span className="font-serif text-sm text-[#78716C] italic leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Discord */}
            <div className="bg-white border border-[#E0DBCF] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-sans text-xs font-medium bg-[#F2EFE9] text-[#6B6458] border border-[#D8D2C8] px-2.5 py-0.5 rounded-sm uppercase tracking-wide">
                  Discord
                </span>
                <span className="font-sans text-xs text-[#A8A29E]">Communauté</span>
              </div>
              <p className="font-display text-lg font-medium text-[#1C1917] mb-4">
                Échanges, questions, discussions en temps réel
              </p>
              <ul className="space-y-2.5">
                {DISCORD_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="text-[#C9A84C] mt-0.5 text-sm shrink-0">→</span>
                    <span className="font-serif text-sm text-[#78716C] italic leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* ── Règles d'esprit ─────────────────────────────────────────── */}
        <section>
          <p className="section-label mb-6">L'esprit du serveur</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RULES.map(({ num, title, text }) => (
              <div
                key={num}
                className="bg-white border border-[#E0DBCF] rounded-lg px-6 py-5"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-[#C9A84C] font-medium shrink-0 mt-0.5">
                    {num}
                  </span>
                  <div>
                    <p className="font-sans text-sm font-medium text-[#1C1917] mb-1.5">
                      {title}
                    </p>
                    <p className="font-serif text-sm italic text-[#78716C] leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA principal ────────────────────────────────────────────── */}
        <section>
          <div className="bg-[#1B4332] rounded-lg px-8 py-10 text-center md:text-left md:flex md:items-center md:justify-between gap-10">
            <div>
              <h2 className="font-display text-2xl font-medium text-[#F7F4EF] leading-snug mb-3">
                Prêt à rejoindre la communauté ?
              </h2>
              <p className="font-serif text-sm italic text-white/60 leading-relaxed max-w-md">
                Le serveur est gratuit et ouvert. Prenez le temps de lire les
                règles avant de participer — c'est court.
              </p>
            </div>
            <div className="mt-6 md:mt-0 shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 items-center md:items-start">
              {/* Remplacez href par votre lien d'invitation Discord */}
              <a
                href="https://discord.gg/tVJr4kWj6V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium bg-[#C9A84C] text-[#1B4332] px-6 py-3 rounded hover:bg-[#C9A84C]/90 transition-colors duration-150 whitespace-nowrap"
              >
                Rejoindre le Discord →
              </a>
              <Link
                href="/academie"
                className="inline-flex items-center font-sans text-sm text-white/70 px-6 py-3 rounded border border-white/20 hover:text-white hover:border-white/40 transition-colors duration-150 whitespace-nowrap"
              >
                D'abord, voir l'académie
              </Link>
            </div>
          </div>
        </section>

        {/* ── Note ────────────────────────────────────────────────────── */}
        <p className="font-sans text-xs text-[#A8A29E] text-center pb-4">
          Discord est une application tierce. La Thèse n'est pas affiliée à Discord Inc.
        </p>

      </div>
    </div>
  )
}
