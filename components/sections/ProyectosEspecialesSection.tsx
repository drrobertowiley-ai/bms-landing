import { Smile, Rocket, ArrowUpRight, Sparkles, type LucideIcon } from "lucide-react";

type ProjectStatus = "live" | "pre-launch";

interface SpecialProject {
  icon: LucideIcon;
  name: string;
  tagline: string;
  vertical: string;
  description: string;
  highlights: string[];
  status: ProjectStatus;
  href?: string;
  hrefLabel?: string;
  accent: {
    /** Color base para el gradiente del ícono. Tailwind utility */
    iconBg: string;
    iconText: string;
    accentText: string;
  };
}

const PROJECTS: ReadonlyArray<SpecialProject> = [
  {
    icon: Smile,
    name: "Orismai",
    tagline: "Salud bucal inteligente",
    vertical: "Vertical dental",
    description:
      "Plataforma SaaS para clínicas dentales con 21 agentes inteligentes que orquestan la operación, el diagnóstico asistido y la billetera de cada paciente en una experiencia integrada.",
    highlights: [
      "21 agentes inteligentes especializados",
      "Capa operativa + IA + wallet del paciente",
      "Diseñada para grupos y franquicias dentales",
    ],
    status: "pre-launch",
    href: "https://www.orismai.com",
    hrefLabel: "Visitar orismai.com",
    accent: {
      iconBg: "bg-gradient-to-br from-teal-500 to-cyan-600",
      iconText: "text-white",
      accentText: "text-teal-600",
    },
  },
  {
    icon: Rocket,
    name: "Catalyst",
    tagline: "Propuestas que se ganan",
    vertical: "Vertical de innovación",
    description:
      "Plataforma para investigadores, ONGs y empresas que necesitan redactar y administrar propuestas competitivas a SECIHTI, fundaciones y financiadores internacionales con asistencia de IA.",
    highlights: [
      "Asistente IA para redacción técnica",
      "Catálogo de convocatorias y financiadores",
      "Seguimiento ejecutivo de portafolio",
    ],
    status: "pre-launch",
    accent: {
      iconBg: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
      iconText: "text-white",
      accentText: "text-violet-600",
    },
  },
];

const STATUS_LABEL: Record<ProjectStatus, { label: string; classes: string }> = {
  live: {
    label: "Disponible",
    classes: "bg-emerald-100 text-emerald-700",
  },
  "pre-launch": {
    label: "Lanzamiento 2026",
    classes: "bg-bms-blue-50 text-bms-blue-700",
  },
};

const CONTACT_MAILTO =
  "mailto:contacto@bms.services?subject=Plataforma%20a%20la%20medida%20%E2%80%94%20EPX%20Solutions";

export function ProyectosEspecialesSection() {
  return (
    <section
      id="proyectos-especiales"
      aria-labelledby="proyectos-title"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Decoración sutil de fondo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-72 bg-gradient-to-b from-bms-slate-50 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-bms-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-bms-tagline text-bms-slate-700">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Proyectos a la medida
          </span>
          <h2
            id="proyectos-title"
            className="mt-4 text-balance text-3xl font-bold tracking-tight text-bms-slate-900 sm:text-4xl lg:text-5xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            Plataformas SaaS para verticales especializadas
          </h2>
          <p className="mt-4 text-pretty text-base text-bms-slate-600 sm:text-lg">
            Además de BMS, en{" "}
            <strong className="font-semibold text-bms-slate-900">
              EPX Solutions
            </strong>{" "}
            desarrollamos plataformas SaaS a la medida para industrias con
            necesidades específicas. Cada una con su propia identidad, su propia
            arquitectura y su propio mercado.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {PROJECTS.map((p) => {
            const status = STATUS_LABEL[p.status];
            const hasUrl = !!p.href;

            return (
              <li key={p.name} className="flex">
                <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-bms-lg border border-bms-slate-200 bg-white p-7 transition-all hover:border-bms-slate-300 hover:shadow-bms-md">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div
                      className={[
                        "inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-bms-md shadow-bms-sm",
                        p.accent.iconBg,
                        p.accent.iconText,
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      <p.icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-bms-slate-900">
                          {p.name}
                        </h3>
                        <span
                          className={[
                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                            status.classes,
                          ].join(" ")}
                        >
                          {status.label}
                        </span>
                      </div>
                      <p
                        className={[
                          "mt-1 text-xs font-semibold uppercase tracking-wider",
                          p.accent.accentText,
                        ].join(" ")}
                      >
                        {p.tagline}
                      </p>
                      <p className="mt-0.5 text-xs text-bms-slate-500">
                        {p.vertical}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-sm leading-relaxed text-bms-slate-600">
                    {p.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-bms-slate-700"
                      >
                        <span
                          className={[
                            "mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full",
                            p.accent.accentText.replace("text-", "bg-"),
                          ].join(" ")}
                          aria-hidden="true"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <div className="mt-7 flex flex-1 items-end">
                    {hasUrl ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.name} — abrir sitio en nueva pestaña`}
                        className={[
                          "inline-flex h-11 w-full items-center justify-center gap-2 rounded-bms-md px-5 text-sm font-semibold text-white shadow-bms-sm transition-all hover:shadow-bms-md focus-bms",
                          p.accent.iconBg,
                        ].join(" ")}
                      >
                        {p.hrefLabel ?? "Visitar sitio"}
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        aria-disabled="true"
                        className="inline-flex h-11 w-full cursor-not-allowed items-center justify-center gap-2 rounded-bms-md border border-bms-slate-200 bg-bms-slate-50 px-5 text-sm font-semibold text-bms-slate-500"
                      >
                        Sitio próximamente
                      </button>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {/* CTA final */}
        <div className="mt-14 overflow-hidden rounded-bms-lg border border-bms-slate-200 bg-gradient-to-br from-bms-slate-50 via-white to-bms-blue-50/40 p-8 sm:p-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold text-bms-slate-900 sm:text-2xl">
                ¿Tu industria necesita su propia plataforma?
              </h3>
              <p className="mt-2 text-sm text-bms-slate-600 sm:text-base">
                Si BMS te queda corto y buscas un SaaS diseñado para tu vertical
                — desde clínicas, despachos, manufactureras de nicho, instituciones
                de salud o cualquier otro giro — lo construimos contigo.
              </p>
            </div>
            <a
              href={CONTACT_MAILTO}
              className="inline-flex h-12 flex-shrink-0 items-center justify-center rounded-bms-md bg-bms-slate-900 px-6 text-sm font-semibold text-white shadow-bms-sm transition-colors hover:bg-bms-slate-800 focus-bms"
            >
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
