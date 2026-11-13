"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import CompareCard from "./CompareCard";
import { SERVICE_TABS } from "../lib/services";

const HASH_PREFIX = "prestations-";

export default function ServiceTabs() {
  const [active, setActive] = useState(SERVICE_TABS[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Ouvre directement une rubrique via un lien du type /#prestations-restaurants-hotels
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash.startsWith(HASH_PREFIX)) return;
      const id = hash.slice(HASH_PREFIX.length);
      if (SERVICE_TABS.some((t) => t.id === id)) {
        setActive(id);
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const select = (id: string, focus = false) => {
    setActive(id);
    history.replaceState(null, "", `#${HASH_PREFIX}${id}`);
    const el = tabRefs.current[id];
    if (focus) el?.focus();
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = SERVICE_TABS.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      select(SERVICE_TABS[next].id, true);
    }
  };

  return (
    <div className="svc">
      <div className="svc-tabs" role="tablist" aria-label="Rubriques de prestations">
        {SERVICE_TABS.map((tab, i) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el;
              }}
              type="button"
              role="tab"
              id={`svc-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`svc-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              className={`svc-tab${selected ? " is-active" : ""}`}
              onClick={() => select(tab.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className="svc-tab-audience">{tab.audience}</span>
              <span className="svc-tab-label">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {SERVICE_TABS.map((tab, i) => (
        <section
          key={tab.id}
          role="tabpanel"
          id={`svc-panel-${tab.id}`}
          aria-labelledby={`svc-tab-${tab.id}`}
          hidden={tab.id !== active}
          className="svc-panel"
        >
          <div className="svc-panel-head">
            <h3>{tab.title}</h3>
            <p>{tab.intro}</p>
          </div>

          <div className={`svc-grid${tab.compare ? "" : " no-media"}`}>
            <div className="svc-main">
              <h4 className="svc-h4">Tarifs</h4>
              <dl className="offer-items">
                {tab.prices.map((row) => (
                  <div key={row.name}>
                    <dt>{row.name}</dt>
                    {row.detail ? <dd>{row.detail}</dd> : null}
                    <dd className="offer-row-price">{row.price}</dd>
                  </div>
                ))}
              </dl>
              {tab.priceNote ? <p className="offer-note">{tab.priceNote}</p> : null}

              <div className="svc-cols">
                <div className="svc-box">
                  <h4 className="svc-h4">{tab.included.title}</h4>
                  <ul className="svc-list">
                    {tab.included.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="svc-box">
                  <h4 className="svc-h4">Comment ça se passe</h4>
                  <ol className="svc-steps">
                    {tab.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="svc-cta">
                {tab.cta === "devis" ? (
                  <button className="btn btn-cyan" type="button" data-devis-trigger>
                    Obtenir mon tarif →
                  </button>
                ) : (
                  <a className="btn btn-cyan" href="tel:0610133642">
                    Demander un devis : 06 10 13 36 42
                  </a>
                )}
                <a
                  className="btn btn-ghost"
                  href="https://www.instagram.com/o_mister_cleaning"
                  target="_blank"
                  rel="noopener"
                >
                  Envoyer une photo sur Instagram
                </a>
              </div>
            </div>

            {tab.compare ? (
              <div className="svc-media">
                <CompareCard
                  id={20 + i}
                  bare
                  afterSrc={tab.compare.afterSrc}
                  afterAlt={tab.compare.afterAlt}
                  beforeSrc={tab.compare.beforeSrc}
                  beforeAlt={tab.compare.beforeAlt}
                  sliderLabel={tab.compare.label}
                />
                <p className="svc-media-caption">{tab.compare.caption} Faites glisser pour comparer.</p>
              </div>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  );
}
