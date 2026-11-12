"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AboutBioSection from "@/components/about/AboutBioSection";
import StorySection from "@/components/about/StorySection";
import WorkSection from "@/components/about/WorkSection";

/* ─── Custom Floating Navigation Icons ─── */
function BioNavIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 19 6 19 18 12 22 5 18 5 6" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}

function StoryNavIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="6" r="2.5" fill="currentColor" />
      <circle cx="18" cy="18" r="2.5" fill="currentColor" />
      <path d="M6 8.5v3a4 4 0 0 0 4 4h4" />
      <path d="M14 11l4 4.5-4 4.5" />
    </svg>
  );
}

function ExperienceNavIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
      <path d="M12 7l1.5 3.5L17 12l-3.5 1.5L12 17l-1.5-3.5L7 12l3.5-1.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function AboutSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"bio" | "story" | "experience">("bio");
  const [isDockHovered, setIsDockHovered] = useState(false);

  // Direction tracking for odometer vertical roll ticker (1 = down, -1 = up)
  const tabIndexMap = { bio: 0, story: 1, experience: 2 } as const;
  const prevActiveTabRef = useRef<"bio" | "story" | "experience">(activeTab);
  const [scrollDirection, setScrollDirection] = useState<number>(1);

  useEffect(() => {
    const prevIndex = tabIndexMap[prevActiveTabRef.current];
    const currentIndex = tabIndexMap[activeTab];
    if (currentIndex !== prevIndex) {
      setScrollDirection(currentIndex > prevIndex ? 1 : -1);
      prevActiveTabRef.current = activeTab;
    }
  }, [activeTab]);

  const bioRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  const [isDockVisible, setIsDockVisible] = useState(true);

  // Vertical Navigation Tabs Configuration
  const dockTabs = [
    { id: "bio" as const, label: "BIO", Icon: BioNavIcon },
    { id: "story" as const, label: "STORY", Icon: StoryNavIcon },
    { id: "experience" as const, label: "EXPERIENCE", Icon: ExperienceNavIcon },
  ];

  const activeTabData =
    dockTabs.find((t) => t.id === activeTab) || dockTabs[0];
  const ActiveIcon = activeTabData.Icon;

  // Scroll spy to highlight active section in the vertical dock & control dock visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 250;
      const storyTop = storyRef.current ? storyRef.current.offsetTop : 0;
      const experienceTop = experienceRef.current ? experienceRef.current.offsetTop : 0;
      const experienceBottom = experienceRef.current
        ? experienceRef.current.offsetTop + experienceRef.current.offsetHeight
        : 0;

      // Hide dock smoothly when scrolling past experience into LetsTalk / Contact
      if (experienceBottom && window.scrollY > experienceBottom - 100) {
        setIsDockVisible(false);
      } else {
        setIsDockVisible(true);
      }

      if (experienceTop && scrollY >= experienceTop - 50) {
        setActiveTab("experience");
      } else if (storyTop && scrollY >= storyTop - 50) {
        setActiveTab("story");
      } else {
        setActiveTab("bio");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (section: "bio" | "story" | "experience") => {
    setActiveTab(section);
    let targetRef = bioRef;
    if (section === "story") targetRef = storyRef;
    if (section === "experience") targetRef = experienceRef;

    if (targetRef.current) {
      const top = targetRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full selection:bg-neutral-900 selection:text-white pt-8 sm:pt-12 pb-16 sm:pb-24">
      {/* ─── Floating Vertical Navigation Dock: In-Place Centered Dynamic Island ─── */}
      <motion.aside
        animate={{
          opacity: isDockVisible ? 1 : 0,
          scale: isDockVisible ? 1 : 0.9,
          pointerEvents: isDockVisible ? "auto" : "none",
        }}
        transition={{ duration: 0.25 }}
        className="fixed left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-40 select-none"
      >
        <motion.div
          onMouseEnter={() => setIsDockHovered(true)}
          onMouseLeave={() => setIsDockHovered(false)}
          animate={{
            height: isDockHovered ? 218 : 72,
            boxShadow: isDockHovered
              ? "0 16px 40px rgba(0,0,0,0.14)"
              : "0 8px 24px rgba(0,0,0,0.08)",
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 28,
            mass: 0.6,
          }}
          className="relative w-[84px] sm:w-[92px] bg-white/95 backdrop-blur-md border border-neutral-300 rounded-[24px] overflow-hidden cursor-pointer"
        >
          <AnimatePresence initial={false}>
            {isDockHovered ? (
              /* Expanded State: 3 buttons full vertical dock */
              <motion.div
                key="expanded-dock"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-1.5 flex flex-col justify-between"
              >
                {dockTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => scrollTo(tab.id)}
                      className={`w-full h-[64px] rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-150 cursor-pointer ${
                        isActive
                          ? "bg-black text-white shadow-md scale-100"
                          : "text-neutral-700 hover:text-black hover:bg-neutral-100"
                      }`}
                    >
                      <tab.Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span
                        className={`${
                          tab.id === "experience"
                            ? "text-[8.5px] sm:text-[9.5px] tracking-tight px-0.5"
                            : "text-[10px] sm:text-[11px] tracking-wider"
                        } font-black uppercase whitespace-nowrap`}
                      >
                        {t(tab.label, tab.label)}
                      </span>
                    </button>
                  );
                })}
              </motion.div>
            ) : (
              /* Collapsed State: Single In-Place Centered Active Capsule (Zero Y Jump!) */
              <motion.div
                key="collapsed-dock"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={() => scrollTo(activeTab)}
                className="absolute inset-1.5 flex items-center justify-center"
              >
                <div className="w-full h-[60px] rounded-2xl bg-black text-white shadow-sm flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="popLayout" custom={scrollDirection} initial={false}>
                    <motion.div
                      key={activeTab}
                      custom={scrollDirection}
                      variants={{
                        enter: (dir: number) => ({
                          y: dir > 0 ? 24 : -24,
                          opacity: 0,
                          scale: 0.88,
                        }),
                        center: {
                          y: 0,
                          opacity: 1,
                          scale: 1,
                        },
                        exit: (dir: number) => ({
                          y: dir > 0 ? -24 : 24,
                          opacity: 0,
                          scale: 0.88,
                        }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        y: { type: "spring", stiffness: 380, damping: 28 },
                        opacity: { duration: 0.16 },
                      }}
                      className="flex flex-col items-center justify-center gap-1 w-full select-none"
                    >
                      <ActiveIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      <span
                        className={`${
                          activeTab === "experience"
                            ? "text-[8.5px] sm:text-[9.5px] tracking-tight px-0.5"
                            : "text-[10px] sm:text-[11px] tracking-wider"
                        } font-black uppercase whitespace-nowrap text-white`}
                      >
                        {t(activeTabData.label, activeTabData.label)}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.aside>

      {/* ─── Main Content Canvas ─── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pl-24 sm:pl-32 md:pl-36 lg:px-8 flex flex-col gap-24 md:gap-32">
        {/* 1. SECTION: MAIN BIO */}
        <AboutBioSection ref={bioRef} />

        {/* 2. SECTION: STORY */}
        <StorySection ref={storyRef} />

        {/* 3. SECTION: EXPERIENCE / WORK */}
        <WorkSection ref={experienceRef} />
      </div>
    </div>
  );
}
