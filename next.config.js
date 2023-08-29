/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    domains: ['https://media-2.api-sports.io/football/players/:path*']
   
   
  
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
  