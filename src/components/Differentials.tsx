// src/components/Differentials.tsx
import { differentials } from "@/data/specs";

export default function Differentials() {
  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Diferenciais
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2 text-green-500">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}