/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com' // Replace with the actual domain you're fetching images from
      },
    ],
  },
  };
  
  export default nextConfig;
  
  