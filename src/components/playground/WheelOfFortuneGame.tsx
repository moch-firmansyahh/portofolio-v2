"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { playWheelTick, playJackpot } from "./audioEffects";
import { Sparkles, Trophy, RotateCcw } from "lucide-react";

interface WheelProps {
  soundEnabled: boolean;
}

interface Segment {
  label: string;
  emoji: string;
  color: string;
}

const SEGMENTS: Segment[] = [
  { label: "Traktir Kopi Dingin", emoji: "☕", color: "#FDE047" }, // Yellow
  { label: "Hoki 999% Seharian", emoji: "🌟", color: "#67E8F9" }, // Cyan
  { label: "Makan Enak Malam Ini", emoji: "🍕", color: "#FCA5A5" }, // Rose
  { label: "Tidur Nyenyak 9 Jam", emoji: "😴", color: "#C4B5FD" }, // Purple
  { label: "Liburan Impian Mendadak", emoji: "🏖️", color: "#86EFAC" }, // Emerald
  { label: "Rezeki Nomplok 1 Miliar", emoji: "💎", color: "#FDBA74" }, // Orange
  { label: "Mood Booster Seharian", emoji: "🚀", color: "#93C5FD" }, // Blue
  { label: "Menang Game Terus", emoji: "🎮", color: "#F472B6" }, // Pink
];

export default function WheelOfFortuneGame({ soundEnabled }: WheelProps) {
  const { t } = useLanguage();

  const [rotation, setRotation] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [result, setResult] = useState<Segment | null>(null);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);

    // Pick random extra spins (between 5 and 9 full rotations + random segment angle)
    const extraSpins = 360 * 6;
    const randomAngle = Math.floor(Math.random() * 360);
    const targetRotation = rotation + extraSpins + randomAngle;

    setRotation(targetRotation);

    // Play periodic peg ticks during spin
    const tickInterval = setInterval(() => {
      playWheelTick(soundEnabled);
    }, 120);

    setTimeout(() => {
      clearInterval(tickInterval);
      setIsSpinning(false);

      // Determine winning segment based on final angle
      // Needle is at top (270deg or 0deg pointer)
      const normalizedAngle = (360 - (targetRotation % 360)) % 360;
      const segmentAngle = 360 / SEGMENTS.length;
      const winningIndex = Math.floor(normalizedAngle / segmentAngle) % SEGMENTS.length;

      const won = SEGMENTS[winningIndex];
      setResult(won);
      playJackpot(soundEnabled);
    }, 4200);
  };

  return (
    <div className="relative bg-white border-2 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b-2 border-black mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <span className="text-base">🎡</span>
            <span>CASUAL GAME 04 // WHEEL OF FORTUNE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            {t("Wheel of Daily Fortunes", "Roda Keberuntungan & Hadiah Hoki")}
          </h3>
        </div>

        <div>
          <motion.button
            onClick={spinWheel}
            disabled={isSpinning}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#FFF275] hover:bg-[#FFEB3B] text-black border-2 border-black font-mono text-xs font-black shadow-[3px_3px_0px_#000] disabled:opacity-50 cursor-pointer"
          >
            <span>{isSpinning ? "SEDANG BERPUTAR... 🌪️" : "PUTAR RODA HOKI! 🎡"}</span>
          </motion.button>
        </div>
      </div>

      {/* Wheel Area */}
      <div className="relative max-w-sm sm:max-w-md mx-auto my-4 flex flex-col items-center">
        {/* Needle / Flapper Pin at Top */}
        <div className="relative z-30 -mb-4 flex flex-col items-center pointer-events-none">
          <motion.div
            animate={isSpinning ? { rotate: [-10, 10, -10] } : { rotate: 0 }}
            transition={{ repeat: Infinity, duration: 0.15 }}
            className="w-8 h-9 bg-[#E11D5A] border-2 border-black shadow-md flex items-center justify-center rotate-45"
          >
            <div className="w-2.5 h-2.5 bg-white rounded-full -rotate-45" />
          </motion.div>
        </div>

        {/* Giant Rotating Wheel SVG */}
        <div className="relative w-72 h-72 sm:w-84 sm:h-84 select-none">
          <motion.div
            animate={{ rotate: rotation }}
            transition={{ duration: 4.2, ease: [0.15, 0.9, 0.2, 1] }}
            className="w-full h-full rounded-full border-4 border-black overflow-hidden shadow-[8px_8px_0px_#000] relative"
          >
            <svg viewBox="0 0 400 400" className="w-full h-full block">
              {SEGMENTS.map((seg, i) => {
                const angle = 360 / SEGMENTS.length;
                const startAngle = i * angle;
                const endAngle = (i + 1) * angle;

                const rad1 = ((startAngle - 90) * Math.PI) / 180;
                const rad2 = ((endAngle - 90) * Math.PI) / 180;

                const x1 = 200 + 195 * Math.cos(rad1);
                const y1 = 200 + 195 * Math.sin(rad1);
                const x2 = 200 + 195 * Math.cos(rad2);
                const y2 = 200 + 195 * Math.sin(rad2);

                const midAngle = startAngle + angle / 2;
                const midRad = ((midAngle - 90) * Math.PI) / 180;
                const textX = 200 + 120 * Math.cos(midRad);
                const textY = 200 + 120 * Math.sin(midRad);

                return (
                  <g key={i}>
                    {/* Wedge slice */}
                    <path
                      d={`M 200 200 L ${x1} ${y1} A 195 195 0 0 1 ${x2} ${y2} Z`}
                      fill={seg.color}
                      stroke="#000000"
                      strokeWidth="2.5"
                    />
                    {/* Emoji Label in slice */}
                    <text
                      x={textX}
                      y={textY}
                      fontSize="26"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${midAngle + 90}, ${textX}, ${textY})`}
                    >
                      {seg.emoji}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Center Hub */}
            <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-neutral-900 border-3 border-white shadow-lg flex items-center justify-center font-mono font-black text-xs text-white z-20">
              ✦
            </div>
          </motion.div>
        </div>
      </div>

      {/* Result Announcement Modal / Banner */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-5 sm:p-6 bg-[#FEF08A] border-2 border-black text-center shadow-[6px_6px_0px_#000] max-w-md mx-auto"
          >
            <div className="text-4xl sm:text-5xl mb-2">{result.emoji}</div>
            <span className="font-mono text-xs font-black uppercase text-neutral-600 block mb-1">
              {t("YOUR FORTUNE FOR TODAY:", "RAMALAN HOKI KAMU HARI INI:")}
            </span>
            <h4 className="font-mono text-xl sm:text-2xl font-black text-neutral-900 leading-tight">
              &ldquo;{result.label}&rdquo;
            </h4>
            <div className="mt-4">
              <button
                type="button"
                onClick={spinWheel}
                className="px-4 py-2 bg-neutral-900 text-white font-mono text-xs font-black border-2 border-black shadow-[2px_2px_0px_#00C2FF] cursor-pointer"
              >
                {t("PUTAR LAGI 🎡", "PUTAR LAGI 🎡")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-5 pt-3 border-t border-black/10 flex items-center justify-between font-mono text-xs text-neutral-600">
        <span>ANGULAR MOMENTUM &amp; FRICTION DECAY</span>
        <span className="font-bold text-neutral-900">
          {t("Spin and see your luck today! 🎡", "Putar roda dan lihat hoki kamu hari ini! 🎡")}
        </span>
      </div>
    </div>
  );
}