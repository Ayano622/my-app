import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["img.spoonacular.com"], // ✅ ここにホストを追加
  }
};

export default nextConfig;
