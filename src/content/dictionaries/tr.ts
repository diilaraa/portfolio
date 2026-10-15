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
    ctaWork: "Çalışmaları gör",
    ctaResearch: "Araştırmayı oku",
  },
  footer: {
    location: "Kocaeli, Türkiye",
    rights: "Tüm hakları saklıdır.",
    builtWith: "Next.js ve Tailwind CSS ile tasarlanıp geliştirildi.",
  },
};

export type Dictionary = typeof tr;
export type HeroTone = "warm" | "cool" | "plain";
