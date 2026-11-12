"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedCursorBadge from "@/components/about/AnimatedCursorBadge";

/**
 * 2. SECTION: STORY (Philosophy / Principles 1:1 with reference)
 * 1:1 matching media_1790994210219.png
 */
const StorySection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function StorySection(props, ref) {
    const { t } = useLanguage();

    return (
      <section
        id="story"
        ref={ref}
        className="relative scroll-mt-24"
        {...props}
      >
        {/* Magenta / Rose Canvas Selection Box (1:1 with media_1790994210219.png) */}
        <div className="relative border-2 border-[#E11D5A] bg-white p-6 sm:p-10 md:p-14 shadow-sm">
          {/* 4 Corner Canvas Resize Handles */}
          <div className="w-2.5 h-2.5 bg-white border border-[#E11D5A] absolute -top-1.5 -left-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#E11D5A] absolute -top-1.5 -right-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#E11D5A] absolute -bottom-1.5 -left-1.5 z-20" />
          <div className="w-2.5 h-2.5 bg-white border border-[#E11D5A] absolute -bottom-1.5 -right-1.5 z-20" />

          {/* Selection Tag Badge at Top: WHAT DIVE INTO MY WORK (1:1 magenta) */}
          <div className="absolute -top-3.5 left-4 bg-[#E11D5A] text-white font-mono text-[11px] font-black px-2.5 py-0.5 tracking-wider uppercase select-none shadow-xs">
            {t("WHAT DIVE INTO MY WORK", "WHAT DIVE INTO MY WORK")}
          </div>

          {/* 4 Staggered Philosophy Cards (1:1 matching media_1790994210219.png) */}
          <div className="flex flex-col gap-14 sm:gap-20 md:gap-24 pt-4 sm:pt-6">

            {/* ─── ROW 1: Card 1 (Cyan, Left) & "think first, draw later." ─── */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              {/* Card 1: Cyan Box (54% width) */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[54%] bg-[#A8E5FF] p-7 sm:p-9 md:p-10 text-neutral-900 shadow-xs"
              >
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight leading-[1.2] mb-4 text-neutral-900">
                  {t("Starting with why, not what", "Starting with why, not what")}
                </h3>
                <p className="text-sm sm:text-base leading-[1.65] text-neutral-800 font-normal">
                  {t(
                    "Before jumping into wireframes, I want to understand what problem we're actually solving. Sometimes the thing people ask for isn't the thing they need. My favorite projects start with good questions and end with solutions that feel obvious in hindsight.",
                    "Before jumping into wireframes, I want to understand what problem we're actually solving. Sometimes the thing people ask for isn't the thing they need. My favorite projects start with good questions and end with solutions that feel obvious in hindsight."
                  )}
                </p>
              </motion.div>

              {/* Hand-drawn Annotation: Curved Arrow pointing to "think first, draw later." */}
              <div className="w-full md:w-[42%] flex items-center gap-3 pl-2 sm:pl-4 pt-2 md:pt-8 select-none">
                <svg viewBox="0 0 64 26" className="w-14 h-7 text-neutral-800 shrink-0 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 4 8 C 22 12, 42 19, 58 22" />
                  <path d="M 48 18 L 58 22 L 50 26" />
                </svg>
                <span
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                  className="text-2xl sm:text-3xl font-bold text-neutral-800 leading-tight select-none rotate-[-4deg]"
                >
                  think first, draw later.
                </span>
              </div>
            </div>

            {/* ─── ROW 2: "no perfect world here!" & Card 2 (Yellow, Right) with Moving MY STORY Cursor ─── */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              {/* Hand-drawn Annotation (Left): "no perfect world here!" with Arrow pointing to Card 2 */}
              <div className="order-2 md:order-1 w-full md:w-[42%] flex items-center justify-start md:justify-end gap-3 pr-2 sm:pr-4 pb-2 md:pb-8 select-none">
                <span
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                  className="text-2xl sm:text-3xl font-bold text-neutral-800 leading-tight select-none rotate-[-3deg]"
                >
                  no perfect world here!
                </span>
                <svg viewBox="0 0 64 26" className="w-14 h-7 text-neutral-800 shrink-0 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 4 18 C 22 16, 42 10, 58 4" />
                  <path d="M 48 2 L 58 4 L 50 10" />
                </svg>
              </div>

              {/* Card 2: Warm Sand / Yellow Box (54% width) with Lively Animated MY STORY Cursor */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 md:order-2 w-full md:w-[54%] bg-[#FBE5A2] p-7 sm:p-9 md:p-10 text-neutral-900 shadow-xs relative"
              >
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight leading-[1.2] mb-4 text-neutral-900">
                  {t("Designing for real constraints", "Designing for real constraints")}
                </h3>
                <p className="text-sm sm:text-base leading-[1.65] text-neutral-800 font-normal">
                  {t(
                    "Perfect conditions don't exist. Budgets are tight, timelines are aggressive, legacy systems are messy, and sometimes you just can't talk to users directly. I'm comfortable making smart decisions with imperfect information and finding creative solutions within real limitations.",
                    "Perfect conditions don't exist. Budgets are tight, timelines are aggressive, legacy systems are messy, and sometimes you just can't talk to users directly. I'm comfortable making smart decisions with imperfect information and finding creative solutions within real limitations."
                  )}
                </p>

                {/* 1:1 Animated "MY STORY" Cursor Badge moving around lively */}
                <AnimatedCursorBadge
                  text={t("MY STORY", "MY STORY")}
                  bgColor="#E11D5A"
                  textColor="text-white"
                  className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6"
                  initialRotate={-11}
                />
              </motion.div>
            </div>

            {/* ─── ROW 3: Card 3 (Mint Green, Left) & "we, not me." ─── */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              {/* Card 3: Mint Green Box (54% width) */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[54%] bg-[#A9DFBF] p-7 sm:p-9 md:p-10 text-neutral-900 shadow-xs"
              >
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight leading-[1.2] mb-4 text-neutral-900">
                  {t("Collaboration over hero design", "Collaboration over hero design")}
                </h3>
                <p className="text-sm sm:text-base leading-[1.65] text-neutral-800 font-normal">
                  {t(
                    "The best work happens when designers, engineers, and product folks are actually talking to each other—not throwing things over the wall. I genuinely enjoy the back-and-forth of figuring out what's possible, what's practical, and what's going to create the most value.",
                    "The best work happens when designers, engineers, and product folks are actually talking to each other—not throwing things over the wall. I genuinely enjoy the back-and-forth of figuring out what's possible, what's practical, and what's going to create the most value."
                  )}
                </p>
              </motion.div>

              {/* Hand-drawn Annotation: Arrow pointing down-right to "we, not me." */}
              <div className="w-full md:w-[42%] flex items-center gap-3 pl-2 sm:pl-4 pt-2 md:pt-8 select-none">
                <svg viewBox="0 0 64 26" className="w-14 h-7 text-neutral-800 shrink-0 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 4 8 C 22 12, 42 19, 58 22" />
                  <path d="M 48 18 L 58 22 L 50 26" />
                </svg>
                <span
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                  className="text-2xl sm:text-3xl font-bold text-neutral-800 leading-tight select-none rotate-[-4deg]"
                >
                  we, not me.
                </span>
              </div>
            </div>

            {/* ─── ROW 4: "details build trust." & Card 4 (Soft Pink, Right) ─── */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              {/* Hand-drawn Annotation (Left): "details build trust." with Arrow pointing to Card 4 */}
              <div className="order-2 md:order-1 w-full md:w-[42%] flex items-center justify-start md:justify-end gap-3 pr-2 sm:pr-4 pb-2 md:pb-8 select-none">
                <span
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                  className="text-2xl sm:text-3xl font-bold text-neutral-800 leading-tight select-none rotate-[-2deg]"
                >
                  details build trust.
                </span>
                <svg viewBox="0 0 64 26" className="w-14 h-7 text-neutral-800 shrink-0 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 4 18 C 22 16, 42 10, 58 4" />
                  <path d="M 48 2 L 58 4 L 50 10" />
                </svg>
              </div>

              {/* Card 4: Soft Blush Pink Box (54% width) */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 md:order-2 w-full md:w-[54%] bg-[#FADBD8] p-7 sm:p-9 md:p-10 text-neutral-900 shadow-xs"
              >
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight leading-[1.2] mb-4 text-neutral-900">
                  {t("Making the invisible visible", "Making the invisible visible")}
                </h3>
                <p className="text-sm sm:text-base leading-[1.65] text-neutral-800 font-normal">
                  {t(
                    "Some of the most impactful design work isn't flashy—it's the progress indicator that keeps people oriented, the auto-save that prevents panic, the validation message that actually helps instead of just saying 'error.' These details build trust.",
                    "Some of the most impactful design work isn't flashy—it's the progress indicator that keeps people oriented, the auto-save that prevents panic, the validation message that actually helps instead of just saying 'error.' These details build trust."
                  )}
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    );
  }
);

export default StorySection;
