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
import { Footer } from "@/components/sections/Footer";

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
      </main>
      <Footer />
    </>
  );
}
