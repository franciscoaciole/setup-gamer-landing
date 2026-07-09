// src/components/Gallery.tsx

const placeholderImages = [
  { id: 1, label: "Foto 1 — PC montado (frente)" },
  { id: 2, label: "Foto 2 — PC montado (lateral RGB)" },
  { id: 3, label: "Foto 3 — Setup completo na mesa" },
  { id: 4, label: "Foto 4 — Periféricos" },
];

export default function Gallery() {
  return (
    <section className="bg-neutral-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Galeria
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {placeholderImages.map((image) => (
            <div
              key={image.id}
              className="aspect-video bg-neutral-800 rounded-2xl flex items-center justify-center border border-neutral-700"
            >
              <span className="text-neutral-500 text-sm px-4 text-center">
                {image.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}