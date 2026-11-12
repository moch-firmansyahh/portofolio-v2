"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

/**
 * 1:1 Vector Typography untuk "CORE CAPABILITIES"
 * Huruf modular geometris tebal sesuai screenshot referensi
 */
function CoreCapabilitiesTypography() {
  return (
    <svg
      viewBox="0 0 580 160"
      className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[540px] h-auto block select-none text-[#171717]"
      fill="currentColor"
      aria-label="CORE CAPABILITIES"
    >
      {/* BARIS 1: CORE (Centered) */}
      <g transform="translate(170, 6)">
        {/* C */}
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="15" height="62" rx="7.5" />
          <rect x="10" y="0" width="32" height="15" rx="7.5" />
          <rect x="10" y="47" width="32" height="15" rx="7.5" />
        </g>
        {/* O */}
        <g transform="translate(58, 0)">
          <rect x="0" y="0" width="15" height="62" rx="7.5" />
          <rect x="32" y="0" width="15" height="62" rx="7.5" />
          <rect x="8" y="0" width="31" height="15" rx="5" />
          <rect x="8" y="47" width="31" height="15" rx="5" />
        </g>
        {/* R */}
        <g transform="translate(120, 0)">
          <rect x="0" y="0" width="15" height="62" rx="7.5" />
          <path d="M 10 0 H 28 C 37 0 44 6 44 17 C 44 28 37 34 28 34 H 10 Z M 15 13 H 26 C 28 13 30 14 30 17 C 30 20 28 21 26 21 H 15 Z" />
          <rect x="18" y="27" width="15" height="35" rx="7.5" transform="rotate(-23 18 27)" />
        </g>
        {/* E */}
        <g transform="translate(182, 0)">
          <rect x="0" y="0" width="15" height="62" rx="7.5" />
          <rect x="10" y="0" width="32" height="15" rx="7.5" />
          <rect x="10" y="24" width="24" height="15" rx="5" />
          <rect x="10" y="47" width="32" height="15" rx="7.5" />
        </g>
      </g>

      {/* BARIS 2: CAPABILITIES */}
      <g transform="translate(10, 84)">
        {/* C */}
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="14" height="62" rx="7" />
          <rect x="10" y="0" width="28" height="14" rx="7" />
          <rect x="10" y="48" width="28" height="14" rx="7" />
        </g>
        {/* A */}
        <g transform="translate(46, 0)">
          <rect x="0" y="12" width="14" height="50" rx="7" />
          <rect x="28" y="12" width="14" height="50" rx="7" />
          <rect x="4" y="0" width="34" height="15" rx="7" />
          <rect x="10" y="27" width="22" height="13" rx="4" />
        </g>
        {/* P */}
        <g transform="translate(96, 0)">
          <rect x="0" y="0" width="14" height="62" rx="7" />
          <path d="M 10 0 H 26 C 34 0 40 5 40 16 C 40 27 34 32 26 32 H 10 Z M 14 12 H 24 C 26 12 28 13 28 16 C 28 19 26 20 24 20 H 14 Z" />
        </g>
        {/* A */}
        <g transform="translate(144, 0)">
          <rect x="0" y="12" width="14" height="50" rx="7" />
          <rect x="28" y="12" width="14" height="50" rx="7" />
          <rect x="4" y="0" width="34" height="15" rx="7" />
          <rect x="10" y="27" width="22" height="13" rx="4" />
        </g>
        {/* B */}
        <g transform="translate(196, 0)">
          <rect x="0" y="0" width="14" height="62" rx="7" />
          <path d="M 10 0 H 25 C 33 0 37 5 37 15 C 37 24 32 28 25 28 H 10 Z" />
          <path d="M 10 27 H 27 C 35 27 39 32 39 43 C 39 53 35 59 27 59 H 10 Z" />
        </g>
        {/* I */}
        <g transform="translate(244, 0)">
          <rect x="0" y="0" width="34" height="14" rx="7" />
          <rect x="10" y="0" width="14" height="62" rx="7" />
          <rect x="0" y="48" width="34" height="14" rx="7" />
        </g>
        {/* L */}
        <g transform="translate(288, 0)">
          <rect x="0" y="0" width="14" height="62" rx="7" />
          <rect x="10" y="48" width="28" height="14" rx="7" />
        </g>
        {/* I */}
        <g transform="translate(334, 0)">
          <rect x="0" y="0" width="34" height="14" rx="7" />
          <rect x="10" y="0" width="14" height="62" rx="7" />
          <rect x="0" y="48" width="34" height="14" rx="7" />
        </g>
        {/* T */}
        <g transform="translate(378, 0)">
          <rect x="0" y="0" width="38" height="14" rx="7" />
          <rect x="12" y="12" width="14" height="50" rx="7" />
        </g>
        {/* I */}
        <g transform="translate(426, 0)">
          <rect x="0" y="0" width="34" height="14" rx="7" />
          <rect x="10" y="0" width="14" height="62" rx="7" />
          <rect x="0" y="48" width="34" height="14" rx="7" />
        </g>
        {/* E */}
        <g transform="translate(470, 0)">
          <rect x="0" y="0" width="14" height="62" rx="7" />
          <rect x="10" y="0" width="26" height="14" rx="7" />
          <rect x="10" y="24" width="20" height="14" rx="5" />
          <rect x="10" y="48" width="26" height="14" rx="7" />
        </g>
        {/* S */}
        <g transform="translate(514, 0)">
          <rect x="6" y="0" width="28" height="14" rx="7" />
          <rect x="0" y="6" width="14" height="22" rx="7" />
          <rect x="4" y="24" width="26" height="14" rx="7" />
          <rect x="20" y="32" width="14" height="22" rx="7" />
          <rect x="2" y="48" width="28" height="14" rx="7" />
        </g>
      </g>
    </svg>
  );
}

/**
 * Folder Tab Badge di pojok kiri atas tiap kuadran
 */
function QuadrantFolderBadge({
  label,
  color,
}: {
  label: string;
  color: "green" | "blue" | "yellow" | "pink";
}) {
  const colorMap = {
    green: "bg-[#2FBC81] text-white",
    blue: "bg-[#36C5F0] text-white",
    yellow: "bg-[#ECB22E] text-white",
    pink: "bg-[#E01E5A] text-white",
  };

  return (
    <div
      style={{
        clipPath: "polygon(0 0, 20px 0, 26px 7px, 100% 7px, 100% 100%, 0 100%)",
      }}
      className={`inline-flex items-center px-3.5 pt-3 pb-2 ${colorMap[color]} select-none shadow-xs`}
    >
      <span className="font-mono text-xs sm:text-[13px] font-black tracking-wider uppercase">
        {label}
      </span>
    </div>
  );
}

/**
 * 1:1 Sticky Note / Skill Tag
 * - FIX ANTI LONCAT:
 *   1. dragMomentum={false}: tidak meluncur liar saat mouse dilepas.
 *   2. dragElastic={0}: tidak membal/menarik balik sama sekali.
 *   3. dragTransition={{ power: 0, timeConstant: 0 }}: transisi inersia dimatikan total.
 *   4. whileHover dihilangkan dari transformasi CSS agar tidak memicu animasi saat cursor melepaskan tag.
 *   Hasil: Saat dilepas kursor, tag langsung 100% DIAM di posisi tersebut tanpa loncat!
 */
function DraggableSkillTag({
  label,
  color,
  rotation,
  style,
  containerRef,
}: {
  label: string;
  color: "green" | "blue" | "yellow" | "pink";
  rotation: number;
  style?: React.CSSProperties;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const themeMap = {
    green: "bg-[#A1DFC5] text-[#0D4834] hover:bg-[#8BD7B5]",
    blue: "bg-[#A0DDEF] text-[#14536D] hover:bg-[#89D5EB]",
    yellow: "bg-[#EBD59E] text-[#593E08] hover:bg-[#E5CB8C]",
    pink: "bg-[#EFB7C9] text-[#611530] hover:bg-[#ECA8BD]",
  };

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragMomentum={false}
      dragElastic={0}
      dragTransition={{ power: 0, timeConstant: 0 }}
      whileDrag={{ zIndex: 50, cursor: "grabbing" }}
      style={{
        ...style,
        rotate: rotation,
      }}
      className={`absolute px-4 py-2 sm:px-5 sm:py-2.5 rounded-[2px] text-xs sm:text-[14px] font-medium select-none cursor-grab shadow-xs transition-colors ${themeMap[color]}`}
    >
      <span className="pointer-events-none whitespace-nowrap leading-none">{label}</span>
    </motion.div>
  );
}

export default function CoreCapabilitiesSection() {
  // boardRef menaungi seluruh area 4 kuadran agar pergerakan tag leluasa dan tidak menabrak batas sempit
  const boardRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full min-h-screen bg-white bg-blueprint-grid relative flex flex-col items-center pt-24 pb-32 overflow-hidden border-t border-neutral-300">
      {/* Title Header: CORE CAPABILITIES */}
      <div className="flex flex-col items-center mb-10 sm:mb-14 select-none z-10 px-4">
        <CoreCapabilitiesTypography />
      </div>

      {/* 4-Quadrant Coordinate Grid Container */}
      <div ref={boardRef} className="w-full h-[840px] sm:h-[920px] lg:h-[1000px] relative">
        {/* Garis Salib Koordinat Hitam (Sumbu Horizontal Full-Width & Sumbu Vertikal Tinggi) */}
        <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-[#171717] z-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1.5px] h-full bg-[#171717] z-10 pointer-events-none" />

        {/* KUADRAN 1: TOP-LEFT (STRATEGY - Green) */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 p-6 sm:p-10 lg:p-14">
          <div className="relative w-full h-full">
            {/* Folder Badge di pojok kiri atas */}
            <div className="absolute top-3 left-4 sm:top-5 sm:left-6 z-20">
              <QuadrantFolderBadge label="STRATEGY" color="green" />
            </div>

            {/* Scattered Skills Tags */}
            <DraggableSkillTag
              label="Product Strategy"
              color="green"
              rotation={-2.5}
              style={{ left: "14%", top: "35%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Design Strategy"
              color="green"
              rotation={1.5}
              style={{ left: "30%", top: "58%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Research"
              color="green"
              rotation={3}
              style={{ left: "65%", top: "22%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Information Architecture"
              color="green"
              rotation={-1.5}
              style={{ left: "50%", top: "76%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="User Flows"
              color="green"
              rotation={4}
              style={{ left: "78%", top: "45%" }}
              containerRef={boardRef}
            />
          </div>
        </div>

        {/* KUADRAN 2: TOP-RIGHT (DESIGN - Blue) */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 p-6 sm:p-10 lg:p-14">
          <div className="relative w-full h-full">
            {/* Folder Badge DESIGN di pojok kiri atas kuadran */}
            <div className="absolute top-3 left-4 sm:top-5 sm:left-6 z-20">
              <QuadrantFolderBadge label="DESIGN" color="blue" />
            </div>

            {/* Scattered Skills Tags - Ditempatkan bebas dan TIDAK SEJAJAR dengan tulisan DESIGN */}
            <DraggableSkillTag
              label="UX Design"
              color="blue"
              rotation={2}
              style={{ left: "22%", top: "38%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Interaction Design"
              color="blue"
              rotation={-2}
              style={{ left: "18%", top: "66%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="UI Design"
              color="blue"
              rotation={-3}
              style={{ left: "62%", top: "25%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Web Design"
              color="blue"
              rotation={3}
              style={{ left: "80%", top: "46%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Prototyping"
              color="blue"
              rotation={-1.5}
              style={{ left: "74%", top: "74%" }}
              containerRef={boardRef}
            />
          </div>
        </div>

        {/* KUADRAN 3: BOTTOM-LEFT (SYSTEMS - Yellow) */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-6 sm:p-10 lg:p-14">
          <div className="relative w-full h-full">
            {/* Folder Badge di pojok kiri atas kuadran */}
            <div className="absolute top-3 left-4 sm:top-5 sm:left-6 z-20">
              <QuadrantFolderBadge label="SYSTEMS" color="yellow" />
            </div>

            {/* Scattered Skills Tags */}
            <DraggableSkillTag
              label="Design Systems"
              color="yellow"
              rotation={1}
              style={{ left: "15%", top: "36%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Design Tokens"
              color="yellow"
              rotation={-2}
              style={{ left: "17%", top: "68%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Component Libraries"
              color="yellow"
              rotation={3}
              style={{ left: "62%", top: "26%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Responsive Design"
              color="yellow"
              rotation={-3}
              style={{ left: "70%", top: "76%" }}
              containerRef={boardRef}
            />
          </div>
        </div>

        {/* KUADRAN 4: BOTTOM-RIGHT (MOTION - Pink) */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-6 sm:p-10 lg:p-14">
          <div className="relative w-full h-full">
            {/* Folder Badge di pojok kiri atas kuadran */}
            <div className="absolute top-3 left-4 sm:top-5 sm:left-6 z-20">
              <QuadrantFolderBadge label="MOTION" color="pink" />
            </div>

            {/* Scattered Skills Tags */}
            <DraggableSkillTag
              label="Micro-interactions"
              color="pink"
              rotation={-2}
              style={{ left: "24%", top: "42%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Motion Direction"
              color="pink"
              rotation={2}
              style={{ left: "20%", top: "72%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Transitions"
              color="pink"
              rotation={-1}
              style={{ left: "68%", top: "28%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Prototyping"
              color="pink"
              rotation={2}
              style={{ left: "72%", top: "58%" }}
              containerRef={boardRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
