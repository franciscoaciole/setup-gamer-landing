// src/app/page.tsx
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Specs from "@/components/Specs";
import Performance from "@/components/Performance";
import Differentials from "@/components/Differentials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { productInfo } from "@/data/specs";
import { SITE_URL } from "@/data/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: productInfo.title,
  url: SITE_URL,
  image: `${SITE_URL}/images/setup-frente.jpg`,
  description:
    "Setup gamer completo com Ryzen 5 5500, RX 7600, monitor 180Hz e periféricos premium.",
  brand: {
    "@type": "Brand",
    name: "Setup Gamer",
  },
  category: "Computadores e acessórios gamer",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <main>
        <Hero />
        <Gallery />
        <Specs />
        <Performance />
        <Differentials />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}