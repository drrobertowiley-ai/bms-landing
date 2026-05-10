import type { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  ArrowRight,
  Rocket,
  CreditCard,
  Users,
  Lock,
  Database,
  MessageCircle,
  Factory,
  Boxes,
  ShoppingCart,
  Settings2,
  Briefcase,
} from "lucide-react";

const TITLE = "Centro de Ayuda — BMS";
const DESCRIPTION =
  "Guías, tutoriales y respuestas a las preguntas más frecuentes sobre la plataforma BMS.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ayuda" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/ayuda",
    siteName: "BMS · Business Management System",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Centro de Ayuda de BMS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/twitter-image.png"],
  },
};

const QUICK_LINKS = [
  {
    icon: Rocket,
    title: "Primeros pasos",
    description: "Configura tu cuenta y entra a la plataforma por primera vez.",
    href: "#primeros-pasos",
  },
  {
    icon: CreditCard,
    title: "Suscripción y pagos",
    description: "Cómo cambiar de plan, ver tus facturas o cancelar.",
    href: "#suscripcion",
  },
  {
    icon: Users,
    title: "Usuarios y permisos",
    description: "Invitar a tu equipo y definir qué puede ver cada quién.",
    href: "#usuarios",
  },
  {
    icon: Lock,
    title: "Seguridad",
    description: "MFA, política de contraseñas y bitácora de auditoría.",
    href: "#seguridad",
  },
  {
    icon: Database,
    title: "Datos y respaldos",
    description: "Cómo descargar snapshots y recuperar información.",
    href: "#respaldos",
  },
  {
    icon: MessageCircle,
    title: "Hablar con soporte",
    description: "Cuándo y cómo contactarnos según tu plan.",
    href: "#soporte",
  },
] as const;

const MODULES = [
  {
    icon: Factory,
    name: "Producción",
    items: [
      "Crear órdenes de producción",
      "Programar el plan de producción semanal",
      "Capturar avance con escáner QR",
      "Trazabilidad de lotes",
    ],
  },
  {
    icon: Boxes,
    name: "Materiales",
    items: [
      "Configurar el almacén multi-bodega",
      "Definir BOMs y conversiones de unidades",
      "Inventario inicial y ajustes",
    ],
  },
  {
    icon: Briefcase,
    name: "Compras",
    items: [
      "Dar de alta proveedores",
      "Crear y aprobar órdenes de compra",
      "Registrar recepciones (totales o parciales)",
      "Marcar pagos en CxP",
    ],
  },
  {
    icon: ShoppingCart,
    name: "Ventas & CRM",
    items: [
      "Pipeline de clientes y oportunidades",
      "Crear cotizaciones y pedidos",
      "Portal independiente para vendedores externos",
    ],
  },
  {
    icon: Settings2,
    name: "Gestión Operativa",
    items: [
      "Levantar no conformidades y CAPA",
      "Programar mantenimientos preventivos",
      "Estudios de tiempo e ingeniería de procesos",
    ],
  },
  {
    icon: Briefcase,
    name: "Administración",
    items: [
      "Alta de empleados y nóminas",
      "Control de finanzas y flujo de caja",
      "Reportes ejecutivos consolidados",
    ],
  },
] as const;

