import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <HeroSection />
        <PortfolioSection />
        <Separator className="my-8 md:my-12 container max-w-5xl mx-auto" />
        <AboutUsSection />
        <Separator className="my-8 md:my-12 container max-w-5xl mx-auto" />
        <TeamSection />
        <Separator className="my-8 md:my-12 container max-w-5xl mx-auto" />
        <ContactSection />
      </main>
      <AppFooter />
    </div>
  );
}
