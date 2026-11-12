import SmoothScroll from "@/components/effects/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import MeasurementRuler from "@/components/layout/MeasurementRuler";
import Footer from "@/components/layout/Footer";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactFAQSection from "@/components/contact/ContactFAQSection";
import { LanguageProvider } from "@/context/LanguageContext";
import { getProfile } from "@/services/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Transmission — Moch. Firmansyah",
  description:
    "Get in touch with Moch. Firmansyah for web development projects, front-end engineering, full-stack consulting, and collaboration opportunities.",
};

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const profile = await getProfile();

  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-white bg-blueprint-grid text-[#0F172A] relative selection:bg-neutral-900 selection:text-white">
          {/* Top Architectural Navbar & Single Measurement Ruler */}
          <Navbar />
          <MeasurementRuler position="top" />

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col bg-transparent">
            {/* 1. Contact Hero with 1:1 Vector Typography, Live Clock & Direct Email Pill */}
            <ContactHeroSection />

            {/* 2. Interactive Transmission Dispatch Form & Channel Terminal */}
            <ContactFormSection
              userEmail={profile.email}
              userPhone={profile.phone}
              githubUrl={profile.socialLinks?.github}
              linkedinUrl={profile.socialLinks?.linkedin}
              instagramUrl={profile.socialLinks?.instagram}
              tiktokUrl={profile.socialLinks?.tiktok}
            />

            {/* 3. Frequently Asked Questions */}
            <ContactFAQSection />
          </main>

          {/* Architectural Footer (includes single bottom MeasurementRuler) */}
          <Footer />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}