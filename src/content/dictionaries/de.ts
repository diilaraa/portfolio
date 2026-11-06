import type { Dictionary } from "./tr";

export const de: Dictionary = {
  meta: {
    siteName: "Dilara Top",
    title: "Dilara Top — Ingenieurin für Informationssysteme",
    description:
      "Portfolio von Dilara Top, Ingenieurin für Informationssysteme an der Schnittstelle von Business-Analyse, Produktmanagement und angewandter KI.",
  },
  a11y: {
    skipToContent: "Zum Inhalt springen",
    mainNav: "Hauptnavigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
  },
  nav: {
    work: "Projekte",
    research: "Forschung",
    experience: "Erfahrung",
    about: "Über mich",
    contact: "Kontakt",
  },
  lens: {
    button: "Farbsehen-Linse",
    title: "Diese Seite mit anderen Augen sehen",
    description:
      "Ich forsche zu Farbsehschwächen. Diese Linse simuliert, wie die Seite bei verschiedenen Formen des Farbsehens wirkt.",
    source: "Simulation: Machado et al., 2009",
    options: {
      none: "Typisches Farbsehen",
      protanopia: "Protanopie (Rot)",
      deuteranopia: "Deuteranopie (Grün)",
      tritanopia: "Tritanopie (Blau)",
      achromatopsia: "Achromatopsie (farblos)",
    },
  },
  home: {
    eyebrow: "Dilara Top · Ingenieurin für Informationssysteme",
    hero: [
      { text: "Ich übersetze zwischen ", tone: "plain" },
      { text: "Business", tone: "warm" },
      { text: " und ", tone: "plain" },
      { text: "Code", tone: "cool" },
      { text: ".", tone: "plain" },
    ],
    intro:
      "Ich arbeite an der Schnittstelle von Business-Analyse, Produktmanagement und angewandter KI: Ich verstehe den Bedarf, baue das System und messe das Ergebnis mit Daten.",
    proof: [
      "Universität Sakarya · Note 3,56/4,00",
      "2 begutachtete Zeitschriftenartikel",
      "TÜBİTAK 2209-A",
    ],
    avatarAlt: "3D-Avatar von Dilara mit hellem Kopftuch und dunkelblauem Hoodie am Laptop.",
    techTitle: "Technologien und Tools",
    greeting: "Hallo, ich bin ",
    greetingName: "Dilara Top",
    ctaWork: "Meine Projekte entdecken",
    ctaResearch: "Meine Publikationen",
  },
  work: {
    eyebrow: "Ausgewählte Projekte",
    title: "Lösungen, die ich für echte Probleme entwickelt habe.",
    all: "Alle Projekte",
    readCase: "Projektdetails ansehen",
  },
  status: {
    research: "Forschung",
    live: "Live",
    "in-progress": "In Arbeit",
    competition: "Wettbewerb",
  },
  research: {
    eyebrow: "Forschung",
    title: "Eigene Bildverarbeitungsfilter für Farbsehschwächen",
    about: [
      "Menschen mit Farbsehschwächen fällt es oft schwer, bestimmte Farben und Farbkontraste zu unterscheiden. In unserer Forschung haben wir eigene hybride Filter entwickelt, die digitale Bilder für verschiedene Formen des Farbsehens besser unterscheidbar machen sollen.",
      "Dazu haben wir den Daltonisierungsalgorithmus mit weiteren Bildverarbeitungstechniken kombiniert und die Wirksamkeit der Filter mit den Modellen MobileNetV1 und MobileNetV2 bewertet.",
    ],
    resultLabel: "Forschungsergebnis",
    imageCaption: "Ishihara-Tafel: das Originalbild und dieselbe Tafel nach unserem Filter.",
    imageCredit: "Quelle: Akalın et al., Symmetry 2025",
    beforeLabel: "Original",
    afterLabel: "Gefiltert",
    publications: "Publikationen",
    all: "Forschung und Publikationen",
  },
  experienceSnapshot: {
    title: "Erfahrung",
    all: "Alle Erfahrungen",
  },
  contactCta: {
    title: "Machen wir ein System verständlicher.",
    body: "Sprechen Sie mich an für Rollen in Business-Analyse, Produkt und Softwareentwicklung oder für freiberufliche Webprojekte.",
    email: "E-Mail senden",
    cvTr: "Lebenslauf (Türkisch)",
    cvEn: "Lebenslauf (Englisch)",
  },
  footer: {
    location: "Kocaeli, Türkei",
    rights: "Alle Rechte vorbehalten.",
  },
};
