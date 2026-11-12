"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

/**
 * 1:1 Vector Typography for "WHAT"
 * Built with modular rounded pillars and crossbars.
 */
function WhatTypography() {
  return (
    <svg
      viewBox="0 0 320 80"
      className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto block select-none text-[#171717]"
      fill="currentColor"
      aria-label="WHAT"
    >
      {/* W (3 rounded pillars + bottom joins) */}
      <g transform="translate(4, 4)">
        <rect x="0" y="0" width="16" height="58" rx="8" />
        <rect x="28" y="0" width="16" height="58" rx="8" />
        <rect x="56" y="0" width="16" height="58" rx="8" />
        <path d="M 0 46 C 0 66 16 72 22 72 C 28 72 44 66 44 46 Z" />
        <path d="M 28 46 C 28 66 44 72 50 72 C 56 72 72 66 72 46 Z" />
      </g>

      {/* H (2 rounded pillars + middle crossbar) */}
      <g transform="translate(94, 4)">
        <rect x="0" y="0" width="16" height="72" rx="8" />
        <rect x="36" y="0" width="16" height="72" rx="8" />
        <rect x="12" y="27" width="28" height="18" rx="4" />
      </g>

      {/* A (Distinctive Modular Arch with circular cutout & loop arch base) */}
      <g transform="translate(162, 4)">
        <path
          fillRule="evenodd"
          d="M 12 0 H 38 C 50 0 56 6 56 16 C 56 24 50 28 42 32 C 37 34 36 36 38 40 C 46 44 56 52 56 62 V 64 C 56 69 51 72 46 72 H 36 C 31 72 28 69 28 64 V 54 C 28 48 23 45 18 45 C 13 45 8 48 8 54 V 64 C 8 69 5 72 0 72 H -4 C -9 72 -12 69 -12 64 V 62 C -12 52 -2 44 6 40 C 8 36 7 34 2 32 C -6 28 -12 24 -12 16 C -12 6 -6 0 6 0 Z M 16 16 C 16 20 19 23 23 23 C 27 23 30 20 30 16 C 30 12 27 9 23 9 C 19 9 16 12 16 16 Z"
          transform="translate(12, 0)"
        />
      </g>

      {/* T (Top bar + center pillar) */}
      <g transform="translate(242, 4)">
        <rect x="0" y="0" width="60" height="18" rx="9" />
        <rect x="21" y="16" width="18" height="56" rx="9" />
      </g>
    </svg>
  );
}

/**
 * 1:1 Vector Typography for "I DO"
 * Built with the EXACT SAME modular font family as "WHAT":
 * - I: Top horizontal rounded bar + center vertical pillar + bottom horizontal rounded bar + fillets.
 * - D: Left vertical rounded pillar + right vertical rounded pillar + top crossbar + bottom crossbar.
 * - O: Left vertical rounded pillar + right vertical rounded pillar + top crossbar + bottom crossbar.
 */
function IDoTypography() {
  return (
    <svg
      viewBox="0 0 190 76"
      className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto block select-none text-[#171717]"
      fill="currentColor"
      aria-label="I DO"
    >
      {/* Letter 'I' */}
      <g transform="translate(2, 2)">
        {/* Top horizontal rounded bar */}
        <rect x="0" y="0" width="44" height="16" rx="8" />
        {/* Center vertical rounded pillar */}
        <rect x="14" y="0" width="16" height="72" rx="8" />
        {/* Bottom horizontal rounded bar */}
        <rect x="0" y="56" width="44" height="16" rx="8" />
        {/* Smooth inner fillets connecting stem and bars */}
        <path d="M 14 20 C 14 16 8 16 0 16 H 14 Z" />
        <path d="M 30 20 C 30 16 36 16 44 16 H 30 Z" />
        <path d="M 14 52 C 14 56 8 56 0 56 H 14 Z" />
        <path d="M 30 52 C 30 56 36 56 44 56 H 30 Z" />
      </g>

      {/* Letter 'D' */}
      <g transform="translate(68, 2)">
        {/* Left vertical pillar */}
        <rect x="0" y="0" width="16" height="72" rx="8" />
        {/* Right vertical pillar */}
        <rect x="36" y="0" width="16" height="72" rx="8" />
        {/* Top crossbar */}
        <rect x="12" y="4" width="28" height="18" rx="4" />
        {/* Bottom crossbar */}
        <rect x="12" y="50" width="28" height="18" rx="4" />
      </g>

      {/* Letter 'O' */}
      <g transform="translate(136, 2)">
        {/* Left vertical pillar */}
        <rect x="0" y="0" width="16" height="72" rx="8" />
        {/* Right vertical pillar */}
        <rect x="36" y="0" width="16" height="72" rx="8" />
        {/* Top crossbar */}
        <rect x="12" y="4" width="28" height="18" rx="4" />
        {/* Bottom crossbar */}
        <rect x="12" y="50" width="28" height="18" rx="4" />
      </g>
    </svg>
  );
}

/**
 * 1:1 Left Icon Matching Reference:
 * Spool/Hourglass shape with flared top and bottom and convex circular middle bulb.
 */
function LeftIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor">
      {/* 1:1 Pixel-perfect match with reference: Atas flat, pinggang ramping, tengah melendung bulat keluar, bawah flat */}
      <path
        d="
          M 8 8
          H 56
          C 55 13, 52 17, 46 21
          C 54 24, 56 28, 56 32
          C 56 36, 54 40, 46 43
          C 52 47, 55 51, 56 56
          H 8
          C 9 51, 12 47, 18 43
          C 10 40, 8 36, 8 32
          C 8 28, 10 24, 18 21
          C 12 17, 9 13, 8 8
          Z
        "
      />
    </svg>
  );
}

