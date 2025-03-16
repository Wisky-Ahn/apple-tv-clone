/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web-assets.same.dev",
      },
    ],
  },
  serverExternalPackages: []
};

export default nextConfig;
