const fs = require('fs');
const path = require('path');

const certDir = path.join(__dirname, '..', 'public', 'certificates');
if (!fs.existsSync(certDir)) {
  fs.mkdirSync(certDir, { recursive: true });
}

// 1. CCI THE HACK (Gold / Obsidian)
const cciHackathonSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="50%" stop-color="#1E293B" />
      <stop offset="100%" stop-color="#090D16" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="50%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="800" height="500" fill="url(#bgGrad)" />
  <rect width="800" height="500" fill="url(#grid)" />

  <!-- Borders -->
  <rect x="24" y="24" width="752" height="452" fill="none" stroke="#F59E0B" stroke-width="2" stroke-opacity="0.6" rx="8" />
  <rect x="32" y="32" width="736" height="436" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="4 4" rx="6" />

  <!-- Corner Accents -->
  <path d="M 24 60 L 60 24 M 776 60 L 740 24 M 24 440 L 60 476 M 776 440 L 740 476" stroke="#F59E0B" stroke-width="2" />

  <!-- Header Banner -->
  <g transform="translate(400, 75)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#F59E0B" letter-spacing="4" text-transform="uppercase">
      CENTRAL COMPUTER IMPROVEMENT • TELKOM UNIVERSITY
    </text>
    <text y="42" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" letter-spacing="2">
      CERTIFICATE OF ACHIEVEMENT
    </text>
    <path d="M -160 56 L 160 56" stroke="url(#goldGrad)" stroke-width="2" />
  </g>

  <!-- Content -->
  <g transform="translate(400, 205)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#94A3B8" letter-spacing="1">
      THIS CERTIFICATE IS PROUDLY PRESENTED TO
    </text>
    <text y="40" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" fill="#FDE68A" letter-spacing="1">
      MOCH. FIRMANSYAH
    </text>
    <text y="78" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#E2E8F0" font-weight="600">
      FOR EXTRAORDINARY EXCELLENCE AND WINNING
    </text>
    
    <!-- Award Badge Box -->
    <rect x="-210" y="98" width="420" height="42" fill="#F59E0B" fill-opacity="0.15" stroke="#F59E0B" stroke-width="1.5" rx="6" />
    <text y="125" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" fill="#FBBF24" letter-spacing="1">
      🏆 3RD WINNER — CCI THE HACK (2026)
    </text>

    <text y="165" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#94A3B8">
      Project: <tspan fill="#38BDF8" font-weight="700">SimGizi (AI Early Detection &amp; WHO Nutrition Antropometry)</tspan>
    </text>
  </g>

  <!-- Gold Seal -->
  <g transform="translate(680, 400)">
    <circle r="36" fill="url(#goldGrad)" />
    <circle r="31" fill="#0F172A" />
    <circle r="28" fill="none" stroke="#F59E0B" stroke-width="1" stroke-dasharray="3 2" />
    <text text-anchor="middle" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="900" fill="#FDE68A">
      VERIFIED
    </text>
    <!-- Ribbon -->
    <path d="M -12 28 L -18 52 L 0 44 L 18 52 L 12 28 Z" fill="#D97706" />
  </g>

  <!-- Footer Info -->
  <g transform="translate(60, 435)">
    <text font-family="monospace" font-size="11" fill="#64748B">
      CREDENTIAL ID: <tspan fill="#CBD5E1">CCI-HACK-SIMGI-03</tspan>
    </text>
    <text y="16" font-family="monospace" font-size="10" fill="#64748B">
      ISSUED: AGUSTUS 2026 • TELKOM UNIVERSITY
    </text>
  </g>
</svg>`;

// 2. AWS Certified AI Practitioner (Orange / Navy)
const awsAiSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="awsBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#1E293B" />
    </linearGradient>
    <linearGradient id="awsOrange" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF9900" />
      <stop offset="100%" stop-color="#FFB84D" />
    </linearGradient>
  </defs>

  <rect width="800" height="500" fill="url(#awsBg)" />

  <!-- Top Accent Bar -->
  <rect x="0" y="0" width="800" height="8" fill="url(#awsOrange)" />

  <!-- Frame -->
  <rect x="30" y="30" width="740" height="440" fill="none" stroke="#334155" stroke-width="1" rx="8" />

  <!-- AWS Logo / Header -->
  <g transform="translate(70, 80)">
    <rect width="70" height="26" fill="#FF9900" rx="4" />
    <text x="35" y="18" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="#0F172A">AWS</text>
    <text x="82" y="19" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#94A3B8" letter-spacing="2">TRAINING &amp; CERTIFICATION</text>
  </g>

  <!-- Main Title -->
  <g transform="translate(400, 180)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#94A3B8" letter-spacing="3" font-weight="700">
      AWS CERTIFIED CREDENTIAL
    </text>
    <text y="50" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#FFFFFF" letter-spacing="1">
      AWS Certified AI Practitioner
    </text>
    <text y="90" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#94A3B8">
      Awarded to
    </text>
    <text y="130" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" fill="#FFB84D">
      Moch. Firmansyah
    </text>
    <text y="165" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#CBD5E1">
      Demonstrating comprehensive knowledge of Generative AI, LLMs, and Machine Learning on AWS
    </text>
  </g>

  <!-- AWS Badge Mock -->
  <g transform="translate(670, 390)">
    <polygon points="0,-35 30,-18 30,18 0,35 -30,18 -30,-18" fill="#FF9900" fill-opacity="0.2" stroke="#FF9900" stroke-width="2" />
    <text text-anchor="middle" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="900" fill="#FF9900">
      AI CERT
    </text>
  </g>

  <!-- Footer -->
  <g transform="translate(70, 430)">
    <text font-family="monospace" font-size="11" fill="#64748B">
      VALIDATION ID: <tspan fill="#F8FAFC">AWS-AIP-2026</tspan>
    </text>
    <text y="18" font-family="monospace" font-size="10" fill="#64748B">
      ISSUER: AMAZON WEB SERVICES, INC. • YEAR 2026
    </text>
  </g>
</svg>`;

// 3. Google AI Professional Certificate (Google colors / Clean modern)
const googleAiSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="gAiBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B132B" />
      <stop offset="100%" stop-color="#1C2541" />
    </linearGradient>
  </defs>

  <rect width="800" height="500" fill="url(#gAiBg)" />

  <!-- Google 4-Color Top Bar -->
  <rect x="0" y="0" width="200" height="6" fill="#4285F4" />
  <rect x="200" y="0" width="200" height="6" fill="#EA4335" />
  <rect x="400" y="0" width="200" height="6" fill="#FBBC05" />
  <rect x="600" y="0" width="200" height="6" fill="#34A853" />

  <rect x="25" y="25" width="750" height="450" fill="none" stroke="#334155" stroke-width="1" rx="8" />

  <!-- Google Header -->
  <g transform="translate(60, 75)">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="900">
      <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
    </text>
    <text x="95" y="-2" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#94A3B8" letter-spacing="2">
      CAREER CERTIFICATES
    </text>
  </g>

  <!-- Title Content -->
  <g transform="translate(400, 185)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#94A3B8" letter-spacing="2" font-weight="700">
      SPECIALIZATION CERTIFICATE
    </text>
    <text y="45" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" fill="#FFFFFF">
      Google AI Professional Certificate
    </text>
    <text y="85" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#94A3B8">
      Has been successfully conferred upon
    </text>
    <text y="125" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#38BDF8">
      Moch. Firmansyah
    </text>
    <text y="160" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#CBD5E1">
      Covering Deep Learning, Gemini Models, AI Agents, and Neural Network Architectures
    </text>
  </g>

  <!-- Coursera / Google Seal -->
  <g transform="translate(680, 400)">
    <circle r="34" fill="#1E293B" stroke="#34A853" stroke-width="2" />
    <text text-anchor="middle" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="900" fill="#34A853">
      GOOGLE
    </text>
    <text text-anchor="middle" y="16" font-family="system-ui, -apple-system, sans-serif" font-size="8" fill="#94A3B8">
      VERIFIED
    </text>
  </g>

  <g transform="translate(60, 435)">
    <text font-family="monospace" font-size="11" fill="#64748B">
      CREDENTIAL ID: <tspan fill="#F8FAFC">LHOBD1DIAJJI</tspan>
    </text>
    <text y="16" font-family="monospace" font-size="10" fill="#64748B">
      ISSUED: JUNI 2026 • COURSERA &amp; GOOGLE
    </text>
  </g>
</svg>`;

// 4. Google Network Security Specialization
const googleSecuritySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="secBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A1128" />
      <stop offset="100%" stop-color="#001F54" />
    </linearGradient>
  </defs>

  <rect width="800" height="500" fill="url(#secBg)" />

  <rect x="0" y="0" width="800" height="6" fill="#3B82F6" />
  <rect x="25" y="25" width="750" height="450" fill="none" stroke="#1E3A8A" stroke-width="1.5" rx="8" />

  <g transform="translate(60, 75)">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="900">
      <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
    </text>
    <text x="95" y="-2" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#60A5FA" letter-spacing="2">
      CYBERSECURITY SPECIALIZATION
    </text>
  </g>

  <g transform="translate(400, 185)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#93C5FD" letter-spacing="2" font-weight="700">
      ADVANCED DEFENSE CERTIFICATE
    </text>
    <text y="45" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="900" fill="#FFFFFF">
      Google Network Security Specialization
    </text>
    <text y="85" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#94A3B8">
      Awarded with distinction to
    </text>
    <text y="125" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#60A5FA">
      Moch. Firmansyah
    </text>
    <text y="160" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#CBD5E1">
      Specializing in Perimeter Defense, Intrusion Detection, Cryptography, and Zero Trust Architecture
    </text>
  </g>

  <g transform="translate(680, 400)">
    <circle r="34" fill="#0A1128" stroke="#3B82F6" stroke-width="2" />
    <path d="M 0 -18 L 16 -10 L 16 6 C 16 16 0 24 0 24 C 0 24 -16 16 -16 6 L -16 -10 Z" fill="#3B82F6" fill-opacity="0.2" stroke="#60A5FA" stroke-width="1.5" />
    <text text-anchor="middle" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="900" fill="#93C5FD">
      SECURITY
    </text>
  </g>

  <g transform="translate(60, 435)">
    <text font-family="monospace" font-size="11" fill="#60A5FA">
      CREDENTIAL ID: <tspan fill="#F8FAFC">CJ9Y8P9DNC7C</tspan>
    </text>
    <text y="16" font-family="monospace" font-size="10" fill="#64748B">
      ISSUED: JUNI 2026 • GOOGLE &amp; COURSERA
    </text>
  </g>
</svg>`;

// 5. IDCamp AI Front-End Developer Track (Purple / Magenta)
const idcampSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="idcampBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E1035" />
      <stop offset="100%" stop-color="#2D114D" />
    </linearGradient>
  </defs>

  <rect width="800" height="500" fill="url(#idcampBg)" />
  <rect x="0" y="0" width="800" height="6" fill="#A855F7" />
  <rect x="25" y="25" width="750" height="450" fill="none" stroke="#6B21A8" stroke-width="1.5" rx="8" />

  <g transform="translate(60, 75)">
    <rect width="90" height="26" fill="#A855F7" rx="4" />
    <text x="45" y="18" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="900" fill="#FFFFFF">IDCAMP</text>
    <text x="102" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#D8B4FE" letter-spacing="2">INDOSAT OOREDOO HUTCHISON</text>
  </g>

  <g transform="translate(400, 185)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#D8B4FE" letter-spacing="2" font-weight="700">
      PROFESSIONAL DEVELOPER SCHOLARSHIP
    </text>
    <text y="45" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" fill="#FFFFFF">
      AI Front-End Developer Track
    </text>
    <text y="85" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#E9D5FF">
      Presented to
    </text>
    <text y="125" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#F0ABFC">
      Moch. Firmansyah
    </text>
    <text y="160" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#E2E8F0">
      Graduated with distinction in React, Client-Side AI integration, and Scalable Web Applications
    </text>
  </g>

  <g transform="translate(680, 400)">
    <circle r="34" fill="#1E1035" stroke="#C084FC" stroke-width="2" />
    <text text-anchor="middle" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="900" fill="#F0ABFC">
      IDCAMP
    </text>
    <text text-anchor="middle" y="16" font-family="system-ui, -apple-system, sans-serif" font-size="8" fill="#D8B4FE">
      VERIFIED
    </text>
  </g>

  <g transform="translate(60, 435)">
    <text font-family="monospace" font-size="11" fill="#C084FC">
      CREDENTIAL ID: <tspan fill="#FFFFFF">IDCAMP-AIFE-2026</tspan>
    </text>
    <text y="16" font-family="monospace" font-size="10" fill="#A855F7">
      ISSUED: 2026 • INDOSAT OOREDOO HUTCHISON
    </text>
  </g>
</svg>`;

// 6. Dicoding Cloud Architecture & Data Design (Cyan / Slate)
const dicodingCloudSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="dcBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#082F49" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>
  </defs>

  <rect width="800" height="500" fill="url(#dcBg)" />
  <rect x="0" y="0" width="800" height="6" fill="#06B6D4" />
  <rect x="25" y="25" width="750" height="450" fill="none" stroke="#155E75" stroke-width="1.5" rx="8" />

  <g transform="translate(60, 75)">
    <rect width="100" height="26" fill="#06B6D4" rx="4" />
    <text x="50" y="18" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="900" fill="#082F49">DICODING</text>
    <text x="112" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#67E8F9" letter-spacing="2">INDONESIA ACADEMY</text>
  </g>

  <g transform="translate(400, 185)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#67E8F9" letter-spacing="2" font-weight="700">
      CERTIFICATE OF COMPLETION
    </text>
    <text y="45" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="900" fill="#FFFFFF">
      Cloud Architecture &amp; Data Design
    </text>
    <text y="85" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#94A3B8">
      Awarded to
    </text>
    <text y="125" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#38BDF8">
      Moch. Firmansyah
    </text>
    <text y="160" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#CBD5E1">
      For mastery in Microservices, Relational &amp; NoSQL Schemas, and High Availability Cloud Systems
    </text>
  </g>

  <g transform="translate(680, 400)">
    <circle r="34" fill="#082F49" stroke="#06B6D4" stroke-width="2" />
    <text text-anchor="middle" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="900" fill="#22D3EE">
      DICODING
    </text>
    <text text-anchor="middle" y="16" font-family="system-ui, -apple-system, sans-serif" font-size="8" fill="#67E8F9">
      VERIFIED
    </text>
  </g>

  <g transform="translate(60, 435)">
    <text font-family="monospace" font-size="11" fill="#22D3EE">
      CREDENTIAL ID: <tspan fill="#FFFFFF">DICODING-CADD-2026</tspan>
    </text>
    <text y="16" font-family="monospace" font-size="10" fill="#0891B2">
      ISSUED: 2026 • DICODING INDONESIA
    </text>
  </g>
</svg>`;

// 7. Telkom University GCC TUNC-2 (Ruby / Crimson)
const telkomTuncSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="tuBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4C0519" />
      <stop offset="100%" stop-color="#1E1B4B" />
    </linearGradient>
  </defs>

  <rect width="800" height="500" fill="url(#tuBg)" />
  <rect x="0" y="0" width="800" height="6" fill="#F43F5E" />
  <rect x="25" y="25" width="750" height="450" fill="none" stroke="#881337" stroke-width="1.5" rx="8" />

  <g transform="translate(60, 75)">
    <rect width="80" height="26" fill="#F43F5E" rx="4" />
    <text x="40" y="18" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="900" fill="#FFFFFF">TELKOM</text>
    <text x="92" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#FDA4AF" letter-spacing="2">GOOGLE CLOUD COMMUNITY</text>
  </g>

  <g transform="translate(400, 185)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#FDA4AF" letter-spacing="2" font-weight="700">
      TECHNICAL TRAINING CERTIFICATE
    </text>
    <text y="45" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="900" fill="#FFFFFF">
      GCC x Telkom TUNC-2 (2026)
    </text>
    <text y="85" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#94A3B8">
      Awarded to
    </text>
    <text y="125" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#FB7185">
      Moch. Firmansyah
    </text>
    <text y="160" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#CBD5E1">
      For excellence in Modern Web Infrastructure, Cloud Collaboration &amp; Engineering Practices
    </text>
  </g>

  <g transform="translate(680, 400)">
    <circle r="34" fill="#4C0519" stroke="#FB7185" stroke-width="2" />
    <text text-anchor="middle" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="900" fill="#FDA4AF">
      TUNC-2
    </text>
    <text text-anchor="middle" y="16" font-family="system-ui, -apple-system, sans-serif" font-size="8" fill="#F43F5E">
      VERIFIED
    </text>
  </g>

  <g transform="translate(60, 435)">
    <text font-family="monospace" font-size="11" fill="#FB7185">
      CREDENTIAL ID: <tspan fill="#FFFFFF">GCC-TUNC2-2026</tspan>
    </text>
    <text y="16" font-family="monospace" font-size="10" fill="#FDA4AF">
      ISSUED: 2026 • TELKOM UNIVERSITY
    </text>
  </g>
</svg>`;

fs.writeFileSync(path.join(certDir, 'cci-hackathon.svg'), cciHackathonSvg);
fs.writeFileSync(path.join(certDir, 'aws-ai-practitioner.svg'), awsAiSvg);
fs.writeFileSync(path.join(certDir, 'google-ai.svg'), googleAiSvg);
fs.writeFileSync(path.join(certDir, 'google-network-security.svg'), googleSecuritySvg);
fs.writeFileSync(path.join(certDir, 'idcamp-ai-frontend.svg'), idcampSvg);
fs.writeFileSync(path.join(certDir, 'dicoding-cloud-data.svg'), dicodingCloudSvg);
fs.writeFileSync(path.join(certDir, 'telkom-tunc.svg'), telkomTuncSvg);

console.log('Successfully generated 7 certificate SVGs in public/certificates/');
