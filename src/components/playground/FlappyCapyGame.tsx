"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { playFlap, playJackpot, playSquish } from "./audioEffects";
import { Trophy, RotateCcw, Play } from "lucide-react";

interface FlappyProps {
  soundEnabled: boolean;
}

interface Obstacle {
  x: number;
  topHeight: number;
  gap: number;
  passed: boolean;
}

export default function FlappyCapyGame({ soundEnabled }: FlappyProps) {
  const { t } = useLanguage();
  const arenaRef = useRef<HTMLDivElement>(null);

  const [gameState, setGameState] = useState<"idle" | "playing" | "gameover">("idle");
  const [capyY, setCapyY] = useState<number>(180);
  const [velocity, setVelocity] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);

  const requestRef = useRef<number | null>(null);

  // Jump / Flap Action
  const jump = () => {
    if (gameState === "idle") {
      setGameState("playing");
      setScore(0);
      setCapyY(180);
      setVelocity(-7.5);
      setObstacles([{ x: 380, topHeight: 110, gap: 130, passed: false }]);
      playFlap(soundEnabled);
      return;
    }

    if (gameState === "playing") {
      setVelocity(-7.5);
      playFlap(soundEnabled);
    }

    if (gameState === "gameover") {
      setGameState("playing");
      setScore(0);
      setCapyY(180);
      setVelocity(-7.5);
      setObstacles([{ x: 380, topHeight: 110, gap: 130, passed: false }]);
      playFlap(soundEnabled);
    }
  };

  // Keyboard Space / ArrowUp listener
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameState, soundEnabled]);

  // Main Game Physics Loop (60 FPS)
  useEffect(() => {
    if (gameState !== "playing") return;

    let localCapyY = capyY;
    let localVel = velocity;
    let localObstacles = [...obstacles];
    let localScore = score;

    const gravity = 0.42;
    const speed = 2.8;

    const gameLoop = () => {
      // 1. Update Capy Physics
      localVel += gravity;
      localCapyY += localVel;

      // Arena bounds check
      const maxHeight = 340;
      if (localCapyY < 0) {
        localCapyY = 0;
        localVel = 0;
      }
      if (localCapyY > maxHeight) {
        // Crash to ground
        setGameState("gameover");
        playSquish(soundEnabled);
        return;
      }

      // 2. Update Obstacles
      const updatedObs: Obstacle[] = [];
      let collision = false;

      for (let i = 0; i < localObstacles.length; i++) {
        const obs = { ...localObstacles[i] };
        obs.x -= speed;

        // Collision detection with Capy (Capy is at x=70, width=36, height=36)
        const capyLeft = 60;
        const capyRight = 96;
        const capyTop = localCapyY;
        const capyBottom = localCapyY + 36;

        const obsLeft = obs.x;
        const obsRight = obs.x + 50;

        if (capyRight > obsLeft && capyLeft < obsRight) {
          // Check if hitting top pipe or bottom pipe
          const bottomPipeTop = obs.topHeight + obs.gap;
          if (capyTop < obs.topHeight || capyBottom > bottomPipeTop) {
            collision = true;
          }
        }

        // Score update when successfully passing
        if (!obs.passed && obs.x + 50 < capyLeft) {
          obs.passed = true;
          localScore += 1;
          setScore(localScore);
          if (localScore > highScore) setHighScore(localScore);
        }

        if (obs.x > -60) {
          updatedObs.push(obs);
        }
      }

      if (collision) {
        setGameState("gameover");
        playSquish(soundEnabled);
        return;
      }

      // Spawn next obstacle
      if (
        updatedObs.length === 0 ||
        updatedObs[updatedObs.length - 1].x < 210
      ) {
        const topH = Math.floor(Math.random() * 120) + 60;
        updatedObs.push({
          x: 400,
          topHeight: topH,
          gap: 130,
          passed: false,
        });
      }

      localObstacles = updatedObs;
      setCapyY(localCapyY);
      setVelocity(localVel);
      setObstacles(localObstacles);

      requestRef.current = requestAnimationFrame(gameLoop);
    };

    requestRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [gameState, soundEnabled]);

  return (
    <div className="relative bg-white border-2 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b-2 border-black mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <span className="text-base">🦫</span>
            <span>CASUAL GAME 03 // FLAPPY CAPYBARA</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            {t("Flappy Capybara Flight", "Terbang Flappy Capybara")}
          </h3>
        </div>

        {/* Score & Controls */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-black select-none">
          <div className="px-3 py-1.5 bg-[#FFF275] border-2 border-black shadow-[2px_2px_0px_#000]">
            SCORE: {score}
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 bg-[#10B981]/20 text-neutral-900 border-2 border-black shadow-[2px_2px_0px_#000]">
            <Trophy className="w-3.5 h-3.5 text-[#10B981]" />
            <span>BEST: {highScore}</span>
          </div>
          <motion.button
            onClick={jump}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 px-3 py-1.5 bg-[#00C2FF] text-black border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            <span>{gameState === "playing" ? "FLAP! 🚀" : "START / RESTART 🚀"}</span>
          </motion.button>
        </div>
      </div>

      {/* Arena Canvas */}
      <div
        ref={arenaRef}
        onClick={jump}
        className="relative bg-[#A5F3FC] border-2 border-black h-[380px] max-w-lg mx-auto overflow-hidden cursor-pointer select-none shadow-inner"
        style={{
          backgroundImage: "linear-gradient(to bottom, #A5F3FC 70%, #86EFAC 100%)",
        }}
      >
        {/* Floating Clouds Background */}
        <motion.div
          animate={{ x: [-20, -180] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute top-6 left-10 text-3xl opacity-70 pointer-events-none"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: [30, -120] }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          className="absolute top-14 right-10 text-2xl opacity-60 pointer-events-none"
        >
          ☁️
        </motion.div>

        {/* Pipes / Bamboo Obstacles */}
        {obstacles.map((obs, idx) => (
          <React.Fragment key={idx}>
            {/* Top Pipe */}
            <div
              style={{
                left: obs.x,
                top: 0,
                width: 50,
                height: obs.topHeight,
              }}
              className="absolute bg-[#16A34A] border-2 border-black shadow-[2px_2px_0px_#000] rounded-b-md"
            >
              <div className="absolute bottom-0 inset-x-0 h-4 bg-[#15803D] border-t-2 border-black" />
            </div>

            {/* Bottom Pipe */}
            <div
              style={{
                left: obs.x,
                top: obs.topHeight + obs.gap,
                width: 50,
                bottom: 0,
              }}
              className="absolute bg-[#16A34A] border-2 border-black shadow-[2px_2px_0px_#000] rounded-t-md"
            >
              <div className="absolute top-0 inset-x-0 h-4 bg-[#15803D] border-b-2 border-black" />
            </div>
          </React.Fragment>
        ))}

        {/* Capybara Player Character */}
        <motion.div
          animate={{
            rotate: velocity < 0 ? -20 : Math.min(velocity * 4, 45),
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          style={{
            left: 65,
            top: capyY,
            width: 40,
            height: 40,
          }}
          className="absolute flex items-center justify-center text-3xl filter drop-shadow-md z-30 pointer-events-none"
        >
          <span>{gameState === "gameover" ? "😵" : "🦫"}</span>
        </motion.div>

        {/* Idle Prompt */}
        {gameState === "idle" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-2xs z-40">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="px-5 py-3 bg-[#FFF275] border-2 border-black font-mono text-sm font-black text-neutral-900 shadow-[4px_4px_0px_#000] text-center"
            >
              <div>{t("CLICK OR PRESS SPACE TO FLY!", "KLIK ATAU TEKAN SPASI UNTUK TERBANG!")}</div>
              <div className="text-xs font-semibold mt-1">🦫 Flap your wings & avoid the pipes!</div>
            </motion.div>
          </div>
        )}

        {/* Game Over Banner */}
        {gameState === "gameover" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-2xs z-40">
            <motion.div
              initial={{ scale: 0.6, rotate: -6 }}
              animate={{ scale: 1, rotate: 0 }}
              className="p-5 bg-white border-2 border-black font-mono text-center shadow-[6px_6px_0px_#000]"
            >
              <h4 className="text-lg font-black text-[#E11D5A] mb-1">
                💥 GAME OVER! 💥
              </h4>
              <p className="text-xs font-bold text-neutral-800 mb-4">
                FINAL SCORE: {score}
              </p>
              <button
                type="button"
                onClick={jump}
                className="px-4 py-2 bg-[#00C2FF] hover:bg-[#38C6F4] text-black border-2 border-black font-black text-xs cursor-pointer shadow-[2px_2px_0px_#000]"
              >
                {t("PLAY AGAIN 🚀", "MAIN LAGI 🚀")}
              </button>
            </motion.div>
          </div>
        )}

        {/* Ground Floor */}
        <div className="absolute bottom-0 inset-x-0 h-4 bg-[#854D0E] border-t-2 border-black z-30" />
      </div>

      <div className="mt-5 pt-3 border-t border-black/10 flex items-center justify-between font-mono text-xs text-neutral-600">
        <span>CONTROLS: CLICK / TAP / SPACEBAR</span>
        <span className="font-bold text-neutral-900">
          {t("Dodge bamboo pipes to score! 🦫", "Lewati tiang bambu untuk mencetak rekor! 🦫")}
        </span>
      </div>
    </div>
  );
}