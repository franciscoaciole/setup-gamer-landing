// src/components/Gallery.tsx
import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/images/setup-frente.jpg", alt: "Setup gamer visto de frente" },
  { id: 2, src: "/images/setup-lateral-rgb.jpg", alt: "Setup gamer visto lateralmente, com iluminação RGB" },
  { id: 3, src: "/images/setup-mesa.jpg", alt: "Setup gamer completo montado na mesa" },
  { id: 4, src: "/images/perifericos.jpg", alt: "Periféricos do setup: teclado, mouse e headset" },
];

export default function Gallery() {
  return (
    <section className="bg-neutral-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Galeria
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}