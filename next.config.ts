import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export', // 👈 REQUIRED
  basePath: '/abc-spacery',
  assetPrefix: '/abc-spacery/',
  images: {
    unoptimized: true, // GitHub Pages requirement
  },
};

export default nextConfig;
