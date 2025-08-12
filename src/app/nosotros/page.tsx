import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import AboutUsSection from "@/components/sections/AboutUsSection";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <AboutUsSection />
      </main>
      <AppFooter />
    </div>
  );
}
