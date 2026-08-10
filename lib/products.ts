export type Product = {
  id: string;
  name: string;
  unit: string;
  /** Prix unitaire en centimes d'euro */
  price: number;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "apc",
    name: "APC Universel",
    unit: "flacon",
    price: 1000,
    image: "/images/img-11.jpg",
  },
  {
    id: "brosse",
    name: "Brosse de nettoyage",
    unit: "unité",
    price: 500,
    image: "/images/img-13.jpg",
  },
  {
    id: "fibre",
    name: "Lingette microfibre",
    unit: "unité",
    price: 100,
    image: "/images/img-15.jpg",
  },
];

/** Frais de livraison, en centimes. À valider avec le client. */
export const SHIPPING = {
  flat: 495,
  /** Livraison offerte à partir de ce sous-total (centimes) */
  freeFrom: 3000,
};

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function shippingCost(subtotal: number): number {
  return subtotal >= SHIPPING.freeFrom ? 0 : SHIPPING.flat;
}

export function formatPrice(cents: number): string {
  return (cents / 100).toLocaleString("fr-FR", {
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }) + "€";
}
