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

/** Two equal cards, then the third laid out horizontally across the full width. */
export function SelectedWork({ locale, projects, copy, status }: Props) {
  return (
    <Section
      id="work"
      tone="sand"
      eyebrow={copy.eyebrow}
      title={copy.title}
      action={{ href: href(locale, "/work"), label: copy.all }}
    >
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {projects.map((project, i) => {
          const wide = i === 2;
          return (
            <Reveal as="article" key={project.slug} delay={i * 80} className={wide ? "md:col-span-2" : ""}>
              <ProjectCard project={project} locale={locale} wide={wide} statusLabel={status[project.status]} readLabel={copy.readCase} />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

type CardProps = { project: Project; locale: Locale; wide: boolean; statusLabel: string; readLabel: string };

function ProjectCard({ project, locale, wide, statusLabel, readLabel }: CardProps) {
  const link = href(locale, `/work/${project.slug}`);
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-[0_1px_2px_rgb(18_18_18/0.04)] transition-[translate,box-shadow] duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgb(18_18_18/0.35)] ${
        wide ? "lg:grid lg:grid-cols-12" : ""
      }`}
    >
      <div className={`relative overflow-hidden border-b border-line bg-paper ${wide ? "lg:col-span-7 lg:border-b-0 lg:border-r" : ""}`}>
        <Cover project={project} locale={locale} wide={wide} />
      </div>

      <div className={`flex flex-1 flex-col p-6 md:p-8 ${wide ? "lg:col-span-5 lg:justify-center" : ""}`}>
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} label={statusLabel} />
          <span className="font-mono text-label text-ink-muted">{project.period[locale]}</span>
        </div>

        <h3 className="mt-5 font-display text-h2 text-ink text-balance">
          <Link href={link} className="after:absolute after:inset-0 after:z-10 after:content-['']">
            {project.title[locale]}
          </Link>
        </h3>
        <p className="mt-3 text-ink-muted">{project.summary[locale]}</p>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Stack">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-md bg-band-sand px-2 py-1 font-mono text-[0.75rem] text-ink">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <span
            aria-hidden="true"
            className="inline-flex h-10 items-center gap-2 rounded-full border-[1.5px] border-ink px-4 text-sm font-medium text-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-paper"
          >
            {readLabel}
            <span className="transition-transform duration-200 ease-soft group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Cover({ project, locale, wide }: { project: Project; locale: Locale; wide: boolean }) {
  if (!project.cover) return null;

  // The CVD study is best shown as the before/after pair rather than a single tiny plate.
  if (project.slug === "cvd-image-filters") {
    return (
      <figure className="flex aspect-[16/10] flex-col items-center justify-center gap-4 p-6">
        <div className="flex w-full items-center justify-center gap-5">
          <Image
            src="/images/work/cvd-image-filters/ishihara-before.webp"
            width={162}
            height={160}
            alt=""
            className="w-[34%] max-w-36 rounded-full"
          />
          <span aria-hidden="true" className="font-mono text-h3 text-ink-muted">→</span>
          <Image
            src={project.cover.src}
            width={project.cover.width}
            height={project.cover.height}
            alt={project.cover.alt[locale]}
            className="w-[34%] max-w-36 rounded-full transition-transform duration-500 ease-soft group-hover:scale-[1.04]"
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
      sizes={wide ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
      className={`w-full object-cover object-top transition-transform duration-500 ease-soft group-hover:scale-[1.03] ${
        wide ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[16/10]"
      }`}
    />
  );
}
