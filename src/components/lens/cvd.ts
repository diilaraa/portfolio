/**
 * Color vision deficiency simulation matrices (severity 1.0) from
 * Machado, Oliveira & Fernandes (2009), "A Physiologically-based Model for
 * Simulation of Color Vision Deficiency". They operate on linear RGB, which is
 * the default color space of SVG feColorMatrix.
 */
export const lensTypes = ["protanopia", "deuteranopia", "tritanopia", "achromatopsia"] as const;
export type LensType = (typeof lensTypes)[number];
export type LensSetting = LensType | "none";

export const LENS_STORAGE_KEY = "dt-lens";

const rgbMatrices: Record<LensType, number[][]> = {
  protanopia: [
    [0.152286, 1.052583, -0.204868],
    [0.114503, 0.786281, 0.099216],
    [-0.003882, -0.048116, 1.051998],
  ],
  deuteranopia: [
    [0.367322, 0.860646, -0.227968],
    [0.280085, 0.672501, 0.047413],
    [-0.01182, 0.04294, 0.968881],
  ],
  tritanopia: [
    [1.255528, -0.076749, -0.178779],
    [-0.078411, 0.930809, 0.147602],
    [0.004733, 0.691367, 0.3039],
  ],
  achromatopsia: [
    [0.2126, 0.7152, 0.0722],
    [0.2126, 0.7152, 0.0722],
    [0.2126, 0.7152, 0.0722],
  ],
};

/** Expands a 3×3 RGB matrix into the 5×4 form feColorMatrix expects. */
export function toFeColorMatrix(type: LensType): string {
  const rows = rgbMatrices[type].map((row) => [...row, 0, 0].join(" "));
  return [...rows, "0 0 0 1 0"].join(" ");
}

/** Inline script run before first paint: marks JS support (for reveal animations) and applies the stored lens. */
export const lensInitScript = `document.documentElement.classList.add("js");try{var v=localStorage.getItem("${LENS_STORAGE_KEY}");if(v&&${JSON.stringify(
  lensTypes,
)}.indexOf(v)>-1)document.documentElement.dataset.lens=v}catch(e){}`;
