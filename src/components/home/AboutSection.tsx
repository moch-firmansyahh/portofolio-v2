"use client";

import { useState, useEffect, type ComponentType, type ReactNode } from "react";
import { motion } from "framer-motion";
import { getProfile } from "@/services/portfolio";
import { PERSONAL_INFO as DEFAULT_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import type { PersonalInfo } from "@/types/profile";

/* ─── Hand-drawn Pencil / Sketch Arch Divider (1:1 with reference) ─── */
function ElectricLine() {
  return (
    <div className="relative w-full overflow-hidden select-none pointer-events-none -mt-3 sm:-mt-5 mb-2">
      <svg
        viewBox="0 0 1440 90"
        className="w-full h-12 sm:h-16 md:h-20 block"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* SVG filter for organic graphite pencil grain with animating seed for living pencil jitter */}
        <defs>
          <filter
            id="pencil-texture"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="3"
              result="noise"
            >
              <animate
                attributeName="seed"
                from="1"
                to="100"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2.2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {/* Hand-drawn arch path with living pencil sketch wiggle animation */}
        <motion.path
          stroke="#4B5563"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeDasharray="260 4 180 3 130 2"
          filter="url(#pencil-texture)"
          opacity={0.8}
          animate={{
            d: [
              "M 0 88 C 220 72, 450 48, 720 28 C 960 10, 1180 20, 1440 68",
              "M 0 87 C 220 73, 450 47, 720 29 C 960 11, 1180 19, 1440 67",
              "M 0 89 C 220 71, 450 49, 720 27 C 960 9, 1180 21, 1440 69",
              "M 0 88 C 220 72, 450 48, 720 28 C 960 10, 1180 20, 1440 68",
            ],
            strokeDashoffset: [0, -40, -80, -120],
          }}
          transition={{
            d: {
              duration: 0.6,
              repeat: Infinity,
              ease: "linear",
            },
            strokeDashoffset: {
              duration: 2.4,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        {/* Second layered sketch stroke adding subtle pencil friction/jitter */}
        <motion.path
          stroke="#9CA3AF"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeDasharray="160 5 210 3"
          filter="url(#pencil-texture)"
          opacity={0.5}
          animate={{
            d: [
              "M 2 87 C 222 71, 452 47, 720 28 C 958 11, 1178 21, 1438 69",
              "M 2 88 C 222 70, 452 48, 720 27 C 958 12, 1178 20, 1438 70",
              "M 2 86 C 222 72, 452 46, 720 29 C 958 10, 1178 22, 1438 68",
              "M 2 87 C 222 71, 452 47, 720 28 C 958 11, 1178 21, 1438 69",
            ],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
}
/* Constants */

const BURST_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315] as const;

const DOTS = [
  { cx: 6, cy: 6, r: 3, fill: "#171717" },
  { cx: 17, cy: 4, r: 2, fill: "#E11D5A" },
  { cx: 14, cy: 12, r: 2.2, fill: "#171717" },
  { cx: 5, cy: 14, r: 1.5, fill: "#E11D5A" },
  { cx: 19, cy: 16, r: 3, fill: "#171717" },
  { cx: 10, cy: 19, r: 1.5, fill: "#E11D5A" },
  { cx: 6, cy: 20, r: 1, fill: "#171717" },
] as const;

const SPIN_SLOW = { duration: 8, repeat: Infinity, ease: "linear" } as const;
const SPIN_FAST = { duration: 6, repeat: Infinity, ease: "linear" } as const;
const PULSE = { duration: 1.5, repeat: Infinity, ease: "easeInOut" } as const;
const FLOAT = { duration: 2, repeat: Infinity, ease: "easeInOut" } as const;

const BADGE_ICON_CLASS = "h-6 w-6 sm:h-8 sm:w-8";

/* Inline glyphs inside the headline */

function InlineGlyph({ children }: { children: ReactNode }) {
  return (
    <span className="mx-[0.14em] inline-block h-[0.82em] w-[0.82em] align-[-0.06em]">
      {children}
    </span>
  );
}

function PuzzleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <path
        fill="#EDB22E"
        d="M3 3h7v3a2 2 0 0 0 4 0V3h7v7h-3a2 2 0 0 0 0 4h3v7h-7v-3a2 2 0 0 0-4 0v3H3v-7h3a2 2 0 0 0 0-4H3z"
      />
    </svg>
  );
}

function HourglassGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <path
        fill="#E11D5A"
        d="M5 3H19a2 2 0 0 1 2 2V7C17.5 9 17.5 15 21 17V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V17C6.5 15 6.5 9 3 7V5a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}

/* Badge icons */

function DiamondsIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={BADGE_ICON_CLASS}
      fill="#1F1A0F"
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={SPIN_SLOW}
    >
      <path d="M12 2L16 6L12 10L8 6Z" />
      <path d="M18 8L22 12L18 16L14 12Z" />
      <path d="M12 14L16 18L12 22L8 18Z" />
      <path d="M6 8L10 12L6 16L2 12Z" />
    </motion.svg>
  );
}

function StarburstIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={BADGE_ICON_CLASS}
      fill="none"
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={SPIN_FAST}
    >
      {BURST_ANGLES.map((angle) => (
        <line
          key={angle}
          x1="12"
          y1="2"
          x2="12"
          y2="6.5"
          stroke="#0F3D2E"
          strokeWidth="2.4"
          strokeLinecap="round"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="4.2" fill="#E11D5A" />
    </motion.svg>
  );
}

function EyeIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={BADGE_ICON_CLASS}
      aria-hidden="true"
      animate={{ scale: [1, 1.15, 1] }}
      transition={PULSE}
    >
      <path fill="#FFFFFF" d="M1 12C5 5 19 5 23 12C19 19 5 19 1 12Z" />
      <path
        fill="#EDB22E"
        d="M12 7.5L13.5 10.5L16.5 12L13.5 13.5L12 16.5L10.5 13.5L7.5 12L10.5 10.5Z"
      />
    </motion.svg>
  );
}

function DotsIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={BADGE_ICON_CLASS}
      aria-hidden="true"
      animate={{ y: [-2, 2, -2] }}
      transition={FLOAT}
    >
      {DOTS.map((dot) => (
        <circle key={`${dot.cx}-${dot.cy}`} {...dot} />
      ))}
    </motion.svg>
  );
}

/* Skill badges */

interface SkillBadgeData {
  label: { en: string; id: string };
  labelClassName: string;
  iconBoxClassName: string;
  Icon: ComponentType;
}

const BADGES: SkillBadgeData[] = [
  {
    label: { en: "Frontend Dev", id: "Frontend Dev" },
    labelClassName: "bg-[#EDB22E] text-neutral-900",
    iconBoxClassName: "border-2 border-dashed border-[#7A5A12] bg-white",
    Icon: DiamondsIcon,
  },
  {
    label: { en: "Prototyping", id: "Prototyping" },
    labelClassName: "bg-[#2DBE82] text-neutral-900",
    iconBoxClassName: "bg-[#2DBE82]",
    Icon: StarburstIcon,
  },
  {
    label: { en: "Cyber Security", id: "Cyber Security" },
    labelClassName: "bg-[#E11D5A] text-white",
    iconBoxClassName: "bg-[#E11D5A]",
    Icon: EyeIcon,
  },
  {
    label: { en: "Web Design", id: "Desain Web" },
    labelClassName: "bg-[#38BDF8] text-neutral-900",
    iconBoxClassName: "bg-white",
    Icon: DotsIcon,
  },
];

interface SkillBadgeProps {
  label: string;
  labelClassName: string;
  iconBoxClassName: string;
  icon: ReactNode;
}

function SkillBadge({
  label,
  labelClassName,
  iconBoxClassName,
  icon,
}: SkillBadgeProps) {
  return (
    <div className="flex h-12 items-stretch gap-1 sm:h-16">
      <div className={`flex items-center px-3 sm:px-5 ${labelClassName}`}>
        <span className="whitespace-nowrap text-xl tracking-tight sm:text-[34px]">
          {label}
        </span>
      </div>
      <div
        className={`flex w-12 items-center justify-center sm:w-16 ${iconBoxClassName}`}
      >
        {icon}
      </div>
    </div>
  );
}
export default function AboutSection() {
  const [profile, setProfile] = useState<PersonalInfo>(DEFAULT_INFO);
  const { t } = useLanguage();

  useEffect(() => {
    let isMounted = true;
    async function loadLiveProfile() {
      try {
        const live = await getProfile();
        if (isMounted && live) {
          setProfile(live);
        }
      } catch (err) {
        console.warn("Using default profile in AboutSection:", err);
      }
    }
    loadLiveProfile();

    window.addEventListener("focus", loadLiveProfile);

    return () => {
      isMounted = false;
      window.removeEventListener("focus", loadLiveProfile);
    };
  }, []);

  return (
    <section id="about" className="relative bg-transparent">
      {/* Electric Wavy Line Divider */}
      <ElectricLine />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-10 sm:pt-16 pb-20 sm:pb-28">
        {/* Handwritten "about me!" at top-left */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <span
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="text-xl sm:text-2xl text-neutral-800 font-semibold tracking-wide"
          >
            {t("about me!", "tentang saya!")}
          </span>
        </motion.div>

        {/* Centered "what's up" dashed box with corner handles (1:1 reference) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10 sm:mb-14"
        >
          <div className="relative border-[1.5px] border-dashed border-neutral-800 px-5 py-2 sm:px-7 sm:py-2.5">
            {/* 4 corner handles */}
            <div className="w-2 h-2 bg-white border-[1.5px] border-neutral-800 absolute -top-1 -left-1" />
            <div className="w-2 h-2 bg-white border-[1.5px] border-neutral-800 absolute -top-1 -right-1" />
            <div className="w-2 h-2 bg-white border-[1.5px] border-neutral-800 absolute -bottom-1 -left-1" />
            <div className="w-2 h-2 bg-white border-[1.5px] border-neutral-800 absolute -bottom-1 -right-1" />
            <span className="font-mono text-sm sm:text-base font-bold text-neutral-900 tracking-wide">
              {t("what's up", "halo!")}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="mx-auto max-w-4xl text-balance text-3xl font-bold leading-[1.2] tracking-[-0.02em] text-neutral-900 sm:text-4xl md:text-5xl lg:text-[52px]">
            {t(
              "I'm Moch Firmansyah, a frontend developer in Bandung who gets excited",
              "Saya Moch Firmansyah, seorang frontend developer di Bandung yang antusias",
            )}
            <InlineGlyph>
              <PuzzleGlyph />
            </InlineGlyph>
            {t(
              "about making complicated things simple",
              "dalam menyederhanakan hal yang rumit",
            )}
            <InlineGlyph>
              <HourglassGlyph />
            </InlineGlyph>
            .
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex justify-center"
        >
          <div className="flex w-full max-w-[44rem] flex-wrap justify-center gap-1.5">
            {BADGES.map(({ label, labelClassName, iconBoxClassName, Icon }) => (
              <SkillBadge
                key={label.en}
                label={t(label.en, label.id)}
                labelClassName={labelClassName}
                iconBoxClassName={iconBoxClassName}
                icon={<Icon />}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
