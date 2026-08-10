import type { Metadata } from "next";
import { mollie } from "../../lib/mollie";
import SiteFooter from "../../components/SiteFooter";
import ClearCartOnSuccess from "../../components/cart/ClearCartOnSuccess";

export const metadata: Metadata = {
  title: "Merci — O'Mister Cleaning",
  robots: { index: false },
};

export const dynamic = "force-dynamic";

const MESSAGES: Record<string, { title: string; text: string; success: boolean }> = {
  paid: {
    title: "Merci pour votre commande !",
    text: "Votre paiement a bien été reçu. Nous préparons votre commande et vous contacterons pour la livraison.",
    success: true,
  },
  pending: {
    title: "Paiement en cours",
    text: "Votre paiement est en cours de traitement. Vous recevrez une confirmation dès qu'il sera validé.",
    success: true,
  },
  open: {
    title: "Paiement en attente",
    text: "Votre paiement n'a pas encore été finalisé. Si vous avez interrompu le paiement, vous pouvez repasser commande.",
    success: false,
  },
  failed: {
    title: "Paiement refusé",
    text: "Votre paiement n'a pas abouti. Aucun montant n'a été débité, vous pouvez réessayer.",
    success: false,
  },
  canceled: {
    title: "Paiement annulé",
    text: "Vous avez annulé le paiement. Votre panier vous attend si vous souhaitez réessayer.",
    success: false,
  },
  expired: {
    title: "Paiement expiré",
    text: "La session de paiement a expiré. Vous pouvez repasser commande quand vous voulez.",
    success: false,
  },
};

const FALLBACK = {
  title: "Merci !",
  text: "Si votre paiement a été validé, vous recevrez une confirmation. En cas de doute, contactez-nous au 06 10 13 36 42.",
  success: true,
};

export default async function MerciPage({
  searchParams,
}: {
  searchParams: Promise<{ pid?: string }>;
}) {
  const { pid } = await searchParams;

  let message = FALLBACK;
  if (pid && /^tr_[A-Za-z0-9]+$/.test(pid) && process.env.MOLLIE_API_KEY) {
    try {
      const payment = await mollie<any>(`/payments/${pid}`);
      message = MESSAGES[payment.status] ?? FALLBACK;
    } catch {
      /* statut inconnu : message générique */
    }
  }

  return (
    <>
      <header>
        <div className="nav wrap">
          <a className="brand" href="/">
            O'Mister&nbsp;<span className="brand-accent">Cleaning</span>
          </a>
          <a className="nav-cta" href="/">Retour au site</a>
        </div>
      </header>

      <section>
        <div className="section-head">
          <h2 className="section-title">{message.title}</h2>
          <p className="section-sub">{message.text}</p>
          <div className="merci-actions">
            {message.success ? (
              <a className="btn btn-primary" href="/">Retour à l'accueil</a>
            ) : (
              <a className="btn btn-primary" href="/commande">Réessayer le paiement</a>
            )}
          </div>
        </div>
      </section>

      {message.success && <ClearCartOnSuccess />}
      <SiteFooter />
    </>
  );
}
