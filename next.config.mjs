/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {},
  },
  webpack: (config) => {
    config.experiments = {
      layers: true,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
