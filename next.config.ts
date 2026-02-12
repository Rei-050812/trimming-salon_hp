import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/trimmingsalon_hp",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
