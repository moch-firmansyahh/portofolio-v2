import SmoothScroll from "@/components/effects/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import MeasurementRuler from "@/components/layout/MeasurementRuler";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/about/AboutSection";
import LetsTalkSection from "@/components/about/LetsTalkSection";
import ContactSection from "@/components/about/ContactSection";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Moch. Firmansyah",
  description: "Learn more about Moch. Firmansyah, design philosophy, story, and work experience timeline.",
};

export default function AboutPage() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-white bg-blueprint-grid text-[#0F172A] relative selection:bg-neutral-900 selection:text-white">
          <Navbar />
          <MeasurementRuler />
          <main className="flex-1 flex flex-col bg-transparent">
            <AboutSection />
            <LetsTalkSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}
