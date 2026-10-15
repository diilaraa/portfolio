/** Copy for the inner pages, Turkish (default). en.ts and de.ts must match this shape. */
export const trPages = {
  work: {
    title: "Çalışmalar",
    description: "Araştırma projeleri, gerçek bir işletme için yayına alınmış web sitesi ve devam eden tasarım çalışmaları.",
    intro:
      "Her projede aynı soruyla başlıyorum: Kimin, hangi problemi var? Aşağıda araştırma, ürün ve web projelerimi; ne yaptığımı ve sonucunu nasıl ölçtüğümü bulabilirsiniz.",
    archiveTitle: "Arşiv",
    archiveIntro: "Ders ve ekip projelerinden, teknik temelimi oluşturan daha küçük çalışmalar.",
  },
  caseStudy: {
    back: "Tüm çalışmalar",
    contents: "İçindekiler",
    role: "Rol",
    period: "Dönem",
    stack: "Teknolojiler",
    status: "Durum",
    links: "Bağlantılar",
    next: "Sonraki çalışma",
    researchNotice:
      "Bu bir araştırma prototipidir; klinik olarak doğrulanmış bir teşhis aracı değildir ve tıbbi karar yerine geçmez.",
    inProgressNotice: "Bu proje devam ediyor; sayfa tasarım ve geliştirme ilerledikçe güncellenecek.",
    lastUpdated: "Son güncelleme",
  },
  research: {
    title: "Araştırma ve yayınlar",
    description: "Renk görme farklılıkları için görüntü işleme filtreleri üzerine iki uluslararası hakemli dergi yayını.",
    intro:
      "Araştırmalarımın ortak noktası, görüntü işleme ile bir problemi daha görünür hale getirmek: renk körlüğü olan bireyler için dijital görüntüler, dermatolojik lezyonlar ve kan hücresi görüntüleri.",
    aim: "Amaç",
    method: "Yöntem",
    contribution: "Katkım",
    readPaper: "Makaleyi oku",
    authors: "Yazarlar",
    threadsTitle: "Ortak iz: özgün filtre tasarımı",
    threadsIntro: "Aynı yaklaşımı üç farklı problemde kullandım; her birinde ham görüntüyü modelden önce iyileştiren özgün bir filtre tasarlandı.",
    relatedProject: "Projeyi incele",
  },
  experience: {
    title: "Deneyim",
    description: "Logo Yazılım, Mikro Yazılım ve Münih'teki muhasebe ofisi deneyimleri.",
    intro:
      "Muhasebe kayıtlarından e-Belge entegrasyonuna, backend geliştirmeden ürün yönetimine kadar aynı sistemleri farklı katmanlardan gördüm.",
    did: "Ne yaptım",
    connected: "Neye bağlandı",
    tools: "Araçlar",
  },
  about: {
    title: "Hakkımda",
    description: "Dilara Top: eğitim, Almanya deneyimi, diller ve çalışma yaklaşımı.",
    lead: "Teknik sistemleri anlayan, iş ihtiyacını analiz eden ve ikisi arasında köprü kuran bir Bilişim Sistemleri Mühendisiyim.",
    story: [
      "Lise eğitimimi Almanya'da tamamladım; aynı yıllarda Münih'te bir muhasebe ofisinde çalışarak şirketlerin gelir ve gider kayıtlarıyla, yani bir işletmenin veriyle nasıl yaşadığıyla tanıştım.",
      "Sakarya Üniversitesi Bilişim Sistemleri Mühendisliği'nde bu merakı yazılıma, veriye ve yapay zekâya taşıdım. Stajlarımda hem kod yazdım hem de analiz, test ve dokümantasyon tarafında çalıştım.",
      "Bugün en çok ilgilendiğim yer, iş ihtiyacının teknik bir çözüme dönüştüğü nokta: iş analizi, ürün yönetimi ve yazılım.",
    ],
    educationTitle: "Eğitim",
    languagesTitle: "Diller",
    skillsTitle: "Yetkinlikler",
    approachTitle: "Çalışma yaklaşımım",
    approach: [
      { title: "Önce problemi anlamak", body: "Bir çözüme geçmeden önce kimin, hangi ihtiyacı olduğunu ve başarının nasıl ölçüleceğini netleştiririm." },
      { title: "Ölçülebilir sonuçlar", body: "Bir modeli, filtreyi ya da özelliği verdiği sonuçla değerlendiririm; ölçemediğim şeyi iddia etmem." },
      { title: "Açık dokümantasyon", body: "Analiz dokümanları, mockup'lar ve sürüm notlarıyla ekiplerin aynı şeyi anlamasını sağlarım." },
    ],
  },
  contact: {
    title: "İletişim",
    description: "Dilara Top ile iletişime geçin: e-posta, LinkedIn, GitHub ve CV.",
    lead: "İş analizi, ürün ve yazılım rolleri ya da freelance web projeleri için yazabilirsiniz.",
    email: "E-posta",
    location: "Konum",
    cv: "CV",
  },
  notFound: {
    title: "Sayfa bulunamadı",
    body: "Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.",
    home: "Ana sayfaya dön",
  },
};

export type PagesCopy = typeof trPages;
