import type { Localized } from "./types";

/** Education, languages and skills — from the CV and Dilara's own skill list. No self-rated levels. */

export const education: { school: string; degree: Localized; period: string; place: Localized; note?: Localized }[] = [
  {
    school: "Sakarya Üniversitesi",
    degree: {
      tr: "Bilişim Sistemleri Mühendisliği (Lisans)",
      en: "B.Sc. Information Systems Engineering",
      de: "B.Sc. Information Systems Engineering",
    },
    period: "2022 – 2026",
    place: { tr: "Sakarya, Türkiye", en: "Sakarya, Türkiye", de: "Sakarya, Türkei" },
    note: { tr: "GNO 3,56 / 4,00", en: "GPA 3.56 / 4.00", de: "Notendurchschnitt 3,56 / 4,00" },
  },
  {
    school: "Fachoberschule Holzkirchen",
    degree: { tr: "Lise", en: "High school", de: "Fachoberschule" },
    period: "2019 – 2021",
    place: { tr: "Almanya", en: "Germany", de: "Deutschland" },
  },
  {
    school: "Realschule Taufkirchen",
    degree: { tr: "Lise", en: "High school", de: "Realschule" },
    period: "2017 – 2019",
    place: { tr: "Almanya", en: "Germany", de: "Deutschland" },
  },
];

export const languages: { name: Localized; level: Localized }[] = [
  { name: { tr: "Türkçe", en: "Turkish", de: "Türkisch" }, level: { tr: "Ana dil", en: "Native", de: "Muttersprache" } },
  { name: { tr: "Almanca", en: "German", de: "Deutsch" }, level: { tr: "C1", en: "C1", de: "C1" } },
  { name: { tr: "İngilizce", en: "English", de: "Englisch" }, level: { tr: "B2", en: "B2", de: "B2" } },
];

export const skillGroups: { title: Localized; usedIn: Localized; items: string[] }[] = [
  {
    title: { tr: "Programlama ve web", en: "Programming and web", de: "Programmierung und Web" },
    usedIn: {
      tr: "Logo'da backend ve arayüz geliştirme, ElectricMotor, Mpox web uygulaması.",
      en: "Backend and frontend work at Logo, ElectricMotor, the mpox web app.",
      de: "Backend und Frontend bei Logo, ElectricMotor, die Mpox-Web-App.",
    },
    items: ["Python", "C#", "C++", "HTML", "CSS", "React", "Next.js", "Flask"],
  },
  {
    title: { tr: "Yapay zekâ ve veri", en: "AI and data", de: "KI und Daten" },
    usedIn: {
      tr: "Mpox karar destek sistemi, renk görme filtreleri, TEKNOFEST projesi.",
      en: "The mpox decision support system, the color vision filters, the TEKNOFEST project.",
      de: "Das Mpox-Entscheidungssystem, die Farbsehfilter, das TEKNOFEST-Projekt.",
    },
    items: ["OpenCV", "NumPy", "scikit-learn", "YOLOv9", "Machine learning", "Image processing", "Power BI"],
  },
  {
    title: { tr: "Veritabanı ve entegrasyon", en: "Databases and integration", de: "Datenbanken und Integration" },
    usedIn: {
      tr: "Logo'daki e-Fatura ve e-Belge ürünleri, veritabanı tasarımı projesi.",
      en: "The e-Invoice and e-Document products at Logo, the database design project.",
      de: "Die E-Rechnungs- und E-Dokument-Produkte bei Logo, das Datenbankprojekt.",
    },
    items: ["MSSQL", "ADO.NET", "REST API", "SOAP"],
  },
  {
    title: { tr: "İş analizi ve iş birliği", en: "Business analysis and collaboration", de: "Business-Analyse und Zusammenarbeit" },
    usedIn: {
      tr: "Logo'da iş analizi, Mikro'da ürün yönetimi.",
      en: "Business analysis at Logo, product management at Mikro.",
      de: "Business-Analyse bei Logo, Produktmanagement bei Mikro.",
    },
    items: ["Jira", "Confluence", "Postman", "SoapUI", "Microsoft Excel", "Lucidchart", "Odoo ERP"],
  },
];
