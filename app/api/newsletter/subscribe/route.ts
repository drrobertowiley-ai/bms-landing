import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Newsletter subscribe — integración con Resend Audiences.
 *
 * Si `RESEND_API_KEY` y `RESEND_AUDIENCE_ID` están configuradas,
 * agregamos el contacto al audience. Si no, hacemos fallback a log
 * (útil en desarrollo o cuando aún no se crea la audience).
 *
 * Cómo crear la audience:
 *   1. https://resend.com/audiences → "New audience" → "BMS Newsletter"
 *   2. Copia el ID que te da y ponlo en Vercel como RESEND_AUDIENCE_ID
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface SubscribeBody {
  email?: unknown;
  source?: unknown; // ej. "landing_footer", "blog_post_xxx"
}

const resendKey = process.env.RESEND_API_KEY;
const audienceId = process.env.RESEND_AUDIENCE_ID;
const resend = resendKey ? new Resend(resendKey) : null;

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
  const source = typeof body.source === "string" ? body.source : "landing";

  if (!rawEmail || !EMAIL_REGEX.test(rawEmail) || rawEmail.length > 254) {
    return NextResponse.json(
      { ok: false, error: "Correo inválido." },
      { status: 400 },
    );
  }

  const email = rawEmail.toLowerCase();
  const timestamp = new Date().toISOString();

  // Camino feliz: integración con Resend Audiences
  if (resend && audienceId) {
    try {
      const result = await resend.contacts.create({
        email,
        audienceId,
        unsubscribed: false,
      });

      // Resend devuelve error si el contacto ya existe (HTTP 400 con mensaje
      // "already_exists"). Lo tratamos como éxito idempotente.
      if (result.error) {
        const errMsg = String(result.error.message ?? result.error.name ?? "");
        const isDuplicate =
          errMsg.toLowerCase().includes("already") ||
          errMsg.toLowerCase().includes("exist");
        if (!isDuplicate) {
          // eslint-disable-next-line no-console
          console.error("[newsletter] resend error:", result.error);
          return NextResponse.json(
            { ok: false, error: "No pudimos guardar tu correo. Intenta más tarde." },
            { status: 500 },
          );
        }
        // Duplicado: ya estaba suscrito → ok silencioso
        // eslint-disable-next-line no-console
        console.log(
          `[newsletter] contacto duplicado (ya suscrito): ${email} @ ${timestamp}`,
        );
        return NextResponse.json({ ok: true, alreadySubscribed: true });
      }

      // eslint-disable-next-line no-console
      console.log(
        `[newsletter] suscriptor agregado a Resend Audience ${audienceId}: ${email} (source: ${source})`,
      );
      return NextResponse.json({ ok: true, contactId: result.data?.id });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[newsletter] excepción al llamar Resend:", err);
      return NextResponse.json(
        { ok: false, error: "Error al procesar suscripción." },
        { status: 500 },
      );
    }
  }

  // Fallback: sin env vars de Resend, solo log (visible en Vercel Functions logs)
  // eslint-disable-next-line no-console
  console.log(
    `[newsletter] FALLBACK (sin Resend): ${email} @ ${timestamp} (source: ${source}) — configura RESEND_API_KEY y RESEND_AUDIENCE_ID`,
  );
  return NextResponse.json({ ok: true, fallback: true });
}
