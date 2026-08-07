import type { MetadataRoute } from "next";

// Ohne Server-Runtime (output: "export") muss die Route beim Build erzeugt werden.
export const dynamic = "force-static";

const BASE = "https://www.makelo-agency.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/impressum`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/datenschutz`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/agb`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
