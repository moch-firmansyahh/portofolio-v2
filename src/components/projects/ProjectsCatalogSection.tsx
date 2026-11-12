"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, ArrowUpRight, Filter, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/types/project";
import { JetBrains_Mono, Inter_Tight } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-catalog-mono",
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-catalog-sans",
  display: "swap",
});

const THEMES = [
  { bg: "#38C6F4", ink: "#171717", accent: "#000000" }, // Cyan
  { bg: "#171717", ink: "#FFFFFF", accent: "#00C2FF" }, // Deep Charcoal
  { bg: "#EDB22E", ink: "#171717", accent: "#000000" }, // Hazard Yellow
  { bg: "#E11D5A", ink: "#FFFFFF", accent: "#EDB22E" }, // Magenta
] as const;

const PILL_CLIP = "polygon(0 0, 2.4em 0, 3em 0.9em, 100% 0.9em, 100% 100%, 0 100%)";
const FALLBACK_IMAGE = "/projects/manajemen-kontrakan.png";

interface ProjectsCatalogSectionProps {
  initialProjects: Project[];
}

export default function ProjectsCatalogSection({ initialProjects }: ProjectsCatalogSectionProps) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  // Extract distinct categories
  const categories = useMemo(() => {
    const set = new Set<string>(["ALL"]);
    initialProjects.forEach((p) => {
      if (p.category) set.add(p.category.toUpperCase());
    });
    set.add("FULL-STACK");
    set.add("WEB APP");
    return Array.from(set);
  }, [initialProjects]);

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((p) => {
      const matchCategory =
        activeCategory === "ALL" ||
        (p.category && p.category.toUpperCase() === activeCategory) ||
        (activeCategory === "FULL-STACK" &&
          (p.metrics?.toLowerCase().includes("full-stack") ||
            p.tags?.some((t) => t.toLowerCase().includes("prisma") || t.toLowerCase().includes("express") || t.toLowerCase().includes("postgresql")))) ||
        (activeCategory === "WEB APP" &&
          (p.category?.toLowerCase().includes("web") || p.tags?.some((t) => t.toLowerCase().includes("next"))));

      const term = searchQuery.toLowerCase().trim();
      if (!term) return matchCategory;

      const matchSearch =
        p.title.toLowerCase().includes(term) ||
        (p.subtitle && p.subtitle.toLowerCase().includes(term)) ||
        (p.description && p.description.toLowerCase().includes(term)) ||
        p.tags?.some((tag) => tag.toLowerCase().includes(term));

      return matchCategory && matchSearch;
    });
  }, [initialProjects, activeCategory, searchQuery]);

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className={`relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-24 ${mono.variable} ${sans.variable}`}>
      {/* ── 1. Interactive Control Toolbar (Filter & Search) ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-12 p-3 sm:p-4 bg-white border-2 border-black shadow-[4px_4px_0px_#000]"
      >
        {/* Corner anchor handles */}
        <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-black" />
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-black" />
        <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-black" />
        <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-black" />

        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs with Framer Motion layoutId & spring */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <span className="hidden sm:flex items-center gap-1 text-xs font-mono font-bold text-neutral-500 uppercase mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>{t("FILTER:", "KATEGORI:")}</span>
            </span>

            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer select-none border-2 ${
                    isActive
                      ? "border-black text-black"
                      : "border-transparent text-neutral-600 hover:text-black hover:border-neutral-300"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="catalogActiveCategory"
                      className="absolute inset-0 bg-[#00C2FF] -z-10 shadow-[2px_2px_0px_#000]"
                      transition={{ type: "spring", stiffness: 420, damping: 30 }}
                    />
                  )}
                  <span>{cat}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative shrink-0 w-full md:w-72">
            <div className="relative flex items-center">
              <Search className="absolute left-3 w-4 h-4 text-neutral-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("Search by keyword / stack...", "Cari nama proyek / teknologi...")}
                className="w-full pl-9 pr-8 py-2 bg-neutral-50 border-2 border-black font-mono text-xs focus:bg-white focus:outline-hidden focus:shadow-[2px_2px_0px_#000] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 text-neutral-400 hover:text-black font-mono text-xs font-bold"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search Results Summary */}
        <div className="mt-3 pt-2.5 border-t border-neutral-200 flex items-center justify-between font-mono text-[11px] text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neutral-800" />
            <span>
              {t("DISPLAYING:", "MENAMPILKAN:")}{" "}
              <strong className="text-black">{filteredProjects.length}</strong>{" "}
              {t("OF", "DARI")} {initialProjects.length} {t("PROJECTS", "PROYEK")}
            </span>
          </div>
          {searchQuery && (
            <span className="text-[#E11D5A] font-bold">
              {t(`QUERY: "${searchQuery}"`, `KATA KUNCI: "${searchQuery}"`)}
            </span>
          )}
        </div>
      </motion.div>

      {/* ── 2. Projects Grid ── */}
      <AnimatePresence mode="popLayout">
        {filteredProjects.length === 0 ? (
          <motion.div
            key="empty-state"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-12 text-center bg-white border-2 border-black shadow-[6px_6px_0px_#000] my-8"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-[#EDB22E] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000]">
              <FolderGit2 className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-mono text-lg font-bold uppercase text-neutral-900 mb-2">
              {t("No Projects Found", "Proyek Tidak Ditemukan")}
            </h3>
            <p className="font-mono text-xs text-neutral-600 max-w-md mx-auto mb-6">
              {t(
                "No projects matched your search criteria. Try using different keywords or resetting filters.",
                "Tidak ada proyek yang sesuai dengan kata kunci pencarian Anda. Coba kata kunci lain atau reset filter."
              )}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("ALL");
              }}
              className="px-5 py-2.5 bg-black text-white hover:bg-[#00C2FF] hover:text-black font-mono text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#000] transition-colors"
            >
              {t("Reset Filters", "Reset Filter")}
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10"
          >
            {filteredProjects.map((project, index) => {
              const theme = THEMES[index % THEMES.length];
              const projectNumber = String(index + 1).padStart(2, "0");
              const displayImage = imgErrors[project.id]
                ? FALLBACK_IMAGE
                : project.image || FALLBACK_IMAGE;

              return (
                <motion.article
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                  whileHover="hover"
                  initial="initial"
                  className="relative flex flex-col border-2 border-black shadow-[6px_6px_0px_#000] group"
                  style={{
                    backgroundColor: theme.bg,
                    color: theme.ink,
                  }}
                >
                  {/* Dynamic Corner Handles Expanding on Hover */}
                  <motion.span
                    variants={{
                      initial: { x: 0, y: 0 },
                      hover: { x: -3, y: -3 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-black z-20 pointer-events-none"
                  />
                  <motion.span
                    variants={{
                      initial: { x: 0, y: 0 },
                      hover: { x: 3, y: -3 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-black z-20 pointer-events-none"
                  />
                  <motion.span
                    variants={{
                      initial: { x: 0, y: 0 },
                      hover: { x: -3, y: 3 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-black z-20 pointer-events-none"
                  />
                  <motion.span
                    variants={{
                      initial: { x: 0, y: 0 },
                      hover: { x: 3, y: 3 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-black z-20 pointer-events-none"
                  />

                  {/* Top Bar with Project Number & Framer Animated Visualizer */}
                  <div className="flex items-center justify-between border-b-2 border-black px-4 py-2.5 bg-black/5">
                    <div className="flex items-center gap-2">
                      {/* Smooth Waveform Visualizer */}
                      <span className="flex items-end gap-1 h-3.5" aria-hidden="true">
                        <motion.span
                          animate={{ height: ["4px", "14px", "6px", "12px", "4px"] }}
                          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                          className="w-1 bg-current"
                        />
                        <motion.span
                          animate={{ height: ["12px", "4px", "14px", "8px", "12px"] }}
                          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut", delay: 0.2 }}
                          className="w-1 bg-current"
                        />
                        <motion.span
                          animate={{ height: ["8px", "14px", "4px", "10px", "8px"] }}
                          transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut", delay: 0.4 }}
                          className="w-1 bg-current"
                        />
                      </span>
                      <span className="font-mono text-xs font-black tracking-widest uppercase">
                        PROJECT // {projectNumber}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold">
                      <span className="px-2 py-0.5 bg-black text-white rounded-xs">
                        {project.year || "2026"}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 bg-[#EDB22E] text-black border border-black font-extrabold uppercase">
                          ★ FEATURED
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Image Preview with Frame */}
                  <div className="relative aspect-video w-full overflow-hidden border-b-2 border-black bg-neutral-900 group">
                    <Image
                      src={displayImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-106"
                      unoptimized={displayImage.startsWith("http")}
                      onError={() => handleImageError(project.id)}
                    />

                    {/* Image overlay badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/85 text-white border border-white/30 px-2 py-1 font-mono text-[10px] tracking-wider uppercase backdrop-blur-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span>[IMAGE] CASE-STUDY.JPG</span>
                    </div>

                    {/* Category pill on image */}
                    {project.category && (
                      <div className="absolute bottom-3 left-3">
                        <span
                          className="font-mono text-xs font-bold uppercase tracking-wider px-3 pb-1 pt-2 bg-black text-white border border-white/20 shadow-md inline-block"
                          style={{ clipPath: PILL_CLIP }}
                        >
                          {project.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-6">
                    <div>
                      <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight mb-2 leading-tight">
                        {project.title}
                      </h3>

                      {project.subtitle && (
                        <p className="font-mono text-xs font-medium opacity-85 mb-4 line-clamp-2 leading-relaxed">
                          {project.subtitle}
                        </p>
                      )}

                      <p className="text-sm leading-relaxed opacity-90 line-clamp-3 mb-5 font-sans">
                        {project.description}
                      </p>

                      {/* Tech stack tags with hover animation */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags?.map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{ y: -2, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="font-mono text-[11px] font-bold px-2 py-1 bg-black/10 border border-current rounded-xs uppercase tracking-wide cursor-default"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Actions and Links Footer */}
                    <div className="pt-4 border-t-2 border-black/20 flex flex-wrap items-center justify-between gap-3">
                      {/* Case Study Detailed Link with Spring */}
                      <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                        <Link
                          href={`/projects/${project.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-white hover:text-black border-2 border-black font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#000] transition-colors group/btn"
                        >
                          <span>{t("CASE STUDY", "STUDI KASUS")}</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Link>
                      </motion.div>

                      {/* External links: Live Demo & GitHub */}
                      <div className="flex items-center gap-2">
                        {project.demoUrl && project.demoUrl !== "#" && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.94 }}
                            aria-label={`Live Demo of ${project.title}`}
                            className="p-2 bg-white text-black hover:bg-neutral-100 border-2 border-black shadow-[2px_2px_0px_#000] transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}

                        {project.githubUrl && project.githubUrl !== "#" && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.94 }}
                            aria-label={`GitHub Repository for ${project.title}`}
                            className="p-2 bg-white text-black hover:bg-neutral-100 border-2 border-black shadow-[2px_2px_0px_#000] transition-colors"
                            title="GitHub Source"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
