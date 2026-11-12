import SmoothScroll from "@/components/effects/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import HomeSection from "@/components/home/HomeSection";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-white bg-blueprint-grid text-[#0F172A] relative selection:bg-neutral-900 selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content - Bundled into HomeSection */}
        <main className="flex-1 flex flex-col">
          <HomeSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
    </LanguageProvider>
  );
}
