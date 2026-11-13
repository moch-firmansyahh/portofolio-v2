"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedCursorBadge from "@/components/about/AnimatedCursorBadge";

/* ─── Modular Chunky Modernist Typography: "ABOUT" (1:1 with reference) ─── */
function AboutModularTypography() {
  return (
    <div className="w-full select-none text-neutral-900 mb-6 sm:mb-8">
      <svg
        viewBox="0 0 420 90"
        className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] h-auto block select-none overflow-visible"
        fill="currentColor"
        aria-label="ABOUT"
      >
        {/* A (Distinctive Modular Hourglass/Loop A) */}
        <g transform="translate(0, 0)">
          <path
            fillRule="evenodd"
            d="M 24 0 H 46 C 58 0 66 8 66 19 C 66 28 60 34 50 38 C 45 40 43 43 46 47 C 56 52 68 62 68 76 V 80 C 68 86 64 90 58 90 H 46 C 40 90 36 86 36 80 V 68 C 36 60 30 56 24 56 C 18 56 12 60 12 68 V 80 C 12 86 8 90 2 90 H -2 C -8 90 -12 86 -12 80 V 76 C -12 62 0 52 10 47 C 13 43 11 40 6 38 C -4 34 -10 28 -10 19 C -10 8 -2 0 10 0 Z M 16 18 C 16 23 20 27 25 27 C 30 27 34 23 34 18 C 34 13 30 9 25 9 C 20 9 16 13 16 18 Z"
            transform="translate(10, 0)"
          />
        </g>
        {/* B (Chunky Double Rounded Loops) */}
        <g transform="translate(82, 0)">
          <path
            fillRule="evenodd"
            d="M 10 0 H 46 C 58 0 66 8 66 20 C 66 28 60 34 52 38 C 62 42 68 50 68 64 C 68 78 58 90 46 90 H 10 C 4 90 0 86 0 80 V 10 C 0 4 4 0 10 0 Z M 22 16 H 42 C 48 16 50 20 50 24 C 50 28 48 32 42 32 H 22 Z M 22 46 H 44 C 50 46 52 50 52 62 C 52 70 50 74 44 74 H 22 Z"
          />
        </g>
        {/* O (Rounded Chunky Rectangular Loop) */}
        <g transform="translate(162, 0)">
          <path
            fillRule="evenodd"
            d="M 22 0 H 50 C 66 0 72 10 72 24 V 66 C 72 80 66 90 50 90 H 22 C 6 90 0 80 0 66 V 24 C 0 10 6 0 22 0 Z M 24 18 H 48 C 54 18 56 22 56 28 V 62 C 56 68 54 72 48 72 H 24 C 18 72 16 68 16 62 V 28 C 16 22 18 18 24 18 Z"
          />
        </g>
        {/* U (Modular Curved Base Stem) */}
        <g transform="translate(244, 0)">
          <path
            fillRule="evenodd"
            d="M 0 10 C 0 4 4 0 10 0 H 22 C 28 0 32 4 32 10 V 58 C 32 68 36 72 46 72 C 56 72 60 68 60 58 V 10 C 60 4 64 0 70 0 H 82 C 88 0 92 4 92 10 V 62 C 92 78 82 90 64 90 H 28 C 10 90 0 78 0 62 Z"
          />
        </g>
        {/* T (Chunky Crossbar and Central Stem) */}
        <g transform="translate(348, 0)">
          <path
            fillRule="evenodd"
            d="M 4 0 H 66 C 72 0 76 4 76 10 V 20 C 76 26 72 30 66 30 H 46 V 80 C 46 86 42 90 36 90 H 34 C 28 90 24 86 24 80 V 30 H 4 C 1 30 0 26 0 20 V 10 C 0 4 4 0 4 0 Z"
          />
        </g>
      </svg>
    </div>
  );
}

/* ─── Inline Headline Glyphs (Enlarged) ─── */
function PuzzleGlyph() {
  return (
    <span className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 align-middle mx-1 sm:mx-1.5 drop-shadow-xs">
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="#EDB22E">
        <path d="M3 3h7v3a2 2 0 0 0 4 0V3h7v7h-3a2 2 0 0 0 0 4h3v7h-7v-3a2 2 0 0 0-4 0v3H3v-7h3a2 2 0 0 0 0-4H3z" />
      </svg>
    </span>
  );
}

