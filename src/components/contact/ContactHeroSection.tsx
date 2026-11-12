"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Copy, Check, Clock, Radio, BellRing, Sparkles, Send, Plane } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";
import { playBubblePop, playCombo, playConnect } from "@/components/playground/audioEffects";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-contact-mono",
  display: "swap",
});

/**
 * Interactive 1:1 Modular Chunky Vector Typography for "CONTACT"
 * Each letter has independent spring hover, bouncy physics, and playful color shifts!
 */
function InteractiveContactTypography() {
  const letters = [
    {
      char: "C",
      transform: "translate(0, 0)",
      path: "M 16 0 H 42 C 48 0 52 4 52 10 V 16 C 52 22 48 26 42 26 H 24 C 20 26 18 28 18 32 V 38 C 18 42 20 44 24 44 H 42 C 48 44 52 48 52 54 V 60 C 52 66 48 70 42 70 H 16 C 6 70 0 64 0 54 V 16 C 0 6 6 0 16 0 Z",
      color: "#00C2FF",
    },
    {
      char: "O",
      transform: "translate(60, 0)",
      path: "M 16 0 H 40 C 50 0 56 6 56 16 V 54 C 56 64 50 70 40 70 H 16 C 6 70 0 64 0 54 V 16 C 0 6 6 0 16 0 Z M 18 20 H 38 C 40 20 41 21 41 23 V 47 C 41 49 40 50 38 50 H 18 C 16 50 15 49 15 47 V 23 C 15 21 16 20 18 20 Z",
      color: "#FFE600",
    },
    {
      char: "N",
      transform: "translate(124, 0)",
      path: "M 8 0 H 18 C 22 0 24 2 24 6 V 34 L 38 4 C 40 1 43 0 47 0 H 52 C 56 0 58 4 58 8 V 64 C 58 68 56 70 52 70 H 44 C 40 70 38 68 38 64 V 36 L 24 66 C 22 69 19 70 15 70 H 8 C 4 70 0 66 0 62 V 8 C 0 4 4 0 8 0 Z",
      color: "#10B981",
    },
    {
      char: "T",
      transform: "translate(190, 0)",
      path: "M 3 0 H 53 C 57 0 60 3 60 7 V 15 C 60 19 57 22 53 22 H 36 V 63 C 36 67 33 70 29 70 H 27 C 23 70 20 67 20 63 V 22 H 3 C 0 22 0 19 0 15 V 7 C 0 3 3 0 3 0 Z",
      color: "#FF5757",
    },
    {
      char: "A",
      transform: "translate(254, 0)",
      path: "M 18 0 H 36 C 45 0 52 6 52 15 C 52 22 47 27 39 30 C 35 31 34 33 36 36 C 44 40 54 48 54 59 V 63 C 54 67 51 70 46 70 H 36 C 32 70 29 67 29 63 V 53 C 29 47 24 44 19 44 C 14 44 9 47 9 53 V 63 C 9 67 6 70 1 70 H -2 C -7 70 -10 67 -10 63 V 59 C -10 48 0 40 8 36 C 10 33 9 31 5 30 C -3 27 -8 22 -8 15 C -8 6 -1 0 8 0 Z M 12 14 C 12 18 15 21 19 21 C 23 21 26 18 26 14 C 26 10 23 7 19 7 C 15 7 12 10 12 14 Z",
      color: "#A855F7",
    },
    {
      char: "C",
      transform: "translate(328, 0)",
      path: "M 16 0 H 42 C 48 0 52 4 52 10 V 16 C 52 22 48 26 42 26 H 24 C 20 26 18 28 18 32 V 38 C 18 42 20 44 24 44 H 42 C 48 44 52 48 52 54 V 60 C 52 66 48 70 42 70 H 16 C 6 70 0 64 0 54 V 16 C 0 6 6 0 16 0 Z",
      color: "#00C2FF",
    },
    {
      char: "T",
      transform: "translate(388, 0)",
      path: "M 3 0 H 53 C 57 0 60 3 60 7 V 15 C 60 19 57 22 53 22 H 36 V 63 C 36 67 33 70 29 70 H 27 C 23 70 20 67 20 63 V 22 H 3 C 0 22 0 19 0 15 V 7 C 0 3 3 0 3 0 Z",
      color: "#FFF275",
    },
  ];

  return (
    <svg
      viewBox="0 0 450 70"
      className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[540px] lg:max-w-[640px] h-auto block select-none text-[#171717] mx-auto overflow-visible"
      fill="currentColor"
      aria-label="CONTACT"
    >
      {letters.map((letter, idx) => (
        <motion.g
          key={idx}
          transform={letter.transform}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: idx * 0.06,
          }}
          whileHover={{
            y: -10,
            scale: 1.08,
            transition: { type: "spring", stiffness: 450, damping: 15 },
          }}
          onHoverStart={() => playBubblePop(1 + idx * 0.1, true)}
          className="cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d={letter.path}
            className="transition-colors duration-200 hover:text-black"
          />
        </motion.g>
      ))}
    </svg>
  );
}

