"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Volume2, VolumeX } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-playground-mono",
  display: "swap",
});

/**
 * 1:1 Modular Vector Typography for "PLAYGROUND"
 * Cleanly centered with exact bounding box.
 */
function PlaygroundTypography() {
  return (
    <svg
      viewBox="0 0 690 76"
      className="w-full max-w-[340px] sm:max-w-[500px] md:max-w-[660px] lg:max-w-[800px] h-auto block select-none text-[#171717] mx-auto"
      fill="currentColor"
      aria-label="PLAYGROUND"
    >
      {/* P */}
      <g transform="translate(6, 0)">
        <path
          fillRule="evenodd"
          d="M 12 0 H 38 C 48 0 56 8 56 18 C 56 28 48 36 38 36 H 24 V 68 C 24 72 20 76 16 76 H 12 C 8 76 4 72 4 68 V 8 C 4 4 8 0 12 0 Z M 24 16 H 36 C 39 16 42 17 42 20 C 42 23 39 24 36 24 H 24 Z"
        />
      </g>
      {/* L */}
      <g transform="translate(68, 0)">
        <path
          fillRule="evenodd"
          d="M 8 0 H 20 C 24 0 26 2 26 6 V 56 H 54 C 58 56 60 58 60 62 V 70 C 60 74 58 76 54 76 H 8 C 4 76 0 72 0 68 V 8 C 0 4 4 0 8 0 Z"
        />
      </g>
      {/* A */}
      <g transform="translate(136, 0)">
        <path
          fillRule="evenodd"
          d="M 16 0 H 36 C 45 0 52 6 52 15 C 52 22 47 27 39 30 C 35 31 34 33 36 36 C 44 40 54 48 54 59 V 63 C 54 67 51 70 46 70 H 36 C 32 70 29 67 29 63 V 53 C 29 47 24 44 19 44 C 14 44 9 47 9 53 V 63 C 9 67 6 70 1 70 H -2 C -7 70 -10 67 -10 63 V 59 C -10 48 0 40 8 36 C 10 33 9 31 5 30 C -3 27 -8 22 -8 15 C -8 6 -1 0 8 0 Z M 12 14 C 12 18 15 21 19 21 C 23 21 26 18 26 14 C 26 10 23 7 19 7 C 15 7 12 10 12 14 Z"
          transform="translate(8, 2)"
        />
      </g>
      {/* Y */}
      <g transform="translate(204, 0)">
        <path
          fillRule="evenodd"
          d="M 4 2 H 18 C 22 2 24 4 26 8 L 36 28 L 46 8 C 48 4 50 2 54 2 H 68 C 72 2 74 6 72 10 L 46 50 V 68 C 46 72 42 76 38 76 H 34 C 30 76 26 72 26 68 V 50 L 0 10 C -2 6 0 2 4 2 Z"
        />
      </g>
      {/* G */}
      <g transform="translate(282, 0)">
        <path
          fillRule="evenodd"
          d="M 16 0 H 46 C 54 0 60 6 60 14 V 20 C 60 24 56 26 52 26 H 24 C 20 26 18 28 18 32 V 44 C 18 48 20 50 24 50 H 40 V 38 H 32 C 28 38 26 36 26 32 V 26 C 26 22 28 20 32 20 H 48 C 54 20 58 24 58 30 V 62 C 58 70 52 76 44 76 H 16 C 6 76 0 70 0 60 V 16 C 0 6 6 0 16 0 Z"
        />
      </g>
      {/* R */}
      <g transform="translate(348, 0)">
        <path
          fillRule="evenodd"
          d="M 12 0 H 38 C 48 0 56 8 56 18 C 56 28 48 36 38 36 H 24 V 42 L 44 68 C 48 72 46 76 40 76 H 32 C 28 76 24 74 22 70 L 10 48 H 24 V 36 H 12 C 6 36 2 32 2 26 V 8 C 2 4 6 0 12 0 Z M 24 16 H 36 C 39 16 42 17 42 20 C 42 23 39 24 36 24 H 24 Z"
        />
      </g>
      {/* O */}
      <g transform="translate(414, 0)">
        <path
          fillRule="evenodd"
          d="M 16 0 H 42 C 52 0 58 6 58 16 V 60 C 58 70 52 76 42 76 H 16 C 6 76 0 70 0 60 V 16 C 0 6 6 0 16 0 Z M 20 20 H 38 C 40 20 41 21 41 23 V 53 C 41 55 40 56 38 56 H 20 C 18 56 17 55 17 53 V 23 C 17 21 18 20 20 20 Z"
        />
      </g>
      {/* U */}
      <g transform="translate(480, 0)">
        <path
          fillRule="evenodd"
          d="M 6 0 H 18 C 22 0 24 2 24 6 V 50 C 24 54 26 56 30 56 H 36 C 40 56 42 54 42 50 V 6 C 42 2 44 0 48 0 H 60 C 64 0 66 2 66 6 V 56 C 66 68 56 76 44 76 H 22 C 10 76 0 68 0 56 V 6 C 0 2 2 0 6 0 Z"
        />
      </g>
      {/* N */}
      <g transform="translate(554, 0)">
        <path
          fillRule="evenodd"
          d="M 8 0 H 18 C 22 0 24 2 24 6 V 36 L 40 6 C 42 2 45 0 49 0 H 54 C 58 0 60 4 60 8 V 70 C 60 74 58 76 54 76 H 46 C 42 76 40 74 40 70 V 40 L 24 72 C 22 75 19 76 15 76 H 8 C 4 76 0 72 0 68 V 8 C 0 4 4 0 8 0 Z"
        />
      </g>
      {/* D */}
      <g transform="translate(622, 0)">
        <path
          fillRule="evenodd"
          d="M 6 0 H 32 C 48 0 58 10 58 26 V 50 C 58 66 48 76 32 76 H 6 C 2 76 0 74 0 70 V 6 C 0 2 2 0 6 0 Z M 20 18 H 30 C 37 18 41 22 41 29 V 47 C 41 54 37 58 30 58 H 20 Z"
        />
      </g>
    </svg>
  );
}

