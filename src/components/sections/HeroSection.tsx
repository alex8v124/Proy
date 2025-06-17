import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-headline">
          Innovative Development, Tailored Solutions.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-body">
          All-in Dev Solutions crafts cutting-edge web and mobile applications,
          transforming your ideas into digital reality with expertise and passion.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="#portfolio">
              View Our Work <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
