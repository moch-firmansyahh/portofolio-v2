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
 * 1:1 Modular Chunky Vector Typography for "CONTACT"
 * Cleanly centered with exact bounding box (viewBox 0 0 448 70).
 * Standard SVG <g> ensures zero collapsed transforms.
 */
function ContactTypography() {
  return (
    <svg
      viewBox="0 0 448 70"
      className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[540px] lg:max-w-[640px] h-auto block select-none text-[#171717] mx-auto"
      fill="currentColor"
      aria-label="CONTACT"
    >
      {/* C */}
      <g transform="translate(0, 0)">
        <path
          fillRule="evenodd"
          d="M 16 0 H 42 C 48 0 52 4 52 10 V 16 C 52 22 48 26 42 26 H 24 C 20 26 18 28 18 32 V 38 C 18 42 20 44 24 44 H 42 C 48 44 52 48 52 54 V 60 C 52 66 48 70 42 70 H 16 C 6 70 0 64 0 54 V 16 C 0 6 6 0 16 0 Z"
        />
      </g>
      {/* O */}
      <g transform="translate(60, 0)">
        <path
          fillRule="evenodd"
          d="M 16 0 H 40 C 50 0 56 6 56 16 V 54 C 56 64 50 70 40 70 H 16 C 6 70 0 64 0 54 V 16 C 0 6 6 0 16 0 Z M 18 20 H 38 C 40 20 41 21 41 23 V 47 C 41 49 40 50 38 50 H 18 C 16 50 15 49 15 47 V 23 C 15 21 16 20 18 20 Z"
        />
      </g>
      {/* N */}
      <g transform="translate(124, 0)">
        <path
          fillRule="evenodd"
          d="M 8 0 H 18 C 22 0 24 2 24 6 V 34 L 38 4 C 40 1 43 0 47 0 H 52 C 56 0 58 4 58 8 V 64 C 58 68 56 70 52 70 H 44 C 40 70 38 68 38 64 V 36 L 24 66 C 22 69 19 70 15 70 H 8 C 4 70 0 66 0 62 V 8 C 0 4 4 0 8 0 Z"
        />
      </g>
      {/* T */}
      <g transform="translate(190, 0)">
        <path
          fillRule="evenodd"
          d="M 3 0 H 53 C 57 0 60 3 60 7 V 15 C 60 19 57 22 53 22 H 36 V 63 C 36 67 33 70 29 70 H 27 C 23 70 20 67 20 63 V 22 H 3 C 0 22 0 19 0 15 V 7 C 0 3 3 0 3 0 Z"
        />
      </g>
      {/* A */}
      <g transform="translate(254, 0)">
        <path
          fillRule="evenodd"
          d="M 18 0 H 36 C 45 0 52 6 52 15 C 52 22 47 27 39 30 C 35 31 34 33 36 36 C 44 40 54 48 54 59 V 63 C 54 67 51 70 46 70 H 36 C 32 70 29 67 29 63 V 53 C 29 47 24 44 19 44 C 14 44 9 47 9 53 V 63 C 9 67 6 70 1 70 H -2 C -7 70 -10 67 -10 63 V 59 C -10 48 0 40 8 36 C 10 33 9 31 5 30 C -3 27 -8 22 -8 15 C -8 6 -1 0 8 0 Z M 12 14 C 12 18 15 21 19 21 C 23 21 26 18 26 14 C 26 10 23 7 19 7 C 15 7 12 10 12 14 Z"
          transform="translate(10, 0)"
        />
      </g>
      {/* C */}
      <g transform="translate(328, 0)">
        <path
          fillRule="evenodd"
          d="M 16 0 H 42 C 48 0 52 4 52 10 V 16 C 52 22 48 26 42 26 H 24 C 20 26 18 28 18 32 V 38 C 18 42 20 44 24 44 H 42 C 48 44 52 48 52 54 V 60 C 52 66 48 70 42 70 H 16 C 6 70 0 64 0 54 V 16 C 0 6 6 0 16 0 Z"
        />
      </g>
      {/* T */}
      <g transform="translate(388, 0)">
        <path
          fillRule="evenodd"
          d="M 3 0 H 53 C 57 0 60 3 60 7 V 15 C 60 19 57 22 53 22 H 36 V 63 C 36 67 33 70 29 70 H 27 C 23 70 20 67 20 63 V 22 H 3 C 0 22 0 19 0 15 V 7 C 0 3 3 0 3 0 Z"
        />
      </g>
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
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 280, damping: 20 }}
          className="flex justify-center items-center w-full my-3 sm:my-5 cursor-default select-none"
        >
          <ContactTypography />
        </motion.div>

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
