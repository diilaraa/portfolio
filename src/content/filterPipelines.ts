import type { Localized } from "./types";

export type PipelineStep = { src: string; width: number; height: number; label: Localized };
export type FilterPipeline = { id: string; title: Localized; source: Localized; steps: PipelineStep[] };

/**
 * Step images are cropped from the papers' flow diagrams (text removed; captions live here
 * so they can be translated). Symmetry is CC BY 4.0; the CPE figure is used by its author.
 */
export const filterPipelines: FilterPipeline[] = [
  {
    id: "cpe-2025",
    title: {
      tr: "Üç aşamalı filtre",
      en: "Three-stage filter",
      de: "Dreistufiger Filter",
    },
    source: {
      tr: "Akalın ve Top, Concurrency and Computation: Practice and Experience, 2025",
      en: "Akalın & Top, Concurrency and Computation: Practice and Experience, 2025",
      de: "Akalın & Top, Concurrency and Computation: Practice and Experience, 2025",
    },
    steps: [
      { src: "/images/work/cvd-image-filters/cpe-step-0.webp", width: 161, height: 162, label: { tr: "Orijinal", en: "Original", de: "Original" } },
      { src: "/images/work/cvd-image-filters/cpe-step-1.webp", width: 162, height: 162, label: { tr: "Normalizasyon ve daltonizasyon", en: "Normalization and daltonization", de: "Normalisierung und Daltonisierung" } },
      { src: "/images/work/cvd-image-filters/cpe-step-2.webp", width: 169, height: 168, label: { tr: "Kaydırma filtresi ve doygunluk artırma", en: "Shifting filter and saturation boost", de: "Verschiebungsfilter und Sättigung" } },
    ],
  },
  {
    id: "symmetry-2025",
    title: {
      tr: "5. filtre sürümü",
      en: "Filter Version 5",
      de: "Filterversion 5",
    },
    source: {
      tr: "Akalın, Özkan Aksoy, Top ve Kara, Symmetry 2025, Şekil 6 (CC BY 4.0)",
      en: "Akalın, Özkan Aksoy, Top & Kara, Symmetry 2025, Fig. 6 (CC BY 4.0)",
      de: "Akalın, Özkan Aksoy, Top & Kara, Symmetry 2025, Abb. 6 (CC BY 4.0)",
    },
    steps: [
      { src: "/images/work/cvd-image-filters/sym-step-0.webp", width: 148, height: 148, label: { tr: "Orijinal", en: "Original", de: "Original" } },
      { src: "/images/work/cvd-image-filters/sym-step-1.webp", width: 155, height: 154, label: { tr: "Daltonizasyon, ardından normalizasyon", en: "Daltonization, then normalization", de: "Daltonisierung, dann Normalisierung" } },
      { src: "/images/work/cvd-image-filters/sym-step-2.webp", width: 152, height: 154, label: { tr: "BGR → RGB dönüşümü", en: "BGR → RGB conversion", de: "BGR → RGB-Umwandlung" } },
      { src: "/images/work/cvd-image-filters/sym-step-3.webp", width: 155, height: 154, label: { tr: "Doygunluk ve parlaklık artırma", en: "Higher saturation and brightness", de: "Mehr Sättigung und Helligkeit" } },
      { src: "/images/work/cvd-image-filters/sym-step-4.webp", width: 155, height: 154, label: { tr: "HSV uzayında renk tonu kaydırma", en: "Hue shift in HSV space", de: "Farbtonverschiebung im HSV-Raum" } },
      { src: "/images/work/cvd-image-filters/sym-step-5.webp", width: 148, height: 147, label: { tr: "Fourier uzayında Prewitt kenar tespiti", en: "Prewitt edge detection in the Fourier domain", de: "Prewitt-Kantenerkennung im Fourier-Raum" } },
      { src: "/images/work/cvd-image-filters/sym-step-6.webp", width: 147, height: 145, label: { tr: "Kontrast ve parlaklık artırma", en: "Higher contrast and brightness", de: "Mehr Kontrast und Helligkeit" } },
    ],
  },
];
