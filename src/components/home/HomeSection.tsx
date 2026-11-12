"use client";

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import LetsTalkSection from "@/components/home/LetsTalkSection";
import ContactSection from "@/components/home/ContactSection";

/**
 * HomeSection
 * Menggabungkan seluruh alur utama beranda (Home Section):
 * 1. HeroSection (Header, role animation, headline, status)
 * 2. AboutSection (Bio, blueprint background, values)
 * 3. ProjectsSection (Sticky folder cards terkunci 1:1)
 * 4. LetsTalkSection (Karakter hijau organik dengan mata melirik & interaktif Figma highlight)
 * 5. ContactSection (Banner grafis dinamis 1:1, floating widget, tombol contact & modal)
 */
export default function HomeSection() {
  return (
    <div id="home-section" className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Featured Projects (1:1 Sticky Folder Cards Terkunci) */}
      <ProjectsSection />

      {/* 4. Let's Talk Section (1:1 Karakter Hijau Organik + Mata Bergerak + Klik Highlight) */}
      <LetsTalkSection />

      {/* 5. Contact Section (1:1 Dynamic Yellow/Brown Wave Banner & Interactive Modal) */}
      <ContactSection />
    </div>
  );
}
