"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { playBubblePop, playJackpot, playSquish } from "./audioEffects";
import { Trophy, RotateCcw, Heart, Skull } from "lucide-react";

interface BrickProps {
  soundEnabled: boolean;
}

interface Brick {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  alive: boolean;
}

const BRICK_ROWS = 4;
const BRICK_COLS = 6;
const ROW_COLORS = ["bg-[#E11D5A]", "bg-[#F97316]", "bg-[#EDB22E]", "bg-[#10B981]"];

export default function BrickBreakerGame({ soundEnabled }: BrickProps) {
  const { t } = useLanguage();
  const arenaRef = useRef<HTMLDivElement>(null);
  const ballElRef = useRef<HTMLDivElement>(null);
  const paddleElRef = useRef<HTMLDivElement>(null);

  const [gameState, setGameState] = useState<"idle" | "playing" | "gameover" | "victory">("idle");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [bricks, setBricks] = useState<Brick[]>([]);

  // Synchronous game refs for ultra-smooth 60-144 FPS GPU-accelerated physics
  const paddleWidth = 88;
  const paddleHeight = 13;
  const paddleXRef = useRef(156);

  const ballSize = 13;
  const ballPosRef = useRef({ x: 193, y: 240 });
  const ballVelRef = useRef({ dx: 1.6, dy: -2.0 });

  const livesRef = useRef(3);
  const scoreRef = useRef(0);
  const bricksRef = useRef<Brick[]>([]);
  const soundEnabledRef = useRef(soundEnabled);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Sync sound setting without interrupting physics loop
  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
  }, [soundEnabled]);

  // Initialize Bricks
  const initBricks = () => {
    const newBricks: Brick[] = [];
    const brickW = 54;
    const brickH = 18;
    const padding = 6;
    const offsetTop = 25;
    const offsetLeft = 20;

    let id = 0;
    for (let r = 0; r < BRICK_ROWS; r++) {
      for (let c = 0; c < BRICK_COLS; c++) {
        newBricks.push({
          id: id++,
          x: offsetLeft + c * (brickW + padding),
          y: offsetTop + r * (brickH + padding),
          w: brickW,
          h: brickH,
          color: ROW_COLORS[r % ROW_COLORS.length],
          alive: true,
        });
      }
    }
    bricksRef.current = newBricks;
    setBricks(newBricks);
  };

  // Direct paddle position updater (0ms latency, GPU translated)
  const updatePaddle = (newX: number) => {
    const clamped = Math.max(0, Math.min(400 - paddleWidth, newX));
    paddleXRef.current = clamped;
    if (paddleElRef.current) {
      paddleElRef.current.style.transform = `translate3d(${clamped}px, 0, 0)`;
    }
  };

  const startGame = () => {
    initBricks();
    scoreRef.current = 0;
    setScore(0);
    livesRef.current = 3;
    setLives(3);

    ballPosRef.current = { x: 193, y: 240 };
    ballVelRef.current = { dx: (Math.random() > 0.5 ? 1 : -1) * 1.6, dy: -2.0 };
    updatePaddle(156);

    if (ballElRef.current) {
      ballElRef.current.style.transform = `translate3d(193px, 240px, 0)`;
    }

    setGameState("playing");
  };

  // Paddle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!arenaRef.current) return;
    const rect = arenaRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left - paddleWidth / 2;
    updatePaddle(relativeX);
  };

  // Paddle touch movement
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!arenaRef.current || e.touches.length === 0) return;
    const rect = arenaRef.current.getBoundingClientRect();
    const relativeX = e.touches[0].clientX - rect.left - paddleWidth / 2;
    updatePaddle(relativeX);
  };

  // Keyboard left/right movement
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        updatePaddle(paddleXRef.current - 24);
      } else if (e.code === "ArrowRight" || e.code === "KeyD") {
        updatePaddle(paddleXRef.current + 24);
      } else if (e.code === "Space" && gameState !== "playing") {
        startGame();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameState]);

  // Rock-solid 60-144 FPS Hardware-Accelerated Physics Loop
  useEffect(() => {
    if (gameState !== "playing") return;

    lastTimeRef.current = 0;

    const loop = (currentTime: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }
      const elapsed = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      // Delta time normalized to 60 FPS (16.67ms)
      // Clamped to avoid large jumps if tab is throttled
      const dt = Math.min(Math.max(elapsed / (1000 / 60), 0.2), 2.0);

      const pos = ballPosRef.current;
      const vel = ballVelRef.current;

      pos.x += vel.dx * dt;
      pos.y += vel.dy * dt;

      const arenaW = 400;
      const arenaH = 340;

      // Wall bounce
      if (pos.x <= 0) {
        pos.x = 0;
        vel.dx = Math.abs(vel.dx);
        playBubblePop(1.4, soundEnabledRef.current);
      } else if (pos.x >= arenaW - ballSize) {
        pos.x = arenaW - ballSize;
        vel.dx = -Math.abs(vel.dx);
        playBubblePop(1.4, soundEnabledRef.current);
      }

      if (pos.y <= 0) {
        pos.y = 0;
        vel.dy = Math.abs(vel.dy);
        playBubblePop(1.4, soundEnabledRef.current);
      }

      // Paddle bounce with smooth controllable reflection angle
      const paddleY = arenaH - 32;
      const curPaddleX = paddleXRef.current;
      if (
        pos.y + ballSize >= paddleY &&
        pos.y <= paddleY + paddleHeight &&
        pos.x + ballSize >= curPaddleX &&
        pos.x <= curPaddleX + paddleWidth &&
        vel.dy > 0 // Only bounce when ball is descending
      ) {
        vel.dy = -Math.abs(vel.dy);
        // Angle calibration based on hit distance from paddle center
        const hitPoint = (pos.x + ballSize / 2 - (curPaddleX + paddleWidth / 2)) / (paddleWidth / 2);
        vel.dx = Math.max(-2.4, Math.min(2.4, hitPoint * 2.4));
        playBubblePop(1.2, soundEnabledRef.current);
      }

      // Brick collision
      const currentBricks = bricksRef.current;
      let hitBrick = false;
      for (let i = 0; i < currentBricks.length; i++) {
        const br = currentBricks[i];
        if (br.alive) {
          if (
            pos.x + ballSize >= br.x &&
            pos.x <= br.x + br.w &&
            pos.y + ballSize >= br.y &&
            pos.y <= br.y + br.h
          ) {
            br.alive = false;
            vel.dy = -vel.dy;
            hitBrick = true;
            scoreRef.current += 20;
            const newScore = scoreRef.current;
            setScore(newScore);
            setHighScore((h) => Math.max(h, newScore));
            playBubblePop(0.9 + (i % 5) * 0.15, soundEnabledRef.current);
            break;
          }
        }
      }

      if (hitBrick) {
        setBricks([...currentBricks]);
        if (currentBricks.every((b) => !b.alive)) {
          setGameState("victory");
          playJackpot(soundEnabledRef.current);
          return;
        }
      }

      // Ball falls to bottom (Lose a life)
      if (pos.y >= arenaH) {
        playSquish(soundEnabledRef.current);
        livesRef.current -= 1;
        const remainingLives = livesRef.current;
        setLives(remainingLives);

        if (remainingLives <= 0) {
          setGameState("gameover");
          return;
        } else {
          // Reset ball position
          pos.x = 193;
          pos.y = 240;
          vel.dx = (Math.random() > 0.5 ? 1 : -1) * 1.6;
          vel.dy = -2.0;
          if (ballElRef.current) {
            ballElRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
          }
        }
      }

      // Ultra-smooth sub-pixel GPU hardware transform (No React re-render lag)
      if (ballElRef.current) {
        ballElRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [gameState]);

  return (
    <div className="relative bg-white border-2 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b-2 border-black mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#00C2FF] inline-block animate-pulse" />
            <span>SMOOTH CLASSIC // BRICK BREAKER</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            {t("Brick Breaker Classic", "Hancurkan Balok Bata (Breakout)")}
          </h3>
        </div>

        {/* Lives & Score */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-black select-none">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-red-100 border-2 border-black shadow-[2px_2px_0px_#000]">
            <Heart className="w-3.5 h-3.5 text-red-600 fill-current" />
            <span>LIVES: {lives}</span>
          </div>
          <div className="px-3 py-1.5 bg-[#FFF275] border-2 border-black shadow-[2px_2px_0px_#000]">
            SCORE: {score}
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 bg-[#10B981]/20 text-neutral-900 border-2 border-black shadow-[2px_2px_0px_#000]">
            <Trophy className="w-3.5 h-3.5 text-[#10B981]" />
            <span>BEST: {highScore}</span>
          </div>
          <motion.button
            onClick={startGame}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 bg-[#00C2FF] text-black border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
            title="Reset game"
          >
            <RotateCcw className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Arena Canvas */}
      <div
        ref={arenaRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative bg-neutral-900 border-2 border-black h-[340px] max-w-md mx-auto overflow-hidden select-none shadow-inner cursor-none touch-none"
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Bricks */}
        {bricks.map((br) => {
          if (!br.alive) return null;
          return (
            <div
              key={br.id}
              style={{
                left: br.x,
                top: br.y,
                width: br.w,
                height: br.h,
              }}
              className={`absolute border border-black ${br.color} shadow-xs rounded-2xs`}
            />
          );
        })}

        {/* Bouncy Ball (Sub-pixel hardware accelerated transform) */}
        <div
          ref={ballElRef}
          style={{
            transform: `translate3d(${ballPosRef.current.x}px, ${ballPosRef.current.y}px, 0)`,
            width: ballSize,
            height: ballSize,
            willChange: "transform",
          }}
          className="absolute top-0 left-0 rounded-full bg-white border border-black shadow-[0_0_8px_#fff] z-20 pointer-events-none"
        />

        {/* Bottom Paddle (Sub-pixel hardware accelerated transform) */}
        <div
          ref={paddleElRef}
          style={{
            transform: `translate3d(${paddleXRef.current}px, 0, 0)`,
            bottom: 20,
            left: 0,
            width: paddleWidth,
            height: paddleHeight,
            willChange: "transform",
          }}
          className="absolute top-auto bg-[#00C2FF] border-2 border-white shadow-[0_0_10px_#00C2FF] rounded-full z-20 pointer-events-none"
        />

        {/* Idle Start Prompt */}
        {gameState === "idle" && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-2xs flex flex-col items-center justify-center z-30">
            <motion.button
              onClick={startGame}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
              className="px-6 py-3 bg-[#FFF275] hover:bg-[#FFEB3B] text-neutral-900 border-2 border-black font-mono text-sm font-black shadow-[4px_4px_0px_#000] cursor-pointer"
            >
              <span>{t("START PLAYING", "MULAI MAIN")}</span>
            </motion.button>
            <p className="font-mono text-xs text-white mt-2">
              {t("Move your mouse to control the paddle", "Gerakkan mouse untuk mengontrol papan pantul")}
            </p>
          </div>
        )}

        {/* Game Over Screen */}
        {gameState === "gameover" && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs flex flex-col items-center justify-center z-30 p-4">
            <div className="bg-white border-2 border-black p-5 text-center shadow-[6px_6px_0px_#000]">
              <Skull className="w-9 h-9 text-[#E11D5A] mx-auto mb-1 stroke-[2.5]" />
              <h4 className="font-mono text-base font-black text-[#E11D5A] mb-1">
                GAME OVER!
              </h4>
              <p className="font-mono text-xs font-bold text-neutral-800 mb-3">
                FINAL SCORE: {score}
              </p>
              <button
                type="button"
                onClick={startGame}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#00C2FF] text-black font-mono text-xs font-black border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t("COBA LAGI", "COBA LAGI")}</span>
              </button>
            </div>
          </div>
        )}

        {/* Victory Screen */}
        {gameState === "victory" && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs flex flex-col items-center justify-center z-30 p-4">
            <div className="bg-[#FFF275] border-2 border-black p-5 text-center shadow-[6px_6px_0px_#000]">
              <Trophy className="w-9 h-9 text-neutral-900 mx-auto mb-1 stroke-[2.5]" />
              <h4 className="font-mono text-base font-black text-neutral-900 mb-1">
                HEBAT! SEMUA BALOK HANCUR!
              </h4>
              <p className="font-mono text-xs font-bold text-neutral-800 mb-3">
                TOTAL SCORE: {score}
              </p>
              <button
                type="button"
                onClick={startGame}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white font-mono text-xs font-black border-2 border-black shadow-[2px_2px_0px_#00C2FF] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t("MAIN LAGI", "MAIN LAGI")}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 pt-3 border-t border-black/10 flex items-center justify-between font-mono text-xs text-neutral-600">
        <span>SMOOTH 60 FPS // CONTROLS: MOUSE / TOUCH / ARROWS</span>
        <span className="font-bold text-neutral-900">
          {t("Destroy all bricks to win!", "Hancurkan semua balok untuk menang!")}
        </span>
      </div>
    </div>
  );
}
