"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { JetBrains_Mono } from "next/font/google";
import { ModularTitle } from "@/components/ui/ModularTypography";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-hero-mono",
  display: "swap",
});

export default function CertificatesHeroSection() {
  const { t } = useLanguage();

  return (
    <section className={`relative pt-12 pb-14 sm:pt-16 sm:pb-20 overflow-hidden ${mono.variable}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center text-center">
        {/* 1. Handwritten Accent Tag with SVG sketch (matching Projects & Experience) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 sm:mb-5 flex flex-col items-center"
        >
          <span
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="text-2xl sm:text-3xl md:text-4xl text-neutral-800 font-semibold tracking-wide"
          >
            {t("verified credentials & honors!", "kredensial resmi & penghargaan!")}
          </span>
          <motion.svg
            viewBox="0 0 120 12"
            fill="none"
            className="mt-1 w-24 sm:w-32 text-neutral-800"
            aria-hidden="true"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <path
              d="M3 4 Q 30 1, 60 4 T 117 3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M10 9 Q 36 7, 70 9 T 110 8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>

        {/* 2. Modular Vector Typography: CERTIFICATES with spring hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 280, damping: 20 }}
          className="flex justify-center w-full my-3 sm:my-5 cursor-default select-none overflow-x-auto scrollbar-none py-2"
        >
          <ModularTitle text="CERTIFICATES" />
        </motion.div>

        {/* 3. Architectural Sticky Note with Spring Drag Physics */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.25}
          initial={{ opacity: 0, rotate: -3, y: 16 }}
          animate={{ opacity: 1, rotate: -1.5, y: 0 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          whileDrag={{ scale: 1.06, rotate: 2, cursor: "grabbing" }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="relative mt-8 sm:mt-12 max-w-lg bg-[#F6DCA0] border-2 border-black p-4 sm:p-5 text-left shadow-[5px_5px_0px_#000] cursor-grab select-none group"
        >
          {/* Pin accent on sticky note */}
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#E11D5A] border-2 border-black shadow-xs flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>

          {/* Interactive small caveat drag badge */}
          <span
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="absolute -top-5 right-2 text-xs text-neutral-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {t("pull me!", "tarik saya!")} ↗
          </span>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-wider">
              <Award className="w-3 h-3 text-[#00C2FF]" />
              DOC-ID: CRT-2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-neutral-700">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              {t("VERIFIED CREDENTIALS", "KREDENSIAL TERVERIFIKASI")}
            </span>
          </div>

          <p className="font-mono text-xs sm:text-sm font-semibold text-neutral-900 leading-relaxed">
            {t(
              "Curated industry accreditations & national awards in Generative AI, Cloud Architecture, Cyber Security, and Web Engineering.",
              "Koleksi akreditasi industri & penghargaan nasional di bidang Generative AI, Cloud Architecture, Keamanan Siber, dan Rekayasa Web."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
