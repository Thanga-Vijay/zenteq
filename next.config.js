/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables `next export` to /out (S3-friendly)
  images: {
    domains: [],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
