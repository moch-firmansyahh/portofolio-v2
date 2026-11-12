"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { JetBrains_Mono } from "next/font/google";
import { playBubblePop, playCombo } from "@/components/playground/audioEffects";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-exp-mono",
  display: "swap",
});

/**
 * 1:1 Modular Chunky Vector Typography for "EXPERIENCE"
 * Each letter has independent spring hover, bouncy physics, and playful audio feedback!
 */
function InteractiveExperienceTypography() {
  const letters = [
    {
      char: "E",
      transform: "translate(6, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="14" height="74" rx="7" />,
        <rect key="2" x="10" y="0" width="34" height="15" rx="7" />,
        <rect key="3" x="10" y="29" width="26" height="15" rx="6" />,
        <rect key="4" x="10" y="59" width="34" height="15" rx="7" />,
      ],
      color: "#00C2FF",
    },
    {
      char: "X",
      transform: "translate(64, 4)",
      shapes: [
        <rect key="1" x="18" y="0" width="14" height="74" rx="7" transform="rotate(28 25 37)" />,
        <rect key="2" x="18" y="0" width="14" height="74" rx="7" transform="rotate(-28 25 37)" />,
      ],
      color: "#FFE600",
    },
    {
      char: "P",
      transform: "translate(126, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="14" height="74" rx="7" />,
        <path key="2" d="M 10 0 H 30 C 40 0 48 7 48 20 C 48 33 40 40 30 40 H 10 Z M 14 15 H 28 C 30 15 32 17 32 20 C 32 23 30 25 28 25 H 14 Z" />,
      ],
      color: "#10B981",
    },
    {
      char: "E",
      transform: "translate(186, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="14" height="74" rx="7" />,
        <rect key="2" x="10" y="0" width="34" height="15" rx="7" />,
        <rect key="3" x="10" y="29" width="26" height="15" rx="6" />,
        <rect key="4" x="10" y="59" width="34" height="15" rx="7" />,
      ],
      color: "#FF5757",
    },
    {
      char: "R",
      transform: "translate(244, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="14" height="74" rx="7" />,
        <path key="2" d="M 10 0 H 30 C 40 0 48 7 48 20 C 48 33 40 40 30 40 H 10 Z M 14 15 H 28 C 30 15 32 17 32 20 C 32 23 30 25 28 25 H 14 Z" />,
        <rect key="3" x="20" y="34" width="14" height="42" rx="7" transform="rotate(-26 20 34)" />,
      ],
      color: "#A855F7",
    },
    {
      char: "I",
      transform: "translate(306, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="36" height="15" rx="7.5" />,
        <rect key="2" x="11" y="10" width="14" height="54" rx="7" />,
        <rect key="3" x="0" y="59" width="36" height="15" rx="7.5" />,
      ],
      color: "#00C2FF",
    },
    {
      char: "E",
      transform: "translate(352, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="14" height="74" rx="7" />,
        <rect key="2" x="10" y="0" width="34" height="15" rx="7" />,
        <rect key="3" x="10" y="29" width="26" height="15" rx="6" />,
        <rect key="4" x="10" y="59" width="34" height="15" rx="7" />,
      ],
      color: "#F97316",
    },
    {
      char: "N",
      transform: "translate(410, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="14" height="74" rx="7" />,
        <rect key="2" x="36" y="0" width="14" height="74" rx="7" />,
        <path key="3" d="M 10 0 L 38 60 H 42 V 74 L 14 14 H 10 Z" />,
      ],
      color: "#10B981",
    },
    {
      char: "C",
      transform: "translate(476, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="14" height="74" rx="7" />,
        <rect key="2" x="10" y="0" width="34" height="15" rx="7" />,
        <rect key="3" x="10" y="59" width="34" height="15" rx="7" />,
      ],
      color: "#FFE600",
    },
    {
      char: "E",
      transform: "translate(534, 4)",
      shapes: [
        <rect key="1" x="0" y="0" width="14" height="74" rx="7" />,
        <rect key="2" x="10" y="0" width="34" height="15" rx="7" />,
        <rect key="3" x="10" y="29" width="26" height="15" rx="6" />,
        <rect key="4" x="10" y="59" width="34" height="15" rx="7" />,
      ],
      color: "#FF5757",
    },
  ];

  return (
    <svg
      viewBox="0 0 584 84"
      className="w-full max-w-[340px] sm:max-w-[480px] md:max-w-[620px] lg:max-w-[740px] h-auto block select-none text-[#171717] mx-auto overflow-visible"
      fill="currentColor"
      aria-label="EXPERIENCE"
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
            delay: idx * 0.04,
          }}
          whileHover={{
            y: -10,
            scale: 1.08,
            transition: { type: "spring", stiffness: 450, damping: 15 },
          }}
          onHoverStart={() => playBubblePop(1 + idx * 0.08, true)}
          className="cursor-pointer"
        >
          {letter.shapes}
        </motion.g>
      ))}
    </svg>
  );
}

/**
 * Supercharged Interactive Mascot: "Byte" the Blueprint Companion Robot
 * - Eyes follow mouse cursor with spring easing
 * - 4 Interactive Moods: Coffee, Code, Chill, Retro
 * - Animated waving robot arms!
 * - Click to bounce, play audio, and shoot star particles
 * - Orbiting floating tech icons
 */
