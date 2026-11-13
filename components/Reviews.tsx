import { GOOGLE_RATING, REVIEWS } from "../lib/reviews";

function SourceIcon({ source }: { source: string }) {
  if (source === "Google") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3Z" />
        <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z" />
        <path fill="#FBBC05" d="M6.4 14a6 6 0 0 1 0-3.9V7.5H3.1a10 10 0 0 0 0 9.1L6.4 14Z" />
        <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.5L6.4 10C7.2 7.8 9.4 6 12 6Z" />
      </svg>
    );
  }
  if (source === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E4405F" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="#E4405F" stroke="none" />
      </svg>
    );
  }
  if (source === "Snapchat") {
    return (
      <svg viewBox="0 0 24 24" fill="#FFFC00" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3c-1 2-2 3-4 3.5C6 8 5 10 6 12c-2 .5-3 2-3 4 2 0 3.5-1 4-2 .5 2 2 3 5 3s4.5-1 5-3c.5 1 2 2 4 2 0-2-1-3.5-3-4 1-2 0-4-2-4.5C14 6 13 5 12 3Z" />
      </svg>
    );
  }
  if (source === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#1877F2" />
        <path
          d="M13.3 20v-6.2h2.1l.3-2.4h-2.4V9.9c0-.7.2-1.2 1.2-1.2h1.3V6.6c-.2 0-1-.1-1.9-.1-1.9 0-3.1 1.1-3.1 3.2v1.7H8.7v2.4h2.1V20Z"
          fill="#fff"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.3 8.7 8.7 0 0 1-3.7-.8L3 20l1-5a8 8 0 0 1-.9-3.6A8.4 8.4 0 0 1 11.6 3a8.4 8.4 0 0 1 9.4 8.5Z" />
    </svg>
  );
}

export default function Reviews() {
  if (REVIEWS.length === 0) return null;

  return (
    <section id="avis" className="section-white">
      <div className="section-head">
        <h2 className="section-title">Ce que disent les clients</h2>
        <a className="google-rating" href={GOOGLE_RATING.url} target="_blank" rel="noopener">
          <SourceIcon source="Google" />
          <span className="google-rating-score">{GOOGLE_RATING.rating}</span>
          <span className="google-rating-stars" aria-hidden="true">★★★★★</span>
          <span>{GOOGLE_RATING.count} avis Google</span>
        </a>
        <p className="section-sub">
          Avis publics de notre fiche Google, et messages reçus après
          intervention (originaux dans les stories de{" "}
          <a
            href="https://www.instagram.com/o_mister_cleaning"
            target="_blank"
            rel="noopener"
          >
            @o_mister_cleaning
          </a>
          ).
        </p>
      </div>
      <div className="reviews-grid">
        {REVIEWS.map((r, i) => (
          <figure className="review-card" key={i}>
            <blockquote>{r.text}</blockquote>
            <figcaption>
              <strong>{r.author ? `${r.author} · ${r.service}` : r.service}</strong>
              <span className="review-meta">
                <SourceIcon source={r.source} />
                {r.source === "Google" ? "avis Google ★★★★★" : `reçu via ${r.source}`}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="cta-row reviews-cta">
        <a className="btn btn-cyan" href="#services">
          Voir toutes nos prestations →
        </a>
        <a className="btn btn-ghost" href={GOOGLE_RATING.url} target="_blank" rel="noopener">
          Voir tous les avis Google
        </a>
      </div>
    </section>
  );
}
