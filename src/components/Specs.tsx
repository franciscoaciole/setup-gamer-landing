// src/components/Specs.tsx
import { specGroups } from "@/data/specs";

export default function Specs() {
  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Especificações Técnicas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {specGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl font-semibold mb-4 text-green-500">
                {group.category}
              </h3>

              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex justify-between border-b border-neutral-800 pb-3"
                  >
                    <span className="text-neutral-400">{item.label}</span>
                    <span className="font-medium text-right">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}