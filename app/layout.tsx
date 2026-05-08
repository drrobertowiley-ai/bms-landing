import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BMS · Plataforma SaaS para administrar tu empresa",
  description:
    "Multi-tenant, seguro y listo para tu negocio. 11 módulos integrados, MFA, auditoría completa y respaldos en 3 capas.",
  applicationName: "BMS · Business Management System",
  keywords: [
    "ERP",
    "SaaS",
    "multi-tenant",
    "administración empresarial",
    "México",
    "manufactura",
    "trazabilidad",
    "MFA",
  ],
  authors: [{ name: "BMS · Business Management System" }],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "BMS · Plataforma SaaS para administrar tu empresa",
    description:
      "Multi-tenant, seguro y listo para tu negocio. 11 módulos integrados, MFA, auditoría completa y respaldos en 3 capas.",
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className="antialiased bg-white text-bms-slate-900 font-bms-sans">
        {children}
      </body>
    </html>
  );
}
