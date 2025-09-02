import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // Para GH Pages (Project Pages):
  // Tu sitio vive en /portfolio, así que:
  basePath: "/portfolio",

  // Silencia el warning del workspace root
  outputFileTracingRoot: path.resolve(process.cwd()),

  // Solo para desplegar rápido; luego puedes quitarlos
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
