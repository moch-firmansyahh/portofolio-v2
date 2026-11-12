"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  qEn: string;
  qId: string;
  aEn: string;
  aId: string;
}

const FAQS: FAQItem[] = [
  {
    qEn: "How quickly can I expect a response to my message?",
    qId: "Berapa lama estimasi balasan untuk pesan yang dikirim?",
    aEn: "I typically respond within 12 to 24 hours on business days. For urgent engineering matters or quick discussions, reaching out via LinkedIn or direct email is also welcome.",
    aId: "Saya biasanya merespons dalam waktu 12 hingga 24 jam pada hari kerja. Untuk kebutuhan mendesak atau diskusi cepat, Anda juga bisa menghubungi melalui LinkedIn atau email langsung.",
  },
  {
    qEn: "Are you open to freelance projects or full-time opportunities?",
    qId: "Apakah terbuka untuk proyek freelance atau peluang kerja purna waktu?",
    aEn: "Yes! I am actively open to freelance web development projects, contractor roles, internships, and full-time software engineering opportunities focusing on modern frontend (React/Next.js) and secure architectures.",
    aId: "Ya! Saya sangat terbuka untuk proyek pembuatan website/aplikasi (freelance), posisi magang, kontrak, hingga peluang kerja purna waktu yang berfokus pada Front-End modern (React/Next.js) serta implementasi arsitektur yang aman.",
  },
  {
    qEn: "What is your primary tech stack for building web applications?",
    qId: "Apa tech stack utama yang biasa digunakan untuk membangun aplikasi?",
    aEn: "My daily core stack revolves around Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, and Turso / PostgreSQL / Express.js on the backend. I emphasize performant code, accessible interfaces, and strict security validation.",
    aId: "Tech stack utama saya berpusat pada Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, serta backend menggunakan Turso / PostgreSQL / Express.js. Saya memprioritaskan performa tinggi, aksesibilitas, dan validasi keamanan ketat.",
  },
  {
    qEn: "Can you help with web security audits or hardening existing web apps?",
    qId: "Bisakah membantu audit keamanan dasar atau penguatan keamanan aplikasi web?",
    aEn: "Certainly. Armed with Google Cybersec Specialization certifications, I can help review authentication flows, HTTPS/CORS configurations, input sanitization, database query injection prevention, and security headers.",
    aId: "Tentu. Berbekal sertifikasi spesialisasi keamanan siber Google, saya dapat membantu meninjau alur autentikasi, konfigurasi HTTPS/CORS, sanitasi input, pencegahan SQL/NoSQL injection, hingga penerapan security headers.",
  },
];

export default function ContactFAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
      {/* Centered Header */}
      <div className="flex flex-col items-center text-center pb-6 border-b-2 border-black mb-8">
        <div className="flex items-center justify-center gap-2 font-mono text-xs font-bold text-neutral-600 mb-1">
          <HelpCircle className="w-4 h-4 text-[#00C2FF]" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          {t("Collaboration & Inquiries FAQ", "Pertanyaan Umum Seputar Kolaborasi")}
        </h3>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5 select-none">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white border-2 border-black shadow-[4px_4px_0px_#000] transition-shadow duration-200"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer group"
              >
                <div className="flex items-center gap-3 pr-4">
                  <span className="font-mono text-xs font-black px-2 py-0.5 bg-neutral-100 group-hover:bg-[#EDB22E] border border-black transition-colors">
                    0{index + 1}
                  </span>
                  <h4 className="font-mono text-xs sm:text-sm font-bold text-neutral-900">
                    {t(faq.qEn, faq.qId)}
                  </h4>
                </div>

                <div className="w-7 h-7 shrink-0 rounded-full border-2 border-black bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-colors flex items-center justify-center">
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden border-t-2 border-black/10 bg-neutral-50/70"
                  >
                    <p className="p-4 sm:p-5 font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      {t(faq.aEn, faq.aId)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}