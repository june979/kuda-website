import HeroSection from "@/components/sections/hero-section";
import IntroSection from "@/components/sections/intro-section";
import BackgroundSection from "@/components/sections/background-section";
import RoleSection from "@/components/sections/role-section";
import BenefitsSection from "@/components/sections/benefits-section";
import DealerPassSection from "@/components/sections/dealerpass-section";
import PartnersSection from "@/components/sections/partners-section";
import ContactSection from "@/components/sections/contact-section";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <BackgroundSection />
        <RoleSection />
        <BenefitsSection />
        <DealerPassSection />
        <PartnersSection />
        <ContactSection />
      </main>
    </div>
  );
}
