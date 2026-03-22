import { Metadata } from 'next'
import Link from 'next/link'
import EtfLibraryClient from '@/components/etf/EtfLibraryClient'
import { ETF_LIBRARY } from '@/data/etf-library'

export const metadata: Metadata = {
  title: 'Bibliothèque ETF — La Thèse',
  description:
    'Sélection commentée d\'ETF pour un portefeuille long terme : TER, réplication, éligibilité PEA. Chaque ETF choisi pour sa cohérence avec une approche fondamentale.',
}

export default function BibliothequeEtfPage() {
  const nbEtf = ETF_LIBRARY.length
  const nbPea = ETF_LIBRARY.filter((e) => e.peaEligible).length

  return (
    <main className="max-w-content mx-auto px-6 py-12">
      {/* En-tête */}
      <header className="mb-10">
        <p
          className="text-sm uppercase tracking-widest mb-3"
          style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-ui)' }}
        >
          Référence
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl mb-4 leading-tight"
          style={{ color: 'var(--color-primary)' }}
        >
          Bibliothèque ETF
        </h1>
        <p
          className="text-lg max-w-2xl mb-2"
          style={{
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-body)',
          }}
        >
          {nbEtf} ETF sélectionnés pour leur cohérence avec une approche long terme : frais
          bas, taille suffisante, émetteur solide. {nbPea} sont éligibles au PEA.
        </p>
        <p
          className="text-sm"
          style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}
        >
          Avant tout achat, vérifiez les données actualisées sur{' '}
          <a
            href="https://www.justetf.com/fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            JustETF
          </a>{' '}
          ou{' '}
          <a
            href="https://www.quantalys.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Quantalys
          </a>
          . Les TER indiqués ici sont indicatifs et peuvent avoir évolué.
        </p>
      </header>

      {/* Encadré avertissement */}
      <div
        className="flex gap-3 p-4 rounded-lg mb-10 text-sm"
        style={{
          background: 'var(--color-surface)',
          borderLeft: '4px solid var(--color-gold)',
          color: 'var(--color-text-secondary)',
          fontFamily: 'var(--font-ui)',
        }}
      >
        <span className="shrink-0">⚠️</span>
        <p>
          Cette bibliothèque est un outil pédagogique, pas un conseil en investissement. Les
          performances passées ne préjugent pas des performances futures. Pour comprendre les
          critères qui ont guidé cette sélection, consultez le module{' '}
          <Link
            href="/academie/intermediaire/analyser-un-etf"
            className="underline underline-offset-2"
            style={{ color: 'var(--color-primary)' }}
          >
            Analyser un ETF
          </Link>
          .
        </p>
      </div>

      {/* Comment lire ce tableau */}
      <details
        className="mb-10 rounded-lg border"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <summary
          className="px-4 py-3 cursor-pointer text-sm font-medium select-none"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-ui)' }}
        >
          Comment lire ce tableau ?
        </summary>
        <div
          className="px-4 pb-4 text-sm grid gap-2"
          style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}
        >
          <p>
            <strong style={{ color: 'var(--color-text-primary)' }}>TER</strong> — frais
            annuels prélevés automatiquement sur la valeur du fonds. Viser &lt; 0,30 % sur
            les indices larges, &lt; 0,50 % sur les thématiques ou pays émergents.
          </p>
          <p>
            <strong style={{ color: 'var(--color-text-primary)' }}>
              Réplication physique
            </strong>{' '}
            — le fonds détient réellement les actions de l'indice. Plus transparent.{' '}
            <strong style={{ color: 'var(--color-text-primary)' }}>Synthétique</strong> —
            contrat swap avec une banque. Souvent utilisé pour rendre un indice américain
            éligible au PEA.
          </p>
          <p>
            <strong style={{ color: 'var(--color-text-primary)' }}>Acc (capitalisant)</strong>{' '}
            — les dividendes sont réinvestis automatiquement. Idéal pour les intérêts
            composés.{' '}
            <strong style={{ color: 'var(--color-text-primary)' }}>Dist (distribuant)</strong>{' '}
            — les dividendes tombent sur votre compte.
          </p>
          <p>
            <strong style={{ color: 'var(--color-text-primary)' }}>PEA</strong> — éligible au
            Plan d'Épargne en Actions (fiscalité avantageuse). Les ETF synthétiques permettent
            d'exposer un PEA à des indices mondiaux ou américains.
          </p>
        </div>
      </details>

      {/* Composant client avec filtres */}
      <EtfLibraryClient />
    </main>
  )
}
