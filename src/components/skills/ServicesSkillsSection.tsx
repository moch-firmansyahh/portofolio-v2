"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getSkillCategories } from "@/services/portfolio";

/**
 * 1:1 Fan / Kipas Geometris (Bentuk Penuh - Section Cyan)
 */
function FanBackground({
  className = "w-full h-full",
}: {
  className?: string;
}) {
  const rayAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  return (
    <svg viewBox="0 0 800 800" className={className} fill="none">
      {rayAngles.map((deg, i) => (
        <path
          key={i}
          d="M 400 400 L 350 40 Q 400 15 450 40 Z"
          fill="#62D5F1"
          fillOpacity="0.28"
          transform={`rotate(${deg} 400 400)`}
        />
      ))}
      <circle cx="400" cy="400" r="22" fill="#62D5F1" fillOpacity="0.4" />
    </svg>
  );
}

/**
 * Fan / Kipas Geometris (Bentuk Penuh - Section Kuning)
 */
function YellowFanBackground({
  className = "w-full h-full",
}: {
  className?: string;
}) {
  const rayAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  return (
    <svg viewBox="0 0 800 800" className={className} fill="none">
      {rayAngles.map((deg, i) => (
        <path
          key={i}
          d="M 400 400 L 350 40 Q 400 15 450 40 Z"
          fill="#F3AE31"
          fillOpacity="0.25"
          transform={`rotate(${deg} 400 400)`}
        />
      ))}
      <circle cx="400" cy="400" r="22" fill="#F3AE31" fillOpacity="0.4" />
    </svg>
  );
}

/**
 * 1:1 Vector Typography untuk "PRODUCT DESIGN"
 */
