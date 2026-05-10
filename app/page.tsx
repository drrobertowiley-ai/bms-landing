import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ServiciosEspecialesSection } from "@/components/sections/ServiciosEspecialesSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { PricingSection } from "@/components/sections/PricingSection";
import { OnPremiseSection } from "@/components/sections/OnPremiseSection";
import { CoBrandingSection } from "@/components/sections/CoBrandingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Footer } from "@/components/sections/Footer";

const TITLE = "BMS · Plataforma SaaS para administrar tu empresa";
const DESCRIPTION =
  "Multi-tenant, seguro y listo para tu negocio. 5 módulos comerciales integrados, MFA, auditoría completa y respaldos en 3 capas.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "BMS · Business Management System",
    title: TITLE,
    description: DESCRIPTION,
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
    title: TITLE,
    description: DESCRIPTION,
    images: ["/twitter-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <TrustBar />
        <FeaturesSection />
        <ServiciosEspecialesSection />
        <SecuritySection />
        <PricingSection />
        <OnPremiseSection />
        <CoBrandingSection />
        <FaqSection />
        <FinalCtaSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
