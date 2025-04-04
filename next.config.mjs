/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable React strict mode for development
    swcMinify: true,       // Use SWC for faster builds and minification
  
    webpack: (config) => {
      // Disable Webpack caching to prevent large memory usage in development
      config.cache = false;
  
      // Enable splitting of large chunks
      config.optimization.splitChunks = {
        chunks: 'all',
      };
  
      return config;
    },
  
    images: {
      // Allow external images or domains if needed
      domains: ['example.com'], // Replace 'example.com' with the domains you're using
      deviceSizes: [320, 420, 768, 1024, 1200], // Optimize for responsive design
      formats: ['image/avif', 'image/webp'],    // Use modern formats for smaller file sizes
    },
  
    experimental: {
      // Enable experimental features if required
      appDir: true,
    },
  };

  export default nextConfig;
