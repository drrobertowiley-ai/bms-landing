import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/analytics/Analytics";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bms.services";

const SITE_NAME = "BMS · Business Management System";

const DEFAULT_TITLE = "BMS · Plataforma SaaS para administrar tu empresa";
const DEFAULT_DESCRIPTION =
  "Multi-tenant, seguro y listo para tu negocio. 5 módulos comerciales integrados, MFA, auditoría completa y respaldos en 3 capas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · BMS",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "ERP",
    "SaaS",
    "multi-tenant",
    "administración empresarial",
    "México",
    "manufactura",
    "trazabilidad",
    "MFA",
    "BMS",
    "Business Management System",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: "EPX Solutions de México S.A. de C.V.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BMS · Plataforma SaaS multi-tenant para administrar tu empresa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BMS · Business Management System",
  legalName: "EPX Solutions de México S.A. de C.V.",
  url: SITE_URL,
  logo: `${SITE_URL}/bms-logo.png`,
  description: DEFAULT_DESCRIPTION,
  foundingLocation: {
    "@type": "Place",
    name: "Mexicali, Baja California, México",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Río Mocorito 801 L1",
    addressLocality: "Mexicali",
    addressRegion: "Baja California",
    postalCode: "21290",
    addressCountry: "MX",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contacto@bms.services",
      availableLanguage: ["es-MX", "es"],
      areaServed: "MX",
    },
  ],
  sameAs: [],
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
        {/* JSON-LD Organization para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSONLD),
          }}
        />
        {/* Tracking pre-cableado (solo se inyecta si las env vars existen) */}
        <Analytics />
      </body>
    </html>
  );
}
