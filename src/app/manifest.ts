import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Setup Gamer Landing",
    short_name: "Setup Gamer",
    description: "Landing page de um setup gamer completo para venda direta via WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#22c55e",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
