import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "../components/cart/CartContext";
import CartWidget from "../components/cart/CartWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://omistercleaning.fr"),
  alternates: { canonical: "/" },
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
        <meta
          property="og:image"
          content="https://www.omistercleaning.fr/images/img-05.jpg"
        />
        <link rel="icon" href="/images/img-12.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="2dc1a800-50a3-49e0-a589-83146eafd0e9"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "O'Mister Cleaning",
              description:
                "Location de camion utilitaire et nettoyage professionnel auto, mobilier et habitation à Pontoise et en Île-de-France.",
              telephone: "+33610133642",
              email: "omister415@gmail.com",
              url: "https://www.omistercleaning.fr",
              image: "https://www.omistercleaning.fr/images/img-12.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pontoise",
                postalCode: "95300",
                addressCountry: "FR",
              },
              areaServed: "Île-de-France",
              priceRange: "€€",
              sameAs: ["https://www.instagram.com/o_mister_cleaning"],
            }),
          }}
        />
        <CartProvider>
          {children}
          <CartWidget />
        </CartProvider>
      </body>
    </html>
  );
}
