import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import TopCars from "@/components/TopCars";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SearchSection />
      
      <div className="max-w-6xl mx-auto px-4">
        <TopCars />
        <hr className="my-12 border-gray-300" />
        <Services />
      </div>
    </main>
  );
}
