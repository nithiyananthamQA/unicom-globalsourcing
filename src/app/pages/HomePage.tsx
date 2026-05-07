import { Seo } from "../components/Seo";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { StatsSection } from "../components/StatsSection";
import { SustainabilitySection } from "../components/SustainabilitySection";
import { InitiativesSection } from "../components/InitiativesSection";
import { ManagementSection } from "../components/ManagementSection";
import { CertificationsSection } from "../components/CertificationsSection";

export function HomePage() {
  return (
    <>
      <Seo
        title="Strategic Sourcing & Supply Chain Partner"
        description="UNICOM GLOBALSOURCING (UGS) is a Coimbatore-based sourcing & supply chain partner connecting global buyers with India's premier textile manufacturers — across hospitality linens, garments and floor coverings."
        path="/"
      />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SustainabilitySection />
      <InitiativesSection />
      <ManagementSection />
      <CertificationsSection />
    </>
  );
}
