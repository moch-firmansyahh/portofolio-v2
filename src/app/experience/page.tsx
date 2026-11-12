import SmoothScroll from "@/components/effects/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import MeasurementRuler from "@/components/layout/MeasurementRuler";
import Footer from "@/components/layout/Footer";
import ExperienceHeroSection from "@/components/experience/ExperienceHeroSection";
import ExperienceTimelineSection from "@/components/experience/ExperienceTimelineSection";
import ExperienceStickers from "@/components/experience/ExperienceStickers";
import LetsTalkSection from "@/components/home/LetsTalkSection";
import ContactSection from "@/components/home/ContactSection";
import { LanguageProvider } from "@/context/LanguageContext";
import { getExperiences } from "@/services/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Journey — Moch. Firmansyah",
  description:
    "Explore the learning roadmap, engineering labs, study groups, and hands-on web development journey of Moch. Firmansyah at Telkom University.",
};

export const dynamic = "force-dynamic";

export default async function ExperiencePage() {
  const experiences = await getExperiences();

  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-white bg-blueprint-grid text-[#0F172A] relative selection:bg-neutral-900 selection:text-white">
          {/* Top Architectural Navbar & Single Measurement Ruler */}
          <Navbar />
          <MeasurementRuler position="top" />

          {/* Main Experience Content Flow */}
          <main className="flex-1 flex flex-col bg-transparent">
            {/* 1. Hero with 1:1 Modular Typography, Cute Mascot & Draggable Sticky */}
            <ExperienceHeroSection />

            {/* 2. Interactive Metro / Blueprint Circuit Roadmap with Filters & Secret Dev Logs */}
            <ExperienceTimelineSection initialExperiences={experiences} />

            {/* 3. Playful Drag-and-Drop Milestone Sticker Board */}
            <ExperienceStickers />

            {/* 4. Let's Talk Section */}
            <LetsTalkSection />

            {/* 5. Contact Section */}
            <ContactSection />
          </main>

          {/* Footer (includes single bottom MeasurementRuler) */}
          <Footer />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}