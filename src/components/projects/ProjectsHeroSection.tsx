"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-hero-mono",
  display: "swap",
});

/**
 * 1:1 Modular Vector Typography for "PROJECTS"
 * Consistent with WHAT, I DO, and CORE CAPABILITIES modular font system.
 */
function ProjectsTypography() {
  return (
    <svg
      viewBox="0 0 560 84"
      className="w-full max-w-[340px] sm:max-w-[480px] md:max-w-[620px] lg:max-w-[720px] h-auto block select-none text-[#171717]"
      fill="currentColor"
      aria-label="PROJECTS"
    >
      {/* P */}
      <g transform="translate(6, 4)">
        <rect x="0" y="0" width="15" height="74" rx="7.5" />
        <path d="M 12 0 H 34 C 44 0 52 7 52 20 C 52 33 44 40 34 40 H 12 Z M 15 15 H 32 C 34 15 36 17 36 20 C 36 23 34 25 32 25 H 15 Z" />
      </g>

      {/* R */}
      <g transform="translate(66, 4)">
        <rect x="0" y="0" width="15" height="74" rx="7.5" />
        <path d="M 12 0 H 34 C 44 0 52 7 52 20 C 52 33 44 40 34 40 H 12 Z M 15 15 H 32 C 34 15 36 17 36 20 C 36 23 34 25 32 25 H 15 Z" />
        <rect x="22" y="34" width="15" height="42" rx="7.5" transform="rotate(-26 22 34)" />
      </g>

      {/* O */}
      <g transform="translate(136, 4)">
        <rect x="0" y="0" width="15" height="74" rx="7.5" />
        <rect x="36" y="0" width="15" height="74" rx="7.5" />
        <rect x="10" y="0" width="32" height="16" rx="6" />
        <rect x="10" y="58" width="32" height="16" rx="6" />
      </g>

      {/* J */}
      <g transform="translate(202, 4)">
        <rect x="24" y="0" width="15" height="60" rx="7.5" />
        <path
          fillRule="evenodd"
          d="M 24 50 C 24 65 14 74 0 74 C -12 74 -20 66 -20 56 H -6 C -6 60 -2 62 2 62 C 6 62 10 58 10 50 V 0 H 24 Z"
          transform="translate(14, 0)"
        />
      </g>

      {/* E */}
      <g transform="translate(266, 4)">
        <rect x="0" y="0" width="15" height="74" rx="7.5" />
        <rect x="10" y="0" width="36" height="16" rx="7.5" />
        <rect x="10" y="29" width="28" height="16" rx="6" />
        <rect x="10" y="58" width="36" height="16" rx="7.5" />
      </g>

      {/* C */}
      <g transform="translate(332, 4)">
        <rect x="0" y="0" width="15" height="74" rx="7.5" />
        <rect x="10" y="0" width="36" height="16" rx="7.5" />
        <rect x="10" y="58" width="36" height="16" rx="7.5" />
      </g>

      {/* T */}
      <g transform="translate(398, 4)">
        <rect x="0" y="0" width="56" height="16" rx="8" />
        <rect x="20" y="14" width="16" height="60" rx="8" />
      </g>

      {/* S */}
      <g transform="translate(468, 4)">
        <path
          fillRule="evenodd"
          d="M 12 0 H 38 C 48 0 52 6 52 16 H 38 C 38 14 36 12 32 12 H 16 C 12 12 10 14 10 18 C 10 24 16 26 28 30 C 44 34 52 40 52 54 C 52 66 44 74 30 74 H 8 C -2 74 -6 68 -6 56 H 8 C 8 60 12 62 18 62 H 30 C 34 62 38 60 38 54 C 38 48 32 46 22 42 C 8 38 0 32 0 18 C 0 6 8 0 20 0 Z"
          transform="translate(4, 0)"
        />
      </g>
    </svg>
  );
}

export default function ProjectsHeroSection() {
  const { t } = useLanguage();

  return (
    <section className={`relative pt-12 pb-14 sm:pt-16 sm:pb-20 overflow-hidden ${mono.variable}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center text-center">
        {/* 1. Handwritten Accent Tag with SVG sketch */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 sm:mb-5 flex flex-col items-center"
        >
          <span
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="text-2xl sm:text-3xl md:text-4xl text-neutral-800 font-semibold tracking-wide"
          >
            {t("archive & selected works!", "arsip & koleksi proyek pilihan!")}
          </span>
          <motion.svg
            viewBox="0 0 120 12"
            fill="none"
            className="mt-1 w-24 sm:w-32 text-neutral-800"
            aria-hidden="true"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <path
              d="M3 4 Q 30 1, 60 4 T 117 3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M10 9 Q 36 7, 70 9 T 110 8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>

        {/* 2. Modular Vector Typography: PROJECTS with spring hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 280, damping: 20 }}
          className="flex justify-center w-full my-3 sm:my-5 cursor-default select-none"
        >
          <ProjectsTypography />
        </motion.div>

        {/* 3. Architectural Sticky Note with Spring Drag Physics */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.25}
          initial={{ opacity: 0, rotate: -4, y: 16 }}
          animate={{ opacity: 1, rotate: -1.5, y: 0 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          whileDrag={{ scale: 1.06, rotate: 2, cursor: "grabbing" }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="relative mt-8 sm:mt-12 max-w-md bg-[#F6DCA0] border-2 border-black p-4 sm:p-5 text-left shadow-[5px_5px_0px_#000] cursor-grab select-none group"
        >
          {/* Pin accent on sticky note */}
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#E11D5A] border-2 border-black shadow-xs flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>

          {/* Interactive small caveat drag badge */}
          <span
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="absolute -top-5 right-2 text-xs text-neutral-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {t("pull me!", "tarik saya!")} ↗
          </span>

          <p className="font-mono text-xs sm:text-sm font-semibold text-neutral-900 leading-relaxed">
            {t(
              "Every project is crafted with high attention to user interface details, strict security validation, and fluid Framer Motion animations.",
              "Setiap proyek dibangun dengan presisi antarmuka tinggi, validasi keamanan ketat, serta animasi interaktif Framer Motion yang mulus."
            )}
          </p>

          <div className="mt-3 pt-2 border-t border-black/20 flex items-center justify-between font-mono text-[11px] text-neutral-700">
            <span>Moch. Firmansyah</span>
            <span>ENG // 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
