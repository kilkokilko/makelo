import type { MetadataRoute } from "next";

// Ohne Server-Runtime (output: "export") muss die Route beim Build erzeugt werden.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.makelo-agency.de/sitemap.xml",
  };
}
