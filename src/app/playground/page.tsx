import SmoothScroll from "@/components/effects/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import MeasurementRuler from "@/components/layout/MeasurementRuler";
import Footer from "@/components/layout/Footer";
import PlaygroundContainer from "@/components/playground/PlaygroundContainer";
import LetsTalkSection from "@/components/home/LetsTalkSection";
import ContactSection from "@/components/home/ContactSection";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground & Motion Arcade — Moch. Firmansyah",
  description:
    "An interactive visual physics arcade powered by Framer Motion gestures, layout transitions, spring physics, and Web Audio API synthesizer mini-games.",
};

export const dynamic = "force-dynamic";

export default function PlaygroundPage() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-white bg-blueprint-grid text-[#0F172A] relative selection:bg-neutral-900 selection:text-white">
          {/* Top Architectural Navbar & Single Measurement Ruler */}
          <Navbar />
          <MeasurementRuler position="top" />

          {/* Main Playground Content */}
          <main className="flex-1 flex flex-col bg-transparent">
            <PlaygroundContainer />

            {/* Let's Talk Section */}
            <LetsTalkSection />

            {/* Contact Section */}
            <ContactSection />
          </main>

          {/* Architectural Footer (includes single bottom MeasurementRuler) */}
          <Footer />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}