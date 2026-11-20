import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "../components/cart/CartContext";
import CartWidget from "../components/cart/CartWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://omistercleaning.fr"),
  alternates: { canonical: "/" },
  title:
    "O'Mister Cleaning — Entreprise de nettoyage : logements, canapés, bureaux, copropriétés, voitures | Pontoise, Val-d'Oise",
  description:
    "Tout type de nettoyage à Pontoise, Cergy et en Île-de-France : canapés, matelas, tapis, remise en état de logements pour agences immobilières, parties communes pour syndics, restaurants, bureaux, sols, voitures. Particuliers et pros, devis gratuit au 06 10 13 36 42.",
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
          content="O'Mister Cleaning — Tout type de nettoyage en Île-de-France"
        />
        <meta
          property="og:description"
          content="Logements, canapés, matelas, parties communes, bureaux, restaurants, sols, voitures : nettoyage en profondeur pour particuliers et pros, partout en Île-de-France. Devis gratuit sur photo."
        />
        <meta property="og:type" content="business.business" />
        <meta
          property="og:image"
          content="https://www.omistercleaning.fr/images/img-05.jpg"
        />
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='32' fill='%23081b33'/%3E%3Ctext x='30' y='45' font-family='Arial, sans-serif' font-weight='800' font-size='36' text-anchor='middle' fill='%23ffffff'%3EO%3C/text%3E%3Ccircle cx='47' cy='20' r='5' fill='%2300d4ff'/%3E%3C/svg%3E" />
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
                "Nettoyage à domicile et en entreprise : intérieur de voiture, canapés, matelas, tapis, moquettes et sols ; remise en état de logements pour agences immobilières, parties communes pour syndics et bailleurs, bureaux et commerces, restaurants, hôtels et garages ; location de camion utilitaire. Basé à Pontoise, intervention dans toute l'Île-de-France.",
              telephone: "+33610133642",
              email: "omister415@gmail.com",
              url: "https://www.omistercleaning.fr",
              image: "https://www.omistercleaning.fr/images/img-12.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5 rue de Bourgogne",
                addressLocality: "Pontoise",
                postalCode: "95300",
                addressCountry: "FR",
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Île-de-France" },
                { "@type": "AdministrativeArea", name: "Val-d'Oise" },
                { "@type": "City", name: "Pontoise" },
                { "@type": "City", name: "Cergy" },
                { "@type": "City", name: "Saint-Ouen-l'Aumône" },
                { "@type": "City", name: "Osny" },
                { "@type": "City", name: "Éragny" },
                { "@type": "City", name: "Conflans-Sainte-Honorine" },
              ],
              priceRange: "€€",
              foundingDate: "2020-09-16",
              identifier: { "@type": "PropertyValue", propertyID: "SIRET", value: "88846815400032" },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Prestations de nettoyage",
                itemListElement: [
                  ["Nettoyage intérieur voiture (formule Express)", 30],
                  ["Nettoyage intérieur voiture (formule Intégrale)", 50],
                  ["Nettoyage voiture intérieur + extérieur", 80],
                  ["Nettoyage de siège", 10],
                  ["Nettoyage de fauteuil", 30],
                  ["Nettoyage de tapis", 20],
                  ["Nettoyage de canapé 2/3 places", 70],
                  ["Nettoyage de canapé d'angle", 90],
                  ["Remise en propreté de logement (studio)", 130],
                  ["Location de camion utilitaire sans chauffeur", 100],
                ].map(([name, price]) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: price,
                    priceCurrency: "EUR",
                  },
                })),
              },
              sameAs: ["https://www.instagram.com/o_mister_cleaning"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Comment obtenir un devis ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Appelez le 06 10 13 36 42 ou envoyez un message sur Instagram avec une photo de ce qu'il faut nettoyer : vous recevez un tarif clair en quelques minutes, gratuitement et sans engagement.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Le prix peut-il augmenter après le devis ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Non. Les tarifs affichés sont des prix de départ, mais une fois votre devis établi, c'est ce montant-là que vous payez — pas de surprise à la fin de l'intervention.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Où intervenez-vous ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Basés à Pontoise (95300), nous nous déplaçons chez vous dans toute l'Île-de-France, pour les particuliers comme pour les professionnels.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Est-ce que toutes les taches partent ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La grande majorité, oui. Certaines taches très anciennes ou incrustées peuvent laisser une trace légère : nous le disons honnêtement dès le devis.",
                  },
                },
              ],
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