/**
 * 1:1 Right Icon Matching Reference:
 * 4-blade geometric pinwheel with flat outer edges and curved arcs meeting at center.
 */
function RightIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor">
      {/* Top-Left Blade */}
      <path d="M 32 32 L 32 8 L 8 8 Q 12 26 32 32 Z" />
      {/* Top-Right Blade */}
      <path d="M 32 32 L 56 32 L 56 8 Q 38 12 32 32 Z" />
      {/* Bottom-Right Blade */}
      <path d="M 32 32 L 32 56 L 56 56 Q 52 38 32 32 Z" />
      {/* Bottom-Left Blade */}
      <path d="M 32 32 L 8 32 L 8 56 Q 26 52 32 32 Z" />
    </svg>
  );
}

/**
 * Color Themes for "satset" instant switching:
 * Theme 0 matches the reference image (warm yellow/cream background with gold icon).
 */
const COLOR_THEMES = [
  { bg: "#F6DE9D", icon: "#E2A426" }, // Reference yellow
  { bg: "#9FE5C3", icon: "#1B9E68" }, // Mint green
  { bg: "#F8B4D9", icon: "#DB2777" }, // Soft pink
  { bg: "#C4B5FD", icon: "#7C3AED" }, // Lavender
  { bg: "#BAE6FD", icon: "#0284C7" }, // Sky blue
  { bg: "#FED7AA", icon: "#EA580C" }, // Warm peach
];

export default function WhatIDoSection() {
  const { t } = useLanguage();
  const [themeIndex, setThemeIndex] = useState(0);

  // Satset: langsung berganti warna per detik tanpa transisi lambat
  useEffect(() => {
    const timer = setInterval(() => {
      setThemeIndex((prev) => (prev + 1) % COLOR_THEMES.length);
    }, 650);
    return () => clearInterval(timer);
  }, []);

  const currentTheme = COLOR_THEMES[themeIndex];

  const bioText = t(
    "I'm most energized by projects where I can dig into complex problems, collaborate with smart people, and ship things that genuinely improve someone's day.",
    "Saya paling bersemangat dengan proyek-proyek di mana saya dapat membedah masalah yang kompleks, berkolaborasi dengan orang-orang hebat, dan merilis karya yang benar-benar mempermudah hari seseorang."
  );

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Top: WHAT Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-1.5 sm:mb-2.5"
        >
          <WhatTypography />
        </motion.div>

        {/* Center: "I DO" Banner dengan 4 kotak pojok ala Figma dan jarak lebih nempel */}
        <div
          style={{
            backgroundColor: currentTheme.bg,
            color: currentTheme.icon,
          }}
          className="relative px-5 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 flex items-center justify-center gap-3 sm:gap-5 md:gap-7 select-none transition-none shadow-none"
        >
          {/* 4 Corner Square Handles (ala Figma / Referensi) */}
          <div
            style={{ backgroundColor: currentTheme.bg }}
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 border border-black absolute -top-1 -left-1 sm:-top-1.5 sm:-left-1.5 z-20 pointer-events-none"
          />
          <div
            style={{ backgroundColor: currentTheme.bg }}
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 border border-black absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 z-20 pointer-events-none"
          />
          <div
            style={{ backgroundColor: currentTheme.bg }}
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 border border-black absolute -bottom-1 -left-1 sm:-bottom-1.5 sm:-left-1.5 z-20 pointer-events-none"
          />
          <div
            style={{ backgroundColor: currentTheme.bg }}
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 border border-black absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 z-20 pointer-events-none"
          />

                    {/* Left Icon: Muter continuous tanpa delay, membesar saat lurus (1.06) & mengecil saat ga lurus (0.75) */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1.06, 0.75, 1.06, 0.75, 1.06],
            }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 3.5,
                ease: "linear",
              },
              scale: {
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
              },
            }}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 shrink-0 flex items-center justify-center origin-center"
          >
            <LeftIcon className="w-full h-full" />
          </motion.div>

          {/* Center: "I DO" Typography - Lebih nempel dan lebih besar */}
          <div className="shrink-0 flex items-center justify-center px-1 sm:px-2">
            <IDoTypography />
          </div>

                    {/* Right Icon: Muter continuous tanpa delay, membesar saat lurus (1.06) & mengecil saat ga lurus (0.75) */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1.06, 0.75, 1.06, 0.75, 1.06],
            }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 3.5,
                ease: "linear",
              },
              scale: {
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
              },
            }}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 shrink-0 flex items-center justify-center origin-center"
          >
            <RightIcon className="w-full h-full" />
          </motion.div>
        </div>

        {/* Description Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-10 max-w-xl text-sm sm:text-base md:text-lg text-neutral-800 font-medium leading-relaxed text-center px-4"
        >
          {bioText}
        </motion.p>

        {/* Action Button: CONTACT ME */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-10"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center bg-[#171717] hover:bg-black text-white pl-1.5 pr-5 py-1.5 rounded-none border border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
          >
            {/* Cyan badge with moving arrows */}
            <div className="w-8 h-8 bg-[#38BDF8] flex items-center justify-center mr-3 shrink-0 overflow-hidden">
              <motion.svg
                animate={{ x: [-2, 3, -2] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                className="w-4 h-4 text-black"
                fill="currentColor"
              >
                <path d="M 4 12 L 10 6 L 12 8 L 8 12 L 12 16 L 10 18 Z" />
                <path d="M 12 12 L 18 6 L 20 8 L 16 12 L 20 16 L 18 18 Z" />
              </motion.svg>
            </div>
            <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              {t("CONTACT ME", "HUBUNGI SAYA")}
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
