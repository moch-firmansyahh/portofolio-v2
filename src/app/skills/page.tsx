import SmoothScroll from "@/components/effects/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import MeasurementRuler from "@/components/layout/MeasurementRuler";
import WhatIDoSection from "@/components/skills/WhatIDoSection";
import ServicesSkillsSection from "@/components/skills/ServicesSkillsSection";
import CoreCapabilitiesSection from "@/components/skills/CoreCapabilitiesSection";
import LetsTalkSection from "@/components/home/LetsTalkSection";
import ContactSection from "@/components/home/ContactSection";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & What I Do — Moch. Firmansyah",
  description: "What I do, design engineering capabilities, services, and creative solutions.",
};

export default function SkillsPage() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-white bg-blueprint-grid text-[#0F172A] relative selection:bg-neutral-900 selection:text-white">
          {/* Top Navigation & Architectural Ruler */}
          <Navbar />
          <MeasurementRuler position="top" />

          {/* Main Content */}
          <main className="flex-1 flex flex-col bg-transparent">
            {/* 1. What I Do Section */}
            <WhatIDoSection />

            {/* 2. My Skills Banner dengan Kipas Scroll-Driven */}
            <ServicesSkillsSection />

            {/* 3. Core Capabilities dengan 4 Kuadran Koordinat Interaktif */}
            <CoreCapabilitiesSection />

            {/* 4. Let's Talk Section */}
            <LetsTalkSection />

            {/* 5. Contact Section */}
            <ContactSection />
          </main>

          {/* Bottom Ruler Footer */}
          <MeasurementRuler position="bottom" />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}
