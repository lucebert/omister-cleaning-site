"use client";

import { useCart } from "./CartContext";
import {
  getProduct,
  formatPrice,
  shippingCost,
  SHIPPING,
} from "../../lib/products";

export default function CartWidget() {
  const { items, count, setQty, remove, isOpen, setOpen } = useCart();

  const subtotal = items.reduce((sum, i) => {
    const p = getProduct(i.id);
    return p ? sum + p.price * i.qty : sum;
  }, 0);
  const shipping = shippingCost(subtotal);
  const total = subtotal + shipping;

  return (
    <>
      <button
        className="cart-fab"
        type="button"
        aria-label="Ouvrir le panier"
        onClick={() => setOpen(true)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {count > 0 && <span className="cart-fab-badge">{count}</span>}
      </button>

      {isOpen && (
        <div
          className="cart-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={isOpen ? "cart-drawer open" : "cart-drawer"}
        aria-label="Panier"
        aria-hidden={!isOpen}
      >
        <div className="cart-head">
          <h3>Votre panier</h3>
          <button
            className="cart-close"
            type="button"
            aria-label="Fermer le panier"
            onClick={() => setOpen(false)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <p className="cart-empty">
            Votre panier est vide. Ajoutez un produit depuis la boutique.
          </p>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => {
                const p = getProduct(item.id);
                if (!p) return null;
                return (
                  <div className="cart-item" key={item.id}>
                    <img src={p.image} alt={p.name} />
                    <div className="cart-item-info">
                      <div className="cart-item-name">{p.name}</div>
                      <div className="cart-item-price">
                        {formatPrice(p.price)} / {p.unit}
                      </div>
                      <div className="cart-qty">
                        <button
                          type="button"
                          aria-label="Diminuer la quantité"
                          onClick={() => setQty(item.id, item.qty - 1)}
                        >
                          −
                        </button>
                        <span>{item.qty}</span>
                        <button
                          type="button"
                          aria-label="Augmenter la quantité"
                          onClick={() => setQty(item.id, item.qty + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-right">
                      <div className="cart-item-total">
                        {formatPrice(p.price * item.qty)}
                      </div>
                      <button
                        className="cart-remove"
                        type="button"
                        aria-label={`Retirer ${p.name} du panier`}
                        onClick={() => remove(item.id)}
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-summary">
              <div className="cart-line">
                <span>Sous-total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="cart-line">
                <span>Livraison</span>
                <span>{shipping === 0 ? "Offerte" : formatPrice(shipping)}</span>
              </div>
              {shipping > 0 && (
                <p className="cart-hint">
                  Plus que {formatPrice(SHIPPING.freeFrom - subtotal)} pour la
                  livraison offerte
                </p>
              )}
              <div className="cart-line cart-total">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <a className="btn btn-primary cart-checkout" href="/commande">
                Commander
              </a>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
