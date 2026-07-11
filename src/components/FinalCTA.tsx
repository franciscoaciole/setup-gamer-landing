// src/components/FinalCTA.tsx
import { productInfo } from "@/data/specs";

export default function FinalCTA() {
  const whatsappLink = `https://wa.me/${productInfo.whatsappNumber}?text=${encodeURIComponent(
    productInfo.whatsappMessage
  )}`;

  return (
    <section className="relative bg-gradient-to-b from-black via-neutral-950 to-black text-white px-6 py-24 overflow-hidden">
      {/* Efeito de brilho decorativo ao fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 bg-green-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Pronto para elevar sua experiência?
        </h2>

        <p className="mt-6 text-neutral-400 text-base md:text-lg">
          Fale agora com o vendedor e tire todas as suas dúvidas.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 hover:scale-105 transition-all duration-300 text-black font-semibold px-10 py-5 rounded-full text-lg shadow-lg shadow-green-500/20"
        >
          {productInfo.ctaText}
        </a>
      </div>
    </section>
  );
}