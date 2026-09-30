import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // Serve AVIF first (30-50% smaller than WebP), fall back to WebP
    formats: ['image/avif', 'image/webp'],
    // Define exact breakpoints matching our layout to avoid unnecessary srcset entries
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    // Allow larger images to be optimized (member badge is 1678px wide)
    minimumCacheTTL: 31536000, // 1 year — images don't change once deployed
  },
};

export default nextConfig;
