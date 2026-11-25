import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH (e.g. "/my-repo") only when hosting under a sub-path, such as GitHub Pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
