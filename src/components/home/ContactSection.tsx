"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { PERSONAL_INFO as DEFAULT_INFO } from "@/data/portfolioData";
import { getProfile } from "@/services/portfolio";
import type { PersonalInfo } from "@/types/profile";
import { useLanguage } from "@/context/LanguageContext";

/**
 * 1:1 Modular Chunky Vector Typography for "CONTACT"
 * matching the reference screenshot.
 */
function ContactTypography() {
  return (
    <svg
      viewBox="0 0 460 70"
      className="h-7 sm:h-9 md:h-11 lg:h-12 w-auto block select-none"
      fill="currentColor"
      aria-label="CONTACT"
    >
      {/* C */}
      <g transform="translate(0, 0)">
        <path
          fillRule="evenodd"
          d="M 16 0 H 42 C 48 0 52 4 52 10 V 16 C 52 22 48 26 42 26 H 24 C 20 26 18 28 18 32 V 38 C 18 42 20 44 24 44 H 42 C 48 44 52 48 52 54 V 60 C 52 66 48 70 42 70 H 16 C 6 70 0 64 0 54 V 16 C 0 6 6 0 16 0 Z"
        />
      </g>
      {/* O */}
      <g transform="translate(60, 0)">
        <path
          fillRule="evenodd"
          d="M 16 0 H 40 C 50 0 56 6 56 16 V 54 C 56 64 50 70 40 70 H 16 C 6 70 0 64 0 54 V 16 C 0 6 6 0 16 0 Z M 18 20 H 38 C 40 20 41 21 41 23 V 47 C 41 49 40 50 38 50 H 18 C 16 50 15 49 15 47 V 23 C 15 21 16 20 18 20 Z"
        />
      </g>
      {/* N */}
      <g transform="translate(124, 0)">
        <path
          fillRule="evenodd"
          d="M 8 0 H 18 C 22 0 24 2 24 6 V 34 L 38 4 C 40 1 43 0 47 0 H 52 C 56 0 58 4 58 8 V 64 C 58 68 56 70 52 70 H 44 C 40 70 38 68 38 64 V 36 L 24 66 C 22 69 19 70 15 70 H 8 C 4 70 0 66 0 62 V 8 C 0 4 4 0 8 0 Z"
        />
      </g>
      {/* T */}
      <g transform="translate(190, 0)">
        <path
          fillRule="evenodd"
          d="M 3 0 H 53 C 57 0 60 3 60 7 V 15 C 60 19 57 22 53 22 H 36 V 63 C 36 67 33 70 29 70 H 27 C 23 70 20 67 20 63 V 22 H 3 C 0 22 0 19 0 15 V 7 C 0 3 3 0 3 0 Z"
        />
      </g>
      {/* A (Distinctive Modular Hourglass/Loop A matching reference) */}
      <g transform="translate(254, 0)">
        <path
          fillRule="evenodd"
          d="M 18 0 H 36 C 45 0 52 6 52 15 C 52 22 47 27 39 30 C 35 31 34 33 36 36 C 44 40 54 48 54 59 V 63 C 54 67 51 70 46 70 H 36 C 32 70 29 67 29 63 V 53 C 29 47 24 44 19 44 C 14 44 9 47 9 53 V 63 C 9 67 6 70 1 70 H -2 C -7 70 -10 67 -10 63 V 59 C -10 48 0 40 8 36 C 10 33 9 31 5 30 C -3 27 -8 22 -8 15 C -8 6 -1 0 8 0 Z M 12 14 C 12 18 15 21 19 21 C 23 21 26 18 26 14 C 26 10 23 7 19 7 C 15 7 12 10 12 14 Z"
          transform="translate(10, 0)"
        />
      </g>
      {/* C */}
      <g transform="translate(328, 0)">
        <path
          fillRule="evenodd"
          d="M 16 0 H 42 C 48 0 52 4 52 10 V 16 C 52 22 48 26 42 26 H 24 C 20 26 18 28 18 32 V 38 C 18 42 20 44 24 44 H 42 C 48 44 52 48 52 54 V 60 C 52 66 48 70 42 70 H 16 C 6 70 0 64 0 54 V 16 C 0 6 6 0 16 0 Z"
        />
      </g>
      {/* T */}
      <g transform="translate(388, 0)">
        <path
          fillRule="evenodd"
          d="M 3 0 H 53 C 57 0 60 3 60 7 V 15 C 60 19 57 22 53 22 H 36 V 63 C 36 67 33 70 29 70 H 27 C 23 70 20 67 20 63 V 22 H 3 C 0 22 0 19 0 15 V 7 C 0 3 3 0 3 0 Z"
        />
      </g>
    </svg>
  );
}

