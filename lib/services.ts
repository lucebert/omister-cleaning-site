/**
 * Rubriques « Prestations & tarifs » (onglets).
 * Prix = prix de départ « à partir de » communiqués par Omar (nov. 2026),
 * ajustés selon l'état, la taille et la complexité. Ne jamais les présenter
 * comme des prix fermes, ne rien inventer (durées, chiffres d'activité).
 */

export type PriceRow = { name: string; detail?: string; price: string };

export type ServiceTab = {
  id: string;
  label: string;
  audience: "Particuliers" | "Professionnels" | "Particuliers & pros";
  title: string;
  intro: string;
  prices: PriceRow[];
  priceNote?: string;
  included: { title: string; items: string[] };
  steps: string[];
  compare?: {
    beforeSrc: string;
    beforeAlt: string;
    afterSrc: string;
    afterAlt: string;
    label: string;
    caption: string;
  };
  /** Photos réelles (ex. le véhicule de location) */
  photos?: { src: string; alt: string; caption: string }[];
  /** Vidéos de vraies interventions (public/videos), format vertical */
  videos?: { src: string; poster: string; title: string }[];
  cta: "devis" | "phone";
};

const V = (slug: string, title: string) => ({
  src: `/videos/${slug}.mp4`,
  poster: `/videos/${slug}.jpg`,
  title,
});

