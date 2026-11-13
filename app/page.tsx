import CompareCard from "../components/CompareCard";
import SiteHeader from "../components/SiteHeader";
import Reviews from "../components/Reviews";
import DevisSimulator from "../components/DevisSimulator";
import ServiceTabs from "../components/ServiceTabs";
import { LEGAL } from "../lib/legal";
import AddToCartButton from "../components/cart/AddToCartButton";
import PaymentLogos from "../components/PaymentLogos";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  return (
    <>
<SiteHeader />
      <DevisSimulator />

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">Voitures, canapés, moquettes, locaux : tout redevient <span className="accent">comme neuf</span>.</h1>
            <p className="hero-sub">Nettoyage professionnel en profondeur, chez vous ou dans vos locaux, pour les particuliers comme pour les pros : restaurants, hôtels, agences immobilières, garages, autocars. Partout en Île-de-France.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#services">
                Voir toutes nos prestations →
              </a>
              <a className="btn btn-ghost" href="tel:0610133642">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3A19.5 19.5 0 0 1 5.1 12.9 19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.7 3.1a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c1 .3 2 .6 3.1.7a2 2 0 0 1 1.7 2Z"/></svg>
                Devis gratuit : 06 10 13 36 42
              </a>
            </div>
            <p className="hero-cta-note">Envoyez une photo sur <a href="https://www.instagram.com/o_mister_cleaning" target="_blank" rel="noopener">Instagram</a> ou par téléphone : tarif clair en 5 minutes.</p>
            <a className="hero-google" href="#avis">
              <span className="hero-google-stars" aria-hidden="true">★★★★★</span>
              <strong>5,0 sur Google</strong> · 11 avis clients
            </a>
            <p className="hero-quote">« Que ce soit mon canapé/tapis, ma voiture, ou mes locaux : le service est top de A à Z. » <span>— Yacine S., avis Google, <a href="#avis">voir les avis</a></span></p>
          </div>
          <div className="hero-mosaic" aria-label="Nos métiers">
            {[
              { href: "#prestations-automobile", img: "/images/img-05.jpg", alt: "Banquette de voiture après nettoyage", label: "Voitures", sub: "dès 30€" },
              { href: "#prestations-textiles", img: "/images/img-09.jpg", alt: "Canapé d'angle après nettoyage", label: "Canapés · matelas · tapis", sub: "dès 20€" },
              { href: "#prestations-restaurants-hotels", img: "/images/tile-restaurant.jpg", alt: "Nettoyage d'un fauteuil de restaurant", label: "Restaurants & hôtels", sub: "pros" },
              { href: "#prestations-sols-locaux", img: "/images/tile-moquette.jpg", alt: "Moquette nettoyée à la monobrosse", label: "Moquettes & sols", sub: "devis au m²" },
              { href: "#prestations-automobile", img: "/images/tile-autocar.jpg", alt: "Sièges d'autocar nettoyés", label: "Autocars & flottes", sub: "pros" },
              { href: "#prestations-agences-syndics", img: "", alt: "", label: "Agences & syndics", sub: "logement prêt sous 72 h" },
            ].map((tile) => (
              <a key={tile.label} className={`mosaic-tile${tile.img ? "" : " mosaic-text"}`} href={tile.href}>
                {tile.img ? <img src={tile.img} alt={tile.alt} loading="eager" /> : null}
                <span className="mosaic-label">
                  <strong>{tile.label}</strong>
                  <em>{tile.sub}</em>
                </span>
              </a>
            ))}
            <p className="hero-proof-caption mosaic-caption">Photos de vraies interventions — touchez une case pour voir la prestation.</p>
          </div>
        </div>
      </section>


      <section className="pro-strip" aria-label="Offres professionnelles">
        <div className="pro-strip-inner">
          <p className="pro-strip-title">Vous êtes un professionnel ?</p>
          <nav className="pro-strip-links">
            <a href="#prestations-restaurants-hotels">Restaurants &amp; hôtels</a>
            <a href="#prestations-agences-syndics">Agences &amp; syndics</a>
            <a href="#prestations-garages">Garages &amp; concessions</a>
            <a href="#prestations-sols-locaux">Bureaux &amp; locaux</a>
          </nav>
        </div>
      </section>

      <section id="services" className="section-tint">
        <div className="section-head">
          <h2 className="section-title">Prestations & tarifs</h2>
          <p className="section-sub">Choisissez votre rubrique : particuliers ou professionnels, chaque prestation est détaillée avec ses tarifs. Les prix « à partir de » sont ajustés selon l'état, la taille et la complexité — le prix du devis est le prix final.</p>
        </div>
        <ServiceTabs />
      </section>

      <section id="avant-apres" className="section-dark">
        <div className="section-head">
          <h2 className="section-title">Avant / après, en un coup d'œil</h2>
          <p className="section-sub">Faites glisser le curseur pour voir la différence.</p>
        </div>
        <div className="ba-grid">
          <CompareCard
            id={2}
            title="Matelas — nettoyage en profondeur"
            afterSrc="/images/img-03.jpg"
            afterAlt="Matelas après nettoyage"
            beforeSrc="/images/img-04.jpg"
            beforeAlt="Matelas avant nettoyage"
            sliderLabel="Comparer avant et après - matelas"
            caption="Taches et auréoles disparues, matelas assaini en profondeur."
          />
          <CompareCard
            id={3}
            title="Banquette arrière — deuxième intervention"
            afterSrc="/images/img-05.jpg"
            afterAlt="Banquette de voiture après nettoyage"
            beforeSrc="/images/img-06.jpg"
            beforeAlt="Banquette de voiture avant nettoyage"
            sliderLabel="Comparer avant et après - banquette de voiture"
            caption="Housses très sales et poussiéreuses retrouvent tout leur éclat d'origine."
          />
          <CompareCard
            id={4}
            title="Coussin de chaise — nettoyage textile"
            afterSrc="/images/img-07.jpg"
            afterAlt="Coussin après nettoyage"
            beforeSrc="/images/img-08.jpg"
            beforeAlt="Coussin avant nettoyage"
            sliderLabel="Comparer avant et après - coussin"
            caption="Taches incrustées et auréoles totalement effacées."
          />
          <CompareCard
            id={5}
            title="Canapé d'angle — nettoyage en profondeur"
            afterSrc="/images/img-09.jpg"
            afterAlt="Canapé d'angle après nettoyage"
            beforeSrc="/images/img-10.jpg"
            beforeAlt="Canapé d'angle avant nettoyage"
            sliderLabel="Comparer avant et après - canapé d'angle"
            caption="Tissu terni et taches disparues, assise retrouvée uniforme et propre."
          />
        </div>
      </section>

      <Reviews />

      <section id="boutique" className="section-tint">
        <div className="section-head">
          <h2 className="section-title">Le produit qu'on utilise en intervention</h2>
          <p className="section-sub">Le nettoyant de nos interventions, pour entretenir vous-même sièges auto, tapis, matelas, canapés et sols entre deux passages.</p>
        </div>

        <div className="shop-grid shop-grid-single">
          <div className="shop-card flagship">
            <div className="shop-image">
              <img loading="lazy" className="shop-photo" src="/images/img-11.jpg" alt="Flacon APC Universel O'Mister Cleaning" />
              <div className="shop-sticker"><img loading="lazy" src="/images/img-12.png" alt="Logo O'Mister Cleaning" /></div>
            </div>
            <h3>Nettoyant APC Universel</h3>
            <p>Nettoyant tout-tissu concentré : sièges auto, tapis, matelas, canapés, sols. Le produit polyvalent que nous utilisons nous-mêmes en intervention.</p>
            <div className="shop-price">13€ <span>/ flacon</span></div>
            <AddToCartButton productId="apc" />
          </div>

        </div>

        <p className="shop-secure">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Paiement 100% sécurisé par Mollie
        </p>
        <PaymentLogos />
      </section>

      <section className="section-white">
        <div className="section-head">
          <h2 className="section-title">Comment travaille-t-on ?</h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 9h18M9 15l2 2 4-4"/></svg></div>
            <h3>Sur rendez-vous, avec acompte</h3>
            <p>L'acompte confirme votre créneau ; on vous explique tout au téléphone avant de réserver.</p>
          </div>
          <div className="why-card">
            <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h4M10 3v3M7 8l1.5-2h4L14 8v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8ZM17 8h3M18.5 6.5 20 8l-1.5 1.5"/></svg></div>
            <h3>Les produits qu'on utilise, on les vend</h3>
            <p>Le nettoyant APC de la boutique est celui de nos interventions.</p>
          </div>
          <div className="why-card">
            <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-9 8-14a8 8 0 1 0-16 0c0 5 8 14 8 14Z"/><circle cx="12" cy="8" r="3"/></svg></div>
            <h3>Basés à Pontoise (95300)</h3>
            <p>On se déplace chez vous, dans toute l'Île-de-France.</p>
          </div>
          <div className="why-card">
            <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></div>
            <h3>Nos réalisations en photos</h3>
            <p>Les avant/après sont sur <a href="https://www.instagram.com/o_mister_cleaning" target="_blank" rel="noopener">@o_mister_cleaning</a>.</p>
          </div>
        </div>
        <p className="section-quote">« Merci pour la prestation, délai et devis respectés — et merci pour ta ponctualité. » <span>— avis client</span></p>
      </section>

      <section id="zone" className="section-white">
        <div className="zone-section">
          <div>
            <h2>Disponible dans toute l'Île-de-France</h2>
            <p>Basés à Pontoise (95300), nous nous déplaçons chez vous pour toutes vos prestations, sur rendez-vous et avec acompte obligatoire.</p>
          </div>
          <div className="zone-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2"><path d="M12 22s8-9 8-14a8 8 0 1 0-16 0c0 5 8 14 8 14Z"/><circle cx="12" cy="8" r="3"/></svg>
            Pontoise · 95300
          </div>
        </div>
      </section>

      <section id="faq" className="section-white">
        <div className="section-head">
          <h2 className="section-title">Questions fréquentes</h2>
        </div>
        <div className="faq-list">
          <details className="faq-item">
            <summary>Comment obtenir un devis ?</summary>
            <p>Appelez le <a href="tel:0610133642">06 10 13 36 42</a> ou envoyez un message sur Instagram avec une photo de ce qu'il faut nettoyer : vous recevez un tarif clair en quelques minutes, gratuitement et sans engagement.</p>
          </details>
          <details className="faq-item">
            <summary>Comment se passe la réservation ?</summary>
            <p>On fixe ensemble un créneau, puis un acompte vient le confirmer. Les modalités exactes vous sont précisées au moment du devis, avant tout engagement.</p>
          </details>
          <details className="faq-item">
            <summary>Le prix peut-il augmenter après le devis ?</summary>
            <p>Non. Les tarifs affichés sont des prix de départ, mais une fois votre devis établi, c'est ce montant-là que vous payez — pas de surprise à la fin de l'intervention. « Délai et devis respectés », résume un client.</p>
          </details>
          <details className="faq-item">
            <summary>Où intervenez-vous ?</summary>
            <p>Nous sommes basés à Pontoise (95300) et nous nous déplaçons chez vous dans toute l'Île-de-France, pour les particuliers comme pour les professionnels.</p>
          </details>
          <details className="faq-item">
            <summary>Est-ce que toutes les taches partent ?</summary>
            <p>La grande majorité, oui — les photos avant/après de cette page sont de vraies interventions. Certaines taches très anciennes ou incrustées peuvent laisser une trace légère : on vous le dit honnêtement dès le devis.</p>
          </details>
          <details className="faq-item">
            <summary>Combien de temps ça prend ?</summary>
            <p>La durée dépend de la prestation et de l'état — elle vous est annoncée avec le devis. Pour les textiles (canapé, matelas, sièges), prévoyez ensuite quelques heures de séchage avant réutilisation.</p>
          </details>
          <details className="faq-item">
            <summary>Boutique : paiement et livraison ?</summary>
            <p>Paiement sécurisé par carte bancaire ou Apple Pay via Mollie. Livraison en France métropolitaine : 4,95€, offerte dès 30€ d'achat, expédition sous 2 à 4 jours ouvrés.</p>
          </details>
        </div>
      </section>

      <section id="contact" className="section-tint">
        <div className="section-head">
          <h2 className="section-title">Demandez votre devis</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-item">
              <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg></div>
              <div><div className="label">Votre interlocuteur</div><div className="value">Omar Kourouma, gérant</div><div className="contact-legal">Entreprise immatriculée depuis {LEGAL.since} · SIRET {LEGAL.siret}</div></div>
            </div>
            <div className="contact-item">
              <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3A19.5 19.5 0 0 1 5.1 12.9 19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.7 3.1a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c1 .3 2 .6 3.1.7a2 2 0 0 1 1.7 2Z"/></svg></div>
              <div><div className="label">Téléphone</div><a className="value" href="tel:0610133642">06 10 13 36 42</a></div>
            </div>
            <div className="contact-item">
              <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg></div>
              <div><div className="label">Email</div><a className="value" href="mailto:omister415@gmail.com">omister415@gmail.com</a></div>
            </div>
            <div className="contact-item">
              <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></div>
              <div><div className="label">Instagram</div><a className="value" href="https://www.instagram.com/o_mister_cleaning" target="_blank" rel="noopener">@o_mister_cleaning</a></div>
            </div>
            <div className="contact-item">
              <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M12 3c-1 2-2 3-4 3.5C6 8 5 10 6 12c-2 .5-3 2-3 4 2 0 3.5-1 4-2 .5 2 2 3 5 3s4.5-1 5-3c.5 1 2 2 4 2 0-2-1-3.5-3-4 1-2 0-4-2-4.5C14 6 13 5 12 3Z"/></svg></div>
              <div><div className="label">Snapchat</div><a className="value" href="https://www.snapchat.com/add/omister233060" target="_blank" rel="noopener">omister233060</a></div>
            </div>
          </div>
          <div className="cta-panel">
            <h3>Un devis en 5 minutes</h3>
            <p>Décrivez-nous votre besoin par téléphone ou message Instagram : nous vous répondons avec un tarif clair, sans engagement.</p>
            <p className="cta-quote">« Je vais passer que par vous maintenant. »</p>
            <a className="btn btn-primary" href="tel:0610133642">Appeler le 06 10 13 36 42</a>
          </div>
        </div>
      </section>

      <a className="call-fab" href="tel:0610133642" aria-label="Appeler O'Mister Cleaning au 06 10 13 36 42">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3A19.5 19.5 0 0 1 5.1 12.9 19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.7 3.1a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c1 .3 2 .6 3.1.7a2 2 0 0 1 1.7 2Z"/></svg>
        Appeler
      </a>

      <SiteFooter />
    </>
  );
}
