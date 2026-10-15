import type { ArchiveProject, Project } from "./types";

/**
 * Every claim here is sourced: thesis (Sakarya Üniversitesi, 2025–2026), the two journal
 * papers, or Dilara's own confirmation. See docs/PLAN.md §6 before changing any metric.
 */
export const projects: Project[] = [
  {
    slug: "mpox-decision-support",
    featured: true,
    category: "research",
    status: "research",
    title: {
      tr: "Mpox tanısı için yapay zekâ destekli karar destek sistemi",
      en: "AI-assisted decision support for mpox assessment",
      de: "KI-gestütztes Entscheidungsunterstützungssystem für Mpox",
    },
    summary: {
      tr: "Klinik veriyi, deri lezyonu görüntülerini ve epidemiyolojik veriyi tek bir web platformunda birleştiren araştırma prototipi. TÜBİTAK 2209-A destekli bitirme projesi.",
      en: "A research prototype that brings clinical data, skin-lesion images, and epidemiological data into one web platform. Graduation project supported by TÜBİTAK 2209-A.",
      de: "Ein Forschungsprototyp, der klinische Daten, Hautläsionsbilder und epidemiologische Daten in einer Webplattform zusammenführt. Abschlussprojekt, gefördert durch TÜBİTAK 2209-A.",
    },
    period: { tr: "Kasım 2024 – 2026", en: "Nov 2024 – 2026", de: "Nov. 2024 – 2026" },
    role: {
      tr: "Proje yürütücüsü · Hayrunnisa Yılmaz ile birlikte",
      en: "Project lead · with Hayrunnisa Yılmaz",
      de: "Projektleitung · mit Hayrunnisa Yılmaz",
    },
    stack: ["Python", "scikit-learn", "YOLOv9", "OpenCV", "Flask", "Jinja2", "Plotly"],
    cover: {
      src: "/images/work/mpox-decision-support/web-app-home.webp",
      width: 881,
      height: 752,
      alt: {
        tr: "Klinik karar destek sistemi web uygulamasının ana sayfası: klinik veri girişi, epidemiyolojik panel ve lezyon görüntü analizi modülleri.",
        en: "Home screen of the clinical decision support web app with clinical data, epidemiology dashboard, and lesion image analysis modules.",
        de: "Startseite der Web-App mit den Modulen klinische Daten, Epidemiologie-Dashboard und Läsionsbildanalyse.",
      },
    },
  },
  {
    slug: "cvd-image-filters",
    featured: true,
    category: "research",
    status: "research",
    title: {
      tr: "Renk görme farklılıkları için özgün görüntü işleme filtreleri",
      en: "Image processing filters for color vision deficiency",
      de: "Bildverarbeitungsfilter für Farbsehschwächen",
    },
    summary: {
      tr: "Yedi renk görme tipi için tasarlanan filtreler; etkileri MobileNet ile insan yargısından bağımsız ölçüldü. İki uluslararası hakemli dergide yayımlandı.",
      en: "Filters designed for seven types of color vision deficiency, evaluated with MobileNet independently of human judgment. Published in two peer-reviewed journals.",
      de: "Filter für sieben Arten von Farbsehschwäche, unabhängig vom menschlichen Urteil mit MobileNet bewertet. In zwei begutachteten Fachzeitschriften veröffentlicht.",
    },
    period: { tr: "2025", en: "2025", de: "2025" },
    role: {
      tr: "Yöntem, yazılım, analiz ve görselleştirme",
      en: "Methodology, software, analysis, and visualization",
      de: "Methodik, Software, Analyse und Visualisierung",
    },
    stack: ["Python", "OpenCV", "NumPy", "MobileNetV1", "MobileNetV2"],
    cover: {
      src: "/images/work/cvd-image-filters/ishihara-after.webp",
      width: 168,
      height: 170,
      alt: {
        tr: "Önerilen 5. filtre sürümü uygulanmış Ishihara test plakası; 8 rakamı belirgin biçimde görünüyor.",
        en: "Ishihara test plate after the proposed Filter Version 5; the number 8 stands out clearly.",
        de: "Ishihara-Tafel nach Filterversion 5; die Zahl 8 ist deutlich erkennbar.",
      },
      credit: {
        tr: "Akalın, Özkan Aksoy, Top ve Kara, Symmetry 2025, Şekil 6 (CC BY 4.0)",
        en: "Akalın, Özkan Aksoy, Top & Kara, Symmetry 2025, Fig. 6 (CC BY 4.0)",
        de: "Akalın, Özkan Aksoy, Top & Kara, Symmetry 2025, Abb. 6 (CC BY 4.0)",
      },
    },
  },
  {
    slug: "electricmotor",
    featured: true,
    category: "web",
    status: "live",
    title: { tr: "ElectricMotor", en: "ElectricMotor", de: "ElectricMotor" },
    summary: {
      tr: "Sharjah'taki bağımsız bir Tesla servis merkezi için tek başıma tasarlayıp geliştirdiğim ve yayına aldığım kurumsal web sitesi.",
      en: "A business website I designed, built, and launched on my own for an independent Tesla service center in Sharjah.",
      de: "Eine Unternehmenswebsite, die ich für ein unabhängiges Tesla-Servicezentrum in Sharjah allein gestaltet, entwickelt und veröffentlicht habe.",
    },
    period: { tr: "Ağustos 2026", en: "August 2026", de: "August 2026" },
    role: {
      tr: "Tasarım, geliştirme ve yayına alma",
      en: "Design, development, and launch",
      de: "Design, Entwicklung und Launch",
    },
    stack: ["Next.js", "React", "TypeScript", "Vercel"],
    cover: {
      src: "/images/work/electricmotor/homepage.webp",
      width: 1440,
      height: 790,
      alt: {
        tr: "ElectricMotor ana sayfası: koyu zemin üzerinde kırmızı bir Tesla Roadster ve randevu butonu.",
        en: "ElectricMotor home page: a red Tesla Roadster on a dark background with a booking button.",
        de: "ElectricMotor-Startseite: ein roter Tesla Roadster auf dunklem Hintergrund mit Termin-Button.",
      },
    },
    links: [{ label: { tr: "Canlı site", en: "Live site", de: "Live-Website" }, href: "https://electricmotor.ae/" }],
  },
  {
    slug: "dokar-zemin",
    category: "web",
    status: "in-progress",
    title: { tr: "Dokar Zemin", en: "Dokar Zemin", de: "Dokar Zemin" },
    summary: {
      tr: "Fore kazık, ankraj ve deep soil mixing uygulayan bir zemin iyileştirme firması için yeni kurumsal web sitesi tasarımı. Devam ediyor.",
      en: "A new corporate website design for a ground improvement company working with bored piles, anchors, and deep soil mixing. In progress.",
      de: "Neues Corporate-Website-Design für ein Baugrundverbesserungsunternehmen (Bohrpfähle, Anker, Deep Soil Mixing). In Arbeit.",
    },
    period: { tr: "2026 · devam ediyor", en: "2026 · ongoing", de: "2026 · laufend" },
    role: { tr: "Tasarım ve geliştirme", en: "Design and development", de: "Design und Entwicklung" },
    stack: ["Web design", "Information architecture", "SEO"],
    cover: {
      src: "/images/work/dokar-zemin/homepage.webp",
      width: 1896,
      height: 872,
      alt: {
        tr: "Dokar Zemin ana sayfa tasarımı: şantiyedeki fore kazık makineleri üzerinde \"Zemin İyileştirme Sistemleri\" başlığı.",
        en: "Dokar Zemin home page design: the headline \"Zemin İyileştirme Sistemleri\" (ground improvement systems) over piling rigs.",
        de: "Dokar-Zemin-Startseitendesign: die Überschrift \"Zemin İyileştirme Sistemleri\" (Baugrundverbesserung) über Bohrgeräten.",
      },
    },
  },
  {
    slug: "teknofest-blood-cell",
    category: "research",
    status: "competition",
    title: {
      tr: "Kan hücresi görüntülerinden kanser tespiti — TEKNOFEST 2025",
      en: "Cancer detection from blood cell images — TEKNOFEST 2025",
      de: "Krebserkennung aus Blutzellbildern — TEKNOFEST 2025",
    },
    summary: {
      tr: "SAÜ INWO ekibiyle yarı finale kalan öğrenci projesi; özgün görüntü işleme filtresi geliştirme üzerine çalıştım.",
      en: "A student project with team SAÜ INWO that reached the semi-finals; I worked on developing an original image processing filter.",
      de: "Ein Studierendenprojekt mit dem Team SAÜ INWO, das das Halbfinale erreichte; ich entwickelte einen eigenen Bildverarbeitungsfilter.",
    },
    period: { tr: "2025", en: "2025", de: "2025" },
    role: {
      tr: "Takım yürütücüsü · Esma Kara ve Hayrunnisa Yılmaz ile",
      en: "Team lead · with Esma Kara and Hayrunnisa Yılmaz",
      de: "Teamleitung · mit Esma Kara und Hayrunnisa Yılmaz",
    },
    stack: ["Python", "OpenCV", "Image processing"],
  },
];

