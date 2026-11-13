import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN || "",
});

async function syncCvToTurso() {
  console.log("⚡ Starting Sync from CV_Moch_Firmansyah.md to Turso Database...");

  // 1. UPDATE PROFILE
  console.log("--> Syncing [profile] table...");
  const profileData = {
    id: 1,
    name: "Moch. Firmansyah",
    short_name: "Firman",
    role: "Full Stack Developer",
    tagline: "Code that looks good. Systems that stay scalable & safe.",
    headline: "Full Stack Developer & Software Engineering Enthusiast",
    subheadline:
      "Mahasiswa Informatika Universitas Telkom (IPK 3.29/4.00) yang berfokus pada Software Engineering dan pengembangan web fullstack. Berpengalaman membangun SimGizi, Voluntrip, dan Manajemen Kontrakan Pa Iman, serta menjabat sebagai Kepala Divisi Web Development (CCI UNITEL) dan Full Stack Developer Intern di Reacteev.",
    about:
      "Mahasiswa Informatika Universitas Telkom (IPK 3.29/4.00) yang berfokus pada Software Engineering dan pengembangan web fullstack. Berpengalaman membangun tiga aplikasi web full-stack: SimGizi, Voluntrip, dan Manajemen Kontrakan Pa Iman, menggunakan React, Next.js, TypeScript, Python, dan Go, serta menjabat sebagai Kepala Divisi Web Development dan magang sebagai Full Stack Developer di Reacteev. Juara 3 CCI THE HACK melalui SimGizi. Meraih AWS Certified AI Practitioner, Google AI Professional Certificate, dan Google Network Security Specialization. Terbiasa berkolaborasi dengan UI/UX designer dan backend developer untuk membangun solusi digital yang scalable dan berkualitas.",
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
    avatar: "/icon.jpg",
    resume_url: "#contact",
    social_links: JSON.stringify({
      github: "https://github.com/mochfirmansyahh",
      linkedin: "https://linkedin.com/in/moch-firmansyah-532122323",
      portfolio: "https://mochfirmansyah.id",
      instagram: "https://www.instagram.com/frmzyxx/",
      tiktok: "https://www.tiktok.com/@frmnzy_",
    }),
  };

  await client.execute({
    sql: `
      INSERT INTO profile (
        id, name, short_name, role, tagline, headline, subheadline, about, bio, status, location, email, phone, avatar, resume_url, social_links
      ) VALUES (
        :id, :name, :short_name, :role, :tagline, :headline, :subheadline, :about, :bio, :status, :location, :email, :phone, :avatar, :resume_url, :social_links
      )
      ON CONFLICT(id) DO UPDATE SET
        name = excluded.name,
        short_name = excluded.short_name,
        role = excluded.role,
        tagline = excluded.tagline,
        headline = excluded.headline,
        subheadline = excluded.subheadline,
        about = excluded.about,
        bio = excluded.bio,
        status = excluded.status,
        location = excluded.location,
        email = excluded.email,
        phone = excluded.phone,
        avatar = excluded.avatar,
        resume_url = excluded.resume_url,
        social_links = excluded.social_links
    `,
    args: profileData,
  });
  console.log("✓ Profile updated successfully.");

  // 2. UPDATE EXPERIENCES
  console.log("--> Syncing [experiences] table...");
  await client.execute("DELETE FROM experiences");

  const experiences = [
    {
      period: "Nov 2026 – Sekarang",
      role: "Full Stack Developer Intern",
      company: "Reacteev",
      location: "Indonesia",
      description:
        "Membantu merancang, mengembangkan, dan memelihara aplikasi web serta API sebagai Full Stack Developer Intern. Mengembangkan antarmuka front-end aplikasi web yang responsif dan terintegrasi dengan API, serta membangun dan memelihara layanan back-end beserta REST API untuk mendukung fitur aplikasi.",
      technologies: JSON.stringify([
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "REST API",
        "Full Stack Development",
      ]),
    },
    {
      period: "Nov 2026 – Sekarang",
      role: "Kepala Divisi Web Development",
      company: "CCI UNITEL Universitas Telkom",
      location: "Bandung, Indonesia",
      description:
        "Memimpin divisi Web Development dan mengoordinasikan anggota, proyek, serta program belajar web. Mendorong kolaborasi lintas divisi untuk menjaga kualitas dan integrasi hasil pengembangan, serta menyusun agenda sesi belajar dan memantau perkembangan anggota divisi.",
      technologies: JSON.stringify([
        "Web Development",
        "Leadership",
        "Project Management",
        "Software Architecture",
        "Team Mentorship",
      ]),
    },
    {
      period: "Feb 2026 – Nov 2026",
      role: "Study Group Front-End Web Developer",
      company: "CCI UNITEL Universitas Telkom",
      location: "Bandung, Indonesia",
      description:
        "Mengembangkan dan memelihara antarmuka pengguna interaktif untuk berbagai aplikasi web menggunakan HTML, CSS, JavaScript, dan React. Berkolaborasi dengan rekan lintas fungsi, termasuk UI/UX designer dan back-end developer, untuk memastikan integrasi sistem yang lancar. Menerapkan responsive design dan state management pada antarmuka aplikasi web.",
      technologies: JSON.stringify([
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
        "State Management",
      ]),
    },
    {
      period: "Nov 2025 – Des 2025",
      role: "Study Group Full Stack Web Developer",
      company: "CPS Laboratory Universitas Telkom",
      location: "Bandung, Indonesia",
      description:
        "Mengeksplorasi dan menerapkan konsep pengembangan web full-stack, menjembatani antarmuka front-end interaktif dengan sistem database back-end. Membangun aplikasi web fungsional menggunakan HTML, CSS, dan JavaScript yang terintegrasi dengan arsitektur server-side, serta mempraktikkan alur kerja full-stack mulai dari perancangan database hingga antarmuka pengguna.",
      technologies: JSON.stringify([
        "HTML/CSS/JS",
        "Node.js",
        "Express.js",
        "MySQL",
        "REST API",
        "Database Design",
      ]),
    },
    {
      period: "Nov 2024 – Jun 2025",
      role: "Study Group Web Developer",
      company: "GDGoC Universitas Telkom",
      location: "Bandung, Indonesia",
      description:
        "Berperan aktif sebagai anggota Web Development Study Group di Google Developer Groups on Campus (GDGoC). Berpartisipasi dalam sesi belajar kelompok, diskusi teknis, dan proyek kolaboratif untuk memperdalam pemahaman front-end development dan praktik web terkini.",
      technologies: JSON.stringify([
        "Web Development",
        "HTML/CSS",
        "JavaScript",
        "Collaboration",
        "Modern Web Practices",
      ]),
    },
  ];

  for (const exp of experiences) {
    await client.execute({
      sql: `
        INSERT INTO experiences (period, role, company, location, description, technologies)
        VALUES (:period, :role, :company, :location, :description, :technologies)
      `,
      args: exp,
    });
  }
  console.log(`✓ Synchronized ${experiences.length} experiences.`);

  // 3. UPDATE PROJECTS
  console.log("--> Syncing [projects] table...");
  await client.execute("DELETE FROM projects");

  const projects = [
    {
      id: "simgizi",
      title: "SimGizi",
      subtitle: "Aplikasi Deteksi Dini Gizi Buruk & Stunting Berbasis AI untuk Posyandu",
      category: "AI & Health Web App",
      image: "/projects/simgizi.png",
      description:
        "Aplikasi web berbasis AI untuk membantu petugas posyandu mendeteksi dini gizi buruk dan stunting pada balita usia 0–59 bulan, dengan Next.js, TypeScript, dan Tailwind CSS (live di Vercel). Dilengkapi engine Z-score otomatis standar WHO & Permenkes No. 2/2020 serta integrasi Gemini API.",
      long_description:
        "SimGizi adalah aplikasi web inovatif berbasis kecerdasan buatan (AI) yang dirancang khusus untuk mempermudah kader dan petugas Posyandu dalam memantau tumbuh kembang balita (usia 0–59 bulan) serta mendeteksi dini indikasi gizi buruk dan stunting. Mengimplementasikan engine perhitungan antropometri Z-score otomatis (BB/U, TB/U, BB/TB) sesuai regulasi baku WHO dan Permenkes No. 2 Tahun 2020, dilengkapi rekomendasi nutrisi cerdas via Gemini API dengan fail-safe protection, dashboard monitoring tren kesehatan anak, serta ekspor laporan rekapitulasi data pemeriksaan ke format PDF. Proyek ini berhasil mengantarkan Moch. Firmansyah meraih Juara 3 dalam ajang kompetisi bergengsi CCI THE HACK (2026).",
      tags: JSON.stringify([
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Gemini API",
        "AI / Health-Tech",
        "Z-Score Engine",
        "PDF Export",
        "Vercel",
      ]),
      metrics: "Juara 3 CCI THE HACK • AI-Powered • WHO Z-Score Standard",
      year: "2026",
      demo_url: "https://simgizi.vercel.app/",
      github_url: "https://github.com/mochfirmansyahh/simgizi",
      highlights: JSON.stringify([
        "Engine rule-based perhitungan Z-score otomatis (BB/U, TB/U, BB/TB) presisi tinggi sesuai standar baku WHO & Permenkes No. 2 Tahun 2020",
        "Integrasi Gemini API untuk rekomendasi tindak lanjut penanganan nutrisi dan medis balita dengan sistem fallback fail-safe",
        "Dashboard monitoring komprehensif: deteksi dini stunting, riwayat antropometri balita, dan ekspor laporan rekapitulasi PDF",
        "Meraih Juara 3 pada kompetisi hackathon teknologi bergengsi CCI THE HACK (2026)",
      ]),
      featured: 1,
    },
    {
      id: "voluntrip",
      title: "Voluntrip",
      subtitle: "Aplikasi Perencana Trip, Rundown Perjalanan Interaktif & Manajemen Budget Kelompok",
      category: "Web App",
      image: "/projects/voluntrip.png",
      description:
        "Platform perencana perjalanan modern untuk menyusun jadwal kegiatan (rundown), mengelola anggaran (budgeting), dan melacak pengeluaran secara real-time dengan peta rute interaktif.",
      long_description:
        "Voluntrip adalah platform perencana perjalanan modern yang dirancang untuk mempermudah traveler dan kelompok perjalanan dalam menyusun jadwal kegiatan (rundown), mengelola anggaran (budgeting), dan melacak pengeluaran secara real-time. Dengan antarmuka interaktif yang intuitif, Voluntrip memastikan itinerary bebas bentrok jam, fleksibel untuk diubah lewat fitur drag & drop, serta mudah dibagikan ke anggota trip lainnya.",
      tags: JSON.stringify([
        "Next.js 16 (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Dnd Kit",
        "PWA Ready",
        "JWT Auth",
        "Leaflet",
      ]),
      metrics: "Drag & Drop • Real-time Budgeting • PWA Ready",
      year: "2026",
      demo_url: "https://voluntrip-five.vercel.app/",
      github_url: "https://github.com/moch-firmansyahh/voluntrip",
      highlights: JSON.stringify([
        "Interactive Itinerary & Rundown Builder dengan Drag & Drop (Dnd-Kit) dan Auto-Reschedule sekuensial bebas tabrakan jam",
        "Autocomplete lokasi destinasi terintegrasi Photon OpenStreetMap API (Komoot) dan visualisasi titik peta Leaflet",
        "Expense Tracker, Budgeting & Split Bill kalkulator otomatis untuk pembagian tagihan rata (equal share) antar anggota trip",
        "Sistem Autentikasi JWT terenkripsi dengan HTTP-only cookie, opsi Ingat Saya 30 hari, dan instant logout",
        "Dukungan Progressive Web App (PWA Standalone), Traveloka-Style Splash Screen, serta Public Share Link dengan token unik",
      ]),
      featured: 1,
    },
    {
      id: "manajemen-kontrakan-pa-iman",
      title: "Kontrakan Pa Iman",
      subtitle: "Sistem Manajemen Terpusat Administrasi Sewa Kos-Kosan & Keuangan",
      category: "Web App",
      image: "/projects/manajemen-kontrakan.png",
      description:
        "Aplikasi web Full-Stack Digital Management yang dirancang khusus untuk pemilik kost dalam mengelola unit kamar, data penghuni (aktif & alumni), dan pencatatan riwayat pembayaran bulanan secara efisien, terstruktur, dan otomatis.",
      long_description:
        "Kontrakan Pa Iman adalah sistem manajemen terpusat untuk operasional bisnis kos-kosan. Mempermudah pemilik properti dalam memantau unit kamar, mengelola data penyewa aktif dan alumni, mencatat riwayat transaksi keuangan bulanan, serta menyajikan dashboard analitik okupansi dan pendapatan secara real-time. Dibangun dengan arsitektur modern Next.js 16, Express.js 5, Prisma ORM, dan PostgreSQL untuk menyederhanakan operasional bisnis sewa properti.",
      tags: JSON.stringify([
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS v4",
        "Express.js 5",
        "Prisma ORM",
        "PostgreSQL",
        "Shadcn UI",
        "JWT Auth",
        "PWA Ready",
      ]),
      metrics: "Full-Stack • Real-time Stats • PWA Ready",
      year: "2026",
      demo_url: "https://manajemen-kontrakan-iman.vercel.app/",
      github_url: "https://github.com/moch-firmansyahh/manajemen-kost-v2",
      highlights: JSON.stringify([
        "Dashboard Ringkasan Real-Time dengan 4 Stat Card interaktif, monitoring tagihan sewa pending, dan popover notifikasi",
        "Manajemen Unit Kamar: Filter & instant search nomor/tipe kamar, modal operasi CRUD, serta histori lengkap transaksi kamar",
        "Manajemen Penghuni: Pengelompokan tab Penghuni Aktif & Alumni, profil identitas lengkap, dan sistem checkout otomatis",
        "Manajemen Pembayaran & Struk: Pencatatan status tagihan sewa bulanan, filter periode transaksi, dan halaman cetak invoice",
        "Keunggulan UI/UX: Dual Theme (Dark/Light mode) mulus, animasi welcome screen & loader kustom, serta instalasi PWA standalone",
      ]),
      featured: 1,
    },
  ];

  for (const proj of projects) {
    await client.execute({
      sql: `
        INSERT INTO projects (
          id, title, subtitle, category, image, description, long_description, tags, metrics, year, demo_url, github_url, highlights, featured
        ) VALUES (
          :id, :title, :subtitle, :category, :image, :description, :long_description, :tags, :metrics, :year, :demo_url, :github_url, :highlights, :featured
        )
      `,
      args: proj,
    });
  }
  console.log(`✓ Synchronized ${projects.length} projects.`);

  // 4. UPDATE SKILLS & CERTIFICATIONS
  console.log("--> Syncing [skills] table...");
  await client.execute("DELETE FROM skills");

  const skillsList = [
    // Bahasa Pemrograman
    { name: "C++", category: "Programming Languages", level: "Advanced", highlight: 1 },
    { name: "Python", category: "Programming Languages", level: "Advanced", highlight: 1 },
    { name: "Java", category: "Programming Languages", level: "Proficient", highlight: 1 },
    { name: "Go (Golang)", category: "Programming Languages", level: "Proficient", highlight: 1 },
    { name: "PHP", category: "Programming Languages", level: "Proficient", highlight: 0 },

    // Front-End Web Development
    { name: "HTML", category: "Front-End Web Development", level: "Expert", highlight: 1 },
    { name: "CSS", category: "Front-End Web Development", level: "Expert", highlight: 1 },
    { name: "JavaScript", category: "Front-End Web Development", level: "Expert", highlight: 1 },
    { name: "TypeScript", category: "Front-End Web Development", level: "Expert", highlight: 1 },
    { name: "React", category: "Front-End Web Development", level: "Expert", highlight: 1 },
    { name: "Next.js", category: "Front-End Web Development", level: "Advanced", highlight: 1 },
    { name: "Tailwind CSS", category: "Front-End Web Development", level: "Expert", highlight: 1 },
    { name: "Responsive Design", category: "Front-End Web Development", level: "Expert", highlight: 0 },
    { name: "Fetch API & Axios", category: "Front-End Web Development", level: "Expert", highlight: 0 },
    { name: "State Management", category: "Front-End Web Development", level: "Advanced", highlight: 0 },
    { name: "React Hook Form", category: "Front-End Web Development", level: "Advanced", highlight: 0 },
    { name: "Framer Motion", category: "Front-End Web Development", level: "Advanced", highlight: 1 },
    { name: "PWA (Progressive Web Apps)", category: "Front-End Web Development", level: "Advanced", highlight: 0 },
    { name: "WebSocket", category: "Front-End Web Development", level: "Proficient", highlight: 0 },

    // Back-End Development
    { name: "REST API Architecture", category: "Back-End Development", level: "Expert", highlight: 1 },
    { name: "Node.js / Express.js", category: "Back-End Development", level: "Advanced", highlight: 1 },
    { name: "Spring Boot", category: "Back-End Development", level: "Proficient", highlight: 0 },
    { name: "Laravel", category: "Back-End Development", level: "Proficient", highlight: 0 },
    { name: "Supabase", category: "Back-End Development", level: "Advanced", highlight: 1 },
    { name: "Gemini API Integration", category: "Back-End Development", level: "Advanced", highlight: 1 },
    { name: "MVC & Layered Architecture", category: "Back-End Development", level: "Advanced", highlight: 0 },
    { name: "Middleware & Error Handling", category: "Back-End Development", level: "Advanced", highlight: 0 },

    // Authentication & Security
    { name: "JWT (JSON Web Token)", category: "Authentication & Security", level: "Advanced", highlight: 1 },
    { name: "OAuth 2.0", category: "Authentication & Security", level: "Advanced", highlight: 1 },
    { name: "RBAC (Role-Based Access Control)", category: "Authentication & Security", level: "Advanced", highlight: 0 },
    { name: "SQL Injection Prevention", category: "Authentication & Security", level: "Advanced", highlight: 1 },
    { name: "Password Hashing & Salting", category: "Authentication & Security", level: "Advanced", highlight: 0 },
    { name: "Network Security & Hardening", category: "Authentication & Security", level: "Advanced", highlight: 1 },

    // Database & Storage
    { name: "SQL", category: "Database & Storage", level: "Expert", highlight: 1 },
    { name: "MySQL", category: "Database & Storage", level: "Advanced", highlight: 1 },
    { name: "PostgreSQL", category: "Database & Storage", level: "Advanced", highlight: 1 },
    { name: "Prisma ORM", category: "Database & Storage", level: "Advanced", highlight: 1 },
    { name: "Schema Design & Modeling", category: "Database & Storage", level: "Advanced", highlight: 0 },
    { name: "Database Indexing & Migrations", category: "Database & Storage", level: "Advanced", highlight: 0 },

    // Deployment & Testing
    { name: "Docker", category: "Deployment & Testing", level: "Proficient", highlight: 1 },
    { name: "Vercel Cloud Deployment", category: "Deployment & Testing", level: "Expert", highlight: 1 },
    { name: "Environment Variables Management", category: "Deployment & Testing", level: "Expert", highlight: 0 },
    { name: "Linux Server Administration", category: "Deployment & Testing", level: "Proficient", highlight: 0 },
    { name: "Unit Testing & QA", category: "Deployment & Testing", level: "Proficient", highlight: 0 },
    { name: "API Testing & Automation", category: "Deployment & Testing", level: "Advanced", highlight: 1 },

    // Developer Tools
    { name: "Git / GitHub", category: "Developer Tools", level: "Expert", highlight: 1 },
    { name: "VS Code", category: "Developer Tools", level: "Expert", highlight: 1 },
    { name: "Postman", category: "Developer Tools", level: "Advanced", highlight: 1 },
    { name: "Antigravity", category: "Developer Tools", level: "Advanced", highlight: 1 },
    { name: "Figma", category: "Developer Tools", level: "Advanced", highlight: 1 },
    { name: "Wireshark", category: "Developer Tools", level: "Proficient", highlight: 0 },
    { name: "MySQL Workbench", category: "Developer Tools", level: "Advanced", highlight: 0 },
    { name: "Beekeeper Studio", category: "Developer Tools", level: "Advanced", highlight: 0 },
    { name: "Notion & Trello", category: "Developer Tools", level: "Advanced", highlight: 0 },

    // Soft Skills & Professional
    { name: "Technical Problem-Solving", category: "Soft Skills & Professional", level: "Expert", highlight: 1 },
    { name: "Analytical Thinking", category: "Soft Skills & Professional", level: "Expert", highlight: 1 },
    { name: "Team Collaboration", category: "Soft Skills & Professional", level: "Expert", highlight: 1 },
    { name: "Time Management", category: "Soft Skills & Professional", level: "Advanced", highlight: 0 },
    { name: "Client Management", category: "Soft Skills & Professional", level: "Advanced", highlight: 0 },
    { name: "Self-Learning & Research", category: "Soft Skills & Professional", level: "Expert", highlight: 1 },
    { name: "Technical Documentation", category: "Soft Skills & Professional", level: "Advanced", highlight: 0 },
    { name: "Presentation & Communication", category: "Soft Skills & Professional", level: "Advanced", highlight: 0 },
    { name: "Attention to Detail", category: "Soft Skills & Professional", level: "Expert", highlight: 1 },

    // Achievements & Certifications
    {
      name: "Juara 3 CCI THE HACK (2026)",
      category: "Achievements & Certifications",
      level: "Competition Award",
      issuer: "Central Computer Improvement (CCI)",
      issue_date: "Agu 2026",
      credential_id: "CCI-HACK-SIMGI-03",
      highlight: 1,
    },
    {
      name: "AWS Certified AI Practitioner",
      category: "Achievements & Certifications",
      level: "Professional Certification",
      issuer: "Amazon Web Services (AWS)",
      issue_date: "2026",
      credential_id: "AWS-AIP-2026",
      highlight: 1,
    },
    {
      name: "Google AI Professional Certificate",
      category: "Achievements & Certifications",
      level: "Professional Specialization",
      issuer: "Google",
      issue_date: "Jun 2026",
      credential_id: "LHOBD1DIAJJI",
      highlight: 1,
    },
    {
      name: "Google Network Security Specialization",
      category: "Achievements & Certifications",
      level: "Professional Specialization",
      issuer: "Google",
      issue_date: "Jun 2026",
      credential_id: "CJ9Y8P9DNC7C",
      highlight: 1,
    },
    {
      name: "AI Front-End Developer Track",
      category: "Achievements & Certifications",
      level: "Professional Training",
      issuer: "IDCamp",
      issue_date: "2026",
      credential_id: "IDCAMP-AIFE-2026",
      highlight: 1,
    },
    {
      name: "Cloud Architecture & Data Design",
      category: "Achievements & Certifications",
      level: "Professional Certificate",
      issuer: "Dicoding Indonesia",
      issue_date: "2026",
      credential_id: "DICODING-CADD-2026",
      highlight: 1,
    },
    {
      name: "Technical Training: GCC x Telkom TUNC-2",
      category: "Achievements & Certifications",
      level: "Technical Certification",
      issuer: "GCC x Telkom University",
      issue_date: "2026",
      credential_id: "GCC-TUNC2-2026",
      highlight: 1,
    },
  ];

  for (const sk of skillsList) {
    await client.execute({
      sql: `
        INSERT INTO skills (name, category, level, percent, logo, highlight, issuer, issue_date, credential_id)
        VALUES (:name, :category, :level, :percent, :logo, :highlight, :issuer, :issue_date, :credential_id)
      `,
      args: {
        name: sk.name,
        category: sk.category,
        level: sk.level,
        percent: null,
        logo: null,
        highlight: sk.highlight,
        issuer: sk.issuer || null,
        issue_date: sk.issue_date || null,
        credential_id: sk.credential_id || null,
      },
    });
  }
  console.log(`✓ Synchronized ${skillsList.length} skills and certifications.`);

  console.log("🎉 TURSO DATABASE SYNC COMPLETED SUCCESSFULLY!");
}

syncCvToTurso().catch((err) => {
  console.error("❌ Sync Error:", err);
  process.exit(1);
});
