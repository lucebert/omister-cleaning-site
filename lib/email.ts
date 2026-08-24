import nodemailer from "nodemailer";

const ORDER_EMAIL = process.env.ORDER_NOTIFICATION_EMAIL ?? "omister415@gmail.com";

/**
 * Envoie l'email de notification de commande via Gmail SMTP.
 * Nécessite GMAIL_USER et GMAIL_APP_PASSWORD (mot de passe d'application Google).
 */
export async function sendOrderEmail(opts: {
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error(
      "GMAIL_USER / GMAIL_APP_PASSWORD ne sont pas configurés dans les variables d'environnement."
    );
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
  await transporter.sendMail({
    from: `"O'Mister Cleaning" <${user}>`,
    to: ORDER_EMAIL,
    subject: opts.subject,
    text: opts.text,
    ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
  });
}
