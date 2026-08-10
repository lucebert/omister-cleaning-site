export type Review = {
  /** Prénom (+ initiale éventuelle) du client */
  name: string;
  /** Ville ou département */
  city: string;
  /** Prestation concernée, ex. "Nettoyage canapé d'angle" */
  service: string;
  /** Le texte de l'avis, court (1 à 3 phrases) */
  text: string;
  /** Origine vérifiable : "Google", "Instagram", "SMS"... */
  source: string;
};

/**
 * UNIQUEMENT de vrais avis de vrais clients (obligation légale — les faux
 * avis sont une pratique commerciale trompeuse). La section ne s'affiche
 * pas tant que ce tableau est vide. Demander à Omar les retours reçus en
 * DM Instagram/Snapchat, ou les avis de sa fiche Google quand elle existera.
 */
export const REVIEWS: Review[] = [];
