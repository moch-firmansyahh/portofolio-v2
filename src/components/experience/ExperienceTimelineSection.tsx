"use client";

import React, { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { ExperienceItem } from "@/types/experience";
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Heart,
  Star,
  Zap,
  Terminal,
  Code2,
  Server,
  Globe,
  CheckCircle2,
  BookOpen,
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
  Reacteev: {
    en: "Behind The Scenes: Working as Full Stack Developer Intern at Reacteev! Designing and shipping responsive frontend components while integrating performant REST APIs. Experiencing firsthand how production features scale in a fast-paced environment.",
    id: "Catatan Dapur: Pengalaman nyata sebagai Full Stack Developer Intern di Reacteev! Merancang dan merilis antarmuka front-end responsif terintegrasi dengan REST API handal. Belajar langsung bagaimana fitur skala produksi dirawat secara profesional.",
    mood: "Industry Velocity & Real-World Impact",
    techTrophy: "Next.js • Express • REST API Services",
  },
  "CCI UNITEL Universitas Telkom - Kepala Divisi": {
    en: "Behind The Scenes: Stepping up to lead the Web Development Division at CCI Telkom University! Guiding members, structuring modern web roadmaps, and mentoring projects. True leadership is about empowering peers to level up together!",
    id: "Catatan Dapur: Memimpin divisi Web Development di CCI UNITEL Telkom University! Mengoordinasikan anggota divisi, menyusun kurikulum belajar web modern, dan menggerakkan proyek kolaboratif. Kepemimpinan sejati adalah tentang memberdayakan rekan-rekan untuk berkembang bersama!",
    mood: "Leadership, Mentorship & Vision",
    techTrophy: "Curriculum • Project Direction • Leadership",
  },
  "CCI UNITEL Universitas Telkom": {
    en: "Behind The Scenes: Deep dived into Next.js Server Components and reactive architecture until dawn with the team! Debated state hydration vs SSR while sipping hot coffee. Most valuable takeaway: building clean, user-centric interfaces.",
    id: "Catatan Dapur: Begadang ngulik Next.js Server Components dan arsitektur web sampai subuh bareng tim! Debat sehat soal hidrasi state vs SSR sambil ngopi hitam. Pelajaran paling berharga: paham analisis sistem dari perspektif real user.",
    mood: "High Energy & Deep Focus",
    techTrophy: "Next.js • React • State Management",
  },
  "Central Computer Improvement Telkom University": {
    en: "Behind The Scenes: Deep dived into Next.js Server Components and reactive architecture until dawn with the team! Debated state hydration vs SSR while sipping hot coffee. Most valuable takeaway: building clean, user-centric interfaces.",
    id: "Catatan Dapur: Begadang ngulik Next.js Server Components dan arsitektur web sampai subuh bareng tim! Debat sehat soal hidrasi state vs SSR sambil ngopi hitam. Pelajaran paling berharga: paham analisis sistem dari perspektif real user.",
    mood: "High Energy & Deep Focus",
    techTrophy: "Next.js • React • State Management",
  },
  "CPS Laboratory Universitas Telkom": {
    en: "Behind The Scenes: First time deploying a full REST API Express + MySQL to cloud infrastructure. Panicked when hitting port permission and CORS errors, but fixing it felt like discovering gold. Learned the true power of middleware!",
    id: "Catatan Dapur: Pertama kali deploy REST API Express + MySQL ke cloud infrastructure. Sempat deg-degan pas kena error CORS dan izin port database, tapi pas berhasil connect ke React rasanya kaya nemu harta karun. Paham banget pentingnya middleware!",
    mood: "Cloud & Database Discovery",
    techTrophy: "Express 5 • MySQL Cloud",
  },
  "Cyber Physical System Laboratory": {
    en: "Behind The Scenes: First time deploying a full REST API Express + MySQL to cloud infrastructure. Panicked when hitting port permission and CORS errors, but fixing it felt like discovering gold. Learned the true power of middleware!",
    id: "Catatan Dapur: Pertama kali deploy REST API Express + MySQL ke cloud infrastructure. Sempat deg-degan pas kena error CORS dan izin port database, tapi pas berhasil connect ke React rasanya kaya nemu harta karun. Paham banget pentingnya middleware!",
    mood: "Cloud & Database Discovery",
    techTrophy: "Express 5 • MySQL Cloud",
  },
  "GDGoC Universitas Telkom": {
    en: "Behind The Scenes: The genesis of the web obsession! Transitioned from basic HTML/CSS to reactive thinking, component-driven UI with Tailwind, and modern JavaScript standards. Met amazing peers who share the same web engineering passion.",
    id: "Catatan Dapur: Titik awal kecintaan pada Frontend! Dari yang tadinya cuma nulis HTML/CSS statis, di sini kebuka dunia reactive components, Tailwind styling, dan JavaScript modern. Ketemu banyak temen sefrekuensi yang seru diajak ngoding bareng.",
    mood: "Foundational Spark & Wonder",
    techTrophy: "Modern JS • Component Architecture",
  },
  "GDGoC Telkom University Bandung": {
    en: "Behind The Scenes: The genesis of the web obsession! Transitioned from basic HTML/CSS to reactive thinking, component-driven UI with Tailwind, and modern JavaScript standards. Met amazing peers who share the same web engineering passion.",
    id: "Catatan Dapur: Titik awal kecintaan pada Frontend! Dari yang tadinya cuma nulis HTML/CSS statis, di sini kebuka dunia reactive components, Tailwind styling, dan JavaScript modern. Ketemu banyak temen sefrekuensi yang seru diajak ngoding bareng.",
    mood: "Foundational Spark & Wonder",
    techTrophy: "Modern JS • Component Architecture",
  },
};

