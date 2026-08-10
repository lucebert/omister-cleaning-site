"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  VEHICLES,
  SERVICES,
  CONDITIONS,
  isIdf,
  estimate,
} from "../lib/estimate";

const STEPS = ["Véhicule", "Prestation", "État", "Code postal", "Tarif"];

export default function DevisSimulator() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [vehicle, setVehicle] = useState("");
  const [service, setService] = useState("");
  const [condition, setCondition] = useState("");
  const [postal, setPostal] = useState("");
  const [postalError, setPostalError] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  const reset = () => {
    setStep(0);
    setVehicle("");
    setService("");
    setCondition("");
    setPostal("");
    setPostalError(false);
  };

  // Tout élément portant data-devis-trigger ouvre le simulateur
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as HTMLElement).closest("[data-devis-trigger]");
      if (!trigger) return;
      e.preventDefault();
      returnFocusRef.current = trigger as HTMLElement;
      reset();
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.querySelector<HTMLElement>("button, input")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, input, a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      returnFocusRef.current?.focus?.();
    };
  }, [open, close]);

  if (!open) return null;

  const pick = (setter: (v: string) => void, value: string) => {
    setter(value);
    setStep((s) => s + 1);
  };

  const submitPostal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[0-9]{5}$/.test(postal)) {
      setPostalError(true);
      return;
    }
    setPostalError(false);
    setStep(4);
  };

  const result =
    step === 4 ? estimate(service, vehicle, condition) : null;
  const inZone = postal ? isIdf(postal) : true;
  const serviceLabel = SERVICES.find((s) => s.id === service)?.label ?? "";
  const vehicleLabel = VEHICLES.find((v) => v.id === vehicle)?.label ?? "";

  return (
    <div className="sim-overlay" onClick={close}>
      <div
        className="sim-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Obtenir mon tarif"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sim-head">
          <div className="sim-progress" aria-hidden="true">
            {STEPS.map((s, i) => (
              <span key={s} className={i <= step ? "on" : ""} />
            ))}
          </div>
          <button
            className="sim-close"
            type="button"
            aria-label="Fermer"
            onClick={close}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>

        {step === 0 && (
          <div className="sim-step">
            <h3>Votre véhicule ?</h3>
            <div className="sim-options">
              {VEHICLES.map((v) => (
                <button key={v.id} type="button" onClick={() => pick(setVehicle, v.id)}>
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="sim-step">
            <h3>Que faut-il nettoyer ?</h3>
            <div className="sim-options sim-options-desc">
              {SERVICES.map((s) => (
                <button key={s.id} type="button" onClick={() => pick(setService, s.id)}>
                  <strong>{s.label}</strong>
                  <span>{s.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="sim-step">
            <h3>Son état général ?</h3>
            <div className="sim-options">
              {CONDITIONS.map((c) => (
                <button key={c.id} type="button" onClick={() => pick(setCondition, c.id)}>
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <form className="sim-step" onSubmit={submitPostal}>
            <h3>Votre code postal ?</h3>
            <p className="sim-note">Pour vérifier qu'on se déplace chez vous.</p>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="95300"
              value={postal}
              onChange={(e) => setPostal(e.target.value.replace(/\D/g, "").slice(0, 5))}
              aria-label="Code postal"
            />
            {postalError && (
              <p className="sim-error">Entrez un code postal à 5 chiffres.</p>
            )}
            <button className="btn btn-primary sim-next" type="submit">
              Obtenir mon tarif
            </button>
          </form>
        )}

        {step === 4 && result && (
          <div className="sim-step sim-result">
            <p className="sim-recap">
              {serviceLabel} · {vehicleLabel}
            </p>
            <p className="sim-price">
              À partir de{" "}
              <strong>
                {result.from}€{result.kind === "per-seat" ? " / siège" : ""}
              </strong>
            </p>
            <p className="sim-note">
              Estimation indicative — le tarif exact est confirmé en 2 minutes
              au téléphone, et il est ensuite respecté.
            </p>
            {!inZone && (
              <p className="sim-warn">
                {postal} est hors Île-de-France : appelez-nous, on regarde
                ensemble si un déplacement est possible.
              </p>
            )}
            <a className="btn btn-primary sim-call" href="tel:0610133642">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3A19.5 19.5 0 0 1 5.1 12.9 19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.7 3.1a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c1 .3 2 .6 3.1.7a2 2 0 0 1 1.7 2Z"/></svg>
              Appeler pour réserver — 06 10 13 36 42
            </a>
            <a
              className="btn btn-ghost sim-insta"
              href="https://www.instagram.com/o_mister_cleaning"
              target="_blank"
              rel="noopener"
            >
              Envoyer des photos sur Instagram pour un devis exact
            </a>
          </div>
        )}

        {step > 0 && step < 4 && (
          <button
            className="sim-back"
            type="button"
            onClick={() => setStep((s) => s - 1)}
          >
            ← Retour
          </button>
        )}
      </div>
    </div>
  );
}
