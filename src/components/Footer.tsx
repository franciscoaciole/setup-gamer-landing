// src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-neutral-500 px-6 py-10 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-2">
        <p className="text-sm">
          Setup Completo — Anúncio particular
        </p>
        <p className="text-xs">
          © {currentYear} Francisco Aciole. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}