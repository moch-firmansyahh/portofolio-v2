import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SmoothScroll from "@/components/effects/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import MeasurementRuler from "@/components/layout/MeasurementRuler";
import Footer from "@/components/layout/Footer";
import LetsTalkSection from "@/components/home/LetsTalkSection";
import ContactSection from "@/components/home/ContactSection";
import CaseStudyClient from "@/components/projects/CaseStudyClient";
import { LanguageProvider } from "@/context/LanguageContext";
import { getProjectById, getProjects } from "@/services/portfolio";

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found | Moch. Firmansyah",
    };
  }

  return {
    title: `${project.title} — Case Study | Moch. Firmansyah`,
    description: project.subtitle || project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  const allProjects = await getProjects();
  const otherProjects = allProjects.filter((p) => p.id !== project.id);

  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-white bg-blueprint-grid text-[#0F172A] relative selection:bg-neutral-900 selection:text-white">
          {/* Top Architectural Navbar & Single Ruler */}
          <Navbar />
          <MeasurementRuler position="top" />

          {/* Main Case Study Content */}
          <main className="flex-1 flex flex-col bg-transparent">
            <CaseStudyClient project={project} otherProjects={otherProjects} />

            {/* Let's Talk & Contact Sections */}
            <LetsTalkSection />
            <ContactSection />
          </main>

          {/* Footer (Renders exactly one measurement ruler consistently) */}
          <Footer />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}
