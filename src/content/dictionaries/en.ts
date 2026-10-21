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
    avatarAlt: "3D avatar of Dilara in a light headscarf and a navy hoodie, working on a laptop.",
    techTitle: "Technologies I work with",
    greeting: "Hi, I'm ",
    greetingName: "Dilara Top",
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
    aboutTitle: "What are these papers about?",
    about: [
      "People with color blindness cannot tell certain colors apart in digital images; for example, they can't see the numbers on Ishihara test plates. This can also affect how certain details in digital images are perceived.",
      "In our research we designed original filters that aim to make images easier to distinguish for different types of color vision. We used MobileNet models to evaluate the filters' effect.",
    ],
    resultLabel: "Result",
    imageCredit: "Source: Akalın et al., Symmetry 2025",
    beforeLabel: "Original",
    afterLabel: "Filtered",
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
  },
};
