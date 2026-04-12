import createMDX from '@next/mdx'

const withMDX = createMDX()

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/reflexions',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/reflexions/:slug',
        permanent: true,
      },
    ]
  },
})