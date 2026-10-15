import type { PagesCopy } from "./tr";

export const enPages: PagesCopy = {
  work: {
    title: "Work",
    description: "Research projects, a website launched for a real business, and ongoing design work.",
    intro:
      "Every project starts with the same question: who has which problem? Below are my research, product, and web projects: what I did and how I measured the result.",
    archiveTitle: "Archive",
    archiveIntro: "Smaller course and team projects that built my technical foundation.",
  },
  caseStudy: {
    back: "All work",
    contents: "Contents",
    role: "Role",
    period: "Period",
    stack: "Stack",
    status: "Status",
    links: "Links",
    next: "Next project",
    researchNotice:
      "This is a research prototype. It is not a clinically validated diagnostic tool and does not replace medical judgment.",
    inProgressNotice: "This project is in progress; the page will be updated as design and development move forward.",
    lastUpdated: "Last updated",
  },
  research: {
    title: "Research and publications",
    description: "Two peer-reviewed journal papers on image processing filters for color vision deficiency.",
    intro:
      "What ties my research together is using image processing to make a problem more visible: digital images for people with color blindness, skin lesions, and blood cell images.",
    aim: "Aim",
    method: "Method",
    contribution: "My contribution",
    readPaper: "Read the paper",
    authors: "Authors",
    threadsTitle: "A common thread: original filter design",
    threadsIntro: "I used the same approach on three different problems; each time, an original filter improves the raw image before it reaches the model.",
    relatedProject: "View project",
  },
  experience: {
    title: "Experience",
    description: "Experience at Logo Yazılım, Mikro Yazılım, and an accounting office in Munich.",
    intro:
      "From accounting records to e-Document integration, from backend development to product management, I have seen the same kind of systems from different layers.",
    did: "What I did",
    connected: "What it connected to",
    tools: "Tools",
  },
  about: {
    title: "About",
    description: "Dilara Top: education, time in Germany, languages, and way of working.",
    lead: "I'm an Information Systems Engineer who understands technical systems, analyzes business needs, and builds the bridge between them.",
    story: [
      "I finished high school in Germany. During those years I also worked at an accounting office in Munich, recording companies' income and expenses, which was my first look at how a business lives with its data.",
      "At Sakarya University I carried that curiosity into software, data, and AI. In my internships I wrote code and also worked on analysis, testing, and documentation.",
      "Today I'm most interested in the point where a business need turns into a technical solution: business analysis, product management, and software.",
    ],
    educationTitle: "Education",
    languagesTitle: "Languages",
    skillsTitle: "Skills",
    approachTitle: "How I work",
    approach: [
      { title: "Understand the problem first", body: "Before jumping to a solution, I clarify who needs what and how success will be measured." },
      { title: "Measurable results", body: "I judge a model, filter, or feature by its results, and I don't claim what I can't measure." },
      { title: "Clear documentation", body: "Analysis documents, mockups, and release notes help a team understand the same thing." },
    ],
  },
  contact: {
    title: "Contact",
    description: "Get in touch with Dilara Top: email, LinkedIn, GitHub, and CV.",
    lead: "Write to me about business analysis, product, and software roles, or freelance web projects.",
    email: "Email",
    location: "Location",
    cv: "CV",
  },
  notFound: {
    title: "Page not found",
    body: "The page you're looking for may have moved or never existed.",
    home: "Back to home",
  },
};
