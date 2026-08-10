"use client";

// Boutons "Acheter" -> redirigent vers le lien de paiement Stripe du produit
export default function BuyButton({ stripeLink }: { stripeLink: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!stripeLink || stripeLink.startsWith("REMPLACER_")) {
      alert(
        "Ce produit n'est pas encore configuré pour le paiement en ligne. Ajoutez son lien de paiement Stripe dans le code du site."
      );
      return;
    }
    window.open(stripeLink, "_blank");
  };

  return (
    <a
      className="shop-buy"
      href="#"
      data-stripe-link={stripeLink}
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      Acheter
    </a>
  );
}
