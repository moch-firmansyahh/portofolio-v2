"use client";

import { useState, useEffect, type CSSProperties } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { PROJECTS as DEFAULT_PROJECTS } from "@/data/portfolioData";
import type { Project } from "@/types/project";
import { getProjects } from "@/services/portfolio";
import { useLanguage } from "@/context/LanguageContext";

/* Font kartu: padanan terdekat dari font contoh (sans rapat + mono dengan nol bergaris) */
const cardSans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-card-sans",
  display: "swap",
});
const cardMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-card-mono",
  display: "swap",
});
const SANS = "font-[family-name:var(--font-card-sans)]";
const MONO = "font-[family-name:var(--font-card-mono)]";

const MAX_PROJECTS = 3;
const FALLBACK_IMAGE = "/projects/manajemen-kontrakan.png";

/**
 * bg  = warna kartu + tab
 * ink = warna teks, garis, pill, dan badge (kebalikan dari bg)
 */
const THEMES = [
  { bg: "#38C6F4", ink: "#171717" }, // cyan
  { bg: "#171717", ink: "#FFFFFF" }, // hitam
  { bg: "#EDB22E", ink: "#171717" }, // kuning
  { bg: "#E11D5A", ink: "#FFFFFF" }, // magenta (dipakai kalau MAX_PROJECTS = 4)
] as const;

/**
 * SKALA RESPONSIF
 * Semua ukuran di dalam kartu memakai satuan `em`, dan font-size dasarnya
 * mengikuti lebar layar (1.05vw, min 12px, max 32px). Jadi di laptop
 * ukurannya tetap seperti sebelumnya, di monitor besar otomatis ikut membesar
 * dengan proporsi yang sama. Mau kartu lebih besar/kecil: ubah angka 1.05vw.
 */
const BASE_FONT =
  "text-[13px] sm:text-sm lg:text-[length:clamp(11px,min(1.05vw,1.95vh),32px)]";

/* Bentuk pill ala folder (satuan em mengikuti font pill itu sendiri) */
const PILL_CLIP =
  "polygon(0 0, 2.4em 0, 3em 0.9em, 100% 0.9em, 100% 100%, 0 100%)";

/* Tab trapesium: tab pertama rata kiri, sisanya miring di dua sisi */
const TAB_CLIP_FIRST =
  "polygon(0 0, calc(100% - var(--cut)) 0, 100% 100%, 0 100%)";
const TAB_CLIP_REST =
  "polygon(var(--cut) 0, calc(100% - var(--cut)) 0, 100% 100%, 0 100%)";

