"use client";

import { useState } from "react";

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
}: CompareCardProps) {
  const [value, setValue] = useState(defaultValue);
  const loading = lazy ? "lazy" : undefined;

  const compare = (
    <div className="compare" id={`compare-${id}`}>
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
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        id={`slider-${id}`}
        aria-label={sliderLabel}
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
