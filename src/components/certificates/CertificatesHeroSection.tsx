"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ModularTitle } from "@/components/ui/ModularTypography";

export default function CertificatesHeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 overflow-hidden font-sans">
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
      </div>
    </section>
  );
}
