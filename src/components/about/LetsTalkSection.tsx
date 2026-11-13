"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

/**
 * 1:1 Custom Chunky Modernist Modular Vector Typography
 * for "LET'S TALK" matching reference screenshot.
 */
function LetsTalkTypography() {
  return (
    <div className="w-full select-none text-neutral-900">
      <svg
        viewBox="0 0 692 90"
        style={{ overflow: "visible" }}
        className="w-full max-w-[560px] md:max-w-[620px] h-auto block select-none overflow-visible"
        fill="currentColor"
        aria-label="LET'S TALK"
      >
        {/* === LET'S === */}
        {/* L */}
        <g transform="translate(0, 0)">
          <path
            fillRule="evenodd"
            d="M 10 0 H 22 C 28 0 32 4 32 10 V 62 H 60 C 66 62 70 66 70 72 V 80 C 70 86 66 90 60 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z"
          />
        </g>
        {/* E */}
        <g transform="translate(76, 0)">
          <path
            fillRule="evenodd"
            d="M 10 0 H 60 C 66 0 70 4 70 10 V 20 C 70 26 66 30 60 30 H 28 V 40 H 52 C 58 40 62 44 62 50 V 56 C 62 62 58 66 52 66 H 28 V 74 H 60 C 66 74 70 78 70 84 V 86 C 70 88 68 90 64 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z"
          />
        </g>
        {/* T */}
        <g transform="translate(152, 0)">
          <path
            fillRule="evenodd"
            d="M 4 0 H 66 C 72 0 76 4 76 10 V 20 C 76 26 72 30 66 30 H 46 V 80 C 46 86 42 90 36 90 H 34 C 28 90 24 86 24 80 V 30 H 4 C 1 30 0 26 0 20 V 10 C 0 4 4 0 4 0 Z"
          />
        </g>
        {/* ' (Apostrophe) */}
        <g transform="translate(230, 2)">
          <path
            fillRule="evenodd"
            d="M 4 0 H 18 C 22 0 24 3 24 7 V 22 C 24 28 20 32 14 36 C 8 36 4 30 4 24 V 4 C 4 2 2 0 0 0 H 4 Z"
          />
        </g>
        {/* S */}
        <g transform="translate(262, 0)">
          <path
            fillRule="evenodd"
            d="M 20 0 H 56 C 62 0 66 4 66 10 V 22 C 66 28 62 32 56 32 H 26 C 22 32 20 34 20 36 C 20 38 22 40 26 40 H 50 C 62 40 68 48 68 58 V 70 C 68 82 58 90 46 90 H 12 C 6 90 2 86 2 80 V 68 C 2 62 6 58 12 58 H 42 C 46 58 48 56 48 54 C 48 52 46 50 42 50 H 18 C 6 50 2 42 2 32 V 20 C 2 8 10 0 20 0 Z"
          />
        </g>

        {/* === TALK === */}
        {/* T */}
        <g transform="translate(366, 0)">
          <path
            fillRule="evenodd"
            d="M 4 0 H 66 C 72 0 76 4 76 10 V 20 C 76 26 72 30 66 30 H 46 V 80 C 46 86 42 90 36 90 H 34 C 28 90 24 86 24 80 V 30 H 4 C 1 30 0 26 0 20 V 10 C 0 4 4 0 4 0 Z"
          />
        </g>
        {/* A (Distinctive Modular Hourglass/Loop A) */}
        <g transform="translate(442, 0)">
          <path
            fillRule="evenodd"
            d="M 24 0 H 46 C 58 0 66 8 66 19 C 66 28 60 34 50 38 C 45 40 43 43 46 47 C 56 52 68 62 68 76 V 80 C 68 86 64 90 58 90 H 46 C 40 90 36 86 36 80 V 68 C 36 60 30 56 24 56 C 18 56 12 60 12 68 V 80 C 12 86 8 90 2 90 H -2 C -8 90 -12 86 -12 80 V 76 C -12 62 0 52 10 47 C 13 43 11 40 6 38 C -4 34 -10 28 -10 19 C -10 8 -2 0 10 0 Z M 16 18 C 16 23 20 27 25 27 C 30 27 34 23 34 18 C 34 13 30 9 25 9 C 20 9 16 13 16 18 Z"
            transform="translate(12, 0)"
          />
        </g>
        {/* L */}
        <g transform="translate(524, 0)">
          <path
            fillRule="evenodd"
            d="M 10 0 H 22 C 28 0 32 4 32 10 V 62 H 60 C 66 62 70 66 70 72 V 80 C 70 86 66 90 60 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z"
          />
        </g>
        {/* K */}
        <g transform="translate(594, 0)">
          <path
            fillRule="evenodd"
            d="M 10 0 H 22 C 28 0 32 4 32 10 V 42 L 56 12 C 60 6 66 0 74 0 H 82 C 88 0 92 6 88 12 L 58 48 L 90 78 C 94 82 92 90 84 90 H 70 C 64 90 58 86 54 82 L 32 58 V 80 C 32 86 28 90 22 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z"
          />
        </g>
      </svg>
    </div>
  );
}

