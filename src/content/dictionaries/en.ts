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
    techTitle: "Technologies and tools",
    greeting: "Hi, I'm ",
    greetingName: "Dilara Top",
    ctaWork: "Explore my work",
    ctaResearch: "My publications",
  },
  work: {
    eyebrow: "Selected work",
    title: "Solutions I built for real problems.",
    all: "All work",
    readCase: "View project details",
  },
  status: {
    research: "Research",
    live: "Live",
    "in-progress": "In progress",
    competition: "Competition",
  },
  research: {
    eyebrow: "Research",
    title: "Original image processing filters for color vision deficiency",
    about: [
      "People with color vision deficiency can find it hard to tell some colors and color contrasts apart. In our research we developed original hybrid filters that aim to make digital images easier to distinguish for different types of color vision.",
      "We combined the daltonization algorithm with other image processing techniques and evaluated the filters' effectiveness with MobileNetV1 and MobileNetV2 models.",
    ],
    resultLabel: "Research result",
    imageCaption: "Ishihara test plate: the original image and the same plate processed with our filter.",
    imageCredit: "Source: Akalın et al., Symmetry 2025",
    beforeLabel: "Original",
    afterLabel: "Filtered",
    publications: "Publications",
    all: "Research and publications",
  },
  experienceSnapshot: {
    title: "Experience",
    all: "All experience",
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
