import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/lostandfound" : "",
  assetPrefix: isProd ? "/lostandfound/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