// Curated Key Takeaways / Milestones per experience
const MILESTONE_HIGHLIGHTS: Record<string, { en: string[]; id: string[] }> = {
  Reacteev: {
    en: [
      "Engineered responsive front-end interfaces integrated with backend REST APIs",
      "Designed and maintained resilient server-side services powering core app workflows",
      "Participated in production code reviews, testing, and modern deployment cycles",
    ],
    id: [
      "Merancang dan mengembangkan antarmuka front-end responsif terintegrasi API",
      "Membangun dan memelihara layanan back-end beserta REST API pendukung fitur",
      "Berpartisipasi dalam review kode produksi, pengujian sistem, dan siklus rilis modern",
    ],
  },
  "CCI UNITEL Universitas Telkom - Kepala Divisi": {
    en: [
      "Led the Web Development Division, coordinating members, projects, and learning agendas",
      "Drove cross-division collaboration to ensure system integration and code quality standards",
      "Mentored peers through hands-on technical workshops and structured web roadmaps",
    ],
    id: [
      "Memimpin divisi Web Development, mengoordinasikan anggota, proyek, dan program belajar web",
      "Mendorong kolaborasi lintas divisi untuk menjaga standar kualitas dan integrasi sistem",
      "Mementori anggota divisi melalui workshop teknis intensif dan kurikulum terarah",
    ],
  },
  "CCI UNITEL Universitas Telkom": {
    en: [
      "Mastered React, Next.js, and modern component-driven architectures",
      "Engineered complex client-side state management and responsive interfaces",
      "Collaborated cross-functionally with UI/UX designers and back-end engineers",
    ],
    id: [
      "Mengembangkan antarmuka interaktif responsif menggunakan HTML, CSS, JavaScript, dan React",
      "Berkolaborasi lintas fungsi dengan UI/UX designer dan back-end developer",
      "Menerapkan responsive design dan state management modern pada aplikasi web",
    ],
  },
  "Central Computer Improvement Telkom University": {
    en: [
      "Mastered React, Next.js, and modern component-driven architectures",
      "Engineered complex client-side state management and responsive interfaces",
      "Collaborated cross-functionally with UI/UX designers and back-end engineers",
    ],
    id: [
      "Mengembangkan antarmuka interaktif responsif menggunakan HTML, CSS, JavaScript, dan React",
      "Berkolaborasi lintas fungsi dengan UI/UX designer dan back-end developer",
      "Menerapkan responsive design dan state management modern pada aplikasi web",
    ],
  },
  "CPS Laboratory Universitas Telkom": {
    en: [
      "Full-stack web application development bridging frontend UI with server databases",
      "Engineered RESTful APIs with Node.js & Express.js connected to MySQL",
      "Practiced end-to-end fullstack workflow from database modeling to UI integration",
    ],
    id: [
      "Eksplorasi full-stack web: menjembatani front-end interaktif dengan database server",
      "Membangun arsitektur server-side & REST API fungsional dengan Node.js, Express, dan MySQL",
      "Mempraktikkan alur kerja full-stack mulai dari perancangan database hingga antarmuka",
    ],
  },
  "Cyber Physical System Laboratory": {
    en: [
      "Full-stack web application development bridging frontend UI with server databases",
      "Engineered RESTful APIs with Node.js & Express.js connected to MySQL",
      "Practiced end-to-end fullstack workflow from database modeling to UI integration",
    ],
    id: [
      "Eksplorasi full-stack web: menjembatani front-end interaktif dengan database server",
      "Membangun arsitektur server-side & REST API fungsional dengan Node.js, Express, dan MySQL",
      "Mempraktikkan alur kerja full-stack mulai dari perancangan database hingga antarmuka",
    ],
  },
  "GDGoC Universitas Telkom": {
    en: [
      "Deepened foundational modern web standards & responsive layouts",
      "Collaborated in developer group study sessions, workshops, and project showcases",
      "Explored cutting-edge frontend engineering practices with campus peers",
    ],
    id: [
      "Memperdalam fondasi pengembangan web modern dan standar antarmuka responsif",
      "Berpartisipasi aktif dalam sesi belajar kelompok, diskusi teknis, dan proyek kolaboratif",
      "Mengeksplorasi praktik rekayasa front-end terkini bersama komunitas kampus",
    ],
  },
  "GDGoC Telkom University Bandung": {
    en: [
      "Deepened foundational modern web standards & responsive layouts",
      "Collaborated in developer group study sessions, workshops, and project showcases",
      "Explored cutting-edge frontend engineering practices with campus peers",
    ],
    id: [
      "Memperdalam fondasi pengembangan web modern dan standar antarmuka responsif",
      "Berpartisipasi aktif dalam sesi belajar kelompok, diskusi teknis, dan proyek kolaboratif",
      "Mengeksplorasi praktik rekayasa front-end terkini bersama komunitas kampus",
    ],
  },
};

