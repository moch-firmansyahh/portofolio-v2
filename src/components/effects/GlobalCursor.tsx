"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function GlobalCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSuppressed, setIsSuppressed] = useState(false);
  const [cursorColor, setCursorColor] = useState("#000000");
  const rawMouseX = useMotionValue(-500);
  const rawMouseY = useMotionValue(-500);

  const smoothCursorX = useSpring(rawMouseX, {
    damping: 28,
    stiffness: 420,
    mass: 0.35,
  });

  const smoothCursorY = useSpring(rawMouseY, {
    damping: 28,
    stiffness: 420,
    mass: 0.35,
  });

  useEffect(() => {
    // Only enable on pointer fine devices (desktop/mouse)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      rawMouseX.set(e.clientX);
      rawMouseY.set(e.clientY);

      // Check if cursor is over an element requesting hiding global cursor
      const target = e.target as Element | null;
      const el = target instanceof Element ? target : (target as unknown as Node)?.parentElement;
      const hideEl = el?.closest ? el.closest("[data-hide-global-cursor='true']") : null;
      setIsSuppressed(!!hideEl);

      const colorEl = el?.closest ? el.closest("[data-cursor-color]") : null;
      if (colorEl) {
        setCursorColor(colorEl.getAttribute("data-cursor-color") || "#000000");
      } else {
        setCursorColor("#000000");
      }

      if (!isVisible) setIsVisible(true);
    };

    const handleToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ hide: boolean }>;
      setIsSuppressed(!!customEvent.detail?.hide);
    };

    const handleSetColor = (e: Event) => {
      const customEvent = e as CustomEvent<{ color?: string }>;
      setCursorColor(customEvent.detail?.color || "#000000");
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("toggle-global-cursor", handleToggle);
    window.addEventListener("set-global-cursor-color", handleSetColor);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("toggle-global-cursor", handleToggle);
      window.removeEventListener("set-global-cursor-color", handleSetColor);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, rawMouseX, rawMouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      animate={{ opacity: isVisible && !isSuppressed ? 1 : 0 }}
      transition={{ duration: isSuppressed ? 0.05 : 0.15 }}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: smoothCursorX,
        y: smoothCursorY,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      className="select-none pointer-events-none"
    >
      <div className="flex items-center gap-1.5 translate-x-3 translate-y-3">
        {/* Ring target circle */}
        <motion.div
          animate={{ backgroundColor: cursorColor }}
          transition={{ duration: 0.18 }}
          className="w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-xs"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </motion.div>
        {/* "YOU" badge capsule */}
        <motion.div
          animate={{ backgroundColor: cursorColor }}
          transition={{ duration: 0.18 }}
          className="text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md font-mono"
        >
          YOU
        </motion.div>
      </div>
    </motion.div>
  );
}
