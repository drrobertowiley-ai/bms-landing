import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { DashboardMock } from "@/components/sections/DashboardMock";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-bms-slate-50 via-white to-white"
    >
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texto */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-bms-slate-200 bg-white px-3 py-1 text-xs font-medium text-bms-slate-700 shadow-bms-sm">
              <span className="relative inline-flex h-2 w-2">
                <span
                  aria-hidden="true"
                  className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-bms-success opacity-75"
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-bms-success" />
              </span>
              Multi-tenant · Listo para producción
            </div>

            {/* Title */}
            <h1
              id="hero-title"
              className="mt-6 text-balance text-4xl font-bold tracking-tight text-bms-slate-900 sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Toda tu empresa en una sola plataforma.
            </h1>

            {/* Subhead */}
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-bms-slate-600 sm:text-lg lg:max-w-2xl">
              BMS consolida almacén, producción, calidad, ventas, finanzas y
              recursos humanos en un solo lugar. Cada empresa opera con sus
              datos aislados, seguridad de grado SaaS y la confianza de que tu
              información nunca se mezcla con la de nadie más.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-start lg:justify-start lg:gap-4">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-bms-md bg-bms-blue-600 px-6 text-base font-semibold text-white shadow-bms-md transition-all hover:bg-bms-blue-700 hover:shadow-bms-lg focus-bms"
              >
                Solicitar demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="https://app.bms.services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-bms-md border border-bms-slate-200 bg-white px-6 text-base font-semibold text-bms-slate-900 transition-colors hover:border-bms-slate-300 hover:bg-bms-slate-50 focus-bms"
              >
                Iniciar sesión
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Micro-copy de confianza */}
            <p className="mt-6 text-xs text-bms-slate-500">
              Sin tarjeta de crédito · Onboarding asistido · Datos exportables
              en cualquier momento
            </p>
          </div>

          {/* Dashboard mockup */}
          <div className="relative">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}
