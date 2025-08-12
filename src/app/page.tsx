
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TeamSection from "@/components/sections/TeamSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import { Separator } from "@/components/ui/separator";
import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedTitle from "@/components/animations/AnimatedTitle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <HeroSection />

        <AnimatedSection>
          <PortfolioSection limit={3} showViewAllButton={true} />
        </AnimatedSection>
        
        <Separator className="my-8 md:my-12 container max-w-5xl mx-auto" />
        
        <AnimatedSection delay="200ms">
          <AboutUsSection />
        </AnimatedSection>
        
        <Separator className="my-8 md:my-12 container max-w-5xl mx-auto" />
        
        <AnimatedSection delay="200ms">
          <TeamSection />
        </AnimatedSection>
      </main>
      <AppFooter />
    </div>
  );
}
