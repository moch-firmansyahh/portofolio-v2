export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: "competition" | "cloud-ai" | "security" | "web-dev";
  categoryLabelEn: string;
  categoryLabelId: string;
  issueDateEn: string;
  issueDateId: string;
  credentialId: string;
  credentialUrl: string;
  descriptionEn: string;
  descriptionId: string;
  skills: string[];
  image: string;
  iconType: "trophy" | "cloud" | "sparkles" | "shield" | "code" | "database" | "terminal";
  iconBgColor: string; // Tailwind bg class
  accentColor: string; // Hex color
  featured?: boolean;
}

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: "cci-hackathon-2026",
    title: "Juara 3 CCI THE HACK (2026)",
    issuer: "Central Computer Improvement (Telkom University)",
    category: "competition",
    categoryLabelEn: "Competition & Awards",
    categoryLabelId: "Kompetisi & Penghargaan",
    issueDateEn: "August 2026",
    issueDateId: "Agustus 2026",
    credentialId: "CCI-HACK-SIMGI-03",
    credentialUrl: "https://simgizi.vercel.app/",
    descriptionEn:
      "Awarded 3rd Winner in the prestigious national technology hackathon CCI THE HACK (2026) for developing SimGizi — an AI-powered early detection and monitoring web system for child nutrition and stunting prevention.",
    descriptionId:
      "Meraih Juara 3 Nasional dalam ajang kompetisi hackathon teknologi bergengsi CCI THE HACK (2026) melalui inovasi SimGizi — aplikasi web deteksi dini stunting dan pemantauan gizi balita berbasis AI dan antropometri WHO.",
    skills: ["AI Gemini API", "Next.js", "Antropometri WHO", "Full-Stack Development", "Tailwind CSS"],
    image: "/certificates/cci-hackathon.svg",
    iconType: "trophy",
    iconBgColor: "bg-amber-500",
    accentColor: "#F59E0B",
    featured: true,
  },
  {
    id: "aws-ai-practitioner",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services (AWS)",
    category: "cloud-ai",
    categoryLabelEn: "Cloud & AI",
    categoryLabelId: "Cloud & Kecerdasan Buatan",
    issueDateEn: "2026",
    issueDateId: "2026",
    credentialId: "AWS-AIP-2026",
    credentialUrl: "https://aws.amazon.com/certification/",
    descriptionEn:
      "Official industry certification validating foundational proficiency in artificial intelligence, large language models (LLMs), prompt engineering, AWS Bedrock, and responsible AI governance.",
    descriptionId:
      "Sertifikasi industri resmi yang memvalidasi kompetensi fundamental kecerdasan buatan, large language models (LLM), prompt engineering, ekosistem AWS Bedrock, serta tata kelola responsible AI.",
    skills: ["Generative AI", "AWS Bedrock", "Machine Learning", "Cloud Computing", "Responsible AI"],
    image: "/certificates/aws-ai-practitioner.svg",
    iconType: "cloud",
    iconBgColor: "bg-orange-500",
    accentColor: "#FF9900",
    featured: true,
  },
  {
    id: "google-ai-professional",
    title: "Google AI Professional Certificate",
    issuer: "Google",
    category: "cloud-ai",
    categoryLabelEn: "Cloud & AI",
    categoryLabelId: "Cloud & Kecerdasan Buatan",
    issueDateEn: "June 2026",
    issueDateId: "Juni 2026",
    credentialId: "LHOBD1DIAJJI",
    credentialUrl: "https://coursera.org/verify/professional-cert/LHOBD1DIAJJI",
    descriptionEn:
      "Professional specialization by Google covering end-to-end AI workflows, neural network architectures, Gemini model integration, computer vision, and building autonomous agent solutions.",
    descriptionId:
      "Spesialisasi profesional dari Google yang mendalami alur kerja AI end-to-end, arsitektur neural network, integrasi model Gemini, computer vision, dan perancangan solusi agen otonom.",
    skills: ["Deep Learning", "Gemini API", "Neural Networks", "AI Agents", "Python"],
    image: "/certificates/google-ai.svg",
    iconType: "sparkles",
    iconBgColor: "bg-emerald-500",
    accentColor: "#10B981",
    featured: true,
  },
  {
    id: "google-network-security",
    title: "Google Network Security Specialization",
    issuer: "Google",
    category: "security",
    categoryLabelEn: "Cyber Security",
    categoryLabelId: "Keamanan Siber",
    issueDateEn: "June 2026",
    issueDateId: "Juni 2026",
    credentialId: "CJ9Y8P9DNC7C",
    credentialUrl: "https://coursera.org/verify/specialization/CJ9Y8P9DNC7C",
    descriptionEn:
      "Comprehensive network security specialization from Google focusing on perimeter defense, TCP/IP packet analysis, firewall configuration, intrusion detection systems (IDS), and zero-trust security.",
    descriptionId:
      "Spesialisasi keamanan jaringan komputer dari Google yang berfokus pada pertahanan perimeter, analisis paket TCP/IP, konfigurasi firewall, intrusion detection system (IDS), dan prinsip zero-trust.",
    skills: ["Network Security", "TCP/IP Protocol", "Packet Analysis", "Firewall & IDS", "Zero Trust"],
    image: "/certificates/google-network-security.svg",
    iconType: "shield",
    iconBgColor: "bg-blue-600",
    accentColor: "#2563EB",
    featured: true,
  },
  {
    id: "idcamp-ai-frontend",
    title: "AI Front-End Developer Track",
    issuer: "IDCamp (Indosat Ooredoo Hutchison)",
    category: "web-dev",
    categoryLabelEn: "Web Development",
    categoryLabelId: "Pengembangan Web",
    issueDateEn: "2026",
    issueDateId: "2026",
    credentialId: "IDCAMP-AIFE-2026",
    credentialUrl: "https://idcamp.ioh.co.id/",
    descriptionEn:
      "Intensive scholarship training program by Indosat Ooredoo Hutchison & Dicoding on modern web application engineering, client-side AI integration, responsive design, and web accessibility.",
    descriptionId:
      "Program beasiswa intensif Indosat Ooredoo Hutchison & Dicoding dalam rekayasa aplikasi web modern, integrasi AI di sisi client, desain responsif, dan standar aksesibilitas web.",
    skills: ["React.js", "AI Integration", "Modern CSS", "Web Performance", "State Management"],
    image: "/certificates/idcamp-ai-frontend.svg",
    iconType: "code",
    iconBgColor: "bg-purple-600",
    accentColor: "#9333EA",
    featured: false,
  },
  {
    id: "dicoding-cloud-data",
    title: "Cloud Architecture & Data Design",
    issuer: "Dicoding Indonesia",
    category: "cloud-ai",
    categoryLabelEn: "Cloud & AI",
    categoryLabelId: "Cloud & Kecerdasan Buatan",
    issueDateEn: "2026",
    issueDateId: "2026",
    credentialId: "DICODING-CADD-2026",
    credentialUrl: "https://www.dicoding.com/certificates/DICODING-CADD-2026",
    descriptionEn:
      "Professional accreditation covering scalable cloud infrastructure design, microservice topology, resilient database modeling, and DevOps continuous deployment pipelines.",
    descriptionId:
      "Akreditasi profesional dalam perancangan infrastruktur cloud berskala besar, topologi microservices, pemodelan database tangguh, serta alur deployment berkelanjutan DevOps.",
    skills: ["Cloud Architecture", "Database Modeling", "Microservices", "Scalability", "DevOps"],
    image: "/certificates/dicoding-cloud-data.svg",
    iconType: "database",
    iconBgColor: "bg-cyan-600",
    accentColor: "#0891B2",
    featured: false,
  },
  {
    id: "telkom-tunc-2026",
    title: "Technical Training: GCC x Telkom TUNC-2",
    issuer: "GCC x Telkom University",
    category: "web-dev",
    categoryLabelEn: "Web Development",
    categoryLabelId: "Pengembangan Web",
    issueDateEn: "2026",
    issueDateId: "2026",
    credentialId: "GCC-TUNC2-2026",
    credentialUrl: "https://telkomuniversity.ac.id/",
    descriptionEn:
      "Collaborative technical bootcamp between Google Cloud Community and Telkom University focused on real-world cloud APIs, collaborative git workflows, and software development lifecycles.",
    descriptionId:
      "Bootcamp teknis kolaboratif antara Google Cloud Community dan Telkom University yang berfokus pada implementasi Cloud API di industri, alur kolaborasi Git, dan siklus hidup rekayasa perangkat lunak.",
    skills: ["Web Infrastructure", "Cloud APIs", "Git Collaboration", "Software Engineering"],
    image: "/certificates/telkom-tunc.svg",
    iconType: "terminal",
    iconBgColor: "bg-rose-500",
    accentColor: "#F43F5E",
    featured: false,
  },
];

export const CERTIFICATE_CATEGORIES = [
  { key: "all", labelEn: "ALL CERTIFICATES", labelId: "SEMUA SERTIFIKAT" },
  { key: "competition", labelEn: "COMPETITIONS & AWARDS", labelId: "KOMPETISI & PENGHARGAAN" },
  { key: "cloud-ai", labelEn: "CLOUD & AI", labelId: "CLOUD & KECERDASAN BUATAN" },
  { key: "security", labelEn: "CYBER SECURITY", labelId: "KEAMANAN SIBER" },
  { key: "web-dev", labelEn: "WEB DEVELOPMENT", labelId: "PENGEMBANGAN WEB" },
] as const;
