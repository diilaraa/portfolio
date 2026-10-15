import Image from "next/image";
import type { ExperienceItem } from "@/content/types";

/** Square tile with the company logo, or a monogram until the logo file is added. */
export function CompanyLogo({ item }: { item: ExperienceItem }) {
  const initials = item.company
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-paper p-2">
      {item.logo ? (
        <Image src={item.logo.src} width={item.logo.width} height={item.logo.height} alt={item.company} className="h-auto max-h-full w-auto max-w-full object-contain" />
      ) : (
        <span aria-hidden="true" className="font-display text-lg text-ink">
          {initials}
        </span>
      )}
    </span>
  );
}
