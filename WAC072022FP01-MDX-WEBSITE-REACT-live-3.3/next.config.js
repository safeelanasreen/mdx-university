/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withVideos = require("next-videos");
const CompressionPlugin = require("compression-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "mdx-node.webc.in",
      "admin-mdx.webc.in",
      "admin-mdx.webc.in",
      "content.mdx.ac.ae",
      "192.168.2.32",
      "localhost",
      "api.mdx.ac.ae",
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
  env: {
    BASE_URL: "https://api.mdx.ac.ae",
    BASE_URL_WEBC: "https://admin-mdx.webc.in",
    APP_PRODUCTION: true,
  },
  webpack: (config) => {
    config.plugins.push(new CompressionPlugin());

    return config;
  },
  rewrites: async () => [
    {
      source: "/orientation-1",
      destination: "/orientation-1/index.html",
    },
    {
      source: "/orientation-2",
      destination: "/orientation-2/index.html",
    },
  ],
};

module.exports = withPlugins([withVideos], nextConfig);
