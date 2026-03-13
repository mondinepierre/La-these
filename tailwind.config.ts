import type { Config } from 'tailwindcss'

// Tailwind v4 : la configuration du thème se fait dans globals.css via @theme.
// Ce fichier est conservé uniquement pour la compatibilité de build.
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}

export default config
