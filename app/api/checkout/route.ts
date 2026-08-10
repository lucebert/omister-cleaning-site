import { NextRequest, NextResponse } from "next/server";
import { getProduct, shippingCost } from "../../../lib/products";
import { mollie } from "../../../lib/mollie";

type Address = {
  givenName: string;
  familyName: string;
  streetAndNumber: string;
  streetAdditional?: string;
  postalCode: string;
  city: string;
};

function cleanAddress(a: unknown): Address | null {
  if (!a || typeof a !== "object") return null;
  const addr = a as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const result: Address = {
    givenName: str(addr.givenName),
    familyName: str(addr.familyName),
    streetAndNumber: str(addr.streetAndNumber),
    streetAdditional: str(addr.streetAdditional) || undefined,
    postalCode: str(addr.postalCode),
    city: str(addr.city),
  };
  if (
    !result.givenName ||
    !result.familyName ||
    !result.streetAndNumber ||
    !/^[0-9]{5}$/.test(result.postalCode) ||
    !result.city
  ) {
    return null;
  }
  return result;
}

/** Convertit un numéro français en E.164 (+33...), sinon null. */
function toE164(phone: string): string | null {
  const digits = phone.replace(/[\s.\-()]/g, "");
  if (/^\+[0-9]{8,15}$/.test(digits)) return digits;
  if (/^0[1-9][0-9]{8}$/.test(digits)) return "+33" + digits.slice(1);
  return null;
}

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const rawItems: unknown = body?.items;
  if (!Array.isArray(rawItems) || rawItems.length === 0) {
    return NextResponse.json({ error: "Le panier est vide." }, { status: 400 });
  }

  const items: { id: string; qty: number; name: string; price: number }[] = [];
  for (const raw of rawItems) {
    const product = getProduct(raw?.id);
    const qty = Number(raw?.qty);
    if (!product || !Number.isInteger(qty) || qty < 1 || qty > 99) {
      return NextResponse.json(
        { error: "Un produit du panier est invalide." },
        { status: 400 }
      );
    }
    items.push({ id: product.id, qty, name: product.name, price: product.price });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  const shippingAddress = cleanAddress(body.shippingAddress);
  if (!shippingAddress) {
    return NextResponse.json(
      { error: "Adresse de livraison incomplète." },
      { status: 400 }
    );
  }
  let billingAddress = shippingAddress;
  if (body.billingAddress != null) {
    const cleaned = cleanAddress(body.billingAddress);
    if (!cleaned) {
      return NextResponse.json(
        { error: "Adresse de facturation incomplète." },
        { status: 400 }
      );
    }
    billingAddress = cleaned;
  }

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = shippingCost(subtotal);
  const total = subtotal + shipping;

  const proto = req.headers.get("x-forwarded-proto") ?? "http";
  const host =
    req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "";
  const origin = `${proto}://${host}`;

  const summary = items.map((i) => `${i.qty}× ${i.name}`).join(", ");
  const description = `Commande O'Mister Cleaning — ${summary}`.slice(0, 250);
  const e164 = toE164(phone);

  const mollieAddress = (a: Address) => ({
    givenName: a.givenName,
    familyName: a.familyName,
    email,
    ...(e164 ? { phone: e164 } : {}),
    streetAndNumber: a.streetAndNumber,
    ...(a.streetAdditional ? { streetAdditional: a.streetAdditional } : {}),
    postalCode: a.postalCode,
    city: a.city,
    country: "FR",
  });

  try {
    const payment = await mollie<any>("/payments", {
      method: "POST",
      body: {
        amount: { currency: "EUR", value: (total / 100).toFixed(2) },
        description,
        redirectUrl: `${origin}/merci`,
        cancelUrl: `${origin}/commande`,
        locale: "fr_FR",
        billingAddress: mollieAddress(billingAddress),
        shippingAddress: mollieAddress(shippingAddress),
        metadata: {
          items: items.map((i) => ({ id: i.id, name: i.name, qty: i.qty })),
          sousTotal: (subtotal / 100).toFixed(2),
          livraison: (shipping / 100).toFixed(2),
          email,
          telephone: phone,
          adresseLivraison: shippingAddress,
          adresseFacturation: billingAddress,
        },
      },
    });

    // Ajoute l'id du paiement à l'URL de retour pour afficher le bon statut sur /merci
    try {
      await mollie(`/payments/${payment.id}`, {
        method: "PATCH",
        body: { redirectUrl: `${origin}/merci?pid=${payment.id}` },
      });
    } catch {
      /* non bloquant : la page /merci affichera un message générique */
    }

    return NextResponse.json({ checkoutUrl: payment._links.checkout.href });
  } catch (err) {
    console.error("Checkout Mollie:", err);
    const message =
      err instanceof Error && err.message.includes("MOLLIE_API_KEY")
        ? "Le paiement en ligne n'est pas encore activé. Contactez-nous au 06 10 13 36 42."
        : "Impossible de créer le paiement. Réessayez ou contactez-nous au 06 10 13 36 42.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
