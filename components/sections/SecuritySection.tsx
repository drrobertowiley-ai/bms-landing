import {
  ShieldCheck,
  KeyRound,
  ScrollText,
  DatabaseBackup,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PILLARS: ReadonlyArray<Pillar> = [
  {
    icon: ShieldCheck,
    title: "Multi-tenant aislado",
    description:
      "Cada empresa con sus propios datos. Aislamiento validado en cada deploy con tests automatizados que verifican que ningún tenant pueda leer información de otro.",
  },
  {
    icon: KeyRound,
    title: "MFA + lockout",
    description:
      "Doble factor TOTP compatible con Google Authenticator, política de contraseñas estricta y bloqueo automático de la cuenta tras 5 intentos fallidos.",
  },
  {
    icon: ScrollText,
    title: "Bitácora completa",
    description:
      "Cada login, cambio y acción crítica queda registrada con usuario, IP y timestamp. Visible para tu equipo de seguridad o auditoría externa.",
  },
  {
    icon: DatabaseBackup,
    title: "Respaldos en 3 capas",
    description:
      "Neon PITR continuo + snapshots manuales programados + backup interno cifrado. RTO ≤ 4h, RPO ≤ 24h. Restauración probada trimestralmente.",
  },
];

export function SecuritySection() {
  return (
    <section
      id="seguridad"
      aria-labelledby="security-title"
      className="relative overflow-hidden bg-bms-slate-900 py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0) 70%)",
        }}
      />
      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-bms-tagline text-bms-blue-400">
            Seguridad
          </p>
          <h2
            id="security-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            Seguridad de grado SaaS, sin compromisos
          </h2>
          <p className="mt-4 text-pretty text-base text-bms-slate-300 sm:text-lg">
            La confianza de tu empresa es nuestra prioridad. Cada decisión de
            arquitectura está pensada para proteger tus datos y los de tus
            clientes.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {PILLARS.map((pillar) => (
            <li key={pillar.title}>
              <article className="h-full rounded-bms-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-bms-md bg-bms-blue-600/20 text-bms-blue-400 ring-1 ring-bms-blue-400/30"
                  aria-hidden="true"
                >
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bms-slate-300">
                  {pillar.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://app.bms.services/api/security-policy/pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-bms-md bg-white px-6 text-base font-semibold text-bms-slate-900 shadow-bms-md transition-colors hover:bg-bms-slate-50 focus-bms"
          >
            Descargar política de seguridad (PDF)
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
