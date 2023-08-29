/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "imgix",
    path: "https://media-1.api-sports.io/football/"
  },
    reactStrictMode: false,
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: "http://api.football-data.org/v4/:path*",
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  