import { cn } from '@/lib/utils'

interface HeroSectionProps {
  eyebrow?: string
  title: React.ReactNode   // accepte du JSX pour le <em> or accent
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  className?: string
}

/**
 * HeroSection — zone verte (~30% de la page d'accueil)
 *
 * Règle : ce composant est le SEUL endroit où background accent (#1B4332) est utilisé
 * en dehors de la Navigation. Ne pas réutiliser cette couleur de fond ailleurs.
 *
 * Usage :
 * <HeroSection
 *   eyebrow="Investissement fondamental"
 *   title={<>Investir avec méthode,<br/>penser <em>à long terme</em></>}
 *   subtitle="Des ressources claires pour comprendre les marchés..."
 *   primaryCta={{ label: "Commencer l'académie", href: "/academie" }}
 *   secondaryCta={{ label: "Voir les analyses", href: "/analyses" }}
 * />
 */
export function HeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: HeroSectionProps) {
  return (
    <>
      <section
        className={cn(
          'hero-zone',           // bg-accent + inversions texte auto (globals.css)
          'px-6 py-10 md:py-14',
          className
        )}
      >
        <div className="max-w-full-layout mx-auto">

          {/* Eyebrow */}
          {eyebrow && (
            <p className="eyebrow mb-4 text-gold font-sans text-xs tracking-widest uppercase">
              {eyebrow}
            </p>
          )}

          {/* Titre — utiliser <em> pour l'accent or */}
          <h1 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-4 text-stone-warm [&_em]:text-gold [&_em]:not-italic [&_em]:italic">
            {title}
          </h1>

          {/* Sous-titre */}
          {subtitle && (
            <p className="font-serif text-sm md:text-base italic leading-relaxed text-white/65 max-w-xl mb-8">
              {subtitle}
            </p>
          )}

          {/* Actions */}
          {(primaryCta || secondaryCta) && (
            <div className="flex items-center gap-3 flex-wrap">
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-accent bg-gold px-5 py-2.5 rounded hover:bg-gold/90 transition-colors duration-150"
                >
                  {primaryCta.label} →
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center font-sans text-sm text-white/75 px-5 py-2.5 rounded border border-white/30 hover:text-white hover:border-white/50 transition-colors duration-150"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )}

        </div>
      </section>

      {/* Barre de transition hero → body */}
      <div className="hero-transition-bar" />
    </>
  )
}
