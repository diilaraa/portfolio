/** UI strings, Turkish (default locale). en.ts and de.ts must match this shape. */
export const tr = {
  meta: {
    siteName: "Dilara Top",
    title: "Dilara Top — Bilişim Sistemleri Mühendisi",
    description:
      "İş analizi, ürün yönetimi ve uygulamalı yapay zekâ alanlarında çalışan Bilişim Sistemleri Mühendisi Dilara Top'un portfolyosu.",
  },
  a11y: {
    skipToContent: "İçeriğe geç",
    mainNav: "Ana menü",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    language: "Dil",
  },
  nav: {
    work: "Çalışmalar",
    research: "Araştırma",
    experience: "Deneyim",
    about: "Hakkımda",
    contact: "İletişim",
  },
  lens: {
    button: "Renk görme lensi",
    title: "Siteyi farklı bir gözle görün",
    description:
      "Renk görme farklılıkları üzerine araştırma yapıyorum. Bu lens, sayfayı farklı renk görme tiplerinin simülasyonuyla gösterir.",
    source: "Simülasyon: Machado ve ark., 2009",
    options: {
      none: "Tipik renk görme",
      protanopia: "Protanopi (kırmızı)",
      deuteranopia: "Döteranopi (yeşil)",
      tritanopia: "Tritanopi (mavi)",
      achromatopsia: "Akromatopsi (renksiz)",
    },
  },
  home: {
    eyebrow: "Dilara Top · Bilişim Sistemleri Mühendisi",
    hero: [
      { text: "İşin dilini ", tone: "warm" },
      { text: "koda", tone: "cool" },
      { text: ", kodu işin diline çeviriyorum.", tone: "plain" },
    ] as { text: string; tone: HeroTone }[],
    intro:
      "İş analizi, ürün yönetimi ve uygulamalı yapay zekâ arasında çalışıyorum: ihtiyacı anlıyor, sistemi kuruyor, sonucu veriyle ölçüyorum.",
    proof: [
      "Sakarya Üniversitesi · GNO 3,56/4,00",
      "2 uluslararası hakemli dergi yayını",
      "TÜBİTAK 2209-A",
    ],
    avatarAlt: "Dizüstü bilgisayarında çalışan, açık renk başörtülü ve lacivert kapüşonlu Dilara'nın üç boyutlu avatarı.",
    techTitle: "Teknoloji ve araçlar",
    greeting: "Merhaba, ben ",
    greetingName: "Dilara Top",
    ctaWork: "Çalışmalarımı keşfet",
    ctaResearch: "Akademik yayınlarım",
  },
  work: {
    eyebrow: "Seçili çalışmalar",
    title: "Gerçek problemler için geliştirdiğim çözümler.",
    all: "Tüm çalışmalar",
    readCase: "Proje detaylarını incele",
  },
  status: {
    research: "Araştırma",
    live: "Canlıda",
    "in-progress": "Devam ediyor",
    competition: "Yarışma",
  },
  research: {
    eyebrow: "Araştırma",
    title: "Renk görme farklılıkları için özgün görüntü işleme filtreleri",
    about: [
      "Renk görme farklılıkları yaşayan kişiler, bazı renkleri ve renk kontrastlarını ayırt etmekte zorlanabilir. Araştırmalarımızda, dijital görüntülerin farklı renk görme tipleri için daha ayırt edilebilir hâle gelmesini amaçlayan özgün hibrit filtreler geliştirdik.",
      "Daltonization algoritmasını farklı görüntü işleme teknikleriyle birleştirerek geliştirdiğimiz filtrelerin etkinliğini MobileNetV1 ve MobileNetV2 modelleriyle değerlendirdik.",
    ],
    resultLabel: "Araştırma sonucu",
    imageCaption: "Ishihara test plakası: orijinal görüntü ve özgün filtreyle işlenmiş hâli.",
    imageCredit: "Kaynak: Akalın vd., Symmetry 2025",
    beforeLabel: "Orijinal",
    afterLabel: "Filtreli",
    publications: "Yayınlar",
    all: "Araştırma ve yayınlar",
  },
  experienceSnapshot: {
    title: "Deneyim",
    all: "Tüm deneyimler",
  },
  contactCta: {
    title: "Birlikte bir sistemi daha anlaşılır kılalım.",
    body: "İş analizi, ürün ve yazılım rolleri ile freelance web projeleri için bana ulaşabilirsiniz.",
    email: "E-posta gönder",
    cvTr: "CV (Türkçe)",
    cvEn: "CV (İngilizce)",
  },
  footer: {
    location: "Kocaeli, Türkiye",
    rights: "Tüm hakları saklıdır.",
  },
};

export type Dictionary = typeof tr;
export type HeroTone = "warm" | "cool" | "plain";
