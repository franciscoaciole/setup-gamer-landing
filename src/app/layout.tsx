import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Setup Gamer Completo | Ryzen 5 + RX 7600 | WhatsApp",
  description:
    "Setup gamer completo com Ryzen 5 5500, RX 7600, monitor 180Hz e periféricos premium. Pronto para uso imediato e com suporte para jogos competitivos.",
  keywords: [
    "setup gamer completo",
    "ryzen 5 5500",
    "rx 7600",
    "monitor 180hz",
    "pc gamer",
    "setup para jogos",
    "periféricos gamer",
  ],
  applicationName: "Setup Gamer Landing",
  authors: [{ name: "Setup Gamer" }],
  creator: "Setup Gamer",
  openGraph: {
    title: "Setup Gamer Completo | Ryzen 5 + RX 7600",
    description:
      "Um setup gamer completo pronto para usar, com alto desempenho e excelente custo-benefício.",
    type: "website",
    locale: "pt_BR",
    siteName: "Setup Gamer Landing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Setup Gamer Completo | Ryzen 5 + RX 7600",
    description:
      "Placa de vídeo RX 7600, Ryzen 5 5500, monitor 180Hz e periféricos premium.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}