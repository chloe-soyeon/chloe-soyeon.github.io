export interface Feedback {
  author: string;
  comment: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  description: string;
  techStack: {
    backend: string[];
    frontend: string[];
    db: string[];
    infra: string[];
    ai?: string[];
  };
  details: string[];
  awards?: string;
  feedbacks?: Feedback[];
  demoUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Education {
  school: string;
  major: string;
  period: string;
  details?: string;
}

export interface Skill {
  category: string;
  items: string[];
  level?: number; // 0-100
}

export interface Award {
  date: string;
  title: string;
  issuer: string;
  description?: string;
}

export interface Certification {
  title: string;
  score?: string;
  issuer?: string;
  date?: string;
}

export interface UIStrings {
  nav: {
    profile: string;
    stack: string;
    work: string;
    contact: string;
  };
  hero: {
    badge: string;
    role1: string;
    role2: string;
    role3: string;
  };
  about: {
    label: string;
    title: string;
    philosophyTitle: string;
    educationTitle: string;
    awardsTitle: string;
    certTitle: string;
    paperTitle: string;
    paperLabel: string;
  };
  skills: {
    proficiency: string;
  };
  projects: {
    label: string;
    title: string;
    description: string;
    roleLabel: string;
    techLabel: string;
    awardLabel: string;
    feedbackLabel: string;
    demoLabel: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    githubLabel: string;
    copyright: string;
  };
}

export interface ProfileData {
  nameKor: string;
  nameEng: string;
  title: string;
  email: string;
  github: string;
  location: string;
  summary: string;
  philosophy: string;
  heroTitle: string;
  heroDescription: string;
}

export interface PaperData {
  title: string;
  conference: string;
  date: string;
  role: string;
}

export interface ContentData {
  profile: ProfileData;
  skills: Skill[];
  experience: Experience[];
  certifications: Certification[];
  projects: Project[];
  awards: Award[];
  education: Education[];
  paper: PaperData;
  ui: UIStrings;
}