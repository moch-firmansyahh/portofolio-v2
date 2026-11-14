"use client";

import React from "react";

/**
 * MASTER BESPOKE MODULAR TYPOGRAPHY ENGINE (JOURNAL DISPLAY AESTHETIC)
 * 
 * 1:1 Vector Geometry matching the "JOURNAL" experimental modular display typeface:
 * - Fluid inward-curving corners (Concave / Scalloped Fillets)
 * - Rounded pill caps and uniform stroke weights
 * - Strict mathematical advance & kerning (Zero collision, perfectly neat & balanced)
 */

interface GlyphDef {
  w: number;
  advance: number;
  d: string;
}

const GLYPHS: Record<string, GlyphDef> = {
  '&': {
    w: 58,
    advance: 68,
    d: "M 16 0 H 32 C 36 0 40 4 40 9 V 20 L 25 36 L 40 54 L 47 47 C 50 44 54 45 56 48 C 58 51 58 56 55 59 L 42 71 L 47 76 C 50 79 48 83 44 83 H 37 L 27 73 L 17 80 H 5 C 1 80 -2 75 0 70 L 6 56 L 18 39 L 14 32 C 9 23 9 8 16 0 Z M 19 14 C 16 17 16 23 20 28 L 26 23 V 15 C 26 13 24 12 21 12 C 20 12 19 13 19 14 Z M 15 52 L 11 59 C 10 65 13 69 18 69 C 23 69 27 65 27 60 C 27 57 25 54 23 52 Z"
  },
  '-': {
    w: 28,
    advance: 38,
    d: "M 4 33 H 24 C 28 33 31 36 31 40 C 31 44 28 47 24 47 H 4 C 0 47 -3 44 -3 40 C -3 36 0 33 4 33 Z"
  },
  'A': {
    w: 54,
    advance: 64,
    d: "M 18 0 C 23 -1 31 -1 36 0 C 40 4 43 10 44 13 C 48 13 54 16 54 22 V 74 C 54 78 50 80 45 80 C 40 80 37 77 37 72 V 51 H 17 V 72 C 17 77 14 80 9 80 C 4 80 0 78 0 74 V 22 C 0 16 6 13 10 13 C 11 10 14 4 18 0 Z M 17 16 H 37 C 39 16 40 18 40 21 V 37 C 40 40 39 42 37 42 H 17 C 15 42 14 40 14 37 V 21 C 14 18 15 16 17 16 Z"
  },
  'B': {
    w: 54,
    advance: 64,
    d: "M 4 0 H 35 C 44 0 52 6 52 16 C 52 24 47 30 40 33 C 48 37 54 44 54 55 C 54 70 44 80 34 80 H 4 C 1 80 0 77 0 72 V 8 C 0 3 1 0 4 0 Z M 16 15 H 34 C 38 15 40 17 40 21 C 40 25 38 27 34 27 H 16 Z M 16 41 H 35 C 39 41 41 45 41 53 C 41 61 39 65 35 65 H 16 Z"
  },
  'C': {
    w: 52,
    advance: 62,
    d: "M 18 0 H 43 C 48 0 52 4 52 9 C 52 14 48 18 43 18 H 36 C 30 18 16 18 16 26 V 54 C 16 62 30 62 36 62 H 43 C 48 62 52 66 52 71 C 52 76 48 80 43 80 H 18 C 12 80 0 74 0 60 V 20 C 0 6 12 0 18 0 Z"
  },
  'D': {
    w: 54,
    advance: 64,
    d: "M 4 0 H 35 C 45 0 54 8 54 24 V 56 C 54 72 45 80 35 80 H 4 C 1 80 0 77 0 72 V 8 C 0 3 1 0 4 0 Z M 16 16 H 34 C 38 16 40 19 40 26 V 54 C 40 61 38 64 34 64 H 16 Z"
  },
  'E': {
    w: 48,
    advance: 58,
    d: "M 4 0 H 44 C 48 0 52 4 52 9 C 52 14 48 17 44 17 H 16 V 32 H 36 C 41 32 45 35 45 40 C 45 45 41 48 36 48 H 16 V 63 H 44 C 48 63 52 67 52 71 C 52 76 48 80 44 80 H 4 C 1 80 0 77 0 72 V 8 C 0 3 1 0 4 0 Z"
  },
  'F': {
    w: 47,
    advance: 57,
    d: "M 4 0 H 44 C 48 0 52 4 52 9 C 52 14 48 17 44 17 H 16 V 32 H 36 C 41 32 45 35 45 40 C 45 45 41 48 36 48 H 16 V 72 C 16 77 13 80 8 80 C 3 80 0 77 0 72 V 8 C 0 3 1 0 4 0 Z"
  },
  'G': {
    w: 54,
    advance: 64,
    d: "M 18 0 H 43 C 48 0 52 4 52 9 C 52 14 48 18 43 18 H 36 C 30 18 16 18 16 26 V 54 C 16 62 30 62 36 62 H 38 V 46 H 29 C 25 46 22 43 22 39 C 22 35 25 32 29 32 H 45 C 50 32 54 36 54 41 V 72 C 54 77 50 80 45 80 H 18 C 12 80 0 74 0 60 V 20 C 0 6 12 0 18 0 Z"
  },
  'H': {
    w: 57,
    advance: 67,
    d: "M 4 0 H 12 C 16 0 19 3 19 8 V 32 H 35 V 8 C 35 3 38 0 42 0 H 50 C 54 0 57 3 57 8 V 72 C 57 77 54 80 50 80 H 42 C 38 80 35 77 35 72 V 48 H 19 V 72 C 19 77 16 80 12 80 H 4 C 1 80 0 77 0 72 V 8 C 0 3 1 0 4 0 Z"
  },
  'I': {
    w: 24,
    advance: 34,
    d: "M 4 0 H 16 C 20 0 24 4 24 9 V 71 C 24 76 20 80 16 80 H 4 C 1 80 0 76 0 71 V 9 C 0 4 1 0 4 0 Z"
  },
  'J': {
    w: 49,
    advance: 59,
    d: "M 37 0 C 44 0 49 5 49 12 V 56 C 49 69 39 80 25 80 H 17 C 7 80 0 73 0 63 V 48 C 0 43 4 39 9 39 C 14 39 18 43 18 48 V 60 C 18 63 21 66 25 66 C 29 66 34 62 34 56 V 12 C 34 5 35 0 37 0 Z"
  },
  'K': {
    w: 55,
    advance: 65,
    d: "M 4 0 H 12 C 16 0 19 3 19 8 V 34 L 38 7 C 41 3 45 1 50 3 C 54 5 56 10 53 14 L 31 39 L 54 69 C 57 73 55 78 50 80 C 46 81 42 79 39 75 L 22 51 L 19 55 V 72 C 19 77 16 80 12 80 H 4 C 1 80 0 77 0 72 V 8 C 0 3 1 0 4 0 Z"
  },
  'L': {
    w: 54,
    advance: 64,
    d: "M 4 0 H 12 C 16 0 19 3 19 8 V 64 H 46 C 51 64 54 67 54 72 C 54 77 51 80 46 80 H 12 C 4 80 0 73 0 64 V 8 C 0 3 1 0 4 0 Z"
  },
  'M': {
    w: 71,
    advance: 81,
    d: "M 4 0 H 11 C 15 0 18 3 19 7 L 34 46 L 49 7 C 50 3 53 0 57 0 H 64 C 68 0 71 3 71 8 V 72 C 71 77 68 80 64 80 H 57 C 53 80 50 77 50 72 V 32 L 39 62 C 37 66 31 66 29 62 L 18 32 V 72 C 18 77 15 80 11 80 H 4 C 1 80 0 77 0 72 V 8 C 0 3 1 0 4 0 Z"
  },
  'N': {
    w: 59,
    advance: 69,
    d: "M 4 0 H 12 C 16 0 19 3 19 8 V 26 L 39 60 V 8 C 39 3 42 0 47 0 H 52 C 56 0 59 3 59 8 V 72 C 59 77 56 80 52 80 H 44 C 40 80 37 77 37 72 V 54 L 17 20 V 72 C 17 77 14 80 9 80 H 4 C 1 80 0 77 0 72 V 8 C 0 3 1 0 4 0 Z"
  },
  'O': {
    w: 54,
    advance: 64,
    d: "M 18 0 H 36 C 40 4 43 10 44 13 C 48 13 54 16 54 22 V 58 C 54 64 48 67 44 67 C 43 70 40 76 36 80 H 18 C 14 76 11 70 10 67 C 6 67 0 64 0 58 V 22 C 0 16 6 13 10 13 C 11 10 14 4 18 0 Z M 16 16 H 38 C 40 16 41 18 41 21 V 59 C 41 62 40 64 38 64 H 16 C 14 64 13 62 13 59 V 21 C 13 18 14 16 16 16 Z"
  },
  'P': {
    w: 52,
    advance: 62,
    d: "M 4 0 H 35 C 45 0 52 6 52 18 C 52 30 45 36 35 36 H 16 V 72 C 16 77 13 80 8 80 C 3 80 0 77 0 72 V 8 C 0 3 1 0 4 0 Z M 16 15 H 33 C 36 15 38 17 38 20 C 38 23 36 25 33 25 H 16 Z"
  },
  'Q': {
    w: 54,
    advance: 64,
    d: "M 18 0 H 36 C 40 4 43 10 44 13 C 48 13 54 16 54 22 V 58 C 54 64 48 67 44 67 C 43 70 40 76 36 80 H 18 C 14 76 11 70 10 67 C 6 67 0 64 0 58 V 22 C 0 16 6 13 10 13 C 11 10 14 4 18 0 Z M 16 16 H 38 C 40 16 41 18 41 21 V 59 C 41 62 40 64 38 64 H 16 C 14 64 13 62 13 59 V 21 C 13 18 14 16 16 16 Z"
  },
  'R': {
    w: 52,
    advance: 62,
    d: "M 4 0 H 35 C 44 0 52 6 52 17 C 52 26 46 32 38 34 C 42 36 46 40 48 46 L 51 71 C 52 76 48 80 43 80 C 39 80 36 76 35 71 L 33 50 C 32 46 29 44 24 44 H 16 V 72 C 16 77 13 80 8 80 C 3 80 0 77 0 72 V 8 C 0 3 1 0 4 0 Z M 16 15 H 34 C 37 15 39 17 39 20 C 39 23 37 25 34 25 H 16 Z"
  },
  'S': {
    w: 52,
    advance: 62,
    d: "M 16 0 H 42 C 47 0 51 4 51 9 C 51 14 47 17 42 17 H 18 C 15 17 14 19 14 22 C 14 26 16 28 20 29 L 36 33 C 46 35 52 41 52 51 C 52 65 43 80 28 80 H 8 C 3 80 0 76 0 71 C 0 66 3 63 8 63 H 30 C 34 63 36 61 36 58 C 36 54 34 52 30 51 L 14 47 C 4 45 0 39 0 29 C 0 15 9 0 16 0 Z"
  },
  'T': {
    w: 56,
    advance: 66,
    d: "M 4 0 H 48 C 52 0 56 4 56 9 C 56 14 52 17 48 17 H 35 V 72 C 35 77 32 80 27 80 C 22 80 19 77 19 72 V 17 H 4 C 1 17 0 14 0 9 C 0 4 1 0 4 0 Z"
  },
  'U': {
    w: 59,
    advance: 69,
    d: "M 4 0 H 12 C 16 0 19 3 19 8 V 56 C 19 62 23 65 29 65 C 35 65 39 62 39 56 V 8 C 39 3 42 0 47 0 H 52 C 56 0 59 3 59 8 V 58 C 59 72 48 80 32 80 C 16 80 4 72 4 58 V 8 C 4 3 3 0 4 0 Z"
  },
  'V': {
    w: 60,
    advance: 70,
    d: "M 4 0 H 12 C 16 0 19 3 19 8 L 29 64 L 39 8 C 40 3 43 0 48 0 H 54 C 58 0 61 4 59 9 L 36 75 C 34 79 30 81 26 80 C 22 79 19 75 17 71 L 0 9 C -1 4 2 0 4 0 Z"
  },
  'W': {
    w: 86,
    advance: 96,
    d: "M 4 0 H 11 C 15 0 18 3 19 8 V 56 C 19 61 22 64 26 64 C 30 64 33 61 33 56 V 16 C 33 11 36 8 40 8 H 44 C 48 8 51 11 51 16 V 56 C 51 61 54 64 58 64 C 62 64 65 61 65 56 V 8 C 65 3 68 0 72 0 H 79 C 83 0 86 3 86 8 V 58 C 86 72 75 80 61 80 C 53 80 46 76 42 70 C 38 76 31 80 23 80 C 9 80 0 72 0 58 V 8 C 0 3 1 0 4 0 Z"
  },
  'X': {
    w: 64,
    advance: 74,
    d: "M 4 0 H 12 C 16 0 18 3 20 7 L 31 29 L 42 7 C 44 3 46 0 50 0 H 58 C 62 0 65 4 63 9 L 41 40 L 63 71 C 65 76 62 80 58 80 H 50 C 46 80 44 77 42 73 L 31 51 L 20 73 C 18 77 16 80 12 80 H 4 C 0 80 -3 76 -1 71 L 21 40 L -1 9 C -3 4 0 0 4 0 Z"
  },
  'Y': {
    w: 64,
    advance: 74,
    d: "M 4 0 H 11 C 15 0 18 3 20 7 L 31 34 L 42 7 C 44 3 47 0 51 0 H 58 C 62 0 65 4 63 9 L 38 46 V 72 C 38 77 35 80 30 80 H 26 C 21 80 18 77 18 72 V 46 L -1 9 C -3 4 0 0 4 0 Z"
  },
  'Z': {
    w: 54,
    advance: 64,
    d: "M 4 0 H 46 C 50 0 54 4 54 9 C 54 13 52 16 48 18 L 19 63 H 46 C 50 63 54 67 54 72 C 54 77 50 80 46 80 H 4 C 0 80 -4 76 -4 71 C -4 67 -2 64 2 62 L 31 17 H 4 C 0 17 -4 13 -4 9 C -4 4 0 0 4 0 Z"
  },
};

