"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { PERSONAL_INFO as DEFAULT_INFO } from "@/data/portfolioData";
import { getProfile } from "@/services/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import type { PersonalInfo } from "@/types/profile";

/**
 * 1:1 Unified Modular Chunky Geometric Vector Typography for "MOCH FIRMANSYAH"
 * Completely unified in a single viewBox (1100 x 90) with mathematical dead-center alignment (center at x=550).
 * Matches the chunky modernist BEJAMAN display typography with rounded outer contours and evenodd cutouts.
 */
function MochFirmansyahLetters() {
  return (
    <svg
      viewBox="0 0 1100 90"
      className="w-full h-auto block mx-auto select-none"
      fill="currentColor"
    >
      {/* ===== WORD 1: MOCH (starts at x=37) ===== */}
      {/* M */}
      <g transform="translate(37, 0)">
        <path
          fillRule="evenodd"
          d="M 10 0 H 72 C 78 0 82 4 82 10 V 80 C 82 86 78 90 72 90 H 62 C 56 90 52 86 52 80 V 36 L 43 62 C 42 65 39 67 36 67 C 33 67 30 65 29 62 L 20 36 V 80 C 20 86 16 90 10 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z"
        />
      </g>
      {/* O */}
      <g transform="translate(121, 0)">
        <path
          fillRule="evenodd"
          d="M 22 0 H 50 C 62 0 72 10 72 22 V 68 C 72 80 62 90 50 90 H 22 C 10 90 0 80 0 68 V 22 C 0 10 10 0 22 0 Z M 22 25 H 50 C 53 25 55 27 55 30 V 60 C 55 63 53 65 50 65 H 22 C 19 65 17 63 17 60 V 30 C 17 27 19 25 22 25 Z"
        />
      </g>
      {/* C */}
      <g transform="translate(197, 0)">
        <path
          fillRule="evenodd"
          d="M 22 0 H 58 C 64 0 68 4 68 10 V 20 C 68 26 64 30 58 30 H 28 C 22 30 18 34 18 40 V 50 C 18 56 22 60 28 60 H 58 C 64 60 68 64 68 70 V 80 C 68 86 64 90 58 90 H 22 C 10 90 0 80 0 68 V 22 C 0 10 10 0 22 0 Z"
        />
      </g>
      {/* H */}
      <g transform="translate(269, 0)">
        <path
          fillRule="evenodd"
          d="M 10 0 H 20 C 26 0 30 4 30 10 V 34 H 44 V 10 C 44 4 48 0 54 0 H 64 C 70 0 74 4 74 10 V 80 C 74 86 70 90 64 90 H 54 C 48 90 44 86 44 80 V 56 H 30 V 80 C 30 86 26 90 20 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z"
        />
      </g>

      {/* ===== WORD 2: FIRMANSYAH (starts at x=385) ===== */}
      {/* F */}
      <g transform="translate(385, 0)">
        <path
          fillRule="evenodd"
          d="M 10 0 H 58 C 64 0 68 4 68 10 V 20 C 68 26 64 30 58 30 H 28 V 40 H 52 C 58 40 62 44 62 50 V 58 C 62 64 58 68 52 68 H 28 V 80 C 28 86 24 90 18 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z"
        />
      </g>
      {/* I */}
      <g transform="translate(451, 0)">
        <path
          fillRule="evenodd"
          d="M 10 0 H 24 C 30 0 34 4 34 10 V 80 C 34 86 30 90 24 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z M 11 28 H 23 C 25 28 26 30 26 32 V 58 C 26 60 25 62 23 62 H 11 C 9 62 8 60 8 58 V 32 C 8 30 9 28 11 28 Z"
        />
      </g>
      {/* R */}
      <g transform="translate(485, 0)">
        <path
          fillRule="evenodd"
          d="M 10 0 H 46 C 60 0 70 8 70 22 C 70 34 62 42 50 45 L 66 79 C 70 85 66 90 58 90 H 44 C 39 90 35 86 32 81 L 22 58 H 24 V 80 C 24 86 20 90 14 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z M 24 22 H 42 C 47 22 49 24 49 29 C 49 34 47 36 42 36 H 24 Z"
        />
      </g>
      {/* M */}
      <g transform="translate(555, 0)">
        <path
          fillRule="evenodd"
          d="M 10 0 H 72 C 78 0 82 4 82 10 V 80 C 82 86 78 90 72 90 H 62 C 56 90 52 86 52 80 V 36 L 43 62 C 42 65 39 67 36 67 C 33 67 30 65 29 62 L 20 36 V 80 C 20 86 16 90 10 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z"
        />
      </g>
      {/* A */}
      <g transform="translate(635, 0)">
        <path
          fillRule="evenodd"
          d="M 22 0 H 46 C 60 0 70 10 70 22 V 80 C 70 86 66 90 60 90 H 48 C 42 90 38 86 38 80 V 62 H 28 V 80 C 28 86 24 90 18 90 H 10 C 4 90 0 86 0 80 V 22 C 0 10 10 0 22 0 Z M 20 22 H 48 C 50 22 52 24 52 26 V 44 C 52 46 50 48 48 48 H 20 C 18 48 16 46 16 44 V 26 C 16 24 18 22 20 22 Z"
        />
      </g>
      {/* N */}
      <g transform="translate(707, 0)">
        <path
          fillRule="evenodd"
          d="M 10 0 H 20 C 24 0 28 3 30 6 L 46 50 V 10 C 46 4 50 0 56 0 H 62 C 68 0 72 4 72 10 V 80 C 72 86 68 90 62 90 H 50 C 46 90 42 87 40 84 L 24 40 V 80 C 24 86 20 90 14 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z"
        />
      </g>
      {/* S */}
      <g transform="translate(779, 0)">
        <path
          fillRule="evenodd"
          d="M 20 0 H 56 C 62 0 66 4 66 10 V 22 C 66 28 62 32 56 32 H 26 C 22 32 20 34 20 36 C 20 38 22 40 26 40 H 50 C 62 40 68 48 68 58 V 70 C 68 82 58 90 46 90 H 12 C 6 90 2 86 2 80 V 68 C 2 62 6 58 12 58 H 42 C 46 58 48 56 48 54 C 48 52 46 50 42 50 H 18 C 6 50 2 42 2 32 V 20 C 2 8 10 0 20 0 Z"
        />
      </g>
      {/* Y */}
      <g transform="translate(849, 0)">
        <path
          fillRule="evenodd"
          d="M 10 0 H 20 C 24 0 28 3 30 6 L 40 32 L 50 6 C 52 3 56 0 60 0 H 70 C 76 0 80 4 80 10 C 80 12 79 15 77 17 L 54 50 V 80 C 54 86 50 90 44 90 H 36 C 30 90 26 86 26 80 V 50 L 3 17 C 1 15 0 12 0 10 C 0 4 4 0 10 0 Z"
        />
      </g>
      {/* A */}
      <g transform="translate(925, 0)">
        <path
          fillRule="evenodd"
          d="M 22 0 H 46 C 60 0 70 10 70 22 V 80 C 70 86 66 90 60 90 H 48 C 42 90 38 86 38 80 V 62 H 28 V 80 C 28 86 24 90 18 90 H 10 C 4 90 0 86 0 80 V 22 C 0 10 10 0 22 0 Z M 20 22 H 48 C 50 22 52 24 52 26 V 44 C 52 46 50 48 48 48 H 20 C 18 48 16 46 16 44 V 26 C 16 24 18 22 20 22 Z"
        />
      </g>
      {/* H */}
      <g transform="translate(997, 0)">
        <path
          fillRule="evenodd"
          d="M 10 0 H 20 C 26 0 30 4 30 10 V 34 H 44 V 10 C 44 4 48 0 54 0 H 64 C 70 0 74 4 74 10 V 80 C 74 86 70 90 64 90 H 54 C 48 90 44 86 44 80 V 56 H 30 V 80 C 30 86 26 90 20 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z"
        />
      </g>
    </svg>
  );
}

