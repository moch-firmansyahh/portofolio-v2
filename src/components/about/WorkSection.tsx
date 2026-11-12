"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedCursorBadge from "@/components/about/AnimatedCursorBadge";

/* ─── Company Logos ─── */
function MeridianHealthLogo() {
  return (
    <div className="flex items-center gap-1 shrink-0">
      <div className="w-2.5 h-6 bg-[#F97316] rounded-xs -skew-x-18" />
      <div className="w-2.5 h-6 bg-[#F97316] rounded-xs -skew-x-18" />
      <div className="w-2.5 h-6 bg-[#F97316] rounded-xs -skew-x-18" />
    </div>
  );
}

function StyleBookLogo() {
  return (
    <div className="w-7 h-7 shrink-0 relative flex items-center justify-center">
      <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
        <path d="M7 6L21 6L14 14L7 6Z" fill="#3B82F6" />
        <path d="M7 22L21 22L14 14L7 22Z" fill="#2563EB" />
        <path d="M6 8L13 14L6 20V8Z" fill="#1D4ED8" />
      </svg>
    </div>
  );
}

function NorthlightLogo() {
  return (
    <div className="w-7 h-7 shrink-0 flex items-center justify-center">
      <svg viewBox="0 0 32 32" fill="none" stroke="#1F2937" strokeWidth="2.4" className="w-full h-full">
        <circle cx="16" cy="16" r="13" strokeDasharray="3 3" />
        <path d="M10 16c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z" />
        <path d="M16 10v12M10 16h12" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * 3. SECTION: WORK / EXPERIENCE (Timeline 1:1 with reference)
 */
const WorkSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function WorkSection(props, ref) {
    const { t } = useLanguage();

    return (
      <section
        id="experience"
        ref={ref}
        className="relative scroll-mt-24 pb-16"
        {...props}
      >
        {/* Cyan Canvas Selection Box (1:1 with reference) */}
        <div className="relative border-2 border-[#00C2FF] bg-white p-6 sm:p-10 md:p-12 shadow-sm">
          {/* 4 Corner Canvas Resize Handles */}
          <div className="w-2.5 h-2.5 bg-white border border-[#00C2FF] absolute -top-1.5 -left-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#00C2FF] absolute -top-1.5 -right-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#00C2FF] absolute -bottom-1.5 -left-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#00C2FF] absolute -bottom-1.5 -right-1.5 z-20" />

          {/* Selection Tag Badge at Top: WHAT DIVE INTO MY WORK (cyan 1:1) */}
          <div className="absolute -top-3.5 left-4 bg-[#00C2FF] text-black font-mono text-[11px] font-black px-2.5 py-0.5 tracking-wider uppercase select-none shadow-xs">
            {t("WHAT DIVE INTO MY WORK", "WHAT DIVE INTO MY WORK")}
          </div>

          {/* Section Header: Timeline */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-medium text-neutral-500 tracking-tight">
              {t("Timeline", "Linimasa")}
            </h2>
            <div className="w-full h-px bg-neutral-200 mt-4" />
          </div>

          {/* Timeline Items List */}
          <div className="flex flex-col gap-12 sm:gap-14">

            {/* ITEM 1: Meridian Health */}
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3.5 pb-10 border-b border-neutral-100 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <MeridianHealthLogo />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                  Meridian Health
                </h3>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-700 max-w-3xl">
                {t(
                  "Designing across scheduling, case management, treatment planning, and clinical documentation for mental health practices. The challenge is balancing what clinicians need with what administrators need—often very different things—while keeping everything HIPAA-compliant and actually usable.",
                  "Merancang alur penjadwalan, manajemen kasus, rencana perawatan, dan dokumentasi klinis untuk praktik kesehatan mental. Tantangannya adalah menyeimbangkan kebutuhan klinisi dengan administrator—yang seringkali sangat berbeda—sambil menjaga kepatuhan regulasi dan kenyamanan pakai."
                )}
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#A5F3FC] border border-[#67E8F9] rounded-md font-mono text-xs font-black text-neutral-900 tracking-wider">
                  <span className="text-sm">⚡</span>
                  SEP 2025 - CURRENT
                </span>
              </div>
            </motion.article>

            {/* ITEM 2: StyleBook with "MY WORK" cursor pill */}
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3.5 pb-10 border-b border-neutral-100 last:border-b-0 relative"
            >
              <div className="flex items-center gap-3">
                <StyleBookLogo />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                  StyleBook
                </h3>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-700 max-w-3xl">
                {t(
                  "Redesigned everything from appointment booking to inventory management for a salon management platform. Worked directly with salon owners and stylists to understand their workflows, then rebuilt features to match how they actually work instead of how we thought they worked.",
                  "Mendesain ulang seluruh sistem mulai dari pemesanan janji hingga manajemen inventaris untuk platform salon. Bekerja langsung dengan pemilik salon dan penata gaya untuk memahami alur kerja nyata mereka, lalu merombak fitur agar sesuai dengan cara kerja aktual mereka."
                )}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-800 rounded-md font-mono text-xs font-black text-neutral-900 tracking-wider">
                  <span className="inline-grid grid-cols-2 gap-0.5 w-2.5 h-2.5">
                    <span className="w-1 h-1 bg-neutral-900 rounded-xs" />
                    <span className="w-1 h-1 bg-neutral-900 rounded-xs" />
                    <span className="w-1 h-1 bg-neutral-900 rounded-xs" />
                    <span className="w-1 h-1 bg-neutral-900 rounded-xs" />
                  </span>
                  MAR 2024 - AUG 2025
                </span>

                <div className="relative pr-8">
                  <AnimatedCursorBadge
                    text={t("MY WORK", "MY WORK")}
                    bgColor="#00C2FF"
                    textColor="text-neutral-950"
                    className="absolute -top-3 sm:-top-4 right-0"
                    initialRotate={-10}
                  />
                </div>
              </div>
            </motion.article>

            {/* ITEM 3: Northlight Consulting */}
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3.5 pb-6"
            >
              <div className="flex items-center gap-3">
                <NorthlightLogo />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                  Northlight Consulting
                </h3>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-700 max-w-3xl">
                {t(
                  "Led design systems and engineering strategy across enterprise B2B products. Scaled modular UI libraries, reduced frontend technical debt, and collaborated closely with cross-functional teams to deliver rock-solid digital experiences.",
                  "Memimpin sistem desain dan strategi engineering pada berbagai produk B2B enterprise. Mengembangkan pustaka komponen UI modular, mengurangi technical debt frontend, dan berkolaborasi erat dengan tim lintas fungsi untuk menghadirkan pengalaman digital yang solid."
                )}
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-300 rounded-md font-mono text-xs font-bold text-neutral-700 tracking-wider">
                  JAN 2022 - MAR 2024
                </span>
              </div>
            </motion.article>

          </div>
        </div>
      </section>
    );
  }
);

export default WorkSection;
