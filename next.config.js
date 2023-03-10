/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ]
  },
  images: {
    domains: ['images.pexels.com', 'res.cloudinary.com', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig
