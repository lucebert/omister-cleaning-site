import { REVIEWS } from "../lib/reviews";

export default function Reviews() {
  if (REVIEWS.length === 0) return null;

  return (
    <section id="avis" className="section-white">
      <div className="section-head">
        <h2 className="section-title">Ils ont testé</h2>
        <p className="section-sub">Des retours de vrais clients, transmis par message ou laissés en ligne.</p>
      </div>
      <div className="reviews-grid">
        {REVIEWS.map((r, i) => (
          <figure className="review-card" key={i}>
            <blockquote>{r.text}</blockquote>
            <figcaption>
              <strong>{r.name}</strong> · {r.city}
              <span className="review-meta">{r.service} — via {r.source}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
