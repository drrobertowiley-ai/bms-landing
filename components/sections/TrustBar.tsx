const STACK = [
  "Next.js",
  "Vercel",
  "Neon Postgres",
  "Prisma",
  "TypeScript",
] as const;

export function TrustBar() {
  return (
    <section
      aria-label="Tecnologías que usamos"
      className="border-y border-bms-slate-100 bg-bms-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-3 lg:justify-between">
          <p className="text-xs font-medium uppercase tracking-bms-tagline text-bms-slate-500">
            Construido con tecnología de
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-10">
            {STACK.map((name) => (
              <li
                key={name}
                className="text-sm font-semibold tracking-tight text-bms-slate-400"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
