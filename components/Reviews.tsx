import { REVIEWS } from "../lib/reviews";

export default function Reviews() {
  if (REVIEWS.length === 0) return null;

  return (
    <section id="avis" className="section-white">
      <div className="section-head">
        <h2 className="section-title">Ce que disent les clients</h2>
        <p className="section-sub">
          Des messages reçus après intervention — les originaux sont dans les
          stories du compte{" "}
          <a
            href="https://www.instagram.com/o_mister_cleaning"
            target="_blank"
            rel="noopener"
          >
            @o_mister_cleaning
          </a>
          .
        </p>
      </div>
      <div className="reviews-grid">
        {REVIEWS.map((r, i) => (
          <figure className="review-card" key={i}>
            <blockquote>{r.text}</blockquote>
            <figcaption>
              <strong>{r.service}</strong>
              <span className="review-meta">reçu via {r.source}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
