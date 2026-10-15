import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries/tr";
import type { Project } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";

type Props = {
  locale: Locale;
  projects: Project[];
  copy: Dictionary["work"];
  status: Dictionary["status"];
};

/** Asymmetric editorial grid: wide lead card, narrow research card, then a full-width web project. */
const layout = ["md:col-span-7", "md:col-span-5", "md:col-span-12"];

export function SelectedWork({ locale, projects, copy, status }: Props) {
  return (
    <Section id="work" eyebrow={copy.eyebrow} title={copy.title} action={{ href: href(locale, "/work"), label: copy.all }}>
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-12">
        {projects.map((project, i) => (
          <Reveal as="article" key={project.slug} delay={i * 80} className={layout[i] ?? "md:col-span-6"}>
            <ProjectCard project={project} locale={locale} wide={i === 2} statusLabel={status[project.status]} readLabel={copy.readCase} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

type CardProps = { project: Project; locale: Locale; wide: boolean; statusLabel: string; readLabel: string };

function ProjectCard({ project, locale, wide, statusLabel, readLabel }: CardProps) {
  const link = href(locale, `/work/${project.slug}`);
  return (
    <div className={`group relative ${wide ? "grid gap-8 md:grid-cols-12 md:items-end" : ""}`}>
      <div className={`overflow-hidden rounded-md border border-line bg-paper-raised ${wide ? "md:col-span-8" : ""}`}>
        <Cover project={project} locale={locale} />
      </div>
      <div className={wide ? "md:col-span-4" : "mt-6"}>
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} label={statusLabel} />
          <span className="font-mono text-label text-ink-muted">{project.period[locale]}</span>
        </div>
        <h3 className="mt-4 font-serif text-h2 text-ink text-balance">
          <Link href={link} className="after:absolute after:inset-0 after:content-['']">
            {project.title[locale]}
          </Link>
        </h3>
        <p className="mt-3 max-w-[60ch] text-ink-muted">{project.summary[locale]}</p>
        <p className="mt-4 font-mono text-label text-ink-muted">{project.stack.join(" · ")}</p>
        <span aria-hidden="true" className="mt-5 inline-flex items-center gap-2 text-ink">
          <span className="link-draw group-hover:bg-[length:100%_1px]">{readLabel}</span>
          <span className="transition-transform duration-200 ease-soft group-hover:translate-x-1">→</span>
        </span>
      </div>
    </div>
  );
}

function Cover({ project, locale }: { project: Project; locale: Locale }) {
  if (!project.cover) return null;

  // The CVD study is best shown as the before/after pair rather than a single tiny plate.
  if (project.slug === "cvd-image-filters") {
    return (
      <figure className="flex aspect-[4/3] flex-col justify-center gap-4 p-6">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/images/work/cvd-image-filters/ishihara-before.webp"
            width={162}
            height={160}
            alt=""
            className="w-[40%] max-w-40 rounded-full"
          />
          <span aria-hidden="true" className="font-mono text-ink-muted">→</span>
          <Image
            src={project.cover.src}
            width={project.cover.width}
            height={project.cover.height}
            alt={project.cover.alt[locale]}
            className="w-[40%] max-w-40 rounded-full transition-transform duration-500 ease-soft group-hover:scale-[1.03]"
          />
        </div>
        {project.cover.credit && (
          <figcaption className="text-center font-mono text-[0.6875rem] text-ink-muted">{project.cover.credit[locale]}</figcaption>
        )}
      </figure>
    );
  }

  return (
    <Image
      src={project.cover.src}
      width={project.cover.width}
      height={project.cover.height}
      alt={project.cover.alt[locale]}
      sizes="(min-width: 768px) 60vw, 100vw"
      className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 ease-soft group-hover:scale-[1.02] md:aspect-auto md:max-h-[34rem]"
    />
  );
}
