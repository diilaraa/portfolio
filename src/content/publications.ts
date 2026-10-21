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
      text: {
        tr: "Beş aşamada geliştirdiğimiz hibrit filtre, renk körü bir bireyin gördüğü görüntüleri çok daha ayırt edilebilir hâle getirdi. Yapay zekâ modelinin bu görüntüleri doğru tanıma başarısı (F1 skoru), yedi renk görme tipinin ortalamasında %33,95'ten %90,31'e çıktı.",
        en: "The hybrid filter we developed in five stages made the images a color-blind person sees far easier to tell apart. The AI model's success at recognizing them correctly (F1 score) rose from 33.95% to 90.31% on average across seven types of color vision deficiency.",
        de: "Der in fünf Stufen entwickelte hybride Filter machte die Bilder, die eine farbenblinde Person sieht, deutlich besser unterscheidbar. Die Erkennungsleistung des KI-Modells (F1-Score) stieg im Mittel über sieben Arten von Farbsehschwäche von 33,95 % auf 90,31 %.",
      },
      source: {
        tr: "Ishihara test plakaları · MobileNetV1 · test seti ortalaması, makaledeki Tablo 8'den",
        en: "Ishihara test plates · MobileNetV1 · test-set mean from Table 8 of the paper",
        de: "Ishihara-Tafeln · MobileNetV1 · Mittelwert des Testdatensatzes aus Tabelle 8",
      },
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
      text: {
        tr: "Daltonizasyon ve renk kaydırmayı birleştiren 3 aşamalı hibrit filtre, test edilen yedi renk körlüğü tipinin hepsinde görüntülerin daha doğru tanınmasını sağladı; yani filtre her tipte görsel algıyı iyileştirdi.",
        en: "The three-stage hybrid filter, which combines daltonization with color shifting, made the images easier to recognize correctly for all seven types of color blindness tested; in other words, it improved visual perception for every type.",
        de: "Der dreistufige hybride Filter, der Daltonisierung mit Farbverschiebung kombiniert, verbesserte die Erkennung der Bilder bei allen sieben getesteten Formen von Farbenblindheit – also die Wahrnehmung bei jeder Form.",
      },
      source: {
        tr: "Ishihara test plakaları · MobileNetV2 · makalenin sonuçlarından",
        en: "Ishihara test plates · MobileNetV2 · from the paper's results",
        de: "Ishihara-Tafeln · MobileNetV2 · aus den Ergebnissen des Artikels",
      },
    },
  },
];
