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

/** One full-width horizontal card per project, stacked; the image side alternates. */
export function SelectedWork({ locale, projects, copy, status }: Props) {
  return (
    <Section
      id="work"
      tone="gray"
      eyebrow={copy.eyebrow}
      title={copy.title}
      action={{ href: href(locale, "/work"), label: copy.all }}
    >
      <div className="grid gap-8 md:gap-10">
        {projects.map((project, i) => (
          <Reveal as="article" key={project.slug} delay={i * 80}>
            <ProjectCard
              project={project}
              locale={locale}
              flip={i % 2 === 1}
              statusLabel={status[project.status]}
              readLabel={copy.readCase}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

type CardProps = { project: Project; locale: Locale; flip: boolean; statusLabel: string; readLabel: string };

function ProjectCard({ project, locale, flip, statusLabel, readLabel }: CardProps) {
  const link = href(locale, `/work/${project.slug}`);
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-[0_1px_2px_rgb(18_18_18/0.04)] transition-[translate,box-shadow] duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgb(18_18_18/0.3)] md:grid md:grid-cols-12"
    >
      <div
        className={`relative overflow-hidden border-b border-line bg-band-gray md:col-span-7 md:border-b-0 ${
          flip ? "md:order-2 md:border-l" : "md:border-r"
        }`}
      >
        <Cover project={project} locale={locale} />
      </div>

      <div className={`flex flex-col justify-center p-6 md:col-span-5 md:p-10 ${flip ? "md:order-1" : ""}`}>
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} label={statusLabel} />
          <span className="text-label font-medium text-ink-muted">{project.period[locale]}</span>
        </div>

        <h3 className="mt-5 font-display text-h2 text-ink text-balance">
          <Link href={link} className="after:absolute after:inset-0 after:z-10 after:content-['']">
            {project.title[locale]}
          </Link>
        </h3>
        <p className="mt-3 text-ink-muted">{project.summary[locale]}</p>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Stack">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-md bg-band-gray px-2 py-1 text-[0.75rem] text-ink">
              {tech}
            </li>
          ))}
        </ul>

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
    </div>
  );
}

function Cover({ project, locale }: { project: Project; locale: Locale }) {
  if (!project.cover) return null;

  // The CVD study is best shown as the before/after pair rather than a single tiny plate.
  if (project.slug === "cvd-image-filters") {
    return (
      <figure className="flex aspect-[16/10] h-full flex-col items-center justify-center gap-4 p-6">
        <div className="flex w-full items-center justify-center gap-5">
          <Image
            src="/images/work/cvd-image-filters/ishihara-before.webp"
            width={162}
            height={160}
            alt=""
            className="w-[34%] max-w-36 rounded-full"
          />
          <span aria-hidden="true" className="text-h3 text-ink-muted">→</span>
          <Image
            src={project.cover.src}
            width={project.cover.width}
            height={project.cover.height}
            alt={project.cover.alt[locale]}
            className="w-[34%] max-w-36 rounded-full transition-transform duration-500 ease-soft group-hover:scale-[1.04]"
          />
        </div>
        {project.cover.credit && (
          <figcaption className="text-center text-[0.6875rem] text-ink-muted">{project.cover.credit[locale]}</figcaption>
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
      sizes="(min-width: 768px) 58vw, 100vw"
      className="aspect-[16/10] h-full w-full object-cover object-top transition-transform duration-500 ease-soft group-hover:scale-[1.03]"
    />
  );
}
