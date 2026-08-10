import CompareCard from "../components/CompareCard";
import TariffTabs from "../components/TariffTabs";
import AddToCartButton from "../components/cart/AddToCartButton";
import PaymentLogos from "../components/PaymentLogos";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  return (
    <>
      <header>
        <div className="nav wrap">
          <div className="brand">
            <span className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M6 3v6M6 9c-2 2-2 5 0 7s4 2 6 0"/><circle cx="17" cy="14" r="4"/></svg>
            </span>
            O'Mister Cleaning
          </div>
          <nav className="nav-links">
            <a href="#services">Prestations</a>
            <a href="#avant-apres">Avant/Après</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#boutique">Boutique</a>
            <a href="#zone">Zone</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="tel:0610133642">Devis rapide</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="sweep" aria-hidden="true">
          <svg viewBox="0 0 1200 500" preserveAspectRatio="none">
            <path d="M0,420 C300,460 500,380 800,410 C950,425 1050,400 1200,420 L1200,500 L0,500 Z" fill="#e4f8fc" opacity="0.6"/>
          </svg>
        </div>
        <div className="hero-inner">
          <div className="eyebrow"><span className="eyebrow-dot"></span>Basé à Pontoise · Intervention Île-de-France</div>
          <h1 className="hero-title">Location de camion utilitaire <span className="accent">&</span> nettoyage professionnel.</h1>
          <p className="hero-sub">Camion avec ou sans chauffeur pour vos déménagements et transports, nettoyage auto, mobilier, habitation et locaux professionnels : O'Mister Cleaning s'occupe de tout. Devis clair, intervention rapide.</p>
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
          <div className="hero-stats">
            <div className="stat"><b>À partir de 100€</b><span>location camion utilitaire</span></div>
            <div className="stat"><b>4</b><span>domaines de nettoyage</span></div>
            <div className="stat"><b>Île-de-France</b><span>zone d'intervention</span></div>
            <div className="stat"><b>À partir de 30€</b><span>prestation la plus simple</span></div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="section-head">
          <div className="section-eyebrow">Nos prestations</div>
          <h2 className="section-title">Location de camion & nettoyage, en un seul endroit</h2>
          <p className="section-sub">Quatre domaines d'intervention, chacun détaillé ci-dessous pour que vous choisissiez la formule adaptée à votre besoin.</p>
        </div>
        <div className="services-grid">

          <div className="service-card featured">
            <span className="service-tag">Location express</span>
            <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="7" width="15" height="10" rx="1"/><path d="M16 10h3.5a1 1 0 0 1 .9.5l2.1 3.5a1 1 0 0 1 .1.5V17a1 1 0 0 1-1 1H16"/><circle cx="6" cy="19" r="1.6"/><circle cx="18.5" cy="19" r="1.6"/></svg></div>
            <h3>Location de camions utilitaires</h3>
            <p className="service-intro">Pour transporter, pas seulement nettoyer : déménagements, achats en magasin (IKEA, Conforama...), meubles volumineux.</p>
            <ul className="service-sublist">
              <li>
                <span className="check"><svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <div><div className="sub-name">Sans chauffeur</div><div className="sub-desc">Vous conduisez vous-même, formule la plus économique.</div></div>
              </li>
              <li>
                <span className="check"><svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <div><div className="sub-name">Avec chauffeur</div><div className="sub-desc">On s'occupe de la conduite et du transport, en toute sécurité.</div></div>
              </li>
            </ul>
            <div className="service-price">À partir de 100€</div>
          </div>

          <div className="service-card">
            <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17h14M5 17a2 2 0 0 1-2-2v-1.4a2 2 0 0 1 .6-1.4l1.7-1.7A2 2 0 0 1 6.7 10h10.6a2 2 0 0 1 1.4.6l1.7 1.7a2 2 0 0 1 .6 1.4V15a2 2 0 0 1-2 2M7 17v2M17 17v2M6 10l1-3.2A2 2 0 0 1 8.9 5h6.2a2 2 0 0 1 1.9 1.8L18 10"/></svg></div>
            <h3>Nettoyage automobile</h3>
            <p className="service-intro">Trois formules selon le niveau de nettoyage recherché.</p>
            <ul className="service-sublist">
              <li>
                <span className="check"><svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <div><div className="sub-name">Formule Express</div><div className="sub-desc">Aspiration complète des moquettes, sièges et plastiques.</div></div>
              </li>
              <li>
                <span className="check"><svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <div><div className="sub-name">Formule Intégrale</div><div className="sub-desc">Brossage mécanique, shampouineuse tissus/moquettes, plastiques et vitres.</div></div>
              </li>
              <li>
                <span className="check"><svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <div><div className="sub-name">Sièges seuls</div><div className="sub-desc">Nettoyage en profondeur, taches et odeurs éliminées.</div></div>
              </li>
            </ul>
            <div className="service-price">À partir de 30€</div>
          </div>

          <div className="service-card">
            <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18v-5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5M3 18h18M5 18v2M19 18v2M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></svg></div>
            <h3>Mobilier & textiles</h3>
            <p className="service-intro">Nettoyage en profondeur à la shampouineuse professionnelle.</p>
            <ul className="service-sublist">
              <li>
                <span className="check"><svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <div><div className="sub-name">Fauteuil & tapis</div><div className="sub-desc">Taches, bactéries, acariens et odeurs éliminés.</div></div>
              </li>
              <li>
                <span className="check"><svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <div><div className="sub-name">Matelas</div><div className="sub-desc">Devis personnalisé selon la taille.</div></div>
              </li>
              <li>
                <span className="check"><svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <div><div className="sub-name">Canapé</div><div className="sub-desc">2/3 places, d'angle, ou 5 places et plus.</div></div>
              </li>
            </ul>
            <div className="service-price">À partir de 30€ — Canapé à partir de 70€</div>
          </div>

          <div className="service-card">
            <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11.5 12 4l9 7.5M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/></svg></div>
            <h3>Habitation & professionnels</h3>
            <p className="service-intro">Sols et surfaces traités à la monobrosse professionnelle.</p>
            <ul className="service-sublist">
              <li>
                <span className="check"><svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <div><div className="sub-name">Décapage</div><div className="sub-desc">Retrait des couches de saleté incrustée et anciens traitements.</div></div>
              </li>
              <li>
                <span className="check"><svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <div><div className="sub-name">Lustrage</div><div className="sub-desc">Brillance et finition nette redonnées au sol.</div></div>
              </li>
              <li>
                <span className="check"><svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <div><div className="sub-name">Récurage</div><div className="sub-desc">Nettoyage en profondeur des sols très encrassés.</div></div>
              </li>
            </ul>
            <div className="service-price">Sur devis personnalisé</div>
          </div>

        </div>
      </section>

      <section id="avant-apres" style={{ background: "#fff" }}>
        <div className="section-head">
          <div className="section-eyebrow">Résultats</div>
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

      <section id="tarifs" style={{ background: "#fff" }}>
        <div className="section-head">
          <div className="section-eyebrow">Grille tarifaire</div>
          <h2 className="section-title">Des prix clairs, annoncés à l'avance</h2>
          <p className="section-sub">Tous les tarifs indiqués sont des prix de départ (« à partir de »), ajustés selon l'état, la taille et la complexité de l'intervention.</p>
        </div>
        <TariffTabs />
      </section>

      <section id="boutique" style={{ background: "#fff" }}>
        <div className="section-head">
          <div className="section-eyebrow">Boutique</div>
          <h2 className="section-title">Nos produits, à commander en ligne</h2>
          <p className="section-sub">Le nécessaire pour entretenir vous-même sièges auto, tapis, matelas, canapés et sols entre deux interventions.</p>
        </div>

        <div className="shop-grid">
          <div className="shop-card flagship">
            <div className="shop-image">
              <img className="shop-photo" src="/images/img-11.jpg" alt="Flacon APC Universel O'Mister Cleaning" />
              <div className="shop-sticker"><img src="/images/img-12.png" alt="Logo O'Mister Cleaning" /></div>
            </div>
            <h3>APC Universel</h3>
            <p>Nettoyant tout-tissu concentré : sièges auto, tapis, matelas, canapés, sols. Le produit polyvalent que nous utilisons nous-mêmes en intervention.</p>
            <div className="shop-price">10€ <span>/ flacon</span></div>
            <AddToCartButton productId="apc" />
          </div>

          <div className="shop-card">
            <div className="shop-image">
              <img className="shop-photo" src="/images/img-13.jpg" alt="Brosse de nettoyage O'Mister Cleaning" />
              <div className="shop-sticker"><img src="/images/img-14.png" alt="Logo O'Mister Cleaning" /></div>
            </div>
            <h3>Brosse de nettoyage</h3>
            <p>Petite brosse à poils souples, pensée pour faire pénétrer le produit dans les fibres sans les abîmer.</p>
            <div className="shop-price">5€ <span>/ unité</span></div>
            <AddToCartButton productId="brosse" />
          </div>

          <div className="shop-card">
            <div className="shop-image">
              <img className="shop-photo" src="/images/img-15.jpg" alt="Lingette microfibre O'Mister Cleaning" />
              <div className="shop-sticker"><img src="/images/img-16.png" alt="Logo O'Mister Cleaning" /></div>
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
          <div className="section-eyebrow">Pourquoi nous</div>
          <h2 className="section-title">Le sérieux d'une équipe locale</h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11Z"/></svg></div>
            <h4>Véhicules entretenus</h4>
            <p>Un parc utilitaire propre et suivi pour vos déménagements.</p>
          </div>
          <div className="why-card">
            <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg></div>
            <h4>Tarifs compétitifs</h4>
            <p>Une grille tarifaire annoncée à l'avance, sans surprise.</p>
          </div>
          <div className="why-card">
            <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div>
            <h4>Intervention rapide</h4>
            <p>Sur rendez-vous, avec acompte, pour organiser sereinement votre créneau.</p>
          </div>
          <div className="why-card">
            <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M12 21c-4-3-8-6.5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 4.5-4 8-8 11Z"/></svg></div>
            <h4>Un soin apporté à chaque détail</h4>
            <p>Protection, désinfection et résultat impeccable garantis.</p>
          </div>
        </div>
      </section>

      <section id="zone">
        <div className="zone-section">
          <div>
            <h3>Disponible dans toute l'Île-de-France</h3>
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
          <div className="section-eyebrow">Contact</div>
          <h2 className="section-title">Parlons de votre projet</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
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
              <div><div className="label">Snapchat</div><div className="value">omister233060</div></div>
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
