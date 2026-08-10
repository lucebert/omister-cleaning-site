# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Particuliers d'Île-de-France** : ménages qui ont besoin d'un camion utilitaire (déménagement, achats volumineux) ou d'un nettoyage en profondeur (voiture, canapé, matelas, tapis, sols). Ils découvrent l'entreprise via Instagram, le bouche-à-oreille ou Google, et décident vite : le devis se fait par téléphone.
- **Professionnels** : commerces, bureaux et locaux professionnels pour le nettoyage des sols et surfaces (sur devis).
- **Acheteurs boutique** : clients (souvent après une prestation) qui achètent les produits d'entretien pour entretenir eux-mêmes entre deux interventions.

## Product Purpose

Site vitrine + boutique d'O'Mister Cleaning, entreprise de Pontoise (95300) tenue par Omar Kourouma. Le site doit (1) déclencher des appels et messages pour des devis de prestations et (2) vendre les produits d'entretien en ligne. Les deux comptent ; Omar a une ambition forte côté vente de produits — « vendre le plus possible », y compris à terme hors de France (Europe, Afrique). Succès = appels reçus + commandes payées.

## Positioning

Un seul prestataire local pour deux besoins habituellement séparés : la location de camion utilitaire (avec ou sans chauffeur) et le nettoyage professionnel (auto, mobilier/textiles, habitation/locaux). Prix d'entrée bas et annoncés à l'avance (« à partir de »), intervention rapide sur rendez-vous.

## Operating Context

- Prestations sur rendez-vous, **acompte obligatoire** ; devis par téléphone (06 10 13 36 42), Instagram (@o_mister_cleaning) ou Snapchat (omister233060).
- Zone d'intervention : Île-de-France, base à Pontoise.
- Commandes boutique : Omar les voit dans son dashboard Mollie (produits, quantités et adresses transmis en métadonnées de paiement) et expédie lui-même.
- Hébergement Vercel (team logi-spear), domaine omistercleaning.fr chez OVH, code sur GitHub (lucebert/omister-cleaning-site). Luc développe le site pour Omar ; les échanges avec Omar passent par Luc.

## Capabilities and Constraints

- Site Next.js 15 (App Router) : one-page vitrine + boutique 3 produits (APC Universel 10€, brosse 5€, lingette 1€), panier avec quantités, checkout avec adresses de livraison/facturation séparées, paiement Mollie (clé live configurée), pages /mentions-legales et /cgv.
- Livraison actuelle : France métropolitaine uniquement, 4,95€ offerts dès 30€ — montants placeholder à confirmer avec Omar (transporteur et délais aussi).
- Prix des prestations = prix de départ « à partir de », ajustés selon l'état ; ne jamais les présenter comme des prix fermes.
- **En attente d'Omar** : SIRET/forme juridique/adresse (placeholders visibles dans les pages légales), correction de l'URL du profil Mollie (bloque le paiement en production), photos réelles, fiche Google Business.
- **Roadmap confirmée** : réservation en ligne des prestations (créneau + acompte) et boutique élargie (plus de produits). L'ambition export Europe/Afrique est une aspiration, pas une capacité actuelle.

## Brand Commitments

- Nom : O'Mister Cleaning. Gérant : Omar Kourouma.
- Logo existant : `public/images/img-12.png` (rond, utilisé en sticker sur les photos produits).
- Comptes : Instagram @o_mister_cleaning (canal principal), Snapchat omister233060.
- Téléphone affiché partout : 06 10 13 36 42. Email actuel : omister415@gmail.com (migration vers contact@omistercleaning.fr envisagée).

## Evidence on Hand

- **Réel** : 10 photos avant/après authentiques d'interventions (`public/images/img-01.jpg` à `img-10.jpg`), photos des 3 produits (`img-11`, `img-13`, `img-15`), logo.
- **Absent — ne pas fabriquer** : photos du camion, d'Omar ou du matériel ; avis clients (aucune fiche Google Business encore) ; chiffres d'activité (nombre d'interventions, ancienneté) ; témoignages. Aucun de ces éléments ne doit être inventé ; ils seront ajoutés quand Omar les fournira.

## Product Principles

1. **L'authentique avant le marketing** : le site a souffert d'un rendu « généré par IA » ; chaque ajout doit s'appuyer sur une preuve réelle (photos d'interventions, avis vérifiables, infos légales) plutôt que sur des claims ou des chiffres de remplissage.
2. **Zéro friction vers le contact** : l'appel téléphonique est la conversion principale des prestations ; le numéro doit rester accessible en un clic depuis chaque écran.
3. **Prix transparents, jamais fermes** : afficher les « à partir de » clairement, sans laisser croire à un prix garanti.
4. **La confiance se gagne pour un premier achat** : acheteur et appelant ne connaissent pas l'entreprise ; ancrage local (Pontoise), mentions légales complètes et moyens de paiement reconnus sont des exigences, pas des options.
5. **Construire pour la suite** : les choix (panier, checkout, catalogue dans `lib/products.ts`) doivent rester extensibles vers la réservation en ligne et un catalogue élargi.
