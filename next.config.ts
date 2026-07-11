import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/Akshat9999572/Gajraj-Legion/main/public/assets/**",
      },
    ],
  },
};

export default nextConfig;