export default function AyudaPage() {
  return (
    <main className="bg-bms-slate-50 min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-white border-b border-bms-slate-200 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-bms-blue-50 text-bms-blue-600 mb-5">
            <HelpCircle className="h-7 w-7" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-bms-slate-900 sm:text-4xl">
            Centro de Ayuda
          </h1>
          <p className="mt-4 text-base text-bms-slate-600 sm:text-lg max-w-2xl mx-auto">
            Guías rápidas, tutoriales y respuestas para sacarle el máximo
            provecho a BMS. ¿No encuentras lo que buscas?{" "}
            <a
              href="mailto:contacto@bms.services"
              className="font-semibold text-bms-blue-600 hover:text-bms-blue-700"
            >
              Escríbenos
            </a>
            .
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-bms-slate-900 mb-6">
            Temas populares
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group rounded-xl border border-bms-slate-200 bg-white p-5 hover:border-bms-blue-200 hover:shadow-bms-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bms-blue-50 text-bms-blue-600 group-hover:bg-bms-blue-100">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-bms-slate-900">
                      {link.title}
                    </h3>
                    <p className="text-sm text-bms-slate-600 mt-1">
                      {link.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-bms-slate-400 group-hover:text-bms-blue-600 mt-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
          <Section id="primeros-pasos" title="Primeros pasos">
            <Step n={1} title="Crea tu cuenta">
              Desde <a href="https://bms.services/#precios" className="text-bms-blue-600 font-medium hover:underline">bms.services</a> elige tu plan y completa el wizard de 4 pasos: correo, módulos, datos de empresa y resumen.
            </Step>
            <Step n={2} title="Paga con Stripe">
              Stripe procesa el pago de forma segura. BMS no almacena tu tarjeta. Recibes la factura por correo automáticamente.
            </Step>
            <Step n={3} title="Activa tu cuenta con el correo">
              En tu bandeja recibirás un &quot;magic link&quot;. Click ahí, define tu contraseña, sube el logo de tu empresa (opcional) y entra a la plataforma.
            </Step>
            <Step n={4} title="Invita a tu equipo">
              Desde el menú <strong>Admin → Usuarios</strong>, agrega usuarios con rol y área. Cada usuario solo ve lo que su rol/área permite.
            </Step>
          </Section>

          <Section id="suscripcion" title="Suscripción y pagos">
            <Faq question="¿Cómo cambio de plan?">
              Desde el menú <strong>Admin → Suscripción</strong> abre el Portal del Cliente de Stripe. Ahí puedes hacer upgrade o downgrade. Los cambios prorratean automáticamente.
            </Faq>
            <Faq question="¿Dónde veo mis facturas?">
              Mismo lugar — Portal del Cliente de Stripe. Todas tus facturas están disponibles para descarga en PDF.
            </Faq>
            <Faq question="¿Cómo cancelo?">
              Desde el Portal del Cliente, click &quot;Cancelar suscripción&quot;. La cancelación toma efecto al final del período pagado. Tienes 30 días para descargar tus datos antes de la eliminación.
            </Faq>
            <Faq question="¿Aceptan facturación anual?">
              Sí. La facturación anual incluye 10% de descuento sobre la mensual. El cambio puedes hacerlo en cualquier momento.
            </Faq>
          </Section>

          <Section id="usuarios" title="Usuarios y permisos">
            <Faq question="¿Cuántos usuarios puedo tener?">
              Depende del plan: Microempresa hasta 5, PyME hasta 15, Empresa Grande hasta 30, Multiempresa ilimitado.
            </Faq>
            <Faq question="¿Qué roles existen?">
              <strong>Superadmin</strong>: control total de la empresa. <strong>Admin</strong>: gestiona usuarios y configuración. <strong>Usuario regular</strong>: acceso limitado por área asignada. <strong>Vendedor</strong>: solo el portal de ventas externas.
            </Faq>
            <Faq question="¿Qué son las áreas?">
              Las áreas (Producción, Almacén, Calidad, Ventas, Finanzas, RH, etc.) controlan qué módulos ve cada usuario por defecto. Un superadmin/admin las ignora.
            </Faq>
          </Section>

          <Section id="seguridad" title="Seguridad">
            <Faq question="¿Cómo activo MFA (autenticación de dos factores)?">
              Desde tu perfil → <strong>Seguridad</strong> → activa MFA. Te pedirá escanear un QR con Google Authenticator o similar.
            </Faq>
            <Faq question="¿Cuál es la política de contraseñas?">
              Mínimo 12 caracteres con mayúsculas, minúsculas, números y un símbolo. Las contraseñas se almacenan cifradas con bcrypt.
            </Faq>
            <Faq question="¿Cómo veo quién hizo qué?">
              Bitácora de auditoría disponible en <strong>Admin → Auditoría</strong>. Filtra por usuario, acción o período.
            </Faq>
          </Section>

          <Section id="respaldos" title="Datos y respaldos">
            <Faq question="¿Hacen respaldos automáticos?">
              Sí. Diarios cifrados, con retención de 30 días (Microempresa/PyME), 90 días (Empresa Grande) o 1 año (Multiempresa).
            </Faq>
            <Faq question="¿Cómo descargo mis datos?">
              Desde <strong>Admin → Datos</strong> puedes generar snapshots descargables (CSV / JSON) en cualquier momento.
            </Faq>
            <Faq question="¿Qué pasa con mis datos si cancelo?">
              Tienes 30 días para exportar todo. Pasado ese plazo, los eliminamos permanentemente conforme a nuestra <a href="/privacidad" className="text-bms-blue-600 font-medium hover:underline">Política de Privacidad</a>.
            </Faq>
          </Section>

          <Section id="modulos" title="Por módulo">
            <p className="text-bms-slate-600 mb-6">
              Guías rápidas de cada módulo. Esta sección irá creciendo con
              tutoriales más detallados.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MODULES.map((mod) => (
                <div
                  key={mod.name}
                  className="rounded-xl border border-bms-slate-200 bg-white p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bms-blue-50 text-bms-blue-600">
                      <mod.icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-bms-slate-900">{mod.name}</h3>
                  </div>
                  <ul className="space-y-1.5 text-sm text-bms-slate-700">
                    {mod.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="text-bms-blue-600 mt-0.5">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section id="soporte" title="Hablar con soporte">
            <p className="text-bms-slate-700 mb-4">
              Por correo a{" "}
              <a
                href="mailto:contacto@bms.services"
                className="text-bms-blue-600 font-medium hover:underline"
              >
                contacto@bms.services
              </a>
              . Tiempos de respuesta por plan están definidos en nuestro{" "}
              <a
                href="/sla"
                className="text-bms-blue-600 font-medium hover:underline"
              >
                Acuerdo de Nivel de Servicio (SLA)
              </a>
              .
            </p>
            <p className="text-sm text-bms-slate-600">
              Para emergencias en planes Empresa Grande / Multiempresa,
              contacta directo a tu gerente de cuenta.
            </p>
          </Section>
        </div>
      </section>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-2xl font-bold tracking-tight text-bms-slate-900 mb-5">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-bms-slate-200 bg-white p-5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bms-blue-600 text-white font-bold">
        {n}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-bms-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-bms-slate-700 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function Faq({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-xl border border-bms-slate-200 bg-white">
      <summary className="cursor-pointer px-5 py-4 font-semibold text-bms-slate-900 marker:hidden flex items-center justify-between">
        {question}
        <ArrowRight className="h-4 w-4 text-bms-slate-400 transition-transform group-open:rotate-90" />
      </summary>
      <div className="px-5 pb-5 text-sm text-bms-slate-700 leading-relaxed border-t border-bms-slate-100 pt-4">
        {children}
      </div>
    </details>
  );
}