function CuteMascot() {
  const { t } = useLanguage();
  const mascotRef = useRef<HTMLDivElement>(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [mood, setMood] = useState<"coffee" | "code" | "chill" | "retro">("coffee");
  const [sparks, setSparks] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([]);

  const moods = {
    coffee: {
      quote: t("Fueled by Arabica & midnight commits! ☕", "Ditenagai Kopi Hitam & ngoding malam! ☕"),
      color: "#00C2FF",
      eyeColor: "#10B981",
      mouth: "rounded-full border-b-2 border-[#EDB22E]",
      tag: "☕ COFFEE MODE",
    },
    code: {
      quote: t("Clean components & 0 bug policy! 🚀", "Komponen bersih & zero bug policy! 🚀"),
      color: "#FFE600",
      eyeColor: "#00C2FF",
      mouth: "w-3 h-1 bg-[#171717] rounded-xs",
      tag: "🚀 CODE MODE",
    },
    chill: {
      quote: t("Designing with love, motion & pixels! 💖", "Mendesain penuh cinta, animasi & piksel! 💖"),
      color: "#F472B6",
      eyeColor: "#F43F5E",
      mouth: "rounded-full border-b-2 border-white",
      tag: "💖 CHILL MODE",
    },
    retro: {
      quote: t("8-bit arcade spirit running at 60 FPS! 👾", "Semangat arcade 8-bit ngeluncur 60 FPS! 👾"),
      color: "#A855F7",
      eyeColor: "#FFE600",
      mouth: "w-4 h-1 border-b-2 border-[#00C2FF]",
      tag: "👾 RETRO MODE",
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
    const moodKeys: Array<"coffee" | "code" | "chill" | "retro"> = ["coffee", "code", "chill", "retro"];
    const nextMood = moodKeys[(moodKeys.indexOf(mood) + 1) % moodKeys.length];
    setMood(nextMood);
    playCombo(true);

    const emojis = ["✨", "⚡", "⭐", "🎉", "🔥", "🚀"];
    const newSparks = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 110,
      y: -Math.random() * 70 - 20,
      emoji: emojis[i % emojis.length],
    }));
    setSparks(newSparks);
    setTimeout(() => setSparks([]), 900);
  };

  const currentMood = moods[mood];

  return (
    <div className="relative flex flex-col items-center mt-5 mb-3 select-none">
      {/* Floating Orbit Items around Byte */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="hidden md:flex absolute -left-16 top-4 bg-white border-2 border-black p-1.5 shadow-[2px_2px_0px_#000] text-sm pointer-events-none"
      >
        ☕
      </motion.div>
      <motion.div
        animate={{ y: [5, -5, 5], rotate: [6, -6, 6] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="hidden md:flex absolute -right-16 top-4 bg-white border-2 border-black p-1.5 shadow-[2px_2px_0px_#000] text-sm pointer-events-none"
      >
        ⚡
      </motion.div>

      {/* Speech Bubble */}
      <motion.button
        onClick={handleMascotClick}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative mb-3.5 px-4 py-2 bg-white border-2 border-black font-mono text-xs font-black text-neutral-900 shadow-[4px_4px_0px_#000] cursor-pointer group flex items-center gap-2"
      >
        <span>{currentMood.quote}</span>
        <span className="text-[10px] px-1.5 py-0.5 bg-[#FFF275] border border-black font-mono font-bold">
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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

      {/* Floating Spark Particles */}
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-xl z-50 select-none"
          >
            {spark.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Click prompt note */}
      <span
        style={{ fontFamily: "var(--font-caveat), cursive" }}
        className="text-xs text-neutral-600 font-semibold mt-2"
      >
        {t("click Byte to cycle moods & celebrate! ✨", "klik Byte untuk ganti mood & animasi! ✨")}
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
            whileHover={{ scale: 1.06, rotate: 1 }}
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

        {/* 2. Interactive Modular Vector Typography: EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 280, damping: 20 }}
          className="flex justify-center w-full my-3 sm:my-5 select-none"
        >
          <InteractiveExperienceTypography />
        </motion.div>

        {/* 3. Supercharged Interactive Companion Mascot */}
        <CuteMascot />

        {/* 4. Draggable Blueprint Sticky Note with Spring Physics */}
        <motion.div
          drag
          dragConstraints={{ left: -40, right: 40, top: -20, bottom: 40 }}
          dragElastic={0.25}
          initial={{ opacity: 0, rotate: -3, y: 14 }}
          animate={{ opacity: 1, rotate: -1.5, y: 0 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          whileDrag={{ scale: 1.08, rotate: 2, cursor: "grabbing" }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="relative mt-6 max-w-md bg-[#FFF275] border-2 border-black p-4 sm:p-5 text-left shadow-[5px_5px_0px_#000] cursor-grab select-none group"
        >
          {/* Pin accent */}
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#E11D5A] border-2 border-black shadow-xs flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>

          <span
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="absolute -top-5 right-2 text-xs text-neutral-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {t("pull me!", "tarik saya!")} ↗
          </span>

          <p className="font-mono text-xs sm:text-sm font-bold text-neutral-900 leading-relaxed">
            {t(
              "Hands-on immersion through engineering labs, active study groups, and deep dive web development projects at Telkom University.",
              "Pengalaman nyata melalui keterlibatan aktif di laboratorium riset, kelompok studi web, dan eksplorasi teknologi modern di Telkom University."
            )}
          </p>

          <div className="mt-3 pt-2 border-t border-black/20 flex items-center justify-between font-mono text-[11px] text-neutral-800 font-bold">
            <span>BANDUNG, ID // TELKOM UNIV</span>
            <span>2024 - 2026 ✦</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
