/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/app',
        permanent: true,
      },
    ]
  },
}
