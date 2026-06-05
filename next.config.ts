import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reddysports.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "genuinebettingids.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
