// src/app/page.tsx
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Specs from "@/components/Specs";
import Performance from "@/components/Performance";
import Differentials from "@/components/Differentials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Specs />
      <Performance />
      <Differentials />
      <FinalCTA />
      <Footer />
    </main>
  );
}