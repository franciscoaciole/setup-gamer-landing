// src/components/Performance.tsx
import { gamePerformance } from "@/data/specs";

export default function Performance() {
  return (
    <section className="bg-neutral-950 text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Performance em Jogos
        </h2>
        <p className="text-center text-neutral-400 mb-12">
          Estimativas de desempenho com base na configuração do setup.
        </p>

        <div className="space-y-4">
          {gamePerformance.map((item) => (
            <div
              key={item.game}
              className="flex items-center justify-between bg-neutral-900 rounded-xl px-6 py-4 border border-neutral-800"
            >
              <div>
                <p className="font-semibold text-lg">{item.game}</p>
                <p className="text-sm text-neutral-500">{item.settings}</p>
              </div>
              <span className="text-green-500 font-bold text-xl">
                {item.fps}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}