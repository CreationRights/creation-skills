import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false
  },
  async redirects() {
    return [
      { source: "/engagements", destination: "/programs", permanent: true },
      { source: "/engagements/:slug", destination: "/programs/:slug", permanent: true },
      { source: "/method", destination: "/how-we-work", permanent: true },
      { source: "/what-we-do", destination: "/capabilities", permanent: true },
      { source: "/media-agent-skill-packs", destination: "/skill-packs", permanent: true },
      { source: "/privacy", destination: "/legal", permanent: true },
      { source: "/terms", destination: "/legal", permanent: true },
      { source: "/cookies", destination: "/legal", permanent: true },
      { source: "/legal-notice", destination: "/legal", permanent: true },
    ];
  },
};

export default nextConfig;
