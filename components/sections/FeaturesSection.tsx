import {
  Boxes,
  Factory,
  CheckCircle2,
  Package,
  ShoppingCart,
  ShoppingBag,
  Users,
  Wallet,
  Wrench,
  LineChart,
  ScanLine,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: ReadonlyArray<Feature> = [
  {
    icon: Boxes,
    title: "Almacén",
    description:
      "Inventarios multi-bodega con kardex, lotes y reservas en tiempo real.",
  },
  {
    icon: Factory,
    title: "Producción",
    description:
      "Órdenes de manufactura, BOM y consumo de materiales por etapa.",
  },
  {
    icon: CheckCircle2,
    title: "Calidad",
    description:
      "Inspecciones, no conformidades y CAPA con evidencia digital.",
  },
  {
    icon: Package,
    title: "Materiales",
    description:
      "Planeación MRP simple, requisiciones y consumo trazado al lote.",
  },
  {
    icon: ShoppingCart,
    title: "Ventas",
    description:
      "Cotizaciones, pedidos y embarques conectados al inventario y al cliente.",
  },
  {
    icon: ShoppingBag,
    title: "Compras",
    description:
      "Órdenes de compra, recepción y comparativos de proveedores.",
  },
  {
    icon: Users,
    title: "Recursos Humanos",
    description:
      "Expedientes, asistencia y permisos con flujo de aprobación.",
  },
  {
    icon: Wallet,
    title: "Nóminas",
    description:
      "Cálculo, dispersión y recibos con conexión a finanzas y RH.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description:
      "Preventivo y correctivo por activo, con bitácora e historial.",
  },
  {
    icon: LineChart,
    title: "Finanzas",
    description:
      "Cuentas por cobrar, por pagar, conciliaciones y reportes ejecutivos.",
  },
  {
    icon: ScanLine,
    title: "Trazabilidad",
    description:
      "Del proveedor al cliente final, lote por lote, con un click.",
  },
  {
    icon: LineChart,
    title: "Reportes",
    description:
      "Tableros y exportables PDF/Excel personalizables por área.",
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
            Una plataforma. Once módulos. Cero silos.
          </h2>
          <p className="mt-4 text-pretty text-base text-bms-slate-600 sm:text-lg">
            Cada módulo conversa con los demás. Cuando ventas crea un pedido,
            almacén lo ve. Cuando producción consume material, finanzas lo
            registra. Una sola fuente de verdad.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {FEATURES.map((feature) => (
            <li key={feature.title}>
              <article className="group h-full rounded-bms-lg border border-bms-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-bms-blue-100 hover:shadow-bms-lg">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-bms-md bg-bms-blue-50 text-bms-blue-700 transition-colors group-hover:bg-bms-blue-100"
                  aria-hidden="true"
                >
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-bms-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bms-slate-600">
                  {feature.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
