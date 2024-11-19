/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true, // If you use Next.js image optimization, consider this setting for static export
    },
    assetPrefix: '/', // Ensure assets are included correctly
    trailingSlash: true, // Helps to create an index.html for each route
    
};

export default nextConfig;
