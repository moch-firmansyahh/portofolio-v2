import SmoothScroll from "@/components/effects/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import MeasurementRuler from "@/components/layout/MeasurementRuler";
import Footer from "@/components/layout/Footer";
import ProjectsHeroSection from "@/components/projects/ProjectsHeroSection";
import ProjectsCatalogSection from "@/components/projects/ProjectsCatalogSection";
import ProjectStatsBanner from "@/components/projects/ProjectStatsBanner";
import LetsTalkSection from "@/components/home/LetsTalkSection";
import ContactSection from "@/components/home/ContactSection";
import { LanguageProvider } from "@/context/LanguageContext";
import { getProjects } from "@/services/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Archive — Moch. Firmansyah",
  description:
    "Explore the complete portfolio of web applications, full-stack systems, frontend engineering case studies, and modern UI/UX architectures by Moch. Firmansyah.",
};

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-white bg-blueprint-grid text-[#0F172A] relative selection:bg-neutral-900 selection:text-white">
          {/* Top Architectural Navbar & Measurement Ruler */}
          <Navbar />
          <MeasurementRuler position="top" />

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col bg-transparent">
            {/* 1. Projects Hero Header Section */}
            <ProjectsHeroSection />

            {/* 2. Interactive Projects Catalog (Filter, Search, Grid Cards) */}
            <ProjectsCatalogSection initialProjects={projects} />

            {/* 3. Engineering Specifications & Quality Standards Banner */}
            <ProjectStatsBanner />

            {/* 4. Let's Talk Section */}
            <LetsTalkSection />

            {/* 5. Contact & Footer Section */}
            <ContactSection />
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}
