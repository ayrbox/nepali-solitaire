/** @type {import('next').NextConfig} */

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/nepali-solitaire',
  assetPrefix: '/nepali-solitaire/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
