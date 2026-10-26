// src/app/page.tsx
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Specs from "@/components/Specs";
import Performance from "@/components/Performance";
import Differentials from "@/components/Differentials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { productInfo } from "@/data/specs";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: productInfo.title,
  description:
    "Setup gamer completo com Ryzen 5 5500, RX 7600, monitor 180Hz e periféricos premium.",
  brand: {
    "@type": "Brand",
    name: "Setup Gamer",
  },
  category: "Computadores e acessórios gamer",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "BRL",
    price: "0",
    url: "https://wa.me/5579998452332",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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