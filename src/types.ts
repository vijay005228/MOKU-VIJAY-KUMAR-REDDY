export interface Project {
  id: string;
  title: string;
  overview: string;
  features: string[];
  techStack: string[];
  category: "ai" | "web" | "utility";
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: number }[];
}

export interface Language {
  name: string;
  proficiency: string;
}
