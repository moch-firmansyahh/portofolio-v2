"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Smartphone, Database } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectStatsBanner() {
  const { t } = useLanguage();

  const specs = [
    {
      id: "01",
      icon: Zap,
      title: t("High Performance", "Performa Tinggi"),
      subtitle: "98% Lighthouse Score",
      description: t(
        "Built with Next.js 16 App Router, image optimization, and fluid hardware-accelerated animations.",
        "Dibangun dengan arsitektur modern Next.js 16, optimasi aset, dan animasi berakselerasi GPU."
      ),
      tag: "CORE // SPEED",
      color: "#00C2FF",
    },
    {
      id: "02",
      icon: ShieldCheck,
      title: t("Security Focused", "Fokus Keamanan"),
      subtitle: "Google Certified Security",
      description: t(
        "Strict input validation, parameterized queries, and defensive web security implementations.",
        "Validasi data ketat di server, parameterized database queries, dan proteksi dari ancaman web."
      ),
      tag: "SEC // OWASP",
      color: "#EDB22E",
    },
    {
      id: "03",
      icon: Smartphone,
      title: t("Responsive & PWA", "Responsif & PWA"),
      subtitle: "Mobile-First Architecture",
      description: t(
        "Tested across mobile, tablet, and ultra-wide displays with offline PWA standalone capabilities.",
        "Teruji di berbagai resolusi layar dengan dukungan Progressive Web App untuk pengalaman aplikasi native."
      ),
      tag: "UX // SYSTEM",
      color: "#E11D5A",
    },
    {
      id: "04",
      icon: Database,
      title: t("Edge Persistence", "Database Edge Cepat"),
      subtitle: "Turso LibSQL Backend",
      description: t(
        "Zero-pause serverless database with ultra-low latency edge replication across Southeast Asia.",
        "Database serverless yang selalu aktif tanpa sistem sleep/pause dengan latensi minimal regional."
      ),
      tag: "DATA // TURSO",
      color: "#10B981",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-20">
      <div className="relative p-6 sm:p-8 bg-neutral-900 text-white border-2 border-black shadow-[6px_6px_0px_#000]">
        {/* Corner handles */}
        <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-black" />
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-black" />
        <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-black" />
        <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-black" />

        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-neutral-800 gap-4">
          <div>
            <div className="font-mono text-xs font-bold text-[#00C2FF] uppercase tracking-widest mb-1">
              ENGINEERING STANDARDS
            </div>
            <h3 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              {t("Technical Blueprint & Quality Metrics", "Spesifikasi Teknis & Kualitas Sistem")}
            </h3>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs px-3 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>STANDARDS: STRICT</span>
          </div>
        </div>

        {/* 4 Columns Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative p-5 bg-neutral-800/80 border border-neutral-700 flex flex-col justify-between transition-colors hover:border-neutral-500"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 border border-black flex items-center justify-center font-bold text-black"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[11px] font-bold text-neutral-400">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="font-mono text-base font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <div className="font-mono text-xs font-semibold text-[#00C2FF] mb-3">
                    {item.subtitle}
                  </div>
                  <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-700/60 font-mono text-[10px] text-neutral-500 flex justify-between">
                  <span>METRIC // {item.id}</span>
                  <span className="text-[#10B981]">VERIFIED ✓</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