interface FloatingParticle {
  id: number;
  cardIdx: number;
  type: "heart" | "star" | "zap" | "sparkle";
  color: string;
  x: number;
}

export default function ExperienceTimelineSection({
  initialExperiences,
}: ExperienceTimelineProps) {
  const { language, t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  // Filter State
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  // Expanded Dev Log per card
  const [expandedLogs, setExpandedLogs] = useState<Record<string, boolean>>({});

  // Kudos / Reaction Counter per card
  const [kudosCount, setKudosCount] = useState<Record<string, number>>({
    "0": 24,
    "1": 19,
    "2": 31,
  });

  // Card shake tracking on kudos
  const [shakingCard, setShakingCard] = useState<number | null>(null);

  // Floating vector particles on kudos click
  const [floatingParticles, setFloatingParticles] = useState<FloatingParticle[]>([]);

  // Count calculation
  const workCount = useMemo(
    () =>
      initialExperiences.filter(
        (e) =>
          e.company.toLowerCase().includes("reacteev") ||
          (e.type && e.type.toLowerCase() === "work")
      ).length,
    [initialExperiences]
  );

  const campusCount = useMemo(
    () =>
      initialExperiences.filter(
        (e) =>
          !e.company.toLowerCase().includes("reacteev") &&
          (!e.type || e.type.toLowerCase() !== "work")
      ).length,
    [initialExperiences]
  );

  // Filter logic (Bagi dua: Work & Intern vs Kegiatan Kampus/Organisasi/Study Group)
  const filteredExperiences = useMemo(() => {
    if (activeFilter === "ALL") return initialExperiences;
    if (activeFilter === "WORK") {
      return initialExperiences.filter(
        (e) =>
          e.company.toLowerCase().includes("reacteev") ||
          (e.type && e.type.toLowerCase() === "work")
      );
    }
    if (activeFilter === "CAMPUS") {
      return initialExperiences.filter(
        (e) =>
          !e.company.toLowerCase().includes("reacteev") &&
          (!e.type || e.type.toLowerCase() !== "work")
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

    const types: FloatingParticle["type"][] = ["heart", "star", "zap", "sparkle"];
    const colors = ["#E11D5A", "#EDB22E", "#00C2FF", "#10B981"];

    const newParticles: FloatingParticle[] = Array.from({ length: 4 }).map((_, i) => ({
      id: Date.now() + Math.random() + i,
      cardIdx,
      type: types[i % types.length],
      color: colors[i % colors.length],
      x: (Math.random() - 0.5) * 50,
    }));

    setFloatingParticles((prev) => [...prev.slice(-12), ...newParticles]);

    setTimeout(() => {
      setFloatingParticles((prev) =>
        prev.filter((p) => !newParticles.some((np) => np.id === p.id))
      );
    }, 950);
  };

  const totalKudos = Object.values(kudosCount).reduce((a, b) => a + b, 0);

  // Filter tabs: Disederhanakan menjadi 2 kategori utama (Work & Intern vs Kegiatan Kampus) + Semua
  const filterTabs = [
    {
      key: "ALL",
      labelEn: `ALL JOURNEY (${initialExperiences.length})`,
      labelId: `SEMUA PERJALANAN (${initialExperiences.length})`,
    },
    {
      key: "WORK",
      labelEn: `WORK & INTERN (${workCount})`,
      labelId: `MAGANG & KERJA (${workCount})`,
    },
    {
      key: "CAMPUS",
      labelEn: `CAMPUS ACTIVITIES (${campusCount})`,
      labelId: `KEGIATAN KAMPUS & ORGANISASI (${campusCount})`,
    },
  ];

  // Icons for specific companies
  const getCompanyIcon = (company: string, role?: string) => {
    const c = company.toLowerCase();
    const r = (role || "").toLowerCase();
    if (c.includes("reacteev")) return Terminal;
    if (r.includes("kepala") || r.includes("lead") || r.includes("head")) return Sparkles;
    if (c.includes("central computer") || c.includes("cci")) return Code2;
    if (c.includes("laboratory") || c.includes("cps")) return Server;
    return Globe;
  };

  // Dynamic Theme Colors & Labels for each experience item
  const getExperienceTheme = (exp: ExperienceItem, index: number) => {
    const c = exp.company.toLowerCase();
    const r = exp.role.toLowerCase();

    if (c.includes("reacteev") || (exp.type && exp.type.toLowerCase() === "work")) {
      return {
        badgeBg: "bg-[#00C2FF]",
        badgeText: "text-black",
        label: `WORK // FULL-STACK INTERNSHIP`,
        status: t("ACTIVE // ONGOING ✦", "AKTIF // ONGOING ✦"),
        statusBg: "bg-[#10B981]/15 text-[#065F46] border-[#10B981]",
      };
    }
    if (r.includes("kepala") || r.includes("head") || r.includes("lead")) {
      return {
        badgeBg: "bg-[#FFE600]",
        badgeText: "text-black",
        label: `CAMPUS // ORGANISASI (LEADERSHIP)`,
        status: t("ACTIVE // ONGOING ✦", "AKTIF // ONGOING ✦"),
        statusBg: "bg-[#10B981]/15 text-[#065F46] border-[#10B981]",
      };
    }
    if (c.includes("central computer") || c.includes("cci")) {
      return {
        badgeBg: "bg-[#38C6F4]",
        badgeText: "text-black",
        label: `CAMPUS // STUDY GROUP (FRONT-END)`,
        status: t("COMPLETED ✓", "SELESAI // MILESTONE ✓"),
        statusBg: "bg-neutral-100 text-neutral-800 border-neutral-600",
      };
    }
    if (c.includes("laboratory") || c.includes("cps")) {
      return {
        badgeBg: "bg-[#EDB22E]",
        badgeText: "text-black",
        label: `CAMPUS // STUDY GROUP (LAB CPS)`,
        status: t("COMPLETED ✓", "SELESAI // MILESTONE ✓"),
        statusBg: "bg-neutral-100 text-neutral-800 border-neutral-600",
      };
    }
    return {
      badgeBg: "bg-[#10B981]",
      badgeText: "text-white",
      label: `CAMPUS // STUDY GROUP (GDGoC)`,
      status: t("COMPLETED ✓", "SELESAI // MILESTONE ✓"),
      statusBg: "bg-neutral-100 text-neutral-800 border-neutral-600",
    };
  };

  return (
    <section
      ref={timelineRef}
      className="relative py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 md:px-8"
    >
      {/* 1. Header Bar with Clean & Cute Styling */}
      <div className="flex flex-col items-center text-center pb-8 border-b-2 border-black mb-12 max-w-2xl mx-auto">
        {/* Cute Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black font-mono text-xs font-bold shadow-[2px_2px_0px_#000] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#EDB22E]" />
          <span>JOURNEY ROADMAP // TELKOM UNIVERSITY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight flex flex-wrap items-center justify-center gap-3">
          <span>{t("Chapters & Milestones", "Babak & Tonggak Perjalanan")}</span>
          <span className="font-mono text-xs px-2.5 py-1 bg-[#EDB22E] border-2 border-black shadow-[2px_2px_0px_#000] rotate-2">
            VERIFIED ✦
          </span>
        </h2>

        <p
          style={{ fontFamily: "var(--font-caveat), cursive" }}
          className="text-xl sm:text-2xl text-neutral-700 font-medium mt-1.5"
        >
          {t(
            "every step built with curiosity, late-night experiments, and care",
            "setiap langkah dibangun dengan rasa ingin tahu & dedikasi ngoding"
          )}
        </p>

        {/* Global Kudos Counter Chip */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF275] border-2 border-black font-mono text-xs font-black shadow-[2px_2px_0px_#000]"
        >
          <Heart className="w-3.5 h-3.5 text-[#E11D5A] fill-[#E11D5A]" />
          <span>{t(`TOTAL KUDOS SENT: ${totalKudos}`, `TOTAL APRESIASI: ${totalKudos}`)}</span>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs select-none mt-6">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <motion.button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveFilter(tab.key);
                  playBubblePop(1.1, true);
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
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

      {/* 2. Unified Metro-Rail Roadmap Layout */}
      <div className="relative">
        {/* Timeline Items List */}
        <div className="space-y-10 sm:space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, index) => {
              const logKey =
                exp.role.toLowerCase().includes("kepala") || exp.role.toLowerCase().includes("head")
                  ? "CCI UNITEL Universitas Telkom - Kepala Divisi"
                  : exp.company;

              const secretLog =
                SECRET_DEV_LOGS[logKey] ||
                SECRET_DEV_LOGS[exp.company] || {
                  en: "Behind The Scenes: Continuously exploring cutting-edge web architecture, learning alongside peers, and pushing code quality forward.",
                  id: "Catatan Dapur: Terus mengulik arsitektur web modern, belajar bareng rekan sejawat, dan meningkatkan kualitas kode.",
                  mood: "Leveling Up",
                  techTrophy: exp.technologies?.[0] || "Engineering",
                };

              const milestones =
                MILESTONE_HIGHLIGHTS[logKey] ||
                MILESTONE_HIGHLIGHTS[exp.company] || {
                  en: [
                    "Active participation in core study group modules",
                    "Hands-on web engineering and architecture practice",
                    "Collaborative code reviews and group projects",
                  ],
                  id: [
                    "Partisipasi aktif dalam modul kurikulum studi kelompok",
                    "Praktik langsung rekayasa web dan arsitektur perangkat lunak",
                    "Review kode kolaboratif dan proyek kelompok terapan",
                  ],
                };

              const isLogOpen = !!expandedLogs[exp.company || String(index)];
              const kudos = kudosCount[String(index)] || 15;
              const isShaking = shakingCard === index;
              const CompanyIcon = getCompanyIcon(exp.company, exp.role);

              // Dynamic Theme based on role/company
              const theme = getExperienceTheme(exp, index);

              return (
                <motion.div
                  key={exp.id || `${exp.company}-${index}`}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                  className="relative flex items-stretch gap-4 sm:gap-7"
                >
                  {/* Station Node Column with Solid Full Cyan Line */}
                  <div className="relative z-20 shrink-0 flex flex-col items-center">
                    {/* Station Node Box */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl border-2 border-black ${theme.badgeBg} ${theme.badgeText} shadow-[3px_3px_0px_#000] flex flex-col items-center justify-center cursor-pointer select-none shrink-0 z-10`}
                    >
                      <CompanyIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                      <span className="font-mono text-[9px] font-black leading-none mt-0.5">
                        0{index + 1}
                      </span>
                    </motion.div>

                    {/* Full Solid Cyan Connector Line - NEVER above station 01, runs ALL THE WAY DOWN */}
                    {index < filteredExperiences.length - 1 ? (
                      <div className="w-1.5 flex-1 bg-[#00C2FF] border-x border-black shadow-[0_0_8px_rgba(0,194,255,0.8)] mt-2 -mb-10 sm:-mb-12 relative overflow-hidden">
                        {/* Shimmer pulse travelling through the solid blue line */}
                        <motion.div
                          animate={{ y: ["-100%", "250%"] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2.2,
                            ease: "easeInOut",
                            delay: index * 0.4,
                          }}
                          className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-white/80 to-transparent"
                        />
                      </div>
                    ) : (
                      /* Terminus extension below the last station all the way to the bottom */
                      <div className="w-1.5 h-16 sm:h-20 bg-gradient-to-b from-[#00C2FF] via-[#00C2FF] to-transparent border-x border-black shadow-[0_0_8px_rgba(0,194,255,0.6)] mt-2 relative flex flex-col items-center justify-end">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00C2FF] border border-black shadow-xs -mb-1" />
                      </div>
                    )}
                  </div>

                  {/* Clean Neo-Brutalist Experience Card */}
                  <div className="flex-1 min-w-0">
                    <motion.div
                      animate={isShaking ? { x: [-3, 3, -3, 3, 0] } : {}}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -4 }}
                      className="group relative bg-white border-2 border-black p-5 sm:p-7 shadow-[5px_5px_0px_#000] hover:shadow-[8px_8px_0px_#000] transition-shadow duration-200"
                    >
                      {/* Top Header Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-black">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`px-2 py-0.5 border border-black font-mono text-[10px] font-black uppercase ${theme.badgeBg} ${theme.badgeText} shadow-[1.5px_1.5px_0px_#000]`}
                          >
                            {theme.label}
                          </span>
                          <span className="font-mono text-xs font-bold text-neutral-600 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                            {exp.period}
                          </span>
                        </div>

                        {/* Status Stamp Badge */}
                        <span
                          className={`px-2 py-0.5 border font-mono text-[10px] font-black uppercase shadow-xs ${theme.statusBg}`}
                        >
                          {theme.status}
                        </span>
                      </div>

                      {/* Main Role & Organization */}
                      <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight leading-snug">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-xs sm:text-sm font-bold text-neutral-800 mt-1 mb-3 flex flex-wrap items-center gap-2">
                        <span className="font-bold">{exp.company}</span>
                        <span className="text-neutral-400">•</span>
                        <span className="text-neutral-600 font-semibold flex items-center gap-1 text-xs">
                          <MapPin className="w-3 h-3 text-[#E11D5A]" />
                          {exp.location.split(",")[0]}, ID
                        </span>
                      </p>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Mini-Quests: Key Highlights & Takeaways */}
                      <div className="bg-[#F8FAFC] border border-neutral-300 p-3 sm:p-4 mb-5">
                        <span className="font-mono text-[10px] font-black text-neutral-700 uppercase tracking-wider block mb-2">
                          {t("KEY MILESTONES & LEARNING QUESTS:", "CAPAIAN & FOKUS PEMBELAJARAN:")}
                        </span>
                        <ul className="space-y-1.5 font-sans text-xs sm:text-[13px] text-neutral-800">
                          {(language === "ID" ? milestones.id : milestones.en).map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                              <span className="leading-snug">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Chips */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200 mb-5">
                          {exp.technologies.map((tech, tIdx) => (
                            <motion.span
                              key={`${tech}-${tIdx}`}
                              whileHover={{ scale: 1.08, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-2.5 py-1 bg-neutral-100 hover:bg-[#FFE600] border border-black font-mono text-[11px] font-bold text-neutral-900 shadow-[1.5px_1.5px_0px_#000] cursor-pointer transition-colors"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      )}

                      {/* Interactive Footer Row: Dev Note + Kudos */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-2 border-black/10">
                        {/* 1. Behind The Scenes (Catatan Dapur) Button */}
                        <motion.button
                          type="button"
                          onClick={() => toggleLog(exp.company || String(index))}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.96 }}
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
                            <ChevronUp className="w-3.5 h-3.5 ml-0.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
                          )}
                        </motion.button>

                        {/* 2. Kudos Heart Button with Floating Particles */}
                        <div className="relative">
                          <motion.button
                            type="button"
                            onClick={() => handleKudos(index)}
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFF275] hover:bg-[#FFE600] border-2 border-black font-mono text-xs font-black text-neutral-900 shadow-[2px_2px_0px_#000] cursor-pointer select-none"
                            title={t("Send Kudos to this milestone!", "Beri apresiasi untuk babak ini!")}
                          >
                            <Heart className="w-3.5 h-3.5 text-[#E11D5A] fill-[#E11D5A]" />
                            <span>Kudos</span>
                            <span className="px-1.5 py-0.2 bg-white border border-black rounded-xs text-[10px]">
                              {kudos}
                            </span>
                          </motion.button>

                          {/* Floating Vector Particles on Click (Clean SVGs) */}
                          <AnimatePresence>
                            {floatingParticles
                              .filter((p) => p.cardIdx === index)
                              .map((p) => (
                                <motion.div
                                  key={p.id}
                                  initial={{ opacity: 1, y: 0, x: p.x, scale: 0.6 }}
                                  animate={{ opacity: 0, y: -60, x: p.x * 1.4, scale: 1.4 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.85, ease: "easeOut" }}
                                  style={{ color: p.color }}
                                  className="absolute top-0 right-2 pointer-events-none z-40 select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
                                >
                                  {p.type === "heart" && (
                                    <Heart className="w-5 h-5 fill-current" />
                                  )}
                                  {p.type === "star" && (
                                    <Star className="w-5 h-5 fill-current" />
                                  )}
                                  {p.type === "zap" && (
                                    <Zap className="w-5 h-5 fill-current" />
                                  )}
                                  {p.type === "sparkle" && (
                                    <Sparkles className="w-5 h-5" />
                                  )}
                                </motion.div>
                              ))}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Behind The Scenes Foldout Drawer */}
                      <AnimatePresence>
                        {isLogOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="relative bg-[#FFF275] border-2 border-black p-4 sm:p-5 shadow-[4px_4px_0px_#000] rotate-[-0.6deg]">
                              {/* Red Pushpin at Top */}
                              <div className="absolute -top-2.5 left-6 w-4.5 h-4.5 rounded-full bg-[#E11D5A] border-2 border-black flex items-center justify-center shadow-xs">
                                <div className="w-1 h-1 rounded-full bg-white" />
                              </div>

                              <div className="flex items-center justify-between border-b border-black/20 pb-2 mb-2 font-mono text-[10px] text-neutral-800">
                                <span className="font-bold flex items-center gap-1.5">
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
                                  {t("keep building! ✦", "tetap berproses! ✦")}
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
