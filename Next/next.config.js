/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cdn.sanity.io", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
