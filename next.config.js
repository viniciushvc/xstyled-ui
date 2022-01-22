/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com']
  },
  webpack: (config, { dev, isServer }) => {
    // only in production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }

    return config
  }
})
