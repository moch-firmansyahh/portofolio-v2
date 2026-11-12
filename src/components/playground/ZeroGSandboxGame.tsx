"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { playBounce } from "./audioEffects";
import { Compass, RotateCcw, Sparkles, Wind, Orbit } from "lucide-react";

interface SandboxProps {
  soundEnabled: boolean;
}

interface SandboxItem {
  id: string;
  name: string;
  emoji: string;
  bg: string;
  textColor: string;
  mass: number;
}

const ITEMS: SandboxItem[] = [
  { id: "react", name: "REACT 19", emoji: "⚛️", bg: "bg-[#00C2FF]", textColor: "text-black", mass: 1 },
  { id: "next", name: "NEXT.JS 16", emoji: "▲", bg: "bg-black", textColor: "text-white", mass: 2.5 },
  { id: "coffee", name: "ESPRESSO", emoji: "☕", bg: "bg-[#F97316]", textColor: "text-white", mass: 1.2 },
  { id: "bug", name: "GLITCH", emoji: "👾", bg: "bg-[#E11D5A]", textColor: "text-white", mass: 0.8 },
  { id: "star", name: "PIXEL STAR", emoji: "✦", bg: "bg-[#EDB22E]", textColor: "text-black", mass: 0.5 },
  { id: "shield", name: "CYBER SHIELD", emoji: "🛡️", bg: "bg-[#10B981]", textColor: "text-white", mass: 2 },
  { id: "turso", name: "TURSO EDGE", emoji: "⚡", bg: "bg-[#06B6D4]", textColor: "text-black", mass: 1 },
  { id: "heart", name: "PASSION", emoji: "💖", bg: "bg-[#EC4899]", textColor: "text-white", mass: 0.6 },
];

export default function ZeroGSandboxGame({ soundEnabled }: SandboxProps) {
  const { t } = useLanguage();
  const arenaRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState<"float" | "drop" | "chaos">("float");
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
    setMode("float");
  };

  return (
    <div className="relative bg-white border-2 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b-2 border-black mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <Compass className="w-4 h-4 text-[#10B981]" />
            <span>MINI-GAME 04 // ZERO-G PHYSICS BENCH</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            {t("Zero-G Physics Sandbox", "Kotak Pasir Fisika Zero-G")}
          </h3>
        </div>

        {/* Gravity Modes Bar */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold select-none">
          <button
            type="button"
            onClick={() => setMode("float")}
            className={`px-3 py-1.5 border-2 border-black cursor-pointer shadow-[2px_2px_0px_#000] ${
              mode === "float" ? "bg-neutral-900 text-white" : "bg-neutral-100 hover:bg-neutral-200"
            }`}
          >
            0G FLOAT 🪐
          </button>

          <button
            type="button"
            onClick={() => setMode("drop")}
            className={`px-3 py-1.5 border-2 border-black cursor-pointer shadow-[2px_2px_0px_#000] ${
              mode === "drop" ? "bg-neutral-900 text-white" : "bg-neutral-100 hover:bg-neutral-200"
            }`}
          >
            1G GRAVITY 🌍
          </button>

          <button
            type="button"
            onClick={() => setMode("chaos")}
            className={`px-3 py-1.5 border-2 border-black cursor-pointer shadow-[2px_2px_0px_#000] ${
              mode === "chaos" ? "bg-[#E11D5A] text-white" : "bg-neutral-100 hover:bg-neutral-200"
            }`}
          >
            CHAOS 💥
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 bg-neutral-100 hover:bg-neutral-200 border-2 border-black cursor-pointer shadow-[2px_2px_0px_#000]"
            title="Reset sandbox"
          >
            <RotateCcw className="w-4 h-4 text-neutral-800" />
          </button>
        </div>
      </div>

      {/* Physics Arena Canvas */}
      <div
        ref={arenaRef}
        key={resetKey}
        className="relative bg-neutral-100 border-2 border-black h-[380px] sm:h-[440px] overflow-hidden select-none p-4"
        style={{
          backgroundImage:
            "radial-gradient(#000 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Arena Registration Crosshairs */}
        <div className="absolute top-2 left-2 font-mono text-[10px] text-neutral-400 pointer-events-none">
          PHYSICS ENGINE // BOUNDED 2D
        </div>
        <div className="absolute top-2 right-2 font-mono text-[10px] text-neutral-400 pointer-events-none">
          MODE: {mode.toUpperCase()}
        </div>

        {/* Draggable Objects */}
        <div className="relative w-full h-full flex flex-wrap items-center justify-around gap-6">
          {ITEMS.map((item, idx) => {
            const floatAnim =
              mode === "float"
                ? {
                    y: [-6, 6, -6],
                    rotate: [-3, 3, -3],
                    transition: {
                      repeat: Infinity,
                      duration: 2.5 + (idx % 3) * 0.5,
                      ease: "easeInOut" as const,
                    },
                  }
                : mode === "drop"
                ? {
                    y: 120,
                    rotate: (idx % 2 === 0 ? 1 : -1) * 8,
                    transition: { type: "spring" as const, stiffness: 220, damping: 15 },
                  }
                : {
                    x: [(idx - 4) * 20, (idx - 4) * -20, (idx - 4) * 20],
                    y: [(idx % 2 === 0 ? -1 : 1) * 40, (idx % 2 === 0 ? 1 : -1) * 40],
                    rotate: [0, 360],
                    transition: { repeat: Infinity, duration: 4, ease: "linear" as const },
                  };

            return (
              <motion.div
                key={item.id}
                drag
                dragConstraints={arenaRef}
                dragElastic={0.35}
                dragTransition={{ bounceStiffness: 450, bounceDamping: 14 }}
                onDragStart={() => playBounce(soundEnabled)}
                animate={floatAnim}
                whileHover={{ scale: 1.15, zIndex: 20 }}
                whileDrag={{
                  scale: 1.25,
                  rotate: idx % 2 === 0 ? 12 : -12,
                  zIndex: 50,
                  cursor: "grabbing",
                }}
                className={`relative px-4 py-3 sm:px-5 sm:py-4 ${item.bg} ${item.textColor} border-2 border-black shadow-[4px_4px_0px_#000] cursor-grab select-none flex items-center gap-2.5 shrink-0`}
              >
                <span className="text-2xl sm:text-3xl">{item.emoji}</span>
                <div>
                  <h4 className="font-mono text-xs sm:text-sm font-black tracking-tight leading-none">
                    {item.name}
                  </h4>
                  <span className="font-mono text-[9px] opacity-75 font-bold">
                    MASS: {item.mass}kg
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between font-mono text-xs text-neutral-600">
        <span>INERTIA &amp; VELOCITY MOMENTUM ACTIVE</span>
        <span>{t("Fling and throw objects against the walls!", "Lempar dan pantulkan objek ke dinding arena!")}</span>
      </div>
    </div>
  );
}