"use client";

import MeasurementRuler from "./MeasurementRuler";

/**
 * Footer
 * Menggantikan footer teks raksasa dengan tape penggaris arsitektural (MeasurementRuler)
 * persis seperti yang ada di topbar.
 */
export default function Footer() {
  return (
    <footer className="w-full relative z-20 select-none bg-white">
      <MeasurementRuler position="bottom" />
    </footer>
  );
}
