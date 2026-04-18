import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export" as const } : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    ...(staticExport ? { unoptimized: true } : {}),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
