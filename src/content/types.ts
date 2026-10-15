import type { Locale } from "@/lib/i18n";

/** A value in every site language. Content files keep all three side by side so updates stay in one place. */
export type Localized<T = string> = Record<Locale, T>;

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: Localized;
  /** Required whenever the image comes from a publication or third party. */
  credit?: Localized;
};

export type ProjectStatus = "research" | "live" | "in-progress" | "competition";
export type ProjectCategory = "research" | "product" | "web";

export type Project = {
  slug: string;
  title: Localized;
  /** One-line summary used on cards. */
  summary: Localized;
  category: ProjectCategory;
  status: ProjectStatus;
  period: Localized;
  role: Localized;
  stack: string[];
  /** Omitted when no real project image exists yet; never substitute another project's image. */
  cover?: ImageAsset;
  featured?: boolean;
  links?: { label: Localized; href: string }[];
};

export type ArchiveProject = {
  title: Localized;
  summary: Localized;
  stack: string[];
};

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  details: string;
  date: Localized;
  doi: string;
  aim: Localized;
  method: Localized;
  contribution: Localized;
};

export type ExperienceItem = {
  id: string;
  company: string;
  /** Official company logo; until a file is supplied the UI shows a monogram tile. */
  logo?: { src: string; width: number; height: number };
  role: Localized;
  period: Localized;
  location: Localized;
  /** Short line for the home page snapshot. */
  snapshot: Localized;
  context: Localized;
  did: Localized<string[]>;
  connected: Localized;
  tools: string[];
};
