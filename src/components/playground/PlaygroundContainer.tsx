"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Gamepad2, Grid3X3, Boxes } from "lucide-react";
import PlaygroundHeroSection from "./PlaygroundHeroSection";
import SnakeGame from "./SnakeGame";
import TicTacToeGame from "./TicTacToeGame";
import BrickBreakerGame from "./BrickBreakerGame";

type GameTab = "snake" | "tictactoe" | "brick";

interface GameOption {
  key: GameTab;
  titleEn: string;
  titleId: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const GAMES: GameOption[] = [
  {
    key: "snake",
    titleEn: "01. RETRO SNAKE",
    titleId: "01. GAME ULAR",
    badge: "SMOOTH",
    icon: Gamepad2,
  },
  {
    key: "tictactoe",
    titleEn: "02. TIC-TAC-TOE",
    titleId: "02. DUEL XOXO",
    badge: "PUZZLE",
    icon: Grid3X3,
  },
  {
    key: "brick",
    titleEn: "03. BRICK BREAKER",
    titleId: "03. BALOK BATA",
    badge: "RELAXED",
    icon: Boxes,
  },
];

export default function PlaygroundContainer() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<GameTab>("snake");
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <PlaygroundHeroSection
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
      />

      {/* 2. Interactive Game Switcher Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 w-full mb-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 p-2 bg-white border-2 border-black shadow-[4px_4px_0px_#000] select-none">
          {GAMES.map((game) => {
            const isActive = activeTab === game.key;

            return (
              <button
                key={game.key}
                type="button"
                onClick={() => setActiveTab(game.key)}
                className={`relative flex items-center gap-2 px-4 sm:px-5 py-2 border-2 border-black font-mono text-xs font-black transition-all cursor-pointer ${
                  isActive
                    ? "bg-neutral-900 text-white shadow-[2px_2px_0px_#00C2FF]"
                    : "bg-neutral-50 hover:bg-[#F6DCA0] text-neutral-800 shadow-[1.5px_1.5px_0px_#000]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeGameTabIndicator"
                    className="absolute inset-0 border-2 border-black -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
                <game.icon className="w-3.5 h-3.5 shrink-0" />
                <span>{t(game.titleEn, game.titleId)}</span>
                <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.2 bg-white/20 border border-current font-normal">
                  {game.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Active Game Screen */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 w-full mb-16">
        <AnimatePresence mode="wait">
          {activeTab === "snake" && (
            <motion.div
              key="snake"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <SnakeGame soundEnabled={soundEnabled} />
            </motion.div>
          )}

          {activeTab === "tictactoe" && (
            <motion.div
              key="tictactoe"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <TicTacToeGame soundEnabled={soundEnabled} />
            </motion.div>
          )}

          {activeTab === "brick" && (
            <motion.div
              key="brick"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <BrickBreakerGame soundEnabled={soundEnabled} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}