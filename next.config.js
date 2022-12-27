/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  output: 'standalone',
  experimental: {
    turbotrace: {
      logLevel: 'error',
    },
  },
};
