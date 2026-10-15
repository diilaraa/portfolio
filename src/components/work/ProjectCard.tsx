import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechList } from "@/components/ui/TechList";
import { cvdFilterPlates } from "@/content/cvdFilterPlates";

type CardProps = {
  project: Project;
  locale: Locale;
  statusLabel: string;
  readLabel: string;
  headingLevel?: "h2" | "h3";
};

/**
 * Full-width horizontal project card: text on the left, image on the right.
 * The whole card is the link; the button is visual only.
 */
export function ProjectCard({ project, locale, statusLabel, readLabel, headingLevel = "h3" }: CardProps) {
  const link = href(locale, `/work/${project.slug}`);
  const Heading = headingLevel;
  const hasCover = Boolean(project.cover);
  const contain = project.cover?.fit === "contain";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-[0_1px_2px_rgb(18_18_18/0.04)] transition-[translate,box-shadow] duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgb(18_18_18/0.3)] md:grid md:grid-cols-12">
      <div className={`flex flex-col justify-center p-6 md:p-10 ${hasCover ? "md:col-span-5" : "md:col-span-12"}`}>
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} label={statusLabel} />
          <span className="text-label font-medium text-ink-muted">{project.period[locale]}</span>
        </div>

        <Heading className="mt-5 font-display text-h2 text-ink text-balance">
          <Link href={link} className="after:absolute after:inset-0 after:z-10 after:content-['']">
            {project.title[locale]}
          </Link>
        </Heading>
        <p className="mt-3 max-w-[60ch] text-ink-muted">{project.summary[locale]}</p>

        <TechList items={project.stack} className="mt-6" />

        <div className="pt-8">
          <span
            aria-hidden="true"
            className="inline-flex h-10 items-center gap-2 rounded-full border-[1.5px] border-ink px-4 text-sm font-medium text-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-paper"
          >
            {readLabel}
            <span className="transition-transform duration-200 ease-soft group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </div>

      {hasCover && (
        <div
          className={`relative order-first overflow-hidden border-b border-line md:order-none md:col-span-7 md:border-b-0 md:border-l ${
            contain ? "bg-paper" : "bg-band-gray"
          }`}
        >
          <ProjectCover project={project} locale={locale} fill />
        </div>
      )}
    </div>
  );
}

/**
 * Project image. With `fill`, it covers the whole panel it sits in (card image column);
 * without, it keeps a 16:10 frame (case study header).
 */
export function ProjectCover({ project, locale, fill = false }: { project: Project; locale: Locale; fill?: boolean }) {
  if (!project.cover) return null;

  // The CVD study shows the filters' plate outputs as an uncaptioned mosaic.
  if (project.slug === "cvd-image-filters") {
    return (
      <div className="grid h-full grid-cols-[repeat(5,minmax(0,1fr))] content-center gap-2 p-4 sm:gap-3 sm:p-8" role="img" aria-label={project.cover.alt[locale]}>
        {cvdFilterPlates.map((plate) => (
          <Image
            key={plate.src}
            src={plate.src}
            width={plate.width}
            height={plate.height}
            alt=""
            sizes="(min-width: 768px) 10vw, 18vw"
            className="aspect-square w-full rounded-lg object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.04]"
          />
        ))}
      </div>
    );
  }

  const contain = project.cover.fit === "contain";
  const position = contain ? "object-center" : project.cover.focus === "left" ? "object-left-top" : "object-top";
  const frame = fill ? "aspect-[16/10] md:absolute md:inset-0 md:aspect-auto md:h-full" : contain ? "aspect-[16/10] max-h-[24rem]" : "aspect-[16/10]";

  return (
    <Image
      src={project.cover.src}
      width={project.cover.width}
      height={project.cover.height}
      alt={project.cover.alt[locale]}
      sizes="(min-width: 768px) 58vw, 100vw"
      className={`${frame} w-full ${contain ? "object-contain p-10 md:p-14" : "object-cover"} ${position} transition-transform duration-500 ease-soft group-hover:scale-[1.03]`}
    />
  );
}
