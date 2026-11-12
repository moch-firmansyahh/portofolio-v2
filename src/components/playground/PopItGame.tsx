"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { playBubblePop, playJackpot } from "./audioEffects";
import { Sparkles, Timer, RotateCcw, Trophy } from "lucide-react";

interface PopItProps {
  soundEnabled: boolean;
}

const PASTEL_COLORS = [
  "bg-[#FF9AA2]", // Coral
  "bg-[#FFB7B2]", // Peach
  "bg-[#FFDAC1]", // Warm cream
  "bg-[#E2F0CB]", // Mint
  "bg-[#B5EAD7]", // Seafoam
  "bg-[#C7CEEA]", // Periwinkle
];

export default function PopItGame({ soundEnabled }: PopItProps) {
  const { t } = useLanguage();
  const totalBubbles = 30;

  const [popped, setPopped] = useState<boolean[]>(Array(totalBubbles).fill(false));
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Timer loop
  useEffect(() => {
    if (isRunning) {
      const start = Date.now() - timer;
      timerRef.current = setInterval(() => {
        setTimer(Date.now() - start);
      }, 50);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const handlePop = (index: number) => {
    if (popped[index]) return;

    if (!isRunning && !isCompleted) {
      setIsRunning(true);
    }

    const next = [...popped];
    next[index] = true;
    setPopped(next);

    // Play bubble pop audio with pitch scaling
    const pitch = 0.8 + (index % 6) * 0.12;
    playBubblePop(pitch, soundEnabled);

    // Check if all popped
    if (next.every(Boolean)) {
      setIsRunning(false);
      setIsCompleted(true);
      playJackpot(soundEnabled);

      const finalTime = timer;
      if (!bestTime || finalTime < bestTime) {
        setBestTime(finalTime);
      }
    }
  };

  const handleReset = () => {
    setPopped(Array(totalBubbles).fill(false));
    setIsRunning(false);
    setIsCompleted(false);
    setTimer(0);
  };

  const formattedTime = (timer / 1000).toFixed(2);
  const formattedBest = bestTime ? (bestTime / 1000).toFixed(2) + "s" : "--";
  const poppedCount = popped.filter(Boolean).length;

  return (
    <div className="relative bg-white border-2 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b-2 border-black mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <span className="text-base">🫧</span>
            <span>CASUAL GAME 02 // ASMR BUBBLE POP-IT</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            {t("Satisfying Bubble Pop-It", "Pop-It Bubble Wrap ASMR")}
          </h3>
        </div>

        {/* Stats & Timer */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-black select-none">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFF275] border-2 border-black shadow-[2px_2px_0px_#000]">
            <Timer className="w-3.5 h-3.5" />
            <span>TIME: {formattedTime}s</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 bg-[#10B981]/20 text-neutral-900 border-2 border-black shadow-[2px_2px_0px_#000]">
            <Trophy className="w-3.5 h-3.5 text-[#10B981]" />
            <span>BEST: {formattedBest}</span>
          </div>
          <motion.button
            onClick={handleReset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t("REFILL", "ISI ULANG")}</span>
          </motion.button>
        </div>
      </div>

      {/* Bubble Pad Grid */}
      <div className="max-w-xl mx-auto p-6 sm:p-8 bg-neutral-100 border-2 border-black shadow-inner relative select-none">
        <div className="grid grid-cols-5 sm:grid-cols-6 gap-3 sm:gap-4">
          {popped.map((isPop, index) => {
            const color = PASTEL_COLORS[Math.floor(index / 5) % PASTEL_COLORS.length];

            return (
              <motion.button
                key={index}
                type="button"
                onClick={() => handlePop(index)}
                whileHover={{ scale: isPop ? 1 : 1.12 }}
                whileTap={{ scale: 0.85 }}
                animate={
                  isPop
                    ? { scale: 0.88, filter: "brightness(0.92)" }
                    : { scale: 1, filter: "brightness(1)" }
                }
                transition={{ type: "spring", stiffness: 450, damping: 15 }}
                className={`relative aspect-square rounded-full border-2 border-black ${color} shadow-[3px_3px_0px_#000] flex items-center justify-center cursor-pointer overflow-hidden transition-colors`}
              >
                {/* 3D Highlight reflection */}
                {!isPop && (
                  <div className="absolute top-1.5 left-2 w-3 h-2 rounded-full bg-white/60 -rotate-30 pointer-events-none" />
                )}

                {/* Indented inner circle when popped */}
                {isPop && (
                  <div className="w-5 h-5 rounded-full border border-black/40 bg-black/15 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/30" />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Victory Banner */}
        <AnimatePresence>
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6 p-4 bg-[#FFF275] border-2 border-black text-center shadow-[4px_4px_0px_#000]"
            >
              <h4 className="font-mono text-base font-black text-neutral-900">
                🎉 ALL 30 BUBBLES POPPED IN {formattedTime}s! 🎉
              </h4>
              <p className="font-sans text-xs text-neutral-700 font-semibold mt-1">
                {t("Pure relaxation! Click REFILL to play again.", "Sangat memuaskan! Klik ISI ULANG untuk bermain lagi.")}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Footer */}
      <div className="mt-5 pt-3 border-t border-black/10 flex items-center justify-between font-mono text-xs text-neutral-600">
        <span>POPPED: {poppedCount} / {totalBubbles}</span>
        <span className="font-bold text-neutral-900">
          {t("Tap bubbles to pop! Listen with sound on 🫧", "Ketuk gelembung untuk meletuskannya! 🫧")}
        </span>
      </div>
    </div>
  );
}