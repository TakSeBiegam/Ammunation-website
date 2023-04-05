/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'https://raw.githubusercontent.com/TakSeBiegam/Ammunation-website/main/images/:path*',
      },
    ];
  },
  
  reactStrictMode: true,
}

module.exports = nextConfig
