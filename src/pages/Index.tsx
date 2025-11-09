import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import HighlightsSection from "@/components/HighlightsSection"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <HighlightsSection />
      </main>
    </div>
  );
};

export default Index;
