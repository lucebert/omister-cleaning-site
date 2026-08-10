/**
 * Grille d'estimation du simulateur de tarif.
 * Les bases reprennent les prix affichés sur le site (« à partir de »).
 * ⚠️ LES MAJORATIONS (gabarit, état) SONT À FAIRE VALIDER PAR OMAR —
 * ajuster ici, tout le simulateur suit.
 */

export const VEHICLES = [
  { id: "citadine", label: "Citadine", mod: 0 },
  { id: "berline", label: "Berline / break", mod: 10 },
  { id: "suv", label: "SUV / Monospace", mod: 20 },
  { id: "utilitaire", label: "Utilitaire", mod: 25 },
] as const;

export const SERVICES = [
  {
    id: "integrale",
    label: "Intérieur complet",
    desc: "Brossage mécanique, shampouineuse, plastiques et vitres",
    base: 50,
  },
  {
    id: "express",
    label: "Coup de propre",
    desc: "Aspiration complète moquettes, sièges et plastiques",
    base: 30,
  },
  {
    id: "sieges",
    label: "Sièges uniquement",
    desc: "Nettoyage en profondeur, taches et odeurs",
    base: null, // tarifé au siège
  },
] as const;

export const CONDITIONS = [
  { id: "courant", label: "Entretien courant", mod: 0 },
  { id: "sale", label: "Sale", mod: 15 },
  { id: "tres-sale", label: "Très sale (taches, odeurs)", mod: 30 },
] as const;

const IDF_DEPTS = ["75", "77", "78", "91", "92", "93", "94", "95"];

export function isIdf(postalCode: string): boolean {
  return IDF_DEPTS.includes(postalCode.slice(0, 2));
}

export function estimate(
  serviceId: string,
  vehicleId: string,
  conditionId: string
): { kind: "fixed"; from: number } | { kind: "per-seat"; from: number } {
  if (serviceId === "sieges") {
    return { kind: "per-seat", from: 10 };
  }
  const service = SERVICES.find((s) => s.id === serviceId);
  const vehicle = VEHICLES.find((v) => v.id === vehicleId);
  const condition = CONDITIONS.find((c) => c.id === conditionId);
  const base = service?.base ?? 50;
  return {
    kind: "fixed",
    from: base + (vehicle?.mod ?? 0) + (condition?.mod ?? 0),
  };
}
