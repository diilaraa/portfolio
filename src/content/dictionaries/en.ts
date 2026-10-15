import type { Dictionary } from "./tr";

export const en: Dictionary = {
  meta: {
    siteName: "Dilara Top",
    title: "Dilara Top — Information Systems Engineer",
    description:
      "Portfolio of Dilara Top, an Information Systems Engineer working across business analysis, product management, and applied AI.",
  },
  a11y: {
    skipToContent: "Skip to content",
    mainNav: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  nav: {
    work: "Work",
    research: "Research",
    experience: "Experience",
    about: "About",
    contact: "Contact",
  },
  lens: {
    button: "Color vision lens",
    title: "See this site through other eyes",
    description:
      "My research focuses on color vision deficiency. This lens simulates how the page appears with different types of color vision.",
    source: "Simulation: Machado et al., 2009",
    options: {
      none: "Typical color vision",
      protanopia: "Protanopia (red)",
      deuteranopia: "Deuteranopia (green)",
      tritanopia: "Tritanopia (blue)",
      achromatopsia: "Achromatopsia (no color)",
    },
  },
  home: {
    eyebrow: "Dilara Top · Information Systems Engineer",
    hero: [
      { text: "I translate between ", tone: "plain" },
      { text: "business", tone: "warm" },
      { text: " and ", tone: "plain" },
      { text: "code", tone: "cool" },
      { text: ".", tone: "plain" },
    ],
    intro:
      "I work where business analysis, product management, and applied AI meet: I understand the need, build the system, and measure the result with data.",
    proof: [
      "Sakarya University · GPA 3.56/4.00",
      "2 peer-reviewed journal papers",
      "TÜBİTAK 2209-A",
    ],
    ctaWork: "View work",
    ctaResearch: "Read the research",
  },
  work: {
    eyebrow: "Selected work",
    title: "Real problems, measured results.",
    all: "All work",
    readCase: "Read the case study",
  },
  status: {
    research: "Research",
    live: "Live",
    "in-progress": "In progress",
    competition: "Competition",
  },
  research: {
    eyebrow: "Research",
    title: "Filter design for color vision deficiency.",
    metricFrom: "33.95%",
    metricTo: "90.31%",
    metricLabel: "Mean F1 score",
    metricNote:
      "Original images compared with the proposed Filter Version 5: mean across seven types of color vision deficiency, test set, evaluated with MobileNetV1. Source: Symmetry 2025, Table 8 (mean computed from the table).",
    publications: "Publications",
    all: "Research and publications",
  },
  experienceSnapshot: {
    title: "Experience",
    all: "Full experience",
  },
  contactCta: {
    title: "Let's make a system easier to understand.",
    body: "Reach out about business analysis, product, and software roles, or freelance web projects.",
    email: "Send an email",
    cvTr: "CV (Turkish)",
    cvEn: "CV (English)",
  },
  footer: {
    location: "Kocaeli, Türkiye",
    rights: "All rights reserved.",
    builtWith: "Designed and built with Next.js and Tailwind CSS.",
  },
};
