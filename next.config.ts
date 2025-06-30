import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    domains: ["img.spoonacular.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
