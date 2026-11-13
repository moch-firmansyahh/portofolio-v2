"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * 1:1 Fan / Kipas Geometris Universal dengan kustom warna ray
 */
function FanBackground({
  color = "#62D5F1",
  opacity = 0.28,
  className = "w-full h-full",
}: {
  color?: string;
  opacity?: number;
  className?: string;
}) {
  const rayAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  return (
    <svg viewBox="0 0 800 800" className={className} fill="none">
      {rayAngles.map((deg, i) => (
        <path
          key={i}
          d="M 400 400 L 350 40 Q 400 15 450 40 Z"
          fill={color}
          fillOpacity={opacity}
          transform={`rotate(${deg} 400 400)`}
        />
      ))}
      <circle cx="400" cy="400" r="22" fill={color} fillOpacity={opacity * 1.5} />
    </svg>
  );
}

/**
 * 1:1 Modular Chunky Neo-Brutalist Typography Engine
 * Menggambar huruf geometris kapsul tebal (rx="8", height=72)
 * dengan perataan matematis otomatis di tengah SVG.
 */
function renderModularChar(char: string, x: number, y: number, key: string | number) {
  switch (char.toUpperCase()) {
    case "A":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="12" width="16" height="60" rx="8" />
          <rect x="36" y="12" width="16" height="60" rx="8" />
          <rect x="4" y="0" width="44" height="16" rx="8" />
          <rect x="12" y="30" width="28" height="14" rx="4" />
        </g>
      );
    case "B":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <path d="M 12 0 H 34 C 48 0 52 6 52 16 C 52 26 46 32 34 32 H 12 Z M 16 14 H 32 C 34 14 36 14 36 16 C 36 18 34 18 32 18 H 16 Z" />
          <path d="M 12 34 H 36 C 50 34 54 42 54 52 C 54 64 48 72 34 72 H 12 Z M 16 48 H 34 C 36 48 38 48 38 52 C 38 56 36 56 34 56 H 16 Z" />
        </g>
      );
    case "C":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="10" y="0" width="38" height="16" rx="8" />
          <rect x="10" y="56" width="38" height="16" rx="8" />
        </g>
      );
    case "D":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="36" y="0" width="16" height="72" rx="8" />
          <rect x="10" y="4" width="32" height="18" rx="4" />
          <rect x="10" y="50" width="32" height="18" rx="4" />
        </g>
      );
    case "E":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="12" y="0" width="38" height="16" rx="8" />
          <rect x="12" y="28" width="28" height="16" rx="4" />
          <rect x="12" y="56" width="38" height="16" rx="8" />
        </g>
      );
    case "F":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="12" y="0" width="38" height="16" rx="8" />
          <rect x="12" y="28" width="28" height="16" rx="4" />
        </g>
      );
    case "G":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="12" y="0" width="38" height="16" rx="8" />
          <rect x="12" y="56" width="38" height="16" rx="8" />
          <rect x="36" y="32" width="14" height="40" rx="7" />
          <rect x="22" y="32" width="26" height="16" rx="4" />
        </g>
      );
    case "H":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="36" y="0" width="16" height="72" rx="8" />
          <rect x="12" y="27" width="28" height="18" rx="4" />
        </g>
      );
    case "I":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="40" height="16" rx="8" />
          <rect x="12" y="0" width="16" height="72" rx="8" />
          <rect x="0" y="56" width="40" height="16" rx="8" />
        </g>
      );
    case "K":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="22" y="6" width="16" height="38" rx="8" transform="rotate(-32 22 6)" />
          <rect x="14" y="34" width="16" height="40" rx="8" transform="rotate(32 14 34)" />
        </g>
      );
    case "L":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="12" y="56" width="36" height="16" rx="8" />
        </g>
      );
    case "M":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="44" y="0" width="16" height="72" rx="8" />
          <rect x="22" y="0" width="16" height="50" rx="8" />
          <rect x="10" y="0" width="40" height="16" rx="8" />
        </g>
      );
    case "N":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="38" y="0" width="16" height="72" rx="8" />
          <path d="M 12 12 L 40 58 H 44 V 68 L 16 22 H 12 Z" />
        </g>
      );
    case "O":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="36" y="0" width="16" height="72" rx="8" />
          <rect x="10" y="4" width="32" height="18" rx="4" />
          <rect x="10" y="50" width="32" height="18" rx="4" />
        </g>
      );
    case "P":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <path d="M 12 0 H 34 C 44 0 50 6 50 18 C 50 30 44 36 34 36 H 12 Z M 16 14 H 32 C 34 14 36 16 36 18 C 36 20 34 22 32 22 H 16 Z" />
        </g>
      );
    case "R":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <path d="M 12 0 H 34 C 44 0 50 6 50 18 C 50 30 44 36 34 36 H 12 Z M 16 14 H 32 C 34 14 36 16 36 18 C 36 20 34 22 32 22 H 16 Z" />
          <rect x="22" y="32" width="16" height="40" rx="8" transform="rotate(-25 22 32)" />
        </g>
      );
    case "S":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="8" y="0" width="40" height="16" rx="8" />
          <rect x="0" y="8" width="16" height="30" rx="8" />
          <rect x="8" y="28" width="36" height="16" rx="8" />
          <rect x="32" y="36" width="16" height="30" rx="8" />
          <rect x="4" y="56" width="40" height="16" rx="8" />
        </g>
      );
    case "T":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="56" height="16" rx="8" />
          <rect x="20" y="14" width="16" height="58" rx="8" />
        </g>
      );
    case "U":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="56" rx="8" />
          <rect x="36" y="0" width="16" height="56" rx="8" />
          <path d="M 0 46 C 0 68 14 72 26 72 C 38 72 52 68 52 46 Z" />
        </g>
      );
    case "V":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="6" y="0" width="16" height="70" rx="8" transform="rotate(-15 6 0)" />
          <rect x="34" y="0" width="16" height="70" rx="8" transform="rotate(15 34 0)" />
        </g>
      );
    case "W":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="58" rx="8" />
          <rect x="28" y="0" width="16" height="58" rx="8" />
          <rect x="56" y="0" width="16" height="58" rx="8" />
          <path d="M 0 46 C 0 66 16 72 22 72 C 28 72 44 66 44 46 Z" />
          <path d="M 28 46 C 28 66 44 72 50 72 C 56 72 72 66 72 46 Z" />
        </g>
      );
    case "Y":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="8" y="0" width="16" height="40" rx="8" transform="rotate(-22 8 0)" />
          <rect x="32" y="0" width="16" height="40" rx="8" transform="rotate(22 32 0)" />
          <rect x="18" y="30" width="16" height="42" rx="8" />
        </g>
      );
    case "&":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="8" y="4" width="30" height="14" rx="7" />
          <rect x="0" y="12" width="14" height="24" rx="7" />
          <rect x="8" y="30" width="28" height="14" rx="7" />
          <rect x="24" y="38" width="14" height="30" rx="7" />
          <rect x="4" y="58" width="34" height="14" rx="7" />
        </g>
      );
    case "-":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="4" y="28" width="24" height="16" rx="8" />
        </g>
      );
    default:
      return null;
  }
}

