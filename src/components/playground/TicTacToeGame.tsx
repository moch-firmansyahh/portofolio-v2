"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { playBubblePop, playJackpot, playSquish } from "./audioEffects";
import { Trophy, RotateCcw, User, Bot, Users, MinusCircle } from "lucide-react";

interface TicTacToeProps {
  soundEnabled: boolean;
}

type Player = "X" | "O" | null;

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToeGame({ soundEnabled }: TicTacToeProps) {
  const { t } = useLanguage();

  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [vsBot, setVsBot] = useState<boolean>(true);
  const [scoreX, setScoreX] = useState<number>(0);
  const [scoreO, setScoreO] = useState<number>(0);
  const [draws, setDraws] = useState<number>(0);

  // Check winner
  const checkWinner = (squares: Player[]): { winner: Player; line?: number[] } | null => {
    for (const combo of WINNING_COMBOS) {
      const [a, b, c] = combo;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: combo };
      }
    }
    return null;
  };

  const winInfo = checkWinner(board);
  const isDraw = !winInfo && board.every((cell) => cell !== null);

  const makeMove = (index: number, player: "X" | "O", currentBoard: Player[]) => {
    const nextBoard = [...currentBoard];
    nextBoard[index] = player;
    setBoard(nextBoard);
    playBubblePop(player === "X" ? 1 : 1.3, soundEnabled);

    const result = checkWinner(nextBoard);
    if (result) {
      playJackpot(soundEnabled);
      if (result.winner === "X") setScoreX((s) => s + 1);
      else setScoreO((s) => s + 1);
      return;
    }

    if (nextBoard.every((cell) => cell !== null)) {
      setDraws((d) => d + 1);
      playSquish(soundEnabled);
      return;
    }

    if (vsBot && player === "X") {
      // Bot makes a move
      setTimeout(() => {
        makeBotMove(nextBoard);
      }, 350);
    } else {
      setIsXNext(player === "O");
    }
  };

  const makeBotMove = (currentBoard: Player[]) => {
    const emptyIndices = currentBoard
      .map((val, idx) => (val === null ? idx : null))
      .filter((v): v is number => v !== null);

    if (emptyIndices.length === 0) return;

    // 1. Can Bot win right now?
    for (const idx of emptyIndices) {
      const copy = [...currentBoard];
      copy[idx] = "O";
      if (checkWinner(copy)?.winner === "O") {
        finalizeBotMove(idx, currentBoard);
        return;
      }
    }

    // 2. Can player X win? Block them!
    for (const idx of emptyIndices) {
      const copy = [...currentBoard];
      copy[idx] = "X";
      if (checkWinner(copy)?.winner === "X") {
        finalizeBotMove(idx, currentBoard);
        return;
      }
    }

    // 3. Take center if open
    if (emptyIndices.includes(4)) {
      finalizeBotMove(4, currentBoard);
      return;
    }

    // 4. Random available move
    const randomIdx = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    finalizeBotMove(randomIdx, currentBoard);
  };

  const finalizeBotMove = (index: number, currentBoard: Player[]) => {
    const nextBoard = [...currentBoard];
    nextBoard[index] = "O";
    setBoard(nextBoard);
    setIsXNext(true);
    playBubblePop(1.4, soundEnabled);

    const result = checkWinner(nextBoard);
    if (result) {
      playSquish(soundEnabled);
      setScoreO((s) => s + 1);
      return;
    }
    if (nextBoard.every((c) => c !== null)) {
      setDraws((d) => d + 1);
    }
  };

  const handleCellClick = (index: number) => {
    if (board[index] || winInfo || isDraw) return;
    if (vsBot && !isXNext) return; // Wait for bot

    makeMove(index, isXNext ? "X" : "O", board);
  };

  const handleResetBoard = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="relative bg-white border-2 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b-2 border-black mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block animate-pulse" />
            <span>CLASSIC CASUAL // TIC-TAC-TOE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            {t("Tic-Tac-Toe Duel", "Duel Tic-Tac-Toe (XOXO)")}
          </h3>
        </div>

        {/* Mode Switcher & Reset */}
        <div className="flex items-center gap-2 font-mono text-xs font-black select-none">
          <button
            type="button"
            onClick={() => {
              setVsBot(true);
              handleResetBoard();
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer ${
              vsBot ? "bg-neutral-900 text-white" : "bg-neutral-100 hover:bg-neutral-200"
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>VS BOT</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setVsBot(false);
              handleResetBoard();
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer ${
              !vsBot ? "bg-neutral-900 text-white" : "bg-neutral-100 hover:bg-neutral-200"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>2 PLAYERS</span>
          </button>

          <motion.button
            onClick={handleResetBoard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 bg-[#00C2FF] text-black border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
            title="Reset game"
          >
            <RotateCcw className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Score Tally Board */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 font-mono text-xs font-black mb-6 select-none">
        <div className="px-4 py-2 bg-[#00C2FF]/20 border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-2">
          <span className="text-[#00C2FF] font-black text-sm">✕</span>
          <span>PLAYER X:</span>
          <span className="text-sm font-black">{scoreX}</span>
        </div>
        <div className="px-4 py-2 bg-neutral-100 border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-2">
          <span>DRAW:</span>
          <span className="text-sm font-black">{draws}</span>
        </div>
        <div className="px-4 py-2 bg-[#E11D5A]/20 border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-2">
          <span className="text-[#E11D5A] font-black text-sm">◯</span>
          <span>{vsBot ? "BOT O" : "PLAYER O"}:</span>
          <span className="text-sm font-black">{scoreO}</span>
        </div>
      </div>

      {/* 3x3 Grid Board */}
      <div className="relative max-w-xs sm:max-w-sm mx-auto aspect-square bg-neutral-900 border-2 border-black p-3 sm:p-4 shadow-[6px_6px_0px_#000] select-none">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full h-full">
          {board.map((cell, idx) => {
            const isWinningCell = winInfo?.line?.includes(idx);

            return (
              <motion.button
                key={idx}
                type="button"
                onClick={() => handleCellClick(idx)}
                whileHover={{ scale: cell ? 1 : 1.06 }}
                whileTap={{ scale: cell ? 1 : 0.92 }}
                className={`relative aspect-square border-2 border-black flex items-center justify-center text-4xl sm:text-5xl font-black font-mono shadow-[2px_2px_0px_#000] cursor-pointer transition-colors ${
                  isWinningCell
                    ? "bg-[#FFF275]"
                    : cell
                    ? "bg-white"
                    : "bg-neutral-800 hover:bg-neutral-700"
                }`}
              >
                <AnimatePresence>
                  {cell === "X" && (
                    <motion.span
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="text-[#00C2FF] drop-shadow-xs"
                    >
                      ✕
                    </motion.span>
                  )}
                  {cell === "O" && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-[#E11D5A] drop-shadow-xs"
                    >
                      ◯
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Status Announcement Banner */}
      <div className="mt-6 text-center">
        {winInfo ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#10B981] border-2 border-black font-mono text-sm font-black text-black shadow-[3px_3px_0px_#000]"
          >
            <Trophy className="w-4 h-4 text-black stroke-[2.5]" />
            <span>PEMENANG: {winInfo.winner === "X" ? "PLAYER X" : vsBot ? "BYTE BOT O" : "PLAYER O"} MENANG!</span>
            <Trophy className="w-4 h-4 text-black stroke-[2.5]" />
          </motion.div>
        ) : isDraw ? (
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#FFF275] border-2 border-black font-mono text-sm font-black text-black shadow-[3px_3px_0px_#000]">
            <MinusCircle className="w-4 h-4 text-black stroke-[2.5]" />
            <span>HASIL IMBANG / DRAW!</span>
          </div>
        ) : (
          <div className="font-mono text-xs font-bold text-neutral-600">
            GILIRAN: {isXNext ? "PLAYER X (✕)" : vsBot ? "BYTE BOT (◯)..." : "PLAYER O (◯)"}
          </div>
        )}
      </div>
    </div>
  );
}