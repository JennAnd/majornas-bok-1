/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    //Instagram API changes domain from time to time 😣
    domains: [
      "cdn.sanity.io",
      "images.unsplash.com",
      "scontent-arn2-1.cdninstagram.com",
      "scontent-arn2-2.cdninstagram.com",
      "scontent-arn2-3.cdninstagram.com",
    ],
  },
};

module.exports = nextConfig;
