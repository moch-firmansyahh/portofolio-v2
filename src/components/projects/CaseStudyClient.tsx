"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Globe,
  Code2,
  ShieldCheck,
  Cpu,
  BookmarkCheck,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/types/project";
import { JetBrains_Mono, Inter_Tight } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-cs-mono",
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-cs-sans",
  display: "swap",
});

const PILL_CLIP = "polygon(0 0, 2.4em 0, 3em 0.9em, 100% 0.9em, 100% 100%, 0 100%)";
const FALLBACK_IMAGE = "/projects/manajemen-kontrakan.png";

interface CaseStudyClientProps {
  project: Project;
  otherProjects: Project[];
}

export default function CaseStudyClient({ project, otherProjects }: CaseStudyClientProps) {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const displayImage = imgError
    ? FALLBACK_IMAGE
    : project.image || FALLBACK_IMAGE;

  // 3D Perspective Tilt for Showcase Frame
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useSpring(useTransform(cardY, [-0.5, 0.5], [4, -4]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(cardX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 250,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    cardX.set(xPct);
    cardY.set(yPct);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16 ${mono.variable} ${sans.variable}`}>
      {/* ── 1. Top Breadcrumb & Back Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-black"
      >
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-black border-2 border-black font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#000] hover:bg-[#00C2FF] transition-all group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>{t("BACK TO ARCHIVE", "KEMBALI KE ARSIP")}</span>
            </Link>
          </motion.div>

          <span className="text-neutral-400 font-mono text-xs hidden sm:inline">/</span>

          <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-600 hidden sm:inline">
            CASE STUDY // {project.category || "WEB APP"}
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs font-bold">
          <div className="flex items-center gap-2 px-3 py-1 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="uppercase text-[11px]">STATUS: PRODUCTION LIVE</span>
          </div>
          <span className="px-2.5 py-1 bg-[#EDB22E] border-2 border-black text-black text-[11px] font-black uppercase shadow-[2px_2px_0px_#000]">
            {project.year || "2026"}
          </span>
        </div>
      </motion.div>

      {/* ── 2. Project Hero Title & Summary ── */}
      <div className="space-y-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-start gap-2"
        >
          <span
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="text-2xl sm:text-3xl text-neutral-800 font-semibold tracking-wide"
          >
            {t("deep dive case study & architecture!", "studi kasus mendalam & arsitektur sistem!")}
          </span>
          <motion.svg
            viewBox="0 0 100 10"
            fill="none"
            className="w-24 sm:w-28 text-neutral-800 -mt-1"
            aria-hidden="true"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <path
              d="M2 3 Q 25 1, 50 3 T 98 2"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-neutral-900 leading-[1.02]"
        >
          {project.title}
        </motion.h1>

        {project.subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-sm sm:text-base md:text-lg font-medium text-neutral-700 max-w-3xl leading-relaxed"
          >
            {project.subtitle}
          </motion.p>
        )}

        {/* Action Buttons with spring hover */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          {project.demoUrl && project.demoUrl !== "#" && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-black text-white hover:bg-[#00C2FF] hover:text-black border-2 border-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] transition-all group"
            >
              <span>{t("VISIT LIVE APPLICATION", "KUNJUNGI WEBSITE LIVE")}</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          )}

          {project.githubUrl && project.githubUrl !== "#" && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-neutral-100 border-2 border-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] transition-all group"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{t("GITHUB REPOSITORY", "SOURCE CODE GITHUB")}</span>
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* ── 3. High-Contrast Showcase Frame with 3D Tilt ── */}
      <div style={{ perspective: 1000 }} className="mb-16">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative aspect-video w-full border-2 border-black bg-neutral-900 shadow-[8px_8px_0px_#000] overflow-hidden"
        >
          {/* 4 Corner handles */}
          <span className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 bg-white border-2 border-black z-20 pointer-events-none" />
          <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-white border-2 border-black z-20 pointer-events-none" />
          <span className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 bg-white border-2 border-black z-20 pointer-events-none" />
          <span className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-white border-2 border-black z-20 pointer-events-none" />

          <Image
            src={displayImage}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1400px) 100vw, 1200px"
            className="object-cover object-top transition-transform duration-500 ease-out"
            unoptimized={displayImage.startsWith("http")}
            onError={() => setImgError(true)}
          />

          {/* Top Right File Meta Pill */}
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/90 text-white border border-white/20 px-3 py-1.5 font-mono text-xs tracking-wider uppercase backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#00C2FF]" />
            <span>[SYSTEM // PREVIEW_HD]</span>
          </div>

          {/* Bottom Left Category Clip */}
          {project.category && (
            <div className="absolute bottom-4 left-4">
              <span
                className="font-mono text-xs font-bold uppercase tracking-wider px-4 pb-1.5 pt-2.5 bg-black text-[#00C2FF] border border-white/20 shadow-lg inline-block"
                style={{ clipPath: PILL_CLIP }}
              >
                {project.category}
              </span>
            </div>
          )}
        </motion.div>
      </div>

      {/* ── 4. Main 12-Column Blueprint Content Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-20">
        {/* Left Column (8 cols): Overview, Features & Architecture */}
        <div className="lg:col-span-8 space-y-10">
          {/* Section: Overview & Problem Statement */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-6 sm:p-8 bg-white border-2 border-black shadow-[5px_5px_0px_#000]"
          >
            {/* Corner handles */}
            <span className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-white border border-black" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white border border-black" />
            <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white border border-black" />
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white border border-black" />

            <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">
              <Globe className="w-4 h-4 text-black" />
              <span>01 // {t("OVERVIEW & BACKGROUND", "LATAR BELAKANG & TUJUAN")}</span>
            </div>

            <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase text-neutral-900 mb-4">
              {t("Project Concept & Purpose", "Konsep & Tujuan Aplikasi")}
            </h2>

            <p className="font-sans text-base sm:text-lg text-neutral-700 leading-relaxed font-normal whitespace-pre-line">
              {project.longDescription || project.description}
            </p>
          </motion.section>

          {/* Section: Highlights & Key Capabilities */}
          {project.highlights && project.highlights.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-6 sm:p-8 bg-white border-2 border-black shadow-[5px_5px_0px_#000]"
            >
              {/* Corner handles */}
              <span className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-white border border-black" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white border border-black" />
              <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white border border-black" />
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white border border-black" />

              <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">
                <Layers className="w-4 h-4 text-black" />
                <span>02 // {t("KEY CAPABILITIES & ARCHITECTURE", "ARSITEKTUR & FITUR UNGGULAN")}</span>
              </div>

              <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase text-neutral-900 mb-6">
                {t("System Implementations", "Implementasi Sistem & Fitur")}
              </h2>

              <div className="space-y-4">
                {project.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="p-4 sm:p-5 bg-neutral-50 border-2 border-black flex items-start gap-4 transition-colors hover:bg-[#00C2FF]/10 cursor-default"
                  >
                    <div className="w-6 h-6 rounded-xs bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00C2FF]" />
                    </div>
                    <span className="font-sans text-sm sm:text-base text-neutral-800 font-medium leading-relaxed">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Section: Security & Performance Specifications */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-6 sm:p-8 bg-neutral-900 text-white border-2 border-black shadow-[5px_5px_0px_#000]"
          >
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#00C2FF] uppercase tracking-widest mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>03 // {t("SECURITY & QUALITY METRICS", "METRIK KEAMANAN & KUALITAS")}</span>
            </div>

            <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase text-white mb-6">
              {t("Engineering Standards Applied", "Standar Rekayasa Perangkat Lunak")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-4 bg-neutral-800 border border-neutral-700 transition-colors hover:border-[#EDB22E]"
              >
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#EDB22E] mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>PERFORMANCE OPTIMIZED</span>
                </div>
                <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                  {t(
                    "Fluid server-side rendering, asset caching, code splitting, and zero layout shift.",
                    "Rendering cepat di server, caching aset efisien, code splitting, dan bebas layout shift."
                  )}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-4 bg-neutral-800 border border-neutral-700 transition-colors hover:border-[#10B981]"
              >
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#10B981] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>DEFENSIVE SECURITY</span>
                </div>
                <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                  {t(
                    "Strict schema validation, parameter binding, XSS filtering, and rate limiting.",
                    "Validasi skema input ketat, pencegahan injeksi SQL, pemfilteran XSS, dan pembatasan rate limit."
                  )}
                </p>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Right Column (4 cols): Metadata Sheet & Tech Stack */}
        <div className="lg:col-span-4 space-y-6">
          {/* Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_#000]"
          >
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4 pb-2 border-b-2 border-black">
              <Code2 className="w-4 h-4 text-black" />
              <span>{t("TECHNOLOGY STACK", "TEKNOLOGI DIGUNAKAN")}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="px-3 py-1.5 bg-neutral-100 text-neutral-900 border-2 border-black font-mono text-xs font-bold uppercase tracking-wide hover:bg-[#00C2FF] transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Project Metadata Table */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_#000]"
          >
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4 pb-2 border-b-2 border-black">
              <BookmarkCheck className="w-4 h-4 text-black" />
              <span>{t("PROJECT METADATA", "SPESIFIKASI PROYEK")}</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-neutral-200">
                <span className="text-neutral-500 uppercase">{t("CATEGORY", "KATEGORI")}</span>
                <span className="font-bold text-black">{project.category}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-200">
                <span className="text-neutral-500 uppercase">{t("YEAR", "TAHUN")}</span>
                <span className="font-bold text-black">{project.year || "2026"}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-200">
                <span className="text-neutral-500 uppercase">{t("DEVELOPER", "PENGEMBANG")}</span>
                <span className="font-bold text-black">Moch. Firmansyah</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-200">
                <span className="text-neutral-500 uppercase">{t("DEPLOYMENT", "DEPLOYMENT")}</span>
                <span className="font-bold text-black">Vercel Edge</span>
              </div>
              {project.metrics && (
                <div className="pt-2">
                  <span className="text-neutral-500 block mb-1.5 uppercase font-bold">{t("METRICS", "SOROTAN")}</span>
                  <span className="font-bold text-black bg-[#EDB22E]/30 p-2 border border-black block text-[11px]">
                    {project.metrics}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Architectural Sticky Note with Spring Drag Physics */}
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.25}
            initial={{ opacity: 0, rotate: 2 }}
            whileInView={{ opacity: 1, rotate: 1.5 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            whileDrag={{ scale: 1.05, rotate: -2, cursor: "grabbing" }}
            className="relative p-5 bg-[#F6DCA0] border-2 border-black shadow-[4px_4px_0px_#000] cursor-grab select-none group"
          >
            {/* Pin accent */}
            <div className="absolute -top-2.5 left-6 w-5 h-5 rounded-full bg-[#E11D5A] border-2 border-black flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>

            <p className="font-mono text-xs font-bold text-neutral-900 leading-relaxed mb-3">
              {t(
                "Built with continuous integration, modular architecture, and zero compromise on accessibility and mobile fluidity.",
                "Dibangun dengan arsitektur modular, integrasi berkelanjutan, serta komitmen penuh pada aksesibilitas dan kelancaran mobile."
              )}
            </p>
            <div className="font-mono text-[10px] text-neutral-700 flex justify-between border-t border-black/20 pt-2">
              <span>ENG VERIFIED</span>
              <span>2026</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── 5. Other Projects Navigator ── */}
      {otherProjects.length > 0 && (
        <section className="pt-12 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">
                NEXT CASE STUDIES
              </div>
              <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase text-neutral-900">
                {t("Explore Other Works", "Jelajahi Proyek Lainnya")}
              </h2>
            </div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-black hover:text-white border-2 border-black font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#000] transition-colors"
              >
                <span>{t("SEE ALL PROJECTS", "LIHAT SEMUA PROYEK")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((other) => (
              <motion.article
                key={other.id}
                whileHover="hover"
                initial="initial"
                className="relative bg-white border-2 border-black shadow-[6px_6px_0px_#000] flex flex-col justify-between group"
              >
                {/* Dynamic Corner handles on hover */}
                <motion.span
                  variants={{ initial: { x: 0, y: 0 }, hover: { x: -3, y: -3 } }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-black z-20 pointer-events-none"
                />
                <motion.span
                  variants={{ initial: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-black z-20 pointer-events-none"
                />
                <motion.span
                  variants={{ initial: { x: 0, y: 0 }, hover: { x: -3, y: 3 } }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-black z-20 pointer-events-none"
                />
                <motion.span
                  variants={{ initial: { x: 0, y: 0 }, hover: { x: 3, y: 3 } }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-black z-20 pointer-events-none"
                />

                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden border-b-2 border-black bg-neutral-900">
                  <Image
                    src={other.image || FALLBACK_IMAGE}
                    alt={other.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized={other.image?.startsWith("http")}
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black text-white font-mono text-[10px] uppercase font-bold border border-white/20">
                    {other.year || "2026"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans text-2xl font-bold text-neutral-900 mb-2">
                      {other.title}
                    </h3>
                    <p className="font-sans text-sm text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                      {other.subtitle || other.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {other.tags?.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] font-bold px-2 py-0.5 bg-neutral-100 border border-neutral-300 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-neutral-200 flex items-center justify-between">
                    <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.96 }}>
                      <Link
                        href={`/projects/${other.id}`}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white hover:bg-[#00C2FF] hover:text-black border-2 border-black font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000] transition-colors"
                      >
                        <span>{t("VIEW CASE STUDY", "LIHAT KASUS")}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>

                    {other.demoUrl && other.demoUrl !== "#" && (
                      <motion.a
                        href={other.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.94 }}
                        className="p-2 bg-white text-black hover:bg-neutral-100 border-2 border-black shadow-[2px_2px_0px_#000]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
