import type { Metadata } from "next";
import LegalHeader from "../../components/LegalHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Conditions générales de vente — O'Mister Cleaning",
  robots: { index: false },
};

export default function CgvPage() {
  return (
    <>
      <LegalHeader />
      <section>
        <div className="legal-wrap">
          <h1 className="section-title">Conditions générales de vente</h1>
          <p>
            Les présentes conditions s'appliquent aux ventes de produits
            d'entretien réalisées sur le site omistercleaning.fr par O'Mister
            Cleaning ([À compléter : forme juridique], SIRET [À compléter]),
            ci-après « le Vendeur », auprès de clients particuliers.
          </p>

          <h2>1. Produits et prix</h2>
          <p>
            Les produits proposés sont ceux présentés dans la boutique du site.
            Les prix sont indiqués en euros, toutes taxes comprises, hors frais de
            livraison. Les frais de livraison sont affichés avant la validation de
            la commande : 4,95€, offerts à partir de 30€ d'achat.
          </p>

          <h2>2. Commande et paiement</h2>
          <p>
            Le paiement s'effectue en ligne au moment de la commande, par carte
            bancaire ou tout autre moyen proposé, via la plateforme de paiement
            sécurisée Mollie. La commande est confirmée dès validation du
            paiement.
          </p>

          <h2>3. Livraison</h2>
          <p>
            Les commandes sont livrées en France métropolitaine à l'adresse de
            livraison indiquée lors de la commande. Expédition sous [À compléter :
            délai, ex. 2 à 4 jours ouvrés] via [À compléter : transporteur, ex.
            Colissimo]. En cas de retard ou de problème de livraison, contactez le
            Vendeur au <a href="tel:0610133642">06 10 13 36 42</a>.
          </p>

          <h2>4. Droit de rétractation</h2>
          <p>
            Conformément aux articles L221-18 et suivants du Code de la
            consommation, vous disposez d'un délai de 14 jours à compter de la
            réception de votre commande pour exercer votre droit de rétractation,
            sans avoir à justifier de motif. Pour l'exercer, contactez le Vendeur
            par email à{" "}
            <a href="mailto:omister415@gmail.com">omister415@gmail.com</a> ou par
            téléphone. Les produits doivent être retournés complets et en état
            d'être revendus ; les frais de retour restent à votre charge. Le
            remboursement intervient dans les 14 jours suivant la réception du
            retour.
          </p>

          <h2>5. Garanties</h2>
          <p>
            Les produits bénéficient des garanties légales de conformité (articles
            L217-3 et suivants du Code de la consommation) et des vices cachés
            (articles 1641 et suivants du Code civil).
          </p>

          <h2>6. Réclamations et litiges</h2>
          <p>
            Pour toute réclamation, contactez le Vendeur au{" "}
            <a href="tel:0610133642">06 10 13 36 42</a> ou à{" "}
            <a href="mailto:omister415@gmail.com">omister415@gmail.com</a>.
            Conformément aux articles L612-1 et suivants du Code de la
            consommation, vous pouvez recourir gratuitement à un médiateur de la
            consommation : [À compléter : nom et coordonnées du médiateur choisi].
            Vous pouvez également utiliser la plateforme européenne de règlement en
            ligne des litiges :{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener"
            >
              ec.europa.eu/consumers/odr
            </a>
            .
          </p>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
