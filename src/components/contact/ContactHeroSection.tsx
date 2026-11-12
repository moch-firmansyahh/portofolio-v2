"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Copy, Check, Clock } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";
import { playBubblePop } from "@/components/playground/audioEffects";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-contact-mono",
  display: "swap",
});

/**
 * 1:1 Modular Geometric Vector Typography for "CONTACT"
 * Symmetrically aligned and mathematically centered (viewBox 0 0 450 84).
 * Matches the exact aesthetic geometry of PROJECTS, EXPERIENCE, and SKILLS.
 */
function CenteredContactTypography() {
  const letters = [
    {
      char: "C",
      transform: "translate(10, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="14" height="74" rx="7" />,
        <rect key="2" x="10" y="0" width="34" height="15" rx="7" />,
        <rect key="3" x="10" y="59" width="34" height="15" rx="7" />,
      ],
    },
    {
      char: "O",
      transform: "translate(70, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="14" height="74" rx="7" />,
        <rect key="2" x="34" y="0" width="14" height="74" rx="7" />,
        <rect key="3" x="10" y="0" width="28" height="15" rx="6" />,
        <rect key="4" x="10" y="59" width="28" height="15" rx="6" />,
      ],
    },
    {
      char: "N",
      transform: "translate(134, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="14" height="74" rx="7" />,
        <rect key="2" x="36" y="0" width="14" height="74" rx="7" />,
        <path key="3" d="M 10 0 L 38 60 H 42 V 74 L 14 14 H 10 Z" />,
      ],
    },
    {
      char: "T",
      transform: "translate(200, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="48" height="15" rx="7" />,
        <rect key="2" x="17" y="10" width="14" height="64" rx="7" />,
      ],
    },
    {
      char: "A",
      transform: "translate(264, 4)",
      shapes: [
        <rect key="1" x="15" y="0" width="14" height="74" rx="7" transform="rotate(-15 15 37)" />,
        <rect key="2" x="23" y="0" width="14" height="74" rx="7" transform="rotate(15 23 37)" />,
        <rect key="3" x="13" y="42" width="26" height="14" rx="6" />,
      ],
    },
    {
      char: "C",
      transform: "translate(332, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="14" height="74" rx="7" />,
        <rect key="2" x="10" y="0" width="34" height="15" rx="7" />,
        <rect key="3" x="10" y="59" width="34" height="15" rx="7" />,
      ],
    },
    {
      char: "T",
      transform: "translate(392, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="48" height="15" rx="7" />,
        <rect key="2" x="17" y="10" width="14" height="64" rx="7" />,
      ],
    },
  ];

  return (
    <svg
      viewBox="0 0 450 84"
      className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[540px] lg:max-w-[620px] h-auto block select-none text-[#171717] mx-auto overflow-visible"
      fill="currentColor"
      aria-label="CONTACT"
    >
      {letters.map((letter, idx) => (
        <motion.g
          key={idx}
          transform={letter.transform}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 22,
            delay: idx * 0.04,
          }}
          whileHover={{
            y: -6,
            transition: { type: "spring", stiffness: 400, damping: 18 },
          }}
          onHoverStart={() => playBubblePop(1 + idx * 0.08, true)}
          className="cursor-default"
        >
          {letter.shapes}
        </motion.g>
      ))}
    </svg>
  );
}

export default function ContactHeroSection() {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const email = "firmanajah366@gmail.com";

  // Live Local Time in Bandung (UTC+7)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    playBubblePop(1.4, true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className={`relative pt-12 pb-8 sm:pt-16 sm:pb-12 overflow-hidden ${mono.variable}`}>
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
            className="text-2xl sm:text-3xl md:text-4xl text-neutral-800 font-semibold tracking-wide cursor-default"
          >
            {t("let's build something epic together!", "mari ciptakan karya hebat bersama!")}
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

        {/* 2. Perfectly Centered Modular Vector Typography: CONTACT */}
        <div className="flex justify-center items-center w-full my-3 sm:my-5 select-none">
          <CenteredContactTypography />
        </div>

        {/* 3. Clean Status Badges & Quick Info Chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-4 select-none"
        >
          {/* Availability Pill */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#10B981]/15 border-2 border-black font-mono text-xs font-bold text-neutral-900 shadow-[2px_2px_0px_#000]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] border border-black animate-pulse" />
            <span>{t("AVAILABLE FOR OPPORTUNITIES", "TERBUKA UNTUK KOLABORASI")}</span>
          </div>

          {/* Time Zone & Live Clock */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white border-2 border-black font-mono text-xs font-bold text-neutral-800 shadow-[2px_2px_0px_#000]">
            <Clock className="w-3.5 h-3.5 text-neutral-600" />
            <span>BANDUNG, ID // {currentTime || "WIB (UTC+7)"}</span>
          </div>

          {/* 1-Click Copy Email Pill */}
          <motion.button
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFF275] hover:bg-[#FFE600] border-2 border-black font-mono text-xs font-bold text-neutral-900 shadow-[2px_2px_0px_#000] cursor-pointer"
            title="Click to copy email"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#047857]" />
                <span className="text-[#047857] font-black">{t("COPIED TO CLIPBOARD!", "TERSALIN KE CLIPBOARD!")}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-700" />
                <span>{email}</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
