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
    optimizePackageImports: ['@vercel/analytics', 'framer-motion', 'react-icons'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  output: 'export'  // Required for Netlify static deployment
}

module.exports = {
  // Other Next.js configurations
  // ...

  // Configure external dependencies
  externals: {
    tailwindcss: 'tailwindcss',
  },
};