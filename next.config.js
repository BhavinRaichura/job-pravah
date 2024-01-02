/** @type {import('next').NextConfig} */
const nextConfig = {
    
      experimental: {
        //appDir: true,
        //serverComponentsExternalPackages: ["mongoose"],
        isrMemoryCacheSize: 0, // cache size in bytes
        serverActions: true,
      },
      /*images: {
        domains: ['lh3.googleusercontent.com'],
      },*/
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/a/**',
          },
          {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '/**',
          },
        ],
      },
      /*webpack(config) {
        config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
        }
        return config
      }*/
}

module.exports = nextConfig