function getCharAdvance(char: string): number {
  switch (char.toUpperCase()) {
    case "W":
      return 78;
    case "M":
      return 68;
    case "T":
    case "B":
    case "N":
      return 62;
    case "A":
    case "D":
    case "H":
    case "O":
    case "R":
    case "U":
    case "V":
    case "Y":
      return 60;
    case "E":
    case "G":
    case "K":
    case "P":
      return 58;
    case "C":
    case "F":
    case "S":
      return 56;
    case "L":
      return 54;
    case "I":
    case "&":
      return 46;
    case "-":
      return 34;
    case " ":
      return 26;
    default:
      return 48;
  }
}

/**
 * Komponen Typography Dua Baris Geometris
 */
function ModularTypography({
  line1,
  line2,
  viewBoxWidth = 620,
}: {
  line1: string;
  line2: string;
  viewBoxWidth?: number;
}) {
  // Hitung total advance Line 1
  const line1Chars = line1.split("");
  const line1TotalWidth = line1Chars.reduce((sum, ch) => sum + getCharAdvance(ch), 0);
  const startX1 = Math.max(10, (viewBoxWidth - line1TotalWidth) / 2);

  // Hitung total advance Line 2
  const line2Chars = line2.split("");
  const line2TotalWidth = line2Chars.reduce((sum, ch) => sum + getCharAdvance(ch), 0);
  const startX2 = Math.max(10, (viewBoxWidth - line2TotalWidth) / 2);

  let currentX1 = startX1;
  let currentX2 = startX2;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} 185`}
      className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[620px] h-auto block select-none text-[#171717]"
      fill="currentColor"
      aria-label={`${line1} ${line2}`}
    >
      {/* BARIS 1 */}
      {line1Chars.map((ch, idx) => {
        const x = currentX1;
        currentX1 += getCharAdvance(ch);
        return renderModularChar(ch, x, 10, `l1-${idx}`);
      })}

      {/* BARIS 2 */}
      {line2Chars.map((ch, idx) => {
        const x = currentX2;
        currentX2 += getCharAdvance(ch);
        return renderModularChar(ch, x, 100, `l2-${idx}`);
      })}
    </svg>
  );
}

/**
 * 1:1 Folder Tab Item Neo-Brutalist
 */
function FolderTabItem({
  label,
  bgColor = "bg-[#22C4F6]",
  hoverColor = "hover:bg-[#14BCEE]",
}: {
  label: string;
  bgColor?: string;
  hoverColor?: string;
}) {
  return (
    <div
      style={{
        clipPath:
          "polygon(0 0, 35px 0, 48px 12px, 100% 12px, 100% 100%, 0 100%)",
      }}
      className={`${bgColor} ${hoverColor} transition-all pt-7 pb-4 px-5 w-full select-none cursor-default h-full border-t border-black/10`}
    >
      <span className="font-mono text-[12px] sm:text-[13px] font-semibold tracking-wider text-[#0F172A] uppercase block truncate">
        {label}
      </span>
    </div>
  );
}

export default function ServicesSkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animasi Rotasi Berdasarkan Scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const fanRotation1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const fanRotation2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const fanRotation3 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const fanRotation4 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  const foldVertices = [
    { x: 0, y: 38 },
    { x: 200, y: 14 },
    { x: 470, y: 48 },
    { x: 835, y: 18 },
    { x: 1125, y: 46 },
    { x: 1440, y: 22 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex flex-col"
    >
      {/* =========================================
          BAGIAN 1: FRONT-END & MODERN WEB (CYAN)
          ========================================= */}
      <div className="relative w-full bg-[#8DE5FA] pt-12 sm:pt-16 pb-20 sm:pb-28 overflow-hidden">
        {/* White Fold Transition dari Top Hero */}
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-12 sm:h-16 md:h-20 z-20 pointer-events-none"
          fill="none"
        >
          <polygon
            points="0,0 1440,0 1440,22 1125,46 835,18 470,48 200,14 0,38"
            fill="#FFFFFF"
          />
          <path
            d="M 0 38 L 200 14 L 470 48 L 835 18 L 1125 46 L 1440 22"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
          />
          {foldVertices.map((pt, idx) => (
            <rect
              key={idx}
              x={pt.x - 4}
              y={pt.y - 4}
              width="8"
              height="8"
              fill="#000000"
            />
          ))}
        </svg>

        <div className="relative z-10 mt-6 sm:mt-10 px-4 sm:px-8 md:px-12 flex flex-col items-center">
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Badge: (01) beserta Kipas Cyan */}
            <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black flex items-center justify-center font-mono text-[13px] font-medium text-black mb-5 sm:mb-6 select-none bg-[#8DE5FA]">
              (01)
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px]">
                <motion.div
                  style={{ rotate: fanRotation1 }}
                  className="w-full h-full"
                >
                  <FanBackground color="#62D5F1" opacity={0.3} className="w-full h-full" />
                </motion.div>
              </div>
            </div>

            <div className="relative z-10 flex justify-center mb-6 sm:mb-8">
              <ModularTypography line1="FRONTEND" line2="WEB APPS" />
            </div>

            <p className="relative z-10 text-[15px] sm:text-[17px] text-neutral-900 font-medium max-w-lg leading-snug select-none">
              Membangun antarmuka web modern dengan React, Next.js, TypeScript, Tailwind CSS, serta animasi interaktif 60fps yang responsif dan terstruktur.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-[1100px] mx-auto mt-16 sm:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
              <div className="h-[3.5rem]">
                <FolderTabItem label="REACT & NEXT.JS (APP ROUTER)" />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem label="TYPESCRIPT & MODERN JAVASCRIPT" />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem label="TAILWIND CSS & DESIGN SYSTEMS" />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem label="FRAMER MOTION & WEBSOCKET" />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem label="STATE MANAGEMENT & FETCH API" />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem label="RESPONSIVE & PWA ARCHITECTURE" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          BAGIAN 2: BACK-END & AI INTEGRATION (YELLOW)
          ========================================= */}
      <div className="relative w-full bg-[#FCE196] pt-16 sm:pt-20 pb-20 sm:pb-28 overflow-hidden">
        {/* Cyan Fold Transition ke Yellow */}
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-12 sm:h-16 md:h-20 z-20 pointer-events-none"
          fill="none"
        >
          <polygon
            points="0,0 1440,0 1440,22 1125,46 835,18 470,48 200,14 0,38"
            fill="#8DE5FA"
          />
          <path
            d="M 0 38 L 200 14 L 470 48 L 835 18 L 1125 46 L 1440 22"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
          />
          {foldVertices.map((pt, idx) => (
            <rect
              key={idx}
              x={pt.x - 4}
              y={pt.y - 4}
              width="8"
              height="8"
              fill="#000000"
            />
          ))}
        </svg>

        <div className="relative z-10 mt-6 sm:mt-10 px-4 sm:px-8 md:px-12 flex flex-col items-center">
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Badge: (02) beserta Kipas Kuning */}
            <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black flex items-center justify-center font-mono text-[13px] font-medium text-black mb-5 sm:mb-6 select-none bg-[#FCE196]">
              (02)
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px]">
                <motion.div
                  style={{ rotate: fanRotation2 }}
                  className="w-full h-full"
                >
                  <FanBackground color="#F3AE31" opacity={0.28} className="w-full h-full" />
                </motion.div>
              </div>
            </div>

            <div className="relative z-10 flex justify-center mb-6 sm:mb-8">
              <ModularTypography line1="BACKEND" line2="& AI ENGINE" />
            </div>

            <p className="relative z-10 text-[15px] sm:text-[17px] text-neutral-900 font-medium max-w-lg leading-snug select-none">
              Merancang arsitektur server-side scalable, RESTful API, integrasi model Gemini API dengan mekanisme fail-safe, serta manajemen middleware & error handling.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-[1100px] mx-auto mt-16 sm:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="NODE.JS & EXPRESS.JS"
                  bgColor="bg-[#F3AE31]"
                  hoverColor="hover:bg-[#E29D25]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="SPRING BOOT & JAVA"
                  bgColor="bg-[#F3AE31]"
                  hoverColor="hover:bg-[#E29D25]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="LARAVEL & PHP ENGINE"
                  bgColor="bg-[#F3AE31]"
                  hoverColor="hover:bg-[#E29D25]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="GEMINI API & FAIL-SAFE LLM"
                  bgColor="bg-[#F3AE31]"
                  hoverColor="hover:bg-[#E29D25]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="RESTFUL APIS & MIDDLEWARE"
                  bgColor="bg-[#F3AE31]"
                  hoverColor="hover:bg-[#E29D25]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="SUPABASE & SERVERLESS DATA"
                  bgColor="bg-[#F3AE31]"
                  hoverColor="hover:bg-[#E29D25]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          BAGIAN 3: DATABASE & SECURITY (MINT)
          ========================================= */}
      <div className="relative w-full bg-[#A9DFBF] pt-16 sm:pt-20 pb-20 sm:pb-28 overflow-hidden">
        {/* Yellow Fold Transition ke Mint */}
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-12 sm:h-16 md:h-20 z-20 pointer-events-none"
          fill="none"
        >
          <polygon
            points="0,0 1440,0 1440,22 1125,46 835,18 470,48 200,14 0,38"
            fill="#FCE196"
          />
          <path
            d="M 0 38 L 200 14 L 470 48 L 835 18 L 1125 46 L 1440 22"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
          />
          {foldVertices.map((pt, idx) => (
            <rect
              key={idx}
              x={pt.x - 4}
              y={pt.y - 4}
              width="8"
              height="8"
              fill="#000000"
            />
          ))}
        </svg>

        <div className="relative z-10 mt-6 sm:mt-10 px-4 sm:px-8 md:px-12 flex flex-col items-center">
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Badge: (03) beserta Kipas Mint */}
            <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black flex items-center justify-center font-mono text-[13px] font-medium text-black mb-5 sm:mb-6 select-none bg-[#A9DFBF]">
              (03)
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px]">
                <motion.div
                  style={{ rotate: fanRotation3 }}
                  className="w-full h-full"
                >
                  <FanBackground color="#27AE60" opacity={0.25} className="w-full h-full" />
                </motion.div>
              </div>
            </div>

            <div className="relative z-10 flex justify-center mb-6 sm:mb-8">
              <ModularTypography line1="DATABASE" line2="& SECURITY" />
            </div>

            <p className="relative z-10 text-[15px] sm:text-[17px] text-neutral-900 font-medium max-w-lg leading-snug select-none">
              Perancangan skema relasional, optimasi query, integritas data, dan penerapan secure coding sesuai standar Google Network Security Specialization.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-[1100px] mx-auto mt-16 sm:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="POSTGRESQL & MYSQL"
                  bgColor="bg-[#52BE80]"
                  hoverColor="hover:bg-[#45A870]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="PRISMA ORM & SCHEMA DESIGN"
                  bgColor="bg-[#52BE80]"
                  hoverColor="hover:bg-[#45A870]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="JWT & OAUTH 2.0 PROTOCOLS"
                  bgColor="bg-[#52BE80]"
                  hoverColor="hover:bg-[#45A870]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="ROLE-BASED ACCESS CONTROL (RBAC)"
                  bgColor="bg-[#52BE80]"
                  hoverColor="hover:bg-[#45A870]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="SQL INJECTION DEFENSE & HASHING"
                  bgColor="bg-[#52BE80]"
                  hoverColor="hover:bg-[#45A870]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="GOOGLE NETWORK SECURITY CERT"
                  bgColor="bg-[#52BE80]"
                  hoverColor="hover:bg-[#45A870]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          BAGIAN 4: DEV TOOLS & SOFT SKILLS (ROSE/PINK)
          ========================================= */}
      <div className="relative w-full bg-[#FADBD8] pt-16 sm:pt-20 pb-20 sm:pb-28 overflow-hidden">
        {/* Mint Fold Transition ke Rose */}
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-12 sm:h-16 md:h-20 z-20 pointer-events-none"
          fill="none"
        >
          <polygon
            points="0,0 1440,0 1440,22 1125,46 835,18 470,48 200,14 0,38"
            fill="#A9DFBF"
          />
          <path
            d="M 0 38 L 200 14 L 470 48 L 835 18 L 1125 46 L 1440 22"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
          />
          {foldVertices.map((pt, idx) => (
            <rect
              key={idx}
              x={pt.x - 4}
              y={pt.y - 4}
              width="8"
              height="8"
              fill="#000000"
            />
          ))}
        </svg>

        <div className="relative z-10 mt-6 sm:mt-10 px-4 sm:px-8 md:px-12 flex flex-col items-center">
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Badge: (04) beserta Kipas Rose */}
            <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black flex items-center justify-center font-mono text-[13px] font-medium text-black mb-5 sm:mb-6 select-none bg-[#FADBD8]">
              (04)
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px]">
                <motion.div
                  style={{ rotate: fanRotation4 }}
                  className="w-full h-full"
                >
                  <FanBackground color="#EC7063" opacity={0.25} className="w-full h-full" />
                </motion.div>
              </div>
            </div>

            <div className="relative z-10 flex justify-center mb-6 sm:mb-8">
              <ModularTypography line1="DEV TOOLS" line2="& LEADERSHIP" />
            </div>

            <p className="relative z-10 text-[15px] sm:text-[17px] text-neutral-900 font-medium max-w-lg leading-snug select-none">
              Workflow kontainerisasi Docker, deployment cloud Vercel, Git collaboration, serta kepemimpinan tim dan pemecahan masalah analitis di CCI Telkom.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-[1100px] mx-auto mt-16 sm:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="DOCKER & CONTAINERIZATION"
                  bgColor="bg-[#F1948A]"
                  hoverColor="hover:bg-[#E57368]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="VERCEL DEPLOYMENTS & CI/CD"
                  bgColor="bg-[#F1948A]"
                  hoverColor="hover:bg-[#E57368]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="GIT & GITHUB COLLABORATION"
                  bgColor="bg-[#F1948A]"
                  hoverColor="hover:bg-[#E57368]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="POSTMAN, VS CODE & WIRESHARK"
                  bgColor="bg-[#F1948A]"
                  hoverColor="hover:bg-[#E57368]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="TECHNICAL PROBLEM SOLVING"
                  bgColor="bg-[#F1948A]"
                  hoverColor="hover:bg-[#E57368]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label="TEAM LEADERSHIP (CCI UNITEL)"
                  bgColor="bg-[#F1948A]"
                  hoverColor="hover:bg-[#E57368]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fold Transition ke White CoreCapabilities */}
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 z-20 pointer-events-none"
          fill="none"
        >
          <polygon
            points="0,70 1440,70 1440,48 1125,24 835,52 470,22 200,56 0,32"
            fill="#FFFFFF"
          />
          <path
            d="M 0 32 L 200 56 L 470 22 L 835 52 L 1125 24 L 1440 48"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
          />
          {foldVertices.map((pt, idx) => (
            <rect
              key={idx}
              x={pt.x - 4}
              y={70 - pt.y - 4}
              width="8"
              height="8"
              fill="#000000"
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
