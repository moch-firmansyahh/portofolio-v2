"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ModularSubheading } from "@/components/ui/ModularTypography";

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
 * - FIX ANTI LONCAT & ANTI ILANG:
 *   Menggunakan constraints relatif berbasis pixel boundaries yang stabil,
 *   sehingga kartu tidak pernah hilang atau terlempar saat diklik/ditekan!
 */
function DraggableSkillTag({
  label,
  color,
  rotation,
  style,
}: {
  label: string;
  color: "green" | "blue" | "yellow" | "pink";
  rotation: number;
  style?: React.CSSProperties;
  containerRef?: React.RefObject<HTMLDivElement | null>;
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
      dragConstraints={{ left: -160, right: 160, top: -110, bottom: 110 }}
      dragElastic={0.08}
      dragMomentum={false}
      whileDrag={{ scale: 1.05, zIndex: 100, cursor: "grabbing" }}
      style={{
        ...style,
        rotate: rotation,
      }}
      className={`absolute px-4 py-2 sm:px-5 sm:py-2.5 rounded-[2px] text-xs sm:text-[14px] font-medium select-none cursor-grab active:cursor-grabbing shadow-xs transition-colors ${themeMap[color]}`}
    >
      <span className="pointer-events-none whitespace-nowrap leading-none">{label}</span>
    </motion.div>
  );
}

export default function CoreCapabilitiesSection() {
  const boardRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full min-h-screen bg-white bg-blueprint-grid relative flex flex-col items-center pt-24 pb-32 overflow-hidden border-t border-neutral-300">
      {/* Title Header: CORE CAPABILITIES */}
      <div className="flex flex-col items-center mb-10 sm:mb-14 select-none z-10 px-4">
        <ModularSubheading line1="CORE" line2="CAPABILITIES" />
      </div>

      {/* 4-Quadrant Coordinate Grid Container */}
      <div ref={boardRef} className="w-full h-[840px] sm:h-[920px] lg:h-[1000px] relative">
        {/* Garis Salib Koordinat Hitam (Sumbu Horizontal Full-Width & Sumbu Vertikal Tinggi) */}
        <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-[#171717] z-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1.5px] h-full bg-[#171717] z-10 pointer-events-none" />

        {/* KUADRAN 1: TOP-LEFT (FRONT-END & CODE - Green) */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 p-6 sm:p-10 lg:p-14">
          <div className="relative w-full h-full">
            {/* Folder Badge di pojok kiri atas */}
            <div className="absolute top-3 left-4 sm:top-5 sm:left-6 z-20">
              <QuadrantFolderBadge label="FRONT-END & CODE" color="green" />
            </div>

            {/* Scattered Skills Tags */}
            <DraggableSkillTag
              label="React & Next.js"
              color="green"
              rotation={-2.5}
              style={{ left: "14%", top: "35%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="TypeScript & JavaScript"
              color="green"
              rotation={1.5}
              style={{ left: "28%", top: "58%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Tailwind CSS & UI Systems"
              color="green"
              rotation={3}
              style={{ left: "60%", top: "22%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Python, C++ & Go"
              color="green"
              rotation={-1.5}
              style={{ left: "48%", top: "76%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Framer Motion"
              color="green"
              rotation={4}
              style={{ left: "74%", top: "45%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="PWA & WebSocket"
              color="green"
              rotation={-2}
              style={{ left: "18%", top: "82%" }}
              containerRef={boardRef}
            />
          </div>
        </div>

        {/* KUADRAN 2: TOP-RIGHT (BACK-END & AI - Blue) */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 p-6 sm:p-10 lg:p-14">
          <div className="relative w-full h-full">
            {/* Folder Badge di pojok kiri atas kuadran */}
            <div className="absolute top-3 left-4 sm:top-5 sm:left-6 z-20">
              <QuadrantFolderBadge label="BACK-END & AI" color="blue" />
            </div>

            {/* Scattered Skills Tags */}
            <DraggableSkillTag
              label="REST API & Middleware"
              color="blue"
              rotation={2}
              style={{ left: "16%", top: "36%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Node.js & Express.js"
              color="blue"
              rotation={-2}
              style={{ left: "20%", top: "66%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Spring Boot & Java"
              color="blue"
              rotation={-3}
              style={{ left: "58%", top: "24%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Laravel & PHP"
              color="blue"
              rotation={3}
              style={{ left: "76%", top: "44%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Gemini API & Fail-Safe"
              color="blue"
              rotation={-1.5}
              style={{ left: "68%", top: "72%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Supabase Engine"
              color="blue"
              rotation={2}
              style={{ left: "44%", top: "84%" }}
              containerRef={boardRef}
            />
          </div>
        </div>

        {/* KUADRAN 3: BOTTOM-LEFT (DATA & SECURITY - Yellow) */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-6 sm:p-10 lg:p-14">
          <div className="relative w-full h-full">
            {/* Folder Badge di pojok kiri atas kuadran */}
            <div className="absolute top-3 left-4 sm:top-5 sm:left-6 z-20">
              <QuadrantFolderBadge label="DATA & SECURITY" color="yellow" />
            </div>

            {/* Scattered Skills Tags */}
            <DraggableSkillTag
              label="PostgreSQL & MySQL"
              color="yellow"
              rotation={1}
              style={{ left: "14%", top: "34%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Prisma ORM & Relasi"
              color="yellow"
              rotation={-2}
              style={{ left: "16%", top: "66%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="JWT & OAuth 2.0"
              color="yellow"
              rotation={3}
              style={{ left: "56%", top: "24%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="RBAC Access Control"
              color="yellow"
              rotation={-3}
              style={{ left: "68%", top: "74%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="SQLi Prevention & Hashing"
              color="yellow"
              rotation={2}
              style={{ left: "58%", top: "50%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Google Network Security"
              color="yellow"
              rotation={-1}
              style={{ left: "16%", top: "84%" }}
              containerRef={boardRef}
            />
          </div>
        </div>

        {/* KUADRAN 4: BOTTOM-RIGHT (TOOLS & SOFT SKILLS - Pink) */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-6 sm:p-10 lg:p-14">
          <div className="relative w-full h-full">
            {/* Folder Badge di pojok kiri atas kuadran */}
            <div className="absolute top-3 left-4 sm:top-5 sm:left-6 z-20">
              <QuadrantFolderBadge label="TOOLS & SOFT SKILLS" color="pink" />
            </div>

            {/* Scattered Skills Tags */}
            <DraggableSkillTag
              label="Git & GitHub Flow"
              color="pink"
              rotation={-2}
              style={{ left: "18%", top: "36%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Docker Containers"
              color="pink"
              rotation={2}
              style={{ left: "20%", top: "66%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Vercel Deployments"
              color="pink"
              rotation={-1}
              style={{ left: "62%", top: "26%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Postman & Wireshark"
              color="pink"
              rotation={2}
              style={{ left: "70%", top: "52%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Technical Problem Solving"
              color="pink"
              rotation={-2}
              style={{ left: "52%", top: "78%" }}
              containerRef={boardRef}
            />
            <DraggableSkillTag
              label="Team Leadership (CCI)"
              color="pink"
              rotation={3}
              style={{ left: "12%", top: "84%" }}
              containerRef={boardRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
