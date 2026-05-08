import { BmsLogo } from "@/components/bms-logo";

export function CoBrandingSection() {
  return (
    <section
      aria-labelledby="cobranding-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-bms-xl border border-bms-blue-100 bg-gradient-to-r from-bms-blue-50 to-white shadow-bms-sm">
          <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:p-12">
            {/* Visual */}
            <div className="flex items-center justify-center">
              <div className="flex w-full max-w-sm items-center justify-between gap-4 rounded-bms-lg border border-bms-slate-200 bg-white p-6 shadow-bms-sm">
                <BmsLogo
                  variant="dark"
                  withTagline={false}
                  className="h-9 w-auto"
                />
                <div
                  aria-hidden="true"
                  className="h-px flex-1 bg-bms-slate-200"
                />
                {/* Placeholder logo cliente */}
                <div
                  aria-label="Logo de tu empresa"
                  className="flex h-12 w-24 items-center justify-center rounded-bms-md border-2 border-dashed border-bms-slate-300 bg-bms-slate-50 text-[10px] font-medium uppercase tracking-bms-tagline text-bms-slate-400"
                >
                  Tu logo
                </div>
              </div>
            </div>

            {/* Texto */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-bms-tagline text-bms-blue-600">
                Co-branding
              </p>
              <h2
                id="cobranding-title"
                className="mt-3 text-balance text-2xl font-bold tracking-tight text-bms-slate-900 sm:text-3xl lg:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                Tu marca, tu plataforma
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-bms-slate-600">
                Sube el logo de tu empresa y aparecerá junto al de BMS en el
                sidebar y en los reportes PDF. Tus colaboradores ven tu marca
                cada día, no la de un proveedor genérico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
