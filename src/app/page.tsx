import Link from 'next/link'
import { HeroSection } from '@/components/layout/HeroSection'
import { ArticleCard } from '@/components/ui/ArticleCard'

// ─── Modules mis en avant — Parcours Bases ───────────────────────────────────
const FEATURED_MODULES = [
  {
    title: 'Pourquoi investir ?',
    excerpt:
      "Comprendre l'érosion monétaire et pourquoi rester liquide à 100 % est une décision qui a un coût caché.",
    href: '/academie/bases/pourquoi-investir',
    level: 'debutant' as const,
    category: 'Bases · Leçon 1',
    readingTime: 4,
  },
  {
    title: 'Analyse fondamentale',
    excerpt:
      "PER, marges, dette, flux de trésorerie — les indicateurs qui permettent de distinguer une belle entreprise d'une belle histoire.",
    href: '/academie/intermediaire/analyse-fondamentale',
    level: 'intermediaire' as const,
    category: 'Intermédiaire · Leçon 2',
    readingTime: 8,
  },
  {
    title: 'Gérer le risque',
    excerpt:
      "Position sizing, stop-loss, diversification — les principes qui permettent de rester dans le jeu sur le long terme.",
    href: '/academie/intermediaire/gerer-le-risque',
    level: 'intermediaire' as const,
    category: 'Intermédiaire · Leçon 4',
    readingTime: 7,
  },
]

// ─── Piliers du site ─────────────────────────────────────────────────────────
const PILLARS = [
  {
    icon: '📖',
    label: 'Académie',
    description:
      "Cinq leçons fondamentales pour poser les bases avant d'investir votre premier euro.",
    href: '/academie',
    cta: 'Commencer →',
  },
  {
    icon: '🔍',
    label: 'Analyses',
    description:
      'Fiches valeurs et secteurs commentées selon une grille fondamentale rigoureuse.',
    href: '/analyses',
    cta: 'Voir les analyses →',
  },
  {
    icon: '📚',
    label: 'Glossaire',
    description:
      'Tous les termes essentiels définis clairement, sans jargon superflu.',
    href: '/glossaire',
    cta: 'Consulter →',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="Investissement fondamental long terme"
        title={
          <>
            Penser long,
            <br />
            investir <em>juste</em>
          </>
        }
        subtitle="Des ressources claires pour comprendre les marchés et construire un patrimoine durable — sans promesse de rendement, sans bruit de fond."
        primaryCta={{ label: "Commencer l'académie", href: '/academie/bases' }}
        secondaryCta={{ label: 'Voir les analyses', href: '/analyses' }}
      />

      <div className="bg-[#F7F4EF]">

        {/* Par où commencer */}
        <section className="max-w-full-layout mx-auto px-6 pt-14 pb-10">
          <div className="flex items-baseline justify-between mb-6">
            <p className="section-label">Par où commencer ?</p>
            <Link
              href="/academie"
              className="font-sans text-xs text-[#78716C] hover:text-[#1C1917] transition-colors"
            >
              Voir le parcours complet →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FEATURED_MODULES.map((module) => (
              <ArticleCard key={module.href} {...module} />
            ))}
          </div>
        </section>

        <hr className="section-divider max-w-full-layout mx-auto px-6" />

        {/* Les trois piliers */}
        <section className="max-w-full-layout mx-auto px-6 py-10">
          <p className="section-label mb-8">Ce que vous trouverez ici</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map(({ icon, label, description, href, cta }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-white border border-[#E0DBCF] rounded-lg px-6 py-6 hover:border-[#C4BEB4] hover:shadow-[0_2px_12px_rgba(28,25,23,0.06)] transition-all duration-200"
              >
                <span className="text-2xl mb-4 block">{icon}</span>
                <h2 className="font-display text-xl font-medium text-[#1C1917] mb-2">
                  {label}
                </h2>
                <p className="font-serif text-sm italic text-[#78716C] leading-relaxed mb-5">
                  {description}
                </p>
                <span className="font-sans text-sm font-medium text-[#1B4332] group-hover:underline">
                  {cta}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <hr className="section-divider max-w-full-layout mx-auto px-6" />

        {/* Philosophie */}
        <section className="max-w-full-layout mx-auto px-6 py-10">
          <div className="max-w-content">
            <p className="section-label mb-5">La philosophie</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-[#1C1917] leading-snug mb-5">
              {"L'investissement n'est pas un jeu. "}
              <em className="text-[#1B4332]">{"C'est une discipline."}</em>
            </h2>
            <div className="prose-editorial text-[#1C1917]">
              <p>
                {"La Thèse est construite autour d'une conviction simple : les meilleurs résultats en bourse viennent de la patience, de l'analyse et du contrôle des émotions — pas de la vitesse ou du bruit des marchés."}
              </p>
              <p>
                {'Ici, on ne parle pas de "coups" ni de tuyaux. On apprend à évaluer des entreprises, à construire un portefeuille cohérent, et à rester rationnel quand les marchés ne le sont pas.'}
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/a-propos"
                className="font-sans text-sm font-medium text-[#1B4332] border-b border-[#D6EDDF] hover:border-[#1B4332] transition-colors pb-0.5"
              >
                En savoir plus sur la démarche →
              </Link>
            </div>
          </div>
        </section>

        <hr className="section-divider max-w-full-layout mx-auto px-6" />

        {/* Articles — placeholder */}
        <section className="max-w-full-layout mx-auto px-6 py-10">
          <div className="flex items-baseline justify-between mb-6">
            <p className="section-label">Derniers articles</p>
            {/* Décommenter quand le blog sera alimenté :
            <Link href="/blog" className="font-sans text-xs text-[#78716C] hover:text-[#1C1917] transition-colors">
              Tous les articles →
            </Link>
            */}
          </div>
          <div className="border border-dashed border-[#C4BEB4] rounded-lg px-8 py-10 text-center">
            <p className="font-display text-lg font-medium text-[#A8A29E] mb-2">
              Articles à venir
            </p>
            <p className="font-serif text-sm italic text-[#A8A29E] leading-relaxed max-w-sm mx-auto">
              {"Des analyses de fond, des retours d'expérience et des mises à jour de marchés seront publiés ici prochainement."}
            </p>
          </div>
        </section>

        <hr className="section-divider max-w-full-layout mx-auto px-6" />

        {/* CTA communauté */}
        <section className="max-w-full-layout mx-auto px-6 py-10 pb-16">
          <div className="bg-white border border-[#E0DBCF] rounded-lg px-8 py-8 md:flex md:items-center md:justify-between gap-8">
            <div>
              <p className="section-label mb-3">La communauté</p>
              <h2 className="font-display text-xl font-medium text-[#1C1917] mb-2">
                Discuter, questionner, progresser ensemble.
              </h2>
              <p className="font-serif text-sm italic text-[#78716C] leading-relaxed max-w-md">
                {"Le Discord est l'espace d'échange autour du contenu du site — questions, retours d'expérience, analyses partagées."}
              </p>
            </div>
            <div className="mt-6 md:mt-0 shrink-0">
              <Link
                href="/discord"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium bg-[#1B4332] text-[#F7F4EF] px-6 py-3 rounded hover:bg-[#2D6A4F] transition-colors duration-150"
              >
                Rejoindre le Discord
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}