/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables `next export` to /out (S3-friendly)
  images: {
    domains: [],
    unoptimized: true, // required when using output: 'export'
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
