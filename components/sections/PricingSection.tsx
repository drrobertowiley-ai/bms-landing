import Link from "next/link";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: ReadonlyArray<string>;
  highlighted?: boolean;
  ctaLabel: string;
}

const PLANS: ReadonlyArray<Plan> = [
  {
    name: "Starter",
    tagline: "Para empezar",
    price: "$299",
    priceNote: "MXN / mes",
    features: [
      "Hasta 5 usuarios",
      "Dashboard ejecutivo",
      "3 módulos a tu elección",
      "Aislamiento multi-tenant",
      "Política de contraseñas estricta",
      "Respaldos automáticos diarios",
      "Soporte por email",
    ],
    ctaLabel: "Solicitar demo",
  },
  {
    name: "Standard",
    tagline: "Para PyMES en crecimiento",
    price: "$599",
    priceNote: "MXN / mes",
    features: [
      "Hasta 15 usuarios",
      "Dashboard ejecutivo",
      "7 módulos a tu elección",
      "Logo de empresa (co-branding)",
      "Bitácora de auditoría",
      "Snapshots descargables",
      "MFA opcional",
      "Soporte por email",
    ],
    ctaLabel: "Solicitar demo",
  },
  {
    name: "Professional",
    tagline: "Plataforma completa",
    price: "$999",
    priceNote: "MXN / mes",
    features: [
      "Hasta 30 usuarios",
      "Dashboard ejecutivo",
      "Los 11 módulos incluidos",
      "Escáner QR (producción)",
      "Trazabilidad completa de lotes",
      "Reportes ejecutivos",
      "MFA obligatorio + lockout",
      "Bitácora completa exportable",
      "Política de Seguridad PDF personalizada",
      "Soporte prioritario",
    ],
    highlighted: true,
    ctaLabel: "Solicitar demo",
  },
  {
    name: "Enterprise",
    tagline: "Para operaciones grandes",
    price: "Cotización",
    priceNote: "personalizada",
    features: [
      "Usuarios ilimitados",
      "Todo lo de Professional",
      "SLA 99.9%",
      "Onboarding dedicado (1-2 semanas)",
      "Integraciones a la medida (API, ERP)",
      "Backup local interno (3 capas)",
      "Ambiente de pruebas (staging)",
      "Soporte 24/7 con SLA",
      "Gerente de cuenta dedicado",
    ],
    ctaLabel: "Hablar con ventas",
  },
];

export function PricingSection() {
  return (
    <section
      id="precios"
      aria-labelledby="pricing-title"
      className="bg-bms-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-bms-tagline text-bms-blue-600">
            Precios
          </p>
          <h2
            id="pricing-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-bms-slate-900 sm:text-4xl lg:text-5xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            Planes simples, transparentes
          </h2>
          <p className="mt-4 text-pretty text-base text-bms-slate-600 sm:text-lg">
            Elige el plan que va con el tamaño de tu operación. Cambia cuando
            necesites, sin penalizaciones.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <li key={plan.name} className="flex">
              <article
                className={[
                  "flex w-full flex-col rounded-bms-lg bg-white p-7 transition-all",
                  plan.highlighted
                    ? "ring-2 ring-bms-blue-600 shadow-bms-lg lg:scale-[1.02]"
                    : "ring-1 ring-bms-slate-200 shadow-bms-sm hover:shadow-bms-md",
                ].join(" ")}
              >
                {/* Badge */}
                {plan.highlighted && (
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-bms-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      Más popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-bms-slate-900">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-bms-slate-500">
                    {plan.tagline}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-3xl font-bold tracking-tight text-bms-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-xs text-bms-slate-500">
                    {plan.priceNote}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-bms-slate-700"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-bms-blue-600"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className={[
                    "mt-8 inline-flex h-11 items-center justify-center rounded-bms-md px-5 text-sm font-semibold transition-colors focus-bms",
                    plan.highlighted
                      ? "bg-bms-blue-600 text-white shadow-bms-sm hover:bg-bms-blue-700"
                      : "border border-bms-slate-200 bg-white text-bms-slate-900 hover:border-bms-slate-300 hover:bg-bms-slate-50",
                  ].join(" ")}
                >
                  {plan.ctaLabel}
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-bms-slate-500">
          Precios en MXN, no incluyen IVA. Facturación mensual o anual (10% de
          descuento en pago anual).
        </p>
      </div>
    </section>
  );
}
