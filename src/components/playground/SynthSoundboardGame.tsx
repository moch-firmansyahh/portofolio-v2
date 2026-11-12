"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { playSynthPad } from "./audioEffects";
import { Music, Play, Square, Sparkles } from "lucide-react";

interface SynthProps {
  soundEnabled: boolean;
}

interface Pad {
  id: number;
  name: string;
  keyLabel: string;
  type: string;
  bg: string;
  textColor: string;
}

const PADS: Pad[] = [
  { id: 1, name: "808 KICK", keyLabel: "1", type: "Low End", bg: "bg-[#00C2FF]", textColor: "text-neutral-900" },
  { id: 2, name: "CYBER SNARE", keyLabel: "2", type: "Mid Pop", bg: "bg-[#E11D5A]", textColor: "text-white" },
  { id: 3, name: "GLITCH HI-HAT", keyLabel: "3", type: "High Tick", bg: "bg-[#EDB22E]", textColor: "text-neutral-900" },
  { id: 4, name: "SYNTH CHORD", keyLabel: "4", type: "Harmonic", bg: "bg-[#8B5CF6]", textColor: "text-white" },
  { id: 5, name: "LASER PEW", keyLabel: "5", type: "FX Zap", bg: "bg-[#EF4444]", textColor: "text-white" },
  { id: 6, name: "RETRO COIN", keyLabel: "6", type: "Chime", bg: "bg-[#FEF08A]", textColor: "text-neutral-900" },
  { id: 7, name: "POWER UP", keyLabel: "7", type: "Arp Rise", bg: "bg-[#10B981]", textColor: "text-white" },
  { id: 8, name: "1-UP JINGLE", keyLabel: "8", type: "Fanfare", bg: "bg-[#38C6F4]", textColor: "text-neutral-900" },
];

export default function SynthSoundboardGame({ soundEnabled }: SynthProps) {
  const { t } = useLanguage();
  const [activePad, setActivePad] = useState<number | null>(null);
  const [eqHeights, setEqHeights] = useState<number[]>([20, 40, 60, 30, 80, 50, 70, 40]);
  const [isDemoLooping, setIsDemoLooping] = useState(false);

  // Trigger pad sound & animation
  const handleTriggerPad = (padId: number) => {
    setActivePad(padId);
    playSynthPad(padId, soundEnabled);

    // Randomize visualizer bars
    setEqHeights(Array.from({ length: 8 }, () => Math.floor(Math.random() * 80 + 15)));

    setTimeout(() => {
      setActivePad(null);
    }, 180);
  };

  // Keyboard shortcut listener for keys 1-8
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 8) {
        handleTriggerPad(num);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [soundEnabled]);

  // Demo Jam Loop
  useEffect(() => {
    if (!isDemoLooping) return;

    const pattern = [1, 3, 2, 3, 6, 4, 2, 7];
    let step = 0;

    const interval = setInterval(() => {
      const currentPadId = pattern[step % pattern.length];
      handleTriggerPad(currentPadId);
      step++;
    }, 220);

    return () => clearInterval(interval);
  }, [isDemoLooping, soundEnabled]);

  return (
    <div className="relative bg-white border-2 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b-2 border-black mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <Music className="w-4 h-4 text-[#8B5CF6]" />
            <span>MINI-GAME 03 // AUDIO-VISUAL SYNTHESIZER</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            {t("8-Bit Synth & Beat Soundboard", "Soundboard & Synth 8-Bit")}
          </h3>
        </div>

        {/* Demo Beat Auto-play Button */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => setIsDemoLooping(!isDemoLooping)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-1.5 px-4 py-2 border-2 border-black font-mono text-xs font-black transition-colors cursor-pointer shadow-[2px_2px_0px_#000] ${
              isDemoLooping ? "bg-[#E11D5A] text-white" : "bg-[#FFF275] text-neutral-900"
            }`}
          >
            {isDemoLooping ? (
              <>
                <Square className="w-3.5 h-3.5 fill-current" />
                <span>STOP DEMO JAM</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>DEMO BEAT JAM 🎵</span>
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Visual Equalizer Frequency Bars */}
      <div className="bg-neutral-900 border-2 border-black p-4 mb-6 flex items-end justify-center gap-2 sm:gap-3 h-24 overflow-hidden select-none">
        {eqHeights.map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: `${h}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-5 sm:w-8 bg-[#00C2FF] border border-black shadow-[0_0_8px_#00C2FF]"
          />
        ))}
      </div>

      {/* 8-Pad Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 select-none">
        {PADS.map((pad) => {
          const isActive = activePad === pad.id;

          return (
            <motion.div
              key={pad.id}
              onClick={() => handleTriggerPad(pad.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.9 }}
              animate={
                isActive
                  ? { scale: 0.94, filter: "brightness(1.2)" }
                  : { scale: 1, filter: "brightness(1)" }
              }
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className={`relative ${pad.bg} ${pad.textColor} border-2 border-black p-4 sm:p-5 shadow-[4px_4px_0px_#000] cursor-pointer flex flex-col justify-between min-h-[110px] overflow-hidden group`}
            >
              {/* Keyboard indicator tag */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-black/15 rounded-xs">
                  KEY [{pad.keyLabel}]
                </span>
                <span className="font-mono text-[9px] font-bold opacity-75">
                  #{pad.id}
                </span>
              </div>

              <div>
                <h4 className="font-mono text-xs sm:text-sm font-black tracking-tight mt-3">
                  {pad.name}
                </h4>
                <p className="font-mono text-[10px] font-semibold opacity-85">
                  {pad.type}
                </p>
              </div>

              {/* Expanding Ripple Ring Animation on trigger */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ scale: 0.2, opacity: 0.9 }}
                    animate={{ scale: 3, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full border-4 border-white pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 pt-3 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-neutral-600 gap-2">
        <span>TIP: Press number keys [1] through [8] on your keyboard!</span>
        <span className="text-[#8B5CF6] font-bold">WEB AUDIO API SYNTHESIZER ✦</span>
      </div>
    </div>
  );
}