import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export to out/, served as Cloudflare Workers static assets (see wrangler.jsonc)
  output: "export",
  images: {
    // No image optimization server in a static export; images in public/ are pre-compressed WebP
    unoptimized: true,
  },
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
};

export default nextConfig;
