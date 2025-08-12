import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import PortfolioSection from "@/components/sections/PortfolioSection";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <PortfolioSection />
      </main>
      <AppFooter />
    </div>
  );
}
