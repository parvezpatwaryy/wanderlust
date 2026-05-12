/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true, // এটি আপনার ফাইলে আগে থেকেই আছে
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;