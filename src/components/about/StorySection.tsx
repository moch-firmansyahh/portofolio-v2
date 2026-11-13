"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedCursorBadge from "@/components/about/AnimatedCursorBadge";

/**
 * 2. SECTION: STORY (Engineering Philosophy & Principles from CV)
 * Harmonized with Moch. Firmansyah's Full-Stack, AI, and Security focus.
 */
const StorySection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function StorySection(props, ref) {
    const { t } = useLanguage();

    return (
      <section
        id="story"
        ref={ref}
        className="relative scroll-mt-24"
        {...props}
      >
        {/* Magenta / Rose Canvas Selection Box */}
        <div className="relative border-2 border-[#E11D5A] bg-white p-6 sm:p-10 md:p-14 shadow-sm">
          {/* 4 Corner Canvas Resize Handles */}
          <div className="w-2.5 h-2.5 bg-white border border-[#E11D5A] absolute -top-1.5 -left-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#E11D5A] absolute -top-1.5 -right-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#E11D5A] absolute -bottom-1.5 -left-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#E11D5A] absolute -bottom-1.5 -right-1.5 z-20" />

          {/* Selection Tag Badge at Top: WHAT DIVE INTO MY WORK */}
          <div className="absolute -top-3.5 left-4 bg-[#E11D5A] text-white font-mono text-[11px] font-black px-2.5 py-0.5 tracking-wider uppercase select-none shadow-xs">
            {t("WHAT DIVE INTO MY WORK", "PRINSIP & PENDEKATAN KERJA")}
          </div>

          {/* 4 Staggered Philosophy Cards aligned with CV */}
          <div className="flex flex-col gap-14 sm:gap-20 md:gap-24 pt-4 sm:pt-6">

            {/* ─── ROW 1: Card 1 (Cyan, Left) & "solve first, code later." ─── */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              {/* Card 1: Cyan Box (54% width) */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[54%] bg-[#A8E5FF] p-7 sm:p-9 md:p-10 text-neutral-900 shadow-xs"
              >
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight leading-[1.2] mb-4 text-neutral-900">
                  {t("Architecting for Real-World Impact", "Merancang untuk Dampak Nyata")}
                </h3>
                <p className="text-sm sm:text-base leading-[1.65] text-neutral-800 font-normal">
                  {t(
                    "From detecting stunting and malnutrition in toddlers with SimGizi (WHO anthropometry engine & Gemini AI) to building group travel planning with Voluntrip, I build web solutions where reliability truly matters. Software engineering begins with understanding the human problem first before writing a single line of code.",
                    "Dari mendeteksi stunting dan gizi buruk balita lewat SimGizi (engine antropometri WHO & Gemini AI) hingga perencanaan perjalanan kelompok via Voluntrip, saya membangun solusi web di mana keandalan sistem adalah prioritas mutlak. Rekayasa perangkat lunak dimulai dari memahami akar masalah manusia secara mendalam sebelum menulis satu baris kode."
                  )}
                </p>
              </motion.div>

              {/* Hand-drawn Annotation: Curved Arrow pointing to "solve first, code later." */}
              <div className="w-full md:w-[42%] flex items-center gap-3 pl-2 sm:pl-4 pt-2 md:pt-8 select-none">
                <svg viewBox="0 0 64 26" className="w-14 h-7 text-neutral-800 shrink-0 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 4 8 C 22 12, 42 19, 58 22" />
                  <path d="M 48 18 L 58 22 L 50 26" />
                </svg>
                <span
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                  className="text-2xl sm:text-3xl font-bold text-neutral-800 leading-tight select-none rotate-[-4deg]"
                >
                  solve first, code later.
                </span>
              </div>
            </div>

            {/* ─── ROW 2: "secure by design!" & Card 2 (Yellow, Right) with Moving FIRMAN Cursor ─── */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              {/* Hand-drawn Annotation (Left): "secure by design!" with Arrow pointing to Card 2 */}
              <div className="order-2 md:order-1 w-full md:w-[42%] flex items-center justify-start md:justify-end gap-3 pr-2 sm:pr-4 pb-2 md:pb-8 select-none">
                <span
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                  className="text-2xl sm:text-3xl font-bold text-neutral-800 leading-tight select-none rotate-[-3deg]"
                >
                  secure by design!
                </span>
                <svg viewBox="0 0 64 26" className="w-14 h-7 text-neutral-800 shrink-0 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 4 18 C 22 16, 42 10, 58 4" />
                  <path d="M 48 2 L 58 4 L 50 10" />
                </svg>
              </div>

              {/* Card 2: Warm Sand / Yellow Box (54% width) with Animated FIRMAN Cursor */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 md:order-2 w-full md:w-[54%] bg-[#FBE5A2] p-7 sm:p-9 md:p-10 text-neutral-900 shadow-xs relative"
              >
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight leading-[1.2] mb-4 text-neutral-900">
                  {t("Bridging Full-Stack & Secure Coding", "Menjembatani Full-Stack & Keamanan Sistem")}
                </h3>
                <p className="text-sm sm:text-base leading-[1.65] text-neutral-800 font-normal">
                  {t(
                    "A beautiful UI means nothing if the system breaks or exposes data. Armed with Google Network Security Specialization and AWS AI Practitioner credentials, I integrate defensive principles—from JWT & RBAC access control to SQL injection mitigation and password hashing—seamlessly alongside responsive Next.js and robust REST API services.",
                    "Antarmuka yang indah tidak berarti jika sistem rapuh atau data pengguna bocor. Berbekal spesialisasi Google Network Security dan sertifikasi AWS AI Practitioner, saya menerapkan prinsip coding defensif—mulai dari JWT & kontrol akses RBAC, pencegahan SQL injection, hingga hashing sandi—berdampingan dengan antarmuka Next.js yang responsif dan layanan REST API yang tangguh."
                  )}
                </p>

                {/* Animated "FIRMAN" Cursor Badge */}
                <AnimatedCursorBadge
                  text="FIRMAN"
                  bgColor="#E11D5A"
                  textColor="text-white"
                  className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6"
                  initialRotate={-11}
                />
              </motion.div>
            </div>

            {/* ─── ROW 3: Card 3 (Mint Green, Left) & "we, not me." ─── */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              {/* Card 3: Mint Green Box (54% width) */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[54%] bg-[#A9DFBF] p-7 sm:p-9 md:p-10 text-neutral-900 shadow-xs"
              >
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight leading-[1.2] mb-4 text-neutral-900">
                  {t("Cross-Functional Synergy & Leadership", "Kolaborasi Lintas Fungsi & Kepemimpinan")}
                </h3>
                <p className="text-sm sm:text-base leading-[1.65] text-neutral-800 font-normal">
                  {t(
                    "As Head of Web Development at CCI UNITEL Telkom University and Full Stack Developer Intern at Reacteev, I collaborate closely with UI/UX designers, backend engineers, and student members. Great software thrives when technical discipline, structured learning roadmaps, and empathetic teamwork align.",
                    "Sebagai Kepala Divisi Web Development di CCI UNITEL Telkom University dan Full Stack Developer Intern di Reacteev, saya terbiasa berkolaborasi erat dengan UI/UX designer, backend engineer, dan rekan tim. Perangkat lunak terbaik lahir dari perpaduan disiplin teknis, kurikulum terarah, dan kerja sama tim yang suportif."
                  )}
                </p>
              </motion.div>

              {/* Hand-drawn Annotation: Arrow pointing down-right to "we, not me." */}
              <div className="w-full md:w-[42%] flex items-center gap-3 pl-2 sm:pl-4 pt-2 md:pt-8 select-none">
                <svg viewBox="0 0 64 26" className="w-14 h-7 text-neutral-800 shrink-0 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 4 8 C 22 12, 42 19, 58 22" />
                  <path d="M 48 18 L 58 22 L 50 26" />
                </svg>
                <span
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                  className="text-2xl sm:text-3xl font-bold text-neutral-800 leading-tight select-none rotate-[-4deg]"
                >
                  we, not me.
                </span>
              </div>
            </div>

            {/* ─── ROW 4: "details build trust." & Card 4 (Soft Pink, Right) ─── */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              {/* Hand-drawn Annotation (Left): "details build trust." with Arrow pointing to Card 4 */}
              <div className="order-2 md:order-1 w-full md:w-[42%] flex items-center justify-start md:justify-end gap-3 pr-2 sm:pr-4 pb-2 md:pb-8 select-none">
                <span
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                  className="text-2xl sm:text-3xl font-bold text-neutral-800 leading-tight select-none rotate-[-2deg]"
                >
                  details build trust.
                </span>
                <svg viewBox="0 0 64 26" className="w-14 h-7 text-neutral-800 shrink-0 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 4 18 C 22 16, 42 10, 58 4" />
                  <path d="M 48 2 L 58 4 L 50 10" />
                </svg>
              </div>

              {/* Card 4: Soft Blush Pink Box (54% width) */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 md:order-2 w-full md:w-[54%] bg-[#FADBD8] p-7 sm:p-9 md:p-10 text-neutral-900 shadow-xs"
              >
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight leading-[1.2] mb-4 text-neutral-900">
                  {t("Precision Engineering & Attention to Detail", "Presisi Teknis & Perhatian pada Detail")}
                </h3>
                <p className="text-sm sm:text-base leading-[1.65] text-neutral-800 font-normal">
                  {t(
                    "High-grade software is defined by small, deliberate details: rule-based calculations matching WHO & Permenkes standards, fail-safe AI fallbacks with Gemini API, smooth 60fps transitions, and clear input validations. These subtle details eliminate frustration and build trust.",
                    "Perangkat lunak berkualitas tinggi ditentukan oleh detail yang presisi: perhitungan rule-based sesuai standar baku WHO & Permenkes, sistem fail-safe cadangan pada integrasi Gemini API, transisi 60fps yang mulus, serta validasi form yang informatif. Detail-detail ini yang mencegah kegagalan dan membangun kepercayaan pengguna."
                  )}
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    );
  }
);

export default StorySection;
