/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://s3-inventory-management-v1.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
