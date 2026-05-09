import { Server, ShieldCheck, Wrench, Plug, GraduationCap } from "lucide-react";
import Link from "next/link";

const ONPREMISE_MAILTO =
  "mailto:contacto@bms.services?subject=Cotizacion%20BMS%20On-Premise%20%28instalacion%20local%29";

const FEATURES = [
  {
    icon: Wrench,
    title: "Adaptación a tu giro",
    description:
      "Ajustamos formularios, flujos, reportes y reglas de negocio a los procesos específicos de tu empresa.",
  },
  {
    icon: Plug,
    title: "Integración con tus sistemas",
    description:
      "Conectamos BMS con tu ERP, contabilidad, máquinas de producción, lectores QR físicos, balanzas y más.",
  },
  {
    icon: ShieldCheck,
    title: "Datos en tu infraestructura",
    description:
      "Servidor propio, backup local y soberanía total sobre tu información. Sin dependencia de la nube.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación dedicada",
    description:
      "Implementación con tu equipo, manuales personalizados y soporte de transición durante todo el rollout.",
  },
] as const;

export function OnPremiseSection() {
  return (
    <section
      id="on-premise"
      aria-labelledby="onpremise-title"
      className="bg-bms-slate-900 py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div
              className="inline-flex h-14 w-14 items-center justify-center rounded-bms-md bg-bms-blue-600/20 text-bms-blue-300"
              aria-hidden="true"
            >
              <Server className="h-7 w-7" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-bms-tagline text-bms-blue-300">
              Plataforma a la medida
            </p>
            <h2
              id="onpremise-title"
              className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.025em" }}
            >
              ¿Necesitas BMS instalado en tu propia infraestructura?
            </h2>
            <p className="mt-5 text-pretty text-base text-bms-slate-300 sm:text-lg">
              Para empresas que prefieren control total sobre sus datos,
              ofrecemos <strong className="font-semibold text-white">BMS On-Premise</strong>:
              instalación en tus servidores con personalización a la medida de
              tus procesos y sistemas existentes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={ONPREMISE_MAILTO}
                className="inline-flex h-12 items-center justify-center rounded-bms-md bg-white px-6 text-sm font-semibold text-bms-slate-900 shadow-bms-sm transition-colors hover:bg-bms-slate-100 focus-bms"
              >
                Solicitar propuesta
              </Link>
              <a
                href="#contacto"
                className="inline-flex h-12 items-center justify-center rounded-bms-md border border-white/30 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-bms"
              >
                Hablar con un asesor
              </a>
            </div>

            <p className="mt-5 text-xs text-bms-slate-400">
              Modelo: licencia + mantenimiento. Cotización personalizada según
              alcance, módulos requeridos e integraciones.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li
                key={f.title}
                className="rounded-bms-lg border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-bms-md bg-bms-blue-500/20 text-bms-blue-300"
                  aria-hidden="true"
                >
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bms-slate-300">
                  {f.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
