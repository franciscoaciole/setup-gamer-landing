// src/components/Hero.tsx
import { productInfo } from "@/data/specs";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white overflow-hidden">
      {/* Brilho decorativo de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-green-500/10 blur-3xl rounded-full" />
      </div>

      {/* Grade sutil de fundo */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative">
        {/* Badge */}
        <span className="inline-block bg-neutral-900 border border-neutral-800 text-green-500 text-xs font-medium px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          Disponível para venda
        </span>

        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          Um setup gamer completo, pronto para{" "}
          <span className="text-green-500">elevar</span> sua experiência.
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-400 max-w-xl mx-auto">
          {productInfo.heroSubheadline}
        </p>
        
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-neutral-500 text-xs tracking-widest uppercase">
          Explore
        </span>
        <svg
          className="w-5 h-5 text-neutral-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}