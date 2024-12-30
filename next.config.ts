/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts", "jsx", "js", "page.tsx"],
  images: {
    domains: ["assets.aceternity.com"],
  },
};

module.exports = nextConfig;
