"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Plus, Minus, HelpCircle, Sparkles, MessageCircleQuestion, ArrowUp } from "lucide-react";
import { playBubblePop } from "@/components/playground/audioEffects";

interface FAQItem {
  qEn: string;
  qId: string;
  aEn: string;
  aId: string;
  badge: string;
}

const FAQS: FAQItem[] = [
  {
    qEn: "How quickly can I expect a response to my message?",
    qId: "Berapa lama estimasi balasan untuk pesan yang dikirim?",
    aEn: "I typically respond within 12 to 24 hours on business days. For urgent engineering matters or quick discussions, reaching out via LinkedIn or direct email is also welcome.",
    aId: "Saya biasanya merespons dalam waktu 12 hingga 24 jam pada hari kerja. Untuk kebutuhan mendesak atau diskusi cepat, Anda juga bisa menghubungi melalui LinkedIn atau email langsung.",
    badge: "SLA < 24H",
  },
  {
    qEn: "Are you open to freelance projects or full-time opportunities?",
    qId: "Apakah terbuka untuk proyek freelance atau peluang kerja purna waktu?",
    aEn: "Yes! I am actively open to freelance web development projects, contractor roles, internships, and full-time software engineering opportunities focusing on modern frontend (React/Next.js) and secure architectures.",
    aId: "Ya! Saya sangat terbuka untuk proyek pembuatan website/aplikasi (freelance), posisi magang, kontrak, hingga peluang kerja purna waktu yang berfokus pada Front-End modern (React/Next.js) serta implementasi arsitektur yang aman.",
    badge: "AVAILABLE",
  },
  {
    qEn: "What is your primary tech stack for building web applications?",
    qId: "Apa tech stack utama yang biasa digunakan untuk membangun aplikasi?",
    aEn: "My daily core stack revolves around Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, and Turso / PostgreSQL / Express.js on the backend. I emphasize performant code, accessible interfaces, and strict security validation.",
    aId: "Tech stack utama saya berpusat pada Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, serta backend menggunakan Turso / PostgreSQL / Express.js. Saya memprioritaskan performa tinggi, aksesibilitas, dan validasi keamanan ketat.",
    badge: "TECH STACK",
  },
  {
    qEn: "Can you help with web security audits or hardening existing web apps?",
    qId: "Bisakah membantu audit keamanan dasar atau penguatan keamanan aplikasi web?",
    aEn: "Certainly. Armed with Google Cybersec Specialization certifications, I can help review authentication flows, HTTPS/CORS configurations, input sanitization, database query injection prevention, and security headers.",
    aId: "Tentu. Berbekal sertifikasi spesialisasi keamanan siber Google, saya dapat membantu meninjau alur autentikasi, konfigurasi HTTPS/CORS, sanitasi input, pencegahan SQL/NoSQL injection, hingga penerapan security headers.",
    badge: "CYBERSEC",
  },
];

export default function ContactFAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    playBubblePop(isOpening ? 1.3 : 0.9, true);
  };

  const scrollToForm = () => {
    window.scrollTo({ top: 320, behavior: "smooth" });
  };

  return (
    <section className="relative py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
      {/* Centered Header with motion reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center pb-6 border-b-2 border-black mb-8"
      >
        <div className="flex items-center justify-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
          <HelpCircle className="w-4 h-4 text-[#00C2FF]" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight flex items-center gap-2">
          <span>{t("Collaboration & Inquiries FAQ", "Pertanyaan Umum Seputar Kolaborasi")}</span>
          <span className="font-mono text-xs px-2 py-0.5 bg-[#FFF275] border-2 border-black shadow-[2px_2px_0px_#000] rotate-2">
            INFO ✦
          </span>
        </h3>
      </motion.div>

      {/* Accordion List with bouncy Framer Motion */}
      <div className="space-y-4 select-none">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -2 }}
              className={`bg-white border-2 border-black transition-all duration-200 ${
                isOpen ? "shadow-[6px_6px_0px_#00C2FF]" : "shadow-[4px_4px_0px_#000]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer group"
              >
                <div className="flex items-center gap-3 pr-4">
                  <span className="font-mono text-xs font-black px-2.5 py-1 bg-neutral-100 group-hover:bg-[#FFE600] border border-black transition-colors shadow-xs">
                    0{index + 1}
                  </span>
                  <div>
                    <span className="font-mono text-[9px] font-black uppercase text-neutral-500 block">
                      {faq.badge}
                    </span>
                    <h4 className="font-mono text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-black">
                      {t(faq.qEn, faq.qId)}
                    </h4>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="w-8 h-8 shrink-0 rounded-full border-2 border-black bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-colors flex items-center justify-center shadow-xs"
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="overflow-hidden border-t-2 border-black bg-[#F8FAFC]"
                  >
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-[#10B981] text-white border border-black font-mono text-[9px] font-black shadow-xs">
                          ANSWERED ✓
                        </span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                        {t(faq.aEn, faq.aId)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Playful Floating Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 p-4 bg-[#FFE600]/30 border-2 border-black flex flex-col sm:flex-row items-center justify-between gap-3 shadow-[4px_4px_0px_#000]"
      >
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <MessageCircleQuestion className="w-5 h-5 text-neutral-800 shrink-0" />
          <span className="font-mono text-xs font-bold text-neutral-900">
            {t("Still got questions in mind? Dispatch a direct message above!", "Masih ada pertanyaan lain? Kirim pesan langsung di formulir atas!")}
          </span>
        </div>
        <motion.button
          onClick={scrollToForm}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white font-mono text-xs font-black border-2 border-black shadow-[2px_2px_0px_#00C2FF] cursor-pointer"
        >
          <span>{t("BACK TO FORM", "KE FORMULIR")}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
