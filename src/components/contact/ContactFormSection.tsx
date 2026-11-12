"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { sendContactMessage } from "@/services/contact";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Zap,
  Terminal,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface ContactFormProps {
  userEmail?: string;
  userPhone?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
}

const TOPIC_PRESETS = [
  { key: "project", labelEn: "🚀 Web App / Project", labelId: "🚀 Proyek / Web App" },
  { key: "job", labelEn: "💼 Job / Internship", labelId: "💼 Karier / Magang" },
  { key: "security", labelEn: "🛡️ Security Audit", labelId: "🛡️ Audit Keamanan" },
  { key: "chat", labelEn: "☕ Just Saying Hi", labelId: "☕ Sapa Santai" },
];

export default function ContactFormSection({
  userEmail = "firmanajah366@gmail.com",
  userPhone = "+62 812-3456-7890",
  githubUrl = "https://github.com/moch-firmansyahh",
  linkedinUrl = "https://www.linkedin.com/in/moch-firmansyah-532122323/",
  instagramUrl = "https://www.instagram.com/frmzyxx/",
  tiktokUrl = "https://www.tiktok.com/@frmnzy_",
}: ContactFormProps) {
  const { t } = useLanguage();

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");

  // Submission Status
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleTopicSelect = (presetLabel: string) => {
    setSubject(presetLabel);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage(
        t("Please fill in your name, email, and message.", "Harap lengkapi nama, email, dan pesan Anda.")
      );
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await sendContactMessage({
        name,
        email,
        subject: subject || "Inquiry from Portfolio",
        message,
        botField,
      });

      if (res.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(
          res.error || t("Failed to transmit message. Please try again.", "Gagal mengirimkan pesan. Silakan coba lagi.")
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        t("Network error. Please try again or reach out directly.", "Terjadi kesalahan jaringan. Silakan hubungi via email langsung.")
      );
    }
  };

  return (
    <section className="relative py-10 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* ── Left Column: Communication Terminal & Direct Channels (5 cols) ── */}
        <div className="lg:col-span-5 space-y-6">
          {/* Desk Console Card */}
          <div className="bg-white border-2 border-black p-6 sm:p-7 shadow-[6px_6px_0px_#000] relative">
            {/* Top Registration Crosshairs */}
            <div className="absolute top-2 left-2 text-neutral-400 font-mono text-[9px]">+</div>
            <div className="absolute top-2 right-2 text-neutral-400 font-mono text-[9px]">+</div>

            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-black">
              <span className="w-2.5 h-2.5 bg-[#00C2FF] border border-black inline-block" />
              <h3 className="font-mono text-xs font-black uppercase text-neutral-900 tracking-wider">
                TRANSMISSION CHANNELS // V2.0
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed mb-6">
              {t(
                "Have an idea for a web project, an open role, or questions about modern React & security architectures? Send a direct transmission!",
                "Punya ide proyek web, tawaran kolaborasi, atau ingin berdiskusi seputar rekayasa Next.js & keamanan siber? Kirimkan pesan sekarang!"
              )}
            </p>

            {/* Direct Channel Items */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <div className="p-3 bg-neutral-50 hover:bg-[#F6DCA0] border-2 border-black transition-colors flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-neutral-500 font-bold uppercase">PRIMARY EMAIL</div>
                  <div className="font-bold text-neutral-900 mt-0.5">{userEmail}</div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 bg-white border border-black hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location & Time */}
              <div className="p-3 bg-neutral-50 border-2 border-black flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-neutral-500 font-bold uppercase">LOCATION BASE</div>
                  <div className="font-bold text-neutral-900 mt-0.5">Bandung, West Java, ID</div>
                </div>
                <span className="font-bold text-[10px] px-2 py-0.5 bg-[#EDB22E] border border-black">
                  UTC+7
                </span>
              </div>
            </div>

            {/* Social Links List */}
            <div className="mt-6 pt-5 border-t-2 border-black">
              <div className="text-[10px] font-mono font-black uppercase text-neutral-500 mb-3">
                DIRECT SOCIAL NETWORKS
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs font-bold">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-white hover:bg-neutral-900 hover:text-white border-2 border-black shadow-[2px_2px_0px_#000] transition-colors group"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-white hover:bg-[#0077B5] hover:text-white border-2 border-black shadow-[2px_2px_0px_#000] transition-colors group"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-white hover:bg-[#E1306C] hover:text-white border-2 border-black shadow-[2px_2px_0px_#000] transition-colors group"
                >
                  <span>INSTAGRAM</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-white hover:bg-black hover:text-white border-2 border-black shadow-[2px_2px_0px_#000] transition-colors group"
                >
                  <span>TIKTOK</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Security & SLA Guarantee Badge */}
          <div className="bg-[#10B981]/10 border-2 border-black p-4 shadow-[4px_4px_0px_#000] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
            <div className="font-mono text-xs">
              <span className="font-black text-neutral-900 block">
                TURSO DATABASE ENCRYPTED &amp; RATE LIMITED
              </span>
              <span className="text-neutral-700 leading-snug mt-0.5 block font-sans">
                {t(
                  "Messages are directly piped to Turso SQLite Edge. Spam protection & rate-limiting enforced.",
                  "Pesan dikirimkan langsung ke Turso Edge Database dengan proteksi anti-spam & rate limiter."
                )}
              </span>
            </div>
          </div>
        </div>

        {/* ── Right Column: Interactive Dispatch Terminal (7 cols) ── */}
        <div className="lg:col-span-7">
          <div className="bg-white border-2 border-black p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_#000] relative">
            {/* Corner Crosshairs */}
            <div className="absolute top-2 left-2 text-neutral-400 font-mono text-[9px]">+</div>
            <div className="absolute top-2 right-2 text-neutral-400 font-mono text-[9px]">+</div>
            <div className="absolute bottom-2 left-2 text-neutral-400 font-mono text-[9px]">+</div>
            <div className="absolute bottom-2 right-2 text-neutral-400 font-mono text-[9px]">+</div>

            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-black">
              <div>
                <span className="font-mono text-[10px] font-black uppercase text-neutral-500 block">
                  TRANSMIT PROTOCOL // DISPATCH
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                  {t("Send a Direct Message", "Kirim Pesan Langsung")}
                </h3>
              </div>
              <div className="px-2.5 py-1 bg-[#EDB22E] border-2 border-black font-mono text-xs font-black rotate-1 shadow-xs">
                SLA: &lt; 24H ⚡
              </div>
            </div>

            {/* Quick Topic Presets */}
            <div className="mb-6">
              <label className="block font-mono text-xs font-bold text-neutral-700 mb-2">
                {t("1. SELECT INQUIRY TOPIC (OPTIONAL)", "1. PILIH TOPIK DISKUSI (OPSIONAL)")}:
              </label>
              <div className="flex flex-wrap gap-2">
                {TOPIC_PRESETS.map((preset) => (
                  <motion.button
                    key={preset.key}
                    type="button"
                    onClick={() => handleTopicSelect(t(preset.labelEn, preset.labelId))}
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1.5 border-2 border-black font-mono text-xs font-bold transition-colors cursor-pointer ${
                      subject === t(preset.labelEn, preset.labelId)
                        ? "bg-neutral-900 text-white shadow-[2px_2px_0px_#00C2FF]"
                        : "bg-neutral-50 hover:bg-[#F6DCA0] text-neutral-800 shadow-[2px_2px_0px_#000]"
                    }`}
                  >
                    {t(preset.labelEn, preset.labelId)}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Success State View */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#10B981]/15 border-2 border-black p-6 sm:p-8 text-center my-4 shadow-[4px_4px_0px_#000]"
                >
                  <div className="w-14 h-14 bg-[#10B981] border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_0px_#000]">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-mono text-lg font-black text-neutral-900 mb-2">
                    {t("MESSAGE TRANSMITTED SUCCESSFULLY! 🚀", "PESAN BERHASIL TERKIRIM! 🚀")}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-neutral-700 max-w-md mx-auto leading-relaxed mb-6">
                    {t(
                      "Thank you for reaching out! Your message has been safely saved to the database. I will reply to your email as soon as possible.",
                      "Terima kasih telah menghubungi! Pesan Anda telah tersimpan aman di database. Saya akan membalas ke email Anda sesegera mungkin."
                    )}
                  </p>
                  <motion.button
                    type="button"
                    onClick={() => setStatus("idle")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 bg-neutral-900 text-white border-2 border-black font-mono text-xs font-black shadow-[3px_3px_0px_#00C2FF] cursor-pointer"
                  >
                    {t("SEND ANOTHER MESSAGE", "KIRIM PESAN LAIN")}
                  </motion.button>
                </motion.div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field (hidden from real users) */}
                  <input
                    type="text"
                    name="botField"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name & Email Fields (2 cols) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-bold text-neutral-800 mb-1.5">
                        {t("YOUR NAME *", "NAMA ANDA *")}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t("e.g. John Doe", "mis. Budi Santoso")}
                        className="w-full px-3.5 py-2.5 bg-neutral-50 focus:bg-white border-2 border-black font-mono text-xs text-neutral-900 focus:outline-none focus:shadow-[3px_3px_0px_#00C2FF] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold text-neutral-800 mb-1.5">
                        {t("YOUR EMAIL *", "EMAIL ANDA *")}
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 bg-neutral-50 focus:bg-white border-2 border-black font-mono text-xs text-neutral-900 focus:outline-none focus:shadow-[3px_3px_0px_#00C2FF] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block font-mono text-xs font-bold text-neutral-800 mb-1.5">
                      {t("SUBJECT / PURPOSE", "SUBJEK / PERIHAL")}
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={t("What would you like to discuss?", "Apa yang ingin didiskusikan?")}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 focus:bg-white border-2 border-black font-mono text-xs text-neutral-900 focus:outline-none focus:shadow-[3px_3px_0px_#00C2FF] transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block font-mono text-xs font-bold text-neutral-800 mb-1.5">
                      {t("YOUR MESSAGE *", "PESAN ANDA *")}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t(
                        "Tell me about your project, timeline, questions, or just drop a friendly hello...",
                        "Ceritakan tentang proyek Anda, estimasi waktu, pertanyaan, atau sapaan hangat..."
                      )}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 focus:bg-white border-2 border-black font-mono text-xs text-neutral-900 focus:outline-none focus:shadow-[3px_3px_0px_#00C2FF] transition-all resize-y"
                    />
                  </div>

                  {/* Error Message Alert */}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-[#E11D5A]/15 border-2 border-[#E11D5A] flex items-center gap-2 font-mono text-xs text-[#9F1239] font-bold"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-neutral-900 hover:bg-neutral-800 text-white border-2 border-black font-mono text-xs sm:text-sm font-black shadow-[4px_4px_0px_#00C2FF] disabled:opacity-50 cursor-pointer transition-all"
                    >
                      {status === "loading" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{t("TRANSMITTING TO EDGE...", "MENGIRIMKAN KE SERVER...")}</span>
                        </>
                      ) : (
                        <>
                          <span>{t("DISPATCH TRANSMISSION ↗", "KIRIM PESAN SEKARANG ↗")}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}