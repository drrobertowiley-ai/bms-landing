import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Newsletter subscribe — STUB.
 *
 * Por ahora solo:
 *   1. Valida el formato del email.
 *   2. Loguea en consola (visible en Vercel → Functions logs).
 *   3. En entorno NO-Vercel y NO-prod, intenta append a
 *      `newsletter-subscribers.json` en la raíz del repo.
 *      (En Vercel el FS es read-only, así que esto se omite silenciosamente.)
 *
 * TODO: integrar con Resend Audiences o Mailchimp Lists cuando Roberto
 *       cree las cuentas. Recomendación: Resend, ya que ya lo usamos
 *       para correos transaccionales en el onboarding.
 *       Docs: https://resend.com/docs/api-reference/audiences/create-contact
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface SubscribeBody {
  email?: unknown;
}

export async function POST(request: Request): Promise<NextResponse> {
  let body: SubscribeBody;
  try {
    body = (await request.json()) as SubscribeBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Cuerpo inválido. Esperamos JSON con `email`." },
      { status: 400 },
    );
  }

  const rawEmail = typeof body.email === "string" ? body.email.trim() : "";

  if (!rawEmail || !EMAIL_REGEX.test(rawEmail) || rawEmail.length > 254) {
    return NextResponse.json(
      { ok: false, error: "Correo inválido." },
      { status: 400 },
    );
  }

  const email = rawEmail.toLowerCase();
  const timestamp = new Date().toISOString();

  // 1) Log siempre (visible en Vercel logs)
  // eslint-disable-next-line no-console
  console.log(
    `[newsletter] nuevo suscriptor: ${email} @ ${timestamp} — TODO integrar a Resend/Mailchimp`,
  );

  // 2) Append a archivo local solo cuando NO estamos en Vercel
  //    (Vercel tiene FS read-only excepto /tmp, que es efímero)
  if (!process.env.VERCEL) {
    try {
      const filePath = path.join(process.cwd(), "newsletter-subscribers.json");
      let existing: Array<{ email: string; createdAt: string }> = [];
      try {
        const content = await fs.readFile(filePath, "utf8");
        existing = JSON.parse(content) as Array<{
          email: string;
          createdAt: string;
        }>;
      } catch {
        // archivo no existe todavía, está bien
      }
      if (!existing.some((entry) => entry.email === email)) {
        existing.push({ email, createdAt: timestamp });
        await fs.writeFile(
          filePath,
          JSON.stringify(existing, null, 2),
          "utf8",
        );
      }
    } catch (err) {
      // best-effort: no rompemos la respuesta si falla la escritura
      // eslint-disable-next-line no-console
      console.warn("[newsletter] no pude persistir a archivo:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
