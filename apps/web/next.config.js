// apps/web/next.config.js
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // outputFileTracingRoot is now a top-level option
  outputFileTracingRoot: path.join(__dirname, '../../'), // Adjust '../../' as needed for your monorepo root
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "combatfilms.com" },
    ],
    dangerouslyAllowSVG: true,
  }
  // Remove the 'experimental' block if 'outputFileTracingRoot' was the only thing in it
  // If you had other experimental flags, keep the block and just remove outputFileTracingRoot from it.
  // For example, if it was:
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, '../../'),
  // },
  // it becomes (if nothing else was in experimental):
  // (no experimental block needed for this option anymore)
};

export default nextConfig;