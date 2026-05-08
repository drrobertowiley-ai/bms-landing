import {
  Activity,
  Boxes,
  CheckCircle2,
  Factory,
  TrendingUp,
} from "lucide-react";

interface KpiCardProps {
  label: string;
  value: string;
  delta: string;
  positive?: boolean;
}

function KpiCard({ label, value, delta, positive = true }: KpiCardProps) {
  return (
    <div className="rounded-bms-md border border-bms-slate-200 bg-white p-3">
      <div className="text-[10px] font-medium uppercase tracking-wider text-bms-slate-500">
        {label}
      </div>
      <div className="mt-1 text-lg font-bold text-bms-slate-900">{value}</div>
      <div
        className={[
          "mt-0.5 flex items-center gap-1 text-[10px] font-medium",
          positive ? "text-bms-success" : "text-bms-warning",
        ].join(" ")}
      >
        <TrendingUp className="h-3 w-3" aria-hidden="true" />
        {delta}
      </div>
    </div>
  );
}

interface BarRowProps {
  label: string;
  value: number; /* 0..100 */
  hue: "primary" | "accent" | "navy";
}

function BarRow({ label, value, hue }: BarRowProps) {
  const color =
    hue === "primary"
      ? "bg-bms-blue-600"
      : hue === "accent"
        ? "bg-bms-blue-400"
        : "bg-bms-blue-900";
  return (
    <div className="grid grid-cols-[80px_1fr_36px] items-center gap-2">
      <span className="text-[11px] font-medium text-bms-slate-600">
        {label}
      </span>
      <div className="h-2 overflow-hidden rounded-full bg-bms-slate-100">
        <div
          className={["h-full rounded-full", color].join(" ")}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-right text-[11px] font-semibold tabular-nums text-bms-slate-900">
        {value}%
      </span>
    </div>
  );
}

/**
 * Mock estilizado de un dashboard BMS.
 * Construido 100% con CSS/SVG — cero imágenes, cero peso adicional.
 */
export function DashboardMock() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-xl"
    >
      {/* Glow */}
      <div
        className="absolute -inset-6 -z-10 rounded-bms-xl opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0) 100%)",
        }}
      />

      {/* Frame */}
      <div className="overflow-hidden rounded-bms-xl border border-bms-slate-200 bg-white shadow-bms-lg">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-bms-slate-100 bg-bms-slate-50 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-bms-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-bms-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-bms-slate-300" />
          </div>
          <div className="rounded-full bg-white px-3 py-0.5 text-[10px] font-medium text-bms-slate-500 ring-1 ring-bms-slate-200">
            app.bms.services / dashboard
          </div>
          <div className="h-2.5 w-2.5" />
        </div>

        {/* Body */}
        <div className="grid grid-cols-[1fr_2fr]">
          {/* Sidebar */}
          <aside className="border-r border-bms-slate-100 bg-bms-slate-50 p-3">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-bms-sm bg-bms-gradient">
                <span className="text-[11px] font-bold text-white">B</span>
              </div>
              <span className="text-xs font-semibold text-bms-slate-900">
                BMS
              </span>
            </div>
            <ul className="space-y-1">
              {[
                { icon: Activity, label: "Resumen", active: true },
                { icon: Boxes, label: "Almacén" },
                { icon: Factory, label: "Producción" },
                { icon: CheckCircle2, label: "Calidad" },
              ].map((item) => (
                <li
                  key={item.label}
                  className={[
                    "flex items-center gap-2 rounded-bms-sm px-2 py-1.5 text-[11px]",
                    item.active
                      ? "bg-white font-semibold text-bms-blue-700 shadow-bms-sm"
                      : "text-bms-slate-600",
                  ].join(" ")}
                >
                  <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main */}
          <main className="space-y-3 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-bms-slate-900">
                Operación · Hoy
              </h3>
              <span className="rounded-full bg-bms-blue-50 px-2 py-0.5 text-[10px] font-medium text-bms-blue-700">
                en vivo
              </span>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-3 gap-2">
              <KpiCard label="Órdenes" value="142" delta="+8.2%" />
              <KpiCard label="Calidad" value="98.4%" delta="+1.1%" />
              <KpiCard label="OTIF" value="94%" delta="+2.0%" />
            </div>

            {/* Bars */}
            <div className="rounded-bms-md border border-bms-slate-200 bg-white p-3">
              <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-bms-slate-500">
                Avance por línea
              </div>
              <div className="space-y-2">
                <BarRow label="Línea A" value={87} hue="primary" />
                <BarRow label="Línea B" value={64} hue="accent" />
                <BarRow label="Línea C" value={92} hue="navy" />
                <BarRow label="Línea D" value={48} hue="accent" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
