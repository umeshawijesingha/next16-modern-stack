import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 reactCompiler: true,   
 experimental:{
  turbopackFileSystemCacheForDev: true, 
  cacheComponents: true, // ✅ enables 'use cache'
 }
};

export default nextConfig;
