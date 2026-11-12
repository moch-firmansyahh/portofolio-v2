"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-exp-mono",
  display: "swap",
});

/**
 * 1:1 Modular Vector Typography for "EXPERIENCE"
 * Matching the exact geometric modular font family across the portfolio.
 */
function ExperienceTypography() {
  return (
    <svg
      viewBox="0 0 584 84"
      className="w-full max-w-[340px] sm:max-w-[480px] md:max-w-[620px] lg:max-w-[740px] h-auto block select-none text-[#171717] mx-auto"
      fill="currentColor"
      aria-label="EXPERIENCE"
    >
      {/* E */}
      <g transform="translate(6, 4)">
        <rect x="0" y="0" width="14" height="74" rx="7" />
        <rect x="10" y="0" width="34" height="15" rx="7" />
        <rect x="10" y="29" width="26" height="15" rx="6" />
        <rect x="10" y="59" width="34" height="15" rx="7" />
      </g>

      {/* X */}
      <g transform="translate(64, 4)">
        <rect x="18" y="0" width="14" height="74" rx="7" transform="rotate(28 25 37)" />
        <rect x="18" y="0" width="14" height="74" rx="7" transform="rotate(-28 25 37)" />
      </g>

      {/* P */}
      <g transform="translate(126, 4)">
        <rect x="0" y="0" width="14" height="74" rx="7" />
        <path d="M 10 0 H 30 C 40 0 48 7 48 20 C 48 33 40 40 30 40 H 10 Z M 14 15 H 28 C 30 15 32 17 32 20 C 32 23 30 25 28 25 H 14 Z" />
      </g>

      {/* E */}
      <g transform="translate(186, 4)">
        <rect x="0" y="0" width="14" height="74" rx="7" />
        <rect x="10" y="0" width="34" height="15" rx="7" />
        <rect x="10" y="29" width="26" height="15" rx="6" />
        <rect x="10" y="59" width="34" height="15" rx="7" />
      </g>

      {/* R */}
      <g transform="translate(244, 4)">
        <rect x="0" y="0" width="14" height="74" rx="7" />
        <path d="M 10 0 H 30 C 40 0 48 7 48 20 C 48 33 40 40 30 40 H 10 Z M 14 15 H 28 C 30 15 32 17 32 20 C 32 23 30 25 28 25 H 14 Z" />
        <rect x="20" y="34" width="14" height="42" rx="7" transform="rotate(-26 20 34)" />
      </g>

      {/* I */}
      <g transform="translate(306, 4)">
        <rect x="0" y="0" width="36" height="15" rx="7.5" />
        <rect x="11" y="10" width="14" height="54" rx="7" />
        <rect x="0" y="59" width="36" height="15" rx="7.5" />
      </g>

      {/* E */}
      <g transform="translate(352, 4)">
        <rect x="0" y="0" width="14" height="74" rx="7" />
        <rect x="10" y="0" width="34" height="15" rx="7" />
        <rect x="10" y="29" width="26" height="15" rx="6" />
        <rect x="10" y="59" width="34" height="15" rx="7" />
      </g>

      {/* N */}
      <g transform="translate(410, 4)">
        <rect x="0" y="0" width="14" height="74" rx="7" />
        <rect x="36" y="0" width="14" height="74" rx="7" />
        <path d="M 10 0 L 38 60 H 42 V 74 L 14 14 H 10 Z" />
      </g>

      {/* C */}
      <g transform="translate(476, 4)">
        <rect x="0" y="0" width="14" height="74" rx="7" />
        <rect x="10" y="0" width="34" height="15" rx="7" />
        <rect x="10" y="59" width="34" height="15" rx="7" />
      </g>

      {/* E */}
      <g transform="translate(534, 4)">
        <rect x="0" y="0" width="14" height="74" rx="7" />
        <rect x="10" y="0" width="34" height="15" rx="7" />
        <rect x="10" y="29" width="26" height="15" rx="6" />
        <rect x="10" y="59" width="34" height="15" rx="7" />
      </g>
    </svg>
  );
}

/**
 * Playful Interactive Mascot: "Byte" the Blueprint Companion Robot
 * - Eyes follow the mouse cursor with smooth spring easing
 * - Blinks naturally
 * - Speech bubble with hilarious / inspiring dev quotes that change on click!
 * - Bounces when clicked
 */
