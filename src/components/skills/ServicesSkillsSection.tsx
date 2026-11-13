"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ModularSubheading } from "@/components/ui/ModularTypography";

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
              <ModularSubheading line1="FRONTEND" line2="WEB APPS" />
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
              <ModularSubheading line1="BACKEND" line2="& AI ENGINE" />
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
              <ModularSubheading line1="DATABASE" line2="& SECURITY" />
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
              <ModularSubheading line1="DEV TOOLS" line2="& LEADERSHIP" />
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
