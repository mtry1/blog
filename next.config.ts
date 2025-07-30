import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/blog" : "",
};

export default nextConfig;
