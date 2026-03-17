import { Metadata } from 'next'
import { portefeuilles } from '@/data/portefeuilles'
import PortefeuillesIndex from '@/components/portefeuilles/PortefeuillesIndex'

export const metadata: Metadata = {
  title: 'Portefeuilles — La Thèse',
  description:
    'Constructions pédagogiques qui montrent comment raisonner une allocation. Personnels, modèles ou thématiques — chaque portefeuille documente la thèse, le raisonnement et les règles de gestion.',
}

export default function PortefeuillesPage() {
  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px 80px' }}>
      {/* En-tête */}
      <header style={{ marginBottom: 56 }}>
        <h1
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 40,
            fontWeight: 700,
            color: '#1B4332',
            margin: '0 0 16px',
            lineHeight: 1.2,
          }}
        >
          Portefeuilles
        </h1>
        <p
          style={{
            fontFamily: 'Lora, Georgia, serif',
            fontSize: 18,
            color: '#44403C',
            maxWidth: 640,
            margin: 0,
            lineHeight: 1.7,
          }}
        >
          Des constructions pédagogiques qui montrent comment raisonner une allocation — pas ce qu&apos;il
          faut acheter, mais <em>pourquoi</em> et <em>comment</em> on y arrive.
        </p>
      </header>

      <PortefeuillesIndex portefeuilles={portefeuilles} />
    </main>
  )
}
