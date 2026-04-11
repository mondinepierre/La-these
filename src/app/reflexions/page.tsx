import { getPublishedArticles, getNextArticle } from '@/data/reflexions'
// 1. On donne une majuscule au composant (ici via un alias "as ReflexionsIndex")
import { ReflexionsIndex } from '@/components/reflexions/ReflexionsIndex'

export const metadata = {
  title: 'Réflexions — La Thèse',
  description: "Pédagogie, macro, méthode et réflexions sur l'investissement long terme.",
}

export default function ReflexionsPage() {
  const sorted = [...getPublishedArticles()].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const nextArticle = getNextArticle()

  return (
    <main className="max-w-content mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="font-playfair text-4xl text-[#1B4332] mb-4">Réflexions</h1>
        <p className="text-[#78716C] text-lg max-w-2xl">
          Concepts, méthode, macro et réflexions sur l&apos;investissement long terme.
          Pas d&apos;entreprises spécifiques ici — elles ont leur section{' '}
          <a href="/analyses" className="border-b border-[#C9A84C] hover:text-[#C9A84C]">
            Analyses
          </a>
          .
        </p>
      </div>
      {/* 2. On utilise la version avec la majuscule */}
      <ReflexionsIndex articles={sorted} nextArticle={nextArticle} />
    </main>
  )
}