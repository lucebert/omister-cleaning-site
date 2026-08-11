"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";

type CompareCardProps = {
  id: number;
  title?: string;
  afterSrc: string;
  afterAlt: string;
  beforeSrc: string;
  beforeAlt: string;
  sliderLabel: string;
  caption?: string;
  /** true = images chargées en lazy (cartes sous la ligne de flottaison) */
  lazy?: boolean;
  /** true = slider seul, sans carte ni titre (utilisé dans le hero) */
  bare?: boolean;
  /** Position initiale du curseur (0-100, part visible de l'avant) */
  defaultValue?: number;
  /** true = balayage d'ouverture au chargement (hero) */
  introWipe?: boolean;
};

export default function CompareCard({
  id,
  title,
  afterSrc,
  afterAlt,
  beforeSrc,
  beforeAlt,
  sliderLabel,
  caption,
  lazy = true,
  bare = false,
  defaultValue = 50,
  introWipe = false,
}: CompareCardProps) {
  const [value, setValue] = useState(introWipe ? 0 : defaultValue);
  const [animating, setAnimating] = useState(false);
  const compareRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const setValueFromClientX = (clientX: number) => {
    const el = compareRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.max(0, Math.min(100, pct)));
  };

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    // Ignore le pointeur clavier/lecteur d'écran ; le range input gère ce cas
    draggingRef.current = true;
    setAnimating(false);
    e.currentTarget.setPointerCapture(e.pointerId);
    setValueFromClientX(e.clientX);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    setValueFromClientX(e.clientX);
  };

  const stopDragging = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  useEffect(() => {
    if (!introWipe) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(defaultValue);
      return;
    }
    const start = setTimeout(() => {
      setAnimating(true);
      setValue(defaultValue);
    }, 500);
    const stop = setTimeout(() => setAnimating(false), 1900);
    return () => {
      clearTimeout(start);
      clearTimeout(stop);
    };
  }, [introWipe, defaultValue]);
  const loading = lazy ? "lazy" : undefined;

  const compare = (
    <div
      className={animating ? "compare intro-anim" : "compare"}
      id={`compare-${id}`}
      ref={compareRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      <img src={afterSrc} alt={afterAlt} loading={loading} />
      <div
        className="after-wrap"
        id={`after-${id}`}
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <img src={beforeSrc} alt={beforeAlt} loading={loading} />
      </div>
      <span className="compare-tag tag-before">Avant</span>
      <span className="compare-tag tag-after">Après</span>
      <div
        className="compare-handle"
        id={`handle-${id}`}
        style={{ left: `${value}%` }}
      >
        <div className="compare-line"></div>
        <div className="compare-knob">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
      <input
        type="range"
        className="compare-slider"
        min="0"
        max="100"
        value={Math.round(value)}
        onChange={(e) => setValue(Number(e.target.value))}
        id={`slider-${id}`}
        aria-label={sliderLabel}
        tabIndex={0}
      />
    </div>
  );

  if (bare) return compare;

  return (
    <div className="ba-card">
      {title && <h3>{title}</h3>}
      {compare}
      {caption && <p className="compare-caption">{caption}</p>}
    </div>
  );
}
