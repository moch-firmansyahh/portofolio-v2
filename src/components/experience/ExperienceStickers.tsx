"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  RotateCcw,
  Shuffle,
  Rocket,
  Coffee,
  GraduationCap,
  ShieldCheck,
  Bug,
  Palette,
  Zap,
  Heart,
  Star,
  Flame,
  Code2,
  Terminal,
} from "lucide-react";
import { playBubblePop, playSquish, playCombo } from "@/components/playground/audioEffects";

interface Sticker {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  cardBg: string;
  textColor: string;
  initialRotate: number;
}

const DEFAULT_STICKERS: Sticker[] = [
  {
    id: "s1",
    title: "NEXT.JS 16 NINJA",
    subtitle: "Turbopack & App Router",
    icon: Rocket,
    iconBg: "bg-white text-neutral-900",
    cardBg: "bg-[#00C2FF]",
    textColor: "text-neutral-900",
    initialRotate: -3,
  },
  {
    id: "s2",
    title: "MIDNIGHT COFFEE",
    subtitle: "Fueling deep focus commits",
    icon: Coffee,
    iconBg: "bg-[#D97706] text-white",
    cardBg: "bg-[#F97316]",
    textColor: "text-white",
    initialRotate: 4,
  },
  {
    id: "s3",
    title: "TELKOM UNIVERSITY",
    subtitle: "Informatics Student // BDG",
    icon: GraduationCap,
    iconBg: "bg-[#171717] text-white",
    cardBg: "bg-[#EDB22E]",
    textColor: "text-neutral-900",
    initialRotate: -2,
  },
  {
    id: "s4",
    title: "CLEAN CODE POLICY",
    subtitle: "Type safety & zero slop",
    icon: ShieldCheck,
    iconBg: "bg-white text-[#10B981]",
    cardBg: "bg-[#10B981]",
    textColor: "text-white",
    initialRotate: 5,
  },
  {
    id: "s5",
    title: "BUG SLAYER",
    subtitle: "It works on my machine!",
    icon: Bug,
    iconBg: "bg-white text-[#E11D5A]",
    cardBg: "bg-[#E11D5A]",
    textColor: "text-white",
    initialRotate: -5,
  },
  {
    id: "s6",
    title: "TAILWIND WIZARD",
    subtitle: "Pixel-perfect geometry",
    icon: Palette,
    iconBg: "bg-white text-[#8B5CF6]",
    cardBg: "bg-[#8B5CF6]",
    textColor: "text-white",
    initialRotate: 3,
  },
  {
    id: "s7",
    title: "TURSO EDGE SPEED",
    subtitle: "Sub-millisecond queries",
    icon: Zap,
    iconBg: "bg-white text-[#06B6D4]",
    cardBg: "bg-[#06B6D4]",
    textColor: "text-white",
    initialRotate: -4,
  },
  {
    id: "s8",
    title: "MOTION MAGIC ✦",
    subtitle: "Framer Motion 60 FPS",
    icon: Sparkles,
    iconBg: "bg-[#EDB22E] text-neutral-900",
    cardBg: "bg-[#FFF275]",
    textColor: "text-neutral-900",
    initialRotate: 4,
  },
];

type StampType = "star" | "zap" | "coffee" | "flame" | "bug" | "heart";

