"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, RotateCcw, Shuffle, Plus, Award } from "lucide-react";
import { playBubblePop, playSquish, playCombo } from "@/components/playground/audioEffects";

interface Sticker {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  bg: string;
  textColor: string;
  initialRotate: number;
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
  },
  {
    id: "s2",
    title: "10,000+ CUPS OF COFFEE",
    subtitle: "Fueling midnight commits",
    icon: "☕",
    bg: "bg-[#F97316]",
    textColor: "text-white",
    initialRotate: 5,
  },
  {
    id: "s3",
    title: "TELKOM UNIVERSITY",
    subtitle: "Informatics Student // BDG",
    icon: "🎓",
    bg: "bg-[#EDB22E]",
    textColor: "text-neutral-900",
    initialRotate: -2,
  },
  {
    id: "s4",
    title: "CYBERSEC CERTIFIED",
    subtitle: "Google Security Hardening",
    icon: "🛡️",
    bg: "bg-[#10B981]",
    textColor: "text-white",
    initialRotate: 6,
  },
  {
    id: "s5",
    title: "BUG SLAYER 👾",
    subtitle: "It works on my machine!",
    icon: "👾",
    bg: "bg-[#E11D5A]",
    textColor: "text-white",
    initialRotate: -6,
  },
  {
    id: "s6",
    title: "TAILWIND CSS WIZARD",
    subtitle: "Pixel-perfect geometry",
    icon: "💅",
    bg: "bg-[#8B5CF6]",
    textColor: "text-white",
    initialRotate: 3,
  },
  {
    id: "s7",
    title: "TURSO & LIBSQL EDGE",
    subtitle: "Sub-millisecond query speed",
    icon: "⚡",
    bg: "bg-[#06B6D4]",
    textColor: "text-white",
    initialRotate: -5,
  },
  {
    id: "s8",
    title: "MADE WITH LOVE & PIXELS",
    subtitle: "Framer Motion magic ✦",
    icon: "✨",
    bg: "bg-[#FFF275]",
    textColor: "text-neutral-900",
    initialRotate: 4,
  },
];

interface CustomStamp {
  id: string;
  emoji: string;
  label: string;
  x: number;
  y: number;
  rotate: number;
}