function ProductDesignTypography() {
  return (
    <svg
      viewBox="0 0 520 180"
      className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[600px] h-auto block select-none text-[#171717]"
      fill="currentColor"
      aria-label="PRODUCT DESIGN"
    >
      {/* PRODUCT */}
      <g transform="translate(15, 10)">
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <path d="M 12 0 H 34 C 44 0 50 6 50 18 C 50 30 44 36 34 36 H 12 Z M 16 14 H 32 C 34 14 36 16 36 18 C 36 20 34 22 32 22 H 16 Z" />
        </g>
        <g transform="translate(60, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <path d="M 12 0 H 34 C 44 0 50 6 50 18 C 50 30 44 36 34 36 H 12 Z M 16 14 H 32 C 34 14 36 16 36 18 C 36 20 34 22 32 22 H 16 Z" />
          <rect
            x="22"
            y="32"
            width="16"
            height="40"
            rx="8"
            transform="rotate(-25 22 32)"
          />
        </g>
        <g transform="translate(126, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="36" y="0" width="16" height="72" rx="8" />
          <rect x="10" y="4" width="32" height="18" rx="4" />
          <rect x="10" y="50" width="32" height="18" rx="4" />
        </g>
        <g transform="translate(192, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="36" y="0" width="16" height="72" rx="8" />
          <rect x="10" y="4" width="32" height="18" rx="4" />
          <rect x="10" y="50" width="32" height="18" rx="4" />
        </g>
        <g transform="translate(258, 0)">
          <rect x="0" y="0" width="16" height="56" rx="8" />
          <rect x="36" y="0" width="16" height="56" rx="8" />
          <path d="M 0 46 C 0 68 14 72 26 72 C 38 72 52 68 52 46 Z" />
        </g>
        <g transform="translate(324, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="10" y="0" width="38" height="16" rx="8" />
          <rect x="10" y="56" width="38" height="16" rx="8" />
        </g>
        <g transform="translate(386, 0)">
          <rect x="0" y="0" width="56" height="16" rx="8" />
          <rect x="20" y="14" width="16" height="58" rx="8" />
        </g>
      </g>

      {/* DESIGN */}
      <g transform="translate(55, 98)">
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="36" y="0" width="16" height="72" rx="8" />
          <rect x="10" y="4" width="32" height="18" rx="4" />
          <rect x="10" y="50" width="32" height="18" rx="4" />
        </g>
        <g transform="translate(68, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="12" y="0" width="38" height="16" rx="8" />
          <rect x="12" y="28" width="28" height="16" rx="4" />
          <rect x="12" y="56" width="38" height="16" rx="8" />
        </g>
        <g transform="translate(134, 0)">
          <rect x="8" y="0" width="40" height="16" rx="8" />
          <rect x="0" y="8" width="16" height="30" rx="8" />
          <rect x="8" y="28" width="36" height="16" rx="8" />
          <rect x="32" y="36" width="16" height="30" rx="8" />
          <rect x="4" y="56" width="40" height="16" rx="8" />
        </g>
        <g transform="translate(200, 0)">
          <rect x="0" y="0" width="44" height="16" rx="8" />
          <rect x="14" y="0" width="16" height="72" rx="8" />
          <rect x="0" y="56" width="44" height="16" rx="8" />
        </g>
        <g transform="translate(258, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="12" y="0" width="38" height="16" rx="8" />
          <rect x="12" y="56" width="38" height="16" rx="8" />
          <rect x="36" y="32" width="14" height="40" rx="7" />
          <rect x="22" y="32" width="26" height="16" rx="4" />
        </g>
        <g transform="translate(324, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="38" y="0" width="16" height="72" rx="8" />
          <path d="M 12 12 L 40 58 H 44 V 68 L 16 22 H 12 Z" />
        </g>
      </g>
    </svg>
  );
}

/**
 * 1:1 Vector Typography untuk "WEB DESIGN"
 */
function WebDesignTypography() {
  return (
    <svg
      viewBox="0 0 520 180"
      className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[600px] h-auto block select-none text-[#171717]"
      fill="currentColor"
      aria-label="WEB DESIGN"
    >
      {/* WEB */}
      <g transform="translate(130, 10)">
        {/* W */}
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="16" height="58" rx="8" />
          <rect x="28" y="0" width="16" height="58" rx="8" />
          <rect x="56" y="0" width="16" height="58" rx="8" />
          <path d="M 0 46 C 0 66 16 72 22 72 C 28 72 44 66 44 46 Z" />
          <path d="M 28 46 C 28 66 44 72 50 72 C 56 72 72 66 72 46 Z" />
        </g>
        {/* E */}
        <g transform="translate(94, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="12" y="0" width="38" height="16" rx="8" />
          <rect x="12" y="28" width="28" height="16" rx="4" />
          <rect x="12" y="56" width="38" height="16" rx="8" />
        </g>
        {/* B */}
        <g transform="translate(160, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <path d="M 12 0 H 34 C 48 0 52 6 52 16 C 52 26 46 32 34 32 H 12 Z M 16 14 H 32 C 34 14 36 14 36 16 C 36 18 34 18 32 18 H 16 Z" />
          <path d="M 12 34 H 36 C 50 34 54 42 54 52 C 54 64 48 72 34 72 H 12 Z M 16 48 H 34 C 36 48 38 48 38 52 C 38 56 36 56 34 56 H 16 Z" />
        </g>
      </g>

      {/* DESIGN */}
      <g transform="translate(55, 98)">
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="36" y="0" width="16" height="72" rx="8" />
          <rect x="10" y="4" width="32" height="18" rx="4" />
          <rect x="10" y="50" width="32" height="18" rx="4" />
        </g>
        <g transform="translate(68, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="12" y="0" width="38" height="16" rx="8" />
          <rect x="12" y="28" width="28" height="16" rx="4" />
          <rect x="12" y="56" width="38" height="16" rx="8" />
        </g>
        <g transform="translate(134, 0)">
          <rect x="8" y="0" width="40" height="16" rx="8" />
          <rect x="0" y="8" width="16" height="30" rx="8" />
          <rect x="8" y="28" width="36" height="16" rx="8" />
          <rect x="32" y="36" width="16" height="30" rx="8" />
          <rect x="4" y="56" width="40" height="16" rx="8" />
        </g>
        <g transform="translate(200, 0)">
          <rect x="0" y="0" width="44" height="16" rx="8" />
          <rect x="14" y="0" width="16" height="72" rx="8" />
          <rect x="0" y="56" width="44" height="16" rx="8" />
        </g>
        <g transform="translate(258, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="12" y="0" width="38" height="16" rx="8" />
          <rect x="12" y="56" width="38" height="16" rx="8" />
          <rect x="36" y="32" width="14" height="40" rx="7" />
          <rect x="22" y="32" width="26" height="16" rx="4" />
        </g>
        <g transform="translate(324, 0)">
          <rect x="0" y="0" width="16" height="72" rx="8" />
          <rect x="38" y="0" width="16" height="72" rx="8" />
          <path d="M 12 12 L 40 58 H 44 V 68 L 16 22 H 12 Z" />
        </g>
      </g>
    </svg>
  );
}

/**
 * 1:1 Folder Tab Item
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
      className={`${bgColor} ${hoverColor} transition-colors pt-7 pb-4 px-5 w-full select-none cursor-default h-full`}
    >
      <span className="font-mono text-[13px] font-medium tracking-wider text-[#0F172A] uppercase block truncate">
        {label}
      </span>
    </div>
  );
}

export default function ServicesSkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [skillsList1, setSkillsList1] = useState<string[]>([
    "UX / UI DESIGN",
    "PROJECT STRATEGY",
    "PROTOTYPING",
    "INTERACTION DESIGN",
    "DESIGN SYSTEMS",
  ]);

  const skillsList2 = [
    "ART DIRECTION",
    "WEB DESIGN",
    "RESPONSIVE DESIGN",
    "FRAMER DEVELOPMENT",
    "MOTION & INTERACTION",
  ];

  useEffect(() => {
    async function loadSkills() {
      try {
        const categories = await getSkillCategories();
        if (categories && categories.length > 0) {
          const firstCat = categories[0];
          if (firstCat && firstCat.skills && firstCat.skills.length >= 4) {
            setSkillsList1(
              firstCat.skills.slice(0, 5).map((s) => s.name.toUpperCase()),
            );
          }
        }
      } catch {
        // Fallback default skills
      }
    }
    loadSkills();
  }, []);

  // ── ANIMASI ROTASI BERDASARKAN SCROLL ──
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Kipas Cyan memutar searah jarum jam (0 -> 360)
  const fanRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  // Kipas Kuning memutar berlawanan arah jarum jam (0 -> -360)
  const reverseFanRotation = useTransform(scrollYProgress, [0, 1], [0, -360]);

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
          BAGIAN 1: PRODUCT DESIGN (CYAN)
          ========================================= */}
      <div className="relative w-full bg-[#8DE5FA] pt-12 sm:pt-16 pb-20 sm:pb-28 overflow-hidden">
        {/* ── WHITE MASK FOLD LINE ── */}
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
                  style={{ rotate: fanRotation }}
                  className="w-full h-full"
                >
                  <FanBackground className="w-full h-full" />
                </motion.div>
              </div>
            </div>

            <div className="relative z-10 flex justify-center mb-6 sm:mb-8">
              <ProductDesignTypography />
            </div>

            <p className="relative z-10 text-[15px] sm:text-[17px] text-neutral-900 font-medium max-w-[340px] leading-snug select-none">
              Designing digital products from the first idea to the final
              interface.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-[1100px] mx-auto mt-16 sm:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
              <div className="h-[3.5rem]">
                <FolderTabItem label={skillsList1[0] || "UX / UI DESIGN"} />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem label={skillsList1[1] || "PROJECT STRATEGY"} />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem label={skillsList1[2] || "PROTOTYPING"} />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem label={skillsList1[3] || "INTERACTION DESIGN"} />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem label={skillsList1[4] || "DESIGN SYSTEMS"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          BAGIAN 2: WEB DESIGN (YELLOW/SAND)
          ========================================= */}
      <div className="relative w-full bg-[#FCE196] pt-16 sm:pt-20 pb-20 sm:pb-28 overflow-hidden">
        {/* ── CYAN MASK FOLD LINE ── */}
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
            {/* Badge: (02) beserta Kipas Kuning Memutar Berlawanan */}
            <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black flex items-center justify-center font-mono text-[13px] font-medium text-black mb-5 sm:mb-6 select-none bg-[#FCE196]">
              (02)
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px]">
                <motion.div
                  style={{ rotate: reverseFanRotation }}
                  className="w-full h-full"
                >
                  <YellowFanBackground className="w-full h-full" />
                </motion.div>
              </div>
            </div>

            <div className="relative z-10 flex justify-center mb-6 sm:mb-8">
              <WebDesignTypography />
            </div>

            <p className="relative z-10 text-[15px] sm:text-[17px] text-neutral-900 font-medium max-w-lg leading-snug select-none">
              Strong visual direction with thoughtful structure to create
              digital experiences that are as effective as they are memorable.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-[1100px] mx-auto mt-16 sm:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label={skillsList2[0]}
                  bgColor="bg-[#F3AE31]"
                  hoverColor="hover:bg-[#E29D25]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label={skillsList2[1]}
                  bgColor="bg-[#F3AE31]"
                  hoverColor="hover:bg-[#E29D25]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label={skillsList2[2]}
                  bgColor="bg-[#F3AE31]"
                  hoverColor="hover:bg-[#E29D25]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label={skillsList2[3]}
                  bgColor="bg-[#F3AE31]"
                  hoverColor="hover:bg-[#E29D25]"
                />
              </div>
              <div className="h-[3.5rem]">
                <FolderTabItem
                  label={skillsList2[4]}
                  bgColor="bg-[#F3AE31]"
                  hoverColor="hover:bg-[#E29D25]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
