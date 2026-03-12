import Link from 'next/link'

export const metadata = {
  title: 'Avertissement légal — La Thèse',
  description:
    'Avertissement légal et conditions d'utilisation du site La Thèse. Absence de conseil financier, risques d'investissement, responsabilité personnelle.',
}

export default function Legal() {
  return (
    <div className="bg-[#F7F4EF] min-h-screen">

      {/* ── En-tête ─────────────────────────────────────────────────────── */}
      <div className="border-b border-[#E0DBCF]">
        <div className="max-w-full-layout mx-auto px-6 py-12 md:py-16">
          <p className="section-label mb-4">Mentions légales</p>
          <h1 className="font-display text-3xl font-medium text-[#1C1917] leading-tight max-w-2xl">
            Avertissement légal et responsabilité
          </h1>
        </div>
      </div>

      {/* ── Contenu ─────────────────────────────────────────────────────── */}
      <div className="max-w-full-layout mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* Corps principal */}
          <div className="prose-editorial">

            <p className="font-sans text-sm text-[#78716C] mb-8">
              Mis à jour le 16 février 2026
            </p>

            <p>
              En accédant à ce site, vous reconnaissez avoir pris connaissance
              des points suivants et les accepter sans réserve.
            </p>

            <h2>1. Absence de conseil financier</h2>
            <p>
              L'auteur de ce site n'est pas Conseiller en Investissements
              Financiers (CIF) au sens de l'AMF, ni prestataire de services
              d'investissement réglementé. Tout le contenu publié ici — analyses,
              modules pédagogiques, commentaires sur les ETF, notions de
              fiscalité — est fourni à titre exclusivement informatif et
              pédagogique.
            </p>
            <p>
              Aucun contenu de ce site ne constitue une recommandation
              personnalisée d'investissement, un conseil financier, fiscal ou
              juridique. Avant toute décision d'investissement significative,
              consultez un professionnel habilité.
            </p>

            <h2>2. Risque de perte en capital</h2>
            <p>
              L'investissement sur les marchés financiers — actions, ETF,
              produits dérivés — comporte un risque réel de perte partielle ou
              totale du capital investi. Les performances passées ne préjugent
              pas des performances futures.
            </p>
            <p>
              N'investissez jamais des sommes dont vous pourriez avoir besoin à
              court terme, ni des fonds que vous ne pouvez pas vous permettre de
              perdre.
            </p>

            <h2>3. Responsabilité personnelle</h2>
            <p>
              Vous êtes seul responsable de vos décisions d'investissement.
              L'auteur de ce site ne pourra être tenu responsable — directement
              ou indirectement — des pertes financières résultant de
              l'interprétation ou de l'utilisation des informations publiées ici.
            </p>
            <p>
              Les analyses et opinions exprimées sont subjectives, fondées sur
              des informations disponibles au moment de leur rédaction, et sont
              susceptibles d'évoluer sans préavis.
            </p>

            <h2>4. Indépendance éditoriale</h2>
            <p>
              L'auteur n'est rémunéré par aucun courtier, aucune société cotée,
              ni aucun prestataire financier cité sur ce site. Aucun contenu
              publié n'est sponsorisé ou influencé par un tiers. Les mentions de
              produits ou de courtiers reflètent uniquement un avis personnel,
              sans lien commercial.
            </p>

            <h2>5. Données personnelles</h2>
            <p>
              Ce site ne collecte pas de données personnelles au-delà de ce qui
              est strictement nécessaire au bon fonctionnement technique
              (hébergement Vercel). Aucun traceur publicitaire n'est utilisé.
            </p>

            <h2>6. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu publié sur ce site — textes, analyses,
              modules pédagogiques — est protégé par le droit d'auteur. Toute
              reproduction, même partielle, sans autorisation expresse est
              interdite.
            </p>

            <hr className="section-divider" />

            <blockquote>
              L'investissement est une course de fond, pas un sprint.
              Formez-vous avant d'agir.
            </blockquote>

          </div>

          {/* Colonne latérale */}
          <aside className="space-y-5">

            {/* Résumé */}
            <div className="bg-white border border-[#E0DBCF] rounded-lg p-5">
              <p className="section-label mb-4">En résumé</p>
              <ul className="space-y-3">
                {[
                  "Pas de conseils financiers personnalisés",
                  "Investir comporte des risques réels",
                  "Vous restez seul décisionnaire",
                  "Aucun lien commercial avec les tiers cités",
                  "Contenu informatif et pédagogique uniquement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#C9A84C] text-sm shrink-0 mt-0.5">—</span>
                    <span className="font-serif text-sm italic text-[#78716C] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="bg-white border border-[#E0DBCF] rounded-lg p-5">
              <p className="section-label mb-4">Aller plus loin</p>
              <div className="space-y-2">
                <Link href="/academie" className="link-editorial block font-sans text-sm">
                  Commencer l'académie
                </Link>
                <Link href="/a-propos" className="link-editorial block font-sans text-sm">
                  À propos du projet
                </Link>
                <Link href="/discord" className="link-editorial block font-sans text-sm">
                  Rejoindre la communauté
                </Link>
              </div>
            </div>

          </aside>

        </div>
      </div>

    </div>
  )
}