export default function ExperienceStickers() {
  const { t } = useLanguage();
  const boardRef = useRef<HTMLDivElement>(null);
  const [stickers, setStickers] = useState<Sticker[]>(DEFAULT_STICKERS);
  const [customStamps, setCustomStamps] = useState<CustomStamp[]>([]);
  const [scatterKey, setScatterKey] = useState(0);

  const handleReset = () => {
    setStickers(DEFAULT_STICKERS);
    setCustomStamps([]);
    setScatterKey((prev) => prev + 1);
    playSquish(true);
  };

  const handleScatter = () => {
    setStickers((prev) =>
      prev.map((s) => ({
        ...s,
        initialRotate: Math.floor(Math.random() * 24) - 12,
      }))
    );
    setScatterKey((prev) => prev + 1);
    playCombo(true);
  };

  const addStamp = (emoji: string, label: string) => {
    const newStamp: CustomStamp = {
      id: `stamp-${Date.now()}-${Math.random()}`,
      emoji,
      label,
      x: (Math.random() - 0.5) * 160,
      y: (Math.random() - 0.5) * 80,
      rotate: Math.floor(Math.random() * 20) - 10,
    };
    setCustomStamps((prev) => [...prev, newStamp]);
    playBubblePop(1.4, true);
  };

  return (
    <section className="relative py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 overflow-hidden select-none">
      {/* Container Frame with Blueprint Corners */}
      <div
        ref={boardRef}
        className="relative bg-white/90 backdrop-blur-xs border-2 border-black p-6 sm:p-10 shadow-[8px_8px_0px_#000] overflow-hidden"
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
              ({t("drag & throw them anywhere!", "geser & lempar sesukamu!")})
            </span>
          </h3>

          {/* Action Toolbar: Toss / Reset / Stamp Spawner */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            <motion.button
              onClick={handleScatter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFF275] hover:bg-[#FFE600] border-2 border-black font-mono text-xs font-black text-neutral-900 shadow-[2px_2px_0px_#000] cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>{t("TOSS & SCATTER 🎲", "ACAK POSISI 🎲")}</span>
            </motion.button>

            <motion.button
              onClick={handleReset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-100 hover:bg-neutral-200 border-2 border-black font-mono text-xs font-bold text-neutral-900 shadow-[2px_2px_0px_#000] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t("Reset Board", "Reset Papan")}</span>
            </motion.button>
          </div>

          {/* Stamp Spawner Quick Palette */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
            <span className="font-mono text-[10px] text-neutral-500 font-bold uppercase mr-1">
              {t("STAMP TOOL:", "CAP STIKER:")}
            </span>
            {[
              { emoji: "⭐", label: "GOLD STAR" },
              { emoji: "⚡", label: "TURBO" },
              { emoji: "☕", label: "COFFEE" },
              { emoji: "🔥", label: "FIRE" },
              { emoji: "👾", label: "BUG HUNT" },
              { emoji: "💖", label: "LOVE" },
            ].map((stamp) => (
              <motion.button
                key={stamp.label}
                type="button"
                onClick={() => addStamp(stamp.emoji, stamp.label)}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="px-2 py-1 bg-white hover:bg-[#00C2FF] border border-black font-mono text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1"
                title={`Stamp ${stamp.label}`}
              >
                <span>{stamp.emoji}</span>
                <span className="text-[10px] font-black">{stamp.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Playful Instruction Subtitle (Centered) */}
        <div className="relative z-10 flex justify-center mb-8">
          <p className="font-mono text-xs text-neutral-600 flex items-center justify-center gap-2 text-center max-w-xl">
            <span className="w-2 h-2 bg-[#10B981] rounded-full inline-block shrink-0 animate-ping" />
            <span>
              {t(
                "Every sticker represents a chapter, a badge of honor, or an all-nighter bug hunt. Pick one up!",
                "Setiap stiker merepresentasikan babak pengalaman, lencana kebanggaan, dan serunya ngulik kode. Coba angkat!"
              )}
            </span>
          </p>
        </div>

        {/* Stickers Grid / Scattered Canvas */}
        <div
          key={scatterKey}
          className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 min-h-[300px]"
        >
          {stickers.map((sticker, idx) => (
            <motion.div
              key={sticker.id}
              drag
              dragConstraints={boardRef}
              dragElastic={0.25}
              onDragStart={() => playBubblePop(1.1, true)}
              onDragEnd={() => playSquish(true)}
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
                rotate: idx % 2 === 0 ? 6 : -6,
                boxShadow: "10px 10px 0px #000",
                zIndex: 50,
                cursor: "grabbing",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: idx * 0.04,
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

        {/* Dynamic User Stamped Stickers */}
        <AnimatePresence>
          {customStamps.map((stamp) => (
            <motion.div
              key={stamp.id}
              drag
              dragConstraints={boardRef}
              dragElastic={0.2}
              initial={{ scale: 0, rotate: stamp.rotate }}
              animate={{ scale: 1, rotate: stamp.rotate }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.15, cursor: "grab" }}
              whileDrag={{ scale: 1.25, cursor: "grabbing" }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="absolute left-1/2 top-1/2 bg-white border-2 border-black px-3 py-1.5 shadow-[4px_4px_0px_#000] flex items-center gap-1.5 z-40 select-none"
              style={{
                transform: `translate(${stamp.x}px, ${stamp.y}px)`,
              }}
            >
              <span className="text-lg">{stamp.emoji}</span>
              <span className="font-mono text-[10px] font-black uppercase text-neutral-900">
                {stamp.label}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>

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
