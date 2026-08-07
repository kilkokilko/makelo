import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Die Seite braucht keine Server-Runtime (keine Route Handlers, keine
  // Server Actions), also wird sie als reines HTML/JS-Bundle nach `out/`
  // exportiert — direkt auf Cloudflare Pages & Co. hostbar.
  output: "export",

  // Ohne Server gibt es keinen Image-Optimizer, also werden die Bilder so
  // ausgeliefert, wie sie in `public/` liegen.
  images: { unoptimized: true },
};

export default nextConfig;
