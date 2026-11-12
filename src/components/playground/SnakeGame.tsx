"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { playBubblePop, playSquish } from "./audioEffects";
import { Trophy, RotateCcw, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

interface SnakeProps {
  soundEnabled: boolean;
}

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
interface Point {
  x: number;
  y: number;
}

const GRID_SIZE = 16;
const TICK_INTERVAL = 110; // ms per tick
const INITIAL_SNAKE: Point[] = [
  { x: 8, y: 8 },
  { x: 8, y: 9 },
  { x: 8, y: 10 },
];
const FRUITS = ["🍎", "🍓", "🍉", "🍒", "🍇", "⭐"];

export default function SnakeGame({ soundEnabled }: SnakeProps) {
  const { t } = useLanguage();

  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Direction>("UP");
  const [food, setFood] = useState<Point>({ x: 8, y: 4 });
  const [foodEmoji, setFoodEmoji] = useState("🍎");
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Direction input queue to guarantee smooth responsive turns without dropping keystrokes
  const directionQueueRef = useRef<Direction[]>([]);
  const currentDirectionRef = useRef<Direction>("UP");
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to test if two directions are opposite
  const isOpposite = (d1: Direction, d2: Direction) => {
    return (
      (d1 === "UP" && d2 === "DOWN") ||
      (d1 === "DOWN" && d2 === "UP") ||
      (d1 === "LEFT" && d2 === "RIGHT") ||
      (d1 === "RIGHT" && d2 === "LEFT")
    );
  };

  const queueDirection = (newDir: Direction) => {
    const lastDir =
      directionQueueRef.current.length > 0
        ? directionQueueRef.current[directionQueueRef.current.length - 1]
        : currentDirectionRef.current;

    if (newDir !== lastDir && !isOpposite(newDir, lastDir)) {
      if (directionQueueRef.current.length < 3) {
        directionQueueRef.current.push(newDir);
      }
    }
  };

  // Generate random food position not on snake body
  const spawnFood = useCallback((currentSnake: Point[]) => {
    let newFood: Point;
    let isOnSnake = true;

    while (isOnSnake) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      // eslint-disable-next-line no-loop-func
      isOnSnake = currentSnake.some((seg) => seg.x === newFood.x && seg.y === newFood.y);
      if (!isOnSnake) {
        setFood(newFood);
        setFoodEmoji(FRUITS[Math.floor(Math.random() * FRUITS.length)]);
        break;
      }
    }
  }, []);

  // Start or Restart game
  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection("UP");
    currentDirectionRef.current = "UP";
    directionQueueRef.current = [];
    setScore(0);
    setIsGameOver(false);
    setIsPlaying(true);
    spawnFood(INITIAL_SNAKE);
  };

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "KeyW"].includes(e.code)) {
        e.preventDefault();
        queueDirection("UP");
      } else if (["ArrowDown", "KeyS"].includes(e.code)) {
        e.preventDefault();
        queueDirection("DOWN");
      } else if (["ArrowLeft", "KeyA"].includes(e.code)) {
        e.preventDefault();
        queueDirection("LEFT");
      } else if (["ArrowRight", "KeyD"].includes(e.code)) {
        e.preventDefault();
        queueDirection("RIGHT");
      } else if (e.code === "Space") {
        e.preventDefault();
        if (!isPlaying && !isGameOver) startGame();
        else if (isGameOver) startGame();
        else setIsPlaying((p) => !p);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, isGameOver]);

  // Main game loop (smooth tick)
  useEffect(() => {
    if (!isPlaying || isGameOver) {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
      return;
    }

    gameLoopRef.current = setInterval(() => {
      // Dequeue next validated direction
      if (directionQueueRef.current.length > 0) {
        const next = directionQueueRef.current.shift()!;
        currentDirectionRef.current = next;
        setDirection(next);
      }

      const activeDir = currentDirectionRef.current;

      setSnake((prevSnake) => {
        const head = { ...prevSnake[0] };
        if (activeDir === "UP") head.y -= 1;
        if (activeDir === "DOWN") head.y += 1;
        if (activeDir === "LEFT") head.x -= 1;
        if (activeDir === "RIGHT") head.x += 1;

        // Wall collision check
        if (
          head.x < 0 ||
          head.x >= GRID_SIZE ||
          head.y < 0 ||
          head.y >= GRID_SIZE
        ) {
          setIsGameOver(true);
          setIsPlaying(false);
          playSquish(soundEnabled);
          return prevSnake;
        }

        // Self collision check
        if (prevSnake.some((seg) => seg.x === head.x && seg.y === head.y)) {
          setIsGameOver(true);
          setIsPlaying(false);
          playSquish(soundEnabled);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        // Eat food check
        if (head.x === food.x && head.y === food.y) {
          playBubblePop(1.2, soundEnabled);
          setScore((s) => {
            const next = s + 10;
            if (next > highScore) setHighScore(next);
            return next;
          });
          spawnFood(newSnake);
        } else {
          newSnake.pop(); // Remove tail smoothly
        }

        return newSnake;
      });
    }, TICK_INTERVAL);

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [isPlaying, isGameOver, food, highScore, soundEnabled, spawnFood]);

  return (
    <div className="relative bg-white border-2 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b-2 border-black mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <span className="text-base">🐍</span>
            <span>SMOOTH RETRO ARCADE // GAME ULAR</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            {t("Retro Snake Classic", "Game Ular-Ularan Klasik")}
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
            onClick={startGame}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00C2FF] text-black border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isGameOver ? t("PLAY AGAIN 🚀", "MAIN LAGI 🚀") : t("RESET", "RESET")}</span>
          </motion.button>
        </div>
      </div>

      {/* Game Grid Board */}
      <div className="relative max-w-md mx-auto aspect-square bg-[#ECFDF5] border-2 border-black p-2 shadow-inner select-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: `${100 / GRID_SIZE}% ${100 / GRID_SIZE}%`,
          }}
        />

        {/* Food item */}
        <div
          style={{
            left: `${(food.x / GRID_SIZE) * 100}%`,
            top: `${(food.y / GRID_SIZE) * 100}%`,
            width: `${100 / GRID_SIZE}%`,
            height: `${100 / GRID_SIZE}%`,
          }}
          className="absolute flex items-center justify-center text-lg sm:text-xl z-20 pointer-events-none"
        >
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            {foodEmoji}
          </motion.div>
        </div>

        {/* Snake Body Segments with Smooth Glide Transition */}
        {snake.map((seg, idx) => {
          const isHead = idx === 0;

          return (
            <div
              key={idx}
              style={{
                left: `${(seg.x / GRID_SIZE) * 100}%`,
                top: `${(seg.y / GRID_SIZE) * 100}%`,
                width: `${100 / GRID_SIZE}%`,
                height: `${100 / GRID_SIZE}%`,
                transition: "left 100ms linear, top 100ms linear",
              }}
              className="absolute p-0.5 z-10 pointer-events-none"
            >
              <div
                className={`w-full h-full border border-black ${
                  isHead ? "bg-[#047857] rounded-sm" : "bg-[#10B981] rounded-xs"
                } shadow-xs flex items-center justify-center relative overflow-hidden`}
              >
                {/* Cute Directional Eyes on Head */}
                {isHead && (
                  <div
                    className={`flex gap-1 ${
                      direction === "UP"
                        ? "flex-row -translate-y-0.5"
                        : direction === "DOWN"
                        ? "flex-row translate-y-0.5"
                        : direction === "LEFT"
                        ? "flex-col -translate-x-0.5"
                        : "flex-col translate-x-0.5"
                    }`}
                  >
                    <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full border border-black/50" />
                    <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full border border-black/50" />
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Idle Start Prompt */}
        {!isPlaying && !isGameOver && (
          <div className="absolute inset-0 bg-black/25 backdrop-blur-2xs flex flex-col items-center justify-center z-30">
            <motion.button
              onClick={startGame}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
              className="px-6 py-3 bg-[#FFF275] hover:bg-[#FFEB3B] text-neutral-900 border-2 border-black font-mono text-sm font-black shadow-[4px_4px_0px_#000] cursor-pointer"
            >
              <span>{t("START GAME! 🚀", "MULAI MAIN! 🚀")}</span>
            </motion.button>
            <p className="font-mono text-[11px] text-white font-bold mt-2 drop-shadow-md">
              {t("Use Arrow keys or WASD", "Gunakan tombol Panah atau WASD")}
            </p>
          </div>
        )}

        {/* Game Over Screen */}
        <AnimatePresence>
          {isGameOver && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-2xs flex flex-col items-center justify-center z-30 p-4"
            >
              <div className="bg-white border-2 border-black p-5 text-center shadow-[6px_6px_0px_#000]">
                <div className="text-4xl mb-1">😵</div>
                <h4 className="font-mono text-base font-black text-[#E11D5A] mb-1">
                  TABRAKAN! GAME OVER
                </h4>
                <p className="font-mono text-xs font-bold text-neutral-700 mb-3">
                  SKOR KAMU: {score}
                </p>
                <button
                  type="button"
                  onClick={startGame}
                  className="px-4 py-2 bg-[#00C2FF] text-black font-mono text-xs font-black border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
                >
                  {t("MAIN LAGI 🔄", "MAIN LAGI 🔄")}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Touch D-Pad Controls */}
      <div className="mt-5 flex flex-col items-center select-none">
        <span className="font-mono text-[10px] text-neutral-500 mb-2 font-bold uppercase">
          {t("Touch Controls (Mobile / Click)", "Kontrol Tombol (HP / Klik)")}
        </span>
        <div className="grid grid-cols-3 gap-1.5 w-36">
          <div />
          <button
            type="button"
            onClick={() => queueDirection("UP")}
            className="p-3 bg-neutral-100 active:bg-[#00C2FF] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <div />
          <button
            type="button"
            onClick={() => queueDirection("LEFT")}
            className="p-3 bg-neutral-100 active:bg-[#00C2FF] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              if (!isPlaying) startGame();
              else setIsPlaying((p) => !p);
            }}
            className="p-3 bg-[#FFF275] active:bg-[#FDE047] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000] font-mono text-[10px] font-black cursor-pointer"
          >
            {isPlaying ? "PAUSE" : "GO"}
          </button>
          <button
            type="button"
            onClick={() => queueDirection("RIGHT")}
            className="p-3 bg-neutral-100 active:bg-[#00C2FF] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
          <div />
          <button
            type="button"
            onClick={() => queueDirection("DOWN")}
            className="p-3 bg-neutral-100 active:bg-[#00C2FF] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
          <div />
        </div>
      </div>
    </div>
  );
}