interface PlaygroundHeroProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export default function PlaygroundHeroSection({
  soundEnabled,
  onToggleSound,
}: PlaygroundHeroProps) {
  const { t } = useLanguage();

  return (
    <section className={`relative pt-12 pb-8 sm:pt-16 sm:pb-10 overflow-hidden ${mono.variable}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center text-center">
        {/* 1. Handwritten Accent Tag with Sketch Doodle */}
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
            {t("welcome to the interactive motion arcade!", "selamat datang di arena permainan motion!")}
          </span>
          <motion.svg
            viewBox="0 0 120 12"
            fill="none"
            className="mt-1 w-28 sm:w-36 text-neutral-800"
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

        {/* 2. Modular Vector Typography: PLAYGROUND */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 280, damping: 20 }}
          className="flex justify-center w-full my-3 sm:my-5 cursor-default select-none"
        >
          <PlaygroundTypography />
        </motion.div>

        {/* 3. Description Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-xs sm:text-sm text-neutral-700 max-w-2xl leading-relaxed mt-2 mb-6"
        >
          {t(
            "An experimental laboratory built with Framer Motion gestures, spring physics, layout morphing, and Web Audio API synthesis. Have fun!",
            "Laboratorium eksperimen visual berbasis Framer Motion: fisika pegas, deteksi gestur, transisi layout dinamis, dan audio sintetis Web Audio API. Selamat bermain!"
          )}
        </motion.p>

        {/* 4. Sound Controller */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center select-none"
        >
          {/* Sound Toggle Button */}
          <motion.button
            onClick={onToggleSound}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-3.5 py-1.5 border-2 border-black font-mono text-xs font-black transition-colors cursor-pointer shadow-[2px_2px_0px_#000] ${
              soundEnabled
                ? "bg-[#FFF275] text-neutral-900"
                : "bg-neutral-200 text-neutral-600"
            }`}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-neutral-900" />
                <span>SOUND: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-600" />
                <span>SOUND: MUTED</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}