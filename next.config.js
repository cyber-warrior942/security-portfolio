/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  experimental: {
    turbo: false
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
}

module.exports = nextConfig 