export const SERVICE_TABS: ServiceTab[] = [
  {
    id: "textiles",
    label: "Canapés, matelas & tapis",
    audience: "Particuliers",
    title: "Canapés, matelas & textiles",
    intro:
      "Pour les particuliers : canapés en tissu, fauteuils, matelas, tapis et moquettes nettoyés en profondeur à l'injecteur-extracteur, directement chez vous. Taches, auréoles, acariens, bactéries et odeurs sont éliminés au cœur des fibres.",
    prices: [
      { name: "Fauteuil", price: "À partir de 30€" },
      { name: "Tapis", detail: "Selon la taille.", price: "À partir de 20€" },
      { name: "Canapé 2/3 places", price: "À partir de 70€" },
      { name: "Canapé d'angle", price: "À partir de 90€" },
      { name: "Canapé 5 places et +", price: "À partir de 100€" },
      { name: "Matelas", detail: "Selon la taille et l'état.", price: "Sur devis" },
    ],
    included: {
      title: "Ce qu'on traite",
      items: [
        "Taches (café, vin, gras, auréoles)",
        "Acariens et bactéries dans les fibres",
        "Odeurs d'animaux, de tabac ou d'humidité",
        "Tissus ternis : couleurs ravivées",
      ],
    },
    steps: [
      "Envoyez une photo : tarif clair en quelques minutes",
      "On fixe le créneau, l'acompte le confirme",
      "Intervention à domicile",
      "Quelques heures de séchage avant réutilisation",
    ],
    compare: {
      beforeSrc: "/images/img-10.jpg",
      beforeAlt: "Canapé d'angle avant nettoyage",
      afterSrc: "/images/img-09.jpg",
      afterAlt: "Canapé d'angle après nettoyage",
      label: "Comparer avant et après - canapé d'angle",
      caption: "Canapé d'angle, vraie intervention.",
    },
    videos: [V("03-canape-angle", "Canapé d'angle : aspiration, shampoing, extraction"), V("05-satisfying-extraction", "Injection-extraction : tout ce qui sort du tissu")],
    cta: "phone",
  },
  {
    id: "agences-immobilieres",
    label: "Agences immobilières",
    audience: "Professionnels",
    title: "Agences immobilières & gestion locative",
    intro:
      "Remise en état des logements entre deux locataires, avant les visites ou l'état des lieux, y compris les logements très sales ou encombrés. Intervention sous 72 h, photos avant/après le jour même. Les tarifs sont des prix de départ, ajustés selon l'état réel du logement.",
    prices: [
      { name: "Studio / T1", detail: "Moins de 30 m²", price: "À partir de 130€" },
      { name: "T2", detail: "30 à 50 m²", price: "À partir de 190€" },
      { name: "T3", detail: "50 à 70 m²", price: "À partir de 260€" },
      { name: "T4", detail: "70 à 90 m²", price: "À partir de 330€" },
      { name: "Maison / T5 et +", detail: "Plus de 90 m²", price: "Sur devis" },
      { name: "Logement très sale ou encombré", detail: "Débarras, évacuation en déchetterie avec notre camion, nettoyage de fond en comble.", price: "Sur devis" },
      { name: "Moisissures", detail: "WC, salle de bain, murs et plafonds : traitement anti-moisissures et désinfection.", price: "Sur devis" },
      { name: "Balcon, terrasse", detail: "Démoussage et lavage haute pression du sol et des rambardes.", price: "Sur devis" },
    ],
    priceNote: "Prix de départ pour un logement vide à l'encrassement normal : le prix final dépend de l'état du logement. Devis gratuit sur photos ou après visite. Options : four et hotte, frigo, shampoing moquette, encombrants avec camion.",
    included: {
      title: "Inclus",
      items: [
        "Sols, sanitaires, cuisine (plans, façades, évier)",
        "Poussières, plinthes, portes, interrupteurs",
        "Vitres intérieures accessibles",
        "Clés récupérées et rendues à l'agence",
        "Photos avant/après envoyées le jour même",
        "Facture détaillée, utilisable comme justificatif pour les retenues locatives",
      ],
    },
    steps: [
      "Vous nous transmettez l'adresse, le type de logement et quelques photos",
      "Devis gratuit ajusté à l'état du logement",
      "Intervention sous 72 h, clés gérées avec l'agence",
      "Photos avant/après, clés rendues, facture envoyée",
    ],
    videos: [V("07-wc-moisissures", "Appartement : WC envahis de moisissures, remis à neuf"), V("08-balcon-demoussage", "Balcon couvert de mousse : démoussage et lavage (accéléré ×2)")],
    cta: "phone",
  },
  {
    id: "syndics-coproprietes",
    label: "Syndics & copropriétés",
    audience: "Professionnels",
    title: "Syndics, copropriétés & bailleurs",
    intro:
      "Entretien des parties communes et interventions ponctuelles dans vos immeubles : halls, escaliers, vitres, sols, locaux poubelles, caves, encombrants. Passage régulier ou remise en état, avec un compte rendu photo à chaque intervention.",
    prices: [
      { name: "Entretien régulier des parties communes", detail: "Halls, escaliers, paliers, ascenseurs, portes et vitres accessibles. Passage hebdomadaire ou mensuel.", price: "Devis au passage" },
      { name: "Sols des parties communes", detail: "Monobrosse, décapage, lustrage, moquettes d'escaliers.", price: "Devis au m²" },
      { name: "Locaux poubelles, caves, parkings", detail: "Nettoyage, dégraissage, désinfection.", price: "Sur devis" },
      { name: "Encombrants et débarras", detail: "Évacuation en déchetterie avec notre camion.", price: "Sur devis" },
      { name: "Démoussage haute pression", detail: "Balcons, coursives, cours et abords.", price: "Sur devis" },
      { name: "Remise en état", detail: "Après travaux, sinistre ou départ d'un locataire.", price: "Sur devis" },
    ],
    priceNote: "Chaque immeuble est différent : devis gratuit et détaillé après une visite sur place.",
    included: {
      title: "Ce que vous y gagnez",
      items: [
        "Un seul interlocuteur pour tous les besoins de l'immeuble",
        "Un planning de passage fixe, respecté",
        "Photos à chaque passage : vous pouvez montrer le travail aux copropriétaires",
        "Une facture par immeuble",
        "Intervention rapide en cas d'urgence (dégât, encombrants)",
      ],
    },
    steps: [
      "Visite de l'immeuble avec vous ou le conseil syndical",
      "Devis détaillé, prestation par prestation",
      "Mise en place du planning de passage",
      "Compte rendu photo et facture à chaque intervention",
    ],
    videos: [V("08-balcon-demoussage", "Démoussage d'un balcon très encrassé (accéléré ×2)"), V("02-moquette-monobrosse", "Grande moquette : aspiration puis monobrosse")],
    cta: "phone",
  },
  {
    id: "restaurants-hotels",
    label: "Restaurants & hôtels",
    audience: "Professionnels",
    title: "Restaurants, bars & hôtels",
    intro:
      "Chaises et banquettes en velours ou en tissu, fauteuils, moquettes : on intervient sur place, en dehors du service, pour une salle impeccable sans gêner vos clients.",
    prices: [
      { name: "Chaise ou siège tissu / velours", price: "À partir de 10€/siège" },
      { name: "Fauteuil", price: "À partir de 30€" },
      { name: "Banquette", detail: "Selon la longueur et la matière.", price: "Sur devis (photo)" },
      { name: "Moquette (salle, chambres, couloirs)", price: "Devis au m²" },
    ],
    priceNote: "Passage régulier possible (tous les 2 ou 3 mois) pour garder la salle impeccable.",
    included: {
      title: "Pourquoi le faire faire",
      items: [
        "Le velours et les tissus clairs retiennent taches, traces et odeurs de cuisine",
        "Intervention avant l'ouverture ou le jour de fermeture",
        "Tissus secs avant le service",
        "Photos avant/après fournies, utilisables sur vos réseaux",
      ],
    },
    steps: [
      "Envoyez une photo de la salle ou des assises",
      "Devis gratuit, prix annoncé = prix payé",
      "Intervention hors service, sur le créneau qui vous arrange",
      "Facture à chaque passage",
    ],
    compare: {
      beforeSrc: "/images/img-08.jpg",
      beforeAlt: "Coussin d'assise avant nettoyage",
      afterSrc: "/images/img-07.jpg",
      afterAlt: "Coussin d'assise après nettoyage",
      label: "Comparer avant et après - assise en tissu",
      caption: "Assise en tissu, vraie intervention.",
    },
    videos: [V("06-restaurant-chaises", "Restaurant : fauteuils et banquettes en tissu, injection-extraction (accéléré ×2)"), V("02-moquette-monobrosse", "Grande moquette : aspiration puis monobrosse")],
    cta: "phone",
  },
  {
    id: "sols-locaux",
    label: "Bureaux, sols & moquettes",
    audience: "Particuliers & pros",
    title: "Bureaux, commerces, sols & grandes surfaces",
    intro:
      "Nettoyage de bureaux et de commerces, ponctuel ou régulier, et traitement des sols à la monobrosse professionnelle : carrelage, lino, parquet vitrifié, moquettes de grandes surfaces, terrasses. Pour les particuliers comme pour les entreprises.",
    prices: [
      { name: "Décapage", detail: "Retrait des couches de saleté incrustée et des anciens traitements.", price: "Devis au m²" },
      { name: "Lustrage", detail: "Brillance et finition nette redonnées au sol.", price: "Devis au m²" },
      { name: "Récurage", detail: "Nettoyage en profondeur des sols très encrassés.", price: "Devis au m²" },
      { name: "Moquettes grandes surfaces", detail: "Bureaux, salles, couloirs.", price: "Devis au m²" },
      { name: "Entretien de bureaux et commerces", detail: "Passage régulier (hebdomadaire ou mensuel) ou nettoyage ponctuel : sols, sanitaires, poussières, vitres accessibles.", price: "Sur devis" },
      { name: "Terrasses et extérieurs", detail: "Démoussage et lavage haute pression.", price: "Devis au m²" },
    ],
    included: {
      title: "Où on intervient",
      items: ["Maisons et appartements", "Commerces et bureaux", "Terrasses", "Salles et grandes surfaces de moquette"],
    },
    steps: [
      "Décrivez la surface (type de sol, m², photo)",
      "Devis au m², prix annoncé = prix payé",
      "Intervention sur le créneau convenu",
    ],
    videos: [V("02-moquette-monobrosse", "Grande moquette : aspiration puis monobrosse")],
    cta: "phone",
  },
  {
    id: "automobile",
    label: "Voitures & flottes",
    audience: "Particuliers & pros",
    title: "Nettoyage automobile",
    intro:
      "Nettoyage intérieur et extérieur de voitures, utilitaires, autocars et flottes d'entreprise, chez vous ou sur votre lieu de travail, partout en Île-de-France. Sièges, moquettes, plastiques et odeurs : l'intérieur retrouve son aspect d'origine.",
    prices: [
      { name: "Formule Express", detail: "Aspiration complète des moquettes, sièges et plastiques.", price: "À partir de 30€" },
      { name: "Formule Intégrale", detail: "Brossage mécanique, shampouineuse tissus et moquettes, plastiques et vitres.", price: "À partir de 50€" },
      { name: "Intérieur + extérieur", detail: "La formule Intégrale complétée par le lavage extérieur.", price: "80€ à 130€ selon le véhicule" },
      { name: "Sièges seuls", detail: "Nettoyage en profondeur, taches et odeurs éliminées.", price: "À partir de 10€/siège" },
    ],
    priceNote: "Véhicule très sale, poils d'animaux ou véhicule familial : devis personnalisé.",
    included: {
      title: "Ce qu'on traite",
      items: [
        "Sièges tissu : shampouinés et extraits en profondeur",
        "Moquettes et tapis de sol",
        "Plastiques, tableau de bord, contre-portes",
        "Vitres intérieures (formule Intégrale)",
        "Odeurs de tabac, d'animaux ou d'humidité",
      ],
    },
    steps: [
      "Envoyez une photo de l'intérieur : tarif clair en quelques minutes",
      "On fixe le créneau, l'acompte le confirme",
      "Intervention chez vous, avec notre matériel professionnel",
      "Quelques heures de séchage pour les tissus, et c'est terminé",
    ],
    compare: {
      beforeSrc: "/images/img-06.jpg",
      beforeAlt: "Banquette de voiture avant nettoyage",
      afterSrc: "/images/img-05.jpg",
      afterAlt: "Banquette de voiture après nettoyage",
      label: "Comparer avant et après - banquette de voiture",
      caption: "Banquette arrière, vraie intervention.",
    },
    videos: [V("01-voiture-touran", "Touran : intérieur très encrassé remis à neuf"), V("04-peugeot-cuir", "Peugeot : intérieur cuir, avant / après"), V("05-satisfying-extraction", "Injection-extraction : la couleur de l'eau")],
    cta: "devis",
  },
  {
    id: "garages",
    label: "Garages & concessions",
    audience: "Professionnels",
    title: "Garages & concessions (VO)",
    intro:
      "Préparation esthétique de vos véhicules d'occasion directement sur votre parking : intérieur complet, prêt pour les photos d'annonce et les essais.",
    prices: [
      { name: "Express", detail: "Aspiration complète moquettes, sièges et plastiques.", price: "À partir de 30€" },
      { name: "Intégrale", detail: "Brossage, shampouineuse, plastiques et vitres.", price: "À partir de 50€" },
      { name: "Intérieur + extérieur", price: "80€ à 130€ selon le véhicule" },
      { name: "Sièges seuls", price: "À partir de 10€/siège" },
    ],
    priceNote: "Passage à jour fixe chaque semaine, une facture par mois avec la liste des véhicules.",
    included: {
      title: "Le fonctionnement",
      items: [
        "Passage hebdomadaire sur votre parc",
        "Urgence possible pour un véhicule vendu à livrer",
        "Photos avant/après envoyées le jour même",
        "Facture mensuelle (immatriculation + prestation)",
      ],
    },
    steps: [
      "On passe faire connaissance et voir votre parc",
      "On fixe le jour de passage hebdomadaire",
      "Préparation sur place des véhicules rentrés",
      "Facture récapitulative chaque mois",
    ],
    cta: "phone",
  },
  {
    id: "location-utilitaire",
    label: "Location utilitaire",
    audience: "Particuliers & pros",
    title: "Location de camions utilitaires",
    intro:
      "Location de notre camion utilitaire (Renault Master fourgon), avec ou sans chauffeur : déménagements, achats en magasin, meubles volumineux, évacuation d'encombrants.",
    prices: [
      { name: "Sans chauffeur", detail: "Vous conduisez vous-même, formule la plus économique.", price: "À partir de 100€" },
      { name: "Avec chauffeur", detail: "On s'occupe de la conduite et du transport.", price: "Sur devis" },
    ],
    priceNote: "Tarif selon la durée, le kilométrage et le créneau souhaité.",
    included: {
      title: "Pour quoi faire",
      items: ["Déménagement", "Achats en magasin (meubles, électroménager)", "Meubles volumineux", "Évacuation d'encombrants"],
    },
    steps: ["Indiquez la date, la durée et le trajet", "Devis et réservation avec acompte", "Prise en charge du véhicule ou du transport"],
    photos: [
      { src: "/images/camion-exterieur.jpg", alt: "Camion utilitaire Renault Master bleu d'O'Mister Cleaning, vue de face", caption: "Notre utilitaire : Renault Master fourgon" },
      { src: "/images/camion-interieur.jpg", alt: "Espace de chargement vide du camion utilitaire", caption: "Grand espace de chargement" },
      { src: "/images/camion-charge.jpg", alt: "Camion utilitaire chargé de meubles et de cartons", caption: "Meubles, cartons, électroménager : ça rentre" },
    ],
    cta: "phone",
  },
];
