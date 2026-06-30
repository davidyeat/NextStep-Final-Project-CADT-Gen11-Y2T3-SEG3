import Hero from "../sections/Hero";
import StatsSection from "../sections/StatsSection";
import WhySection from "../sections/WhySection";
import FeaturedUniversity from "../sections/FeaturedUniversity";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] text-gray-900">
      <Hero />
      <StatsSection />
      <WhySection />
      <FeaturedUniversity />
    </main>
  );
}