/**
 * 1:1 Animated Contact Badge Matching User Reference:
 * - Square box with solid black border & magenta (#E11D5A) background.
 * - Center black diamond (#111111) that spins on hover ("yang hitam tengahnya berputar ketika cursor mengarah ke contact").
 * - Yellow chevrons (#EDB22E) continuously moving to the right ("yang kuningnya gerak ke kanan, tanpa berhenti").
 */
function HazardBadge({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className="relative w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 bg-[#E11D5A] border-2 border-black flex items-center justify-center shrink-0 overflow-hidden">
      {/* Background Wajik Hitam yang berputar pelan saat di-hover */}
      <motion.div
        className="absolute bg-[#171717]"
        style={{ width: "72%", height: "72%" }} // Ukuran 72% agar sudutnya pas menempel di tepi kotak
        initial={{ rotate: 45 }}
        animate={
          isHovered
            ? { rotate: [45, 405] }
            : { rotate: 45 }
        }
        transition={
          isHovered
            ? { repeat: Infinity, duration: 4.5, ease: "linear" }
            : { duration: 0.5, ease: "easeOut" }
        }
      />

      {/* Panah Kuning yang selalu maju (gerak ke kanan tanpa berhenti) & tidak ikut berputar */}
      <div className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 overflow-hidden flex items-center pointer-events-none">
        <motion.div
          className="flex shrink-0"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 shrink-0 text-[#EDB22E]"
            fill="currentColor"
          >
            <path d="M 0 12 L 8 4 L 11 7 L 6 12 L 11 17 L 8 20 Z" />
            <path d="M 12 12 L 20 4 L 23 7 L 18 12 L 23 17 L 20 20 Z" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 shrink-0 text-[#EDB22E]"
            fill="currentColor"
          >
            <path d="M 0 12 L 8 4 L 11 7 L 6 12 L 11 17 L 8 20 Z" />
            <path d="M 12 12 L 20 4 L 23 7 L 18 12 L 23 17 L 20 20 Z" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const { t } = useLanguage();
  const [profile, setProfile] = useState<PersonalInfo>(DEFAULT_INFO);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Nilai pergerakan (Parallax) tombol
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    let isMounted = true;
    async function loadProfile() {
      try {
        const liveProfile = await getProfile();
        if (isMounted && liveProfile) {
          setProfile(liveProfile);
        }
      } catch (err) {
        console.warn("Using fallback profile in ContactSection:", err);
      }
    }
    loadProfile();

    window.addEventListener("focus", loadProfile);

    return () => {
      isMounted = false;
      window.removeEventListener("focus", loadProfile);
    };
  }, []);

  // Interaksi pergerakan parallax tombol saat kursor mendekat
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Cek apakah mouse ada di dalam / area tombol
      const isOver =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isOver) {
        // Jika arah mengarah ke tombol, pergerakan responsif
        x.set(deltaX * 0.12);
        y.set(deltaY * 0.12);
      } else {
        // Jika tidak mengarah, pergerakan halus
        x.set(deltaX * 0.015);
        y.set(deltaY * 0.015);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section
      id="contact"
      className="relative w-full bg-transparent pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 select-none overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-3 sm:px-6 md:px-8">
        {/* ── 1:1 Contact Banner Graphic Card Sesuai Screenshot Referensi ── */}
        <div className="relative w-full overflow-hidden rounded-[26px] sm:rounded-[36px] md:rounded-[44px] border-2 sm:border-[2.5px] border-black/90 shadow-[0_16px_50px_rgba(0,0,0,0.14)] min-h-[440px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center">
          {/* Dynamic 1:1 Yellow & Chocolate Brown Diagonal Organic Pattern */}
          <div className="absolute inset-0 w-full h-full">
            <svg
              viewBox="0 0 1440 720"
              preserveAspectRatio="none"
              className="w-full h-full block"
            >
              {/* Base warm mustard gold background */}
              <rect width="1440" height="720" fill="#E5A823" />

              {/* 1. Top-Left & Bottom-Left Brown Claw Swoop */}
              <path
                d="M 0 0
                   L 260 0
                   C 230 140 140 220 0 250
                   Z"
                fill="#3F2723"
              />
              <path
                d="M 0 380
                   C 140 370 300 480 430 330
                   C 480 270 540 230 580 210
                   C 480 340 370 540 380 720
                   L 0 720
                   Z"
                fill="#3F2723"
              />

              {/* 2. Center-Bottom to Top-Right Blade Swoop */}
              <path
                d="M 670 660
                   C 760 520 860 300 950 0
                   L 1000 0
                   C 940 320 810 570 760 720
                   L 670 720
                   Z"
                fill="#3F2723"
              />

              {/* 3. Right Side Diagonal Swath */}
              <path
                d="M 1060 720
                   C 1140 560 1260 320 1370 0
                   L 1440 0
                   L 1440 720
                   Z"
                fill="#3F2723"
              />
            </svg>
          </div>

          {/* ── Top-Left Floating Profile Card (1:1 Reference) ── */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20 max-w-[250px] sm:max-w-[285px] md:max-w-[310px] rounded-2xl bg-white/95 p-3 sm:p-4 backdrop-blur-md border border-black/15 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
          >
            <div className="flex items-start gap-3">
              {/* Profile Avatar */}
              <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 overflow-hidden rounded-full border border-black/20 bg-neutral-900 flex items-center justify-center text-white font-bold text-sm">
                <span>F</span>
              </div>

              {/* Profile Details */}
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">
                  {profile.shortName || "Firman"}
                </h4>
                <p className="mt-0.5 text-[10px] sm:text-[11px] leading-snug text-neutral-600">
                  {t(
                    "Open to contract work, full-time roles, and interesting conversations about hard design problems.",
                    "Terbuka untuk pekerjaan kontrak, peran penuh waktu, dan diskusi seputar tantangan rekayasa web.",
                  )}
                </p>

                {/* Status Badge ⚡ 1 */}
                <div className="mt-2.5 inline-flex items-center gap-1 rounded bg-[#38C6F4] px-2 py-0.5 font-mono text-[9.5px] sm:text-[10.5px] font-black text-neutral-900 border border-black/20 shadow-xs">
                  <span>⚡</span>
                  <span>1</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Center Cyan "CONTACT" Button Plaque dengan Interaksi Hover & Parallax ── */}
          <div className="relative z-10 flex items-center justify-center p-4">
            <Link href="/contact" className="block focus:outline-none">
              <motion.button
                type="button"
                ref={buttonRef}
                data-hide-global-cursor="true"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ x: springX, y: springY }}
                animate={{
                  backgroundColor: isHovered ? "#171717" : "#38C6F4",
                  borderColor: isHovered ? "#FFFFFF" : "#000000",
                  color: isHovered ? "#38C6F4" : "#171717",
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="relative flex items-center justify-between gap-3 sm:gap-6 md:gap-8 border-[2.5px] sm:border-[3px] px-4 sm:px-6 md:px-8 py-3.5 sm:py-5 md:py-6 shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] group cursor-pointer"
                aria-label="Contact"
              >
                {/* 4 Corner Square Handles (muncul hanya saat di-hover) */}
                <AnimatePresence>
                  {isHovered && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#171717] border-[1.5px] border-white z-20"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#171717] border-[1.5px] border-white z-20"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#171717] border-[1.5px] border-white z-20"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#171717] border-[1.5px] border-white z-20"
                      />
                    </>
                  )}
                </AnimatePresence>

                {/* Left Animated Badge */}
                <HazardBadge isHovered={isHovered} />

                {/* Center Typography "CONTACT" */}
                <div className="currentColor transition-colors duration-200">
                  <ContactTypography />
                </div>

                {/* Right Animated Badge */}
                <HazardBadge isHovered={isHovered} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
