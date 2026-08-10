import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "O'Mister Cleaning — Nettoyage & Location de camion utilitaire en Île-de-France",
  description:
    "O'Mister Cleaning à Pontoise : location de camion utilitaire (avec ou sans chauffeur) et nettoyage professionnel auto, mobilier, habitation en Île-de-France. Devis rapide au 06 10 13 36 42.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta
          property="og:title"
          content="O'Mister Cleaning — Location de camion & nettoyage professionnel"
        />
        <meta
          property="og:description"
          content="Camion utilitaire avec ou sans chauffeur, nettoyage auto, mobilier et habitation à Pontoise et en Île-de-France. Devis clair, intervention rapide."
        />
        <meta property="og:type" content="business.business" />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23081b33'/%3E%3Cpath d='M8 6v6M8 12c-2 2-2 5 0 7s4 2 6 0' stroke='%2300d4ff' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='16' cy='15' r='3.5' stroke='%2300e0a8' stroke-width='2' fill='none'/%3E%3C/svg%3E"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
