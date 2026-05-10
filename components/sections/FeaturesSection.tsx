import {
  Boxes,
  Briefcase,
  Factory,
  Settings2,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

interface SubFeature {
  name: string;
  comingSoon?: boolean;
}

interface CommercialModule {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  subFeatures: ReadonlyArray<SubFeature>;
}

const MODULES: ReadonlyArray<CommercialModule> = [
  {
    icon: Factory,
    name: "Producción",
    tagline: "Planta y manufactura",
    description:
      "Órdenes de producción, programación, captura en piso por QR y rastreo de lotes de extremo a extremo.",
    subFeatures: [
      { name: "Producción" },
      { name: "Planeación" },
      { name: "Escáner QR" },
      { name: "Trazabilidad" },
    ],
  },
  {
    icon: Boxes,
    name: "Materiales",
    tagline: "Inventario y compras",
    description:
      "Almacén multi-bodega, BOMs, conversión de unidades, proveedores y órdenes de compra en un solo flujo.",
    subFeatures: [
      { name: "Almacén" },
      { name: "Materiales" },
      { name: "Compras" },
    ],
  },
  {
    icon: ShoppingCart,
    name: "Ventas & CRM",
    tagline: "Comercial y clientes",
    description:
      "Pipeline de clientes, cotizaciones, pedidos y portal independiente para tus vendedores externos.",
    subFeatures: [
      { name: "Ventas" },
      { name: "Portal Vendedor" },
    ],
  },
  {
    icon: Settings2,
    name: "Gestión Operativa",
    tagline: "Calidad, mantenimiento y procesos",
    description:
      "SGC con no conformidades y CAPA, mantenimiento de equipos e ingeniería de procesos para mejora continua.",
    subFeatures: [
      { name: "Calidad & SGC" },
      { name: "Mantenimiento" },
      { name: "Ingeniería de Procesos" },
    ],
  },
  {
    icon: Briefcase,
    name: "Administración",
    tagline: "Personal, nóminas y finanzas",
    description:
      "Recursos humanos, nóminas timbrables, contabilidad, flujo de caja y reportes ejecutivos consolidados.",
    subFeatures: [
      { name: "Recursos Humanos" },
      { name: "Nóminas" },
      { name: "Finanzas" },
      { name: "Reportes Ejecutivos" },
    ],
  },
];

export function FeaturesSection() {
  return (
    <section
      id="producto"
      aria-labelledby="features-title"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-bms-tagline text-bms-blue-600">
            Producto
          </p>
          <h2
            id="features-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-bms-slate-900 sm:text-4xl lg:text-5xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            Una plataforma. Cinco módulos. Todo conectado.
          </h2>
          <p className="mt-4 text-pretty text-base text-bms-slate-600 sm:text-lg">
            Cada módulo conversa con los demás. Cuando ventas crea un pedido,
            almacén lo ve. Cuando producción consume material, finanzas lo
            registra. Una sola fuente de verdad.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {MODULES.map((mod) => (
            <li key={mod.name} className="flex">
              <article className="group flex h-full w-full flex-col rounded-bms-lg border border-bms-slate-200 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-bms-blue-100 hover:shadow-bms-lg">
                <div className="flex items-start gap-4">
                  <div
                    className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-bms-md bg-bms-blue-50 text-bms-blue-700 transition-colors group-hover:bg-bms-blue-100"
                    aria-hidden="true"
                  >
                    <mod.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-bms-slate-900">
                      {mod.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-bms-blue-600">
                      {mod.tagline}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-bms-slate-600">
                  {mod.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-bms-slate-100 pt-5">
                  {mod.subFeatures.map((sf) => (
                    <li
                      key={sf.name}
                      className={[
                        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                        sf.comingSoon
                          ? "bg-bms-slate-100 text-bms-slate-500"
                          : "bg-bms-blue-50 text-bms-blue-800",
                      ].join(" ")}
                    >
                      {sf.name}
                      {sf.comingSoon && (
                        <span className="text-[10px] font-semibold uppercase tracking-wide text-bms-slate-500">
                          · Próximamente
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
