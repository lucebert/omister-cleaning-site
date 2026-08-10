import CompareCard from "../components/CompareCard";
import SiteHeader from "../components/SiteHeader";
import TariffTabs from "../components/TariffTabs";
import AddToCartButton from "../components/cart/AddToCartButton";
import PaymentLogos from "../components/PaymentLogos";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  return (
    <>
<SiteHeader />

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">Nettoyage professionnel auto, mobilier <span className="accent">&</span> habitation.</h1>
            <p className="hero-sub">Sièges auto, canapés, matelas, tapis et sols nettoyés en profondeur au matériel professionnel, chez vous en Île-de-France. Besoin de transporter ? On loue aussi des camions utilitaires, avec ou sans chauffeur.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:0610133642">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3A19.5 19.5 0 0 1 5.1 12.9 19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.7 3.1a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c1 .3 2 .6 3.1.7a2 2 0 0 1 1.7 2Z"/></svg>
                06 10 13 36 42
              </a>
              <a className="btn btn-ghost" href="https://www.instagram.com/o_mister_cleaning" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
                @o_mister_cleaning
              </a>
            </div>
            <ul className="hero-facts">
              <li>Basé à Pontoise (95300)</li>
              <li>Déplacement dans toute l'Île-de-France</li>
              <li>Sur rendez-vous, devis en 5 minutes</li>
            </ul>
          </div>
          <div className="hero-proof">
            <div className="hero-proof-frame">
              <CompareCard
                id={2}
                bare
                lazy={false}
                defaultValue={35}
                afterSrc="/images/img-03.jpg"
                afterAlt="Matelas après nettoyage"
                beforeSrc="/images/img-04.jpg"
                beforeAlt="Matelas avant nettoyage"
                sliderLabel="Comparer avant et après - matelas"
              />
            </div>
            <p className="hero-proof-caption">Matelas nettoyé en profondeur, vraie intervention — faites glisser pour comparer.</p>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="section-head">
          <h2 className="section-title">Nos prestations</h2>
          <p className="section-sub">Trois domaines de nettoyage, plus la location de camion utilitaire pour vos transports — choisissez la formule adaptée à votre besoin.</p>
        </div>
        <div className="offers">


          <article className="offer">
            <div className="offer-head">
              <h3>Nettoyage automobile</h3>
              <span className="offer-price">À partir de 30€</span>
            </div>
            <p className="offer-desc">Trois formules selon le niveau de nettoyage recherché.</p>
            <dl className="offer-items">
              <div><dt>Formule Express</dt><dd>Aspiration complète des moquettes, sièges et plastiques.</dd></div>
              <div><dt>Formule Intégrale</dt><dd>Brossage mécanique, shampouineuse tissus/moquettes, plastiques et vitres.</dd></div>
              <div><dt>Sièges seuls</dt><dd>Nettoyage en profondeur, taches et odeurs éliminées.</dd></div>
            </dl>
          </article>

          <article className="offer">
            <div className="offer-head">
              <h3>Mobilier & textiles</h3>
              <span className="offer-price">À partir de 30€</span>
            </div>
            <p className="offer-desc">Nettoyage en profondeur à la shampouineuse professionnelle.</p>
            <dl className="offer-items">
              <div><dt>Fauteuil & tapis</dt><dd>Taches, bactéries, acariens et odeurs éliminés.</dd></div>
              <div><dt>Matelas</dt><dd>Devis personnalisé selon la taille.</dd></div>
              <div><dt>Canapé</dt><dd>2/3 places, d'angle, ou 5 places et plus — à partir de 70€.</dd></div>
            </dl>
          </article>

          <article className="offer">
            <div className="offer-head">
              <h3>Habitation & professionnels</h3>
              <span className="offer-price">Sur devis</span>
            </div>
            <p className="offer-desc">Sols et surfaces traités à la monobrosse professionnelle.</p>
            <dl className="offer-items">
              <div><dt>Décapage</dt><dd>Retrait des couches de saleté incrustée et anciens traitements.</dd></div>
              <div><dt>Lustrage</dt><dd>Brillance et finition nette redonnées au sol.</dd></div>
              <div><dt>Récurage</dt><dd>Nettoyage en profondeur des sols très encrassés.</dd></div>
            </dl>
          </article>

          <article className="offer">
            <div className="offer-head">
              <h3>Location de camions utilitaires</h3>
              <span className="offer-price">À partir de 100€</span>
            </div>
            <p className="offer-desc">Pour transporter, pas seulement nettoyer : déménagements, achats en magasin (IKEA, Conforama...), meubles volumineux.</p>
            <dl className="offer-items">
              <div><dt>Sans chauffeur</dt><dd>Vous conduisez vous-même, formule la plus économique.</dd></div>
              <div><dt>Avec chauffeur</dt><dd>On s'occupe de la conduite et du transport, en toute sécurité.</dd></div>
            </dl>
          </article>

        </div>
      </section>

      <section id="avant-apres" style={{ background: "#fff" }}>
        <div className="section-head">
          <h2 className="section-title">Avant / après, en un coup d'œil</h2>
          <p className="section-sub">Faites glisser le curseur pour voir la différence.</p>
        </div>
        <div className="ba-grid">
          <CompareCard
            id={1}
            title="Sièges arrière — nettoyage automobile"
            afterSrc="/images/img-01.jpg"
            afterAlt="Siège de voiture après nettoyage"
            beforeSrc="/images/img-02.jpg"
            beforeAlt="Siège de voiture avant nettoyage"
            sliderLabel="Comparer avant et après - siège de voiture"
            caption="Taches profondes et poussière incrustée éliminées par brossage mécanique."
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

      <section id="tarifs" style={{ background: "#fff" }}>
        <div className="section-head">
          <h2 className="section-title">Des prix de départ annoncés avant l'intervention</h2>
          <p className="section-sub">Tous les tarifs indiqués sont des prix de départ (« à partir de »), ajustés selon l'état, la taille et la complexité de l'intervention.</p>
        </div>
        <TariffTabs />
      </section>

      <section id="boutique" style={{ background: "#fff" }}>
        <div className="section-head">
          <h2 className="section-title">Nos produits, à commander en ligne</h2>
          <p className="section-sub">Le nécessaire pour entretenir vous-même sièges auto, tapis, matelas, canapés et sols entre deux interventions.</p>
        </div>

        <div className="shop-grid">
          <div className="shop-card flagship">
            <div className="shop-image">
              <img loading="lazy" className="shop-photo" src="/images/img-11.jpg" alt="Flacon APC Universel O'Mister Cleaning" />
              <div className="shop-sticker"><img loading="lazy" src="/images/img-12.png" alt="Logo O'Mister Cleaning" /></div>
            </div>
            <h3>Nettoyant APC Universel</h3>
            <p>Nettoyant tout-tissu concentré : sièges auto, tapis, matelas, canapés, sols. Le produit polyvalent que nous utilisons nous-mêmes en intervention.</p>
            <div className="shop-price">10€ <span>/ flacon</span></div>
            <AddToCartButton productId="apc" />
          </div>

          <div className="shop-card">
            <div className="shop-image">
              <img loading="lazy" className="shop-photo" src="/images/img-13.jpg" alt="Brosse de nettoyage O'Mister Cleaning" />
              <div className="shop-sticker"><img loading="lazy" src="/images/img-14.png" alt="Logo O'Mister Cleaning" /></div>
            </div>
            <h3>Brosse de nettoyage</h3>
            <p>Petite brosse à poils souples, pensée pour faire pénétrer le produit dans les fibres sans les abîmer.</p>
            <div className="shop-price">5€ <span>/ unité</span></div>
            <AddToCartButton productId="brosse" />
          </div>

          <div className="shop-card">
            <div className="shop-image">
              <img loading="lazy" className="shop-photo" src="/images/img-15.jpg" alt="Lingette microfibre O'Mister Cleaning" />
              <div className="shop-sticker"><img loading="lazy" src="/images/img-16.png" alt="Logo O'Mister Cleaning" /></div>
            </div>
            <h3>Lingette microfibre</h3>
            <p>Fibre d'essuyage et de finition, pour un rendu sans traces après application du produit.</p>
            <div className="shop-price">1€ <span>/ unité</span></div>
            <AddToCartButton productId="fibre" />
          </div>
        </div>

        <p className="shop-secure">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Paiement 100% sécurisé par Mollie
        </p>
        <PaymentLogos />
      </section>

      <section>
        <div className="section-head">
          <h2 className="section-title">Comment on travaille</h2>
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
      </section>

      <section id="zone">
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

      <section id="contact">
        <div className="section-head">
          <h2 className="section-title">Parlons de votre projet</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-item">
              <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg></div>
              <div><div className="label">Votre interlocuteur</div><div className="value">Omar Kourouma, gérant</div></div>
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
            <a className="btn btn-primary" href="tel:0610133642">Appeler maintenant</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
