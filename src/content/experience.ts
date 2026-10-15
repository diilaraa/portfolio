import type { ExperienceItem } from "./types";

/** Reverse chronological. Sourced from the CV and Dilara's confirmations. Logos: official company websites. */
export const experience: ExperienceItem[] = [
  {
    id: "logo-ba",
    company: "Logo Yazılım",
    logo: { src: "/images/logos/logo-yazilim.svg", width: 93, height: 34 },
    role: { tr: "İş Analisti Stajyeri", en: "Business Analyst Intern", de: "Praktikantin Business Analyse" },
    period: { tr: "Şub – May 2026", en: "Feb – May 2026", de: "Feb. – Mai 2026" },
    location: { tr: "Türkiye", en: "Türkiye", de: "Türkei" },
    snapshot: {
      tr: "e-Belge özel entegratör ürünü için fonksiyonel analiz, mockup ve API doğrulama.",
      en: "Functional analysis, mockups, and API validation for an e-Document private integrator product.",
      de: "Funktionale Analyse, Mockups und API-Validierung für ein E-Dokument-Integratorprodukt.",
    },
  },
  {
    id: "mikro-pm",
    company: "Mikro Yazılım",
    logo: { src: "/images/logos/mikro-yazilim.png", width: 603, height: 317 },
    role: { tr: "Ürün Yönetimi Stajyeri", en: "Product Management Intern", de: "Praktikantin Produktmanagement" },
    period: { tr: "Ağu – Eyl 2025", en: "Aug – Sep 2025", de: "Aug. – Sep. 2025" },
    location: { tr: "Türkiye", en: "Türkiye", de: "Türkei" },
    snapshot: {
      tr: "Sprint planlama, backlog önceliklendirme ve sürüm duyuruları.",
      en: "Sprint planning, backlog prioritization, and release communication.",
      de: "Sprintplanung, Backlog-Priorisierung und Release-Kommunikation.",
    },
  },
  {
    id: "logo-dev",
    company: "Logo Yazılım",
    logo: { src: "/images/logos/logo-yazilim.svg", width: 93, height: 34 },
    role: { tr: "Yazılım Geliştirme Stajyeri", en: "Software Development Intern", de: "Praktikantin Softwareentwicklung" },
    period: { tr: "Tem – Ağu 2025", en: "Jul – Aug 2025", de: "Juli – Aug. 2025" },
    location: { tr: "Türkiye", en: "Türkiye", de: "Türkei" },
    snapshot: {
      tr: "e-Fatura entegratöründe C# backend, React arayüz, SQL ve API testleri.",
      en: "C# backend, React frontend, SQL, and API testing on an e-Invoice integrator.",
      de: "C#-Backend, React-Frontend, SQL und API-Tests für einen E-Rechnungs-Integrator.",
    },
  },
  {
    id: "kanzlei-heinrich",
    company: "Kanzlei Heinrich",
    role: { tr: "Muhasebe Ofisi Çalışanı", en: "Accounting Office Employee", de: "Mitarbeiterin Buchhaltung" },
    period: { tr: "Kas 2019 – Tem 2021", en: "Nov 2019 – Jul 2021", de: "Nov. 2019 – Juli 2021" },
    location: { tr: "Münih, Almanya", en: "Munich, Germany", de: "München, Deutschland" },
    snapshot: {
      tr: "Şirketlerin gelir-gider kayıtları ve günlük muhasebe operasyonları.",
      en: "Income and expense records and day-to-day accounting operations.",
      de: "Erfassung von Einnahmen und Ausgaben sowie laufende Buchhaltung.",
    },
  },
];
