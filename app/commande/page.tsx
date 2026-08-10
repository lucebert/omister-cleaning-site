import type { Metadata } from "next";
import CheckoutForm from "../../components/cart/CheckoutForm";

export const metadata: Metadata = {
  title: "Commande — O'Mister Cleaning",
  description:
    "Finalisez votre commande de produits d'entretien O'Mister Cleaning. Paiement sécurisé par Mollie.",
  robots: { index: false },
};

export default function CommandePage() {
  return (
    <>
      <header>
        <div className="nav wrap">
          <a className="brand" href="/">
            <span className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M6 3v6M6 9c-2 2-2 5 0 7s4 2 6 0"/><circle cx="17" cy="14" r="4"/></svg>
            </span>
            O'Mister Cleaning
          </a>
          <a className="nav-cta" href="/#boutique">Retour à la boutique</a>
        </div>
      </header>

      <section>
        <div className="section-head">
          <div className="section-eyebrow">Commande</div>
          <h2 className="section-title">Finalisez votre commande</h2>
          <p className="section-sub">Renseignez vos coordonnées, vous serez ensuite redirigé vers la page de paiement sécurisée Mollie.</p>
        </div>
        <div className="checkout-wrap">
          <CheckoutForm />
        </div>
      </section>
    </>
  );
}
