"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { playBubblePop, playJackpot, playSquish } from "./audioEffects";
import { Trophy, RotateCcw, Heart } from "lucide-react";

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

  const [gameState, setGameState] = useState<"idle" | "playing" | "gameover" | "victory">("idle");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lives, setLives] = useState(3);

  // Relaxed & Comfortable Paddle and Ball Dimensions
  const paddleWidth = 88;
  const paddleHeight = 13;
  const [paddleX, setPaddleX] = useState(156);

  const ballSize = 13;
  const [ballPos, setBallPos] = useState({ x: 193, y: 250 });
  const [ballVel, setBallVel] = useState({ dx: 1.6, dy: -2.0 });

  // Bricks state
  const [bricks, setBricks] = useState<Brick[]>([]);

  const animRef = useRef<number | null>(null);

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
    setBricks(newBricks);
  };

  const startGame = () => {
    initBricks();
    setScore(0);
    setLives(3);
    setPaddleX(156);
    setBallPos({ x: 193, y: 250 });
    // Calibrated relaxed speed: dy = -2.0, dx = 1.6
    setBallVel({ dx: (Math.random() > 0.5 ? 1 : -1) * 1.6, dy: -2.0 });
    setGameState("playing");
  };

  // Paddle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!arenaRef.current) return;
    const rect = arenaRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left - paddleWidth / 2;
    const clampedX = Math.max(0, Math.min(rect.width - paddleWidth, relativeX));
    setPaddleX(clampedX);
  };

  // Keyboard left/right movement
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        setPaddleX((px) => Math.max(0, px - 25));
      } else if (e.code === "ArrowRight" || e.code === "KeyD") {
        setPaddleX((px) => Math.min(312, px + 25));
      } else if (e.code === "Space" && gameState !== "playing") {
        startGame();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameState]);

  // Main 60 FPS Physics Loop with Relaxed Speed
  useEffect(() => {
    if (gameState !== "playing") return;

    let bx = ballPos.x;
    let by = ballPos.y;
    let bdx = ballVel.dx;
    let bdy = ballVel.dy;
    let localScore = score;
    let localLives = lives;
    const currentBricks = [...bricks];

    const loop = () => {
      bx += bdx;
      by += bdy;

      const arenaW = 400;
      const arenaH = 340;

      // Wall bounce
      if (bx <= 0) {
        bx = 0;
        bdx = Math.abs(bdx);
        playBubblePop(1.4, soundEnabled);
      } else if (bx >= arenaW - ballSize) {
        bx = arenaW - ballSize;
        bdx = -Math.abs(bdx);
        playBubblePop(1.4, soundEnabled);
      }

      if (by <= 0) {
        by = 0;
        bdy = Math.abs(bdy);
        playBubblePop(1.4, soundEnabled);
      }

      // Paddle bounce with smooth controllable angle
      const paddleY = arenaH - 32;
      if (
        by + ballSize >= paddleY &&
        by <= paddleY + paddleHeight &&
        bx + ballSize >= paddleX &&
        bx <= paddleX + paddleWidth
      ) {
        bdy = -2.0; // Consistent, relaxed upward speed
        // Gentle angle based on hit position
        const hitPoint = (bx + ballSize / 2 - (paddleX + paddleWidth / 2)) / (paddleWidth / 2);
        bdx = Math.max(-2.2, Math.min(2.2, hitPoint * 2.2));
        playBubblePop(1.2, soundEnabled);
      }

      // Brick collision
      let hitBrick = false;
      for (let i = 0; i < currentBricks.length; i++) {
        const br = currentBricks[i];
        if (br.alive) {
          if (
            bx + ballSize >= br.x &&
            bx <= br.x + br.w &&
            by + ballSize >= br.y &&
            by <= br.y + br.h
          ) {
            br.alive = false;
            bdy = -bdy;
            hitBrick = true;
            localScore += 20;
            setScore(localScore);
            if (localScore > highScore) setHighScore(localScore);
            playBubblePop(0.9 + (i % 5) * 0.15, soundEnabled);
            break;
          }
        }
      }

      if (hitBrick) {
        setBricks([...currentBricks]);
        if (currentBricks.every((b) => !b.alive)) {
          setGameState("victory");
          playJackpot(soundEnabled);
          return;
        }
      }

      // Ball falls to bottom (Lose a life)
      if (by >= arenaH) {
        localLives -= 1;
        setLives(localLives);
        playSquish(soundEnabled);

        if (localLives <= 0) {
          setGameState("gameover");
          return;
        } else {
          // Reset ball position with gentle speed
          bx = 193;
          by = 240;
          bdx = 1.6;
          bdy = -2.0;
        }
      }

      setBallPos({ x: bx, y: by });
      setBallVel({ dx: bdx, dy: bdy });

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [gameState, paddleX, soundEnabled]);

  return (
    <div className="relative bg-white border-2 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b-2 border-black mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <span className="text-base">🧱</span>
            <span>RELAXED CLASSIC // BRICK BREAKER</span>
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
        className="relative bg-neutral-900 border-2 border-black h-[340px] max-w-md mx-auto overflow-hidden select-none shadow-inner cursor-none"
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

        {/* Bouncy Ball */}
        <div
          style={{
            left: ballPos.x,
            top: ballPos.y,
            width: ballSize,
            height: ballSize,
          }}
          className="absolute rounded-full bg-white border border-black shadow-[0_0_8px_#fff] z-20 pointer-events-none"
        />

        {/* Bottom Paddle */}
        <div
          style={{
            left: paddleX,
            bottom: 20,
            width: paddleWidth,
            height: paddleHeight,
          }}
          className="absolute bg-[#00C2FF] border-2 border-white shadow-[0_0_10px_#00C2FF] rounded-full z-20 pointer-events-none"
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
              <span>{t("START PLAYING! 🧱", "MULAI MAIN! 🧱")}</span>
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
              <div className="text-4xl mb-1">💥</div>
              <h4 className="font-mono text-base font-black text-[#E11D5A] mb-1">
                GAME OVER!
              </h4>
              <p className="font-mono text-xs font-bold text-neutral-800 mb-3">
                FINAL SCORE: {score}
              </p>
              <button
                type="button"
                onClick={startGame}
                className="px-4 py-2 bg-[#00C2FF] text-black font-mono text-xs font-black border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
              >
                {t("COBA LAGI 🔄", "COBA LAGI 🔄")}
              </button>
            </div>
          </div>
        )}

        {/* Victory Screen */}
        {gameState === "victory" && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs flex flex-col items-center justify-center z-30 p-4">
            <div className="bg-[#FFF275] border-2 border-black p-5 text-center shadow-[6px_6px_0px_#000]">
              <div className="text-4xl mb-1">🏆</div>
              <h4 className="font-mono text-base font-black text-neutral-900 mb-1">
                HEBAT! SEMUA BALOK HANCUR!
              </h4>
              <p className="font-mono text-xs font-bold text-neutral-800 mb-3">
                TOTAL SCORE: {score}
              </p>
              <button
                type="button"
                onClick={startGame}
                className="px-4 py-2 bg-neutral-900 text-white font-mono text-xs font-black border-2 border-black shadow-[2px_2px_0px_#00C2FF] cursor-pointer"
              >
                {t("MAIN LAGI 🔄", "MAIN LAGI 🔄")}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 pt-3 border-t border-black/10 flex items-center justify-between font-mono text-xs text-neutral-600">
        <span>SPEED: RELAXED // CONTROLS: MOUSE / ARROWS</span>
        <span className="font-bold text-neutral-900">
          {t("Destroy all bricks to win! 🧱", "Hancurkan semua balok untuk menang! 🧱")}
        </span>
      </div>
    </div>
  );
}