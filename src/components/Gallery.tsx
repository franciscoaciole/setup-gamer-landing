// src/components/Gallery.tsx

import Image from "next/image";

const galleryImages = [
  {
    src: "/images/setup-frente.jpg",
    alt: "Setup gamer visto de frente",
  },
  {
    src: "/images/setup-lateral-rgb.jpg",
    alt: "Gabinete do setup",
  },
  {
    src: "/images/setup-mesa.jpg",
    alt: "Setup gamer completo",
  },
  {
    src: "/images/perifericos.jpg",
    alt: "Periféricos do setup",
  },
];

export default function Gallery() {
  return (
    <section className="bg-neutral-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Galeria
        </h2>

        {/* Mobile */}
        <div className="grid gap-6 md:hidden">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-2 gap-6 h-[780px]">

          {/* Coluna esquerda */}
          <div className="grid grid-rows-3 gap-6">

            <div className="relative rounded-2xl overflow-hidden border border-neutral-800">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-neutral-800">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-neutral-800">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                className="object-cover"
              />
            </div>

          </div>

          {/* Imagem grande */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800">
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}