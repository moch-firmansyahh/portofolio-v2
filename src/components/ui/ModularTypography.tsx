"use client";

import React from "react";

/**
 * MASTER BESPOKE MODULAR TYPOGRAPHY ENGINE
 * 
 * Semua huruf dan simbol menggunakan bentuk geometris neo-brutalist khas portofolio:
 * - Huruf 'A': Loop melengkung khas dengan arch jam pasir dan lubang lingkaran di tengah (Signature).
 * - Huruf 'B': Double loop membulat khas.
 * - Huruf 'C', 'D', 'E', 'N', 'O', 'P', 'R', 'S', 'T', 'W', dll: 100% konsisten di seluruh halaman portofolio.
 * 
 * Standar koordinat glyph: Tinggi 80px.
 */

function renderMasterGlyph(char: string, x: number, y: number, key: string | number) {
  switch (char.toUpperCase()) {
    case "A":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 18 0 H 42 C 54 0 60 7 60 17 C 60 25 54 30 45 34 C 40 36 38 38 41 42 C 50 46 60 55 60 67 V 71 C 60 76 56 80 50 80 H 40 C 35 80 31 76 31 71 V 60 C 31 53 26 50 20 50 C 14 50 9 53 9 60 V 71 C 9 76 5 80 0 80 H -2 C -7 80 -10 76 -10 71 V 67 C -10 55 0 46 9 42 C 11 38 10 36 5 34 C -3 30 -9 25 -9 17 C -9 7 -2 0 10 0 Z M 16 16 C 16 21 20 25 25 25 C 30 25 34 21 34 16 C 34 11 30 7 25 7 C 20 7 16 11 16 16 Z"
            transform="translate(10, 0)"
          />
        </g>
      );
    case "B":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 8 0 H 42 C 53 0 60 7 60 18 C 60 25 54 31 46 34 C 55 38 61 45 61 57 C 61 70 52 80 41 80 H 8 C 3 80 0 76 0 71 V 9 C 0 4 3 0 8 0 Z M 18 14 H 38 C 43 14 45 18 45 22 C 45 26 43 29 38 29 H 18 Z M 18 41 H 40 C 45 41 47 45 47 55 C 47 62 45 66 40 66 H 18 Z"
          />
        </g>
      );
    case "C":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 18 0 H 46 C 52 0 56 4 56 10 V 18 C 56 24 52 28 46 28 H 26 C 21 28 18 31 18 36 V 44 C 18 49 21 52 26 52 H 46 C 52 52 56 56 56 62 V 70 C 56 76 52 80 46 80 H 18 C 7 80 0 73 0 62 V 18 C 0 7 7 0 18 0 Z"
          />
        </g>
      );
    case "D":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="80" rx="8" />
          <rect x="36" y="0" width="16" height="80" rx="8" />
          <rect x="12" y="4" width="28" height="18" rx="5" />
          <rect x="12" y="58" width="28" height="18" rx="5" />
        </g>
      );
    case "E":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="80" rx="8" />
          <rect x="12" y="0" width="38" height="16" rx="8" />
          <rect x="12" y="32" width="28" height="16" rx="5" />
          <rect x="12" y="64" width="38" height="16" rx="8" />
        </g>
      );
    case "F":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="80" rx="8" />
          <rect x="12" y="0" width="38" height="16" rx="8" />
          <rect x="12" y="32" width="28" height="16" rx="5" />
        </g>
      );
    case "G":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 18 0 H 48 C 56 0 62 6 62 14 V 20 C 62 25 58 27 54 27 H 26 C 21 27 18 29 18 34 V 46 C 18 51 21 53 26 53 H 42 V 40 H 34 C 30 40 28 38 28 34 V 27 C 28 23 30 21 34 21 H 50 C 56 21 60 25 60 31 V 66 C 60 74 54 80 46 80 H 18 C 7 80 0 73 0 62 V 18 C 0 7 7 0 18 0 Z"
          />
        </g>
      );
    case "H":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="80" rx="8" />
          <rect x="36" y="0" width="16" height="80" rx="8" />
          <rect x="12" y="31" width="28" height="18" rx="5" />
        </g>
      );
    case "I":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="44" height="16" rx="8" />
          <rect x="14" y="0" width="16" height="80" rx="8" />
          <rect x="0" y="64" width="44" height="16" rx="8" />
          <path d="M 14 20 C 14 16 8 16 0 16 H 14 Z" />
          <path d="M 30 20 C 30 16 36 16 44 16 H 30 Z" />
          <path d="M 14 60 C 14 64 8 64 0 64 H 14 Z" />
          <path d="M 30 60 C 30 64 36 64 44 64 H 30 Z" />
        </g>
      );
    case "J":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="24" y="0" width="16" height="64" rx="8" />
          <path
            fillRule="evenodd"
            d="M 24 54 C 24 70 14 80 0 80 C -12 80 -20 71 -20 60 H -4 C -4 65 -1 67 3 67 C 7 67 11 63 11 54 V 0 H 24 Z"
            transform="translate(14, 0)"
          />
        </g>
      );
    case "K":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="80" rx="8" />
          <rect x="24" y="6" width="16" height="42" rx="8" transform="rotate(-34 24 6)" />
          <rect x="16" y="38" width="16" height="44" rx="8" transform="rotate(34 16 38)" />
        </g>
      );
    case "L":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 8 0 H 22 C 26 0 28 2 28 7 V 60 H 54 C 58 60 60 62 60 66 V 73 C 60 77 58 80 54 80 H 8 C 4 80 0 76 0 71 V 9 C 0 4 4 0 8 0 Z"
          />
        </g>
      );
    case "M":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="80" rx="8" />
          <rect x="48" y="0" width="16" height="80" rx="8" />
          <rect x="24" y="0" width="16" height="54" rx="8" />
          <rect x="10" y="0" width="44" height="16" rx="8" />
        </g>
      );
    case "N":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 9 0 H 20 C 24 0 26 2 26 7 V 39 L 42 5 C 44 1 47 0 52 0 H 57 C 62 0 64 4 64 9 V 73 C 64 78 62 80 57 80 H 48 C 44 80 42 78 42 73 V 41 L 26 75 C 24 79 21 80 17 80 H 9 C 4 80 0 76 0 71 V 9 C 0 4 4 0 9 0 Z"
          />
        </g>
      );
    case "O":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 20 0 H 44 C 58 0 64 9 64 21 V 59 C 64 71 58 80 44 80 H 20 C 6 80 0 71 0 59 V 21 C 0 9 6 0 20 0 Z M 21 16 H 43 C 48 16 50 20 50 25 V 55 C 50 60 48 64 43 64 H 21 C 16 64 14 60 14 55 V 25 C 14 20 16 16 21 16 Z"
          />
        </g>
      );
    case "P":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 12 0 H 40 C 50 0 58 8 58 19 C 58 30 50 38 40 38 H 24 V 72 C 24 76 20 80 16 80 H 12 C 8 80 4 76 4 72 V 8 C 4 4 8 0 12 0 Z M 24 16 H 38 C 41 16 44 17 44 20 C 44 23 41 24 38 24 H 24 Z"
          />
        </g>
      );
    case "R":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 12 0 H 40 C 50 0 58 8 58 19 C 58 30 50 38 40 38 H 24 V 72 C 24 76 20 80 16 80 H 12 C 8 80 4 76 4 72 V 8 C 4 4 8 0 12 0 Z M 24 16 H 38 C 41 16 44 17 44 20 C 44 23 41 24 38 24 H 24 Z"
          />
          <rect x="22" y="36" width="16" height="44" rx="8" transform="rotate(-26 22 36)" />
        </g>
      );
    case "S":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 13 0 H 41 C 52 0 56 6.5 56 17.3 H 41 C 41 15 39 13 35 13 H 17 C 13 13 11 15 11 19.5 C 11 26 17 28 30 32.5 C 48 37 56 43 56 58.4 C 56 71.4 48 80 32 80 H 9 C -2 80 -6.5 73.5 -6.5 60.5 H 8.5 C 8.5 65 13 67 19.5 67 H 32 C 37 67 41 65 41 58.4 C 41 52 35 50 24 45.4 C 9 41 0 34.6 0 19.5 C 0 6.5 9 0 22 0 Z"
            transform="translate(4, 0)"
          />
        </g>
      );
    case "T":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 4 0 H 62 C 67 0 70 4 70 9 V 18 C 70 23 67 27 62 27 H 43 V 71 C 43 76 39 80 34 80 H 32 C 27 80 23 76 23 71 V 27 H 4 C 1 27 0 23 0 18 V 9 C 0 4 3 0 4 0 Z"
          />
        </g>
      );
    case "U":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 0 9 C 0 4 4 0 9 0 H 20 C 25 0 29 4 29 9 V 52 C 29 61 32 65 41 65 C 50 65 53 61 53 52 V 9 C 53 4 57 0 62 0 H 73 C 78 0 82 4 82 9 V 55 C 82 70 73 80 57 80 H 25 C 9 80 0 70 0 55 Z"
          />
        </g>
      );
    case "V":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="8" y="0" width="16" height="78" rx="8" transform="rotate(-15 8 0)" />
          <rect x="36" y="0" width="16" height="78" rx="8" transform="rotate(15 36 0)" />
        </g>
      );
    case "W":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="0" y="0" width="16" height="64" rx="8" />
          <rect x="28" y="0" width="16" height="64" rx="8" />
          <rect x="56" y="0" width="16" height="64" rx="8" />
          <path d="M 0 52 C 0 72 16 80 22 80 C 28 80 44 72 44 52 Z" />
          <path d="M 28 52 C 28 72 44 80 50 80 C 56 80 72 72 72 52 Z" />
        </g>
      );
    case "X":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="22" y="0" width="16" height="80" rx="8" transform="rotate(28 30 40)" />
          <rect x="22" y="0" width="16" height="80" rx="8" transform="rotate(-28 30 40)" />
        </g>
      );
    case "Y":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <path
            fillRule="evenodd"
            d="M 4 2 H 18 C 22 2 24 4 26 8 L 36 30 L 46 8 C 48 4 50 2 54 2 H 68 C 72 2 74 6 72 10 L 46 52 V 72 C 46 76 42 80 38 80 H 34 C 30 80 26 76 26 72 V 52 L 0 10 C -2 6 0 2 4 2 Z"
          />
        </g>
      );
    case "&":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="8" y="4" width="32" height="15" rx="7.5" />
          <rect x="0" y="12" width="15" height="26" rx="7.5" />
          <rect x="8" y="32" width="30" height="15" rx="7.5" />
          <rect x="26" y="42" width="15" height="34" rx="7.5" />
          <rect x="4" y="64" width="36" height="15" rx="7.5" />
        </g>
      );
    case "-":
      return (
        <g key={key} transform={`translate(${x}, ${y})`}>
          <rect x="4" y="32" width="26" height="16" rx="8" />
        </g>
      );
    default:
      return null;
  }
}

