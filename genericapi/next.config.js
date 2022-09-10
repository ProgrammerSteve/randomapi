/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
      'static.wikia.nocookie.net',
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
