import type { NextConfig } from "next";

// PREVIEW=1 builds a relative-path static export (used for the Claude preview link).
// On Vercel just run the normal build.
const preview = process.env.PREVIEW === "1";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(preview ? { assetPrefix: "." } : {}),
};

export default nextConfig;
