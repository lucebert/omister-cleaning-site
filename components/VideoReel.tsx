"use client";

import { useRef, useState } from "react";

type VideoReelProps = {
  src: string;
  poster: string;
  title: string;
};

/**
 * Vidéo verticale (format Reel) : rien n'est téléchargé avant le clic
 * (preload="none" + image d'aperçu), lecture avec le son au clic.
 */
export default function VideoReel({ src, poster, title }: VideoReelProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    setStarted(true);
    v.controls = true;
    void v.play();
  };

  return (
    <figure className="reel">
      <div className="reel-frame">
        <video
          ref={ref}
          src={src}
          poster={poster}
          preload="none"
          playsInline
          aria-label={title}
          onEnded={() => setStarted(false)}
        />
        {!started ? (
          <button type="button" className="reel-play" onClick={play} aria-label={`Lire la vidéo : ${title}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" />
            </svg>
          </button>
        ) : null}
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  );
}