function HourglassGlyph() {
  return (
    <span className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 align-middle mx-1 sm:mx-1.5 drop-shadow-xs">
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="#E11D5A">
        <path d="M5 3H19a2 2 0 0 1 2 2V7C17.5 9 17.5 15 21 17V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V17C6.5 15 6.5 9 3 7V5a2 2 0 0 1 2-2Z" />
      </svg>
    </span>
  );
}

/**
 * 1. SECTION: MAIN BIO / ABOUT
 * 1:1 matching media_1790993926231.png
 */
const AboutBioSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function AboutBioSection(props, ref) {
    const { t } = useLanguage();

    return (
      <section
        id="bio"
        ref={ref}
        className="relative pt-2 sm:pt-6 scroll-mt-24"
        {...props}
      >
        {/* Top Giant Modular "ABOUT" Typography */}
        <AboutModularTypography />

        {/* Figma Canvas Selection Box with Gold Border & Corner Handles */}
        <div className="relative border-2 border-[#EAB308] bg-white p-6 sm:p-10 md:p-12 shadow-sm">
          {/* 4 Corner Canvas Resize Handles */}
          <div className="w-2.5 h-2.5 bg-white border border-[#EAB308] absolute -top-1.5 -left-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#EAB308] absolute -top-1.5 -right-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#EAB308] absolute -bottom-1.5 -left-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#EAB308] absolute -bottom-1.5 -right-1.5 z-20" />

          {/* Canvas Badge: MAIN BIO (1:1 with reference) */}
          <div className="absolute -top-3.5 left-4 bg-[#EAB308] text-neutral-950 font-mono text-[11px] font-black px-2.5 py-0.5 tracking-wider uppercase select-none shadow-xs">
            {t("MAIN BIO", "MAIN BIO")}
          </div>

          {/* 1:1 Headline with Inline Avatar & Glyphs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.3] text-neutral-900 tracking-tight">
              {t("I'm Moch. Firmansyah", "Saya Moch. Firmansyah")}{" "}
              {/* Inline Avatar thumbnail */}
              <span className="inline-block w-8 h-8 sm:w-9 sm:h-9 rounded-md overflow-hidden align-middle mx-1 border border-neutral-300 shadow-xs relative">
                <Image
                  src="/about-me.jpg"
                  alt="Portrait"
                  fill
                  className="object-cover object-center"
                />
              </span>{" "}
              {t(
                "a Full Stack Developer & Software Engineering student at Telkom University",
                "seorang Full Stack Developer & mahasiswa Informatika di Universitas Telkom"
              )}
              <PuzzleGlyph />
              {t(
                "passionate about building scalable digital solutions",
                "yang berdedikasi membangun solusi digital inovatif dan terukur"
              )}
              <HourglassGlyph />
              .
            </h1>
          </motion.div>

          {/* 1:1 Body Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base leading-relaxed text-neutral-800 mb-10 relative">
            <p>
              {t(
                "I focus on Software Engineering and full-stack web development with React, Next.js, TypeScript, Python, and Go. Currently interning as a Full Stack Developer at Reacteev, leading the Web Development division at CCI UNITEL Telkom University, and holding certifications including AWS Certified AI Practitioner, Google AI Professional, and Google Network Security.",
                "Saya berfokus pada Software Engineering dan pengembangan web fullstack menggunakan React, Next.js, TypeScript, Python, dan Go. Saat ini saya aktif magang sebagai Full Stack Developer di Reacteev, menjabat sebagai Kepala Divisi Web Development di CCI UNITEL Universitas Telkom, serta meraih sertifikasi resmi AWS Certified AI Practitioner, Google AI Professional, dan Google Network Security."
              )}
            </p>

            <div className="relative">
              <p>
                {t(
                  "Having engineered full-stack applications such as SimGizi (AI-powered child nutrition & stunting detection, 3rd Winner at CCI THE HACK 2026), Voluntrip, and Manajemen Kontrakan Pa Iman, I take pride in collaborating closely with UI/UX designers and backend developers to build resilient, accessible, and high-impact digital systems.",
                  "Berbekal pengalaman membangun aplikasi web full-stack seperti SimGizi (aplikasi deteksi stunting & gizi buruk berbasis AI yang meraih Juara 3 CCI THE HACK 2026), Voluntrip, dan Manajemen Kontrakan Pa Iman, saya terbiasa berkolaborasi erat dengan desainer antarmuka dan backend engineer untuk menciptakan sistem digital yang tangguh, mudah digunakan, dan berdampak nyata."
                )}
              </p>

              {/* 1:1 Animated "FIRMAN" Cursor Badge (Shifted right, pointing to text without overlapping) */}
              <div className="hidden sm:block absolute right-0 translate-x-[75%] sm:translate-x-[82%] md:translate-x-[90%] -bottom-2 md:-bottom-3 pointer-events-none">
                <AnimatedCursorBadge
                  text="FIRMAN"
                  bgColor="#EAB308"
                  textColor="text-neutral-950"
                  initialRotate={-11}
                  xOffset={[0, 6, 2, 8, 3, 0]}
                />
              </div>
            </div>
          </div>

          {/* 1:1 Bottom Layout: Yellow Sticky Note + Polaroid with "it's me" */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
            
            {/* Sticky Note 1 (Left - Reacteev & CCI reflection) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7 bg-[#FDE68A] text-neutral-900 p-6 sm:p-7 shadow-[2px_4px_12px_rgba(0,0,0,0.06)] border border-[#F59E0B]/30"
            >
              <p className="text-sm sm:text-base font-normal leading-relaxed text-neutral-900">
                {t(
                  "Currently at Reacteev helping design and maintain production web apps and REST APIs, while mentoring web development study sessions as Head of Web Development at CCI UNITEL. I believe great software bridges thoughtful engineering with exceptional user delight.",
                  "Saat ini di Reacteev membantu merancang dan memelihara aplikasi web produksi serta REST API, sekaligus membimbing sesi belajar web sebagai Kepala Divisi Web Development di CCI UNITEL Telkom University. Saya percaya perangkat lunak hebat tercipta dari perpaduan rekayasa sistem yang matang dengan antarmuka yang menyenangkan bagi pengguna."
                )}
              </p>
            </motion.div>

            {/* Polaroid Photo with "it's me" caption (Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="md:col-span-5 flex justify-center md:justify-end"
            >
              <div className="bg-white p-3 pb-4 shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-neutral-200 rotate-[3deg] hover:rotate-0 transition-transform duration-300 w-52 sm:w-56">
                {/* Photo Frame */}
                <div className="relative w-full aspect-square overflow-hidden bg-neutral-100 mb-2.5">
                  <Image
                    src="/about-me.jpg"
                    alt="it's me"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Handwritten Caption: "it's me" */}
                <div className="text-center">
                  <span
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                    className="text-xl font-bold text-neutral-800 tracking-wide select-none"
                  >
                    it's me
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sticky Note 2 (Centered/Right slightly tilted: "When I'm not designing...") */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 md:mt-8 md:ml-auto md:w-3/5 bg-[#FEF08A] text-neutral-900 p-6 sm:p-7 shadow-[2px_4px_12px_rgba(0,0,0,0.06)] border border-[#EAB308]/30 rotate-[-1.5deg] hover:rotate-0 transition-transform duration-200"
          >
            <p className="text-sm sm:text-base font-normal leading-relaxed text-neutral-900">
              {t(
                "When I'm not designing, you'll find me thinking about why some interfaces feel intuitive and others make you want to throw your laptop out a window. Usually with coffee.",
                "Saat saya tidak sedang mendesain, Anda akan menemukan saya memikirkan mengapa beberapa antarmuka terasa begitu intuitif dan yang lainnya membuat Anda ingin melempar laptop keluar jendela. Biasanya ditemani secangkir kopi."
              )}
            </p>
          </motion.div>

        </div>
      </section>
    );
  }
);

export default AboutBioSection;
