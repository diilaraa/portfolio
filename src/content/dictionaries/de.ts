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
    ctaWork: "Projekte ansehen",
    ctaResearch: "Forschung lesen",
  },
  work: {
    eyebrow: "Ausgewählte Projekte",
    title: "Echte Probleme, gemessene Ergebnisse.",
    all: "Alle Projekte",
    readCase: "Fallstudie lesen",
  },
  status: {
    research: "Forschung",
    live: "Live",
    "in-progress": "In Arbeit",
    competition: "Wettbewerb",
  },
  research: {
    eyebrow: "Forschung",
    title: "Filterdesign für Farbsehschwächen.",
    metricFrom: "33,95 %",
    metricTo: "90,31 %",
    metricLabel: "Mittlerer F1-Score",
    metricNote:
      "Originalbilder im Vergleich zur vorgeschlagenen Filterversion 5: Mittelwert über sieben Arten von Farbsehschwäche, Testdatensatz, bewertet mit MobileNetV1. Quelle: Symmetry 2025, Tabelle 8 (Mittelwert aus der Tabelle berechnet).",
    publications: "Publikationen",
    all: "Forschung und Publikationen",
  },
  experienceSnapshot: {
    eyebrow: "Erfahrung",
    title: "Von Buchungssätzen zu Produktentscheidungen.",
    all: "Gesamte Erfahrung",
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
    builtWith: "Gestaltet und entwickelt mit Next.js und Tailwind CSS.",
  },
};
