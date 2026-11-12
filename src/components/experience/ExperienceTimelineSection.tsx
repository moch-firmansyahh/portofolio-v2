"use client";

import React, { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { ExperienceItem } from "@/types/experience";
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Flame,
  Award,
  BookOpen,
  Terminal,
  ExternalLink,
  Layers,
  Zap,
} from "lucide-react";
import { playBubblePop, playCombo } from "@/components/playground/audioEffects";

interface ExperienceTimelineProps {
  initialExperiences: ExperienceItem[];
}

// Behind-The-Scenes Secret Logs (Catatan Rahasia Dapur)
const SECRET_DEV_LOGS: Record<
  string,
  { en: string; id: string; mood: string; techTrophy: string }
> = {
  "Central Computer Improvement Telkom University": {
    en: "Behind The Scenes: Deep dived into Next.js 16 Server Components and architecture until dawn with the group! Debated state hydration vs SSR while sipping hot black coffee. Most valuable lesson: understanding system architecture from the user's real perspective.",
    id: "Catatan Dapur: Begadang ngulik Next.js 16 Server Components dan arsitektur web sampai subuh bareng temen-temen! Debat sehat soal hidrasi state vs SSR sambil ngopi hitam. Pelajaran paling berharga: paham analisis sistem dari perspektif real user.",
    mood: "🔥 High Energy & Deep Focus",
    techTrophy: "Next.js 16 • Dynamic Routing",
  },
  "Cyber Physical System Laboratory": {
    en: "Behind The Scenes: First time deploying a full REST API Express + MySQL to cloud infrastructure. Panicked when hitting 3306 port permission and CORS errors, but fixing it felt like discovering gold. Learned the true power of middleware!",
    id: "Catatan Dapur: Pertama kali deploy REST API Express + MySQL ke cloud infrastructure. Sempat deg-degan pas kena error CORS dan koneksi port 3306, tapi pas berhasil connect ke React rasanya kaya nemu harta karun. Paham banget pentingnya middleware!",
    mood: "⚡ Cloud & Database Discovery",
    techTrophy: "Express 5 • MySQL Cloud",
  },
  "GDGoC Telkom University Bandung": {
    en: "Behind The Scenes: The genesis of the frontend obsession! Transitioned from basic HTML/CSS to reactive thinking, component-driven UI with Tailwind, and modern JavaScript standards. Met amazing peers who share the same web engineering passion.",
    id: "Catatan Dapur: Titik balik kecintaan pada Frontend! Dari yang tadinya cuma nulis HTML/CSS statis, di sini kebuka dunia reactive components, Tailwind styling, dan JavaScript modern. Ketemu banyak temen sefrekuensi yang seru diajak ngoding bareng.",
    mood: "✨ Foundational Spark & Wonder",
    techTrophy: "Modern JS • Component Architecture",
  },
};

