"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ModularTitle } from "@/components/ui/ModularTypography";
import { Award, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function CertificatesHeroSection() {
  const { language, t } = useLanguage();

  return (
    <section className="relative pt-12 pb-8 sm:pt-16 sm:pb-12 border-b-2 border-black bg-white/70 overflow-hidden">
      {/* Decorative Blueprint Coordinate Marks */}
      <div className="absolute top-3 left-4 text-[10px] font-mono text-neutral-400 select-none hidden sm:block">
        [REF: CRT-SECTION-01 // COORD: 07°55′S 112°37′E]
      </div>
      <div className="absolute top-3 right-4 text-[10px] font-mono text-neutral-400 select-none hidden sm:block">
        [SCALE: 1:1 VECTOR SPEC // REV: 2026.04]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Blueprint Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[11px] font-black uppercase tracking-widest border border-black shadow-[2px_2px_0px_#00C2FF]">
            <Award className="w-3.5 h-3.5 text-[#00C2FF]" />
            {t("ACCREDITED CREDENTIALS", "SERTIFIKASI TERAKREDITASI")}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-neutral-100 text-neutral-700 text-[11px] font-mono font-bold border border-neutral-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            {t("7 VERIFIED HONORS", "7 SERTIFIKAT TERVERIFIKASI")}
          </span>
        </motion.div>

        {/* Big Modular Typography Display Title */}
        <div className="mb-6 overflow-x-auto scrollbar-none py-2">
          <ModularTitle text="CERTIFICATES" />
        </div>

        {/* Subtitle / Description */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="max-w-3xl"
        >
          <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
            {t(
              "A curated repository of national competition awards and professional industry credentials spanning Cloud Architecture, Generative AI, Cyber Security, and Modern Web Engineering.",
              "Koleksi penghargaan kompetisi hackathon nasional dan sertifikasi profesional industri di bidang Cloud Architecture, Generative AI, Keamanan Siber, dan Rekayasa Web Modern."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