function getMasterGlyphAdvance(char: string): number {
  switch (char.toUpperCase()) {
    case "U":
      return 84;
    case "W":
      return 78;
    case "Y":
      return 74;
    case "T":
      return 72;
    case "M":
      return 68;
    case "G":
    case "O":
      return 66;
    case "A":
    case "B":
    case "L":
      return 64;
    case "V":
    case "X":
      return 62;
    case "C":
      return 60;
    case "N":
    case "K":
      return 58;
    case "H":
    case "R":
    case "D":
      return 56;
    case "E":
    case "F":
    case "P":
    case "S":
      return 54;
    case "&":
      return 48;
    case "I":
      return 46;
    case "J":
      return 44;
    case "-":
      return 36;
    case " ":
      return 26;
    default:
      return 50;
  }
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
  const totalWidth = chars.reduce((sum, ch) => sum + getMasterGlyphAdvance(ch), 0);
  const viewBoxWidth = Math.max(totalWidth + 24, 200);
  const startX = (viewBoxWidth - totalWidth) / 2;

  let currentX = startX;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} 86`}
      className={className}
      fill="currentColor"
      aria-label={text}
    >
      {chars.map((ch, idx) => {
        const x = currentX;
        currentX += getMasterGlyphAdvance(ch);
        return renderMasterGlyph(ch, x, 3, `t-${idx}`);
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
  const line1Width = line1Chars.reduce((sum, ch) => sum + getMasterGlyphAdvance(ch), 0);

  const line2Chars = line2.split("");
  const line2Width = line2Chars.reduce((sum, ch) => sum + getMasterGlyphAdvance(ch), 0);

  const maxLineWidth = Math.max(line1Width, line2Width);
  const viewBoxWidth = maxLineWidth + 32;

  const startX1 = (viewBoxWidth - line1Width) / 2;
  const startX2 = (viewBoxWidth - line2Width) / 2;

  let currentX1 = startX1;
  let currentX2 = startX2;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} 195`}
      className={className}
      fill="currentColor"
      aria-label={`${line1} ${line2}`}
    >
      {/* LINE 1 */}
      {line1Chars.map((ch, idx) => {
        const x = currentX1;
        currentX1 += getMasterGlyphAdvance(ch);
        return renderMasterGlyph(ch, x, 6, `l1-${idx}`);
      })}

      {/* LINE 2 */}
      {line2Chars.map((ch, idx) => {
        const x = currentX2;
        currentX2 += getMasterGlyphAdvance(ch);
        return renderMasterGlyph(ch, x, 105, `l2-${idx}`);
      })}
    </svg>
  );
}