export default function ExperienceTimelineSection({
  initialExperiences,
}: ExperienceTimelineProps) {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  // Filter State
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  // Expanded Dev Log per card
  const [expandedLogs, setExpandedLogs] = useState<Record<string, boolean>>({});

  // Kudos / Reaction Counter per card
  const [kudosCount, setKudosCount] = useState<Record<string, number>>({
    "0": 18,
    "1": 14,
    "2": 22,
  });

  // Card shake tracking on kudos
  const [shakingCard, setShakingCard] = useState<number | null>(null);

  // Floating particles on kudos click
  const [floatingParticles, setFloatingParticles] = useState<
    Array<{ id: number; cardIdx: number; emoji: string; x: number }>
  >([]);

  // Scroll Progress for Center Blueprint Metro Line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 80%"],
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Filter logic
  const filteredExperiences = useMemo(() => {
    if (activeFilter === "ALL") return initialExperiences;
    if (activeFilter === "CCI") {
      return initialExperiences.filter((e) =>
        e.company.toLowerCase().includes("central computer")
      );
    }
    if (activeFilter === "LAB") {
      return initialExperiences.filter((e) =>
        e.company.toLowerCase().includes("laboratory") || e.company.toLowerCase().includes("cps")
      );
    }
    if (activeFilter === "GDG") {
      return initialExperiences.filter((e) =>
        e.company.toLowerCase().includes("gdg") || e.company.toLowerCase().includes("google")
      );
    }
    return initialExperiences;
  }, [initialExperiences, activeFilter]);

  const toggleLog = (key: string) => {
    setExpandedLogs((prev) => {
      const nextState = !prev[key];
      playBubblePop(nextState ? 1.3 : 0.9, true);
      return {
        ...prev,
        [key]: nextState,
      };
    });
  };

  const handleKudos = (cardIdx: number) => {
    const key = String(cardIdx);
    setKudosCount((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));

    playCombo(true);
    setShakingCard(cardIdx);
    setTimeout(() => setShakingCard(null), 350);

    // Spawn 5 fun emoji particles shooting up
    const emojis = ["🔥", "⚡", "✨", "🚀", "👾", "🎉", "☕", "💖"];
    const newParticles = Array.from({ length: 4 }).map((_, i) => ({
      id: Date.now() + Math.random() + i,
      cardIdx,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: (Math.random() - 0.5) * 60,
    }));

    setFloatingParticles((prev) => [...prev.slice(-10), ...newParticles]);

    setTimeout(() => {
      setFloatingParticles((prev) =>
        prev.filter((p) => !newParticles.some((np) => np.id === p.id))
      );
    }, 950);
  };

  const totalKudos = Object.values(kudosCount).reduce((a, b) => a + b, 0);

  const filterTabs = [
    { key: "ALL", labelEn: `ALL ROADMAP (${initialExperiences.length})`, labelId: `SEMUA PERJALANAN (${initialExperiences.length})` },
    { key: "CCI", labelEn: "CCI STUDY GROUP", labelId: "CCI TELKOM" },
    { key: "LAB", labelEn: "CPS LAB & CLOUD", labelId: "LAB CPS & CLOUD" },
    { key: "GDG", labelEn: "GDGoC GOOGLE", labelId: "GDGoC GOOGLE" },
  ];

  return (
    <section
      ref={timelineRef}
      className="relative py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-10"
    >
      {/* 1. Header Bar with Technical Blueprint Details (Centered) */}
      <div className="flex flex-col items-center text-center pb-8 border-b-2 border-black mb-12 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2 font-mono text-xs font-bold text-neutral-600 uppercase tracking-widest">
          <span className="w-2 h-2 bg-[#00C2FF] border border-black" />
          <span>ROUTE MAP // STATION SEQUENCE // V2.0</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight flex items-center justify-center gap-3">
          <span>{t("Milestones & Chapters", "Babak & Tonggak Pengalaman")}</span>
          <span className="font-mono text-xs px-2.5 py-1 bg-[#EDB22E] border-2 border-black shadow-[2px_2px_0px_#000] rotate-2">
            VERIFIED ✦
          </span>
        </h2>

        {/* Global Kudos Counter Chip */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF275] border-2 border-black font-mono text-xs font-black shadow-[2px_2px_0px_#000]"
        >
          <Flame className="w-3.5 h-3.5 text-[#E11D5A] fill-[#E11D5A]" />
          <span>{t(`TOTAL KUDOS SENT: ${totalKudos} 🔥`, `TOTAL APRESIASI: ${totalKudos} 🔥`)}</span>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs select-none mt-5">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <motion.button
                key={tab.key}
                onClick={() => {
                  setActiveFilter(tab.key);
                  playBubblePop(1.1, true);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3.5 py-1.5 font-bold border-2 border-black transition-all cursor-pointer ${
                  isActive
                    ? "bg-neutral-900 text-white shadow-[3px_3px_0px_#00C2FF]"
                    : "bg-white text-neutral-800 hover:bg-neutral-100 shadow-[2px_2px_0px_#000]"
                }`}
              >
                <span>{t(tab.labelEn, tab.labelId)}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* 2. Interactive Metro / Blueprint Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Blueprint Track Line (Background Rail) */}
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-1.5 bg-neutral-200 border-x border-dashed border-neutral-400" />

        {/* Animated Progress Line filling with scroll */}
        <motion.div
          style={{ height: pathHeight }}
          className="absolute top-0 left-6 md:left-1/2 -translate-x-1/2 w-1.5 bg-[#00C2FF] border-x border-black z-10 origin-top shadow-[0_0_8px_#00C2FF]"
        />

        {/* Travelling Energy Light Pulse along line */}
        <motion.div
          animate={{
            top: ["0%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-6 bg-[#FFE600] border border-black rounded-full z-15 shadow-[0_0_10px_#FFE600] pointer-events-none"
        />

        {/* Timeline Items List */}
        <div className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const secretLog =
                SECRET_DEV_LOGS[exp.company] || {
                  en: "Behind The Scenes: Consistently practicing, solving engineering puzzles, and sharpening code architecture skills.",
                  id: "Catatan Dapur: Mengasah keahlian arsitektur software dan kolaborasi tim secara konsisten.",
                  mood: "🚀 Leveling Up",
                  techTrophy: exp.technologies?.[0] || "Engineering",
                };
              const isLogOpen = !!expandedLogs[exp.company || String(index)];
              const kudos = kudosCount[String(index)] || 10;
              const isShaking = shakingCard === index;

              // Card Accent Color
              const accentColors = [
                { bg: "bg-[#00C2FF]", text: "text-black", name: "CYAN_LINE" },
                { bg: "bg-[#EDB22E]", text: "text-black", name: "AMBER_LINE" },
                { bg: "bg-[#10B981]", text: "text-black", name: "EMERALD_LINE" },
              ];
              const accent = accentColors[index % accentColors.length];

              return (
                <motion.div
                  key={exp.id || `${exp.company}-${index}`}
                  layout
                  initial={{ opacity: 0, y: 35, rotate: isEven ? -1 : 1 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    !isEven ? "md:flex-row-reverse" : ""
                  } gap-6 md:gap-14`}
                >
                  {/* Metro Station Node with Pulsing Radar Ring & 360 Spin */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 flex items-center justify-center z-20">
                    {/* Concentric Radar Wave */}
                    <motion.div
                      animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                      transition={{ repeat: Infinity, duration: 2.2, delay: index * 0.4, ease: "easeOut" }}
                      className="absolute w-10 h-10 rounded-full border-2 border-black bg-[#00C2FF]/30 pointer-events-none"
                    />

                    <motion.div
                      whileHover={{ scale: 1.25, rotate: 180 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className={`relative w-10 h-10 rounded-full border-2 border-black ${accent.bg} shadow-[3px_3px_0px_#000] flex items-center justify-center font-mono font-black text-xs cursor-pointer select-none`}
                    >
                      <span>0{index + 1}</span>
                    </motion.div>
                  </div>

                  {/* Experience Card */}
                  <div className="ml-14 md:ml-0 w-[calc(100%-3.5rem)] md:w-[calc(50%-2rem)] md:text-left">
                    <motion.div
                      animate={isShaking ? { x: [-3, 3, -3, 3, 0] } : {}}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -6, scale: 1.01 }}
                      className="group relative bg-white border-2 border-black p-5 sm:p-7 shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#000] transition-shadow duration-200"
                    >
                      {/* Technical Registration Crosshairs at 4 corners */}
                      <div className="absolute top-1.5 left-1.5 text-neutral-400 font-mono text-[9px] pointer-events-none group-hover:text-black transition-colors">
                        +
                      </div>
                      <div className="absolute top-1.5 right-1.5 text-neutral-400 font-mono text-[9px] pointer-events-none group-hover:text-black transition-colors">
                        +
                      </div>
                      <div className="absolute bottom-1.5 left-1.5 text-neutral-400 font-mono text-[9px] pointer-events-none group-hover:text-black transition-colors">
                        +
                      </div>
                      <div className="absolute bottom-1.5 right-1.5 text-neutral-400 font-mono text-[9px] pointer-events-none group-hover:text-black transition-colors">
                        +
                      </div>

                      {/* Top Accent Header Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-black">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 border border-black font-mono text-[10px] font-black uppercase ${accent.bg} ${accent.text} shadow-[2px_2px_0px_#000]`}
                          >
                            {accent.name}
                          </span>
                          <span className="font-mono text-xs font-bold text-neutral-600 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                        </div>

                        {/* Location */}
                        <span className="font-mono text-[11px] text-neutral-600 flex items-center gap-1 font-semibold">
                          <MapPin className="w-3 h-3 text-[#E11D5A]" />
                          {exp.location.split(",")[0]}
                        </span>
                      </div>

                      {/* Main Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight leading-snug">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-xs sm:text-sm font-bold text-neutral-700 mt-1 mb-3 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" />
                        <span>{exp.company}</span>
                      </p>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Technologies Pill Badges with hover spring */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200 mb-5">
                          {exp.technologies.map((tech, tIdx) => (
                            <motion.span
                              key={`${tech}-${tIdx}`}
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-2.5 py-1 bg-neutral-100 hover:bg-[#FFE600] border border-black font-mono text-[11px] font-bold text-neutral-900 shadow-[1.5px_1.5px_0px_#000] cursor-pointer transition-colors"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      )}

                      {/* Interactive Footer Controls: Dev Note Accordion + Kudos Counter */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-2 border-black/10">
                        {/* 1. Behind The Scenes Button */}
                        <motion.button
                          onClick={() => toggleLog(exp.company || String(index))}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 border-2 border-black font-mono text-xs font-bold transition-colors cursor-pointer ${
                            isLogOpen
                              ? "bg-neutral-900 text-white shadow-[2px_2px_0px_#00C2FF]"
                              : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 shadow-[2px_2px_0px_#000]"
                          }`}
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>
                            {isLogOpen
                              ? t("Tutup Catatan Dapur", "Tutup Catatan Dapur")
                              : t("Buka Catatan Dapur (Dev Log)", "Buka Catatan Dapur (Dev Log)")}
                          </span>
                          {isLogOpen ? (
                            <ChevronUp className="w-3.5 h-3.5 ml-1" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 ml-1" />
                          )}
                        </motion.button>

                        {/* 2. Kudos Fire Button with Particle Explosion */}
                        <div className="relative">
                          <motion.button
                            onClick={() => handleKudos(index)}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.88 }}
                            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFF275] hover:bg-[#FFE600] border-2 border-black font-mono text-xs font-black text-neutral-900 shadow-[2px_2px_0px_#000] cursor-pointer select-none"
                            title={t("Send Kudos to this milestone!", "Beri apresiasi untuk babak ini!")}
                          >
                            <Flame className="w-3.5 h-3.5 text-[#E11D5A] fill-[#E11D5A]" />
                            <span>Kudos</span>
                            <span className="px-1.5 py-0.2 bg-white border border-black rounded-sm text-[10px]">
                              {kudos}
                            </span>
                          </motion.button>

                          {/* Floating Emojis on Click */}
                          <AnimatePresence>
                            {floatingParticles
                              .filter((p) => p.cardIdx === index)
                              .map((p) => (
                                <motion.div
                                  key={p.id}
                                  initial={{ opacity: 1, y: 0, x: p.x, scale: 0.6 }}
                                  animate={{ opacity: 0, y: -65, x: p.x * 1.5, scale: 1.5 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.9, ease: "easeOut" }}
                                  className="absolute top-0 right-2 pointer-events-none text-xl z-40 select-none"
                                >
                                  {p.emoji}
                                </motion.div>
                              ))}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Behind The Scenes Blueprint Foldout Drawer */}
                      <AnimatePresence>
                        {isLogOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="relative bg-[#FFF275] border-2 border-black p-4 sm:p-5 shadow-[4px_4px_0px_#000] rotate-[-0.5deg]">
                              {/* Pushpin at top */}
                              <div className="absolute -top-2.5 left-6 w-5 h-5 rounded-full bg-[#E11D5A] border-2 border-black flex items-center justify-center shadow-xs">
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              </div>

                              <div className="flex items-center justify-between border-b border-black/20 pb-2 mb-2 font-mono text-[10px] text-neutral-800">
                                <span className="font-bold flex items-center gap-1">
                                  <Terminal className="w-3.5 h-3.5 text-neutral-900" />
                                  CONFIDENTIAL DEV LOG // LEVEL 1
                                </span>
                                <span className="font-black px-1.5 py-0.5 bg-black text-white rounded-xs">
                                  {secretLog.mood}
                                </span>
                              </div>

                              <p
                                style={{ fontFamily: "var(--font-caveat), cursive" }}
                                className="text-base sm:text-lg text-neutral-900 font-semibold leading-snug"
                              >
                                &ldquo;{t(secretLog.en, secretLog.id)}&rdquo;
                              </p>

                              <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between font-mono text-[10px] text-neutral-900 font-bold">
                                <span>TROPHY: {secretLog.techTrophy}</span>
                                <span className="text-neutral-700">
                                  {t("keep building! 🚀", "tetap berproses! 🚀")}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
