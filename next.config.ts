import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/trimming-salon_hp",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
