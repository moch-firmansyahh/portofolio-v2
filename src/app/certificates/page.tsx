import SmoothScroll from "@/components/effects/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import MeasurementRuler from "@/components/layout/MeasurementRuler";
import Footer from "@/components/layout/Footer";
import CertificatesHeroSection from "@/components/certificates/CertificatesHeroSection";
import CertificatesGallerySection from "@/components/certificates/CertificatesGallerySection";
import LetsTalkSection from "@/components/home/LetsTalkSection";
import ContactSection from "@/components/home/ContactSection";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates & Honors — Moch. Firmansyah",
  description:
    "Explore the verified professional certifications, national hackathon awards, and engineering credentials of Moch. Firmansyah in Cloud Architecture, AI, Cyber Security, and Web Engineering.",
};

export const dynamic = "force-dynamic";

export default function CertificatesPage() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-white bg-blueprint-grid text-[#0F172A] relative selection:bg-neutral-900 selection:text-white">
          {/* Top Architectural Navbar & Single Measurement Ruler */}
          <Navbar />
          <MeasurementRuler position="top" />

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col bg-transparent">
            {/* 1. Hero with Modular Typography Title */}
            <CertificatesHeroSection />

            {/* 2. Interactive Filterable Certificate Cards Gallery */}
            <CertificatesGallerySection />

            {/* 3. Let's Talk Section */}
            <LetsTalkSection />

            {/* 4. Contact Section */}
            <ContactSection />
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}
