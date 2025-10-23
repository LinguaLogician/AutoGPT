/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 禁用Edge Runtime，使用Node.js运行时
  experimental: {
    runtime: 'nodejs',
  },
}

module.exports = nextConfig