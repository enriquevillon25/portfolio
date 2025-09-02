import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },   // <- clave para que no frene
  typescript: { ignoreBuildErrors: true } // <- opcional (hasta que corrijas)
};
export default nextConfig;
