"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [displayText, setDisplayText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during greeting preloader
    document.body.style.overflow = "hidden";

    let isCancelled = false;

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    async function runTypewriter() {
      await sleep(250); // initial brief pause

      // 1. Type "Hey there!"
      const phrase1 = "Hey there!";
      for (let i = 1; i <= phrase1.length; i++) {
        if (isCancelled) return;
        setDisplayText(phrase1.substring(0, i));
        await sleep(55);
      }

      // Pause on "Hey there!"
      await sleep(750);

      // 2. Delete "Hey there!"
      for (let i = phrase1.length; i >= 0; i--) {
        if (isCancelled) return;
        setDisplayText(phrase1.substring(0, i));
        await sleep(28);
      }

      await sleep(150);

      // 3. Type "Welcome"
      const phrase2 = "Welcome";
      for (let i = 1; i <= phrase2.length; i++) {
        if (isCancelled) return;
        setDisplayText(phrase2.substring(0, i));
        await sleep(65);
      }

      // Pause on "Welcome"
      await sleep(700);

      if (isCancelled) return;
      document.body.style.overflow = "unset";
      setIsLoading(false);
    }

    runTypewriter();

    return () => {
      isCancelled = true;
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="greeting-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white select-none overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            backgroundPosition: "top center",
          }}
        >
          {/* Cyan Speech Bubble 1:1 with Image 2 */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative px-8 py-5 sm:px-10 sm:py-6 bg-[#00C2FF] rounded-2xl rounded-tl-xs border-[2.5px] border-black shadow-[4px_4px_0px_#000] flex items-center justify-center min-w-[240px] sm:min-w-[280px]"
          >
            <span className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-black tracking-tight flex items-center">
              {displayText || "\u00A0"}
              <span className="inline-block w-[3px] h-7 sm:h-9 bg-black ml-1.5 animate-pulse align-middle" />
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
