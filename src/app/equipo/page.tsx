import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import TeamSection from "@/components/sections/TeamSection";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <TeamSection displayMode="grid" />
      </main>
      <AppFooter />
    </div>
  );
}
