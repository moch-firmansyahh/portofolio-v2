"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { playSquish, playCombo } from "./audioEffects";
import { Bug, Sparkles, Trophy, Zap, RotateCcw } from "lucide-react";

interface BugSmasherProps {
  soundEnabled: boolean;
}

const BUG_TYPES = [
  { emoji: "👾", name: "Glitch Imp", points: 100 },
  { emoji: "🐛", name: "Caterpillar Null", points: 120 },
  { emoji: "🪲", name: "Memory Leak Beetle", points: 150 },
  { emoji: "🦟", name: "CORS Mosquito", points: 130 },
  { emoji: "🐞", name: "Syntax Ladybug", points: 110 },
];

export default function BugSmasherGame({ soundEnabled }: BugSmasherProps) {
  const { t } = useLanguage();

  const [activeSocket, setActiveSocket] = useState<number | null>(null);
  const [currentBug, setCurrentBug] = useState(BUG_TYPES[0]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [particles, setParticles] = useState<
    Array<{ id: number; socket: number; text: string }>
  >([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const bugIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start / Restart Game
  const startGame = () => {
    setScore(0);
    setCombo(0);
    setTimeLeft(30);
    setIsPlaying(true);
  };

  // Main countdown timer
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsPlaying(false);
          setActiveSocket(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  // Bug spawning loop
  useEffect(() => {
    if (!isPlaying) {
      if (bugIntervalRef.current) clearInterval(bugIntervalRef.current);
      return;
    }

    const spawnBug = () => {
      const socket = Math.floor(Math.random() * 9);
      const bug = BUG_TYPES[Math.floor(Math.random() * BUG_TYPES.length)];
      setActiveSocket(socket);
      setCurrentBug(bug);
    };

    spawnBug();
    bugIntervalRef.current = setInterval(spawnBug, 1100);

    return () => {
      if (bugIntervalRef.current) clearInterval(bugIntervalRef.current);
    };
  }, [isPlaying]);

  // Update High Score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  // Smash Bug Action
  const handleSmash = (socketIdx: number) => {
    if (!isPlaying || activeSocket !== socketIdx) return;

    playSquish(soundEnabled);

    const newCombo = combo + 1;
    setCombo(newCombo);

    if (newCombo % 4 === 0) {
      playCombo(soundEnabled);
    }

    const gainedPoints = currentBug.points * (newCombo >= 3 ? 2 : 1);
    setScore((prev) => prev + gainedPoints);

    // Floating score particle
    const pId = Date.now() + Math.random();
    setParticles((prev) => [
      ...prev,
      {
        id: pId,
        socket: socketIdx,
        text: `+${gainedPoints}${newCombo >= 3 ? " 🔥x2" : ""}`,
      },
    ]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== pId));
    }, 800);

    setActiveSocket(null);
  };

  return (
    <div className="relative bg-white border-2 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000]">
      {/* Game Header Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b-2 border-black mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <Bug className="w-4 h-4 text-[#E11D5A]" />
            <span>MINI-GAME 01 // WHACK-A-BUG</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            {t("Bug Smasher Arena", "Arena Pembasmi Bug")}
          </h3>
        </div>

        {/* Stats Pills */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-black select-none">
          <div className="px-3 py-1.5 bg-[#FFF275] border-2 border-black shadow-[2px_2px_0px_#000]">
            SCORE: {score}
          </div>
          <div className="px-3 py-1.5 bg-neutral-100 border-2 border-black shadow-[2px_2px_0px_#000]">
            TIME: {timeLeft}s
          </div>
          <div className="px-3 py-1.5 bg-[#10B981]/20 text-neutral-900 border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5 text-[#10B981]" />
            <span>BEST: {highScore}</span>
          </div>
        </div>
      </div>

      {/* Arena 3x3 Grid */}
      <div className="relative max-w-lg mx-auto">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6 bg-neutral-100 border-2 border-black shadow-inner">
          {Array.from({ length: 9 }).map((_, idx) => {
            const hasBug = isPlaying && activeSocket === idx;

            return (
              <div
                key={idx}
                onClick={() => handleSmash(idx)}
                className="relative aspect-square bg-white border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center cursor-pointer overflow-hidden group select-none hover:bg-neutral-50"
              >
                {/* Circuit socket crosshair */}
                <div className="absolute inset-1 border border-dashed border-neutral-300 pointer-events-none" />
                <span className="absolute bottom-1 right-1.5 font-mono text-[9px] font-bold text-neutral-400">
                  SOCKET #{idx + 1}
                </span>

                {/* Bug Character */}
                <AnimatePresence mode="wait">
                  {hasBug && (
                    <motion.div
                      key="bug"
                      initial={{ scale: 0.2, y: 30, rotate: -20 }}
                      animate={{
                        scale: 1,
                        y: 0,
                        rotate: 0,
                      }}
                      exit={{
                        scaleX: 1.8,
                        scaleY: 0.2,
                        opacity: 0,
                        transition: { duration: 0.2 },
                      }}
                      transition={{ type: "spring", stiffness: 450, damping: 20 }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.7 }}
                      className="text-4xl sm:text-5xl cursor-pointer filter drop-shadow-md"
                    >
                      {currentBug.emoji}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Floating Score Particle */}
                <AnimatePresence>
                  {particles
                    .filter((p) => p.socket === idx)
                    .map((p) => (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 1, y: 0, scale: 0.8 }}
                        animate={{ opacity: 0, y: -45, scale: 1.3 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center font-mono font-black text-xs sm:text-sm text-[#E11D5A] pointer-events-none z-30"
                      >
                        {p.text}
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls Bar & Start Button */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t-2 border-black/10">
        <div className="font-mono text-xs text-neutral-600 flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#EDB22E]" />
          <span>
            {combo >= 2
              ? t(`STREAK ACTIVE: x${combo} MULTIPLIER! 🔥`, `STREAK AKTIF: x${combo} PENGALI! 🔥`)
              : t("Smash bugs as fast as they appear!", "Basmi bug secepat mungkin begitu muncul!")}
          </span>
        </div>

        <div>
          {isPlaying ? (
            <motion.button
              type="button"
              onClick={() => setIsPlaying(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 border-2 border-black font-mono text-xs font-black cursor-pointer shadow-[2px_2px_0px_#000]"
            >
              {t("PAUSE GAME", "JEDA PERMAINAN")}
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={startGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#00C2FF] hover:bg-[#38C6F4] text-black border-2 border-black font-mono text-xs font-black cursor-pointer shadow-[3px_3px_0px_#000]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>
                {score > 0
                  ? t("PLAY AGAIN 🚀", "MAIN LAGI 🚀")
                  : t("START SQUASHING! 🚀", "MULAI MAIN! 🚀")}
              </span>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}