interface CustomStamp {
  id: string;
  type: StampType;
  label: string;
  color: string;
  bgColor: string;
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
        initialRotate: Math.floor(Math.random() * 20) - 10,
      }))
    );
    setScatterKey((prev) => prev + 1);
    playCombo(true);
  };

  const addStamp = (type: StampType, label: string, color: string, bgColor: string) => {
    const newStamp: CustomStamp = {
      id: `stamp-${Date.now()}-${Math.random()}`,
      type,
      label,
      color,
      bgColor,
      x: (Math.random() - 0.5) * 160,
      y: (Math.random() - 0.5) * 80,
      rotate: Math.floor(Math.random() * 24) - 12,
    };
    setCustomStamps((prev) => [...prev, newStamp]);
    playBubblePop(1.4, true);
  };

  const stampTools: Array<{
    type: StampType;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    bgColor: string;
  }> = [
    { type: "star", label: "STAR", icon: Star, color: "text-[#EDB22E]", bgColor: "bg-[#FEF3C7]" },
    { type: "zap", label: "TURBO", icon: Zap, color: "text-[#00C2FF]", bgColor: "bg-[#E0F2FE]" },
    { type: "coffee", label: "COFFEE", icon: Coffee, color: "text-[#D97706]", bgColor: "bg-[#FED7AA]" },
    { type: "flame", label: "FIRE", icon: Flame, color: "text-[#E11D5A]", bgColor: "bg-[#FFE4E6]" },
    { type: "bug", label: "BUG", icon: Bug, color: "text-[#8B5CF6]", bgColor: "bg-[#EDE9FE]" },
    { type: "heart", label: "LOVE", icon: Heart, color: "text-[#F43F5E]", bgColor: "bg-[#FCE7F3]" },
  ];

  return (
    <section className="relative py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 select-none">
      {/* Container Frame with Blueprint Corners */}
      <div
        ref={boardRef}
        className="relative bg-white border-2 border-black p-6 sm:p-9 shadow-[8px_8px_0px_#000] overflow-hidden"
      >
        {/* Subtle Technical Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top Header Controls (Centered & Clean) */}
        <div className="relative z-10 flex flex-col items-center text-center pb-6 border-b-2 border-black mb-8">
          <div className="inline-flex items-center justify-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1.5">
            <Sparkles className="w-4 h-4 text-[#EDB22E]" />
            <span>INTERACTIVE PLAYGROUND // DRAG & DROP</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight flex flex-wrap items-center justify-center gap-2">
            <span>{t("Milestone Sticker Pack", "Koleksi Stiker & Pencapaian")}</span>
            <span
              style={{ fontFamily: "var(--font-caveat), cursive" }}
              className="text-xl text-neutral-600 font-semibold"
            >
              ({t("drag & toss them anywhere!", "geser & lempar sesukamu!")})
            </span>
          </h3>

          {/* Action Toolbar: Toss / Reset */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            <motion.button
              type="button"
              onClick={handleScatter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFF275] hover:bg-[#FFE600] border-2 border-black font-mono text-xs font-black text-neutral-900 shadow-[2px_2px_0px_#000] cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>{t("TOSS & SCATTER", "ACAK POSISI")}</span>
            </motion.button>

            <motion.button
              type="button"
              onClick={handleReset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-100 hover:bg-neutral-200 border-2 border-black font-mono text-xs font-bold text-neutral-900 shadow-[2px_2px_0px_#000] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t("Reset Board", "Reset Papan")}</span>
            </motion.button>
          </div>

          {/* Stamp Spawner Quick Palette with Clean Lucide SVGs */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
            <span className="font-mono text-[10px] text-neutral-500 font-bold uppercase mr-1">
              {t("STAMP TOOL:", "CAP STIKER:")}
            </span>
            {stampTools.map((tool) => {
              const ToolIcon = tool.icon;
              return (
                <motion.button
                  key={tool.label}
                  type="button"
                  onClick={() => addStamp(tool.type, tool.label, tool.color, tool.bgColor)}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-2.5 py-1 bg-white hover:bg-neutral-100 border border-black font-mono text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1.5"
                  title={`Stamp ${tool.label}`}
                >
                  <ToolIcon className={`w-3.5 h-3.5 ${tool.color} fill-current`} />
                  <span className="text-[10px] font-black">{tool.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Playful Instruction Subtitle */}
        <div className="relative z-10 flex justify-center mb-6">
          <p className="font-mono text-xs text-neutral-600 flex items-center justify-center gap-2 text-center max-w-lg">
            <span className="w-2 h-2 bg-[#10B981] rounded-full inline-block shrink-0 animate-ping" />
            <span>
              {t(
                "Every sticker represents a chapter, a badge of honor, or an all-nighter bug hunt. Pick one up!",
                "Setiap stiker merepresentasikan babak pengalaman, lencana kebanggaan, dan serunya ngulik kode. Coba angkat!"
              )}
            </span>
          </p>
        </div>

        {/* Die-Cut Vinyl Stickers Grid / Canvas */}
        <div
          key={scatterKey}
          className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 min-h-[300px]"
        >
          {stickers.map((sticker, idx) => {
            const StickerIcon = sticker.icon;
            return (
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
                  scale: 1.07,
                  rotate: 0,
                  boxShadow: "6px 6px 0px #000",
                  zIndex: 30,
                }}
                whileDrag={{
                  scale: 1.15,
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
                className={`relative ${sticker.cardBg} ${sticker.textColor} border-2 border-black p-3.5 sm:p-4 shadow-[4px_4px_0px_#000] cursor-grab select-none flex flex-col justify-between`}
              >
                {/* Top Badge: Lucide Icon in crisp container */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg border-2 border-black ${sticker.iconBg} flex items-center justify-center shadow-xs`}
                  >
                    <StickerIcon className="w-4.5 h-4.5" />
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full border border-black/40 bg-white/70" />
                </div>

                <div>
                  <h4 className="font-mono text-xs sm:text-[13px] font-black tracking-tight leading-tight uppercase">
                    {sticker.title}
                  </h4>
                  <p className="font-sans text-[11px] font-semibold opacity-90 mt-1 leading-snug">
                    {sticker.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-1.5 border-t border-black/20 flex items-center justify-between font-mono text-[9px] font-bold opacity-80 uppercase tracking-widest">
                  <span>STICKER #{idx + 1}</span>
                  <span>✦ DIE-CUT</span>
                </div>
              </motion.div>
            );
          })}

          {/* Draggable Custom Stamps on Canvas */}
          <AnimatePresence>
            {customStamps.map((stamp) => {
              const StampIcon =
                stamp.type === "star"
                  ? Star
                  : stamp.type === "zap"
                  ? Zap
                  : stamp.type === "coffee"
                  ? Coffee
                  : stamp.type === "flame"
                  ? Flame
                  : stamp.type === "bug"
                  ? Bug
                  : Heart;

              return (
                <motion.div
                  key={stamp.id}
                  drag
                  dragConstraints={boardRef}
                  dragElastic={0.25}
                  onDragStart={() => playBubblePop(1.2, true)}
                  onDragEnd={() => playSquish(true)}
                  initial={{ scale: 0, rotate: stamp.rotate, opacity: 0 }}
                  animate={{ scale: 1, rotate: stamp.rotate, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.15, cursor: "grab" }}
                  whileDrag={{ scale: 1.25, cursor: "grabbing", zIndex: 60 }}
                  className={`absolute left-1/2 top-1/2 px-3 py-1.5 ${stamp.bgColor} border-2 border-black shadow-[3px_3px_0px_#000] flex items-center gap-1.5 cursor-grab select-none z-30`}
                >
                  <StampIcon className={`w-4 h-4 ${stamp.color} fill-current`} />
                  <span className="font-mono text-[10px] font-black text-neutral-900 uppercase">
                    {stamp.label}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
