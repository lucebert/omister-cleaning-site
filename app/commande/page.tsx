import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
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
              <img src="/images/img-12.png" alt="" width={38} height={38} />
            </span>
            O'Mister Cleaning
          </a>
          <a className="nav-cta" href="/#boutique">Retour à la boutique</a>
        </div>
      </header>

      <section>
        <div className="section-head">
          <h2 className="section-title">Finalisez votre commande</h2>
          <p className="section-sub">Renseignez vos coordonnées, vous serez ensuite redirigé vers la page de paiement sécurisée Mollie.</p>
        </div>
        <div className="checkout-wrap">
          <CheckoutForm />
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
