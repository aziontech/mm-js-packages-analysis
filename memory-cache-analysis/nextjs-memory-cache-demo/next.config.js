/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    logging: {
      fullUrl: true,
      level: "verbose",
    },
  },
};

module.exports = nextConfig;
