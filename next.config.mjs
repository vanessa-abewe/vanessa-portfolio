/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',              // 👈 static export
  basePath: '/vanessa-portfolio', // 👈 must match repo name
  assetPrefix: '/vanessa-portfolio/', // 👈 ensures assets load
};

export default nextConfig;
