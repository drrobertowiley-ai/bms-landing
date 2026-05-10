"use client";

import { useState, type FormEvent } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();

    if (!email) {
      setStatus("error");
      setErrorMessage("Escribe un correo válido.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const payload = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(payload.error ?? "No pudimos guardar tu correo.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Algo salió mal. Inténtalo otra vez.",
      );
    }
  }

  return (
    <section
      aria-labelledby="newsletter-title"
      className="border-t border-bms-slate-200 bg-bms-slate-50"
    >
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-bms-lg border border-bms-slate-200 bg-white p-6 shadow-bms-sm sm:p-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
            <div
              aria-hidden="true"
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-bms-md bg-bms-blue-50 text-bms-blue-700"
            >
              <Mail className="h-6 w-6" />
            </div>

            <div className="flex-1">
              <h2
                id="newsletter-title"
                className="text-balance text-xl font-bold tracking-tight text-bms-slate-900 sm:text-2xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                Mantente al tanto de BMS
              </h2>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-bms-slate-600 sm:text-base">
                Te avisamos cuando publiquemos nuevos módulos, integraciones o
                mejoras de seguridad. Sin spam, puedes darte de baja cuando
                quieras.
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-5 flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="tu@empresa.com"
                  disabled={status === "loading" || status === "success"}
                  className="block h-11 w-full rounded-bms-md border border-bms-slate-200 bg-white px-3 text-sm text-bms-slate-900 shadow-bms-sm transition-colors placeholder:text-bms-slate-400 focus:border-bms-blue-500 focus:outline-none focus:ring-2 focus:ring-bms-blue-500/20 disabled:bg-bms-slate-50 disabled:text-bms-slate-500 sm:max-w-xs"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-bms-md bg-bms-blue-600 px-5 text-sm font-semibold text-white shadow-bms-md transition-colors hover:bg-bms-blue-700 focus-bms disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading"
                    ? "Enviando…"
                    : status === "success"
                      ? "Listo"
                      : "Suscribirme"}
                </button>
              </form>

              <div aria-live="polite" className="mt-3 min-h-[1.25rem]">
                {status === "success" ? (
                  <p className="inline-flex items-center gap-1.5 text-sm text-bms-success">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Te avisaremos. Gracias por tu interés.
                  </p>
                ) : status === "error" ? (
                  <p className="text-sm text-bms-danger">{errorMessage}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