function CuteMascot() {
  const { t } = useLanguage();
  const mascotRef = useRef<HTMLDivElement>(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    t("Beep boop! Always learning & leveling up!", "Beep boop! Selalu belajar & naik level!"),
    t("Powered by 99% Curiosity & Coffee ☕", "Ditenagai 99% Rasa Ingin Tahu & Kopi ☕"),
    t("Zero bugs allowed! (Well, maybe one) 👾", "Dilarang ada bug! (Kecuali fitur tak sengaja) 👾"),
    t("Click me again! I like bouncing! ✨", "Klik saya lagi! Asik banget mantul-mantul! ✨"),
    t("Next.js 16 + Turso DB = Pure Speed ⚡", "Next.js 16 + Turso DB = Ngebut maksimal ⚡"),
  ];

  // Mouse Pupil Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const pupilX = useSpring(mouseX, { stiffness: 220, damping: 20 });
  const pupilY = useSpring(mouseY, { stiffness: 220, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const angle = Math.atan2(dy, dx);
      const dist = Math.min(Math.hypot(dx, dy) / 30, 6);
      mouseX.set(Math.cos(angle) * dist);
      mouseY.set(Math.sin(angle) * dist);
    };

    window.addEventListener("mousemove", handleMove);

    // Periodic Blink
    const blinkTimer = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 140);
    }, 3600);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      clearInterval(blinkTimer);
    };
  }, [mouseX, mouseY]);

  const handleMascotClick = () => {
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <div className="relative flex flex-col items-center mt-4 mb-2 select-none">
      {/* Speech Bubble */}
      <motion.button
        onClick={handleMascotClick}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative mb-3 px-4 py-2 bg-white border-2 border-black font-mono text-xs font-bold text-neutral-900 shadow-[3px_3px_0px_#000] cursor-pointer group"
      >
        <span>{quotes[quoteIndex]}</span>
        {/* Pointer tip */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b-2 border-r-2 border-black rotate-45" />
      </motion.button>

      {/* Mascot Robot Body */}
      <motion.div
        ref={mascotRef}
        onClick={handleMascotClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.88, rotate: [0, -8, 8, 0] }}
        animate={{ y: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="relative w-20 h-18 bg-[#00C2FF] border-2 border-black shadow-[4px_4px_0px_#000] rounded-2xl flex flex-col items-center justify-center cursor-pointer p-2"
      >
        {/* Antenna */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-3 h-3 rounded-full bg-[#EDB22E] border-2 border-black shadow-xs"
          />
          <div className="w-1 h-2 bg-black" />
        </div>

        {/* Mascot Face Screen */}
        <div className="w-full h-11 bg-black rounded-lg flex items-center justify-around px-2 py-1">
          {/* Left Eye */}
          <div className="relative w-4 h-5 bg-[#10B981] rounded-full overflow-hidden flex items-center justify-center">
            {isBlinking ? (
              <div className="w-full h-0.5 bg-black" />
            ) : (
              <motion.div
                style={{ x: pupilX, y: pupilY }}
                className="w-2 h-2 rounded-full bg-black"
              />
            )}
          </div>

          {/* Cheerful Mouth / Smile */}
          <div className="w-2 h-1 border-b-2 border-[#EDB22E] rounded-full" />

          {/* Right Eye */}
          <div className="relative w-4 h-5 bg-[#10B981] rounded-full overflow-hidden flex items-center justify-center">
            {isBlinking ? (
              <div className="w-full h-0.5 bg-black" />
            ) : (
              <motion.div
                style={{ x: pupilX, y: pupilY }}
                className="w-2 h-2 rounded-full bg-black"
              />
            )}
          </div>
        </div>

        {/* Cute blush cheeks */}
        <div className="absolute bottom-1.5 left-2 w-2 h-1 bg-[#E11D5A] rounded-full opacity-70" />
        <div className="absolute bottom-1.5 right-2 w-2 h-1 bg-[#E11D5A] rounded-full opacity-70" />
      </motion.div>

      <span
        style={{ fontFamily: "var(--font-caveat), cursive" }}
        className="text-xs text-neutral-500 font-semibold mt-1"
      >
        {t("click Byte the bot! ✨", "klik Byte si robot! ✨")}
      </span>
    </div>
  );
}

export default function ExperienceHeroSection() {
  const { t } = useLanguage();

  return (
    <section className={`relative pt-12 pb-10 sm:pt-16 sm:pb-14 overflow-hidden ${mono.variable}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center text-center">
        {/* 1. Handwritten Accent Tag with SVG Sketch */}
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
            {t("learning roadmap & career journey!", "peta perjalanan belajar & pengalaman!")}
          </span>
          <motion.svg
            viewBox="0 0 120 12"
            fill="none"
            className="mt-1 w-24 sm:w-32 text-neutral-800"
            aria-hidden="true"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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

        {/* 2. Modular Vector Typography: EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 280, damping: 20 }}
          className="flex justify-center w-full my-3 sm:my-5 cursor-default select-none"
        >
          <ExperienceTypography />
        </motion.div>

        {/* 3. Cute Interactive Companion Mascot */}
        <CuteMascot />

        {/* 4. Draggable Sticky Note with spring physics */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.25}
          initial={{ opacity: 0, rotate: -3, y: 14 }}
          animate={{ opacity: 1, rotate: -1.5, y: 0 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          whileDrag={{ scale: 1.06, rotate: 2, cursor: "grabbing" }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="relative mt-6 max-w-md bg-[#F6DCA0] border-2 border-black p-4 sm:p-5 text-left shadow-[5px_5px_0px_#000] cursor-grab select-none group"
        >
          {/* Pin accent */}
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#E11D5A] border-2 border-black shadow-xs flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>

          <span
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="absolute -top-5 right-2 text-xs text-neutral-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {t("pull me!", "tarik saya!")} ↗
          </span>

          <p className="font-mono text-xs sm:text-sm font-semibold text-neutral-900 leading-relaxed">
            {t(
              "Hands-on immersion through engineering labs, active study groups, and deep dive web development projects at Telkom University.",
              "Pengalaman nyata melalui keterlibatan aktif di laboratorium riset, kelompok studi web, dan eksplorasi teknologi modern di Telkom University."
            )}
          </p>

          <div className="mt-3 pt-2 border-t border-black/20 flex items-center justify-between font-mono text-[11px] text-neutral-700">
            <span>BANDUNG, ID</span>
            <span>2024 - 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
