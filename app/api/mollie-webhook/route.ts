import { NextRequest, NextResponse } from "next/server";
import { mollie } from "../../../lib/mollie";
import { sendOrderEmail } from "../../../lib/email";

type Adresse = {
  givenName?: string;
  familyName?: string;
  streetAndNumber?: string;
  streetAdditional?: string;
  postalCode?: string;
  city?: string;
};

function formatAdresse(a: Adresse | undefined): string {
  if (!a) return "—";
  return [
    `${a.givenName ?? ""} ${a.familyName ?? ""}`.trim(),
    a.streetAndNumber,
    a.streetAdditional,
    `${a.postalCode ?? ""} ${a.city ?? ""}`.trim(),
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(req: NextRequest) {
  // Mollie envoie l'id du paiement en form-urlencoded : id=tr_xxx
  let paymentId = "";
  try {
    const form = await req.formData();
    paymentId = String(form.get("id") ?? "");
  } catch {
    /* corps invalide */
  }
  if (!/^tr_[A-Za-z0-9]+$/.test(paymentId)) {
    return NextResponse.json({ error: "id invalide" }, { status: 400 });
  }

  try {
    const payment = await mollie<any>(`/payments/${paymentId}`);

    // On ne notifie que les paiements payés, une seule fois
    if (payment.status !== "paid" || payment.metadata?.notifie) {
      return NextResponse.json({ ok: true });
    }

    const m = payment.metadata ?? {};
    const items: { name?: string; qty?: number }[] = Array.isArray(m.items)
      ? m.items
      : [];
    const lignes = items
      .map((i) => `  - ${i.qty ?? "?"}× ${i.name ?? "?"}`)
      .join("\n");

    const text = [
      `Nouvelle commande payée sur omistercleaning.com`,
      ``,
      `Paiement Mollie : ${payment.id}`,
      `Montant : ${payment.amount?.value ?? "?"} ${payment.amount?.currency ?? ""}`,
      `  (sous-total ${m.sousTotal ?? "?"} € + livraison ${m.livraison ?? "?"} €)`,
      ``,
      `Produits :`,
      lignes || "  —",
      ``,
      `Client :`,
      `  Email : ${m.email ?? "—"}`,
      `  Téléphone : ${m.telephone ?? "—"}`,
      ``,
      `Adresse de livraison :`,
      formatAdresse(m.adresseLivraison),
      ``,
      `Adresse de facturation :`,
      formatAdresse(m.adresseFacturation),
    ].join("\n");

    await sendOrderEmail({
      subject: `Nouvelle commande — ${payment.amount?.value ?? ""} € (${payment.id})`,
      text,
      replyTo: typeof m.email === "string" ? m.email : undefined,
    });

    // Marque le paiement comme notifié pour ne pas renvoyer l'email
    // (Mollie rappelle le webhook à chaque changement de statut)
    try {
      await mollie(`/payments/${payment.id}`, {
        method: "PATCH",
        body: { metadata: { ...m, notifie: true } },
      });
    } catch {
      /* non bloquant */
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Webhook Mollie:", err);
    // 500 => Mollie réessaiera automatiquement plus tard
    return NextResponse.json({ error: "erreur interne" }, { status: 500 });
  }
}
