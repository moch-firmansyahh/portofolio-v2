"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { playConnect, playComplete } from "./audioEffects";
import { Zap, CheckCircle2, RotateCcw, Cpu } from "lucide-react";

interface WireRouterProps {
  soundEnabled: boolean;
}

interface Port {
  id: string;
  name: string;
  color: string;
  accentBg: string;
  borderClass: string;
}

const PORTS: Port[] = [
  { id: "cyan", name: "DATA_BUS // A1", color: "#00C2FF", accentBg: "bg-[#00C2FF]", borderClass: "border-[#00C2FF]" },
  { id: "amber", name: "POWER_CORE // B2", color: "#EDB22E", accentBg: "bg-[#EDB22E]", borderClass: "border-[#EDB22E]" },
  { id: "pink", name: "SIGNAL_WAVE // C3", color: "#E11D5A", accentBg: "bg-[#E11D5A]", borderClass: "border-[#E11D5A]" },
  { id: "emerald", name: "GROUND_SHIELD // D4", color: "#10B981", accentBg: "bg-[#10B981]", borderClass: "border-[#10B981]" },
];

export default function WireRouterGame({ soundEnabled }: WireRouterProps) {
  const { t } = useLanguage();

  // Connected ports state: mapping port.id -> isConnected
  const [connections, setConnections] = useState<Record<string, boolean>>({
    cyan: false,
    amber: false,
    pink: false,
    emerald: false,
  });

  const [activeDragging, setActiveDragging] = useState<string | null>(null);

  const totalConnected = Object.values(connections).filter(Boolean).length;
  const isAllConnected = totalConnected === PORTS.length;

  const handleConnectPort = (portId: string) => {
    if (connections[portId]) return;

    const nextState = { ...connections, [portId]: true };
    setConnections(nextState);
    playConnect(soundEnabled);

    if (Object.values(nextState).filter(Boolean).length === PORTS.length) {
      setTimeout(() => {
        playComplete(soundEnabled);
      }, 250);
    }
  };

  const handleReset = () => {
    setConnections({
      cyan: false,
      amber: false,
      pink: false,
      emerald: false,
    });
  };

  return (
    <div className="relative bg-white border-2 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b-2 border-black mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
            <Zap className="w-4 h-4 text-[#00C2FF]" />
            <span>MINI-GAME 02 // CIRCUIT ROUTER</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            {t("Wire Router & Patchbay", "Patchbay & Router Sirkuit")}
          </h3>
        </div>

        {/* Progress Pill */}
        <div className="flex items-center gap-2 font-mono text-xs font-black select-none">
          <div
            className={`px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000] transition-colors ${
              isAllConnected ? "bg-[#10B981] text-white" : "bg-[#FFF275] text-neutral-900"
            }`}
          >
            CIRCUITS CONNECTED: {totalConnected} / {PORTS.length}
          </div>

          <motion.button
            onClick={handleReset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 bg-neutral-100 hover:bg-neutral-200 border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
            title="Reset circuits"
          >
            <RotateCcw className="w-4 h-4 text-neutral-800" />
          </motion.button>
        </div>
      </div>

      {/* Interactive Circuit Board */}
      <div className="relative bg-neutral-900 border-2 border-black p-6 sm:p-8 overflow-hidden select-none">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#00C2FF 1px, transparent 1px), linear-gradient(90deg, #00C2FF 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Port Pairs List */}
        <div className="relative z-10 space-y-5 max-w-xl mx-auto">
          {PORTS.map((port) => {
            const isConn = connections[port.id];

            return (
              <div
                key={port.id}
                className="flex items-center justify-between gap-4 p-3 bg-neutral-800/90 border-2 border-neutral-700 relative overflow-hidden"
              >
                {/* Left Source Jack */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 border-black ${port.accentBg} flex items-center justify-center shadow-xs`}
                  >
                    <div className="w-2 h-2 rounded-full bg-black/60" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-white block">
                      {port.name}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400">
                      OUTPUT TERMINAL
                    </span>
                  </div>
                </div>

                {/* Animated Connecting Line in between */}
                <div className="flex-1 mx-3 sm:mx-6 h-1 bg-neutral-700 relative rounded-full overflow-hidden">
                  {isConn && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{ backgroundColor: port.color }}
                      className="h-full shadow-[0_0_12px_currentColor]"
                    />
                  )}
                </div>

                {/* Right Target Receptor Button / Jack */}
                <div>
                  {isConn ? (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#10B981] text-black font-mono text-xs font-black border-2 border-black shadow-[2px_2px_0px_#000]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>LOCKED</span>
                    </div>
                  ) : (
                    <motion.button
                      type="button"
                      onClick={() => handleConnectPort(port.id)}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className={`px-3 py-1.5 ${port.accentBg} text-black font-mono text-xs font-black border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer`}
                    >
                      <span>CONNECT 🔌</span>
                    </motion.button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* All Systems Online Banner */}
        <AnimatePresence>
          {isAllConnected && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-20 mt-6 p-4 bg-[#10B981] border-2 border-black text-center shadow-[4px_4px_0px_#000]"
            >
              <h4 className="font-mono text-base font-black text-neutral-900 flex items-center justify-center gap-2">
                <span>⚡ 100% POWER OVERCLOCK ACHIEVED! ⚡</span>
              </h4>
              <p className="font-sans text-xs text-neutral-900 font-semibold mt-1">
                {t(
                  "All high-speed data buses and power rails are fully routed.",
                  "Semua jalur bus data dan sirkuit daya berhasil tersambung sempurna."
                )}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between font-mono text-xs text-neutral-600">
        <span>CIRCUIT DIAGRAM // TURSO EDGE SPEED</span>
        <span>{t("Click CONNECT to route each bus", "Klik CONNECT untuk menyambungkan bus")}</span>
      </div>
    </div>
  );
}