export default function ProjectsSection() {
  const [projectsList, setProjectsList] = useState<Project[]>(
    DEFAULT_PROJECTS.slice(0, MAX_PROJECTS),
  );
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const { t } = useLanguage();

  useEffect(() => {
    let isMounted = true;

    async function loadDynamicProjects() {
      try {
        const liveProjects = await getProjects();
        if (isMounted && liveProjects && liveProjects.length > 0) {
          setProjectsList(liveProjects.slice(0, MAX_PROJECTS));
        }
      } catch (err) {
        console.warn(
          "⚠️ Failed to fetch live projects, staying with static defaults:",
          err,
        );
      }
    }
    loadDynamicProjects();

    window.addEventListener("focus", loadDynamicProjects);

    return () => {
      isMounted = false;
      window.removeEventListener("focus", loadDynamicProjects);
    };
  }, []);

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const total = projectsList.length;

  return (
    <section
      id="projects"
      className={`${cardSans.variable} ${cardMono.variable} relative bg-transparent pt-10 pb-24 sm:pt-14 sm:pb-32`}
    >
      {/* ── Header (ikut membesar di layar lebar) ───────────── */}
      <div className="relative z-10 mb-16 flex flex-col items-center px-4 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 flex flex-col items-center sm:mb-4"
        >
          <span
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            className="text-2xl font-semibold tracking-wide text-neutral-800 sm:text-3xl lg:text-[clamp(1.875rem,2.2vw,3.5rem)]"
          >
            {t("explore my work!", "jelajahi karya saya!")}
          </span>
          <svg
            viewBox="0 0 76 10"
            fill="none"
            className="mt-0.5 h-auto w-[76px] text-neutral-800 lg:w-[clamp(76px,5.6vw,140px)]"
            aria-hidden="true"
          >
            <path
              d="M2 3 Q 20 1, 38 3 T 74 2"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M8 8 Q 26 6, 42 8 T 68 7"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Judul: font & gaya sama dengan headline AboutSection */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-5xl font-bold uppercase leading-[0.92] tracking-[-0.02em] text-neutral-900 sm:text-7xl md:text-8xl lg:text-[clamp(6rem,7.6vw,12rem)]"
        >
          <span className="block">Featured</span>
          <span className="block">Projects</span>
        </motion.h2>

        {/* Sticky note */}
        <motion.div
          initial={{ opacity: 0, rotate: -4, y: 10 }}
          whileInView={{ opacity: 1, rotate: -2, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-10 max-w-[300px] bg-[#F6DCA0] px-5 py-4 text-left text-sm leading-snug text-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.06)] sm:mt-12 lg:max-w-[22em] lg:text-[clamp(14px,1.05vw,26px)] ${SANS}`}
        >
          {t(
            "This is a showcase of what happens when curiosity drives the process.",
            "Ini adalah etalase karya ketika rasa ingin tahu menggerakkan seluruh proses.",
          )}
        </motion.div>
      </div>

      {/* ── Kartu project ─────────────────────────────────────
          Desktop (lg+):
          - Lebar kartu 84% layar, tinggi kartu = tinggi layar dikurangi
            posisi pin, jadi pas satu layar di laptop maupun monitor.
          - Semua kartu sticky di `top` yang sama dalam satu parent, jadi
            kartu berikutnya naik menimpa kartu sebelumnya.
          - Jarak antar kartu dibuat cukup besar sehingga kartu berikutnya
            (termasuk tab-nya) belum terlihat saat kartu sebelumnya sudah
            menempel. Baru muncul setelah di-scroll lagi. */}
      <div
        className={`relative z-10 mx-auto flex w-full flex-col gap-14 px-4 sm:px-8 lg:w-[84vw] lg:max-w-[2400px] lg:gap-[12em] lg:px-0 ${BASE_FONT}`}
        style={
          {
            "--stack-top": "calc(3.4em + 88px)",
          } as CSSProperties
        }
      >
        {projectsList.map((project, index) => {
          const theme = THEMES[index % THEMES.length];
          const displayImage = imgErrors[project.id]
            ? FALLBACK_IMAGE
            : project.image || FALLBACK_IMAGE;

          const projectNumber = String(index + 1).padStart(2, "0");
          const projectDate = project.year
            ? `MAR 19, ${project.year}`
            : "MAR 19, 2026";

          const pills = [
            project.category || "STRATEGY",
            project.tags?.[0],
          ].filter(Boolean) as string[];

          return (
            <article
              key={project.id || `project-${index}`}
              className={`relative lg:sticky lg:top-[var(--stack-top)] ${SANS}`}
              style={
                {
                  "--bg": theme.bg,
                  "--ink": theme.ink,
                  zIndex: 10 + index,
                } as CSSProperties
              }
            >
              {/* Tab trapesium di atas kartu */}
              <div
                className="absolute bottom-full flex h-[2.8em] items-center justify-center gap-[0.7em] bg-[var(--bg)] text-[var(--ink)] [--cut:1.4em] sm:h-[3em] sm:[--cut:1.8em] lg:h-[3.4em] lg:[--cut:3.4em]"
                style={{
                  left: `${(index / total) * 100}%`,
                  width: `${100 / total}%`,
                  clipPath: index === 0 ? TAB_CLIP_FIRST : TAB_CLIP_REST,
                }}
              >
                <span
                  className="flex h-[0.9em] w-[1em] shrink-0 items-end gap-[0.12em]"
                  aria-hidden="true"
                >
                  <span className="h-[0.4em] w-[0.22em] bg-[var(--ink)]" />
                  <span className="h-[0.65em] w-[0.22em] bg-[var(--ink)]" />
                  <span className="h-[0.9em] w-[0.22em] bg-[var(--ink)]" />
                </span>
                <span
                  className={`${MONO} whitespace-nowrap text-[0.85em] font-medium tracking-wide`}
                >
                  <span className="hidden sm:inline">PROJECT </span>
                  {projectNumber}
                </span>
              </div>

              {/* Badan kartu */}
              <div className="grid grid-cols-1 gap-[1.2em] bg-[var(--bg)] p-[1em] text-[var(--ink)] lg:h-[calc(100svh_-_var(--stack-top)_-_2em)] lg:min-h-[36em] lg:grid-cols-2 lg:gap-[1em]">
                {/* Kolom kiri */}
                <div className="flex flex-col justify-between gap-[2.5em] pt-[1.5em] lg:pt-[2.5em]">
                  <div>
                    <div className="mb-[0.8em] flex items-center gap-[0.7em]">
                      <span className="h-[0.7em] w-[0.7em] rounded-full bg-[var(--ink)]" />
                      <span className={`${MONO} text-[0.85em] tracking-wide`}>
                        {projectDate}
                      </span>
                    </div>

                    <h3 className="mb-[0.3em] text-[2.8em] font-medium leading-[1.05] tracking-[-0.03em] sm:text-[3.3em] lg:text-[3.7em]">
                      {project.title}
                    </h3>

                    <p className="mb-[1.6em] max-w-[22em] text-[1.1em] leading-[1.4]">
                      {project.subtitle || project.description}
                    </p>

                    <Link
                      href={`/projects/${project.id}`}
                      className={`${MONO} group/link inline-flex items-center gap-[0.6em] border-b border-[var(--ink)] pb-[0.35em] text-[0.85em] uppercase tracking-wide`}
                    >
                      <span>{t("VIEW PROJECT", "LIHAT PROYEK")}</span>
                      <span className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                        ↗
                      </span>
                    </Link>
                  </div>

                  {/* Pill kategori */}
                  <div className="flex flex-wrap gap-[0.6em]">
                    {pills.map((label) => (
                      <span
                        key={label}
                        className={`${MONO} bg-[var(--ink)] px-[1em] pb-[0.5em] pt-[1.4em] text-[0.85em] uppercase tracking-wide text-[var(--bg)]`}
                        style={{ clipPath: PILL_CLIP }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Kolom kanan: gambar mengisi penuh tinggi kartu */}
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <div className="absolute inset-0 overflow-hidden border-2 border-[var(--ink)] bg-neutral-900">
                    <Image
                      src={displayImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      unoptimized={displayImage?.startsWith("http")}
                      onError={() => handleImageError(project.id)}
                    />
                  </div>

                  {/* 4 handle di sudut */}
                  {[
                    "-top-[0.4em] -left-[0.4em]",
                    "-top-[0.4em] -right-[0.4em]",
                    "-bottom-[0.4em] -left-[0.4em]",
                    "-bottom-[0.4em] -right-[0.4em]",
                  ].map((pos) => (
                    <span
                      key={pos}
                      className={`absolute h-[0.8em] w-[0.8em] border-2 border-[var(--ink)] bg-[var(--bg)] ${pos}`}
                    />
                  ))}

                  {/* Badge file di kanan atas */}
                  <div className="absolute right-[1em] top-[1em] flex items-center gap-[0.6em] bg-[var(--ink)] px-[0.7em] py-[0.5em] text-[var(--bg)]">
                    <span className="grid h-[1.1em] w-[1.1em] place-items-center bg-[var(--bg)] text-[var(--ink)]">
                      <span
                        className={`${MONO} text-[0.45em] font-bold leading-none`}
                      >
                        JPG
                      </span>
                    </span>
                    <span
                      className={`${MONO} text-[0.8em] uppercase tracking-wide`}
                    >
                      IMAGE.JPG
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {/* Jeda singkat: kartu terakhir tertahan sebentar sebelum lanjut ke section berikutnya */}
        <div className="hidden h-[6vh] lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
