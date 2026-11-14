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
  iconBgColor: string;
  accentColor: string;
  featured?: boolean;
}

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: "aws-ai-practitioner",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services (AWS)",
    category: "cloud-ai",
    categoryLabelEn: "Cloud & AI",
    categoryLabelId: "Cloud & Kecerdasan Buatan",
    issueDateEn: "October 20, 2026",
    issueDateId: "20 Oktober 2026",
    credentialId: "f18486c0078343e38459024bc5ae4cdd",
    credentialUrl: "https://aws.amazon.com/verification",
    descriptionEn:
      "Official AWS Certification validating foundational expertise in Generative AI, Large Language Models (LLMs), prompt engineering, and cloud machine learning deployment. Valid through October 20, 2029.",
    descriptionId:
      "Sertifikasi resmi AWS yang memvalidasi keahlian fundamental Generative AI, Large Language Models (LLM), prompt engineering, serta deployment machine learning di cloud. Berlaku hingga 20 Oktober 2029.",
    skills: ["AWS Bedrock", "Generative AI", "Machine Learning", "Cloud Architecture", "Responsible AI"],
    image: "/certificates/aws-certified-ai-practitioner.png",
    iconType: "cloud",
    iconBgColor: "bg-orange-500",
    accentColor: "#FF9900",
    featured: true,
  },
  {
    id: "google-ai-fundamentals",
    title: "Google AI Fundamentals",
    issuer: "Google (via Coursera)",
    category: "cloud-ai",
    categoryLabelEn: "Cloud & AI",
    categoryLabelId: "Cloud & Kecerdasan Buatan",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "YHC0Y81QJQEP",
    credentialUrl: "https://coursera.org/verify/YHC0Y81QJQEP",
    descriptionEn:
      "Online course certificate authorized by Google and offered through Coursera, signed by Amanda Brophy (Global Director of Google Career Certificates). Validating mastery in foundational AI concepts, generative tools, and neural network applications.",
    descriptionId:
      "Sertifikat kursus resmi yang disahkan oleh Google dan diselenggarakan melalui Coursera, ditandatangani oleh Amanda Brophy (Global Director Google Career Certificates). Memvalidasi penguasaan konsep AI dasar, generative tools, dan aplikasi neural networks.",
    skills: ["AI Fundamentals", "Machine Learning", "Generative Tools", "Google Ecosystem"],
    image: "/certificates/coursera-ai-fundamentals.jpg",
    iconType: "sparkles",
    iconBgColor: "bg-emerald-500",
    accentColor: "#10B981",
    featured: true,
  },
  {
    id: "google-network-architecture",
    title: "Google Network Architecture",
    issuer: "Google (via Coursera)",
    category: "security",
    categoryLabelEn: "Cyber Security",
    categoryLabelId: "Keamanan Siber",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "QGLKQZYW85M4",
    credentialUrl: "https://coursera.org/verify/QGLKQZYW85M4",
    descriptionEn:
      "Course certificate authorized by Google covering enterprise network architecture, TCP/IP communication suite, routing tables, subnetting schemes, network diagnostics, and defense configurations.",
    descriptionId:
      "Sertifikat kursus resmi dari Google yang mencakup arsitektur jaringan enterprise, protokol komunikasi TCP/IP, tabel routing, subnetting, diagnostik jaringan, dan konfigurasi pertahanan perimeter.",
    skills: ["TCP/IP Protocol", "Network Architecture", "Subnetting", "Routing & Switching", "Network Defense"],
    image: "/certificates/coursera-network-architecture.jpg",
    iconType: "shield",
    iconBgColor: "bg-blue-600",
    accentColor: "#2563EB",
    featured: true,
  },
  {
    id: "google-ai-research",
    title: "Google AI for Research & Insights",
    issuer: "Google (via Coursera)",
    category: "cloud-ai",
    categoryLabelEn: "Cloud & AI",
    categoryLabelId: "Cloud & Kecerdasan Buatan",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "L7LZ85MKND2X",
    credentialUrl: "https://coursera.org/verify/L7LZ85MKND2X",
    descriptionEn:
      "Course certificate authorized by Google focusing on utilizing AI solutions for systematic literature reviews, automated data synthesis, structured analysis, and accelerating research workflows.",
    descriptionId:
      "Sertifikat kursus resmi Google yang berfokus pada pemanfaatan solusi AI untuk literature review sistematis, sintesis data terotomasi, analisis terstruktur, dan percepatan alur kerja riset.",
    skills: ["AI Research", "Prompting", "Data Synthesis", "Automated Insights"],
    image: "/certificates/coursera-ai-research.png",
    iconType: "database",
    iconBgColor: "bg-cyan-600",
    accentColor: "#0891B2",
    featured: false,
  },
  {
    id: "cps-lab-workshop",
    title: "Cyber Physical System Lab Workshop",
    issuer: "CPS Laboratory (Telkom University)",
    category: "web-dev",
    categoryLabelEn: "Web & IoT Engineering",
    categoryLabelId: "Web & Rekayasa IoT",
    issueDateEn: "December 12, 2025",
    issueDateId: "12 Desember 2025",
    credentialId: "CPS-LAB-WS-2025",
    credentialUrl: "https://cpslaboratory.com/",
    descriptionEn:
      "Certificate of Appreciation for successfully completing the intensive hands-on technical workshop organized by Cyber Physical System Laboratory. Signed by the Dean of the School of Electrical Engineering & Head of CPS Lab.",
    descriptionId:
      "Sertifikat apresiasi atas penyelesaian workshop teknis intensif yang diselenggarakan oleh Cyber Physical System Laboratory. Ditandatangani oleh Dekan Fakultas Teknik Elektro & Kepala Lab CPS Universitas Telkom.",
    skills: ["Cyber Physical Systems", "IoT Engineering", "Embedded Architecture", "Hardware-Software Integration"],
    image: "/certificates/moch-firmansyah-cert.png",
    iconType: "terminal",
    iconBgColor: "bg-rose-500",
    accentColor: "#F43F5E",
    featured: false,
  },
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
      "Awarded 3rd Winner in national technology hackathon CCI THE HACK (2026) for developing SimGizi — an AI-powered early detection and nutrition monitoring web application for Posyandu.",
    descriptionId:
      "Meraih Juara 3 Nasional dalam kompetisi hackathon teknologi bergengsi CCI THE HACK (2026) melalui inovasi SimGizi — aplikasi web deteksi dini stunting dan pemantauan gizi Posyandu berbasis AI.",
    skills: ["Next.js", "AI Gemini API", "Antropometri WHO", "Full-Stack Development"],
    image: "/certificates/cci-hackathon.svg",
    iconType: "trophy",
    iconBgColor: "bg-amber-500",
    accentColor: "#F59E0B",
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
      "Intensive scholarship training program by Indosat Ooredoo Hutchison & Dicoding on modern web engineering, client-side AI integration, responsive design, and web accessibility.",
    descriptionId:
      "Program beasiswa intensif Indosat Ooredoo Hutchison & Dicoding dalam rekayasa web modern, integrasi AI di sisi client, desain responsif, dan standar aksesibilitas web.",
    skills: ["React.js", "AI Integration", "Modern CSS", "Web Performance"],
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
    skills: ["Cloud Architecture", "Database Modeling", "Microservices", "Scalability"],
    image: "/certificates/dicoding-cloud-data.svg",
    iconType: "database",
    iconBgColor: "bg-cyan-600",
    accentColor: "#0891B2",
    featured: false,
  },
];

export const CERTIFICATE_CATEGORIES = [
  { key: "all", labelEn: "ALL CERTIFICATES", labelId: "SEMUA SERTIFIKAT" },
  { key: "competition", labelEn: "COMPETITIONS & AWARDS", labelId: "KOMPETISI & PENGHARGAAN" },
  { key: "cloud-ai", labelEn: "CLOUD & AI", labelId: "CLOUD & KECERDASAN BUATAN" },
  { key: "security", labelEn: "CYBER SECURITY", labelId: "KEAMANAN SIBER" },
  { key: "web-dev", labelEn: "WEB & IOT DEVELOPMENT", labelId: "PENGEMBANGAN WEB & IOT" },
] as const;
