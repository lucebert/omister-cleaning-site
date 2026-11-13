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
  cta: "devis" | "phone";
};

export const SERVICE_TABS: ServiceTab[] = [
  {
    id: "automobile",
    label: "Automobile",
    audience: "Particuliers & pros",
    title: "Nettoyage automobile",
    intro:
      "On vient chez vous ou sur votre lieu de travail, partout en Île-de-France. Sièges, moquettes, plastiques et odeurs : l'intérieur retrouve son aspect d'origine.",
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
    cta: "devis",
  },
  {
    id: "textiles",
    label: "Canapés & textiles",
    audience: "Particuliers",
    title: "Canapés, matelas & textiles",
    intro:
      "Nettoyage en profondeur à la shampouineuse professionnelle, directement chez vous : taches, bactéries, acariens et odeurs éliminés.",
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
    cta: "phone",
  },
  {
    id: "agences-syndics",
    label: "Agences & syndics",
    audience: "Professionnels",
    title: "Agences immobilières & syndics",
    intro:
      "Remise en propreté des logements entre deux locataires, avant les visites ou l'état des lieux. Prix fixe par logement, intervention sous 72 h.",
    prices: [
      { name: "Studio / T1", detail: "Moins de 30 m²", price: "130€" },
      { name: "T2", detail: "30 à 50 m²", price: "190€" },
      { name: "T3", detail: "50 à 70 m²", price: "260€" },
      { name: "T4", detail: "70 à 90 m²", price: "330€" },
      { name: "Maison / T5 et +", detail: "Plus de 90 m²", price: "À partir de 390€" },
    ],
    priceNote: "Logement vide, encrassement normal. Options : four et hotte, frigo, shampoing moquette, encombrants avec camion.",
    included: {
      title: "Inclus",
      items: [
        "Sols, sanitaires, cuisine (plans, façades, évier)",
        "Poussières, plinthes, portes, interrupteurs",
        "Vitres intérieures accessibles",
        "Clés récupérées et rendues à l'agence",
        "Photos avant/après le jour même",
        "Facture utilisable comme justificatif sur caution",
      ],
    },
    steps: [
      "Vous nous transmettez l'adresse et le type de logement",
      "Intervention sous 72 h",
      "Photos avant/après envoyées le jour même",
      "Clés rendues, facture envoyée",
    ],
    cta: "phone",
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
    id: "sols-locaux",
    label: "Sols & locaux",
    audience: "Particuliers & pros",
    title: "Sols, locaux & grandes surfaces",
    intro:
      "Sols et surfaces traités à la monobrosse professionnelle : maisons, commerces, bureaux, terrasses et grandes surfaces de moquette.",
    prices: [
      { name: "Décapage", detail: "Retrait des couches de saleté incrustée et des anciens traitements.", price: "Devis au m²" },
      { name: "Lustrage", detail: "Brillance et finition nette redonnées au sol.", price: "Devis au m²" },
      { name: "Récurage", detail: "Nettoyage en profondeur des sols très encrassés.", price: "Devis au m²" },
      { name: "Moquettes grandes surfaces", detail: "Bureaux, salles, couloirs.", price: "Devis au m²" },
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
    cta: "phone",
  },
  {
    id: "location-utilitaire",
    label: "Location utilitaire",
    audience: "Particuliers & pros",
    title: "Location de camions utilitaires",
    intro:
      "Pour transporter, pas seulement nettoyer : déménagements, achats en magasin, meubles volumineux, encombrants.",
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
    cta: "phone",
  },
];
