import type { Metadata } from "next";
import LegalHeader from "../../components/LegalHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Mentions légales — O'Mister Cleaning",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <LegalHeader />
      <section>
        <div className="legal-wrap">
          <h1 className="section-title">Mentions légales</h1>

          <h2>Éditeur du site</h2>
          <p>
            Le site omistercleaning.fr est édité par :<br />
            <strong>O'Mister Cleaning</strong> — [À compléter : forme juridique et
            nom du gérant]<br />
            SIRET : [À compléter]<br />
            Siège social : [À compléter : adresse], 95300 Pontoise<br />
            Téléphone : <a href="tel:0610133642">06 10 13 36 42</a><br />
            Email : <a href="mailto:omister415@gmail.com">omister415@gmail.com</a>
          </p>

          <h2>Directeur de la publication</h2>
          <p>[À compléter : nom du gérant]</p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
            CA 91723, États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a>.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus de ce site (textes, photographies, logo) est la
            propriété d'O'Mister Cleaning. Toute reproduction sans autorisation
            préalable est interdite.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations saisies lors d'une commande (coordonnées, adresses de
            livraison et de facturation) sont utilisées uniquement pour le
            traitement et l'expédition de la commande. Le paiement est traité par
            Mollie B.V. ; aucune donnée bancaire n'est stockée par ce site. Ce site
            n'utilise pas de cookies de suivi publicitaire. Conformément au RGPD,
            vous pouvez exercer vos droits d'accès, de rectification et de
            suppression en écrivant à{" "}
            <a href="mailto:omister415@gmail.com">omister415@gmail.com</a>.
          </p>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
