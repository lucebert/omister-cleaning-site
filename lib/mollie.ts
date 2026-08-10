const MOLLIE_API = "https://api.mollie.com/v2";

export async function mollie<T = any>(
  path: string,
  init?: { method?: string; body?: unknown }
): Promise<T> {
  const key = process.env.MOLLIE_API_KEY;
  if (!key) {
    throw new Error(
      "MOLLIE_API_KEY n'est pas configurée. Ajoutez la clé API Mollie dans les variables d'environnement."
    );
  }
  const res = await fetch(`${MOLLIE_API}${path}`, {
    method: init?.method ?? "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: init?.body !== undefined ? JSON.stringify(init.body) : undefined,
    cache: "no-store",
  });
  const data = res.status === 204 ? null : await res.json().catch(() => null);
  if (!res.ok) {
    const detail =
      data && typeof data.detail === "string"
        ? data.detail
        : `Erreur Mollie (HTTP ${res.status})`;
    throw new Error(detail);
  }
  return data as T;
}
