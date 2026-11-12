"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { playFruitMerge } from "./audioEffects";
import { Trophy, RotateCcw, Sparkles } from "lucide-react";

interface FruitMergeProps {
  soundEnabled: boolean;
}

interface FruitDef {
  level: number;
  emoji: string;
  name: string;
  size: number;
  score: number;
  bg: string;
}

const FRUITS: FruitDef[] = [
  { level: 1, emoji: "🍒", name: "Cherry", size: 38, score: 10, bg: "bg-red-100" },
  { level: 2, emoji: "🍓", name: "Strawberry", size: 46, score: 25, bg: "bg-pink-100" },
  { level: 3, emoji: "🍇", name: "Grape", size: 54, score: 50, bg: "bg-purple-100" },
  { level: 4, emoji: "🍊", name: "Orange", size: 64, score: 100, bg: "bg-orange-100" },
  { level: 5, emoji: "🍎", name: "Apple", size: 76, score: 200, bg: "bg-rose-100" },
  { level: 6, emoji: "🍍", name: "Pineapple", size: 90, score: 400, bg: "bg-yellow-100" },
  { level: 7, emoji: "🍉", name: "Watermelon", size: 106, score: 1000, bg: "bg-emerald-100" },
];

interface DroppedFruit {
  id: number;
  level: number;
  x: number;
  y: number;
}

