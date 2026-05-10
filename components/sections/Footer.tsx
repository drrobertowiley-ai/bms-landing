import Link from "next/link";
import { Mail } from "lucide-react";
import { BmsLogo } from "@/components/bms-logo";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const PRODUCT_LINKS = [
  { href: "#producto", label: "Módulos" },
  { href: "#seguridad", label: "Seguridad" },
  { href: "#precios", label: "Precios" },
  { href: "/ayuda", label: "Centro de ayuda" },
  { href: "#faq", label: "Preguntas frecuentes" },
] as const;

const SECURITY_LINKS = [
  {
    href: "https://app.bms.services/api/security-policy/pdf",
    label: "Política de seguridad",
    external: true,
  },
  { href: "/terminos", label: "Términos del servicio", external: false },
  { href: "/privacidad", label: "Privacidad", external: false },
  { href: "/sla", label: "SLA", external: false },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      className="border-t border-bms-slate-200 bg-bms-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div className="col-span-2 lg:col-span-1">
            <BmsLogo
              variant="dark"
              withTagline={false}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bms-slate-600">
              Plataforma SaaS multi-tenant para administrar empresas
              completas. Hecha para crecer con tu operación.
            </p>
            <p className="mt-6 text-xs text-bms-slate-500">
              © {year} BMS · Business Management System.
              <br />
              Todos los derechos reservados.
            </p>
          </div>

          {/* Col 2: Producto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-bms-tagline text-bms-slate-900">
              Producto
            </h3>
            <ul className="mt-4 space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-bms-slate-600 transition-colors hover:text-bms-blue-700 focus-bms"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Seguridad */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-bms-tagline text-bms-slate-900">
              Seguridad y legal
            </h3>
            <ul className="mt-4 space-y-3">
              {SECURITY_LINKS.map((link) =>
                link.external ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-bms-slate-600 transition-colors hover:text-bms-blue-700 focus-bms"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-bms-slate-600 transition-colors hover:text-bms-blue-700 focus-bms"
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-bms-tagline text-bms-slate-900">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:contacto@bms.services"
                  className="inline-flex items-center gap-2 text-sm text-bms-slate-600 transition-colors hover:text-bms-blue-700 focus-bms"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  contacto@bms.services
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn (próximamente)"
                  className="inline-flex items-center gap-2 text-sm text-bms-slate-600 transition-colors hover:text-bms-blue-700 focus-bms"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm font-semibold text-bms-blue-700 transition-colors hover:text-bms-blue-600 focus-bms"
                >
                  Solicitar demo →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-bms-slate-200 pt-6 text-center">
          <p className="text-xs text-bms-slate-500">
            Hecho con cuidado en México · Desarrollado con Next.js + Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
