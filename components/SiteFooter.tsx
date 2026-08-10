export default function SiteFooter() {
  return (
    <footer>
      <div className="foot-brand">O'Mister Cleaning</div>
      Nettoyage professionnel & location de camion utilitaire · Île-de-France · © {new Date().getFullYear()}
      <div className="foot-links">
        <a href="/mentions-legales">Mentions légales</a>
        <span aria-hidden="true">·</span>
        <a href="/cgv">CGV</a>
        <span aria-hidden="true">·</span>
        <a href="tel:0610133642">06 10 13 36 42</a>
      </div>
    </footer>
  );
}
