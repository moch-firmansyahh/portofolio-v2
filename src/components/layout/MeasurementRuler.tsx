"use client";

import { useState, useEffect } from "react";

/**
 * MeasurementRuler
 * Tape penggaris modular arsitektural (Figma-style measurement ruler)
 * Bereaksi secara halus terhadap pergerakan mouse di layar.
 * Mendukung posisi "top" (border-b) maupun "bottom" (border-t) sebagai footer.
 */
export default function MeasurementRuler({
  position = "top",
  className = "",
}: {
  position?: "top" | "bottom";
  className?: string;
}) {
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const delta = (e.clientX - window.innerWidth / 2) * 0.12;
      setOffsetX(delta);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isBottom = position === "bottom";

  return (
    <div
      className={`w-full h-11 sm:h-12 ${
        isBottom ? "border-t" : "border-b"
      } border-neutral-300 bg-white overflow-hidden relative select-none shrink-0 z-20 pointer-events-none ${className}`}
    >
      <div
        className="relative w-full h-full will-change-transform"
        style={{
          transform: `translateX(${offsetX}px)`,
          transition: "transform 0.08s ease-out",
        }}
      >
        {Array.from({ length: 350 }, (_, i) => -500 + i * 10).map((val) => {
          const isMajor = val % 100 === 0;
          const isMedium = val % 50 === 0 && !isMajor;
          return (
            <div
              key={val}
              className={`absolute ${
                isBottom ? "bottom-0" : "top-0"
              } flex flex-col items-center pointer-events-none`}
              style={{ left: `${val}px` }}
            >
              {isBottom && isMajor && val >= 0 && (
                <span className="font-mono text-[9px] sm:text-[10px] font-bold text-neutral-500 mb-0.5 -translate-x-1/2 select-none tracking-tight">
                  {val}
                </span>
              )}
              <div
                className={`w-[1px] ${
                  isMajor
                    ? "h-3.5 sm:h-4 bg-neutral-400"
                    : isMedium
                    ? "h-2 sm:h-2.5 bg-neutral-300"
                    : "h-1 sm:h-1.5 bg-neutral-200"
                }`}
              />
              {!isBottom && isMajor && val >= 0 && (
                <span className="font-mono text-[9px] sm:text-[10px] font-bold text-neutral-500 mt-0.5 -translate-x-1/2 select-none tracking-tight">
                  {val}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
