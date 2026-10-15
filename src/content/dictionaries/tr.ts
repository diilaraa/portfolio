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
    avatarAlt: "Pembe başörtülü, dizüstü bilgisayarında çalışan Dilara'nın piksel sanatı avatarı.",
    techTitle: "Çalıştığım teknolojiler",
    greeting: "Merhaba, ben ",
    greetingName: "Dilara Top",
    ctaWork: "Çalışmaları gör",
    ctaResearch: "Araştırmayı oku",
  },
  work: {
    eyebrow: "Seçili çalışmalar",
    title: "Gerçek problemler, ölçülen sonuçlar.",
    all: "Tüm çalışmalar",
    readCase: "Vaka çalışmasını oku",
  },
  status: {
    research: "Araştırma",
    live: "Yayında",
    "in-progress": "Devam ediyor",
    competition: "Yarışma",
  },
  research: {
    eyebrow: "Araştırma",
    title: "Renk görme farklılıkları için filtre tasarımı.",
    aboutTitle: "Bu makaleler ne üzerine?",
    about: [
      "Renk körlüğü olan kişiler, dijital görüntülerdeki bazı renkleri birbirinden ayırt edemez; örneğin Ishihara test plakalarındaki sayıları göremezler.",
      "Bu iki makalede, görüntüleri bu kişilerin daha iyi algılayabileceği hale getiren özgün görüntü işleme filtreleri tasarladık. Filtrelerin işe yarayıp yaramadığını insan yorumuna bırakmadan, bir yapay zekâ modeliyle (MobileNet) ölçtük.",
    ],
    resultLabel: "Sonuç",
    result:
      "Filtre uygulandıktan sonra model, yedi renk körlüğü tipinin ortalamasında görüntüleri çok daha doğru sınıflandırdı: F1 skoru %33,95'ten %90,31'e yükseldi.",
    resultSource: "Symmetry 2025 · test seti · 5. filtre sürümü",
    imageCredit: "Kaynak: Akalın vd., Symmetry 2025",
    beforeLabel: "Orijinal",
    afterLabel: "Filtreli",
    publications: "Yayınlar",
    all: "Araştırma ve yayınlar",
  },
  experienceSnapshot: {
    title: "Deneyim",
    all: "Tüm deneyim",
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
