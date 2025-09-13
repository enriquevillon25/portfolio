import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // genera HTML estático
  trailingSlash: true, // /ruta -> /ruta/index.html (evita 404)
  images: { unoptimized: true },
  basePath: "/portfolio", // porque tu URL es /portfolio
  // Solo para que el build no se caiga mientras corriges el lint/TS:
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;

// next.config.mjs

// const isProd = process.env.NODE_ENV === "production";
// const repo = "portfolio";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   basePath: isProd ? `/${repo}` : "",
//   assetPrefix: isProd ? `/${repo}/` : "",
//   images: { unoptimized: true }, // si exportas estático para GH Pages
//   output: "export", // si usas GitHub Pages estático
//   trailingSlash: true, // recomendable para GH Pages
// };
// export default nextConfig;
