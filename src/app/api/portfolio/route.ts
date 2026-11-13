import { NextRequest, NextResponse } from "next/server";
import { turso } from "@/lib/turso";
import {
  PROJECTS as STATIC_PROJECTS,
  SKILL_CATEGORIES as STATIC_SKILL_CATEGORIES,
  PERSONAL_INFO as STATIC_PERSONAL_INFO,
  EXPERIENCES as STATIC_EXPERIENCES,
} from "@/data/portfolioData";
import type { Project } from "@/types/project";
import type { Skill, SkillCategory } from "@/types/skill";
import type { PersonalInfo } from "@/types/profile";
import type { ExperienceItem } from "@/types/experience";

function safeParseJson<T>(val: unknown, fallback: T): T {
  if (Array.isArray(val)) return val as unknown as T;
  if (typeof val === "string") {
    try {
      return JSON.parse(val) as T;
    } catch {
      return fallback;
    }
  }
  return fallback;
}

const MONTH_NAMES_MAP: Record<string, number> = {
  jan: 1, januari: 1, january: 1,
  feb: 2, februari: 2, february: 2,
  mar: 3, maret: 3, march: 3,
  apr: 4, april: 4,
  mei: 5, may: 5,
  jun: 6, juni: 6, june: 6,
  jul: 7, juli: 7, july: 7,
  agu: 8, ags: 8, agust: 8, agustus: 8, aug: 8, august: 8,
  sep: 9, sept: 9, september: 9,
  okt: 10, oct: 10, oktober: 10, october: 10,
  nov: 11, nop: 11, november: 11,
  des: 12, dec: 12, desember: 12, december: 12,
};

function parseSingleDateScore(str?: string, isEnd = false): number {
  if (!str) return 0;
  const s = str.trim().toLowerCase();
  if (["present", "sekarang", "current", "saat ini", "now", "skrg"].some((k) => s.includes(k))) {
    return 999999;
  }
  const yearMatch = s.match(/\b(19\d\d|20\d\d)\b/);
  const year = yearMatch ? parseInt(yearMatch[1], 10) : 0;
  if (!year) return 0;

  let month = isEnd ? 12 : 1;
  for (const [mName, mNum] of Object.entries(MONTH_NAMES_MAP)) {
    const regex = new RegExp(`\\b${mName}\\b`, "i");
    if (regex.test(s)) {
      month = mNum;
      break;
    }
  }
  return year * 100 + month;
}

function sortExperiences<T extends { period?: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const periodA = a.period || "";
    const periodB = b.period || "";

    const partsA = periodA.split(/\s*(?:[-–—/]|to|s\/d|sampai|until)\s*/i).filter(Boolean);
    const partsB = periodB.split(/\s*(?:[-–—/]|to|s\/d|sampai|until)\s*/i).filter(Boolean);

    const endA = partsA.length >= 2 ? parseSingleDateScore(partsA[partsA.length - 1], true) : parseSingleDateScore(partsA[0], false);
    const endB = partsB.length >= 2 ? parseSingleDateScore(partsB[partsB.length - 1], true) : parseSingleDateScore(partsB[0], false);

    if (endA !== endB) {
      return endB - endA;
    }

    const startA = parseSingleDateScore(partsA[0], false);
    const startB = parseSingleDateScore(partsB[0], false);
    return startB - startA;
  });
}

async function fetchProjects(): Promise<Project[]> {
  if (!turso) return STATIC_PROJECTS;
  try {
    const result = await turso.execute("SELECT * FROM projects");
    if (!result.rows || result.rows.length === 0) return STATIC_PROJECTS;

    return result.rows.map((d) => ({
      id: String(d.id),
      title: String(d.title || ""),
      subtitle: String(d.subtitle || ""),
      category: String(d.category || "Web App"),
      image: String(d.image || "/projects/manajemen-kontrakan.png"),
      description: String(d.description || ""),
      longDescription: String(d.long_description || d.longDescription || d.description || ""),
      tags: safeParseJson<string[]>(d.tags, []),
      metrics: d.metrics ? String(d.metrics) : undefined,
      year: String(d.year || "2024"),
      demoUrl: String(d.demo_url || d.demoUrl || "#"),
      githubUrl: String(d.github_url || d.githubUrl || "#"),
      highlights: safeParseJson<string[]>(d.highlights, []),
      featured: Boolean(d.featured),
    }));
  } catch (error) {
    console.warn("Turso fetchProjects error:", error);
    return STATIC_PROJECTS;
  }
}

