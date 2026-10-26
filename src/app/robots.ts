import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://setup-gamer-landing.vercel.app/sitemap.xml",
    host: "https://setup-gamer-landing.vercel.app",
  };
}
