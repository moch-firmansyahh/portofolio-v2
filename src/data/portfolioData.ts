import type { Project } from "@/types/project";
import type { SkillCategory } from "@/types/skill";
import type { ExperienceItem } from "@/types/experience";
import type { PersonalInfo } from "@/types/profile";

export type { Project, SkillCategory, ExperienceItem, PersonalInfo };

export const PERSONAL_INFO: PersonalInfo = {
  name: "Moch. Firmansyah",
  shortName: "Firman",
  role: "Full Stack Developer",
  tagline: "Code that looks good. Systems that stay scalable & safe.",
  about:
    "Mahasiswa Informatika Universitas Telkom (IPK 3.29/4.00) yang berfokus pada Software Engineering dan pengembangan web fullstack. Berpengalaman membangun SimGizi, Voluntrip, dan Manajemen Kontrakan Pa Iman, menggunakan React, Next.js, TypeScript, Python, dan Go, serta menjabat sebagai Kepala Divisi Web Development dan magang sebagai Full Stack Developer di Reacteev. Juara 3 CCI THE HACK melalui SimGizi. Meraih AWS Certified AI Practitioner, Google AI Professional Certificate, dan Google Network Security Specialization.",
  subheadline:
    "Mahasiswa Informatika Universitas Telkom (IPK 3.29/4.00) yang berfokus pada Software Engineering dan pengembangan web fullstack. Berpengalaman membangun SimGizi, Voluntrip, dan Manajemen Kontrakan Pa Iman, serta menjabat sebagai Kepala Divisi Web Development (CCI UNITEL) dan Full Stack Developer Intern di Reacteev.",
  bio: `Sebagai mahasiswa **Sarjana Informatika di Universitas Telkom** (IPK 3.29/4.00), saya berfokus pada Software Engineering dan pengembangan web fullstack modern.

Saya memiliki pengalaman langsung dalam membangun tiga aplikasi web full-stack utama:
- **SimGizi**: Aplikasi web deteksi dini stunting & gizi buruk balita berbasis AI (Gemini API & antropometri WHO) yang meraih **Juara 3 CCI THE HACK (2026)**.
- **Voluntrip**: Platform perencana perjalanan interaktif dengan visualisasi peta rute dan manajemen anggaran terintegrasi.
- **Manajemen Kontrakan Pa Iman**: Sistem manajemen terpusat administrasi dan pencatatan keuangan properti sewa kamar.

Saat ini, saya aktif berkontribusi sebagai **Full Stack Developer Intern di Reacteev** dan memimpin rekan-rekan mahasiswa sebagai **Kepala Divisi Web Development di CCI UNITEL Universitas Telkom**. Saya juga tersertifikasi **AWS Certified AI Practitioner**, **Google AI Professional Certificate**, dan **Google Network Security Specialization**, memadukan arsitektur web modern dengan prinsip secure coding dan skalabilitas sistem.`,
  status: "Available for opportunities",
  location: "Sumedang, Indonesia",
  email: "firmanajah366@gmail.com",
  phone: "+62 811-2222-136",
  resumeUrl: "#contact",
  socialLinks: {
    github: "https://github.com/mochfirmansyahh",
    linkedin: "https://linkedin.com/in/moch-firmansyah-532122323",
    instagram: "https://www.instagram.com/frmzyxx/",
    tiktok: "https://www.tiktok.com/@frmnzy_",
  },
  stats: [
    { label: "Tahun Belajar & Berkarya", value: "2+" },
    { label: "Proyek Web Full-Stack", value: "3" },
    { label: "Lighthouse Performance", value: "98%" },
    { label: "Dedikasi & Presisi", value: "100%" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Front-End Web Development",
    description: "Keahlian utama dalam membangun antarmuka web modern, responsif, dan interaktif.",
    skills: [
      { name: "HTML", level: "Expert", highlight: true },
      { name: "CSS", level: "Expert", highlight: true },
      { name: "JavaScript", level: "Expert", highlight: true },
      { name: "TypeScript", level: "Expert", highlight: true },
      { name: "React", level: "Expert", highlight: true },
      { name: "Next.js", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Expert", highlight: true },
      { name: "Responsive Design", level: "Expert" },
      { name: "Fetch API & Axios", level: "Expert" },
      { name: "State Management", level: "Advanced" },
      { name: "React Hook Form", level: "Advanced" },
      { name: "Framer Motion", level: "Advanced", highlight: true },
      { name: "PWA (Progressive Web Apps)", level: "Advanced" },
      { name: "WebSocket", level: "Proficient" },
    ],
  },
  {
    title: "Back-End Development",
    description: "Perancangan RESTful API, arsitektur server-side scalable, dan integrasi AI.",
    skills: [
      { name: "REST API Architecture", level: "Expert", highlight: true },
      { name: "Node.js / Express.js", level: "Advanced", highlight: true },
      { name: "Spring Boot", level: "Proficient" },
      { name: "Laravel", level: "Proficient" },
      { name: "Supabase", level: "Advanced", highlight: true },
      { name: "Gemini API Integration", level: "Advanced", highlight: true },
      { name: "MVC & Layered Architecture", level: "Advanced" },
      { name: "Middleware & Error Handling", level: "Advanced" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Bahasa pemrograman untuk algoritma, logika komputasi, dan rekayasa perangkat lunak.",
    skills: [
      { name: "C++", level: "Advanced", highlight: true },
      { name: "Python", level: "Advanced", highlight: true },
      { name: "Java", level: "Proficient", highlight: true },
      { name: "Go (Golang)", level: "Proficient", highlight: true },
      { name: "PHP", level: "Proficient" },
    ],
  },
  {
    title: "Database & Storage",
    description: "Perancangan skema relasional, manajemen query, ORM, dan migrasi basis data.",
    skills: [
      { name: "SQL", level: "Expert", highlight: true },
      { name: "MySQL", level: "Advanced", highlight: true },
      { name: "PostgreSQL", level: "Advanced", highlight: true },
      { name: "Prisma ORM", level: "Advanced", highlight: true },
      { name: "Schema Design & Modeling", level: "Advanced" },
      { name: "Database Indexing & Migrations", level: "Advanced" },
    ],
  },
  {
    title: "Authentication & Security",
    description: "Prinsip secure coding, kontrol akses, proteksi injeksi, dan kepatuhan keamanan.",
    skills: [
      { name: "JWT (JSON Web Token)", level: "Advanced", highlight: true },
      { name: "OAuth 2.0", level: "Advanced", highlight: true },
      { name: "RBAC (Role-Based Access Control)", level: "Advanced" },
      { name: "SQL Injection Prevention", level: "Advanced", highlight: true },
      { name: "Password Hashing & Salting", level: "Advanced" },
      { name: "Network Security & Hardening", level: "Advanced", highlight: true },
    ],
  },
  {
    title: "Deployment & Testing",
    description: "Containerization, cloud platform deployment, otomasi rilis, dan validasi fungsional.",
    skills: [
      { name: "Docker", level: "Proficient", highlight: true },
      { name: "Vercel Cloud Deployment", level: "Expert", highlight: true },
      { name: "Environment Variables Management", level: "Expert" },
      { name: "Linux Server Administration", level: "Proficient" },
      { name: "Unit Testing & QA", level: "Proficient" },
      { name: "API Testing & Automation", level: "Advanced", highlight: true },
    ],
  },
  {
    title: "Developer Tools",
    description: "Tooling ekosistem pengembangan modern untuk produktivitas dan kolaborasi.",
    skills: [
      { name: "Git / GitHub", level: "Expert", highlight: true },
      { name: "VS Code", level: "Expert", highlight: true },
      { name: "Postman", level: "Advanced", highlight: true },
      { name: "Antigravity", level: "Advanced", highlight: true },
      { name: "Figma", level: "Advanced", highlight: true },
      { name: "Wireshark", level: "Proficient" },
      { name: "MySQL Workbench", level: "Advanced" },
      { name: "Beekeeper Studio", level: "Advanced" },
      { name: "Notion & Trello", level: "Advanced" },
    ],
  },
  {
    title: "Soft Skills & Professional",
    description: "Kemampuan interpersonal, pemecahan masalah analitis, dan manajemen tim.",
    skills: [
      { name: "Technical Problem-Solving", level: "Expert", highlight: true },
      { name: "Analytical Thinking", level: "Expert", highlight: true },
      { name: "Team Collaboration", level: "Expert", highlight: true },
      { name: "Time Management", level: "Advanced" },
      { name: "Client Management", level: "Advanced" },
      { name: "Self-Learning & Research", level: "Expert", highlight: true },
      { name: "Technical Documentation", level: "Advanced" },
      { name: "Presentation & Communication", level: "Advanced" },
      { name: "Attention to Detail", level: "Expert", highlight: true },
    ],
  },
  {
    title: "Achievements & Certifications",
    description: "Penghargaan kompetisi hackathon teknologi dan sertifikasi profesional industri.",
    skills: [
      {
        name: "Juara 3 CCI THE HACK (2026)",
        level: "Competition Award",
        issuer: "Central Computer Improvement (CCI)",
        issueDate: "Agu 2026",
        credentialId: "CCI-HACK-SIMGI-03",
        highlight: true,
      },
      {
        name: "AWS Certified AI Practitioner",
        level: "Professional Certification",
        issuer: "Amazon Web Services (AWS)",
        issueDate: "2026",
        credentialId: "AWS-AIP-2026",
        highlight: true,
      },
      {
        name: "Google AI Professional Certificate",
        level: "Professional Specialization",
        issuer: "Google",
        issueDate: "Jun 2026",
        credentialId: "LHOBD1DIAJJI",
        highlight: true,
      },
      {
        name: "Google Network Security Specialization",
        level: "Professional Specialization",
        issuer: "Google",
        issueDate: "Jun 2026",
        credentialId: "CJ9Y8P9DNC7C",
        highlight: true,
      },
      {
        name: "AI Front-End Developer Track",
        level: "Professional Training",
        issuer: "IDCamp",
        issueDate: "2026",
        credentialId: "IDCAMP-AIFE-2026",
        highlight: true,
      },
      {
        name: "Cloud Architecture & Data Design",
        level: "Professional Certificate",
        issuer: "Dicoding Indonesia",
        issueDate: "2026",
        credentialId: "DICODING-CADD-2026",
        highlight: true,
      },
      {
        name: "Technical Training: GCC x Telkom TUNC-2",
        level: "Technical Certification",
        issuer: "GCC x Telkom University",
        issueDate: "2026",
        credentialId: "GCC-TUNC2-2026",
        highlight: true,
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "simgizi",
    title: "SimGizi",
    subtitle: "Aplikasi Deteksi Dini Gizi Buruk & Stunting Berbasis AI untuk Posyandu",
    description:
      "Aplikasi web berbasis AI untuk membantu petugas posyandu mendeteksi dini gizi buruk dan stunting pada balita usia 0–59 bulan, dengan Next.js, TypeScript, dan Tailwind CSS (live di Vercel). Dilengkapi engine Z-score otomatis standar WHO & Permenkes No. 2/2020 serta integrasi Gemini API.",
    longDescription:
      "SimGizi adalah aplikasi web inovatif berbasis kecerdasan buatan (AI) yang dirancang khusus untuk mempermudah kader dan petugas Posyandu dalam memantau tumbuh kembang balita (usia 0–59 bulan) serta mendeteksi dini indikasi gizi buruk dan stunting. Mengimplementasikan engine perhitungan antropometri Z-score otomatis (BB/U, TB/U, BB/TB) sesuai regulasi baku WHO dan Permenkes No. 2 Tahun 2020, dilengkapi rekomendasi nutrisi cerdas via Gemini API dengan fail-safe protection, dashboard monitoring tren kesehatan anak, serta ekspor laporan rekapitulasi data pemeriksaan ke format PDF. Proyek ini berhasil mengantarkan Moch. Firmansyah meraih Juara 3 dalam ajang kompetisi bergengsi CCI THE HACK (2026).",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "AI / Health-Tech",
      "Z-Score Engine",
      "PDF Export",
      "Vercel",
    ],
    category: "AI & Health Web App",
    featured: true,
    image: "/projects/simgizi.png",
    demoUrl: "https://simgizi.vercel.app/",
    githubUrl: "https://github.com/mochfirmansyahh/simgizi",
    metrics: "Juara 3 CCI THE HACK • AI-Powered • WHO Z-Score Standard",
    highlights: [
      "Engine rule-based perhitungan Z-score otomatis (BB/U, TB/U, BB/TB) presisi tinggi sesuai standar baku WHO & Permenkes No. 2 Tahun 2020",
      "Integrasi Gemini API untuk rekomendasi tindak lanjut penanganan nutrisi dan medis balita dengan sistem fallback fail-safe",
      "Dashboard monitoring komprehensif: deteksi dini stunting, riwayat antropometri balita, dan ekspor laporan rekapitulasi PDF",
      "Meraih Juara 3 pada kompetisi hackathon teknologi bergengsi CCI THE HACK (2026)",
    ],
    year: "2026",
  },
  {
    id: "voluntrip",
    title: "Voluntrip",
    subtitle: "Aplikasi Perencana Trip, Rundown Perjalanan Interaktif & Manajemen Budget Kelompok",
    description:
      "Platform perencana perjalanan modern untuk menyusun jadwal kegiatan (rundown), mengelola anggaran (budgeting), dan melacak pengeluaran secara real-time dengan peta rute interaktif.",
    longDescription:
      "Voluntrip adalah platform perencana perjalanan modern yang dirancang untuk mempermudah traveler dan kelompok perjalanan dalam menyusun jadwal kegiatan (rundown), mengelola anggaran (budgeting), dan melacak pengeluaran secara real-time. Dengan antarmuka interaktif yang intuitif, Voluntrip memastikan itinerary bebas bentrok jam, fleksibel untuk diubah lewat fitur drag & drop, serta mudah dibagikan ke anggota trip lainnya.",
    tags: [
      "Next.js 16 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Dnd Kit",
      "PWA Ready",
      "JWT Auth",
      "Leaflet",
    ],
    category: "Web App",
    featured: true,
    image: "/projects/voluntrip.png",
    demoUrl: "https://voluntrip-five.vercel.app/",
    githubUrl: "https://github.com/moch-firmansyahh/voluntrip",
    metrics: "Drag & Drop • Real-time Budgeting • PWA Ready",
    highlights: [
      "Interactive Itinerary & Rundown Builder dengan Drag & Drop (Dnd-Kit) dan Auto-Reschedule sekuensial bebas tabrakan jam",
      "Autocomplete lokasi destinasi terintegrasi Photon OpenStreetMap API (Komoot) dan visualisasi titik peta Leaflet",
      "Expense Tracker, Budgeting & Split Bill kalkulator otomatis untuk pembagian tagihan rata (equal share) antar anggota trip",
      "Sistem Autentikasi JWT terenkripsi dengan HTTP-only cookie, opsi Ingat Saya 30 hari, dan instant logout",
      "Dukungan Progressive Web App (PWA Standalone), Traveloka-Style Splash Screen, serta Public Share Link dengan token unik",
    ],
    year: "2026",
  },
  {
    id: "manajemen-kontrakan-pa-iman",
    title: "Kontrakan Pa Iman",
    subtitle: "Sistem Manajemen Terpusat Administrasi Sewa Kos-Kosan & Keuangan",
    description:
      "Aplikasi web Full-Stack Digital Management yang dirancang khusus untuk pemilik kost dalam mengelola unit kamar, data penghuni (aktif & alumni), dan pencatatan riwayat pembayaran bulanan secara efisien, terstruktur, dan otomatis.",
    longDescription:
      "Kontrakan Pa Iman adalah sistem manajemen terpusat untuk operasional bisnis kos-kosan. Mempermudah pemilik properti dalam memantau unit kamar, mengelola data penyewa aktif dan alumni, mencatat riwayat transaksi keuangan bulanan, serta menyajikan dashboard analitik okupansi dan pendapatan secara real-time. Dibangun dengan arsitektur modern Next.js 16, Express.js 5, Prisma ORM, dan PostgreSQL untuk menyederhanakan operasional bisnis sewa properti.",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Express.js 5",
      "Prisma ORM",
      "PostgreSQL",
      "Shadcn UI",
      "JWT Auth",
      "PWA Ready",
    ],
    category: "Web App",
    featured: true,
    image: "/projects/manajemen-kontrakan.png",
    demoUrl: "https://manajemen-kontrakan-iman.vercel.app/",
    githubUrl: "https://github.com/moch-firmansyahh/manajemen-kost-v2",
    metrics: "Full-Stack • Real-time Stats • PWA Ready",
    highlights: [
      "Dashboard Ringkasan Real-Time dengan 4 Stat Card interaktif, monitoring tagihan sewa pending, dan popover notifikasi",
      "Manajemen Unit Kamar: Filter & instant search nomor/tipe kamar, modal operasi CRUD, serta histori lengkap transaksi kamar",
      "Manajemen Penghuni: Pengelompokan tab Penghuni Aktif & Alumni, profil identitas lengkap, dan sistem checkout otomatis",
      "Manajemen Pembayaran & Struk: Pencatatan status tagihan sewa bulanan, filter periode transaksi, dan halaman cetak invoice",
      "Keunggulan UI/UX: Dual Theme (Dark/Light mode) mulus, animasi welcome screen & loader kustom, serta instalasi PWA standalone",
    ],
    year: "2026",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Nov 2026 – Sekarang",
    role: "Full Stack Developer Intern",
    company: "Reacteev",
    location: "Indonesia",
    description:
      "Membantu merancang, mengembangkan, dan memelihara aplikasi web serta API sebagai Full Stack Developer Intern. Mengembangkan antarmuka front-end aplikasi web yang responsif dan terintegrasi dengan API, serta membangun dan memelihara layanan back-end beserta REST API untuk mendukung fitur aplikasi.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "REST API",
      "Full Stack Development",
    ],
    type: "Work",
  },
  {
    period: "Nov 2026 – Sekarang",
    role: "Kepala Divisi Web Development",
    company: "CCI UNITEL Universitas Telkom",
    location: "Bandung, Indonesia",
    description:
      "Memimpin divisi Web Development dan mengoordinasikan anggota, proyek, serta program belajar web. Mendorong kolaborasi lintas divisi untuk menjaga kualitas dan integrasi hasil pengembangan, serta menyusun agenda sesi belajar dan memantau perkembangan anggota divisi.",
    technologies: [
      "Web Development",
      "Leadership",
      "Project Management",
      "Software Architecture",
      "Team Mentorship",
    ],
    type: "Organization",
  },
  {
    period: "Feb 2026 – Nov 2026",
    role: "Study Group Front-End Web Developer",
    company: "CCI UNITEL Universitas Telkom",
    location: "Bandung, Indonesia",
    description:
      "Mengembangkan dan memelihara antarmuka pengguna interaktif untuk berbagai aplikasi web menggunakan HTML, CSS, JavaScript, dan React. Berkolaborasi dengan rekan lintas fungsi, termasuk UI/UX designer dan back-end developer, untuk memastikan integrasi sistem yang lancar. Menerapkan responsive design dan state management pada antarmuka aplikasi web.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
      "State Management",
    ],
    type: "Organization",
  },
  {
    period: "Nov 2025 – Des 2025",
    role: "Study Group Full Stack Web Developer",
    company: "CPS Laboratory Universitas Telkom",
    location: "Bandung, Indonesia",
    description:
      "Mengeksplorasi dan menerapkan konsep pengembangan web full-stack, menjembatani antarmuka front-end interaktif dengan sistem database back-end. Membangun aplikasi web fungsional menggunakan HTML, CSS, dan JavaScript yang terintegrasi dengan arsitektur server-side, serta mempraktikkan alur kerja full-stack mulai dari perancangan database hingga antarmuka pengguna.",
    technologies: [
      "HTML/CSS/JS",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
      "Database Design",
    ],
    type: "Organization",
  },
  {
    period: "Nov 2024 – Jun 2025",
    role: "Study Group Web Developer",
    company: "GDGoC Universitas Telkom",
    location: "Bandung, Indonesia",
    description:
      "Berperan aktif sebagai anggota Web Development Study Group di Google Developer Groups on Campus (GDGoC). Berpartisipasi dalam sesi belajar kelompok, diskusi teknis, dan proyek kolaboratif untuk memperdalam pemahaman front-end development dan praktik web terkini.",
    technologies: [
      "Web Development",
      "HTML/CSS",
      "JavaScript",
      "Collaboration",
      "Modern Web Practices",
    ],
    type: "Organization",
  },
];
