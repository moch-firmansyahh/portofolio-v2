export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: "competition" | "cloud-ai" | "security" | "workshop";
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
  // 1. AWS Official Certification
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

  // 2. National Hackathon Award
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

  // 3. Google AI Series (Coursera)
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
    image: "/certificates/coursera-ai-fundamentals.png",
    iconType: "sparkles",
    iconBgColor: "bg-emerald-500",
    accentColor: "#10B981",
    featured: true,
  },
  {
    id: "google-ai-app-building",
    title: "Google AI for App Building",
    issuer: "Google (via Coursera)",
    category: "cloud-ai",
    categoryLabelEn: "Cloud & AI",
    categoryLabelId: "Cloud & Kecerdasan Buatan",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "W00HFW7JUN7A",
    credentialUrl: "https://coursera.org/verify/W00HFW7JUN7A",
    descriptionEn:
      "Course certificate authorized by Google focusing on developing end-to-end intelligent web and mobile applications leveraging modern Artificial Intelligence APIs, prompt pipelines, and secure backend integration.",
    descriptionId:
      "Sertifikat kursus resmi Google dalam membangun aplikasi cerdas web dan mobile end-to-end dengan memanfaatkan API Artificial Intelligence modern, pipeline prompt, dan integrasi backend yang aman.",
    skills: ["AI App Building", "API Integration", "Prompt Engineering", "Full-Stack AI"],
    image: "/certificates/coursera-ai-app-building.png",
    iconType: "code",
    iconBgColor: "bg-indigo-600",
    accentColor: "#6366F1",
    featured: false,
  },
  {
    id: "google-ai-data-analysis",
    title: "Google AI for Data Analysis",
    issuer: "Google (via Coursera)",
    category: "cloud-ai",
    categoryLabelEn: "Cloud & AI",
    categoryLabelId: "Cloud & Kecerdasan Buatan",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "XFF8VDO21R68",
    credentialUrl: "https://coursera.org/verify/XFF8VDO21R68",
    descriptionEn:
      "Authorized Google course certificate on utilizing Artificial Intelligence for advanced data cleaning, statistical evaluation, pattern recognition, and building predictive analytic insights.",
    descriptionId:
      "Sertifikat kursus resmi Google dalam memanfaatkan Artificial Intelligence untuk pembersihan data lanjutan, evaluasi statistik, deteksi pola, dan pembuatan wawasan analitik prediktif.",
    skills: ["Data Analysis", "AI Pattern Recognition", "Predictive Insights", "Data Cleaning"],
    image: "/certificates/coursera-ai-data-analysis.png",
    iconType: "database",
    iconBgColor: "bg-cyan-600",
    accentColor: "#0891B2",
    featured: false,
  },
  {
    id: "google-ai-brainstorming-planning",
    title: "Google AI for Brainstorming & Planning",
    issuer: "Google (via Coursera)",
    category: "cloud-ai",
    categoryLabelEn: "Cloud & AI",
    categoryLabelId: "Cloud & Kecerdasan Buatan",
    issueDateEn: "June 24, 2026",
    issueDateId: "24 Juni 2026",
    credentialId: "I9IN66PDVSZJ",
    credentialUrl: "https://coursera.org/verify/I9IN66PDVSZJ",
    descriptionEn:
      "Course certificate by Google focusing on strategic AI applications for project ideation, architectural decision-making, milestone planning, and workflow acceleration.",
    descriptionId:
      "Sertifikat kursus resmi Google yang berfokus pada aplikasi AI strategis untuk perancangan ide proyek, pengambilan keputusan arsitektural, perencanaan milestone, dan akselerasi alur kerja.",
    skills: ["Project Planning", "Ideation", "Strategic AI", "Workflow Optimization"],
    image: "/certificates/coursera-ai-brainstorming-planning.png",
    iconType: "sparkles",
    iconBgColor: "bg-teal-600",
    accentColor: "#0D9488",
    featured: false,
  },
  {
    id: "google-ai-research-insights",
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
      "Google certification validating methods for automated data synthesis, structured analysis, academic literature processing, and rapid discovery workflows using AI.",
    descriptionId:
      "Sertifikasi resmi Google yang memvalidasi metode sintesis data otomatis, analisis terstruktur, pemrosesan literatur akademis, dan alur kerja penemuan wawasan cepat dengan AI.",
    skills: ["AI Research", "Prompting", "Data Synthesis", "Automated Insights"],
    image: "/certificates/coursera-ai-research-insights.png",
    iconType: "database",
    iconBgColor: "bg-blue-600",
    accentColor: "#2563EB",
    featured: false,
  },
  {
    id: "google-ai-content-creation",
    title: "Google AI for Content Creation",
    issuer: "Google (via Coursera)",
    category: "cloud-ai",
    categoryLabelEn: "Cloud & AI",
    categoryLabelId: "Cloud & Kecerdasan Buatan",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "O28EDV4M8XUI",
    credentialUrl: "https://coursera.org/verify/O28EDV4M8XUI",
    descriptionEn:
      "Google certification covering multimodal generation, creative asset drafting, prompt structuring, and multimedia content pipelines with generative models.",
    descriptionId:
      "Sertifikasi resmi Google tentang pembuatan aset multimodal, perancangan konten kreatif, penataan prompt terstruktur, dan pipeline konten multimedia dengan model generatif.",
    skills: ["Generative AI", "Content Creation", "Multimodal Prompts", "Creative Workflows"],
    image: "/certificates/coursera-ai-content-creation.png",
    iconType: "sparkles",
    iconBgColor: "bg-pink-600",
    accentColor: "#DB2777",
    featured: false,
  },
  {
    id: "google-ai-writing-communicating",
    title: "Google AI for Writing & Communicating",
    issuer: "Google (via Coursera)",
    category: "cloud-ai",
    categoryLabelEn: "Cloud & AI",
    categoryLabelId: "Cloud & Kecerdasan Buatan",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "LN1RVG8C81ZN",
    credentialUrl: "https://coursera.org/verify/LN1RVG8C81ZN",
    descriptionEn:
      "Google course certificate exploring natural language processing for high-impact professional communication, technical documentation, and stakeholder reporting.",
    descriptionId:
      "Sertifikat kursus Google yang mengeksplorasi NLP untuk komunikasi profesional berstandar tinggi, dokumentasi teknis, dan pelaporan stakeholder.",
    skills: ["Natural Language Processing", "Technical Writing", "Communication", "AI Assistance"],
    image: "/certificates/coursera-ai-writing-communicating.png",
    iconType: "sparkles",
    iconBgColor: "bg-violet-600",
    accentColor: "#7C3AED",
    featured: false,
  },

  // 4. Google Network & Cyber Security Series (Coursera)
  {
    id: "google-network-architecture",
    title: "Google Network Architecture",
    issuer: "Google (via Coursera)",
    category: "security",
    categoryLabelEn: "Cyber Security & Network",
    categoryLabelId: "Keamanan Siber & Jaringan",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "QGLKQZYW85M4",
    credentialUrl: "https://coursera.org/verify/QGLKQZYW85M4",
    descriptionEn:
      "Course certificate authorized by Google covering enterprise network architecture, TCP/IP communication suite, routing tables, subnetting schemes, network diagnostics, and defense configurations.",
    descriptionId:
      "Sertifikat kursus resmi dari Google yang mencakup arsitektur jaringan enterprise, protokol komunikasi TCP/IP, tabel routing, subnetting, diagnostik jaringan, dan konfigurasi pertahanan perimeter.",
    skills: ["TCP/IP Protocol", "Network Architecture", "Subnetting", "Routing & Switching", "Network Defense"],
    image: "/certificates/coursera-network-architecture.png",
    iconType: "shield",
    iconBgColor: "bg-blue-600",
    accentColor: "#2563EB",
    featured: true,
  },
  {
    id: "google-network-operations",
    title: "Google Network Operations",
    issuer: "Google (via Coursera)",
    category: "security",
    categoryLabelEn: "Cyber Security & Network",
    categoryLabelId: "Keamanan Siber & Jaringan",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "SNCGYJI238LL",
    credentialUrl: "https://coursera.org/verify/SNCGYJI238LL",
    descriptionEn:
      "Google certification covering network infrastructure operations, maintenance best practices, troubleshooting protocols, and high-availability enterprise networking.",
    descriptionId:
      "Sertifikasi Google yang mencakup operasional infrastruktur jaringan, praktik terbaik pemeliharaan, protokol troubleshooting, dan jaringan enterprise dengan ketersediaan tinggi.",
    skills: ["Network Operations", "Troubleshooting", "High Availability", "Infrastructure Maintenance"],
    image: "/certificates/coursera-network-operations.png",
    iconType: "shield",
    iconBgColor: "bg-cyan-600",
    accentColor: "#0891B2",
    featured: false,
  },
  {
    id: "google-network-monitoring-analysis",
    title: "Google Network Monitoring & Analysis",
    issuer: "Google (via Coursera)",
    category: "security",
    categoryLabelEn: "Cyber Security & Network",
    categoryLabelId: "Keamanan Siber & Jaringan",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "UWO1F2TR0STG",
    credentialUrl: "https://coursera.org/verify/UWO1F2TR0STG",
    descriptionEn:
      "Google course on network telemetry, packet capture analysis, bandwidth monitoring, and early security anomaly detection in distributed systems.",
    descriptionId:
      "Kursus resmi Google tentang telemetri jaringan, analisis tangkapan paket data, pemantauan bandwidth, dan deteksi dini anomali keamanan pada sistem terdistribusi.",
    skills: ["Packet Analysis", "Network Telemetry", "Anomaly Detection", "Bandwidth Monitoring"],
    image: "/certificates/coursera-network-monitoring-analysis.png",
    iconType: "shield",
    iconBgColor: "bg-emerald-600",
    accentColor: "#059669",
    featured: false,
  },
  {
    id: "google-network-traffic-logs",
    title: "Google Network Traffic & Logs (IDS/SIEM)",
    issuer: "Google (via Coursera)",
    category: "security",
    categoryLabelEn: "Cyber Security & Network",
    categoryLabelId: "Keamanan Siber & Jaringan",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "O1RF3PQ0GG26",
    credentialUrl: "https://coursera.org/verify/O1RF3PQ0GG26",
    descriptionEn:
      "Google certification validating log analysis, intrusion detection systems (IDS), and security information & event management (SIEM) tools for network threat detection.",
    descriptionId:
      "Sertifikasi Google yang memvalidasi analisis log, intrusion detection systems (IDS), dan perangkat security information & event management (SIEM) untuk deteksi ancaman jaringan.",
    skills: ["SIEM", "IDS Tools", "Log Analysis", "Threat Detection", "Security Telemetry"],
    image: "/certificates/coursera-network-traffic-logs.png",
    iconType: "shield",
    iconBgColor: "bg-amber-600",
    accentColor: "#D97706",
    featured: false,
  },
  {
    id: "google-secure-network-intrusions",
    title: "Google Secure Against Network Intrusions",
    issuer: "Google (via Coursera)",
    category: "security",
    categoryLabelEn: "Cyber Security & Network",
    categoryLabelId: "Keamanan Siber & Jaringan",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "OQI95K5ZGRCB",
    credentialUrl: "https://coursera.org/verify/OQI95K5ZGRCB",
    descriptionEn:
      "Authorized Google course on perimeter security, firewall rule configuration, intrusion prevention systems, and defense-in-depth security principles.",
    descriptionId:
      "Kursus resmi Google tentang keamanan perimeter, konfigurasi aturan firewall, sistem pencegahan intrusi (IPS), dan prinsip keamanan defense-in-depth.",
    skills: ["Perimeter Defense", "Firewalls", "Intrusion Prevention", "Defense in Depth"],
    image: "/certificates/coursera-secure-network-intrusions.png",
    iconType: "shield",
    iconBgColor: "bg-red-600",
    accentColor: "#DC2626",
    featured: false,
  },
  {
    id: "google-security-hardening",
    title: "Google Security Hardening",
    issuer: "Google (via Coursera)",
    category: "security",
    categoryLabelEn: "Cyber Security & Network",
    categoryLabelId: "Keamanan Siber & Jaringan",
    issueDateEn: "June 23, 2026",
    issueDateId: "23 Juni 2026",
    credentialId: "PXE1WGPT2QN3",
    credentialUrl: "https://coursera.org/verify/PXE1WGPT2QN3",
    descriptionEn:
      "Google certification on vulnerability remediation, operating system hardening, baseline security configuration, and strict access privilege controls.",
    descriptionId:
      "Sertifikasi Google dalam remediasi kerentanan, pengerasan sistem operasi (OS hardening), konfigurasi baseline keamanan, dan kontrol hak akses ketat.",
    skills: ["System Hardening", "Vulnerability Management", "Access Control", "Security Baselines"],
    image: "/certificates/coursera-security-hardening.png",
    iconType: "shield",
    iconBgColor: "bg-purple-600",
    accentColor: "#9333EA",
    featured: false,
  },
  {
    id: "google-detection-incident-response",
    title: "Google Detection & Incident Response",
    issuer: "Google (via Coursera)",
    category: "security",
    categoryLabelEn: "Cyber Security & Network",
    categoryLabelId: "Keamanan Siber & Jaringan",
    issueDateEn: "June 24, 2026",
    issueDateId: "24 Juni 2026",
    credentialId: "B7BQBL44M7D8",
    credentialUrl: "https://coursera.org/verify/B7BQBL44M7D8",
    descriptionEn:
      "Google course certificate covering cyber incident triage, digital forensic fundamentals, response lifecycles, and remediation procedures.",
    descriptionId:
      "Sertifikat kursus Google yang mencakup triase insiden siber, dasar forensik digital, siklus hidup respon insiden, dan prosedur remediasi.",
    skills: ["Incident Response", "Incident Triage", "Digital Forensics", "Remediation Planning"],
    image: "/certificates/coursera-detection-incident-response.png",
    iconType: "shield",
    iconBgColor: "bg-rose-600",
    accentColor: "#E11D48",
    featured: false,
  },

  // 5. University & Laboratory Workshop
  {
    id: "cps-lab-workshop",
    title: "Cyber Physical System Lab Workshop",
    issuer: "CPS Laboratory (Telkom University)",
    category: "workshop",
    categoryLabelEn: "Workshop & Academic",
    categoryLabelId: "Workshop & Akademik",
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
    featured: true,
  },
];

export const CERTIFICATE_CATEGORIES = [
  { key: "all", labelEn: "ALL CERTIFICATES", labelId: "SEMUA SERTIFIKAT" },
  { key: "cloud-ai", labelEn: "CLOUD & AI", labelId: "CLOUD & KECERDASAN BUATAN" },
  { key: "security", labelEn: "CYBER SECURITY & NETWORK", labelId: "KEAMANAN SIBER & JARINGAN" },
  { key: "competition", labelEn: "COMPETITIONS & AWARDS", labelId: "KOMPETISI & PENGHARGAAN" },
  { key: "workshop", labelEn: "WORKSHOP & ACADEMIC", labelId: "WORKSHOP & AKADEMIK" },
] as const;
