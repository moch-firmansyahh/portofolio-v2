"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Home } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavItem {
  key: string;
  nameEn: string;
  nameId: string;
  href: string;
  iconType: "home" | "asterisk" | "casestudy" | "services" | "journal" | "playground" | "contact";
}

const NAV_ITEMS: NavItem[] = [
  { key: "home", nameEn: "Home", nameId: "Beranda", href: "/", iconType: "home" },
  { key: "about", nameEn: "About", nameId: "Tentang", href: "/about", iconType: "asterisk" },
  { key: "skills", nameEn: "Skills", nameId: "Keahlian", href: "/skills", iconType: "services" },
  { key: "projects", nameEn: "Projects", nameId: "Proyek", href: "/projects", iconType: "casestudy" },
  { key: "experience", nameEn: "Experience", nameId: "Pengalaman", href: "/experience", iconType: "journal" },
  { key: "playground", nameEn: "Playground", nameId: "Playground", href: "/playground", iconType: "playground" },
  { key: "contact", nameEn: "Contact", nameId: "Kontak", href: "/contact", iconType: "contact" },
];

function NavIcon({ type, className = "" }: { type: NavItem["iconType"]; className?: string }) {
  switch (type) {
    case "home":
      return <Home className={`w-3.5 h-3.5 fill-current ${className}`} />;
    case "asterisk":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "services":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M6 8c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2-1 3.8-2.5 4.8 1.5 1 2.5 2.8 2.5 4.8 0 3.3-2.7 6-6 6s-6-2.7-6-6c0-2 1-3.8 2.5-4.8C7 11.8 6 10 6 8z" />
        </svg>
      );
    case "casestudy":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M4 6h16v3H4zM7 11h10v2H7zM4 15h16v3H4z" />
        </svg>
      );
    case "journal":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className}>
          <path d="M12 22V10M12 10L6 4M12 10l6-6M6 4h3M18 4h-3" />
        </svg>
      );
    case "playground":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M3 21h18v-5h-6v-5h-6V6H3z" />
        </svg>
      );
    case "contact":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If clicking Home while already on Home page (/), smoothly scroll to top
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white select-none">
      {/* 1. Main Topbar */}
      <div className="h-12 md:h-13 border-b-2 border-black flex items-stretch justify-between px-0 overflow-x-auto scrollbar-none bg-white">
        {/* Left: Nav Tabs directly from the left edge: Home, About, Skills, Projects, Experience, Contact */}
        <div className="flex items-stretch shrink-0">
          <nav className="flex items-stretch shrink-0">
            {NAV_ITEMS.map((item) => {
              // Active state is strictly based on the current page route, NOT scroll position!
              const isActive =
                item.key === "home"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const label = language === "ID" ? item.nameId : item.nameEn;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`h-full px-3.5 sm:px-4.5 flex items-center gap-1.5 text-xs sm:text-[13px] font-black uppercase tracking-wider transition-colors shrink-0 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#00C2FF] text-black border-r-2 border-black"
                      : "text-neutral-800 hover:bg-neutral-100 border-r border-neutral-300"
                  }`}
                >
                  <NavIcon type={item.iconType} className={isActive ? "text-black" : "text-neutral-800"} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Language Selector (EN / ID), Badge EM & Heart Contact Button (NO PH, NO F, NO BUY NUDGE) */}
        <div className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 shrink-0">
          {/* Interactive Language Selector (EN | ID) */}
          <div className="flex items-center border-2 border-black rounded-md overflow-hidden bg-white shadow-xs text-xs font-black">
            <button
              onClick={() => setLanguage("EN")}
              className={`px-2 py-1 transition-colors cursor-pointer ${
                language === "EN" ? "bg-[#00C2FF] text-black" : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              EN
            </button>
            <div className="w-[1.5px] h-full bg-black" />
            <button
              onClick={() => setLanguage("ID")}
              className={`px-2 py-1 transition-colors cursor-pointer ${
                language === "ID" ? "bg-[#00C2FF] text-black" : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              ID
            </button>
          </div>

          {/* Badge: EM only */}
          <div className="hidden xs:flex w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 border border-neutral-300 items-center justify-center text-[10px] sm:text-[11px] font-bold text-neutral-700 select-none">
            EM
          </div>

          {/* Heart Contact Pill Button */}
          <a
            href="#contact"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="ml-1 px-3 sm:px-3.5 py-1.5 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white text-black font-extrabold text-[11px] sm:text-xs tracking-wider flex items-center gap-1.5 transition-colors shadow-[1px_1px_0px_#000] cursor-pointer shrink-0"
          >
            <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
            <span>{t("Contact", "Kontak")}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
