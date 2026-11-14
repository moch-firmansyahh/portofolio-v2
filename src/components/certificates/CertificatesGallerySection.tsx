"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  CERTIFICATES_DATA,
  CERTIFICATE_CATEGORIES,
  Certificate,
} from "@/data/certificatesData";
import {
  Trophy,
  Cloud,
  Sparkles,
  ShieldCheck,
  Code2,
  Database,
  Terminal,
  ExternalLink,
  Copy,
  Check,
  X,
  Award,
  Calendar,
  Building2,
  BadgeCheck,
} from "lucide-react";

function CertIcon({ type, className = "w-5 h-5 text-white" }: { type: Certificate["iconType"]; className?: string }) {
  switch (type) {
    case "trophy":
      return <Trophy className={className} />;
    case "cloud":
      return <Cloud className={className} />;
    case "sparkles":
      return <Sparkles className={className} />;
    case "shield":
      return <ShieldCheck className={className} />;
    case "code":
      return <Code2 className={className} />;
    case "database":
      return <Database className={className} />;
    case "terminal":
      return <Terminal className={className} />;
    default:
      return <Award className={className} />;
  }
}

export default function CertificatesGallerySection() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Filter logic
  const filteredCertificates = useMemo(() => {
    if (selectedCategory === "all") {
      return CERTIFICATES_DATA;
    }
    return CERTIFICATES_DATA.filter((cert) => cert.category === selectedCategory);
  }, [selectedCategory]);

  // Counts for tabs
  const getCategoryCount = (categoryKey: string) => {
    if (categoryKey === "all") return CERTIFICATES_DATA.length;
    return CERTIFICATES_DATA.filter((c) => c.category === categoryKey).length;
  };

  const handleCopyCredential = (idText: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(idText);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Category Filter Tabs (Neo-brutalist pill buttons) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none select-none">
          {CERTIFICATE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.key;
            const count = getCategoryCount(cat.key);
            const label = language === "ID" ? cat.labelId : cat.labelEn;

            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 text-xs sm:text-[13px] font-black uppercase tracking-wider border-2 border-black transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#00C2FF] text-black shadow-[3px_3px_0px_#000] -translate-y-0.5"
                    : "bg-white text-neutral-800 hover:bg-neutral-100 shadow-[2px_2px_0px_#000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000]"
                }`}
              >
                <span>{label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm border ${
                    isActive
                      ? "bg-black text-[#00C2FF] border-black"
                      : "bg-neutral-100 text-neutral-600 border-neutral-300"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2. Three-Column Card Grid (Matching Reference Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => {
              const title = cert.title;
              const dateStr = language === "ID" ? cert.issueDateId : cert.issueDateEn;

              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  onClick={() => {
                    setActiveCert(cert);
                    setCopiedId(false);
                  }}
                  className="group flex flex-col bg-white border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden"
                >
                  {/* Top Image Preview (16:10 ratio) */}
                  <div className="relative aspect-[16/10] bg-neutral-900 border-b-2 border-black overflow-hidden flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Corner Tag */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="px-2 py-0.5 bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold tracking-wider uppercase border border-neutral-700">
                        {language === "ID" ? cert.categoryLabelId : cert.categoryLabelEn}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Footer Bar (Matching Reference Screenshot) */}
                  <div className="p-4 sm:p-5 flex items-center gap-3.5 bg-white">
                    {/* Colored Square Icon Badge */}
                    <div
                      className={`w-11 h-11 rounded-lg ${cert.iconBgColor} flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-110`}
                    >
                      <CertIcon type={cert.iconType} className="w-5 h-5 text-white" />
                    </div>

                    {/* Title and Issuer / Date */}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-extrabold text-sm sm:text-base text-neutral-900 group-hover:text-blue-600 transition-colors truncate leading-snug">
                        {title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-medium mt-0.5 truncate">
                        {dateStr} • {cert.issuer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-16 bg-white border-2 border-black shadow-[4px_4px_0px_#000] p-8">
            <Award className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-lg font-black text-neutral-800">
              {t("No certificates found in this category", "Tidak ada sertifikat dalam kategori ini")}
            </h3>
            <button
              onClick={() => setSelectedCategory("all")}
              className="mt-4 px-4 py-2 bg-[#00C2FF] text-black font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
            >
              {t("Show All Certificates", "Tampilkan Semua Sertifikat")}
            </button>
          </div>
        )}
      </div>

      {/* 3. Certificate Detail Modal / Lightbox */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-3xl bg-white border-3 border-black shadow-[8px_8px_0px_#000] overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
            >
              {/* Modal Top Title Bar */}
              <div className="h-11 border-b-2 border-black bg-neutral-100 flex items-center justify-between px-4 shrink-0 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500 border border-black" />
                  <div className="w-3 h-3 rounded-full bg-amber-400 border border-black" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500 border border-black" />
                  <span className="ml-2 font-mono text-xs font-bold text-neutral-700">
                    [CREDENTIAL VIEWER: {activeCert.credentialId}]
                  </span>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="w-7 h-7 flex items-center justify-center border-2 border-black bg-white hover:bg-neutral-200 text-black cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
                {/* Full Aspect Certificate Visual */}
                <div className="relative aspect-[16/10] w-full bg-neutral-900 border-2 border-black overflow-hidden shadow-inner">
                  <Image
                    src={activeCert.image}
                    alt={activeCert.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Main Details Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-300">
                        <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                        {t("VERIFIED CREDENTIAL", "SERTIFIKAT TERVERIFIKASI")}
                      </span>
                      <span className="text-xs font-mono text-neutral-500">
                        {language === "ID" ? activeCert.categoryLabelId : activeCert.categoryLabelEn}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-neutral-900 leading-tight">
                      {activeCert.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-neutral-600 pt-1">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Building2 className="w-4 h-4 text-neutral-400" />
                        {activeCert.issuer}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-4 h-4 text-neutral-400" />
                        {language === "ID" ? activeCert.issueDateId : activeCert.issueDateEn}
                      </span>
                    </div>
                  </div>

                  {/* Copy Credential ID Box */}
                  <div className="p-3 bg-neutral-50 border-2 border-neutral-300 rounded-none shrink-0 text-left">
                    <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                      {t("CREDENTIAL ID", "ID KREDENSIAL")}
                    </span>
                    <div className="flex items-center gap-2">
                      <code className="text-xs font-mono font-bold text-neutral-800">
                        {activeCert.credentialId}
                      </code>
                      <button
                        onClick={() => handleCopyCredential(activeCert.credentialId)}
                        title="Copy ID"
                        className="p-1 hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer border border-neutral-300"
                      >
                        {copiedId ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="border-t border-neutral-200 pt-4">
                  <h4 className="text-xs font-black font-mono uppercase text-neutral-400 tracking-wider mb-2">
                    {t("OVERVIEW & SCOPE", "RINGKASAN & CAKUPAN")}
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                    {language === "ID" ? activeCert.descriptionId : activeCert.descriptionEn}
                  </p>
                </div>

                {/* Covered Skills */}
                <div className="border-t border-neutral-200 pt-4">
                  <h4 className="text-xs font-black font-mono uppercase text-neutral-400 tracking-wider mb-2.5">
                    {t("VALIDATED COMPETENCIES", "KOMPETENSI TERVALIDASI")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-neutral-100 text-neutral-800 text-xs font-mono font-semibold border border-neutral-300"
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="p-4 sm:p-5 border-t-2 border-black bg-neutral-50 flex items-center justify-between gap-3 shrink-0">
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-2 border-2 border-black bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-black uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_#000]"
                >
                  {t("Close", "Tutup")}
                </button>

                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border-2 border-black bg-[#00C2FF] hover:bg-[#00b0e8] text-black text-xs font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_#000] hover:shadow-[4px_4px_0px_#000] transition-all"
                >
                  <span>{t("Verify Credential", "Verifikasi Kredensial")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