export default function HeroSection() {
  const [profile, setProfile] = useState<PersonalInfo>(DEFAULT_INFO);
  const [currentTime, setCurrentTime] = useState("");
  const { t } = useLanguage();

  const heroContainerRef = useRef<HTMLDivElement>(null);
  const cyanBoxRef = useRef<HTMLDivElement>(null);

  // Raw mouse coordinates & smooth spring interpolation for buttery "YOU" follower
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isInsideHero, setIsInsideHero] = useState(false);
  const [isHoveringCyanBorder, setIsHoveringCyanBorder] = useState(false);

  const rawMouseX = useMotionValue(-500);
  const rawMouseY = useMotionValue(-500);
  const smoothCursorX = useSpring(rawMouseX, { damping: 28, stiffness: 420, mass: 0.35 });
  const smoothCursorY = useSpring(rawMouseY, { damping: 28, stiffness: 420, mass: 0.35 });

  // Live Digital Clock updating every second (Format: 4:38:59 AM)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Sync with live profile data
  useEffect(() => {
    let isMounted = true;
    async function loadLiveProfile() {
      try {
        const live = await getProfile();
        if (isMounted && live) {
          setProfile(live);
        }
      } catch (err) {
        console.warn("Using default profile:", err);
      }
    }
    loadLiveProfile();

    window.addEventListener("focus", loadLiveProfile);

    return () => {
      isMounted = false;
      window.removeEventListener("focus", loadLiveProfile);
    };
  }, []);

  // Handle Mouse movement on Hero Canvas
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroContainerRef.current) return;
    const rect = heroContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    rawMouseX.set(x);
    rawMouseY.set(y);
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dimensions of the Black Selection Marquee (centered on cursor)
  const marqueeW = 380;
  const marqueeH = 320;
  const marqueeX = mousePos.x - marqueeW / 2;
  const marqueeY = mousePos.y - marqueeH / 2;

  return (
    <section
      ref={heroContainerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInsideHero(true)}
      onMouseLeave={() => {
        setIsInsideHero(false);
        setIsHoveringCyanBorder(false);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("toggle-global-cursor", { detail: { hide: false } }));
        }
      }}
      className="relative w-full min-h-[92vh] lg:min-h-[96vh] flex flex-col items-center justify-between pb-14 sm:pb-20 overflow-hidden bg-transparent select-none"
    >
      {/* 1. Measurement Ruler Tape - strictly placed in Home Section only (scrolls away with page) */}
      <div className="w-full h-11 sm:h-12 border-b border-neutral-300 bg-white overflow-hidden relative select-none shrink-0 z-20 pointer-events-none">
        <div
          className="relative w-full h-full will-change-transform"
          style={{
            transform: `translateX(${(mousePos.x - 600) * 0.15}px)`,
            transition: "transform 0.08s ease-out",
          }}
        >
          {Array.from({ length: 350 }, (_, i) => -500 + i * 10).map((val) => {
            const isMajor = val % 100 === 0;
            const isMedium = val % 50 === 0 && !isMajor;
            return (
              <div
                key={val}
                className="absolute top-0 flex flex-col items-center pointer-events-none"
                style={{ left: `${val}px` }}
              >
                <div
                  className={`w-[1px] ${
                    isMajor
                      ? "h-3.5 sm:h-4 bg-neutral-400"
                      : isMedium
                      ? "h-2 sm:h-2.5 bg-neutral-300"
                      : "h-1 sm:h-1.5 bg-neutral-200"
                  }`}
                />
                {isMajor && val >= 0 && (
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold text-neutral-500 mt-0.5 -translate-x-1/2 select-none tracking-tight">
                    {val}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>


      {/* 3. Top Centered Live Digital Clock (1:1 with Screenshot 1) */}
      <div className="relative z-10 font-mono text-xs sm:text-[13px] font-bold text-[#0066CC] tracking-[0.25em] uppercase mt-4 mb-4 sm:mb-8 text-center mx-auto">
        {currentTime || "12:00:00 AM"}
      </div>

      {/* 3. Main Centerpiece: DEAD-CENTERED Cyan Selection Box matching Screenshot 3 */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 mx-auto my-auto pt-6 sm:pt-8 md:pt-10 pb-2">
        {/* The Cyan Selection Bounding Box - strictly centered with symmetric padding */}
        <div
          ref={cyanBoxRef}
          data-hide-global-cursor="true"
          onMouseEnter={() => {
            setIsHoveringCyanBorder(true);
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("toggle-global-cursor", { detail: { hide: true } }));
            }
          }}
          onMouseLeave={() => {
            setIsHoveringCyanBorder(false);
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("toggle-global-cursor", { detail: { hide: false } }));
            }
          }}
          className="relative border-2 border-[#00C2FF] py-6 sm:py-8 md:py-10 px-6 sm:px-10 md:px-14 bg-white/30 backdrop-blur-[1px] shadow-xs w-full max-w-[750px] mx-auto flex items-center justify-center cursor-none"
        >
          {/* Left Tilted Sticky Note (Pastel Mint) - Stuck tightly across top-left cyan border */}
          <div
            className="absolute -top-5 sm:-top-6 left-2 sm:left-4 md:left-6 transform -rotate-6 z-30 select-none cursor-default"
          >
            <div className="bg-[#A7F3D0] text-neutral-900 border border-black/20 shadow-[3px_3px_0px_rgba(0,0,0,0.12)] px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-xs font-sans text-xs sm:text-sm md:text-base font-bold whitespace-nowrap">
              {t("Currently at Telkom University", "Mahasiswa di Telkom University")}
            </div>
          </div>

          {/* Center Handwritten "my name is" - Nestled snugly right above top cyan line */}
          <div className="absolute -top-12 sm:-top-14 left-1/2 -translate-x-1/2 flex flex-col items-center z-25 select-none pointer-events-none">
            <span
              style={{ fontFamily: "var(--font-caveat), cursive" }}
              className="text-2xl sm:text-3xl md:text-4xl text-neutral-900 font-semibold tracking-wide whitespace-nowrap"
            >
              my name is
            </span>
            <svg
              className="w-16 sm:w-20 h-2.5 text-neutral-900 -mt-0.5"
              viewBox="0 0 80 10"
              fill="none"
            >
              <path
                d="M 2 2 C 20 1 55 2 78 3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M 6 7 C 25 6 60 7 74 8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Right Tilted Sticky Note (Pastel Peach) - Stuck tightly across top-right cyan border */}
          <div
            className="absolute -top-5 sm:-top-6 right-2 sm:right-4 md:right-6 transform rotate-4 z-30 select-none cursor-default"
          >
            <div className="bg-[#FED7AA] text-neutral-900 border border-black/20 shadow-[3px_3px_0px_rgba(0,0,0,0.12)] px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-xs font-sans text-xs sm:text-sm md:text-base font-bold whitespace-nowrap">
              {t("Frontend & Security Enthusiast", "Frontend & Cyber Security")}
            </div>
          </div>

          {/* 8 Bounding Resize Handles matching Screenshot 3 */}
          {/* Top-Left */}
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00C2FF] border border-black absolute -top-1.5 -left-1.5 z-20" />
          {/* Top-Center */}
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00C2FF] border border-black absolute -top-1.5 left-1/2 -translate-x-1/2 z-20" />
          {/* Top-Right */}
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00C2FF] border border-black absolute -top-1.5 -right-1.5 z-20" />

          {/* Middle-Left */}
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00C2FF] border border-black absolute top-1/2 -left-1.5 -translate-y-1/2 z-20" />
          {/* Middle-Right */}
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00C2FF] border border-black absolute top-1/2 -right-1.5 -translate-y-1/2 z-20" />

          {/* Bottom-Left */}
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00C2FF] border border-black absolute -bottom-1.5 -left-1.5 z-20" />
          {/* Bottom-Center */}
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00C2FF] border border-black absolute -bottom-1.5 left-1/2 -translate-x-1/2 z-20" />
          {/* Bottom-Right */}
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00C2FF] border border-black absolute -bottom-1.5 -right-1.5 z-20" />

          {/* 100% Mathematically and Optically Centered: MOCH FIRMANSYAH */}
          <div className="w-full flex items-center justify-center text-black m-0 p-0">
            <MochFirmansyahLetters />
          </div>
        </div>

        {/* Status Line: Cyan Dot + AVAILABLE FOR THOUGHTFUL PROJECTS (Centered) */}
        <div className="mt-5 flex items-center justify-center gap-2 select-none mx-auto text-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00C2FF] inline-block animate-pulse shrink-0" />
          <span className="font-mono text-[10px] sm:text-xs font-bold text-neutral-800 tracking-[0.2em] uppercase">
            {t("AVAILABLE FOR THOUGHTFUL PROJECTS", "TERSEDIA UNTUK PROYEK DIGITAL")}
          </span>
        </div>
      </div>

      {/* 4. Floating Callout Badges: Frontend Developer & BDG, IN (1:1 with reference) */}
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center mt-14 sm:mt-20 mx-auto">
        {/* Left: Yellow "FRONTEND DEVELOPER" — drifts LEFT */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            x: [-20, -8, -20],
            rotate: [-14, -8, -14],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute -left-4 sm:left-0 md:left-4 -top-2 sm:top-0 z-20 select-none cursor-default"
        >
          <div className="relative select-none">
            {/* Pill capsule body */}
            <div className="flex items-center bg-[#F3A935] border-[2.5px] border-black rounded-l-full rounded-r-lg px-5 py-2 sm:px-6 sm:py-2.5 shadow-[3px_3px_0px_#000]">
              <span className="font-mono font-black text-[11px] sm:text-[13px] text-black tracking-[0.12em] uppercase whitespace-nowrap">
                {t("FRONTEND DEVELOPER", "PENGEMBANG FRONTEND")}
              </span>
            </div>
            {/* Arrow cursor pinned to top-right corner */}
            <svg width="28" height="28" viewBox="0 0 20 20" className="absolute -top-5 -right-6 -scale-x-100" fill="none">
              <path d="M 2 1 L 18 7.5 L 10 10.5 L 7.5 18 Z" fill="#F3A935" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>

        {/* Right: Pink "BDG, IN" — drifts RIGHT */}
        <motion.div
          animate={{
            y: [6, -6, 6],
            x: [8, 20, 8],
            rotate: [8, 14, 8],
          }}
          transition={{
            repeat: Infinity,
            duration: 5.4,
            ease: "easeInOut",
          }}
          className="absolute -right-4 sm:right-0 md:right-4 -top-2 sm:top-0 z-20 select-none cursor-default"
        >
          <div className="relative select-none">
            {/* Arrow cursor pinned to top-left corner (mirrored) */}
            <svg width="28" height="28" viewBox="0 0 20 20" className="absolute -top-5 -left-6" fill="none">
              <path d="M 2 1 L 18 7.5 L 10 10.5 L 7.5 18 Z" fill="#F43F5E" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            {/* Pill capsule body */}
            <div className="flex items-center bg-[#F43F5E] border-[2.5px] border-black rounded-r-full rounded-l-lg px-5 py-2 sm:px-6 sm:py-2.5 shadow-[3px_3px_0px_#000]">
              <span className="font-mono font-black text-[11px] sm:text-[13px] text-white tracking-[0.12em] uppercase whitespace-nowrap">
                BDG, IN
              </span>
            </div>
          </div>
        </motion.div>

        {/* Centered Headline: "I design ⊙ outstanding digital products 🌸." (Slightly reduced font + Spinning flower) */}
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-neutral-900 tracking-tight flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap text-center max-w-2xl leading-snug mx-auto">
          <span>{t("I design", "Saya merancang")}</span>
          {/* Concentric Cyan Circles Glyph */}
          <span className="inline-flex items-center justify-center text-[#00C2FF] mx-0.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <circle cx="12" cy="12" r="10" stroke="#00C2FF" strokeWidth="2.5" />
              <circle cx="12" cy="12" r="4.5" stroke="#00C2FF" strokeWidth="2.5" />
            </svg>
          </span>
          <span>{t("outstanding digital products", "produk digital berkelas")}</span>
          {/* Continuously Spinning Flower 🌸 */}
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="inline-block origin-center text-lg sm:text-xl md:text-2xl select-none"
          >
            🌸
          </motion.span>
          <span>.</span>
        </h1>

        {/* Call to Action Button: [ >> | CONTACT ME ] */}
        <a
          href="#contact"
          onClick={scrollToContact}
          className="mt-6 inline-flex items-center bg-black border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer group select-none"
        >
          {/* Cyan double arrow square */}
          <span className="bg-[#00C2FF] text-black font-black px-3.5 py-2.5 flex items-center justify-center text-sm border-r-2 border-black font-mono">
            &gt;&gt;
          </span>
          {/* Contact Me Label */}
          <span className="px-5 sm:px-6 py-2.5 font-black text-xs sm:text-sm tracking-wider text-white uppercase">
            {t("CONTACT ME", "HUBUNGI SAYA")}
          </span>
        </a>
      </div>

      {/* 5. Interactive Black Marquee Highlight with 1:1 Attached "YOU" Badge from Screenshot 1 */}
      <AnimatePresence>
        {isHoveringCyanBorder && (
          <motion.div
            key="black-marquee-highlight"
            data-hide-global-cursor="true"
            initial={{ scale: 0.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.15, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 340,
              damping: 24,
              mass: 0.6,
            }}
            style={{
              position: "absolute",
              left: `${marqueeX}px`,
              top: `${marqueeY}px`,
              width: `${marqueeW}px`,
              height: `${marqueeH}px`,
              backgroundColor: "#FFFFFF",
              mixBlendMode: "difference",
              pointerEvents: "none",
              zIndex: 35,
              transformOrigin: "center center",
              cursor: "none",
            }}
            className="cursor-none"
          >
            {/* 4 Corner Square Handles */}
            <div className="w-2.5 h-2.5 bg-black absolute -top-1 -left-1" />
            <div className="w-2.5 h-2.5 bg-black absolute -top-1 -right-1" />
            <div className="w-2.5 h-2.5 bg-black absolute -bottom-1 -left-1" />
            <div className="w-2.5 h-2.5 bg-black absolute -bottom-1 -right-1" />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
