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
      tr: "Klinik verileri, deri lezyonu görüntülerini ve epidemiyolojik bilgileri bir araya getiren çok modlu bir karar destek sistemi geliştirdik. TÜBİTAK 2209-A kapsamında yürütücülüğünü üstlendiğim bitirme projesinde, ekip arkadaşımla birlikte makine öğrenmesi ve görüntü analizi yöntemlerini bir web uygulamasında bütünleştirdik.",
      en: "We built a multimodal decision support system that brings together clinical data, skin-lesion images, and epidemiological information. In this graduation project, which I led under TÜBİTAK 2209-A, my teammate and I integrated machine learning and image analysis methods into a single web application.",
      de: "Wir haben ein multimodales Entscheidungsunterstützungssystem entwickelt, das klinische Daten, Hautläsionsbilder und epidemiologische Informationen zusammenführt. In diesem Abschlussprojekt, das ich im Rahmen von TÜBİTAK 2209-A geleitet habe, haben meine Teamkollegin und ich Methoden des maschinellen Lernens und der Bildanalyse in einer Webanwendung integriert.",
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
      tr: "Yedi farklı renk görme tipi için özgün görüntü işleme filtrelerinin tasarımında çalıştım. Filtrelerin etkinliği MobileNet tabanlı modellerle değerlendirildi. Araştırma çalışmaları, iki uluslararası hakemli dergide yayımlanan iki ayrı makale ile sonuçlandı.",
      en: "I worked on designing original image processing filters for seven types of color vision deficiency. The filters' effectiveness was evaluated with MobileNet-based models. The research resulted in two separate papers published in two international peer-reviewed journals.",
      de: "Ich habe an eigenen Bildverarbeitungsfiltern für sieben Arten von Farbsehschwäche gearbeitet. Die Wirksamkeit der Filter wurde mit MobileNet-basierten Modellen bewertet. Die Forschung führte zu zwei Artikeln in zwei internationalen begutachteten Fachzeitschriften.",
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
        tr: "Özgün filtrelerin Ishihara test plakası üzerindeki ara ve son çıktıları; 8 rakamı adım adım belirginleşiyor.",
        en: "Intermediate and final outputs of the filters on an Ishihara test plate; the number 8 becomes clearer step by step.",
        de: "Zwischen- und Endergebnisse der Filter auf einer Ishihara-Tafel; die Zahl 8 wird Schritt für Schritt deutlicher.",
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
      tr: "Sharjah'ta hizmet veren bağımsız bir Tesla servis merkezi için web sitesini tasarladım, geliştirdim ve yayına aldım. Projeyi Next.js ve TypeScript kullanarak oluşturdum; dağıtım ve yayına alma süreçlerini de üstlendim.",
      en: "I designed, built, and launched the website for an independent Tesla service center in Sharjah. I created the project with Next.js and TypeScript and also handled deployment and launch.",
      de: "Ich habe die Website für ein unabhängiges Tesla-Servicezentrum in Sharjah gestaltet, entwickelt und veröffentlicht. Das Projekt habe ich mit Next.js und TypeScript umgesetzt und mich auch um Deployment und Launch gekümmert.",
    },
    period: { tr: "Ağustos 2026", en: "August 2026", de: "August 2026" },
    role: {
      tr: "Tasarım, geliştirme ve yayına alma",
      en: "Design, development, and launch",
      de: "Design, Entwicklung und Launch",
    },
    stack: ["Next.js", "React", "TypeScript", "Vercel"],
    cover: {
      src: "/images/work/electricmotor/home-hero.webp",
      width: 1897,
      height: 910,
      alt: {
        tr: "ElectricMotor ana sayfası: koyu zemin üzerinde kırmızı bir Tesla Roadster, hizmet sloganı ve randevu butonları.",
        en: "ElectricMotor home page: a red Tesla Roadster on a dark background with the service tagline and booking buttons.",
        de: "ElectricMotor-Startseite: ein roter Tesla Roadster auf dunklem Hintergrund mit Leistungsslogan und Termin-Buttons.",
      },
    },
    links: [{ label: { tr: "Canlı site", en: "Live site", de: "Live-Website" }, href: "https://electricmotor.ae/" }],
  },
  {
    slug: "dokar-zemin",
    featured: true,
    category: "web",
    status: "live",
    title: { tr: "Dokar Zemin", en: "Dokar Zemin", de: "Dokar Zemin" },
    summary: {
      tr: "Fore kazık, ankraj ve deep soil mixing uygulamaları yapan bir zemin iyileştirme firmasının Türkçe ve İngilizce kurumsal web sitesini tasarladım, geliştirdim ve yayına aldım.",
      en: "I designed, built, and launched the Turkish and English corporate website of a ground improvement company working with bored piles, anchors, and deep soil mixing.",
      de: "Ich habe die türkisch- und englischsprachige Unternehmenswebsite eines Baugrundverbesserungsunternehmens (Bohrpfähle, Anker, Deep Soil Mixing) gestaltet, entwickelt und veröffentlicht.",
    },
    period: { tr: "2026", en: "2026", de: "2026" },
    role: {
      tr: "Tasarım, geliştirme ve yayına alma",
      en: "Design, development, and launch",
      de: "Design, Entwicklung und Launch",
    },
    stack: ["Web design", "Information architecture", "SEO"],
    cover: {
      src: "/images/work/dokar-zemin/homepage.webp",
      width: 1896,
      height: 872,
      focus: "left",
      alt: {
        tr: "Dokar Zemin ana sayfa tasarımı: şantiyedeki fore kazık makineleri üzerinde \"Zemin İyileştirme Sistemleri\" başlığı.",
        en: "Dokar Zemin home page design: the headline \"Zemin İyileştirme Sistemleri\" (ground improvement systems) over piling rigs.",
        de: "Dokar-Zemin-Startseitendesign: die Überschrift \"Zemin İyileştirme Sistemleri\" (Baugrundverbesserung) über Bohrgeräten.",
      },
    },
    links: [{ label: { tr: "Canlı site", en: "Live site", de: "Live-Website" }, href: "https://dokarzemin.com.tr/" }],
  },
  {
    slug: "teknofest-blood-cell",
    category: "research",
    status: "competition",
    title: {
      tr: "Kan hücresi görüntülerinden lösemi tespiti — TEKNOFEST 2025",
      en: "Leukemia detection from blood cell images — TEKNOFEST 2025",
      de: "Leukämieerkennung aus Blutzellbildern — TEKNOFEST 2025",
    },
    summary: {
      tr: "Akut Lenfoblastik Lösemi (ALL) tespiti için görüntü işleme ve yapay zekâ tabanlı, web üzerinden çalışacak bir klinik karar destek sistemi. SAU InWo takımıyla İnsanlık Yararına Teknoloji Yarışması'nda yarı finale kaldık.",
      en: "A web-based clinical decision support system for detecting Acute Lymphoblastic Leukemia (ALL) with image processing and AI. With team SAU InWo we reached the semi-finals of the Technology for the Benefit of Humanity competition.",
      de: "Ein webbasiertes klinisches Entscheidungsunterstützungssystem zur Erkennung akuter lymphatischer Leukämie (ALL) mit Bildverarbeitung und KI. Mit dem Team SAU InWo erreichten wir das Halbfinale des Wettbewerbs „Technologie zum Wohl der Menschheit“.",
    },
    period: { tr: "Mart – Ağustos 2025", en: "Mar – Aug 2025", de: "März – Aug. 2025" },
    role: {
      tr: "Takım kaptanı · Esma Kara ve Hayrunnisa Yılmaz ile",
      en: "Team captain · with Esma Kara and Hayrunnisa Yılmaz",
      de: "Teamkapitänin · mit Esma Kara und Hayrunnisa Yılmaz",
    },
    stack: ["Python", "OpenCV", "NumPy", "SciPy", "YOLOv9", "Flask"],
    cover: {
      src: "/images/work/teknofest-blood-cell/inwo-logo.webp",
      width: 442,
      height: 276,
      fit: "contain",
      alt: {
        tr: "SAU InWo takım logosu: kollarıyla birbirine bağlanan dört figür ve üstte \"SAU InWo\" yazılı fiyonk.",
        en: "SAU InWo team logo: four figures linked by their arms under a bow reading \"SAU InWo\".",
        de: "Logo des Teams SAU InWo: vier über die Arme verbundene Figuren unter einer Schleife mit der Aufschrift „SAU InWo“.",
      },
    },
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
      tr: "Asistan, öğretim üyesi, bölüm, nöbet, randevu ve acil durum duyurularını yöneten web uygulaması. İş kurallarından 9 tabloluk veritabanı tasarlandı; Entity Framework Code-First ile kuruldu. Oturum tabanlı bir yetkilendirme filtresiyle yalnızca admin'in erişebildiği bir yönetim paneli ve takvim tabanlı nöbet takibi var.",
      en: "A web application that manages residents, faculty, departments, duty shifts, appointments, and emergency announcements. A nine-table database was designed from business rules and built with Entity Framework Code-First. It includes an admin panel protected by a session-based authorization filter and calendar-based duty tracking.",
      de: "Eine Webanwendung zur Verwaltung von Assistenzärzten, Lehrkräften, Abteilungen, Diensten, Terminen und Notfallmeldungen. Aus Geschäftsregeln wurde eine Datenbank mit neun Tabellen entworfen und mit Entity Framework Code-First umgesetzt. Ein Admin-Bereich ist über einen sitzungsbasierten Autorisierungsfilter geschützt; Dienste werden kalenderbasiert verfolgt.",
    },
    stack: ["ASP.NET MVC", "Entity Framework", "C#", "MSSQL"],
    image: {
      src: "/images/archive/pediatric-duty-er.webp",
      width: 1196,
      height: 776,
      alt: {
        tr: "Pediatri yönetim sisteminin veritabanı diyagramı: Asistan, Bölüm, Öğretim Üyesi, Nöbet, Randevu, Görüşme, Admin ve Acil Durum tabloları.",
        en: "Database diagram of the pediatric management system: Resident, Department, Faculty, Duty, Appointment, Meeting, Admin, and Emergency tables.",
        de: "Datenbankdiagramm des Pädiatrie-Systems: Tabellen für Assistenzärzte, Abteilungen, Lehrkräfte, Dienste, Termine, Gespräche, Admin und Notfälle.",
      },
    },
  },
  {
    title: {
      tr: "Otonom Araç Simülasyonu — Unity",
      en: "Autonomous Vehicle Simulation — Unity",
      de: "Simulation eines autonomen Fahrzeugs — Unity",
    },
    summary: {
      tr: "Bir şehir haritasında hedefe en verimli rotayla ulaşan otonom araç. Grid tabanlı harita üzerinde Greedy, Uniform Cost Search ve A* karşılaştırıldı; dinamik trafik ışıkları, waypoint'lerle yürüyen yayalar, raycast sensörleri ve aracı yavaşlatan karlı yollar simüle edildi. 20 kişilik ekipte veri ve optimizasyon yöneticisiydim.",
      en: "An autonomous vehicle that reaches its target on a city map by the most efficient route. Greedy, Uniform Cost Search, and A* were compared on a grid-based map, with dynamic traffic lights, pedestrians following waypoints, raycast sensors, and snowy roads that slow the car down. I was the data and optimization manager in a 20-person team.",
      de: "Ein autonomes Fahrzeug, das auf einer Stadtkarte den effizientesten Weg zum Ziel findet. Auf einer Grid-Karte wurden Greedy, Uniform Cost Search und A* verglichen – mit dynamischen Ampeln, Fußgängern auf Wegpunkten, Raycast-Sensoren und verschneiten Straßen, die das Auto bremsen. Im 20-köpfigen Team war ich für Daten und Optimierung verantwortlich.",
    },
    stack: ["Unity", "C#", "A*", "UCS", "Greedy"],
    image: {
      src: "/images/archive/unity-autonomous-vehicle.webp",
      width: 866,
      height: 420,
      alt: {
        tr: "Unity simülasyonunda düşük poligonlu bir şehirde, yaya geçidine yaklaşan kırmızı otonom araç.",
        en: "A red autonomous car approaching a crosswalk in a low-poly city in the Unity simulation.",
        de: "Ein rotes autonomes Auto nähert sich in der Unity-Simulation einem Zebrastreifen in einer Low-Poly-Stadt.",
      },
    },
  },
  {
    title: {
      tr: "İnternet Reklamları Veri Analizi",
      en: "Internet Advertisements Data Analysis",
      de: "Datenanalyse von Internetwerbung",
    },
    summary: {
      tr: "UCI Internet Advertisements veri setinde eksik değerlerin ortalama ve medyanla doldurulmasının karşılaştırılması, korelasyon analizi, histogram, kutu grafiği ve Q-Q grafikleriyle dağılım incelemesi; Shapiro-Wilk, Z ve T testleri.",
      en: "On the UCI Internet Advertisements dataset: comparing mean and median imputation for missing values, correlation analysis, distribution checks with histograms, box plots, and Q-Q plots, and Shapiro-Wilk, Z, and T tests.",
      de: "Am UCI-Datensatz Internet Advertisements: Vergleich von Mittelwert- und Median-Imputation, Korrelationsanalyse, Verteilungsprüfung mit Histogrammen, Boxplots und Q-Q-Plots sowie Shapiro-Wilk-, Z- und T-Tests.",
    },
    team: { tr: "Esma Kara ile", en: "With Esma Kara", de: "Mit Esma Kara" },
    stack: ["Python", "pandas", "NumPy", "SciPy", "statsmodels", "seaborn"],
    image: {
      src: "/images/archive/internet-ads-correlation.webp",
      width: 776,
      height: 680,
      alt: {
        tr: "Yükseklik, genişlik, oran, local ve reklam durumu sütunları arasındaki korelasyon matrisi; en güçlü ilişki genişlik ile reklam durumu arasında (0,57).",
        en: "Correlation matrix of height, width, ratio, local, and ad status; the strongest relation is between width and ad status (0.57).",
        de: "Korrelationsmatrix von Höhe, Breite, Verhältnis, local und Werbestatus; der stärkste Zusammenhang besteht zwischen Breite und Werbestatus (0,57).",
      },
    },
  },
  {
    title: {
      tr: "Veri Madenciliği ile Gayrimenkul Analizi",
      en: "Real Estate Analysis with Data Mining",
      de: "Immobilienanalyse mit Data Mining",
    },
    summary: {
      tr: "HepsiEmlak'tan toplanan 2.180 ilan × 135 sütunluk veri seti temizlenerek 57 sütuna indirildi (encoding sonrası 87 özellik). Eksik değerler açıklama metninden ve ilişkili sütunlardan dolduruldu; merkeze ve denize uzaklık gibi yeni özellikler türetildi, aykırı değerler IQR ile ele alındı. Konut tipi tahmini ile kategorik ve sayısal fiyat tahmini gibi farklı senaryolar için çeşitli makine öğrenmesi modelleri eğitildi.",
      en: "A dataset of 2,180 HepsiEmlak listings × 135 columns was cleaned down to 57 columns (87 features after encoding). Missing values were filled from the description text and related columns, new features such as distance to the city center and the sea were derived, and outliers were handled with IQR. Machine learning models were trained for different scenarios, such as property type prediction and categorical and numerical price prediction.",
      de: "Ein Datensatz mit 2.180 HepsiEmlak-Anzeigen × 135 Spalten wurde auf 57 Spalten bereinigt (87 Merkmale nach dem Encoding). Fehlende Werte wurden aus dem Beschreibungstext und verwandten Spalten ergänzt, neue Merkmale wie die Entfernung zum Zentrum und zum Meer abgeleitet und Ausreißer per IQR behandelt. Für verschiedene Szenarien – etwa die Vorhersage des Immobilientyps sowie kategoriale und numerische Preisvorhersagen – wurden Modelle des maschinellen Lernens trainiert.",
    },
    team: {
      tr: "10 kişilik ekip · takım lideri",
      en: "10-person team · team lead",
      de: "10-köpfiges Team · Teamleitung",
    },
    stack: ["Python", "pandas", "scikit-learn", "XGBoost", "LightGBM", "Matplotlib", "Seaborn"],
    image: {
      src: "/images/archive/real-estate-distance.webp",
      width: 580,
      height: 497,
      alt: {
        tr: "Sakarya merkezine uzaklığa göre fiyat kategorisi dağılımı: 0-5, 5-10, 10-20 ve 20+ km gruplarında düşük, orta ve yüksek fiyatlı ilan sayıları.",
        en: "Price category distribution by distance to Sakarya city center: low, medium, and high-priced listings in the 0-5, 5-10, 10-20, and 20+ km groups.",
        de: "Verteilung der Preiskategorien nach Entfernung zum Zentrum von Sakarya: niedrige, mittlere und hohe Preise in den Gruppen 0-5, 5-10, 10-20 und 20+ km.",
      },
    },
    link: {
      label: { tr: "GitHub deposu", en: "GitHub repository", de: "GitHub-Repository" },
      href: "https://github.com/diilaraa/MachineLearningAlgorithms_wOpenSourceData",
    },
  },
  {
    title: {
      tr: "Savorista — Restoran Veritabanı ve Masaüstü Arayüz",
      en: "Savorista — Restaurant Database and Desktop App",
      de: "Savorista — Restaurant-Datenbank und Desktop-Anwendung",
    },
    summary: {
      tr: "Hayali bir restoran için iş kurallarından yola çıkarak ER diyagramı ve MSSQL veritabanı tasarlandı: müşteri, rezervasyon, masa, sipariş, menü ve ürün, adisyon, hesap ödemesi, personel ve görev tabloları. Müşteri–rezervasyon–ödeme görünümü, kategoriye göre ürün getiren stored procedure ve trigger'lar yazıldı. C# WinForms arayüzünde parametreli sorgularla giriş ekranı ve DataGridView ile veri görüntüleme var.",
      en: "Starting from business rules, an ER diagram and MSSQL database were designed for a fictional restaurant: customers, reservations, tables, orders, menu and products, bills, payments, staff, and roles. It includes a customer–reservation–payment view, a stored procedure that returns products by category, and triggers. The C# WinForms app has a login screen using parameterized queries and shows data in a DataGridView.",
      de: "Ausgehend von Geschäftsregeln wurden ein ER-Diagramm und eine MSSQL-Datenbank für ein fiktives Restaurant entworfen: Kunden, Reservierungen, Tische, Bestellungen, Menü und Produkte, Rechnungen, Zahlungen, Personal und Aufgaben. Dazu gehören eine Kunden-Reservierungs-Zahlungs-View, eine Stored Procedure für Produkte nach Kategorie und Trigger. Die C#-WinForms-Anwendung hat einen Login mit parametrisierten Abfragen und zeigt Daten in einem DataGridView.",
    },
    stack: ["MSSQL", "T-SQL", "C#", ".NET", "WinForms", "ADO.NET"],
    link: {
      label: { tr: "GitHub deposu", en: "GitHub repository", de: "GitHub-Repository" },
      href: "https://github.com/diilaraa/Restaurant-Database",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
