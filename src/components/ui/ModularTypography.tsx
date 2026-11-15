"use client";

import React from "react";

/**
 * MASTER BESPOKE MODULAR TYPOGRAPHY ENGINE (FLUX VARIABLE AESTHETIC)
 * 
 * 1:1 Typography directly matching Nudge Folio (https://nudge-folio.framer.website/services):
 * - Native Flux Variable WOFF2 font with ultra-bold weight (1000)
 * - Negative letter-spacing (-0.03em / -0.025em)
 * - Tight line-height (0.86x - 0.88x)
 * - True uppercase display styling
 * - Seamless responsive font scaling
 */

export function ModularTitle({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <h1
      className={`font-flux text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[112px] leading-[0.86] tracking-[-0.03em] uppercase text-neutral-900 text-center select-none ${className}`}
    >
      {text}
    </h1>
  );
}

export function ModularSubheading({
  line1,
  line2,
  className = "",
}: {
  line1: string;
  line2?: string;
  className?: string;
}) {
  return (
    <div
      className={`font-flux text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] leading-[0.88] tracking-[-0.025em] uppercase text-neutral-900 text-center select-none ${className}`}
    >
      <div className="block">{line1}</div>
      {line2 && <div className="block mt-1 sm:mt-2">{line2}</div>}
    </div>
  );
}
