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
      tr: "Beş aşamada geliştirdiğimiz hibrit filtre, yedi renk görme tipinin hepsinde görüntülerin modele göre çok daha ayırt edilebilir hâle gelmesini sağladı. En belirgin iyileşme, orijinal görüntülerin neredeyse hiç ayırt edilemediği kırmızı renk körlüğünde (protanopi) görüldü.",
      en: "The hybrid filter we developed in five stages made the images much easier for the model to tell apart for all seven types of color vision deficiency. The clearest improvement was for red color blindness (protanopia), where the original images could hardly be distinguished at all.",
      de: "Der in fünf Stufen entwickelte hybride Filter machte die Bilder für das Modell bei allen sieben Arten von Farbsehschwäche deutlich besser unterscheidbar. Die deutlichste Verbesserung zeigte sich bei Rotblindheit (Protanopie), bei der die Originalbilder kaum zu unterscheiden waren.",
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
      tr: "3 aşamalı hibrit filtre, yedi renk körlüğü tipinin her birinde görsel algıyı iyileştirdi. En belirgin iyileşme, orijinal görüntülerin neredeyse hiç ayırt edilemediği tam renk körlüğünde (monokromazi) görüldü.",
      en: "The three-stage hybrid filter improved visual perception for each of the seven types of color blindness. The clearest improvement was for complete color blindness (monochromacy), where the original images could hardly be distinguished at all.",
      de: "Der dreistufige hybride Filter verbesserte die Wahrnehmung bei jeder der sieben Formen von Farbenblindheit. Die deutlichste Verbesserung zeigte sich bei vollständiger Farbenblindheit (Monochromasie), bei der die Originalbilder kaum zu unterscheiden waren.",
    },
  },
];
