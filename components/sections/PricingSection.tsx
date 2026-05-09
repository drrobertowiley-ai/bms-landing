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
  ctaHref: string;
  ctaExternal?: boolean;
}

const APP_COMENZAR_URL = "https://app.bms.services/comenzar";
const MULTIEMPRESA_MAILTO =
  "mailto:contacto@bms.services?subject=Cotizacion%20plan%20Multiempresa%20BMS";

const PLANS: ReadonlyArray<Plan> = [
  {
    name: "Microempresa",
    tagline: "Para empresas pequeñas enfocadas",
    price: "$299",
    priceNote: "MXN / mes",
    features: [
      "Hasta 5 usuarios",
      "Dashboard ejecutivo",
      "1 módulo comercial a tu elección",
      "Aislamiento multi-tenant",
      "Política de contraseñas estricta",
      "Respaldos automáticos diarios",
      "Soporte por email",
    ],
    ctaLabel: "Comenzar",
    ctaHref: APP_COMENZAR_URL,
    ctaExternal: true,
  },
  {
    name: "PyME",
    tagline: "Para empresas medianas en crecimiento",
    price: "$599",
    priceNote: "MXN / mes",
    features: [
      "Hasta 15 usuarios",
      "Dashboard ejecutivo",
      "3 módulos comerciales a tu elección",
      "Logo de empresa (co-branding)",
      "Bitácora de auditoría",
      "Snapshots descargables",
      "MFA opcional",
      "Soporte por email",
    ],
    highlighted: true,
    ctaLabel: "Comenzar",
    ctaHref: APP_COMENZAR_URL,
    ctaExternal: true,
  },
  {
    name: "Empresa Grande",
    tagline: "Operación completa, los 5 módulos",
    price: "$899",
    priceNote: "MXN / mes",
    features: [
      "Hasta 30 usuarios",
      "Dashboard ejecutivo",
      "Los 5 módulos comerciales completos",
      "Producción · Materiales · Ventas & CRM · Operativa · Administración",
      "MFA obligatorio + lockout",
      "Bitácora completa exportable",
      "Política de Seguridad PDF personalizada",
      "Soporte prioritario",
    ],
    ctaLabel: "Comenzar",
    ctaHref: APP_COMENZAR_URL,
    ctaExternal: true,
  },
  {
    name: "Multiempresa",
    tagline: "Para holdings, franquicias y grupos",
    price: "Cotización",
    priceNote: "personalizada",
    features: [
      "Usuarios ilimitados",
      "Todos los módulos comerciales",
      "Multi-empresa bajo super-admin",
      "SLA 99.9%",
      "Onboarding dedicado",
      "Integraciones a la medida (API, ERP)",
      "Soporte 24/7 con SLA",
      "Gerente de cuenta dedicado",
    ],
    ctaLabel: "Hablar con ventas",
    ctaHref: MULTIEMPRESA_MAILTO,
    ctaExternal: false,
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

                {plan.ctaExternal ? (
                  <a
                    href={plan.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "mt-8 inline-flex h-11 items-center justify-center rounded-bms-md px-5 text-sm font-semibold transition-colors focus-bms",
                      plan.highlighted
                        ? "bg-bms-blue-600 text-white shadow-bms-sm hover:bg-bms-blue-700"
                        : "border border-bms-slate-200 bg-white text-bms-slate-900 hover:border-bms-slate-300 hover:bg-bms-slate-50",
                    ].join(" ")}
                  >
                    {plan.ctaLabel}
                  </a>
                ) : (
                  <Link
                    href={plan.ctaHref}
                    className={[
                      "mt-8 inline-flex h-11 items-center justify-center rounded-bms-md px-5 text-sm font-semibold transition-colors focus-bms",
                      plan.highlighted
                        ? "bg-bms-blue-600 text-white shadow-bms-sm hover:bg-bms-blue-700"
                        : "border border-bms-slate-200 bg-white text-bms-slate-900 hover:border-bms-slate-300 hover:bg-bms-slate-50",
                    ].join(" ")}
                  >
                    {plan.ctaLabel}
                  </Link>
                )}
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