// 1:1 Perfectly Symmetrical 4-Lobed Clover with 4 Sharp V-Notches (Matching Reference Screenshot)
const BLOB_PATH = `
  M 250 74
  C 290 35, 396 -25, 458.5 41.5
  C 525 104, 465 210, 426 250
  C 465 290, 525 396, 458.5 458.5
  C 396 525, 290 465, 250 426
  C 210 465, 104 525, 41.5 458.5
  C -25 396, 35 290, 74 250
  C 35 210, -25 104, 41.5 41.5
  C 104 -25, 210 35, 250 74
  Z
`;

export default function LetsTalkSection() {
  const { t } = useLanguage();
  const charRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  // Mouse coordinate springs for responsive eye movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 14, stiffness: 120 };
  const eyeX = useSpring(mouseX, springConfig);
  const eyeY = useSpring(mouseY, springConfig);

  const [isBlinking, setIsBlinking] = useState(false);
  const lastMouseMoveRef = useRef(Date.now());

  // Handle Mouse movement on LetsTalk Canvas matching HeroSection ("AWAL")
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  // Eye pupil tracking
  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      lastMouseMoveRef.current = Date.now();
      if (!charRef.current) return;
      const rect = charRef.current.getBoundingClientRect();

      const eyeCenterOriginX = rect.left + rect.width * (322 / 500);
      const eyeCenterOriginY = rect.top + rect.height * (159 / 500);
      const deltaX = e.clientX - eyeCenterOriginX;
      const deltaY = e.clientY - eyeCenterOriginY;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(Math.hypot(deltaX, deltaY) / 28, 14);

      mouseX.set(Math.cos(angle) * distance);
      mouseY.set(Math.sin(angle) * distance);
    };

    window.addEventListener("mousemove", handleWindowMouseMove);

    // Natural idle gaze shifting
    const idleGazeInterval = setInterval(() => {
      const now = Date.now();
      if (now - lastMouseMoveRef.current > 2200) {
        const gazeTargets = [
          { x: 10, y: 1 },
          { x: 8, y: -4 },
          { x: 2, y: -7 },
          { x: 0, y: 0 },
          { x: 9, y: 4 },
          { x: -5, y: 3 },
        ];
        const randomTarget = gazeTargets[Math.floor(Math.random() * gazeTargets.length)];
        mouseX.set(randomTarget.x);
        mouseY.set(randomTarget.y);
      }
    }, 2800);

    // Natural eye blink interval
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 150);
    }, 3800);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      clearInterval(idleGazeInterval);
      clearInterval(blinkInterval);
    };
  }, [mouseX, mouseY]);

  // Dimensions of the Selection Marquee (centered on cursor 1:1 like HeroSection)
  const marqueeW = 340;
  const marqueeH = 290;
  const marqueeX = mousePos.x - marqueeW / 2;
  const marqueeY = Math.max(12, mousePos.y - marqueeH / 2);

  return (
    <section
      ref={sectionRef}
      id="lets-talk"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovered(false);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("toggle-global-cursor", { detail: { hide: false } }));
        }
      }}
      className="relative w-full bg-transparent min-h-[90vh] lg:min-h-screen flex flex-col justify-center pt-16 sm:pt-20 md:pt-24 pb-32 sm:pb-44 md:pb-56 overflow-hidden select-none"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-14 lg:gap-16">
          {/* Kolom Kiri: Green Character (Lebih ke kiri & proporsional) */}
          <div className="md:col-span-5 flex justify-center md:justify-start lg:pl-2">
            <motion.div
              ref={charRef}
              data-hide-global-cursor="true"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              animate={
                isHovered
                  ? { scale: 1.02 }
                  : {
                      rotate: [0, 0, 360],
                      y: [-4, 4, -4],
                    }
              }
              transition={
                isHovered
                  ? { duration: 0.25 }
                  : {
                      rotate: {
                        repeat: Infinity,
                        duration: 21.5,
                        times: [0, 0.93, 1],
                        ease: "easeInOut",
                      },
                      y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
                      scale: { duration: 0.3 },
                      opacity: { duration: 0.4 },
                    }
              }
              onMouseEnter={() => {
                setIsHovered(true);
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("toggle-global-cursor", { detail: { hide: true } }));
                }
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("toggle-global-cursor", { detail: { hide: false } }));
                }
              }}
              className="relative w-[230px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[390px] aspect-square cursor-none select-none"
            >
              <svg
                viewBox="0 0 500 500"
                style={{ overflow: "visible" }}
                className="w-full h-full drop-shadow-[0_16px_36px_rgba(47,188,129,0.18)] overflow-visible"
              >
                {/* 1. Base Green Character Body (1:1 Exact #2fbc81 fill, #000000 stroke) */}
                <path
                  d={BLOB_PATH}
                  fill="#2fbc81"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />

                {/* 2. Normal Black Eyes Group with Spring Mouse Tracking */}
                <motion.g
                  style={{
                    x: eyeX,
                    y: eyeY,
                  }}
                >
                  {/* Left Eye: Black pill */}
                  <motion.rect
                    x="269.5"
                    y="115"
                    width="40"
                    height="92"
                    rx="20"
                    fill="#000000"
                    animate={{
                      scaleY: isBlinking ? 0.08 : 1,
                    }}
                    transition={{ duration: 0.12 }}
                    style={{ transformOrigin: "289.5px 161px" }}
                  />

                  {/* Right Eye: Black pill */}
                  <motion.rect
                    x="335.5"
                    y="111"
                    width="40"
                    height="92"
                    rx="20"
                    fill="#000000"
                    animate={{
                      scaleY: isBlinking ? 0.08 : 1,
                    }}
                    transition={{ duration: 0.12 }}
                    style={{ transformOrigin: "355.5px 157px" }}
                  />
                </motion.g>
              </svg>
            </motion.div>
          </div>

          {/* Kolom Kanan: Typography "LET'S TALK" & Subtitle */}
          <div className="md:col-span-7 flex flex-col justify-center items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full"
            >
              <LetsTalkTypography />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 sm:mt-8 max-w-[430px] font-sans text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-neutral-800 font-normal opacity-90"
            >
              {t(
                "I'm most energized by projects where I can dig into complex problems, collaborate with smart people, and ship things that genuinely improve someone's day.",
                "Saya paling bersemangat dengan proyek di mana saya dapat mendalami masalah kompleks, berkolaborasi dengan orang-orang hebat, dan merilis karya yang benar-benar mempermudah hari seseorang."
              )}
            </motion.p>
          </div>
        </div>
      </div>

      {/* 5. Interactive Black Marquee Highlight copied 1:1 from HeroSection ("AWAL") */}
      <AnimatePresence>
        {isHovered && (
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
