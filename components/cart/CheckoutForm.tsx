"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import PaymentLogos from "../PaymentLogos";
import {
  getProduct,
  formatPrice,
  shippingCost,
  SHIPPING,
} from "../../lib/products";

type Address = {
  givenName: string;
  familyName: string;
  streetAndNumber: string;
  streetAdditional: string;
  postalCode: string;
  city: string;
};

const emptyAddress: Address = {
  givenName: "",
  familyName: "",
  streetAndNumber: "",
  streetAdditional: "",
  postalCode: "",
  city: "",
};

function AddressFields({
  prefix,
  address,
  onChange,
}: {
  prefix: string;
  address: Address;
  onChange: (a: Address) => void;
}) {
  const set = (field: keyof Address) => (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ ...address, [field]: e.target.value });

  return (
    <>
      <div className="form-row">
        <label className="field">
          <span>Prénom *</span>
          <input
            required
            autoComplete={`${prefix} given-name`}
            value={address.givenName}
            onChange={set("givenName")}
          />
        </label>
        <label className="field">
          <span>Nom *</span>
          <input
            required
            autoComplete={`${prefix} family-name`}
            value={address.familyName}
            onChange={set("familyName")}
          />
        </label>
      </div>
      <label className="field">
        <span>Adresse (n° et rue) *</span>
        <input
          required
          autoComplete={`${prefix} address-line1`}
          value={address.streetAndNumber}
          onChange={set("streetAndNumber")}
        />
      </label>
      <label className="field">
        <span>Complément d'adresse</span>
        <input
          autoComplete={`${prefix} address-line2`}
          value={address.streetAdditional}
          onChange={set("streetAdditional")}
        />
      </label>
      <div className="form-row">
        <label className="field">
          <span>Code postal *</span>
          <input
            required
            inputMode="numeric"
            pattern="(?!9[78])[0-9]{5}"
            title="Code postal de France métropolitaine (5 chiffres — nous ne livrons pas encore l'outre-mer)"
            autoComplete={`${prefix} postal-code`}
            value={address.postalCode}
            onChange={set("postalCode")}
          />
        </label>
        <label className="field">
          <span>Ville *</span>
          <input
            required
            autoComplete={`${prefix} address-level2`}
            value={address.city}
            onChange={set("city")}
          />
        </label>
      </div>
    </>
  );
}

export default function CheckoutForm() {
  const { items } = useCart();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [shippingAddress, setShippingAddress] = useState<Address>(emptyAddress);
  const [sameBilling, setSameBilling] = useState(true);
  const [billingAddress, setBillingAddress] = useState<Address>(emptyAddress);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const products = items
    .map((i) => ({ item: i, product: getProduct(i.id) }))
    .filter((x) => x.product);
  const subtotal = products.reduce(
    (sum, x) => sum + x.product!.price * x.item.qty,
    0
  );
  const shipping = shippingCost(subtotal);
  const total = subtotal + shipping;

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="checkout-empty">
        <p>Votre panier est vide — les produits vous attendent en boutique.</p>
        <a className="btn btn-primary" href="/#boutique">
          Voir les produits
        </a>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          email,
          phone,
          shippingAddress,
          billingAddress: sameBilling ? null : billingAddress,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.checkoutUrl) {
        throw new Error(data.error || "Une erreur est survenue.");
      }
      window.location.href = data.checkoutUrl;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
      setSubmitting(false);
    }
  };

  return (
    <form className="checkout-grid" onSubmit={handleSubmit}>
      <div className="checkout-form">
        <div className="checkout-block">
          <h3>Vos coordonnées</h3>
          <div className="form-row">
            <label className="field">
              <span>Email *</span>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small className="field-hint">Pour le suivi de votre commande.</small>
            </label>
            <label className="field">
              <span>Téléphone *</span>
              <input
                type="tel"
                required
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <small className="field-hint">Uniquement en cas de souci de livraison.</small>
            </label>
          </div>
        </div>

        <div className="checkout-block">
          <h3>Adresse de livraison</h3>
          <AddressFields
            prefix="shipping"
            address={shippingAddress}
            onChange={setShippingAddress}
          />
        </div>

        <div className="checkout-block">
          <h3>Adresse de facturation</h3>
          <label className="checkbox">
            <input
              type="checkbox"
              checked={sameBilling}
              onChange={(e) => setSameBilling(e.target.checked)}
            />
            <span>Identique à l'adresse de livraison</span>
          </label>
          {!sameBilling && (
            <AddressFields
              prefix="billing"
              address={billingAddress}
              onChange={setBillingAddress}
            />
          )}
        </div>
      </div>

      <aside className="checkout-summary">
        <h3>Votre commande</h3>
        {products.map(({ item, product }) => (
          <div className="cart-line" key={item.id}>
            <span>
              {item.qty}× {product!.name}
            </span>
            <span>{formatPrice(product!.price * item.qty)}</span>
          </div>
        ))}
        <div className="cart-line">
          <span>Livraison</span>
          <span>{shipping === 0 ? "Offerte" : formatPrice(shipping)}</span>
        </div>
        {shipping > 0 && (
          <p className="cart-hint">
            Livraison offerte dès {formatPrice(SHIPPING.freeFrom)} d'achat
          </p>
        )}
        <div className="cart-line cart-total">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
        {error && (
          <p className="checkout-error" role="alert">
            {error} Vous pouvez aussi commander par téléphone au{" "}
            <a href="tel:0610133642">06 10 13 36 42</a>.
          </p>
        )}
        <button
          className="btn btn-primary cart-checkout"
          type="submit"
          disabled={submitting}
        >
          {submitting
            ? "Redirection vers le paiement…"
            : `Payer ${formatPrice(total)}`}
        </button>
        <p className="shop-secure">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Paiement 100% sécurisé par Mollie
        </p>
        <PaymentLogos />
        <p className="checkout-shipping-note">
          Livraison en France métropolitaine — expédition sous 2 à 4 jours
          ouvrés.
        </p>
      </aside>
    </form>
  );
}
