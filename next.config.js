const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    rules: {
      "*.md": ["raw-loader"],
      "*.mdx": ["raw-loader"],
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Link", value: '<https://jdj.land>; rel="preconnect"' },
        ],
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
