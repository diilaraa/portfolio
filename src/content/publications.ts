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
      tr: "Beş aşamada geliştirdiğimiz hibrit filtreyle, renk körlüğü simülasyonu uygulanmış Ishihara görüntülerinde modelin ortalama F1 skoru %33,95'ten %90,31'e yükseldi. F1 skoru, modelin doğru tahmin oranını (kesinlik) ve hiçbir örneği gözden kaçırmamasını (duyarlılık) tek bir değerde birleştirir; bu artış, görüntülerin yedi renk görme tipinin hepsinde çok daha ayırt edilebilir hâle geldiğini gösteriyor.",
      en: "With the hybrid filter we developed in five stages, the model's mean F1 score on Ishihara images simulated for color blindness rose from 33.95% to 90.31%. The F1 score combines how often the model's predictions are right (precision) and how few cases it misses (recall) in one number; the jump shows that the images became far easier to tell apart for all seven types of color vision deficiency.",
      de: "Mit dem in fünf Stufen entwickelten hybriden Filter stieg der mittlere F1-Score des Modells auf farbenblind simulierten Ishihara-Bildern von 33,95 % auf 90,31 %. Der F1-Score vereint, wie oft die Vorhersagen stimmen (Precision) und wie wenige Fälle übersehen werden (Recall), in einem Wert; der Anstieg zeigt, dass die Bilder für alle sieben Arten von Farbsehschwäche deutlich besser unterscheidbar wurden.",
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
      tr: "3 aşamalı hibrit filtreyle, yedi renk körlüğü tipinin test setindeki ortalama F1 skoru %30,14'ten %87,71'e yükseldi. En büyük iyileşme kırmızı körlüğünde görüldü: F1 skoru %4'ten %85'e çıktı.",
      en: "With the three-stage hybrid filter, the mean F1 score across seven types of color blindness on the test set rose from 30.14% to 87.71%. The biggest gain was for red blindness, where the F1 score went from 4% to 85%.",
      de: "Mit dem dreistufigen hybriden Filter stieg der mittlere F1-Score über sieben Arten von Farbenblindheit im Testdatensatz von 30,14 % auf 87,71 %. Der größte Zuwachs zeigte sich bei Rotblindheit: Der F1-Score stieg von 4 % auf 85 %.",
    },
  },
];
