"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, RotateCcw, Pin, ShieldCheck, Coffee, Code2, Award } from "lucide-react";

interface Sticker {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  bg: string;
  textColor: string;
  initialRotate: number;
  initialX: number;
  initialY: number;
}

const DEFAULT_STICKERS: Sticker[] = [
  {
    id: "s1",
    title: "NEXT.JS 16 NINJA",
    subtitle: "Turbopack & App Router",
    icon: "🚀",
    bg: "bg-[#00C2FF]",
    textColor: "text-neutral-900",
    initialRotate: -4,
    initialX: 0,
    initialY: 0,
  },
  {
    id: "s2",
    title: "10,000+ CUPS OF COFFEE",
    subtitle: "Fueling midnight commits",
    icon: "☕",
    bg: "bg-[#F97316]",
    textColor: "text-white",
    initialRotate: 5,
    initialX: 0,
    initialY: 0,
  },
  {
    id: "s3",
    title: "TELKOM UNIVERSITY",
    subtitle: "Informatics Student // BDG",
    icon: "🎓",
    bg: "bg-[#EDB22E]",
    textColor: "text-neutral-900",
    initialRotate: -2,
    initialX: 0,
    initialY: 0,
  },
  {
    id: "s4",
    title: "CYBERSEC CERTIFIED",
    subtitle: "Google Security Hardening",
    icon: "🛡️",
    bg: "bg-[#10B981]",
    textColor: "text-white",
    initialRotate: 6,
    initialX: 0,
    initialY: 0,
  },
  {
    id: "s5",
    title: "BUG SLAYER 👾",
    subtitle: "It works on my machine!",
    icon: "👾",
    bg: "bg-[#E11D5A]",
    textColor: "text-white",
    initialRotate: -6,
    initialX: 0,
    initialY: 0,
  },
  {
    id: "s6",
    title: "TAILWIND CSS WIZARD",
    subtitle: "Pixel-perfect geometry",
    icon: "💅",
    bg: "bg-[#8B5CF6]",
    textColor: "text-white",
    initialRotate: 3,
    initialX: 0,
    initialY: 0,
  },
  {
    id: "s7",
    title: "TURSO & LIBSQL EDGE",
    subtitle: "Sub-millisecond query speed",
    icon: "⚡",
    bg: "bg-[#06B6D4]",
    textColor: "text-white",
    initialRotate: -5,
    initialX: 0,
    initialY: 0,
  },
  {
    id: "s8",
    title: "MADE WITH LOVE & PIXELS",
    subtitle: "Framer Motion magic ✦",
    icon: "✨",
    bg: "bg-[#FEF08A]",
    textColor: "text-neutral-900",
    initialRotate: 4,
    initialX: 0,
    initialY: 0,
  },
];

export default function ExperienceStickers() {
  const { t } = useLanguage();
  const boardRef = useRef<HTMLDivElement>(null);
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <section className="relative py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 overflow-hidden select-none">
      {/* Container Frame with Blueprint Corners */}
      <div
        ref={boardRef}
        className="relative bg-white/80 backdrop-blur-xs border-2 border-black p-6 sm:p-10 shadow-[8px_8px_0px_#000] overflow-hidden"
      >
        {/* Technical Grid background inside */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top Header Controls (Centered) */}
        <div className="relative z-10 flex flex-col items-center text-center pb-6 border-b-2 border-black mb-8">
          <div className="flex items-center justify-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <Sparkles className="w-4 h-4 text-[#EDB22E]" />
            <span>INTERACTIVE PLAYGROUND // DRAG & DROP</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight flex flex-wrap items-center justify-center gap-2">
            <span>{t("Milestone Sticker Pack", "Koleksi Stiker & Pencapaian")}</span>
            <span
              style={{ fontFamily: "var(--font-caveat), cursive" }}
              className="text-lg text-neutral-600 font-semibold"
            >
              ({t("drag them anywhere!", "geser & lempar sesukamu!")})
            </span>
          </h3>

          {/* Reset / Clean Board Button */}
          <div className="mt-4">
            <motion.button
              onClick={handleReset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-neutral-100 hover:bg-neutral-200 border-2 border-black font-mono text-xs font-bold text-neutral-900 shadow-[2px_2px_0px_#000] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t("Reset Stiker", "Reset Posisi")}</span>
            </motion.button>
          </div>
        </div>

        {/* Playful Instruction Subtitle (Centered) */}
        <div className="relative z-10 flex justify-center mb-8">
          <p className="font-mono text-xs text-neutral-600 flex items-center justify-center gap-2 text-center max-w-xl">
            <span className="w-2 h-2 bg-[#10B981] rounded-full inline-block shrink-0" />
            <span>
              {t(
                "Every sticker represents a chapter, a badge of honor, or an all-nighter bug hunt. Pick one up!",
                "Setiap stiker merepresentasikan babak pengalaman, lencana kebanggaan, dan serunya ngulik kode. Coba angkat!"
              )}
            </span>
          </p>
        </div>

        {/* Stickers Grid / Scattered Canvas */}
        <div key={resetKey} className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 min-h-[280px]">
          {DEFAULT_STICKERS.map((sticker, idx) => (
            <motion.div
              key={sticker.id}
              drag
              dragConstraints={boardRef}
              dragElastic={0.25}
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: sticker.initialRotate,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: sticker.initialRotate,
                y: 0,
              }}
              whileHover={{
                scale: 1.08,
                rotate: 0,
                boxShadow: "6px 6px 0px #000",
                zIndex: 30,
              }}
              whileDrag={{
                scale: 1.16,
                rotate: idx % 2 === 0 ? 5 : -5,
                boxShadow: "10px 10px 0px #000",
                zIndex: 50,
                cursor: "grabbing",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: idx * 0.05,
              }}
              className={`relative ${sticker.bg} ${sticker.textColor} border-2 border-black p-3.5 sm:p-4 shadow-[4px_4px_0px_#000] cursor-grab select-none flex flex-col justify-between`}
            >
              {/* Top Pin hole or tape indicator */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl sm:text-2xl">{sticker.icon}</span>
                <div className="w-2.5 h-2.5 rounded-full border border-black/40 bg-white/60" />
              </div>

              <div>
                <h4 className="font-mono text-xs sm:text-sm font-black tracking-tight leading-tight uppercase">
                  {sticker.title}
                </h4>
                <p className="font-sans text-[11px] font-semibold opacity-90 mt-1 leading-snug">
                  {sticker.subtitle}
                </p>
              </div>

              <div className="mt-3 pt-1.5 border-t border-black/20 flex items-center justify-between font-mono text-[9px] opacity-75">
                <span>BADGE #{idx + 1}</span>
                <span>✦ FIRMAN</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Handwritten Signature Note */}
        <div className="relative z-10 mt-8 pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2">
          <span
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="text-lg text-neutral-700 font-semibold"
          >
            {t(
              "“No bugs were harmed in the making of this journey!” 🐛✨",
              "“Tidak ada serangga (bug) yang tersakiti dalam petualangan ini!” 🐛✨"
            )}
          </span>
          <span className="font-mono text-[11px] font-bold text-neutral-500">
            EXPERIENCE PLAYGROUND // TELKOM UNIV
          </span>
        </div>
      </div>
    </section>
  );
}