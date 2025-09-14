import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname, './'),
  },
  output: 'export', 
  distDir: 'out', 
};

export default nextConfig;