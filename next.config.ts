import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["methodlifegroup.com", "localhost"],
    },
  },
};

export default nextConfig;
