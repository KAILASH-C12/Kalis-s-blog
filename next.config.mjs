/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    output: "export",
    images: {
        unoptimized: true,
    },
    // Ensure we use webpack for now if turbopack is causing issues? No option needed for production usually.
};

export default nextConfig;
