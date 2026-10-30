export interface Project {
  id: string;
  badge: string;
  title: string;
  shortDesc: string;
  hook: string;
  tagCategory: string;
  tagColor: 'primary' | 'secondary' | 'accent' | 'card';
  fullContent?: {
    subject?: string;
    preheader?: string;
    excerpt?: string[];
    details?: string;
    metrics?: string[];
    ctaText?: string;
    substackLink?: string;
    mediumLink?: string;
    blogLink?: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  discipline: string;
  project: string;
  approach: string;
  execution: string[];
  role: string;
  results: {
    stat: string;
    label: string;
  }[];
  quote?: string;
  link?: {
    label: string;
    url: string;
  };
}

export interface SkillCategory {
  title: string;
  items: string[];
}
