import {
  FolderKanban,
  Landmark,
  Lightbulb,
  LineChart,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

interface SpecialService {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  availability: string;
}

const SERVICES: ReadonlyArray<SpecialService> = [
  {
    icon: FolderKanban,
    name: "Gestión de Proyectos",
    tagline: "Propuestas y portafolio",
    description:
      "Planeación, redacción asistida con IA y seguimiento ejecutivo de proyectos especiales y propuestas competitivas a financiadores nacionales e internacionales.",
    availability: "Disponible Q3 2026",
  },
  {
    icon: Landmark,
    name: "Gestión de Fondos",
    tagline: "Capital y financiamiento",
    description:
      "Catálogo de financiadores, matching con convocatorias, control de capital de trabajo, líneas de crédito y asignación financiera estratégica.",
    availability: "Disponible Q3 2026",
  },
  {
    icon: Lightbulb,
    name: "Consultoría Empresarial",
    tagline: "Diagnóstico y mejora",
    description:
      "Diagnósticos integrales, planes de mejora y acompañamiento estructurado para áreas críticas de tu negocio con metodologías probadas.",
    availability: "Próximamente",
  },
  {
    icon: LineChart,
    name: "Evaluación de Empresa",
    tagline: "Valuación y due diligence",
    description:
      "Valuación financiera, due diligence, análisis de rentabilidad y reportes ejecutivos listos para inversionistas, fusiones o procesos de venta.",
    availability: "Próximamente",
  },
  {
    icon: Megaphone,
    name: "Marketing & CRM Digital",
    tagline: "Crecimiento y adquisición",
    description:
      "Campañas, automatización de marketing, segmentación inteligente y métricas de adquisición para acelerar el crecimiento comercial.",
    availability: "Próximamente",
  },
];

export function ServiciosEspecialesSection() {
  return (
    <section
      id="servicios-especiales"
      aria-labelledby="servicios-title"
      className="bg-bms-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-bms-tagline text-bms-blue-600">
            Servicios Especiales
          </p>
          <h2
            id="servicios-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-bms-slate-900 sm:text-4xl lg:text-5xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            Módulos avanzados, próximamente
          </h2>
          <p className="mt-4 text-pretty text-base text-bms-slate-600 sm:text-lg">
            Capacidades especializadas que se contratan aparte para complementar
            tu plataforma BMS. En desarrollo activo, con fechas comprometidas.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((svc) => (
            <li key={svc.name} className="flex">
              <article className="group flex h-full w-full flex-col rounded-bms-lg border border-bms-slate-200 bg-white p-7 transition-all hover:border-bms-slate-300 hover:shadow-bms-md">
                <div className="flex items-start gap-4">
                  <div
                    className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-bms-md bg-bms-slate-100 text-bms-slate-500 transition-colors group-hover:bg-bms-slate-200"
                    aria-hidden="true"
                  >
                    <svc.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-bms-slate-900">
                      {svc.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-bms-blue-600">
                      {svc.tagline}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-bms-slate-600">
                  {svc.description}
                </p>

                <div className="mt-5 border-t border-bms-slate-100 pt-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-bms-slate-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-bms-slate-600">
                    {svc.availability}
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-bms-slate-500">
          ¿Interesado en alguno de estos servicios?{" "}
          <a
            href="mailto:contacto@bms.services?subject=Interes%20en%20servicios%20especiales%20BMS"
            className="font-semibold text-bms-blue-600 hover:text-bms-blue-700"
          >
            Escríbenos
          </a>{" "}
          y te avisamos cuando esté disponible.
        </p>
      </div>
    </section>
  );
}
