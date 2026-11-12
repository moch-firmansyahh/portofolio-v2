"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { sendContactMessage } from "@/services/contact";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ShieldCheck,
  Terminal,
  Sparkles,
  ArrowUpRight,
  Activity,
  Pin,
  Cpu,
} from "lucide-react";
import { playBubblePop, playComplete, playSquish } from "@/components/playground/audioEffects";

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

  // Confetti particles for success celebration
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; r: number; color: string; shape: string }>>([]);

  // Compute Dispatch Readiness Progress (0% to 100%)
  const readiness = useMemo(() => {
    let score = 0;
    if (name.trim().length >= 2) score += 30;
    if (email.trim().includes("@") && email.trim().includes(".")) score += 35;
    if (message.trim().length >= 10) score += 35;
    return score;
  }, [name, email, message]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopiedEmail(true);
    playBubblePop(1.4, true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleTopicSelect = (presetLabel: string) => {
    setSubject(presetLabel);
    playBubblePop(1.2, true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage(
        t("Please fill in your name, email, and message.", "Harap lengkapi nama, email, dan pesan Anda.")
      );
      playSquish(true);
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
        playComplete(true);

        // Spawn 24 colorful confetti particles
        const colors = ["#00C2FF", "#FFE600", "#FF5757", "#10B981", "#A855F7", "#F97316"];
        const shapes = ["circle", "square", "triangle"];
        const particles = Array.from({ length: 28 }).map((_, i) => ({
          id: Date.now() + i,
          x: (Math.random() - 0.5) * 400,
          y: -Math.random() * 260 - 50,
          r: Math.random() * 360,
          color: colors[i % colors.length],
          shape: shapes[i % shapes.length],
        }));
        setConfetti(particles);

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(
          res.error || t("Failed to transmit message. Please try again.", "Gagal mengirimkan pesan. Silakan coba lagi.")
        );
        playSquish(true);
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        t("Network error. Please try again or reach out directly.", "Terjadi kesalahan jaringan. Silakan hubungi via email langsung.")
      );
      playSquish(true);
    }
  };

  return (
    <section className="relative py-10 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* ── Left Column: Communication Terminal & Direct Channels (5 cols) ── */}
        <div className="lg:col-span-5 space-y-6">
          {/* Desk Console Card with Framer Motion hover elevation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white border-2 border-black p-6 sm:p-7 shadow-[6px_6px_0px_#000] relative group"
          >
            {/* Top Registration Crosshairs */}
            <div className="absolute top-2 left-2 text-neutral-400 font-mono text-[9px]">+</div>
            <div className="absolute top-2 right-2 text-neutral-400 font-mono text-[9px]">+</div>

            {/* Draggable Post-It Sticky Note with Spring Physics */}
            <motion.div
              drag
              dragConstraints={{ left: -20, right: 30, top: -15, bottom: 40 }}
              dragElastic={0.25}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileDrag={{ scale: 1.1, cursor: "grabbing" }}
              initial={{ rotate: -3 }}
              className="mb-5 bg-[#FFF275] border-2 border-black p-3 shadow-[3px_3px_0px_#000] cursor-grab select-none relative"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF5757] rounded-full border border-black flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
              <p className="font-mono text-[11px] font-bold text-neutral-900 leading-snug">
                {t(
                  "💡 Pro-Tip: Open for internships, frontend contracts, or just casual tech chats!",
                  "💡 Catatan: Terbuka untuk magang, proyek frontend, atau ngobrol santai seputar teknologi!"
                )}
              </p>
            </motion.div>

            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-black">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#00C2FF] border border-black inline-block" />
                <h3 className="font-mono text-xs font-black uppercase text-neutral-900 tracking-wider">
                  TRANSMISSION CHANNELS // V2.0
                </h3>
              </div>
              <span className="font-mono text-[9px] px-1.5 py-0.5 bg-black text-white font-bold">
                LIVE
              </span>
            </div>

            {/* Interactive Live Signal Monitor */}
            <div className="p-3 bg-neutral-900 text-white font-mono text-xs border-2 border-black mb-5 shadow-[3px_3px_0px_#00C2FF]">
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-neutral-700 text-[10px] text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[#10B981] font-bold">RADAR FREQUENCY</span>
                </div>
                <span>LATENCY: 18ms</span>
              </div>
              {/* Equalizer Waveform Bars with perpetual motion */}
              <div className="flex items-end justify-between h-7 px-1 gap-1">
                {[0.4, 0.9, 0.6, 1.0, 0.7, 0.85, 0.5, 0.95, 0.75, 0.6, 0.9, 0.5].map((val, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      height: [`${val * 35}%`, `${(1 - val * 0.4) * 100}%`, `${val * 60}%`],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2 + (idx % 4) * 0.2,
                      ease: "easeInOut",
                    }}
                    className="w-full bg-[#00C2FF] border-t border-black/40 rounded-xs"
                  />
                ))}
              </div>
              <div className="text-[9px] text-neutral-400 mt-2 flex justify-between font-bold">
                <span>CHANNEL: SECURE EDGE</span>
                <span className="text-[#10B981]">● LISTENING</span>
              </div>
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-3 bg-neutral-50 hover:bg-[#FFE600]/30 border-2 border-black transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="text-[10px] text-neutral-500 font-bold uppercase">PRIMARY EMAIL</div>
                  <div className="font-bold text-neutral-900 mt-0.5">{userEmail}</div>
                </div>
                <motion.button
                  type="button"
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1.5 bg-white border border-black hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                </motion.button>
              </motion.div>

              {/* Location & Time */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-3 bg-neutral-50 border-2 border-black flex items-center justify-between"
              >
                <div>
                  <div className="text-[10px] text-neutral-500 font-bold uppercase">LOCATION BASE</div>
                  <div className="font-bold text-neutral-900 mt-0.5">Bandung, West Java, ID</div>
                </div>
                <span className="font-bold text-[10px] px-2 py-0.5 bg-[#EDB22E] border border-black">
                  UTC+7
                </span>
              </motion.div>
            </div>

            {/* Social Links List with Framer Motion spring hovers */}
            <div className="mt-6 pt-5 border-t-2 border-black">
              <div className="text-[10px] font-mono font-black uppercase text-neutral-500 mb-3 flex items-center justify-between">
                <span>DIRECT SOCIAL NETWORKS</span>
                <span className="text-[#00C2FF]">✦ VERIFIED</span>
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs font-bold">
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, x: 2 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-between p-2.5 bg-white hover:bg-neutral-900 hover:text-white border-2 border-black shadow-[2px_2px_0px_#000] transition-colors group"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>

                <motion.a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, x: 2 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-between p-2.5 bg-white hover:bg-[#0077B5] hover:text-white border-2 border-black shadow-[2px_2px_0px_#000] transition-colors group"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>

                <motion.a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, x: 2 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-between p-2.5 bg-white hover:bg-[#E1306C] hover:text-white border-2 border-black shadow-[2px_2px_0px_#000] transition-colors group"
                >
                  <span>INSTAGRAM</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>

                <motion.a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, x: 2 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-between p-2.5 bg-white hover:bg-black hover:text-white border-2 border-black shadow-[2px_2px_0px_#000] transition-colors group"
                >
                  <span>TIKTOK</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Security & SLA Guarantee Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#10B981]/10 border-2 border-black p-4 shadow-[4px_4px_0px_#000] flex items-start gap-3"
          >
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
          </motion.div>
        </div>

        {/* ── Right Column: Interactive Dispatch Terminal (7 cols) ── */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white border-2 border-black p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_#000] relative"
          >
            {/* Corner Crosshairs */}
            <div className="absolute top-2 left-2 text-neutral-400 font-mono text-[9px]">+</div>
            <div className="absolute top-2 right-2 text-neutral-400 font-mono text-[9px]">+</div>
            <div className="absolute bottom-2 left-2 text-neutral-400 font-mono text-[9px]">+</div>
            <div className="absolute bottom-2 right-2 text-neutral-400 font-mono text-[9px]">+</div>

            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-black">
              <div>
                <span className="font-mono text-[10px] font-black uppercase text-neutral-500 block">
                  TRANSMIT PROTOCOL // DISPATCH
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                  {t("Send a Direct Message", "Kirim Pesan Langsung")}
                </h3>
              </div>
              <motion.div
                whileHover={{ rotate: [-2, 2, -2] }}
                className="px-2.5 py-1 bg-[#EDB22E] border-2 border-black font-mono text-xs font-black shadow-xs select-none"
              >
                SLA: &lt; 24H ⚡
              </motion.div>
            </div>

            {/* Interactive Dispatch Readiness Progress Bar */}
            <div className="mb-6 p-2.5 bg-neutral-50 border-2 border-black">
              <div className="flex items-center justify-between font-mono text-[11px] font-black mb-1.5">
                <span className="text-neutral-700 uppercase">
                  {t("TRANSMISSION READINESS", "KESIAPAN PESAN")}:
                </span>
                <span
                  className={
                    readiness === 100
                      ? "text-[#047857] font-black"
                      : "text-neutral-800"
                  }
                >
                  {readiness === 100
                    ? t("100% READY TO DISPATCH 🚀", "100% SIAP DIKIRIM 🚀")
                    : `${readiness}% IN PROGRESS`}
                </span>
              </div>
              <div className="w-full h-2.5 bg-neutral-200 border border-black overflow-hidden relative">
                <motion.div
                  className="h-full bg-linear-to-r from-[#00C2FF] via-[#FFE600] to-[#10B981]"
                  initial={{ width: 0 }}
                  animate={{ width: `${readiness}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
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
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    className={`px-3 py-1.5 border-2 border-black font-mono text-xs font-bold transition-all cursor-pointer ${
                      subject === t(preset.labelEn, preset.labelId)
                        ? "bg-neutral-900 text-white shadow-[3px_3px_0px_#00C2FF] scale-102"
                        : "bg-neutral-50 hover:bg-[#FFE600]/40 text-neutral-800 shadow-[2px_2px_0px_#000]"
                    }`}
                  >
                    {t(preset.labelEn, preset.labelId)}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Success State View with Full Confetti Animation */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative bg-[#10B981]/15 border-2 border-black p-6 sm:p-8 text-center my-4 shadow-[6px_6px_0px_#000] overflow-hidden"
                >
                  {/* Floating Confetti Elements */}
                  {confetti.map((c) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                      animate={{
                        opacity: [1, 1, 0],
                        x: c.x,
                        y: [0, c.y, c.y + 120],
                        rotate: c.r,
                      }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        width: 10,
                        height: 10,
                        backgroundColor: c.color,
                        borderRadius: c.shape === "circle" ? "50%" : "2px",
                        pointerEvents: "none",
                        zIndex: 40,
                      }}
                    />
                  ))}

                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-[#10B981] border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_0px_#000]"
                  >
                    <CheckCircle2 className="w-9 h-9 text-white" />
                  </motion.div>
                  <h4 className="font-mono text-lg sm:text-xl font-black text-neutral-900 mb-2">
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
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    className="px-6 py-2.5 bg-neutral-900 text-white border-2 border-black font-mono text-xs font-black shadow-[3px_3px_0px_#00C2FF] cursor-pointer"
                  >
                    {t("SEND ANOTHER MESSAGE ↺", "KIRIM PESAN LAIN ↺")}
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
                      <label className="block font-mono text-xs font-bold text-neutral-800 mb-1.5 flex items-center justify-between">
                        <span>{t("YOUR NAME *", "NAMA ANDA *")}</span>
                        {name.trim().length >= 2 && (
                          <span className="text-[#047857] text-[10px] font-black">✓ OK</span>
                        )}
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
                      <label className="block font-mono text-xs font-bold text-neutral-800 mb-1.5 flex items-center justify-between">
                        <span>{t("YOUR EMAIL *", "EMAIL ANDA *")}</span>
                        {email.includes("@") && (
                          <span className="text-[#047857] text-[10px] font-black">✓ VALID</span>
                        )}
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

                  {/* Message Field with live character count */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="font-mono text-xs font-bold text-neutral-800">
                        {t("YOUR MESSAGE *", "PESAN ANDA *")}
                      </label>
                      <span className="font-mono text-[10px] text-neutral-500 font-bold">
                        {message.length} CHARS
                      </span>
                    </div>
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

                  {/* Submit Button with Energetic Spring and Flight motion */}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
