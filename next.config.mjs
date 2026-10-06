/** @type {import("next").NextConfig} */
const nextConfig = {
  // GitHub Pages necesita una salida completamente estática.
  output: "export",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