async function fetchSkills(): Promise<SkillCategory[]> {
  if (!turso) return STATIC_SKILL_CATEGORIES;
  try {
    const result = await turso.execute("SELECT * FROM skills");
    if (!result.rows || result.rows.length === 0) return STATIC_SKILL_CATEGORIES;

    const categoryMap = new Map<string, Skill[]>();

    result.rows.forEach((row) => {
      const cat = String(row.category || "Technical Skills");
      if (!categoryMap.has(cat)) {
        categoryMap.set(cat, []);
      }
      categoryMap.get(cat)!.push({
        id: row.id ? String(row.id) : undefined,
        name: String(row.name || ""),
        category: cat,
        level: String(row.level || "Proficient"),
        percent: row.percent !== null && row.percent !== undefined ? Number(row.percent) : undefined,
        logo: row.logo ? String(row.logo) : undefined,
        highlight: Boolean(row.highlight),
        issuer: row.issuer ? String(row.issuer) : undefined,
        issueDate: (row.issue_date || row.issueDate) ? String(row.issue_date || row.issueDate) : undefined,
        credentialId: (row.credential_id || row.credentialId) ? String(row.credential_id || row.credentialId) : undefined,
      });
    });

    const predefinedOrder = [
      "Front-End Web Development",
      "Back-End Development",
      "Programming Languages",
      "Database & Storage",
      "Authentication & Security",
      "Deployment & Testing",
      "Developer Tools",
      "Soft Skills & Professional",
      "Achievements & Certifications",
    ];

    const finalResult: SkillCategory[] = [];
    predefinedOrder.forEach((title) => {
      if (categoryMap.has(title)) {
        finalResult.push({ title, skills: categoryMap.get(title)! });
        categoryMap.delete(title);
      }
    });

    categoryMap.forEach((skills, title) => {
      finalResult.push({ title, skills });
    });

    return finalResult.length > 0 ? finalResult : STATIC_SKILL_CATEGORIES;
  } catch (error) {
    console.warn("Turso fetchSkills error:", error);
    return STATIC_SKILL_CATEGORIES;
  }
}

async function fetchProfile(): Promise<PersonalInfo> {
  if (!turso) return STATIC_PERSONAL_INFO;
  try {
    const result = await turso.execute("SELECT * FROM profile LIMIT 1");
    if (!result.rows || result.rows.length === 0) return STATIC_PERSONAL_INFO;

    const row = result.rows[0];
    const social = safeParseJson<Record<string, string>>(row.social_links, {});

    return {
      name: String(row.name || STATIC_PERSONAL_INFO.name),
      shortName: String(row.short_name || row.shortName || STATIC_PERSONAL_INFO.shortName),
      role: String(row.role || row.headline || STATIC_PERSONAL_INFO.role),
      headline: row.headline ? String(row.headline) : undefined,
      subheadline: String(row.subheadline || row.about || STATIC_PERSONAL_INFO.subheadline),
      about: row.about ? String(row.about) : STATIC_PERSONAL_INFO.about,
      tagline: row.tagline ? String(row.tagline) : STATIC_PERSONAL_INFO.tagline,
      bio: row.bio ? String(row.bio) : STATIC_PERSONAL_INFO.bio,
      status: String(row.status || STATIC_PERSONAL_INFO.status),
      location: String(row.location || STATIC_PERSONAL_INFO.location),
      email: String(row.email || STATIC_PERSONAL_INFO.email),
      phone: String(row.phone || STATIC_PERSONAL_INFO.phone),
      avatar: row.avatar ? String(row.avatar) : undefined,
      resumeUrl: String(row.resume_url || row.resumeUrl || STATIC_PERSONAL_INFO.resumeUrl),
      socialLinks: {
        github: social.github || STATIC_PERSONAL_INFO.socialLinks.github,
        linkedin: social.linkedin || STATIC_PERSONAL_INFO.socialLinks.linkedin,
        instagram: social.instagram || STATIC_PERSONAL_INFO.socialLinks.instagram,
        tiktok: social.tiktok || STATIC_PERSONAL_INFO.socialLinks.tiktok,
      },
      stats: STATIC_PERSONAL_INFO.stats,
    };
  } catch (error) {
    console.warn("Turso fetchProfile error:", error);
    return STATIC_PERSONAL_INFO;
  }
}

async function fetchExperiences(): Promise<ExperienceItem[]> {
  if (!turso) return sortExperiences(STATIC_EXPERIENCES);
  try {
    const result = await turso.execute("SELECT * FROM experiences");
    if (!result.rows || result.rows.length === 0) return sortExperiences(STATIC_EXPERIENCES);

    const mapped = result.rows.map((row) => ({
      id: row.id ? String(row.id) : undefined,
      period: String(row.period || ""),
      role: String(row.role || ""),
      company: String(row.company || ""),
      location: String(row.location || ""),
      description: String(row.description || ""),
      technologies: safeParseJson<string[]>(row.technologies, []),
    }));

    return sortExperiences(mapped);
  } catch (error) {
    console.warn("Turso fetchExperiences error:", error);
    return sortExperiences(STATIC_EXPERIENCES);
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");

  if (type === "projects") {
    const data = await fetchProjects();
    return NextResponse.json(data);
  }

  if (type === "skills") {
    const data = await fetchSkills();
    return NextResponse.json(data);
  }

  if (type === "profile") {
    const data = await fetchProfile();
    return NextResponse.json(data);
  }

  if (type === "experiences") {
    const data = await fetchExperiences();
    return NextResponse.json(data);
  }

  // Default: return all
  const [projects, skills, profile, experiences] = await Promise.all([
    fetchProjects(),
    fetchSkills(),
    fetchProfile(),
    fetchExperiences(),
  ]);

  return NextResponse.json({
    projects,
    skills,
    profile,
    experiences,
  });
}
