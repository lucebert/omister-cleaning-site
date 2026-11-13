export type Review = {
  /** Le texte de l'avis — verbatim du client (ponctuation normalisée) */
  text: string;
  /** Prestation concernée */
  service: string;
  /** Origine vérifiable : "Google", "Instagram", "Snapchat", "Facebook"... */
  source: string;
  /** Prénom + initiale (avis publics Google uniquement) */
  author?: string;
};

/** Fiche Google Business d'O'Mister Cleaning (relevé du 13/11/2026) */
export const GOOGLE_RATING = {
  rating: "5,0",
  count: 11,
  url: "https://maps.google.com/?cid=14010142616460926035",
};

/**
 * Avis réels de clients : avis publics de la fiche Google (relevés le
 * 13/11/2026, texte verbatim) puis messages repris du highlight
 * « AVIS CLIENTS » d'Instagram. Ne jamais inventer d'avis : pratique
 * commerciale trompeuse.
 */
export const REVIEWS: Review[] = [
  {
    text: "Omar est venu nettoyer mon canapé beige clair qui avait accumulé 2 ans et demi de taches, je pensais même devoir m'en séparer tellement il était taché ! Il me l'a littéralement sauvé. Il est ressorti propre et comme neuf !",
    service: "Nettoyage canapé",
    source: "Google",
    author: "Yasmine D.",
  },
  {
    text: "Que ce soit mon canapé/tapis, ma voiture, ou mes locaux : le service est top de A à Z, le nettoyage est fait en profondeur, le avant/après est juste incroyable !",
    service: "Canapé, tapis, voiture et locaux",
    source: "Google",
    author: "Yacine S.",
  },
  {
    text: "Une personne très professionnelle, appliquée et arrangeante. Le travail a été fait avec beaucoup de soin et ma voiture était nickel après son passage.",
    service: "Nettoyage voiture",
    source: "Google",
    author: "Anna M.",
  },
  {
    text: "Il a nettoyé mon canapé, mon tapis ainsi que le matelas de mon fils qui était très taché et le résultat est vraiment impeccable.",
    service: "Canapé, tapis et matelas",
    source: "Google",
    author: "Wahiba B.",
  },
  {
    text: "O'Mister Cleaning a fait le nettoyage de mon matelas récemment et l'a rendu comme neuf. Je recommande !",
    service: "Nettoyage matelas",
    source: "Google",
    author: "Maho D.",
  },
  {
    text: "Nettoyage impeccable, personnel très accueillant et prix très correct, je recommande vivement.",
    service: "Prestation nettoyage",
    source: "Google",
    author: "Idir A.",
  },
  {
    text: "Résultats impressionnants : plus une poussière, plus une trace sur les sièges, plus de bonbons collés sur les plastiques et une odeur de bien-être incroyable. Je vous recommande sans hésiter. Merci Omar !",
    service: "Nettoyage intérieur véhicule",
    source: "Facebook",
  },
  {
    text: "Je pensais pas que mon tapis était « récupérable » mais franchement t'as géré de fou : il est nickel, plus d'odeur ni rien, et il a parfaitement retrouvé sa couleur initiale. Merci pour ton travail et ta réactivité.",
    service: "Nettoyage tapis",
    source: "Instagram",
  },
  {
    text: "Merci pour la prestation, délai et devis respectés, et merci aussi pour ta ponctualité, c'est appréciable.",
    service: "Prestation nettoyage",
    source: "Message client",
  },
];