export default function FruitMergeGame({ soundEnabled }: FruitMergeProps) {
  const { t } = useLanguage();
  const boxRef = useRef<HTMLDivElement>(null);

  const [droppedFruits, setDroppedFruits] = useState<DroppedFruit[]>([]);
  const [nextFruitLevel, setNextFruitLevel] = useState<number>(1);
  const [aimX, setAimX] = useState<number>(180);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; text: string }>
  >([]);

  const currentFruitDef = FRUITS[nextFruitLevel - 1] || FRUITS[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const clampedX = Math.max(30, Math.min(rect.width - 30, relativeX));
    setAimX(clampedX);
  };

  const handleDrop = () => {
    if (!boxRef.current) return;
    const boxWidth = boxRef.current.clientWidth;
    const boxHeight = boxRef.current.clientHeight;

    const fruitDef = currentFruitDef;
    const id = Date.now() + Math.random();

    // Check collision / merge with existing fruits near bottom
    let merged = false;
    let targetX = aimX;
    let targetY = boxHeight - fruitDef.size - 10;

    // Check if an existing fruit of same level is close to the drop landing area
    const updated = [...droppedFruits];
    for (let i = 0; i < updated.length; i++) {
      const f = updated[i];
      if (f.level === fruitDef.level) {
        const dx = Math.abs(f.x - targetX);
        const dy = Math.abs(f.y - targetY);
        const dist = Math.hypot(dx, dy);

        if (dist < fruitDef.size * 1.4 && f.level < FRUITS.length) {
          // MERGE SUCCESS!
          const nextLvl = f.level + 1;
          const mergedDef = FRUITS[nextLvl - 1];

          updated.splice(i, 1);
          updated.push({
            id: Date.now() + Math.random(),
            level: nextLvl,
            x: (f.x + targetX) / 2,
            y: (f.y + targetY) / 2,
          });

          merged = true;
          const pts = mergedDef.score;
          setScore((prev) => {
            const next = prev + pts;
            if (next > highScore) setHighScore(next);
            return next;
          });

          playFruitMerge(nextLvl, soundEnabled);

          // Particle burst
          const pId = Date.now();
          setParticles((prev) => [
            ...prev,
            { id: pId, x: targetX, y: targetY - 20, text: `+${pts} ${mergedDef.name}!` },
          ]);
          setTimeout(() => {
            setParticles((prev) => prev.filter((p) => p.id !== pId));
          }, 900);
          break;
        }
      }
    }

    if (!merged) {
      // Calculate stacking height based on fruits already there
      const fruitsBelow = droppedFruits.filter(
        (f) => Math.abs(f.x - targetX) < fruitDef.size
      );
      if (fruitsBelow.length > 0) {
        const highestFruit = fruitsBelow.reduce(
          (min, f) => (f.y < min.y ? f : min),
          fruitsBelow[0]
        );
        targetY = Math.max(70, highestFruit.y - fruitDef.size - 6);
      }

      updated.push({
        id,
        level: fruitDef.level,
        x: targetX,
        y: targetY,
      });

      playFruitMerge(fruitDef.level, soundEnabled);
    }

    setDroppedFruits(updated);

    // Pick next fruit (usually level 1-3)
    const randomLvl = Math.floor(Math.random() * 3) + 1;
    setNextFruitLevel(randomLvl);
  };

  const handleReset = () => {
    setDroppedFruits([]);
    setScore(0);
  };

  return (
    <div className="relative bg-white border-2 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b-2 border-black mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <span className="text-base">🍉</span>
            <span>CASUAL GAME 01 // SUIKA MERGE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            {t("Fruit Drop & Merge", "Gabung Buah Semangka")}
          </h3>
        </div>

        {/* Score & Next Fruit */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-black select-none">
          <div className="px-3 py-1.5 bg-[#FFF275] border-2 border-black shadow-[2px_2px_0px_#000]">
            SCORE: {score}
          </div>
          <div className="px-3 py-1.5 bg-[#10B981]/20 text-neutral-900 border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5 text-[#10B981]" />
            <span>BEST: {highScore}</span>
          </div>
          <div className="px-2.5 py-1 bg-white border-2 border-black flex items-center gap-1 shadow-[2px_2px_0px_#000]">
            <span className="text-[10px] text-neutral-500 font-bold">NEXT:</span>
            <span className="text-lg">{currentFruitDef.emoji}</span>
          </div>
          <motion.button
            onClick={handleReset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 bg-neutral-100 hover:bg-neutral-200 border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
            title="Reset board"
          >
            <RotateCcw className="w-4 h-4 text-neutral-800" />
          </motion.button>
        </div>
      </div>

      {/* Fruit Drop Container */}
      <div
        ref={boxRef}
        onMouseMove={handleMouseMove}
        onClick={handleDrop}
        className="relative bg-[#FFFBEB] border-2 border-black h-[420px] sm:h-[460px] max-w-lg mx-auto overflow-hidden cursor-crosshair select-none shadow-inner"
      >
        {/* Top Aiming Dropper */}
        <div
          style={{ left: aimX }}
          className="absolute top-2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30 transition-all duration-75"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-3xl filter drop-shadow-md"
          >
            {currentFruitDef.emoji}
          </motion.div>
          <div className="w-0.5 h-6 bg-black/30 border-l border-dashed border-black/50" />
        </div>

        {/* Dropped Fruits */}
        {droppedFruits.map((f) => {
          const def = FRUITS[f.level - 1] || FRUITS[0];

          return (
            <motion.div
              key={f.id}
              initial={{ scale: 0.2, y: 20 }}
              animate={{ scale: 1, y: f.y }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
              style={{
                left: f.x - def.size / 2,
                top: 0,
                width: def.size,
                height: def.size,
              }}
              className={`absolute rounded-full border-2 border-black ${def.bg} flex items-center justify-center shadow-[3px_3px_0px_#000] cursor-pointer`}
            >
              <span style={{ fontSize: `${def.size * 0.6}px` }}>
                {def.emoji}
              </span>
            </motion.div>
          );
        })}

        {/* Merge Floating Scores */}
        <AnimatePresence>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 1, y: 0, scale: 0.8 }}
              animate={{ opacity: 0, y: -45, scale: 1.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ left: p.x - 40, top: p.y }}
              className="absolute font-mono font-black text-xs sm:text-sm text-[#E11D5A] pointer-events-none z-40 whitespace-nowrap bg-white/90 px-2 py-0.5 border border-black shadow-xs"
            >
              {p.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Bottom Container Floor */}
        <div className="absolute bottom-0 inset-x-0 h-2 bg-neutral-900" />
      </div>

      {/* Instructions / Evolution Ladder */}
      <div className="mt-5 pt-4 border-t-2 border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-neutral-700">
        <div className="flex items-center gap-1 overflow-x-auto py-1">
          <span className="font-bold text-neutral-500 mr-1">{t("EVOLVE:", "URUTAN:")}</span>
          {FRUITS.map((f, i) => (
            <span key={f.level} className="flex items-center text-sm">
              <span>{f.emoji}</span>
              {i < FRUITS.length - 1 && <span className="text-neutral-400 mx-0.5">→</span>}
            </span>
          ))}
        </div>
        <span className="font-bold text-neutral-900">
          {t("Click anywhere to drop fruit! 🍉", "Klik di mana saja untuk menjatuhkan buah! 🍉")}
        </span>
      </div>
    </div>
  );
}