"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedCursorBadge from "@/components/about/AnimatedCursorBadge";

/* ─── Company & Organization Logos ─── */
function ReacteevLogo() {
  return (
    <div className="w-8 h-8 rounded-lg bg-[#00C2FF] border-2 border-black flex items-center justify-center font-mono font-black text-xs text-black shadow-[2px_2px_0px_#000]">
      R
    </div>
  );
}

function CCILogo() {
  return (
    <div className="w-8 h-8 rounded-lg bg-[#FFE600] border-2 border-black flex items-center justify-center font-mono font-black text-xs text-black shadow-[2px_2px_0px_#000]">
      CCI
    </div>
  );
}

function CPSLogo() {
  return (
    <div className="w-8 h-8 rounded-lg bg-[#EDB22E] border-2 border-black flex items-center justify-center font-mono font-black text-xs text-black shadow-[2px_2px_0px_#000]">
      CPS
    </div>
  );
}

function GDGLogo() {
  return (
    <div className="w-8 h-8 rounded-lg bg-[#10B981] border-2 border-black flex items-center justify-center font-mono font-black text-xs text-white shadow-[2px_2px_0px_#000]">
      GDG
    </div>
  );
}

/**
 * 3. SECTION: WORK / EXPERIENCE (Timeline 1:1 with reference)
 */
const WorkSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function WorkSection(props, ref) {
    const { t } = useLanguage();

    return (
      <section
        id="experience"
        ref={ref}
        className="relative scroll-mt-24 pb-16"
        {...props}
      >
        {/* Cyan Canvas Selection Box (1:1 with reference) */}
        <div className="relative border-2 border-[#00C2FF] bg-white p-6 sm:p-10 md:p-12 shadow-sm">
          {/* 4 Corner Canvas Resize Handles */}
          <div className="w-2.5 h-2.5 bg-white border border-[#00C2FF] absolute -top-1.5 -left-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#00C2FF] absolute -top-1.5 -right-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#00C2FF] absolute -bottom-1.5 -left-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#00C2FF] absolute -bottom-1.5 -right-1.5 z-20" />

          {/* Selection Tag Badge at Top: WHAT DIVE INTO MY WORK (cyan 1:1) */}
          <div className="absolute -top-3.5 left-4 bg-[#00C2FF] text-black font-mono text-[11px] font-black px-2.5 py-0.5 tracking-wider uppercase select-none shadow-xs">
            {t("WHAT DIVE INTO MY WORK", "WHAT DIVE INTO MY WORK")}
          </div>

          {/* Section Header: Timeline */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-medium text-neutral-500 tracking-tight">
              {t("Timeline", "Linimasa")}
            </h2>
            <div className="w-full h-px bg-neutral-200 mt-4" />
          </div>

          {/* Timeline Items List */}
          <div className="flex flex-col gap-12 sm:gap-14">

            {/* ITEM 1: Reacteev */}
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3.5 pb-10 border-b border-neutral-100 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <ReacteevLogo />
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                    Reacteev
                  </h3>
                  <p className="font-mono text-xs font-bold text-neutral-600">
                    Full Stack Developer Intern
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-700 max-w-3xl">
                {t(
                  "Assisting in designing, developing, and maintaining scalable web applications and REST APIs. Engineering responsive front-end interfaces and robust back-end micro-services with Next.js, React, Node.js, and Express.",
                  "Membantu merancang, mengembangkan, dan memelihara aplikasi web serta REST API sebagai Full Stack Developer Intern. Mengembangkan antarmuka front-end responsif yang terintegrasi dengan API dan layanan backend dengan Next.js, React, Node.js, dan Express."
                )}
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#A5F3FC] border border-[#67E8F9] rounded-md font-mono text-xs font-black text-neutral-900 tracking-wider">
                  <span className="text-sm">⚡</span>
                  NOV 2026 - PRESENT
                </span>
              </div>
            </motion.article>

            {/* ITEM 2: CCI UNITEL Universitas Telkom - Kepala Divisi */}
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3.5 pb-10 border-b border-neutral-100 last:border-b-0 relative"
            >
              <div className="flex items-center gap-3">
                <CCILogo />
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                    CCI UNITEL Universitas Telkom
                  </h3>
                  <p className="font-mono text-xs font-bold text-neutral-600">
                    Kepala Divisi Web Development
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-700 max-w-3xl">
                {t(
                  "Leading the Web Development division, coordinating members, projects, and structured web learning curricula. Driving cross-division collaboration to uphold software architecture quality and team growth.",
                  "Memimpin divisi Web Development dan mengoordinasikan anggota, proyek, serta program belajar web. Mendorong kolaborasi lintas divisi untuk menjaga kualitas dan integrasi hasil pengembangan, serta memantau perkembangan anggota divisi."
                )}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FEF08A] border border-[#FDE047] rounded-md font-mono text-xs font-black text-neutral-900 tracking-wider">
                  <span className="text-sm">✦</span>
                  NOV 2026 - PRESENT
                </span>

                <div className="relative pr-8">
                  <AnimatedCursorBadge
                    text="LEADERSHIP"
                    bgColor="#00C2FF"
                    textColor="text-neutral-950"
                    className="absolute -top-3 sm:-top-4 right-0"
                    initialRotate={-10}
                  />
                </div>
              </div>
            </motion.article>

            {/* ITEM 3: CCI UNITEL Universitas Telkom - Study Group */}
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3.5 pb-10 border-b border-neutral-100 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <CCILogo />
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                    CCI UNITEL Universitas Telkom
                  </h3>
                  <p className="font-mono text-xs font-bold text-neutral-600">
                    Study Group Front-End Web Developer
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-700 max-w-3xl">
                {t(
                  "Developed interactive, responsive web user interfaces using HTML, CSS, JavaScript, React, and Next.js. Collaborated closely with cross-functional peers including UI/UX designers and back-end engineers.",
                  "Mengembangkan dan memelihara antarmuka pengguna interaktif untuk berbagai aplikasi web menggunakan HTML, CSS, JavaScript, dan React. Berkolaborasi dengan rekan lintas fungsi (UI/UX designer dan back-end developer) serta menerapkan responsive design dan state management."
                )}
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-300 rounded-md font-mono text-xs font-bold text-neutral-700 tracking-wider">
                  FEB 2026 - NOV 2026
                </span>
              </div>
            </motion.article>

            {/* ITEM 4: CPS Laboratory */}
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3.5 pb-10 border-b border-neutral-100 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <CPSLogo />
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                    CPS Laboratory Universitas Telkom
                  </h3>
                  <p className="font-mono text-xs font-bold text-neutral-600">
                    Study Group Full Stack Web Developer
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-700 max-w-3xl">
                {t(
                  "Explored end-to-end full-stack web development, bridging frontend interactive interfaces with relational databases, REST APIs with Express.js, MySQL, and cloud deployments.",
                  "Mengeksplorasi dan menerapkan konsep full-stack web development, menjembatani antarmuka front-end interaktif dengan database relasional, REST API Express.js, MySQL, dan deployment cloud."
                )}
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-300 rounded-md font-mono text-xs font-bold text-neutral-700 tracking-wider">
                  NOV 2025 - DEC 2025
                </span>
              </div>
            </motion.article>

            {/* ITEM 5: GDGoC Telkom University */}
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3.5 pb-6"
            >
              <div className="flex items-center gap-3">
                <GDGLogo />
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                    GDGoC Universitas Telkom
                  </h3>
                  <p className="font-mono text-xs font-bold text-neutral-600">
                    Study Group Web Developer
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-700 max-w-3xl">
                {t(
                  "Active member of the Web Development Study Group at Google Developer Groups on Campus (GDGoC). Participated in hands-on workshops, peer study sessions, and modern web design practice.",
                  "Berperan aktif sebagai anggota Web Development Study Group di Google Developer Groups on Campus (GDGoC). Berpartisipasi dalam sesi belajar kelompok, diskusi teknis, dan proyek kolaboratif untuk memperdalam pemahaman front-end development modern."
                )}
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-300 rounded-md font-mono text-xs font-bold text-neutral-700 tracking-wider">
                  NOV 2024 - JUN 2025
                </span>
              </div>
            </motion.article>

          </div>
        </div>
      </section>
    );
  }
);

export default WorkSection;