export default function ContactHeroSection() {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [bellRung, setBellRung] = useState(false);
  const [bellSparks, setBellSparks] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([]);

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
    playConnect(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleRingBell = () => {
    setBellRung(true);
    playCombo(true);

    const emojis = ["🔔", "⚡", "✨", "📨", "📡", "🚀"];
    const newSparks = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 120,
      y: -Math.random() * 80 - 20,
      emoji: emojis[i % emojis.length],
    }));

    setBellSparks(newSparks);
    setTimeout(() => setBellRung(false), 600);
    setTimeout(() => setBellSparks([]), 1200);
  };

  return (
    <section className={`relative pt-12 pb-8 sm:pt-16 sm:pb-12 overflow-hidden ${mono.variable}`}>
      {/* ── Background Animated Blueprint Elements ── */}
      {/* Left side: Animated Satellite Radar Wave */}
      <div className="hidden xl:block absolute top-12 left-10 pointer-events-none select-none opacity-80">
        <motion.div
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative bg-white border-2 border-black p-3.5 shadow-[4px_4px_0px_#000] flex flex-col items-center"
        >
          <div className="relative flex items-center justify-center w-12 h-12">
            <Radio className="w-6 h-6 text-neutral-900 z-10" />
            <motion.div
              animate={{ scale: [1, 2.2], opacity: [0.9, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border-2 border-[#00C2FF]"
            />
            <motion.div
              animate={{ scale: [1, 2.8], opacity: [0.7, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, delay: 0.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border-2 border-[#FFE600]"
            />
          </div>
          <span className="font-mono text-[10px] font-black uppercase text-neutral-800 mt-2">
            RADAR ONLINE ✦
          </span>
          <span className="font-mono text-[8px] text-neutral-500">FREQ: 2.40 GHz</span>
        </motion.div>
      </div>

      {/* Right side: Draggable Airmail Stamp */}
      <div className="hidden xl:block absolute top-10 right-10 select-none z-20">
        <motion.div
          drag
          dragConstraints={{ left: -100, right: 60, top: -20, bottom: 120 }}
          dragElastic={0.2}
          whileHover={{ scale: 1.08, rotate: 0 }}
          whileDrag={{ scale: 1.15, cursor: "grabbing" }}
          initial={{ rotate: 6, y: 0 }}
          className="bg-[#FFE600] border-2 border-black p-3 shadow-[4px_4px_0px_#000] cursor-grab flex flex-col items-center max-w-[140px] text-center"
        >
          <div className="flex items-center gap-1 text-[10px] font-mono font-black text-neutral-900 border-b border-black pb-1 mb-1.5 w-full justify-center">
            <Plane className="w-3.5 h-3.5 rotate-45" />
            <span>AIR MAIL</span>
          </div>
          <span className="font-mono text-[9px] font-black leading-tight text-neutral-800">
            PARCEL POST // BANDUNG
          </span>
          <span className="font-mono text-[8px] text-neutral-600 mt-1">
            PRIORITY 1 TRANSMISSION
          </span>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center text-center relative z-10">
        {/* 1. Handwritten Accent Tag with SVG Sketch */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 sm:mb-5 flex flex-col items-center"
        >
          <motion.span
            whileHover={{ scale: 1.06, rotate: -1 }}
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="text-2xl sm:text-3xl md:text-4xl text-neutral-800 font-semibold tracking-wide cursor-default"
          >
            {t("let's build something epic together!", "mari ciptakan karya hebat bersama!")}
          </motion.span>
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

        {/* 2. Interactive Modular Vector Typography: CONTACT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 280, damping: 20 }}
          className="flex justify-center w-full my-3 sm:my-5 select-none"
        >
          <InteractiveContactTypography />
        </motion.div>

        {/* 3. Interactive Dispatch Bell & Spark Spawner */}
        <div className="relative my-2">
          <motion.button
            onClick={handleRingBell}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            animate={bellRung ? { rotate: [-14, 14, -14, 14, 0], scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-white hover:bg-[#FFE600] border-2 border-black font-mono text-xs font-black shadow-[3px_3px_0px_#000] cursor-pointer"
          >
            <BellRing className="w-4 h-4 text-neutral-800" />
            <span>{t("RING DISPATCH BELL 🔔", "BUNYIKAN LONCENG 🔔")}</span>
          </motion.button>

          {/* Floating Emoji Sparks */}
          <AnimatePresence>
            {bellSparks.map((spark) => (
              <motion.div
                key={spark.id}
                initial={{ opacity: 1, scale: 0.6, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: 1.4,
                  x: spark.x,
                  y: spark.y,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-xl z-50 select-none"
              >
                {spark.emoji}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. Status Badges & Quick Info Chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-4 select-none"
        >
          {/* Availability Pill */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-[#10B981]/15 border-2 border-black font-mono text-xs font-bold text-neutral-900 shadow-[2px_2px_0px_#000]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] border border-black animate-pulse" />
            <span>{t("AVAILABLE FOR OPPORTUNITIES", "TERBUKA UNTUK KOLABORASI")}</span>
          </motion.div>

          {/* Time Zone & Live Clock with Blinking Pulse */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-white border-2 border-black font-mono text-xs font-bold text-neutral-800 shadow-[2px_2px_0px_#000]"
          >
            <Clock className="w-3.5 h-3.5 text-[#00C2FF]" />
            <span>BANDUNG, ID // {currentTime || "WIB (UTC+7)"}</span>
            <span className="w-1.5 h-1.5 bg-[#E11D5A] rounded-full animate-ping" />
          </motion.div>

          {/* 1-Click Copy Email Pill */}
          <motion.button
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
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
