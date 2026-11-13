"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { JetBrains_Mono } from "next/font/google";
import { playBubblePop, playCombo } from "@/components/playground/audioEffects";
import {
  Coffee,
  Rocket,
  Heart,
  Gamepad2,
  Sparkles,
  Zap,
  Star,
  MapPin,
  Calendar,
} from "lucide-react";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-exp-mono",
  display: "swap",
});

/**
 * 1:1 Modular Geometric Vector Typography for "EXPERIENCE"
 * Matches the exact geometric modular font family across the portfolio.
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

type MoodKey = "coffee" | "code" | "chill" | "retro";

interface SparkParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  type: "star" | "sparkle" | "heart" | "zap";
}

/**
 * Supercharged Interactive Mascot: "Byte" the Blueprint Companion Robot
 * Cleaned up with vector Lucide icons, expressive spring physics, and charming sounds.
 */
function CuteMascot() {
  const { t } = useLanguage();
  const mascotRef = useRef<HTMLDivElement>(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [mood, setMood] = useState<MoodKey>("coffee");
  const [sparks, setSparks] = useState<SparkParticle[]>([]);

  const moods: Record<
    MoodKey,
    {
      quote: string;
      color: string;
      eyeColor: string;
      mouth: string;
      tag: string;
      icon: React.ComponentType<{ className?: string }>;
      accentBg: string;
    }
  > = {
    coffee: {
      quote: t("Fueled by Arabica & midnight commits!", "Ditenagai Kopi Hitam & ngoding malam!"),
      color: "#00C2FF",
      eyeColor: "#10B981",
      mouth: "rounded-full border-b-2 border-[#EDB22E]",
      tag: "COFFEE FUEL",
      icon: Coffee,
      accentBg: "bg-[#EDB22E]",
    },
    code: {
      quote: t("Clean components & zero-bug mindset!", "Komponen bersih & zero-bug mindset!"),
      color: "#FFE600",
      eyeColor: "#00C2FF",
      mouth: "w-3 h-1 bg-[#171717] rounded-xs",
      tag: "TURBO CODE",
      icon: Rocket,
      accentBg: "bg-[#00C2FF]",
    },
    chill: {
      quote: t("Designing with love, motion & pixels!", "Mendesain penuh cinta, animasi & piksel!"),
      color: "#F472B6",
      eyeColor: "#F43F5E",
      mouth: "rounded-full border-b-2 border-white",
      tag: "CHILL VIBES",
      icon: Heart,
      accentBg: "bg-[#FFF275]",
    },
    retro: {
      quote: t("8-bit arcade spirit running at 60 FPS!", "Semangat arcade ngeluncur 60 FPS!"),
      color: "#A855F7",
      eyeColor: "#FFE600",
      mouth: "w-4 h-1 border-b-2 border-[#00C2FF]",
      tag: "RETRO 60 FPS",
      icon: Gamepad2,
      accentBg: "bg-[#10B981]",
    },
  };

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
    const moodKeys: MoodKey[] = ["coffee", "code", "chill", "retro"];
    const nextMood = moodKeys[(moodKeys.indexOf(mood) + 1) % moodKeys.length];
    setMood(nextMood);
    playCombo(true);

    const particleTypes: SparkParticle["type"][] = ["star", "sparkle", "heart", "zap"];
    const colors = ["#FFE600", "#00C2FF", "#F472B6", "#10B981", "#EDB22E"];

    const newSparks: SparkParticle[] = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 120,
      y: -Math.random() * 70 - 25,
      color: colors[i % colors.length],
      type: particleTypes[i % particleTypes.length],
    }));

    setSparks(newSparks);
    setTimeout(() => setSparks([]), 900);
  };

  const currentMood = moods[mood];
  const MoodIcon = currentMood.icon;

  return (
    <div className="relative flex flex-col items-center mt-6 mb-4 select-none">
      {/* Floating Orbit Items around Byte - Clean Lucide vector cards */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="hidden md:flex absolute -left-16 top-4 bg-white border-2 border-black p-2 shadow-[2px_2px_0px_#000] text-neutral-800 pointer-events-none"
      >
        <Coffee className="w-4 h-4 text-[#D97706]" />
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5], rotate: [6, -6, 6] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="hidden md:flex absolute -right-16 top-4 bg-white border-2 border-black p-2 shadow-[2px_2px_0px_#000] text-neutral-800 pointer-events-none"
      >
        <Zap className="w-4 h-4 text-[#00C2FF]" />
      </motion.div>

      {/* Speech Bubble */}
      <motion.button
        type="button"
        onClick={handleMascotClick}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="relative mb-3.5 px-4 py-2 bg-white border-2 border-black font-mono text-xs font-black text-neutral-900 shadow-[4px_4px_0px_#000] cursor-pointer group flex items-center gap-2.5 transition-transform"
      >
        <span className="flex items-center gap-1.5">
          <MoodIcon className="w-4 h-4 text-neutral-900" />
          <span>{currentMood.quote}</span>
        </span>
        <span
          className={`text-[10px] px-2 py-0.5 border border-black font-mono font-bold uppercase tracking-wider ${currentMood.accentBg} text-neutral-900`}
        >
          {currentMood.tag}
        </span>
        {/* Pointer tip */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b-2 border-r-2 border-black rotate-45" />
      </motion.button>

      {/* Mascot Robot Body with Waving Arms */}
      <div className="relative flex items-center justify-center">
        {/* Left Waving Arm */}
        <motion.div
          animate={{ rotate: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-3 h-8 bg-neutral-900 border-2 border-black rounded-full origin-top mr-1 shadow-xs"
        />

        {/* Robot Head / Body */}
        <motion.div
          ref={mascotRef}
          onClick={handleMascotClick}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          animate={{ y: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          style={{ backgroundColor: currentMood.color }}
          className="relative w-22 h-19 border-2 border-black shadow-[5px_5px_0px_#000] rounded-2xl flex flex-col items-center justify-center cursor-pointer p-2 transition-colors duration-300"
        >
          {/* Antenna with Pulsing Beacon */}
          <div className="absolute -top-4.5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="w-3.5 h-3.5 rounded-full bg-[#EDB22E] border-2 border-black shadow-xs"
            />
            <div className="w-1.5 h-2.5 bg-black" />
          </div>

          {/* Mascot Face Screen */}
          <div className="w-full h-12 bg-neutral-950 rounded-lg flex items-center justify-around px-2 py-1 relative overflow-hidden">
            {/* Left Eye */}
            <div
              style={{ backgroundColor: currentMood.eyeColor }}
              className="relative w-4.5 h-5.5 rounded-full overflow-hidden flex items-center justify-center transition-colors duration-300"
            >
              {isBlinking ? (
                <div className="w-full h-0.5 bg-black" />
              ) : (
                <motion.div
                  style={{ x: pupilX, y: pupilY }}
                  className="w-2.5 h-2.5 rounded-full bg-black"
                />
              )}
            </div>

            {/* Mouth */}
            <div className={`w-2.5 h-1.5 ${currentMood.mouth}`} />

            {/* Right Eye */}
            <div
              style={{ backgroundColor: currentMood.eyeColor }}
              className="relative w-4.5 h-5.5 rounded-full overflow-hidden flex items-center justify-center transition-colors duration-300"
            >
              {isBlinking ? (
                <div className="w-full h-0.5 bg-black" />
              ) : (
                <motion.div
                  style={{ x: pupilX, y: pupilY }}
                  className="w-2.5 h-2.5 rounded-full bg-black"
                />
              )}
            </div>
          </div>

          {/* Cheerful Blush Cheeks */}
          <div className="absolute bottom-1.5 left-2.5 w-2.5 h-1.5 bg-[#E11D5A] rounded-full opacity-80" />
          <div className="absolute bottom-1.5 right-2.5 w-2.5 h-1.5 bg-[#E11D5A] rounded-full opacity-80" />
        </motion.div>

        {/* Right Waving Arm */}
        <motion.div
          animate={{ rotate: [20, -20, 20] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-3 h-8 bg-neutral-900 border-2 border-black rounded-full origin-top ml-1 shadow-xs"
        />
      </div>

      {/* Floating Vector Sparks Particles (Clean Lucide SVGs, no OS emojis) */}
      <AnimatePresence>
        {sparks.map((spark) => (
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
            transition={{ duration: 0.85, ease: "easeOut" }}
            style={{ color: spark.color }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
          >
            {spark.type === "star" && <Star className="w-5 h-5 fill-current" />}
            {spark.type === "sparkle" && <Sparkles className="w-5 h-5" />}
            {spark.type === "heart" && <Heart className="w-5 h-5 fill-current" />}
            {spark.type === "zap" && <Zap className="w-5 h-5 fill-current" />}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Click prompt note */}
      <span
        style={{ fontFamily: "var(--font-caveat), cursive" }}
        className="text-xs sm:text-sm text-neutral-600 font-semibold mt-2.5"
      >
        {t("click Byte to cycle moods & sound! ✦", "klik Byte untuk ganti ekspresi & suara! ✦")}
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
          <motion.span
            whileHover={{ scale: 1.05, rotate: 1 }}
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="text-2xl sm:text-3xl md:text-4xl text-neutral-800 font-semibold tracking-wide cursor-default"
          >
            {t("learning roadmap & career journey!", "peta perjalanan belajar & pengalaman!")}
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

        {/* 2. Modular Vector Typography: EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 280, damping: 20 }}
          className="flex justify-center items-center w-full my-3 sm:my-5 cursor-default select-none"
        >
          <ExperienceTypography />
        </motion.div>

        {/* 3. Supercharged Interactive Companion Mascot */}
        <CuteMascot />

        {/* 4. Draggable Field Note Card with Washi Tape & Spring Physics */}
        <motion.div
          drag
          dragConstraints={{ left: -50, right: 50, top: -20, bottom: 40 }}
          dragElastic={0.25}
          initial={{ opacity: 0, rotate: -2, y: 14 }}
          animate={{ opacity: 1, rotate: -1.2, y: 0 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          whileDrag={{ scale: 1.06, rotate: 2, cursor: "grabbing" }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="relative mt-6 max-w-lg bg-[#FFF275] border-2 border-black p-5 sm:p-6 text-left shadow-[5px_5px_0px_#000] cursor-grab select-none group"
        >
          {/* Washi Tape Strip at Top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-white/80 border border-black/40 shadow-xs rotate-[-1.5deg] backdrop-blur-xs flex items-center justify-center">
            <span className="font-mono text-[9px] font-black text-neutral-600 tracking-widest uppercase">
              // ROADMAP MEMO
            </span>
          </div>

          {/* Red Pin Accent */}
          <div className="absolute -top-2 left-6 w-4 h-4 rounded-full bg-[#E11D5A] border-2 border-black shadow-xs flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>

          <span
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="absolute -top-5 right-3 text-xs text-neutral-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {t("pull me!", "tarik saya!")} ↗
          </span>

          <p className="font-mono text-xs sm:text-sm font-bold text-neutral-900 leading-relaxed pt-2">
            {t(
              "Hands-on immersion through engineering labs, active study groups, and deep dive web development projects at Telkom University.",
              "Pengalaman nyata melalui keterlibatan aktif di laboratorium riset, kelompok studi web, dan eksplorasi teknologi modern di Telkom University."
            )}
          </p>

          <div className="mt-4 pt-2.5 border-t border-black/20 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-neutral-800 font-bold">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#E11D5A]" />
              BANDUNG, ID // TELKOM UNIVERSITY
            </span>
            <span className="flex items-center gap-1 text-neutral-700">
              <Calendar className="w-3 h-3" />
              2024 - 2026 ✦
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
