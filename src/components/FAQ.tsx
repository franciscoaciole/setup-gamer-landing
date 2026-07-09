// src/components/FAQ.tsx
"use client";

import { useState } from "react";
import { faqItems } from "@/data/specs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleQuestion(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="bg-neutral-950 text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="border border-neutral-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-4 bg-neutral-900 hover:bg-neutral-800 transition-colors"
                >
                  <span className="font-medium">{item.question}</span>
                  <span className="text-green-500 text-xl leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 py-4 text-neutral-400 text-sm leading-relaxed bg-neutral-950">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}