function getMasterGlyphAdvance(char: string): number {
  const c = char.toUpperCase();
  if (c === " ") return 26;
  return GLYPHS[c]?.advance ?? 64;
}

function renderMasterGlyph(char: string, x: number, y: number, key: string | number) {
  const c = char.toUpperCase();
  const glyph = GLYPHS[c];
  if (!glyph) return null;

  return (
    <g key={key} transform={`translate(${x}, ${y})`}>
      <path fillRule="evenodd" d={glyph.d} />
    </g>
  );
}

/**
 * Single Line Master Modular Title (e.g. "PROJECTS", "EXPERIENCE", "PLAYGROUND", "CONTACT", "ABOUT")
 */
export function ModularTitle({
  text,
  className = "w-full max-w-[340px] sm:max-w-[480px] md:max-w-[620px] lg:max-w-[740px] h-auto block select-none text-[#171717] mx-auto",
}: {
  text: string;
  className?: string;
}) {
  const chars = text.split("");
  const totalWidth = chars.reduce((sum, ch) => sum + getMasterGlyphAdvance(ch), 0) - 10;
  const viewBoxWidth = Math.max(totalWidth + 40, 200);
  const startX = (viewBoxWidth - totalWidth) / 2;

  let currentX = startX;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} 100`}
      className={className}
      fill="currentColor"
      aria-label={text}
    >
      {chars.map((ch, idx) => {
        const x = currentX;
        currentX += getMasterGlyphAdvance(ch);
        return renderMasterGlyph(ch, x, 10, `t-${idx}`);
      })}
    </svg>
  );
}

/**
 * Two-Line Master Modular Subheading (e.g. "FRONTEND" / "WEB APPS", "BACKEND" / "& AI ENGINE")
 */
export function ModularSubheading({
  line1,
  line2,
  className = "w-full max-w-[340px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[620px] h-auto block select-none text-[#171717] mx-auto",
}: {
  line1: string;
  line2: string;
  className?: string;
}) {
  const line1Chars = line1.split("");
  const line1Width = line1Chars.reduce((sum, ch) => sum + getMasterGlyphAdvance(ch), 0) - 10;

  const line2Chars = line2.split("");
  const line2Width = line2Chars.reduce((sum, ch) => sum + getMasterGlyphAdvance(ch), 0) - 10;

  const maxLineWidth = Math.max(line1Width, line2Width);
  const viewBoxWidth = maxLineWidth + 40;

  const startX1 = (viewBoxWidth - line1Width) / 2;
  const startX2 = (viewBoxWidth - line2Width) / 2;

  let currentX1 = startX1;
  let currentX2 = startX2;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} 200`}
      className={className}
      fill="currentColor"
      aria-label={`${line1} ${line2}`}
    >
      {/* LINE 1 */}
      {line1Chars.map((ch, idx) => {
        const x = currentX1;
        currentX1 += getMasterGlyphAdvance(ch);
        return renderMasterGlyph(ch, x, 10, `l1-${idx}`);
      })}

      {/* LINE 2 */}
      {line2Chars.map((ch, idx) => {
        const x = currentX2;
        currentX2 += getMasterGlyphAdvance(ch);
        return renderMasterGlyph(ch, x, 108, `l2-${idx}`);
      })}
    </svg>
  );
}