export const archive: ArchiveProject[] = [
  {
    title: {
      tr: "Pediatri Asistan Nöbet Yönetim Sistemi",
      en: "Pediatric Resident Duty Management System",
      de: "Dienstplansystem für pädiatrische Assistenzärzte",
    },
    summary: {
      tr: "Yönetici paneli, takvim tabanlı nöbet takibi, randevu planlama ve acil duyurular. Code-First yaklaşımı.",
      en: "Admin panel, calendar-based duty tracking, appointment scheduling, and emergency announcements. Code-First approach.",
      de: "Admin-Bereich, kalenderbasierte Dienstplanung, Terminplanung und Notfallmeldungen. Code-First-Ansatz.",
    },
    stack: ["ASP.NET MVC", "Entity Framework", "MSSQL"],
  },
  {
    title: { tr: "Veritabanı Tasarımı ve Arayüz", en: "Database Design and Interface", de: "Datenbankdesign und Oberfläche" },
    summary: {
      tr: "ER diyagramı, iş kuralları, view, stored procedure ve trigger'lar; C# masaüstü arayüzü.",
      en: "ER diagram, business rules, views, stored procedures, and triggers, with a C# desktop interface.",
      de: "ER-Diagramm, Geschäftsregeln, Views, Stored Procedures und Trigger mit C#-Desktop-Oberfläche.",
    },
    stack: ["MSSQL", "C#"],
  },
  {
    title: {
      tr: "Veri Madenciliği ile Gayrimenkul Analizi",
      en: "Real Estate Analysis with Data Mining",
      de: "Immobilienanalyse mit Data Mining",
    },
    summary: {
      tr: "Takım lideri. 1.000+ örnekli veri setinde Lojistik Regresyon, Random Forest, C4.5 ve K-NN karşılaştırması ve hiperparametre optimizasyonu.",
      en: "Team lead. Compared Logistic Regression, Random Forest, C4.5, and K-NN on a 1,000+ sample dataset, with hyperparameter tuning.",
      de: "Teamleitung. Vergleich von Logistischer Regression, Random Forest, C4.5 und K-NN auf über 1.000 Datensätzen inkl. Hyperparameter-Optimierung.",
    },
    stack: ["Python", "scikit-learn"],
  },
  {
    title: {
      tr: "Otonom Araç Simülasyonu — Unity",
      en: "Autonomous Vehicle Simulation — Unity",
      de: "Simulation eines autonomen Fahrzeugs — Unity",
    },
    summary: {
      tr: "20 kişilik ekipte veri ve optimizasyon yöneticisi; Greedy, Uniform Cost ve A* ile hedefe en verimli rota.",
      en: "Data and optimization manager in a 20-person team; Greedy, Uniform Cost, and A* search for the most efficient route.",
      de: "Daten- und Optimierungsverantwortliche in einem 20-köpfigen Team; Greedy-, Uniform-Cost- und A*-Suche für die effizienteste Route.",
    },
    stack: ["Unity", "C#", "A*"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
