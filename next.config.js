/** @type {import('next').NextConfig} */
const nextConfig = {
  
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media-1.api-sports.io',
        },
        {
          protocol: 'https',
          hostname: 'media-2.api-sports.io',
        },
        {
          protocol: 'https',
          hostname: 'media-3.api-sports.io',
        },
        {
          protocol: 'https',
          hostname: 'media-4.api-sports.io',
        },




      ],
   
   // domains: ['https://media-2.api-sports.io/football/players/:path*']
   
   
  
  },
    reactStrictMode: false,
    swcMinify: true,
    async rewrites() {
      return [
        {
          //cors 경로 우회
          source: "/:path*",
          destination: "http://api.football-data.org/v4/:path*",
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  