"use client";

import { motion } from "framer-motion";

/**
 * Unified Animated Cursor Badge (1:1 matching MY STORY design)
 * Used identically for: "MY STORY", "BEJAMAN", and "MY WORK"
 */
export default function AnimatedCursorBadge({
  text,
  bgColor = "#E11D5A",
  textColor = "text-white",
  className = "",
  initialRotate = -11,
  xOffset = [0, 6, -4, 8, -3, 0],
}: {
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  initialRotate?: number;
  xOffset?: number[];
}) {
  return (
    <motion.div
      animate={{
        x: xOffset,
        y: [0, -10, -3, -12, -4, 0],
        rotate: [
          initialRotate,
          initialRotate + 3,
          initialRotate - 3,
          initialRotate + 2,
          initialRotate - 1,
          initialRotate,
        ],
      }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.15, rotate: initialRotate + 5 }}
      className={`z-30 select-none cursor-pointer drop-shadow-md ${className}`}
    >
      <div className="relative flex items-center">
        {/* Hand-drawn Arrow Pointer with Black Border */}
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 -mr-1.5 -mt-2 z-10 filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
        >
          <path
            d="M 3 2 L 17 8.5 L 10.5 11.5 L 7.5 18 L 3 2 Z"
            fill={bgColor}
            stroke="#18181B"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>

        {/* Angled Capsule Badge with 2.2px Black Outline & Crisp Drop Shadow */}
        <div
          style={{ backgroundColor: bgColor }}
          className="border-[2.2px] border-neutral-900 shadow-[2.5px_2.5px_0px_#18181B] px-3.5 py-1 rounded-full flex items-center justify-center"
        >
          <span
            className={`${textColor} text-xs sm:text-[13px] font-black tracking-wider uppercase font-sans whitespace-nowrap`}
          >
            {text}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
