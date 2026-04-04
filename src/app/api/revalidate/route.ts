import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')

  if (token !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const hookUrl = process.env.VERCEL_DEPLOY_HOOK_URL
  if (!hookUrl) {
    return NextResponse.json({ error: 'Hook URL manquante' }, { status: 500 })
  }

  const res = await fetch(hookUrl, { method: 'POST' })
  if (!res.ok) {
    return NextResponse.json({ error: 'Déploiement échoué' }, { status: 500 })
  }

  return NextResponse.json({ triggered: true })
}