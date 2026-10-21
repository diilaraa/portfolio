import type { Publication } from "./types";

/** Verified against Crossref and the publisher pages (October 2026). */
export const publications: Publication[] = [
  {
    id: "symmetry-2025",
    title: "Improved Filter Designs Using Image Processing Techniques for Color Vision Deficiency (CVD) Types",
    authors: ["Fatma Akalın", "Nilgün Özkan Aksoy", "Dilara Top", "Esma Kara"],
    journal: "Symmetry",
    details: "17(7), 1046",
    date: { tr: "2 Temmuz 2025", en: "2 July 2025", de: "2. Juli 2025" },
    doi: "10.3390/sym17071046",
    aim: {
      tr: "Yedi renk görme tipi için dijital görüntü algısını iyileştiren, adım adım geliştirilmiş filtre tasarımları önermek.",
      en: "To propose step-by-step improved filter designs that enhance digital image perception for seven types of color vision deficiency.",
      de: "Schrittweise verbesserte Filterdesigns vorzuschlagen, die die Wahrnehmung digitaler Bilder bei sieben Arten von Farbsehschwäche verbessern.",
    },
    method: {
      tr: "Daltonizasyon, normalizasyon, doygunluk ve renk tonu kaydırma, Fourier tabanlı işlem ve Prewitt kenar tespitini birleştiren beş filtre sürümü; Ishihara plakalarının simülasyon çıktılarının MobileNetV1 ile sınıflandırılması.",
      en: "Five filter versions combining daltonization, normalization, saturation and hue shifting, Fourier-based processing, and Prewitt edge detection; simulated Ishihara plates classified with MobileNetV1.",
      de: "Fünf Filterversionen, die Daltonisierung, Normalisierung, Sättigungs- und Farbtonverschiebung, Fourier-Verarbeitung und Prewitt-Kantenerkennung kombinieren; simulierte Ishihara-Tafeln, klassifiziert mit MobileNetV1.",
    },
    contribution: {
      tr: "Yöntem, yazılım, doğrulama, analiz, araştırma, veri düzenleme, yazım ve görselleştirme (makalenin yazar katkı beyanına göre).",
      en: "Methodology, software, validation, formal analysis, investigation, data curation, writing, and visualization (per the paper's author contribution statement).",
      de: "Methodik, Software, Validierung, Analyse, Untersuchung, Datenaufbereitung, Schreiben und Visualisierung (laut Beitragserklärung des Artikels).",
    },
    result: {
      tr: "Sınıflandırma sonuçları, geliştirdiğimiz son filtrenin iki göz arasındaki renk algısı farkını belirgin biçimde azalttığını gösterdi. Böylece iki gözün renk uyarımı dengelendi ve algısal simetri sağlandı: renkler daha tutarlı ve ayırt edilebilir algılanıyor, renk körü bireylerin günlük hayatta karşılaştığı görsel zorluklar azalıyor.",
      en: "The classification results showed that our final filter clearly reduces the difference in color perception between the two eyes. Color stimulation becomes more balanced and perceptual symmetry is achieved: colors are perceived more consistently and distinctly, easing the visual difficulties color-blind people face in daily life.",
      de: "Die Klassifikationsergebnisse zeigten, dass unser finaler Filter den Unterschied in der Farbwahrnehmung zwischen beiden Augen deutlich verringert. Die Farbreizung wird ausgeglichener und es entsteht perzeptuelle Symmetrie: Farben werden konsistenter und unterscheidbarer wahrgenommen, was die Sehschwierigkeiten farbenblinder Menschen im Alltag verringert.",
    },
  },
  {
    id: "cpe-2025",
    title: "Proposed Image Processing Filters to Improve Digital Image Perception for Color Blindness Types",
    authors: ["Fatma Akalın", "Dilara Top"],
    journal: "Concurrency and Computation: Practice and Experience",
    details: "37(18–20), e70194",
    date: { tr: "9 Temmuz 2025 (çevrimiçi)", en: "9 July 2025 (online)", de: "9. Juli 2025 (online)" },
    doi: "10.1002/cpe.70194",
    aim: {
      tr: "Renk körlüğü olan bireylerin dijital görüntüleri algılama düzeyini artıran üç aşamalı özgün bir görüntü işleme filtresi geliştirmek.",
      en: "To develop a three-stage original image processing filter that improves how people with color blindness perceive digital images.",
      de: "Einen dreistufigen eigenen Bildverarbeitungsfilter zu entwickeln, der die Wahrnehmung digitaler Bilder für Menschen mit Farbenblindheit verbessert.",
    },
    method: {
      tr: "Filtreler Ishihara test plakalarına uygulandı; orijinal ve iyileştirilmiş görüntülerin renk körü bireylerce nasıl görüldüğü simüle edildi ve MobileNetV2 transfer öğrenme ile sınıflandırıldı.",
      en: "The filters were applied to Ishihara test plates; how original and enhanced images appear to color-blind people was simulated and classified with MobileNetV2 transfer learning.",
      de: "Die Filter wurden auf Ishihara-Tafeln angewendet; wie Original- und verbesserte Bilder für farbenblinde Menschen wirken, wurde simuliert und mit MobileNetV2-Transfer-Learning klassifiziert.",
    },
    contribution: {
      tr: "Dr. Öğr. Üyesi Fatma Akalın ile birlikte iki yazarlı çalışma; filtrelerin geliştirilmesi ve değerlendirilmesi.",
      en: "A two-author paper with Asst. Prof. Fatma Akalın; developing and evaluating the filters.",
      de: "Ein Artikel mit zwei Autorinnen gemeinsam mit Dr. Fatma Akalın; Entwicklung und Bewertung der Filter.",
    },
    result: {
      tr: "Filtreyi Ishihara test plakalarına uyguladık; orijinal ve iyileştirilmiş görüntülerin renk körü bireylerce nasıl görüldüğünü simüle edip MobileNetV2 ile sınıflandırdık. Sonuçlar, 3 aşamalı filtrenin yedi renk körlüğü tipinin her birinde dijital görüntülerin algılanmasını iyileştirdiğini gösterdi.",
      en: "We applied the filter to Ishihara test plates, simulated how the original and enhanced images appear to color-blind people, and classified them with MobileNetV2. The results showed that the three-stage filter improves the perception of digital images for each of the seven types of color blindness.",
      de: "Wir wendeten den Filter auf Ishihara-Tafeln an, simulierten, wie Original- und verbesserte Bilder für farbenblinde Menschen wirken, und klassifizierten sie mit MobileNetV2. Die Ergebnisse zeigten, dass der dreistufige Filter die Wahrnehmung digitaler Bilder bei jeder der sieben Formen von Farbenblindheit verbessert.",
    },
  },
];
