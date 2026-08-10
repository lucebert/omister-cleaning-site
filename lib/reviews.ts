export type Review = {
  /** Le texte de l'avis — verbatim du client (ponctuation normalisée) */
  text: string;
  /** Prestation concernée */
  service: string;
  /** Origine vérifiable : "Instagram", "Snapchat", "Facebook"... */
  source: string;
};

/**
 * Avis réels de clients, repris du highlight « AVIS CLIENTS » du compte
 * Instagram @o_mister_cleaning (captures fournies par Omar). Ne jamais
 * inventer d'avis : pratique commerciale trompeuse.
 */
export const REVIEWS: Review[] = [
  {
    text: "Franchement merci, la voiture elle est toute propre, même les sièges alors qu'ils étaient vraiment SALES ! Elle est comme neuve, vraiment rien à dire.",
    service: "Nettoyage complet voiture",
    source: "Instagram",
  },
  {
    text: "Résultats impressionnants : plus une poussière, plus une trace sur les sièges, plus de bonbons collés sur les plastiques et une odeur de bien-être incroyable. Je vous recommande sans hésiter. Merci Omar !",
    service: "Nettoyage intérieur véhicule",
    source: "Facebook",
  },
  {
    text: "Merci beaucoup, la voiture est nickel ! Vous êtes vraiment cool et à l'écoute, et très minutieux. Je vais passer que par vous maintenant.",
    service: "Nettoyage voiture",
    source: "Snapchat",
  },
  {
    text: "Je pensais pas que mon tapis était « récupérable » mais franchement t'as géré de fou : il est nickel, plus d'odeur ni rien, et il a parfaitement retrouvé sa couleur initiale. Merci pour ton travail et ta réactivité.",
    service: "Nettoyage tapis",
    source: "Instagram",
  },
  {
    text: "Merci encore pour le Touran !! Travail parfait et efficace ! Je recommande à 100 %.",
    service: "Nettoyage voiture",
    source: "Message client",
  },
  {
    text: "Merci pour la prestation, délai et devis respectés, et merci aussi pour ta ponctualité, c'est appréciable.",
    service: "Prestation nettoyage",
    source: "Message client",
  },
];
