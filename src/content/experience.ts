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
    context: {
      tr: "Ürün Yönetimi ekibinde, e-Belge özel entegratör ürünü üzerinde. e-Fatura gibi e-Belgeler UBL formatında hazırlanır, XSD ve Schematron kurallarıyla doğrulanır, XSLT ile görüntülenir ve REST/SOAP servisleriyle taşınır.",
      en: "In the Product Management team, on an e-Document private integrator product. e-Documents such as e-Invoices are built in UBL, validated with XSD and Schematron rules, rendered with XSLT, and exchanged over REST/SOAP services.",
      de: "Im Produktmanagement-Team an einem E-Dokument-Integratorprodukt. E-Dokumente wie E-Rechnungen werden in UBL erstellt, mit XSD- und Schematron-Regeln validiert, mit XSLT dargestellt und über REST/SOAP-Services ausgetauscht.",
    },
    did: {
      tr: [
        "Ürün geliştirme ve iyileştirme süreçleri için fonksiyonel analiz dokümanları ve mockup'lar hazırladım.",
        "Jira, Confluence ve Lucidchart ile analiz ve dokümantasyon süreçlerinde görev aldım.",
        "Postman ve SoapUI ile API testleri ve doğrulama yaptım.",
        "e-Belge ürününün analiz ve test süreçlerine Agile bir ekipte katkı sağladım.",
      ],
      en: [
        "Prepared functional analysis documents and mockups for product development and improvements.",
        "Worked on analysis and documentation with Jira, Confluence, and Lucidchart.",
        "Ran API tests and validation with Postman and SoapUI.",
        "Contributed to analysis and testing of the e-Document product in an Agile team.",
      ],
      de: [
        "Funktionale Analysedokumente und Mockups für Produktentwicklung und Verbesserungen erstellt.",
        "Mit Jira, Confluence und Lucidchart an Analyse und Dokumentation gearbeitet.",
        "API-Tests und Validierungen mit Postman und SoapUI durchgeführt.",
        "In einem agilen Team an Analyse und Test des E-Dokument-Produkts mitgewirkt.",
      ],
    },
    connected: {
      tr: "Bir mevzuat ve format gereksinimini, geliştiricinin uygulayabileceği bir analize ve test edilebilir API davranışına çevirmek.",
      en: "Turning a regulatory and format requirement into an analysis developers can implement and API behavior that can be tested.",
      de: "Eine regulatorische und formale Anforderung in eine umsetzbare Analyse und testbares API-Verhalten übersetzen.",
    },
    tools: ["Jira", "Confluence", "Postman", "SoapUI", "Lucidchart", "REST", "SOAP", "UBL", "XSD", "Schematron", "XSLT"],
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
    context: {
      tr: "Ürün yönetimi ekibinde, Product Owner'ın yanında çevik (Agile) süreçlerde.",
      en: "In the product management team, alongside the Product Owner in Agile processes.",
      de: "Im Produktmanagement-Team, an der Seite des Product Owners in agilen Prozessen.",
    },
    did: {
      tr: [
        "Product Owner'a ürün yönetimi ve Agile süreçlerde destek verdim.",
        "Sprint planlama ve backlog önceliklendirme çalışmalarına katıldım.",
        "Ürün sürüm duyuruları ve versiyon güncelleme iletişimlerinin hazırlanmasına katkı sağladım.",
      ],
      en: [
        "Supported the Product Owner in product management and Agile processes.",
        "Took part in sprint planning and backlog prioritization.",
        "Helped prepare product release announcements and version update communications.",
      ],
      de: [
        "Den Product Owner im Produktmanagement und in agilen Prozessen unterstützt.",
        "An Sprintplanung und Backlog-Priorisierung teilgenommen.",
        "An Release-Ankündigungen und Kommunikation zu Versionsupdates mitgearbeitet.",
      ],
    },
    connected: {
      tr: "Ekibin neyi, hangi sırayla geliştireceği kararını ve bir değişikliğin kullanıcıya nasıl anlatılacağını görmek.",
      en: "Seeing how a team decides what to build and in which order, and how a change is explained to users.",
      de: "Zu sehen, wie ein Team entscheidet, was in welcher Reihenfolge gebaut wird und wie eine Änderung den Nutzern erklärt wird.",
    },
    tools: ["Agile", "Sprint planning", "Backlog", "Release notes"],
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
    context: {
      tr: "Ürün geliştirme ekibinde, e-Fatura entegratörü üzerinde.",
      en: "In the product development team, on an e-Invoice integrator.",
      de: "Im Produktentwicklungsteam an einem E-Rechnungs-Integrator.",
    },
    did: {
      tr: [
        "C# ve .NET ile backend geliştirme süreçlerine katkıda bulundum.",
        "React ile geliştirilen arayüzde ve MongoDB'de tutulan video içeriklerine erişim gerektiren işlerde kod yazdım.",
        "Microsoft SQL Server üzerinde SQL sorguları yazdım ve veritabanı süreçlerine destek verdim.",
        "REST ve SOAP API'lerini Postman ve SoapUI ile test ettim; işleri Jira üzerinden takip ettim.",
      ],
      en: [
        "Contributed to backend development with C# and .NET.",
        "Wrote code for the React frontend and for tasks that needed access to video content stored in MongoDB.",
        "Wrote SQL queries on Microsoft SQL Server and supported database work.",
        "Tested REST and SOAP APIs with Postman and SoapUI and tracked work in Jira.",
      ],
      de: [
        "An der Backend-Entwicklung mit C# und .NET mitgearbeitet.",
        "Code für das React-Frontend und für Aufgaben mit Zugriff auf in MongoDB gespeicherte Videoinhalte geschrieben.",
        "SQL-Abfragen auf Microsoft SQL Server geschrieben und Datenbankprozesse unterstützt.",
        "REST- und SOAP-APIs mit Postman und SoapUI getestet und Aufgaben in Jira verfolgt.",
      ],
    },
    connected: {
      tr: "Bir entegrasyon ürününün koddan veritabanına ve servislere kadar nasıl çalıştığını içeriden görmek.",
      en: "Seeing from the inside how an integration product works, from code to database to services.",
      de: "Von innen zu sehen, wie ein Integrationsprodukt funktioniert – vom Code über die Datenbank bis zu den Services.",
    },
    tools: ["C#", ".NET", "React", "MSSQL", "MongoDB", "REST", "SOAP", "Postman", "SoapUI", "Jira"],
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
    context: {
      tr: "Münih'te, şirketlerin muhasebesini yürüten bir ofiste.",
      en: "At an office in Munich that handles companies' bookkeeping.",
      de: "In einer Münchner Kanzlei, die die Buchhaltung von Unternehmen übernimmt.",
    },
    did: {
      tr: [
        "Şirketlerin gelir ve gider kayıtlarını muhasebe sistemine işledim.",
        "Günlük muhasebe operasyonlarına ve veri giriş süreçlerine destek verdim.",
      ],
      en: [
        "Recorded companies' income and expense transactions in the accounting system.",
        "Supported daily accounting operations and data entry.",
      ],
      de: [
        "Einnahmen und Ausgaben von Unternehmen im Buchhaltungssystem erfasst.",
        "Die laufende Buchhaltung und Datenerfassung unterstützt.",
      ],
    },
    connected: {
      tr: "Veri doğruluğu, kayıt düzeni ve finansal verinin bir işletme için ne anlama geldiği.",
      en: "Data accuracy, orderly records, and what financial data means to a business.",
      de: "Datengenauigkeit, ordentliche Belege und was Finanzdaten für ein Unternehmen bedeuten.",
    },
    tools: [],
  },
];
