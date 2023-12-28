/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out', 
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '/**',
        },
  
      ],
    },
  }
  
  module.exports = nextConfig
  